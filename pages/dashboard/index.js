import { useContext, useState } from 'react'
import Head from 'next/head'
import AuthContext from '../../store/auth-context'

const UserSettingsPage = () => {
  const { isLoggedIn } = useContext(AuthContext)
  if (!isLoggedIn) return <div className='error-message'>Not Logged In</div>

  const [onOff, setOnOff] = useState(false)

  const onOffHandler = () => {
    setOnOff(!onOff)
    console.log(onOff)
  }

  // TODO: Add 'Turn PC ON/OFF' button
  // Update database
  // Get results via API route
  // GET JSON via API route via Raspberry Pi
  // Turn On PC via Raspberry PI
  // Confirm that a request has been sent for the PC to turn on
  // Confirm that the PC has turned on
  // Change button to visualize that the PC has been turned on and add option turn off PC
  // Show directory listing for PC

  return (
    <>
      <Head>
        <title>@tijsvl | Dashboard</title>
      </Head>
      <section>
        <h1>Dashboard</h1>
        <button onClick={onOffHandler}>Turn PC {!onOff ? 'On' : 'Off'}</button>
        <h2>Browse PC</h2>

        <form>
          <input id='desired_state' value={onOff.toString()} />
        </form>
      </section>
    </>
  )
}

export default UserSettingsPage
