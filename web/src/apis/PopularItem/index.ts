import { instanceJsonContent } from "../_instanace";

export async function getPopularList() {
  return instanceJsonContent.get("/chat/ranking");
}

export async function getReviewSummary({ modelNo }: { modelNo: string }) {
  return instanceJsonContent.get("/summary/review", {
    params: {
      modelNo: modelNo,
    },
  });
}
