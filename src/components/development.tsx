export function Development(): JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md py-8 px-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Contribute View</h2>
        <p className="text-gray-700 text-center mb-8">
          This page is currently under development. Stay tuned!
        </p>
        <div className="flex justify-center">
          <img
            className="w-64 h-64 object-cover object-center rounded-full"
            src="/images/under_construction.svg"
            alt="Under Construction"
          />
        </div>
      </div>
    </div>
  );
}
