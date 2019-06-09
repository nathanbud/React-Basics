import React from 'react';
import '../components/css/style.css';

const Header = (props) => {

        return(
            <header>
            <div className="logo">Search News</div>
            <input type="text" onChange={props.keywords}/> 
            </header>
        )
};

export default Header;