import React from 'react'
import NavBar from './NavBar'
import styles from './Layouts.module.css'
import { Grid } from '@material-ui/core'

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <NavBar />
            <Grid container className={styles.bodyWrapper}>
                <Grid item sm={1} lg={2}></Grid>
                <Grid item xs={10} sm={10} lg={8} className={styles.contentWrapper}>
                    {children}
                </Grid>
                <Grid item sm={1} lg={2}></Grid>


            </Grid>
        </div>
    )
}

export default Layout
