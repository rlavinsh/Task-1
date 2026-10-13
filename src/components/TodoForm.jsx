function TodoForm() {
  return (
    <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter your task..."
          className="flex-1 rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="Enter your Description"
          className="flex-1 rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
        />

        <button className="rounded-md bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700">
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoForm;
