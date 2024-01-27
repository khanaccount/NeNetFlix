"use client";

import Image from "next/image";
import s from "./index.module.scss";
import Link from "next/link";
import ArrowRight from "../../../public/assets/header/arrowRight.svg";
import ArrowRightBlue from "../../../public/assets/header/arrowRightBlue.svg";
import SubscribeForm from "../SubscribeForm";

export function Header() {
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
                                src={ArrowRight}
                                alt="signInImg"
                                width={20}
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
                    <SubscribeForm />
                </div>
                <div className={s.advertising}>
                    <Image
                        src={"/img/header/popcorn.png"}
                        alt="popcorn"
                        width={100}
                        height={100}
                    />
                    <div className={s.advertisingText}>
                        <h1 className={s.advertisingTitle}>
                            NeNetflix, который вам нравится, всего за 550 руб.
                        </h1>
                        <h1 className={s.advertisingSmallText}>
                            Получите план 'Стандарт с рекламой'.
                        </h1>
                        <Link className={s.linkLearnMore} href={"/"}>
                            Узнать больше
                            <Image
                                className={s.popcornSvg}
                                src={ArrowRightBlue}
                                alt="arrowRight"
                                width={17}
                                height={17}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
