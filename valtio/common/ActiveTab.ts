import { proxy } from "valtio";

interface ActiveTabType {
  tabId: number;
}

export const proxyActiveTab = proxy<ActiveTabType>({
  tabId: 0,
});
