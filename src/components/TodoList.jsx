import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Your Tasks</h2>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">
          3 Tasks
        </span>
      </div>

      <div className="space-y-3">
        <TodoItem
          title="Learn React"
          description="Learn components and props"
        />

        <TodoItem
          title="Practice JavaScript"
          description="Revise array methods"
        />

        <TodoItem
          title="Complete Assignment"
          description="Build Todo Application"
        />
      </div>
    </div>
  );
}

export default TodoList;
