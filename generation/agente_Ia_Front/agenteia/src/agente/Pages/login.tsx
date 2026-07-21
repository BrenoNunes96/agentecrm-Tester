import { useContext, useEffect, useEffectEvent, useState } from "react"
import { Form, Link, useNavigate, useParams} from"react-router-dom"
import { listar, logar } from "../Service/service"
import { usuarioLogin } from "../Model/usuariologin"
import { Contact,Lock,Brain } from 'lucide-react';
import { Navbar } from "../Components/navbar/navbar";
import { Footer } from "../Components/footer/footer";
import { authContext, AuthProviders } from "../Components/contexts/authContext";

export function Login (){


    const[logins,setLogins] = useState<any>({token:""})
const[senha,setSenha]=useState<any>()
const[usuario,setUsuario]=useState<any>()
const[isloading,setIsloading]=useState<any>()
const navigation = useNavigate()

const contex = useContext(authContext)
let data = ''
let tokens:any ={}
async function buscarUsuario (e:any):Promise<usuarioLogin>{
    e.preventDefault()         // duvida sobre usestatelogin se vai att toda vez que for enviado por ser objeto

let dadosLogin = {
    usuario:usuario,
    senha:senha

}
try {
await contex.handleLogin(dadosLogin)
} catch (error) {
    
}

    console.log(dadosLogin)
    

console.log(contex.usuario)
const data = contex.usuario  // apenas o token "ecyug832bcibc309cuin3fspf0injhf2if23nh0f2"
         localStorage.setItem("token",data)  // seta o texto do token em data

         const token = localStorage.getItem('token')  
console.log(token)

 if(!token){
     alert("usuario deve estar logado!")
}else{   navigation("/home")

                }
                    console.log(tokens)
console.log(contex.usuario)
return usuario

}

return (
<div className="bg-white w-full h-full flex-col ">

    <div className="flex">

<img src="./src/agente/util/robot.png"   alt="" className="-ml-48   w-215 h-150" />
<div className="bg-[url('./src/agente/util/universe.jpg')] bg-cover w-screen h-screen rounded-t-full">

    <form className="bg-[url('./src/agente/util/universe.jpg')] bg-cover text-white border-2 mt-8   flex-nowrap w-89  flex-col h-122 ml-62 " onSubmit={buscarUsuario} action="">
    
    <div className=" mt-4 ml-12 flex-col  ">
     <Brain size={42} color="white"/>
        <p className="mt-2 text-shadow-2xs text-shadow-blue-900"> sign in! and register your agente</p>
           
</div>
<div className="flex h-15 ml-12 mt-8 hover:border-blue-700 cursor   rounded-3xl bg-black border-2 w-69 border-black ">

<Contact size={28} color="blue" className=" ml-6  mt-2 "  />
<input type="text"  className="font-bold cursor- rounded-3xl placeholder-white focus:outline-none bg-black ml-2" placeholder="Email"onChange={(x)=> setUsuario(x.target.value)} />

</div>

<div className="flex h-15 ml-12 mt-8 rounded-3xl border-2 w-69 border-black bg-black hover:border-blue-700">

<Lock size={28} color="blue" className=" ml-6 mt-2 "  />

   <input type="text" className="ml-2 placeholder-white font-bold cursor-pointer focus:outline-none"
placeholder="senha"
     onChange={(x)=> setSenha(x.target.value) } />

</div>
 
    <button className="border-2 bg-blue-600 cursor-pointer hover:shadow-blue-600 hover:border-black hover:bg-black hover:text-blue-600 shadow-2xl  border-white w-52 h-12 mt-8 ml-22 rounded-2xl" type="submit">enviar</button>
    <div className=" text-center w-22 h-8  border-2   ml-62 bg-blue-600 cursor-pointer hover:shadow-blue-600 hover:border-black hover:bg-black hover:text-blue-600 shadow-2xl  border-white mt-8">
<Link to={"/registrarUsuario"} className=" text-white  cursor-pointer border-blue-600  rounded-2xl  hover:text-blue-600 shadow-2xl hover:shadow-blue-600">registrar</Link>

    </div>

    </form>


</div>

    </div>

</div>
    
    

)



}