import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            height: 20
        },
        formControl: {
            margin: theme.spacing(3),
        },
        roleName: {
            color: 'white'
        }
    }),
);


interface Props {
    onFilterHeroRole: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const RolesFiltering = (props: Props) => {
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
    };

    const { Carry, Escape, Nuker, Initiator, Durable, Disabler, Support, Pusher } = state;
    
    return (
        <Grid container className={classes.root}>
            <Grid item lg={3}>
                <FormControlLabel
                    style={{ color: 'white', height: 10, paddingBottom: 10 }}
                    control={<Checkbox checked={Carry} onChange={handleChange} name="Carry" />}
                    label="Carry"

                />
                <FormControlLabel
                    style={{ color: 'white', height: 10 }}
                    control={<Checkbox checked={Escape} onChange={handleChange} name="Escape" />}
                    label="Escape"
                />
            </Grid>
            <Grid item lg={3}>
                <FormControlLabel
                    style={{ color: 'white', height: 10, paddingBottom: 10 }}
                    control={<Checkbox checked={Nuker} onChange={handleChange} name="Nuker" />}
                    label="Nuker"

                />
                <FormControlLabel
                    style={{ color: 'white', height: 10 }}
                    control={<Checkbox checked={Initiator} onChange={handleChange} name="Initiator" />}
                    label="Initiator"
                />
            </Grid>
            <Grid item lg={3}>
                <FormControlLabel
                    style={{ color: 'white', height: 10, paddingBottom: 10 }}
                    control={<Checkbox checked={Durable} onChange={handleChange} name="Durable" />}
                    label="Durable"

                />
                <FormControlLabel
                    style={{ color: 'white', height: 10 }}
                    control={<Checkbox checked={Disabler} onChange={handleChange} name="Disabler" />}
                    label="Disabler"
                />
            </Grid>
            <Grid item lg={3}>
                <FormControlLabel
                    style={{ color: 'white', height: 10, paddingBottom: 10 }}
                    control={<Checkbox checked={Support} onChange={handleChange} name="Support" />}
                    label="Support"

                />
                <FormControlLabel
                    style={{ color: 'white', height: 10 }}
                    control={<Checkbox checked={Pusher} onChange={handleChange} name="Pusher" />}
                    label="Pusher"
                />
            </Grid>

            {/* <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                    <FormControlLabel
                        style={{ color: 'white' }}
                        control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                        label="Gilad Gray"
                    />
                    <FormControlLabel
                        style={{ color: 'white' }}
                        control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
                        label="Jason Killian"
                    />
                    <FormControlLabel
                        style={{ color: 'white' }}
                        control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
                        label="Antoine Llorca"
                    />
                </FormGroup>
                <FormHelperText>Be careful</FormHelperText>
            </FormControl> */}

        </Grid>
    );
}

export default RolesFiltering
