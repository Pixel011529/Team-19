import React,{ Component } from 'react';
import email from '../../assets/email.svg';
import send from '../../assets/send.svg';
import FormInput from './FormInput';

class ContactForm extends Component {
      render() {
            const { inputs } = this.props;
            return(
                  <form className='contact__form'>
                        <div className='contact__headingContainer'>
                              <img src={email} className='contact__headingSvg' alt='Bulb' />
                              <h2 className='contact__formHeading'>Contact Us</h2>
                        </div>
                        {
                              inputs.map( (input,index) => (
                                    <FormInput {...input} key={index} />
                              ))
                        }
                        <div className='contact__inputGroup'>
                              <label className='contact__label' htmlFor='message'>Message</label>
                              <textarea
                                    id='message'
                                    rows='8'
                                    className='contact__input contact__input--textArea'
                                    style={{resize:'none'}}

                                    placeholder={`I'm not good at giving advice. Can I interest you in a sarcastic comment.`} 
                              />
                        </div>
                        <button className='contact__sendButton'>
                              <img src={send} className='contact__sendSvg' alt='Bulb' />
                              Send
                        </button>
                  </form>
            )
      }
}

export default ContactForm;