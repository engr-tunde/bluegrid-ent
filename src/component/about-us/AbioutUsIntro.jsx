import React from "react";

const AbioutUsIntro = () => {
  return (
    <div className="bg-white text-black w-full flex flex-col lg:flex-row py-16 rounded-bl-4xl">
      <div className="w-full lg:w-[20%]"></div>
      <div className="w-full lg:w-[30%] flex flex-col gap-8 px-3 pt-6">
        <div className="flex flex-col gap-2 text-lg">
          <span className="font-bold uppercase">
            Bluegrid Entertainment is a global digital distribution, music
            publishing and label services company.
          </span>
          <span className="text-[16px] text-black/90">
            Bluegrid Entertainment work with artists, labels, distributors,
            songwriters and right-holders to send their music to over 150
            digital download, streaming, and interactive platforms; as well as
            offering music publishing, digital marketing packages and additional
            music services.
          </span>
        </div>
        <div className="flex flex-col gap-2 text-lg">
          <span className="font-bold uppercase">
            Data-driven solutions designed for the music industry.
          </span>
          <span className="text-[16px] text-black/90">
            Our innovation and technology department has provided worldwide
            exclusives like daily earnings and estimates via our dedicated
            client portal, best-in-class copyright detection and content
            monetization, an industry leading distribution platform, and mobile
            apps to keep you in control of your music.
          </span>
        </div>
      </div>
      <div className="w-[100%] lg:w-[50%] flex flex-col items-center gap-4 px-4 pt-6">
        {/* <img
          src="/images/nicki-minaj1.jpg"
          alt="create-music-group"
          className="w-full object-cover"
        /> */}
        <div
          className="lg:w-[500px]  m-auto  border-[#ffffff4f] border-4 border-dashed"
          style={{ borderSpacing: "15px 5px", borderCollapse: "separate" }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full "
            src="/videos/bluegrid-vid-5.mp4"
          ></video>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-lg uppercase">Client-first approach</h1>
          <span className="mb-6 text-black/90">
            {/* At Bluegrid Entertainment, we believe in taking an Artist-First
            approach. We provide white glove services that foster an ecosystem
            to support you and your team while allowing you to maintain
            ownership of your content. */}
            We are always honest with our clients and partners, constantly
            evolving our technology to meet and exceed the needs of our clients
            globally, willing to go the extra mile for clients and provide a
            professional and efficient service, andlways listening to other's
            ideas and recommendations, offering advice and being empathetic to
            our partners' and clients' needs.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AbioutUsIntro;
