import { useState } from "react";
import * as S from "./style";
import { request } from "@src/apis/requestBuilder";

export default function MessageFeedback(props: { isRecommend: boolean; chatId: string }) {
  const [open, setOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmitFeedback = async (feedback: string) => {
    const { data } = await request.post("/chat/feedback", { chatId: props.chatId, feedback });
    // console.log(props.chatId, feedback, data);

    if (data.success) {
      setToastMessage("피드백이 성공적으로 반영되었습니다. 감사합니다!😊");
    } else {
      setToastMessage("피드백 전송을 실패했습니다. 잠시 후 다시 시도해주세요.");
    }
    setOpen(true);
  };

  return (
    <S.BtnWrapper>
      {props.isRecommend ? (
        <>
          <span>이 제품이...</span>
          <S.LikeBtn onClick={() => handleSubmitFeedback("긍정")}>좋아요👍</S.LikeBtn>
        </>
      ) : (
        <>
          <span>이 답변이...</span>
          <S.LikeBtn onClick={() => handleSubmitFeedback("긍정")}>도움돼요👍</S.LikeBtn>
        </>
      )}
      <S.UnlikeBtn onClick={() => handleSubmitFeedback("부정")}>아쉬워요😥</S.UnlikeBtn>
      <S.AlertToast
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
        message={toastMessage}
      />
    </S.BtnWrapper>
  );
}
