import NodeManager from "../../lib/node-manager"
import axios from "axios";

import Config from '../../config'
//import store from "../store"

const GET_USERS = "GET_USERS";

const API = Config.site.api
/////////////////ACTIONS//////////////

const getUsers = (users) => ({ type: GET_USERS, users });


/////////////////REDUCER/////////////////////

let initial = {
  users: []
};

export const reducer = (state = initial, action) => {

  console.log(action)
  switch (action.type) {
    case GET_USERS:
      return Object.assign({}, state, {users: action.users});
    default:
      return state;
  }

};


export const getUsersIndex = () => dispatch => {
  axios.get(`${API}/pub/user/index`)
    .then((response) => {
      return response.data;
    })
    .then((usersData) => {
      dispatch(getUsers(usersData))
    })
    .catch((err) => {
      console.error.bind(err);
    })
};
