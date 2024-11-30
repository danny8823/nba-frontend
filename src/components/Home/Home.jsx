import React from 'react'
import NavBar from '../Navbar/NavBar'
import './Home.css'
import data from '../../utls/nba_team_data'
import { Link } from 'react-router-dom'
const Home = () => {

  return (
    <div>
      <NavBar/>
      <div>
        <h1>NBA TEAMS</h1>
        <div className = 'nba-card-container'>
          {data.map((team) => (
            <div key = {team.id} className='nba-card'>
            <h4><Link to = {`/team/${team.id}`}state={{team: team}}>{team.name} </Link></h4>
              <img src = {team.logo} alt = 'team logo'/>
              <p>Conference - {team.leagues?.standard?.conference}</p>
              <p>Division - {team.leagues?.standard?.division}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home