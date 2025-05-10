import React from 'react'
import NavBar from '../Navbar/NavBar'
import './Home.css'
import data from '../../utls/nba_team_data'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia } from '@mui/material'
const Home = () => {

  return (
    <div>
      <NavBar/>
      <div>
        <h1 className='nba_title'>NBA TEAMS</h1>
        <div className = 'nba-card-container'>
          {data.map((team) => (
            <Link key = {team.id} to = {`/team/${team.id}`}state={{team: team}}>
              <Card sx ={{maxWidth: 600}} className = 'nba-card' key = {team.id}>
                <CardMedia
                  component='img'
                  image={team.logo}
                  alt='team logo'
                  ></CardMedia>
                <CardContent>
                    <h2>{team.name}</h2>
                    <p>{team.leagues?.standard?.conference} Conference</p>
                    <p>{team.leagues?.standard?.division} Division</p> 
                </CardContent>
              </Card>
              </Link>
            //   <div key = {team.id} className='nba-card'>
            //  <h4 className = 'team_name'><Link to = {`/team/${team.id}`}state={{team: team}}>{team.name} </Link></h4>
            //   <img src = {team.logo} alt = 'team logo'/>
            //   <p className = 'conference'><strong>Conference</strong> - {team.leagues?.standard?.conference}</p>
            //   <p className='division'><strong>Division</strong> - {team.leagues?.standard?.division}</p>
            // </div> 
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home