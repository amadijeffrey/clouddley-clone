import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/images/image.webp'

const Header = () => {
    return ( 
        <header className='header' style={{ display: 'flex', justifyContent: 'space-between', height: '110px',padding: '30px',alignItems:'center',borderBottom: '1px solid lightgray'}}>
            <span style={{height:'100%'}}>
                <img alt='clouddley' src={logo} style={{maxHeight: '100%'}}/>
            </span>
            <div  style={{background: '#057FD2', height: '100%', display: 'flex', alignItems: 'center',padding: '15px', borderRadius: '5px',marginRight: '5px'}}>
            <Link to='/subscribe'  >
              <span style={{ color: 'white', fontWeight: 'bold'}}>Join our waitlist</span>  
            </Link>
            </div>  
        </header>
    )
}


export default Header