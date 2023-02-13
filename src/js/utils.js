// import {bgHome, bgUniverse, bgExploration}from './getElements'
export function Backgrounds({ bgHome, bgUniverse, bgExploration }){

  function homeBg(){
    document.body.classList.remove("universe")
    document.body.classList.remove("exploration")
    document.body.classList.add("home")

    bgHome.classList.add('active')
    bgUniverse.classList.remove('active')
    bgExploration.classList.remove('active')
  }

  function universeBg(){
    document.body.classList.add("universe")
    document.body.classList.remove("exploration")
    document.body.classList.remove("home")

    bgHome.classList.remove('active')
    bgUniverse.classList.add('active')
    bgExploration.classList.remove('active')
  }

  function explorationBg(){
    document.body.classList.remove("universe")
    document.body.classList.add("exploration")
    document.body.classList.remove("home")

    bgHome.classList.remove('active')
    bgUniverse.classList.remove('active')
    bgExploration.classList.add('active')
  }

  return{
    homeBg,
    universeBg,
    explorationBg,
  }
}