import React, { useState } from "react";
import TableSections from "../Tables/TableSections";
import { uid } from 'uid';
import { allowedColors } from "../../allowedColors";
import Chart from "../Chart/Chart";

function UserScreen(props){
    const {colors, addColor, removeTrendingColor} = props;
    const [stateColorValue , setStateColorInput] = useState("")

    const CanColorBeBlocked = (colorName) => {
        const trendingColors = colors.filter(color => color.type === "trending")
        const currentColor = colors.find(color => color.colorName === colorName && color.counter === 10)
        if (trendingColors.length >=3 && currentColor){
          return true
        } else {
          return false
        }
      }

    const handleSubmitClick = () => {
        if(stateColorValue === ""){
            props.showError('Please enter a color');
        } else {
            console.log("")
            console.log(CanColorBeBlocked(stateColorValue))
            const name = stateColorValue.charAt(0).toUpperCase() + stateColorValue.slice(1).toLowerCase();
            if (allowedColors.includes(name)){
                if (CanColorBeBlocked(name)){
                    props.showError("Only three allowed to trend")
                } else {
                    addColor({
                        id: uid(),
                        colorName: name,
                        counter: 1,
                        type: "upAndComing"
                    })
                    props.showError(null)
                }
            } else {
                props.showError(`${name} is not supported`);
            }
            
        }
        setStateColorInput("")
    }

    const colorChangeHandler = (event) => setStateColorInput(event.target.value);

    return(
        
        <div className="container">
            <div className="row">
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
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
                    <Chart colors={colors}/>
                </div>
                <div class="w-20"></div>

                <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8" style={{float: "right"}}>
                    <TableSections removeTrendingColor={removeTrendingColor} colors={colors}/>
                </div>
            </div>
    	</div>
    )
}

export default UserScreen;