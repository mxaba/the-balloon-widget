import logo from "./../../logo.jpg"
import React, { useState } from "react";
import "./Welcome.css"

function Welcome(){
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
                                        <input type="text" name="name" id="name" className="form__input" placeholder="name"/>
                                    </div>
                                    <div className="col-6">
                                    <input type="submit" value="Submit" className="btn"/>
                                    </div>
                                </div>
                                <div className="row termsandcon">
                                    <input type="checkbox" name="termsandcon" id="termsandcon" className="termsandconIn"/>
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

export default Welcome;
