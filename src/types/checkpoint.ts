export type CheckPoint = {
  id: string;
  storage: string;
  name: string;
  point: number;
  quiz: null | {
    question: string;
    select: {
      "1": string;
      "2": string;
      "3": string;
    };
    answer: {
      number: string;
      explanation: string;
    };
  };
};
