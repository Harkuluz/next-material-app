import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CameraIcon from '@material-ui/icons/PhotoCamera';
import useStyles from './Header.styles';
const Header = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap>
                        HP
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
