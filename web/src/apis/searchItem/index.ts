import { instanceJsonContent } from "@src/apis/_instanace";

export async function getSummary({ uuid, content }: { uuid: string; content: string }) {
  return instanceJsonContent.post(`/chat/search`, {
    uuid,
    content,
  });
}
