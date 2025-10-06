import { Head, Link } from '@inertiajs/react';

export default function Home({ title }: { title: string }) {
    return (
        <>
            <Head title="Wolmirstedter Kanu-Verein e.V." />

            {/* 🧭 Navigation */}
            <nav className="bg-white shadow-sm">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-6">
                        <Link
                            href="/"
                            className="text-lg font-semibold text-gray-800 hover:text-blue-600"
                        >
                            Wolmirstedter Kanu-Verein e.V.
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

            <main>
                <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
                    <h1 className="mb-4 text-4xl font-bold text-gray-800">
                        {title}
                    </h1>
                    <p className="text-lg text-gray-600">
                        Das ist deine öffentliche Laravel 12 + React Startseite
                        mit Inertia!
                    </p>
                </div>
            </main>

            {/* ⚙️ Footer */}
            <footer className="bg-gray-100 py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} kanuwolmirstedt.de
            </footer>
        </>
    );
}
