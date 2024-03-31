export interface ComparePrdProps {
  제품명: string;
  modelNo: string;
  id: string;
}

export type ExpandModalStateType =
  | "compare"
  | "info"
  | "recommend"
  | "home"
  | "general"
  | "ranking"
  | "search"
  | "dictionary"
  | "error"
  | null;
