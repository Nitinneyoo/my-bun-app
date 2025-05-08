import { useCallback, useState } from "react";

import Search from "../models/search";

const allUsers = [
  "Nitin",
  "Shivam",
  "Shivendra",
  "Shivendra Singh",
  "Shivendra Singh Rajput",
  "Ankit Singh Chauhan",
];

// biome-ignore lint/complexity/noBannedTypes: <explanation>
type DemoProps = {};

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export default function Demo({}: DemoProps) {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback((text: string) => {
    const filteredUsers = allUsers.filter((user) =>
      user.toLowerCase().includes(text.toLowerCase())
    );
    setUsers(filteredUsers);  
  },[]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Search Users</h1>
      <Search onChange={handleSearch} />
      <ul className="list-disc list-inside">
        {users.map((user) => (
          <li key={user} className="text-lg">
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
} // This code defines a React functional component named `Demo` that renders a search input field and a list of users. The component maintains a state variable `users` that contains the list of users to be displayed. The `handleSearch` function filters the original list of users based on the text entered in the search input field, and updates the `users` state accordingly. The component uses Tailwind CSS classes for styling.
