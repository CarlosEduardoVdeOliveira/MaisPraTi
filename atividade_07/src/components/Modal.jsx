/* eslint-disable react/prop-types */

export function Modal({ children, ...props }) {
  return (
    <div
      className="hidden w-full h-full bg-slate-700 bg-opacity-80 absolute top-0 left-0"
      {...props}
    >
      {children}
    </div>
  );
}
