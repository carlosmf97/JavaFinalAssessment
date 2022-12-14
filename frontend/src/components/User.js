import React from "react";

export default function User(props){

    // Get the user and show
    console.log(props);
    const clickUpdateHandler = (e) => {
        window.location.href = "/register?id=" + props.props.id;
    }
    const clickDeleteHandler = (e) => {
        window.location.href = "/delete?id=" + props.props.id;
    }

 return (
            <tr>
                <td>{props.props.username}</td>
                <td>{props.props.lastname}</td>
                <td>{props.props.email}</td>
                <td>{props.props.phone}</td>
                <td><button className="updateButton" onClick={clickUpdateHandler}>Update</button></td>
                <td><button className="deleteButton" onClick={clickDeleteHandler}>Delete</button></td>
            </tr>

    )

}