import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Players.css'

const Player = () => {
    const [stats, setStats] = useState()
    const {playerId} = useParams()

    useEffect(() => {
        const get_stats = async() => {
            const options = {
                method: 'GET',
                url: 'https://api-nba-v1.p.rapidapi.com/players/statistics',
                params: {
                  id: playerId,
                  season: '2024'
                },
                headers: {
                  'x-rapidapi-key': '56b19805acmsh0e837faf42ee38ap1de4abjsnc6e3111f9c12',
                  'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
                }
              };
              
              try {
                  const response = await axios.request(options);
                  console.log(response.data.response);
                  const len = response.data.response.length
                  setStats(response.data.response[len-1])
              } catch (error) {
                  console.error(error);
              }
        }

        get_stats()
    },[playerId])


  return (
    <div>
        <table className = 'cell-blocks'> 
            <p>Last Game Stats</p>
            <tr>
                <td>Player</td>
                <td>Minutes played</td>
                <td>Fouls</td>
                <td>Points</td>
                <td>Assists</td>
                <td>Steals</td>
                <td>Turnovers</td>
                <td>Blocks</td>
                <td>Total rebound</td>
            </tr>
            <tr>
                <td>{stats?.player?.firstname} {stats?.player?.lastname}</td>
                <td>{stats?.min}</td>
                <td>{stats?.pFouls}</td>
                <td>{stats?.points}</td>
                <td>{stats?.assists}</td>
                <td>{stats?.steals}</td>
                <td>{stats?.turnovers}</td>
                <td>{stats?.totReb}</td>
            </tr>
        </table>
    </div>
  )
}

export default Player