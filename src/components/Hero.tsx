"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Building2, TrendingUp } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://www.gcee.ac.in/assets/img/sliders/layer/Slideimage_Admin.jpg"
                    alt="GCEE Campus"
                    className="w-full h-full object-cover scale-105 animate-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center space-x-2 bg-secondary/10 backdrop-blur-md px-4 py-2 rounded-full border border-secondary/20 mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
                            <span className="text-secondary text-xs font-bold tracking-widest uppercase">Empowering Innovation Since 1984</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold font-heading text-white leading-[1.1] mb-6">
                            Shaping the <span className="text-secondary">Engineers</span> of Tomorrow
                        </h1>

                        <p className="text-xl text-white/80 font-body leading-relaxed mb-10 max-w-xl">
                            Quality engineering education for the underprivileged and economically weaker sections.
                            Join a legacy of technical excellence at Government College of Engineering, Erode.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/admissions"
                                className="px-8 py-4 bg-secondary text-primary font-bold rounded-xl flex items-center justify-center hover:shadow-[0_0_20px_rgba(244,196,48,0.4)] hover:-translate-y-1 transition-all group"
                            >
                                Apply Now
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/departments"
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl flex items-center justify-center hover:bg-white/20 hover:-translate-y-1 transition-all"
                            >
                                Explore Departments
                            </Link>
                        </div>

                        {/* Quick Stats Preview */}
                        <div className="mt-16 grid grid-cols-3 gap-8">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-secondary">40+</span>
                                <span className="text-xs text-white/60 tracking-wider">YEARS LEGACY</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-secondary">15+</span>
                                <span className="text-xs text-white/60 tracking-wider">TOP RECRUITERS</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-secondary">200</span>
                                <span className="text-xs text-white/60 tracking-wider">ACRES CAMPUS</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Feature Cards */}

                    {/* <div className="hidden lg:flex flex-col space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="ml-auto w-72 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl skew-y-3 hover:skew-y-0 hover:translate-x--4 transition-all duration-500"
                        >
                            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
                                <GraduationCap className="text-primary w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Excellence</h3>
                            <p className="text-sm text-white/60">Quality engineering education under Directorate of Technical Education.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mr-auto w-72 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl -skew-y-3 hover:skew-y-0 hover:translate-x-4 transition-all duration-500"
                        >
                            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                                <TrendingUp className="text-white w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Placements</h3>
                            <p className="text-sm text-white/60">38.5 LPA Highest package in ME (CSE). Consistent record with top recruiters.</p>
                        </motion.div>
                    </div>  */}
                </div>
            </div>

        </section>
    );
};

export default Hero;
