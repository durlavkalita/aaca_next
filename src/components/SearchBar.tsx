import React from "react";

export default function SearchBar() {
  const handleDistrictChange = (e: { target: { value: string } }) => {
    const district = e.target.value;
    console.log(district);
  };

  const handleTextSearch = (e: { target: { value: string } }) => {
    const textQuery = e.target.value;
    console.log(textQuery);
  };
  return (
    <form className="flex items-stretch py-4">
      <div className="flex-grow mr-2">
        <select
          onChange={handleDistrictChange}
          className="w-full p-2 rounded-md shadow-sm focus:ring focus:ring-blue-400"
        >
          <option value="">All Districts</option>
          <option value="District1">District 1</option>
          <option value="District2">District 2</option>
          {/* Add more district options */}
        </select>
      </div>
      <div className="flex-grow mr-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded-md shadow-sm focus:ring focus:ring-blue-400"
          onChange={handleTextSearch}
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
    </form>
  );
}
