import React,{Component} from 'react';
import styles from './style.scss';
class DetailsComponent extends Component {
  render(){
    return (
      <div className = {styles['details-component']}>
        {'Details Component'}
      </div>
    )
  }
}
export default DetailsComponent;
