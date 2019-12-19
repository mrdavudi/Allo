import React from "react";
import '../../Css/mainPage.css'
import {Link} from "react-router-dom";

function MainPage() {
    return (
        <React.Fragment>
            <div className={'container'}>
                <div className={'leftSide'}>
                    <div className={'logo'}>

                    </div>
                    <div className={'description'}>
                        <div>
                            <h1>Web and Mobile messaging</h1>
                            <h4>
                                Allo Messenger is a FREE
                                mobile and web messaging app used for
                                instant messaging, sharing photos
                                , videos, audio recordings. The mobile app,
                                which is free to download, can be used
                                to communicate with your friends on Allo.
                            </h4>
                        </div>

                        <div className={'LoginSignUpBtn'}>
                            <div>
                                <Link
                                    to={'/auth/signin'}
                                    className={'btnPrimary'}>
                                    {'SIGNIN'}
                                </Link>
                            </div>
                            <div>
                                <Link
                                    to={'/auth/signup'}
                                    className={'btnDanger'}>
                                    {'SIGNUP'}
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>


                <div className={'rightSide'}>

                </div>
            </div>

        </React.Fragment>
    )
}

export default MainPage