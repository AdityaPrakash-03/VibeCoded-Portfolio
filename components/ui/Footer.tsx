import { Github, Linkedin, Twitter, FileText } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative z-10 bg-[#0a0a0a] text-white py-16 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Recruitment Note */}
                <div className="text-center md:text-left max-w-lg">
                    <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                        Let's Build Something Amazing
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                        I'm currently open to new opportunities. Visit my Notion and X to get to know me better—I'm ready to bring my "AI stuff" energy to your team.
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-6">
                    <SocialLink href="https://www.linkedin.com/in/adityaprakash0302/" icon={<Linkedin size={24} />} label="LinkedIn" />
                    <SocialLink href="https://github.com/AdityaPrakash-03" icon={<Github size={24} />} label="GitHub" />
                    <SocialLink href="https://x.com/Adi_03_02" icon={<Twitter size={24} />} label="X (Twitter)" />
                    <SocialLink href="https://adityaaaaa.notion.site/IT-s-ME-2fae2b621766807d94a1d7de41fb681c" icon={<FileText size={24} />} label="Notion CV" />
                </div>
            </div>

            <div className="mt-12 text-center text-sm text-gray-600">
                <p>© {new Date().getFullYear()} Aditya Prakash. Built with Vibe coding and antigravity.</p>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
            aria-label={label}
        >
            {icon}
        </a>
    )
}
