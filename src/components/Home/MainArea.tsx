import React from 'react'
import Image from 'next/image'
export default function MainArea() {
    return (
        <main>
            <img src={'/images/homepage-cover.jpg'} className="absolute h-full w-full object-cover overflow-hidden" alt="homepagecover"/>
            <section className="relative min-h-screen flex justify-center pt-12 lg:pt-64 px-8">
                <h1 className="text-white font-bold cursive home-name leading-none lg:leading-snug">
                    Hola. I am Sudeep Joel.
                </h1>
            </section>
        </main>
    )
}
