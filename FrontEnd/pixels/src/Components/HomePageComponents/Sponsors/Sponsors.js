import React,{Component} from 'react';
import IndividualSponsor from './IndividualSponsor';

class Sponsors extends Component {
      render() {
            const {sponsors} = this.props;
            return(
                  <section className='sponsors'>
                        <h1 className='sponsors__heading heading--1 heading--1-dark'>Our Sponsors</h1>
                        <div className='sponsors__track'>
                              {sponsors.map( (sponsor,index) => <IndividualSponsor sponsorLogo={sponsor} key={index}/>)}
                              {sponsors.map( (sponsor,index) => <IndividualSponsor sponsorLogo={sponsor} key={index}/>)}
                        </div>
                  </section>
            )
      }
}

export default Sponsors;