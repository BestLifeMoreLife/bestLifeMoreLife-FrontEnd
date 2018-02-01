import React from "react";

const SignUpQuestion = props => {
  console.log("question", props);
  let content = props.question.content ? props.question.content : null;
  let answers = props.question.content ? props.question.answers : null;
  let answersList = props.question.content
    ? answers.map(answer => <p>{answer.content}</p>)
    : null;
  return (
    <div>
      <h1>{content}</h1>
      <h1>{answersList}</h1>
    </div>
  );
};

export default SignUpQuestion;
