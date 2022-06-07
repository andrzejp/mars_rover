function go(rover, instructions) {
  const compass = ["N", "E", "S", "W"];
  return { ...rover, facing: compass[(compass.indexOf(rover.facing) + 1) % 4] };
}

describe("Mars Rover", () => {
  it.each([
    ["N", "E"],
    ["E", "S"],
    ["S", "W"],
    ["W", "N"],
  ])("turns right from %s to %s", (startDirection, endDirection) => {
    let rover = { facing: startDirection };

    rover = go(rover, "R");

    expect(rover.facing).toBe(endDirection);
  });
});
