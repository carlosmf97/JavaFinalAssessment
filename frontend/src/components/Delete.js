import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";


export default function Delete(){

    const [searchParams, setSearchParams] = useSearchParams();
  
    const url = "localhost:8080/users/" + searchParams.get("id") + "/delete";

    useEffect(async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json; charset=utf-8");
    
        var requestOptions = {
          method: "DELETE",
          headers: myHeaders,
          redirect: "follow",
        };
    
        fetch(url, requestOptions)
          .then((response) => response.json())
          .then((response) => console.log(response))
          .catch((error) => console.log("error", error));
      }, []);


}