import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About page',
    description: 'SEO',
    keywords: ['Robert', 'Code', 'About']
};

export default function AboutPage() {
    return(
        <>
            <span className="text-7xl">About</span>
        </>
    )
}