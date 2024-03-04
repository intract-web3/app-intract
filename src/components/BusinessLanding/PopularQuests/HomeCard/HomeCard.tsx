import { Card } from "../_atoms/Card/Card";
// import { CampaignRewardCategory, ICampaignReward } from '@/features/Quest';
// import { supportedVideoExtensions } from '@/features/Quest/components/rewards/Categories/NFTReward';
// import { abbreviateNumber } from '@/utils/parsers';
import { ReactNode, useMemo, useState } from "react";
import Marquee from "react-fast-marquee";
import cardStyles from "../_atoms/Card/card.module.css";
// import { TrackingProviderEventsEnum, useTracking } from '@/context/TrackingProvider';
import { RewardBadge } from "../_atoms/RewardBadge/RewardBadge";
import clsx from "clsx";
import { Link } from "react-router-dom";
import homeCardStyles from "./homeCard.module.css";

export function HomeCard({
  name,
  xps,
  projectName,
  projectLogo,
  numTasks,
  reward,
  description,
  hero,
  link,
  _id,
  actions,
  from,
  className,
  onClick,
}: {
  name: string;
  from?: string;
  banner: string;
  xps: number;
  numTasks: number;
  path: string;
  projectName: string;
  projectLogo: string;
  projectId: string;
  reward: any;
  onClick?: any;
  description: string;
  hero: ReactNode;
  link?: string;
  _id: string;
  className?: string;
  actions?: (node: ReactNode) => ReactNode;
}) {
  // const { trackEvent } = useTracking();
  const [play, setPlay] = useState(false);

  const formattedRewards = useMemo(() => {
    const rewards = [];

    if (numTasks) {
      rewards.push({
        label: `${numTasks} Tasks`,
        icon: <i className="bi bi-view-list text-danger" />,
      });
    }

    if (xps) {
      rewards.push({
        label: `${xps} XPs`,
        type: "xps",
      });
    }

    // if (!reward) return rewards;

    // const isTokenReward = reward?.find(
    // 	(i) => i.category === CampaignRewardCategory.Token,
    // );
    // const isNFTReward = reward?.find(
    // 	(i) => i.category === CampaignRewardCategory.Nft,
    // );
    // if (isTokenReward) {
    // 	rewards.push({
    // 		label:
    // 			abbreviateNumber(
    // 				+isTokenReward?.tokenReward?.tokenAmountPerUser *
    // 					isTokenReward.numRewards,
    // 			) +
    // 			' ' +
    // 			isTokenReward.tokenReward?.tokenSymbol,
    // 		link: isTokenReward?.tokenReward?.logo,
    // 	});
    // }
    // if (isNFTReward) {
    // 	const image = isNFTReward?.nftReward?.image;
    // 	const isVideo = supportedVideoExtensions?.includes(
    // 		'.' + image?.split('.')?.pop(),
    // 	);
    // 	const imgSource = image?.split('.')?.slice(0, -1)?.join('.') + '.png';
    // 	rewards.push({
    // 		label: isNFTReward.nftReward?.name,
    // 		link: isVideo ? imgSource : isNFTReward.nftReward?.image,
    // 	});
    // }
    return rewards;
  }, [reward, xps, numTasks]);

  const isMarqueeEligible = formattedRewards.length > 1;
  const navigationUrl = link || `/quest/${_id}`;

  return (
    <Link
      onClick={(e) => {
        if ((e.target as any).getAttribute("data-id") === "bookmark-quest")
          e.preventDefault();
      }}
      to={""}
    >
      <Card
        style={{
          cursor: "pointer",
        }}
        onMouseEnter={() => setPlay(true)}
        onMouseLeave={() => setPlay(false)}
        className={clsx(homeCardStyles.container)}
      >
        <div className={clsx(cardStyles.hero_section, className)}>{hero}</div>

        <div className={homeCardStyles.content_section}>
          {projectName && (
            <div>
              {projectLogo ? <img src={projectLogo} alt={name} /> : null}
              <span>{projectName}</span>
            </div>
          )}
          {name && <h4 className="text-truncate">{name}</h4>}
          {description && <p>{description}</p>}
        </div>

        {actions ? (
          actions(
            <div>
              <div className={homeCardStyles.fade_overlay} />
              {isMarqueeEligible ? (
                <Marquee
                  style={{
                    gap: "0.5rem",
                  }}
                  play={play}
                  key={play as any}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    {formattedRewards.map((i) => (
                      //   <>{i.label}</>
                      <RewardBadge>{i.label}</RewardBadge>
                    ))}
                  </div>
                </Marquee>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {formattedRewards.map((i) => (
                    // <>{i.label}</>
                    <RewardBadge>{i.label}</RewardBadge>
                  ))}
                </div>
              )}
            </div>
          )
        ) : (
          <div className={homeCardStyles.actions}>
            <div className={homeCardStyles.fade_overlay} />
            <hr />
            {isMarqueeEligible ? (
              <Marquee
                style={{
                  gap: "0.5rem",
                }}
                play={play}
                key={play as any}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {formattedRewards.map((i) => (
                    // <>{i.label}</>
                    <RewardBadge>{i.label}</RewardBadge>
                  ))}
                </div>
              </Marquee>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  width: "100%",
                }}
              >
                {formattedRewards.map((i) => (
                  //   <>{i.label}</>
                  <RewardBadge>{i.label}</RewardBadge>
                ))}
              </div>
            )}
          </div>
        )}
      </Card>
    </Link>
  );
}
