import axios from "axios";
import store from "../store"

import Config from '../../config'

export const submitForm = (values, successCB, failureCB) => {
  // dispatch(addTask({title: task, metafields: [{value: false}], slug: formatSlug(task)}));
  axios.post(`${API}/pub/quote/create`, values)
    .then((response) => {
      if(response.data){
        return successCB()
      } 
      return failureCB()
    })
    .catch((err, another) => {
      console.error.bind(err);
    })
};