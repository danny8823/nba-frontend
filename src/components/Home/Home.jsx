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
                <CardContent className = 'card-content'>
                    <h2>{team.name}</h2>
                    <p>{team.leagues?.standard?.conference} Conference</p>
                    <p>{team.leagues?.standard?.division} Division</p> 
                </CardContent>
              </Card>
              </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home