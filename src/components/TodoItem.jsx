function TodoItem({ title, description }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div>
          <h3 className="font-medium  text-gray-800">{title}</h3>

          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <button className="rounded-md border border-gray-300 px-3 py-1 text-sm hover:bg-gray-100">
          Edit
        </button>

        <button className="rounded-md bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
