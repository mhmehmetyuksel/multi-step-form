'use client'
import Image from "next/image";
import bgSidebarDesktop from "../assets/images/bg-sidebar-desktop.svg"
import bgSidebarMobile from "../assets/images/bg-sidebar-mobile.svg"
import { useEffect, useState } from "react";
function MultiStepForm() {

    const [windowWidth, setWindowWidth] = useState<number | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Initial width
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Define your logic to choose the appropriate image source based on window width
    const getImageSrc = () => {
        if (windowWidth! < 768) {
            return bgSidebarMobile;
        } else {
            return bgSidebarDesktop;
        }
    };

    return (
        <div className="w-full md:max-w-[1000px] h-full md:h-auto bg-white md:rounded-lg mx-auto md:flex md:items-center md:justify-between p-4">
            <aside>
                <Image src={getImageSrc()} alt="bg-sidebar-desktop" />
            </aside>
            <aside>
                <section>
                    <h1>Personal Info</h1>
                    <p>Please provide your name, email address, and phone number.</p>
                </section>
                <section>
                    <form>
                        <label>Name</label><br />
                        <input type="text" id="name" name="name" className="border" placeholder="e.g. Stephen King" />
                        <label>Email</label><br />
                        <input type="email" id="email" name="email" className="border" placeholder="e.g. stephenking@lorem.com" />
                        <label>Phone Number</label><br />
                        <input type="tel" id="email" name="email" className="border" placeholder="e.g. +1 234 567 890" />
                    </form>
                    <button className="border">
                        Next Step
                    </button>
                </section>
            </aside>
        </div>
    )
}

export default MultiStepForm