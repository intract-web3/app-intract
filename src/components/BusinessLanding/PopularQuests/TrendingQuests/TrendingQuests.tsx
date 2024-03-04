import { SwiperArrows } from "../SwiperArrows";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import trendingQuestStyles from "./trendingQuests.module.css";
import { HomeCard } from "../HomeCard/HomeCard";
import { HeroVariant5 } from "../HomeCard/components/HeroVariant5/HeroVariant5";
import { SectionContainer } from "../sectionContainer/SectionContainer";
import clsx from "clsx";
import axios from "axios";

export const MoreQuests = () => {
  //   const [data, setData] = useState([]);
  //   async function apiData() {
  //     const data = await axios
  //       .get(
  //         "https://api.intract.io/api/qv1/homepage/trending?featureFlag=DEFAULT",
  //         { crossdomain: true }
  //       )
  //       .then((result) => {
  //         console.log("result", result);
  //       })
  //       .catch((error) => {
  //         console.log("Error", error);
  //       });
  //     setData(data.data);
  //   }
  //   useEffect(() => {
  //     apiData();
  //   }, []);
  const data = [
    {
      _id: "65dee9a5062fd8f67f35f820",
      title: "Intract x Blast ",
      banner:
        "https://static.highongrowth.xyz/enterprise/65d444cd5c353020b681c8dc/566902839fbb43918fdac6a7b43fdd7b.jpg",
      reward: [
        {
          nftReward: {
            nftTokenId: "4",
            nftContractAddress: "0x5E68Be9a532eADF5EDcBC2BEc857D3d4b2e3AeC5",
            nftDocId: "65e1809ea9d7275c5089e1c2",
            chainId: 81457,
            nftAmountPerUser: 1,
            name: "Intract x Blast reward",
            image:
              "https://static.highongrowth.xyz/erc1155-images/65d444cd5c353020b681c8dc/1da6680fbfa74329971bf530e08b0fc5.jpg",
            isGasless: false,
          },
          _id: "65e195cea9d7275c5089fa7c",
          category: "NFT",
          method: "FCFS",
          numRewards: 1000000,
          countLeft: 997042,
          countWon: 2958,
          countInitiated: 2874,
          countClaimed: 2684,
          isUnlimited: false,
          isLuckyWinnersSelected: false,
          isLeaderboardWinnersSelected: false,
          isDistributedOnPlatform: true,
          isDistributedOnPlatformAfterLaunch: false,
        },
      ],
      xps: 90,
      numTasks: 8,
      path: "/quest/65dee9a5062fd8f67f35f820",
      projectName: "Blast Bang",
      projectId: "65d444cd5c353020b681c8dc",
      projectLogo: "",
      nftImage:
        "https://static.highongrowth.xyz/erc1155-images/65d444cd5c353020b681c8dc/1da6680fbfa74329971bf530e08b0fc5.jpg",
    },
    {
      _id: "65dee9a5062fd8f67f35f820",
      title: "Intract x Blast ",
      banner:
        "https://static.highongrowth.xyz/enterprise/65d444cd5c353020b681c8dc/566902839fbb43918fdac6a7b43fdd7b.jpg",
      reward: [
        {
          nftReward: {
            nftTokenId: "4",
            nftContractAddress: "0x5E68Be9a532eADF5EDcBC2BEc857D3d4b2e3AeC5",
            nftDocId: "65e1809ea9d7275c5089e1c2",
            chainId: 81457,
            nftAmountPerUser: 1,
            name: "Intract x Blast reward",
            image:
              "https://static.highongrowth.xyz/erc1155-images/65d444cd5c353020b681c8dc/1da6680fbfa74329971bf530e08b0fc5.jpg",
            isGasless: false,
          },
          _id: "65e195cea9d7275c5089fa7c",
          category: "NFT",
          method: "FCFS",
          numRewards: 1000000,
          countLeft: 997042,
          countWon: 2958,
          countInitiated: 2874,
          countClaimed: 2684,
          isUnlimited: false,
          isLuckyWinnersSelected: false,
          isLeaderboardWinnersSelected: false,
          isDistributedOnPlatform: true,
          isDistributedOnPlatformAfterLaunch: false,
        },
      ],
      xps: 90,
      numTasks: 8,
      path: "/quest/65dee9a5062fd8f67f35f820",
      projectName: "Blast Bang",
      projectId: "65d444cd5c353020b681c8dc",
      projectLogo: "",
      nftImage:
        "https://static.highongrowth.xyz/erc1155-images/65d444cd5c353020b681c8dc/1da6680fbfa74329971bf530e08b0fc5.jpg",
    },
    {
      _id: "65dee9a5062fd8f67f35f820",
      title: "Intract x Blast ",
      banner:
        "https://static.highongrowth.xyz/enterprise/65d444cd5c353020b681c8dc/566902839fbb43918fdac6a7b43fdd7b.jpg",
      reward: [
        {
          nftReward: {
            nftTokenId: "4",
            nftContractAddress: "0x5E68Be9a532eADF5EDcBC2BEc857D3d4b2e3AeC5",
            nftDocId: "65e1809ea9d7275c5089e1c2",
            chainId: 81457,
            nftAmountPerUser: 1,
            name: "Intract x Blast reward",
            image:
              "https://static.highongrowth.xyz/erc1155-images/65d444cd5c353020b681c8dc/1da6680fbfa74329971bf530e08b0fc5.jpg",
            isGasless: false,
          },
          _id: "65e195cea9d7275c5089fa7c",
          category: "NFT",
          method: "FCFS",
          numRewards: 1000000,
          countLeft: 997042,
          countWon: 2958,
          countInitiated: 2874,
          countClaimed: 2684,
          isUnlimited: false,
          isLuckyWinnersSelected: false,
          isLeaderboardWinnersSelected: false,
          isDistributedOnPlatform: true,
          isDistributedOnPlatformAfterLaunch: false,
        },
      ],
      xps: 90,
      numTasks: 8,
      path: "/quest/65dee9a5062fd8f67f35f820",
      projectName: "Blast Bang",
      projectId: "65d444cd5c353020b681c8dc",
      projectLogo: "",
      nftImage:
        "https://static.highongrowth.xyz/erc1155-images/65d444cd5c353020b681c8dc/1da6680fbfa74329971bf530e08b0fc5.jpg",
    },
    {
      _id: "65dee9a5062fd8f67f35f820",
      title: "Intract x Blast ",
      banner:
        "https://static.highongrowth.xyz/enterprise/65d444cd5c353020b681c8dc/566902839fbb43918fdac6a7b43fdd7b.jpg",
      reward: [
        {
          nftReward: {
            nftTokenId: "4",
            nftContractAddress: "0x5E68Be9a532eADF5EDcBC2BEc857D3d4b2e3AeC5",
            nftDocId: "65e1809ea9d7275c5089e1c2",
            chainId: 81457,
            nftAmountPerUser: 1,
            name: "Intract x Blast reward",
            image:
              "https://static.highongrowth.xyz/erc1155-images/65d444cd5c353020b681c8dc/1da6680fbfa74329971bf530e08b0fc5.jpg",
            isGasless: false,
          },
          _id: "65e195cea9d7275c5089fa7c",
          category: "NFT",
          method: "FCFS",
          numRewards: 1000000,
          countLeft: 997042,
          countWon: 2958,
          countInitiated: 2874,
          countClaimed: 2684,
          isUnlimited: false,
          isLuckyWinnersSelected: false,
          isLeaderboardWinnersSelected: false,
          isDistributedOnPlatform: true,
          isDistributedOnPlatformAfterLaunch: false,
        },
      ],
      xps: 90,
      numTasks: 8,
      path: "/quest/65dee9a5062fd8f67f35f820",
      projectName: "Blast Bang",
      projectId: "65d444cd5c353020b681c8dc",
      projectLogo: "",
      nftImage:
        "https://static.highongrowth.xyz/erc1155-images/65d444cd5c353020b681c8dc/1da6680fbfa74329971bf530e08b0fc5.jpg",
    },
    {
      _id: "65dee9a5062fd8f67f35f820",
      title: "Intract x Blast ",
      banner:
        "https://static.highongrowth.xyz/enterprise/65d444cd5c353020b681c8dc/566902839fbb43918fdac6a7b43fdd7b.jpg",
      reward: [
        {
          nftReward: {
            nftTokenId: "4",
            nftContractAddress: "0x5E68Be9a532eADF5EDcBC2BEc857D3d4b2e3AeC5",
            nftDocId: "65e1809ea9d7275c5089e1c2",
            chainId: 81457,
            nftAmountPerUser: 1,
            name: "Intract x Blast reward",
            image:
              "https://static.highongrowth.xyz/erc1155-images/65d444cd5c353020b681c8dc/1da6680fbfa74329971bf530e08b0fc5.jpg",
            isGasless: false,
          },
          _id: "65e195cea9d7275c5089fa7c",
          category: "NFT",
          method: "FCFS",
          numRewards: 1000000,
          countLeft: 997042,
          countWon: 2958,
          countInitiated: 2874,
          countClaimed: 2684,
          isUnlimited: false,
          isLuckyWinnersSelected: false,
          isLeaderboardWinnersSelected: false,
          isDistributedOnPlatform: true,
          isDistributedOnPlatformAfterLaunch: false,
        },
      ],
      xps: 90,
      numTasks: 8,
      path: "/quest/65dee9a5062fd8f67f35f820",
      projectName: "Blast Bang",
      projectId: "65d444cd5c353020b681c8dc",
      projectLogo: "",
      nftImage:
        "https://static.highongrowth.xyz/erc1155-images/65d444cd5c353020b681c8dc/1da6680fbfa74329971bf530e08b0fc5.jpg",
    },
    {
      _id: "65dee9a5062fd8f67f35f820",
      title: "Intract x Blast ",
      banner:
        "https://static.highongrowth.xyz/enterprise/65d444cd5c353020b681c8dc/566902839fbb43918fdac6a7b43fdd7b.jpg",
      reward: [
        {
          nftReward: {
            nftTokenId: "4",
            nftContractAddress: "0x5E68Be9a532eADF5EDcBC2BEc857D3d4b2e3AeC5",
            nftDocId: "65e1809ea9d7275c5089e1c2",
            chainId: 81457,
            nftAmountPerUser: 1,
            name: "Intract x Blast reward",
            image:
              "https://static.highongrowth.xyz/erc1155-images/65d444cd5c353020b681c8dc/1da6680fbfa74329971bf530e08b0fc5.jpg",
            isGasless: false,
          },
          _id: "65e195cea9d7275c5089fa7c",
          category: "NFT",
          method: "FCFS",
          numRewards: 1000000,
          countLeft: 997042,
          countWon: 2958,
          countInitiated: 2874,
          countClaimed: 2684,
          isUnlimited: false,
          isLuckyWinnersSelected: false,
          isLeaderboardWinnersSelected: false,
          isDistributedOnPlatform: true,
          isDistributedOnPlatformAfterLaunch: false,
        },
      ],
      xps: 90,
      numTasks: 8,
      path: "/quest/65dee9a5062fd8f67f35f820",
      projectName: "Blast Bang",
      projectId: "65d444cd5c353020b681c8dc",
      projectLogo: "",
      nftImage:
        "https://static.highongrowth.xyz/erc1155-images/65d444cd5c353020b681c8dc/1da6680fbfa74329971bf530e08b0fc5.jpg",
    },
    {
      _id: "65dee9a5062fd8f67f35f820",
      title: "Intract x Blast ",
      banner:
        "https://static.highongrowth.xyz/enterprise/65d444cd5c353020b681c8dc/566902839fbb43918fdac6a7b43fdd7b.jpg",
      reward: [
        {
          nftReward: {
            nftTokenId: "4",
            nftContractAddress: "0x5E68Be9a532eADF5EDcBC2BEc857D3d4b2e3AeC5",
            nftDocId: "65e1809ea9d7275c5089e1c2",
            chainId: 81457,
            nftAmountPerUser: 1,
            name: "Intract x Blast reward",
            image:
              "https://static.highongrowth.xyz/erc1155-images/65d444cd5c353020b681c8dc/1da6680fbfa74329971bf530e08b0fc5.jpg",
            isGasless: false,
          },
          _id: "65e195cea9d7275c5089fa7c",
          category: "NFT",
          method: "FCFS",
          numRewards: 1000000,
          countLeft: 997042,
          countWon: 2958,
          countInitiated: 2874,
          countClaimed: 2684,
          isUnlimited: false,
          isLuckyWinnersSelected: false,
          isLeaderboardWinnersSelected: false,
          isDistributedOnPlatform: true,
          isDistributedOnPlatformAfterLaunch: false,
        },
      ],
      xps: 90,
      numTasks: 8,
      path: "/quest/65dee9a5062fd8f67f35f820",
      projectName: "Blast Bang",
      projectId: "65d444cd5c353020b681c8dc",
      projectLogo: "",
      nftImage:
        "https://static.highongrowth.xyz/erc1155-images/65d444cd5c353020b681c8dc/1da6680fbfa74329971bf530e08b0fc5.jpg",
    },
    {
      _id: "65dee9a5062fd8f67f35f820",
      title: "Intract x Blast ",
      banner:
        "https://static.highongrowth.xyz/enterprise/65d444cd5c353020b681c8dc/566902839fbb43918fdac6a7b43fdd7b.jpg",
      reward: [
        {
          nftReward: {
            nftTokenId: "4",
            nftContractAddress: "0x5E68Be9a532eADF5EDcBC2BEc857D3d4b2e3AeC5",
            nftDocId: "65e1809ea9d7275c5089e1c2",
            chainId: 81457,
            nftAmountPerUser: 1,
            name: "Intract x Blast reward",
            image:
              "https://static.highongrowth.xyz/erc1155-images/65d444cd5c353020b681c8dc/1da6680fbfa74329971bf530e08b0fc5.jpg",
            isGasless: false,
          },
          _id: "65e195cea9d7275c5089fa7c",
          category: "NFT",
          method: "FCFS",
          numRewards: 1000000,
          countLeft: 997042,
          countWon: 2958,
          countInitiated: 2874,
          countClaimed: 2684,
          isUnlimited: false,
          isLuckyWinnersSelected: false,
          isLeaderboardWinnersSelected: false,
          isDistributedOnPlatform: true,
          isDistributedOnPlatformAfterLaunch: false,
        },
      ],
      xps: 90,
      numTasks: 8,
      path: "/quest/65dee9a5062fd8f67f35f820",
      projectName: "Blast Bang",
      projectId: "65d444cd5c353020b681c8dc",
      projectLogo: "",
      nftImage:
        "https://static.highongrowth.xyz/erc1155-images/65d444cd5c353020b681c8dc/1da6680fbfa74329971bf530e08b0fc5.jpg",
    },
    {
      _id: "65dee9a5062fd8f67f35f820",
      title: "Intract x Blast ",
      banner:
        "https://static.highongrowth.xyz/enterprise/65d444cd5c353020b681c8dc/566902839fbb43918fdac6a7b43fdd7b.jpg",
      reward: [
        {
          nftReward: {
            nftTokenId: "4",
            nftContractAddress: "0x5E68Be9a532eADF5EDcBC2BEc857D3d4b2e3AeC5",
            nftDocId: "65e1809ea9d7275c5089e1c2",
            chainId: 81457,
            nftAmountPerUser: 1,
            name: "Intract x Blast reward",
            image:
              "https://static.highongrowth.xyz/erc1155-images/65d444cd5c353020b681c8dc/1da6680fbfa74329971bf530e08b0fc5.jpg",
            isGasless: false,
          },
          _id: "65e195cea9d7275c5089fa7c",
          category: "NFT",
          method: "FCFS",
          numRewards: 1000000,
          countLeft: 997042,
          countWon: 2958,
          countInitiated: 2874,
          countClaimed: 2684,
          isUnlimited: false,
          isLuckyWinnersSelected: false,
          isLeaderboardWinnersSelected: false,
          isDistributedOnPlatform: true,
          isDistributedOnPlatformAfterLaunch: false,
        },
      ],
      xps: 90,
      numTasks: 8,
      path: "/quest/65dee9a5062fd8f67f35f820",
      projectName: "Blast Bang",
      projectId: "65d444cd5c353020b681c8dc",
      projectLogo: "",
      nftImage:
        "https://static.highongrowth.xyz/erc1155-images/65d444cd5c353020b681c8dc/1da6680fbfa74329971bf530e08b0fc5.jpg",
    },
    {
      _id: "65dee9a5062fd8f67f35f820",
      title: "Intract x Blast ",
      banner:
        "https://static.highongrowth.xyz/enterprise/65d444cd5c353020b681c8dc/566902839fbb43918fdac6a7b43fdd7b.jpg",
      reward: [
        {
          nftReward: {
            nftTokenId: "4",
            nftContractAddress: "0x5E68Be9a532eADF5EDcBC2BEc857D3d4b2e3AeC5",
            nftDocId: "65e1809ea9d7275c5089e1c2",
            chainId: 81457,
            nftAmountPerUser: 1,
            name: "Intract x Blast reward",
            image:
              "https://static.highongrowth.xyz/erc1155-images/65d444cd5c353020b681c8dc/1da6680fbfa74329971bf530e08b0fc5.jpg",
            isGasless: false,
          },
          _id: "65e195cea9d7275c5089fa7c",
          category: "NFT",
          method: "FCFS",
          numRewards: 1000000,
          countLeft: 997042,
          countWon: 2958,
          countInitiated: 2874,
          countClaimed: 2684,
          isUnlimited: false,
          isLuckyWinnersSelected: false,
          isLeaderboardWinnersSelected: false,
          isDistributedOnPlatform: true,
          isDistributedOnPlatformAfterLaunch: false,
        },
      ],
      xps: 90,
      numTasks: 8,
      path: "/quest/65dee9a5062fd8f67f35f820",
      projectName: "Blast Bang",
      projectId: "65d444cd5c353020b681c8dc",
      projectLogo: "",
      nftImage:
        "https://static.highongrowth.xyz/erc1155-images/65d444cd5c353020b681c8dc/1da6680fbfa74329971bf530e08b0fc5.jpg",
    },
  ];

  const prevEl = useRef(null);
  const nextEl = useRef(null);

  return (
    <SectionContainer
      className={clsx(trendingQuestStyles.section_container)}
      title=""
      actions={null}
    >
      <div className={trendingQuestStyles.cards_section}>
        {/* <div className="d-none d-sm-block">
          <SwiperArrows prevEl={prevEl} nextEl={nextEl} />
        </div> */}
        <Swiper
          // modules={[Navigation]}
          onSwiper={(swiper) => {
            // Delay execution for the refs to be defined
            setTimeout(() => {
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          navigation={{
            prevEl: prevEl.current,
            nextEl: nextEl.current,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            400: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
            500: {
              slidesPerView: 1.4,
              spaceBetween: 12,
            },
            600: {
              slidesPerView: 1.8,
              spaceBetween: 12,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            800: {
              slidesPerView: 2.2,
              spaceBetween: 12,
            },
            900: {
              slidesPerView: 2.8,
              spaceBetween: 12,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            1100: {
              slidesPerView: 3.1,
              spaceBetween: 12,
            },
            1200: {
              slidesPerView: 3.8,
              spaceBetween: 16,
            },
          }}
        >
          {data.map((data, index) => (
            <SwiperSlide
              key={index}
              style={{
                height: "auto",
              }}
            >
              <HomeCard
                description={""}
                {...data}
                name={data.title}
                className={trendingQuestStyles.card}
                hero={
                  <HeroVariant5
                    _id={data._id}
                    order={index}
                    banner={data.banner}
                  />
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionContainer>
  );
};
