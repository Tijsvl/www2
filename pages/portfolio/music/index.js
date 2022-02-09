import { useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';

import LoadingSpinner from '../../../components/UI/LoadingSpinner';

const MusicPage = () => {
  useEffect(() => {
    const random = '/portfolio/music/' + Math.floor(Math.random() * 4);
    Router.pathname == '/' && Router.push(`${random}`, '/', { shallow: true });
  });

  return (
    <section>
      <h1>
        <Link href='/portfolio/music/1'>Portfolio</Link>
      </h1>
      <p style={{ textAlign: 'center' }}>
        <Link href='/portfolio/music/1'>Click here to continue to the correct page...</Link>
      </p>
    </section>
  );
};

export default MusicPage;
