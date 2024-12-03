import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='flex-col space-y-10 justify-center m-10 mb-0'>
     <nav className='flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-slate-900'>
      <a className='hover:text-red-600 text-amber-500' href='#'>Home</a>
      <a className='hover:text-red-600 text-amber-500' href='#'>About</a>
      <a className='hover:text-red-600 text-amber-500' href='#'>Delivery</a>
      <a className='hover:text-red-600 text-amber-500' href='#'>Contact</a>
     </nav>
    
     <p className='text-center hover:text-red-500 text-amber-400 font-medium mb-8'
     >2024 Shazia Samma. All Rights Reserved.</p>
     <br />
     <br />
     <br />
      </footer>
    </div>
  )
}

export default Footer
