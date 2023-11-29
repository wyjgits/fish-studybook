import { useGoto } from "@/composables";
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  injectRouterMock,
  VueRouterMock,
  createRouterMock,
} from "vue-router-mock";
import { config, mount } from "@vue/test-utils";

const router = createRouterMock({
  spy: {
    create: (fn) => vi.fn(fn),
    reset: (spy) => spy.mockClear(),
  },
});

config.plugins.VueWrapper.install(VueRouterMock);

describe("theHeader", () => {
  beforeEach(() => {
    router.reset();
    injectRouterMock(router);
  });
  it("should be go to home page", () => {
    const comp = {
      render() {},
      setup() {
        const { gotoHome } = useGoto();
        gotoHome();
      },
    };
    const wrapper = mount(comp);
    expect(wrapper.router.push).toBeCalledWith({
      name: "Home",
    });
  });
  it("should be go to Settings page", () => {
    const comp = {
      render() {},
      setup() {
        const { gotoSettings } = useGoto();
        gotoSettings();
      },
    };
    const wrapper = mount(comp);
    expect(wrapper.router.push).toBeCalledWith({
      name: "Settings",
    });
  });
});
