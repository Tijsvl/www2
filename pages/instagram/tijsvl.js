import { useContext } from 'react';

import { useRouter } from 'next/router';

import AuthContext from '../../store/auth-context';
import Instagram from '../../components/pages/User/Instagram/Instagram';

const tijsvlPage = () => {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) return <div className="error-message">Not Logged In.</div>;

  return (
    <>
      <div suppressHydrationWarning={true}>
        <Instagram account="tijsvl" />
      </div>
    </>
  );
};

export default tijsvlPage;
