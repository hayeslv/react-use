import React from 'react';
import User from './User';

class ClassComp extends React.Component {
  render() {
    return (
      <div>
        <User name="猪八戒" age={28} gender={"男"} />
      </div>
    )
  }
}

export default ClassComp;