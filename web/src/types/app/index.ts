export interface ComparePrdProps {
  제품명: string;
  modelNo: string;
  id: string;
}

export type ExpandModalStateType =
  | "ranking"
  | "search"
  | "info"
  | "compare"
  | "recommend"
  | "home"
  | null;
