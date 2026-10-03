import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import Footer from "./components/Footer";

// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Logs from "./pages/Logs";
import Contact from "./pages/Contact";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const themeLore = {
    dark: {
      quote1: `"If you're always worried about crushing the ants beneath you, you won't be able to walk."`,
      quote2: `"I guess even if you force back what was lost... It still won't be the
          way it was."`,
      description: (
        <>
          Hey, I'm Ritesh. Usually known by the r17e8h handle. Breaking things
          and fixing them is what drives me— especially if a project has a bit
          of <em className="text-[var(--accent)] font-semibold">masti</em>{" "}
          involved. My descent into tech started when a struggling old laptop
          pushed me down the Linux rabbit hole. Since then, I've been heavily
          inclined toward FOSS. Honestly, FOSS saves lives. Outside the
          terminal, you'll find me running or playing chess.
        </>
      ),
    },
    light: {
      quote1: `"What does it mean to be strong? I want to find out."`,
      quote2: `"Ippo, you idiot — you think too much. A fist does not need to be philosophical."`,

      description: (
        <>
          Hey, I'm Ritesh. Usually known by the r17e8h handle. Breaking things
          and fixing them is what drives me—especially if a project has a bit of{" "}
          <em className="text-[var(--accent)] font-semibold">masti</em>{" "}
          involved. My descent into tech started when a struggling old laptop
          pushed me down the Linux rabbit hole. Since then, I've been heavily
          inclined toward FOSS. Honestly, FOSS saves lives. Outside the
          terminal, you'll find me running or playing chess.
        </>
      ),
    },
  };

  const currentLore = themeLore[theme as keyof typeof themeLore];

  return (
    <>
      <div className="hidden pointer-events-none" aria-hidden="true">
        <img src="/ippo-desktop.jpg" alt="preload ippo" />
        <img src="/guts-desktop.jpg" alt="preload guts" />
      </div>
      <Router>
        <AppContent
          currentLore={currentLore}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </Router>
    </>
  );
}

function AppContent({ currentLore, theme, toggleTheme }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const closeMenu = () => setIsMenuOpen(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  const linkStyle = (path: string) =>
    `relative transition-colors hover:text-[var(--accent)] ${isActive(path) ? "font-bold" : ""}`;
  const underline = (path: string) =>
    isActive(path) ? (
      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[var(--text-color)] rounded-full"></span>
    ) : null;

  return (
    <div className="min-h-screen flex flex-col text-[var(--text-color)] transition-colors duration-500 tracking-wide">
      {/* FIXED HEADER */}
      <header
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 rounded-full border border-[var(--text-color)]/20 backdrop-blur-lg shadow-sm px-6 h-14 flex items-center justify-between"
        style={{ backgroundColor: "var(--nav-bg)" }}
      >
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold hover:text-[var(--accent)] transition-colors tracking-widest"
        >
          r17e8h
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-lg uppercase font-semibold">
          <Link to="/" className={linkStyle("/")}>
            Home{underline("/")}
          </Link>
          <Link to="/about" className={linkStyle("/about")}>
            About{underline("/about")}
          </Link>
          <Link to="/projects" className={linkStyle("/projects")}>
            Projects{underline("/projects")}
          </Link>
          <Link to="/logs" className={linkStyle("/logs")}>
            Logs{underline("/logs")}
          </Link>
          <Link to="/contact" className={linkStyle("/contact")}>
            Contact{underline("/contact")}
          </Link>

          <div className="w-px h-6 bg-[var(--text-color)] opacity-30 mx-2"></div>

          <button
            onClick={toggleTheme}
            className="relative inline-flex h-6 w-12 items-center rounded-full border border-[var(--text-color)]/30 cursor-pointer"
            style={{ backgroundColor: "var(--card-bg)" }}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-[var(--text-color)] transition-transform duration-500 ease-in-out ${theme === "light" ? "translate-x-7" : "translate-x-1"}`}
            />
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="relative inline-flex h-6 w-12 items-center rounded-full border border-[var(--text-color)]/30 cursor-pointer"
            style={{ backgroundColor: "var(--card-bg)" }}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-[var(--text-color)] transition-transform duration-500 ease-in-out ${theme === "light" ? "translate-x-7" : "translate-x-1"}`}
            />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl focus:outline-none w-6 text-center"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* FLOATING MOBILE POPUP MENU */}
      {isMenuOpen && (
        <nav
          className="md:hidden fixed top-20 left-1/2 -translate-x-1/2 w-[85%] max-w-sm rounded-3xl border border-[var(--text-color)]/20 backdrop-blur-2xl py-8 flex flex-col items-center space-y-5 text-xl shadow-2xl z-50 font-bold uppercase"
          style={{ backgroundColor: "var(--card-bg)" }}
        >
          <Link to="/" onClick={closeMenu} className={linkStyle("/")}>
            Home{underline("/")}
          </Link>
          <Link to="/about" onClick={closeMenu} className={linkStyle("/about")}>
            About{underline("/about")}
          </Link>
          <Link
            to="/projects"
            onClick={closeMenu}
            className={linkStyle("/projects")}
          >
            Projects{underline("/projects")}
          </Link>
          <Link to="/logs" onClick={closeMenu} className={linkStyle("/logs")}>
            Logs{underline("/logs")}
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={linkStyle("/contact")}
          >
            Contact{underline("/contact")}
          </Link>
        </nav>
      )}

      {/* DYNAMIC ROUTING CONTAINER */}
      <main className="grow flex flex-col w-full max-w-4xl mx-auto px-4 pt-28 pb-16">
        <Routes>
          <Route path="/" element={<Home currentLore={currentLore} />} />
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="/projects" element={<Projects theme={theme} />} />
          <Route path="/logs" element={<Logs theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
