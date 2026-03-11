"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { BadgeCheck, Target, Layers, FileText, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const iqacGoals = [
    "To develop a quality system for conscious, consistent and catalytic programmed action to improve the academic and administrative performance of the College.",
    "To promote measures for institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices.",
    "To facilitate the creation of a learner-centric environment conducive to quality education.",
    "Arrangement for feedback response from students, parents and other stakeholders on quality-related institutional processes.",
];

const IQACPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="IQAC"
                subtitle="Internal Quality Assurance Cell - Promoting excellence and quality culture."
                breadcrumb="Committees / IQAC"
                bgImage="https://www.gcee.ac.in/assets/img/main/img3.jpg"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="flex-1 space-y-10">
                            <div className="inline-flex items-center space-x-2 text-secondary font-bold uppercase tracking-widest text-xs">
                                <BadgeCheck className="w-4 h-4" />
                                <span>Quality Assurance</span>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-4xl font-bold font-heading text-primary leading-tight">Vision and Purpose</h2>
                                <p className="text-lg text-gray-500 font-body leading-relaxed max-w-xl">
                                    The IQAC at GCE Erode was established to ensure high quality standards in all institutional operations.
                                    It works as a facilitative and participative organ of the college, focusing on academic and administrative quality.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {iqacGoals.map((goal, i) => (
                                    <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white transition-all shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-gray-600 font-medium leading-relaxed">{goal}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/3 space-y-8">
                            <div className="p-10 bg-primary rounded-[50px] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                                    <Target className="w-24 h-24" />
                                </div>
                                <h3 className="text-2xl font-bold font-heading mb-6 relative z-10 italic">Core IQAC Functions</h3>
                                <ul className="space-y-4 relative z-10">
                                    {[
                                        "Quality benchmark development",
                                        "Academic year planning",
                                        "Stakeholder feedback analysis",
                                        "Best practices institutionalization",
                                        "AQAR submission to NAAC"
                                    ].map((func) => (
                                        <li key={func} className="flex items-center text-sm text-white/70 font-bold uppercase tracking-widest">
                                            <Layers className="w-4 h-4 mr-3 text-secondary" />
                                            {func}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-10 bg-gray-50 rounded-[40px] border border-gray-100 space-y-6">
                                <h4 className="text-xl font-black text-primary uppercase tracking-tighter">Resources</h4>
                                <div className="space-y-3">
                                    <button className="w-full flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 hover:border-secondary transition-all group">
                                        <div className="flex items-center gap-3">
                                            <FileText className="w-5 h-5 text-primary" />
                                            <span className="text-sm font-bold text-gray-700">IQAC Action Plan</span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary transition-all" />
                                    </button>
                                    <button className="w-full flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 hover:border-secondary transition-all group">
                                        <div className="flex items-center gap-3">
                                            <FileText className="w-5 h-5 text-primary" />
                                            <span className="text-sm font-bold text-gray-700">Meeting Minutes</span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary transition-all" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default IQACPage;
