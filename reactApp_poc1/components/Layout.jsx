import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
class Layout extends React.Component { 
   
    render() {
      return (
          <div>
              <Header/>
              <div className="content-wrapper">
                {this.props.children}
              </div>
              <Footer/>            
          </div>
      );
   }
}

export default Layout;