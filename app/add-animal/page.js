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
                            <option value="a">option a</option>
                            <option value="b">option b</option>
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
                    <button className="submit">create animal</button>
                </form>
                <div className="home-row">
                    <Link href="/">go back</Link>
                </div>
            </div>
        </section>
    );
};

export default page;
