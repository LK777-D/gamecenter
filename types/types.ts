import { SetStateAction,Dispatch,  } from "react"
import { StaticImageData } from "next/image";

export type FirebaseUser = {
    email?:string | null,
    uid?:string 
}
export type Post = {
    title: string;
    description: string;
    category: string;
    userId?: string;
    submissionDate: number;
    imgLink: string,
    user:string,
    price:number,
    id?: string
    
  };

export type FirebaseCtx = {
    setLogInEmail: Dispatch<SetStateAction<string>>,
    setLogInPassword: Dispatch<SetStateAction<string>>,
    setRegisterEmail:Dispatch<SetStateAction<string>>,
    setRegisterPassword:Dispatch<SetStateAction<string>>,
    register: () => Promise<void>,
    login:() => Promise<void>,
    logout:() => Promise<void>,
    setCategory: Dispatch<SetStateAction<string>>,
    setTitle: Dispatch<SetStateAction<string>>,
    setImgLink: Dispatch<SetStateAction<string>>,
    setDescription: Dispatch<SetStateAction<string>>,
    user: FirebaseUser | null  ;
    addPost: (e: React.FormEvent) => Promise<void>
    setPrice: Dispatch<SetStateAction<number>>
    posts : Post[]
    deletePost: (postId: string) => Promise<void>
    
}
export type PostListProps = {
 
    filter: string
}


// gussGame
export type quizQuestionsProps = {
    id: number;
    img: StaticImageData;
    question: string;
    options: string[];
    answer: string;
    }
export type GuessGame = {
    quizQuestions:quizQuestionsProps[]
    index:number
    nextQuestionHandler: (answer:string) => void
    score:number
    correctAnswer:boolean
    restartHandler: () => void
    restart:boolean
}