import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from './../Footer/Footer';
import Clock from '../Clock/Clock';

class ClockBuilder extends Component {
  state = {
    dark: false,
  };

  handleDarkMode = () => {
    this.setState({ dark: !this.state.dark });
    localStorage.setItem('mode', this.state.dark);
  };

  render() {
    return (
      <div>
        <Header darkMode={this.handleDarkMode} />
        <Clock />
        <Footer />
      </div>
    );
  }
}

export default ClockBuilder;
