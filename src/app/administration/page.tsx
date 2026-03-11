"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { User, Shield, Briefcase, Mail, Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const adminMembers = [
    {
        role: "The Principal",
        name: "Dr. Saradha",
        qual: "M.E., Ph.D.",
        image: "http://www.gcee.ac.in/include/ajax/cse/professor&hod.jpeg",
        desc: "34 Years of Academic Excellence. Specializing in Semantic Web and Neural Networks.",
        email: "gceeprincipal@gmail.com",
        phone: "+91-0424 2533579",
    },
    {
        role: "Department Head - Civil",
        name: "Dr. K. Balamurugan",
        qual: "M.E., Ph.D.",
        desc: "Leading research and structural engineering innovations.",
        email: "civilhod@gcee.ac.in",
        phone: "Ext: 201",
    },
    {
        role: "Department Head - Mech",
        name: "Dr. S. Senthil",
        qual: "M.E., Ph.D.",
        desc: "Overseeing mechanical engineering and CMRG projects.",
        email: "mechhod@gcee.ac.in",
        phone: "Ext: 202",
    },
    {
        role: "Department Head - CSE",
        name: "Dr. R. Karthik",
        qual: "M.E., Ph.D.",
        desc: "Driving digital transformation and AI/ML initiatives.",
        email: "csehod@gcee.ac.in",
        phone: "Ext: 203",
    },
];

const AdministrationPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="College Administration"
                subtitle="Meet the visionaries and leaders dedicated to academic excellence at GCE Erode."
                breadcrumb="Administration"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Left Column: Governance Info */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="inline-block px-4 py-1.5 bg-secondary/15 text-primary text-xs font-bold tracking-widest uppercase rounded-full border border-secondary/20">
                                Governance Structure
                            </div>
                            <h2 className="text-4xl font-bold font-heading text-primary leading-tight">Leadership & Management</h2>
                            <p className="text-lg text-gray-500 font-body leading-relaxed">
                                Government College of Engineering, Erode is governed by the Directorate of Technical Education (DoTE),
                                Government of Tamil Nadu. Our administrative team ensures smooth operations and high standards of
                                engineering education.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { title: "Academic Council", icon: <Shield className="w-5 h-5" /> },
                                    { title: "Grievance Committee", icon: <Briefcase className="w-5 h-5" /> },
                                    { title: "Anti-Ragging Committee", icon: <Shield className="w-5 h-5" /> },
                                    { title: "Industry-Institute Cell", icon: <Briefcase className="w-5 h-5" /> },
                                ].map((item) => (
                                    <div key={item.title} className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all border border-gray-100 group cursor-pointer">
                                        <div className="w-10 h-10 bg-primary text-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <span className="font-bold text-primary">{item.title}</span>
                                        <ChevronRight className="ml-auto w-4 h-4 text-gray-300 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Administrative Profiles */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {adminMembers.map((member, index) => (
                                    <motion.div
                                        key={member.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-8 bg-white border border-gray-100 rounded-[40px] shadow-xl hover:shadow-2xl transition-all group overflow-hidden relative"
                                    >
                                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform -z-0">
                                            <User className="w-24 h-24" />
                                        </div>

                                        <div className="flex flex-col items-start space-y-6 relative z-10">
                                            <div className="flex items-center gap-6">
                                                {member.image ? (
                                                    <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-2 border-secondary/20 bg-gray-100">
                                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                                    </div>
                                                ) : (
                                                    <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center text-primary border-2 border-primary/5">
                                                        <User className="w-10 h-10" />
                                                    </div>
                                                )}
                                                <div>
                                                    <div className="inline-block px-3 py-1 bg-primary text-secondary text-[10px] font-black uppercase rounded-full mb-2">
                                                        {member.role}
                                                    </div>
                                                    <h3 className="text-2xl font-bold font-heading text-primary">{member.name}</h3>
                                                    <p className="text-secondary text-sm font-bold tracking-widest">{member.qual}</p>
                                                </div>
                                            </div>

                                            <p className="text-gray-500 text-sm font-body leading-relaxed line-clamp-3">
                                                {member.desc}
                                            </p>

                                            <div className="w-full pt-6 border-t border-gray-100 space-y-3">
                                                <div className="flex items-center space-x-3 text-xs font-bold text-gray-400">
                                                    <Mail className="w-4 h-4 text-secondary" />
                                                    <span>{member.email}</span>
                                                </div>
                                                <div className="flex items-center space-x-3 text-xs font-bold text-gray-400">
                                                    <Phone className="w-4 h-4 text-secondary" />
                                                    <span>{member.phone}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="p-8 bg-primary rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold font-heading">Internal Quality Assurance Cell (IQAC)</h4>
                                    <p className="text-white/60 text-sm">Ensuring continuous improvement in academic and administrative performance.</p>
                                </div>
                                <button className="px-8 py-4 bg-secondary text-primary font-bold rounded-2xl hover:shadow-[0_0_20px_rgba(244,196,48,0.4)] transition-all">
                                    View IQAC Report
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AdministrationPage;
