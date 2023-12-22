"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import { GuessGame } from "@/types/types";
import rdr2 from "@/assets/guessGame/rdr22.jpg";
import gta5 from "@/assets/guessGame/gta5.jpg";
import gta4 from "@/assets/guessGame/gta4.webp";
import mafia2 from "@/assets/guessGame/mafia2.jpg";
import cs16 from "@/assets/guessGame/cs16.jpg";
import csgo from "@/assets/guessGame/csgo.png";
import cd4mf from "@/assets/guessGame/cod4mw.jpg";
const guessGameContext = createContext<GuessGame | null>(null);

const GuessGameCtxProvider = ({ children }: { children: ReactNode }) => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [restart, setRestart] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      img: rdr2,
      question: " Guess The Blurred Video Game ! ",
      options: ["Gta Vice City", "RDR2", "Saints Row", "Damnnation"],
      answer: "RDR2",
    },
    {
      id: 2,
      img: gta5,
      question: " Guess The Blurred Video Game ! ",
      options: ["GTA 4", "Mafia 2", "GTA V", "Mobile Legends"],
      answer: "GTA V",
    },
    {
      id: 3,
      img: gta4,
      question: " Guess The Blurred Video Game ! ",
      options: ["CyberPunk", "GTA 4", "GTA 3", "GTA San Andreas"],
      answer: "GTA 4",
    },
    {
      id: 4,
      img: mafia2,
      question: " Guess The Blurred Video Game ! ",
      options: ["Cod 4", "Roblox", "Mafia 2", "Minecraft"],
      answer: "Mafia 2",
    },
    {
      id: 5,
      img: cs16,
      question: " Guess The Blurred Video Game ! ",
      options: ["Vice City", "CS 1.6", "CS GO", "San Fierro"],
      answer: "CS 1.6",
    },
    {
      id: 6,
      img: csgo,
      question: " Guess The Blurred Video Game ! ",
      options: ["Sonic the Hedgehog", "CS GO", "Lara Croft", "CS 1.6"],
      answer: "CS GO",
    },
    {
      id: 7,
      img: cd4mf,
      question: " Guess The Blurred Video Game ! ",
      options: [
        "Red Dead Redemption 2",
        "The Witcher 3: Wild Hunt",
        "COD 4",
        "Assassin's Creed Odyssey",
      ],
      answer: "COD 4",
    },
  ];

  const nextQuestionHandler = (answer: string) => {
    if (index < quizQuestions.length - 1) {
      setIndex((prevI) => prevI + 1);
    } else {
      setRestart(true);
    }
    if (answer === quizQuestions[index].answer) {
      setScore((prevScore) => prevScore + 1);
      setCorrectAnswer(true);
      setTimeout(() => {
        setCorrectAnswer(false);
      }, 300);
    }
  };
  const restartHandler = () => {
    setRestart(false);
    setIndex(0);
  };
  const ctxValue: GuessGame = {
    quizQuestions,
    index,
    score,
    nextQuestionHandler,
    correctAnswer,
    restart,
    restartHandler,
  };
  return (
    <guessGameContext.Provider value={ctxValue}>
      {children}
    </guessGameContext.Provider>
  );
};
export default GuessGameCtxProvider;

export const useGuessGameCtx = () => {
  const ctx = useContext(guessGameContext);
  if (!ctx) {
    throw new Error("ctx error");
  }
  return ctx;
};
