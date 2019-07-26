import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import TopNav from './TopNav/TopNav';
import MainNav from './MainNav/MainNav';

class Header extends PureComponent {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
        <div>
            {/* Header */}
            <TopNav />
            <MainNav />
            <div className="fs_menu_overlay" />
            <div className="hamburger_menu">
                <div className="hamburger_close"><i className="fa fa-times" aria-hidden="true" /></div>
                <div className="hamburger_menu_content text-right">
                <ul className="menu_top_nav">
                    <li className="menu_item has-children">
                    <a href="#">
                        usd
                        <i className="fa fa-angle-down" />
                    </a>
                    <ul className="menu_selection">
                        <li><a href="#">cad</a></li>
                        <li><a href="#">aud</a></li>
                        <li><a href="#">eur</a></li>
                        <li><a href="#">gbp</a></li>
                    </ul>
                    </li>
                    <li className="menu_item has-children">
                    <a href="#">
                        English
                        <i className="fa fa-angle-down" />
                    </a>
                    <ul className="menu_selection">
                        <li><a href="#">French</a></li>
                        <li><a href="#">Italian</a></li>
                        <li><a href="#">German</a></li>
                        <li><a href="#">Spanish</a></li>
                    </ul>
                    </li>
                    <li className="menu_item has-children">
                    <a href="#">
                        My Account
                        <i className="fa fa-angle-down" />
                    </a>
                    <ul className="menu_selection">
                        <li><a href="#"><i className="fa fa-sign-in" aria-hidden="true" />Sign In</a></li>
                        <li><a href="#"><i className="fa fa-user-plus" aria-hidden="true" />Register</a></li>
                    </ul>
                    </li>
                    <li className="menu_item"><a href="#">home</a></li>
                    <li className="menu_item"><a href="categories.html">shop</a></li>
                    <li className="menu_item"><a href="#">promotion</a></li>
                    <li className="menu_item"><a href="#">pages</a></li>
                    <li className="menu_item"><a href="https://nordiccoder.com/blog" target="blank">blog</a></li>
                    <li className="menu_item"><a href="#">contact</a></li>
                </ul>
                </div>
            </div>

            

        </div>

    );
  }
}


Header.propTypes = {

};

export default Header;