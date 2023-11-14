import React from 'react';

const AllSportsSideBar = ({sports}) => {
    return (
        <div className="sidebar">
          <h2>Sports Navigation</h2>
          <ul>
            {sports.map((sport, index) => (
              <li key={index} className="flex flex-auto bg-gray-800 m-2 p-2 rounded-full">
                <div className="ml-2"> {sport}</div></li>
            ))}
          </ul>
        </div>
      );
    };



export default AllSportsSideBar;