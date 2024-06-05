
import { Link, Outlet } from 'react-router-dom';
/** ------------------ IMPORTING HOOKS ------------------ **/
import { useValue } from '../../context';




/** ------------------ Function to show the Navbar ------------------ **/
function Navbar() {
  const {isLoggedIn}=useValue();
  

  
  return (
    <>
      <div className='flex flex-row bg-blue-400 py-3 px-2'>
        <div id="logo" className='w-3/4 font-extrabold'>Authentication App </div>
        <div id="options" className='w-1/4 flex justify-end gap-2'>
            <Link to="/signUp" className='bg-white text-black-800 px-2 py-1 rounded-md'>Sign Up</Link>
            {isLoggedIn?<Link to ="/signIn" className='bg-white text-black-800 px-2 py-1 rounded-md'>Log Out</Link>:
            <Link to ="/signIn" className='bg-white text-black-800 px-2 py-1 rounded-md'>Sign In</Link>}
            
        </div>
      </div>
      <Outlet />
    </>
  );
}

/** ------------------ EXPORTING MODULES ------------------ **/
export default Navbar;
