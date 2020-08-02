import React from 'react';
import './../assets/css/Empty.css';
import ErrorIcon from '../assets/images/error-icon.png';
import Strings from './Strings';

class Empty extends React.Component {

  render() {
    return (
      <div className="empty-content">
        <div className="empty-frags">
          <img src={ErrorIcon} />
          <h2>{Strings.empty_places}</h2>
        </div>
      </div>
    );
  }
}

export default Empty;
