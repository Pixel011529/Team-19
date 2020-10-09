import React,{Component} from 'react';
import SliderContent from './SliderContent';
import Dots from './Dots';
import arrowSprite from '../../../assets/arrow_sprite.svg';

class Slider extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  currentSlide:0,
                  translate:0,
                  transition:0.45,
                  widthOfDiv:null
            }
            this.widthRef = React.createRef();
            this.handleResize = this.handleResize.bind(this);
            this.handleNextClick = this.handleNextClick.bind(this);
            this.handlePrevClick = this.handlePrevClick.bind(this);
      }

      componentDidMount() {
            const width = this.widthRef.current.clientWidth;
            this.setState({
                  widthOfDiv:width
            });

            window.addEventListener('resize',this.handleResize)
      }

      handleResize() {
            const {currentSlide} = this.state;
                  this.setState({
                  ...this.state,
                  widthOfDiv:this.widthRef.current.clientWidth,
                  translate: currentSlide * this.widthRef.current.clientWidth,
                  transition:0
            })
      }

      componentWillUnmount() {
            window.removeEventListener('resize',this.handleResize);
      }

      handleNextClick() {
            const {currentSlide,widthOfDiv} = this.state;
            this.setState({
                  ...this.state,
                  transition:0.45,
                  currentSlide:currentSlide+1,
                  translate: (currentSlide + 1) * widthOfDiv
            })
      }

      handlePrevClick() {
            const {currentSlide,widthOfDiv} = this.state;
            this.setState({
                  ...this.state,
                  transition:0.45,
                  currentSlide:currentSlide-1,
                  translate: (currentSlide - 1) * widthOfDiv
            })
      }

      render() {

            const { reviews } = this.props;
            const { currentSlide,translate,transition,widthOfDiv } = this.state;

            const sliderStyle = {
                  position:'relative',
                  height:'100%',
                  width: '100%',
                  overflow:'hidden',
            }

            const leftDisabled = currentSlide === 0;
            const rigthDisabled = currentSlide === reviews.length-1;

            return(
                  <div style={sliderStyle} ref={this.widthRef}>
                        {/* Slider Content goes here */}
                        <SliderContent 
                              reviews={reviews}
                              transition={transition}
                              translate={translate}
                              width={widthOfDiv * reviews.length}
                        />

                        {/* Dots Goes here */}
                        <Dots reviews={reviews} currentSlide={currentSlide} />

                        {/* Buttons Goes Here */}
                        <div className='feedbacks__buttons'>      
                              <button 
                                    className={`feedbacks__button feedbacks__button--left ${leftDisabled && 'feedbacks__button--disabled'}`}
                                    onClick={this.handlePrevClick}
                                    disabled={leftDisabled}
                              >
                                    <svg className='feedbacks__button--img'>
                                          <use xlinkHref={`${arrowSprite}#left`}/>
                                    </svg>
                              </button>
                              <button 
                                    className={`feedbacks__button feedbacks__button--right ${rigthDisabled && 'feedbacks__button--disabled'}`}
                                    onClick={this.handleNextClick}
                                    disabled={rigthDisabled}
                              >
                                    <svg className='feedbacks__button--img'>
                                          <use xlinkHref={`${arrowSprite}#right`}/>
                                    </svg>
                              </button>
                        </div>
                  </div>
            )
      }
}

export default Slider;