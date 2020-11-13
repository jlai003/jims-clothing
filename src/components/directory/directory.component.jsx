import React from 'react';
import MenuItem from '../menu-items/menu-item.component';
import './directory.styles.scss'
import sections from './directory.data'

function Directory() {
         
    return (
        <div className="directory-menu">
        {
            sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps}/>
            ))
        }
        </div>
    );
}

export default Directory;