import React from "react";
import phonebook from "../phonebookTitle/phonebookTitle.module.css"
import {Typography} from "@material-ui/core";

type PhonebookTitlePropsType = {
    title: string
}

export const PhonebookTitle = (props: PhonebookTitlePropsType) => {

    return <div className={phonebook.PhonebookTitle} >

        <Typography variant="h3" gutterBottom>
            {props.title}
        </Typography>
    </div>
};