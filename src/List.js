import React from 'react';
import './App.css';
import styles from './styles.module.css'

export default function List() {
  return (
    <div className="App" >
        <h1>Masai School</h1>
        <div className = {styles.header}>
          <h3>Student List</h3>
          <ul>
            <img src='https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png' width="50%"/>
            <li>Nikhil</li>
            <li>Suraj</li>
            <li>Achrya</li>
            <li>One</li>
          </ul>
        </div>
    </div>
  );
}

