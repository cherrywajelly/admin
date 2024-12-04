export const BankName = {
  IBKOKRSE: 'IBK기업은행',
  NACFKRSE: 'NH농협은행',
  NFFCKRSE: 'Sh수협은행',
  CZNBKRSE: 'KB국민은행',
  HVBKKRSE: '우리은행',
  SCBLKRSE: 'SC제일은행',
  KOEXKRSE: '하나은행',
  SHBKKRSE: '신한은행',
  KAKOKR22: '카카오뱅크',
  TOBNKRSE: '토스뱅크',
} as const;
export type BankName = (typeof BankName)[keyof typeof BankName];

export const ApprovalState = {
  PENDING: '승인 대기',
  APPROVED: '승인 완료',
  REJECTED: '반려',
} as const;
export type ApprovalState = (typeof ApprovalState)[keyof typeof ApprovalState];

export const AdminMenu = {
  ICON_LIST: '아이콘 목록',
  ICON_DETAIL: '아이콘 상세',
  CREATOR_LIST: '제작자 목록',
  CREATOR_DETAIL: '제작자 상세',
  SETTLEMENT_LIST: '정산하기',
  SETTLEMENT_DETAIL: '정산 상세',
  INQUIRY_LIST: '문의 목록',
  INQUIRY_DETAIL: '문의 상세',
  USER_LIST: '유저 관리',
  USER_DETAIL: '유저 상세',
  TOAST_LIST: '토스트 관리',
  TOAST_DETAIL: '토스트 상세',
  GROUP_LIST: '그룹 관리',
  GROUP_DETAIL: '그룹 상세',
  PAYMENT_LIST: '결제 관리',
  PAYMENT_DETAIL: '결제 상세',
  PROMETHEUS: 'Prometheus',
  LOKI: 'Loki',
} as const;
export type AdminMenu = (typeof AdminMenu)[keyof typeof AdminMenu];

export const CreatorMenu = {
  ICON_LIST: '아이콘 목록',
  ICON_DETAIL: '아이콘 상세',
  ICON_REGISTER: '아이콘 등록',
  SETTLEMENT_LIST: '정산하기',
  SETTLEMENT_DETAIL: '정산 상세',
  MY_PAGE: '마이페이지',
  ACCOUNT_MODIFICATION: '수정하기',
} as const;
export type CreatorMenu = (typeof CreatorMenu)[keyof typeof CreatorMenu];

export const MethodType = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
  PUT: 'PUT',
} as const;
export type MethodType = (typeof MethodType)[keyof typeof MethodType];
