import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import Header from '../Common/Header';
import './index.scss';

const styles = {
  headerTextStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
  rightContainerStyle: {
    backgroundColor: '#F1F1F1',
    marginRight: 7,
    borderRadius: 22,
    borderColor: '#034263',
    boxSizing: 'border-box',
  },
  searchIconStyle: {
    color: 'black',
    fontSize: 21,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 32,
  },
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { headerTextStyle, rightContainerStyle, searchIconStyle } = styles;

    const webRegText = <p style={headerTextStyle}>Webreg</p>;
    const searchTab = (
      <div style={rightContainerStyle}>
        <SearchOutlined style={searchIconStyle} />
      </div>
    );
    return (
      <div className="home">
        <Header center={webRegText} right={searchTab} />
      </div>
    );
  }
}

export default Home;
