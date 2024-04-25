import { useEffect, useState } from "react";
import { marineData, months } from "./constant";

interface Animal {
  name: string;
}

interface Category {
  categoryName: string;
  data: Animal[];
}
//  
interface PropsTypes {
  selectedMarinLife?: {
    name: string;
    value: string;
  };
}
// 
const MarineTable = ({ selectedMarinLife }: PropsTypes) => {
  const [categoryVisibility, setCategoryVisibility] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {

    const initialVisibilityState = Object.keys(marineData).reduce(
      (acc, key) => ({
        ...acc,
        [key]: true,
      }),
      {}
    );
    setCategoryVisibility(initialVisibilityState);
  }, []);
  console.log(categoryVisibility);


  const toggleCategoryVisibility = (categoryName: string) => {
    setCategoryVisibility((prevState) => ({
      ...prevState,
      [categoryName]: !prevState[categoryName],
    }));
  };

  const renderCategoryTable = (category: Category) => {
    const isVisible = categoryVisibility[category.categoryName] ?? false;

    return (
      <div className="overflow-x-auto mt-5 md:mt-10">
        <table className="w-full border table-auto rounded-md">
          {/* Table header */}

          <thead>
            <tr className={`${isVisible ? "bg-gray-100" : ""}`}>
              <th className="px-4 py-2 md:w-[200px] flex gap-2 w-max justify-between items-center">
                <div className="flex whitespace-nowrap">
                  {category.categoryName}
                </div>
                <button
                  className="focus:outline-none"
                  onClick={() =>
                    toggleCategoryVisibility(category.categoryName)
                  }
                >
                  {/* Toggle button icon  */}
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
                        d="M19 15l-7-7-7 7"
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
              {/* Month headers */}
              {months.map((month, index) => (
                <th
                  key={index}
                  className="px-4 py-2 text-gray-400 font-medium text-xs text-center"
                >
                  {month}
                </th>
              ))}
            </tr>
          </thead>
          {/* Table body */}
          {isVisible && (
            <tbody>
              {/* Rows for each animal */}
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

  const filteredCategories = selectedMarinLife && selectedMarinLife.value !== "All"
    ? Object.entries(marineData).filter(([_, value]) =>

      value.categoryName.toLowerCase().includes(selectedMarinLife.value.toLowerCase())
    )
    : Object.entries(marineData);

  return (
    <div>
      {filteredCategories.map(([_, category], index) => (
        <div key={index}>{renderCategoryTable(category)}</div>
      ))}
    </div>
  );
};

export default MarineTable;
