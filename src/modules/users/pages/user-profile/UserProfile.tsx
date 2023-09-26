import React from "react";
import {MainNavbar} from "../../../layouts/pages/navbar/MainNavbar";
import {LayoutHeading} from "../../../layouts/components/layout-heading/LayoutHeading";

export const UserProfile: React.FC = () => {
    return (
        <>
            <MainNavbar/>
            <LayoutHeading icon={"bi-person-fill"} heading={'Profile'}/>
        </>
    );
};