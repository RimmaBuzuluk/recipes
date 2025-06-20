import Head from 'next/head';
import A from './A';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Main page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex flex-col bg-white">
        <header className="border-b border-orange-300 px-4 py-3">
          <div className="max-w-7xl ">
            <A href={'/'}>
              <div className="text-orange-500 font-bold text-xl">ready to cook</div>
            </A>
          </div>
        </header>

        <main className="flex-1 px-4 py-6">
          <div className="max-w-5xl mx-auto">{children}</div>
        </main>
      </div>
    </>
  );
}
