import { CartItem } from "../types/cartItem";
import { User } from "../types/user";
import { createOptimizedContext } from "./OptimizedContext";

interface AppContextData {
    user: User | null;
    cart: CartItem[];
}

const initialState: AppContextData = {
    user: null,
    cart: [],
};

export const {
    Provider: ContextProvider,
    useContextSelector,
    useContextUpdate,
} = createOptimizedContext<AppContextData>(initialState);
