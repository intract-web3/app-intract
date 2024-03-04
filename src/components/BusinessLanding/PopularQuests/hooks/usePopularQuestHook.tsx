import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { get } from "http";
async function getPopularQuests() {
  const response = await axios.get(
    "https://api.intract.io/api/qv1/homepage/trending?featureFlag=DEFAULT"
  );
  console.log(response);
  return response.data;
}
export const usePopularQuests = () => {
  const quests = useQuery({
    queryKey: ["popular_quests"],
    queryFn: getPopularQuests,
  });
};
