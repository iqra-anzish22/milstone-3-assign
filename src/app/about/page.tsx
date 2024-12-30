import React from "react";

export default function AboutPage() {
    return (
        <div className="bg-gray-100 flex flex-col items-center py-12 px-4">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">
                About Us
            </h1>
            <p className="text-lg text-black text-center max-w-2xl mb-8">
                Welcome to our blog! We are a passionate team dedicated to sharing
                valuable insights, inspiring stories, and educational content with our readers.
                Our mission is to create a space where creativity, knowledge, and ideas can
                flourish, bringing value to our community.
            </p>
            <div className="bg-transparent p-6 rounded-lg shadow-2xl max-w-4xl space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                    Our Vision
                </h2>
                <p className="text-gray-700 leading-7">
                    We believe in empowering individuals by providing them with the tools 
                    and information they need to grow, succeed, and make informed decisions.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800">
                    Meet Our Team
                </h2>
                <p className="text-gray-700 leading-7">
                    Our team comprises writers, creators, and thinkers who work tirelessly 
                    to bring you high-quality content. Together, we strive to build a community 
                    of like-minded individuals who value knowledge and innovation.
                </p>
            </div>
            <div className="mt-8 text-center text-gray-700">
                <p>
                    Have questions? Feel free to reach out to us through our{" "}
                    <a href="/contact" className="text-blue-500 hover:underline">
                        Contact Page
                    </a>.
                </p>
            </div>
        </div>
    );
}
