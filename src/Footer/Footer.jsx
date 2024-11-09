import footerImg from '../assets/logo-footer.png'
const Footer = () => {
    return (
        <div className="h-full bg-black">
            <div className=" flex justify-center mb-16">
                <img className='mt-40' src={footerImg} alt="" />
            </div>

            <div className='flex flex-col md:flex-row justify-around w-11/12 mx-auto'>
                <div>
                    <h1 className='text-white mb-5'>About Us</h1>
                    <p className='text-white'>We are a passionate team <br />
                        dedicated to providing the best <br />
                        services to our customers.</p>
                </div>

                <div>
                    <h1 className='text-white mb-5'>Quick Links</h1>
                    <div className='flex-col text-white'>
                        <ul className=''>
                            <li>Home</li>
                            <li>Service</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h1 className='text-white mb-5'>Subscribe</h1>
                    <p className='text-white'>Subscribe to our newsletter for the <br /> latest updates.</p>

                    <div className='flex gap-0 mt-4 mb-8'>
                        <input className='p-2 rounded-md text-white' placeholder='Enter your mail' type="text" />
                        <button className='bg-white btn btn-bg border-none'>Subscribe</button>
                    </div>

                </div>
            </div>

            <hr />
            <div className='mt-5'>
                <h2 className='text-gray-500 text-center'>@2024 Your Company All Rights Reserved.</h2>
                <br />
            </div>

        </div>
    );
};

export default Footer;