// types/message.d.ts
export type Message = {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  type?: 'text' | 'code';
};
