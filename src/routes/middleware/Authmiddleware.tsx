import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

const Authmiddleware = ({
    path,
    component: Component,
}) => (
    <Route
        path={path}
        render={props => {
            if (!localStorage.getItem("authUser")) {
                return (
                    <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
                );
            }

            return (
                <Component {...props} />
            );
        }}
    />
);

export default withRouter(Authmiddleware);