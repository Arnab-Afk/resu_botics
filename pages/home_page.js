import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Resume Toolkit</h1>
      <div className={styles.options}>
        <Link href="/resume-bot">
          Resume Bot
        </Link>
        <Link href="/resume-builder">
          Resume Builder
        </Link>
        <Link href="/resume-enhancer">
          Resume Enhancer
        </Link>
      </div>
    </div>
  );
}

