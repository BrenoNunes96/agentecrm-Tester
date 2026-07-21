import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Login } from './agente/Pages/login'
import { ListarAgente } from './agente/Components/listarAgente/listarAgente'
  import { BrowserRouter, Route, Router, Routes, useRoutes } from 'react-router-dom'

import { Home } from './agente/Pages/home'
import { Agentes } from './agente/Pages/agentes'
import { Formulario } from './agente/Components/formAgente/Form'
import { DeletarAgente } from './agente/Components/deletarAgente/deletarAgente'
import { Registrar } from './agente/Pages/registrar'
import { Editar } from './agente/Pages/editar'
import { RegistrarUsuario } from './agente/Pages/registrarUsuario'
import { AuthProviders } from './agente/Components/contexts/authContext'
import { Execucoes } from './agente/Pages/execuções'




function App() {  

  return (
    <>
    <AuthProviders>
    <BrowserRouter>
    <Routes>
  <Route path="" element={<Login/>} />
<Route path='/home'  element={<Home/>} />
<Route path='/editar/:id' element={<Editar/>}/>
<Route path='/registrar' element={<Registrar/>}/>
<Route path='/deletar/:id' element={<DeletarAgente/>} />
<Route path='/login' element={<Login/>} />
<Route path='/registrarUsuario' element={<RegistrarUsuario/>}  />
<Route path='/registrarExecução/:id' element={<Execucoes/>} />


</Routes>
    
    </BrowserRouter>
    </AuthProviders>
    </>
  )
}

export default App
