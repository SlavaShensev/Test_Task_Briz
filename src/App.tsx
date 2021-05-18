import React, {useEffect} from "react";
import './App.css';
import {Phonebook} from "./components/phonebook/Phonebook";
import {useDispatch, useSelector} from "react-redux";
import {getSubscribers} from "./state/actions";
import {IGlobalState} from "./state/store";
import {DefaultStateType} from "./state/users-reducer";
import {selectAllSubscribers} from "./state/selectors";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSubscribers)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps


    const subscribers = useSelector<IGlobalState, DefaultStateType>(selectAllSubscribers);


    return (
        <div className={'App'}>

            <Phonebook

                title={'Phonebook'}
                subscribers={subscribers}

            />

        </div>
    )
}

export default App;
