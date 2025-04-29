import { navLinks } from '../constants'
import { useEffect, useState } from 'react'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }

        window.addEventListener('scroll', handleScroll);

        // clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="inner">
                <a className="logo" href="#hero"> 
                    Micheal Lynch
                </a>

                <nav className='desktop'>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name} className='group'>
                                <a href={link.link}>
                                    <span>{link.name}</span>
                                    <span className='underline'></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href='#contact' className='contact-btn group'>
                    <div className='inner'>
                        <span>Contact Me</span>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default NavBar