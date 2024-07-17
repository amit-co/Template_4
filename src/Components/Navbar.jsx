import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import img from "/New/BG.png";
import { IoMenuOutline } from "react-icons/io5";



export default function Navbar() {
    const navigate = useNavigate();
/*    const { pathname } = useLocation();*/
    const [toggle, setToggle] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [displayGallery, setDisplayGallery] = useState(false);
    const [displayVenue, setDisplayVenue] = useState(false);

    const location = useLocation();
    const [selectedNav, setSelectedNav] = useState(location.pathname);

    const handleNavClick = (path) => {
        setSelectedNav(path);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <>
            
        <div className="flex bg-customBlack2 text-customWhite font-bold text-xl justify-around items-center  border-[2px] fixed top-0 left-0 right-0 z-10 transition-transform duration-300 " >
                <div className="flex border px-6 -ml-10 py-10">
                    <h1>R/S LOGO</h1>
                </div>
                <div className="text-white">
                    {toggle ? (
                        <RxCross2
                            onClick={() => setToggle(false)}
                            className="md:hidden cursor-pointer text-4xl"
                        />
                    ) : (
                        <IoMenuOutline
                            onClick={() => setToggle(true)}
                            className="md:hidden cursor-pointer text-3xl"
                        />
                    )}
                </div>
                <div className="xl:flex lg:flex md:flex hidden md:space-x-2 lg:space-x-4 xl:space-x-12 2xl:space-x-16 mr-14">
                    
                    <Link to="/" className={`group relative ${selectedNav === '/' ? 'cursor-pointer' : 'cursor-default'}`}  onClick={() => handleNavClick('/')}>
                        <h1>HOME</h1>
                        <div className={`w-full absolute ${selectedNav === '/' ? 'block' : 'hidden'} absolute h-[4px] bg-customWhite`}></div>
                    </Link>
                    <Link to="/bookNow" className={`group relative ${selectedNav === '/bookNow' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/bookNow')}>
                        <h1>BOOK NOW</h1>
                        <div className={`w-full absolute ${selectedNav === '/bookNow' ? 'block' : 'hidden'} absolute h-[4px] bg-customWhite`}></div>
                    </Link>
                    <Link to="/menu" className={`group relative ${selectedNav === '/menu' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/menu')}>
                        <h1>MENU</h1>
                        <div className={`w-full absolute ${selectedNav === '/menu' ? 'block' : 'hidden'} absolute h-[4px] bg-customWhite`}></div>
                    </Link>
                    <div className={`group relative ${selectedNav === '/venue' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/venue')}>
                        <h1
                            onClick={() => navigate("/venue")}
                            onMouseEnter={() => setDisplayVenue(true)}
                            onMouseLeave={() => setDisplayVenue(false)}
                        >
                            VENUE
                        </h1>
                        <div className={`w-full absolute ${selectedNav === '/venue' ? 'block' : 'hidden'} absolute h-[4px] bg-customWhite`}></div>
                        {displayVenue && (
                            <div
                                onMouseEnter={() => setDisplayVenue(true)}
                                onMouseLeave={() => setDisplayVenue(false)}
                                className="bg-repeat flex flex-col z-10 p-2 space-y-3 absolute w-[10vw]"
                                style={{ backgroundImage: `url(${img})` }}
                            >
                                <Link
                                    to="/venue/restaurant"
                                    className="hover:text-cutomOrange transition-all duration-100"
                                >
                                    RESTAURANT
                                </Link>
                                <Link
                                    to="/venue/bar"
                                    className="hover:text-cutomOrange transition-all duration-100"
                                >
                                    BAR
                                </Link>
                                <Link
                                    to="/venue/cafe"
                                    className="hover:text-cutomOrange transition-all duration-100"
                                >
                                    CAFE
                                </Link>
                                <Link
                                    to="/venue/ird"
                                    className="hover:text-cutomOrange transition-all duration-100"
                                >
                                    IRD
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link to="/privateDinning" className={`group relative ${selectedNav === '/privateDinning' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/privateDinning')}>
                        <h1>PRIVATE DINNING</h1>
                        <div className={`w-full absolute ${selectedNav === '/privateDinning' ? 'block' : 'hidden'} absolute h-[4px] bg-customWhite`}></div>
                    </Link>
                    <Link to="/giftVoucher" className={`group relative ${selectedNav === '/giftVoucher' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/giftVoucher')}>
                        <h1>GIFT VOUCHER</h1>
                        <div className={`w-full absolute ${selectedNav === '/giftVoucher' ? 'block' : 'hidden'} absolute h-[4px] bg-customWhite`}></div>
                    </Link>
                    <Link to="/contact" className={`group relative ${selectedNav === '/contact' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/contact')}>
                        <h1>CONTACT</h1>
                        <div className={`w-full absolute ${selectedNav === '/contact' ? 'block' : 'hidden'} absolute h-[4px] bg-customWhite`}></div>
                    </Link>
                    <div className={`group relative ${selectedNav === '/gallery' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/gallery')}>
                        <h1
                            onClick={() => navigate("/gallery")}
                            onMouseEnter={() => setDisplayGallery(true)}
                            onMouseLeave={() => setDisplayGallery(false)}
                        >
                            GALLERY
                        </h1>
                        <div className={`w-full absolute ${selectedNav === '/gallery' ? 'block' : 'hidden'} absolute h-[4px] bg-customWhite`}></div>
                        {displayGallery && (
                            <div
                                onMouseEnter={() => setDisplayGallery(true)}
                                onMouseLeave={() => setDisplayGallery(false)}
                                className="bg-repeat flex flex-col z-10 p-2 space-y-3 absolute w-[10vw]"
                                style={{ backgroundImage: `url(${img})` }}
                            >
                                <Link
                                    to="/gallery/food"
                                    className="hover:text-cutomOrange transition-all duration-100"
                                >
                                    FOOD
                                </Link>
                                <Link
                                    to="/gallery/drinks"
                                    className="hover:text-cutomOrange transition-all duration-100"
                                >
                                    DRINKS
                                </Link>
                                <Link
                                    to="/gallery/teams"
                                    className="hover:text-cutomOrange transition-all duration-100"
                                >
                                    TEAMS
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link to="/about" className={`group relative ${selectedNav === '/about' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/about')}>
                        <h1>ABOUT</h1>
                        <div className={`w-full absolute ${selectedNav === '/about' ? 'block' : 'hidden'} absolute h-[4px] bg-customBrown`}></div>
                    </Link>
                </div>
            

            {toggle && (
                <div className=" bg-repeat w-2/6  text-white text-center pb-8 space-x-1 text-xl bg-customBlack z-10 absolute  "
                    style={{ backgroundImage: `url(${img})` }}
                >
                    <Link to="/" className="cursor-pointer ">
                        <h1
                            className="hover:text-customPink"
                            onClick={() => setToggle(false)}
                        >
                            HOME
                        </h1>
                    </Link>
                    <Link to="/bookNow" className="w-fit mx-auto relative cursor-pointer">
                        <h1
                            className="hover:text-customPink"
                            onClick={() => setToggle(false)}
                        >
                            BOOK NOW
                        </h1>
                    </Link>

                    <Link to="/menu" className="w-fit mx-auto cursor-pointer relative">
                        <h1
                            className="hover:text-customPink"
                            onClick={() => setToggle(false)}
                        >
                            MENU
                        </h1>
                    </Link>
                    <Link
                        to="/venue"
                        onMouseEnter={() => setDisplayVenue(true)}
                        onMouseLeave={() => setDisplayVenue(false)}
                        className="cursor-pointer"
                    >
                        <h1
                            className="hover:text-customPink"
                            onClick={() => setToggle(false)}
                        >
                            VENUE
                        </h1>
                        {displayVenue && (
                            <div
                                onMouseEnter={() => setDisplayVenue(true)}
                                onMouseLeave={() => setDisplayVenue(false)}
                                className="bg-repeat rounded-md flex shadow-md flex-col z-10 p-2 space-y-3 absolute left-1/2 transform -translate-x-1/2 w-[60vw]"
                                style={{ backgroundImage: `url(${img})` }}
                            >
                                <Link onClick={() => setToggle(false)}
                                    to="/venue/restaurant"
                                    className="hover:text-customPink transition-all duration-100"
                                >
                                    RESTAURANT
                                </Link>
                                <Link onClick={() => setToggle(false)}
                                    to="/venue/bar"
                                    className="hover:text-customPink transition-all duration-100"
                                >
                                    BAR
                                </Link>
                                <Link onClick={() => setToggle(false)}
                                    to="/venue/cafe"
                                    className="hover:text-customPink transition-all duration-100"
                                >
                                    CAFE
                                </Link>
                                <Link onClick={() => setToggle(false)}
                                    to="/venue/ird"
                                    className="hover:text-customPink transition-all duration-100"
                                >
                                    IRD
                                </Link>
                                <RxCross2 onClick={() => setDisplayVenue(false)} className="absolute text-3xl top-[-7px] right-3" />

                            </div>
                        )}
                    </Link>
                    <Link to="/privateDinning" className="relative cursor-pointer">
                        <h1
                            className="hover:text-customPink"
                            onClick={() => setToggle(false)}
                        >
                            PRIVATE DINNING
                        </h1>
                    </Link>
                    <Link to="/giftVoucher" className="relative cursor-pointer">
                        <h1
                            className="hover:text-customPink"
                            onClick={() => setToggle(false)}
                        >
                            GIFT VOUCHER
                        </h1>
                    </Link>
                    <Link to="/contact" className="relative cursor-pointer">
                        <h1
                            className="hover:text-customPink"
                            onClick={() => setToggle(false)}
                        >
                            CONTACT
                        </h1>
                    </Link>
                    <Link to="/gallery" onMouseEnter={() => setDisplayGallery(true)} onMouseLeave={() => setDisplayGallery(false)} className="relative cursor-pointer">
                        <h1
                            className={` hover:text-customPink`}
                            onClick={() => setToggle(false)}
                        >
                            GALLERY
                        </h1>
                        {displayGallery && (
                            <div className="relative">
                                <div
                                    onMouseEnter={() => setDisplayGallery(true)}
                                    onMouseLeave={() => setDisplayGallery(false)}
                                    className="bg-repeat rounded-md flex shadow-md flex-col z-10 p-2 space-y-3 absolute left-1/2 transform -translate-x-1/2 w-[60vw]"
                                    style={{ backgroundImage: `url(${img})` }}
                                >
                                    <Link onClick={() => setToggle(false)}
                                        to="/gallery/food"
                                        className="hover:text-customPink transition-all duration-100"
                                    >
                                        FOOD
                                    </Link>
                                    <Link onClick={() => setToggle(false)}
                                        to="/gallery/drinks"
                                        className="hover:text-customPink transition-all duration-100"
                                    >
                                        DRINKS
                                    </Link>
                                    <Link onClick={() => setToggle(false)}
                                        to="/gallery/teams"
                                        className="hover:text-customPink transition-all duration-100"
                                    >
                                        TEAM
                                    </Link>
                                    <RxCross2 onClick={() => setDisplayGallery(false)} className="absolute text-3xl top-[-7px] right-3" />

                                </div>
                            </div>

                        )}
                    </Link>
                    <Link to="/about" className="relative cursor-pointer">
                        <h1
                            className="hover:text-customPink"
                            onClick={() => setToggle(false)}
                        >
                            ABOUT
                        </h1>
                    </Link>
                </div>
            )}
            </div>
            </>
    );
}
