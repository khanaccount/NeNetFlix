import type { Metadata } from "next";
import Link from "next/link";
import s from "./index.module.scss";

export const metadata: Metadata = {
    title: "NotFound",
};

export default function NotFound() {
    return (
        <main className={s.notFoundPage}>
            <h1 className={s.logoText}>NeNetFlix</h1>
            <section className={s.bgImg}>
                <div className="container">
                    <div className={s.notFoundBody}>
                        <h1>Заблудились?</h1>
                        <div className={s.notFoundContent}>
                            <p>
                                Извините, мы не можем найти эту страницу. На
                                домашней странице вы найдете много интересного
                                для изучения.
                            </p>
                            <button>
                                <Link href={"/"}>Домашняя</Link>
                            </button>
                            <span className={s.errorCode}>
                                Error Code <strong>NSES-404</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
