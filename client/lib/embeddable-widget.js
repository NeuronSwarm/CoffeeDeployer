
export default class EmbeddableWidget {
  constructor(config){
    this.config = config;
  }

  getCode(){
    var co =  '<div id="coffeeLover"></div>\n'
        co+=  `<script src="https://techdrone.us/${this.getSessionPrefix()}"></script>`
        co+=  '<script>'
        co+=  `var config = { position: '${this.config.alignment}',`
        co+=  `background: '${this.config.color}' }`
        co+=  `createCoffeeWidget(config);`
        co+=  '</script>'
    return co
  }
  getSessionPrefix(){
    var sesh = localStorage.getItem("session")
    return sesh.substring(0,5)
  }

  getUser(){
    return this.user;
  }

}