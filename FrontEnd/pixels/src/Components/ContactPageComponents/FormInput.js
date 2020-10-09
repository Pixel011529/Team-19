import React,{ Component } from 'react';

class FormInput extends Component {
      render() {
            const {type,label,id,placeholder} = this.props;
            return(
                  <div className='contact__inputGroup'>
                        <label className='contact__label' htmlFor={`${id}`}>{label}</label>
                        <input 
                              className='contact__input' 
                              type={`${type}`} 
                              placeholder={`${placeholder}`} 
                              id={`${id}`} 
                        />
                        <p className='contact__hint'>Hint : {`${placeholder}`}</p>
                  </div>
            )
      }
}

export default FormInput;