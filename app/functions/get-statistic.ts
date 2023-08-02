import axios from "axios"

export const getStatistic = async (id: string) => {

  return axios.get(`https://64a142c10079ce56e2daea83.mockapi.io/teams/${id}`).then(res => res.data)
    .catch(err => err)

}