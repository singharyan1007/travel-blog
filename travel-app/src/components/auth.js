import React,{useState} from 'react'
import SignUp from './signup';
import SignIn from './signin';
import { useUserContext } from '../context/userContext';
const Auth = () => {
    const [index, setIndex] = useState(false);
    const toggleIndex = () => {
        setIndex((prevState) => !prevState);

    }
    const { signInWithGoogle } = useUserContext();
  return (
    <div className="conatiner">
      {!index ? <SignIn /> : <SignUp />}
      <button onClick={signInWithGoogle}>Continue with Google</button>
      <p onClick={toggleIndex}>
        {!index ? "New user? Click here" : "Already have an account"}
      </p>
    </div>
  );
}

export default Auth