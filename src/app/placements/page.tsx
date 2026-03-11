"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Award, Briefcase, GraduationCap, Building2, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const recruiters = [
    "CTS", "ZOHO", "TCS", "Tech Mahindra", "TAFE", "Polaris", "NOKIA", "Infoview",
    "Infosys", "IBM", "HCL", "CSS Corp", "Capgemini", "CADENCE", "Hexaware"
];

const highlights = [
    { student: "V. Krishnamoorthy", dept: "M.E. CSE", company: "SIERRA Support Centre", package: "38.5 LPA" },
    { student: "R. Gowtham", dept: "B.E. ECE", company: "CADENCE Design Systems", package: "20.49 LPA" },
    { student: "C. Sahana Priya", dept: "B.E. ECE", company: "CADENCE Design Systems", package: "20.49 LPA" },
];

const PlacementsPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="Placements & Career Success"
                subtitle="Empowering graduates to secure positions at top multinational corporations and engineering firms."
                breadcrumb="Placements"
            />

            {/* Stats Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: "Annual Packages up to", value: "38.5", suffix: "LPA", icon: <Award className="w-8 h-8 text-secondary" /> },
                            { label: "Recruiters Every Year", value: "15", suffix: "+", icon: <Briefcase className="w-8 h-8 text-blue-500" /> },
                            { label: "Placement Percentage", value: "92", suffix: "%", icon: <GraduationCap className="w-8 h-8 text-green-500" /> },
                            { label: "MNC Direct Partners", value: "10", suffix: "+", icon: <Building2 className="w-8 h-8 text-purple-500" /> },
                        ].map((stat) => (
                            <div key={stat.label} className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-2xl transition-all">
                                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">{stat.icon}</div>
                                <div className="text-4xl font-black text-primary font-heading line-clamp-1">{stat.value}{stat.suffix}</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center space-x-2 text-primary font-bold uppercase tracking-widest text-xs">
                                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                <span>Top Achievers 2024</span>
                            </div>
                            <h2 className="text-4xl font-bold font-heading text-primary leading-tight">Milestone Placements in Top Tech Giants</h2>
                            <p className="text-lg text-gray-600 font-body leading-relaxed">
                                Our students consistently break records with their performance in competitive recruitment drives.
                                From core engineering roles to high-end tech consultations, GCEE graduates are everywhere.
                            </p>

                            <div className="space-y-4">
                                {highlights.map((h) => (
                                    <div key={h.student} className="p-6 bg-primary/5 rounded-2xl border-l-8 border-secondary flex flex-wrap justify-between items-center gap-4">
                                        <div className="space-y-1">
                                            <div className="font-bold text-primary text-xl font-heading">{h.student}</div>
                                            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{h.dept} | {h.company}</div>
                                        </div>
                                        <div className="text-2xl font-black text-primary">{h.package}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6">
                                <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:shadow-primary/30 inline-flex items-center transition-all">
                                    Full Placement Report 2024 <ArrowRight className="ml-3 w-5 h-5 text-secondary" />
                                </button>
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="relative rounded-[60px] overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-all duration-700">
                                <img src="/images/placements.png" className="w-full object-cover aspect-[4/5]" alt="Placement Success" />
                                <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-primary/90 to-transparent flex flex-col items-center text-center text-white">
                                    <div className="text-6xl font-black mb-4">92%</div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-secondary">Average Placement Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recruiter Marquee Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-16 uppercase tracking-widest">Our Top Recruiters</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                        {recruiters.map((r) => (
                            <div key={r} className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl hover:border-secondary transition-all flex items-center justify-center group border border-gray-100">
                                <span className="text-xl font-black font-heading text-gray-300 group-hover:text-primary transition-colors tracking-widest uppercase">{r}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facilities Section */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="max-w-4xl mx-auto px-4 lg:px-0 space-y-8">
                    <h2 className="text-4xl font-bold font-heading">Placement Training & Support</h2>
                    <p className="text-lg text-white/70 leading-relaxed font-body">
                        GCEE provides comprehensive pre-placement training including Soft Skills,
                        Aptitude Training, Mock Interviews, and Technical Workshops to bridge the
                        gap between academic learning and industry expectations.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex items-center space-x-3 text-secondary font-bold">
                            <CheckCircle className="w-5 h-5" />
                            <span>Dedicated Cell</span>
                        </div>
                        <div className="flex items-center space-x-3 text-secondary font-bold">
                            <CheckCircle className="w-5 h-5" />
                            <span>Regular Mock Sessions</span>
                        </div>
                        <div className="flex items-center space-x-3 text-secondary font-bold">
                            <CheckCircle className="w-5 h-5" />
                            <span>Industry Collaborations</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PlacementsPage;
