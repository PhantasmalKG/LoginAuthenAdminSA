// import { useState } from 'react';
import { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword} from 'firebase/auth';


const Login = () => {
    // const auth = getAuth();
    // const navigation = useNavigate();
      const videoRef = useRef<HTMLVideoElement>(null);

      useEffect(() => {
          if(videoRef.current) {
            videoRef.current.play();
          }
      },[]);

    // const [authorization, setAuthorization] = useState(false); //Authentication handler
    // const [email, setEmail] = useState(' '); //Email state
    // const [password, setPassword] = useState(''); // Password state
    // const [eMessage, setEMessage] = useState(''); // Error state

    // const googleSignIn = async () => {
    //   setAuthorization(true);

    //   signInWithPopup(auth, new GoogleAuthProvider())
    //     .then(res =>{
    //       console.log(res.user.uid);
    //       navigation('/');
    //     })
    //     .catch(error => {
    //       console.log(error);
    //       setAuthorization(false);
    //     })
    // }

    // const emailSignIn = async () => {
    //   setAuthorization(true);
    //   setEMessage('');

    //   signInWithEmailAndPassword(auth, email, password)
    //     .then(res =>{
    //         console.log(res.user.uid);
    //         navigation('/');
    //     })
    //     .catch(error => {
    //       console.log(error);
    //       setEMessage(error.message);
    //       setAuthorization(false);
    //     });
    // }

    //Function
  return (
    <div className='absolute top-0 left-0 w-screen h-screen bg-gray-700'>
      <div className='w-full'>
        <video ref={videoRef} className='w-full h-screen object-cover' autoPlay muted loop>
          <source  src='src\assets\Video\Nebula-1.mp4' type='video/mp4'/>
        </video>

        
      </div>
      
    </div>
  )
}

export default Login
