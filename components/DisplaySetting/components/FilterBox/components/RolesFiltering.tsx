import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Grid } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            height: 20,
            [theme.breakpoints.up('lg')]: {
                marginLeft: 40
            },
        },
        formControl: {
            margin: theme.spacing(3),
        },
        roleName: {
            color: 'white'
        },
        formCheckBoxWrapper: {
            paddingBottom: 20,
        }
    }),
);


interface Props {
    onFilterHeroRole: (rolesTick: Object) => void
}
const RolesFiltering = ({ onFilterHeroRole }: Props) => {
    const classes = useStyles();

    const [state, setState] = React.useState({
        Carry: true,
        Escape: true,
        Nuker: true,
        Initiator: true,
        Durable: true,
        Disabler: true,
        Support: true,
        Pusher: true,

    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        onFilterHeroRole({ ...state, [event.target.name]: event.target.checked })
    };

    const { Carry, Escape, Nuker, Initiator, Durable, Disabler, Support, Pusher } = state;

    return (
        <Grid container className={classes.root}>
            <Grid item lg={12}>
                <Grid container>
                    <Grid item xs={3} className={classes.formCheckBoxWrapper}>
                        <FormControlLabel
                            style={{ color: 'white', height: 10, paddingRight: 20 }}
                            control={<Checkbox checked={Carry} onChange={handleChange} name="Carry" />}
                            label="Carry"

                        />
                    </Grid>
                    <Grid item xs={3} className={classes.formCheckBoxWrapper}>
                        <FormControlLabel
                            style={{ color: 'white', height: 10, paddingRight: 20 }}
                            control={<Checkbox checked={Escape} onChange={handleChange} name="Escape" />}
                            label="Escape"
                        />
                    </Grid>
                    <Grid item xs={3} className={classes.formCheckBoxWrapper}>
                        <FormControlLabel
                            style={{ color: 'white', height: 10, paddingRight: 20 }}
                            control={<Checkbox checked={Nuker} onChange={handleChange} name="Nuker" />}
                            label="Nuker"

                        />
                    </Grid>
                    <Grid item xs={3} className={classes.formCheckBoxWrapper}>
                        <FormControlLabel
                            style={{ color: 'white', height: 10, paddingRight: 20 }}
                            control={<Checkbox checked={Initiator} onChange={handleChange} name="Initiator" />}
                            label="Initiator"
                        />
                    </Grid>
                    <Grid item xs={3} className={classes.formCheckBoxWrapper}>
                        <FormControlLabel
                            style={{ color: 'white', height: 10, paddingRight: 20 }}
                            control={<Checkbox checked={Durable} onChange={handleChange} name="Durable" />}
                            label="Durable"

                        />
                    </Grid>
                    <Grid item xs={3}>
                        <FormControlLabel
                            style={{ color: 'white', height: 10, paddingRight: 20 }}
                            control={<Checkbox checked={Disabler} onChange={handleChange} name="Disabler" />}
                            label="Disabler"
                        />

                    </Grid>
                    <Grid item xs={3} className={classes.formCheckBoxWrapper}>
                        <FormControlLabel
                            style={{ color: 'white', height: 10, paddingRight: 20 }}
                            control={<Checkbox checked={Support} onChange={handleChange} name="Support" />}
                            label="Support"

                        />
                    </Grid>
                    <Grid item xs={3} className={classes.formCheckBoxWrapper}>
                        <FormControlLabel
                            style={{ color: 'white', height: 10 }}
                            control={<Checkbox checked={Pusher} onChange={handleChange} name="Pusher" />}
                            label="Pusher"
                        />
                    </Grid>
                </Grid>

            </Grid>
            {/* <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <FilterListIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem> */}
            {/* <Collapse in={open} timeout="auto" unmountOnExit>
                <Grid item lg={12}>
                    <Grid container>
                        <Grid item xs={3} className={classes.formCheckBoxWrapper}>
                            <FormControlLabel
                                style={{ color: 'white', height: 10, paddingRight: 20 }}
                                control={<Checkbox checked={Carry} onChange={handleChange} name="Carry" />}
                                label="Carry"

                            />
                        </Grid>
                        <Grid item xs={3} className={classes.formCheckBoxWrapper}>
                            <FormControlLabel
                                style={{ color: 'white', height: 10, paddingRight: 20 }}
                                control={<Checkbox checked={Escape} onChange={handleChange} name="Escape" />}
                                label="Escape"
                            />
                        </Grid>
                        <Grid item xs={3} className={classes.formCheckBoxWrapper}>
                            <FormControlLabel
                                style={{ color: 'white', height: 10, paddingRight: 20 }}
                                control={<Checkbox checked={Nuker} onChange={handleChange} name="Nuker" />}
                                label="Nuker"

                            />
                        </Grid>
                        <Grid item xs={3} className={classes.formCheckBoxWrapper}>
                            <FormControlLabel
                                style={{ color: 'white', height: 10, paddingRight: 20 }}
                                control={<Checkbox checked={Initiator} onChange={handleChange} name="Initiator" />}
                                label="Initiator"
                            />
                        </Grid>
                        <Grid item xs={3} className={classes.formCheckBoxWrapper}>
                            <FormControlLabel
                                style={{ color: 'white', height: 10, paddingRight: 20 }}
                                control={<Checkbox checked={Durable} onChange={handleChange} name="Durable" />}
                                label="Durable"

                            />
                        </Grid>
                        <Grid item xs={3}>
                            <FormControlLabel
                                style={{ color: 'white', height: 10, paddingRight: 20 }}
                                control={<Checkbox checked={Disabler} onChange={handleChange} name="Disabler" />}
                                label="Disabler"
                            />

                        </Grid>
                        <Grid item xs={3} className={classes.formCheckBoxWrapper}>
                            <FormControlLabel
                                style={{ color: 'white', height: 10, paddingRight: 20 }}
                                control={<Checkbox checked={Support} onChange={handleChange} name="Support" />}
                                label="Support"

                            />
                        </Grid>
                        <Grid item xs={3} className={classes.formCheckBoxWrapper}>
                            <FormControlLabel
                                style={{ color: 'white', height: 10 }}
                                control={<Checkbox checked={Pusher} onChange={handleChange} name="Pusher" />}
                                label="Pusher"
                            />
                        </Grid>
                    </Grid>

                </Grid>
            </Collapse> */}



        </Grid>
    );
}

export default RolesFiltering
