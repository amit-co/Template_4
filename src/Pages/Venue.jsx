import PropTypes from 'prop-types';
import img from "/Venues/venue.jpg"
import VenueTemplate from '../Components/VenueTemplate';
import imgBg from "/New/BG.png";

export function Venue() {
    let venueInfo = {
        image: img,
        button: {
            link: "/gallery"
        },
        venueType: "Venue",
        location: {
            placeLine1: "Hilton London Heathrow Airport,",
            placeLine2: "Terminal-4,Hounslow TW6 3AF,United Kingdom",
            phone: "Phone: +44 (0) 208759 7755",
            email: "Email: franky.rodrigues@hilton.com"
        },
        description: `OXBO Kitchen serves breakfast. OXBO Cafe offers tempting snacks any time, and OXBO Bar provides casual drinking and dining. Each outlet has a distinct menu and responsibly sourced dishes.`
    }

    return (
        
            <div className="bg-cover pb-10 lg:mt-24 lg:pb-44" style={{ backgroundImage: `url(${imgBg})` }}>

                <div className="flex flex-col pb-10 pt-10  ">
                    <h1 className="md:text-6xl text-5xl tracking-widest text-customWhite text-center font-bold  mt-36">
                        Venue
                    </h1>
                    <p className="w-8/12  text-center tracking-widest mx-auto  text-2xl font-medium text-customWhite mt-5 ">
                    OXBO Kitchen Serves Breakfast. OXBO Cafe Offers Tempting Snacks Any Time. And OXBO Bar Provides Casual
                    Drinking And Dining. Each Outlet Has A Distinct Menu And Responsibly Sourced Dishes.
                    </p>
                </div>
            <div className="flex lg:flex-row sm:flex-col lg:space-y-0 sm:space-y-10 space-x-10 mx-40">
                <div className="flex w-80 h-72 bg-customGray2 bg-opacity-75 rounded-lg md:ml-10" >
                </div>
                <div className="flex w-80 h-72 bg-customGray2 bg-opacity-75 rounded-lg">
                </div>
                <div className="flex w-80 h-72 bg-customGray2 bg-opacity-75 rounded-lg ">
                </div>
                <div className="flex w-80 h-72 bg-customGray2 bg-opacity-75  rounded-lg ">
                </div>
                
            </div>
        </div>
    );
}
VenueTemplate.propTypes = {
    venueInfo: PropTypes.shape({
        image: PropTypes.string.isRequired,
        button: PropTypes.object.isRequired,
        link: PropTypes.string.isRequired,
        venueType: PropTypes.string.isRequired,
        location: PropTypes.shape({
            placeLine1: PropTypes.string.isRequired,
            placeLine2: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        }).isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};


export default Venue
