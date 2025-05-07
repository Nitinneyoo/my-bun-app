import { memo } from "react";
import type Reminder from "../models/Reminder";

interface ReminderListProps {
  items: Reminder[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  onDeleteAll: () => void;
}

const ReminderList = memo(({ items, onDelete, onEdit, onDeleteAll }: ReminderListProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-md w-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Reminder List</h2>
      {items.length === 0 ? (
        <p className="text-gray-600">No reminders found.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((reminder) => (
            <li
              key={reminder.id}
              className="border-b border-gray-200 pb-4 last:border-b-0"
            >
              <h3 className="text-md font-medium text-gray-800">{reminder.title}</h3>
              <p className="text-gray-600 text-sm">{reminder.description}</p>
              <p className="text-sm text-gray-500">{formatDate(reminder.date)}</p>
              <div className="flex space-x-2 mt-2">
                <button
                  type="button"
                  onClick={() => onEdit(reminder.id)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => onDelete(reminder.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {items.length > 0 && (
        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={onDeleteAll}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          >
            Delete All
          </button>
        </div>
      )}
    </div>
  );
});

export default ReminderList;