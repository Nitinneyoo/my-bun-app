import { memo } from "react";

interface SearchProps {
  onChange: (text: string) => void;
}
function Search({ onChange }: SearchProps) {
  return (
    <div className="flex items-center justify-center mb-4">
      <input
        type="text"
        placeholder="Search users..."
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
export default memo(Search);
// This code defines a React functional component named `Search` that renders a search input field. The component accepts a prop `onChange`, which is a function that gets called whenever the text in the input field changes. The input field has some basic styling applied to it, including padding, border, and focus effects. The component is memoized using `React.memo` to optimize performance by preventing unnecessary re-renders when the props haven't changed.
// The `memo` function is imported from the `react` library, and the component is exported as the default export of the module.
// The `Search` component is designed to be reusable and can be used in other parts of the application where a search input is needed.
// The `onChange` prop allows the parent component to handle the search input changes and perform any necessary actions, such as filtering a list of items based on the search query.