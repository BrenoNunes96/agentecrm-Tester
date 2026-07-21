import {  GithubLogoIcon, LinkedinLogo } from "@phosphor-icons/react";
import { GithubLogo } from "@phosphor-icons/react";
import { Link } from "react-router";
export function Footer(){


    return(
  <div className=" flex justify-end h-22 mt-26 border-2 border- bg-blue-950 p-2">
       <div className="flex mr-22 ">
        <Link to='https://www.linkedin.com/in/breno-nunes-7592b0142/'>
        <LinkedinLogo size={32} color="#FFFFFF" weight="fill"  />
        
        </Link>

     <Link to={"https://github.com/BrenoNunes96"}>           <GithubLogoIcon size={32} color="#FFFFFF" weight="fill"  />  </Link>
         

                   

            </div>

      <p className="ml-250 font-bold text-white text-shadow-2xs  text-shadow-black">feito pelo Desenvolvedor Breno nunes</p>

     
        </div>
    )
}