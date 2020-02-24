import { convertEpoch } from "./WeatherTable";
import { formatTemp } from "./WeatherTable";
import { formatDelta } from "./WeatherTable";

describe("helper functions", () => {
  it("Correctly convert epoch time", () => {
    expect(convertEpoch(1582444211)).toBe("2020-02-23");
  });

  it("Correctly format temperature", () => {
    expect(formatTemp(25.55555)).toBe("26C");
  });

  it("Correctly format difference in temperature", () => {
    expect(formatDelta(25.55555)).toBe("25.56C");
  });
});
