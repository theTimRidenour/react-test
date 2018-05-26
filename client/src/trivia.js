import React from 'react';
import ReactDOM from 'react-dom';
import './trivia.css'

function AnswerButton(props){
  return (
    <button className="answer-block" onClick = {() => props.HandleClick(props.cAnswer)}>
      {props.answer}
    </button>
  )
}

function QuestionBlock(props){
  return (
    <center>
      <h1>{props.question}</h1>
      <table>
        <tr><td><AnswerButton answer = {props.answer[0]} cAnswer = {props.cAnswer[0]} HandleClick = {props.HandleClick}/></td></tr>
        <tr><td><AnswerButton answer = {props.answer[1]} cAnswer = {props.cAnswer[1]} HandleClick = {props.HandleClick}/></td></tr>
        <tr><td><AnswerButton answer = {props.answer[2]} cAnswer = {props.cAnswer[2]} HandleClick = {props.HandleClick}/></td></tr>
        <tr><td><AnswerButton answer = {props.answer[3]} cAnswer = {props.cAnswer[3]} HandleClick = {props.HandleClick}/></td></tr>
        </table>
    </center>
  )
}

function ScoreBlock(props){
  return (
    <table width="500px">
      <tr>
        <td width="100px">
          Correct: {props.correct}
        </td>
        <td widht="100px">
          Incorrect: {props.wrong}
        </td>
        <td width="300px" align="right">
          {props.qCnt}/10
        </td>
      </tr>
    </table>
  )
}

function Questions(props){
  if(props.qCnt == 1){
    var question = "PETA once asked the Pet Shop Boys to change their name to"
    var answers = [
      "West End Pups",
      "What Have They Done to Deserve This?",
      "Rescue Shelter Boys",
      "Mammal Shop Boys"
    ]
    var cAnswer = [0,0,1,0]
    return <QuestionBlock question = {question} answer = {answers} cAnswer = {cAnswer} HandleClick = {props.HandleClick} />
  }else if(props.qCnt == 2){
    var question = "In David Hasslehoff's divorce settlement, he retained possession of the nickname 'Hoff' and the catchphrase, '_______'"
    var answers = [
      "Hoff will be there",
      "I love you KITT",
      "Don't hassle the Hoff",
      "The Hoffmeister reigns"
    ]
    var cAnswer = [0,0,1,0]
    return <QuestionBlock question = {question} answer = {answers} cAnswer = {cAnswer} HandleClick = {props.HandleClick} />
  }else if(props.qCnt == 3){
    var question = "'Jay' was once slang for '_____' so when a pedestrian ignored street signs, they were a Jay walker."
    var answers = [
      "Juggling acrobat yawning",
      "Blind man",
      "Foolish person",
      "Bird"
    ]
    var cAnswer = [0,0,1,0]
    return <QuestionBlock question = {question} answer = {answers} cAnswer = {cAnswer} HandleClick = {props.HandleClick} />
  }else if(props.qCnt == 4){
    var question = "According to a study done at the University of Leicester, the milk yield of cows increases when they're _______."
    var answers = [
      "adsent of a history of being tipped over",
      "mooing",
      "in a warm barn",
      "listening to relaxing music"
    ]
    var cAnswer = [0,0,0,1]
    return <QuestionBlock question = {question} answer = {answers} cAnswer = {cAnswer} HandleClick = {props.HandleClick} />
  }else if(props.qCnt == 5){
    var question = "Hawaiian Punch was originally developed in 1934 as a tropical-flavored _______."
    var answers = [
      "ice cream topping",
      "sun tan lotion",
      "sugar substitute",
      "dog treat"
    ]
    var cAnswer = [1,0,0,0]
    return <QuestionBlock question = {question} answer = {answers} cAnswer = {cAnswer} HandleClick = {props.HandleClick} />
  }else if(props.qCnt == 6){
    var question = "The _____ originated in Croatia."
    var answers = [
      "ballpoint pen",
      "chain saw",
      "necktie",
      "box office"
    ]
    var cAnswer = [0,0,1,0]
    return <QuestionBlock question = {question} answer = {answers} cAnswer = {cAnswer} HandleClick = {props.HandleClick} />
  }else if(props.qCnt == 7){
    var question = "In colonial America, _____ was not a delicacy. It was actually so cheap and plentiful that it was often served to prisoners."
    var answers = [
      "foie gras",
      "lobster",
      "truffles",
      "caviar"
    ]
    var cAnswer = [0,1,0,0]
    return <QuestionBlock question = {question} answer = {answers} cAnswer = {cAnswer} HandleClick = {props.HandleClick} />
  }else if(props.qCnt == 8){
    var question = "When Canada's Northwest territories considered renaming itself in the 1990s, one name that gained a lot of popular supprot was"
    var answers = [
      "Apres",
      "Shatner",
      "Tundra",
      "Bob"
    ]
    var cAnswer = [0,0,0,1]
    return <QuestionBlock question = {question} answer = {answers} cAnswer = {cAnswer} HandleClick = {props.HandleClick} />
  }else if(props.qCnt == 9){
    var question = "In 1989 Walmart pulled _____ off the shelves after a woman claimed it burned her mouth, but after testing it was restocked because it turns out: that's just how it tastes."
    var answers = [
      "Tacasco Sauce",
      "Listerine",
      "Red Hots",
      "Spicy V8 Juice"
    ]
    var cAnswer = [0,1,0,0]
    return <QuestionBlock question = {question} answer = {answers} cAnswer = {cAnswer} HandleClick = {props.HandleClick} />
  }else if(props.qCnt == 10){
    var question = "Between 1900 and 1920, _____ was an Olympic event."
    var answers = [
      "Egg on Spoon",
      "Three-Legged Race",
      "Tug of War",
      "Sack Race"
    ]
    var cAnswer = [0,0,1,0]
    return <QuestionBlock question = {question} answer = {answers} cAnswer = {cAnswer} HandleClick = {props.HandleClick} />
  }else{
    return <h1>ERROR</h1>
  }
}

class Trivia extends React.Component{
  state = {correct:0,wrong:0,qCnt:1,qArr:["wrong","wrong","wrong","wrong","wrong","wrong","wrong","wrong","wrong","wrong"]};
  constructor(props){
    super(props)

    this.HandleClick = this.HandleClick.bind(this)
  }
  HandleClick(cAnswer){
    console.log(cAnswer)
    var newCorrect = this.correct;
    var newWrong = this.wrong;
    if (cAnswer == 1){
      var newArray = this.state.qArr;
      newArray[this.state.qCnt - 1] = "correct";
      this.setState((prevState) => ({ correct: prevState.correct + 1}))
      this.setState((prevState) => ({ qArr: newArray}))
      this.setState((prevState) => ({ qCnt: prevState.qCnt + 1}))
    }else{
      this.setState((prevState) => ({ wrong: prevState.wrong + 1}))
      this.setState((prevState) => ({ qCnt: prevState.qCnt + 1}))
    }
    console.log(this.state.qArr)
  }
  restart(){
    this.setState((prevState) => ({ qCnt: 1}))
    this.setState((prevState) => ({ correct: 0}))
    this.setState((prevState) => ({ wrong: 0}))
    this.setState((prevState) => ({ qArr: [0,0,0,0,0,0,0,0,0,0]}))
  }
  render(){
    if(this.state.qCnt < 11){
      return (
        <center>
          <Questions qCnt = {this.state.qCnt} HandleClick = {this.HandleClick} />
          <table><tr><td><ScoreBlock correct = {this.state.correct} wrong = {this.state.wrong} qCnt = {this.state.qCnt}/></td></tr></table>
        </center>
      )
    }else{
      return (
        <center>
          <h1>Correct: {this.state.correct} Incorrect: {this.state.wrong}</h1>
          <h3 className={this.state.qArr[0]}>1. PETA once asked the Pet Shop Boys to change their name to: Rescue Shelter Boys</h3>
          <h3 className={this.state.qArr[1]}>2. In David Hasselhoff's divorce settlement, he retained possession of the nickname 'Hoff' and the catchphrase, Don't Hassle the Hoff</h3>
          <h3 className={this.state.qArr[2]}>3. 'Jay' was once slang for Foolish person so when a pedestrian ignored street signs, they were a Jay walker.</h3>
          <h3 className={this.state.qArr[3]}>4. According to a study done at the University of Leicester, the milk yield of cows increases when they're listening to relaxing music</h3>
          <h3 className={this.state.qArr[4]}>5. Hawaiian Punch was originally developed in 1934 as a tropical-flavored ice cream topping.</h3>
          <h3 className={this.state.qArr[5]}>6. The necktie originated in Croatia.</h3>
          <h3 className={this.state.qArr[6]}>7. In colonial America, lobster was not a delicacy. It was actually so cheap and plentiful that it was often served to prisoners.</h3>
          <h3 className={this.state.qArr[7]}>8. When Canada's Northwest territories considered renameing itself in the 1990s, one name that gained a lot of popular support was Bob</h3>
          <h3 className={this.state.qArr[8]}>9. In 1989 Walmart pulled Listerine off the shelves after a woman claimed it burned her mouth, but after testing it was restocked because it turns out: that's just how it tastes.</h3>
          <h3 className={this.state.qArr[9]}>10. Between 1900 and 1920, Tug of War was an Olympic event.</h3>
          <button onClick = {() => this.restart()}>Try Again</button>
          <p></p>
          <p></p>
          <p>Trivia questions from <a href="https://www.sporcle.com/games/Tootsnsuch/random-facts-multiple-choice" target="_blank">Sporcle.com</a></p>
        </center>
      )
    }
  }
}

ReactDOM.render(
  <Trivia/>,
  document.getElementById("root")
)
