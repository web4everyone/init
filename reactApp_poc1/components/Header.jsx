import React from 'react';
import { Link } from 'react-router';
class Header extends React.Component { 
   
    render() {
      return (
          <div className="header">
            <Link to="home">Home</Link>
            <Link to="about">About</Link>
          </div>
      );
   }
}

export default Header;