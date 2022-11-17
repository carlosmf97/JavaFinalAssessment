import React from "react";

export default function User(props){

    // Get the user and show
    console.log(props);

 return (
            <tr>
                <td>{props.props.username}</td>
                <td>{props.props.lastname}</td>
                <td>{props.props.email}</td>
                <td>{props.props.phone}</td>
            </tr>

    )

}