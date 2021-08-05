import React, { Component } from 'react';
 import email from '../images/email.png';
 import phone from '../images/phone.png';
 import facebook from '../images/facebook.png';
 import github from '../images/github2.png';
import Tilt from 'react-vanilla-tilt';

class Profile extends Component {
    state = {  }
    render() { 
        return ( <div className="card-background">

                <Tilt className="tilt">
                <div className="card">
                    <div className="center">
                        <h1 className="m-2">Tebatso Manaka</h1>
                    </div>
                    <div className="center-straight">
                        <div className="flex">
                            <img src={email} alt="" />
                            <div><p><span className="archer">Email : manaka@gmail</span></p></div>
                        </div>
                        <div className="flex">
                            <img src={phone} alt="" />
                            <div><p><span className="archer">Phone : 0766166822</span></p></div>
                        </div>
                        <div className="flex">
                            <img src={facebook} alt="" />
                            <div><p><span><a href="https://www.facebook.com/Tebatso-Manaka">facebook : Terrence Manaka</a></span></p></div>
                        </div>
                        <div  className="flex">
                            <img src={github}  alt="" />
                            <div><p><span><a href="https://github.com/Mr-coder-Tee">Github : Mr-coder-Tee</a></span></p></div>
                        </div>
                    </div>
                </div> 
                </Tilt>
                
            </div> );
    }

}
 
export default Profile;