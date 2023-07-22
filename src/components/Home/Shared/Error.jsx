import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img
        src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg"
        alt="404 Error"
        className="w-96 h-96 mb-4"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">404 Error</h1>
      <p className="text-xl text-gray-600 mb-4">Page not found</p>
      <a
        href="/"
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
      >
        Go back to homepage
      </a>
    </div>
  );
};

export default NotFoundPage;