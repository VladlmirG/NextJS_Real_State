import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';



export const fetchApi = async (url) =>{
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '881b8822abmsh62d47a7fb43167fp13aa72jsn5e7eb459927b'
          }
    });

    return data;
}