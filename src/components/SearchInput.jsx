export default function SearchInput({
  value,
  onChange,
  onSubmit,
  placeholder,
}) {
  return (
    <div className="flex gap-2 mb-6">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSubmit()}
        placeholder={placeholder}
        className="flex-1 p-2 rounded bg-gray-800"
      />
      <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 rounded">
        Search
      </button>
    </div>
  );
}