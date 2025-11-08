import React from "react";
import AppRadioButton from "../../component/form/AppRadioButton";
import CustomFormik from "../../component/form/CustomFormik";
import AppSelectField from "../../component/form/AppSelectField";
import { service } from "../../data/contact-us";
import AppInputField from "../../component/form/AppInputField";
import AppTextAreaField from "../../component/form/AppTextAreaField";
import AppSubmitButton from "../../component/form/AppSubmitButton";

const initialValues = {
  service: "",
  userType: "",
};

const ContactUsPage = () => {
  return (
    <div className="w-full pt-20 lg:pl-20 text-white">
      <div className="flex flex-row">
        <h1 className="w-[15%] lg:w-[8%] flex items-center justify-center [writing-mode:vertical-lr] transform rotate-180 text-2xl tracking-wider font-bold border-l border-r border-gray-700">
          WORK WITH US
        </h1>

        <div className="flex w-[100%] lg:w-[92%]">
          <div className="hidden w-[20%] h-[1500px] lg:flex flex-col gap-10 px-3 pt-4">
            <img src="/public/images/burnaboy.jpg" alt="" className="h-full" />
            <img src="/public/images/burnaboy.jpg" alt="" className="h-full" />
          </div>

          <div className="w-[100%] lg:w-[60%] px-4 pt-10 pb-10">
            <CustomFormik
              onSubmit={(values) => console.log(values)}
              initialValues={initialValues}
            >
              <div className="flex flex-col bg-black rounded-md shadow-2xl p-6 gap-10 border pt-15 pb-30">
                <h1 className="text-[20px] lg:text-4xl font-bold lg:mb-4">
                  INTERESTED IN WORKING WITH CREATE MUSIC GROUP?
                </h1>

                <span className="lg:mt-4">
                  Thank you for taking the time to share more about you.
                </span>

                <div className="flex flex-col mt-4 gap-3">
                  <label htmlFor="">
                    Which of the following best describes you?
                  </label>
                  <div className="flex flex-col lg:flex-row gap-3">
                    <AppRadioButton title="ARTIST" />
                    <AppRadioButton title="RECORD LABEL" />
                    <AppRadioButton title="PRODUCER" />
                    <AppRadioButton title="OTHER" />
                  </div>
                </div>

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-12">
                  <div className="col-span-1 lg:col-span-2 w-[100%] lg:w-[70%]">
                    <label className="text-sm">
                      What service(s) are you interested in?
                    </label>
                    <AppSelectField
                      name="service"
                      title="--select an item--"
                      array={service}
                    />
                  </div>
                  <div className="col-span-1 w-full lg:w-[90%]">
                    <label className=" text-sm">
                      Artist/Band/Company Name
                      <span className="text-[#e33874]">*</span>
                    </label>
                    <AppInputField
                      name="artist"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="col-span-1 lg:w-[90%]">
                    <label className=" text-sm">
                      Email <span className="text-[#e33874]">*</span>
                    </label>
                    <AppInputField
                      name="email"
                      type="text"
                      placeholder="Please enter your email"
                    />
                  </div>
                  <div className="col-span-1 lg:w-[90%]">
                    <label className=" text-sm">
                      Legal First Name <span className="text-[#e33874]">*</span>
                    </label>
                    <AppInputField
                      name="legal_first_name"
                      type="text"
                      placeholder="Enter your legal first name"
                    />
                  </div>
                  <div className="col-span-1 lg:w-[90%]">
                    <label className=" text-sm">
                      Legal Last Name <span className="text-[#e33874]">*</span>
                    </label>
                    <AppInputField
                      name="legal_last_name"
                      type="text"
                      placeholder="Enter your legal last name"
                    />
                  </div>
                  <div className="col-span-1 lg:w-[90%]">
                    <label className=" text-sm">
                      Date of Birth <span className="text-[#e33874]">*</span>
                    </label>
                    <AppInputField
                      name="date_of_birth"
                      type="text"
                      placeholder="Enter your date of birth"
                    />
                  </div>

                  <div className="w-full border-[1px] opacity-20 my-10 lg:col-span-2 col-span-1"></div>

                  <div className="col-span-1 lg:w-[90%]">
                    <label className=" text-sm">Website</label>
                    <AppInputField
                      name="website"
                      type="text"
                      placeholder="https://www.yourwebsite.com"
                    />
                  </div>
                  <div className="col-span-1 lg:w-[90%]">
                    <label className=" text-sm">Spotify Link</label>
                    <AppInputField
                      name="spotify"
                      type="text"
                      placeholder="https://www.yourspotify.com"
                    />
                  </div>
                  <div className="col-span-1 lg:w-[90%]">
                    <label className=" text-sm">Youtube Link</label>
                    <AppInputField
                      name="youtube"
                      type="text"
                      placeholder="https://www.youryoutube.com"
                    />
                  </div>
                  <div className="col-span-1 lg:w-[90%]">
                    <label className=" text-sm">Apple Music Link</label>
                    <AppInputField
                      name="applemusic"
                      type="text"
                      placeholder="https://www.yourapplemusic.com"
                    />
                  </div>
                  <div className="col-span-1 lg:w-[90%]">
                    <label className=" text-sm">Facebook Link</label>
                    <AppInputField
                      name="facebook"
                      type="text"
                      placeholder="https://www.yourfacebook.com"
                    />
                  </div>
                  <div className="col-span-1 lg:w-[90%]">
                    <label className=" text-sm">Twitter Link</label>
                    <AppInputField
                      name="twitter"
                      type="text"
                      placeholder="https://www.yourtwitter.com"
                    />
                  </div>
                  <div className="col-span-1 lg:w-[90%]">
                    <label className=" text-sm">Instagram Link</label>
                    <AppInputField
                      name="instagram"
                      type="text"
                      placeholder="https://www.yourinstagram.com"
                    />
                  </div>
                  <div className="col-span-1 lg:w-[90%]">
                    <label className=" text-sm">Snapchat Link</label>
                    <AppInputField
                      name="snapchat"
                      type="text"
                      placeholder="https://www.yoursnapchat.com"
                    />
                  </div>

                  <div className="lg:w-[100%] lg:col-span-2">
                    <label className=" text-sm">Notes</label>
                    <AppTextAreaField name="notes" type="text" />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div>
                    <span className="text-[#e33874]">*</span>- required
                  </div>

                  <AppSubmitButton title="Submit" />
                </div>
              </div>
            </CustomFormik>
          </div>

          <div className="w-[20%] hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
