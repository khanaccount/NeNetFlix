import Image from "next/image";
import ArrowRight from "../../../public/assets/header/arrowRight.svg";
import s from "./index.module.scss";

export function SubscribeForm() {
    return (
        <form>
            <div className={s.inputContainer}>
                <input
                    type="text"
                    name="email"
                    placeholder="Ваша почта"
                    className={s.input}
                    maxLength={255}
                    required
                />
                <button className={s.submitEmail} type="submit">
                    Начать
                    <Image
                        src={ArrowRight}
                        alt="arrowRight"
                        width={25}
                        height={25}
                    />
                </button>
            </div>
        </form>
    );
}

export default SubscribeForm;
