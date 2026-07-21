import { useContext, useState } from "react"
import { atualizar, Registro } from "../../Service/service"
import { agente } from "../../Model/agente"
import { useNavigate, useParams } from "react-router-dom"
import { Contact } from 'lucide-react';
import { authContext, AuthProviders } from "../contexts/authContext";
export function Formulario(){

const[atualizacao,setAtualizacao] = useState<any>()
const[registrar,setRegistrar] = useState<any>({PromptPrincipal:"",NomeAgente:"",  Descricao:"", LimiteMaxMensal:0, LimiteMaxToken:0, Status:'1'})
const id:any = useParams()
const context = useContext(authContext)

       const token:string = context.usuario

if(registrar.Status === '1'){
registrar.Status = true
}
if(registrar.Status ==='2'){       
       registrar.Status = false
}


const navigate = useNavigate()
const Form = async (e:any):Promise<any> => {
       e.preventDefault()

console.log(id)

console.log("entrou no no form")

let tamanhoNome = registrar.NomeAgente.split("")
let tamanhoDescrição =registrar.Descricao
let tamanhoPrompt =registrar.PromptPrincipal
if(tamanhoNome.length > 40 || tamanhoDescrição > 40 || tamanhoPrompt > 40){
return alert("deve ter menos de 40 caracteres")
}

const enviar:object = {
       id:Number(Object.values(id)),     
     NomeAgente:registrar.NomeAgente,
     Descricao:registrar.Descricao,
     LimiteMaxMensal:registrar.LimiteMaxMensal,
     LimiteMaxToken:registrar.LimiteMaxToken,
     PromptPrincipal:registrar.PromptPrincipal,
     Status:registrar.Status
}


console.log(enviar)

if(Number(Object.values(id)) > 0){ // caso tenha id vai chamar atualizar
console.log("entrou no id")
try{
console.log(token)

await atualizar("/agente/atualizar",enviar,setAtualizacao,{
       headers:{"Authorization" :` ${token}` }
       
})
navigate('/home')
}catch(error){
console.log(error)
}

}else{ 
    console.log("entrou registrar")
    try {
    await Registro("/agente/registrar",enviar,setRegistrar,{
    headers:{"Authorization" : `${token}` }
    })
    navigate('/home')
    } catch (error) {
        console.log(error)
    }
            console.log("registrou")

}
}

return(
    <div >
        <form onSubmit={Form}>

<div className="bg-black  text-blue-700 flex flex-col flex-nowrap  shadow-black shadow-2xl  w-82 h-88">
  <div className="flex">
       <Contact className="w-22 h-22"/>
        <input className=" w-82 h-12 mt-6 placeholder:font-extralight placeholder-blue-700 ml-10" type="text" placeholder="Modelo"  onChange={(e)=> setRegistrar({...registrar, NomeAgente:e.target.value}) }    />
        </div>

<div className="flex gap-2">


        <input className="  w-82 h-12 justify-end ml-2 placeholder-blue-700 font-extralight" type="text" placeholder="Descrição"  onChange={(e)=> setRegistrar({...registrar,Descricao:e.target.value}) }/>

</div>

<div className="flex gap-2">

        <input className=" w-82 h-12 font-extralight ml-2 placeholder-blue-700" type="text" placeholder="Instrução"  onChange={(e)=> setRegistrar({...registrar,PromptPrincipal:e.target.value}) } />
</div>


<div className="flex gap-2">
   
        <input className="placeholder-blue-700  w-82 h-12 font-extralight ml-2" type="number" placeholder="limite mensal de token"  onChange={(e)=> setRegistrar({...registrar, LimiteMaxMensal:e.target.value}) }   />
</div>
 
<div className="flex gap-2">
 
        <input className="font-extralight  w-82 h-12 placeholder-blue-700 ml-2" type="number" placeholder="limite maximo de token por ação"  onChange={(e)=> setRegistrar({...registrar,LimiteMaxToken:e.target.value}) } />
</div>
 
     <div className="flex gap-2 ">

      <select className="text-blue-700 w-82 h-6 bg-black" id="status ml-2" onChange={(e)=> setRegistrar({...registrar,Status:e.target.value}) }>
 <option  className="text-blue-700">status</option>
 <option className="font-bold" value={1}>true</option>
  <option className="font-bold" value={2}>false</option>

      </select>
      </div>   
      
        <button className="bg-blue-700 cursor-pointer text-white font-bold  text-shadow-2xs text-shadow-slate-950">enviar</button>
</div>
 

        </form>
       
    </div>
)



}