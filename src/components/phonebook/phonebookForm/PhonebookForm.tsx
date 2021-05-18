import React from "react";
import {useDispatch} from "react-redux";
import {createSubscriber} from "../../../state/actions";
import {useFormik} from "formik";
import phonebook from "../phonebookForm/phonebookForm.module.css"
import Button from "@material-ui/core/Button";
import {TextField} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import {FormControl} from "@material-ui/core";

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
    /* onSubmit={formik.handleSubmit} */
    return <div className={phonebook.phonebookForm}>

        <FormControl>
            <Grid container
                  spacing={1}
                  style={{paddingBottom: "20px"}}
            >
                <TextField variant="outlined"
                           style={{marginRight: "10px"}}
                           label="Name"
                />
                <TextField variant="outlined"
                           label="Number"
                />
            </Grid>

            <Button type="submit"
                    variant="contained"
                    color="primary"
                    className={phonebook.buttonSubmit}
            >
                Add phonebook subscriber
            </Button>

            {/*<input placeholder="Ruby Taylor"*/}
            {/*    id="name"*/}
            {/*    name="name"*/}
            {/*    type="text"*/}
            {/*    onChange={formik.handleChange}*/}
            {/*    value={formik.values.name}*/}
            {/*/>*/}
            {/*{formik.errors.name ? <div style={{color: 'red'}}>{formik.errors.name}</div> : null}*/}

            {/*<div>*/}
            {/*    <TextField variant="outlined"*/}
            {/*               label="Number"*/}
            {/*    />*/}
            {/*    <input placeholder="+X-XXX-XXX-XXXX"*/}
            {/*        id="number"*/}
            {/*        name="number"*/}
            {/*        type="text"*/}
            {/*        onChange={formik.handleChange}*/}
            {/*        value={formik.values.number}*/}
            {/*    />*/}
            {/*    {formik.errors.number ?*/}
            {/*        <div style={{color: 'red'}}>{formik.errors.number}</div> : null}*/}
            {/*</div>*/}
        </FormControl>
    </div>
}