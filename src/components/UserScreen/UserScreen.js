import React, { useState } from "react";
import TableSections from "../Tables/TableSections";
import { uid } from 'uid';
import { allowedColors } from "../../allowedColors";
import Chart from "../Chart/Chart";

function UserScreen(props){
    const {colors, editColorCount, deleteColor, addColor, removeTrendingColor} = props;
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
    
    const colorChangeHandler = (event) => setStateColorInput(event.target.value);


    const handleDeleteClick = () => {
        if(stateColorValue === ""){
            props.showError('Please enter a color you want to deleted');
        } else {
            const name = stateColorValue.charAt(0).toUpperCase() + stateColorValue.slice(1).toLowerCase();
            const colorToBeDeleted = colors.find(color => color.colorName === name)
            if (colorToBeDeleted){
                deleteColor(colorToBeDeleted.id)
            } else {
                props.showError(`This ${name} is not on our requested colors😤`);
            }
        }
        setStateColorInput("")
    }

    const handleEditClick = () => {
        if(stateColorValue === ""){
            props.showError('Please enter a color and count');
        } else {
            const name = stateColorValue.charAt(0).toUpperCase() + stateColorValue.slice(1).toLowerCase();
            var splittedSring = name.split(" ")
            console.log(splittedSring)
            if(splittedSring.length > 1){
                const colorToBeDeleted = colors.find(color => color.colorName === splittedSring[0].trim())
                if (colorToBeDeleted){
                    if(colorToBeDeleted.counter > parseInt(splittedSring[1].trim(), 10)){
                        editColorCount(colorToBeDeleted.colorName, parseInt(splittedSring[1].trim(), 10))
                        props.showError(null);
                    } else {
                        props.showError(`👮🏾‍♂️That's illegal👮🏾‍♂️`);
                    }
                } else {
                    props.showError(`This ${splittedSring[0].trim()} is not on our requested colors😤`);
                }
            } else {
                props.showError(`What you entered should be seperated by a space eg: ${splittedSring[0].trim()} 2`);
            }
        }
        setStateColorInput("")
    }

    const handleRequestClick = () => {
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


    return(
        
        <div className="container">
            <div className="row">
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 threeButton">
                    <input type="text" 
                        name="color" 
                        id="color" 
                        className="form__input"
                        value={stateColorValue} 
                        placeholder="Request/Delete/Edit color"
                        onChange={colorChangeHandler}
                    /> <br /><br />
                    <button className="btn btn-outline-success" onClick={handleRequestClick}>
                        <i class="fa fa-paper-plane" aria-hidden="true"></i>
                    </button>

                    <button className="btn btn-outline-danger" onClick={handleDeleteClick}>
                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                    </button>

                    <button className="btn btn-outline-warning" onClick={handleEditClick}>
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </button>

                    <br />
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