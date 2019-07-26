import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class componentName extends PureComponent {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
        <li className="language">
        <a href="#">
            English
            <i className="fa fa-angle-down" />
        </a>
        <ul className="language_selection">
            <li><a href="#">French</a></li>
            <li><a href="#">Italian</a></li>
            <li><a href="#">German</a></li>
            <li><a href="#">Spanish</a></li>
        </ul>
        </li>
    )
  }
}
