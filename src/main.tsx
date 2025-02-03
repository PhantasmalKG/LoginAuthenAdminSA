import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App.tsx'
// import { initializeApp } from "firebase/app";
import './index.css'


// const firebaseConfig = {
//   apiKey: "AIzaSyDY3PpaOFEUQvrSEgaLIICOtSiX1NfjJt4",
//   authDomain: "astralkg-authentication.firebaseapp.com",
//   projectId: "astralkg-authentication",
//   storageBucket: "astralkg-authentication.firebasestorage.app",
//   messagingSenderId: "537201752018",
//   appId: "1:537201752018:web:0952d04f4f4f2a96733a0b"
// };

// const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')!).render(
    <Router>
        <Routes>
            <Route path="/" element={<App />}/>
        </Routes>
    </Router>
    
    
)
