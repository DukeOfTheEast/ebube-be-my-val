"use client";

import React, { useState, useEffect } from "react";

export default function ValentineProposal() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showBomb, setShowBomb] = useState(false);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate floating hearts
    const newHearts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
      size: 20 + Math.random() * 30,
    }));
    setHearts(newHearts);
  }, []);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  useEffect(() => {
    if (showBomb) {
      const timer = setTimeout(() => setShowBomb(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showBomb]);

  const handleYes = () => {
    setShowConfetti(true);
    setShowBomb(false);
  };

  const handleNo = () => {
    setShowBomb(true);
    setShowConfetti(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-300 via-red-200 to-pink-400 overflow-hidden flex items-center justify-center">
      {/* Floating Hearts Background */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-red-500 opacity-60 animate-float pointer-events-none"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}px`,
            bottom: "-50px",
          }}
        >
          ❤️
        </div>
      ))}

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: "-20px",
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: [
                    "#ff69b4",
                    "#ff1493",
                    "#ff6b9d",
                    "#ffc0cb",
                    "#ff69b4",
                    "#ffb6c1",
                  ][Math.floor(Math.random() * 6)],
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Bomb Explosion Effect */}
      {showBomb && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div className="animate-explosion">
            <div className="text-9xl mb-4 animate-bounce">💣</div>
            <div className="bg-black text-red-500 px-8 py-4 rounded-lg text-3xl font-bold border-4 border-red-600 shadow-2xl animate-pulse">
              Ebube, that's not cool! 😤
            </div>
          </div>
          {/* Explosion particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-explode"
              style={{
                left: "50%",
                top: "50%",
                animationDelay: `${Math.random() * 0.2}s`,
              }}
            >
              <div
                className="w-4 h-4 bg-orange-500 rounded-full"
                style={{
                  transform: `rotate(${i * 12}deg) translateY(-${50 + Math.random() * 100}px)`,
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 font-serif">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 drop-shadow-2xl animate-pulse">
          Will You Be
        </h1>
        <h2 className="text-5xl md:text-9xl font-bold text-red-600 mb-4 drop-shadow-2xl animate-bounce">
          My Valentine? 💕
        </h2>
        <p className="italic text-red-400 text-sm mb-12">
          No other person would i be delighted to ask this.....
        </p>

        <div className="flex sm:flex-row flex-col gap-8 mb-7 sm:mb-0 justify-center items-center">
          {/* YES Button */}
          <button
            onClick={handleYes}
            className="bg-red-400 hover:bg-red-600 text-white text-3xl font-bold py-4 px-12 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
          >
            YES! 💚
          </button>

          {/* NO Button */}
          <button
            onClick={handleNo}
            className="text-red-600 text-3xl font-bold py-4 px-12 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border border-red-500"
          >
            NO
          </button>
        </div>

        {showConfetti && (
          <div className="mt-8 text-4xl font-bold text-white drop-shadow-lg animate-bounce">
            Yay! Best Valentine Ever! 🎉❤️
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes explosion {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes explode {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(0);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-confetti {
          animation: confetti ease-in forwards;
        }

        .animate-explosion {
          animation: explosion 0.5s ease-out;
        }

        .animate-explode {
          animation: explode 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
