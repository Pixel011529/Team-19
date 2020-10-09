import React,{Component} from 'react';
import FeedbackBox from './FeedbackBox';
import feedbackImage from '../../../assets/review.png';

class FeedBacks extends Component {
      render() {
            const { reviews } = this.props;
            return(
                  <section className='feedbacks'>
                        <div className='feedbacks__image'>
                              <img className='feedbacks__image--img' src={feedbackImage} alt='reviews' />
                        </div>
                        <FeedbackBox reviews={reviews} />
                  </section>
            )
      }
}

export default FeedBacks;