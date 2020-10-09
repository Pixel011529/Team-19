import React,{Component} from 'react';
import Questions from './Questions';

class FrequentlyAskedQuestions extends Component {
      render() {
            const {faqs,padding} = this.props;
            return(
                  <section className='frequentlyAskedQuestions' style={{padding:padding}}>
                        <h5 className='heading--5 heading--5-primary text-center'>FAQ's</h5>
                        <h1 className='heading--1 heading--1-dark text-center'>You Have Questions ?</h1>
                        <div className='frequentlyAskedQuestions__questions'>
                              {faqs.map( (faq,index) => <Questions {...faq} key={index}/>)}
                        </div>
                  </section>
            )
      }
}

export default FrequentlyAskedQuestions;