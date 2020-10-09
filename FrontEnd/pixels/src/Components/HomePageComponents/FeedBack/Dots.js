import React,{Component} from 'react';
import Dot from './Dot';

class Dots extends Component {
      render() {
            const { reviews,currentSlide } = this.props;
            return(
                  <div className='feedbacks__dots'>
                        {reviews.map( (review,index) => {
                              return <Dot active={ currentSlide === index } key={index} />;
                        })}
                  </div>
            )
      }
}

export default Dots;