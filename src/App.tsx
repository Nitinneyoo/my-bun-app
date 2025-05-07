import { useState, useCallback } from "react";
import "./App.css";
import ReminderList from "./component/reminderList";
import type Reminder from "./models/Reminder";

function App() {
  const [count, setCount] = useState<number>(0);
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: 1,
      title: "Buy groceries",
      description: "Milk, Bread, Eggs",
      date: "2023-10-01",
    },
    {
      id: 2,
      title: "Doctor's appointment",
      description: "Check-up at 3 PM",
      date: "2023-10-02",
    },
  ]);
  const [editingReminder, setEditingReminder] = useState<Reminder | null>(null);
  const [newReminder, setNewReminder] = useState<{
    title: string;
    description: string;
    date: string;
  }>({ title: "", description: "", date: "" });

  const handleDelete = useCallback((id: number) => {
    setReminders((prev) => prev.filter((reminder) => reminder.id !== id));
  }, []);

  const handleDeleteAll = useCallback(() => {
    setReminders([]);
  }, []);

  const handleEdit = useCallback((id: number) => {
    const reminder = reminders.find((r) => r.id === id);
    if (reminder) {
      setEditingReminder(reminder);
    }
  }, [reminders]);

  const handleSaveEdit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (editingReminder) {
      setReminders((prev) =>
        prev.map((r) => (r.id === editingReminder.id ? editingReminder : r))
      );
      setEditingReminder(null);
    }
  }, [editingReminder]);

  const handleAddReminder = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (newReminder.title && newReminder.date) {
      const newId = reminders.length > 0 ? Math.max(...reminders.map((r) => r.id)) + 1 : 1;
      setReminders((prev) => [
        ...prev,
        {
          id: newId,
          title: newReminder.title,
          description: newReminder.description,
          date: newReminder.date,
        },
      ]);
      setNewReminder({ title: "", description: "", date: "" });
    }
  }, [newReminder, reminders]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center py-8">
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-md w-full mb-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Welcome to Bun</h1>
        <p className="text-center text-gray-600 mb-4">Built with Bun and React</p>
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">Counter</h2>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setCount((prev) => prev + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            >
              Count is {count} +
            </button>
            <button
              type="button"
              onClick={() => setCount((prev) => prev - 1)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
            >
              Count is {count} -
            </button>
          </div>
          <div>
            <h2 className="text-md font-medium text-gray-800 bg-gray-100 px-3 py-1 rounded">
              Count: <span className="text-blue-600">{count}</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="add-reminder-form bg-white shadow-lg rounded-xl p-6 max-w-md w-full mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Add New Reminder</h2>
        <form onSubmit={handleAddReminder} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              id="title"
              type="text"
              value={newReminder.title}
              onChange={(e) => setNewReminder({ ...newReminder, title: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <input
              id="description"
              type="text"
              value={newReminder.description}
              onChange={(e) => setNewReminder({ ...newReminder, description: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input
              id="date"
              type="date"
              value={newReminder.date}
              onChange={(e) => setNewReminder({ ...newReminder, date: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          >
            Add Reminder
          </button>
        </form>
      </div>
      <ReminderList
        items={reminders}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onDeleteAll={handleDeleteAll}
      />
      {editingReminder && (
        <div className="modal-overlay">
          <div className="modal-content bg-white shadow-lg rounded-xl p-6 max-w-md w-full">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Edit Reminder</h2>
            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  id="edit-title"
                  type="text"
                  value={editingReminder.title}
                  onChange={(e) =>
                    setEditingReminder({ ...editingReminder, title: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="edit-description" className="block text-sm font-medium text-gray-700">Description</label>
                <input
                  id="edit-description"
                  type="text"
                  value={editingReminder.description}
                  onChange={(e) =>
                    setEditingReminder({ ...editingReminder, description: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor="edit-date" className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  id="edit-date"
                  type="date"
                  value={editingReminder.date}
                  onChange={(e) =>
                    setEditingReminder({ ...editingReminder, date: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditingReminder(null)}
                  className="flex-1 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;