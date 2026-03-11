"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { UserCircle, Mail, Phone, ExternalLink, Search, Filter, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const professors = [
    // Administrative
    { id: 1, name: "Dr. Saradha", dept: "Administrative", role: "Principal", qual: "M.E., Ph.D.", exp: "34 Years", spec: "Semantic Web, Neural Networks", email: "gceeprincipal@gmail.com", image: "/images/faculty/principal.jpeg" },

    // CSE
    { id: 2, name: "Dr. A. Kavitha", dept: "CS & IT", role: "Professor & Head", qual: "M.E., Ph.D.", exp: "24 Years", spec: "Semantic Web, AI/ML", email: "kavitha@gcee.ac.in", image: "/images/faculty/cse-hod.jpeg" },
    { id: 3, name: "Mr. R. Sivasubramanian", dept: "CS & IT", role: "Associate Professor", qual: "M.S.", exp: "30 Years", spec: "Data Structures, Software Engineering", email: "sivasubramanian@irttech.ac.in" },
    { id: 4, name: "Dr. G. Venkatachalam", dept: "CS & IT", role: "Associate Professor", qual: "M.E., Ph.D.", exp: "28 Years", spec: "Cloud Computing", email: "venkat@gcee.ac.in" },
    { id: 101, name: "Dr. N. Magesh", dept: "CS & IT", role: "Assistant Professor (Sr)", qual: "M.E., Ph.D.", exp: "15 Years", spec: "Data Science", email: "magesh@gcee.ac.in" },

    // Mechanical
    { id: 5, name: "Dr. K. Balamurugan", dept: "Mechanical", role: "Professor & Head", qual: "M.E., Ph.D.", exp: "23 Years", spec: "Manufacturing Engineering", email: "drkbalamurugan@gcee.ac.in", image: "/images/faculty/mech-hod.jpeg" },
    { id: 6, name: "Dr. R. Senthilraja", dept: "Mechanical", role: "Assistant Professor", qual: "M.E., Ph.D.", exp: "12 Years", spec: "Thermal Engineering", email: "senthilraja@irttech.ac.in" },
    { id: 102, name: "Mrs. K. Uma", dept: "Mechanical", role: "Assistant Professor", qual: "M.E.", exp: "10 Years", spec: "Design Engineering", email: "uma@gcee.ac.in" },

    // Civil
    { id: 7, name: "Dr. P. Saravanakumar", dept: "Civil", role: "Professor & Head", qual: "M.E., Ph.D.", exp: "20 Years", spec: "Structural Engineering", email: "grpsaravanan@gmail.com", image: "/images/faculty/civil-hod.jpeg" },
    { id: 8, name: "Dr. G. M. Gowthama kumar", dept: "Civil", role: "Assistant Professor (Sr)", qual: "M.E., Ph.D.", exp: "18 Years", spec: "Environmental Engineering", email: "gowthama@gcee.ac.in" },

    // EEE
    { id: 9, name: "Dr. M. Mohammadha Hussaini", dept: "EEE", role: "Associate Professor & Head", qual: "M.E., Ph.D.", exp: "25 Years", spec: "Power Systems", email: "hussaini1008@gmail.com", image: "/images/faculty/eee-hod.jpeg" },
    { id: 10, name: "Dr. B. Baby Priya", dept: "EEE", role: "Associate Professor", qual: "M.E., Ph.D.", exp: "22 Years", spec: "Power Electronics", email: "babypriya@gcee.ac.in" },
    { id: 103, name: "Dr. K. Tamilselvan", dept: "EEE", role: "Assistant Professor (Sr)", qual: "M.E., Ph.D.", exp: "18 Years", spec: "Renewable Energy", email: "tamilselvan@gcee.ac.in" },

    // ECE
    { id: 11, name: "Mr. M. RAJA", dept: "ECE", role: "Associate Professor & Head", qual: "M.E.", exp: "30 Years", spec: "Microwave Engineering", email: "raja@irttech.ac.in", image: "/images/faculty/ece-hod.jpeg" },
    { id: 12, name: "Dr. G. Gowrison", dept: "ECE", role: "Assistant Professor (Sr)", qual: "M.E., Ph.D.", exp: "18 Years", spec: "VLSI Design", email: "gowrison@gcee.ac.in" },

    // IT
    { id: 13, name: "Dr. I. Bhuvaneshwarri", dept: "Information Technology", role: "Assistant Professor (Sr) & Head", qual: "M.E., Ph.D.", exp: "24 Years", spec: "Big Data, Web Tech", email: "ibw@gcee.ac.in", image: "/images/faculty/it-hod.jpeg" },
    { id: 14, name: "Dr. M. Poongothai", dept: "Information Technology", role: "Assistant Professor (Sr)", qual: "M.E., Ph.D.", exp: "20 Years", spec: "Network Security", email: "poongothai@gcee.ac.in" },

    // S & H
    { id: 15, name: "Mr. P. Asaigeethan", dept: "S & H", role: "Head of Department", qual: "M.Sc., M.Phil.", exp: "20 Years", spec: "Mathematics", email: "hodsh@gcee.ac.in", image: "/images/faculty/sh-hod.jpeg" },
    { id: 16, name: "Dr. M. Rajeswari", dept: "S & H", role: "Associate Professor", qual: "M.Sc., M.Phil., Ph.D.", exp: "16 Years", spec: "Physics", email: "mrajeswari@gct.ac.in" },
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
                bgImage="https://www.gcee.ac.in/assets/img/sliders/layer/CollegeBirdView.jpeg"
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
                        </div>
                    </div>

                    <div className="space-y-24">
                        {depts.filter(d => d !== "All" && (filter === "All" || filter === d)).map((deptName) => {
                            const deptFaculty = professors.filter(p => p.dept === deptName);
                            if (deptFaculty.length === 0) return null;

                            return (
                                <div key={deptName} className="space-y-12">
                                    <div className="flex items-center gap-4">
                                        <div className="h-0.5 flex-grow bg-gray-100"></div>
                                        <h2 className="text-2xl font-bold font-heading text-primary bg-gray-50 px-6 py-2 rounded-full border border-gray-100 uppercase tracking-widest text-sm">
                                            {deptName}
                                        </h2>
                                        <div className="h-0.5 flex-grow bg-gray-100"></div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {deptFaculty.map((p) => (
                                            <motion.div
                                                key={p.id}
                                                layout
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="bg-white p-8 lg:p-10 rounded-[50px] shadow-xl hover:shadow-2xl transition-all border border-gray-100 group overflow-hidden relative"
                                            >
                                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                                                    <GraduationCap className="w-24 h-24" />
                                                </div>

                                                <div className="flex flex-col items-center text-center space-y-6">
                                                    <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-secondary/20 bg-gray-100 group-hover:scale-105 transition-transform duration-500">
                                                        {p.image ? (
                                                            <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                                                        ) : (
                                                            <div className="w-full h-full bg-primary/5 flex items-center justify-center text-primary">
                                                                <UserCircle className="w-12 h-12" />
                                                            </div>
                                                        )}
                                                    </div>

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
                                                            View Full Profile <ExternalLink className="ml-1 w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
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
