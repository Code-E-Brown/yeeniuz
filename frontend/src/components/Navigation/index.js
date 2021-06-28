import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                {/* <button>
                    <NavLink to="/login">Log In</NavLink>
                </button> */}
                <button>
                    <NavLink to="/signup">Sign Up</NavLink>
                </button>
            </>
        );
    }
    return (
        <>
            <header className='upperNav'>
                <div className='logo'>
                    <Link to='/'>
                        YEENIUZ
                    </Link>
                </div>
            </header>
            <header className='lowerNav'>
                <div className='lowerNav__div'>
                    <ul>
                        <li>
                            {sessionUser &&
                                <button>
                                    <NavLink to='/songs/add'>Add Song</NavLink>
                                </button>
                            }
                            <button>
                                <NavLink to='/artists'>Artists</NavLink>
                            </button>
                            <button>
                                <NavLink exact to="/">Home</NavLink>
                            </button>
                            {isLoaded && sessionLinks}
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Navigation;
