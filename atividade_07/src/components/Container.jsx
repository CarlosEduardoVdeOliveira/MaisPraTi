/* eslint-disable react/prop-types */
export function Container({ children, ...props }) {
  return (
    <div
      {...props}
      className="w-full p-6 flex flex-col items-center justify-center"
    >
      {children}
    </div>
  );
}
