import React from "react";
import {useDispatch} from "react-redux";
import {createSubscriber} from "../../../state/actions";
import {useFormik} from "formik";

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
            } else if (values.number.length >= 15) {
                errors.number = 'Must be 15 characters or less'
            } else if (values.name.length < 2) {
                errors.number = 'Must be 2 characters or more'
            }

            return errors;
        },

    });

    return <div>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    placeholder="Ruby Taylor"
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.errors.name ? <div style={{color: 'red'}}>{formik.errors.name}</div> : null}
            </div>

            <div>
                <label htmlFor="phone">Phone</label>
                <input
                    placeholder="+X-XXX-XXX-XXXX"
                    pattern="\w\d\w \d\w\d"
                    id="number"
                    name="number"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.number}
                />
                {formik.errors.number ?
                    <div style={{color: 'red'}}>{formik.errors.number}</div> : null}
            </div>

            <button type="submit"> Add phonebook subscriber</button>

        </form>
    </div>
}