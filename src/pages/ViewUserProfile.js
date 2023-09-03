import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GET_USER_BY_ID } from "../service/userService"

const ViewUserProfile = () => {
    const {id} = useParams()
    const [user, setUser] = useState({})


    useEffect(() => {
        GET_USER_BY_ID(id)
        .then(response => setUser(response))
        .catch(error => console.log(error))
    },[])

    return (
        <div className="containrer mt-5 bg-light py-4 px-3">
            <div className="d-flex">
                <img className="img-fluid rounded-2" width={"400px"} src={user.avatar} alt=" User Profile" />
                <div className="ms-5 ps-2 mt-4">
                    <h1> User Profile Details </h1>
                    <hr />
                    <h3> Full name: {user.name}</h3>
                    <p className="text-warning">Role: {user.role}</p>
                    <p> Email: {user.email}</p>
                    <button className="btn btn-warning"> Update </button>
                </div>
            </div>
        </div>
    )
}

export default ViewUserProfile;