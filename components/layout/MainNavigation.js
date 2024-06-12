import Link from 'next/link';
import { useRouter } from 'next/router';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  const router = useRouter();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li className={router.pathname === '/' ? classes.active : ''}>
            <Link href='/'>All Meetups</Link>
          </li>
          <li className={router.pathname === '/new-meetup' ? classes.active : ''}>
            <Link href='/new-meetup'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
