"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { UserCircle, Mail, Phone, ExternalLink, Search, Filter, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const professors = [
    { id: 1, name: "Dr. Saradha", dept: "Administrative", role: "Principal", qual: "M.E., Ph.D.", exp: "34 Years", spec: "Semantic Web, Neural Networks", email: "gceeprincipal@gmail.com", image: "http://www.gcee.ac.in/include/ajax/cse/professor&hod.jpeg" },
    { id: 2, name: "Dr. K. Balamurugan", dept: "Civil", role: "Professor & Head", qual: "M.E., Ph.D.", exp: "28 Years", spec: "Structural Engineering, Concrete Tech", email: "balamurugan@gcee.ac.in" },
    { id: 3, name: "Dr. S. Senthil", dept: "Mechanical", role: "Professor & Head", qual: "M.E., Ph.D.", exp: "26 Years", spec: "Advanced Manufacturing, CAD/CAM", email: "senthil@gcee.ac.in" },
    { id: 4, name: "Dr. R. Karthik", dept: "CS & IT", role: "Professor & Head", qual: "M.E., Ph.D.", exp: "24 Years", spec: "AI, Machine Learning, Data Science", email: "karthik@gcee.ac.in" },
    { id: 5, name: "Dr. P. Rajeswari", dept: "ECE", role: "Associate Professor", qual: "M.E., Ph.D.", exp: "20 Years", spec: "Wireless Communication, 5G Ecosystems", email: "rajeswari@gcee.ac.in" },
    { id: 6, name: "Dr. M. Logesh", dept: "EEE", role: "Assistant Professor", qual: "M.E., Ph.D.", exp: "15 Years", spec: "Renewable Energy, Power Electronics", email: "logesh@gcee.ac.in" },
];

const depts = ["All", "Administrative", "Civil", "Mechanical", "CS & IT", "ECE", "EEE", "Automobile", "S & H"];

const FacultyPage = () => {
    const [filter, setFilter] = useState("All");

    const filteredFaculty = filter === "All"
        ? professors
        : professors.filter(p => p.dept === filter);

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <PageHeader
                title="Our Distinguished Faculty"
                subtitle="Meet the highly qualified and experienced educators driving technical excellence at GCE Erode."
                breadcrumb="Faculty"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Controls */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                        <div className="flex flex-wrap justify-center gap-2 p-2 bg-white rounded-3xl shadow-sm border border-gray-100 flex-shrink-0">
                            {depts.map((d) => (
                                <button
                                    key={d}
                                    onClick={() => setFilter(d)}
                                    className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === d
                                        ? "bg-primary text-secondary shadow-lg shadow-primary/30"
                                        : "text-gray-400 hover:text-primary hover:bg-gray-50 bg-transparent"
                                        }`}
                                >
                                    {d}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4 w-full md:w-auto">
                            <div className="relative flex-grow md:w-64">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input type="text" placeholder="Search faculty member..." className="w-full px-12 py-4 bg-white border border-gray-100 rounded-2xl focus:border-primary/20 transition-all outline-none text-sm shadow-sm" />
                            </div>
                            <button className="p-4 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-primary transition-all shadow-sm">
                                <Filter className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredFaculty.map((p, index) => (
                                <motion.div
                                    key={p.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white p-8 lg:p-10 rounded-[50px] shadow-xl hover:shadow-2xl transition-all border border-gray-100 group overflow-hidden relative"
                                >
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                                        <GraduationCap className="w-24 h-24" />
                                    </div>

                                    <div className="flex flex-col items-center text-center space-y-6">
                                        {p.image ? (
                                            <div className="w-24 h-24 rounded-[32px] overflow-hidden shadow-lg border-2 border-secondary/20">
                                                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                                            </div>
                                        ) : (
                                            <div className="w-24 h-24 bg-primary/5 rounded-[32px] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-all shadow-sm">
                                                <UserCircle className="w-12 h-12" />
                                            </div>
                                        )}

                                        <div className="space-y-1">
                                            <h4 className="text-xl font-bold font-heading text-primary">{p.name}</h4>
                                            <p className="text-xs font-black text-secondary uppercase tracking-widest">{p.role}</p>
                                            <p className="text-sm font-bold text-gray-400 italic font-body">{p.qual} • {p.exp} Exp</p>
                                        </div>

                                        <div className="w-full py-4 px-6 bg-gray-50 rounded-3xl border border-gray-100 group-hover:bg-white group-hover:border-primary/10 transition-all">
                                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Specialization</div>
                                            <div className="text-xs font-bold text-primary italic leading-tight">{p.spec}</div>
                                        </div>

                                        <div className="w-full pt-6 border-t border-gray-100 flex flex-col items-center gap-4">
                                            <div className="flex items-center space-x-2 text-xs font-bold text-gray-400 cursor-pointer hover:text-primary transition-colors">
                                                <Mail className="w-4 h-4 text-secondary" />
                                                <span>{p.email}</span>
                                            </div>
                                            <button className="flex items-center text-[10px] font-black uppercase tracking-widest text-primary hover:translate-x-1 transition-transform gap-2">
                                                View Full Profile <ExternalLink className="w-4 h-4 text-secondary" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredFaculty.length === 0 && (
                        <div className="h-64 flex flex-col items-center justify-center text-gray-400 italic p-8 text-center bg-white rounded-[50px] border-2 border-dashed border-gray-100">
                            <span className="text-4xl mb-4">🔍</span>
                            No faculty members found in this department.
                        </div>
                    )}

                    <div className="pt-24 text-center space-y-8">
                        <div className="inline-block p-8 bg-primary rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                                <img src="/next.svg" className="w-full h-full object-cover" alt="" />
                            </div>
                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-shrink-0 w-16 h-16 bg-secondary text-primary rounded-2xl flex items-center justify-center shadow-lg uppercase font-black">HOD</div>
                                <div className="space-y-1 text-center md:text-left">
                                    <h4 className="text-xl font-bold font-heading italic tracking-tight">Access Branch-wise Faculty Directory</h4>
                                    <p className="text-xs font-bold font-body opacity-60">Complete list of assistant and associate professors across all technical departments.</p>
                                </div>
                                <button className="px-8 py-4 bg-white text-primary font-bold rounded-xl whitespace-nowrap hover:bg-secondary transition-all shadow-lg hover:shadow-secondary/30">Detailed Directory PDF</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default FacultyPage;
