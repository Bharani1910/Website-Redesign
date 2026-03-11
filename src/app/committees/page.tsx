"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Download, ExternalLink, ChevronRight, FileText, ClipboardList, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
    {
        title: "GRIEVANCE REDRESSAL COMMITTEE",
        items: [
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
            }
        ]
    },
    {
        title: "ANTI RAGGING",
        items: [
            { id: "antiragging", name: "Anti Ragging Committee", file: "/comittee/Antiragging.pdf", type: "pdf" }
        ],
        extra: [
            {
                title: "HOSTEL MESS",
                items: [{ id: "hostel", name: "Hostel and Mess Committee", file: "#", type: "pdf" }]
            },
            {
                title: "SC/ST STUDENTS",
                items: [{ id: "scst", name: "SC/ST Students Committee", file: "#", type: "pdf" }]
            }
        ]
    },
    {
        title: "STUDENT COUNSELLING",
        items: [
            { id: "counselling", name: "Student Counselling Committee", file: "/comittee/StudentCounsellingCommittee.pdf", type: "pdf" }
        ],
        extra: [
            {
                title: "QUALITY ASSURANCE",
                items: [{ id: "qac", name: "Quality Assurance Committee", file: "/comittee/QAC.pdf", type: "pdf" }]
            }
        ]
    },
    {
        title: "INSTITUTION-INDUSTRY CELL",
        items: [
            { id: "iic", name: "Institution-Industry Committee", file: "/comittee/IIC.pdf", type: "pdf" }
        ],
        extra: [
            {
                title: "RESEARCH AND DEVELOPMENT",
                items: [{ id: "rd", name: "R&D Committee", file: "/comittee/R&D.pdf", type: "pdf" }]
            }
        ]
    }
];

const CommitteesPage = () => {
    const [selectedItem, setSelectedItem] = useState<any>(null);

    const handleSelect = (item: any) => {
        setSelectedItem(item);
        // Scroll to viewer
        setTimeout(() => {
            const viewer = document.getElementById('viewer-section');
            if (viewer) viewer.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const renderItem = (item: any) => (
        <button
            key={item.id}
            onClick={() => handleSelect(item)}
            className={`w-full flex items-center gap-2 text-left py-2 px-2 rounded-lg transition-all group ${selectedItem?.id === item.id ? "bg-white/20 text-secondary" : "hover:bg-white/10 text-white/80"
                }`}
        >
            <span className="text-secondary font-black">»</span>
            <span className="text-xs font-bold font-body">{item.name}</span>
        </button>
    );

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="Institutional Committees"
                subtitle="Categorized governance and student welfare bodies of GCE Erode."
                breadcrumb="Committees"
                bgImage="https://www.gcee.ac.in/assets/img/main/img3.jpg"
            />

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                    {/* Dashboard Style Grid */}
                    <div className="bg-[#4169E1] rounded-[40px] p-8 lg:p-12 shadow-2xl border-b-8 border-pink-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {categories.map((cat, idx) => (
                                <div key={idx} className="space-y-8">
                                    <div className="space-y-4">
                                        <h3 className="text-sm font-black text-pink-500 tracking-wider uppercase border-b border-white/10 pb-2">
                                            {cat.title}
                                        </h3>
                                        <div className="space-y-1">
                                            {cat.items.map(renderItem)}
                                            {cat.id === 'grievance' && (
                                                <div className="pl-6 space-y-1 mt-2 border-l border-white/10">
                                                    {/* This is handled by isRegistration in handleSelect for the main view, 
                                                        but image shows links directly in the dropdown. 
                                                        I will show them in the detailed view to keep it clean. */}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {cat.extra?.map((ex, eidx) => (
                                        <div key={eidx} className="space-y-4">
                                            <h3 className="text-sm font-black text-pink-500 tracking-wider uppercase border-b border-white/10 pb-2">
                                                {ex.title}
                                            </h3>
                                            <div className="space-y-1">
                                                {ex.items.map(renderItem)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Viewer Section */}
                    <div id="viewer-section" className="min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {selectedItem ? (
                                <motion.div
                                    key={selectedItem.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="space-y-8"
                                >
                                    {/* NIRF Style Header */}
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-gray-50 rounded-[40px] border border-gray-100">
                                        <div className="space-y-2">
                                            <div className="inline-flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-widest bg-secondary/20 px-4 py-1.5 rounded-full border border-secondary/30">
                                                <Info className="w-3.5 h-3.5" />
                                                Statutory Body Details
                                            </div>
                                            <h2 className="text-3xl font-black font-heading text-primary italic underline decoration-secondary decoration-4 underline-offset-8">
                                                {selectedItem.name}
                                            </h2>
                                        </div>

                                        {!selectedItem.isRegistration && selectedItem.file !== "#" && (
                                            <div className="flex gap-4">
                                                <a
                                                    href={selectedItem.file}
                                                    download={`${selectedItem.name.replace(/ /g, "_")}${selectedItem.type === "pdf" ? ".pdf" : ".jpg"}`}
                                                    className="px-8 py-4 bg-primary text-white font-black rounded-2xl flex items-center gap-3 shadow-xl hover:shadow-primary/30 transition-all group"
                                                >
                                                    <Download className="w-5 h-5 text-secondary group-hover:bounce" />
                                                    Download
                                                </a>
                                                <a
                                                    href={selectedItem.file}
                                                    target="_blank"
                                                    className="px-8 py-4 bg-white text-primary border-2 border-primary/10 font-black rounded-2xl flex items-center gap-3 hover:bg-gray-50 transition-all"
                                                >
                                                    <ExternalLink className="w-5 h-5" />
                                                    Open Full
                                                </a>
                                            </div>
                                        )}
                                    </div>

                                    {/* NIRF Style Content Viewer */}
                                    <div className="bg-gray-50 rounded-[60px] p-4 lg:p-8 border border-gray-100 shadow-inner h-[850px] relative overflow-hidden">
                                        {selectedItem.isRegistration ? (
                                            <div className="h-full flex flex-col justify-center items-center p-8 bg-white/50 rounded-[50px] space-y-12">
                                                <ClipboardList className="w-24 h-24 text-primary opacity-20" />
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                                                    {selectedItem.links?.map((link: any) => (
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
                                                                <span className="text-xl font-black font-heading text-primary uppercase tracking-tight italic">{link.label}</span>
                                                            </div>
                                                            <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-secondary group-hover:translate-x-2 transition-all" />
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : selectedItem.file === "#" ? (
                                            <div className="h-full flex flex-col justify-center items-center text-gray-400 font-body text-center p-20 space-y-6">
                                                <FileText className="w-24 h-24 opacity-10" />
                                                <p className="text-2xl font-black italic">Document Not Yet Available</p>
                                                <p className="text-sm">The statutory document for this committee is currently being updated in the digital repository.</p>
                                            </div>
                                        ) : (
                                            <div className="w-full h-full relative">
                                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-secondary z-10"></div>
                                                {selectedItem.type === "pdf" ? (
                                                    <iframe
                                                        src={`${selectedItem.file}#toolbar=0`}
                                                        className="w-full h-full rounded-[40px] shadow-2xl bg-white"
                                                        title={`${selectedItem.name} Preview`}
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-white rounded-[40px] flex items-center justify-center p-8">
                                                        <img src={selectedItem.file} alt={selectedItem.name} className="max-w-full max-h-full object-contain rounded-2xl shadow-xl" />
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-6 bg-gray-50 rounded-[60px] border-2 border-dashed border-gray-200 group transition-all hover:bg-white hover:border-primary/20">
                                    <div className="w-20 h-20 bg-primary/5 rounded-[30px] flex items-center justify-center text-primary/20 group-hover:text-primary/40 group-hover:scale-110 transition-all">
                                        <FileText className="w-10 h-10" />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-xl font-black font-heading text-gray-400 italic">Select a Committee to View Details</p>
                                        <p className="text-xs text-gray-300 font-bold uppercase tracking-widest">Digital Governance Repository • GCE Erode</p>
                                    </div>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
};

export default CommitteesPage;
