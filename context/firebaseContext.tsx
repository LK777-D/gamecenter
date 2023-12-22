"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseCtx, FirebaseUser, Post } from "@/types/types";
import { auth, db } from "@/app/firebase-config";
import {
  collection,
  addDoc,
  getDoc,
  onSnapshot,
  query,
  QuerySnapshot,
  serverTimestamp,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
const firebaseContext = createContext<FirebaseCtx | null>(null);

const FirebaseCtxProvider = ({ children }: { children: ReactNode }) => {
  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState<FirebaseUser | null>({});

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [price, setPrice] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);

  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (err) {
      console.log(err);
    }
    if (user) {
      alert("registered succesfully, log in to view all content");
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        logInEmail,
        logInPassword
      );
      console.log(user);
    } catch (err) {
      ("error logging in");
    }

    router.push("/");
  };
  const logout = async () => {
    await signOut(auth);
  };
  const addPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      title !== "" &&
      description !== "" &&
      imgLink !== "" &&
      user &&
      user.uid &&
      user &&
      user.email
    ) {
      const timestamp = serverTimestamp();
      await addDoc(collection(db, "posts"), {
        user: user.email,
        title: title,
        description: description,
        imgLink: imgLink,
        submissionDate: timestamp,
        category: category,
        userId: user.uid,
        price: price,
        id: uuidv4(),
      });
      router.push("/posts");
    }
  };
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("submissionDate", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr: Post[] = [];

      querySnapshot.forEach((doc) => {
        const postData = doc.data() as Post;
        const postWithId = { ...postData, id: doc.id };
        itemsArr.push(postWithId);
      });
      setPosts(itemsArr);

      return () => unsubscribe();
    });
  }, []);
  const deletePost = async (postId: string) => {
    try {
      await deleteDoc(doc(db, "posts", postId));
      // Optionally, you can update the local state to reflect the deletion immediately.
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  const ctxValue: FirebaseCtx = {
    setLogInEmail,
    setLogInPassword,
    setRegisterEmail,
    setRegisterPassword,
    register,
    login,
    logout,
    user,
    setCategory,
    setTitle,
    setImgLink,
    setDescription,
    addPost,
    posts,
    setPrice,
    deletePost,
  };

  return (
    <firebaseContext.Provider value={ctxValue}>
      {children}
    </firebaseContext.Provider>
  );
};

export default FirebaseCtxProvider;

export const useFirebaseCtx = () => {
  const ctx = useContext(firebaseContext);
  if (!ctx) {
    throw new Error("context provider error or something :D");
  }
  return ctx;
};
