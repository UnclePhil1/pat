import React, { useEffect } from 'react';

const IndexPage: React.FC = () => {
  useEffect(() => {
    // replicate the slide JS behavior using React
    const slides = Array.from(document.querySelectorAll('.slide'));
    let currentSlide = 0;

    const showSlide = (index: number) => {
      slides.forEach((slide, i) => {
        if (i === index) slide.classList.add('active');
        else slide.classList.remove('active');
      });

      const prevBtn = document.getElementById('prev-btn') as HTMLButtonElement | null;
      const nextBtn = document.getElementById('next-btn') as HTMLButtonElement | null;
      const currentSlideEl = document.getElementById('current-slide');
      const totalSlidesEl = document.getElementById('total-slides');

      if (currentSlideEl) currentSlideEl.textContent = String(index + 1);
      if (totalSlidesEl) totalSlidesEl.textContent = String(slides.length);

      if (prevBtn) prevBtn.disabled = index === 0;
      if (nextBtn) nextBtn.disabled = index === slides.length - 1;

      if (nextBtn) nextBtn.textContent = index === slides.length - 1 ? 'Finish' : 'Next';
    };

    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    const onNext = () => {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
      }
    };

    const onPrev = () => {
      if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
      }
    };

    nextBtn?.addEventListener('click', onNext);
    prevBtn?.addEventListener('click', onPrev);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    document.addEventListener('keydown', onKey);

    showSlide(currentSlide);

    return () => {
      nextBtn?.removeEventListener('click', onNext);
      prevBtn?.removeEventListener('click', onPrev);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  // Slides 6-10 (converted from the original HTML) as an array so we can map them into the DOM
  const extraSlides: React.ReactNode[] = [
    (
      <div key={6} className="slide" data-slide="6">
        <div className="w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent mb-4">Your New Growth Engine</h2>
          <p className="text-xl sm:text-2xl text-center text-gray-300 mb-12">PAT is engineered to maximize your two most valuable resources: Time and Trust.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Establish Unshakable Trust</h3>
              <p className="text-gray-300">PAT provides instant, accurate answers 24/7 and proactively removes spam, malicious links, and FUD before they can spread.</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Drive User Retention</h3>
              <p className="text-gray-300">She keeps users active and loyal with hyper-personalized DM updates and interactive "how-to" guides for complex actions.</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Accelerate Growth</h3>
              <p className="text-gray-300">PAT turns your community into a powerful acquisition channel with built-in referral tracking and targeted, direct-to-member campaigns.</p>
            </div>
          </div>
        </div>
      </div>
    ),

    (
      <div key={7} className="slide" data-slide="7">
        <div className="w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent mb-12">A Look Inside the PAT Engine</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-lg">
              <h3 className="font-bold text-xl sm:text-2xl text-white mb-2">Instant, AI-Powered Support</h3>
              <p className="text-gray-400">Stop the endless "when token?" questions. PAT answers any community question accurately in under 8 seconds, drawing directly from your whitepaper and docs.</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg">
              <h3 className="font-bold text-xl sm:text-2xl text-white mb-2">Direct-to-Member Broadcasts</h3>
              <p className="text-gray-400">Cut through the noise. PAT delivers critical updates, airdrop notifications, and campaigns directly to your members' DMs for maximum impact.</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg">
              <h3 className="font-bold text-xl sm:text-2xl text-white mb-2">Interactive "How-To" Guides</h3>
              <p className="text-gray-400">Turn complexity into simplicity. PAT provides step-by-step tutorials for key project actions like staking, minting, or voting, reducing user friction.</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg">
              <h3 className="font-bold text-xl sm:text-2xl text-white mb-2">Built-in Referral Tracking</h3>
              <p className="text-gray-400">Finally, a growth tool that works. PAT seamlessly manages and tracks referral campaigns, helping you measure ROI and accelerate user acquisition.</p>
            </div>
          </div>
        </div>
      </div>
    ),

    (
      <div key={8} className="slide" data-slide="8">
        <div className="w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent mb-8">The Verdict from Our Beta Testers</h2>
          <p className="text-xl text-center text-gray-300 mb-10">Founders and community leaders who tested PAT are calling it a game-changer.</p>
          <div className="space-y-8">
            <blockquote className="bg-gray-900/50 p-6 rounded-lg border-l-4 border-purple-400">
              <p className="text-xl italic text-white">"PAT is impressive. It’s super responsive, gives accurate answers fast, and the friendly, confident tone builds trust. The clear, easy-to-follow explanations are a game-changer."</p>
              <cite className="block text-right mt-4 not-italic text-purple-300">— Community Manager (Beta Tester)</cite>
            </blockquote>
            <div className="grid md:grid-cols-2 gap-8">
              <blockquote className="bg-gray-900/50 p-6 rounded-lg">
                <p className="text-md italic text-gray-300">"I like the fact that it provided answers to broad questions such as the project's web3 experience since it's beginning. It also provided links to its social handles."</p>
                <cite className="block text-right mt-4 not-italic text-gray-400">— Founder, PSP (Beta Tester)</cite>
              </blockquote>
              <blockquote className="bg-gray-900/50 p-6 rounded-lg">
                <p className="text-md italic text-gray-300">"PAT is performing really well as an AI moderator. It’s proactive, responsive, and keeps the conversation flowing smoothly."</p>
                <cite className="block text-right mt-4 not-italic text-gray-400">— Community Member (Beta Tester)</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    ),

    (
      <div key={9} className="slide" data-slide="9">
        <div className="w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent mb-8">The Modern Solution for Community Growth</h2>
          <p className="text-lg sm:text-xl text-center text-gray-300 mb-10">PAT isn't just better than a bot; it's smarter and more efficient than hiring a large team.</p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-gray-900/50 border border-gray-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-bold text-gray-400 mb-4 text-center">Standard Bots</h3>
              <ul className="space-y-3 text-gray-400">
                <li><span className="font-semibold text-red-400">Reactive:</span> Only respond to basic commands.</li>
                <li><span className="font-semibold text-red-400">Noisy:</span> Clog up the main chat with bot clutter.</li>
                <li><span className="font-semibold text-red-400">Limited:</span> Can't understand context or complex questions.</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 border border-gray-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-bold text-gray-400 mb-4 text-center">Human Mod Team</h3>
              <ul className="space-y-3 text-gray-400">
                <li><span className="font-semibold text-red-400">Expensive:</span> High salary and overhead costs.</li>
                <li><span className="font-semibold text-red-400">Inconsistent:</span> Quality varies by person and time of day.</li>
                <li><span className="font-semibold text-red-400">Slow:</span> Can't provide instant answers 24/7.</li>
                <li><span className="font-semibold text-red-400">Burnout:</span> Prone to fatigue from repetitive tasks.</li>
              </ul>
            </div>
            <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg ring-2 ring-green-500/50">
              <h3 className="text-lg font-bold text-green-300 mb-4 text-center">The PAT Engine</h3>
              <ul className="space-y-3 text-gray-300">
                <li><span className="font-semibold text-green-300">Intelligent:</span> Understands context and answers complex questions 24/7.</li>
                <li><span className="font-semibold text-green-300">Direct:</span> Cuts through noise with targeted DMs.</li>
                <li><span className="font-semibold text-green-300">Cost-Effective:</span> One PAT handles the work of multiple mods.</li>
                <li><span className="font-semibold text-green-300">Perfectly Consistent:</span> Delivers the right answer, in your voice, every time.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),

    (
      <div key={10} className="slide text-center" data-slide="10">
        <div className="w-full">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent mb-4">Book Your Personalized Demo</h2>
          <p className="text-xl sm:text-2xl text-white font-medium max-w-2xl mx-auto mb-8">See the PAT Engine in action and let us show you how she can be trained for <span className="text-purple-400">your</span> project.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="bg-white p-4 rounded-lg">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://calendly.com/samuelnssien001/pat-demo" alt="QR Code for Demo Booking" className="w-40 h-40 sm:w-48 sm:h-48" />
            </div>
            <div className="text-left">
              <a href="https://calendly.com/samuelnssien001/pat-demo" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl font-bold text-blue-400 hover:text-blue-300 transition-colors break-all">Book on Calendly</a>
              <p className="mt-6 text-2xl font-bold text-white">Stop Managing.</p>
              <p className="text-2xl font-bold text-green-400">Start Building.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  ];

  return (
    <div className="h-screen w-screen bg-gray-900 text-gray-200 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl h-full bg-gray-800 border border-gray-700 rounded-lg shadow-2xl flex flex-col relative overflow-hidden">
        <div className="flex-grow flex items-center justify-center p-6 sm:p-10 md:p-16 overflow-y-auto">

          {/* Slide 1 */}
          <div className="slide active text-center" data-slide="1">
            <div className="w-full">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent mb-4">PAT</div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">Your 24/7 AI-Powered Community Assistant.</h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-400">The Autonomous Community Engine for Web3.</p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="slide text-center" data-slide="2">
            <div className="w-full">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent mb-4">The Web3 Community Paradox</h2>
              <p className="text-2xl sm:text-3xl text-white font-medium">Your greatest asset is your biggest bottleneck.</p>
              <p className="mt-8 max-w-3xl mx-auto text-lg sm:text-xl text-gray-400">
                Every successful Web3 project is built on a vibrant community. But the very methods we use to build it are unscalable. Founders and teams are trapped in a cycle of endless, low-leverage tasks.
              </p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="slide" data-slide="3">
            <div className="w-full">
              <h2 className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent mb-12">Your Team is Trapped in "The Bottleneck"</h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-gray-900/50 p-6 rounded-lg border border-secondary/10">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-3">The Support Drain</h3>
                  <p className="text-gray-400">Answering the <span className="text-white">same</span> questions 24/7 ("when token?", "how to stake?") burns out your most dedicated team members.</p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-lg border border-secondary/10">
                  <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-3">The Engagement Gap</h3>
                  <p className="text-gray-400">Critical updates and campaigns get <span className="text-white">lost in the noise</span>, leading to low participation and a disconnected community.</p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-lg border border-secondary/10">
                  <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-3">The Security Risk</h3>
                  <p className="text-gray-400">Unmonitored chats become breeding grounds for <span className="text-white">spam, scams, and FUD</span>, eroding the trust you work so hard to build.</p>
                </div>
              </div>
              <p className="text-center mt-12 text-xl font-medium text-red-300">The result? Community churn, stagnant growth, and crippled momentum.</p>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="slide text-center" data-slide="4">
            <div className="w-full">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent mb-4">PAT: Your 24/7 AI-Powered Community Assistant</h2>
              <p className="text-2xl sm:text-3xl text-white font-medium max-w-4xl mx-auto">PAT is a purpose-built AI that integrates directly into your Telegram community to automate 90% of your daily management tasks.</p>
              <div className="mt-8 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto space-y-4">
                <p>She is not just another chatbot. PAT is your 24/7 project assistant, moderator, and growth hacker—all in one.</p>
                <p className="font-bold text-white">She transforms your community from a bottleneck into a self-sustaining growth engine, freeing you to stop <span className="text-red-400">managing</span> and start <span className="text-green-400">building</span>.</p>
              </div>
            </div>
          </div>

          {/* Slide 5 */}
          <div className="slide" data-slide="5">
            <div className="w-full">
              <h2 className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent mb-4">We Handle Everything. You Get Results.</h2>
              <p className="text-xl sm:text-2xl text-center text-gray-300 mb-12">Get fully activated in 4 simple steps with zero technical overhead.</p>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                {/* Steps omitted for brevity in this view - same as HTML content */}
                <div className="flex flex-col items-center">
                  <div className="bg-blue-500/20 text-blue-300 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">1. Consult</h3>
                  <p className="text-gray-400 mt-2">We meet to understand your project's unique voice and community goals.</p>
                </div>

              </div>
            </div>
          </div>

          {/* Render slides 6-10 from the extraSlides array */}
          {extraSlides.map((s) => s)}

        </div>

        {/* Navigation */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between bg-gray-900/30 backdrop-blur-sm">
          <div className="text-sm text-gray-400">
            <span id="current-slide">1</span> / <span id="total-slides">10</span>
          </div>
          <div className="flex items-center gap-2">
            <button id="prev-btn" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              Prev
            </button>
            <button id="next-btn" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md transition-colors">
              Next
            </button>
          </div>
        </div>
        <style>{`
          .slide { display: none; opacity: 0; transition: opacity 0.35s ease-in-out; }
          .slide.active { display: block; opacity: 1; }

          /* Ensure the inner card takes full height on small screens */
          @media (max-width: 640px) {
            .max-w-6xl { max-width: 100% }
            .slide h1 { font-size: 1.6rem }
            .slide h2 { font-size: 1.25rem }
            #next-btn, #prev-btn { padding: 0.5rem 0.75rem }
          }

          /* Make sure content scrolls when tall */
          .flex-grow { overflow-y: auto; }
        `}</style>
      </div>
    </div>
  );
};

export default IndexPage;
