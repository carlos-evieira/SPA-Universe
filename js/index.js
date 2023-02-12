import { Router } from './router.js'

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universo", "/pages/universo.html")
router.add("/exploracao", "/pages/exploracao.html")
router.add(404, "/pages/404.html")


// const routes = {
//   "/": "/pages/Home.html",
//   "/universo": "/pages/universo.html",
//   "/exploracao": "/pages/exploracao.html",
//   404: "/pages/404.html",

// }



router.handleRoutes()

window.onpopstate =() => router.handleRoutes() //pega quando o usuário clicar na seta de voltar do navegador
window.route = () => router.route()