import * as S from "./style";
import * as T from "@src/types/index";
import specIconPath from "@assets/img/SpecIcon";
import SpecSummaryIcon from "../SpecSummaryIcon";

interface specObjectType {
  specImg?: string;
  specKey?: string;
  specValue?: string;
}

export default function SpecSummaryList({ summarySpec }: { summarySpec: T.SummarySpecType }) {
  const summarySpecList = [];

  Object.keys(summarySpec).map((key) => {
    const specObject: specObjectType = {};

    console.log(key);

    if (key === "소비효율등급") {
      specObject["specImg"] =
        specIconPath[`energyClass${summarySpec.소비효율등급.replace("등급", "")}Path`];
      // specObject["specKey"] = key;
      // specObject["specValue"] = summarySpec.소비효율등급;
    } else if (key === "오토_오픈_도어") {
      specObject["specImg"] = specIconPath.autoOpenDoorPath;
    } else if (key === "투명_도어") {
      specObject["specImg"] = specIconPath.autoOpenDoorPath;
    } else if (key === "베버리지_센터") {
      specObject["specImg"] = specIconPath.autoOpenDoorPath;
    } else if (key === "푸드_쇼케이스") {
      specObject["specImg"] = specIconPath.autoOpenDoorPath;
    } else if (key === "얼음_종류") {
      specObject["specImg"] = specIconPath.autoOpenDoorPath;
    } else if (key === "제빙기") {
      specObject["specImg"] = specIconPath.autoOpenDoorPath;
    } else if (key === "탈취기") {
      specObject["specImg"] = specIconPath.autoOpenDoorPath;
    } else if (key === "쿨링커버") {
      specObject["specImg"] = specIconPath.autoOpenDoorPath;
    } else if (key === "SmartThings_모바일_앱_지원") {
      specObject["specImg"] = specIconPath.autoOpenDoorPath;
    }

    specObject["specKey"] = key.replaceAll("_", " ");
    specObject["specValue"] = summarySpec[key];

    console.log(specObject);
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
