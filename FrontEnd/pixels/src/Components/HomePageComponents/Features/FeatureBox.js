import React,{Component} from 'react';
import sprite from '../../../assets/sprite.svg';

class FeatureBox extends Component {
      render() {
            const {icon,feature,details} = this.props;
            return(
                  <section className='feature__box'>
                        <svg className="feature__box--icon">
                              <use xlinkHref={`${sprite}#${icon}`} />
                        </svg>
                        <h4 className='feature__box--title heading--4 heading--4-dark'>{feature}</h4>
                        <p className='feature__box--details'>{details}</p>
                  </section>
            )
      }
}

export default FeatureBox;