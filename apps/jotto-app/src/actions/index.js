import axios from 'axios'


export const getSecretWord = () => {
  // TODO: write actual action in Redux / Context
    return axios.get('http://localhost:3030')
    .then(response => response.data)
}