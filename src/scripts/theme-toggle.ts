import { useEffect } from "react";


export function setupThemeToggle(buttonId: string) {
	const html = document.documentElement;
	const stored = localStorage.getItem("theme");
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

	const initialTheme = stored || (prefersDark ? "dark" : "light");
	html.classList.add(initialTheme);
	const button = document.getElementById(buttonId);

	if (!button) return;
	button.innerText = initialTheme === 'dark' ? '☀️' : '🌙';

	button.addEventListener("click", () => {
		const current = html.classList.contains("dark") ? "dark" : "light";
		const next = current === "light" ? "dark" : "light";

		html.classList.remove(current);
		html.classList.add(next);
		button.innerText = next === 'dark' ? '☀️' : '🌙';
		localStorage.setItem("theme", next);
	});
}


export default function ThemeScript() {
	useEffect(() => {
		setupThemeToggle("theme-toggle");
	}, []);

	return null;
}