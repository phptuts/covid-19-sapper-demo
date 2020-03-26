import { d as _inherits, e as _classCallCheck, i as init, s as safe_not_equal, f as _assertThisInitialized, S as SvelteComponent, l as space, k as element, B as text, Z as query_selector_all, j as detach, o as claim_space, m as claim_element, n as children, C as claim_text, p as attr, h as insert, q as append, x as noop, z as _getPrototypeOf, A as _possibleConstructorReturn } from './client.80764277.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment(ctx) {
  var t0;
  var div;
  var h1;
  var t1;
  var t2;
  var p0;
  var t3;
  var t4;
  var p1;
  var t5;
  var a0;
  var t6;
  var t7;
  var t8;
  var p2;
  var t9;
  var a1;
  var t10;
  var t11;
  return {
    c: function c() {
      t0 = space();
      div = element("div");
      h1 = element("h1");
      t1 = text("About Covid-19");
      t2 = space();
      p0 = element("p");
      t3 = text("This app was made for demo purposes / tutorial purposes.");
      t4 = space();
      p1 = element("p");
      t5 = text("I used this\n    ");
      a0 = element("a");
      t6 = text("API");
      t7 = text("\n    to build this app. Thank you for building this!!! HUGE PROPS.");
      t8 = space();
      p2 = element("p");
      t9 = text("This is an open source project.\n    ");
      a1 = element("a");
      t10 = text("Click here");
      t11 = text("\n    to view the code.");
      this.h();
    },
    l: function l(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1myew8g\"]", document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {});
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "About Covid-19");
      h1_nodes.forEach(detach);
      t2 = claim_space(div_nodes);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, "This app was made for demo purposes / tutorial purposes.");
      p0_nodes.forEach(detach);
      t4 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t5 = claim_text(p1_nodes, "I used this\n    ");
      a0 = claim_element(p1_nodes, "A", {
        href: true
      });
      var a0_nodes = children(a0);
      t6 = claim_text(a0_nodes, "API");
      a0_nodes.forEach(detach);
      t7 = claim_text(p1_nodes, "\n    to build this app. Thank you for building this!!! HUGE PROPS.");
      p1_nodes.forEach(detach);
      t8 = claim_space(div_nodes);
      p2 = claim_element(div_nodes, "P", {});
      var p2_nodes = children(p2);
      t9 = claim_text(p2_nodes, "This is an open source project.\n    ");
      a1 = claim_element(p2_nodes, "A", {
        href: true
      });
      var a1_nodes = children(a1);
      t10 = claim_text(a1_nodes, "Click here");
      a1_nodes.forEach(detach);
      t11 = claim_text(p2_nodes, "\n    to view the code.");
      p2_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h: function h() {
      document.title = "About";
      attr(a0, "href", "https://github.com/novelcovid/api");
      attr(a1, "href", "https://github.com/phptuts/covid-19-sapper-demo");
      attr(div, "class", "ui container svelte-vhmlr");
    },
    m: function m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, div, anchor);
      append(div, h1);
      append(h1, t1);
      append(div, t2);
      append(div, p0);
      append(p0, t3);
      append(div, t4);
      append(div, p1);
      append(p1, t5);
      append(p1, a0);
      append(a0, t6);
      append(p1, t7);
      append(div, t8);
      append(div, p2);
      append(p2, t9);
      append(p2, a1);
      append(a1, t10);
      append(p2, t11);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(t0);
      if (detaching) detach(div);
    }
  };
}

var About = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(About, _SvelteComponent);

  var _super = _createSuper(About);

  function About(options) {
    var _this;

    _classCallCheck(this, About);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, null, create_fragment, safe_not_equal, {});
    return _this;
  }

  return About;
}(SvelteComponent);

export default About;
