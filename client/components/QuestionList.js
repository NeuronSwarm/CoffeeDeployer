import React, {Component} from 'react';
import Question from './Question'

/* props.questions structure
** question type
** question current
** question details
*/
class QuestionList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    var props = this.props
    return (
    <div>
      {
        props.questions.map( (_question) => 
          <Question current={props.current}
                    details={_question.details}
                    id={_question.id}
                    key={_question.id} />
        )
      }
    </div>

    )
  }
  componentDidMount(){
    console.log("Question List Mounted")
    console.log(this.props)
  }
}

export default QuestionList;