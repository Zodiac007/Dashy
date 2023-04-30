import { Link } from "react-router-dom";

export default function CustomButton({
  text,
  bgColor,
  textColor,
  link,
  submitHandler,
}) {
  return (
    <Link to={link}>
      <button
        type="button"
        className={`inline-block rounded px-6 py-2 text-sm font-medium capitalize leading-normal hover:bg-primary-600`}
        onClick={submitHandler ? submitHandler : null}
        style={{
          backgroundColor: `${bgColor}`,
          color: `${textColor || "#fff"}`,
        }}
      >
        {text}
      </button>
    </Link>
  );
}
