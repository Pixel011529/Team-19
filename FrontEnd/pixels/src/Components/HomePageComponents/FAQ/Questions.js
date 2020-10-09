import React,{Component} from 'react';
import chevron from '../../../assets/chevron.svg';

class Questions extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  showAnswer:false
            }
            this.handleShowAnswer = this.handleShowAnswer.bind(this);
      }

      handleShowAnswer() {
            this.setState({
                  showAnswer:!this.state.showAnswer
            })
      }

      render() {
            const {question,answer} = this.props;
            const {showAnswer} = this.state;
            let style,chevronStyle;
            if(showAnswer) {
                  style = {
                        marginTop:'1rem',
                        height:'auto',
                        opacity:'1'
                  };

                  chevronStyle = {
                        transform: 'rotate(0)'
                  };

            } else {
                  style = {
                        marginTop:'0',
                        height:'0px',
                        opacity:'0'
                  }

                  chevronStyle = {
                        transform: 'rotate(180deg)'
                  };
            }

            return(
                  <div className='question__box' onClick={this.handleShowAnswer}>
                        <div className='question__box--content'>
                              <h4 className='question__box--question'>{question}</h4>
                              <img 
                                    style={chevronStyle}
                                    src={chevron} 
                                    alt='chevron up' 
                                    className='question__box--icon'
                                    onClick={this.handleShowAnswer}
                              /> 
                        </div>
                        <p className='question__box--answer' style={style}>{answer}</p>
                  </div>
            )
      }
}

export default Questions;