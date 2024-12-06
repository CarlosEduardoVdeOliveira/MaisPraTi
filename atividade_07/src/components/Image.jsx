/* eslint-disable react/prop-types */
export function Image({ className, ...props }) {
  return <img className={`w-full h-full rounded-lg ${className}`} {...props} />;
}
