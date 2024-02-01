"use client";

import { useState, useEffect } from "react";
import s from "./index.module.scss";
import Image from "next/image";
import Lottie from "lottie-react";

import mobileBg from "../../../public/assets/download_app/mobileImg.jpg";
import poster from "../../../public/assets/download_app/posterImg.png";
import mobileCheck from "../../../public/assets/download_app/mobileCheck.svg";
import download from "../../../public/assets/download_app/download.svg";
import animationData from "../../../public/assets/download_app/Animation - 1706369003990.json";

export function DownloadApp() {
    const [animationPhase, setAnimationPhase] = useState(1);

    useEffect(() => {
        const delay = 3000;
        const maxPhases = 3;

        const timeout = setTimeout(() => {
            setAnimationPhase((prevPhase) => (prevPhase % maxPhases) + 1);
        }, delay);

        return () => clearTimeout(timeout);
    }, [animationPhase]);

    return (
        <div className={s.underLine}>
            <div className="container">
                <div className={s.downloadApp}>
                    <div className={s.phoneBlock}>
                        <Image
                            className={s.mobileBg}
                            src={mobileBg}
                            alt="mobile"
                        />
                        <div className={s.phonePoster}>
                            <Image
                                className={s.posterImg}
                                src={poster}
                                alt="poster"
                            />
                            <div className={s.phoneText}>
                                <p className={s.title}>Очень странные дела</p>
                                <p className={s.download}>Загрузка...</p>
                            </div>
                            {animationPhase === 1 && (
                                <Image
                                    className={`${s.downloadSvg} ${s.animated}`}
                                    src={download}
                                    alt="download"
                                />
                            )}
                            {animationPhase === 2 && (
                                <Lottie
                                    className={`${s.animation} ${s.animated}`}
                                    animationData={animationData}
                                    loop={true}
                                    autoplay={true}
                                />
                            )}
                            {animationPhase === 3 && (
                                <Image
                                    className={`${s.mobileCheckSvg} ${s.animated}`}
                                    src={mobileCheck}
                                    alt="mobileCheck"
                                />
                            )}
                        </div>
                    </div>
                    <div className={s.tvText}>
                        <h1>
                            Загружайте свои программы для просмотра в автономном
                            режиме
                        </h1>
                        <p>
                            Смотрите в самолете, поезде или подводной лодке...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
