"use client";
import "../css/footer.css";
import 'aos/dist/aos.css'; 
import SectionTitle from "../components/title";

export default function Footer() {

    function Track({ title, link, children }) {
        return (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="track-item">
                {children}
                <h1 className="track-title">{title}</h1>
            </div>
          </a>
        );
    }   

    return (
        <div className="bg-black text-white bg-gradient-to-l from-blue-500 via-black to-pink-500 dark:bg-gradient-to-l dark:from-blue-500 dark:to-pink-500">
        <header className="flex justify-between items-center px-8 py-6 bg-black/30">
        <div className="footer-page">
            <div className="footer-content">
                <div className="tracks flex"> {/* adjusted the className styling for centering on mobile for tracks */}
                    <Track title="TWITTER" link="https://x.com/NexsysTech">
                        <img src="/twitter.png" alt="twitter-png" className="track-image"/>
                    </Track>
                    <Track title="INSTAGRAM" link="https://www.instagram.com/nexsys.tech/">
                        <img src="/instagram.png" alt="instagram-png" className="track-image"/>
                    </Track>
                    <Track title="GITHUB" link="https://github.com/darshp623/react-intro-ws">
                        <img src="/github.PNG" alt="github-png" className="track-image"/>
                    </Track>
                    <Track title="TIKTOK" link="https://www.tiktok.com/@nexsys.tech?lang=en">
                        <img src="/tiktok.webp" alt="tiktok-webp" className="track-image"/>
                    </Track>
                    <Track title="REDDIT" link="https://www.reddit.com/user/Nexsys_Tech/">
                        <img src="/reddit.png" alt="reddit-png" className="track-image"/>
                    </Track>
                </div>
                <div className="footer-info">
                    <p>&copy; 2025 NexSys. All Rights Reserved.</p>
                    <p className="mt-2">
                      <a href="#" className="footer-link">Privacy Policy</a> |
                      <a href="#" className="footer-link">Terms of Service</a> |
                      <a href="mailto:dpatel37@umbc.edu" className="footer-link">Contact Me</a>
                    </p>
                </div>
            </div>
        </div>
        </header>
    </div>
    )
};
