export interface IPoll {
  id: string;
  title: string;
  status: string;
  createdDate: string;
  votes: number;
  options?: IPollOption[];
}

export interface IPollOption {
  id: string;
  title: string;
  votes: number;
  pollId: string;
}
