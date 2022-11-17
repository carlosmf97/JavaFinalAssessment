import React, { useEffect, useState } from "react";
import User from "./User";
import "./Users.css"

export default function Users(){

    // Fetch all users

    const url = "localhost:8080/users";

    const [userData, setUserData] = useState([]);

    useEffect( () => {
        fetch(url).then( response => setUserData(response.json()) ).then( data => console.log(data));
    }, []);


    return(
    <div className="tableContainer"> <table className="usersTable">
        <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Phone number</th>
        </tr>
        {userData.map( element => { return <User props={element}/>})}
    </table>

    <button className="homeButton">Back to Home</button>
    </div>
    )

}