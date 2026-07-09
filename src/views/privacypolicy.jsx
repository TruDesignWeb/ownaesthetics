"use client";
// File: src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Features from '../components/features';

import Footer from '../components/footer';
import CustomCursor from '../components/customcursor';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import Banner2 from '../components/banner2';
export default function Home() {
    useRevealOnScroll();
  return (
    <>
      {/* <CustomCursor /> */}
      <Navbar />
      <Banner2 
        image = "/assets/images/contact.svg"
        title = "Privacy Policy"
        subtitle= "Learn about how we collect and use your personal information when you use our services."
        variant = ""
    />

      <div className="[background:#f8f9fa] [padding:80px_0_100px_0] [&_h1]:[font-size:42px] [&_h1]:[font-weight:600] [&_h1]:[text-align:center] [&_h1]:[margin-bottom:40px] [&_h1]:[color:#2d2d2d] [&_h1]:[letter-spacing:0.5px] [&_h2]:[font-size:22px] [&_h2]:[font-weight:600] [&_h2]:[color:#2d2d2d] [&_h2]:[margin-top:2rem] [&_h2]:[margin-bottom:0.5rem] [&_h3]:[font-size:18px] [&_h3]:[font-weight:600] [&_h3]:[color:#2d2d2d] [&_h3]:[margin-top:1.5rem] [&_h3]:[margin-bottom:0.5rem] [&_p]:[font-size:16px] [&_p]:[line-height:1.9] [&_p]:[color:#444] [&_li]:[font-size:16px] [&_li]:[line-height:1.9] [&_li]:[color:#444] [&_ul]:[padding-left:1.5rem] [&_ul]:[margin-bottom:1rem] [&_ol]:[padding-left:1.5rem] [&_ol]:[margin-bottom:1rem] [&_a]:[color:#9f6048] [&_a]:[text-decoration:underline] [&_a:hover]:[color:#7a4535] [&_p_strong]:[font-weight:600] [&_p_strong]:[color:#9f6048] max-[768px]:[padding:50px_0_70px_0] max-[768px]:[&_h1]:[font-size:28px] max-[768px]:[&_h2]:[font-size:18px]">
      <div className="[max-width:900px] [width:100%] [padding:40px_50px] [background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [margin:0_auto] [&:hover]:[transform:translateY(-4px)] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] max-[768px]:[padding:30px_24px]">
        {/* <h1>Privacy Notice</h1> */}
        <p><strong>Last updated: April 28, 2025</strong></p>

        <p>This Privacy Notice for Own Aesthetics PLC ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:</p>

        <p><strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services.</p>

        <h2>Summary of Key Points</h2>
        <p>This summary provides key points from our Privacy Notice. You can find out more details about any of these topics by using the table of contents below.</p>
        <ul>
          <li><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us.</li>
          <li><strong>Do we process any sensitive personal information?</strong> No, we do not process sensitive personal information.</li>
          <li><strong>Do we collect any information from third parties?</strong> Yes, we may collect information from public databases, marketing partners, social media platforms, and other outside sources.</li>
          <li><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</li>
          <li><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations with third parties.</li>
          <li><strong>What are your rights?</strong> Depending on your location, you may have certain rights regarding your personal information.</li>
          <li><strong>How do you exercise your rights?</strong> The easiest way is by submitting a data subject access request or contacting us. We will act in accordance with applicable laws.</li>
          <li><strong>Want to learn more?</strong> Review the Privacy Notice in full.</li>
        </ul>

        <h2>Table of Contents</h2>
        <ol>
          <li><a href="#info-collect">WHAT INFORMATION DO WE COLLECT?</a></li>
          <li><a href="#process-info">HOW DO WE PROCESS YOUR INFORMATION?</a></li>
          <li><a href="#share-info">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></li>
          <li><a href="#cookies">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></li>
          <li><a href="#social-logins">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a></li>
          <li><a href="#international">IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</a></li>
          <li><a href="#info-retention">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
          <li><a href="#minors">DO WE COLLECT INFORMATION FROM MINORS?</a></li>
          <li><a href="#rights">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
          <li><a href="#dnt">CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
          <li><a href="#updates">DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
          <li><a href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
          <li><a href="#review">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
        </ol>

        <h2 id="info-collect">1. WHAT INFORMATION DO WE COLLECT?</h2>
        <h3>Personal Information You Disclose to Us</h3>
        <p><strong>In Short:</strong> We collect personal information that you provide to us voluntarily.</p>
        <p>We collect personal information when you register on the Services, express an interest in obtaining information about us or our products and Services, participate in activities, or otherwise contact us.</p>
        <p><strong>Sensitive Information:</strong> We do not process sensitive information.</p>
        <p>All information you provide must be true, complete, and accurate, and you must notify us of any changes.</p>

        <h3>Information Automatically Collected</h3>
        <p><strong>In Short:</strong> Some information — such as IP address and browser/device characteristics — is collected automatically.</p>
        <p>We automatically collect information like IP address, device and usage information, operating system, location, and analytics data to maintain security and operation of our Services. We also use cookies and similar technologies.</p>

        <h2 id="process-info">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
        <p><strong>In Short:</strong> We process your information to provide, improve, administer Services, communicate with you, secure the Services, prevent fraud, and comply with legal obligations. We may process your data for other purposes with your consent.</p>

        <h2 id="share-info">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
        <p><strong>In Short:</strong> We may share information in specific circumstances and with specific third parties:</p>
        <ul>
          <li><strong>Business Transfers:</strong> In connection with mergers, sales, financing, or acquisition.</li>
          <li><strong>Affiliates:</strong> With our parent company, subsidiaries, and affiliates who must honor this Privacy Notice.</li>
          <li><strong>Business Partners:</strong> To offer certain products, services, or promotions.</li>
        </ul>

        <h2 id="cookies">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
        <p><strong>In Short:</strong> We may use cookies and similar technologies to collect and store information.</p>
        <p>Cookies help with security, saving preferences, site functionality, and marketing. Third parties also use tracking technologies for ads and analytics. See our Cookie Notice for details and opt-out options.</p>

        <h2 id="social-logins">5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
        <p><strong>In Short:</strong> If you register or log in using social media, we may have access to certain information about you.</p>
        <p>We may receive profile information such as your name, email address, profile picture, and public profile details. We recommend reviewing the privacy policies of your social media providers for more information.</p>

        <h2 id="international">6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h2>
        <p><strong>In Short:</strong> We may transfer, store, and process your information in countries other than your own.</p>
        <p>We take necessary measures to protect your information in accordance with this Privacy Notice and applicable law, even when transferred outside the EEA, UK, or Switzerland.</p>

        <h2 id="info-retention">7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <p><strong>In Short:</strong> We keep your information only as long as necessary unless otherwise required by law.</p>
        <p>When no longer needed, we will delete or anonymize your personal information.</p>

        <h2 id="minors">8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
        <p><strong>In Short:</strong> We do not knowingly collect data from or market to children under 18.</p>
        <p>If we learn that personal information has been collected from a child under 18, we will deactivate the account and delete such data promptly.</p>

        <h2 id="rights">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p><strong>In Short:</strong> Depending on your location, you have rights regarding your personal information, including reviewing, updating, or deleting your data.</p>
        <p><strong>Withdrawing Consent:</strong> You may withdraw consent to processing your information at any time by contacting us.</p>

        <h3>Account Information</h3>
        <p>To review, change, or terminate your account, contact us using the methods described below. Upon termination, we will delete or anonymize your data except where legally required to retain it.</p>

        <h2 id="dnt">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
        <p>Most browsers offer Do-Not-Track ("DNT") options, but no uniform standard exists yet. Therefore, we do not currently respond to DNT signals.</p>

        <h2 id="updates">11. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
        <p><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
        <p>Changes will be reflected by an updated "Revised" date at the top. Material changes may be communicated by prominent posting or direct notification.</p>

        <h2 id="contact">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
        <p>If you have questions or comments, you may contact us by post at:</p>
        <p><a href="mailto:info@ownaesthetics.com">info@ownaesthetics.com</a></p>

        <h2 id="review">13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
        <p>Depending on your jurisdiction, you may request access, correction, deletion, or withdrawal of your personal information. Please submit a data subject access request to do so.</p>

      </div>
    </div>
        

      

      <Footer />
    </>
  );
}
