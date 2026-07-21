    import { useState } from "react"
    import { atualizar, registrar } from "../Service/service"
    import { Contact,Lock, X } from 'lucide-react';
    import { Form, Link, useNavigate, useParams} from"react-router-dom"
    import { Navbar } from "../Components/navbar/navbar";
    import { Footer } from "../Components/footer/footer";

    export function RegistrarUsuario (){
    const[user,setUser]=useState<any>({usuario:"",senha:""})
    const[dados,setDados]=useState<any>()

    function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setUser({...user, [e.target.name]: e.target.value });

    }


    const enviar = {
        usuario:user.usuario,
        senha:user.senha
    }
    console.log(enviar.usuario,enviar.senha     )

    async function  register(){
console.log("entrou no register")
        try {
            await registrar("/usuario/registrar",enviar,setDados)
            alert("registrado com sucesso!")
            console.log(user.usuario,user.senha)
        } catch (error) {
            console.log(error)
        }
    }


    return(
    <div className="bg-[url('./src/agente/util/universe.jpg')] bg-cover justify-items-center flex h-screen flex-col  w-full" >
    <Navbar/>
    <div className="mt-12 text-center ml-12 ">
    <h1 className="text-blue-50 text-6xl text-shadow-2xs   hover:shadow-red-600   w-142 font-bold mt-8 ml-95    hover:text-shadow-red-700">Registrar</h1>


        </div>


    <div className=" mt-12 justify-items-center  ">
    <form action=""className="bg-black   text-blue-700 flex flex-col flex-nowrap  shadow-black shadow-2xl  w-82 h-88" onSubmit={register}>
    <div className="flex h-15 ml-8   mt-8 hover:border-blue-700 cursor  rounded-3xl bg-black border-2 w-69   ">
    <div className="">
    <Contact size={36} color="blue" className=" ml-2 mt-2 "  />

    </div>

        <input type="text" onChange={atualizarEstado } name="usuario" className="font-bold cursor-pointer rounded-3xl  ml-2 placeholder-white  focus:outline-none bg-black" placeholder="Email"/>   


    </div>
    <div className="border-2 ml-8  flex h-15 w-69 rounded-3xl text-blue-600 font-bold cursor-pointer">
    <div>
        <Lock size={36} color="blue" className="ml-2 mt-2"  />
    </div>

    <input onChange={atualizarEstado} type="text" placeholder="senha" name="senha"   className=" cursor-pointer   placeholder-white font-bold focus:outline-none w-58 h-15   rounded-3xl    ml-2 " />

    </div>

        <div className=" text-center w-22 h-8  border-2   ml-52 bg-blue-600 cursor-pointer rounded-2xl hover:shadow-blue-600 hover:border-black hover:bg-black hover:text-blue-600 shadow-2xl  border-white mt-8">
    <button className=" text-white  cursor-pointer border-blue-600  rounded-2xl  hover:text-blue-600 shadow-2xl hover:shadow-blue-600" onSubmit={register}>registrar</button>

        </div>

    </form>

    </div>

    <Footer/>
    </div>


    )

    }