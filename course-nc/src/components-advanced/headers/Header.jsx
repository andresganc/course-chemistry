
import React from 'react';

// Componentes Material UI
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

// Iconos Material UI
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CloseIcon from '@material-ui/icons/Close';
import LinkOffIcon from '@material-ui/icons/LinkOff';

// Image
import FondoHeader from '../../assets/img/fondo-header.jpg';

// Componentes NC
import NavNC from '../menus/Nav';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: '100%',
        },
        media: {
            height: 0,
            paddingTop: '20%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);


function Header() {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <NavNC />


            <CardMedia
                className={classes.media}
                image={FondoHeader}
                title="Paella dish"
            />
            <CardContent>
                {/* 
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
                */}
            </CardContent>

            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        M
            </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Operaciones Matematicas"
                subheader="Suma - Resta - Multiplicacion - Division"
            />

            <CardActions disableSpacing>
                <h4> Operaciones Matematicas </h4>

                <IconButton aria-label="add to favorites">
                    <AddIcon />
                </IconButton>

                <IconButton aria-label="share">
                    <RemoveIcon />
                </IconButton>

                <IconButton aria-label="share">
                    <CloseIcon />
                </IconButton>

                <IconButton aria-label="share">
                    <LinkOffIcon />
                </IconButton>

                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Detalles:</Typography>
                    <Typography paragraph>
                        Suma : El formulario suma dos numeros.
          </Typography>
                    <Typography paragraph>
                        Resta : El formulario resta dos numeros.
          </Typography>
                    <Typography paragraph>
                        Multiplicacion : El formulario multiplica dos numeros.
          </Typography>
                    <Typography>
                        Division : El formulario divide dos numeros.
          </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default Header;