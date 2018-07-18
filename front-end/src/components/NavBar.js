import React, { Component } from 'react';
import { NavBar, Nav, NavItem } from 'reactstrap';
import SearchField from './SearchField';
import  Link from 'react-router-dom/Link';
import ButtonPostJob from './ButtonPostJob';

export default class Header extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Nav navbar>
                    <div className="top-nav-bar">
                        <SearchField />
                    </div>
                    <div className="body-nav-bar">
                        <NavItem>
                            <Link className="nav-bar-link" to="/i/how-it-work">HOW IT WORKS</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-bar-link" to="/i/login">LOGIN</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-bar-link" to="/i/wallet">CREATE WALLET</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-bar-link" to="/i/signup"><ButtonPostJob /></Link>
                        </NavItem>
                    </div>
                </Nav>
            </div>
        )
    }
}