import React,{Component} from 'react';
import workshop_sprite from '../../assets/indi_workShop_sprite.svg';

class AccomodationRule extends Component {
      render() {
            const { condition } = this.props;
            return(
                  <div className='accomodation__ruleContainer'>
                        <svg className='accomodation__ruleSvg'>
                              <use xlinkHref={`${workshop_sprite}#right-chevron`}/>
                        </svg>
                        <p className='accomodation__rule'>{condition}</p>
                  </div>
            )
      }
}

export default AccomodationRule;