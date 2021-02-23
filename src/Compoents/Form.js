import React from 'react';

const Form = (props) => {
    return (
        <div>
            <h1> Registration From </h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <label>Full Name</label>
            <br />
            <input type="text"
                onChange={props.handlefullname}
                name="username" id="username" required />

            <br />
            <br />
            <label>Email Address</label>
            <br />
            <input type="email"
                onChange={props.handleemail}
                name="email" autoComplete="off" id="email" required />

            <br />
            <br />
            <label>Phone No</label>
            <br />
            <input type="text"
                onChange={props.handlephone}
                name="phone" autoComplete="off" id="phone" required />

            <br />
            <br />
            <label>Date Of Brith</label>
            <br />
            <input type="text"
                onChange={props.handledob}
                name="dob" autoComplete="off" id="dob" required />

            <br />
            <br />
            <label>Password</label>
            <br />

            <input type="password"
                onChange={props.handlePassword}
                name="pass" autoComplete="off" id="pass" required />

            <br />
            <br />

        



            <button type="submit" className="signupbtn" onClick={props.buttonhandler}>Registration</button>
        </div>
    );
}

export default Form;


