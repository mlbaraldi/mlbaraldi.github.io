'use client'

import { useState } from 'react';
import { Frame, Keyframes } from "./react-keyframes";

const sleepDuration = 500
const getTypingDuration = () => 80 + 80 * (Math.random() - 0.5)

const Line = ({ text, noPrompt = false, noCaret = false }: { text: string, noPrompt?: boolean, noCaret?: boolean }) => (
  <>
    {!noPrompt && <span className="text-[#719984]">&gt;  </span>}
    {text}
    {!noCaret && <span className="blink relative bottom-px inline-block h-4 w-2 bg-[#719984] align-middle">▮</span>}
  </>
);

const Terminal = () => {
  const [lineCount, setLineCount] = useState(0);

  const renderLine = (text: string) => {
    const frames = [];
    frames.push(
      <Frame duration={sleepDuration} key={`${text}-first`}><Line text="" /></Frame>
    );

    for (let i = 0; i < text.length; i++) {
      const isLastLetter = i === text.length - 1;
      const duration = isLastLetter ? sleepDuration : getTypingDuration();
      frames.push(
        <Frame duration={duration} key={`${text}-${i}`}><Line text={text.slice(0, i + 1)} /></Frame>
      );
    }

    frames.push(
      <Frame key={`${text}-last`}><Line text={text} noCaret /></Frame>
    );

    return (
      <Keyframes component="p" onEnd={() => setLineCount((c) => c + 1)}>
        {frames}
      </Keyframes>
    );
  };

  return (
    <div className="pixel-border h-[330px] w-full max-w-[560px] bg-[#101418] p-2">
      <div className="relative flex h-full flex-col border border-[#46505a] bg-[#0c1013] font-mono text-sm leading-normal text-[#b9c0c7] sm:text-base">
        <div className="flex h-9 items-center justify-between border-b-2 border-[#46505a] bg-[#151a1f] px-3">
          <span className="font-mono text-xs tracking-widest text-[#7f99aa]">ENGINEERING_PROFILE</span>
          <div className="flex gap-2" aria-hidden="true">
            <span className="h-3 w-3 bg-[#865c5c]"></span>
            <span className="h-3 w-3 bg-[#b18f59]"></span>
            <span className="h-3 w-3 bg-[#719984]"></span>
          </div>
        </div>
        <div className="flex-1 break-all p-4 sm:p-6">
          {renderLine('role: backend + fullstack')}
          {lineCount >= 1 && renderLine('languages: TypeScript | Go | Java')}
          {lineCount >= 2 && renderLine('architecture: microservices | cloud')}
          {lineCount >= 3 && renderLine('ai: agentic workflows | orchestration')}
          {lineCount >= 4 && renderLine(' ')}
          {lineCount >= 5 && (
            <p className="font-semibold text-[#719984]"><Line text="Architecture. Automation. Delivery.  " noPrompt /></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal
