import React from "react";
import {PhonebookSubscriber} from "./phonebookSubscriber/phonebookSubscriber";
import {SubscriberType} from "../../../state/users-reducer";
import {useDispatch} from "react-redux";
import {deleteSubscriberThunk, updateSubscriberThunk} from "../../../state/actions";

type PhonebookSubscribersPropsType = {
    subscribers: Array<SubscriberType>
}

export const PhonebookSubscribers = (props: PhonebookSubscribersPropsType) => {
    const dispatch = useDispatch();
    const {subscribers} = props;

    const deleteSubscriber = (id: string) => {
        dispatch(deleteSubscriberThunk(id))
    };

    const changeSubscriber = (id: string, newName: string, newNumber: string) => {
        dispatch(updateSubscriberThunk(id, newName, newNumber))
    };

    return <>
        {
            subscribers.map((subscriber) => {
                return <PhonebookSubscriber
                    key={subscriber.id}
                    id={subscriber.id}
                    name={subscriber.name}
                    number={subscriber.number}
                    changeSubscriber={changeSubscriber}
                    deleteSubscriber={deleteSubscriber}
                />
            })
        }
    </>
}