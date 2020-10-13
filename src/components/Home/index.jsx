import React from 'react';
import './index.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <div className="header">
          <div className="left"><p>1</p></div>
          <div className="center"><p>2</p></div>
          <div className="right"><p>33333333333333333333333333333333</p></div>
        </div>
      </div>
    );
  }
}

export default Home;
