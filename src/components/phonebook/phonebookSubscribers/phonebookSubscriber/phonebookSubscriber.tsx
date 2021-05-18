import React from "react";
import {useState} from "react";
import {useFormik} from "formik";

type PhonebookSubscriberPropsType = {
    id: string
    name: string
    number: string
    changeSubscriber: (id: string, newName: string, newNumber: string) => void
    deleteSubscriber: (id: string) => void
}

export const PhonebookSubscriber = (props: PhonebookSubscriberPropsType) => {
    const {name, number, changeSubscriber, id, deleteSubscriber} = props;
    return <>
        <EditableSpan id={id}
                      name={name}
                      number={number}
                      onChange={changeSubscriber}
                      onDelete={deleteSubscriber}
        />
    </>
};

type EditableSpanPropsType = {
    id: string
    name: string
    number: string
    onChange: (id: string, newName: string, newNumber: string) => void
    onDelete: (id: string) => void
}
const EditableSpan = (props: EditableSpanPropsType) => {
    let [editMode, setEditMode] = useState(false);
    const activateEditMode = () => {
        setEditMode(true);
    };
    const activateViewMode = () => {
        setEditMode(false);
    };
    const deleteSubscriber = () => {
        props.onDelete(props.id)
    };
    const formik = useFormik({
        initialValues: {
            id: props.id,
            name: props.name,
            number: props.number,
        },
        onSubmit: (values, onSubmitProps) => {
            const {id, name, number} = values;
            activateViewMode();
            props.onChange(id, name, number)
        },
    });
    return <div>
        {
            editMode
                ? <>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label>Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                        </div>
                        <div>
                            <label>Number</label>
                            <input
                                id="number"
                                name="number"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.number}
                            />
                        </div>

                        <button type="submit"> Apply</button>
                    </form>
                </>
                : <>
                    <span> {`${props.name} ${props.number}`} </span>
                    <button onClick={activateEditMode}
                    > change
                    </button>
                    <button onClick={deleteSubscriber}
                    > delete
                    </button>
                </>

        }
    </div>
};