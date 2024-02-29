import { ICartItem } from "types/cartItem";
import { IUser } from "types/user";
import { createCustomContext } from "./CustomContext";

interface AppContextData {
  user: IUser | null;
  cart: ICartItem[];
}

export const initialState: AppContextData = {
  user: null,
  cart: [],
};

export const {
  Provider: ContextProvider,
  useContextSelector,
  useContextUpdate,
} = createCustomContext<AppContextData>(initialState);
