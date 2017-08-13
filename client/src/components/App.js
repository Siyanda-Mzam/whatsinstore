import React, { Component } from 'react';
import MapContainer from './Map';
import { bubble as Menu } from 'react-burger-menu'

var styles = {
  bmBurgerButton: {
    zIndex: '1',
    position: 'fixed',
    width: '36px',
    height: '19px',
    left: '90%',
    top: '43%',
    transform: 'rotate(270deg)'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapContainer/>
        <Menu isOpen={false} width={'120px'} right styles={styles}>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
      </div>

    );
  }
}

export default App;
