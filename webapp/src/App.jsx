import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, Button, withStyles, createMuiTheme, MuiThemeProvider, colors } from '@material-ui/core';
import { Route, Link, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import VerifyAccount from './VerifyAccount';
import GettingStarted from './GettingStarted';
import Profile from './Profile';
import SolvedQuestions from './SolvedQuestions';
import TestPaper from './TestPaper';
import InfoBeforeTest from './InfoBeforeTest';
import TestComplete from './TestComplete';
import Dashboard from './Dashboard';

const theme = createMuiTheme({
    palette: {
        primary: colors.blue
    },
    typography: {
        useNextVariants: true
    }
});

const styles = {
    grow: {
        flexGrow: 1
    }
};

class App extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline></CssBaseline>

                <AppBar position="sticky">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Paryksa
                            </Typography>

                        <Button color="inherit" component={Link} to="/login">Login</Button>

                        <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
                    </Toolbar>
                </AppBar>

                {/* <Switch> */}
                    <Route path="/" component={Home}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/signup" component={SignUp}></Route>
                    <Route path="/verify-your-account" component={VerifyAccount}></Route>
                    <Route path="/getting-started" component={GettingStarted}></Route>
                    <Route path="/profile" component={Profile}></Route>
                    <Route path="/solved-questions" component={SolvedQuestions}></Route>
                    <Route path="/test-paper" component={TestPaper}></Route>
                    <Route path="/test-paper/notice" component={InfoBeforeTest}></Route>
                    <Route path="/test-paper/completed" component={TestComplete}></Route>
                    <Route path="/dashboard" component={Dashboard}></Route>
                {/* </Switch> */}
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(App);
