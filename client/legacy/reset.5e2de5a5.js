import { d as _inherits, e as _classCallCheck, i as init, s as safe_not_equal, f as _assertThisInitialized, S as SvelteComponent, l as space, k as element, B as text, Z as query_selector_all, j as detach, o as claim_space, m as claim_element, n as children, C as claim_text, p as attr, $ as set_style, h as insert, q as append, u as listen, w as _slicedToArray, x as noop, z as _getPrototypeOf, A as _possibleConstructorReturn } from './client.3a5ed47b.js';
import { d as deleteCacheKeys } from './cache.f43fff97.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment(ctx) {
  var t0;
  var div2;
  var div1;
  var div0;
  var t1;
  var t2;
  var p0;
  var t3;
  var t4;
  var div3;
  var p1;
  var t5;
  var t6;
  var button;
  var t7;
  var dispose;
  return {
    c: function c() {
      t0 = space();
      div2 = element("div");
      div1 = element("div");
      div0 = element("div");
      t1 = text("You just refreshed the data.");
      t2 = space();
      p0 = element("p");
      t3 = text("Please do this sparingly. Thank you!!!");
      t4 = space();
      div3 = element("div");
      p1 = element("p");
      t5 = text("Click this button will refresh the data for this website. When you go to the\n    home page it might take a few seconds to load.");
      t6 = space();
      button = element("button");
      t7 = text("Refresh Data");
      this.h();
    },
    l: function l(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-khqcqk\"]", document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", {
        style: true,
        class: true
      });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      t1 = claim_text(div0_nodes, "You just refreshed the data.");
      div0_nodes.forEach(detach);
      t2 = claim_space(div1_nodes);
      p0 = claim_element(div1_nodes, "P", {});
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, "Please do this sparingly. Thank you!!!");
      p0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      t4 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      p1 = claim_element(div3_nodes, "P", {});
      var p1_nodes = children(p1);
      t5 = claim_text(p1_nodes, "Click this button will refresh the data for this website. When you go to the\n    home page it might take a few seconds to load.");
      p1_nodes.forEach(detach);
      t6 = claim_space(div3_nodes);
      button = claim_element(div3_nodes, "BUTTON", {
        class: true
      });
      var button_nodes = children(button);
      t7 = claim_text(button_nodes, "Refresh Data");
      button_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h: function h() {
      document.title = "Reset Cache";
      attr(div0, "class", "header");
      attr(div1, "class", "ui success message");
      set_style(div2, "display",
      /*showSuccess*/
      ctx[0] ? "block" : "none");
      attr(div2, "class", "ui container svelte-vhmlr");
      attr(button, "class", "ui red basic button");
      attr(div3, "class", "ui container svelte-vhmlr");
    },
    m: function m(target, anchor, remount) {
      insert(target, t0, anchor);
      insert(target, div2, anchor);
      append(div2, div1);
      append(div1, div0);
      append(div0, t1);
      append(div1, t2);
      append(div1, p0);
      append(p0, t3);
      insert(target, t4, anchor);
      insert(target, div3, anchor);
      append(div3, p1);
      append(p1, t5);
      append(div3, t6);
      append(div3, button);
      append(button, t7);
      if (remount) dispose();
      dispose = listen(button, "click",
      /*deleteCache*/
      ctx[1]);
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*showSuccess*/
      1) {
        set_style(div2, "display",
        /*showSuccess*/
        ctx[0] ? "block" : "none");
      }
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(t0);
      if (detaching) detach(div2);
      if (detaching) detach(t4);
      if (detaching) detach(div3);
      dispose();
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var showSuccess = false;

  function deleteCache() {
    deleteCacheKeys();
    $$invalidate(0, showSuccess = true);
  }

  return [showSuccess, deleteCache];
}

var Reset = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Reset, _SvelteComponent);

  var _super = _createSuper(Reset);

  function Reset(options) {
    var _this;

    _classCallCheck(this, Reset);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    return _this;
  }

  return Reset;
}(SvelteComponent);

export default Reset;
