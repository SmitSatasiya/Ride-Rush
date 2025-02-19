import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LoggedIn from "./Loggedin";

function Navbar() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
    const [isScrolled, setIsScrolled] = useState(false);
    const isLoggedIn = LoggedIn();

    // Handle screen resize for mobile detection
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 900);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Handle scrolling effect for navbar shadow
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleToggle = () => setIsNavVisible((prev) => !prev);

    return (
        <>

            <div className={`full-size-container ${isScrolled ? "scrolled" : ""}`}>

                <div className="container">
                    <div className="navbar">
                        <div className="logo">
                            <div className="img">
                                <img src="/images/icons/logo.png" alt="Ride Rush Logo" />
                            </div>
                            <h1>Ride Rush</h1>
                        </div>

                        <nav className={`nav d-flex ${isNavVisible ? "slide-in" : "slide-out"}`}>
                            <ul className="d-flex">
                                <li>
                                    <NavLink to="/" className={({ isActive }) => (isActive ? "active-nav" : "")}>
                                        {isMobile ? <HomeIcon /> : "Home"}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/booking" className={({ isActive }) => (isActive ? "active-nav" : "")}>
                                        {isMobile ? <BookingIcon /> : "Booking"}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/inbox" className={({ isActive }) => (isActive ? "active-nav" : "")}>
                                        {isMobile ? <InboxIcon /> : "Inbox"}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/wallet" className={({ isActive }) => (isActive ? "active-nav" : "")}>
                                        {isMobile ? <WalletIcon /> : "Wallet"}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/profile" className={({ isActive }) => (isActive ? "active-nav" : "")}>
                                        {isMobile ? <ProfileIcon /> : "Profile"}
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>

                        <div className="nav-profile d-flex">
                            <a className="call-box d-flex" href="tel:+02613112005">
                                <div className="svg-box">
                                    <img src="/images/icons/call.png" alt="Call" loading="lazy" />
                                </div>
                                {!isMobile && <h4>+0261 3112005</h4>}
                            </a>

                            {isLoggedIn ? (
                                <NavLink to="/profile" className="user-profile">
                                    <div className="img-box">
                                        <img src="/images/background/profile.webp" alt="Profile" loading="lazy" />
                                    </div>
                                </NavLink>
                            ) : (
                                <div className="login-container d-flex">
                                    <NavLink to="/login" className="btn">Log In</NavLink>
                                </div>
                            )}

                            <div onClick={handleToggle} id="toggle" className="toggle-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M15 4H1V2h14zm0 5H1V7h14zM1 14h14v-2H1z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

// Icon Components
const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3z" />
    </svg>
);
const BookingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 18V8.5A4.5 4.5 0 0 1 8.5 4h7A4.5 4.5 0 0 1 20 8.5v7a4.5 4.5 0 0 1-4.5 4.5H6a2 2 0 0 1-2-2z" /><path d="M8 12h3.5a2 2 0 1 1 0 4H8V9a1 1 0 0 1 1-1h1.5a2 2 0 1 1 0 4H9m7 4h.01" /></g>
    </svg>
);
const ProfileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm-4 7a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7Z" /></svg>
);
const WalletIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M16 14a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m2.9-6q.1-.486.1-1a5 5 0 1 0-9.9 1" /><path d="M7 7.993h9c2.828 0 4.243 0 5.121.88c.879.878.879 2.293.879 5.123v2.001c0 2.83 0 4.245-.879 5.124C20.243 22 18.828 22 16 22h-6c-3.771 0-5.657 0-6.828-1.172S2 17.769 2 13.996v-2c0-3.774 0-5.66 1.172-6.833C4.115 4.22 5.52 4.036 8 4h2" /></g></svg>
);
const InboxIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.17 20.89c4.184-.277 7.516-3.657 7.79-7.9c.053-.83.053-1.69 0-2.52c-.274-4.242-3.606-7.62-7.79-7.899a33 33 0 0 0-4.34 0c-4.184.278-7.516 3.657-7.79 7.9a20 20 0 0 0 0 2.52c.1 1.545.783 2.976 1.588 4.184c.467.845.159 1.9-.328 2.823c-.35.665-.526.997-.385 1.237c.14.24.455.248 1.084.263c1.245.03 2.084-.322 2.75-.813c.377-.279.566-.418.696-.434s.387.09.899.3c.46.19.995.307 1.485.34c1.425.094 2.914.094 4.342 0M11.995 12h.01m3.986 0H16m-8 0h.009" color="currentColor" /></svg>
);

export default Navbar;
