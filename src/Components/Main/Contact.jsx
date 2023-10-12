export default function Contact() {
    return (
        <div className="Contact py-3 ">
            <h1 className=" text-center text-4xl mb-[1.5rem] font-semibold">Contact Page</h1>
            <MyMap></MyMap>
            <MyForm></MyForm>
        </div>

    )
}

function MyMap() {
    const iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.58437806654!2d80.52186707468944!3d16.344167332019875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f5c460ab7d1d%3A0x8c86e4f36490336b!2sVasireddy%20Venkatadri%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1697007457804!5m2!1sen!2sin";

    return (
        <div>
            <iframe
                src={iframeSrc}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            />
        </div>
    );
}
function MyForm() {
    return (
        <form action="https://formbold.com/s/oYnDz" method="POST" className="flex flex-col w-[90%] sm:w-[80%] md:w-[50%] mx-[auto] p-[2rem] gap-5 bg-gray-100 m-[1rem] rounded-md  justify-start">
            <input type="text" required placeholder="Enter Your Username" className="p-2 rounded-md"/>
            <input type="email"required placeholder="Enter Your Email" className="p-2 rounded-md"/>
            <textarea name="comment" id="" cols="30" rows="10" placeholder="Anything to Comment..." className="p-2 rounded-md"></textarea>
            <button className="btn bg-violet-600 p-3 text-white rounded-md font-semibold hover:bg-violet-950 w-[40%] sm:w-[30%] md:w-[20%]">SUBMIT</button>



        </form>
    )
}
