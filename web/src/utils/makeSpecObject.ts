import * as T from "@src/types/index";
import specIconPath from "@assets/img/SpecIcon";

interface specObjectType {
  specImg?: string;
  specKey?: string;
  specValue?: string;
}

export default function makeSpecObject(summarySpec: T.SummarySpecType, key: string) {
  const specObject: specObjectType = {};

  const value: string = summarySpec[key];
  if (!value) return;

  specObject["specKey"] = key.replaceAll("_", " ");
  specObject["specValue"] = summarySpec[key];

  if (key === "소비효율등급") {
    specObject["specImg"] =
      specIconPath[`energyClass${summarySpec.소비효율등급.replace("등급", "")}Path`];
  } else if (key === "오토_오픈_도어") {
    specObject["specImg"] = specIconPath.autoOpenDoorPath;
  } else if (key === "투명_도어") {
    if (value.includes("좌") && value.includes("우")) {
      specObject["specImg"] = specIconPath.transparentDoorLeftRightPath;
    } else if (value.includes("좌")) {
      specObject["specImg"] = specIconPath.transparentDoorLeftPath;
    } else if (value.includes("우")) {
      specObject["specImg"] = specIconPath.transparentDoorRightPath;
    }
  } else if (key === "베버리지_센터") {
    if (value === "있음") {
      specObject["specImg"] = specIconPath.beverageCenterPath;
    }
  } else if (key === "푸드_쇼케이스") {
    if (value.includes("좌") && value.includes("우")) {
      specObject["specImg"] = specIconPath.foodShowcaseLeftRightPath;
    } else if (value.includes("좌")) {
      specObject["specImg"] = specIconPath.foodShowcaseLeftPath;
    } else if (value.includes("우")) {
      specObject["specImg"] = specIconPath.foodShowcaseRightPath;
    }
  } else if (key === "얼음_종류") {
    if (value.includes("큐브") && value.includes("위스키")) {
      specObject["specImg"] = specIconPath.iceCubeWhiskeyPath;
    } else if (value.includes("큐브")) {
      specObject["specImg"] = specIconPath.iceCubePath;
    } else if (value.includes("위스키")) {
      specObject["specImg"] = specIconPath.iceCubeWhiskeyPath;
    }
  } else if (key === "제빙기") {
    if (value.includes("슬림")) {
      specObject["specImg"] = specIconPath.iceMakerSlimPath;
    } else if (value.includes("트위스트")) {
      specObject["specImg"] = specIconPath.iceMakerTwistPath;
    } else if (value.includes("듀얼")) {
      specObject["specImg"] = specIconPath.iceMakerDualPath;
    } else if (value.includes("빅")) {
      specObject["specImg"] = specIconPath.iceMakerBigPath;
    } else if (value.includes("오토")) {
      specObject["specImg"] = specIconPath.iceMakerAutoPath;
    }
  } else if (key === "탈취기") {
    if (value.includes("이온")) {
      specObject["specImg"] = specIconPath.deodorizerIonPath;
    } else if (value.includes("UV")) {
      specObject["specImg"] = specIconPath.deodorizerUvPath;
    } else if (value.includes("청정")) {
      specObject["specImg"] = specIconPath.deodorizerPath;
    }
  } else if (key === "쿨링커버") {
    if (value.includes("글래스")) {
      specObject["specImg"] = specIconPath.coolingCoverGlassPath;
    } else if (value.includes("메탈")) {
      specObject["specImg"] = specIconPath.coolingCoverMetalPath;
    } else if (value.includes("일반")) {
      specObject["specImg"] = specIconPath.coolingCoverPath;
    }
  } else if (key === "SmartThings_모바일_앱_지원") {
    if (value === "지원") {
      specObject["specImg"] = specIconPath.smartThingsPath;
      specObject["specKey"] = "SmartThings";
      specObject["specValue"] = "지원";
    }
  }

  return specObject;
}
