import React from 'react'
import NavBar from './NavBar'
import styles from './Layouts.module.css'
import { Grid } from '@material-ui/core'

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <NavBar />
            <Grid container className={styles.bodyWrapper}>
                <Grid item  md={1}></Grid>
                <Grid item xs={12}  md={10} className={styles.contentWrapper}>
                    {children}
                </Grid>
                <Grid item md={1}></Grid>
            </Grid>
        </div>
    )
}

export default Layout
