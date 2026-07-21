import { Link } from "react-router-dom";
import { ListarAgente } from "../Components/listarAgente/listarAgente";
import { Navbar } from "../Components/navbar/navbar";
import { useContext, useState } from "react";
import { Footer } from "../Components/footer/footer";
import { media } from "../Service/service";
import { authContext } from "../Components/contexts/authContext";
import { Target } from "lucide-react";

export function Home(){
const[Listagem,setListagem]=useState<any>(<ListarAgente/>)
const[isloading,setIsloading]=useState<any>(false)
const[iasmedias,setIasmedias] = useState<any>([])
const context = useContext(authContext)
const modeloseMedias = []
const[valoruser,setValoruser]=useState<any>([])
let valor:any = '1'

async function mediaTOkens (){
console.log(context.usuario)
if(valor === '2'){
    setIsloading(true)

   try {
   await media("/agente/media",setIasmedias,{
    headers:{
        "Authorization":`Bearer ${context.usuario}`
    }
   })
   } catch (error) {
    console.log(error)
   } 
}if(valor === '1'){
    setIsloading(false)

}

}
for(let x of valoruser){
valor = x

}
for(let x of iasmedias){
    modeloseMedias.push(x)

}

console.log(modeloseMedias)
console.log(typeof(valor))
    return(
<div className=" bg-[url('./src/agente/util/universe.jpg')] bg-cover flex-col w-screen h-full">
<Navbar/>
<div className="bg-white w-48   ml-268">
<div className=" border-2  mt-2">
<select onChange={(x:any)=> setValoruser(x.target.value)} className="border-2 bg-black text-blue-600 font-bold" onClick={mediaTOkens} name="" id="">

<option  value={1}>
Modelos
</option>
<option value={2}>Menor média de tokens
</option>

</select>

</div>


    </div>

<div className="flex mt-12 ">

{isloading ? <div className=" h-full gap-28 flex  ">    <div className=""> <div className="h-52  ml-80 "><h1 className="text-white text-4xl  text-center font-bold -mt-2">Media de tokens por execução das ias </h1></div>
 <div className="flex gap-22 ">
    {modeloseMedias.map((x)=> ( <div className="flex-col border-2 bg-black bg-cover border-amber-300 h-22 w-82 gap-2 " >  <div className="flex gap-2"><span className="  text-white font-bold "> Modelo </span> <span className="text-blue-600"> {x.nome}</span> </div> 
    <div className="flex gap-6 font-bold"><span className="text-white">Media</span> <span className="text-blue-600">{x.media }</span> </div>
    
    </div>))}
    
    </div></div>
</div> : <div className=""> <ListarAgente/> </div>

}   
</div>
<div className="mt-112 flex  "><Footer/>
</div>

</div>
)



}