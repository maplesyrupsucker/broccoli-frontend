import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { FaBars } from "react-icons/fa";

import { media } from '../styles/utils'

const Topbar = styled.header`
    background: green;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    flex-wrap: wrap;
    ${media.large`
        flex-direction: row;
    `}
`

const MenuList = styled.ul`
    margin: 0 auto;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 0;

    ${props => props.show ? css`
        display: flex;
        
    ` : css`
        display: none;
    `}

    ${media.large`
        display: flex;
        flex-direction: row;
        max-width: 500px;
        flex-direction: row;
        justify-content: flex-end;
    `}
`
const Logo = styled.h1`
    margin-top: 0;
    color: #fff;
`

const MenuItem = styled.li`
    text-transform: uppercase;
    font-weight: 700;
    color: #fff;
    padding: 10px;

    a {
        color: #fff;
        text-decoration: none;
    }
`

const MobileMenu = styled.div`
    cursor: pointer;
    ${media.large`
        display: none;
    `}
`

const MenuContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    text-align: center;

    ${media.large`
        width: unset;
    `}
`

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menuActive: false,
            loggedIn: false
        }

        this.handleMenuOpen = this.handleMenuOpen.bind(this)
    }

    handleMenuOpen() {
        console.log(this.state.menuActive)
        this.setState({
            menuActive: !this.state.menuActive
        })
    }

    render() {
        const { menuActive, loggedIn } = this.state

        const menu = [
            { title: 'Home', url: '/' },
            { title: 'Login', url: '/login' },
            { title: 'Register', url: '/register' },
            { title: 'Contacts', url: '/constacts', auth: true },
            { title: 'Groups', url: '/groups', auth: true }
        ]

        return (
            <Topbar>
                <Logo>Broccoli.cash</Logo>
                <MobileMenu onClick={this.handleMenuOpen}>
                    <FaBars color="#fff" size={24} />
                </MobileMenu>
                <MenuContainer>
                    <MenuList show={menuActive}>
                        {menu.map((item, index) => {
                            if (!loggedIn && !item.auth) return (
                                <MenuItem>
                                    <Link to={item.url}>{item.title}</Link>
                                </MenuItem>
                            )

                        })}

                    </MenuList>
                </MenuContainer>
            </Topbar>
        )
    }
}

export default Header