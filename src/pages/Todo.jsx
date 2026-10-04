import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function Todo() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">My Todo App</h1>

          <p className="mt-2 text-gray-500">Manage your daily tasks</p>
        </div>

        <TodoForm />

        <TodoList />
      </div>
    </div>
  );
}

export default Todo;
