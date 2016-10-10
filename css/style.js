import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "example-appear": {
        "opacity": 0.01
    },
    "exapme-appearexample-appear-active": {
        "opacity": 1,
        "transition": "opacity 500ms ease-in"
    }
});