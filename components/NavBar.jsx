import Image from 'next/image'
import Logo from '../public/assests/logo.png'
const NavBar = () => {
  return (
    <div className='flex justify-between bg-gray-500 text-white'>
      
<Image src={Logo} className='w-12 pt-4 pl-2' />
<h1 className='text-white font-bold pt-6 text-xl pr-3'>Be FIt With US.</h1>        
    </div>
  )
}

export default NavBar