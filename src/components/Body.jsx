import React from 'react'
import '../components/Body.css';

function Body() {
    return (
        <div className='b-main'>
            <div className='b-left'>
                <h1>FLUTTER WEB.
                    <br />
                    THE BASICS</h1>
                <p>In this course we will go over the basics of using Flutter Web for
                    development. Topics will include Responsive Layout, Deploying, Font
                    Changes, Hover functionality, Modals and more.</p>
            </div>
            <div className='b-right'>
                <button>Join course</button>
            </div>
        </div>
    )
}

export default Body
