import React from 'react'
import NavBar from '../Navbar/NavBar'
import './Home.css'
import {useQuery} from '@tanstack/react-query'
import data from '../../utls/nba_team_data'
const Home = () => {

  return (
    <div>
      <NavBar/>
      <div>
        <h1>NBA TEAMS</h1>
        {data.map((team) => (
          <div key = {team.id}>
            <h3>{team.name}</h3>
            <img src = {team.logo} alt = 'team logo'/>
            <p>Conference - {team.leagues?.standard?.conference}</p>
            <p>Division - {team.leagues?.standard?.division}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home