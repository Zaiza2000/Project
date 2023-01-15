import NavbarLogin from "../../layouts/NavbarLogin";
import MenubarAdmin from "../../layouts/MenubarAdmin"; 
import AdminProductCard from "../../card/AdminProductCard";

export default function HomeAdmin(){
    return(
        <div>
            <NavbarLogin/>
            <h1>HomeAdmin</h1>
            <MenubarAdmin/>
            <AdminProductCard/>
        </div>
        
    )
}