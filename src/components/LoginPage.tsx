// components/LoginPage.tsx
import type { ChangeEvent, SyntheticEvent } from "react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import api from "../app/api";
interface LoginPageProps {
    onLogin?: (loggedIn: boolean) => void;
}


interface LoginResponse {
    access: string;
    refresh: string;
}
export default function LoginPage({ onLogin }: LoginPageProps) {
    const [form, setForm] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await api.post<LoginResponse>(
                "token/",
                {
                    username: form.username,
                    password: form.password,
                }
            );

            const data = response.data;

            localStorage.setItem("access", data.access);
            localStorage.setItem("refresh", data.refresh);

            onLogin?.(true);

        } catch (err: any) {
            if (err.response?.data?.detail) {
                setError(err.response.data.detail); // DRF uses "detail"
            } else {
                setError("Invalid credentials or server error");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="
            min-h-screen flex items-center justify-center
            bg-gradient-to-br from-sky-300 via-indigo-400 to-pink-400
            dark:from-slate-950 dark:via-indigo-900 dark:to-pink-600
            ">
            <ThemeToggle />
            <div className="w-full max-w-md rounded-2xl p-8 
                bg-white/10 dark:bg-slate-900/40 
                backdrop-blur-xl 
                border border-white/20 dark:border-white/10 
                shadow-2xl">
                <h2 className="text-3xl font-bold text-white text-center mb-6">
                    Welcome Back
                </h2>
                <p className="text-center text-white/70 mb-4">
                    Please login to your account
                </p>

                {error && <p className="text-orange-700 text-sm text-center mb-4">{error}</p>}

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Username or Email
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            placeholder="Enter username or email"
                            className="w-full px-4 py-2 rounded-lg 
                            bg-white/10 dark:bg-white/5 
                            border border-white/20 
                            text-white placeholder-white/50 
                            focus:outline-none 
                            focus:ring-2 focus:ring-pink-400 focus:border-transparent
                            transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className="w-full px-4 py-2 rounded-lg 
                            bg-white/10 dark:bg-white/5 
                            border border-white/20 
                            text-white placeholder-white/50 
                            focus:outline-none 
                            focus:ring-2 focus:ring-pink-400 focus:border-transparent
                            transition"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-gray-600">
                            <input type="checkbox" className="accent-indigo-500" />
                            Remember me
                        </label>
                        <a href="#" className="text-indigo-500 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="
                        w-full py-2 rounded-lg font-semibold text-white shadow-lg transition active:scale-[0.98] disabled:opacity-50
                        
                        bg-indigo-600 hover:bg-indigo-700
                        
                        dark:bg-gradient-to-r dark:from-pink-500 dark:via-purple-600 dark:to-indigo-500
                        dark:hover:opacity-90
                        "
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </button>
                </form>

                <p className="text-center text-gray-500 text-sm mt-6">
                    Don’t have an account?{" "}
                    <a href="#" className="text-indigo-500 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}