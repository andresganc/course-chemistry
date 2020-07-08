
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Components Material UI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';

// Iconos Material UI
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonIcon from '@material-ui/icons/Person';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ListIcon from '@material-ui/icons/List';
import InfoIcon from '@material-ui/icons/Info';

// Imagenes
import ImgUsuarios from 'assets/img/user-01.png';
import ImgChampions from 'assets/img/champions.jpg';
import ImgAsercaDe from 'assets/img/info.png';
import ImgGame from 'assets/img/game.png';

// Styles MaterialUI
import { makeStyles } from "@material-ui/core/styles";     // makeStyles solo se puede usar con componentes de funcion
//import { useStyles } from "@material-ui/core/styles";       // useStyles solo se puede usar con componentes de funcion
import { withStyles } from "@material-ui/core/styles";      // withStyles se puede usar con componentes de Funcion & de Clase (Tiene mas sobrecarga)
// Styles
import stylesMainjmp from 'assets/styles/main';

//const useStyles = makeStyles(stylesMainjmp);

const useStyles = makeStyles((theme) => ({

    root_card: {
        maxWidth: 500,
    },
    media_card: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand_card: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen_card: {
        transform: 'rotate(180deg)',
    },
    avatar_card: {
        backgroundColor: red[500],
    },
}));

function BodyMain() {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return (
        <Fragment>
            <Grid container spacing={1}>

                <Grid item xs={12} sm={6} md={3}>
                    <Card className={classes.root_card}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar_card}>
                                    U
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="USUARIOS"
                        />

                        <CardContent>
                            <Link to="/usuarios" >
                                <CardMedia
                                    className={classes.media_card}
                                    image={ImgUsuarios}
                                    title="Usuarios"
                                    width="80%"
                                />
                            </Link>
                        </CardContent>
                        
                        <CardActions disableSpacing>
                            <IconButton href="/usuarios" aria-label="Ir a usuarios">
                                <PersonIcon />
                            </IconButton>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Crea, Edita y Elimina usuarios.
                            </Typography>
                            
                        </CardActions>
                        
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card className={classes.root_card}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar_card}>
                                    J
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="JUGAR"
                        />

                        <CardContent>
                            <Link to="/juego" >
                                <CardMedia
                                    className={classes.media_card}
                                    image={ImgGame}
                                    title="Jugar"
                                    width="80%"
                                />
                            </Link>    
                        </CardContent>

                        <CardActions disableSpacing>
                            <IconButton href="/juego" aria-label="Ir a usuarios">
                                <SportsEsportsIcon />
                            </IconButton>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Juega ya.
                            </Typography>
                        </CardActions>
                        
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card className={classes.root_card}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar_card}>
                                    R
                        </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="RECORDS"
                        />

                        <CardContent>
                            <Link to="/records" >
                                <CardMedia 
                                    className={classes.media_card}
                                    image={ImgChampions}
                                    title="Records"
                                    width="80%"
                                />
                            </Link>
                        </CardContent>

                        <CardActions disableSpacing>
                            <IconButton href="/records" aria-label="Ir a usuarios">
                                <ListIcon />
                            </IconButton>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Tabla de records.
                            </Typography>
                        </CardActions>
                        
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card className={classes.root_card}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar_card}>
                                    A
                        </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="ASERCA DE"
                        />

                        <CardContent>
                            <Link to="/about" >
                                <CardMedia
                                    className={classes.media_card}
                                    image={ImgAsercaDe}
                                    title="Aserca De"
                                    width="80%"
                                />
                            </Link>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton href="/about" aria-label="Ir a usuarios">
                                <InfoIcon />
                            </IconButton>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Creditos.
                            </Typography>
                        </CardActions>
                        
                    </Card>
                </Grid>

            </Grid>

        </Fragment>
    );
}

export default BodyMain;