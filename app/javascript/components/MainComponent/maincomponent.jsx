import React, { Component } from 'react';
import styles from './style.scss';
import data from '@data';
import HeaderComponent from '@components/HeaderComponent';
import SideBarComponent from '@components/SideBarComponent';
import DetailsComponent from '@components/DetailsComponent';

class MainComponent extends Component{
  render(){
    return (
      <div className={styles['main-component']}>
        <div className = {styles['wrapper']}>
        <SideBarComponent data = {data.sidebar}/>
        <DetailsComponent name={data.name} details = {data.details} accomplishments = {data.accomplishments}/>
        <div>{'footer'}</div>
        </div>
      </div>
    )
  }
}
export default MainComponent;
