import React from 'react'
import axios from 'axios'
import { useParams,useLocation } from 'react-router-dom'
import teams from '../../utls/team_data'

export const Team = () => {
    const {id} = useParams()
    const location = useLocation()
    const {team} = location.state || {}
    const data = teams.flat().find(team=>team.id === Number(id))


       
    return (
        <div>
            <h1>{team?.name}</h1>
            <p>Total games played:{data?.games}</p>
            <p>Total assists: {data?.assists}</p>
            <p>Total blocks: {data?.blocks}</p>
        </div>
    )
}
