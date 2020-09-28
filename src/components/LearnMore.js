import React from 'react';

class LearnMore extends React.Component {
  render() {
    return (
      <div
        className="icecream-learn-more"
        style={{ backgroundColor: this.props.hoverColor }}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://www.google.com/search?q=here%27s+where+you+would+learn+more+about+ice+cream&oq=here%27s+where+you+would+learn+more+about+ice+cream&aqs=chrome..69i57j33.17682j0j7&sourceid=chrome&ie=UTF-8';
        }}>
        Learn More
      </div>
    );
  }
};

export default LearnMore;
