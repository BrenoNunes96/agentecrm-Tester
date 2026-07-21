import { useState, useEffect } from "react";
import { atualizar, Registro, deletar, listar } from "../../Service/service";
import { useNavigate, useParams } from "react-router-dom";
import { agente } from "../../Model/agente";
import { Divide, Key, Space } from "lucide-react";
import { Navbar } from "../navbar/navbar";

export function DeletarAgente() {
  const [dados, setdados] = useState();
  // 1. Criamos um estado para controlar a visibilidade da tela
  const [visivel, setVisivel] = useState(false); 

  const [agente, setAgente] = useState<any>([]);
  const[agenteSelecionado, setAgenteselecionado]=useState<any>()

  let token: any = localStorage.getItem("token");
  const id = useParams();
  const navigate = useNavigate();

  // 2. Usamos o useEffect para mudar para "true" assim que o usuário entra na página
  useEffect(() => {
    setVisivel(true);

  }, []);




  async function deletarAgente() {
  

    try {
      await deletar(`/agente/${Number(Object.values(id))}`, setdados, {
        headers: {'Authorization': `Bearer ${token}` }
      });
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  }

  function voltar() {
    navigate('/home');
  }




useEffect(()=>{
const Buscar = async ()=>{
  console.log("ENTROU NO GET LISTAR AGENTE")
  
try {

await listar("/agente",setAgente,{
    headers:{"Authorization" : `${token}` }
})

} catch (error) {
  console.log(error)
}

}
Buscar()
},[])






  return (

    <div 
      className={`
        w-screen h-screen
         justify-items-center    bg-cover flex-col
   bg-[url('./src/agente/util/universe.jpg')] 
        transition-all duration-1000 ease-in-out
        ${visivel ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4' }
      `}
    >
      
      <div className="border-2 border-white w-150 h-128 justify-items-center  flex-col ">
        <h1 className="text-2xl text-white font-bold text-shadow-2xs text-shadow-blue-800">
          Deseja deletar realmente ?
        </h1>
        <div className="gap-4 flex">
          <button 
            className="border-2 cursor-pointer hover:rounded-3xl border-blue-700 text-shadow-2xs w-52 h-22 shadow-black font-bold text-white" 
            onClick={deletarAgente}
          >
            Deletar
          </button>
          <button 
            className="border-2 cursor-pointer hover:rounded-3xl border-blue-700 text-shadow-2x2  w-52 h-22 shadow-black font-black text-white" 
            onClick={voltar}
          >
            Voltar
          </button> 
         </div>
      <div className="mt-12 mr-2  shadow-blue-600 shadow-2x1" >
        {agente.map((x:any)=>(x.id === Number(Object.values(id))? <div key={x.id} className="hover:rounded-3xl   cursor-pointer hover:shadow-red-600  flex flex-col flex-nowrap bg-black shadow-blue-700 shadow-2xl  w-82 h-80">
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
 <p className="">{x.Status}</p></div> </div>:  console.log(x)))}
      </div>
      </div>
            </div>
  );
}