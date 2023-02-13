import { Router } from './router.js'
import {bgHome, bgUniverse, bgExploration} from './getElements.js'
import {Backgrounds} from './utils.js'


const backgrounds = Backgrounds({ bgHome, bgUniverse, bgExploration })

bgHome.addEventListener("click", ()=> backgrounds.homeBg())
bgUniverse.addEventListener("click", ()=> backgrounds.universeBg())
bgExploration.addEventListener("click", ()=> backgrounds.explorationBg())

const router = new Router()
router.add("/", "/src/pages/home.html")
router.add("/universo", "/src/pages/universo.html")
router.add("/exploracao", "/src/pages/exploracao.html")
router.add(404, "/src/pages/404.html")

router.handleRoutes()

window.onpopstate =() => router.handleRoutes() //pega quando o usuário clicar na seta de voltar do navegador
window.route = () => router.route()