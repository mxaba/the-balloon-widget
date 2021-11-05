import logo from "./../../logo.jpg"
import React, { useState } from "react";
import "./Welcome.css"
import { withRouter } from "react-router-dom";

function Welcome(props){
    const [state , setState] = useState({
        name : "",
        termsandcon: ""
    })

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.termsandcon !== true){
            if(state.name == "MCB"){
                setState(prevState => ({
                    ...prevState,
                    'successMessage' : 'Login successful. Redirecting to StockTakerScreen page..'
                }))
                StockTakerScreen();
                props.showError(null)
            } else{
                setState(prevState => ({
                    ...prevState,
                    'successMessage' : 'Login successful. Redirecting to UserScreen page..'
                }))
                UserScreen();
                props.showError(null)
            }
            props.showError(null)
        } else {
            props.showError('Please check the box!');
        }
    }

    const UserScreen = () => {
        props.updateTitle(state.name)
        props.history.push('/UserScreen');
    }

    const StockTakerScreen = () => {
        props.updateTitle(state.name)
        props.history.push('/home');
    }

    return(
        <div className="container">
            <div className="row main-content bg-success">
            <img src={logo} className="Welcome-logo" alt="logo" />
                <div className="col-12 login_form ">
                    <div className="container ">
                        <div className="row">
                            <form control="" className="form-group">
                                <div className="row">
                                    <div className="col-6">
                                        <input type="text" 
                                            name="name" 
                                            id="name" 
                                            className="form__input"
                                            value={state.name} 
                                            placeholder="name"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-6">
                                    <input type="submit" 
                                        value="Submit" 
                                        className="btn"
                                        onClick={handleSubmitClick}
                                    />
                                    </div>
                                </div>
                                <div className="row termsandcon">
                                    <input type="checkbox" 
                                        name="termsandcon" 
                                        id="termsandcon"
                                        value={state.termsandcon} 
                                        onChange={handleChange}
                                        className="termsandconIn"
                                    />
                                    <label for="termsandcon">Please note that your information will be saved</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
    		</div>
    	</div>
    )
}
export default withRouter(Welcome);
