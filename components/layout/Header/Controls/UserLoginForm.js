import Link from 'next/link'
import React, { useState, useRef, useContext } from 'react'

import AuthContext from '../../../../store/auth-context'
import { validateLength } from '../../../../helpers/Helpers'
import classes from './UserLoginForm.module.scss'

const AuthForm = () => {
  const authCtx = useContext(AuthContext)
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [inviteCode, setInviteCode] = useState('')

  const [error, setError] = useState(null)

  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const inviteInputRef = useRef()
  const [emailInput, setEmailInput] = useState({ error: true, message: null })
  const [passwordInput, setPasswordInput] = useState({
    error: true,
    message: null
  })

  const emailInputHandler = (e) => {
    const input = e
    setEmailInput(validateLength('Email', input, 6, 64))
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if (!reg.test(e.target.value.trim())) {
      setEmailInput({
        error: true,
        message: 'Email invalid'
      })
    } else {
      setEmailInput({ error: false })
    }
  }

  const passwordInputHandler = (input) => setPasswordInput(validateLength('Password', input, 6, 16))
  const inviteInputHandler = (input) => setInviteCode(inviteInputRef.current.value.toUpperCase())
  const switchAuthModeHandler = () => setIsLogin((prevState) => !prevState)

  const submitHandler = (e) => {
    e.preventDefault()

    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value

    let enteredInvite = ''
    enteredInvite = inviteCode.toUpperCase()

    setError(null)

    if (!isLogin && enteredInvite !== process.env.NEXT_PUBLIC_LOGIN_CODE) return setError('INVALID_CODE')

    let url

    setIsLoading(true)
    isLogin
      ? (url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.NEXT_PUBLIC_LOGIN_API}`)
      : (url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.NEXT_PUBLIC_LOGIN_API}`)

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        setIsLoading(false)
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed.'
            if (data && data.error && data.error.message)
              errorMessage = data.error.message.replace('WEAK_PASSWORD : ', '')

            throw new Error(errorMessage)
          })
        }
      })
      .then((data) => {
        const expirationTime = new Date(new Date().getTime() + +data.expiresIn * 10000)
        authCtx.login(data.idToken, data.email, expirationTime.toISOString())
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  return (
    <section className={classes.authForm}>
      <h1>{isLogin ? 'Login' : 'Sign up'}</h1>
      <form onSubmit={submitHandler} className={classes.form + ' ' + classes.login}>
        <label htmlFor='email'>
          Your email*{' '}
          {emailInput.error && (
            <span className={emailInput.message ? classes.red : ''}>{emailInput.message}</span>
          )}
        </label>
        <input
          type='email'
          id='email'
          placeholder='email@domain.com'
          minLength='6'
          maxLength='64'
          onBlur={emailInputHandler}
          onChange={emailInputHandler}
          ref={emailInputRef}
          required
        />
        <label htmlFor='password'>
          Your password{' '}
          {passwordInput.error && (
            <span className={passwordInput.message ? classes.red : ''}>{passwordInput.message}</span>
          )}
        </label>
        <input
          type='password'
          id='password'
          minLength='6'
          maxLength='64'
          onBlur={passwordInputHandler}
          onChange={passwordInputHandler}
          ref={passwordInputRef}
          required
        />
        {!isLogin && (
          <>
            <label htmlFor='code'>Invitation Code</label>
            <input
              className={classes.code}
              type='text'
              id='code'
              name='code'
              minLength='6'
              maxLength='10'
              onBlur={inviteInputHandler}
              onChange={inviteInputHandler}
              ref={inviteInputRef}
              value={inviteCode}
              required
            />
          </>
        )}
        {!isLogin && error === 'INVALID_CODE' && <p className={classes.message}>Invalid code.</p>}
        {isLogin && error && <p className={classes.message}>Invalid email/password combination.</p>}
        {!isLoading && (
          <button type='submit' className={classes.submit}>
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        )}
        {isLoading && <p className={classes.message}>One moment please...</p>}
        <button type='button' onClick={switchAuthModeHandler} className={classes.toggle}>
          {isLogin ? 'Create new account' : 'Already have an account?'}
        </button>
        {isLogin && (
          <div className={classes.forgot + ' disable-link'}>
            <Link href='/forgot-password'>
              <a>Forgot password?</a>
            </Link>
          </div>
        )}
      </form>
    </section>
  )
}

export default AuthForm
