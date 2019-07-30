import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TabDescription from './TabDescription/TabDescription';
import TabAdditionalInfo from './TabAdditionalInfo/TabAdditionalInfo';
import TabReviews from './TabReviews/TabReviews';

class Tabs extends PureComponent {
    render() {
        return (
            <div>
                <div className="tabs_section_container">
                        <div className="container">
                        <div className="row">
                            <div className="col">
                            <div className="tabs_container">
                                <ul className="tabs d-flex flex-sm-row flex-column align-items-left align-items-md-center justify-content-center">
                                <li className="tab active" data-active-tab="tab_1"><span>Description</span></li>
                                <li className="tab" data-active-tab="tab_2"><span>Additional Information</span></li>
                                <li className="tab" data-active-tab="tab_3"><span>Reviews (2)</span></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            {/* Tab Description */}
                                <TabDescription />
                            {/* Tab Additional Info */}
                                <TabAdditionalInfo />
                            {/* Tab Reviews */}
                                <TabReviews />
                            </div>
                        </div>
                        </div>
                    </div>

            </div>
        );
    }
}

Tabs.propTypes = {

};

export default Tabs;