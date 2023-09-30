import React from "react";
import UpAndDownAnimation from "./UpAndDownAnimation";

const Homepage = () => {
    return (
        <div className="px-2 pr-4 bg-slate-100 border-t-black-500 border">
            <div className="pt-20 pb-6">
                <div className=" shadow-lg rounded-full border-white bg-white text-bold w-3/4">
                    <div className="flex flex-row p-2 justify-between">
                        <div className="self-center pl-2">
                            <div className="bg-indigo-500 p-2 rounded-full"></div>
                        </div>
                        <div className="font-bold text-gray-600	">Best solution we offer you</div>
                        <div className="self-center pr-2">
                            <div className="bg-indigo-500 p-2 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4">
                <div className="text-4xl font-bold tracking-wide">
                    Make a good plan & grow your business
                </div>
            </div>
            <div className="py-2">
                <div className="">
                    We have almost 12+ years of experience for helping consulting services and business solutions.
                </div>
            </div>
            <div className="py-14">
                <div className="flex flex-row justify-between">
                    <div>
                        <button data-collapse-toggle="navbar-default" type="button"
                        className="bg-indigo-500 text-sm text-white text-gray-600 px-10 font-bold py-4 rounded-lg tracking-wide"
                        aria-controls="navbar-default" aria-expanded="false">
                    CASE STUDIES
                </button>
                    </div>
                    <div>
                        <button data-collapse-toggle="navbar-default" type="button"
                        className="rounded-full bg-yellow-300 p-4"
                        aria-controls="navbar-default" aria-expanded="false">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"
                             className="w-6 h-6">
                            <path fill-rule="evenodd"
                                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                  clip-rule="evenodd"/>
                        </svg>

                    </button>
                    </div>
                    <div className="self-center pr-2">
                        <div className="font-bold">SEE INSIDE</div>
                    </div>
                </div>
            </div>

            <div>
                <div className="py-10 relative z-0">

                    <UpAndDownAnimation>
                        <div className="absolute right-10 pt-10">
                        <img src="/img/slider/hero-star-shape.png" alt="react Logo"/>
                    </div>
                    </UpAndDownAnimation>
                    <div className="absolute bottom-0 right-10 pb-40">
                        <img src="/img/slider/hero-circle-shape.png " alt="react Logo"/>
                    </div>
                    <div className="absolute bottom-0 left-0 pb-32">
                        <UpAndDownAnimation>
                            <img src="/img/slider/hero-angel-shape.png" alt="react Logo"/>
                        </UpAndDownAnimation>

                    </div>

                    <img src="/img/slider/hero-1.png" alt="react Logo"/>
                </div>
            </div>
            <div className="py-2">
                <div className="font-bold text-2xl py-10">
                    24 Year of Experience
                </div>
                <div className="text-gray-600 italic">
                    “Lorem Ipsum is simply dummy text of printing and typesetting industry Ipsum is dummy text of the printing industry”.
                </div>
            </div>
            <div>
                <div className="flex flex-row">
                    <div className="basis-1/4">
                        <img src="/img/slider/hero-sm-img.png" alt="None"/>
                    </div>
                    <div className="flex flex-col self-center">
                        <div className="font-bold text-xl">Darrell Steward</div>
                        <div>Founder of (Sixart - 5 star Agency)</div>
                    </div>
                </div>
            </div>
            <div className="p-2">
                <div className="shadow-xl p-10 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 0 30 24" fill="white"
                             className="w-14 h-14 bg-green-700 p-3 rounded-full">
                            <path d="M23.2969 0H20.4375C20.0489 0 19.7344 0.314484 19.7344 0.703125V1.40625H13.9799C13.6886 0.589594 12.9155 0 12 0C11.0845 0 10.3114 0.589594 10.0201 1.40625H4.26562V0.703125C4.26562 0.314484 3.95114 0 3.5625 0H0.703125C0.314484 0 0 0.314484 0 0.703125V3.51562C0 3.90427 0.314484 4.21875 0.703125 4.21875H3.5625C3.95114 4.21875 4.26562 3.90427 4.26562 3.51562V2.80312H7.15331C4.71314 4.32755 3.10416 7.005 2.91183 10.0038C2.06817 10.28 1.45312 11.0653 1.45312 12C1.45312 13.1632 2.39934 14.1094 3.5625 14.1094C4.72566 14.1094 5.67188 13.1632 5.67188 12C5.67188 11.1028 5.10652 10.34 4.31531 10.0356C4.55522 6.69225 6.88809 3.87431 10.1331 3.07031C10.4841 3.74892 11.1847 4.21875 12 4.21875C12.8153 4.21875 13.5159 3.74892 13.8669 3.07031C17.1119 3.87427 19.4448 6.6922 19.6847 10.0356C18.8935 10.34 18.3281 11.1028 18.3281 12C18.3281 13.1632 19.2743 14.1094 20.4375 14.1094C21.6007 14.1094 22.5469 13.1632 22.5469 12C22.5469 11.0653 21.9318 10.28 21.0882 10.0038C20.8958 7.005 19.2869 4.33692 16.8467 2.8125H19.7344V3.51562C19.7344 3.90427 20.0489 4.21875 20.4375 4.21875H23.2969C23.6855 4.21875 24 3.90427 24 3.51562V0.703125C24 0.314484 23.6855 0 23.2969 0Z"/>
                            <path fill-rule="evenodd"
                                  d="M16.7835 23.1279C16.4157 22.0025 15.3561 21.1406 14.1093 21.1406H9.89052C8.64365 21.1406 7.58408 22.0025 7.2163 23.1279C7.07451 23.5618 7.44365 24 7.90021 24H16.0996C16.5561 24 16.9253 23.5618 16.7835 23.1279Z"
                                  clip-rule="evenodd"/>
                            <path d="M18.21 14.4225L12.7031 6.16217V12.8327C13.5198 13.1239 14.1094 13.8971 14.1094 14.8125C14.1094 15.9757 13.1632 16.9219 12 16.9219C10.8369 16.9219 9.89063 15.9757 9.89063 14.8125C9.89063 13.8971 10.4802 13.1239 11.2969 12.8327V6.16217L5.79001 14.4225C5.60391 14.7013 5.64099 15.0728 5.8779 15.3097C7.16869 16.6005 7.99379 18.2634 8.31221 20.0471C8.80065 19.849 9.33188 19.7344 9.89063 19.7344H14.1094C14.6681 19.7344 15.1994 19.8489 15.6878 20.047C16.0062 18.2632 16.8313 16.6005 18.1221 15.3097C18.359 15.0728 18.3961 14.7013 18.21 14.4225Z"/>
                            <path d="M12 14.1094C11.6121 14.1094 11.2969 14.4246 11.2969 14.8125C11.2969 15.2004 11.6121 15.5156 12 15.5156C12.3879 15.5156 12.7031 15.2004 12.7031 14.8125C12.7031 14.4246 12.3879 14.1094 12 14.1094Z"/>
                        </svg>
                    <div className="py-6">
                        <h4 className="font-bold text-xl">
                        Service we can <br/>
                         help you with
                    </h4>
                    </div>
                    <button data-collapse-toggle="navbar-default" type="button"
                        className=""
                        aria-controls="navbar-default" aria-expanded="false">
                    <div className="flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-9 h-9">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                        </svg>
                        <p className="text-sm text-slate-500 font-bold self-center px-4">OUR SERVICE</p>
                    </div>
                    </button>
                </div>
            </div>

            <div className="p-4">
                <div className="shadow-2xl p-10 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 0 30 24" fill="white"
                             className="w-14 h-14 bg-yellow-300 p-3 rounded-full">
                            <path d="M23.2969 0H20.4375C20.0489 0 19.7344 0.314484 19.7344 0.703125V1.40625H13.9799C13.6886 0.589594 12.9155 0 12 0C11.0845 0 10.3114 0.589594 10.0201 1.40625H4.26562V0.703125C4.26562 0.314484 3.95114 0 3.5625 0H0.703125C0.314484 0 0 0.314484 0 0.703125V3.51562C0 3.90427 0.314484 4.21875 0.703125 4.21875H3.5625C3.95114 4.21875 4.26562 3.90427 4.26562 3.51562V2.80312H7.15331C4.71314 4.32755 3.10416 7.005 2.91183 10.0038C2.06817 10.28 1.45312 11.0653 1.45312 12C1.45312 13.1632 2.39934 14.1094 3.5625 14.1094C4.72566 14.1094 5.67188 13.1632 5.67188 12C5.67188 11.1028 5.10652 10.34 4.31531 10.0356C4.55522 6.69225 6.88809 3.87431 10.1331 3.07031C10.4841 3.74892 11.1847 4.21875 12 4.21875C12.8153 4.21875 13.5159 3.74892 13.8669 3.07031C17.1119 3.87427 19.4448 6.6922 19.6847 10.0356C18.8935 10.34 18.3281 11.1028 18.3281 12C18.3281 13.1632 19.2743 14.1094 20.4375 14.1094C21.6007 14.1094 22.5469 13.1632 22.5469 12C22.5469 11.0653 21.9318 10.28 21.0882 10.0038C20.8958 7.005 19.2869 4.33692 16.8467 2.8125H19.7344V3.51562C19.7344 3.90427 20.0489 4.21875 20.4375 4.21875H23.2969C23.6855 4.21875 24 3.90427 24 3.51562V0.703125C24 0.314484 23.6855 0 23.2969 0Z"/>
                            <path fill-rule="evenodd"
                                  d="M16.7835 23.1279C16.4157 22.0025 15.3561 21.1406 14.1093 21.1406H9.89052C8.64365 21.1406 7.58408 22.0025 7.2163 23.1279C7.07451 23.5618 7.44365 24 7.90021 24H16.0996C16.5561 24 16.9253 23.5618 16.7835 23.1279Z"
                                  clip-rule="evenodd"/>
                            <path d="M18.21 14.4225L12.7031 6.16217V12.8327C13.5198 13.1239 14.1094 13.8971 14.1094 14.8125C14.1094 15.9757 13.1632 16.9219 12 16.9219C10.8369 16.9219 9.89063 15.9757 9.89063 14.8125C9.89063 13.8971 10.4802 13.1239 11.2969 12.8327V6.16217L5.79001 14.4225C5.60391 14.7013 5.64099 15.0728 5.8779 15.3097C7.16869 16.6005 7.99379 18.2634 8.31221 20.0471C8.80065 19.849 9.33188 19.7344 9.89063 19.7344H14.1094C14.6681 19.7344 15.1994 19.8489 15.6878 20.047C16.0062 18.2632 16.8313 16.6005 18.1221 15.3097C18.359 15.0728 18.3961 14.7013 18.21 14.4225Z"/>
                            <path d="M12 14.1094C11.6121 14.1094 11.2969 14.4246 11.2969 14.8125C11.2969 15.2004 11.6121 15.5156 12 15.5156C12.3879 15.5156 12.7031 15.2004 12.7031 14.8125C12.7031 14.4246 12.3879 14.1094 12 14.1094Z"/>
                        </svg>
                    <div className="py-6">
                        <h4 className="font-bold text-xl">
                        Why you should choose us
                    </h4>
                    </div>
                    <button data-collapse-toggle="navbar-default" type="button"
                        className=""
                        aria-controls="navbar-default" aria-expanded="false">
                    <div className="flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-9 h-9">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                        </svg>
                        <p className="text-sm text-slate-500 font-bold self-center px-4">ABOUT US</p>
                    </div>
                    </button>
                </div>
            </div>
        </div>

    )
}
export default Homepage