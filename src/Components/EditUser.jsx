import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import Header from "./header";
import ErrorHandler from "./errorHandler";
let EditUser = () => {
    const nameReg = /^[A-Za-z ]{3,}$/;
    const usernameReg = /^[A-Za-z0-9_]{6,}$/;
    const { id } = useParams();
    const [user, setUser] = useState({
        name: '',
        username: '',
        email : ''
    })
    const [error, setError] = useState('');
    useEffect(() => {
        let fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3006/users/${id}`);
                if (response && response.data) {
                    let fetchUser =  response.data;
                    setUser({
                        name: fetchUser.name,
                        username: fetchUser.username,
                        email : fetchUser.email
                    });
                }
                setError('');
            } catch (err) {
                setError(err.code);
            }
        }
        fetchData();
    },[])
    let changeHandler = (e) => {
        let tarName = e.target.name,
            value = e.target.value;
        setUser({...user, [tarName]: value})
    }
    let submitHandler = (e) => {
        e.preventDefault();
        if (
            user.name.trim() === '' ||
            user.username.trim() === ''
        ) {
        message.error('Please fill in all the fields');
        } else {
            switch (true) {
                case !nameReg.test(user.name):
                    message.error(
                        "Name must be 3 characters long and shouldn't contain letters or numbers"
                    );
                    break;
                case !usernameReg.test(user.username):
                    message.error(
                        'Username must be 6 characters long and can contain letters or numbers'
                    );
                    break;
                default:
                    axios.put(`http://localhost:3006/users/${id}`,user)
                .then(() => {
                    message.success('User modified successfully');
                });
            }
        }
    };
    if (error !== '') {
        return <ErrorHandler code={error}/>
    } else {
        return (
            <div className=" grid-cols-1">
                <Header title='Edit User' />
                <form className="grid" id="add-form" onSubmit={submitHandler}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={user.name}
                        onChange={changeHandler}
                    />

                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={user.username}
                        onChange={changeHandler}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        className=" cursor-not-allowed"
                        type="text"
                        name="email"
                        id="email"
                        value={user.email}
                        disabled
                    />

                    <input
                        type="submit"
                        value='Update'
                        className=" my-10 h-8 cursor-pointer text-white duration-300 bg-green-600 hover:bg-green-500 "
                    />
                </form>
            </div>
        )
    }
}

export default EditUser;