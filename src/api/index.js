import * as axios from 'axios'

const instance = axios.create({
  baseURL: './',  
})

const API = {  
  getItems() {
    return instance.get(`transactions.json`)
  },
}

export default API
