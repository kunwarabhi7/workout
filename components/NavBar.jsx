import Image from 'next/image'
import Logo from '../public/assests/logo.png'
import Link from 'next/link'
const NavBar = () => {
  return (
    <div className='flex justify-between bg-gray-500 text-white w-full pb-4'>
      <Link href='/'>
<Image src={Logo} className='w-12 pt-4 pl-2' alt='logo' />
      </Link>
<h1 className='text-white font-bold pt-6 text-xl pr-3'>Be FIt With US.</h1>        
    </div>
  )
} 

export default NavBar