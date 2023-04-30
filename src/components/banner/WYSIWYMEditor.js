import React from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

export default function WYSIWYMEditor({ placeholder, value, onChange, name }) {
  // console.log("value", value);
  // debugger;
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };
  return (
    <ReactQuill
      modules={modules}
      theme="snow"
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
