export class Router {
  routes = {}

  add(routeName, page){
    this.routes[routeName]= page //routes precisa ser utilizado com this
  }

  route(event){
    event=event || window.event // pega-se o evento passado ou o evento que está no window
    event.preventDefault()
  
    window.history.pushState({},"", event.target.href)
    
    this.handleRoutes()
  }

  handleRoutes(){
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404] //pega o caminho da página
  
    fetch(route)
    .then(data =>data.text())// transforma data em texto
    .then (html => document.querySelector('#app').innerHTML =html)
    console.log(route)
  }
}