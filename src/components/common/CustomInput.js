export default function CustomInput({
  placeholder,
  value,
  onChange,
  name,
  type,
}) {
  return (
    <div className="relative py-4">
      <input
        type={type}
        name={name}
        defaultValue={value}
        onChange={onChange}
        className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder={placeholder || "Add a youtube or vimeo link"}
      />
    </div>
  );
}
