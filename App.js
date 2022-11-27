import React from 'react'
import Dados from './componentes/Dados'
import Header from './componentes/Header'


export default function App(){
  return(
    <>
      <Header
      empresa = "EMPRESA SOFTEX"/>
      <Dados 
      aluna = 'Débora Soares'
      curso= 'Desenvolvedor FrontEnd'/>
    </>
  )
}



