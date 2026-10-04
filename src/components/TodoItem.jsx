function TodoItem({ title, description, completed }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={completed}
          readOnly
          className="h-5 w-5"
        />

        <div>
          <h3
            className={`font-medium ${
              completed ? "text-gray-400 line-through" : "text-gray-800"
            }`}
          >
            {title}
          </h3>

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
