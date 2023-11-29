import { useGoto } from "@/composables";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useRouter } from "vue-router";

vi.mock("vue-router");
const fn = vi.fn();
vi.mocked(useRouter as () => { push: Function }).mockImplementation(() => {
  return {
    push: fn,
  };
});

describe("theHeader", () => {
  beforeEach(() => {
    fn.mockClear();
  });
  it("should be go to home page", () => {
    const { gotoHome } = useGoto();
    gotoHome();
    expect(fn).toBeCalledWith({
      name: "Home",
    });
  });
  it("should be go to Settings page", () => {
    const { gotoSettings } = useGoto();
    gotoSettings();
    expect(fn).toBeCalledWith({
      name: "Settings",
    });
  });
});
