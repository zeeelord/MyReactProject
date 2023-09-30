// NavBar.js
import React, {useState} from 'react';
import '../assets/css/main_style.css'


const NavBar = () => {
    const [toggle, setToggle] = useState("hidden");
    const handleButtonClick = () => {
        if (toggle === "hidden") {
            setToggle("menu_in")
        } else {
            setToggle("hidden")
        }
    }
    return (

        <nav className="bg-slate-100 border-gray-400 border-b-0 md:py-8 sticky top-0 z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-2 p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="/img/favicon.png" className="h-12 mr-3" alt="Flowbite Logo"/>
                    <span
                        className="self-center text-4xl font-semibold whitespace-nowrap dark:text-black">React</span>
                </a>

                <button data-collapse-toggle="navbar-default" type="button"
                        className="inline-flex bg-white items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default" aria-expanded="false"
                        onClick={handleButtonClick}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 17 14">
                        <path stroke="currentColor"
                              d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className={`${toggle} absolute top-0 right-0 w-3/4 md:relative md:flex md:block md:w-auto z-50`}
                     id="navbar-default">
                    <ul className=" font-medium flex flex-col p-4 md:p-0 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-zinc-900 md:dark:bg-gray-100 dark:border-gray-700">
                        <div className="block md:hidden flex flex-row place-content-between py-8">
                            <div className="basis-1/2 fill-blue-500">
                                <a href="https://flowbite.com/" className="flex items-center">
                                    <img src="/img/favicon.png" className="h-8 mr-3"
                                         alt="Flowbite Logo"/>
                                    <span
                                        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">React</span>
                                </a>
                            </div>
                            <div className="basis-1/12">
                                <button data-collapse-toggle="navbar-default" type="button"
                                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                        aria-controls="navbar-default" aria-expanded="false"
                                        onClick={handleButtonClick}>
                                    <span className="sr-only">Open main menu</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>

                                </button>
                            </div>
                        </div>
                        <li>
                            <a href="#"
                               className=" border-b rounded-none border-slate-700 block py-4 pl-3 pr-4 text-black rounded md:px-6 md:text-xl md:border-0 hover:bg-gray-100 md:bg-transparent md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >Home</a>
                        </li>
                        <li>
                            <a href="#"
                               className="border-b rounded-none border-slate-700 block py-4 pl-3 pr-4 md:text-gray-900 md:px-6 rounded md:text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                        </li>
                        <li>
                            <a href="#"
                               className="border-b rounded-none border-slate-700 block py-4 pl-3 pr-4 text-gray-900 md:px-6 rounded md:text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                        </li>
                        <li>
                            <a href="#"
                               className="border-b rounded-none border-slate-700 block py-4 pl-3 pr-4 text-gray-900 md:px-6 rounded md:text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Our Project</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-4 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:text-xl md:px-6 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pages</a>
                        </li>

                        <div className="md:hidden">
                            <h1 className="text-white py-4 pl-3 pr-4 text-2xl font-bold">Get In Touch</h1>
                            <div className="flex flex-row">
                                <div className="basis-1/12 py-4 pl-3 pr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="white"
                                         className="w-12 h-12 bg-indigo-500 text-gray-900 rounded-full p-3">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                                    </svg>

                                </div>
                                <div className="basis-1/2 text-white py-4 text-sm">
                                    <div className="flex flex-col">
                                        <div>Email</div>
                                        <div>awuyadanielz@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="basis-1/12 py-4 pl-3 pr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="white"
                                         className="w-12 h-12 bg-indigo-500 text-gray-900 rounded-full p-3">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                                    </svg>
                                </div>
                                <div className="basis-1/2 text-white py-4 text-sm">
                                    <div className="flex flex-col">
                                        <div>Phone</div>
                                        <div>(234)9 09020 8174</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="basis-1/12 py-4 pl-3 pr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="white"
                                         className="w-12 h-12 bg-indigo-500 text-gray-900 rounded-full p-3">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                                    </svg>
                                </div>
                                <div className="basis-1/2 text-white py-4 text-sm">
                                    <div className="flex flex-col">
                                        <div>Location</div>
                                        <div>Lagos, Nigeria</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="border-b rounded-none border-slate-700 py-6"></div>
                            </div>
                            <div>
                                <div className="flex flex-row justify-center gap-x-2 py-12">
                                    <div className="bg-white text-gray-900 rounded-lg p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>

                                    </div>
                                    <div className="bg-white text-gray-900 rounded-lg p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                    </div>
                                    <div className="bg-white text-gray-900 rounded-lg p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                    </div>
                                    <div className="bg-white text-gray-900 rounded-lg p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:block flex md:order-2 hidden">
                            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"
                                    aria-expanded="false"
                                    className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                            <div className="relative hidden md:block">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                    <span className="sr-only">Search icon</span>
                                </div>
                                <input type="text" id="search-navbar"
                                       className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Search..."></input>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default NavBar;
