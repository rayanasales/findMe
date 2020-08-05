import React, { Component } from 'react';
import { fade, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import { clearSession } from "./../util/storage/auth";
// import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import strings from '../util/strings';
import { Link } from 'react-router-dom';

const styles = theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    }
});

class MenuAppBar extends Component {

    constructor() {
        super();
        this.state = {
            anchorEl: null
        }
        this.handleSearchOnKeyDown = this.handleSearchOnKeyDown.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleSearchOnKeyDown(e) {
        const { nearbySearchGoogle } = this.props;

        if (e.keyCode === 13) {
            nearbySearchGoogle(e.target.value);
        }
    }

    handleLogout() {
        clearSession();
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.grow}>
                <AppBar position="fixed" style={{ background: '#2E3B55' }} >
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            {strings.locales_recife}
                        </Typography>
                        {
                            window.location.href.includes("home") ? <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder={strings.search_locale}
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    onKeyDown={this.handleSearchOnKeyDown}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div> : null
                        }
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <Link to="/home">
                                <IconButton aria-label="show 0 new mails" color="inherit">
                                    <Badge badgeContent={0} color="secondary">
                                        <HomeIcon />
                                    </Badge>
                                </IconButton>
                            </Link>
                            <Link to="/favorites">
                                <IconButton aria-label="show 0 new mails" color="inherit">
                                    <Badge badgeContent={0} color="secondary">
                                        <FavoriteIcon />
                                    </Badge>
                                </IconButton>
                            </Link>
                            <Link to="/profile">
                                <IconButton aria-label="show 0 new mails" color="inherit">
                                    <Badge badgeContent={0} color="secondary">
                                        <PersonIcon />
                                    </Badge>
                                </IconButton>
                            </Link>
                            <Link to="/">
                                <IconButton aria-label="show 0 new notifications" color="inherit" onClick={this.handleLogout}>
                                    <Badge badgeContent={0} color="secondary">
                                        <PowerSettingsNewIcon />
                                    </Badge>
                                </IconButton>
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(MenuAppBar);
