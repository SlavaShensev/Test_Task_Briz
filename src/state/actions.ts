import {Dispatch} from "redux";
import {phonebookAPI} from "../api/phonebookAPI";
import {DefaultStateType, SubscriberType} from "./users-reducer";

export enum ACTIONS_TYPE {
    GET_ALL_SUBSCRIBERS = 'GetSubscribers',
    CREATE_SUBSCRIBER = 'CreateSubscriber',
    CHANGE_SUBSCRIBER = 'ChangeSubscriber',
    DELETE_SUBSCRIBER = 'DeleteSubscriber',
}

// export type UsersReducerType = GetSubscriberACType
//     | CreateSubscriberACType
//     | UpdateSubscriberACType
//     | DeleteSubscriberACType


export const getSubscriberAC = (data: DefaultStateType) => {
    return {
        type: ACTIONS_TYPE.GET_ALL_SUBSCRIBERS, data
    }
};

export const getSubscribers = (dispatch: Dispatch) => {
    phonebookAPI.getAll()
        .then((res) => {
            dispatch(getSubscriberAC(res))
        })
};


type CreateSubscriberACType = ReturnType<typeof createSubscriberAC>

export const createSubscriberAC = (subscriber: SubscriberType) => {
    return {
        type: ACTIONS_TYPE.CREATE_SUBSCRIBER, subscriber
    } as const
};

export const createSubscriber = (name: string, number: string) => (dispatch: Dispatch) => {
    phonebookAPI.create(name, number)
        .then((res) => {
            dispatch(createSubscriberAC(res))
        })
};

export type UpdateSubscriberACType = ReturnType<typeof updateSubscriberAC>

export const updateSubscriberAC = (updateSubscriber: SubscriberType) => {
    return {
        type: ACTIONS_TYPE.CHANGE_SUBSCRIBER, updateSubscriber
    } as const
};

export const updateSubscriberThunk = (id: string, name: string, number: string) =>
    (dispatch: Dispatch<UpdateSubscriberACType>) => {
        phonebookAPI.update(id, name, number)
            .then((res) => {
                dispatch(updateSubscriberAC(res))
            })
    };

export type DeleteSubscriberACType = ReturnType<typeof deleteSubscriberAC>

export const deleteSubscriberAC = (id: string) => {
    return {
        type: ACTIONS_TYPE.DELETE_SUBSCRIBER, id
    } as const
};

export const deleteSubscriberThunk = (id: string) =>
    (dispatch: Dispatch<DeleteSubscriberACType>) => {
        phonebookAPI.delete(id)
            .then((res) => {
                dispatch(deleteSubscriberAC(res))
            })
    };