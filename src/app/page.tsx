import { EnjoyTv } from "@/components/EnjoyTv";
import s from "./index.module.scss";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WatchEverywhere } from "@/components/WatchEverywhere";
import { ChildProfile } from "@/components/ChildProfile";
import { DownloadApp } from "@/components/DownloadApp";
import { Faq } from "@/components/Faq";

export default function Home() {
    return (
        <main className={s.home}>
            <Header />

            <EnjoyTv />
            <WatchEverywhere />
            <ChildProfile />
            <DownloadApp />
            <Faq />

            <Footer />
        </main>
    );
}
