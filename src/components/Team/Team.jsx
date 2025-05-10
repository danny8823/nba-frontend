import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams,useLocation, Link } from 'react-router-dom'
import teams from '../../utls/team_data'
import './Team.css'
import NavBar from '../Navbar/NavBar'
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material'

export const Team = () => {
    const [players, setPlayers] = useState([])

    const {id} = useParams()
    const location = useLocation()
    const {team} = location.state || {}
    const data = teams.flat().find(team=>team.id === Number(id))
      
    useEffect(() => {
    const get_players = async () => {
        const options = {
            method: 'GET',
            url: 'https://api-nba-v1.p.rapidapi.com/players',
            params: {
                team: id,
                season: '2024'
            },
            headers: {
                'x-rapidapi-key': '56b19805acmsh0e837faf42ee38ap1de4abjsnc6e3111f9c12',
                'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
            }
            };

        try {
            const response = await axios.request(options);
            console.log(response.data.response)
            setPlayers(response.data.response)
        } catch (error) {
            console.error(error);
        }
    }

    get_players()

    }, [id])
       console.log(team)
    return (
        <div>
            <NavBar/>
            <div className = 'team-info-container'>
                <h1 className = 'team-name'>{team?.name}</h1>
                <img className = 'team-logo' src = {team?.logo} alt = 'team logo'/>    
            </div>
            
            <table className = 'team-container'>
                <tr className = 'row-headers'>
                    <td>Total games played</td>
                    <td>Total assists</td>
                    <td>Total blocks</td>
                    <td>Total points</td>
                </tr>
                <tr>
                    <td>{data?.games}</td>
                    <td>{data?.assists}</td>
                    <td>{data?.blocks}</td>
                    <td>{data?.points}</td>
                </tr>
            </table>
            <h1 className= 'player-title'>Players</h1>
            <div className = 'players-container'>{players.map((player) => (
                    <div key = {player.id} className = 'player-card'>
                        <p className = 'player-name'> 
                            <Link to = {`/player/${player.id}`}>{player.firstname} {player.lastname}</Link>
                        </p>
                        <p className = 'player-height'>
                            {/* Height:{player.height.feets} FT {player.height.inches} */}
                            {player.height?.feets && player.height?.inches ? (
                                <p><strong>Height:</strong>  {player.height.feets} FT {player.height.inches} IN </p> ) : (
                                    <p><strong>Height:</strong> stats not avaliable</p>
                            )}
                        </p>
                        {player.weight?.pounds ? (
                         <p className = 'player-weight'>
                            <strong>Weight:</strong> {player.weight.pounds} LBS
                         </p>   ):(
                            <p className = 'player-weight'>
                            <strong>Weight:</strong> stats not avaliable
                         </p>
                        )}
                        
                        {player.birth?.date && player.birth?.country ? (
                        <p className = 'player-birthday'>
                            <strong>Birth date:</strong> {player.birth.date} in {player.birth.country}
                        </p> ) : (
                        <p className='player-birthday'>
                            <strong>Birth date:</strong>  stats not avaliable
                        </p>
                            )}
                    </div>
                ))}
            </div>
        </div>
    )
}
