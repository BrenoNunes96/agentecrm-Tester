import { useContext, useState } from "react"
import { Registro } from "../Service/service"
import { authContext } from "../Components/contexts/authContext"
import { Footer } from "../Components/footer/footer"
import { Navbar } from "../Components/navbar/navbar"
import { Contact,Lock } from "lucide-react"
import { useParams } from "react-router-dom"

export function Execucoes(){
    const[resposta,setReposta]=useState<any>()
const[reponse,setReponse] = useState<any>({mensagemDeEntrada:""})
const atualizarEstado = (e:any)=>{

    setReponse({...reponse,[e.target.name]:e.target.value})

}
const id = useParams()
const enviar = {
    mensagemDeEntrada:`Responda no tamanho em ate 700 caracteres , seja um doutor medico e responda a pergunta do paciente que é : ${reponse.mensagemDeEntrada}`,
    agente:{"id":Number(Object.values(id) ) } 
}
const context = useContext(authContext)
const token = context.usuario
console.log(enviar)
async function register (e:any){ 
  e.preventDefault()  
  try {
      console.log("ENTROU NO EXECUÇÕES")

        await Registro("/registroExecucao/registrar",enviar,setReposta,{
            headers:{
                "Authorization":`${token}`
            }
        })
console.log(resposta)
    } catch (error) {
console.log(error)
    }}

  
   return (
  <div className="bg-[url('./src/agente/util/universe.jpg')] bg-cover justify-items-center flex h-screen flex-col w-full">
    <Navbar />

    <div className="mt-12 text-center ml-12">
      <h1 className="text-blue-50 text-6xl text-shadow-2xs hover:shadow-red-600 w-142 font-bold mt-8 ml-95 hover:text-shadow-red-700">
        Registrar
      </h1>
    </div>

    <div className="mt-12 justify-items-center">
      <form
        action=""
        className="bg-black text-blue-700 flex flex-col flex-nowrap shadow-black shadow-2xl w-82 h-88"
        onSubmit={register}
      >
        <div className="flex h-15 ml-8 mt-8 hover:border-blue-700 cursor rounded-3xl bg-black border-2 w-69">
          <Contact size={36} color="blue" className="ml-2 mt-2" />

          <input
            type="text"
            onChange={atualizarEstado}
            name="mensagemDeEntrada"
        
            className="font-bold cursor-pointer rounded-3xl ml-2 placeholder-white focus:outline-none bg-black"
            placeholder="mensagem de entrada" 
          />
        </div>

        <div className="text-center w-22 h-8 border-2 ml-52 bg-blue-600 cursor-pointer rounded-2xl hover:shadow-blue-600 hover:border-black hover:bg-black hover:text-blue-600 shadow-2xl border-white mt-8">
          <button
            type="submit"
            onSubmit={register}
            className="text-white cursor-pointer border-blue-600 rounded-2xl hover:text-blue-600 shadow-2xl hover:shadow-blue-600"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>

    <Footer />
  </div>
);

}