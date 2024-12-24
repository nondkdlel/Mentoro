import { proxy } from "valtio";

export type MypageStatusType = {
  type: "seller" | "customer";
};
export const proxyAlarmModalStatus = proxy<MypageStatusType>({
  type: "seller",
});
