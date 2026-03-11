"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Users, ShieldAlert, BadgeCheck, MessageSquare, Scale, BookOpen, HeartPulse, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const committees = [
    {
        name: "IQAC",
        desc: "Internal Quality Assurance Cell - Developing a system for conscious, consistent and catalytic improvement in the performance of the institution.",
        icon: <BadgeCheck className="w-8 h-8" />,
        color: "bg-blue-500",
        href: "/committees/iqac"
    },
    {
        name: "Anti-Ragging Committee",
        desc: "Ensuring a ragging-free campus and strictly implementing UGC/AICTE regulations to maintain student safety and discipline.",
        icon: <ShieldAlert className="w-8 h-8" />,
        color: "bg-red-500",
        href: "/committees/anti-ragging"
    },
    {
        name: "Grievance Redressal Cell",
        desc: "A forum for students and staff to express their grievances and ensuring timely and objective resolution of all issues.",
        icon: <MessageSquare className="w-8 h-8" />,
        color: "bg-orange-500",
        href: "/committees/grievance"
    },
    {
        name: "Discipline Committee",
        desc: "Formulating and enforcing the code of conduct for students to maintain the decorum and academic atmosphere of the college.",
        icon: <Scale className="w-8 h-8" />,
        color: "bg-purple-500"
    },
    {
        name: "Library Committee",
        desc: "Guiding the development of library resources and services to meet the academic and research needs of the college community.",
        icon: <BookOpen className="w-8 h-8" />,
        color: "bg-emerald-500"
    },
    {
        name: "Internal Complaints Committee",
        desc: "Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Cell for a safe work environment.",
        icon: <HeartPulse className="w-8 h-8" />,
        color: "bg-pink-500"
    },
    {
        name: "SC/ST Cell",
        desc: "Assisting students of the scheduled caste and scheduled tribe communities in academic and administrative matters.",
        icon: <GraduationCap className="w-8 h-8" />,
        color: "bg-amber-500"
    }
];

const CommitteesPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="Statutory Committees"
                subtitle="Committed to maintaining a transparent, disciplined, and progressive academic environment."
                breadcrumb="Committees"
                bgImage="https://www.gcee.ac.in/assets/img/main/img3.jpg"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-20">
                        <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase rounded-full border border-primary/10">
                            Governance & Welfare
                        </div>
                        <h2 className="text-4xl font-bold font-heading text-primary">Our Institutional Committees</h2>
                        <p className="text-lg text-gray-500 font-body max-w-2xl mx-auto italic">
                            "Transparency and student welfare are the cornerstones of our governance model. Our specialized committees ensure a safe and supportive learning environment for all."
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {committees.map((committee, index) => (
                            <motion.div
                                key={committee.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-10 bg-gray-50 rounded-[40px] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center space-y-6"
                            >
                                <div className={`w-20 h-20 ${committee.color} rounded-3xl flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                    {committee.icon}
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold text-primary font-heading group-hover:text-secondary transition-colors italic">{committee.name}</h3>
                                    <p className="text-gray-500 text-sm font-body leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                                        {committee.desc}
                                    </p>
                                </div>
                                {committee.href ? (
                                    <a href={committee.href} className="inline-flex items-center text-sm font-black text-primary uppercase tracking-widest pt-4 group-hover:text-secondary transition-colors">
                                        View Details <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                    </a>
                                ) : (
                                    <div className="text-[10px] text-gray-300 font-black uppercase tracking-widest pt-4">Internal Governance</div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 p-12 bg-primary rounded-[60px] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group border-4 border-secondary/20">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                            <Users className="w-64 h-64" />
                        </div>
                        <div className="relative z-10 space-y-4 max-w-xl">
                            <h3 className="text-3xl font-bold font-heading italic tracking-tight">Need Committee Assistance?</h3>
                            <p className="text-white/60 font-body text-sm">
                                If you have a specific concern or wish to reach out to a particular cell for support,
                                please contact the Administrative Office for direct coordinator details.
                            </p>
                        </div>
                        <a
                            href="/contact"
                            className="relative z-10 px-10 py-5 bg-secondary text-primary font-black rounded-2xl shadow-xl hover:shadow-secondary/30 transition-all flex items-center shrink-0 uppercase tracking-widest text-sm"
                        >
                            Contact Desk
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default CommitteesPage;
