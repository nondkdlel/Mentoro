import { proxy } from "valtio";

interface ModalStatusType {
  isCharge?: boolean;
  isRefund?: boolean;
}

export const proxyModalStatus = proxy<ModalStatusType>({
  isCharge: false,
  isRefund: false,
});
