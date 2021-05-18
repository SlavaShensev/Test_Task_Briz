import {IGlobalState} from "./store";

interface IRootState extends IGlobalState {
}

export const selectAllSubscribers = (state: IRootState) => state.subscribers


