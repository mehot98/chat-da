import { instanceJsonContent } from "@src/apis/_instanace";

export async function getSummary({ modelNo }: { modelNo: string }) {
  return instanceJsonContent.get(`/summary/review`, {
    params: {
      modelNo: modelNo,
    },
  });
}
