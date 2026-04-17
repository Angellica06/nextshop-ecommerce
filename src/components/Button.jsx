function Button({ children, className = "" }) {
  return (
    <button
      className={`bg-amber-500 py-3 px-6 mt-3 rounded-3xl cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
