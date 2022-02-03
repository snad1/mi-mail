import React from "react";
import Header from "../components/Header";
import {Grid} from "@material-ui/core";
import LeftNav from "../components/LeftNav";

function DashboardLayout(props) {
    const {children} = props
    return <Grid container>
        <Grid item md={12}>
            <Header/>
        </Grid>
        <Grid container spacing={2}>
            <Grid item md={2}>
                <LeftNav/>
            </Grid>
            <Grid item md={10}>
                {children}
            </Grid>
        </Grid>
    </Grid>
}

export default DashboardLayout