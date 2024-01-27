"use client";

import { Formik, Field, ErrorMessage, Form, validateYupSchema } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import s from "./index.module.scss";

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Неверный формат электронной почты"),
});

export function Header() {
    const handleSubmit = (values: any, { setSubmitting }: any) => {
        if (!values.email) {
            alert("Введите Email");
        } else {
            alert(`${values.email} ваш запрос успешно отправлен`);
        }
        setSubmitting(false);
    };

    return (
        <header className={s.header}>
            <div className="container">
                <nav className={s.nav}>
                    <h1 className={s.logoText}>NeNetFlix</h1>

                    <ul className={s.menuList}>
                        <li>О нас</li>
                        <li>Афиша</li>
                        <li>Где нас найти?</li>
                    </ul>

                    <div className={s.signIn}>
                        <button>
                            Войти
                            <Image
                                src={"img/header/signIn.svg"}
                                alt="signInImg"
                                width={25}
                                height={25}
                            />
                        </button>
                    </div>
                </nav>
                <div className={s.content}>
                    <h1>
                        Неограниченное количество фильмов, телешоу и многого
                        другого.
                    </h1>
                    <h5>Смотрите где угодно. Отмените в любое время.</h5>
                    <p>
                        Готовы к просмотру? Введите свой адрес электронной
                        почты, чтобы создать или возобновить свою подписку.
                    </p>
                    <Formik
                        initialValues={{ email: "" }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <div className={s.inputContainer}>
                                <Field
                                    type="text"
                                    name="email"
                                    placeholder="Ваша почта"
                                    className={s.input}
                                />
                                <button className={s.submitEmail} type="submit">
                                    Начать
                                    <Image
                                        src={"img/header/arrowRight.svg"}
                                        alt="arrowRight"
                                        width={17}
                                        height={17}
                                    />
                                </button>
                            </div>
                            <ErrorMessage
                                name="email"
                                render={(msg) => (
                                    <div className={s.errorMessage}>
                                        <Image
                                            src={"img/header/error.svg"}
                                            alt="arrowRight"
                                            width={20}
                                            height={20}
                                        />
                                        <p className={s.errorText}>{msg}</p>
                                    </div>
                                )}
                            />
                        </Form>
                    </Formik>
                </div>
            </div>
        </header>
    );
}
