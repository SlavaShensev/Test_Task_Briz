import React from "react";
import {useDispatch} from "react-redux";
import {createSubscriber} from "../../../state/actions";
import {useFormik} from "formik";
import phonebook from "../phonebookForm/phonebookForm.module.css"
import Button from "@material-ui/core/Button";
import {TextField} from "@material-ui/core";

type FormikErrorType = {
    name?: string
    number?: string
}
export const PhonebookForm = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: '',
            number: '',
        },
        onSubmit: (values, onSubmitProps) => {
            dispatch(createSubscriber(values.name, values.number));
            onSubmitProps.resetForm()
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.name) {
                errors.name = 'Required'
            } else if (values.name.length > 20) {
                errors.name = 'Must be 20 characters or less'
            } else if (values.name.length < 2) {
                errors.name = 'Must be 2 characters or more'
            }
            if (!values.number) {
                errors.number = 'Required'
            } else if (values.number.length > 15) {
                errors.number = 'Must be 15 characters or less'
            } else if (values.name.length < 2) {
                errors.number = 'Must be 2 characters or more'
            }
            return errors;
        },
    });
    return <div className={phonebook.phonebookForm}>
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
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
                fullWidth
                id="number"
                name="number"
                label="Number"
                type="Text"
                value={formik.values.number}
                onChange={formik.handleChange}
                error={formik.touched.number && Boolean(formik.errors.number)}
                helperText={formik.touched.number && formik.errors.number}
            />
            <Button color="primary" variant="contained" fullWidth type="submit"
                    style={{marginTop: "10px"}}
            >
               Add person
            </Button>
        </form>
    </div>
};