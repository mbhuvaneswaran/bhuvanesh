import React, { Component } from 'react';
import styles from './style.scss';
class HeaderComponent extends Component{
  render(){
    return (
      <div className={styles['header']}>
        <div>{this.props.name}</div>
      </div>
    )
  }
}
export default HeaderComponent;
