"use client";
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import "@/styles/login.css"
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const { toast } = useToast();
  const router = useRouter();

  const saveSignupDataToCookies = (e : React.MouseEvent<HTMLButtonElement>,name: string, email: string, password: any) => {
    e.preventDefault();
    const signupData = { name, email, password };
    Cookies.set('signupData', JSON.stringify(signupData));
    if(!name || !email || !password) {
      return toast({
        title: "Error",
        description: "All fields are required",
      })
    }
    setEmail('');
    setPassword('');
    setName('');
    toast({
      title: "Success",
      description: "Account created successfully",
      
    })
};


    const checkSignupDataBeforeLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const signupData = Cookies.get('signupData');
      const signupDataObj = JSON.parse(signupData as any);
      console.log(signupDataObj);
      console.log(passwordLogin);
      if (signupDataObj.email === emailLogin && signupDataObj.password === passwordLogin) {
        router.push('/products');
        router.refresh();
        return;
      } 
      
      console.log('Invalid email or password');
      return toast({
        title: "Error",
        description: "Invalid email or password",
      })
    };



    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.querySelector('.container');

        if (signUpButton) {
            signUpButton.addEventListener('click', () => {
                if (container) {
                    container.classList.add("right-panel-active");
                }
            });
        }

        if (signInButton) {
            signInButton.addEventListener('click', () => {
                if (container) {
                    container.classList.remove("right-panel-active");
                }
            });
        }

        return () => {
            if (signUpButton) {
                signUpButton.removeEventListener('click', () => {
                    if (container) {
                        container.classList.add("right-panel-active");
                    }
                });
            }

            if (signInButton) {
                signInButton.removeEventListener('click', () => {
                    if (container) {
                        container.classList.remove("right-panel-active");
                    }
                });
            }
        };
    }, []);

  return (
    <div>
      <div className="container containe lg:w-screen lg:h-screen md:w-[700px] md:h-[400px] h-screen w-screen" id="container">
        <div className="form-container sign-up-container">
          <form action="#" className="lg:p-10 space-y-7">
            <h1 className="text-4xl tracking-wide">Create Account</h1>
            <p className="text-xs">or use your <span className="text-[#FF4B2B]">email</span> for registration</p>
            <input type="text" placeholder="Name" value={name} onChange={
              (e) => {
                setName(e.target.value);
              }
            
            }/>
            <input type="email" placeholder="Email" value={email} onChange={
              (e) => {
                setEmail(e.target.value);
              }
            
            }/>
            <input type="password" placeholder="Password" value={password} onChange={
              (e) => {
                setPassword(e.target.value);
              }
            }/>
            <button onClick={(e) => {
              saveSignupDataToCookies(e,name, email, password);
            }}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="lg:p-20 space-y-4" autoComplete="on">
            <h1 className="text-4xl tracking-wide">Sign in</h1>
            <p className="text-xs">or use your <span className="text-[#FF4B2B] font-bold">account</span></p>
            <input type="email" placeholder="Email" autoComplete="on" value={emailLogin} onChange={
              (e) => {
                setEmailLogin(e.target.value);
              }
            } />
            <input type="password" placeholder="Password" value={passwordLogin} onChange={
              (e) => {
                setPasswordLogin(e.target.value);
              }
            }/>
            <a>Forgot your password?</a>
            <button onClick={checkSignupDataBeforeLogin}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right lg:p-10">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
