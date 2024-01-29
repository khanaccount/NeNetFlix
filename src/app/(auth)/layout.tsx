import Link from "next/link";
import { ReactNode } from "react";
import s from "./index.module.scss";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className={s.layoutBg}>
            <div className="container">
                <Link href="/" className={s.logoName}>
                    NeNetFlix
                </Link>
                {children}
            </div>
        </div>
    );
}
