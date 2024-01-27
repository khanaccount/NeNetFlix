import s from "./index.module.scss";
import Link from "next/link";

const footerData = [
    {
        items: [
            "Часто задаваемые вопросы",
            "Инвестиционные отношения",
            "Купить подарочные карты",
            "Настройки файлов cookie",
            "Юридическая информация",
        ],
    },
    {
        items: [
            "Центр поддержки",
            "Вакансии",
            "Способы просмотра",
            "Корпоративная информация",
            "Только на NeNetFlix",
        ],
    },
    {
        items: [
            "Учетная запись",
            "Магазин NeNetFlix",
            "Условия использования",
            "Свяжитесь с нами",
            "Не продавать или не раскрывать мою личную информацию",
        ],
    },
    {
        items: [
            "Медиа-центр",
            "Погашение подарочных карт",
            "Конфиденциальность",
            "Тест скорости",
            "Выбор рекламы",
        ],
    },
];

export function Footer() {
    return (
        <footer className={s.footer}>
            <div className="container">
                <div className={s.footerBlock}>
                    <p className={s.phoneCall}>
                        Questions? Call
                        <Link href={`tel:${88005553535}`}>88005553535</Link>
                    </p>
                    <div className={s.footerLinkList}>
                        {footerData.map((column, index) => (
                            <div key={index} className={s.footerColumn}>
                                <ul>
                                    {column.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <Link href={"/"}>{item}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
