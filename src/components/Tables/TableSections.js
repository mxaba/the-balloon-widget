import React, { useState } from "react";
import "./Table.css"

function TableSections(props){
    const [state , setState] = useState({
        color : "",
        termsandcon: ""
    })

    return(
        <table>
            <thead>
            <tr>
                <th scope="col">Trending</th>
                <th scope="col">Popular</th>
                <th scope="col">Up and Coming</th>
            </tr>
            </thead>
            <tfoot>
            <tr>
                <td colspan="3">Data is updated every 5 minutes.</td>
            </tr>
            </tfoot>
            <tbody>
            <tr>
                <th scope="row">Red</th>
                <td>Green</td>
                <td>Purple</td>
            </tr>
            <tr>
                <th scope="row">Yellow</th>
                <td>White</td>
                <td>Organge</td>
            </tr>
            <tr>
                <th scope="row">Black</th>
                <td>Brown</td>
                <td>Grey</td>
            </tr>
            </tbody>
      </table>
    )
}

export default TableSections;
