import { ReactNode } from "react";

export default function Login({ children }: { children: ReactNode }) {
    return (
        <section>
            Login
            {children}
        </section>
    );
}
