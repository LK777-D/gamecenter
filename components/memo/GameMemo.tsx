"use client";
import "./memo.css";
import Images from "./Images";
import { useState } from "react";
import { shuffle } from "lodash";
import Image from "next/image";

function GameMemo() {
  const [cards, setCards] = useState(shuffle([...Images, ...Images]));
  const [clicks, setClicks] = useState(0);
  const [won, setWon] = useState(false);
  const [activeCards, setActiveCards] = useState<number[]>([]);
  const [foundPairs, setFoundPairs] = useState<number[]>([]);

  function flipCard(index: number) {
    if (won) {
      setCards(shuffle([...Images, ...Images]));
      setFoundPairs([]);
      setWon(false);
      setClicks(0);
    }
    if (activeCards.length === 0) {
      setActiveCards([index]);
    }
    if (activeCards.length === 1) {
      const firstIndex = activeCards[0];
      const secondsIndex = index as number;
      if (cards[firstIndex] === cards[secondsIndex]) {
        if (foundPairs.length + 2 === cards.length) {
          setWon(true);
        }
        setFoundPairs([...foundPairs, firstIndex, secondsIndex]);
      }
      setActiveCards([...activeCards, index]);
    }
    if (activeCards.length === 2) {
      setActiveCards([index]);
    }
    setClicks(clicks + 1);
  }

  return (
    <div className="flex flex-col gap-7">
      <div className="board ">
        {cards.map((card, index) => {
          const flippedToFront =
            activeCards.indexOf(index) !== -1 ||
            foundPairs.indexOf(index) !== -1;
          return (
            <div
              key={index}
              className={"card-outer " + (flippedToFront ? "flipped" : "")}
              onClick={() => flipCard(index)}
            >
              <div className="card">
                <div className="front">
                  <Image
                    className="rounded-md"
                    width={90}
                    height={50}
                    src={card}
                    alt=""
                  />
                </div>
                <div className="back" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="stats  bg-gray-300/50 ">
        {won && (
          <>
            You won the game! Congratulations!
            <br />
            Click any card to play again.
            <br />
            <br />
          </>
        )}
        Clicks: {clicks} &nbsp;&nbsp;&nbsp; Found pairs:{foundPairs.length / 2}
      </div>
    </div>
  );
}

export default GameMemo;
