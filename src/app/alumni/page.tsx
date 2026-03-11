"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Users, GraduationCap, Globe, Briefcase, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const alumniStats = [
    { label: "Total Members", value: "25k+", icon: <Users className="w-5 h-5" /> },
    { label: "Global Presence", value: "40+ Countries", icon: <Globe className="w-5 h-5" /> },
    { label: "Industry Leaders", value: "500+", icon: <Briefcase className="w-5 h-5" /> },
];

const AlumniPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="Alumni Network"
                subtitle="Celebrating the legacy and success of our global alumni community."
                breadcrumb="Alumni"
                bgImage="https://www.gcee.ac.in/assets/img/main/img3.jpg"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
                        <div className="flex-1 space-y-8">
                            <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase rounded-full border border-primary/10">
                                Once a GCEEian, Always a GCEEian
                            </div>
                            <h2 className="text-4xl font-bold font-heading text-primary leading-tight italic underline decoration-secondary decoration-4 underline-offset-8">Distinguished Alumni Association</h2>
                            <p className="text-lg text-gray-500 font-body leading-relaxed max-w-xl">
                                Our alumni are our greatest brand ambassadors. From pioneering engineers to visionary entrepreneurs,
                                the GCE Erode legacy is spread across the globe. The GCEE Alumni Association (IRTT Alumni)
                                works to strengthen the bond between our former students and their alma mater.
                            </p>

                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                                {alumniStats.map((stat) => (
                                    <div key={stat.label} className="p-6 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center space-y-2 group hover:bg-white hover:shadow-xl transition-all">
                                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                            {stat.icon}
                                        </div>
                                        <div className="text-xl font-black text-primary font-heading tracking-tight">{stat.value}</div>
                                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 relative">
                            <div className="aspect-square bg-gray-100 rounded-[80px] overflow-hidden shadow-2xl rotate-3 relative hover:rotate-0 transition-all duration-700">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtObVnaxnn-poArrh6LiueX-DVuLnj0wxb5g&s"
                                    alt="Alumni Reunion"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity"></div>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="p-12 bg-primary rounded-[60px] text-white space-y-8 relative overflow-hidden group">
                            <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                                <GraduationCap className="w-64 h-64" />
                            </div>
                            <h3 className="text-3xl font-bold font-heading relative z-10 italic">Join the Global Registry</h3>
                            <p className="text-white/60 font-body relative z-10 max-w-md">
                                Reconnect with your batchmates, mentor current students, and stay updated with campus developments.
                                Register now with the official GCEE Alumni Database.
                            </p>
                            <a
                                href="https://www.irttalumni.org/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-5 bg-secondary text-primary font-black rounded-2xl shadow-xl hover:shadow-secondary/30 transition-all flex items-center relative z-10 group/btn uppercase tracking-widest text-xs"
                            >
                                Alumni Registration <ArrowRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                            </a>
                        </div>

                        <div className="p-12 bg-gray-50 rounded-[60px] border border-gray-100 space-y-8 relative overflow-hidden group">
                            <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                                <Award className="w-64 h-64" />
                            </div>
                            <h3 className="text-3xl font-bold font-heading text-primary relative z-10 italic">Alumni Interaction Program</h3>
                            <p className="text-gray-400 font-body relative z-10 max-w-md">
                                Under our IIP (Industry-Institute Partnership), we host monthly webinars and workshops
                                conducted by our distinguished alumni for final year students.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                                <a href="/contact" className="px-8 py-5 bg-primary text-white font-black rounded-2xl shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center uppercase tracking-widest text-xs flex-1">
                                    Propose a Session
                                </a>
                                <a
                                    href="https://www.irttalumni.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-5 bg-white text-primary border-2 border-primary/10 font-black rounded-2xl hover:bg-white transition-all flex items-center justify-center uppercase tracking-widest text-xs flex-1 group/site"
                                >
                                    Visit Alumni Site <Globe className="ml-2 w-4 h-4 text-secondary group-hover/site:rotate-12 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AlumniPage;
