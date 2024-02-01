import { LogoutButton } from "../LogoutButton.tsx";
import s from "./index.module.scss";
import UserInfo from "../UserInfo";

export function NavUser() {
    return (
        <div className={s.navUser}>
            <UserInfo />
            <LogoutButton />
        </div>
    );
}
