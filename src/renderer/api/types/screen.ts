export type TScreenState =
  | "WELCOME"
  | "PASSWORD"
  | "LOADING"
  | "HOME"
  | "CONNECT"
  | "PRESALE"
  | "REGULAR_SALE"
  | "MY_APES_PRESALE"
  | "MY_APES_REGULAR"
  | "CONFIRMATION"
  | "GAMES"
  | "NSFW"
  | "DEFAULT";

export interface IScreenState {
  screen: TScreenState;
  loadTime: number;
}
