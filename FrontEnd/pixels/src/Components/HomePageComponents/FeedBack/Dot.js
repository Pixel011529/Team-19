import React,{Component} from 'react';

class Dot extends Component {
      render() {
            const { active } = this.props;
            return <span className={`feedbacks__dot ${active && 'feedbacks__dot--active'}`}></span>
      }
}

export default Dot;