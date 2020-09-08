import React from 'react';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return(
    <div style={footerStyle}>
        <div style={containerStyle}>
            <div style={boxStyle}> <FacebookIcon style={iconStyle} /> </div>
            <div style={boxStyle}> <InstagramIcon style={iconStyle}  /> </div>
            <div style={boxStyle}> <TwitterIcon style={iconStyle}  /> </div>
            <h3 style={footerText}> &copy; Grup 4</h3>
        </div>
    </div>
    );
};

const footerStyle: CSSProperties = {
    position:'sticky',
    backgroundColor: '#3f51b5',
    left: 0,
    bottom: 0,
    width: '100%',
    textAlign:'center',
    marginTop:'2em'
};

const containerStyle: CSSProperties ={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const boxStyle: CSSProperties ={
    cursor: 'pointer',
    margin: '1em'
}

const iconStyle: CSSProperties = {
    fontSize: '2em',
    color: 'white',
}

const footerText: CSSProperties ={
    color: 'black',
    fontSize: '1em',
    marginTop: '1em',
}

export default Footer;