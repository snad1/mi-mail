import React from "react";

const Compose = () => {

    console.log('compose')
    return <div className="compose_body">
        <input type="email" placeholder='Sender:'/>
        <input type="email" placeholder='To:'/>
        <input type="text" placeholder='Subject'/>
        <textarea> Type your message</textarea>
    </div>
}

export default Compose