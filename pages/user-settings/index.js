import { useContext } from 'react';
import Head from 'next/head';
import AuthContext from '../../store/auth-context';

const UserSettingsPage = () => {
  const { isLoggedIn } = useContext(AuthContext);
  if (!isLoggedIn) return <div className="error-message">Not Logged In</div>;

  return (
    <>
      <Head>
        <title>@tijsvl | User Settings</title>
      </Head>
      <section>
        <h1>User Settings</h1>
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
          Under construction
        </div>
      </section>
    </>
  );
};

export default UserSettingsPage;
