import MenubarMember from "../../layouts/MenubarMember";
import NavbarLogin from "../../layouts/NavbarLogin";
import Shop from "../../page/member/Shop";

export default function HomeMember() {
    return (
        <div >
            <NavbarLogin />
            <MenubarMember />

            <Shop />

        </div>
    )
}