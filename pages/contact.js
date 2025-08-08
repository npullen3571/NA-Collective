export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <form className="max-w-md space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 rounded bg-gray-800 border border-gray-700" />
        <input type="email" placeholder="Email" className="w-full p-2 rounded bg-gray-800 border border-gray-700" />
        <textarea placeholder="Message" className="w-full p-2 rounded bg-gray-800 border border-gray-700"></textarea>
        <button type="submit" className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 transition">Send</button>
      </form>
    </main>
  );
}