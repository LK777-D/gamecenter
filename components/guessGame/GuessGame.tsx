"use client";
import { useGuessGameCtx } from "@/context/guessGameContext";
import Image from "next/image";
const GuessGame = () => {
  const {
    index,
    quizQuestions,
    score,
    nextQuestionHandler,
    correctAnswer,
    restart,
    restartHandler,
  } = useGuessGameCtx();
  return (
    <section className="quizbg fontskr text-white min-h-[80vh] p-5 md:min-h-[85vh] xl:min-h-[90vh] flex flex-col gap-7 items-center justify-center">
      <div className="flex flex-col gap-1 items-center">
        <span>{quizQuestions[index].question}</span>
        <div className="flex gap-3">
          <span>
            Question N: {index} / {quizQuestions.length}{" "}
          </span>
          <span className={`${correctAnswer && "scoreAnim"}`}>
            score : {score}
          </span>
        </div>
      </div>

      {!restart && (
        <>
          <Image
            alt=""
            className="blur-[4px] w-[90%] mx-auto rounded-md md:w-[50%] xl:w-[35rem]"
            src={quizQuestions[index].img}
            width={600}
            height={600}
          />
          <div className="grid grid-cols-2 gap-1 w-[90%] md:w-[50%] xl:w-[34rem] mx-auto">
            {quizQuestions[index].options.map((option, index) => (
              <button
                className="border rounded-md transition hover:bg-purple-700/70 duration-200 ease-linear p-1 border-white"
                onClick={() => nextQuestionHandler(option)}
                key={index}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
      {restart && (
        <div className="flex flex-col">
          <span className="text-green-400">your final score : {score}</span>
          <button
            className="text-purple-700 transition hover:text-purple-500 duration-200 ease-linear"
            onClick={restartHandler}
          >
            restart
          </button>
        </div>
      )}
    </section>
  );
};

export default GuessGame;
