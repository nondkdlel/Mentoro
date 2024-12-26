import { proxy } from "valtio";

export type MypageTabListType = {
  id: number;
  tabName?: string;
};

export const proxyMypageSellerTabList = proxy<MypageTabListType[]>([
  { id: 0, tabName: "판매 관리" },
  { id: 1, tabName: "MY 서비스" },
  { id: 2, tabName: "MY 포트폴리오" },
  { id: 3, tabName: "수익 관리" },
  { id: 4, tabName: "사업자 인증하기" },
]);

export const proxyMypageCustomerTabList = proxy<MypageTabListType[]>([
  { id: 0, tabName: "구매 관리" },
  { id: 1, tabName: "쿠폰함" },
  { id: 2, tabName: "캐시 충전 / 이용" },
  { id: 3, tabName: "결제 내역" },
  { id: 4, tabName: "찜한 상품" },
]);

export const proxyActiveSellerTab = proxy<{ sellerActiveId: number }>({
  sellerActiveId: 0,
});
export const proxyActiveCustomerTab = proxy<{ customerActiveId: number }>({
  customerActiveId: 0,
});
