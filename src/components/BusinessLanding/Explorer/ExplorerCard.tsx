import React from "react";
import bend from "../assets/bend.svg";
import Image from "next/image";
import explorercss from "./explorercard.module.css";
import profile from "../assets/Male 1.svg";
const Profile = ({
  imgUrl,
  name,
  designation,
}: {
  imgUrl: string;
  name: string;
  designation: string;
}) => {
  return (
    <article className="gap-[32px] flex justify-start ml-2">
      <Image
        src={imgUrl}
        className="rounded-full w-22 h-22"
        alt={"profile-image"}
      ></Image>
      <div className="flex flex-col">
        <span className={explorercss.explorer_name}>{name}</span>
        <span className={explorercss.explorer_designation}>{designation}</span>
      </div>
    </article>
  );
};
function ExplorerCard() {
  return (
    <div className={explorercss.explorercss}>
      <div className={explorercss.inner_card}>
        <span className={explorercss.heading}>
          Best Quest Platform out there
        </span>
        <span className={explorercss.highlight_subheading}>
          Base Onchain Compass PRO ---{" "}
          <span className={explorercss.remaining}>
            Don't think most of these projects should be out of Testnet, but yet
            here we are, one step ahead and providing guides one step ahead.
            Amazing work, this platform is the best for web3 quest. Really good
            features! Add please more ecosystems!
          </span>
        </span>
      </div>
      {/* <div className={explorercss.bend}>
        <Image src={bend} alt="bend" />
      </div> */}
      <Profile
        imgUrl={profile}
        name={"Manoj Kumar"}
        designation={"VP zomato"}
      />
    </div>
  );
}

export default ExplorerCard;
