export interface Winner {
  name: string;
  amount: string;
}

export interface GameRate {
  title: string;
  rate: string;
}

export interface Game {
  name: string;
  numbers: string;
  status: string;
  statusColor: string;
  openTime: string;
  closeTime: string;
  hasVideo?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}