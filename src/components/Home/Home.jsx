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
        <h1 className='nba_title'>NBA TEAMS</h1>
        <div className = 'nba-card-container'>
          {data.map((team) => (
            <div key = {team.id} className='nba-card'>
            <h4 className = 'team_name'><Link to = {`/team/${team.id}`}state={{team: team}}>{team.name} </Link></h4>
              <img src = {team.logo} alt = 'team logo'/>
              <p className = 'conference'><strong>Conference</strong> - {team.leagues?.standard?.conference}</p>
              <p className='division'><strong>Division</strong> - {team.leagues?.standard?.division}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home