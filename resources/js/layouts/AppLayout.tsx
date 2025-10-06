import { Link } from '@inertiajs/react';
import React from 'react';

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            {/* 🧭 Navbar */}
            <nav className="bg-white shadow-sm">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-6">
                        <Link
                            href="/"
                            className="text-lg font-semibold text-gray-800 hover:text-blue-600"
                        >
                            WKV e.V.
                        </Link>

                        <Link
                            href="/"
                            className="text-gray-600 hover:text-blue-600"
                        >
                            Startseite
                        </Link>

                        <Link
                            href="/dashboard"
                            className="text-gray-600 hover:text-blue-600"
                        >
                            Dashboard
                        </Link>

                        <Link
                            href="/login"
                            className="text-gray-600 hover:text-blue-600"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </nav>

            {/* 📄 Seiteninhalt */}
            <main className="flex-grow">{children}</main>

            {/* ⚙️ Footer */}
            <footer className="bg-gray-100 py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} kanuwolmirstedt.de
            </footer>
        </div>
    );
}
