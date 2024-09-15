import React from "react";

import { Footer, Header } from "../../../components";

const terms_of_conditions = () => {
  return (
    <div className="relative pb-[264px] md720:pb-[173px] tall:pb-0">
      <Header.GreenEn />

      {/** content */}
      <div className="mx-auto pl-[18px] pr-[18px] pt-[113px] pb-[40px] max-w-[1030px] box-content">
        <h4 className="mb-[34px] font-Roboto text-[28px] font-bold">
          Terms and Conditions
        </h4>
        <p className="text-right">Last updated: 01/Sep/2024</p>
        <p className="text-[18px] font-light">
          <strong className="font-bold">1. Introduction</strong>
          <br />
          <br />
          These Terms and Conditions (&quot;Terms&quot;) govern the use of
          Sayyo~ (&quot;App&quot;). By accessing or using the App, you agree to
          be bound by these Terms. If you do not agree to these Terms, you may
          not use the App.
          <br />
          <br />
          <strong className="font-bold">2. Description of Services</strong>
          <br />
          <br />
          The App provides a platform for users to buy and sell talents. Users
          can offer their talents for sale or purchase talents from other users.
          <br />
          <br />
          <strong className="font-bold">3. User Accounts</strong>
          <br />
          <br />
          Account Registration: To use the App, you must register for an
          account. All information provided during registration must be accurate
          and up-to-date.
          <br />
          Account Security: You are responsible for maintaining the security of
          your account. You are liable for all activities that occur under your
          account.
          <br />
          Account Termination: You may terminate your account at any time. The
          App operator reserves the right to terminate accounts that violate
          these Terms.
          <br />
          <br />
          <strong className="font-bold">4. User Content</strong>
          <br />
          <br />
          Ownership: Users retain ownership of all content they upload to the
          App.
          <br />
          License to Use: By uploading content to the App, you grant the App
          operator a non-exclusive, worldwide, royalty-free license to use the
          content for the purpose of providing the services.
          <br />
          Prohibited Content: User content must not be illegal, infringe on
          others&apos; rights, or contain inappropriate material.
          <br />
          <br />
          <strong className="font-bold">5. Transaction Terms</strong>
          <br />
          <br />
          Payments: All payments are processed through the App, and users must
          provide accurate payment information. <br />
          Refunds: Refund policies are specified separately. All transactions
          may be non-refundable. <br />
          Dispute Resolution: In case of a dispute regarding a transaction, the
          App operator reserves the right to intervene and make the final
          decision.
          <br />
          <br />
          <strong className="font-bold">6. Prohibited Activities</strong>
          <br />
          <br />
          Fraudulent Activities: Users must not engage in fraud, identity theft,
          hacking, or any other illegal activities through the App.
          <br />
          Other Prohibited Activities: Any activities that violate applicable
          laws or these Terms are prohibited.
          <br />
          <br />
          <strong className="font-bold">7. Limitation of Liability</strong>
          <br />
          <br />
          The App operator is not liable for any direct, indirect, incidental,
          special, or consequential damages arising out of or in connection with
          the use of the services. Users assume all risks associated with the
          use of the App.
          <br />
          <br />
          <strong className="font-bold">8. Changes to Terms</strong>
          <br />
          <br />
          The App operator may modify these Terms at any time. Changes will be
          posted on the App, and by continuing to use the App after changes are
          posted, you agree to be bound by the updated Terms.
          <br />
          <br />
          <strong className="font-bold">9. Contact Information</strong>
          <br />
          <br />
          If you have any questions about these Terms, please contact us at{" "}
          <a
            href="mailto:cs.sayyo.viet@gmail.com"
            className="text-[#254DDD] underline"
          >
            cs.sayyo.viet@gmail.com
          </a>
        </p>
      </div>

      <Footer.En />
    </div>
  );
};

export default terms_of_conditions;
