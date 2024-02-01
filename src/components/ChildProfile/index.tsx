import s from "./index.module.scss";
import Image from "next/image";
import childImg from "../../../public/assets/child_block/childImg.png";

export function ChildProfile() {
    return (
        <div className={s.underLine}>
            <div className="container">
                <div className={s.childProfile}>
                    <div className={s.tvText}>
                        <h1>Создавайте профили для детей</h1>
                        <p>
                            Отправляйте детей в приключения с их любимыми
                            персонажами в специально созданном для них
                            пространстве – бесплатно с вашей подпиской
                        </p>
                    </div>
                    <div className={s.tvImg}>
                        <Image src={childImg} alt="child img" />
                    </div>
                </div>
            </div>
        </div>
    );
}
