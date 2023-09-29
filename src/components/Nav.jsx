import React from 'react'
import './Nav.css';
import logo from './logo-dark.png'

function Nav() {
    return (
        <div className="navContainer">
            <div className="navbarSection">
                <div>
                    <img src={logo} alt="" />
                </div>
                <input type="checkbox" id="check" />
                <ul className='list'>
                    <li> <a href=""> HOME</a> </li>
                    <li> <a href=""> ABOUT</a> </li>
                    <li> <a href=""> PAGES</a> </li>
                    <li> <a href=""> SHOP</a> </li>
                    <li> <a href=""> BLOG</a> </li>
                    <li> <a href=""> CONTACT</a> </li>

                </ul>
                <div class="nav-right-icons">
                    <ul className="list-icon">
                        <li>
                            <a className="border-style" href="">
                                <i className="fa-solid fa-magnifying-glass" style={{ color: '#000000' }}>
                                </i>
                            </a>
                        </li>
                        <li>
                            <a className="border-style" href="">
                                <i className="fa-regular fa-user" style={{ color: '#030303' }}>
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fa-solid fa-bag-shopping" style={{ color: '#050505' }}>
                                </i>
                            </a>
                        </li>

                        <li>
                            <label for="check" className="checkbox-btn"
                                style={{ marginLeft: '10px', padding: '5px 8px', border: ' 1px solid rgb(196, 186, 186)' }}>
                                <i className="fa-solid fa-bars"></i>
                            </label>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Nav