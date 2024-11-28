/* eslint-disable react/prop-types */
export function List({ children }) {
  return (
    <div className="w-full">
      <li className="w-full text-gray-50 flex justify-between items-center border border-blue-200 rounded-md p-2 mb-2 gap-4">
        {children}
      </li>
    </div>
  );
}
