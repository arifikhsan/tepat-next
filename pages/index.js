import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>⚡ Tepat. Teknisi Listrik Cepat Tanggap.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-6xl font-bold">
          <span>⚡ Tepat. </span>
          <span className="text-blue-600">Teknisi Listrik Cepat Tanggap. </span>
        </h1>
        <h1 className="mt-8 text-6xl font-bold">
          <span>Segera datang!</span>
        </h1>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://www.arifikhsanudin.my.id"
          target="_blank"
          rel="noopener noreferrer">
          Made with ❤ by Arif Ikhsanudin
        </a>
      </footer>
    </div>
  );
}
