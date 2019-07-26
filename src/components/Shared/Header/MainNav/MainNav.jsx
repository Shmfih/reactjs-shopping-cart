import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class MainNav extends PureComponent {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
        <div>
            {/* Main Navigation */}
            <div className="main_nav_container">
            <div className="container">
                <div className="row">
                <div className="col-lg-12 text-right">
                    <div className="logo_container">
                    <a href="#">Nordic<span>Shop</span></a>
                    </div>
                    <nav className="navbar">
                    <ul className="navbar_menu">
                        <li><a href="#">home</a></li>
                        <li><a href="categories.html">shop</a></li>
                        <li><a href="#">promotion</a></li>
                        <li><a href="https://nordiccoder.com/blog" target="blank">blog</a></li>
                        <li><a href="contact.html">contact</a></li>
                    </ul>
                    <ul className="navbar_user">
                        {/* <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li> */}
                        {/* <li><a href="#"><i class="fa fa-user" aria-hidden="true"></i></a></li> */}
                        <li className="checkout">
                        <a href="#">
                            <i className="fa fa-shopping-cart" aria-hidden="true" />
                            <span id="checkout_items" className="checkout_items">2</span>
                        </a>
                        </li>
                    </ul>
                    <div className="hamburger_container">
                        <i className="fa fa-bars" aria-hidden="true" />
                    </div>
                    </nav>
                </div>
                </div>
            </div>
            </div>
        </div>

    );
  }
}


MainNav.propTypes = {

};

export default MainNav;