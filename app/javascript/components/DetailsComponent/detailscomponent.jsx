import React,{Component} from 'react';
import styles from './style.scss';
class DetailsComponent extends Component {
  render(){
    var that = this;
    return (
      <div className = {styles['details-component']}>
        {
          /*<div className={styles['main-name']}>{this.props.name}</div>*/
          this.props.details.map(function(detail,index){
            let description = '';
            if(typeof detail.description === 'object'){
              description = (
                <ul>
                  {
                    detail.description.map(function(item,index){
                      return (
                        <li key={index}>{item}</li>
                      )
                    })
                  }
                </ul>
              )
            }
            else{
            description = detail.description;
            }

            return (
              <div className={styles['detail']} key = {index}>
                <div className={detail.heading ? styles['detail-heading']:'hide'}>
                  {detail.heading}
                </div>
                <div className={detail.shortDescription ? styles['detail-short-description'] : 'hide'}>
                  {detail.shortDescription}
                </div>
                <div className={detail.description ? styles['detail-description'] : 'hide'}>
                  {description}
                </div>
                <div className={styles['detail-lists']}>
                  {
                    detail.items.map(function(item,itemKey){
                      return (
                        <div className={styles['list-item']} key={itemKey}>
                          {
                            item.map(function(listItem,listItemKey){
                            return (
                              <div className={styles['column-item']} key={listItemKey}>
                                {listItem}
                              </div>
                            )
                          })
                        }
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default DetailsComponent;
