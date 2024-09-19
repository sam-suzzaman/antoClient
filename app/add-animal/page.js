import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <section className="page-container">
            <div className="form-card">
                <h4 className="form-title">add animal</h4>
                <form action="">
                    <div className="input-row">
                        <input type="text" placeholder="Name" />
                        {/* <span className="error">something wrong</span> */}
                    </div>
                    <div className="input-row">
                        <input type="file" id="file" className="d-none" />
                        {/* <span className="error">something wrong</span> */}
                        <label htmlFor="file" className="input">
                            Image
                        </label>
                        <label htmlFor="file" className="indicator">
                            upload
                        </label>
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
