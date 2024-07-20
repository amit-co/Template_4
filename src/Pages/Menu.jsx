import imgBg from "/New/BG.png";
import cafe_img from "/New/cafe_img.png";
import Cafe from "/New/Cafe.png";
import bar_h from "/New/bar_h.png";
import kitchen_h from "/New/kitchen_h.png";
import bar_img from "/New/bar.png";
import pdf from "/New/pdf.png";
import h1 from "/New/h1.png";
import h2 from "/New/IRD_h.png";
import ird from "/New/ird.png";

export default function Menu() {
 
    return (
        <div className="bg-fixed bg-cover  " style={{ backgroundImage: `url(${imgBg})` }}>
            
                          <div className="relative flex flex-col h-full pb-10 mx-10 mt-20 sm:mx-10 ">
                                   <img src={h1} className="object-contain mx-auto mt-10 " />
                                   <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-10 space-y-10 sm:space-y-0 ">
                                           <div className="flex sm:flex-col flex-row w-full  space-y-10 sm:space-y-40 mx-4 sm:mx-20 mt-10 sm:mt-24">
                                                <div className="flex w-full sm:w-9/12 h-80 bg-customGray2 bg-opacity-75 ml-4 sm:ml-8" >
                                                    <div className="flex flex-row w-4/12 h-80 bg-customBlack2 bg-opacity-75 absolute ml-24 top-8 sm:top-32 left-4 sm:left-16 p-4 sm:p-0">
                                                        <img src={cafe_img} className=" my-10  sm:mx-10 mx-4"/>
                                                        <div className="flex flex-col text-white -ml-4 sm:-ml-8">
                                                            <img src={Cafe} className="w-20 sm:w-20 h-16 sm:h-16 object-contain ml-4 sm:ml-10 " />
                                                            <p className="w-full  h-12 text-center text-xs mb-10">Tempting Snacks For Any Time Of Day - Or Take Advantage Of The Grab And Go Service If You Need Something To Eat Or Drink On The Move.
                                                                Choose From Breakfast Favorites. Healthy Offerings Or Traditional Favorites Cooked With Resposibly Sourced Ingredients.</p>
                                                            <img src={pdf} className="object-contain w-8 sm:w-12 h-8 sm:h-12  mt-24 ml-14" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex w-full sm:w-9/12 h-80 bg-customGray2 bg-opacity-75 ml-4 sm:ml-8">
                                                    <div className="flex flex-row w-1/3 h-80 bg-customBlack2 bg-opacity-75 absolute ml-14 -mt-16 inset-y-2/12">
                                                                <img src={ird} className="my-10 mx-4 sm:mx-10 " />
                                                            <div className="flex flex-col text-white -ml-4 sm:-ml-8 ">
                                                                <img src={h2} className="w-36 h-12 object-contain mt-4 mb-6  " />
                                                                 <p className="w-full h-16 text-center mx-auto text-xs  ">Tempting Snacks For Any Time Of Day - Or Take Advantage Of The Grab And Go Service If You Need Something To Eat Or Drink On The Move.
                                                                    Choose From Breakfast Favorites. Healthy Offerings Or Traditional Favorites Cooked With Resposibly Sourced Ingredients.</p>
                                                                   <img src={pdf} className="object-contain w-12 h-12 mt-32 ml-14" />
                                    
                                                            </div>
                                                    </div>
                                                </div>
                                           </div>
                    
                                            <div className="flex sm:flex-col flex-row w-full space-y-10 sm:space-y-40 mx-4 sm:mx-20 mt-20  sm:mt-24">
                                                <div className="flex w-full sm:w-9/12 h-80 bg-customGray2 bg-opacity-75 ml-4 sm:ml-8 mt-24" >
                                                  <div className="flex flex-row sm:w-4/12 w-full h-80 bg-customBlack2 bg-opacity-75 absolute mr-36 right-10 -mt-16 ">
                                                    <div className="flex flex-col text-white  mx-6">
                                                        <img src={bar_h} className="w-1/3 object-contain mt-6  ml-12" />
                                                        <p className="w-[120px] h-[50px] text-center mr-3 text-xs">Tempting Snacks For Any Time Of Day - Or Take Advantage Of The Grab And Go Service If You Need Something To Eat Or Drink On The Move.
                                                            Choose From Breakfast Favorites. Healthy Offerings Or Traditional Favorites Cooked With Resposibly Sourced Ingredients.</p>
                                                        <img src={pdf} className="object-contain w-[45px] h-[45px] mt-44 mx-auto" />
                                                    </div>
                                                        <img src={bar_img} className="my-10 -mx-4 sm:-mx-5" />
                                                  </div>
                                                </div>
                                                <div className="flex w-9/12 h-80 bg-customGray2 bg-opacity-75 ml-8">
                                                    <div className="flex flex-row w-2/6 h-80 bg-customBlack2 bg-opacity-75 absolute mr-36 right-10 -mt-16 ">
                                                    <div className="flex flex-col text-white mx-4 sm:mx-6">
                                                        <img src={kitchen_h} className="w-4/5 h-10 object-contain mt-5  ml-2" />
                                                        <p className="w-[120px] h-[15px] text-center text-xs">Tempting Snacks For Any Time Of Day - Or Take Advantage Of The Grab And Go Service If You Need Something To Eat Or Drink On The Move.
                                                            Choose From Breakfast Favorites. Healthy Offerings Or Traditional Favorites Cooked With Resposibly Sourced Ingredients.</p>
                                                          <img src={pdf} className="object-contain w-8 sm:w-[45px] h-8 sm:h-[45px] mt-56 mx-auto" />
                                                    </div>
                                                         <img src={bar_img} className="my-10  mr-8" />
                                                    </div>
                                                </div>
                                            </div>
                        
                                   </div>
                     </div>
        </div>
    );
}
