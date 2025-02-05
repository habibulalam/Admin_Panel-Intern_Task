import { useEffect, useId, useState } from "react";
import { Link, useParams } from "react-router-dom";


const SingleUser = () => {
    const { userId } = useParams();
    console.log(userId);

    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(true)

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUser(data);
                setLoader(false)
            })
    }, [userId])

    if (loader) {
        return <div className="w-full h-screen flex justify-center items-center"><span className="loading loading-spinner loading-xl"></span></div>
    }

    return (
        <div>
            <Link to={'/allUsers'} className="btn mt-3 bg-gray-200 border border-custom-primary text-custom-primary hover:bg-custom-primary hover:text-white sticky top-0">
                <button><i className="fa-solid fa-arrow-right-to-bracket fa-rotate-180"></i> Go Back</button>
            </Link>
            <div className="my-5 p-5 border border-base-content/55 bg-base-200 rounded-box">
                <h1 className="text-center text-2xl font-semibold mb-10 bg-custom-primary text-white pt-2 pb-3 rounded-sm">Single User Info</h1>
                <div className="grid grid-cols-2 gap-4 pl-4">
                    <div className="font-semibold">Name:</div>
                    <div>{user.name}</div>

                    <div className="font-semibold">Username:</div>
                    <div>{user.username}</div>

                    <div className="font-semibold">Email:</div>
                    <div>{user.email}</div>

                    <div className="font-semibold">Phone:</div>
                    <div>{user.phone}</div>

                    <div className="font-semibold">Website:</div>
                    <div>{user.website}</div>

                    <div className="font-semibold">Address:</div>
                    <div>
                        {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                    </div>

                    <div className="font-semibold">Company:</div>
                    <div>{user.company.name}</div>

                    <div className="font-semibold">CatchPhrase:</div>
                    <div>{user.company.catchPhrase}</div>

                    <div className="font-semibold">BS:</div>
                    <div>{user.company.bs}</div>
                </div>
            </div>
        </div>
    )
};

export default SingleUser;