var url = (process.env.NODE_ENV == 'production') ?
  'https://techdrone.us' : 'http://localhost:3000'

var api = (process.env.NODE_ENV == 'production') ?
  'https://techdrone.us' : 'http://localhost:8080'

export default {
  site: { url, api }
}