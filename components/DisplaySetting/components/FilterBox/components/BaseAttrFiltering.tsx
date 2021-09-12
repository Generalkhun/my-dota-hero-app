import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('lg')]: {
            
            marginLeft:80,
            paddingBottom:40
        },
        [theme.breakpoints.down('lg')]: {
            marginTop:20,
            paddingBottom:40
        },
        [theme.breakpoints.down('lg')]: {
            marginTop:20,
            marginLeft:80,
            paddingBottom:40
        },
        
        width: '50%',
        height: 100,
        borderRadius: 4,
        backgroundColor: 'black'
    },
    attrChooseLabel: {
        color:'white',
    }
}));


interface Props {
    onFilterHeroAttr: (newValue:string) => void
}

const BaseAttrFiltering = ({ onFilterHeroAttr }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState('all');

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
        onFilterHeroAttr(newValue)
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="ALL" value="all" style={{ color: 'white' }} icon={<SupervisedUserCircleIcon style={{ color: 'white' }} />} />
            <BottomNavigationAction label="INT" value="int" style={{ color: 'white'}} icon={<img height='25' src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png'/>} />
            <BottomNavigationAction label="STR" value="str" style={{ color: 'white' }} icon={<img height='25' src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png'/>} />
            <BottomNavigationAction label="AGI" value="agi" style={{ color: 'white' }} icon={<img height='25' src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png'/>} />
        </BottomNavigation>
    );
}


export default BaseAttrFiltering