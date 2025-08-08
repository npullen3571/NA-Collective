import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-700 to-pink-700 text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold mb-6">NA Collective</h1>
      <p className="text-xl mb-8 text-center max-w-xl">Where Art Meets Frequency. Elevate your sound and vision with NA Collective.</p>
      <div className="space-x-4">
        <Link href="/about"><a className="px-6 py-3 bg-indigo-500 rounded hover:bg-indigo-600 transition">About</a></Link>
        <Link href="/music"><a className="px-6 py-3 bg-pink-500 rounded hover:bg-pink-600 transition">Music</a></Link>
        <Link href="/contact"><a className="px-6 py-3 bg-purple-500 rounded hover:bg-purple-600 transition">Contact</a></Link>
      </div>
    </main>
  );
}