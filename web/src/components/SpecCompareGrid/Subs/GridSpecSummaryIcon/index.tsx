import makeSpecObject from "@src/utils/makeSpecObject";
import * as ColumnSub from "@components/SpecDetailColumn/Subs";
import * as Sub from "../index";
import * as T from "@src/types/index";
import * as S from "./style";

export default function GridSpecSummaryIcon({
  summarySpec,
  specKey,
}: {
  summarySpec: T.SummarySpecType[];
  specKey: string;
}) {
  return (
    <>
      {summarySpec[0][specKey] && (
        <S.GridRow xs={12}>
          {summarySpec.map((summary, i) => (
            <>
              <S.SpecWrapper key={i}>
                {summary[specKey] === "---" ? (
                  <Sub.EmptyIcon />
                ) : (
                  <ColumnSub.SpecSummaryIcon {...makeSpecObject(summary, specKey)} />
                )}
              </S.SpecWrapper>
              {i !== summarySpec.length - 1 && <S.VerticalLine />}
            </>
          ))}
        </S.GridRow>
      )}
    </>
  );
}
