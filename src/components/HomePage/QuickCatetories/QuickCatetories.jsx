import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './QuickCategories.scss';

class QuickCatetories extends Component {
	render() {
		return (
			<div>
				{/* Banner */}
				<div className="banner">
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<div
									className="banner_item align-items-center"
									style={{ backgroundImage: 'url(images/banner_1.jpg)' }}
								>
									<div className="banner_category">
										<NavLink exact to="/shop?categories;;k=women">
											women's
										</NavLink>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div
									className="banner_item align-items-center"
									style={{ backgroundImage: 'url(images/banner_2.jpg)' }}
								>
									<div className="banner_category">
										<NavLink exact to="/shop?categories=accessories">
											accessories's
										</NavLink>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div
									className="banner_item align-items-center"
									style={{ backgroundImage: 'url(images/banner_3.jpg)' }}
								>
									<div className="banner_category">
										<NavLink exact to="/shop?categories=men">
											men's
										</NavLink>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

QuickCatetories.propTypes = {};

export default QuickCatetories;
