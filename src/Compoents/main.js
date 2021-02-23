import React from 'react';

const Main = (props) => {
    return (
        <div>
            hello <strong> {props.fullname}</strong> 
            <br/> 
             your mail id is <strong>{props.mailid} </strong> 
             <br/> 

             and your date of birth is <strong>{props.dob}</strong> 
             <br/> 

             and also your remember your pass <strong>{props.pass}</strong>
             <br/> 
 
             to forget the password u have to use your phone no <strong>{props.phone}</strong>
             <br/>
            <button onClick={props.backhandle}>back</button>
        </div>
    );
}

export default Main;