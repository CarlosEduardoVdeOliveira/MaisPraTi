/* eslint-disable react/prop-types */
export function List({ children }) {
  return (
    <div>
      <li className="text-gray-50 flex justify-between items-center border border-blue-200 rounded-md p-2 mb-2">
        {children}
      </li>
    </div>
  );
}
