"use client";

import Image from "next/image";
import s from "./index.module.scss";
import { signIn } from "next-auth/react";
import googleSvg from "../../../public/assets/auth/google.svg";
import githubSvg from "../../../public/assets/auth/github.svg";

export function AuthMethods() {
    return (
        <div className={s.authMethods}>
            <button
                onClick={() =>
                    signIn("google", {
                        callbackUrl: `${window.location.origin}`,
                    })
                }
            >
                <Image alt="googleSvg" height={30} width={30} src={googleSvg} />
            </button>
            <button
                onClick={() =>
                    signIn("github", {
                        callbackUrl: `${window.location.origin}`,
                    })
                }
            >
                <Image alt="githubSvg" height={30} width={30} src={githubSvg} />
            </button>
        </div>
    );
}
