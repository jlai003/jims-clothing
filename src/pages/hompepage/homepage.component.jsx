import React from 'react';
import './homepage.styles.scss';
import '../../components/menu-items/menu-item.styles.scss'
// import MenuItem from '../../components/menu-items/menu-item.component';
import Directory from '../../components/directory/directory.component';

const Homepage = () => {
    return (
        <div className = 'homepage'>
            <Directory/>
        </div>
    );
}

export default Homepage;