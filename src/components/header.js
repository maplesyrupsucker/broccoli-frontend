import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { IoIosMenu } from "react-icons/io";

import { media } from '../styles/utils'

/* const Topbar = styled.header`
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
 */

const Nav = styled('nav')`
    background: #24362a;
    padding: .5rem 1rem;
    position: relative;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: .5rem 1rem;
`

const Container = styled('div')`
    max-width: 960px;
    width: 100%;
    margin: auto;
    display: flex;  
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    
`

const Logo = styled(Link)`
    color: #fff;
    display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    text-align: center;
    text-decoration: none;
    box-sizing: border-box;
`

const Navbar = styled('div')`
    display: ${props => props.show ? 'block' : 'none'};
    
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
    
    ${media.large`
        display: flex;
        flex-basis: auto;
        width: unset;
        justify-content: flex-end;

    `}
`

const NavList = styled('ul')`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    margin-top: 0;
    list-style: none;

    ${media.large`
        flex-direction: row;
    `}
`

const NavItem = styled('li')`

`

const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    padding: .5rem 1rem;
    display: block;
`

const MobileMenu = styled('div')`
    display: inline-block;
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem;
    ${media.large`
        display: none;
        
        justify-self: flex-end;
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
        this.setState({
            menuActive: !this.state.menuActive
        })
    }

    render() {
        const { menuActive, loggedIn } = this.state

        const showNavbar = true;


        const menu = [
            { title: 'Login', url: '/login' },
            { title: 'Register', url: '/register' },
            { title: 'Logout', url: '/logout', auth: true },
            { title: 'Contacts', url: '/contacts', auth: true },
            { title: 'Groups', url: '/groups', auth: true }
        ]

        return (

            <Nav>
                <Container>
                    <Logo to="/">🥦 Broccoli</Logo>
                    {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    <MobileMenu onClick={this.handleMenuOpen}><IoIosMenu size={30} color="rgba(255, 255, 255, 0.5)" /></MobileMenu>
                    <Navbar show={menuActive}>
                        <NavList>
                            {menu.map((item, index) => {

                                return (
                                    <NavItem key={index}>
                                        <NavLink to={item.url}>{item.title}</NavLink>
                                    </NavItem>
                                )
                            })}

                        </NavList>
                    </Navbar>
                </Container>
            </Nav>


        )
    }
}

export default Header



/* 

<nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container">
           <a class="navbar-brand" href="/">🥦 Broccoli</a>
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>

           <div class="collapse navbar-collapse right" id="navbarSupportedContent">
             <ul class="navbar-nav mr-auto">
              
               <li class="nav-item active">
                 <a class="nav-link" href="/about">About</a>
               </li>
               
             </ul>
       </div>
   </div>
</nav>

*/


/*

<Topbar>
                <Logo>Broccoli.cash</Logo>
                <MobileMenu onClick={this.handleMenuOpen}>
                    <FaBars color="#fff" size={24} />
                </MobileMenu>
                <MenuContainer>
                    <MenuList show={menuActive}>
                        <MenuItem>
                            <Link to='/'>Home</Link>
                        </MenuItem>
                        {menu.map((item, index) => {
                            if (!loggedIn && !item.auth) return (
                                <MenuItem key={item.title + index}>
                                    <Link to={item.url}>{item.title}</Link>
                                </MenuItem>
                            )

                            if (loggedIn && item.auth) return (
                                <MenuItem key={item.title + index}>
                                    <Link to={item.url}>{item.title}</Link>
                                </MenuItem>
                            )
                        })}

                    </MenuList>
                </MenuContainer>
            </Topbar>

*/