// app/about-me/page.tsx
import Link from 'next/link';
import style from './page.module.css';


export const metadata = {
    title: 'About me - devmentor.pl',
    description: 'Description - devmentor.pl',
  };

export default function AboutMePage() {
    return <section>
        <h1>About me</h1>
        <Link 
            className={style.link} 
            href="/"
        >back to home</Link>
    </section>
}