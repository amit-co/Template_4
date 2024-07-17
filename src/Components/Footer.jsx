import img5 from "/New/facebook.png";
import img6 from "/New/instagram.png";
import img7 from "/New/twitter.png";
import img from "/New/BG.png";
import RestrauntLocation from "../Components/RestrauntLocation";

export function Footer() {
    return (
        <div className="bg-fixed bg-cover " style={{ backgroundImage: `url(${img})` }}>
        <div className=" flex  flex-col lg:flex-row h-full lg:h-11/12 lg:pb-4 items-center backdrop-brightness-50 bg-white/10 ">
            <div className="flex ml-0 lg:ml-20 ">
                <RestrauntLocation />
            </div>
            <div className="conatiner mx-auto mt-24 lg:mt-6 space-y-6">
                <h1 className="text-2xl md:text-4xl sm:text-3xl lg:text-5xl tracking-widest text-white ">Connect With Us</h1>
                <div className="flex flex-col text-white md:text-lg sm:text-base text-sm lg:text-xl tracking-widest space-y-3 lg:space-y-4">
                    <p>ADDRESS- Terminal Four, Hounslow, </p>
                    <p>TW6 3AF, United Kingdom</p>
                    <p>TEL - +44 (0) 208759 7755</p>
                    <p>EMAIL - franky.rodrigues@hilton.com</p>
                </div>
                <div className="container">
                    <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-bold tracking-widest ">Follow Us</h1>
                    <div className="flex  space-x-4 mt-2 ">
                        <a href="https://www.facebook.com/yourprofile">
                            <img src={img5} />
                        </a>
                        <a href="https://www.instagram.com/yourprofile">
                            <img src={img6} />
                        </a>
                        <a href="https://twitter.com/yourprofile">
                            <img src={img7} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
}
