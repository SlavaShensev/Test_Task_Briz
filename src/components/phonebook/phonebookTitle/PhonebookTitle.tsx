import React from "react";

type PhonebookTitlePropsType = {
    title: string
}

export const PhonebookTitle = (props: PhonebookTitlePropsType) => {

    return <div>
        <h2>
            {props.title}
        </h2>
    </div>
};