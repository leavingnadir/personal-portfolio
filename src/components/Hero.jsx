/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState, createElement, useMemo, useCallback } from "react";
import { gsap } from "gsap";
import { FiTerminal, FiShield, FiArrowRight } from "react-icons/fi";

/* -------------------- TextType Component -------------------- */
const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef(null);
  const containerRef = useRef(null);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return;
    return textColors[currentTextIndex % textColors.length];
  };

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout;

    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode
      ? currentText.split("").reverse().join("")
      : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === "") {
          setIsDeleting(false);
          if (currentTextIndex === textArray.length - 1 && !loop) {
            return;
          }

          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
          }

          setCurrentTextIndex(prev => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText(prev => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(
            () => {
              setDisplayedText(prev => prev + processedText[currentCharIndex]);
              setCurrentCharIndex(prev => prev + 1);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed
          );
        } else if (textArray.length > 1) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
      ...props,
    },
    <span className="inline" style={{ color: getCurrentTextColor() || "inherit" }}>
      {displayedText}
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={`ml-1 inline-block opacity-100 ${
          shouldHideCursor ? "hidden" : ""
        } ${cursorClassName}`}
      >
        {cursorCharacter}
      </span>
    )
  );
};

/* -------------------- Hero Component -------------------- */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-12 overflow-hidden isolate">
      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-20">
        
        {/* Left Column: Main Identity & Terminal Typing */}
        <div className="lg:col-span-8 text-left space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-midnight/80 border border-violet/30 backdrop-blur-md shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
            </span>
            <span className="font-mono text-xs tracking-wider text-neutral-300 uppercase">
              SYSTEM_STATUS: SECURE & ONLINE
            </span>
          </div>

          <div className="space-y-2">
            <p className="font-mono text-violet text-sm md:text-base tracking-widest uppercase">
              // HELLO_WORLD, MY NAME IS
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-mono text-white tracking-tight">
              Hirusha <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet via-neon to-white">Ranaweera</span>
            </h1>
          </div>

          {/* Typing Role Box */}
          <div className="p-4 rounded-2xl bg-midnight/60 border border-white/5 backdrop-blur-md max-w-2xl shadow-xl">
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/5 font-mono text-xs text-neutral-500">
              <FiTerminal className="text-violet" />
              <span>ACTIVE_SPECIALIZATION_DAEMON</span>
            </div>
            <TextType
              className="text-xl sm:text-2xl font-mono font-medium text-neon"
              text={[
                "DevSecOps & Cloud Infrastructure",
                "Application Security & Network Engineering",
                "Distributed Systems & Web3 DApps"
              ]}
              typingSpeed={60}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="_"
            />
          </div>

          <p className="text-neutral-400 text-sm sm:text-base max-w-xl leading-relaxed">
            SLIIT IT undergraduate, founder of Leaving Nadir LLP, and security enthusiast building robust, scalable digital ecosystems from Sri Lanka.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="../Projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet hover:bg-violet/80 text-white font-mono text-xs tracking-wider uppercase shadow-lg shadow-violet/20 transition-all hover:-translate-y-0.5"
            >
              <span>Explore Systems</span>
              <FiArrowRight className="size-4" />
            </a>

            <a
              href="../About"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-midnight/80 hover:bg-indigo/40 border border-white/10 text-neutral-300 hover:text-white font-mono text-xs tracking-wider uppercase backdrop-blur-md transition-all hover:-translate-y-0.5"
            >
              <FiShield className="size-4 text-violet" />
              <span>Security Dossier</span>
            </a>
          </div>

        </div>

        {/* Right Column: Floating Telemetry Card */}
        <div className="lg:col-span-4 hidden lg:flex justify-center">
          <div className="relative w-full max-w-xs p-6 rounded-3xl bg-midnight/80 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-white/5 font-mono text-xs text-neutral-400">
              <span>TELEMETRY.SEC</span>
              <span className="text-neon">LK_NODE</span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-3 rounded-xl bg-indigo/30 border border-white/5">
                <span className="text-neutral-500 block mb-1">LOCATION</span>
                <span className="text-white font-medium">Malabe / Kandy, LK</span>
              </div>

              <div className="p-3 rounded-xl bg-indigo/30 border border-white/5">
                <span className="text-neutral-500 block mb-1">CURRENT_FOCUS</span>
                <span className="text-neon font-medium">CyberOps & Cloud Sec</span>
              </div>

              <div className="p-3 rounded-xl bg-indigo/30 border border-white/5">
                <span className="text-neutral-500 block mb-1">ENTERPRISE</span>
                <span className="text-white font-medium">Leaving Nadir LLP</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="w-full h-1.5 bg-indigo/40 rounded-full overflow-hidden">
                <div className="w-4/5 h-full bg-gradient-to-r from-violet to-neon rounded-full animate-pulse" />
              </div>
              <div className="flex justify-between items-center mt-2 font-mono text-[10px] text-neutral-500">
                <span>SYSTEM_INTEGRITY</span>
                <span className="text-neon">99.9%</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}