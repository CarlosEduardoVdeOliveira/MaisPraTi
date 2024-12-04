/* eslint-disable react/prop-types */
export function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="max-w-2xl hover:bg-gray-500 rounded-md p-2 border border-blue-300 bg-gray-600 text-gray-50"
    >
      {children}
    </button>
  );
}
