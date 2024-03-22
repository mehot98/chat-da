import autoOpenDoorPath from "./auto_open_door.png";
import beverageCenterPath from "./beverage_center.png";
import coolingCoverPath from "./cooling_cover.png";
import coolingCoverGlassPath from "./cooling_cover_glass.png";
import coolingCoverMetalPath from "./cooling_cover_metal.png";
import deodorizerPath from "./deodorizer.png";
import deodorizerIonPath from "./deodorizer_ion.png";
import deodorizerUvPath from "./deodorizer_uv.png";
import energyClass1Path from "./energy_class_1.png";
import energyClass2Path from "./energy_class_2.png";
import energyClass3Path from "./energy_class_3.png";
import energyClass4Path from "./energy_class_4.png";
import energyClass5Path from "./energy_class_5.png";
import foodShowcaseLeftPath from "./food_showcase_left.png";
import foodShowcaseLeftRightPath from "./food_showcase_left+right.png";
import foodShowcaseRightPath from "./food_showcase_right.png";
import iceCubePath from "./ice_cube.png";
import iceCubeWhiskeyPath from "./ice_cube+whiskey.png";
import iceWhiskeyPath from "./ice_whiskey.png";
import iceMakerAutoPath from "./ice_maker_auto.png";
import iceMakerBigPath from "./ice_maker_big.png";
import iceMakerSlimPath from "./ice_maker_slim.png";
import iceMakerDualPath from "./ice_maker_dual.png";
import iceMakerTwistPath from "./ice_maker_twist.png";
import sizePath from "./size.png";
import smartThingsPath from "./smart_things.png";
import transparentDoorLeftPath from "./transparent_door_left.png";
import transparentDoorLeftRightPath from "./transparent_door_left+right.png";
import transparentDoorRightPath from "./transparent_door_right.png";

const specIconPath = {
  autoOpenDoorPath,
  sizePath,
  beverageCenterPath,
  coolingCoverPath,
  coolingCoverGlassPath,
  coolingCoverMetalPath,
  deodorizerPath,
  deodorizerIonPath,
  deodorizerUvPath,
  energyClass1Path,
  energyClass2Path,
  energyClass3Path,
  energyClass4Path,
  energyClass5Path,
  foodShowcaseLeftPath,
  foodShowcaseLeftRightPath,
  foodShowcaseRightPath,
  iceCubePath,
  iceCubeWhiskeyPath,
  iceWhiskeyPath,
  iceMakerSlimPath,
  iceMakerAutoPath,
  iceMakerBigPath,
  iceMakerDualPath,
  iceMakerTwistPath,
  smartThingsPath,
  transparentDoorLeftPath,
  transparentDoorLeftRightPath,
  transparentDoorRightPath,
};

Object.keys(specIconPath).map((path) => {
  specIconPath[path] = chrome.runtime.getURL(specIconPath[path]);
});

export default specIconPath;
