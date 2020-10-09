import React,{Component} from 'react';
import feedbackSprite from '../../../assets/feedback_sprite.svg';

class Slide extends Component {
      render() {
            const { review,name,college,gender } = this.props;
            
            const slideStyle = {
                  width:'100%',
                  height:'100%'
            }

            return(
                  <div className='feedbacks__carouselSlide' style={slideStyle}>
                       <p className='feedbacks__carouselSlide-review'>{review}</p>
                        <div className='feedbacks__carouselSlide-info'>
                              <svg className='feedbacks__carouselSlide-image'>
                                    <use xlinkHref={`${feedbackSprite}#${gender}`}/>
                              </svg>
                              <div className='feedbacks__carouselSlide-details'>
                                  <p className='feedbacks__carouselSlide-name'>{name}</p>  
                                  <p className='feedbacks__carouselSlide-college'>{college}</p>  
                              </div>
                        </div> 
                  </div>
            )
      }
}

export default Slide;