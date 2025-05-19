import { navLinks } from '../constants'
import { useEffect, useState } from 'react'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener('scroll', handleScroll);

        // clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="mx-auto flex items-center justify-between">
                <a className="text-white-50 text-xl md:text-2xl font-semibold transition-transform duration-300 hover:scale-105" href="#home"> 
                    Micheal Lynch
                </a>

                <nav className='hidden lg:flex items-center text-2xl'>
                    <ul className='flex space-x-8'>
                        {navLinks.map((link) => (
                            <li key={link.name} className='text-white-50 relative'>
                                <a href={link.link}>
                                    <span className='transition-colors duration-300 hover:text-white'>{link.name}</span>
                                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href='#contact' className='flex'>
                    <div className='px-5 py-2 rounded-lg bg-white text-black group-hover:bg-black-50 transition-colors duration-300'>
                        <span className='group-hover:text-white transition-colors duration-300'>Contact Me</span>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default NavBar