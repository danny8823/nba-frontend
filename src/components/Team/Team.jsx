import React from 'react'
import { useParams } from 'react-router-dom'
import teams from '../../utls/team_data'
export const Team = () => {
    const {id} = useParams()

    console.log(teams[0])

    const find_team
    return (
        <div>Team</div>
    )
}
