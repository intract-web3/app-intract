"use client";
import { Card } from "../_atoms/Card/Card";
// import { CampaignRewardCategory, ICampaignReward } from '@/features/Quest';
// import { supportedVideoExtensions } from '@/features/Quest/components/rewards/Categories/NFTReward';
// import { abbreviateNumber } from '@/utils/parsers';
import { ReactNode, useMemo, useState } from "react";
import Marquee from "react-fast-marquee";
import cardStyles from "../_atoms/Card/card.module.css";
import { RewardBadge } from "../_atoms/RewardBadge/RewardBadge";
import clsx from "clsx";
import Image from "next/image";
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
    return rewards;
  }, [xps, numTasks]);

  const isMarqueeEligible = formattedRewards.length > 1;
  const navigationUrl = link || `/quest/${_id}`;

  return (
    <Link to={""}>
      <Card
        style={{
          cursor: "pointer",
        }}
        className={clsx(homeCardStyles.container)}
      >
        <div className={clsx(cardStyles.hero_section, className)}>{hero}</div>

        <div className={homeCardStyles.content_section}>
          {projectName && (
            <div>
              {projectLogo ? <Image src={projectLogo} alt={name} /> : null}
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
                    {formattedRewards.map((i, index) => (
                      //   <>{i.label}</>
                      <div key={index}>
                        <RewardBadge>{i.label}</RewardBadge>
                      </div>
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
                  {formattedRewards.map((i, index) => (
                    <div key={index}>
                      <RewardBadge>{i.label}</RewardBadge>
                    </div>
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
                  {formattedRewards.map((i, index) => (
                    <div key={index}>
                      <RewardBadge>{i.label}</RewardBadge>
                    </div>
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
                {formattedRewards.map((i, index) => (
                  <div key={index}>
                    <RewardBadge>{i.label}</RewardBadge>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </Card>
    </Link>
  );
}
