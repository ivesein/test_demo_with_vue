//自定义v-focus指令
import Vue from "vue";
Vue.directive("focus", function(el, binding) {
  var defClass = "el-input",
    defTag = "input";
  var value = binding.value || true;
  if (typeof value === "boolean")
    value = { cls: defClass, tag: defTag, foc: value };
  else
    value = {
      cls: value.cls || defClass,
      tag: value.tag || defTag,
      foc: value.foc || false
    };
  if (el.classList.contains(value.cls) && value.foc) {
    el.getElementsByTagName(value.tag)[0].focus();
  }
});
