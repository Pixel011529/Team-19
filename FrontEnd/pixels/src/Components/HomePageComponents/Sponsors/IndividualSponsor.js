import React,{Component} from 'react';

class IndividualSponsor extends Component {
      render() {
            const {sponsorLogo} = this.props;
            return(
                  <div className='sponsors__container'>
                        <img className='sponsors__image' alt='Sponsor Logo' src={sponsorLogo}/>
                  </div>
            )
      }
}

export default IndividualSponsor;