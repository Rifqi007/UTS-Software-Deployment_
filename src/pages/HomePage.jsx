import { HashLink as Link } from "react-router-hash-link";

import React, {useState} from 'react';

import HeroImage from "../assets/images/hero.svg";
import AboutImage from "../assets/images/about.svg";

const HomePage = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleContent = () => {
        setIsExpanded(!isExpanded);
      };

    //   State for Contact Us
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Mencegah reload halaman saat form disubmit
        console.log('Form Data:', formData); // Output data ke console
        };

    return (
        <div className="homepage pb-10" >
            <div className="container mx-auto px-4">
                <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
                    <div className="box">
                        <p className="text-sky-400 text-3xl mb-2">Hello</p>
                        <h1 className="lg:text text-7xl font-medium mb-6">
                            I'm <span className="font-bold text-sky-400 ">Rifqi Ardiansyah</span>
                        </h1> 
                        <p className="text-5xl  mb-6">UI/UX Design </p>
                        <Link to="#about" className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full">
                            Tentang Kami <i className="ri-eye-line ms-1"></i>
                        </Link>
                        <p></p>
                    </div>
                    <div className="box">
                        <img src={HeroImage} alt="Hero Image" className="md:w-full w-[400px] mx-auto md:m-0"/>
                    </div>
                </div>

                {/* About */}
                <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-20 pt-32" id="about">
                    <div className="box md:order-1 order-2">
                        <img src={AboutImage} alt="About Image" className="lg:w-[500px] w-[400px] md:m-0 mx-auto" />
                    </div>
                    <div className="box md:order-2 order-1">
                        <h1 className="lg:text-5xl/tight text-5xl underline font-bold mb-5 ">
                            My Profil
                        </h1>
                        <p className="mb-6 m-auto">"Terkadang, kehidupan bukanlah tentang mencari jawaban, tetapi tentang memahami makna dari setiap langkah yang kita ambil, 
                            meskipun seringkali kita berjalan di jalan yang penuh keraguan. Kehidupan mengajarkan kita untuk menemukan kebijaksanaan dalam perjalanan, 
                            bukan hanya dalam tujuan akhir."
                        </p>

                        <div className="max-w-2xl">
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <span className="font-semibold text-gray-700 w-36">Nama:</span>
                                    <span className="text-gray-600">Rifqi Ardiansyah</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="font-semibold text-gray-700 w-36">Tanggal Lahir:</span>
                                    <span className="text-gray-600">Desember 01, 2000</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="font-semibold text-gray-700 w-36">Alamat:</span>
                                    <span className="text-gray-600">Banyuwangi, Jawa Timur</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="font-semibold text-gray-700 w-36">E-Mail:</span>
                                    <span className="text-gray-600">rifki.ardi2000@gmail.com</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="font-semibold text-gray-700 w-36">Telepon:</span>
                                    <span className="text-gray-600">085730359113</span>
                                </li>
                            </ul>
                        </div>

                        <button
                            onClick={toggleContent}
                            className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-400 rounded-lg hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                            {isExpanded ? 'Tutup' : 'Baca Selengkapnya'}
                            <svg
                                className={`rtl:rotate-180 w-3.5 h-3.5 ms-2 ${isExpanded ? 'rotate-180' : ''}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </button>
                        {isExpanded && (
                            <div className="mt-4">
                                <p className="m-auto">
                                Rifqi Ardiansyah, lahir pada 1 Desember 2000, adalah seorang desainer UI/UX berbakat dari Banyuwangi, Jawa Timur. Dengan latar belakang pendidikan di bidang desain, 
                                Rifqi telah mengembangkan keahliannya dalam menciptakan antarmuka pengguna yang intuitif dan menarik. 
                                Kecintaannya pada seni dan teknologi memotivasinya untuk terus belajar dan berinovasi dalam setiap proyek yang dikerjakan. Selain desain, 
                                Rifqi juga memiliki minat dalam membaca dan pengembangan diri. Kontak: rifki.ardi2000@gmail.com | 085730359113.
                                </p>
                            </div>
                        )}
                        
                    </div>
                </div>

                {/* Service */}
                <div className="services pt-32 mt-14 border-re" id="services">
                    <h1 className="text-center lg:text-5xl/tight text-3xl font-medium  underline">Layanan</h1>
                    <p className="text-center">Apa Yang Bisa Saya Lakukan</p>
                    <div className="service-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                        <div className="box bg-sky-400 rounded-lg shadow p-4">
                        <svg className="w-7 mx-auto fill-sky-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.7-9.2L288 94.6z"/></svg>
                            <h3 className="text-xl font-bold text-white mt-4 mb-1 text-center">Create Design</h3>
                            <p className="text-white text-base/loose">Desain responsif, tipografi menarik, palet warna konsisten, interaksi dan animasi, optimisasi kecepatan, aksesibilitas, dan integrasi backend.</p>
                        </div>
                        <div className="box bg-sky-400 rounded-lg shadow p-4">
                             <svg className="w-8 mx-auto fill-sky-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
                            <h3 className="text-xl font-bold text-center text-white mt-4 mb-2">Clean Code</h3>
                            <p className="text-white text-base/loose">Kode yang mudah dibaca, terstruktur rapi, efisien, bebas duplikasi, dan bersih.</p>
                        </div>
                        <div className="box bg-sky-400 rounded-lg shadow p-4">
                        <svg className="w-8 mx-auto fill-sky-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M128 32C92.7 32 64 60.7 64 96l0 256 64 0 0-256 384 0 0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384z"/></svg>
                            <h3 className="text-xl font-bold text-white mt-4 mb-2 text-center">User Interface</h3>
                            <p className="text-white text-base/loose"> UI responsif, desain minimalis, interaktif, dan estetis dengan fokus pada pengalaman pengguna</p>
                        </div>
                        <div className="box bg-sky-400 rounded-lg shadow p-4">
                        <svg className="w-8 mx-auto fill-sky-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.3 159.7l-234-156c-8-4.9-16.5-5-24.6 0l-234 156C3.7 163.7 0 170.8 0 178v156c0 7.1 3.7 14.3 9.7 18.3l234 156c8 4.9 16.5 5 24.6 0l234-156c6-4 9.7-11.1 9.7-18.3V178c0-7.1-3.7-14.3-9.7-18.3zM278 63.1l172.3 114.9-76.9 51.4L278 165.7V63.1zm-44 0v102.6l-95.4 63.7-76.9-51.4L234 63.1zM44 219.1l55.1 36.9L44 292.8v-73.7zm190 229.7L61.7 334l76.9-51.4L234 346.3v102.6zm22-140.9l-77.7-52 77.7-52 77.7 52-77.7 52zm22 140.9V346.3l95.4-63.7 76.9 51.4L278 448.8zm190-156l-55.1-36.9L468 219.1v73.7z"/></svg>
                            <h3 className="text-xl text-center font-bold text-white mt-4 mb-2">User Experience</h3>
                            <p className="text-white text-base/loose">Desain yang intuitif, navigasi mudah, dan alur yang jelas. Fokus pada kenyamanan pengguna dengan respons cepat, umpan balik yang jelas, dan aksesibilitas untuk semua.</p>
                        </div>
                        <div className="box bg-sky-400 rounded-lg shadow p-4">
                            <svg className="w-8 mx-auto fill-sky-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.2 412.5C335.9 434.9 297.5 448 256 448s-79.9-13.1-111.2-35.5l58-58c15.8 8.6 34 13.5 53.3 13.5s37.4-4.9 53.3-13.5l58 58zm90.7 .8c33.8-43.4 54-98 54-157.3s-20.2-113.9-54-157.3c9-12.5 7.9-30.1-3.4-41.3S425.8 45 413.3 54C369.9 20.2 315.3 0 256 0S142.1 20.2 98.7 54c-12.5-9-30.1-7.9-41.3 3.4S45 86.2 54 98.7C20.2 142.1 0 196.7 0 256s20.2 113.9 54 157.3c-9 12.5-7.9 30.1 3.4 41.3S86.2 467 98.7 458c43.4 33.8 98 54 157.3 54s113.9-20.2 157.3-54c12.5 9 30.1 7.9 41.3-3.4s12.4-28.8 3.4-41.3zm-45.5-46.1l-58-58c8.6-15.8 13.5-34 13.5-53.3s-4.9-37.4-13.5-53.3l58-58C434.9 176.1 448 214.5 448 256s-13.1 79.9-35.5 111.2zM367.2 99.5l-58 58c-15.8-8.6-34-13.5-53.3-13.5s-37.4 4.9-53.3 13.5l-58-58C176.1 77.1 214.5 64 256 64s79.9 13.1 111.2 35.5zM157.5 309.3l-58 58C77.1 335.9 64 297.5 64 256s13.1-79.9 35.5-111.2l58 58c-8.6 15.8-13.5 34-13.5 53.3s4.9 37.4 13.5 53.3zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/></svg>
                            <h3 className="text-xl text-center font-bold text-white mt-4 mb-2">Fast Support</h3>
                            <p className="text-white text-base/loose">Respons cepat terhadap setiap pertanyaan atau masalah, memberikan solusi yang efisien dalam waktu singkat, serta dukungan berkelanjutan untuk memastikan pengalaman pengguna yang lancar dan bebas hambatan.</p>
                        </div>
                        <div className="box bg-sky-400 rounded-lg shadow p-4">
                        <svg className="w-8 mx-auto fill-sky-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256S119 504 256 504 504 393 504 256 393 8 256 8zm48.2 326.1h-181L207.9 178h181z"/></svg>
                            <h3 className="text-xl text-center font-bold text-white mt-4 mb-2">Branding</h3>
                            <p className="text-white text-base/loose">Desain yang konsisten dengan identitas merek, mulai dari pemilihan warna, tipografi, hingga elemen visual lainnya, untuk menciptakan kesan yang kuat dan mudah dikenali di mata pengguna.</p>
                        </div>
                    </div>
                </div>


                {/* Contact Us */}
                <div className="contact-us pt-32 mt-14" id="contact-us">
                    <h1 className="text-center lg:text-5xl/tight text-3xl font-medium  underline">Hubungi Kami</h1>
                    <p className="text-center">Kami siap membantu Anda. Silakan isi formulir di bawah ini untuk menghubungi kami.</p>

                    <div className="contact-form pt-12 max-w-4xl mx-auto">
                        <form onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Nama</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                placeholder="Masukkan nama Anda"
                                value={formData.name} // Controlled component
                                onChange={handleInputChange}
                            />
                            </div>
                            <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                placeholder="Masukkan email Anda"
                                value={formData.email} // Controlled component
                                onChange={handleInputChange}
                            />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Pesan</label>
                            <textarea
                            id="message"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            rows="4"
                            placeholder="Masukkan pesan Anda"
                            value={formData.message} // Controlled component
                            onChange={handleInputChange}
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button
                            type="submit"
                            className="bg-sky-400 text-white py-2 px-6 rounded-full hover:bg-sky-500 focus:outline-none"
                            >
                            Kirim Pesan
                            </button>
                        </div>
                        </form>
                    </div>
                    </div>

            </div>
        </div>
    )
}

export default HomePage;