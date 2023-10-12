import Hero from "../../assets/HeroPic.jpg";
export default function HeroSection({name}) {
    return (
        <div className="HeroSection flex justify-center  md:h-[70vh]  h-[100vh] mt-[1rem]">
            <div className="wrapper sm:w-[90%]  grid md:grid-cols-2 grid-cols-1 grid-rows-2 md:grid-rows-1 justify-items-center items-center gap-2 h-[100%]">
                 <div className="hero1 flex flex-col  justify-center items-baseline sm:gap-1 gap-3 w-[100%] sm:w-[80%] h-[100%]">
                    <h4 className=" text-gray-400 text-sm  sm:text-base text-start font-medium">WELCOME TO </h4>
                    <h1 className=" md:text-5xl  sm:text-4xl text-2xl font-bold ">{name} </h1>
                    <h1 className="text-sm sm:text-base mt-4 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias incidunt nisi, voluptatem quaerat labore quo ducimus excepturi vel natus velit tempore, iste non maxime magni accusamus numquam quibusdam commodi officiis? </h1>
                    <button className=" bg-violet-700 text-white hover:bg-violet-400 p-3 rounded-lg font-medium   text-base"> Show Now</button>
                </div> 
                <div className="hero2 relative flex justify-center items-center h-[100%] w-[100%]">
                    <div className=" bg-violet-600 w-[50%] h-[50%] absolute md:top-0 md:right-0 bottom-0 transition-colors"></div>
                    <img src={Hero}alt="" className="absolute md:w-[75%] md:h-[75%] mx-[auto] rounded-sm h-[80%] w-[80%]" />
                </div>
            </div>



        </div>
    )
}
