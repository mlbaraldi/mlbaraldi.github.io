'use client'

import { useState } from 'react';
import { Frame, Keyframes } from "./react-keyframes";

const sleepDuration = 500
const getTypingDuration = () => 80 + 80 * (Math.random() - 0.5)


const Line = ({ text, noPrompt = false, noCaret = false }: { text: string, noPrompt?: boolean, noCaret?: boolean }) => (
  <>
    {!noPrompt && <span className="text-green-500">▲ / ~  </span>}
    {text}
    {!noCaret && <span className="text-green-500 bg-black inline-block w-2 h-15 relative bottom-1 align-middle">|</span>}
  </>
);


const Terminal = () => {
  const [lineCount, setLineCount] = useState(0);

  const renderLine = (text: string) => {
    const frames = [];

    // starting frame
    frames.push(
      <Frame duration={sleepDuration} key={`${text}-first`}>
        <Line text="" />
      </Frame>
    );

    // typing out the line
    for (let i = 0; i < text.length; i++) {
      const isLastLetter = i === text.length - 1;
      const duration = isLastLetter ? sleepDuration : getTypingDuration();
      frames.push(
        <Frame duration={duration} key={`${text}-${i}`}>
          <Line text={text.slice(0, i + 1)} />
        </Frame>
      );
    }

    // ending frame
    frames.push(
      <Frame key={`${text}-last`}>
        <Line text={text} noCaret />
      </Frame>
    );

    return (
      <Keyframes component="p" onEnd={() => setLineCount((c) => c + 1)}>
        {frames}
      </Keyframes>
    );
  };

  return (
    <div className="h-[300px] w-[500px] bg-gray-900 rounded-2xl p-4 bg-opacity-80">
      <div
        className={`relative flex flex-col h-full border-1 border-solid border-[#333] bg-var(--bg) text-var(--fg) font-var(--font-mono) leading-1.5 text-base whitespace-pre-wrap break-all ${lineCount >= 5 ? 'rose' : ''
          }`}
      >
        <div className="inline-flex justify-start items-center">
          <span className="bg-[#FF5F56] h-3 w-3 rounded-full mr-2"></span>
          <span className="bg-[#FFBD2E] h-3 w-3 rounded-full mr-2"></span>
          <span className="bg-[#27C93F] h-3 w-3 rounded-full mr-2"></span>
        </div>
        <div className="flex-1 p-12 text-white font-light">
          {renderLine('Personal page - mlbaraldi')}
          {lineCount >= 1 && renderLine('Made with Next.js 14 and TailwindCSS')}
          {lineCount >= 2 &&
            renderLine('Open source on Github')}
          {lineCount >= 3 && renderLine('pnpn run dev')}
          {lineCount >= 4 && renderLine(' ')}
          {lineCount >= 5 && (
            <>
              <p className="text-[#1DC121] font-black">
                <Line
                  text="Welcome!"
                  noPrompt
                  noCaret
                />
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal