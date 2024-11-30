import React from 'react'
import { useParams,useLocation } from 'react-router-dom'
import { get_team_data } from '../../services/nbaServices'

export const Team = () => {
    const {id} = useParams()
    const location = useLocation()
    const {team} = location.state || {}

    get_team_data(id)
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log(error.message)
        })
        
    return (
        <div>Team</div>
    )
}
