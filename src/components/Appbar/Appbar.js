import React from 'react';

const Appbar = () => {
    return (
        <div>
            <div className="navbar px-2 lg:px-28 py-5 lg:py-4 bg-primary text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-white text-primary">
                            <li><a href='/#character-design'>Character Design</a></li>
                            <li><a href='/#digital-art'>Digital Art</a></li>
                            <li><a href='/#traditional-art'>Traditional Art</a></li>
                            <li><a href='/#ai-art'>AI Art</a></li>
                        </ul>
                    </div>
                    <a href='/' className="normal-case text-2xl">
                        {/* <Typewriter
                            options={{
                                strings: ["Art Empire"],
                                autoStart: true,
                                loop: true,
                            }}
                        /> */}
                        Art Empire
                    </a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='/#character-design'>Character Design</a></li>
                        <li><a href='/#digital-art'>Digital Art</a></li>
                        <li><a href='/#traditional-art'>Traditional Art</a></li>
                        <li><a href='/#ai-art'>AI Art</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Appbar;