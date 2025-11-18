import { useEffect } from "react";
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
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleContact = (values) => {
    window.location.href("mailto:info@bluegrident.com");
  };

  return (
    <div className="w-full pt-20 lg:pl-20 text-white">
      <div className="flex flex-row">
        <h1 className="w-[15%] lg:w-[8%] flex items-center justify-center [writing-mode:vertical-lr] transform rotate-180 text-2xl tracking-wider font-extrabold border-l border-r border-gray-700">
          WORK WITH US
        </h1>

        <div className="flex w-[100%] lg:w-[92%]">
          <div className="hidden w-[20%] h-[1000px] lg:flex flex-col gap-10 px-3 pt-4">
            <img
              src="/images/lil-wayne-2.webp"
              alt=""
              className="h-full object-cover"
            />
          </div>

          <div className="w-[100%] lg:w-[60%] px-4 pt-10 pb-10">
            <CustomFormik
              onSubmit={(values) => handleContact(values)}
              initialValues={initialValues}
            >
              <div className="flex flex-col bg-black rounded-md shadow-2xl p-6 gap-10 border pt-15 pb-30">
                <h1 className="text-[20px] lg:text-4xl font-bold lg:mb-4">
                  INTERESTED IN WORKING WITH BLUEGRID ENTERTAINMENT?
                </h1>

                <span className="lg:mt-4">
                  Thank you for taking the time to share more about you.
                </span>

                <div className="flex flex-col gap-3">
                  <label htmlFor="">
                    Which of the following best describes you?
                  </label>
                  <div className="flex flex-col lg:flex-row gap-3">
                    <AppRadioButton name="type" title="ARTIST" />
                    <AppRadioButton name="type" title="RECORD LABEL" />
                    <AppRadioButton name="type" title="PRODUCER" />
                    <AppRadioButton name="type" title="OTHER" />
                  </div>
                </div>

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-7">
                  <div className="col-span-1 lg:col-span-2 w-full lg:w-[95%]">
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
                      <span className="text-[#008ad3]">*</span>
                    </label>
                    <AppInputField
                      name="artist"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="col-span-1 lg:w-[90%]">
                    <label className=" text-sm">
                      Email <span className="text-[#008ad3]">*</span>
                    </label>
                    <AppInputField
                      name="email"
                      type="text"
                      placeholder="Please enter your email"
                    />
                  </div>
                  <div className="col-span-1 lg:w-[90%]">
                    <label className=" text-sm">
                      Legal First Name <span className="text-[#008ad3]">*</span>
                    </label>
                    <AppInputField
                      name="legal_first_name"
                      type="text"
                      placeholder="Enter your legal first name"
                    />
                  </div>
                  <div className="col-span-1 lg:w-[90%]">
                    <label className=" text-sm">
                      Legal Last Name <span className="text-[#008ad3]">*</span>
                    </label>
                    <AppInputField
                      name="legal_last_name"
                      type="text"
                      placeholder="Enter your legal last name"
                    />
                  </div>

                  <div className="lg:w-[100%] lg:col-span-2">
                    <label className=" text-sm">Notes</label>
                    <AppTextAreaField name="notes" type="text" />
                  </div>
                </div>

                <div className="flex justify-end">
                  {/* <AppSubmitButton title="Submit" /> */}
                  <a
                    href="mailto:info@bluegrident.com?subject=Contacting from Bluegrid Entertainment Website"
                    className={`w-max primary-btn p-2 `}
                  >
                    Submit
                  </a>
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
