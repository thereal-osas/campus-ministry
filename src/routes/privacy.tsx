import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "../components/ContentPage";
import galleryBible from "../assets/gallery-bible.jpg";

export const Route = createFileRoute("/privacy")({ component: PrivacyPage });

function PrivacyPage() {
  return (
    <ContentPage
      heroImage={galleryBible}
      eyebrow="Privacy policy"
      title="Your information should be handled with care."
      intro="This page explains how Gospel Pillars collects, uses, and protects your personal data as a visitor or member of our ministry platforms."
    >
      <div className="privacy-prose">

        <p className="privacy-who"><strong>Who We Are</strong><br />Our website address is: <a href="https://gospelpillars.org/" target="_blank" rel="noopener noreferrer">https://gospelpillars.org/</a></p>

        <h2>1. Introduction</h2>
        <p>1.1 We are committed to safeguarding the privacy of our website visitors and service users.</p>
        <p>1.2 This policy applies where we are acting as a data controller with respect to the personal data of our website visitors and service users, Church Members, Contacts etc; in other words, where we determine the purposes and means of the processing of that personal data.</p>
        <p>1.3 We use cookies on our website. Insofar as those cookies are not strictly necessary for the provision of our website and services, we will ask you to consent to our use of cookies when you first visit our website.</p>
        <p>1.4 Our website incorporates privacy controls which affect how we will process your personal data. By using the privacy controls, you can specify whether you would like to receive direct marketing communications and limit the publication of your information. You can access the privacy controls via this document.</p>
        <p>1.5 In this policy, "we", "us" and "our" refer to Gospel Pillars.</p>
        <p>1.6 Gospel Pillars Church values your privacy and is committed to protecting the personal information you share with us. The information you provide (including mobile opt-in data) is used solely for communication, ministry updates, and services related to Gospel Pillars Church.</p>

        <h2>2. Document Classification</h2>
        <p>2.1 This document was created and designated as a publicly available document.</p>

        <h2>3. How We Use Your Personal Data</h2>
        <p>3.1 In this Section 3 we have set out: (a) the general categories of personal data that we may process; (b) in the case of personal data that we did not obtain directly from you, the source and specific categories of that data; (c) the purposes for which we may process personal data; and (d) the legal bases of the processing.</p>
        <p>3.2 We may process data about your use of our website and services ("usage data"). The usage data may include your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views and website navigation paths, as well as information about the timing, frequency and pattern of your service use. The source of the usage data is our analytics tracking system. This usage data may be processed for the purposes of analyzing the use of the website and services. The legal basis for this processing is our legitimate interests, namely monitoring and improving our website and services.</p>
        <p>3.3 We may process your account data ("account data"). The account data may include your name, email address, home address, phone number etc. The source of the account data is you or your employer. The account data may be processed for the purposes of operating our website, providing our services, ensuring the security of our website and services, maintaining back-ups of our databases and communicating with you.</p>
        <p>3.4 We may process your information included in your personal profile on our website, application or service ("profile data"). The profile data may include your name, address, telephone number, email address, profile pictures, gender, date of birth, relationship status, interests and hobbies, educational details and employment details. The profile data may be processed for the purposes of enabling and monitoring your use of our website and services.</p>
        <p>3.5 We may process your personal data that are provided in the course of the use of our services ("service data"). The service data may be processed for the purposes of operating our website, providing our services, ensuring the security of our website and services, maintaining back-ups of our databases and communicating with you.</p>
        <p>3.6 We may process information that you post for publication on our website or through our services ("publication data"). The publication data may be processed for the purposes of enabling such publication and administering our website and services.</p>
        <p>3.7 We may process information contained in any enquiry you submit to us regarding goods and/or services ("enquiry data"). The enquiry data may be processed for the purposes of offering, marketing and selling relevant goods and/or services to you. The legal basis for this processing is consent.</p>
        <p>3.8 We may process information relating to our customer relationships, including customer contact information ("customer relationship data"). The customer relationship data may include your name, your employer, your job title or role, your contact details, and information contained in communications between us and you or your employer. The customer relationship data may be processed for the purposes of managing our relationships with customers, communicating with customers, keeping records of those communications and promoting our products and services to customers.</p>
        <p>3.9 We may process information relating to transactions, including purchases of goods and services, that you enter into with us and/or through our website ("transaction data"). The transaction data may include your contact details, your card details and the transaction details. The transaction data may be processed for the purpose of supplying the purchased goods and services and keeping proper records of those transactions, receiving of offerings in church, partnership/charitable donations.</p>
        <p>3.10 We may process information that you provide to us for the purpose of subscribing to our email notifications and/or newsletters ("notification data"). The notification data may be processed for the purposes of sending you the relevant notifications and/or newsletters.</p>
        <p>3.11 We may process information contained in or relating to any communication that you send to us ("correspondence data"). The correspondence data may include the communication content and metadata associated with the communication. Our website will generate the metadata associated with communications made using the website contact forms. The correspondence data may be processed for the purposes of communicating with you and record-keeping.</p>
        <p>3.12 We may process general categories of personal data including personal and personally identifiable data such as names, sex, title, date of birth, marital status, occupation, residential address, place of work, country or state of origin, and certain preferences. This data may be processed for contacting and profiling you, as we do in our churches.</p>
        <p>3.13 We may process any of your personal data identified in this policy where necessary for the establishment, exercise or defence of legal claims, whether in court proceedings or in an administrative or out-of-court procedure.</p>
        <p>3.14 We may process any of your personal data identified in this policy where necessary for the purposes of obtaining or maintaining insurance coverage, managing risks, or obtaining professional advice.</p>
        <p>3.15 In addition to the specific purposes for which we may process your personal data set out in this Section 3, we may also process any of your personal data where such processing is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests of another natural person.</p>
        <p>3.16 Please do not supply any other person's personal data to us, unless we prompt you to do so.</p>

        <h2>4. Providing Your Personal Data to Others</h2>
        <p>4.1 We may disclose your personal data to any member of our group of companies (this means our subsidiaries, our ultimate holding company and all its subsidiaries) insofar as reasonably necessary for the purposes, and on the legal bases, set out in this policy.</p>
        <p>4.2 We may disclose your personal data to our insurers and/or professional advisers insofar as reasonably necessary for the purposes of obtaining or maintaining insurance coverage, managing risks, obtaining professional advice, or the establishment, exercise or defence of legal claims.</p>
        <p>4.3 Financial transactions relating to our website and services may be handled by our payment services providers, including Paypal and Paystack. We will share transaction data with our payment services providers only to the extent necessary for the purposes of processing your donations, payments, refunding such payments and dealing with complaints and queries relating to such payments and refunds.</p>
        <p>4.4 We may disclose your enquiry data to selected third party suppliers of goods and services identified on our website for the purpose of enabling them to contact you so that they can offer, market and sell to you relevant goods and/or services.</p>
        <p>4.5 In addition to the specific disclosures of personal data set out in this Section 4, we may disclose your personal data where such disclosure is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests of another natural person.</p>

        <h2>5. International Transfers of Your Personal Data</h2>
        <p>5.1 In this Section 5, we provide information about the circumstances in which your personal data may be transferred to countries outside the European Economic Area (EEA).</p>
        <p>5.2 We and our other group organizations have offices and facilities in UK, USA, South Africa, Canada, and Nigeria. Transfers to each of these countries will be protected by appropriate safeguards, namely the use of standard data protection clauses adopted or approved by the European Commission.</p>
        <p>5.3 The hosting facilities for our website are situated in Nigeria, USA, UK, Canada and South Africa. Transfers to each of these countries will be protected by appropriate safeguards, namely the use of standard data protection clauses adopted or approved by the European Commission.</p>
        <p>5.4 You acknowledge that personal data that you submit for publication through our website or services may be available, via the internet, around the world. We cannot prevent the use (or misuse) of such personal data by others.</p>

        <h2>6. Retaining and Deleting Personal Data</h2>
        <p>6.1 This Section 6 sets out our data retention policies and procedure, which are designed to help ensure that we comply with our legal obligations in relation to the retention and deletion of personal data.</p>
        <p>6.2 Personal data that we process for any purpose or purposes shall not be kept for longer than is necessary for that purpose or those purposes.</p>
        <p>6.3 We will retain your personal data as follows: (a) Personally identifiable information will be retained for a minimum period of 5 years following date of acquisition, and for a maximum period of 30 years following date of acquisition.</p>
        <p>6.4 In some cases it is not possible for us to specify in advance the periods for which your personal data will be retained. In such cases, we will determine the period of retention based on the following criteria: (a) the period of retention of personally identifiable information will be determined based on Section 6.5 below.</p>
        <p>6.5 Notwithstanding the other provisions of this Section 6, we may retain your personal data where such retention is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests of another natural person.</p>

        <h2>7. Amendments</h2>
        <p>7.1 We may update this policy from time to time by publishing a new version on our website.</p>
        <p>7.2 You should check this page occasionally to ensure you are happy with any changes to this policy.</p>
        <p>7.3 We may notify you of significant changes to this policy by email or through the private messaging system on our website.</p>

        <h2>8. Your Rights</h2>
        <p>8.1 In this Section 8, we have summarised the rights that you have under data protection law. Some of the rights are complex, and not all of the details have been included in our summaries. Accordingly, you should read the relevant laws and guidance from the regulatory authorities for a full explanation of these rights.</p>
        <p>8.2 Your principal rights under data protection law are: (a) the right to access; (b) the right to rectification; (c) the right to erasure; (d) the right to restrict processing; (e) the right to object to processing; (f) the right to data portability; (g) the right to complain to a supervisory authority; and (h) the right to withdraw consent.</p>
        <p>8.3 You have the right to confirmation as to whether or not we process your personal data and, where we do, access to the personal data, together with certain additional information. That additional information includes details of the purposes of the processing, the categories of personal data concerned and the recipients of the personal data. Providing the rights and freedoms of others are not affected, we will supply to you a copy of your personal data. The first copy will be provided free of charge, but additional copies may be subject to a reasonable fee.</p>
        <p>8.4 You have the right to have any inaccurate personal data about you rectified and, taking into account the purposes of the processing, to have any incomplete personal data about you completed.</p>
        <p>8.5 In some circumstances you have the right to the erasure of your personal data without undue delay. Those circumstances include: the personal data are no longer necessary in relation to the purposes for which they were collected or otherwise processed; you withdraw consent to consent-based processing; you object to the processing under certain rules of applicable data protection law; the processing is for direct marketing purposes; and the personal data have been unlawfully processed. However, there are exclusions of the right to erasure. The general exclusions include where processing is necessary: for exercising the right of freedom of expression and information; for compliance with a legal obligation; or for the establishment, exercise or defence of legal claims.</p>
        <p>8.6 In some circumstances you have the right to restrict the processing of your personal data. Those circumstances are: you contest the accuracy of the personal data; processing is unlawful but you oppose erasure; we no longer need the personal data for the purposes of our processing, but you require personal data for the establishment, exercise or defence of legal claims; and you have objected to processing, pending the verification of that objection.</p>
        <p>8.7 You have the right to object to our processing of your personal data on grounds relating to your particular situation, but only to the extent that the legal basis for the processing is that the processing is necessary for the performance of a task carried out in the public interest or the purposes of legitimate interests pursued by us or by a third party.</p>
        <p>8.8 You have the right to object to our processing of your personal data for direct marketing purposes (including profiling for direct marketing purposes). If you make such an objection, we will cease to process your personal data for this purpose.</p>
        <p>8.9 You have the right to object to our processing of your personal data for scientific or historical research purposes or statistical purposes on grounds relating to your particular situation, unless the processing is necessary for the performance of a task carried out for reasons of public interest.</p>
        <p>8.10 To the extent that the legal basis for our processing of your personal data is consent, or that the processing is necessary for the performance of a contract to which you are party, and such processing is carried out by automated means, you have the right to receive your personal data from us in a structured, commonly used and machine-readable format.</p>
        <p>8.11 If you consider that our processing of your personal information infringes data protection laws, you have a legal right to lodge a complaint with a supervisory authority responsible for data protection. You may do so in the EU member state of your habitual residence, your place of work or the place of the alleged infringement.</p>
        <p>8.12 To the extent that the legal basis for our processing of your personal information is consent, you have the right to withdraw that consent at any time. Withdrawal will not affect the lawfulness of processing before the withdrawal.</p>
        <p>8.13 You may exercise any of your rights in relation to your personal data by written notice to us.</p>

        <h2>9. About Cookies</h2>
        <p>9.1 A cookie is a file containing an identifier (a string of letters and numbers) that is sent by a web server to a web browser and is stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server.</p>
        <p>9.2 Cookies may be either "persistent" cookies or "session" cookies: a persistent cookie will be stored by a web browser and will remain valid until its set expiry date, unless deleted by the user before the expiry date; a session cookie will expire at the end of the user session, when the web browser is closed.</p>
        <p>9.3 Cookies do not typically contain any information that personally identifies a user, but personal information that we store about you may be linked to the information stored in and obtained from cookies.</p>

        <h2>10. Cookies That We Use</h2>
        <p>10.1 We use cookies for the following purposes: (a) authentication – to identify you when you visit our website and as you navigate our website; (b) status – to help us determine if you are logged into our website; (c) personalisation – to store information about your preferences and to personalise the website for you; (d) security – as an element of the security measures used to protect user accounts, including preventing fraudulent use of login credentials; (e) advertising – to help us display advertisements that will be relevant to you; (f) analysis – to help us analyse the use and performance of our website and services; and (g) cookie consent – to store your preferences in relation to the use of cookies more generally.</p>

        <h2>11. Cookies Used by Our Service Providers</h2>
        <p>11.1 Our service providers use cookies and those cookies may be stored on your computer when you visit our website.</p>
        <p>11.2 We use Google Analytics to analyse the use of our website. Google Analytics gathers information about website use by means of cookies. The information gathered relating to our website is used to create reports about the use of our website. Google's privacy policy is available at: <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">https://www.google.com/policies/privacy/</a>.</p>
        <p>11.3 We may publish Google AdSense advertisements on our website. To determine your interests, Google will track your behaviour on our website and on other websites across the web using cookies. You can view, delete or add interest categories associated with your browser by visiting: <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">https://adssettings.google.com</a>. You can also opt out of the AdSense partner network cookie using those settings or using the Network Advertising Initiative's multi-cookie opt-out mechanism at: <a href="http://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer">http://optout.networkadvertising.org</a>.</p>

        <h2>12. Managing Cookies</h2>
        <p>12.1 Most browsers allow you to refuse to accept cookies and to delete cookies. You can obtain up-to-date information about blocking and deleting cookies via these links:</p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank" rel="noopener noreferrer">Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">Firefox</a></li>
          <li><a href="http://www.opera.com/help/tutorials/security/cookies/" target="_blank" rel="noopener noreferrer">Opera</a></li>
          <li><a href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
          <li><a href="https://support.apple.com/kb/PH21411" target="_blank" rel="noopener noreferrer">Safari</a></li>
          <li><a href="https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy" target="_blank" rel="noopener noreferrer">Edge</a></li>
        </ul>
        <p>12.2 Blocking all cookies will have a negative impact upon the usability of many websites.</p>
        <p>12.3 If you block cookies, you will not be able to use all the features on our website.</p>

        <h2>13. Our Details</h2>
        <p>13.1 This website and service are owned and operated by Gospel Pillars. Our registered office is:</p>
        <address>11C Kudirat Abiola Way, Alausa, Ikeja, Lagos, Nigeria.</address>

        <h2>14. Data Protection Officer</h2>
        <p>14.1 Our data protection officer's contact details are:</p>
        <address>11C Kudirat Abiola Way, Alausa, Ikeja, Lagos, Nigeria.</address>

      </div>
    </ContentPage>
  );
}
