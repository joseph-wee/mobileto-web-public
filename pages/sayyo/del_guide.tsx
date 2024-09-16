import React from "react";

import { Footer, Header } from "../../components";

const del_guide = () => {
  return (
    <div className="relative pb-[264px] md720:pb-[173px] tall:pb-0">
      <Header.Green />

      {/** content */}
      <div className="mx-auto pl-[18px] pr-[18px] pt-[113px] pb-[40px] max-w-[1030px] box-content">
        <h4 className="mb-[34px] font-Roboto text-[28px] font-bold">
          Account Deletion Guide
        </h4>
        <p className="text-right">Last updated: 01/Sep/2024</p>
        <p className="text-[18px] font-light">
          Important Things to Know Before Deleting Your Account
          <br />
          Before proceeding with account deletion, please review the following
          information:
          <br />
          <br />
          1. Data Deletion:
          <br />
          Deleting your account will permanently erase all data associated with
          it (e.g., profile information, posts, messages, in-app purchase
          history).
          <br />
          Deleted data cannot be recovered. Please back up any important data
          before proceeding.
          <br />
          <br />
          2. Login Information:
          <br />
          After account deletion, you will no longer be able to access the app
          using any login method, including Apple Login, Facebook Login, or
          Google Login.
          <br />
          Even if you re-register, your previous account data will not be
          restored.
          <br />
          <br />
          <strong className="text-[20px] font-bold">
            How to Delete Your Account
          </strong>
          <br />
          <br />
          1. Go to Account Settings:
          <br />
          Open the app, tap on the menu button in the top right corner, and
          navigate to [Settings]
          <br />
          <br />
          2. Request Account Deletion:
          <br />
          In the Setting screen, tap on the [Withdraw] button.
          <br />
          <br />
          3. Confirm Login Method:
          <br />
          Select the login method you used (Apple Login, Facebook Login, or
          Google Login) and log in again.
          <br />
          <br />
          4. Enter Password and Confirm:
          <br />
          To confirm the deletion, enter your password and tap [Confirm Account
          Deletion].
          <br />
          <br />
          5. Completion:
          <br />
          After confirmation, your account will be deleted, and you will be
          automatically logged out. It may take up to 24 hours to fully process
          the deletion.
          <br />
          <br />
          <strong className="text-[20px] font-bold">
            Need Further Assistance?
          </strong>
          <br />
          <br />
          If you need help with account deletion, please contact our support
          team:
          <br />
          <br />
          Email:{" "}
          <a
            href="mailto:cs.sayyo.viet@gmail.com"
            className="text-[#254DDD] underline"
          >
            cs.sayyo.viet@gmail.com
          </a>
          <br />
          Operating Hours: Monday-Friday, 9:00 AM - 6:00 PM
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default del_guide;
