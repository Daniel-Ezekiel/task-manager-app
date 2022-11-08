import Button from "./Button"
import { useState } from "react";


const Header = ( {toggleForm} ) => {
    return (
        <header>
            <h1>Task Tracker</h1>
            <Button text="Add" onClick={toggleForm}/>
        </header>
    )
}

export default Header