
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 455,
    },
    media: {
        height: 240
    },
});

interface heroCardMediaDataType {
    name: string
    icon: string
    img: string
    attack_type: string
    roles: string[]
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
                    title="Hero main information"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                        <img src={`http://cdn.dota2.com/${heroCardMediaData.icon}`}/>
                        {' ' + heroCardMediaData.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
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
