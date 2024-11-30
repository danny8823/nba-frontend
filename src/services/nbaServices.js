import axios from 'axios'
const api_url = 'https://api-nba-v1.p.rapidapi.com/teams'

export const getNBA_DATA = async(req,res) => {
    try {
        const response = await axios.get(api_url, {
            headers: {
                'x-rapidapi-key': '56b19805acmsh0e837faf42ee38ap1de4abjsnc6e3111f9c12',
                'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
            }
        })
        return response.data.response
    } catch (error) {
        throw new Error(error.message)
    }
}

export const get_team_data = async(id) => {
    const options = {
        method : 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/teams/statistics',
        params: {
            id: id,
            season: 2024
        },
        headers: {
            'x-rapidapi-key': '56b19805acmsh0e837faf42ee38ap1de4abjsnc6e3111f9c12',
            'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
        }
    }

    try {
        const response = await axios.request(options)
        return response.data.response
    } catch (error) {
        throw new Error(error.message)
    }
}
