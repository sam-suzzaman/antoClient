"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const page = () => {
    const [isLoading, setIsLoading] = useState(false);
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
            const url = `https://antoapi.onrender.com/category`;
            const option = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
            const response = await fetch(url, option);
            const res = await response.json();

            if (res.status) {
                toast.success("New Category Added!");
                reset();
                setIsLoading(false);
                return;
            }
            toast.error(`Failed(${res.result})`);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false)
            toast.error(`Failed(${error.message})`);
        }
    };
    return (
        <section className="page-container">
            <div className="form-card">
                <h4 className="form-title">add category</h4>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <div className="input-row">
                        <input
                            type="text"
                            placeholder="Name"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Enter a valid Category Name",
                                },
                                maxLength: {
                                    value: 15,
                                    message:
                                        "Too long Category name (max 15char)",
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
