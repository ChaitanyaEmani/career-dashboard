import Navbar from '../components/Navbar';

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard Page</h1>
        <p className="text-gray-600">This is your dashboard. Navigation works correctly now!</p>
      </main>
    </>
  );
}
