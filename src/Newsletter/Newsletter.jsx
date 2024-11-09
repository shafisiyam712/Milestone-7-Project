import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className="w-11/12 mx-auto h-60 border rounded-xl p-6  gap-2 absolute left-5  bottom-[750px] md:left-10 md:bottom-[500px]">
            <div className="rounded-xl flex flex-col justify-center items-center text-center gap-3 border bg-white h-52 news-bg">

                <h1 className="font-extrabold">Subscribe to our Newsletter</h1>
            <p className="text-gray-400">Get the latest updates and news right in your inbox!</p>
            <div className="flex">
                <input className="p-3 rounded-xl border" placeholder="Enter your email" type="text" />
                <button className="btn btn-bg">Subscribe</button>
            </div>
            </div>
            
        </div>
    );
};

export default Newsletter;