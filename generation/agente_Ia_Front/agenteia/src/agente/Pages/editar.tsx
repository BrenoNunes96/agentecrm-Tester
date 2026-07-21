
import { Footer } from "../Components/footer/footer";
import { Formulario } from "../Components/formAgente/Form";
import { Navbar } from "../Components/navbar/navbar";

export function Editar(){

   return(
    
<div className="bg-[url('./src/agente/util/universe.jpg')] bg-cover  h-screen flex-col  w-screen ">
  <Navbar/>
   <h1 className="text-blue-50 text-6xl text-shadow-2xs   hover:shadow-red-600   w-142 font-bold mt-12 ml-128 hover:text-shadow-red-700">Edite seu agente</h1>
<div className="mt-12 ml-142 "><Formulario/></div>
<Footer/>

</div>
    )

}