import React, { Component } from 'react';
// import imgs from './images/email.png';
import Tilt from 'react-vanilla-tilt';

class Profile extends Component {
    state = {  }
    render() { 
        return ( <div className="card-background">

                <Tilt>
                <div className="card">
                    <div className="center">
                        <h1 className="m-2">Tebatso Manaka</h1>
                    </div>
                    <div className="center-straight">
                        <div className="flex">
                            <img className="email"  alt="" />
                            <div><p><span className="archer">Email : manaka@gmail</span></p></div>
                        </div>
                        <div className="flex">
                            <img className="phone"  alt="" />
                            <div><p><span className="archer">Phone : 0766166822</span></p></div>
                        </div>
                        <div className="flex">
                            <img className="facebook"  alt="" />
                            <div><p><span><a href="https://www.facebook.com/Tebatso-Manaka">facebook : Terrence Manaka</a></span></p></div>
                        </div>
                        <div  className="flex">
                            <img className="github"  alt="" />
                            <div><p><span><a href="https://github.com/Mr-coder-Tee">Github : Mr-coder-Tee</a></span></p></div>
                        </div>
                    </div>
                </div> 
                </Tilt>
                
            </div> );
    }

}
 
export default Profile;