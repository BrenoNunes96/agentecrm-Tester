import { createContext, ReactNode, useContext, useState } from 'react';
import { usuarioLogin } from '../../Model/usuariologin';
import { logar } from '../../Service/service';
interface authContextProps{           //interface formato para o que estara dentro de authcontext
usuario:any
handleLogin(usuario:usuarioLogin):Promise<void>
handleLogout():void
}

interface authProvidersProps{  // diz que td pode ser renderizado que for tipado com authProvidersProps
    children:ReactNode
}



export const authContext = createContext({} as authContextProps) // cria o context

export function AuthProviders({children}:authProvidersProps ){      // cria função que vai englobar td que esta dentro de authcontext

const[usuario,setUsuario] = useState<any>()


const handleLogin = async (usuario:usuarioLogin)=>{ //função para chamar api de login
try {
    console.log(usuario)
  await logar("/usuario/logar",usuario,setUsuario)  
} catch (error) {
    console.log(error)
}

}
console.log(usuario)
function handleLogout(){       // retira token e usuario
 setUsuario({
    token:"",
    usuario:""

 })


}
return(
<div>
<authContext.Provider value={{usuario,handleLogin,handleLogout}}> 
    {children}
</authContext.Provider>

</div>
)


}

