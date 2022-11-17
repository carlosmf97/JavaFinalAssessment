import React from "react";
import "./UserForm.css"
import { useState } from "react";
export default function UserForm(){

    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();


    const nameHandler = (e) =>{setName(e.target.value)}
    const surnameHandler = (e) =>{setSurname(e.target.value)}
    const emailHandler = (e) =>{setEmail(e.target.value)}
    const phoneHandler = (e) =>{setPhone(e.target.value)}

    const submitHandler = (e) => {
        e.preventDefault();

        let user = {
            username: name,
            lastname: surname, 
            email: email,
            phone: phone
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
    
        fetch('http://localhost:8080/users', requestOptions)
            .then(response => response.json())
            .then( (data) => { console.log(data) } );

    }



    return (
    <div>
        <form className="userForm">
            <label>Name:</label>
            <input type="text" className="inputName" onChange={nameHandler}/>
            <label>Surname:</label>
            <input type="text" className="inputSurname" onChange={surnameHandler}/>
            <label>Email:</label>
            <input type="email" className="inputEmail" onChange={emailHandler}/>
            <label>PHone number:</label>
            <input type="text" maxLength={9} className="inputPHone" onChange={phoneHandler}/>
            <input type="submit" className="inputSubmit" onClick={submitHandler}/>
        </form>
    </div>);
}