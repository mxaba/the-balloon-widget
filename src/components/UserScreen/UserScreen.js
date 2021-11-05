import React, { useState } from "react";
import TableSections from "../Tables/TableSections";
import UserTable from "../Tables/UserTable";

function UserScreen(props){
    const [state , setState] = useState({
        color : "",
        termsandcon: ""
    })

    return(
        <div className="container-fliud">
            <div className="row">
                <div className="col-4">
                    <input type="text" 
                        name="color" 
                        id="color" 
                        className="form__input"
                        value={state.color} 
                        placeholder="Request color"
                        // onChange={handleChange}
                    />
                    <input type="submit" 
                        value="Submit" 
                        className="btn"
                        // onClick={handleSubmitClick}
                    />
                    <UserTable colors={props.colors}/>
                </div>

                <div className="col-8" style={{float: "right"}}>
                    <TableSections colors={props.colors}/>
                </div>
            </div>
    	</div>
    )
}

export default UserScreen;
