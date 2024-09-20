"use client";
import useGetHook from "@/hook/useGetHook";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const page = () => {
    const [isLoading, setIsLoading] = useState(false);
    // category list fetch
    const {
        isLoading: cateLoading,
        data: categories,
        isError: isCateError,
        error: cateError,
    } = useGetHook(`https://antoapi.onrender.com/category`);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const photo = data.photo[0];
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("category", data.category);
            formData.append("photo", photo);
            const option = {
                method: "POST",
                // headers: {
                //     "content-type": "multipart/form-data",
                // },
                body: formData,
            };
            const url = `https://antoapi.onrender.com/animal`;
            const response = await fetch(url, option);
            const res = await response.json();
            console.log(res);
            if (res.status) {
                toast.success("New Animal Added!");
                reset();
                setIsLoading(false);
                return;
            }
            toast.error(`Failed(${res.result})`);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            toast.error(`Failed(${error.message})`);
        }
    };

    if (cateLoading) {
        return <h2>Loading...</h2>;
    }
    return (
        <section className="page-container">
            <div className="form-card">
                <h4 className="form-title">add animal</h4>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <div className="input-row">
                        <input
                            type="text"
                            placeholder="Name"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Enter a valid Animal Name",
                                },
                                maxLength: {
                                    value: 20,
                                    message:
                                        "Too long Category name (max 20char)",
                                },
                                minLength: {
                                    value: 3,
                                    message:
                                        "Too short Category name (min 3char)",
                                },
                            })}
                        />
                        {errors.name && (
                            <span className="error">{errors.name.message}</span>
                        )}
                    </div>
                    <div className="input-row">
                        <select
                            defaultValue="none"
                            {...register("category", {
                                required: {
                                    value: true,
                                    message: "Select a category",
                                },
                                validate: {
                                    valueType: (value) => {
                                        return (
                                            value !== "none" ||
                                            "Please select a category"
                                        );
                                    },
                                },
                            })}
                        >
                            <option disabled value="none">
                                select category
                            </option>
                            {categories?.map((c) => (
                                <option value={c?.name} key={c._id}>
                                    {c?.name}
                                </option>
                            ))}
                        </select>
                        {errors.category && (
                            <span className="error">
                                {errors.category.message}
                            </span>
                        )}
                    </div>
                    <div className="input-row">
                        <input
                            type="file"
                            id="file"
                            className="d-none"
                            {...register("photo", {
                                required: {
                                    value: true,
                                    message: "Animal photo is required",
                                },
                            })}
                        />
                        <label htmlFor="file" className="input">
                            Image
                        </label>
                        <label htmlFor="file" className="indicator">
                            upload
                        </label>
                        {errors.photo && (
                            <span className="error">
                                {errors.photo.message}
                            </span>
                        )}
                    </div>
                    <button
                        className="submit"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? "loading..." : "save"}
                    </button>
                </form>
                <div className="home-row">
                    <Link href="/">go back</Link>
                </div>
            </div>
        </section>
    );
};

export default page;
