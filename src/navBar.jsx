import React from 'react';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return (    
                <div className='navBar'>
                    
                    <div className='AnagramChecker'>
                        <Link to="/AnagramChecker">Anagram</Link>
                    </div>
                    <div className='Counter'>
                        <Link to="/Counter">Compteur</Link>
                    </div>
                    <div className='FizzBuzz'>
                        <Link to="/FizzBuzz">FizzBuzz</Link>
                    </div>
                    <div className='afficheTime'>
                        <Link to="/afficheTime">Chronomètre</Link>
                    </div>
                    <div className='afficheFilm'>
                        <Link to="/afficheFilm">Films</Link>
                    </div>
                </div>
    )

}

export default Navbar;