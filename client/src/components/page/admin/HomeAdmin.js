import NavbarLogin from "../../layouts/NavbarLogin";
import MenubarAdmin from "../../layouts/MenubarAdmin"; 

export default function HomeAdmin(){
    return(
        <div>
            <NavbarLogin/>
            <h1>HomeAdmin</h1>
            <MenubarAdmin/>
        </div>
    )
}