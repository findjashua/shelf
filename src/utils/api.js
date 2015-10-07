import * as _ from 'lodash'
import * as axios from 'axios'

const baseUrl = 'https://shelf.cloudant.com'

export const api = {
  create: (entity, data) => {
    const url = [baseUrl, entity].join('/')
    return axios.post(url, data)
  }
}
