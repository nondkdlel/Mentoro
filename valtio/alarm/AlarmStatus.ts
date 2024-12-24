import { proxy } from "valtio";

export type AlarmModalStatusType = {
  status: boolean;
};
export const proxyAlarmModalStatus = proxy<AlarmModalStatusType>({
  status: false,
});
