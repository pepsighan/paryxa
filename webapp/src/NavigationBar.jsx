import React, { Component, Fragment } from 'react';
import { AppBar, Toolbar, Typography, Button, withStyles, IconButton, Icon } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthenticatedUser from './AuthenticatedUser';

const styles = theme => ({
    grow: {
        flexGrow: 1
    },
    profileIcon: {
        marginRight: theme.spacing.unit
    }
});

class NavigationBar extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    render() {
        const { classes } = this.props;

        return (
            <AuthenticatedUser>
                {({ data }) => {
                    return (
                        <AppBar position="sticky">
                            <Toolbar>
                                <Typography variant="h6" color="inherit" className={classes.grow}>
                                    Paryksa
                                </Typography>
                                {
                                    data ?
                                        <Fragment>
                                            <Button
                                                color="inherit"
                                                component={Link}
                                                to="/profile"
                                            >
                                                <Icon className={classes.profileIcon}>account_circle</Icon>
                                                Profile
                                            </Button>
                                        </Fragment>
                                        :
                                        <Fragment>
                                            <Button color="inherit" component={Link} to="/login">
                                                Login
                                            </Button>

                                            <Button color="inherit" component={Link} to="/signup">
                                                Sign Up
                                            </Button>
                                        </Fragment>

                                }
                            </Toolbar>
                        </AppBar>
                    );
                }}
            </AuthenticatedUser>
        );
    }
}

export default withStyles(styles)(NavigationBar);
