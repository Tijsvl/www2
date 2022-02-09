import { useContext } from 'react';

import { useRouter } from 'next/router';
import Head from 'next/head';

import AuthContext from '../../store/auth-context';
import InstagramHead from '../../components/pages/User/Instagram/InstagramHead';

const InstagramPlannerPage = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  if (!isLoggedIn) return <div className="error-message">Not Logged In.</div>;

  return (
    <>
      <Head>
        <title>@tijsvl | Instagram Planner</title>
        <meta name="description" content="Instagram Planner" />
      </Head>
      <div suppressHydrationWarning={true}>
        <section>
          <InstagramHead />
        </section>
      </div>
    </>
  );
};

export default InstagramPlannerPage;
