import Image from "next/image";
import s from "./index.module.scss";
import Link from "next/link";
import ArrowRight from "../../../public/assets/header/arrowRight.svg";
import ArrowRightBlue from "../../../public/assets/header/arrowRightBlue.svg";
import SubscribeForm from "../SubscribeForm";
import PopCorn from "../../../public/assets/header/popcorn.png";

import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import { NavUser } from "../NavUser";

export default async function Header() {
    const session = await getServerSession(authOptions);
    return (
        <header className={s.header}>
            <div className="container">
                <nav className={s.nav}>
                    <h1 className={s.logoText}>NeNetFlix</h1>

                    <div className={s.signIn}>
                        {session ? (
                            <NavUser />
                        ) : (
                            <Link href={"/login"}>
                                Войти
                                <Image
                                    src={ArrowRight}
                                    alt="signOutImg"
                                    width={20}
                                    height={25}
                                />
                            </Link>
                        )}
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
                        src={PopCorn}
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
