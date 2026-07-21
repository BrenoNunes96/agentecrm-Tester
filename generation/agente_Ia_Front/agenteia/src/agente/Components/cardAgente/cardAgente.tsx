import { Link } from "react-router-dom"
import { agente } from "../../Model/agente"
import { DeletarAgente } from "../deletarAgente/deletarAgente"
import { useState } from "react"



export function CardAgente(x:agente){

const[istrue,setIstrue] = useState(Boolean)
function deletar(){
  
  setIstrue(true)




}

    return(
        <div >
        
<div className="flex flex-col flex-nowrap bg-black shadow-blue-600 hover:shadow-red-600 hover:cursor-pointer hover:rounded-3xl  shadow-2xl  w-82 h-80">
 <div className="ml-8 mt-5">
  <div className="flex gap-2  text-blue-700 ">
      <h1 className=" text-white font-bold">nome</h1>
    <p className="wrap-anywhere  ">{x.NomeAgente}</p>
  </div>
  <div className=" flex gap-2  text-blue-700 ">
     <h1 className=" font-bold text-white">descrição</h1>
 <p className="wrap-anywhere">{x.Descricao}</p>
  </div>
  
<div className="flex gap-2  text-blue-700 "> 
  <h1 className=" text-white  text-blue-800-500 font-bold">Tokens mensais</h1>
 <p>{x.LimiteMaxMensal}</p></div>
<div className="flex gap-2  text-blue-700 "> 
  <h1 className="text-white font-bold">Token max dia</h1>
 <p>{x.LimiteMaxToken}</p></div>

<div className="flex gap-2 text-blue-700 font-bold" > <h1 className="text-white">status</h1>
 <p className="">{x.Status}</p></div>
<div className="flex gap-2 mt-8">
  <Link  className="flex gap-2 border-2 border-blue-700 text-blue-700 font-bold" to={`/editar/${x.id}`}> editar
</Link>
<Link  onClick={deletar} className="flex border-2 border-blue-700 gap-2 text-blue-700 font-bold" to={`/deletar/${x.id}`}> deletar </Link>
 <Link to={`/registrarExecução/${x.id}`} className="flex border-2 border-blue-700 gap-2 text-blue-700 font-bold">registrar Execução </Link>
</div>

</div>
  
    </div>
    </div>
    )
  }