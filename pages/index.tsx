// React, NextJS imports
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Internal Components imports
import { ROUTES } from '../utils/constants';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push(ROUTES.HOME, undefined, { shallow: true });
  }, [router]);
}
