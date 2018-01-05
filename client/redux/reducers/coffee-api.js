import NodeManager from "../../lib/node-manager"
import axios from "axios";
import store from "../store"

import Config from '../../config'
//import store from "../store"

const POST_COFFEE = "POST_COFFEE";
const GET_COFFEE = "GET_COFFEE";
const GET_DAYS = "GET_DAYS";
const GET_AUTH = "GET_AUTH"

const API = Config.site.api
/////////////////ACTIONS//////////////

const addCoffee = () => ({type: POST_COFFEE});
const getCoffee = (coffee) => ({ type: GET_COFFEE, coffee });
const getDays = (days) => ({ type: GET_DAYS, days });
const getAuth = (auth) => ({ type: GET_AUTH, auth });


/////////////////REDUCER/////////////////////

let initial = {
  coffee: {}
};

export const reducer = (state = initial, action) => {

  console.log(action)
  switch (action.type) {
    case GET_AUTH:
      return Object.assign({}, state, {auth: action.auth, authResponse: true});
    case GET_COFFEE:
      return Object.assign({}, state, {coffee: action.coffee});
    case GET_DAYS:
      return Object.assign({}, state, {days: action.days});
    case POST_COFFEE:
      let updatedTasks = [action.task].concat(state.tasks);
      return Object.assign({}, state, {tasks: updatedTasks});
    default:
      return state;
  }

};


export const postNewCoffeeCup = () => {
  // dispatch(addTask({title: task, metafields: [{value: false}], slug: formatSlug(task)}));
  axios.post(`${API}/api/coffee/update`, {},NodeManager.getConfig())
    .then((response) => {
      console.log(response.data)
      return response.data;
    })
    .catch((err) => {
      console.error.bind(err);
    })
};

export const authCheck = (cb) => {
  axios.get(`${API}/auth/status`, NodeManager.getConfig())
    .then((response) => {
      return response.data
    })
    .then((authData) => {
      store.dispatch(getAuth(authData))
    })
    .catch((err, another) => {
      console.error.bind(err);
    })
}
export const login = (values, successCB, failureCB) => {
  // dispatch(addTask({title: task, metafields: [{value: false}], slug: formatSlug(task)}));
  console.log("Attempt Techdrone Login")
  axios.post(`${API}/auth/login`, values)
    .then((response) => {
      if(response.data.session){
        localStorage.setItem("session", response.data.session)
        return successCB()
      } 
      return failureCB()
    })
    .catch((err, another) => {
      console.error.bind(err);
    })
};

export const register = (values, successCB, failureCB) => {
  // dispatch(addTask({title: task, metafields: [{value: false}], slug: formatSlug(task)}));
  axios.post(`${API}/auth/register`, values)
    .then((response) => {
      if(response.data.session){
        localStorage.setItem("session", response.data.session)
        return successCB()
      } 
      return failureCB()
    })
    .catch((err) => {
      console.error.bind(err);
    })
};

export const getCoffeeIndex = (user_id) => dispatch => {
  axios.get(`${API}/pub/${user_id}/index`, NodeManager.getConfig())
    .then((response) => {
      return response.data;
    })
    .then((coffeeData) => {
      dispatch(getCoffee(coffeeData))
    })
    .catch((err) => {
      console.error.bind(err);
    })
};

export const getCoffeeYearTotal = (user_id) => dispatch => {
  axios.get(`${API}/pub/${user_id}/year`, NodeManager.getConfig())
    .then((response) => {
      return response.data;
    })
    .then((coffeeData) => {
      dispatch(getCoffee(coffeeData))
    })
    .catch((err) => {
      console.error.bind(err);
    })
};

export const getLastDays = (user_id) => dispatch => {
  axios.get(`${API}/pub/${user_id}/days`, NodeManager.getConfig())
    .then((response) => {
      return response.data;
    })
    .then((coffeeData) => {
      console.log('Response Data')
      return dispatch(getDays(coffeeData))
      var evt = document.createEvent('CustomEvent')
      evt.initCustomEvent('graphReady', true, false)
      var root = document.findElementById('root')
      root.dispatchEvent(evt)
    })
    .catch((err) => {
      console.error.bind(err);
    })
};