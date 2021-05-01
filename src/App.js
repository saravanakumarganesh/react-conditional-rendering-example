import React from 'react';
import './App.css';
import AuthButton from './components/auth.button.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    let isLoggedIn = this.state.isLoggedIn;

    return (
      <div className='App'>
        <h1>
          This is demo for serveral ways implementing conditional rendering in
          React
        </h1>
        <AuthButton isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}

export default App;
