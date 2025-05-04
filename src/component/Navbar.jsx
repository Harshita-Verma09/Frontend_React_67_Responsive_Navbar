import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h1 className="text-lg font-semibold">My Website</h1>
            {width < 768 ? (
                <button className="text-2xl">☰</button>
            ) : (
                <ul className="flex gap-6">
                    <li className="hover:underline cursor-pointer">Home</li>
                    <li className="hover:underline cursor-pointer">About</li>
                    <li className="hover:underline cursor-pointer">Contact</li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
