import AnimalList from "@/components/AnimalList";
import Menu from "@/components/Menu";

export default function Home() {
    return (
        <section className="landing-page-container">
            <Menu />
            <AnimalList />
        </section>
    );
}
