import NodeManager from "../../lib/node-manager"
import axios from "axios";
import Config from '../../config'
//import store from "../store"

const POST_COFFEE = "POST_COFFEE";
const GET_COFFEE = "GET_COFFEE";
const GET_DAYS = "GET_DAYS";
const CHANGE_STATUS = "CHANGE_STATUS";
const DELETE_TASK = "DELETE_TASK";

const API = Config.site.api
/////////////////ACTIONS//////////////

const addCoffee = () => ({type: POST_COFFEE});
const getCoffee = (coffee) => ({ type: GET_COFFEE, coffee });
const getDays = (days) => ({ type: GET_DAYS, days });


/////////////////REDUCER/////////////////////

let initial = {
  coffee: {}
};

const reducer = (state = initial, action) => {

  console.log(action)
  switch (action.type) {
    case GET_COFFEE:
      console.log("GET_COFFEE")
      return Object.assign({}, state, {coffee: action.coffee});
    case GET_DAYS:
      console.log("GET_DAYS")
      return Object.assign({}, state, {days: action.days});
    case POST_COFFEE:
      console.log('POST_COFFEE')
      let updatedTasks = [action.task].concat(state.tasks);
      return Object.assign({}, state, {tasks: updatedTasks});
    default:
      return state;
  }

};

export default reducer;


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

export const getCoffeeIndex = () => dispatch => {
  axios.get(`${API}/api/coffee/index`, NodeManager.getConfig())
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

export const getCoffeeYearTotal = () => dispatch => {
  axios.get(`${API}/api/coffee/year`, NodeManager.getConfig())
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

export const getLastDays = () => dispatch => {
  axios.get(`${API}/api/coffee/days`, NodeManager.getConfig())
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