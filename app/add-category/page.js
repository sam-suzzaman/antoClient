"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const page = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        toast.success("Successfully Added!");
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

                    <button className="submit" type="submit">
                        save
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
