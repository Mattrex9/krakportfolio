'use client';

import { useState, useRef } from 'react';

const Music = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  // Initialize audio context
  const getAudioContext = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  };

  // Piano notes with frequencies (3 octaves: C3 to B5)
  const pianoNotes = [
    { note: 'C3', frequency: 130.81, label: 'C' },
    { note: 'C#3', frequency: 138.59, label: 'C#' },
    { note: 'D3', frequency: 146.83, label: 'D' },
    { note: 'D#3', frequency: 155.56, label: 'D#' },
    { note: 'E3', frequency: 164.81, label: 'E' },
    { note: 'F3', frequency: 174.61, label: 'F' },
    { note: 'F#3', frequency: 185.0, label: 'F#' },
    { note: 'G3', frequency: 196.0, label: 'G' },
    { note: 'G#3', frequency: 207.65, label: 'G#' },
    { note: 'A3', frequency: 220.0, label: 'A' },
    { note: 'A#3', frequency: 233.08, label: 'A#' },
    { note: 'B3', frequency: 246.94, label: 'B' },
    { note: 'C4', frequency: 261.63, label: 'C' },
    { note: 'C#4', frequency: 277.18, label: 'C#' },
    { note: 'D4', frequency: 293.66, label: 'D' },
    { note: 'D#4', frequency: 311.13, label: 'D#' },
    { note: 'E4', frequency: 329.63, label: 'E' },
    { note: 'F4', frequency: 349.23, label: 'F' },
    { note: 'F#4', frequency: 369.99, label: 'F#' },
    { note: 'G4', frequency: 392.0, label: 'G' },
    { note: 'G#4', frequency: 415.3, label: 'G#' },
    { note: 'A4', frequency: 440.0, label: 'A' },
    { note: 'A#4', frequency: 466.16, label: 'A#' },
    { note: 'B4', frequency: 493.88, label: 'B' },
    { note: 'C5', frequency: 523.25, label: 'C' },
    { note: 'C#5', frequency: 554.37, label: 'C#' },
    { note: 'D5', frequency: 587.33, label: 'D' },
    { note: 'D#5', frequency: 622.25, label: 'D#' },
    { note: 'E5', frequency: 659.25, label: 'E' },
    { note: 'F5', frequency: 698.46, label: 'F' },
    { note: 'F#5', frequency: 739.99, label: 'F#' },
    { note: 'G5', frequency: 783.99, label: 'G' },
    { note: 'G#5', frequency: 830.61, label: 'G#' },
    { note: 'A5', frequency: 880.0, label: 'A' },
    { note: 'A#5', frequency: 932.33, label: 'A#' },
    { note: 'B5', frequency: 987.77, label: 'B' },
  ];

  // Guitar strings (standard tuning: E2, A2, D3, G3, B3, E4)
  const guitarStrings = [
    { string: 'E', frequency: 82.41, frets: 18 },
    { string: 'A', frequency: 110.0, frets: 18 },
    { string: 'D', frequency: 146.83, frets: 18 },
    { string: 'G', frequency: 196.0, frets: 18 },
    { string: 'B', frequency: 246.94, frets: 18 },
    { string: 'e', frequency: 329.63, frets: 18 },
  ];

  const playNote = (frequency: number) => {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.5);
  };

  const PianoKey = ({ note, frequency }: { note: string; frequency: number }) => {
    const isBlackKey = note.includes('#');
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(true);
      playNote(frequency);
      setTimeout(() => setIsActive(false), 500);
    };

    return (
      <button
        onClick={handleClick}
        className={`transition-all duration-200 ${
          isBlackKey
            ? `w-8 h-24 bg-black border border-gray-800 rounded-b-lg shadow-lg hover:bg-gray-800 mx-[-16px] z-10 ${
                isActive ? 'scale-95 shadow-inner' : 'hover:shadow-xl'
              }`
            : `w-12 h-32 bg-white border-2 border-gray-300 rounded-b-lg shadow-lg hover:bg-gray-100 ${
                isActive ? 'scale-95 shadow-inner' : 'hover:shadow-xl'
              }`
        }`}
        title={note}
      />
    );
  };

  const GuitarFretboard = () => {
    const [activeNote, setActiveNote] = useState<string | null>(null);

    const handleFretClick = (stringIndex: number, fretNumber: number) => {
      const string = guitarStrings[stringIndex];
      const baseFreq = string.frequency;
      // Each semitone is a factor of 2^(1/12)
      const semitone = Math.pow(2, 1 / 12);
      const frequency = baseFreq * Math.pow(semitone, fretNumber);

      setActiveNote(`${stringIndex}-${fretNumber}`);
      playNote(frequency);
      setTimeout(() => setActiveNote(null), 300);
    };

    return (
      <div className="flex flex-col items-center space-y-2">
        <h4 className="text-lg font-semibold text-slate-900 mb-4">Guitar Fretboard</h4>
        <div className="bg-amber-900 p-4 rounded-lg overflow-x-auto">
          <div className="space-y-1">
            {guitarStrings.map((string, stringIndex) => (
              <div key={stringIndex} className="flex items-center gap-2">
                <div className="w-10 text-center font-bold text-white text-sm">{string.string}</div>
                <div className="flex gap-0 bg-amber-950 rounded-sm overflow-hidden">
                  {Array.from({ length: 19 }).map((_, fretNumber) => (
                    <button
                      key={fretNumber}
                      onClick={() => handleFretClick(stringIndex, fretNumber)}
                      className={`h-8 w-10 border-r border-yellow-600 transition-all flex items-center justify-center text-xs font-semibold ${
                        activeNote === `${stringIndex}-${fretNumber}`
                          ? 'bg-blue-500 text-white'
                          : 'bg-amber-100 hover:bg-amber-200 text-slate-700'
                      }`}
                      title={`${string.string}${fretNumber}`}
                    >
                      {[3, 5, 7, 9, 15, 17].includes(fretNumber) ? '●' : fretNumber === 12 ? '●●' : ''}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-4 text-xs text-amber-900 font-medium">
            {Array.from({ length: 19 }).map((_, i) => (
              <div key={i} className="w-10 text-center">{i}</div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 text-sm text-slate-600 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-amber-100 border-2 border-yellow-600"></div>
            <span>Fret</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500"></div>
            <span>Active Note</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="music" className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Intro */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Music</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">A Passion Since Childhood</h2>
        </div>

        <p className="text-lg text-slate-700 mb-16 max-w-3xl">
          Music has always been integral to my life. I have practiced every day and it is an essential part of my identity.
        </p>

        {/* Piano Section */}
        <div className="mb-16">
          <div className="bg-white border border-slate-200 shadow-lg rounded-3xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Piano</h3>
            <p className="text-slate-700 mb-6">
              I have been playing piano since I was five years old and continue to play regularly. Growing up, I competed in piano competitions and spent countless hours in rehearsals, developing discipline and a deep appreciation for classical music and performance.
            </p>
            <div className="bg-gray-100 p-6 rounded-2xl flex justify-center overflow-x-auto">
              <div className="flex justify-center gap-0">
                {pianoNotes.map((note) => (
                  <div key={note.note} className="relative">
                    <PianoKey note={note.note} frequency={note.frequency} />
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-slate-600 text-center mt-6">Click on any key to play the note</p>
          </div>
        </div>

        {/* Guitar Section */}
        <div className="mb-16">
          <div className="bg-white border border-slate-200 shadow-lg rounded-3xl p-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Guitar</h3>
            <p className="text-slate-700 mb-6">
              I have been playing guitar more recently and have absolutely fallen in love with it. Playing with friends and making music together has become my favorite pastime, and it's what I've been spending a lot of my time with now.
            </p>
            <div className="bg-gray-100 p-6 rounded-2xl flex justify-center">
              <GuitarFretboard />
            </div>
            <p className="text-xs text-slate-600 text-center mt-6">Click on any fret to play the note</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
