import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Sandra Bullock",
      url:
        "https://static-20.sinclairstoryline.com/resources/media/817a8b10-2db1-4182-8190-20e0611d6e77-large16x9_AP18352055612749.jpg?1545157461997",
    },
    {
      name: "Natalie Portman",
      url: "https://eskipaper.com/images/natalie-portman-7.jpg",
    },
    {
      name: "IU",
      url:
        "https://6.viki.io/image/549b73b441604635b30c4cfbf39e595c.jpeg?s=900x600&e=t",
    },
  ]);

  const [lastDirection, setLastDirection] = useState("");

  const swiped = (direction, nameToDelete) => {
    console.log("removing " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
              >
                <div className="cardContent">
                  <h3>{person.name}</h3>
                </div>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default TinderCards;
