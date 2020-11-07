import React from 'react';
import MenuItem from '../menu-item.component';
import './directory.styles.scss'
import sections from './directory.data'

function Directory() {
         
    return (
        <div className="directory-menu">
        {
            sections.map(({title, imageUrl, id, size}) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
            ))
        }
        </div>
    );
}

export default Directory;