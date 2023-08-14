import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    // now submit will happen when we press enter key
    e.preventDefault();
    if (!query.trim()) return;

    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        // className=" w-64 rounded-full bg-yellow-200 px-3 py-[6px] transition-all focus:w-72 focus:outline-none focus:ring focus:ring-yellow-300"
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-72 sm:focus:w-80"
      />
    </form>
  );
};

export default SearchOrder;
