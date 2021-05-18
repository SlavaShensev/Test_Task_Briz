import React from "react";
import {useState} from "react";
import {useFormik} from "formik";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

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
                        <TextField
                            style={{marginRight: '5px'}}
                            id="name"
                            name="name"
                            label="Name"
                            type="Text"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        <TextField
                            style={{marginRight: '5px'}}
                            id="number"
                            name="number"
                            label="Number"
                            type="Text"
                            value={formik.values.number}
                            onChange={formik.handleChange}
                            error={formik.touched.number && Boolean(formik.errors.number)}
                            helperText={formik.touched.number && formik.errors.number}
                        />
                        <Button color="primary" variant="contained"  type="submit"
                                style={{marginTop: "10px"}}
                        >
                           Apply change
                        </Button>
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