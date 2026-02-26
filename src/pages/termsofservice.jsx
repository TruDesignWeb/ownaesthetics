// File: src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Features from '../components/features';

import Footer from '../components/footer';
import CustomCursor from '../components/customcursor';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import './terms.css';

import Banner2 from '../components/banner2';



export default function Home() {
    useRevealOnScroll();
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Banner2 
        image = "/assets/images/contact.svg"
        title = "Terms of Service"
        subtitle= "Please read these Terms of Service carefully before using our website and services. By accessing or using our website, you agree to be bound by these Terms."
        variant = ""
    />


      <div className="tos-container">
      {/* <h1>Terms of Service</h1> */}
      <div className = "tos-container-text tos-animated">
      <p><strong>Last updated: April 28, 2025</strong></p>

      <p>We are Own Aesthetics PLC ("Company," "we," "us," "our"), a company registered in Iowa, United States at 7601 Office Plaza Dr. N Norwood 1, Suite 115, West Des Moines, IA 50266.</p>

      <p>We operate the website <a href="http://www.ownaesthetics.com" target="_blank" rel="noreferrer">http://www.ownaesthetics.com</a> (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").</p>

      <p>You can contact us by phone at 515-672-1860, by email at <a href="mailto:info@ownaesthetics.com">info@ownaesthetics.com</a>, or by mail to 7601 Office Plaza Dr. N Norwood 1, Suite 115, West Des Moines, IA 50266, United States.</p>

      <p>These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Own Aesthetics PLC, concerning your access to and use of the Services. By accessing the Services, you agree to be bound by these Legal Terms. If you do not agree, you are prohibited from using the Services and must discontinue use immediately.</p>

      <p>We will provide prior notice of any scheduled changes to the Services. The modified Legal Terms will become effective upon posting or notification by email. By continuing to use the Services after the changes, you agree to the modified terms.</p>

      <p>The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.</p>

      <h2 id="services">1. Our Services</h2>
      <p>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</p>
      <p>The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).</p>

      <h2 id="intellectual-property-rights">2. Intellectual Property Rights</h2>
      <h3>Our Intellectual Property</h3>
      <p>We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").</p>
      <p>Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.</p>
      <p>The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.</p>

      <h3>Your Use of Our Services</h3>
      <p>Subject to your compliance with these Legal Terms, including the "Prohibited Activities" section below, we grant you a non-exclusive, non-transferable, revocable license to access the Services and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use or internal business purpose.</p>
      <p>Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>
      <p>If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: <a href="mailto:info@ownaesthetics.com">info@ownaesthetics.com</a>. If we ever grant you permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.</p>
      <p>We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.</p>
      <p>Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.</p>

      <h3>Your Submissions</h3>
      <p>By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.</p>
      <p>You are responsible for what you post or upload. By sending us Submissions through any part of the Services you:</p>
      <ul>
        <li>Confirm that you have read and agree with our "Prohibited Activities" and will not post illegal or prohibited content.</li>
        <li>Waive any and all moral rights to any such Submission to the extent permissible by applicable law.</li>
        <li>Warrant that any such Submission are original to you or that you have the necessary rights and licenses to submit such Submissions.</li>
        <li>Warrant and represent that your Submissions do not constitute confidential information.</li>
      </ul>
      <p>You are solely responsible for your Submissions and expressly agree to reimburse us for any and all losses we may suffer because of your breach of this section.</p>

      <h2 id="user-representations">3. User Representations</h2>
      <p>By using the Services, you represent and warrant that:</p>
      <ul>
        <li>You have the legal capacity and agree to comply with these Legal Terms.</li>
        <li>You are not a minor in the jurisdiction in which you reside.</li>
        <li>You will not access the Services through automated or non-human means.</li>
        <li>You will not use the Services for any illegal or unauthorized purpose.</li>
        <li>Your use of the Services will not violate any applicable law or regulation.</li>
      </ul>
      <p>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account.</p>

      <h2 id="prohibited-activities">4. Prohibited Activities</h2>
      <p>You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those specifically endorsed or approved by us.</p>
      <p>As a user of the Services, you agree not to:</p>
      <ul>
        <li>Systematically retrieve data or other content from the Services.</li>
        <li>Trick, defraud, or mislead us and other users.</li>
        <li>Circumvent, disable, or otherwise interfere with security-related features of the Services.</li>
        <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
        <li>Use any information obtained from the Services to harass, abuse, or harm another person.</li>
        <li>Make improper use of our support services or submit false reports.</li>
        <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
        <li>Engage in unauthorized framing of or linking to the Services.</li>
        <li>Upload or transmit viruses or malicious code.</li>
        <li>Engage in any automated use of the system.</li>
        <li>Delete copyright notices from Content.</li>
        <li>Attempt to impersonate another user or person.</li>
        <li>Upload spyware or similar software.</li>
        <li>Interfere with the Services' operation.</li>
        <li>Harass or threaten our employees or agents.</li>
        <li>Use the Services for unauthorized commercial purposes.</li>
        <li>Use the Services to compete with us.</li>
        <li>Advertise or offer to sell goods and services without authorization.</li>
      </ul>

      <h2 id="user-generated-contributions">5. User Generated Contributions</h2>
      <p>The Services do not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content ("Contributions"). Contributions may be viewable by other users and third-party websites.</p>
      <p>When you create or make available any Contributions, you thereby represent and warrant that:</p>
      <ul>
        <li>The Contributions do not infringe proprietary rights of any third party.</li>
        <li>You have all necessary rights and permissions to use and authorize others to use your Contributions.</li>
        <li>Your Contributions are not false, misleading, or unlawful.</li>
        <li>Your Contributions do not violate privacy, publicity, or other legal rights.</li>
      </ul>
      <p>Any use of the Services in violation of these requirements may result in termination or suspension of your rights to use the Services.</p>

      <h2 id="contribution-license">6. Contribution License</h2>
      <p>You and Services agree that we may access, store, process, and use any information and personal data that you provide and your choices (including settings).</p>
      <p>By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.</p>
      <p>We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</p>

      <h2 id="third-party-websites-and-content">7. Third-Party Websites and Content</h2>
      <p>The Services may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites") as well as content belonging to or originating from third parties ("Third-Party Content").</p>
      <p>We are not responsible for monitoring, checking, or guaranteeing the accuracy, appropriateness, or completeness of any Third-Party Websites or Third-Party Content. If you access Third-Party Websites or use Third-Party Content, you do so at your own risk. You should review the applicable terms and policies, including privacy practices, of any Third-Party Website you interact with. We are not responsible for any purchase you make through a Third-Party Website.</p>

      <h2 id="advertisers">8. Advertisers</h2>
      <p>We allow advertisers to display their advertisements and other information in certain areas of the Services, such as sidebar advertisements or banner advertisements. We simply provide the space to place such advertisements, and we have no other relationship with advertisers.</p>

      <h2 id="services-management">9. Services Management</h2>
      <p>We reserve the right, but not the obligation, to:</p>
      <ul>
        <li>Monitor the Services for violations of these Legal Terms;</li>
        <li>Take appropriate legal action against anyone who violates the law or these Legal Terms;</li>
        <li>Restrict or disable access to Contributions or any portion of the Services;</li>
        <li>Remove excessive or burdensome files or content;</li>
        <li>Otherwise manage the Services to protect our rights and ensure proper functioning.</li>
      </ul>

      <h2 id="privacy-policy">10. Privacy Policy</h2>
      <p>We care about data privacy and security. By using the Services, which is incorporated into these Legal Terms. Please be advised the Services are hosted in the United States. If you access the Services from any other region of the world with different laws regarding personal data, you consent to the transfer and processing of your data in the United States.</p>

      <h2 id="term-and-termination">11. Term and Termination</h2>
      <p>These Legal Terms shall remain in full force and effect while you use the Services. Without limiting any other provision of these Legal Terms, we reserve the right to, in our sole discretion and without notice or liability, deny access to and use of the Services (including blocking certain IP addresses), to any person for any reason or no reason at all, including without limitation for breach of any representation, warranty, or covenant contained in these Legal Terms or any applicable law or regulation.</p>
      <p>We may terminate your use or participation in the Services or delete your account and any content or information you posted at any time, without warning, at our sole discretion.</p>
      <p>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. We may also pursue legal action, including civil, criminal, and injunctive redress.</p>

      <h2 id="modifications-and-interruptions">12. Modifications and Interruptions</h2>
      <p>We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. We have no obligation to update any information on our Services.</p>
      <p>We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.</p>
      <p>We cannot guarantee the Services will always be available. We may experience hardware, software, or other issues, or need to perform maintenance, resulting in interruptions, delays, or errors.</p>
      <p>You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will obligate us to maintain and support the Services or to supply any corrections, updates, or releases.</p>

      <h2 id="governing-law">13. Governing Law</h2>
      <p>These Legal Terms and your use of the Services are governed by and construed in accordance with the laws of the State of Iowa, United States, without regard to its conflict of law principles.</p>

      <h2 id="dispute-resolution">14. Dispute Resolution</h2>
      <h3>Informal Negotiations</h3>
      <p>To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a "Dispute" and collectively, the "Disputes") brought by either you or us, the parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.</p>

      <h3>Binding Arbitration</h3>
      <p>If the Parties are unable to resolve a Dispute through informal negotiations, the Dispute shall be resolved by binding arbitration under the Commercial Arbitration Rules of the American Arbitration Association ("AAA") and, where appropriate, the AAA's Supplementary Procedures for Consumer-Related Disputes.</p>
      <p>Your arbitration fees and your share of arbitrator compensation shall be governed by the AAA Consumer Rules and limited where appropriate. If such costs are determined by the arbitrator to be excessive, we will pay all arbitration fees and expenses.</p>
      <p>Arbitration may be conducted in person, through documents, by phone, or online. The arbitration shall take place in Iowa, United States.</p>
      <p>If for any reason a Dispute proceeds in court rather than arbitration, it shall be commenced in the state and federal courts located in Iowa, United States, and the parties consent to venue and jurisdiction there.</p>

      <h3>Restrictions</h3>
      <p>The parties agree that any arbitration shall be limited to the Dispute between the parties individually. No class-action arbitration is permitted. No Dispute shall be arbitrated on a class-wide basis or through representative capacity.</p>

      <h3>Exceptions to Informal Negotiations and Arbitration</h3>
      <p>The parties agree that the following Disputes are not subject to the above provisions: (a) any Disputes seeking to enforce or protect intellectual property rights; (b) any Dispute related to allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief.</p>

      <h2 id="corrections">15. Corrections</h2>
      <p>There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.</p>

      <h2 id="disclaimer">16. Disclaimer</h2>
      <p>The Services are provided on an as-is and as-available basis. You agree that your use of the Services will be at your sole risk.</p>
      <p>To the fullest extent permitted by law, we disclaim all warranties, express or implied, including, without limitation, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
      <p>We make no warranties or representations about the accuracy or completeness of the Services' content or any websites linked to the Services. We will not assume any liability for:</p>
      <ul>
        <li>Errors, mistakes, or inaccuracies of content and materials,</li>
        <li>Personal injury or property damage resulting from your access to or use of the Services,</li>
        <li>Any unauthorized access to or use of our servers and/or any personal or financial information stored therein,</li>
        <li>Any interruption or cessation of transmission to or from the Services,</li>
        <li>Any bugs, viruses, trojan horses, or similar issues transmitted to or through the Services,</li>
        <li>Any errors or omissions in any content and materials or for any loss or damage incurred as a result of content posted or otherwise made available via the Services.</li>
      </ul>
      <p>We do not warrant, endorse, guarantee, or assume responsibility for any product or service advertised or offered by a third party through the Services or any hyperlinked website.</p>

      <h2 id="limitations-of-liability">17. Limitations of Liability</h2>
      <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Services, even if we have been advised of the possibility of such damages.</p>
      <p>Notwithstanding anything to the contrary contained herein, our liability to you for any cause whatsoever will at all times be limited to the amount paid, if any, by you to us during the six (6) month period prior to the cause of action arising.</p>

      <h2 id="indemnification">18. Indemnification</h2>
      <p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of:</p>
      <ul>
        <li>Your use of the Services;</li>
        <li>Your breach of these Legal Terms;</li>
        <li>Any breach of your representations and warranties set forth in these Legal Terms;</li>
        <li>Your violation of the rights of a third party, including but not limited to intellectual property rights;</li>
        <li>Any overt harmful act toward any other user of the Services with whom you connected via the Services.</li>
      </ul>
      <p>We reserve the right to assume the exclusive defense and control of any matter for which you are required to indemnify us and you agree to cooperate with our defense of such claims.</p>

      <h2 id="user-data">19. User Data</h2>
      <p>We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services.</p>
      <p>Although we perform routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services.</p>
      <p>You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</p>

      <h2 id="electronic-communications-transactions-and-signatures">20. Electronic Communications, Transactions, and Signatures</h2>
      <p>Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically satisfy any legal requirement that such communication be in writing.</p>
      <p>You agree to the use of electronic signatures, contracts, orders, and other records, and to electronic delivery of notices, policies, and records of transactions initiated or completed by us or via the Services.</p>
      <p>You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws requiring an original signature or delivery or retention of non-electronic records.</p>

      <h2 id="california-users-and-residents">21. California Users and Residents</h2>
      <p>If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at:</p>
      <p>1625 North Market Blvd., Suite N 112, Sacramento, California 95834<br />Or by telephone at (800) 952-5210 or (916) 445-1254.</p>

      <h2 id="miscellaneous">22. Miscellaneous</h2>
      <p>These Legal Terms and any policies or operating rules posted by us constitute the entire agreement and understanding between you and us.</p>
      <p>Our failure to exercise or enforce any right or provision shall not operate as a waiver of such right or provision.</p>
      <p>These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time.</p>
      <p>If any provision of these Legal Terms is unlawful, void, or unenforceable, that provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions.</p>
      <p>There is no joint venture, partnership, employment, or agency relationship created between you and us as a result of these Legal Terms or use of the Services.</p>

      <h2 id="contact-us">23. Contact Us</h2>
      <p>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</p>
      <p>
        Own Aesthetics PLC<br />
        7601 Office Plaza Dr. N Norwood 1, Suite 115<br />
        West Des Moines, IA 50266<br />
        United States<br />
        Phone: 515-672-1860<br />
        Email: <a href="mailto:info@ownaesthetics.com">info@ownaesthetics.com</a>
      </p>
    </div>
    </div>
      

      <Footer />
    </>
  );
}
