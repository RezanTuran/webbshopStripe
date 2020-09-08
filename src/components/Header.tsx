import React from 'react';
import { AppBar, Toolbar, Typography,Button, IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { Link } from "react-router-dom";
import { CartConsumer, ContextState } from '../contexts/cartContxt'
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();



    return (
        <AppBar position='static'>
            <Toolbar  >
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography>Shop</Typography>
                {<Link to="/cart">
              <CartConsumer>
                {(contextData: ContextState) => {
                  return (
                    <Button >
                        <ShoppingCartIcon />
                      <span>({contextData.countProductsInCart()})</span>
                    </Button>
                  )
                }}
              </CartConsumer>
            </Link>}
            </Toolbar>
        </AppBar >
    );
};


