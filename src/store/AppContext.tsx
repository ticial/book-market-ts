import { User } from "../types/user";
import { createOptimizedContext } from "./OptimizedContext";

const initialState: AppContextData = {
    user: null,
};

interface AppContextData {
    user: User | null;
}

export const {
    Provider: ContextProvider,
    useContextSelector,
    useContextUpdate,
} = createOptimizedContext<AppContextData>(initialState);
