import React from 'react';
import {Space,Button} from 'antd'
import { NavLink } from 'react-router-dom';

const UserItem = ({user, onDelete}) => {
    return (
        <tr>
            <td>
                {user.name}
            </td>
            <td>
                {user.username}
            </td>
            <td>
                {user.email}
            </td>
            <td>
                <Space>
                    <Button type="primary" className='bg-green-600'>
                        <NavLink to={'/EditUser/'+user.id} className=' text-white hover:text-white'>
                            Edit
                        </NavLink>
                    </Button>
                    <Button  type='primary' danger onClick={onDelete}>Delete</Button>
                </Space>
            </td>
        </tr>
    );
};

export default UserItem;