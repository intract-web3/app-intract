import heroVariant5Styles from "./heroVariant5.module.css";

import gridPng from "./grid-trending.png";
import { useMemo } from "react";
import clsx from "clsx";
import BookMark from "./Bookmark.png";
import Image from "next/image";
export const HeroVariant5 = ({
  banner,
  _id,
  order,
}: {
  banner: string;
  _id: string;
  order: number;
}) => {
  // const { showLogin } = useLogin();
  // const { isLoggedIn } = useAuth();

  // const { questBookmarks } = useGetQuestCardBookmarkStatuses();

  // const { iQuestSaveBookmarkLoading, questSaveBookmark } =
  // 	useQuestSaveBookmark(_id);

  // const { iQuestUnSaveBookmarkLoading, questUnSaveBookmark } =
  // 	useQuestUnSaveBookmark(_id);

  // const isBookmarked = questBookmarks[_id];

  const randomNo = useMemo(() => {
    return Math.floor((order + 1) % 4);
  }, []);

  return (
    <div
      className={clsx(
        heroVariant5Styles.container,
        heroVariant5Styles[`bg-${randomNo}`]
      )}
    >
      <div>
        <Image src={gridPng} alt="grid" />

        <div>
          <img src={banner} alt="banner" />
        </div>
      </div>

      <button
        data-id="bookmark-quest"
        // disabled={iQuestSaveBookmarkLoading || iQuestUnSaveBookmarkLoading}
      >
        <Image src={BookMark} alt="book-mark"></Image>
        {/* { || iQuestUnSaveBookmarkLoading ? (
					<span className="spinner-border spinner-border-sm" />
				) : isBookmarked ? (
					<i
						data-id="bookmark-quest"
						className="bi-bookmark-fill text-white"
					/>
				) : (
					<i data-id="bookmark-quest" className="bi-bookmark" />
				)} */}
      </button>
    </div>
  );
};
