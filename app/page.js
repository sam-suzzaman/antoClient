"use client";
import AnimalList from "@/components/AnimalList";
import Menu from "@/components/Menu";
import useGetHook from "@/hook/useGetHook";

export default function Home() {
    // animal list fetch
    const {
        isLoading: animalsLoading,
        data: animals,
        isError: isAnimalError,
        error: animalError,
    } = useGetHook(`https://antoapi.onrender.com/animal`);

    // category list fetch
    const {
        isLoading: cateLoading,
        data: categories,
        isError: isCateError,
        error: cateError,
    } = useGetHook(`https://antoapi.onrender.com/category`);

    if (animalsLoading || cateLoading) {
        return <h2>loading...</h2>;
    }
    return (
        <section className="landing-page-container">
            <Menu categories={categories} />
            <AnimalList data={animals} />
        </section>
    );
}
