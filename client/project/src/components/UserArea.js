import { Link, Routes, Route, Outlet } from "react-router-dom"
import './login.css'
export default function UserArea() {

    return (
        <div >
            <h2>hello {sessionStorage.getItem('user')}</h2>
            <div className="bar">
                <Link to="./uploadImage"> upload image </Link>
                <Link to="./uploadVideo"> upload video </Link>
            </div>
            <div className="body"> 

                <Outlet />

            </div>

        </div>

    )
}