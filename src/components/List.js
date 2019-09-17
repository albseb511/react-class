import React from 'react';
import '../App.css';

export default class List extends React.Component {
  render(){
  return (
    <div className="App" >
        <h1>Masai School</h1>
        <div>
          <h3>Student List</h3>
          <ul>
            <li>{this.props.name}</li>
            <li>Suraj</li>
            <li>Achrya</li>
            <li>One</li>
          </ul>
        </div>
    </div>
  );
}
}