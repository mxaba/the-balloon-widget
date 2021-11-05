import React, { useState } from "react";
import "./Table.css"

function TrendingColorsTable(props){
    const [state , setState] = useState({
        color : "",
        termsandcon: ""
    })

    return(
        <table>
            <thead>
            <tr>
                <th scope="col">Top 3 Trading Colors</th>
            </tr>
            </thead>
            <tbody>
            <tr><th scope="row">Red</th></tr>
            <tr><th scope="row">Yellow</th></tr>
            <tr><th scope="row">White</th></tr>
            </tbody>

            <tfoot>
            <tr>
                <td colSpan="3">Data is updated every 5 minutes.</td>
            </tr>
            </tfoot>
      </table>
    )
}

export default TrendingColorsTable;
