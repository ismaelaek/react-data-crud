import React, { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";
import Header from "./header";
let AddUser = () => {
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameReg = /^[A-Za-z ]{3,}$/;
    const usernameReg = /^[A-Za-z0-9_]{6,}$/;
    const [emails, setEmails] = useState([]);
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
    useEffect(() => {
        let getEmails = async () => {
            try {
                const response = await axios.get('http://localhost:3006/users');
                console.log(response.data)
                if (response.data && response.data.length > 0) {
                    let data = []
                    data = response.data.map(user => user.email);
                    setEmails(data);
                } else {
                    console.log('ikhaan saf')
                }
            } catch (err) {
                console.log(err)
            }
        }
        getEmails()
    }, [])
    let submitHandler = (e) => {
    e.preventDefault();
    if (
        user.name.trim() === '' ||
        user.username.trim() === '' ||
        user.email.trim() === ''
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
            case !emailReg.test(user.email):
                message.error('Please enter a valid email address');
                break;
            case emails.includes(user.email):
                message.warning('This email is already in use');
                break;
            default:
                setIsLoading(true);
                axios.post('http://localhost:3006/users', user)
                    .then(() => {
                        message.success('User added successfully');
                        setUser({
                            name: '',
                            username: '',
                            email: '',
                        });
                        setIsLoading(false);
                    })
                    .catch(() => {
                        message.error(
                            "Can't add user, Please check your internet connection"
                        );
                        setIsLoading(false);
                    });
        }
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