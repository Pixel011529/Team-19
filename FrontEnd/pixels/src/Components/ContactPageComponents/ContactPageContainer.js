import React,{Component } from 'react';

import FrequentlyAskedQuestions from '../HomePageComponents/FAQ/FrequentlyAskedQuestions';
import ContactForm from './ContactForm';

import faq from '../../Data/faq';
import { NavLink } from 'react-router-dom';

class ContactPageContainer extends Component {
      render() {
            const { match,title,subtitle_1,subtitle_2,inputs } = this.props;
            const issueId = match.params.issue_id;
            let isFaq = false;
            let renderComponent;
            if(issueId === 'faq') {
                  renderComponent = <FrequentlyAskedQuestions {...faq} padding='2rem 0' />;
                  isFaq = true;
            } else {
                  renderComponent = <ContactForm inputs={inputs} />
            }
            return(
                  <div className='contact'>
                        <h1 className='heading--1 heading--1-dark contact__heading'>{title}</h1>
                        <hr className='contact__underline'></hr>
                        <h3 className='heading--3 heading--3-dark text-center'>
                              { isFaq ? subtitle_1:subtitle_2}
                        </h3>
                        <div className='contact__componentContainer'>
                              {renderComponent}
                        </div>
                        {
                              isFaq 
                              &&
                              <div className='contact__contactUsContainer'>
                                    <p className='contact__contactText'>Still Having Issues ?</p>
                                    <NavLink 
                                          exact
                                          to='/contact/newIssues'
                                          className='contact__contactLink'
                                    >
                                          Contact Us
                                    </NavLink>
                              </div>
                        }
                  </div>
            )
      }
}

export default ContactPageContainer;