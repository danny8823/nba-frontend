import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams,useLocation } from 'react-router-dom'
import teams from '../../utls/team_data'
import './Team.css'
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
      


      


       
    return (
        <div>
            <div className = 'team-container'>
                <h1>{team?.name}</h1>
                <p>Total games played:{data?.games}</p>
                <p>Total assists: {data?.assists}</p>
                <p>Total blocks: {data?.blocks}</p>
            </div>
            <h1 className= 'player-title'>Players</h1>
            <div className = 'players-container'>{players.map((player) => (
                    <div key = {player.id} className = 'player-card'>
                        <p className = 'player-name'> 
                            Name: {player.firstname} {player.lastname}
                        </p>
                        <p className = 'player-height'>
                            {/* Height:{player.height.feets} FT {player.height.inches} */}
                            {player.height?.feets && player.height?.inches ? (
                                <p>Height: {player.height.feets} FT {player.height.inches} IN </p> ) : (
                                    <p>Height: stats not avaliable</p>
                            )}
                        </p>
                        {player.weight?.pounds ? (
                         <p className = 'player-weight'>
                            Weight: {player.weight.pounds} LBS
                         </p>   ):(
                            <p className = 'player-weight'>
                            Weight: stats not avaliable
                         </p>
                        )}
                        
                        {player.birth?.date && player.birth?.country ? (
                        <p className = 'player-birthday'>
                            Birth date: {player.birth.date} in {player.birth.country}
                        </p> ) : (
                        <p className='player-birthday'>
                            Birth date:  stats not avaliable
                        </p>
                            )}
                    </div>
                ))}
            </div>
        </div>
    )
}
