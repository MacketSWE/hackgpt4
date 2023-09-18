export type Event = {
  id: string;
  baby: string;
  type: "eat" | "sleep";
  deleted: boolean;
  foodTime?: number;
  sleepStartTime?: number;
  sleepEndTime?: number;
  comment?: string;
};
