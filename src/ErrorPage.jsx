export default function ErrorPage() {
return(
    <div className="ErrorPage h-[100vh] w-[100vw] flex flex-col items-center  gap-4 justify-center text-center p-2 sm:p-[1rem] bg-slate-50"> 
        <h1 className=" font-bold text-[4rem] sm:text-[5rem] text-gray-700">404</h1>
        <h1 className=" text-[1.5rem] sm:text-[2.2rem] font-semibold">UH OH! You're Lost</h1>
        <h1 className="text-[1rem] md:text-[1.2rem] text-gray-500">The page you are looking is not here.You can click button to go back homepage</h1>
        <button onClick={()=> window.history.back()} className=" p-3 bg-violet-600 rounded-md text-white">Go Back TO Previous Page</button>
    </div>
)
}