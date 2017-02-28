import React, {Component} from 'react';
import styles from './style.scss';
class SideBarComponent extends Component{
  render(){
    return (
      <div className={styles['side-bar-component']}>
        {'SideBar'}
      </div>
    )
  }
}
export default SideBarComponent;
