import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

import app from "../firebase/firebase.config";
import { useState } from "react";

const Login = () => {
    const [valu, setvalu]=useState(null)
   
    const provider = new GoogleAuthProvider();
    const providerr = new GithubAuthProvider();
    const auth = getAuth(app)
    const handle =()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            const user =result.user
            setvalu(user)
            console.log(user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    const github=()=>{
        signInWithPopup(auth,providerr)
        .then((result)=>{
            const user =result.user
            setvalu(user)

        })
    }
    const out =()=>{
        signOut(auth)
        .then(()=>{
            console.log(';lsdkfj')
            setvalu(null)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            {
                valu && <div>
                    <p className="py-6">{ valu.displayName}</p>
                    <p>{valu.email}</p>
                    
                    <img src={valu.photoURL} alt="" />
                    
                    </div>
            }
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            {
                valu ?<button className="btn btn-primary" onClick={out}>Logout </button>: <div><button className="btn btn-primary" onClick={handle}>Login with Google </button> <button className="btn btn-primary" onClick={github}>Login with Github </button></div>
            }
            
           
          </div>
        </div>
      </div>
    );
};

export default Login;