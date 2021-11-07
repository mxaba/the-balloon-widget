import React, { useState } from "react";
import TableSections from "../Tables/TableSections";
import TrendingColorsTable from "../Tables/TrendingColorsTable";
import { uid } from 'uid';

function UserScreen(props){
    const {colors, addColor, removeTrendingColor} = props;
    const [stateColorValue , setStateColorInput] = useState("")
    // setFilteredColor(colors)

    const handleSubmitClick = () => {
        if(stateColorValue === ""){
            props.showError('Please enter a color');
        } else {
            addColor({
                id: uid(),
                colorName: stateColorValue.charAt(0).toUpperCase() + stateColorValue.slice(1).toLowerCase(),
                counter: 1,
                type: "upAndComing"
            })
        }
        setStateColorInput("")
    }

    const colorChangeHandler = (event) => setStateColorInput(event.target.value);

    return(
        
        <div className="container-fliud">
            <div className="row">
                <div className="col-4">
                    <input type="text" 
                        name="color" 
                        id="color" 
                        className="form__input"
                        value={stateColorValue} 
                        placeholder="Request color"
                        onChange={colorChangeHandler}
                    />
                    <input type="submit" 
                        value="Submit" 
                        className="btn"
                        onClick={handleSubmitClick}
                    />
                    {console.log(colors)}
                    <TrendingColorsTable removeTrendingColor={removeTrendingColor} colors={colors}/>
                </div>

                <div className="col-8" style={{float: "right"}}>
                    <TableSections removeTrendingColor={removeTrendingColor} colors={colors}/>
                </div>
            </div>
    	</div>
    )
}

export default UserScreen;
