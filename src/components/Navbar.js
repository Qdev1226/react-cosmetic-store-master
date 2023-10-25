import {Link} from 'react-router-dom';
import logo from  '../cosmetics.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styled from "styled-components";
import {ButtonContainer} from './Button';
import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
            <Link to="/">
                <img src={logo} alt="store" className="navbar-brand" height="50px"/>
            </Link>
            <ul className="navbar-nav align-items center">
                <li className="navbar-nav align-items-center">
                     <Link to="/" className="nav-link">
                         Products
                    </Link>
                </li>
            </ul>
             <Link to="/cart" className="ml-auto">
                 <ButtonContainer variant="outlined">
                     <span className="mr-2">
                     <ShoppingCartIcon/>
                     </span>
                     my cart

                 </ButtonContainer >
            </Link>


        </NavWrapper>
        )
    }
}


export default Navbar;

const NavWrapper = styled.nav`
background:var(--mainPink);
position:sticky;
top:0;
left:0;
z-index:100;
.nav-link{
    color:var(--mainWhite)!important;
    font-size: 1.3rem;
    text-transform: captilize !important;

}
`;