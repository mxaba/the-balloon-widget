import React from "react";
import "./Table.css"

function TableSections(props){
    const colors  = props.colors;
    
    function SortAndGroup(type) {
        const colorRows = [];
        colors.map(color => {
            if(type === color.type){
                const row = (
                    <tr key={color.id}>
                        <th scope="row">{color.colorName}</th>
                        <td>{color.counter}</td>
                    </tr>
                );
                colorRows.push(row);
            }
        })
        return colorRows
    }

    return(
        <table >
            <thead>
            <tr>
                <th scope="col">Trending</th>
                <th scope="col">Popular</th>
                <th scope="col">Up and Coming</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{SortAndGroup("trending")}</td>
                <td>{SortAndGroup("popular")}</td>
                <td>{SortAndGroup("upAndComing")}</td>
            </tr>
            </tbody>
      </table>
    )
}

export default TableSections;
