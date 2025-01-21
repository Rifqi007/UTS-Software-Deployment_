import { HashLink as Link } from "react-router-hash-link";
import { useEffect, useState } from "react";


const Navbar = () => {
    const [show, setShow] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = ()=>{
        setShow(!show);
        // console.log(show);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    let menuActive = show ? "left-0" : "-left-full";
    let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4";

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 5 ) {
                // console.log()
                setScroll(true);
                setShow(false);
            } else {
                setScroll(false);
            }
        });
    }, []);

  return (
    <div className={`navbar fixed w-full transition-all ${scrollActive}`}>
        <div className="container mx-auto px-4 ">
            <div className="navbar-box flex items-center justify-between">
                <div className="logo-">
                    <h1 className="sm:text-2xl text-xl font-bold">RIFQI</h1>
                </div>
                <ul 
                className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black 
                md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 
                bg-sky-400 font-bold text-white transition-all`}
                >
                    <li className="flex items-center gap-3">
                        <i className="ri-home-3-line text-3xl md:hidden block"></i>
                        <Link to="#home" className="font-medium opacity-75">
                            Beranda
                        </Link>
                    </li>
                    <li className="flex items-center gap-3">
                        <i className="ri-information-2-line text-3xl md:hidden block"></i>
                        <Link to="#about" className="font-medium opacity-75">
                            Tentang Kami
                        </Link>
                    </li>
                    <li className="flex items-center gap-3">
                        <i className="ri-customer-service-line text-3xl md:hidden block"></i>
                        <Link to="#services" className="font-medium opacity-75">
                            Layanan
                        </Link>
                    </li>
                    <li className="flex items-center gap-3">
                        <i className="ri-projector-line text-3xl md:hidden block"></i>
                        <a href="#contact-us" className="font-medium opacity-75">
                            Hubungi Kami
                        </a>
                    </li>
                </ul>
                <div className="social flex items-center gap-2">
                    <Link to="#social" className="bg-sky-400 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-500 transition-all">
                        Social Media
                    </Link>
                    <i className="ri-menu-3-line text-3xl md:hidden block" onClick={handleClick}></i>
                    <button
                    onClick={toggleModal}
                     className="bg-green-400 px-5 py-2 rounded-full text-white font-bold hover:bg-green-500 transition-all"
                     >
                        Login
                    </button>
                </div>
            </div>
        </div>

        {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Login</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Username
                                </label>
                                <input type="text" className="w-full px-3 py-2 border rounded" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Password
                                </label>
                                <input type="password" className="w-full px-3 py-2 border rounded" />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={toggleModal} className="bg-red-500 text-white px-4 py-2 rounded mr-2">
                                    Cancel
                                </button>
                                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

  </div>
  );
};

export default Navbar;