import React, { useEffect } from "react";
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { reducer, actions } from "./redux";
import MdEditor from "./MdEditor"

const store = configureStore({
    reducer: reducer
});

export default ({
    markdown,
    usergroups,
    editable,
    readable_group_id,
    editable_group_id,
    is_draft,
    is_public
}) => {
    useEffect(() => {
        store.dispatch(
            actions.setContent({
                markdown,
                usergroups,
                is_editable: editable,
                readable_group_id,
                editable_group_id,
                is_draft,
                is_public
            })
        );
    }, [
        markdown,
        usergroups,
        editable,
        readable_group_id,
        editable_group_id,
        is_draft,
        is_public
    ]);
    return (
        <Provider store={store}>
            <MdEditor />
        </Provider>
    );
};