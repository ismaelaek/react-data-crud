import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Button, message } from 'antd';
import UserItem from './UserItem';
import ErrorHandler from './errorHandler';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        let fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3006/users');
                if (response && response.data) {
                    setUsers(response.data);
                    setError('');
                }
            } catch (err) {
                console.log(err.code)
                setError(err.code)
            }
        }
        fetchData();
    }, [])
    
    let handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3006/users/${id}`);
            let updatedUsers = users.filter(user => user.id !== id);
            setUsers(updatedUsers);
            message.success('User has been deleted successfuly')
        } catch (err) {
            message.error('Error deleting user');
        }
    };

    return (
        <>
            {error !== '' ? (
                <ErrorHandler code = {error} />
            ): (
                <div className='grid-cols-1'>
                    <div className=' flex justify-between my-10 items-center'>
                        <h1 className=' font-bold'>Users List</h1>
                        <Button type='primary' className=' bg-blue-600'>
                            <NavLink to='AddUser' className='h-full w-full hover:text-white'>Add User</NavLink>
                        </Button>
                    </div>
                    {users.length == 0 ? (
                        <div className='w-full text-center'>
                            <h1 > No users yet </h1>
                            <p className=' mt-5'>Click <NavLink to='AddUser'>here</NavLink> to add users</p>
                        </div>
                        
                    ) : (
                        
                        <table className=' w-full'>
                            <tr>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                            {users.map((user) => {
                                return (<UserItem key={user.id} user={user} onDelete={() => handleDelete(user.id)}/>)
                            })}
                        </table>
                    ) }
                </div>
            )}
        </>
    );
};

export default UsersList;