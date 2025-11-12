import React from "react";

const CreateMusicGroup = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-[100%] lg:w-[20%]"></div>
      <div className="w-[100%] lg:w-[30%] flex flex-col gap-8 px-3 pt-6">
        <div className="font-bold text-4xl">WE ARE</div>
        <div className="text-5xl lg:text-7xl font-bold">CREATE MUSIC GROUP</div>
        <div className="flex flex-col gap-2 text-lg">
          <span className="font-bold uppercase">Empowering artists and labels</span>
          <span className="text-[16px]"> 
            We’ve been in the music industry for years and have some of the
            world’s biggest artists and labels under our umbrella. Music is our
            passion, and we provide dedicated teams to help you with your career
            or corporate goals - you’ll always have a direct line to your
            account manager.
          </span>
        </div>
        <div className="flex flex-col gap-2 text-lg">
          <span className="font-bold uppercase">Data-driven solutions designed for the music industry.</span>
          <span className="text-[16px]">
            Our innovation and technology department has provided worldwide
            exclusives like daily earnings and estimates via our dedicated
            client portal, best-in-class copyright detection and content
            monetization, an industry leading distribution platform, and mobile
            apps to keep you in control of your music.
          </span>
        </div>
      </div>
      <div className="w-[100%] lg:w-[50%] flex flex-col items-center gap-4 px-4 pt-6">
        <img
          src="/public/images/nicki-minaj1.jpg"
          alt="create-music-group"
          className="w-full object-cover"
        />
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-lg uppercase">Artist-first approach</h1>
          <span className="mb-6">
            At Create Music Group, we believe in taking an Artist-First
            approach. We provide white glove services that foster an ecosystem
            to support you and your team while allowing you to maintain
            ownership of your content.
          </span>
          <span>
            We maximize opportunities to monetize content across all platforms,
            provide access to proprietary technology that transparently allows
            you to track earnings in real-time, and offer premier label services
            - all without comprising ownership or creativity.
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreateMusicGroup;
