import React, { useContext, useState } from "react";

import AddButton from "./AddButton";
const Form = ({ onAdd }) => {
  const [question, setQuestion] = useState("");
  const [awnser, setAwnser] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (question === "" || awnser === "") return;
        onAdd(question, awnser, setQuestion, setAwnser);
      }}
      id="form"
    >
      <label htmlFor="question">
        <h2>Question</h2>
      </label>
      <textarea
        name="question"
        id="question"
        cols="55"
        rows="3"
        placeholder={`put your question here..`}
        value={question}
        onChange={(e) =>
          setQuestion(() => {
            return e.target.value;
          })
        }
      ></textarea>
      <label htmlFor="awnser">
        <h2>Awnser</h2>
      </label>
      <textarea
        name="awnser"
        id="awnser"
        cols="55"
        rows="3"
        placeholder={`put your awnser here..`}
        value={awnser}
        onChange={(e) =>
          setAwnser(() => {
            return e.target.value;
          })
        }
      ></textarea>
      <AddButton />
    </form>
  );
};

export default Form;
