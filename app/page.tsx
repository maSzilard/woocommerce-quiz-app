import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto py-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to the WooCommerce Quiz App</h1>
      <Link href="/quiz" className="text-blue-500 hover:underline">
        Take the Quiz
      </Link>
    </div>
  );
}