import React, { useState } from "react";
import "./Table.css"

function UserTable(props){
    const [state , setState] = useState({
        color : "",
        termsandcon: ""
    })

    return(
        <table>
            <thead>
            <tr>
                <th scope="col">Your Colors</th>
            </tr>
            </thead>
            <tbody>
            <tr><th scope="row">Red</th></tr>
            <tr><th scope="row">Yellow</th></tr>
            <tr><th scope="row">White</th></tr>
            <tr><th scope="row">Organge</th></tr>
            </tbody>
      </table>
    )
}

export default UserTable;
