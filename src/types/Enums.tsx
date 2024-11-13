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