import React from "react";
import "./UserForm.css";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function UserForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [userData, setUserData] = useState([]);

  const url = "localhost:8080/users/" + searchParams.get("id");

  useEffect(async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json; charset=utf-8");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((response) => setUserData(response))
      .catch((error) => console.log("error", error));
  }, []);

  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const surnameHandler = (e) => {
    setSurname(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let user = {
      username: name,
      lastname: surname,
      email: email,
      phone: phone,
    };

    let requestOptions;

    if (searchParams.get("id") != undefined) {
      requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      };
    } else {
      requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      };
    }

    fetch("http://localhost:8080/users", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });

    window.location.href = "/users";
  };

  return (
    <div>
      <form className="userForm">
        <label>Name:</label>
        <input
          type="text"
          className="inputName"
          value={userData.username}
          onChange={nameHandler}
        />
        <label>Surname:</label>
        <input
          type="text"
          className="inputSurname"
          value={userData.lastname}
          onChange={surnameHandler}
        />
        <label>Email:</label>
        <input
          type="email"
          className="inputEmail"
          value={userData.email}
          onChange={emailHandler}
        />
        <label>Phone number:</label>
        <input
          type="text"
          maxLength={9}
          className="inputPHone"
          value={userData.phone}
          onChange={phoneHandler}
        />
        <input type="submit" className="inputSubmit" onClick={submitHandler} />
      </form>
    </div>
  );
}
