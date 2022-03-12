import React, { useState } from 'react'
import { NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse, NavbarText, Nav } from 'reactstrap'
import Logo from '../Logo/Logo';
import { NavBarStyled } from './styles';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }

    return (
        <header>
            <NavBarStyled
                expand="md"
                dark
                container="md"
            >
                <NavbarBrand href="/">
                    <Logo />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse navbar isOpen={isOpen}>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/components/">
                                Store
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        Carrito
                    </NavbarText>
                </Collapse>
            </NavBarStyled>
        </header>
    )
}

export default Header