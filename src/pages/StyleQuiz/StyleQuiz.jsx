import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import AlertBar from "../../components/AlertBar/AlertBar";
import "./StyleQuiz.css"

export default function Quiz({loggedUser, handleLogout}) {
    const headerIntro = "Already know what you want?";
    const headerLinkDisp = "Click Here to schedule a FREE phone consultation!";
    const headerLinkSrc = "/";

    return(
        <div>
            <AlertBar headerIntro={headerIntro} headerLinkDisp={headerLinkDisp} headerLinkSrc={headerLinkSrc} />
            <NavBar loggedUser={loggedUser} handleLogout={handleLogout} />
            <h1 id="test">Mother Fuckin' Style Quiz</h1>
        </div>
    )
}