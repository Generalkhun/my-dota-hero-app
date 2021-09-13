
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FavoriteHerosContext } from '../../../contextProviders/FavoriteHerosProvider';
import { includes, get } from 'lodash';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400
    },
    media: {
        height: 200,
        fontFamily: 'Cinzel'
    },
    heroCardActionAdd2FavButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))

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
    const favHerosContextValue = useContext(FavoriteHerosContext)

    const onAddFavHeroHandler = (name: string) => {
        favHerosContextValue.addFavheros(name)
    }
    const isAlreadyFavOne = includes(get(favHerosContextValue, 'currentFavHeros.favHerosList'), heroCardMediaData.name)
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={heroCardMediaData.name !== 'Dawnbreaker' ? `http://cdn.dota2.com/${heroCardMediaData.img}` : 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dawnbreaker/dawnbreaker_sfm.jpg'}
                />
                <CardContent>
                    <Typography style={{ fontFamily: 'Cinzel' }} gutterBottom variant="h4" component="h2">
                        <img height={30} width={30} src={heroCardMediaData.name !== 'Dawnbreaker' ?`http://cdn.dota2.com/${heroCardMediaData.icon}`:'data:image/jpeg;base64,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'} />
                        {' ' + heroCardMediaData.name}
                    </Typography>
                    <Typography style={{ fontFamily: 'Cinzel' }} variant="body2" color="textSecondary" component="b">
                        Primary Attribute: {heroCardMediaData.primary_attr}
                    </Typography>
                    <Divider />
                    <Typography style={{ fontFamily: 'Cinzel' }} variant="body2" color="textSecondary" component="b">
                        Attack Type: {heroCardMediaData.attack_type}
                    </Typography>
                    <Divider />
                    <Typography style={{ fontFamily: 'Cinzel' }} variant="body2" color="textSecondary" component="b">
                        Roles: {heroCardMediaData.roles.map(role => " " + role)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.heroCardActionAdd2FavButton}>
                <Button onClick={() => onAddFavHeroHandler(heroCardMediaData.name)} size="large" color={isAlreadyFavOne ? "primary" : "secondary"} startIcon={<FavoriteIcon />}>
                    {isAlreadyFavOne ? 'ALREADY IN MY FAVORITE' : 'ADD TO MY FAVORITE HEROS'}
                </Button>
            </CardActions>
        </Card>
    );
}

export default HeroCardMedia
