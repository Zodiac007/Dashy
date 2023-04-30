export default function EditVideoSection({ name, value, onChange }) {
  return (
    <div className="bg-white p-5 border rounded-md">
      <div className="pb-3">
        <h2 className="text-themeBlack font-semibold">Video</h2>
      </div>
      <div className="relative">
        <input
          type="url"
          name={name}
          defaultValue={value}
          onChange={onChange}
          className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Add a youtube or vimeo link"
        />
      </div>
    </div>
  );
}
