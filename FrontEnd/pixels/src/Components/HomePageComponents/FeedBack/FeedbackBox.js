import React,{Component} from 'react'
import Slider from './Slider';

class FeedbackBox extends Component {
      render() {
            const { reviews } = this.props;
            return(
                  <div className='feedbacks__content'>
                              <h4 className='heading--4 heading--4-dark text-center'>Testimonials</h4>
                              <h1 className='heading--1 heading--1-dark text-center'>Our Clients Love Us</h1>
                              <Slider reviews={reviews} />
                        </div>
            ) 
      }
}

export default FeedbackBox;