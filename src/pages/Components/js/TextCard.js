import React from "react";
import "../css/TextCard.css"

const TextCard = () => {
    const cards = [
        {
            title: "NATURAL LANGUAGE PROCESSING(NLP)",
            color: "#85befa",
            content:"NFocuses on the interaction between computers and human language. Applications include language translation, sentiment analysis, chatbots, and text summarization.",
          },
          {
            title: "LARGE LANGUAGE MODEL(LLM)",
            color: "#f2ff31",
            content:"An advanced Al system designed to understand and generate human-like text based on the input it receives",
          },
          {
            title: "DEEP LEARNING",
            color: "#f9675b",
            content:"Uses neural networks with many layers to analyze and learn from vast amounts of data. Enables machines to identify patterns, make decisions, and improve their performance over time.",
          }]

          return(
                <div className="TextCard-Container">
                    {cards.map((card, index) => (
                        <div key={index}
                            className="TextCard">
                            <div className="TextCard-Header" style={{backgroundColor: card.color}}>
                                <h4>{card.title}</h4>
                            </div>
                            <div className="TextCard-Body">
                                <h2>{card.content}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            )};

export default TextCard;