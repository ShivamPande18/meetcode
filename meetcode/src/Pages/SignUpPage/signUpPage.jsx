import React, { useState } from 'react'
import "./style.css"
import "../../style.css"
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, setDoc, getDoc } from "firebase/firestore";
import { doc, updateDoc, query, orderBy, limit } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import SignUp from './signUp';
import Username from './username';
import { useNavigate } from "react-router-dom"
import { setIsLogin } from "../../ProtectedRoute"



const firebaseConfig = {
    apiKey: "AIzaSyA-JKk7OFQ9t6CCFT63T3epcL3f_TlZ4Qo",
    authDomain: "yeetcode-d1441.firebaseapp.com",
    projectId: "yeetcode-d1441",
    storageBucket: "yeetcode-d1441.appspot.com",
    messagingSenderId: "186850139219",
    appId: "1:186850139219:web:2bf6d056bc58c5dedebaa6",
    measurementId: "G-ZLBPN6Y2X1",
    // databaseURL: "https://xxxxx.firebaseio.com"
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth(app);
const db = getFirestore(app);
let tempId = "as";

// await getLeader();

export async function getLeader(uid) {
    const dbRef = collection(db, "users");
    const q = query(dbRef, orderBy("score", "desc"), limit(2));
    const querySnapshot = await getDocs(q);
    // console.log(quw)
    let dataRes = [];

    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    dataRes.push(docSnap.data())

    querySnapshot.forEach((doc) => {
        dataRes.push(doc.data());
    });

    return dataRes;
}

export async function updateScore(uid, score) {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    await updateDoc(docRef, {
        score: Math.max(docSnap.data()['score'], score),
    });

    let dataRes = [];
    dataRes.push(docSnap.data());

    const dbRef = collection(db, "users");
    const q = query(dbRef, orderBy("score", "desc"), limit(2));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        dataRes.push(doc.data());
    });
    return dataRes;

    // const querySnapshot = await getDocs(collection(db, "users"));
    // db.collection("users")
}


function SignUpPage() {
    // let tempId = "";

    const nav = useNavigate()

    const [id, setId] = useState("")
    const [getUsername, setGetUsername] = useState(false)





    async function setUser(name) {
        try {
            await setDoc(doc(db, "users", id), {
                uid: id,
                username: name,
                score: 0,
            })
            // const docRef = await addDoc(collection(db, "users", "shivam"), {
            //     uid: id,
            //     username: name,
            //     score: 0,
            // });
            // console.log("Document written with ID: ", docRef.id);
            setIsLogin(true);
            nav("/play", { state: { uid: id } });
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }

    async function getUser() {
        const querySnapshot = await getDocs(collection(db, "users"));

        let flag = false;

        querySnapshot.forEach((doc) => {
            if (doc.data()['uid'] == tempId) flag = true;
        });

        if (flag) {
            setIsLogin(true);
            nav("/play", { state: { uid: tempId } })
        }
        else setGetUsername(true)
    }

    function googleSignin() {
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                const uid = user.uid;
                setId(uid);
                tempId = uid
                getUser()
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log("errorMessage");
            });
    }

    function gitSignin() {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GithubAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (

        <div className='signupPage'>
            <nav className="navbar">
                <h1 className="icon">YEET<span className="iconSpan">CODE</span></h1>
            </nav>
            {getUsername ? <Username setUser={setUser} /> : <SignUp googleSignin={googleSignin} gitSignin={gitSignin} />}
        </div>
    )
}

export default SignUpPage