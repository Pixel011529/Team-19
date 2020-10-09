import React,{Component} from 'react';
import AccomodationRule from './AccomodationRule';

import contact from '../../assets/contacts.svg';

class AccomodationContainer extends Component {
      render() {
            const { title,subtitle,conditions,contacts } = this.props;
            return(
                  <div className='accomodation'>
                        <h1 className='heading--1 heading--1-dark text-center'>{title}</h1>
                        <hr className='contact__underline'></hr>
                        <h4 className='heading--4 heading--4-dark text-center'>{subtitle}</h4>
                        <div className='accomodation__rules'>
                              {conditions.map( (condition,index) => (
                                    <AccomodationRule condition={condition} key={index} />
                              ))}
                        </div>
                        <h1 className='heading--1 heading--1-dark text-center'>Contact</h1>
                        <hr className='contact__underline'></hr>
                        <h4 className='heading--4 heading--4-dark text-center'>Incase of queries contact :</h4>
                        <div className='accomodation__contact'>
                              <img className='accomodation__contactImage' src={contact} alt='phone' />
                              <div className='accomodation__contactDetails'>
                                    <h2 className='heading--2 heading--2-dark'>{contacts.name}</h2> 
                                    <h4 className='heading--4 heading--4-dark'>{contacts.phone}</h4> 
                              </div>     
                        </div>
                  </div>
            )
      }
}

export default AccomodationContainer;