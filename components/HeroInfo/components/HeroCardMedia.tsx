
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
    },
    media: {
        height: 200,
        fontFamily:'Cinzel'
    },
});

interface heroCardMediaDataType {
    name: string
    icon: string
    img: string
    attack_type: string
    roles: string[]
    primary_attr: string
}

interface Props {
    heroCardMediaData: heroCardMediaDataType
}
const HeroCardMedia = ({ heroCardMediaData }: Props) => {
    const classes = useStyles();
    console.log('heroCardMediaData', heroCardMediaData);

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`http://cdn.dota2.com/${heroCardMediaData.img}`}
                />
                <CardContent>
                    <Typography style={{fontFamily:'Cinzel'}} gutterBottom variant="h4" component="h2">
                        <img src={`http://cdn.dota2.com/${heroCardMediaData.icon}`} />
                        {' ' + heroCardMediaData.name}
                    </Typography>
                    <Typography style={{fontFamily:'Cinzel'}} variant="body2" color="textSecondary" component="b">
                        Primary Attribute: {heroCardMediaData.primary_attr}
                    </Typography>
                    <Divider />
                    <Typography style={{fontFamily:'Cinzel'}} variant="body2" color="textSecondary" component="b">
                        Attack Type: {heroCardMediaData.attack_type}
                    </Typography>
                    <Divider />
                    <Typography style={{fontFamily:'Cinzel'}} variant="body2" color="textSecondary" component="b">
                        Roles: {heroCardMediaData.roles.map(role => " " + role)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

export default HeroCardMedia
