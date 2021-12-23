import { defineComponent, openBlock, createElementBlock } from "vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = defineComponent({
  name: "HdcButton",
  setup() {
    return {};
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", null, "\u6309\u94AE");
}
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const ButtonPlugin = {
  install(app) {
    app.component(Button.name, Button);
  }
};
const _sfc_main = defineComponent({
  name: "HdcInput",
  setup() {
    return {};
  }
});
const _hoisted_1 = { type: "text" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", _hoisted_1);
}
var Input = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const InputPlugin = {
  install(app) {
    app.component(Input.name, Input);
  }
};
const HPlugin = {
  install(app) {
    var _a, _b;
    (_a = ButtonPlugin.install) == null ? void 0 : _a.call(ButtonPlugin, app);
    (_b = InputPlugin.install) == null ? void 0 : _b.call(InputPlugin, app);
  }
};
export { Button, ButtonPlugin, InputPlugin, HPlugin as default };
