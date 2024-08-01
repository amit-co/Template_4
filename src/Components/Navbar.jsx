import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import img from "/New/BG.png";
import { IoMenuOutline } from "react-icons/io5";



export default function Navbar() {
    const navigate = useNavigate();
/*    const { pathname } = useLocation();*/
    const [toggle, setToggle] = useState(false);
   
    const [displayGallery, setDisplayGallery] = useState(false);
    const [displayVenue, setDisplayVenue] = useState(false);

    const location = useLocation();
    const [selectedNav, setSelectedNav] = useState(location.pathname);

    const handleNavClick = (path) => {
        setSelectedNav(path);
    };

   

    const scrollToEnd = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-10 transition-transform duration-300">
        <div className="flex bg-customBlack2 justify-between  text-customWhite font-bold text-xl justify-around items-center border-[2px] " >
                <div className="flex lg:border bg-customGray2 bg-opacity-75  px-6 sm:-ml-10  py-10 ">
                    <h1 className="text-center">R/S LOGO</h1>
                </div>
                    <div className="text-white absolute top-10  right-6">
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

                    <div className="flex  font-bold text-xl justify-around items-center sm:py-4" >
                    <div className="sm:flex hidden md:space-x-2 lg:space-x-4 xl:space-x-24 2xl:space-x-24 ">
                    
                    <Link to="/" className={`group relative ${selectedNav === '/' ? 'cursor-pointer' : 'cursor-default'}`}  onClick={() => handleNavClick('/')}>
                        <h1>HOME</h1>
                        <div className={`w-full absolute ${selectedNav === '/' ? 'block' : 'hidden'} absolute h-[4px] bg-customWhite`}></div>
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
                       
                    </div>
                    <Link to="/privateDinning" className={`group relative ${selectedNav === '/privateDinning' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/privateDinning')}>
                        <h1>PRIVATE DINNING</h1>
                        <div className={`w-full absolute ${selectedNav === '/privateDinning' ? 'block' : 'hidden'} absolute h-[4px] bg-customWhite`}></div>
                    </Link>
                    <Link to="/giftVoucher" className={`group relative ${selectedNav === '/giftVoucher' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/giftVoucher')}>
                        <h1>GIFT VOUCHER</h1>
                        <div className={`w-full absolute ${selectedNav === '/giftVoucher' ? 'block' : 'hidden'} absolute h-[4px] bg-customWhite`}></div>
                    </Link>
                            <Link
                                className={`group relative ${selectedNav === '/contact' ? 'cursor-pointer' : 'cursor-default'}`} onClick={scrollToEnd} >
                        <h1>CONTACT</h1>
                        <div className={`w-full absolute ${selectedNav === '/contact' ? 'block' : 'hidden'} absolute h-[4px] bg-customWhite`}></div>
                    </Link>
                    
                  
                </div>
            </div>

                    {toggle && (
                        <div className={'bg-customBlack2 w-full mx-6transition-all duration-500 ease-in-out text-customWhite text-center pb-8 space-x-1 text-xl absolute top-0 bg-customBlack z-10 ${toggle ? "translate-y-0" : "translate-y-[-100vh]"} '}
                    
                    >
                        <div className="text-white">
                            {toggle ? (
                                <RxCross2
                                    onClick={() => setToggle(false)}
                                    className="md:hidden absolute right-4 mt-2 cursor-pointer text-4xl"
                                />
                            ) : (
                                <IoMenuOutline
                                    onClick={() => setToggle(true)}
                                    className="md:hidden cursor-pointer text-3xl"
                                />
                            )}
                        </div>
                    <Link to="/" className="cursor-pointer ">
                        <h1
                            className="hover:text-customPink"
                            onClick={() => setToggle(false)}
                        >
                            HOME
                        </h1>
                    </Link>
                    <Link to="/" className="w-fit mx-auto relative cursor-pointer">
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
                                    to="/venue"
                                    className="hover:text-customPink transition-all duration-100"
                                >
                                    RESTAURANT
                                </Link>
                                <Link onClick={() => setToggle(false)}
                                    to="/venue"
                                    className="hover:text-customPink transition-all duration-100"
                                >
                                    BAR
                                </Link>
                                <Link onClick={() => setToggle(false)}
                                    to="/venue"
                                    className="hover:text-customPink transition-all duration-100"
                                >
                                    CAFE
                                </Link>
                                <Link onClick={() => setToggle(false)}
                                    to="/venue"
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
                    <Link to="/" className="relative cursor-pointer">
                        <h1
                            className="hover:text-customPink"
                            onClick={() => setToggle(false)}
                        >
                            CONTACT
                        </h1>
                    </Link>
                    <Link to="/" onMouseEnter={() => setDisplayGallery(true)} onMouseLeave={() => setDisplayGallery(false)} className="relative cursor-pointer">
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
                                        to="/"
                                        className="hover:text-customPink transition-all duration-100"
                                    >
                                        FOOD
                                    </Link>
                                    <Link onClick={() => setToggle(false)}
                                        to="/"
                                        className="hover:text-customPink transition-all duration-100"
                                    >
                                        DRINKS
                                    </Link>
                                    <Link onClick={() => setToggle(false)}
                                        to="/"
                                        className="hover:text-customPink transition-all duration-100"
                                    >
                                        TEAM
                                    </Link>
                                    <RxCross2 onClick={() => setDisplayGallery(false)} className="absolute text-3xl top-[-7px] right-3" />

                                </div>
                            </div>

                        )}
                    </Link>
                    <Link to="/" className="relative cursor-pointer">
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
            </div>
            </>
    );
}
