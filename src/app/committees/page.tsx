"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Download, ExternalLink, ChevronRight, FileText, ClipboardList } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const committeeItems = [
    {
        id: "icc",
        name: "Internal Complaints Committee",
        file: "/comittee/Internal_Compliants_Committee.jpg",
        type: "image"
    },
    {
        id: "grievance",
        name: "Grievance Registration",
        isRegistration: true,
        links: [
            { label: "Student", url: "https://docs.google.com/forms/d/e/1FAIpQLSdDpRdNni6GdU9FOWQVnoOKR5iy0iiq-i5euBM2RA8qj2bSCw/viewform" },
            { label: "Faculty", url: "https://docs.google.com/forms/d/e/1FAIpQLSehf0m4t6t4DKnexaU-UeelLAxieDJDqilY2nY6EI_9BFI38Q/viewform" },
            { label: "Other Staff", url: "https://docs.google.com/forms/d/e/1FAIpQLSfMzU2zSdpx27_RrIa-MrlccdYFMRzQRBwYfdULY7-ERX85nQ/viewform" },
            { label: "Parent", url: "https://docs.google.com/forms/d/e/1FAIpQLScpCKnoW9O8qupCV1iYJk8EA51dUJ6ojW3en8KE1R2gEwkr7w/viewform" },
            { label: "Alumni", url: "https://docs.google.com/forms/d/e/1FAIpQLSeOdsZKmXqY4E4AgOiHwbQ4Jg7WP6mVvu3vbB14TmTDZjHCpg/viewform" }
        ]
    },
    {
        id: "antiragging",
        name: "Anti Ragging",
        file: "/comittee/Antiragging.pdf",
        type: "pdf"
    },
    {
        id: "counselling",
        name: "Student Counselling",
        file: "/comittee/StudentCounsellingCommittee.pdf",
        type: "pdf"
    },
    {
        id: "iic",
        name: "Institution-Industry Cell",
        file: "/comittee/IIC.pdf",
        type: "pdf"
    },
    {
        id: "qac",
        name: "Quality Assurance",
        file: "/comittee/QAC.pdf",
        type: "pdf"
    },
    {
        id: "rd",
        name: "Research and Development",
        file: "/comittee/R&D.pdf",
        type: "pdf"
    }
];

const CommitteesPage = () => {
    const [activeSection, setActiveSection] = useState(committeeItems[0]);

    return (
        <main className="min-h-screen bg-white font-sans">
            <Navbar />

            <PageHeader
                title="Statutory Committees"
                subtitle="Ensuring transparency, safety, and excellence through dedicated governance cells."
                breadcrumb="Committees"
                bgImage="https://www.gcee.ac.in/assets/img/main/img3.jpg"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Sidebar Navigation */}
                        <div className="lg:w-1/3 xl:w-1/4">
                            <div className="sticky top-24 space-y-2 bg-gray-50 p-6 rounded-[30px] border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-black text-primary font-heading mb-6 px-2 italic uppercase tracking-tighter">Committees</h3>
                                {committeeItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveSection(item)}
                                        className={`w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-sm font-bold transition-all text-left ${activeSection.id === item.id
                                                ? "bg-primary text-secondary shadow-lg shadow-primary/20 scale-[1.02]"
                                                : "text-gray-500 hover:bg-white hover:text-primary"
                                            }`}
                                    >
                                        <span className="text-lg">»</span>
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 space-y-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeSection.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-8"
                                >
                                    {/* Header */}
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-10 bg-gray-50 rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden group">
                                        <div className="absolute -right-10 -bottom-10 opacity-[0.03] group-hover:scale-110 transition-transform">
                                            {activeSection.isRegistration ? <ClipboardList className="w-64 h-64" /> : <FileText className="w-64 h-64" />}
                                        </div>
                                        <div className="space-y-2 relative z-10">
                                            <h2 className="text-3xl font-black font-heading text-primary italic leading-tight">{activeSection.name}</h2>
                                            <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">
                                                {activeSection.isRegistration ? "Online Registration Forms" : "Statutory Document & Guidelines"}
                                            </p>
                                        </div>
                                        {!activeSection.isRegistration && (
                                            <div className="flex gap-4 relative z-10">
                                                <a
                                                    href={activeSection.file}
                                                    download={`${activeSection.name.replace(/ /g, "_")}${activeSection.type === "pdf" ? ".pdf" : ".jpg"}`}
                                                    className="px-6 py-3 bg-primary text-white font-black rounded-xl text-xs flex items-center gap-2 shadow-lg hover:shadow-primary/30 transition-all group/btn"
                                                >
                                                    <Download className="w-4 h-4 text-secondary group-hover/btn:bounce" />
                                                    Download
                                                </a>
                                                <a
                                                    href={activeSection.file}
                                                    target="_blank"
                                                    className="px-6 py-3 bg-white text-primary border-2 border-primary/10 font-black rounded-xl text-xs flex items-center gap-2 hover:bg-gray-100 transition-all"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    Full View
                                                </a>
                                            </div>
                                        )}
                                    </div>

                                    {/* Body */}
                                    <div className="min-h-[600px] lg:h-[800px] bg-gray-50 rounded-[50px] p-2 lg:p-6 border border-gray-100 shadow-inner relative overflow-hidden">
                                        {activeSection.isRegistration ? (
                                            <div className="h-full flex flex-col justify-center items-center p-8 lg:p-12 space-y-12 bg-white/50 backdrop-blur-sm rounded-[40px]">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                                                    {activeSection.links?.map((link) => (
                                                        <a
                                                            key={link.label}
                                                            href={link.url}
                                                            target="_blank"
                                                            className="flex items-center justify-between p-8 bg-white border-2 border-gray-100 rounded-[35px] shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all group"
                                                        >
                                                            <div className="flex items-center gap-4">
                                                                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-primary transition-colors font-black">
                                                                    »
                                                                </div>
                                                                <span className="text-lg font-black font-heading text-primary uppercase tracking-tight italic">{link.label}</span>
                                                            </div>
                                                            <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-secondary group-hover:translate-x-2 transition-all" />
                                                        </a>
                                                    ))}
                                                </div>
                                                <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest bg-primary/5 px-6 py-2 rounded-full border border-primary/10">
                                                    Official Google Form Submissions
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="w-full h-full relative group/viewer">
                                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-secondary z-20"></div>
                                                {activeSection.type === "pdf" ? (
                                                    <iframe
                                                        src={`${activeSection.file}#toolbar=0`}
                                                        className="w-full h-full rounded-[30px] shadow-2xl bg-white"
                                                        title={`${activeSection.name} Viewer`}
                                                    />
                                                ) : (
                                                    <div className="w-full h-full rounded-[30px] overflow-hidden bg-white flex items-center justify-center p-4 lg:p-12">
                                                        <img
                                                            src={activeSection.file}
                                                            alt={activeSection.name}
                                                            className="max-w-full max-h-full object-contain shadow-2xl rounded-2xl"
                                                        />
                                                    </div>
                                                )}
                                                {/* Overlay hint */}
                                                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary/80 backdrop-blur-md text-secondary text-[10px] font-black uppercase tracking-widest rounded-full opacity-0 group-hover/viewer:opacity-100 transition-opacity z-20 border border-secondary/20">
                                                    Scroll to View Document
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default CommitteesPage;
