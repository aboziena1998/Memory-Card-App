import { useState, useReducer } from "react";
import CardSlider from "./components/CardSlider";
import Form from "./components/Form";

function App() {
  const [questionsArray, setQuestionsArray] = useState([]);
  const current = questionsArray.findIndex((item) => {
    return item.state === "current";
  });

  // Using useState
  const AddCard = (question, awnser, setQuestion, setAwnser) => {
    const content = {
      question: question,
      awnser: awnser,
      state: "",
      id: questionsArray.length === 0 ? 0 : questionsArray.length + 1 - 1,
    };

    setQuestionsArray((prev) => [...prev, content]);

    setAwnser(() => "");
    setQuestion(() => "");
  };

  const deleteAllCards = () => {
    setQuestionsArray([]);
  };

  const deleteOneCard = (id) => {
    if (questionsArray.length === 1) deleteAllCards();
    // let newArray = [];
    // if (currentCardIdx === 0) {
    //   newArray = questionsArray.slice(1, questionsArray.length);
    //   newArray[0].state = "current";
    // } else if (currentCardIdx === questionsArray.length - 1) {
    //   newArray = questionsArray.slice(0, questionsArray.length - 1);
    //   newArray[newArray.length - 1].state = "current";
    //   setCurrentCardIdx((prev) => prev - 1);
    //   console.log("yes from here the last");
    // } else {
    //   console.log("yes from here the middle");
    //   newArray = questionsArray.filter((q) => q.id !== id);
    //   newArray[currentCardIdx].state = "current";
    // }

    // if (currentCardIdx === questionsArray.length - 1) {
    //   newArray = questionsArray.filter((item) => item.id !== id);
    //   setCurrentCardIdx((prev) => newArray.length - 1);
    //   newArray[currentCardIdx - 1].state = "current";
    // } else {
    //   newArray = questionsArray.filter((item) => item.id !== id);
    //   newArray[currentCardIdx].state = "current";
    // }

    let current = questionsArray.findIndex((q) => q.state === "current");
    let newArray = questionsArray.filter((q) => q.state !== "current");
    // the current < cards.length - 1
    current < questionsArray.length - 1
      ? (newArray[current].state = "current")
      : // the current = cards.length -1
        (newArray[newArray.length - 1].state = "current");

    setQuestionsArray(newArray);
  };

  const slide = (direction) => {
    let currentCardIdx = questionsArray.findIndex((q) => q.state === "current");

    switch (direction) {
      case "next":
        if (currentCardIdx >= questionsArray.length - 1) return;
        else {
          // setQuequestionsArray([...questionsArray.map(item=>{
          //   item.idx
          // })])
          questionsArray[currentCardIdx].state = "previous";
          questionsArray[currentCardIdx + 1].state = "current";
          // setCurrentCardIdx((prev) => {
          //   return prev + 1;
          // });
        }
        break;
      case "previous":
        if (currentCardIdx <= 0) return;
        else {
          questionsArray[currentCardIdx].state = "next";
          questionsArray[currentCardIdx - 1].state = "current";
          // setCurrentCardIdx((prev) => {
          //   return prev - 1;
          // });
        }
        break;
    }
    setQuestionsArray(() => {
      return [...questionsArray];
    });

    // console.log(currentCardIdx);
  };

  return (
    <div className="container">
      <CardSlider
        content={questionsArray}
        setContent={setQuestionsArray}
        deleteCard={deleteOneCard}
        slide={slide}
      />
      <Form
        getContent={setQuestionsArray}
        contentArray={questionsArray}
        // setCurrentIdx={setCurrentCardIdx}
        onAdd={AddCard}
      />
      <button className="delete-all-btn" onClick={deleteAllCards}>
        Delete All
      </button>
    </div>
  );
}

export default App;
