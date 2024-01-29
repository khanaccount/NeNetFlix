import Link from "next/link";

import s from "../index.module.scss";
import { AuthMethods } from "@/components/AuthMethods";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login",
    description: "Generated by some guy from internet",
};

export default function Login() {
    return (
        <section className={s.auth}>
            <div className={s.authForm}>
                <h1 className={s.signIn}>Войти</h1>

                <form className={s.inputContainer}>
                    <input
                        type="text"
                        name="email"
                        placeholder="Ваш Email"
                        className={s.input}
                        maxLength={255}
                        required
                    />

                    <button className={s.submitBtn} type="submit">
                        Войти
                    </button>
                </form>

                <div className={s.checkbox}>
                    <input type="checkbox" id="rememberMe" />
                    <label htmlFor="rememberMe">Запомнить меня</label>
                </div>
                <p className={s.signUpText}>
                    Новичок на NeNetflix?{" "}
                    <Link href="/sign-up">Зарегестрироваться</Link>
                </p>
                <AuthMethods />
            </div>
        </section>
    );
}
