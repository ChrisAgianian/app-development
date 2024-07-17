import React from 'react';
import manavatar from './images/manavatar.png'
import './index.css';

const User = function(props){
    return(
        <div>
            <section className ='card'>
                <a>
                    <img src={props.image} />
                </a>
                <div className='content'>
                    <a className='author'>{props.name}</a>
                </div>
                <div className='metadata'>
                    Posted on <span className='date'>{props.date}</span>
                </div>
                <div className='comment'>
                    "{props.comments}"
                </div>
            </section>
        </div>
    )
}

export default User;