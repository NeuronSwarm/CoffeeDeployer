
export default class EmbeddableWidget {
  constructor(config){
    this.config = config;
  }

  getCode(){
    var co =  '<div id="coffeeLover"></div> '
        co+=  `<script src="https://techdrone.us/${this.getSessionPrefix()}"></script> `
        co+=  '<script> '
        co+=  `var config = { position: '${this.config.alignment}', `
        co+=  `background: '${this.config.color}', `
        co+=  `type: '${this.config.type}'}; `
        co+=  `createCoffeeWidget(config); `
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