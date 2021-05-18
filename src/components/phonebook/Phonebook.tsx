import React from "react";
import {SubscriberType} from "../../state/users-reducer";
import {PhonebookForm} from "./phonebookForm/PhonebookForm";
import {PhonebookSubscribers} from "./phonebookSubscribers/PhonebookSubscribers";
import {PhonebookTitle} from "./phonebookTitle/PhonebookTitle";


type PhonebookTablePropsType = {
    title: string
    subscribers: Array<SubscriberType>
}

export const Phonebook = (props: PhonebookTablePropsType) => {

    const title = props.title;
    const subscribers = props.subscribers;

    return <div>

        <PhonebookTitle title={title}/>

        <PhonebookForm/>

        <PhonebookSubscribers subscribers={subscribers}/>

    </div>
};