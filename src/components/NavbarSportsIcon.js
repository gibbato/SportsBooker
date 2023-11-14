import React from 'react';

const NavbarSportsIcon = ({sportName}) => {
    return (
        <div className="flex flex-auto rounded-full bg-gray-800 p-2">
            {sportName}
        </div>
    );

};

export default NavbarSportsIcon;