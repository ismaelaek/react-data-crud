import React, { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";
import Header from "./header";
let AddUser = () => {
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameReg = /^[A-Za-z]{3,}$/;
    const usernameReg = /^[A-Za-z0-9_]{6,}$/;
    const [user, setUser] = useState({
        name: '',
        username: '',
        email : ''
    })
    const [isLoading, setIsLoading] = useState(false);
    let changeHandler = (e) => {
        let tarName = e.target.name,
            value = e.target.value;
        setUser({...user, [tarName]: value})
    }
    let submitHandler = (e) => {
        e.preventDefault();
        if (!emailReg.test(user.email) || !nameReg.test(user.name) || !usernameReg.test(user.username)) {
        message.error('Invalid email address');
        } else {
            setIsLoading(true);
            axios.post('http://localhost:3006/users', user)
                .then(() => {
                    message.success('User added successfully');
                    setUser({
                            name: '',
                            username: '',
                            email : ''
                        })
                    setIsLoading(false);
                }).catch(() => {
                    message.error("Can't add user, Please check your internet connection");
                    setIsLoading(false);
                })
        }
    };
    return (
        <div className=" grid-cols-1">
            <Header title='Add User' />
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
                    type="text"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={changeHandler}
                />

                <input
                    type="submit"
                    value='Add'
                    className=" my-10 h-8 text-white duration-300 bg-green-600 hover:bg-green-500 "
                    style={{ cursor: isLoading ? 'wait' : 'pointer' }}
                />
            </form>
        </div>
    )
}

export default AddUser;