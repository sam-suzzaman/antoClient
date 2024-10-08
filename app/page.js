"use client";
import AnimalList from "@/components/AnimalList";
import Menu from "@/components/Menu";
import useGetHook from "@/hook/useGetHook";
import { useEffect, useState } from "react";

export default function Home() {
    const [selectedCategory, setSelectedCateogry] = useState({
        _id: 1,
        name: "all",
    });
    const [fetchURL, setFetchURL] = useState(
        "https://antoapi.onrender.com/animal"
    );

    // animal list fetch
    const {
        isLoading: animalsLoading,
        data: animals,
        isError: isAnimalError,
        error: animalError,
    } = useGetHook(fetchURL);

    // category list fetch
    const {
        isLoading: cateLoading,
        data: categories,
        isError: isCateError,
        error: cateError,
    } = useGetHook(`https://antoapi.onrender.com/category`);

    // filter handler
    useEffect(() => {
        if (selectedCategory?.name == "all") {
            setFetchURL(`https://antoapi.onrender.com/animal`);
        } else {
            setFetchURL(
                `https://antoapi.onrender.com/animal?category=${selectedCategory?.name}`
            );
        }
    }, [selectedCategory]);

    if (animalsLoading && cateLoading) {
        return <h2>loading...</h2>;
    }
    return (
        <section className="landing-page-container">
            <Menu
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCateogry={setSelectedCateogry}
            />
            {animalsLoading && <h3>Loading...</h3>}
            {!animalsLoading && <AnimalList data={animals} />}
        </section>
    );
}
