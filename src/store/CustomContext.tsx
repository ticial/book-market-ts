import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

class MiniStore<T> {
  private subscriptions: Set<() => void> = new Set<() => void>();
  private state: T;
  constructor(initialState: T) {
    this.state = initialState;
  }

  getState = () => {
    return this.state;
  };

  update = (partialNewState: Partial<T>) => {
    this.state = { ...this.state, ...partialNewState };

    this.subscriptions.forEach((cb) => {
      cb();
    });
  };

  subscribe = (cb: () => void) => {
    this.subscriptions.add(cb);

    return () => {
      this.subscriptions.delete(cb);
    };
  };
}

export function createCustomContext<T>(initialState: T) {
  const Context = createContext<MiniStore<T> | null>(null);

  const Provider = ({ children }: { children: ReactNode }) => {
    const store = useMemo(() => new MiniStore(initialState), []);

    return <Context.Provider value={store}>{children}</Context.Provider>;
  };

  const useStore = () => {
    const store = useContext(Context);
    if (!store) {
      throw new Error("Can not use `useStore` outside of the `Provider`");
    }
    return store;
  };

  const useContextSelector = <Result extends any>(
    selector: (state: T) => Result
  ): Result => {
    const store = useStore();
    const [state, setState] = useState(() => selector(store.getState()));
    const selectorRef = useRef(selector);
    const stateRef = useRef(state);

    useLayoutEffect(() => {
      selectorRef.current = selector;
      stateRef.current = state;
    });

    useEffect(() => {
      return store.subscribe(() => {
        const state = selectorRef.current(store.getState());

        if (stateRef.current === state) {
          return;
        }

        setState(state);
      });
    }, [store]);

    return state;
  };

  const useContextUpdate = () => {
    const store = useStore();

    return store.update;
  };

  return { Provider, useContextSelector, useContextUpdate };
}
