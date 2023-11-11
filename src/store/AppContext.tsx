import { CartItem } from "../types/cartItem";
import { User } from "../types/user";
import { createCustomContext } from "./CustomContext";

interface AppContextData {
    user: User | null;
    cart: CartItem[];
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
