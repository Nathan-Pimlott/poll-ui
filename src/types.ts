export interface IPoll {
  id: string;
  title: string;
  status: string;
  createdDate: string;
  votes: number;
  options?: IPollOption[];
}

export type IPollToCreate = Omit<IPoll, "id">;

export interface IPollOption {
  id: string;
  title: string;
  votes: number;
  pollId: string;
}

export interface IPollVote {
  id: string;
  createdDate: string;
  pollId: string;
  optionId: string;
}
