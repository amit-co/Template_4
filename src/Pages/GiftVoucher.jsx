import Discount from "../Components/Discount";
import imgBg from "/New/BG.png";

export default function Gift() {
  

    return (
    
        <div className="bg-cover pb-10" style={{ backgroundImage: `url(${imgBg})` }}>
            
            <div className="flex flex-col pb-10 pt-10 ">
                <h1 className="md:text-5xl text-4xl tracking-widest text-customWhite text-center font-bold  mt-36">
                    Gift Voucher
                </h1>
                <p className="w-8/12  text-center tracking-widest mx-auto  text-2xl font-medium text-customWhite mt-5 ">
                    Treat Your Favourite Food-Lover To One Of Our Golden Tickets - Pick Something Special And Choose From A Varjety Of Restaurant Experiences Ranging
                    From Champagne Afternoon Tea And Cocktail Masterclasses To Bespoke Food And Wine Dinners And Michelin-Starred Tasting Menus.
                </p>
            </div>
            <div className="flex xl:flex-row flex-col xl:ml-32">
            <div className="flex w-4/12 h-72 bg-customGray2 bg-opacity-50 mt-10 ml-32 ">
            </div>
            <div className="flex flex-row w-8/12">
                   <Discount />
            </div>
           
                </div>
         
                
        </div>
            
    );
}
