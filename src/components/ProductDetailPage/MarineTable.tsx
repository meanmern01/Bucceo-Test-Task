import React, { useState } from "react";
import { marineData, months } from "./constant";
// Define interfaces for your data
interface Animal {
  name: string;
}

interface Category {
  categoryName: string;
  data: Animal[];
}

interface MarineData {
  [key: string]: Category;
}

const MarineTable = () => {
  const [categoryVisibility, setCategoryVisibility] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleCategoryVisibility = (categoryName: string) => {
    setCategoryVisibility((prevState) => ({
      ...prevState,
      [categoryName]: !prevState[categoryName],
    }));
  };

  const renderCategoryTable = (category: Category) => {
    const isVisible = categoryVisibility[category.categoryName] ?? false;

    return (
      <div className="overflow-x-auto mt-10">
        <table className="w-full border table-auto rounded-md">
          <thead>
            <tr className={`${isVisible ? "bg-gray-100" : ""}`}>
              <th
                className={`px-4 py-2 w-[300px] text-start flex justify-between items-center `}
              >
                <div className="flex whitespace-nowrap">
                  {category.categoryName}
                </div>
                <button
                  className="focus:outline-none"
                  onClick={() =>
                    toggleCategoryVisibility(category.categoryName)
                  }
                >
                  {isVisible ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>
              </th>
              {months.map((month, index) => (
                <th
                  key={index}
                  className={`px-4 py-2 text-gray-400 font-medium text-xs  text-center 
             `}
                >
                  {month}
                </th>
              ))}
            </tr>
          </thead>
          {isVisible && (
            <tbody>
              {category.data.map((animal, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="border-b border-grey-500 px-4 py-2">
                    {animal.name}
                  </td>
                  {months.map((_, monthIndex) => (
                    <td
                      key={monthIndex}
                      className="border-b border-grey-500 text-center px-4 py-2"
                    >
                      <div className="w-3 h-3 m-auto rounded-full bg-[#2870CC]"></div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    );
  };

  return (
    <div>
      {Object.values(marineData).map((category, index) => (
        <div key={index}>{renderCategoryTable(category)}</div>
      ))}
    </div>
  );
};

export default MarineTable;
