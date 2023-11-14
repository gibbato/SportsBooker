import React from 'react';

const SportBox = ({ sportName }) => {
  return (
    <div className="bg-gray-800 h-32 p-4 rounded-lg shadow-lg text-white">
    <h1 className="text-xl font-semibold mb-2">{sportName}</h1>
    <a href="#" className="text-blue-500">
      View Details
    </a>
  </div>
);
};

export default SportBox;