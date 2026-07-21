import { Link, useNavigate } from "react-router-dom"

export function Navbar(){
 const navigate = useNavigate()
const navegar = () =>{
navigate("/home")

}
return(
<div className=" flex justify-end  bg-blue-950 p-2">
    <img onClick={navegar} src='/./src/agente/util/ff.png' alt="" className="w-12 bg-transparent cursor-pointer  mr-248  "/>
    <div className="text-lg    w-89 flex gap-4" >
        <Link className="font-bold text-white text-shadow-2xs     " to={'/home'}> Home  </Link>
<Link className="font-bold text-white  text-shadow-2xs text-shadow-black " to={'/registrar'}>Registrar Agente </Link>
<Link  className="font-bold  text-white     text-shadow-2xs text-shadow-black" to={"/login"}> sair</Link>
    </div>




</div>
)

}