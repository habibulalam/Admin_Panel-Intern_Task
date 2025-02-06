import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const navigateToDynamicRoute = useNavigate();

    useEffect(() => {
        setLoading(true);

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUsers(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        );
    }

    const handleSingleDataClicked = (userId) => {
        navigateToDynamicRoute(`/singleUser/${userId}`);
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredUsers = users.filter((user) => {
        const searchTerm = search.toLowerCase();
        return (
            user.name.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm) ||
            user.address.city.toLowerCase().includes(searchTerm)
        );
    });

    return (
        <div>
            {/* Filter Input */}
            <div className="my-4 flex flex-col sm:flex-row justify-center items-center gap-4">
                <h1 className="font-semibold text-lg">Filters :</h1>
                <input
                    type="text"
                    placeholder="Filter by Name, Email, or City"
                    value={search}
                    onChange={handleSearchChange}
                    className="input input-bordered"
                />
            </div>

            {/* Container */}
            <div className="my-5">
                <div className="overflow-x-auto md:overflow-x-hidden rounded-box border border-base-content/55 bg-base-200">
                    <h1 className="text-center text-2xl font-semibold mb-3 bg-custom-primary text-white pt-2 pb-3 rounded-sm rounded-b-none">
                        Users List
                    </h1>
                    <table className="table">
                        {/* head */}
                        <thead className="border-b border-base-content/55 ">
                            <tr className="border-b-2 text-gray-800">
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row starts */}
                            {filteredUsers.map((user, index) => {
                                return (
                                    <tr
                                        key={index}
                                        onClick={() => handleSingleDataClicked(user.id)}
                                        className="hover:bg-gray-200 hover:cursor-pointer hover:scale-x-[1.02] transition duration-500"
                                    >
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address.city}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
