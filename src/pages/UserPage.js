import axios from 'axios'
import React, { useEffect, useState } from "react";
import { GET_ALL_USERS } from '../service/userService';
import UserCard from '../components/UserCard';
import PlaceholderCard from '../components/PlaceholderCard';


const UserPage = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        GET_ALL_USERS()
        .then(response => {
            setUsers(response)
            setIsLoading(false)
        })
        .catch(error => {
            console.log("Error: ", error)
            setIsLoading(false)
        })
    },[])
    
    const renderPlaceholderCards = (numberOfCards) => {
        let allCards = []
        for( var i = 0; i < numberOfCards; i++){
            allCards.push(
                <div className="col-4 d-flex justify-content-center">
                        <PlaceholderCard/>  
                    </div>
            )
        }
        return allCards;
    }

    return(
        <div className="container mt-5">
            <h1 className="text-center"> User Page</h1>
            <div className="row">
                    {/* conditional rendering*/}

                    {
                        isLoading ?
                        (
                            <>
                              {renderPlaceholderCards(9)}
                            </>
                        ) : 
                        (
                            <>
                                {
                                    users.map((user) => (
                                        <div className="col-4 d-flex justify-content-center">
                                            <UserCard userInfo={user}/>
                                        </div>
                                    ))
                                }
                            </>
                        )
                    }                   
            </div>          
        </div>
    )
}

export default UserPage