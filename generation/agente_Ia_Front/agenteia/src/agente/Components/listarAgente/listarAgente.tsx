import { listar } from "../../Service/service";
import { CardAgente } from "../cardAgente/cardAgente";
import { Login } from "../../Pages/login";
import { useContext, useEffect, useState } from "react";
import { agente } from "../../Model/agente";
import { Triangle } from 'react-loader-spinner'
import { Footer } from "../footer/footer";
import { authContext } from "../contexts/authContext";
export function ListarAgente (){
const[agente,setAgentes]= useState<agente[]>([])
const[isloading,setIsloading]=useState(false)
const context = useContext(authContext)
useEffect(()=>{
console.log("enviou requisição")
const buscarUsuario = async ()=>{ 
try{
    
    let token:any = localStorage.getItem("token") 
    let usuarioToken = context.usuario

await listar("/agente", setAgentes, {
          headers: { "Authorization": `${usuarioToken}` }
        
        });
setIsloading(true)
}catch(error){
return console.log(error)
}

}

 buscarUsuario()

},[])

    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">  


{isloading === true ? agente?.map((x)=>( <div key={x.id}><CardAgente id={x.id}  NomeAgente={x.NomeAgente} Descricao={x.Descricao} LimiteMaxToken={x.LimiteMaxToken}  LimiteMaxMensal={x.LimiteMaxMensal}Status={x.Status} /> </div>))
:
<div className= "justify-items-center mr-2 w-screen h-screen"><Triangle
visible={true}
height="500"
width="500"
color="white"
ariaLabel="triangle-loading"
wrapperStyle={{}}
wrapperClass=""
/></div>

}



                                        
                                    </div>
                           
                          
                                    
     </>
    )

    
}