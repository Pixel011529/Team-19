import React,{Component} from 'react';
import Slide from './Slide';

class SliderContent extends Component {
      render() {
            const { reviews } = this.props;
            const { translate,transition,width } = this.props;

            const contentStyle = {
                  height:'70%',
                  width: `${width}px`,
                  transition:`transform ${transition}s ease-out`,
                  transform:`translateX(-${translate}px)`,
                  display:'flex',
                  position:'relative'
            }
            return(
                  <div style={contentStyle}>
                        {reviews.map( (review,index) => <Slide {...review} key={index} />)}
                  </div>
            )
      }
}

export default SliderContent;