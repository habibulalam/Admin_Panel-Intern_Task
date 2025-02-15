import { Link } from "react-router-dom";


const ErrorPage = () => {

    return (
        <div>
            <section className="flex items-center h-screen p-16 ">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl ">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl text-gray-500">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our site.</p>
                        <Link to={'/'} >
                            <button className=" px-8 py-3 font-semibold rounded bg-custom-primary text-white hover:scale-105 duration-200 hover:cursor-pointer border-gray-800">
                                Back to Dashboard
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;