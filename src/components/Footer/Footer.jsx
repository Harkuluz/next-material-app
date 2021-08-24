import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CameraIcon from '@material-ui/icons/PhotoCamera';
import useStyles from './Footer.styles';
import Link from '@material-ui/core/Link';
const Footer = () => {
    const classes = useStyles();
    return (
        <>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://material-ui.com/">
                        Your Website
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </footer>
            {/* End footer */}
        </>
    )
}

export default Footer
