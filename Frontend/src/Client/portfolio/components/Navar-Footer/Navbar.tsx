import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

interface INavbarPropsPortFolio {
    theams?: string
}

const Navbar: React.FC<INavbarPropsPortFolio> = () => {

    const theme = useSelector((state: RootState) => state.themeChange.Theme);

    const menus = [
        'Project',
        'Certificate',
        'Article',
    ];

    return (
        <nav className={`${theme} flex fixed top-0 left-0 w-full py-4 px-16 items-center justify-between h-[64px]`}>
            <h5 className={`text-primary`}>
                Abdurrachman Farras
            </h5>
            <div className="flex flex-row-reverse items-center gap-7">
                {menus.map((menu, index) => (
                    <h6 key={index}>{menu}</h6>
                ))}
            </div>
        </nav >
    );
};

export default Navbar;
