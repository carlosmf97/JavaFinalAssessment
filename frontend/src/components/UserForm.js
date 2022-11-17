import React from "react";
import "./UserForm.css"
export default function UserForm(){


    return (
    <div>
        <form className="userForm">
            <label>Name:</label>
            <input type="text" className="inputName"/>
            <label>Surname:</label>
            <input type="text" className="inputSurname"/>
            <label>Email:</label>
            <input type="email" className="inputEmail"/>
            <label>PHone number:</label>
            <input type="text" maxLength={9} className="inputPHone"/>
            <input type="submit" className="inputSubmit"/>
        </form>
    </div>);
}