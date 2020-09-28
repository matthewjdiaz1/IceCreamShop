import React from 'react';
import HeaderButton from './HeaderButton.js';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-container-left">
          <HeaderButton text={'home'} hoverColor={this.props.secondaryColor} link={'https://matthewjdiaz1.github.io/Profile'} />
          <HeaderButton text={'Product'} hoverColor={this.props.secondaryColor} />
          <HeaderButton text={'Shops'} hoverColor={this.props.secondaryColor} link={'https://www.google.com/search?hl=en&sxsrf=ALeKk02uVvjSBuoLK9KtEvpWSksTiQUyLg:1601323295241&q=sf+ice+cream&npsic=0&rflfq=1&rldoc=1&rlha=0&rllag=37775784,-122428213,1662&tbm=lcl&sa=X&ved=2ahUKEwjNsruR0ozsAhUEJTQIHXijA2UQjGp6BAgMEFE&biw=1440&bih=797#rlfi=hd:;si:;mv:[[37.8024147,-122.387529],[37.7392725,-122.5039679]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m4!1u1!2m2!1m1!1e1!1m4!1u1!2m2!1m1!1e2!1m4!1u22!2m2!21m1!1e1!2m1!1e2!2m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:9'} />
          <HeaderButton text={'About Us'} hoverColor={this.props.secondaryColor} link={'https://matthewjdiaz1.github.io/Profile'} />
          <HeaderButton text={'Locator'} hoverColor={this.props.secondaryColor} />
          <HeaderButton text={'Recipes'} hoverColor={this.props.secondaryColor} link={'https://www.google.com/search?q=ice+cream+recipes&oq=ice+cream+recipes&aqs=chrome..69i57j0l5j69i60l2.3441j0j9&sourceid=chrome&ie=UTF-8'} />
        </div>
        <div
          className="header-container-right"
          title='Amazon.com'>
          <div
            style={{ color: this.props.secondaryColor }}
            className="header-shopnow-button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://www.amazon.com/Ice-Cream/b?ie=UTF8&node=6459179011';
            }}
          >Shop Now</div>
        </div>
      </div>
    )
  }
};

export default Header;
