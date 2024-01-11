import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

export default function Horizontal(){
    return (
        <>
          <HeaderComponent>
           
           </HeaderComponent>
   
           <div>
                <Outlet></Outlet>
           </div>

           <FooterComponent></FooterComponent>
        </>

    )
}
