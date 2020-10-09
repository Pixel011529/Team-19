import React,{ Component } from 'react';

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import AccomodationContainer from '../Components/AccomodationPageComponents/AccomodationContainer';

import { privacyPolicyPageHeader } from '../Data/header';
import privacyPolicyData from '../Data/privacyPolicy';

class PrivacyPolicyPage extends Component {
      render() {
            return(
                  <div className='container container--accomodation'>
                      <Header {...privacyPolicyPageHeader} />
                      <AccomodationContainer {...privacyPolicyData} />
                      <Footer />
                  </div>
            )
      }
}

export default PrivacyPolicyPage;