import Sidebar from '../components/Sidebar';

export default function Learning() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen bg-gray-50 pb-20 sm:pb-6 px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard Page</h1>
        <p className="text-gray-600">This is your dashboard. Navigation works correctly now!</p>
      </div>
    </>
  );
}
