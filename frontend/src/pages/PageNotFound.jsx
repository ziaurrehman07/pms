const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-blue-500">404</h1>
        <h2 className="text-2xl font-bold text-gray-700 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
