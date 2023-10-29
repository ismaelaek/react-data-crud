import { Button } from "antd";
import { NavLink } from "react-router-dom";
let Header = (props) => {
    return (
        <header className=' flex justify-between my-10 items-center'>
            <h1 className=' font-bold'>{ props.title}</h1>
            <Button type='primary' className=' bg-blue-600'>
                <NavLink to='/' className='h-full w-full hover:text-white'>Back Home</NavLink>
            </Button>
        </header>
    )
}
export default Header;