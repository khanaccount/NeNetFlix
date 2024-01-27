import { Footer } from "@/components/Footer";
import s from "./index.module.scss";
import { Header } from "@/components/Header";

export default function Home() {
    return (
        <main className={s.home}>
            <Header />
            <Footer />
        </main>
    );
}
