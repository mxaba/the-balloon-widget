import React, { useEffect, useState } from 'react'
import "./Table.css"

function TableSections(props){
    const { colors, removeTrendingColor}  = props;
    const [fiveMinutesLeft, setFiveMinutesLeft] = useState(10);

	useEffect(() => {
        if (fiveMinutesLeft > 0) {
        const timerId = setTimeout(() => {
            setFiveMinutesLeft(fiveMinutesLeft - 1);
        }, 1000);
            return () => clearTimeout(timerId);
        } else {
            removeTrendingColor()
            setFiveMinutesLeft(10)
        }
    });
    
    const SortAndGroup = (type) => {
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
            {fiveMinutesLeft}
            <tbody>
                {console.log(fiveMinutesLeft)}
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
