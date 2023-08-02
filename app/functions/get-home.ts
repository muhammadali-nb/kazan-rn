import axios from "axios"

export const getHome = () => {

  return axios.get('https://64a142c10079ce56e2daea83.mockapi.io/teams')
    .then(res => res.data)
    .catch(err => err)
}