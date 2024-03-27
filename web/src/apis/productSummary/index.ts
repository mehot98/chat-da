import { instanceJsonContent } from "@src/apis/_instanace";
// import { AxiosResponse } from "axios";

// export async function getSummary({ modelNo }: { modelNo: string }): Promise<AxiosResponse> {
//   return await instanceJsonContent.get(`/summary/detail`, {
//     params: {
//       modelNo: modelNo,
//     },
//   });
// }

export async function getSummary({ modelNo }: { modelNo: string }) {
  return instanceJsonContent.get(`/summary/detail`, {
    params: {
      modelNo : modelNo
    }
  });
}