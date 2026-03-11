"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Mail, Phone, MapPin, Clock, Send, ChevronRight, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="Get In Touch"
                subtitle="We're here to answer your questions and help you navigate your academic journey."
                breadcrumb="Contact Us"
            />

            <section className="py-24 relative overflow-hidden">
                {/* Decorative Circles */}
                <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="absolute top-20 right-20 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                        {/* Contact Info Column */}
                        <div className="lg:w-1/3 space-y-12">
                            <div className="space-y-4">
                                <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase rounded-full border border-primary/10">
                                    Quick Details
                                </div>
                                <h2 className="text-4xl font-bold font-heading text-primary leading-tight">Reach Our Campus</h2>
                                <p className="text-gray-500 font-body leading-relaxed">
                                    Have specific queries? Contact our administrative office for assistance
                                    regarding admissions, academics or placements.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {[
                                    { icon: <MapPin className="w-6 h-6" />, label: "College Address", value: "Government College of Engineering, Chithode, Erode - 638316, Tamil Nadu" },
                                    { icon: <Phone className="w-6 h-6" />, label: "Primary Contact", value: "0424 2533579, 9443630000" },
                                    { icon: <Mail className="w-6 h-6" />, label: "Official Email", value: "gceeprincipal@gmail.com" },
                                    { icon: <Clock className="w-6 h-6" />, label: "Office Hours", value: "Mon - Fri: 9:00 AM - 5:00 PM" },
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start space-x-6 group cursor-pointer"
                                    >
                                        <div className="w-14 h-14 bg-white shadow-lg shadow-gray-100 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0 border border-gray-100">
                                            {item.icon}
                                        </div>
                                        <div className="space-y-1">
                                            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.label}</div>
                                            <div className="text-lg font-bold text-primary group-hover:translate-x-1 transition-transform">{item.value}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-gray-100 flex items-center space-x-6">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Connect:</span>
                                <div className="flex space-x-4">
                                    {['FB', 'TW', 'LN', 'IG'].map((social) => (
                                        <button key={social} className="w-10 h-10 rounded-full bg-primary/5 hover:bg-secondary flex items-center justify-center text-primary transition-all font-black text-[10px]">{social}</button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Column */}
                        <div className="flex-1">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 lg:p-12 rounded-[50px] shadow-2xl border border-gray-50 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                                    <Send className="w-32 h-32" />
                                </div>

                                <h3 className="text-2xl font-bold font-heading text-primary mb-8">Send Us a Message</h3>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Full Name</label>
                                            <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Email Address</label>
                                            <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Phone Number</label>
                                            <input type="text" placeholder="+91 00000 00000" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Inquiry Type</label>
                                            <select className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none">
                                                <option>General Inquiry</option>
                                                <option>Admissions</option>
                                                <option>Placements</option>
                                                <option>Academic Certification</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Your Message</label>
                                        <textarea rows={4} placeholder="How can we help you?" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none resize-none" />
                                    </div>

                                    <div className="pt-4">
                                        <button type="submit" className="w-full py-5 bg-primary text-white font-bold rounded-2xl flex items-center justify-center shadow-xl hover:shadow-primary/30 group hover:-translate-y-1 transition-all">
                                            Send Secure Message
                                            <span className="ml-3 text-secondary group-hover:translate-x-2 transition-transform">→</span>
                                        </button>
                                        <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-6 italic">We typically respond within 24-48 business hours.</p>
                                    </div>
                                </form>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[500px] w-full bg-gray-200 relative">
                <div className="absolute inset-0 bg-primary/10 pointer-events-none z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center z-20">
                    <div className="p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl max-w-sm space-y-4">
                        <h3 className="text-2xl font-bold text-primary font-heading">Find Us on Campus</h3>
                        <p className="text-gray-500 font-body text-sm">Our 200-acre campus is located conveniently between Chithode and Bhavani in Erode.</p>
                        <button className="flex items-center mx-auto text-primary font-bold hover:text-secondary group transition-colors">
                            Open in Google Maps <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
                {/* Placeholder for iframe map */}
                <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center text-gray-300 font-bold text-2xl uppercase tracking-widest italic">
                    Map Implementation Block
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ContactPage;
