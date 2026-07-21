import * as axios from 'axios'




const api = axios.create({baseURL:'https://agentecrm-tester-1.onrender.com'})

export const  registrar = async (url:string,dados:object,setdados:Function) => {    
const resposta = await api.post(url,dados)
setdados(resposta.data)

}
export const logar = async(url:string,dados:Object,setdados:Function)=>{
const resposta = await api.post(url,dados)
console.log(resposta.data)
setdados(resposta.data['token'])//envia token para stdados que é função

}

export const listar = async (url:string,setdados:Function,headers:object)=>{
const resposta = await api.get(url,headers)

setdados(resposta.data)



}

export const atualizar = async(url:string,dados:object,setdados:Function,headers:object)=>{
    const resposta = await api.put(url,dados,headers)
  
    setdados(resposta.data)

}
export const deletar = async(url:string,setdados:Function,headers:object)=>{
const  resposta = await api.delete(url,headers)
setdados(resposta.data)
}

export const Registro = async(url:string,dados:object,setDados:Function,headers:object)=>{
const resposta = await api.post(url,dados,headers)
setDados(resposta.data)


}


export const media = async(url:string,setDados:Function,headers:object) =>{
const resposta = await api.get(url,headers)
console.log(resposta.data)
setDados(resposta.data)
}

