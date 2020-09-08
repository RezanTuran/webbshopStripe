/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {CSSProperties} from 'react';
import { AppBar, Toolbar, Button, IconButton } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Container, Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import StoreIcon from '@material-ui/icons/Store';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Contact from './pages/Contact';
import Products from './Product';
import About from './pages/About';
import Home from './pages/Home';
import Done from './pages/Done';
import Checkout from './pages/Checkout';
import CartView from './cartsite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CartConsumer, ContextState } from '../contexts/cartContxt'
import { ProductView } from './ProductView';
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary
      },
  }),
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Navbar(props: Props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
        <Route>
          <List>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Hem"} />
              </ListItem>
            </Link>

            <Link to="/product" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <StoreIcon />
                </ListItemIcon>
                <ListItemText primary={"Produkter"} />
              </ListItem>
            </Link>

            <Link to="/about" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"Om Oss"} />
              </ListItem>
            </Link>

            <Link to="/contact" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <ContactSupportIcon />
                </ListItemIcon>
                <ListItemText primary={"Kontakt"} />
              </ListItem>
            </Link>

            
            {<Link to="/cart" className={classes.link}>
              <CartConsumer>
                {(contextData: ContextState) => {
                  return (
                    <ListItem button>
                      <ListItemIcon>
                        <ShoppingCartIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Kundkorg"} />
                      <span>({contextData.countProductsInCart()})</span>
                    </ListItem>
                  )
                }}
              </CartConsumer>
            </Link>}
         </List>
         </Route>
      </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={headerItems}>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          ><MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Skor Butik
          </Typography>
          {<Link to="/cart">
              <CartConsumer>
                {(contextData: ContextState) => {
                  return (
                    <Button style={{ color: "white"}}>
                        <ShoppingCartIcon />
                      <span>({contextData.countProductsInCart()})</span>
                    </Button>
                  )
                }}
              </CartConsumer>
            </Link>}
        </Toolbar>
      </AppBar>

      
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          > 
          {drawer}
         
          </Drawer>
        </Hidden>
        
        
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          > 
          {drawer}
          
          </Drawer>
        </Hidden>
            
          
      </nav>
    
      <div className={classes.content}>
        <div className={classes.toolbar} />
        
      
      <Switch>
          <Route exact path="/" >
            <Container>
              <Typography variant="h3" gutterBottom>
                <Home />
              </Typography>
            </Container>
          </Route>

          <Route exact path="/cart" >
            <Container>
              <Typography variant="h3" gutterBottom>
                <CartView />
              </Typography>
            </Container>
          </Route>

          <Route exact path="/product" >
            <Container>
              <Typography variant="h3" gutterBottom style={{ textAlign: 'center' }}>
                Produkter
                    </Typography>
              <Products />
            </Container>
          </Route>

          <Route exact path="/about" >
            <Container>
              <Typography variant="h3" gutterBottom>
                <About />
              </Typography>
            </Container>
          </Route>

          <Route exact path="/product/:view" component={ProductView} />
  

          <Route exact path="/contact" >
            <Container>
              <Typography variant="h3" gutterBottom>
                <Contact />
              </Typography>
            </Container>
          </Route>

          <Route exact path="/checkout" >
            <Container>
              <Typography variant="h3" gutterBottom>
                <Checkout />
              </Typography>
            </Container>
          </Route>

          <Route exact path="/done" >
            <Container>
              <Typography variant="h3" gutterBottom>
                <Done />
              </Typography>
            </Container>
          </Route>
     </Switch>
      
      </div>
    </div>
  );
}

const headerItems: CSSProperties = {
  justifyContent: 'space-between',
  cursor: 'pointer'
}