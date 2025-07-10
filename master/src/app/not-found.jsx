export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-center'>
      <h1 className='text-5xl font-bold mb-4'>404</h1>
      <p className='text-lg mb-6'>
        Sorry, the page you are looking for could not be found.
      </p>
      <a
        href='/'
        className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
      >
        Go Home
      </a>
    </div>
  );
}
