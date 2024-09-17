import React from "react";

import SayyoMeta from "@/components/SayyoMeta";

import { Footer, Header } from "../../components";

const pp = () => {
  return (
    <>
      <SayyoMeta />
      <div className="relative pb-[264px] md720:pb-[173px] tall:pb-0">
        <Header.Green />

        {/** content */}
        <div className="mx-auto pl-[18px] pr-[18px] pt-[113px] pb-[40px] max-w-[1030px] box-content">
          <h4 className="mb-[34px] font-Roboto text-[28px] font-bold">
            Privacy policy
          </h4>
          <p className="text-right">Last updated: 01/Sep/2024</p>
          <p className="text-[18px] font-light">
            <strong className="font-bold">1. Introduction</strong>
            <br />
            <br />
            Sayyo~ (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
            committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you use our mobile application (the &quot;App&quot;). Please read
            this Privacy Policy carefully. If you do not agree with the terms of
            this Privacy Policy, please do not use the App.
            <br />
            <br />
            <strong className="font-bold">2. Information We Collect</strong>
            <br />
            <br />
            a. Personal Information
            <br />
            When you register for an account or use the App, we may collect the
            following personal information:
            <br />
            <br />
            Name
            <br /> Email address
            <br /> Phone number
            <br />
            Payment information
            <br /> Profile information,
            <br /> such as skills and experience
            <br />
            <br />
            b. Non-Personal Information
            <br /> We may also collect non-personal information about your use
            of the App, such as:
            <br />
            <br /> Device information (e.g., device model, operating system)
            <br /> Log data (e.g., IP address, browser type, access times)
            <br /> Usage data (e.g., pages viewed, features used)
            <br />
            <br />
            <strong className="font-bold">
              3. How We Use Your Information
            </strong>
            <br />
            <br />
            We may use the information we collect for the following purposes:
            <br />
            <br /> To provide, operate, and maintain the App
            <br /> To improve, personalize, and expand the App
            <br /> To understand and analyze how you use the App
            <br /> To develop new products, services, features, and
            functionality
            <br /> To communicate with you, including for customer service,
            updates, and promotional purposes
            <br /> To process transactions and manage your orders
            <br /> To detect and prevent fraud and other illegal activities
            <br /> To comply with legal obligations
            <br />
            <br />
            <strong className="font-bold">4. Sharing Your Information</strong>
            <br />
            <br /> We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent, except in the
            following circumstances:
            <br />
            <br /> With service providers who assist us in operating the App and
            providing services to you
            <br /> To comply with legal obligations, such as responding to
            subpoenas or court orders
            <br /> To protect our rights and property, or the safety of our
            users or the public
            <br /> In connection with a merger, acquisition, or sale of all or a
            portion of our assets
            <br />
            <br />
            <strong className="font-bold">
              5. Security of Your Information
            </strong>
            <br />
            <br /> We use administrative, technical, and physical security
            measures to help protect your personal information. While we have
            taken reasonable steps to secure the personal information you
            provide, please be aware that no security measures are perfect or
            impenetrable, and no method of data transmission can be guaranteed
            against any interception or other types of misuse.
            <br />
            <br />
            <strong className="font-bold">6. Your Privacy Rights</strong>
            <br />
            <br />
            Depending on your location, you may have the following rights
            regarding your personal information:
            <br />
            <br />
            The right to access the personal information we hold about you
            <br /> The right to request the correction of inaccurate personal
            information
            <br /> The right to request the deletion of your personal
            information
            <br /> The right to restrict or object to the processing of your
            personal information
            <br />
            The right to data portability
            <br /> The right to withdraw consent to our processing of your
            personal information
            <br /> To exercise these rights, please contact us at{" "}
            <a
              href="mailto:cs.sayyo.viet@gmail.com"
              className="text-[#254DDD] underline"
            >
              cs.sayyo.viet@gmail.com
            </a>
            <br />
            <br />
            <strong className="font-bold">7. Children&apos;s Privacy</strong>
            <br />
            <br />
            The App is not intended for use by children under the age of 13, and
            we do not knowingly collect personal information from children under
            13. If we become aware that we have inadvertently received personal
            information from a user under the age of 13, we will delete such
            information from our records.
            <br />
            <br />
            <strong className="font-bold">
              8. Changes to This Privacy Policy
            </strong>
            <br />
            <br /> We may update this Privacy Policy from time to time. We will
            notify you of any changes by posting the new Privacy Policy on the
            App. You are advised to review this Privacy
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default pp;
