import s from "./index.module.scss";
import Image from "next/image";
import tv from "../../../public/assets/enjoy_tv/tv.png";

export function EnjoyTv() {
    return (
        <div className={s.underLine}>
            <div className="container">
                <div className={s.enjoyTv}>
                    <div className={s.tvText}>
                        <h1>На вашем телевизоре</h1>
                        <p>
                            Смотрите на смарт-телевизорах, PlayStation, Xbox,
                            Chromecast, Apple TV, Blu-ray-плеерах и многом
                            другом.
                        </p>
                    </div>
                    <div className={s.tvVideo}>
                        <div className={s.tvItems}>
                            <Image src={tv} alt="tv" />
                            <video autoPlay playsInline muted loop>
                                <source
                                    src="/assets/enjoy_tv/video_tv.m4v"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
