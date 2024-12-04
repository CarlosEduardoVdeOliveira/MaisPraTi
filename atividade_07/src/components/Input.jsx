export function Input({ ...props }) {
  return (
    <div className="w-full">
      <input
        className="w-full text-gray-50 py-2 px-3 rounded-md outline-none border
      border-blue-200 mr-3 bg-gray-500 relative"
        {...props}
      />
    </div>
  );
}
