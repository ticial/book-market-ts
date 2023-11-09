import React from "react";

const ErrorPage = () => {
    return (
        <div className="flex-1 w-full h-full flex justify-center items-center">
            <div className="flex w-fit flex-col border border-gray-300 bg-white/50 shadow-lg p-5 rounded-3xl gap-5 justify-center text-center">
                <h2 className="flex justify-center text-center font-bold text-gray-700 items-center  text-3xl mt-4">
                    Oops, something went wrong. 404 error
                </h2>
                <a href="/" className="font-medium text-red-800">
                    Back to home?
                </a>
            </div>
        </div>
    );
};

export default ErrorPage;
