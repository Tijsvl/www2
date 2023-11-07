import { useState } from 'react'
import Head from 'next/head'
import emailjs from 'emailjs-com'

import { validateLength } from '../../../helpers/Helpers'
import LoadingSpinner from '../../UI/LoadingSpinner'
import classes from './Form.module.scss'

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID

const ContactForm = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('initial')
  const [error, setError] = useState(null)

  const [nameInput, setNameInput] = useState({ error: true, message: null })
  const [emailInput, setEmailInput] = useState({ error: true, message: null })
  const [subjectInput, setSubjectInput] = useState({ error: false })
  const [messageInput, setMessageInput] = useState({
    error: true,
    message: null
  })
  const [formIsValid, setFormIsValid] = useState({
    error: false,
    message: null
  })

  const nameInputHandler = (input) => setNameInput(validateLength('Name', input, 2, 32))
  const subjectInputHandler = (input) => setSubjectInput(validateLength('Subject', input, 0, 32))
  const messageInputHandler = (input) => setMessageInput(validateLength('Message', input, 6, 4000))
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

  const onSubmitHandler = (e) => {
    e.preventDefault()

    if (!nameInput.error && !emailInput.error && !messageInput.error && !subjectInput.error) {
      setIsLoading(true)
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
        (result) => {
          setIsLoading(false)
          setStatus('sent')
        },
        (error) => {
          setIsLoading(false)
          setError(e.target.message.value)
          console.log('Error:')
          console.log(error)
        }
      )
    } else {
      setFormIsValid({
        error: true,
        message: 'Form is still invalid. Did you temper with my code? 🤔'
      })
    }
  }

  return (
    <section>
      {!props.included && (
        <Head>
          <title>@tijsvl | Contact</title>
          <meta property="og:title" key="ogTitle" content="@tijsvl | Contact" />
          <meta name="twitter:title" key="twitterTitle" content="@tijsvl | Contact" />
          <meta property="og:description" key="ogDescription" content="Contact @tijsvl" />
          <meta name="twitter:description" key="twitterDescription" content="Contact @tijsvl" />
          <meta name="description" key="description" content="Contact @tijsvl" />
          <meta property="og:image" key="ogImage" content="https://tijsvl.vercel.app/img/about__tijsvl-2000.jpg" />
          <meta name="twitter:image" key="twitterImage" content="https://tijsvl.vercel.app/img/about__tijsvl-2000.jpg" />
          <link rel="canonical" key="canonical" href="https://www.tijsvl.com/contact" />
          <meta property="og:url" key="ogUrl" content="https://www.tijsvl.com/contact" />
          <meta name="twitter:url" key="twitterUrl" content="https://www.tijsvl.com/contact" />
        </Head>
      )}
      {props.included && <h1 className={classes.title}>Contact</h1>}
      {!props.included && <h1>Contact</h1>}
      {isLoading ? (
        <>
          <LoadingSpinner message="Sending..." />
        </>
      ) : (
        !error &&
        status === 'initial' && (
          <form onSubmit={onSubmitHandler} className={classes.form + ' ' + classes.contact} id="contact">
            <label htmlFor="name">Your name* {nameInput.error && <span className={nameInput.message ? classes.red : ''}>{nameInput.message}</span>}</label>
            <input
              className={nameInput.message ? classes.red : ''}
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              minLength="2"
              maxLength="32"
              onBlur={nameInputHandler}
              onChange={nameInputHandler}
              required
            />
            <label htmlFor="userEmail">Your email* {emailInput.error && <span className={emailInput.message ? classes.red : ''}>{emailInput.message}</span>}</label>
            <input
              className={emailInput.message ? classes.red : ''}
              type="email"
              id="userEmail"
              name="email"
              placeholder="example@domain.com"
              minLength="6"
              maxLength="64"
              onBlur={emailInputHandler}
              onChange={emailInputHandler}
              required
            />
            <label htmlFor="subject">Subject {subjectInput.error && <span className={subjectInput.message ? classes.red : ''}>{subjectInput.message}</span>}</label>
            <input
              className={subjectInput.message ? classes.red : ''}
              type="text"
              id="subject"
              name="subject"
              maxLength="64"
              placeholder="Your subject"
              onBlur={subjectInputHandler}
              onChange={subjectInputHandler}
            />
            <label htmlFor="message">Your message* {messageInput.error && <span className={messageInput.message ? classes.red : ''}>{messageInput.message}</span>}</label>
            <textarea
              className={messageInput.message ? classes.red : ''}
              id="message"
              name="message"
              placeholder="What can I help you with?"
              minLength="6"
              maxLength="4096"
              onBlur={messageInputHandler}
              onChange={messageInputHandler}
              required
            ></textarea>
            {!nameInput.error && !emailInput.error && !messageInput.error && !subjectInput.error ? (
              <button className={classes.submit} type="submit">
                Send Message
              </button>
            ) : (
              <>
                <button className={classes.submit} disabled>
                  Send Message
                </button>
                {formIsValid.message && <span style={{ marginLeft: '1rem' }}>{formIsValid.message}</span>}
              </>
            )}
          </form>
        )
      )}
      {status === 'sent' && (
        <div className={classes.sent}>
          <h3>Thank you!</h3>
          <p>Your message has been sent.</p>
        </div>
      )}
      {error && (
        <div className={classes.error}>
          <h3>Something went wrong :(</h3>
          <p>
            Please send your message to <a href="mailto:info@tijsvl.net">info@tijsvl.net</a>. Your message:
          </p>
          <textarea>{error}</textarea>
        </div>
      )}
    </section>
  )
}

export default ContactForm
