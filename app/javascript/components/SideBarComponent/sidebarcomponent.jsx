import React, {Component} from 'react';
import styles from './style.scss';
class SideBarComponent extends Component{
  render(){
    var that  = this;

    return (
      <div className={styles['side-bar-component']}>
        <div className={styles['main-name']}>
          Bhuvaneswaran Mohan
        </div>
        <div className={styles['profile-img']}>
          <img src="https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAguAAAAJDM0ZjAyNGIzLTFkYjItNGE2Ny1iYTQwLTY3YTM3MmMyYWFhOQ.jpg"/>
        </div>
        <div className={styles['lists']}>
        {
          this.props.data.map(function(sideItem,sideItemIndex){
            return (
              <div className={styles['list-item']} key={sideItemIndex}>
                <div className={sideItem.heading ? styles['list-heading'] : 'hide'}>
                  {sideItem.heading}
                </div>
                  <ul className={styles['list-item-ul']}>
                  {
                      sideItem.items.map(function(item,itemIndex){
                        return (
                          <li className={styles['list-each-item']} key={itemIndex}>
                            {item}
                          </li>
                        )
                      })


                  }
                </ul>
              </div>
            )
          })
        }
      </div>
      </div>
    )
  }
}
export default SideBarComponent;
