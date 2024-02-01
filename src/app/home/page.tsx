import Header from "@/components/Header";
import { EnjoyTv } from "@/components/EnjoyTv";
import { WatchEverywhere } from "@/components/WatchEverywhere";
import { ChildProfile } from "@/components/ChildProfile";
import { DownloadApp } from "@/components/DownloadApp";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main>
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
