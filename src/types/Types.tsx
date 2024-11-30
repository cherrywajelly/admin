export type Inquiry = {
  id: number;
  title: string;
  isResolved: boolean;
};

export type InquiryDetail = {
  id: number;
  author: string;
  title: string;
  content: string;
  createdAt: string;
  images?: string[];
  isResolved: boolean;
};