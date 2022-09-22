import cx from 'classnames';
import styles from '../styles/Signin.module.css'
import Router from 'next/router'
import { useState, useEffect } from "react";


export default Signin;

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        if (email=="karim@gmail.com"&&password=="123"){

            Router.push('/Dashboard')

        }
    
      }
  return (
    <>

      <main className={cx(styles["form-signin"],"text-center","mt-5","container" ,"col-md-8")}>
        <form onSubmit={ handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input type="email"         onChange={(e) => setEmail(e.target.value)}
                className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" value={password}         onChange={(e) => setPassword(e.target.value)}
             id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

     
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
      </main>

    </>
  )
}