import "./globals.css";
import toast, { Toaster } from "react-hot-toast";

import { Space_Grotesk } from "next/font/google";

const space_Grotesk = Space_Grotesk({
    weight: ["400"],
    subsets: ["latin"],
});

export const metadata = {
    title: "zooCity",
    description: "An online platform to explore animals",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={space_Grotesk.className}>
                {children}
                <Toaster position="top-center" />
            </body>
        </html>
    );
}
