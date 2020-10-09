import React,{ Component } from 'react';
import page_not_found from '../assets/page_not_found.svg';

class PageNotFound extends Component {
      render() {
            return(
                  <div className='container container--pageNotFound'>
                        <div className='pageNotFound'>
                              <img className='pageNotFound__image' src={page_not_found} alt='Page Not Found'/>
                              <h1 className='heading--1 heading--1-primary text-center'>Please Enter a Valid Url</h1>
                        </div>
                  </div>
            )
      }
}

export default PageNotFound;