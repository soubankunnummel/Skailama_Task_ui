import React from 'react';

const TableSkeleton = () => {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-x-auto hide-scrollbar ">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <div className="h-10 bg-gray-300 w-24 rounded-md"></div>
              </th>
              <th>
                <div className="h-10 bg-gray-300 w-36 rounded-md"></div>
              </th>
              <th>
                <div className="h-10 bg-gray-300 w-24 rounded-md"></div>
              </th>
              <th>
                <div className="h-10 bg-gray-300 w-24 rounded-md"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {[...Array(5)].map((_, index) => (
              <tr key={index}>
                <td>
                  <div className="h-8 bg-gray-300 rounded-md"></div>
                </td>
                <td>
                  <div className="h-8 bg-gray-300 rounded-md"></div>
                </td>
                <td>
                  <div className="h-8 bg-gray-300 rounded-md"></div>
                </td>
                <td>
                  <div className="flex justify-center">
                    <div className="h-8 bg-gray-300 w-12 rounded-l-md"></div>
                    <div className="h-8 bg-gray-300 w-12 rounded-r-md"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSkeleton;
