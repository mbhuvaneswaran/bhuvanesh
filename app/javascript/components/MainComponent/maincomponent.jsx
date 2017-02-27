import React, { Component } from 'react';
import styles from './style.scss';
import data from '@data';
import HeaderComponent from '@components/HeaderComponent';
class MainComponent extends Component{
  render(){
    return (
      <div className={styles['main-component']}>
        <HeaderComponent name={data.name}/>
      </div>
    )
  }
}
export default MainComponent;
