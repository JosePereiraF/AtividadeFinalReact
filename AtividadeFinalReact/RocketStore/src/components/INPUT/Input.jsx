import "./Styles/Input.css";
export function Input({ type, value, placeholder, onChange, className }) {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
      />
    </>
  );
}
