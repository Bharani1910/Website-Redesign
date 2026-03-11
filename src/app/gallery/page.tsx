"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Camera, Image as ImageIcon, ZoomIn, Search, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    { id: 1, src: "https://www.gcee.ac.in/assets/img/blog/img2.jpg", category: "Campus", title: "Main Administrative Building", date: "Jan 2024" },
    { id: 2, src: "/images/lab.png", category: "Academic", title: "Computer Science Laboratory", date: "Feb 2024" },
    { id: 3, src: "/images/placements.png", category: "Events", title: "Recent Placement Drive", date: "Mar 2024" },
    { id: 4, src: "/images/campus.png", category: "Life", title: "College Annual Day Fest", date: "Apr 2024" },
    { id: 5, src: "https://www.gcee.ac.in/assets/img/blog/img2.jpg", category: "Campus", title: "Lush Green Pathways", date: "May 2024" },
    { id: 6, src: "/images/lab.png", category: "Academic", title: "Mechanical Workshop", date: "Jun 2024" },
    { id: 7, src: "/images/placements.png", category: "Events", title: "Recruiter Interaction Meet", date: "Jul 2024" },
    { id: 8, src: "/images/campus.png", category: "Life", title: "Sports Tournament 2024", date: "Aug 2024" },
];

const categories = ["All", "Campus", "Academic", "Events", "Life"];

const GalleryPage = () => {
    const [filter, setFilter] = useState("All");
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const filteredImages = filter === "All"
        ? images
        : images.filter(img => img.category === filter);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="Institutional Gallery"
                subtitle="Visual stories from our sprawling 200-acre campus and vibrant academic community."
                breadcrumb="Gallery"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Filters */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                        <div className="flex flex-wrap justify-center gap-4 bg-gray-50 p-2 rounded-2xl border border-gray-100 flex-shrink-0">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all ${filter === cat
                                            ? "bg-primary text-secondary shadow-lg shadow-primary/30"
                                            : "text-gray-400 hover:text-primary hover:bg-white"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4 w-full md:w-auto">
                            <div className="relative flex-grow md:w-64">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input type="text" placeholder="Search gallery..." className="w-full px-12 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-primary/20 transition-all outline-none text-sm" />
                            </div>
                            <button className="p-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-400 hover:text-primary transition-all">
                                <Filter className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredImages.map((image) => (
                                <motion.div
                                    key={image.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="group relative h-72 rounded-3xl overflow-hidden shadow-lg border border-gray-50 cursor-pointer"
                                    onClick={() => setSelectedImage(image.id)}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                        <span className="text-[10px] font-black text-secondary uppercase tracking-widest mb-2 flex items-center gap-2">
                                            <ImageIcon className="w-3 h-3" />
                                            {image.category}
                                        </span>
                                        <h4 className="text-lg font-bold text-white line-clamp-1">{image.title}</h4>
                                        <p className="text-[10px] text-white/50 uppercase tracking-widest mt-2">{image.date}</p>
                                        <div className="mt-4 flex items-center text-sm font-bold text-secondary gap-2 hover:translate-x-1 transition-transform">
                                            Zoom Image <ZoomIn className="w-4 h-4" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox placeholder logic */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-md flex items-center justify-center p-8"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-5xl w-full h-[80vh] bg-gray-100 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={images.find(img => img.id === selectedImage)?.src}
                                className="w-full h-full object-cover"
                                alt="Selected"
                            />
                            <div className="absolute top-8 right-8 text-white font-bold cursor-pointer bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all" onClick={() => setSelectedImage(null)}>✕ Close</div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
};

export default GalleryPage;
