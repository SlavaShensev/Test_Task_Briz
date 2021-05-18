import {ACTIONS_TYPE} from "./actions";

export type SubscriberType = {
    id: string
    name: string
    number: string
}
export type DefaultStateType = Array<SubscriberType>

const initialState: DefaultStateType | null = [];

export const usersReducer = (state = initialState,
                             action: any): DefaultStateType => {
        switch (action.type) {
            case ACTIONS_TYPE.GET_ALL_SUBSCRIBERS: {
                return state.concat(action.data)
            }
            case ACTIONS_TYPE.CREATE_SUBSCRIBER: {
                return [
                    ...state,
                    action.subscriber.data
                ]
            }
            case ACTIONS_TYPE.CHANGE_SUBSCRIBER: {
                const subscriber = state.find(tl => tl.id === action.updateSubscriber.data.id);
                if (subscriber) {
                    subscriber.name = action.updateSubscriber.data.name;
                    subscriber.number = action.updateSubscriber.data.number
                }
                return [...state]
            }
            case ACTIONS_TYPE.DELETE_SUBSCRIBER : {
                return state.filter(subscriber => subscriber.id !== action.id.id)
            }
            default:
                return state
        }
    }
;

