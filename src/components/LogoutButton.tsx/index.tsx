"use client";

import { signOut } from "next-auth/react";
import s from "./index.module.scss";

export function LogoutButton() {
    return (
        <button
            onClick={() =>
                signOut({ callbackUrl: `${window.location.origin}/` })
            }
            className={s.signOut}
        >
            Выйти
        </button>
    );
}
