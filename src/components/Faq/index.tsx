"use client";

import { useState } from "react";

import s from "./index.module.scss";
import Image from "next/image";
import cross from "../../../public/assets/faq/cross.svg";
import SubscribeForm from "../SubscribeForm";

const faqItems = [
    {
        question: "Что такое NeNetflix?",
        texts: [
            "NeNetflix - это сервис потокового воспроизведения, предлагающий широкий выбор награжденных телепередач, фильмов, аниме, документальных фильмов и многого другого на тысячах устройствах, подключенных к интернету.",
            "Вы можете смотреть столько, сколько хотите, в любое удобное время, все это за ежемесячную невысокую плату. Здесь всегда есть что-то новенькое, и каждую неделю добавляются новые телепередачи и фильмы!",
        ],
    },
    {
        question: "Сколько стоит NeNetflix?",
        texts: [
            "Смотрите NeNetflix на своем смартфоне, планшете, смарт-телевизоре, ноутбуке или устройстве для потокового воспроизведения всего за фиксированную ежемесячную плату.",
            "Тарифы варьируются от  565 до 2000 рублей в месяц. Нет дополнительных расходов, нет контрактов.",
        ],
    },
    {
        question: "Где я могу смотреть?",
        texts: [
            "Смотрите в любом месте и в любое время. Войдите в свою учетную запись NeNetflix, чтобы смотреть мгновенно в веб-браузере на netflix.com с вашего персонального компьютера или на любом устройстве, подключенном к интернету, предлагающем приложение NeNetflix, включая смарт-телевизоры, смартфоны, планшеты, устройства для потокового воспроизведения мультимедийных данных и игровые консоли.",
            "Вы также можете загрузить свои любимые программы с помощью приложения для iOS, Android или Windows 10. Используйте загрузки, чтобы смотреть в пути и без подключения к интернету. Возьмите NeNetflix с собой куда угодно.",
        ],
    },
    {
        question: "Как отменить подписку?",
        texts: [
            "NeNetflix гибкий. Здесь нет раздражающих контрактов и обязательств. Вы легко можете отменить свою учетную запись онлайн двумя кликами. Нет платы за отмену подписки - начните или заканчивайте свою учетную запись в любое время.",
        ],
    },
    {
        question: "Что я могу посмотреть на NeNetflix?",
        texts: [
            "У NeNetflix обширная библиотека художественных фильмов, документальных фильмов, телепередач, аниме, награжденных оригинальных производств NeNetflix и многого другого. Смотрите столько, сколько хотите, в любое удобное время.",
        ],
    },
    {
        question: "Подходит ли NeNetflix для детей?",
        texts: [
            "Опыт NeNetflix для детей включен в вашу подписку, чтобы дать родителям контроль, пока дети наслаждаются семейными телепередачами и фильмами в своем собственном пространстве.",
            "Детские профили обеспечены кодовыми блокировками родительского контроля, которые позволяют вам ограничивать возрастной рейтинг контента, который могут смотреть дети, и блокировать определенные заголовки, которые вы не хотите, чтобы дети видели.",
        ],
    },
];

export function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleItem = (index: any) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <div className={s.underLine}>
            <div className="container">
                <div className={s.faq}>
                    <h1 className={s.title}>Часто задаваемые вопросы</h1>
                    <div className={s.items}>
                        {faqItems.map((item, index) => (
                            <div
                                key={index}
                                className={`${s.item} ${
                                    index === activeIndex ? s.active : ""
                                }`}
                            >
                                <div
                                    className={s.top}
                                    onClick={() => toggleItem(index)}
                                >
                                    <p>{item.question}</p>
                                    <Image
                                        className={`${s.cross} ${
                                            index === activeIndex
                                                ? s.crossActive
                                                : ""
                                        }`}
                                        src={cross}
                                        width={30}
                                        height={30}
                                        alt="cross"
                                    />
                                </div>
                                <div
                                    className={`${s.bottom} ${
                                        index === activeIndex ? s.visible : ""
                                    }`}
                                >
                                    {item.texts.map((text, i) => (
                                        <p
                                            key={i}
                                            className={
                                                i === 0
                                                    ? s.textTop
                                                    : s.textBottom
                                            }
                                        >
                                            {text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={s.form}>
                        <h1 className={s.formTitle}>
                            Готовы к просмотру? Введите свой адрес электронной
                            почты, чтобы создать или возобновить вашу подписку.
                        </h1>
                        <SubscribeForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
