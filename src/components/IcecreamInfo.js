import React from 'react';
import LearnMore from './LearnMore.js';

class IceacreamInfo extends React.Component {
  render() {
    return (
      <div className="icecream-info-container">
        <div className="icecream-name">
          {this.props.flavor.name}
        </div>
        <div className="icecream-dash"></div>
        <div className="icecream-info">
          {this.props.flavor.info}
        </div>
        <LearnMore
          toggleLearnMoreModal={this.props.toggleLearnMoreModal}
          hoverColor={this.props.flavor.secondaryColor}
          primaryColor={this.props.flavor.primaryColor}
        />
      </div>
    )
  }
}

export default IceacreamInfo;
