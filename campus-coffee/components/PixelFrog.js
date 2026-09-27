import { View } from "react-native";

// Chunky pixel-art frog, peeking over an edge with hands showing.
// Draw only down to the hands — the box sitting right below implies
// the body and feet are behind it.
const PIXEL = 9;

const COLORS = {
  D: "#20211C", // outline
  H: "#9FB8A0", // head
  W: "#FFFFFF", // eye white
  K: "#151515", // pupil
  O: "#E8791B", // arm / hand
  B: "#B85C12", // arm / hand shade
};

function seg(...parts) {
  return parts.map(([count, char]) => char.repeat(count)).join("");
}

const GRID = [
  seg([8, "."], [4, "D"], [8, "."]),
  seg([6, "."], [1, "D"], [6, "H"], [1, "D"], [6, "."]),
  seg([5, "."], [1, "D"], [8, "H"], [1, "D"], [5, "."]),
  seg([5, "."], [1, "D"], [2, "W"], [4, "H"], [2, "W"], [1, "D"], [5, "."]),
  seg(
    [5, "."],
    [1, "D"],
    [1, "W"],
    [1, "K"],
    [4, "H"],
    [1, "K"],
    [1, "W"],
    [1, "D"],
    [5, "."]
  ),
  seg([5, "."], [1, "D"], [8, "H"], [1, "D"], [5, "."]),
  seg([5, "."], [1, "O"], [1, "D"], [6, "H"], [1, "D"], [1, "O"], [5, "."]),
  seg(
    [3, "."],
    [1, "B"],
    [1, "O"],
    [2, "."],
    [1, "D"],
    [1, "H"],
    [1, "D"],
    [1, "D"],
    [1, "H"],
    [1, "D"],
    [2, "."],
    [1, "O"],
    [1, "B"],
    [3, "."]
  ),
  seg([2, "."], [2, "O"], [12, "."], [2, "O"], [2, "."]),
  seg([1, "."], [2, "O"], [14, "."], [2, "O"], [1, "."]),
  seg([1, "."], [1, "O"], [1, "B"], [14, "."], [1, "B"], [1, "O"], [1, "."]),
];

export default function PixelFrog() {
  return (
    <View pointerEvents="none">
      {GRID.map((row, r) => (
        <View key={r} style={{ flexDirection: "row" }}>
          {row.split("").map((cell, c) => (
            <View
              key={c}
              style={{
                width: PIXEL,
                height: PIXEL,
                backgroundColor: cell === "." ? "transparent" : COLORS[cell],
              }}
            />
          ))}
        </View>
      ))}
    </View>
  );
}