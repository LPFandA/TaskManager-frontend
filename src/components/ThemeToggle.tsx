import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="fixed top-4 right-4 z-50">
            <button
                onClick={toggleTheme}
                className="
                    px-4 py-2 rounded-lg shadow
                    bg-white dark:bg-gray-800
                    text-black dark:text-white
                    hover:scale-105 transition
                "
            >
                {theme === "dark" ? "☀️" : "🌙"}
            </button>
        </div>
    );
}