import React from 'react';
import HeaderBackground from '../../assets/HeaderImage.jpg';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="flex w-full sm:justify-start h-20 relative">
            <img src={HeaderBackground} alt="Header background" className="z-0 absolute h-20 w-full rounded-bl-md object-cover" />
            <div className="z-10 flex items-center  justify-center sm:justify-between mx-1 md:mx-8 w-full">
                <Link className="flex items-center" to="/">
                    <div className="sm:ml-2 lg:ml-20 sm:text-left text-center">
                        <h1 className="text-3xl font-bold text-white">Tech jobs</h1>
                        <p className="text-base text-white">Remote jobs for software engineer</p>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

//ml-auto mr-10
export default Header;