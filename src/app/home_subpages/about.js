"use client";

export default function About() {
    return (
              <div
              className="min-h-screen text-white"
              style={{
                background:
                  "radial-gradient(125% 125% at 50% 90%, #004d40 0%, #000 40%, #00695c 70%, #000 100%)",
              }}
            >
            <section className="py-20 max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold text-center mb-10">About NexSys</h1>
                <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                <p>
                    At NexSys, we aim to revolutionize industries by delivering AI-powered SaaS solutions.
                    Our goal is to provide businesses with the tools they need to optimize operations,
                    enhance decision-making, and unlock their potential.
                </p>

                <h2 className="text-3xl font-semibold mt-10 mb-4">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <img src="darshpatel.jpeg" alt="Darsh Patel" className="w-24 h-24 rounded-full mx-auto" />
                        <h3 className="text-xl font-semibold mt-4">Darsh Patel</h3>
                        <p>Frontend & UI/UX Developer</p>
                    </div>
                    <div className="text-center">
                        <img src="seanbelon.png" alt="Sean Belon" className="w-24 h-24 rounded-full mx-auto" />
                        <h3 className="text-xl font-semibold mt-4">Sean Belon</h3>
                        <p>AI & Backend Developer</p>
                    </div>
                    <div className="text-center">
                        <img src="petergatira.png" alt="Peter Gatira" className="w-24 h-24 rounded-full mx-auto" />
                        <h3 className="text-xl font-semibold mt-4">Peter Gatira</h3>
                        <p>AI & Backend Developer</p>
                    </div>
                    <div className="text-center">
                        <img src="alfonsomartinez.jpeg" alt="Alfonso Martinez" className="w-24 h-24 rounded-full mx-auto" />
                        <h3 className="text-xl font-semibold mt-4">Alfonso Martinez</h3>
                        <p>Front End & UI/UX Designer</p>
                    </div>
                    <div className="text-center">
                        <img src="chriswhite.jpeg" alt="Chris White" className="w-24 h-24 rounded-full mx-auto" />
                        <h3 className="text-xl font-semibold mt-4">Chris White</h3>
                        <p>Startup Advisor</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
