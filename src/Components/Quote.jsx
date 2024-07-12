import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { quoteData } from "../quoteData";
import { useLocation } from "react-router-dom";
import logo from "/logo.png";
import img from "/Textures/4525.png";

export function Quote() {
    const { pathname } = useLocation()
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    return (
        <div className="text-2xl pt-8 font-lightbold"
             >
            <RiDoubleQuotesL className="mx-auto mt-5 mb-5 text-3xl" />
            <div>
                <Carousel
                    responsive={responsive}
                    removeArrowOnDeviceType={["mobile", "tablet", "desktop"]}
                    showDots={false}
                    infinite={true}
                    transitionDuration={2000}
                    autoPlaySpeed={3000}
                    autoPlay={true}
                >
                    {quoteData.map((quote) => (
                        <div key={quote.id} className="w-full lg:w-[75%] items-center mx-auto text-center text-white-600 tracking-widest">
                            <q>{quote.Description}</q>
                            <h1 className="text-center text-xs lg:text-xl lg:text-2xl mt-2 font-semibold">{quote.Heading}</h1>
                            <div className="flex sm:ml-5  place-content-center">
                                <img src={quote.logo} className="w-[200px]  object-contain" alt="" />
                                </div>
                            
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}
export default Quote;