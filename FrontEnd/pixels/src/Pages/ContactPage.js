import React,{Component } from 'react';

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import ContactPageContainer from '../Components/ContactPageComponents/ContactPageContainer';

import { contactPageHeader } from '../Data/header';
import contactData from '../Data/contact';

class ContactPage extends Component {
      render() {
            const { match } = this.props;
            return(
                  <div className='container container--contact'>
                        <Header {...contactPageHeader} />
                        <ContactPageContainer match={match} {...contactData} />
                        <Footer />
                  </div>
            )
      }
}

export default ContactPage;