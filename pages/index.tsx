import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>RentalPro</title>
        <meta
          name="description"
          content="A rental management system for the AV industry that doesn’t suck."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <h1 className="text-4xl">RentalPro</h1>
        <p>A rental management system for the AV industry that doesn’t suck.</p>
        <p>Follow the progress.</p>
        <ul>
          <li>
            <a href="https://github.com/carlosalfarodev/rentalpro">GitHub</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@alfarolabs">YouTube</a>
          </li>
          <li>
            <a href="https://twitter.com/carlosalfarodev">Twitter</a>
          </li>
        </ul>
      </main>
    </>
  );
}
