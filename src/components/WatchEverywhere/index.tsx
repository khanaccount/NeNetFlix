import s from "./index.module.scss";
import Image from "next/image";
import tv from "../../../public/assets/watch_everewhere/vide_bg_watch.png";

export function WatchEverywhere() {
    return (
        <div className={s.underLine}>
            <div className="container">
                <div className={s.watchEverywhere}>
                    <div className={s.tvVideo}>
                        <div className={s.tvItems}>
                            <Image width={580} height={435} src={tv} alt="tv" />
                            <video autoPlay playsInline muted loop>
                                <source
                                    src="/assets/watch_everewhere/video_watch.m4v"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </div>
                    <div className={s.tvText}>
                        <h1>Смотрите везде</h1>
                        <p>
                            Стриминг неограниченного количества фильмов и
                            телепередач на вашем телефоне, планшете, ноутбуке и
                            телевизоре.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
