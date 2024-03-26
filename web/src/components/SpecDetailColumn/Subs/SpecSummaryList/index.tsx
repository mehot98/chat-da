import * as T from "@src/types/index";
import makeSpecObject from "@src/utils/makeSpecObject";
import SpecSummaryIcon from "../SpecSummaryIcon";

export default function SpecSummaryList({ summarySpec }: { summarySpec: T.SummarySpecType }) {
  const summarySpecList = [];

  Object.keys(summarySpec).map((key) => {
    const specObject = makeSpecObject(summarySpec, key);
    summarySpecList.push(specObject);
  });

  return (
    <>
      {summarySpecList.map((spec, i) => (
        <SpecSummaryIcon {...spec} key={i} />
      ))}
    </>
  );
}
