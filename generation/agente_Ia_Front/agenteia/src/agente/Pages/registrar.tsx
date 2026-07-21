
import { Footer } from "../Components/footer/footer";
import { Formulario } from "../Components/formAgente/Form";
import { ListarAgente } from "../Components/listarAgente/listarAgente";
import { Navbar } from "../Components/navbar/navbar";

export function Registrar (){
    return(
<div className="bg-[url('./src/agente/util/universe.jpg')] bg-cover  h-screen flex-col  w-full">
  <Navbar/>
  <h1 className="text-blue-50 text-6xl text-shadow-2xs   hover:shadow-red-600   w-142 font-bold mt-12 ml-112 hover:text-shadow-red-700">Registre seu agente</h1>
<div className="mt-12 ml-142 "><Formulario/></div>
<Footer/>
</div>
    )

}