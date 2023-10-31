import React from 'react';
import { TbError404Off, TbAntennaOff } from "react-icons/tb";

const ErrorHandler = ({ code }) => {
    let style = ' font-bold text-9xl text-gray-700 w-full'
    switch (code) {
        case 'ERR_BAD_REQUEST':
            return (
                <ErrorMain
                    icon={<TbError404Off className={style} />}
                    title="ERROR 404"
                    message="The page you are trying to reach is not available"
                />
            );
        case 'ERR_NETWORK':
            return (
                <ErrorMain
                    icon={<TbAntennaOff className={style}/>}
                    title="NETWORK ERROR"
                    message="Please check your internet connection and try again"
                />
            );
        default:
            return null;
    }
};

export default ErrorHandler;

const ErrorMain = ({ icon, title, message }) => {
    return (
        <div className='w-full h-screen flex justify-center items-center text-center'>
            <div>
                {icon}
                <h1>{title}</h1>
                <p className=' mt-5'>{message}</p>
            </div>
        </div>
    );
};
