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
        <HeaderComponent name={data.name}/>
        <div className = {styles['wrapper']}>
        <SideBarComponent/>
        <DetailsComponent/>
        </div>
      </div>
    )
  }
}
export default MainComponent;
