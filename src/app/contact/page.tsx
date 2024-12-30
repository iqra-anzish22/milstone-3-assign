import React from "react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
            <h1 className="text-4xl font-bold text-blue-600 mb-4 animate-fade-in">
                We’re Here to Help
            </h1>
            <p className="text-lg text-gray-700 text-center mb-8">
                Your questions matter—reach out, and let us guide you!
            </p>
            <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="number"
                    name="phone number"
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Submit
                </button>
            </form>
            <div className="mt-8 text-center text-gray-700">
                <p>
                    Email:{" "}
                    <a
                        href="mailto:info@CarPortShowroom.com"
                        className="text-blue-500 hover:underline"
                    >
                        info@CarPortShowroom.com
                    </a>
                </p>
                <p className="mt-4">Address: 123 Auto Plaza, Car Town, CT 56789</p>
            </div>
        </div>
    );
}
