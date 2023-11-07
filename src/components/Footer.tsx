import React from "react";

const Footer = () => {
    return (
        <footer className="py-5 flex justify-center transition-colors backdrop-blur bg-white/40 supports-backdrop-blur:bg-white/40 border-t border-slate-900/10">
            <a
                className="text-secondary link-underline link-underline-opacity-0 text-slate-500 font-medium"
                href="https://prometheus.org.ua/"
                target="_blank"
                rel="noreferrer">
                Виконано в Prometheus © 2023
            </a>
        </footer>
    );
};

export default Footer;
