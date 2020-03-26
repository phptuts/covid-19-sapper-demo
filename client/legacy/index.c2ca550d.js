import { d as _inherits, e as _classCallCheck, i as init, s as safe_not_equal, f as _assertThisInitialized, S as SvelteComponent, k as element, B as text, l as space, m as claim_element, n as children, C as claim_text, j as detach, o as claim_space, p as attr, h as insert, q as append, D as set_data, g as empty, w as _slicedToArray, x as noop, z as _getPrototypeOf, A as _possibleConstructorReturn, a as _asyncToGenerator, b as _regeneratorRuntime, G as create_component, Z as query_selector_all, H as claim_component, $ as set_style, I as mount_component, L as transition_in, M as transition_out, N as destroy_component, a0 as goto, E as binding_callbacks, F as bind, K as add_flush_callback } from './client.6812f81c.js';
import { g as getWorldTimeline, a as getWorldStats, b as getDataForCountries, C as CovidChart, F as Filter, T as Table, f as filterByName } from './helpers.4d41e3f7.js';
import './cache.c7679f46.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function create_if_block(ctx) {
  var div3;
  var div0;
  var h30;
  var t0;
  var t1_value = (+
  /*cases*/
  ctx[0]).toLocaleString() + "";
  var t1;
  var t2;
  var div1;
  var h31;
  var t3;
  var t4_value = (+
  /*deaths*/
  ctx[1]).toLocaleString() + "";
  var t4;
  var t5;
  var div2;
  var h32;
  var t6;
  var t7_value = (+
  /*recovered*/
  ctx[2]).toLocaleString() + "";
  var t7;
  return {
    c: function c() {
      div3 = element("div");
      div0 = element("div");
      h30 = element("h3");
      t0 = text("Cases: ");
      t1 = text(t1_value);
      t2 = space();
      div1 = element("div");
      h31 = element("h3");
      t3 = text("Deaths: ");
      t4 = text(t4_value);
      t5 = space();
      div2 = element("div");
      h32 = element("h3");
      t6 = text("Recovered: ");
      t7 = text(t7_value);
      this.h();
    },
    l: function l(nodes) {
      div3 = claim_element(nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h30 = claim_element(div0_nodes, "H3", {});
      var h30_nodes = children(h30);
      t0 = claim_text(h30_nodes, "Cases: ");
      t1 = claim_text(h30_nodes, t1_value);
      h30_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t2 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      h31 = claim_element(div1_nodes, "H3", {});
      var h31_nodes = children(h31);
      t3 = claim_text(h31_nodes, "Deaths: ");
      t4 = claim_text(h31_nodes, t4_value);
      h31_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t5 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      h32 = claim_element(div2_nodes, "H3", {});
      var h32_nodes = children(h32);
      t6 = claim_text(h32_nodes, "Recovered: ");
      t7 = claim_text(h32_nodes, t7_value);
      h32_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h: function h() {
      attr(div0, "class", "column");
      attr(div1, "class", "column");
      attr(div2, "class", "column");
      attr(div3, "class", "ui stackable three column grid");
    },
    m: function m(target, anchor) {
      insert(target, div3, anchor);
      append(div3, div0);
      append(div0, h30);
      append(h30, t0);
      append(h30, t1);
      append(div3, t2);
      append(div3, div1);
      append(div1, h31);
      append(h31, t3);
      append(h31, t4);
      append(div3, t5);
      append(div3, div2);
      append(div2, h32);
      append(h32, t6);
      append(h32, t7);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*cases*/
      1 && t1_value !== (t1_value = (+
      /*cases*/
      ctx[0]).toLocaleString() + "")) set_data(t1, t1_value);
      if (dirty &
      /*deaths*/
      2 && t4_value !== (t4_value = (+
      /*deaths*/
      ctx[1]).toLocaleString() + "")) set_data(t4, t4_value);
      if (dirty &
      /*recovered*/
      4 && t7_value !== (t7_value = (+
      /*recovered*/
      ctx[2]).toLocaleString() + "")) set_data(t7, t7_value);
    },
    d: function d(detaching) {
      if (detaching) detach(div3);
    }
  };
}

function create_fragment(ctx) {
  var if_block_anchor;
  var if_block =
  /*cases*/
  ctx[0] !== undefined && create_if_block(ctx);
  return {
    c: function c() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l: function l(nodes) {
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function m(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (
      /*cases*/
      ctx[0] !== undefined) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) detach(if_block_anchor);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var cases = $$props.cases;
  var deaths = $$props.deaths;
  var recovered = $$props.recovered;

  $$self.$set = function ($$props) {
    if ("cases" in $$props) $$invalidate(0, cases = $$props.cases);
    if ("deaths" in $$props) $$invalidate(1, deaths = $$props.deaths);
    if ("recovered" in $$props) $$invalidate(2, recovered = $$props.recovered);
  };

  return [cases, deaths, recovered];
}

var CovidBasicStats = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(CovidBasicStats, _SvelteComponent);

  var _super = _createSuper(CovidBasicStats);

  function CovidBasicStats(options) {
    var _this;

    _classCallCheck(this, CovidBasicStats);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      cases: 0,
      deaths: 1,
      recovered: 2
    });
    return _this;
  }

  return CovidBasicStats;
}(SvelteComponent);

function _createSuper$1(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$1()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment$1(ctx) {
  var t0;
  var div0;
  var h1;
  var t1;
  var t2;
  var t3;
  var t4;
  var div1;
  var h2;
  var t5;
  var t6;
  var updating_sortBy;
  var updating_search;
  var t7;
  var updating_page;
  var t8;
  var div2;
  var a0;
  var t9;
  var t10;
  var a1;
  var t11;
  var t12;
  var a2;
  var t13;
  var t14;
  var a3;
  var t15;
  var t16;
  var a4;
  var t17;
  var t18;
  var a5;
  var t19;
  var t20;
  var a6;
  var t21;
  var t22;
  var a7;
  var t23;
  var t24;
  var a8;
  var t25;
  var t26;
  var a9;
  var t27;
  var t28;
  var a10;
  var t29;
  var t30;
  var a11;
  var t31;
  var t32;
  var a12;
  var t33;
  var t34;
  var a13;
  var t35;
  var t36;
  var a14;
  var t37;
  var t38;
  var a15;
  var t39;
  var t40;
  var a16;
  var t41;
  var t42;
  var a17;
  var t43;
  var t44;
  var a18;
  var t45;
  var t46;
  var a19;
  var t47;
  var t48;
  var a20;
  var t49;
  var t50;
  var a21;
  var t51;
  var t52;
  var a22;
  var t53;
  var t54;
  var a23;
  var t55;
  var t56;
  var a24;
  var t57;
  var t58;
  var a25;
  var t59;
  var t60;
  var a26;
  var t61;
  var t62;
  var a27;
  var t63;
  var t64;
  var a28;
  var t65;
  var t66;
  var a29;
  var t67;
  var t68;
  var a30;
  var t69;
  var t70;
  var a31;
  var t71;
  var t72;
  var a32;
  var t73;
  var t74;
  var a33;
  var t75;
  var t76;
  var a34;
  var t77;
  var t78;
  var a35;
  var t79;
  var t80;
  var a36;
  var t81;
  var t82;
  var a37;
  var t83;
  var t84;
  var a38;
  var t85;
  var t86;
  var a39;
  var t87;
  var t88;
  var a40;
  var t89;
  var t90;
  var a41;
  var t91;
  var t92;
  var a42;
  var t93;
  var t94;
  var a43;
  var t95;
  var t96;
  var a44;
  var t97;
  var t98;
  var a45;
  var t99;
  var t100;
  var a46;
  var t101;
  var t102;
  var a47;
  var t103;
  var t104;
  var a48;
  var t105;
  var t106;
  var a49;
  var t107;
  var t108;
  var a50;
  var t109;
  var t110;
  var a51;
  var t111;
  var t112;
  var a52;
  var t113;
  var t114;
  var a53;
  var t115;
  var t116;
  var a54;
  var t117;
  var t118;
  var a55;
  var t119;
  var t120;
  var a56;
  var t121;
  var t122;
  var a57;
  var t123;
  var t124;
  var a58;
  var t125;
  var t126;
  var a59;
  var t127;
  var t128;
  var a60;
  var t129;
  var t130;
  var a61;
  var t131;
  var t132;
  var a62;
  var t133;
  var t134;
  var a63;
  var t135;
  var t136;
  var a64;
  var t137;
  var t138;
  var a65;
  var t139;
  var t140;
  var a66;
  var t141;
  var t142;
  var a67;
  var t143;
  var t144;
  var a68;
  var t145;
  var t146;
  var a69;
  var t147;
  var t148;
  var a70;
  var t149;
  var t150;
  var a71;
  var t151;
  var t152;
  var a72;
  var t153;
  var t154;
  var a73;
  var t155;
  var t156;
  var a74;
  var t157;
  var t158;
  var a75;
  var t159;
  var t160;
  var a76;
  var t161;
  var t162;
  var a77;
  var t163;
  var t164;
  var a78;
  var t165;
  var t166;
  var a79;
  var t167;
  var t168;
  var a80;
  var t169;
  var t170;
  var a81;
  var t171;
  var t172;
  var a82;
  var t173;
  var t174;
  var a83;
  var t175;
  var t176;
  var a84;
  var t177;
  var t178;
  var a85;
  var t179;
  var t180;
  var a86;
  var t181;
  var t182;
  var a87;
  var t183;
  var t184;
  var a88;
  var t185;
  var t186;
  var a89;
  var t187;
  var t188;
  var a90;
  var t189;
  var t190;
  var a91;
  var t191;
  var t192;
  var a92;
  var t193;
  var t194;
  var a93;
  var t195;
  var t196;
  var a94;
  var t197;
  var t198;
  var a95;
  var t199;
  var t200;
  var a96;
  var t201;
  var t202;
  var a97;
  var t203;
  var t204;
  var a98;
  var t205;
  var t206;
  var a99;
  var t207;
  var t208;
  var a100;
  var t209;
  var t210;
  var a101;
  var t211;
  var t212;
  var a102;
  var t213;
  var t214;
  var a103;
  var t215;
  var t216;
  var a104;
  var t217;
  var t218;
  var a105;
  var t219;
  var t220;
  var a106;
  var t221;
  var t222;
  var a107;
  var t223;
  var t224;
  var a108;
  var t225;
  var t226;
  var a109;
  var t227;
  var t228;
  var a110;
  var t229;
  var t230;
  var a111;
  var t231;
  var t232;
  var a112;
  var t233;
  var t234;
  var a113;
  var t235;
  var t236;
  var a114;
  var t237;
  var t238;
  var a115;
  var t239;
  var t240;
  var a116;
  var t241;
  var t242;
  var a117;
  var t243;
  var t244;
  var a118;
  var t245;
  var t246;
  var a119;
  var t247;
  var t248;
  var a120;
  var t249;
  var t250;
  var a121;
  var t251;
  var t252;
  var a122;
  var t253;
  var t254;
  var a123;
  var t255;
  var t256;
  var a124;
  var t257;
  var t258;
  var a125;
  var t259;
  var t260;
  var a126;
  var t261;
  var t262;
  var a127;
  var t263;
  var t264;
  var a128;
  var t265;
  var t266;
  var a129;
  var t267;
  var t268;
  var a130;
  var t269;
  var t270;
  var a131;
  var t271;
  var t272;
  var a132;
  var t273;
  var t274;
  var a133;
  var t275;
  var t276;
  var a134;
  var t277;
  var t278;
  var a135;
  var t279;
  var t280;
  var a136;
  var t281;
  var t282;
  var a137;
  var t283;
  var t284;
  var a138;
  var t285;
  var t286;
  var a139;
  var t287;
  var t288;
  var a140;
  var t289;
  var t290;
  var a141;
  var t291;
  var t292;
  var a142;
  var t293;
  var t294;
  var a143;
  var t295;
  var t296;
  var a144;
  var t297;
  var t298;
  var a145;
  var t299;
  var t300;
  var a146;
  var t301;
  var t302;
  var a147;
  var t303;
  var t304;
  var a148;
  var t305;
  var t306;
  var a149;
  var t307;
  var t308;
  var a150;
  var t309;
  var t310;
  var a151;
  var t311;
  var t312;
  var a152;
  var t313;
  var t314;
  var a153;
  var t315;
  var t316;
  var a154;
  var t317;
  var t318;
  var a155;
  var t319;
  var t320;
  var a156;
  var t321;
  var t322;
  var a157;
  var t323;
  var t324;
  var a158;
  var t325;
  var t326;
  var a159;
  var t327;
  var t328;
  var a160;
  var t329;
  var t330;
  var a161;
  var t331;
  var t332;
  var a162;
  var t333;
  var t334;
  var a163;
  var t335;
  var t336;
  var a164;
  var t337;
  var t338;
  var a165;
  var t339;
  var t340;
  var a166;
  var t341;
  var t342;
  var a167;
  var t343;
  var t344;
  var a168;
  var t345;
  var t346;
  var a169;
  var t347;
  var t348;
  var a170;
  var t349;
  var t350;
  var a171;
  var t351;
  var t352;
  var a172;
  var t353;
  var t354;
  var a173;
  var t355;
  var t356;
  var a174;
  var t357;
  var t358;
  var a175;
  var t359;
  var t360;
  var a176;
  var t361;
  var t362;
  var a177;
  var t363;
  var t364;
  var a178;
  var t365;
  var t366;
  var a179;
  var t367;
  var t368;
  var a180;
  var t369;
  var t370;
  var a181;
  var t371;
  var t372;
  var a182;
  var t373;
  var t374;
  var a183;
  var t375;
  var t376;
  var a184;
  var t377;
  var t378;
  var a185;
  var t379;
  var t380;
  var a186;
  var t381;
  var t382;
  var a187;
  var t383;
  var t384;
  var a188;
  var t385;
  var t386;
  var a189;
  var t387;
  var t388;
  var a190;
  var t389;
  var t390;
  var a191;
  var t391;
  var t392;
  var a192;
  var t393;
  var t394;
  var a193;
  var t395;
  var t396;
  var a194;
  var t397;
  var t398;
  var a195;
  var t399;
  var t400;
  var a196;
  var t401;
  var current;
  var covidbasicstats = new CovidBasicStats({
    props: {
      deaths:
      /*worldStats*/
      ctx[0].deaths,
      recovered:
      /*worldStats*/
      ctx[0].recovered,
      cases:
      /*worldStats*/
      ctx[0].cases
    }
  });
  var covidchart = new CovidChart({
    props: {
      title: "Covid-19 For World",
      historicData:
      /*worldTimeline*/
      ctx[1]
    }
  });

  function filter_sortBy_binding(value) {
    /*filter_sortBy_binding*/
    ctx[9].call(null, value);
  }

  function filter_search_binding(value) {
    /*filter_search_binding*/
    ctx[10].call(null, value);
  }

  var filter_props = {
    selectFields:
    /*selectFields*/
    ctx[7]
  };

  if (
  /*sortBy*/
  ctx[3] !== void 0) {
    filter_props.sortBy =
    /*sortBy*/
    ctx[3];
  }

  if (
  /*search*/
  ctx[4] !== void 0) {
    filter_props.search =
    /*search*/
    ctx[4];
  }

  var filter = new Filter({
    props: filter_props
  });
  binding_callbacks.push(function () {
    return bind(filter, "sortBy", filter_sortBy_binding);
  });
  binding_callbacks.push(function () {
    return bind(filter, "search", filter_search_binding);
  });

  function table_page_binding(value) {
    /*table_page_binding*/
    ctx[11].call(null, value);
  }

  var table_props = {
    fields:
    /*fields*/
    ctx[6],
    sortBy:
    /*sortBy*/
    ctx[3],
    canNav: "true",
    list:
    /*showCountries*/
    ctx[2]
  };

  if (
  /*page*/
  ctx[5] !== void 0) {
    table_props.page =
    /*page*/
    ctx[5];
  }

  var table = new Table({
    props: table_props
  });
  binding_callbacks.push(function () {
    return bind(table, "page", table_page_binding);
  });
  table.$on("location", changeLocation);
  return {
    c: function c() {
      t0 = space();
      div0 = element("div");
      h1 = element("h1");
      t1 = text("Covid-19 Tracker");
      t2 = space();
      create_component(covidbasicstats.$$.fragment);
      t3 = space();
      create_component(covidchart.$$.fragment);
      t4 = space();
      div1 = element("div");
      h2 = element("h2");
      t5 = text("Search By Country");
      t6 = space();
      create_component(filter.$$.fragment);
      t7 = space();
      create_component(table.$$.fragment);
      t8 = space();
      div2 = element("div");
      a0 = element("a");
      t9 = text("China");
      t10 = space();
      a1 = element("a");
      t11 = text("Italy");
      t12 = space();
      a2 = element("a");
      t13 = text("USA");
      t14 = space();
      a3 = element("a");
      t15 = text("Spain");
      t16 = space();
      a4 = element("a");
      t17 = text("Germany");
      t18 = space();
      a5 = element("a");
      t19 = text("Iran");
      t20 = space();
      a6 = element("a");
      t21 = text("France");
      t22 = space();
      a7 = element("a");
      t23 = text("Switzerland");
      t24 = space();
      a8 = element("a");
      t25 = text("UK");
      t26 = space();
      a9 = element("a");
      t27 = text("S. Korea");
      t28 = space();
      a10 = element("a");
      t29 = text("Netherlands");
      t30 = space();
      a11 = element("a");
      t31 = text("Austria");
      t32 = space();
      a12 = element("a");
      t33 = text("Belgium");
      t34 = space();
      a13 = element("a");
      t35 = text("Canada");
      t36 = space();
      a14 = element("a");
      t37 = text("Norway");
      t38 = space();
      a15 = element("a");
      t39 = text("Portugal");
      t40 = space();
      a16 = element("a");
      t41 = text("Sweden");
      t42 = space();
      a17 = element("a");
      t43 = text("Turkey");
      t44 = space();
      a18 = element("a");
      t45 = text("Brazil");
      t46 = space();
      a19 = element("a");
      t47 = text("Australia");
      t48 = space();
      a20 = element("a");
      t49 = text("Israel");
      t50 = space();
      a21 = element("a");
      t51 = text("Malaysia");
      t52 = space();
      a22 = element("a");
      t53 = text("Denmark");
      t54 = space();
      a23 = element("a");
      t55 = text("Czechia");
      t56 = space();
      a24 = element("a");
      t57 = text("Ireland");
      t58 = space();
      a25 = element("a");
      t59 = text("Luxembourg");
      t60 = space();
      a26 = element("a");
      t61 = text("Japan");
      t62 = space();
      a27 = element("a");
      t63 = text("Ecuador");
      t64 = space();
      a28 = element("a");
      t65 = text("Chile");
      t66 = space();
      a29 = element("a");
      t67 = text("Pakistan");
      t68 = space();
      a30 = element("a");
      t69 = text("Poland");
      t70 = space();
      a31 = element("a");
      t71 = text("Thailand");
      t72 = space();
      a32 = element("a");
      t73 = text("Romania");
      t74 = space();
      a33 = element("a");
      t75 = text("Saudi Arabia");
      t76 = space();
      a34 = element("a");
      t77 = text("Finland");
      t78 = space();
      a35 = element("a");
      t79 = text("Greece");
      t80 = space();
      a36 = element("a");
      t81 = text("Indonesia");
      t82 = space();
      a37 = element("a");
      t83 = text("Iceland");
      t84 = space();
      a38 = element("a");
      t85 = text("Diamond Princess");
      t86 = space();
      a39 = element("a");
      t87 = text("South Africa");
      t88 = space();
      a40 = element("a");
      t89 = text("Russia");
      t90 = space();
      a41 = element("a");
      t91 = text("India");
      t92 = space();
      a42 = element("a");
      t93 = text("Philippines");
      t94 = space();
      a43 = element("a");
      t95 = text("Singapore");
      t96 = space();
      a44 = element("a");
      t97 = text("Qatar");
      t98 = space();
      a45 = element("a");
      t99 = text("Slovenia");
      t100 = space();
      a46 = element("a");
      t101 = text("Peru");
      t102 = space();
      a47 = element("a");
      t103 = text("Colombia");
      t104 = space();
      a48 = element("a");
      t105 = text("Egypt");
      t106 = space();
      a49 = element("a");
      t107 = text("Panama");
      t108 = space();
      a50 = element("a");
      t109 = text("Croatia");
      t110 = space();
      a51 = element("a");
      t111 = text("Bahrain");
      t112 = space();
      a52 = element("a");
      t113 = text("Hong Kong");
      t114 = space();
      a53 = element("a");
      t115 = text("Mexico");
      t116 = space();
      a54 = element("a");
      t117 = text("Estonia");
      t118 = space();
      a55 = element("a");
      t119 = text("Dominican Republic");
      t120 = space();
      a56 = element("a");
      t121 = text("Argentina");
      t122 = space();
      a57 = element("a");
      t123 = text("Serbia");
      t124 = space();
      a58 = element("a");
      t125 = text("Iraq");
      t126 = space();
      a59 = element("a");
      t127 = text("Lebanon");
      t128 = space();
      a60 = element("a");
      t129 = text("UAE");
      t130 = space();
      a61 = element("a");
      t131 = text("Algeria");
      t132 = space();
      a62 = element("a");
      t133 = text("Lithuania");
      t134 = space();
      a63 = element("a");
      t135 = text("Armenia");
      t136 = space();
      a64 = element("a");
      t137 = text("Bulgaria");
      t138 = space();
      a65 = element("a");
      t139 = text("Taiwan");
      t140 = space();
      a66 = element("a");
      t141 = text("Hungary");
      t142 = space();
      a67 = element("a");
      t143 = text("Morocco");
      t144 = space();
      a68 = element("a");
      t145 = text("Latvia");
      t146 = space();
      a69 = element("a");
      t147 = text("Slovakia");
      t148 = space();
      a70 = element("a");
      t149 = text("San Marino");
      t150 = space();
      a71 = element("a");
      t151 = text("New Zealand");
      t152 = space();
      a72 = element("a");
      t153 = text("Costa Rica");
      t154 = space();
      a73 = element("a");
      t155 = text("Kuwait");
      t156 = space();
      a74 = element("a");
      t157 = text("Uruguay");
      t158 = space();
      a75 = element("a");
      t159 = text("Andorra");
      t160 = space();
      a76 = element("a");
      t161 = text("North Macedonia");
      t162 = space();
      a77 = element("a");
      t163 = text("Tunisia");
      t164 = space();
      a78 = element("a");
      t165 = text("Bosnia and Herzegovina");
      t166 = space();
      a79 = element("a");
      t167 = text("Jordan");
      t168 = space();
      a80 = element("a");
      t169 = text("Moldova");
      t170 = space();
      a81 = element("a");
      t171 = text("Albania");
      t172 = space();
      a82 = element("a");
      t173 = text("Burkina Faso");
      t174 = space();
      a83 = element("a");
      t175 = text("Ukraine");
      t176 = space();
      a84 = element("a");
      t177 = text("Vietnam");
      t178 = space();
      a85 = element("a");
      t179 = text("Cyprus");
      t180 = space();
      a86 = element("a");
      t181 = text("Faeroe Islands");
      t182 = space();
      a87 = element("a");
      t183 = text("Malta");
      t184 = space();
      a88 = element("a");
      t185 = text("Réunion");
      t186 = space();
      a89 = element("a");
      t187 = text("Brunei");
      t188 = space();
      a90 = element("a");
      t189 = text("Sri Lanka");
      t190 = space();
      a91 = element("a");
      t191 = text("Oman");
      t192 = space();
      a92 = element("a");
      t193 = text("Senegal");
      t194 = space();
      a93 = element("a");
      t195 = text("Cambodia");
      t196 = space();
      a94 = element("a");
      t197 = text("Azerbaijan");
      t198 = space();
      a95 = element("a");
      t199 = text("Venezuela");
      t200 = space();
      a96 = element("a");
      t201 = text("Belarus");
      t202 = space();
      a97 = element("a");
      t203 = text("Afghanistan");
      t204 = space();
      a98 = element("a");
      t205 = text("Kazakhstan");
      t206 = space();
      a99 = element("a");
      t207 = text("Cameroon");
      t208 = space();
      a100 = element("a");
      t209 = text("Georgia");
      t210 = space();
      a101 = element("a");
      t211 = text("Guadeloupe");
      t212 = space();
      a102 = element("a");
      t213 = text("Ivory Coast");
      t214 = space();
      a103 = element("a");
      t215 = text("Ghana");
      t216 = space();
      a104 = element("a");
      t217 = text("Martinique");
      t218 = space();
      a105 = element("a");
      t219 = text("Palestine");
      t220 = space();
      a106 = element("a");
      t221 = text("Trinidad and Tobago");
      t222 = space();
      a107 = element("a");
      t223 = text("Uzbekistan");
      t224 = space();
      a108 = element("a");
      t225 = text("Cuba");
      t226 = space();
      a109 = element("a");
      t227 = text("Montenegro");
      t228 = space();
      a110 = element("a");
      t229 = text("Liechtenstein");
      t230 = space();
      a111 = element("a");
      t231 = text("DRC");
      t232 = space();
      a112 = element("a");
      t233 = text("Mauritius");
      t234 = space();
      a113 = element("a");
      t235 = text("Nigeria");
      t236 = space();
      a114 = element("a");
      t237 = text("Kyrgyzstan");
      t238 = space();
      a115 = element("a");
      t239 = text("Rwanda");
      t240 = space();
      a116 = element("a");
      t241 = text("Bangladesh");
      t242 = space();
      a117 = element("a");
      t243 = text("Channel Islands");
      t244 = space();
      a118 = element("a");
      t245 = text("Paraguay");
      t246 = space();
      a119 = element("a");
      t247 = text("Honduras");
      t248 = space();
      a120 = element("a");
      t249 = text("Mayotte");
      t250 = space();
      a121 = element("a");
      t251 = text("Bolivia");
      t252 = space();
      a122 = element("a");
      t253 = text("Monaco");
      t254 = space();
      a123 = element("a");
      t255 = text("Macao");
      t256 = space();
      a124 = element("a");
      t257 = text("French Guiana");
      t258 = space();
      a125 = element("a");
      t259 = text("Kenya");
      t260 = space();
      a126 = element("a");
      t261 = text("Gibraltar");
      t262 = space();
      a127 = element("a");
      t263 = text("Jamaica");
      t264 = space();
      a128 = element("a");
      t265 = text("French Polynesia");
      t266 = space();
      a129 = element("a");
      t267 = text("Guatemala");
      t268 = space();
      a130 = element("a");
      t269 = text("Isle of Man");
      t270 = space();
      a131 = element("a");
      t271 = text("Togo");
      t272 = space();
      a132 = element("a");
      t273 = text("Madagascar");
      t274 = space();
      a133 = element("a");
      t275 = text("Barbados");
      t276 = space();
      a134 = element("a");
      t277 = text("Aruba");
      t278 = space();
      a135 = element("a");
      t279 = text("New Caledonia");
      t280 = space();
      a136 = element("a");
      t281 = text("Uganda");
      t282 = space();
      a137 = element("a");
      t283 = text("Maldives");
      t284 = space();
      a138 = element("a");
      t285 = text("Ethiopia");
      t286 = space();
      a139 = element("a");
      t287 = text("Tanzania");
      t288 = space();
      a140 = element("a");
      t289 = text("Zambia");
      t290 = space();
      a141 = element("a");
      t291 = text("Djibouti");
      t292 = space();
      a142 = element("a");
      t293 = text("Saint Martin");
      t294 = space();
      a143 = element("a");
      t295 = text("Mongolia");
      t296 = space();
      a144 = element("a");
      t297 = text("El Salvador");
      t298 = space();
      a145 = element("a");
      t299 = text("Equatorial Guinea");
      t300 = space();
      a146 = element("a");
      t301 = text("Cayman Islands");
      t302 = space();
      a147 = element("a");
      t303 = text("Haiti");
      t304 = space();
      a148 = element("a");
      t305 = text("Suriname");
      t306 = space();
      a149 = element("a");
      t307 = text("Niger");
      t308 = space();
      a150 = element("a");
      t309 = text("Dominica");
      t310 = space();
      a151 = element("a");
      t311 = text("Namibia");
      t312 = space();
      a152 = element("a");
      t313 = text("Seychelles");
      t314 = space();
      a153 = element("a");
      t315 = text("Curaçao");
      t316 = space();
      a154 = element("a");
      t317 = text("Gabon");
      t318 = space();
      a155 = element("a");
      t319 = text("Benin");
      t320 = space();
      a156 = element("a");
      t321 = text("Bermuda");
      t322 = space();
      a157 = element("a");
      t323 = text("Greenland");
      t324 = space();
      a158 = element("a");
      t325 = text("Guyana");
      t326 = space();
      a159 = element("a");
      t327 = text("Bahamas");
      t328 = space();
      a160 = element("a");
      t329 = text("Fiji");
      t330 = space();
      a161 = element("a");
      t331 = text("Mozambique");
      t332 = space();
      a162 = element("a");
      t333 = text("Syria");
      t334 = space();
      a163 = element("a");
      t335 = text("Cabo Verde");
      t336 = space();
      a164 = element("a");
      t337 = text("Congo");
      t338 = space();
      a165 = element("a");
      t339 = text("Eritrea");
      t340 = space();
      a166 = element("a");
      t341 = text("Guinea");
      t342 = space();
      a167 = element("a");
      t343 = text("Vatican City");
      t344 = space();
      a168 = element("a");
      t345 = text("Eswatini");
      t346 = space();
      a169 = element("a");
      t347 = text("Gambia");
      t348 = space();
      a170 = element("a");
      t349 = text("Sudan");
      t350 = space();
      a171 = element("a");
      t351 = text("Zimbabwe");
      t352 = space();
      a172 = element("a");
      t353 = text("Nepal");
      t354 = space();
      a173 = element("a");
      t355 = text("Angola");
      t356 = space();
      a174 = element("a");
      t357 = text("Antigua and Barbuda");
      t358 = space();
      a175 = element("a");
      t359 = text("CAR");
      t360 = space();
      a176 = element("a");
      t361 = text("Chad");
      t362 = space();
      a177 = element("a");
      t363 = text("Laos");
      t364 = space();
      a178 = element("a");
      t365 = text("Liberia");
      t366 = space();
      a179 = element("a");
      t367 = text("Myanmar");
      t368 = space();
      a180 = element("a");
      t369 = text("St. Barth");
      t370 = space();
      a181 = element("a");
      t371 = text("Saint Lucia");
      t372 = space();
      a182 = element("a");
      t373 = text("Sint Maarten");
      t374 = space();
      a183 = element("a");
      t375 = text("Bhutan");
      t376 = space();
      a184 = element("a");
      t377 = text("Guinea-Bissau");
      t378 = space();
      a185 = element("a");
      t379 = text("Mali");
      t380 = space();
      a186 = element("a");
      t381 = text("Mauritania");
      t382 = space();
      a187 = element("a");
      t383 = text("Nicaragua");
      t384 = space();
      a188 = element("a");
      t385 = text("Belize");
      t386 = space();
      a189 = element("a");
      t387 = text("Grenada");
      t388 = space();
      a190 = element("a");
      t389 = text("Libya");
      t390 = space();
      a191 = element("a");
      t391 = text("Montserrat");
      t392 = space();
      a192 = element("a");
      t393 = text("Papua New Guinea");
      t394 = space();
      a193 = element("a");
      t395 = text("St. Vincent Grenadines");
      t396 = space();
      a194 = element("a");
      t397 = text("Somalia");
      t398 = space();
      a195 = element("a");
      t399 = text("Timor-Leste");
      t400 = space();
      a196 = element("a");
      t401 = text("Turks and Caicos");
      this.h();
    },
    l: function l(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1voy90n\"]", document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div0 = claim_element(nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h1 = claim_element(div0_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Covid-19 Tracker");
      h1_nodes.forEach(detach);
      t2 = claim_space(div0_nodes);
      claim_component(covidbasicstats.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t3 = claim_space(nodes);
      claim_component(covidchart.$$.fragment, nodes);
      t4 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      h2 = claim_element(div1_nodes, "H2", {});
      var h2_nodes = children(h2);
      t5 = claim_text(h2_nodes, "Search By Country");
      h2_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t6 = claim_space(nodes);
      claim_component(filter.$$.fragment, nodes);
      t7 = claim_space(nodes);
      claim_component(table.$$.fragment, nodes);
      t8 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", {
        style: true
      });
      var div2_nodes = children(div2);
      a0 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a0_nodes = children(a0);
      t9 = claim_text(a0_nodes, "China");
      a0_nodes.forEach(detach);
      t10 = claim_space(div2_nodes);
      a1 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a1_nodes = children(a1);
      t11 = claim_text(a1_nodes, "Italy");
      a1_nodes.forEach(detach);
      t12 = claim_space(div2_nodes);
      a2 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a2_nodes = children(a2);
      t13 = claim_text(a2_nodes, "USA");
      a2_nodes.forEach(detach);
      t14 = claim_space(div2_nodes);
      a3 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a3_nodes = children(a3);
      t15 = claim_text(a3_nodes, "Spain");
      a3_nodes.forEach(detach);
      t16 = claim_space(div2_nodes);
      a4 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a4_nodes = children(a4);
      t17 = claim_text(a4_nodes, "Germany");
      a4_nodes.forEach(detach);
      t18 = claim_space(div2_nodes);
      a5 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a5_nodes = children(a5);
      t19 = claim_text(a5_nodes, "Iran");
      a5_nodes.forEach(detach);
      t20 = claim_space(div2_nodes);
      a6 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a6_nodes = children(a6);
      t21 = claim_text(a6_nodes, "France");
      a6_nodes.forEach(detach);
      t22 = claim_space(div2_nodes);
      a7 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a7_nodes = children(a7);
      t23 = claim_text(a7_nodes, "Switzerland");
      a7_nodes.forEach(detach);
      t24 = claim_space(div2_nodes);
      a8 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a8_nodes = children(a8);
      t25 = claim_text(a8_nodes, "UK");
      a8_nodes.forEach(detach);
      t26 = claim_space(div2_nodes);
      a9 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a9_nodes = children(a9);
      t27 = claim_text(a9_nodes, "S. Korea");
      a9_nodes.forEach(detach);
      t28 = claim_space(div2_nodes);
      a10 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a10_nodes = children(a10);
      t29 = claim_text(a10_nodes, "Netherlands");
      a10_nodes.forEach(detach);
      t30 = claim_space(div2_nodes);
      a11 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a11_nodes = children(a11);
      t31 = claim_text(a11_nodes, "Austria");
      a11_nodes.forEach(detach);
      t32 = claim_space(div2_nodes);
      a12 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a12_nodes = children(a12);
      t33 = claim_text(a12_nodes, "Belgium");
      a12_nodes.forEach(detach);
      t34 = claim_space(div2_nodes);
      a13 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a13_nodes = children(a13);
      t35 = claim_text(a13_nodes, "Canada");
      a13_nodes.forEach(detach);
      t36 = claim_space(div2_nodes);
      a14 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a14_nodes = children(a14);
      t37 = claim_text(a14_nodes, "Norway");
      a14_nodes.forEach(detach);
      t38 = claim_space(div2_nodes);
      a15 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a15_nodes = children(a15);
      t39 = claim_text(a15_nodes, "Portugal");
      a15_nodes.forEach(detach);
      t40 = claim_space(div2_nodes);
      a16 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a16_nodes = children(a16);
      t41 = claim_text(a16_nodes, "Sweden");
      a16_nodes.forEach(detach);
      t42 = claim_space(div2_nodes);
      a17 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a17_nodes = children(a17);
      t43 = claim_text(a17_nodes, "Turkey");
      a17_nodes.forEach(detach);
      t44 = claim_space(div2_nodes);
      a18 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a18_nodes = children(a18);
      t45 = claim_text(a18_nodes, "Brazil");
      a18_nodes.forEach(detach);
      t46 = claim_space(div2_nodes);
      a19 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a19_nodes = children(a19);
      t47 = claim_text(a19_nodes, "Australia");
      a19_nodes.forEach(detach);
      t48 = claim_space(div2_nodes);
      a20 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a20_nodes = children(a20);
      t49 = claim_text(a20_nodes, "Israel");
      a20_nodes.forEach(detach);
      t50 = claim_space(div2_nodes);
      a21 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a21_nodes = children(a21);
      t51 = claim_text(a21_nodes, "Malaysia");
      a21_nodes.forEach(detach);
      t52 = claim_space(div2_nodes);
      a22 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a22_nodes = children(a22);
      t53 = claim_text(a22_nodes, "Denmark");
      a22_nodes.forEach(detach);
      t54 = claim_space(div2_nodes);
      a23 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a23_nodes = children(a23);
      t55 = claim_text(a23_nodes, "Czechia");
      a23_nodes.forEach(detach);
      t56 = claim_space(div2_nodes);
      a24 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a24_nodes = children(a24);
      t57 = claim_text(a24_nodes, "Ireland");
      a24_nodes.forEach(detach);
      t58 = claim_space(div2_nodes);
      a25 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a25_nodes = children(a25);
      t59 = claim_text(a25_nodes, "Luxembourg");
      a25_nodes.forEach(detach);
      t60 = claim_space(div2_nodes);
      a26 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a26_nodes = children(a26);
      t61 = claim_text(a26_nodes, "Japan");
      a26_nodes.forEach(detach);
      t62 = claim_space(div2_nodes);
      a27 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a27_nodes = children(a27);
      t63 = claim_text(a27_nodes, "Ecuador");
      a27_nodes.forEach(detach);
      t64 = claim_space(div2_nodes);
      a28 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a28_nodes = children(a28);
      t65 = claim_text(a28_nodes, "Chile");
      a28_nodes.forEach(detach);
      t66 = claim_space(div2_nodes);
      a29 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a29_nodes = children(a29);
      t67 = claim_text(a29_nodes, "Pakistan");
      a29_nodes.forEach(detach);
      t68 = claim_space(div2_nodes);
      a30 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a30_nodes = children(a30);
      t69 = claim_text(a30_nodes, "Poland");
      a30_nodes.forEach(detach);
      t70 = claim_space(div2_nodes);
      a31 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a31_nodes = children(a31);
      t71 = claim_text(a31_nodes, "Thailand");
      a31_nodes.forEach(detach);
      t72 = claim_space(div2_nodes);
      a32 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a32_nodes = children(a32);
      t73 = claim_text(a32_nodes, "Romania");
      a32_nodes.forEach(detach);
      t74 = claim_space(div2_nodes);
      a33 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a33_nodes = children(a33);
      t75 = claim_text(a33_nodes, "Saudi Arabia");
      a33_nodes.forEach(detach);
      t76 = claim_space(div2_nodes);
      a34 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a34_nodes = children(a34);
      t77 = claim_text(a34_nodes, "Finland");
      a34_nodes.forEach(detach);
      t78 = claim_space(div2_nodes);
      a35 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a35_nodes = children(a35);
      t79 = claim_text(a35_nodes, "Greece");
      a35_nodes.forEach(detach);
      t80 = claim_space(div2_nodes);
      a36 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a36_nodes = children(a36);
      t81 = claim_text(a36_nodes, "Indonesia");
      a36_nodes.forEach(detach);
      t82 = claim_space(div2_nodes);
      a37 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a37_nodes = children(a37);
      t83 = claim_text(a37_nodes, "Iceland");
      a37_nodes.forEach(detach);
      t84 = claim_space(div2_nodes);
      a38 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a38_nodes = children(a38);
      t85 = claim_text(a38_nodes, "Diamond Princess");
      a38_nodes.forEach(detach);
      t86 = claim_space(div2_nodes);
      a39 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a39_nodes = children(a39);
      t87 = claim_text(a39_nodes, "South Africa");
      a39_nodes.forEach(detach);
      t88 = claim_space(div2_nodes);
      a40 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a40_nodes = children(a40);
      t89 = claim_text(a40_nodes, "Russia");
      a40_nodes.forEach(detach);
      t90 = claim_space(div2_nodes);
      a41 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a41_nodes = children(a41);
      t91 = claim_text(a41_nodes, "India");
      a41_nodes.forEach(detach);
      t92 = claim_space(div2_nodes);
      a42 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a42_nodes = children(a42);
      t93 = claim_text(a42_nodes, "Philippines");
      a42_nodes.forEach(detach);
      t94 = claim_space(div2_nodes);
      a43 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a43_nodes = children(a43);
      t95 = claim_text(a43_nodes, "Singapore");
      a43_nodes.forEach(detach);
      t96 = claim_space(div2_nodes);
      a44 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a44_nodes = children(a44);
      t97 = claim_text(a44_nodes, "Qatar");
      a44_nodes.forEach(detach);
      t98 = claim_space(div2_nodes);
      a45 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a45_nodes = children(a45);
      t99 = claim_text(a45_nodes, "Slovenia");
      a45_nodes.forEach(detach);
      t100 = claim_space(div2_nodes);
      a46 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a46_nodes = children(a46);
      t101 = claim_text(a46_nodes, "Peru");
      a46_nodes.forEach(detach);
      t102 = claim_space(div2_nodes);
      a47 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a47_nodes = children(a47);
      t103 = claim_text(a47_nodes, "Colombia");
      a47_nodes.forEach(detach);
      t104 = claim_space(div2_nodes);
      a48 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a48_nodes = children(a48);
      t105 = claim_text(a48_nodes, "Egypt");
      a48_nodes.forEach(detach);
      t106 = claim_space(div2_nodes);
      a49 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a49_nodes = children(a49);
      t107 = claim_text(a49_nodes, "Panama");
      a49_nodes.forEach(detach);
      t108 = claim_space(div2_nodes);
      a50 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a50_nodes = children(a50);
      t109 = claim_text(a50_nodes, "Croatia");
      a50_nodes.forEach(detach);
      t110 = claim_space(div2_nodes);
      a51 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a51_nodes = children(a51);
      t111 = claim_text(a51_nodes, "Bahrain");
      a51_nodes.forEach(detach);
      t112 = claim_space(div2_nodes);
      a52 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a52_nodes = children(a52);
      t113 = claim_text(a52_nodes, "Hong Kong");
      a52_nodes.forEach(detach);
      t114 = claim_space(div2_nodes);
      a53 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a53_nodes = children(a53);
      t115 = claim_text(a53_nodes, "Mexico");
      a53_nodes.forEach(detach);
      t116 = claim_space(div2_nodes);
      a54 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a54_nodes = children(a54);
      t117 = claim_text(a54_nodes, "Estonia");
      a54_nodes.forEach(detach);
      t118 = claim_space(div2_nodes);
      a55 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a55_nodes = children(a55);
      t119 = claim_text(a55_nodes, "Dominican Republic");
      a55_nodes.forEach(detach);
      t120 = claim_space(div2_nodes);
      a56 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a56_nodes = children(a56);
      t121 = claim_text(a56_nodes, "Argentina");
      a56_nodes.forEach(detach);
      t122 = claim_space(div2_nodes);
      a57 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a57_nodes = children(a57);
      t123 = claim_text(a57_nodes, "Serbia");
      a57_nodes.forEach(detach);
      t124 = claim_space(div2_nodes);
      a58 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a58_nodes = children(a58);
      t125 = claim_text(a58_nodes, "Iraq");
      a58_nodes.forEach(detach);
      t126 = claim_space(div2_nodes);
      a59 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a59_nodes = children(a59);
      t127 = claim_text(a59_nodes, "Lebanon");
      a59_nodes.forEach(detach);
      t128 = claim_space(div2_nodes);
      a60 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a60_nodes = children(a60);
      t129 = claim_text(a60_nodes, "UAE");
      a60_nodes.forEach(detach);
      t130 = claim_space(div2_nodes);
      a61 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a61_nodes = children(a61);
      t131 = claim_text(a61_nodes, "Algeria");
      a61_nodes.forEach(detach);
      t132 = claim_space(div2_nodes);
      a62 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a62_nodes = children(a62);
      t133 = claim_text(a62_nodes, "Lithuania");
      a62_nodes.forEach(detach);
      t134 = claim_space(div2_nodes);
      a63 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a63_nodes = children(a63);
      t135 = claim_text(a63_nodes, "Armenia");
      a63_nodes.forEach(detach);
      t136 = claim_space(div2_nodes);
      a64 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a64_nodes = children(a64);
      t137 = claim_text(a64_nodes, "Bulgaria");
      a64_nodes.forEach(detach);
      t138 = claim_space(div2_nodes);
      a65 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a65_nodes = children(a65);
      t139 = claim_text(a65_nodes, "Taiwan");
      a65_nodes.forEach(detach);
      t140 = claim_space(div2_nodes);
      a66 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a66_nodes = children(a66);
      t141 = claim_text(a66_nodes, "Hungary");
      a66_nodes.forEach(detach);
      t142 = claim_space(div2_nodes);
      a67 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a67_nodes = children(a67);
      t143 = claim_text(a67_nodes, "Morocco");
      a67_nodes.forEach(detach);
      t144 = claim_space(div2_nodes);
      a68 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a68_nodes = children(a68);
      t145 = claim_text(a68_nodes, "Latvia");
      a68_nodes.forEach(detach);
      t146 = claim_space(div2_nodes);
      a69 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a69_nodes = children(a69);
      t147 = claim_text(a69_nodes, "Slovakia");
      a69_nodes.forEach(detach);
      t148 = claim_space(div2_nodes);
      a70 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a70_nodes = children(a70);
      t149 = claim_text(a70_nodes, "San Marino");
      a70_nodes.forEach(detach);
      t150 = claim_space(div2_nodes);
      a71 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a71_nodes = children(a71);
      t151 = claim_text(a71_nodes, "New Zealand");
      a71_nodes.forEach(detach);
      t152 = claim_space(div2_nodes);
      a72 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a72_nodes = children(a72);
      t153 = claim_text(a72_nodes, "Costa Rica");
      a72_nodes.forEach(detach);
      t154 = claim_space(div2_nodes);
      a73 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a73_nodes = children(a73);
      t155 = claim_text(a73_nodes, "Kuwait");
      a73_nodes.forEach(detach);
      t156 = claim_space(div2_nodes);
      a74 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a74_nodes = children(a74);
      t157 = claim_text(a74_nodes, "Uruguay");
      a74_nodes.forEach(detach);
      t158 = claim_space(div2_nodes);
      a75 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a75_nodes = children(a75);
      t159 = claim_text(a75_nodes, "Andorra");
      a75_nodes.forEach(detach);
      t160 = claim_space(div2_nodes);
      a76 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a76_nodes = children(a76);
      t161 = claim_text(a76_nodes, "North Macedonia");
      a76_nodes.forEach(detach);
      t162 = claim_space(div2_nodes);
      a77 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a77_nodes = children(a77);
      t163 = claim_text(a77_nodes, "Tunisia");
      a77_nodes.forEach(detach);
      t164 = claim_space(div2_nodes);
      a78 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a78_nodes = children(a78);
      t165 = claim_text(a78_nodes, "Bosnia and Herzegovina");
      a78_nodes.forEach(detach);
      t166 = claim_space(div2_nodes);
      a79 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a79_nodes = children(a79);
      t167 = claim_text(a79_nodes, "Jordan");
      a79_nodes.forEach(detach);
      t168 = claim_space(div2_nodes);
      a80 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a80_nodes = children(a80);
      t169 = claim_text(a80_nodes, "Moldova");
      a80_nodes.forEach(detach);
      t170 = claim_space(div2_nodes);
      a81 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a81_nodes = children(a81);
      t171 = claim_text(a81_nodes, "Albania");
      a81_nodes.forEach(detach);
      t172 = claim_space(div2_nodes);
      a82 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a82_nodes = children(a82);
      t173 = claim_text(a82_nodes, "Burkina Faso");
      a82_nodes.forEach(detach);
      t174 = claim_space(div2_nodes);
      a83 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a83_nodes = children(a83);
      t175 = claim_text(a83_nodes, "Ukraine");
      a83_nodes.forEach(detach);
      t176 = claim_space(div2_nodes);
      a84 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a84_nodes = children(a84);
      t177 = claim_text(a84_nodes, "Vietnam");
      a84_nodes.forEach(detach);
      t178 = claim_space(div2_nodes);
      a85 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a85_nodes = children(a85);
      t179 = claim_text(a85_nodes, "Cyprus");
      a85_nodes.forEach(detach);
      t180 = claim_space(div2_nodes);
      a86 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a86_nodes = children(a86);
      t181 = claim_text(a86_nodes, "Faeroe Islands");
      a86_nodes.forEach(detach);
      t182 = claim_space(div2_nodes);
      a87 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a87_nodes = children(a87);
      t183 = claim_text(a87_nodes, "Malta");
      a87_nodes.forEach(detach);
      t184 = claim_space(div2_nodes);
      a88 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a88_nodes = children(a88);
      t185 = claim_text(a88_nodes, "Réunion");
      a88_nodes.forEach(detach);
      t186 = claim_space(div2_nodes);
      a89 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a89_nodes = children(a89);
      t187 = claim_text(a89_nodes, "Brunei");
      a89_nodes.forEach(detach);
      t188 = claim_space(div2_nodes);
      a90 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a90_nodes = children(a90);
      t189 = claim_text(a90_nodes, "Sri Lanka");
      a90_nodes.forEach(detach);
      t190 = claim_space(div2_nodes);
      a91 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a91_nodes = children(a91);
      t191 = claim_text(a91_nodes, "Oman");
      a91_nodes.forEach(detach);
      t192 = claim_space(div2_nodes);
      a92 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a92_nodes = children(a92);
      t193 = claim_text(a92_nodes, "Senegal");
      a92_nodes.forEach(detach);
      t194 = claim_space(div2_nodes);
      a93 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a93_nodes = children(a93);
      t195 = claim_text(a93_nodes, "Cambodia");
      a93_nodes.forEach(detach);
      t196 = claim_space(div2_nodes);
      a94 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a94_nodes = children(a94);
      t197 = claim_text(a94_nodes, "Azerbaijan");
      a94_nodes.forEach(detach);
      t198 = claim_space(div2_nodes);
      a95 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a95_nodes = children(a95);
      t199 = claim_text(a95_nodes, "Venezuela");
      a95_nodes.forEach(detach);
      t200 = claim_space(div2_nodes);
      a96 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a96_nodes = children(a96);
      t201 = claim_text(a96_nodes, "Belarus");
      a96_nodes.forEach(detach);
      t202 = claim_space(div2_nodes);
      a97 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a97_nodes = children(a97);
      t203 = claim_text(a97_nodes, "Afghanistan");
      a97_nodes.forEach(detach);
      t204 = claim_space(div2_nodes);
      a98 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a98_nodes = children(a98);
      t205 = claim_text(a98_nodes, "Kazakhstan");
      a98_nodes.forEach(detach);
      t206 = claim_space(div2_nodes);
      a99 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a99_nodes = children(a99);
      t207 = claim_text(a99_nodes, "Cameroon");
      a99_nodes.forEach(detach);
      t208 = claim_space(div2_nodes);
      a100 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a100_nodes = children(a100);
      t209 = claim_text(a100_nodes, "Georgia");
      a100_nodes.forEach(detach);
      t210 = claim_space(div2_nodes);
      a101 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a101_nodes = children(a101);
      t211 = claim_text(a101_nodes, "Guadeloupe");
      a101_nodes.forEach(detach);
      t212 = claim_space(div2_nodes);
      a102 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a102_nodes = children(a102);
      t213 = claim_text(a102_nodes, "Ivory Coast");
      a102_nodes.forEach(detach);
      t214 = claim_space(div2_nodes);
      a103 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a103_nodes = children(a103);
      t215 = claim_text(a103_nodes, "Ghana");
      a103_nodes.forEach(detach);
      t216 = claim_space(div2_nodes);
      a104 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a104_nodes = children(a104);
      t217 = claim_text(a104_nodes, "Martinique");
      a104_nodes.forEach(detach);
      t218 = claim_space(div2_nodes);
      a105 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a105_nodes = children(a105);
      t219 = claim_text(a105_nodes, "Palestine");
      a105_nodes.forEach(detach);
      t220 = claim_space(div2_nodes);
      a106 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a106_nodes = children(a106);
      t221 = claim_text(a106_nodes, "Trinidad and Tobago");
      a106_nodes.forEach(detach);
      t222 = claim_space(div2_nodes);
      a107 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a107_nodes = children(a107);
      t223 = claim_text(a107_nodes, "Uzbekistan");
      a107_nodes.forEach(detach);
      t224 = claim_space(div2_nodes);
      a108 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a108_nodes = children(a108);
      t225 = claim_text(a108_nodes, "Cuba");
      a108_nodes.forEach(detach);
      t226 = claim_space(div2_nodes);
      a109 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a109_nodes = children(a109);
      t227 = claim_text(a109_nodes, "Montenegro");
      a109_nodes.forEach(detach);
      t228 = claim_space(div2_nodes);
      a110 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a110_nodes = children(a110);
      t229 = claim_text(a110_nodes, "Liechtenstein");
      a110_nodes.forEach(detach);
      t230 = claim_space(div2_nodes);
      a111 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a111_nodes = children(a111);
      t231 = claim_text(a111_nodes, "DRC");
      a111_nodes.forEach(detach);
      t232 = claim_space(div2_nodes);
      a112 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a112_nodes = children(a112);
      t233 = claim_text(a112_nodes, "Mauritius");
      a112_nodes.forEach(detach);
      t234 = claim_space(div2_nodes);
      a113 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a113_nodes = children(a113);
      t235 = claim_text(a113_nodes, "Nigeria");
      a113_nodes.forEach(detach);
      t236 = claim_space(div2_nodes);
      a114 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a114_nodes = children(a114);
      t237 = claim_text(a114_nodes, "Kyrgyzstan");
      a114_nodes.forEach(detach);
      t238 = claim_space(div2_nodes);
      a115 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a115_nodes = children(a115);
      t239 = claim_text(a115_nodes, "Rwanda");
      a115_nodes.forEach(detach);
      t240 = claim_space(div2_nodes);
      a116 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a116_nodes = children(a116);
      t241 = claim_text(a116_nodes, "Bangladesh");
      a116_nodes.forEach(detach);
      t242 = claim_space(div2_nodes);
      a117 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a117_nodes = children(a117);
      t243 = claim_text(a117_nodes, "Channel Islands");
      a117_nodes.forEach(detach);
      t244 = claim_space(div2_nodes);
      a118 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a118_nodes = children(a118);
      t245 = claim_text(a118_nodes, "Paraguay");
      a118_nodes.forEach(detach);
      t246 = claim_space(div2_nodes);
      a119 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a119_nodes = children(a119);
      t247 = claim_text(a119_nodes, "Honduras");
      a119_nodes.forEach(detach);
      t248 = claim_space(div2_nodes);
      a120 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a120_nodes = children(a120);
      t249 = claim_text(a120_nodes, "Mayotte");
      a120_nodes.forEach(detach);
      t250 = claim_space(div2_nodes);
      a121 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a121_nodes = children(a121);
      t251 = claim_text(a121_nodes, "Bolivia");
      a121_nodes.forEach(detach);
      t252 = claim_space(div2_nodes);
      a122 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a122_nodes = children(a122);
      t253 = claim_text(a122_nodes, "Monaco");
      a122_nodes.forEach(detach);
      t254 = claim_space(div2_nodes);
      a123 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a123_nodes = children(a123);
      t255 = claim_text(a123_nodes, "Macao");
      a123_nodes.forEach(detach);
      t256 = claim_space(div2_nodes);
      a124 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a124_nodes = children(a124);
      t257 = claim_text(a124_nodes, "French Guiana");
      a124_nodes.forEach(detach);
      t258 = claim_space(div2_nodes);
      a125 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a125_nodes = children(a125);
      t259 = claim_text(a125_nodes, "Kenya");
      a125_nodes.forEach(detach);
      t260 = claim_space(div2_nodes);
      a126 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a126_nodes = children(a126);
      t261 = claim_text(a126_nodes, "Gibraltar");
      a126_nodes.forEach(detach);
      t262 = claim_space(div2_nodes);
      a127 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a127_nodes = children(a127);
      t263 = claim_text(a127_nodes, "Jamaica");
      a127_nodes.forEach(detach);
      t264 = claim_space(div2_nodes);
      a128 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a128_nodes = children(a128);
      t265 = claim_text(a128_nodes, "French Polynesia");
      a128_nodes.forEach(detach);
      t266 = claim_space(div2_nodes);
      a129 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a129_nodes = children(a129);
      t267 = claim_text(a129_nodes, "Guatemala");
      a129_nodes.forEach(detach);
      t268 = claim_space(div2_nodes);
      a130 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a130_nodes = children(a130);
      t269 = claim_text(a130_nodes, "Isle of Man");
      a130_nodes.forEach(detach);
      t270 = claim_space(div2_nodes);
      a131 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a131_nodes = children(a131);
      t271 = claim_text(a131_nodes, "Togo");
      a131_nodes.forEach(detach);
      t272 = claim_space(div2_nodes);
      a132 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a132_nodes = children(a132);
      t273 = claim_text(a132_nodes, "Madagascar");
      a132_nodes.forEach(detach);
      t274 = claim_space(div2_nodes);
      a133 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a133_nodes = children(a133);
      t275 = claim_text(a133_nodes, "Barbados");
      a133_nodes.forEach(detach);
      t276 = claim_space(div2_nodes);
      a134 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a134_nodes = children(a134);
      t277 = claim_text(a134_nodes, "Aruba");
      a134_nodes.forEach(detach);
      t278 = claim_space(div2_nodes);
      a135 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a135_nodes = children(a135);
      t279 = claim_text(a135_nodes, "New Caledonia");
      a135_nodes.forEach(detach);
      t280 = claim_space(div2_nodes);
      a136 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a136_nodes = children(a136);
      t281 = claim_text(a136_nodes, "Uganda");
      a136_nodes.forEach(detach);
      t282 = claim_space(div2_nodes);
      a137 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a137_nodes = children(a137);
      t283 = claim_text(a137_nodes, "Maldives");
      a137_nodes.forEach(detach);
      t284 = claim_space(div2_nodes);
      a138 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a138_nodes = children(a138);
      t285 = claim_text(a138_nodes, "Ethiopia");
      a138_nodes.forEach(detach);
      t286 = claim_space(div2_nodes);
      a139 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a139_nodes = children(a139);
      t287 = claim_text(a139_nodes, "Tanzania");
      a139_nodes.forEach(detach);
      t288 = claim_space(div2_nodes);
      a140 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a140_nodes = children(a140);
      t289 = claim_text(a140_nodes, "Zambia");
      a140_nodes.forEach(detach);
      t290 = claim_space(div2_nodes);
      a141 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a141_nodes = children(a141);
      t291 = claim_text(a141_nodes, "Djibouti");
      a141_nodes.forEach(detach);
      t292 = claim_space(div2_nodes);
      a142 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a142_nodes = children(a142);
      t293 = claim_text(a142_nodes, "Saint Martin");
      a142_nodes.forEach(detach);
      t294 = claim_space(div2_nodes);
      a143 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a143_nodes = children(a143);
      t295 = claim_text(a143_nodes, "Mongolia");
      a143_nodes.forEach(detach);
      t296 = claim_space(div2_nodes);
      a144 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a144_nodes = children(a144);
      t297 = claim_text(a144_nodes, "El Salvador");
      a144_nodes.forEach(detach);
      t298 = claim_space(div2_nodes);
      a145 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a145_nodes = children(a145);
      t299 = claim_text(a145_nodes, "Equatorial Guinea");
      a145_nodes.forEach(detach);
      t300 = claim_space(div2_nodes);
      a146 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a146_nodes = children(a146);
      t301 = claim_text(a146_nodes, "Cayman Islands");
      a146_nodes.forEach(detach);
      t302 = claim_space(div2_nodes);
      a147 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a147_nodes = children(a147);
      t303 = claim_text(a147_nodes, "Haiti");
      a147_nodes.forEach(detach);
      t304 = claim_space(div2_nodes);
      a148 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a148_nodes = children(a148);
      t305 = claim_text(a148_nodes, "Suriname");
      a148_nodes.forEach(detach);
      t306 = claim_space(div2_nodes);
      a149 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a149_nodes = children(a149);
      t307 = claim_text(a149_nodes, "Niger");
      a149_nodes.forEach(detach);
      t308 = claim_space(div2_nodes);
      a150 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a150_nodes = children(a150);
      t309 = claim_text(a150_nodes, "Dominica");
      a150_nodes.forEach(detach);
      t310 = claim_space(div2_nodes);
      a151 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a151_nodes = children(a151);
      t311 = claim_text(a151_nodes, "Namibia");
      a151_nodes.forEach(detach);
      t312 = claim_space(div2_nodes);
      a152 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a152_nodes = children(a152);
      t313 = claim_text(a152_nodes, "Seychelles");
      a152_nodes.forEach(detach);
      t314 = claim_space(div2_nodes);
      a153 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a153_nodes = children(a153);
      t315 = claim_text(a153_nodes, "Curaçao");
      a153_nodes.forEach(detach);
      t316 = claim_space(div2_nodes);
      a154 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a154_nodes = children(a154);
      t317 = claim_text(a154_nodes, "Gabon");
      a154_nodes.forEach(detach);
      t318 = claim_space(div2_nodes);
      a155 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a155_nodes = children(a155);
      t319 = claim_text(a155_nodes, "Benin");
      a155_nodes.forEach(detach);
      t320 = claim_space(div2_nodes);
      a156 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a156_nodes = children(a156);
      t321 = claim_text(a156_nodes, "Bermuda");
      a156_nodes.forEach(detach);
      t322 = claim_space(div2_nodes);
      a157 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a157_nodes = children(a157);
      t323 = claim_text(a157_nodes, "Greenland");
      a157_nodes.forEach(detach);
      t324 = claim_space(div2_nodes);
      a158 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a158_nodes = children(a158);
      t325 = claim_text(a158_nodes, "Guyana");
      a158_nodes.forEach(detach);
      t326 = claim_space(div2_nodes);
      a159 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a159_nodes = children(a159);
      t327 = claim_text(a159_nodes, "Bahamas");
      a159_nodes.forEach(detach);
      t328 = claim_space(div2_nodes);
      a160 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a160_nodes = children(a160);
      t329 = claim_text(a160_nodes, "Fiji");
      a160_nodes.forEach(detach);
      t330 = claim_space(div2_nodes);
      a161 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a161_nodes = children(a161);
      t331 = claim_text(a161_nodes, "Mozambique");
      a161_nodes.forEach(detach);
      t332 = claim_space(div2_nodes);
      a162 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a162_nodes = children(a162);
      t333 = claim_text(a162_nodes, "Syria");
      a162_nodes.forEach(detach);
      t334 = claim_space(div2_nodes);
      a163 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a163_nodes = children(a163);
      t335 = claim_text(a163_nodes, "Cabo Verde");
      a163_nodes.forEach(detach);
      t336 = claim_space(div2_nodes);
      a164 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a164_nodes = children(a164);
      t337 = claim_text(a164_nodes, "Congo");
      a164_nodes.forEach(detach);
      t338 = claim_space(div2_nodes);
      a165 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a165_nodes = children(a165);
      t339 = claim_text(a165_nodes, "Eritrea");
      a165_nodes.forEach(detach);
      t340 = claim_space(div2_nodes);
      a166 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a166_nodes = children(a166);
      t341 = claim_text(a166_nodes, "Guinea");
      a166_nodes.forEach(detach);
      t342 = claim_space(div2_nodes);
      a167 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a167_nodes = children(a167);
      t343 = claim_text(a167_nodes, "Vatican City");
      a167_nodes.forEach(detach);
      t344 = claim_space(div2_nodes);
      a168 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a168_nodes = children(a168);
      t345 = claim_text(a168_nodes, "Eswatini");
      a168_nodes.forEach(detach);
      t346 = claim_space(div2_nodes);
      a169 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a169_nodes = children(a169);
      t347 = claim_text(a169_nodes, "Gambia");
      a169_nodes.forEach(detach);
      t348 = claim_space(div2_nodes);
      a170 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a170_nodes = children(a170);
      t349 = claim_text(a170_nodes, "Sudan");
      a170_nodes.forEach(detach);
      t350 = claim_space(div2_nodes);
      a171 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a171_nodes = children(a171);
      t351 = claim_text(a171_nodes, "Zimbabwe");
      a171_nodes.forEach(detach);
      t352 = claim_space(div2_nodes);
      a172 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a172_nodes = children(a172);
      t353 = claim_text(a172_nodes, "Nepal");
      a172_nodes.forEach(detach);
      t354 = claim_space(div2_nodes);
      a173 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a173_nodes = children(a173);
      t355 = claim_text(a173_nodes, "Angola");
      a173_nodes.forEach(detach);
      t356 = claim_space(div2_nodes);
      a174 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a174_nodes = children(a174);
      t357 = claim_text(a174_nodes, "Antigua and Barbuda");
      a174_nodes.forEach(detach);
      t358 = claim_space(div2_nodes);
      a175 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a175_nodes = children(a175);
      t359 = claim_text(a175_nodes, "CAR");
      a175_nodes.forEach(detach);
      t360 = claim_space(div2_nodes);
      a176 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a176_nodes = children(a176);
      t361 = claim_text(a176_nodes, "Chad");
      a176_nodes.forEach(detach);
      t362 = claim_space(div2_nodes);
      a177 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a177_nodes = children(a177);
      t363 = claim_text(a177_nodes, "Laos");
      a177_nodes.forEach(detach);
      t364 = claim_space(div2_nodes);
      a178 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a178_nodes = children(a178);
      t365 = claim_text(a178_nodes, "Liberia");
      a178_nodes.forEach(detach);
      t366 = claim_space(div2_nodes);
      a179 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a179_nodes = children(a179);
      t367 = claim_text(a179_nodes, "Myanmar");
      a179_nodes.forEach(detach);
      t368 = claim_space(div2_nodes);
      a180 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a180_nodes = children(a180);
      t369 = claim_text(a180_nodes, "St. Barth");
      a180_nodes.forEach(detach);
      t370 = claim_space(div2_nodes);
      a181 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a181_nodes = children(a181);
      t371 = claim_text(a181_nodes, "Saint Lucia");
      a181_nodes.forEach(detach);
      t372 = claim_space(div2_nodes);
      a182 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a182_nodes = children(a182);
      t373 = claim_text(a182_nodes, "Sint Maarten");
      a182_nodes.forEach(detach);
      t374 = claim_space(div2_nodes);
      a183 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a183_nodes = children(a183);
      t375 = claim_text(a183_nodes, "Bhutan");
      a183_nodes.forEach(detach);
      t376 = claim_space(div2_nodes);
      a184 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a184_nodes = children(a184);
      t377 = claim_text(a184_nodes, "Guinea-Bissau");
      a184_nodes.forEach(detach);
      t378 = claim_space(div2_nodes);
      a185 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a185_nodes = children(a185);
      t379 = claim_text(a185_nodes, "Mali");
      a185_nodes.forEach(detach);
      t380 = claim_space(div2_nodes);
      a186 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a186_nodes = children(a186);
      t381 = claim_text(a186_nodes, "Mauritania");
      a186_nodes.forEach(detach);
      t382 = claim_space(div2_nodes);
      a187 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a187_nodes = children(a187);
      t383 = claim_text(a187_nodes, "Nicaragua");
      a187_nodes.forEach(detach);
      t384 = claim_space(div2_nodes);
      a188 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a188_nodes = children(a188);
      t385 = claim_text(a188_nodes, "Belize");
      a188_nodes.forEach(detach);
      t386 = claim_space(div2_nodes);
      a189 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a189_nodes = children(a189);
      t387 = claim_text(a189_nodes, "Grenada");
      a189_nodes.forEach(detach);
      t388 = claim_space(div2_nodes);
      a190 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a190_nodes = children(a190);
      t389 = claim_text(a190_nodes, "Libya");
      a190_nodes.forEach(detach);
      t390 = claim_space(div2_nodes);
      a191 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a191_nodes = children(a191);
      t391 = claim_text(a191_nodes, "Montserrat");
      a191_nodes.forEach(detach);
      t392 = claim_space(div2_nodes);
      a192 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a192_nodes = children(a192);
      t393 = claim_text(a192_nodes, "Papua New Guinea");
      a192_nodes.forEach(detach);
      t394 = claim_space(div2_nodes);
      a193 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a193_nodes = children(a193);
      t395 = claim_text(a193_nodes, "St. Vincent Grenadines");
      a193_nodes.forEach(detach);
      t396 = claim_space(div2_nodes);
      a194 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a194_nodes = children(a194);
      t397 = claim_text(a194_nodes, "Somalia");
      a194_nodes.forEach(detach);
      t398 = claim_space(div2_nodes);
      a195 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a195_nodes = children(a195);
      t399 = claim_text(a195_nodes, "Timor-Leste");
      a195_nodes.forEach(detach);
      t400 = claim_space(div2_nodes);
      a196 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a196_nodes = children(a196);
      t401 = claim_text(a196_nodes, "Turks and Caicos");
      a196_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h: function h() {
      document.title = "Covid-19 Tracker";
      attr(h1, "class", "svelte-rmr45w");
      attr(div0, "class", "ui container svelte-rmr45w");
      attr(div1, "class", "ui container svelte-rmr45w");
      attr(a0, "href", "China");
      attr(a1, "href", "Italy");
      attr(a2, "href", "USA");
      attr(a3, "href", "Spain");
      attr(a4, "href", "Germany");
      attr(a5, "href", "Iran");
      attr(a6, "href", "France");
      attr(a7, "href", "Switzerland");
      attr(a8, "href", "UK");
      attr(a9, "href", "S. Korea");
      attr(a10, "href", "Netherlands");
      attr(a11, "href", "Austria");
      attr(a12, "href", "Belgium");
      attr(a13, "href", "Canada");
      attr(a14, "href", "Norway");
      attr(a15, "href", "Portugal");
      attr(a16, "href", "Sweden");
      attr(a17, "href", "Turkey");
      attr(a18, "href", "Brazil");
      attr(a19, "href", "Australia");
      attr(a20, "href", "Israel");
      attr(a21, "href", "Malaysia");
      attr(a22, "href", "Denmark");
      attr(a23, "href", "Czechia");
      attr(a24, "href", "Ireland");
      attr(a25, "href", "Luxembourg");
      attr(a26, "href", "Japan");
      attr(a27, "href", "Ecuador");
      attr(a28, "href", "Chile");
      attr(a29, "href", "Pakistan");
      attr(a30, "href", "Poland");
      attr(a31, "href", "Thailand");
      attr(a32, "href", "Romania");
      attr(a33, "href", "Saudi Arabia");
      attr(a34, "href", "Finland");
      attr(a35, "href", "Greece");
      attr(a36, "href", "Indonesia");
      attr(a37, "href", "Iceland");
      attr(a38, "href", "Diamond Princess");
      attr(a39, "href", "South Africa");
      attr(a40, "href", "Russia");
      attr(a41, "href", "India");
      attr(a42, "href", "Philippines");
      attr(a43, "href", "Singapore");
      attr(a44, "href", "Qatar");
      attr(a45, "href", "Slovenia");
      attr(a46, "href", "Peru");
      attr(a47, "href", "Colombia");
      attr(a48, "href", "Egypt");
      attr(a49, "href", "Panama");
      attr(a50, "href", "Croatia");
      attr(a51, "href", "Bahrain");
      attr(a52, "href", "Hong Kong");
      attr(a53, "href", "Mexico");
      attr(a54, "href", "Estonia");
      attr(a55, "href", "Dominican Republic");
      attr(a56, "href", "Argentina");
      attr(a57, "href", "Serbia");
      attr(a58, "href", "Iraq");
      attr(a59, "href", "Lebanon");
      attr(a60, "href", "UAE");
      attr(a61, "href", "Algeria");
      attr(a62, "href", "Lithuania");
      attr(a63, "href", "Armenia");
      attr(a64, "href", "Bulgaria");
      attr(a65, "href", "Taiwan");
      attr(a66, "href", "Hungary");
      attr(a67, "href", "Morocco");
      attr(a68, "href", "Latvia");
      attr(a69, "href", "Slovakia");
      attr(a70, "href", "San Marino");
      attr(a71, "href", "New Zealand");
      attr(a72, "href", "Costa Rica");
      attr(a73, "href", "Kuwait");
      attr(a74, "href", "Uruguay");
      attr(a75, "href", "Andorra");
      attr(a76, "href", "North Macedonia");
      attr(a77, "href", "Tunisia");
      attr(a78, "href", "Bosnia and Herzegovina");
      attr(a79, "href", "Jordan");
      attr(a80, "href", "Moldova");
      attr(a81, "href", "Albania");
      attr(a82, "href", "Burkina Faso");
      attr(a83, "href", "Ukraine");
      attr(a84, "href", "Vietnam");
      attr(a85, "href", "Cyprus");
      attr(a86, "href", "Faeroe Islands");
      attr(a87, "href", "Malta");
      attr(a88, "href", "Réunion");
      attr(a89, "href", "Brunei");
      attr(a90, "href", "Sri Lanka");
      attr(a91, "href", "Oman");
      attr(a92, "href", "Senegal");
      attr(a93, "href", "Cambodia");
      attr(a94, "href", "Azerbaijan");
      attr(a95, "href", "Venezuela");
      attr(a96, "href", "Belarus");
      attr(a97, "href", "Afghanistan");
      attr(a98, "href", "Kazakhstan");
      attr(a99, "href", "Cameroon");
      attr(a100, "href", "Georgia");
      attr(a101, "href", "Guadeloupe");
      attr(a102, "href", "Ivory Coast");
      attr(a103, "href", "Ghana");
      attr(a104, "href", "Martinique");
      attr(a105, "href", "Palestine");
      attr(a106, "href", "Trinidad and Tobago");
      attr(a107, "href", "Uzbekistan");
      attr(a108, "href", "Cuba");
      attr(a109, "href", "Montenegro");
      attr(a110, "href", "Liechtenstein");
      attr(a111, "href", "DRC");
      attr(a112, "href", "Mauritius");
      attr(a113, "href", "Nigeria");
      attr(a114, "href", "Kyrgyzstan");
      attr(a115, "href", "Rwanda");
      attr(a116, "href", "Bangladesh");
      attr(a117, "href", "Channel Islands");
      attr(a118, "href", "Paraguay");
      attr(a119, "href", "Honduras");
      attr(a120, "href", "Mayotte");
      attr(a121, "href", "Bolivia");
      attr(a122, "href", "Monaco");
      attr(a123, "href", "Macao");
      attr(a124, "href", "French Guiana");
      attr(a125, "href", "Kenya");
      attr(a126, "href", "Gibraltar");
      attr(a127, "href", "Jamaica");
      attr(a128, "href", "French Polynesia");
      attr(a129, "href", "Guatemala");
      attr(a130, "href", "Isle of Man");
      attr(a131, "href", "Togo");
      attr(a132, "href", "Madagascar");
      attr(a133, "href", "Barbados");
      attr(a134, "href", "Aruba");
      attr(a135, "href", "New Caledonia");
      attr(a136, "href", "Uganda");
      attr(a137, "href", "Maldives");
      attr(a138, "href", "Ethiopia");
      attr(a139, "href", "Tanzania");
      attr(a140, "href", "Zambia");
      attr(a141, "href", "Djibouti");
      attr(a142, "href", "Saint Martin");
      attr(a143, "href", "Mongolia");
      attr(a144, "href", "El Salvador");
      attr(a145, "href", "Equatorial Guinea");
      attr(a146, "href", "Cayman Islands");
      attr(a147, "href", "Haiti");
      attr(a148, "href", "Suriname");
      attr(a149, "href", "Niger");
      attr(a150, "href", "Dominica");
      attr(a151, "href", "Namibia");
      attr(a152, "href", "Seychelles");
      attr(a153, "href", "Curaçao");
      attr(a154, "href", "Gabon");
      attr(a155, "href", "Benin");
      attr(a156, "href", "Bermuda");
      attr(a157, "href", "Greenland");
      attr(a158, "href", "Guyana");
      attr(a159, "href", "Bahamas");
      attr(a160, "href", "Fiji");
      attr(a161, "href", "Mozambique");
      attr(a162, "href", "Syria");
      attr(a163, "href", "Cabo Verde");
      attr(a164, "href", "Congo");
      attr(a165, "href", "Eritrea");
      attr(a166, "href", "Guinea");
      attr(a167, "href", "Vatican City");
      attr(a168, "href", "Eswatini");
      attr(a169, "href", "Gambia");
      attr(a170, "href", "Sudan");
      attr(a171, "href", "Zimbabwe");
      attr(a172, "href", "Nepal");
      attr(a173, "href", "Angola");
      attr(a174, "href", "Antigua and Barbuda");
      attr(a175, "href", "CAR");
      attr(a176, "href", "Chad");
      attr(a177, "href", "Laos");
      attr(a178, "href", "Liberia");
      attr(a179, "href", "Myanmar");
      attr(a180, "href", "St. Barth");
      attr(a181, "href", "Saint Lucia");
      attr(a182, "href", "Sint Maarten");
      attr(a183, "href", "Bhutan");
      attr(a184, "href", "Guinea-Bissau");
      attr(a185, "href", "Mali");
      attr(a186, "href", "Mauritania");
      attr(a187, "href", "Nicaragua");
      attr(a188, "href", "Belize");
      attr(a189, "href", "Grenada");
      attr(a190, "href", "Libya");
      attr(a191, "href", "Montserrat");
      attr(a192, "href", "Papua New Guinea");
      attr(a193, "href", "St. Vincent Grenadines");
      attr(a194, "href", "Somalia");
      attr(a195, "href", "Timor-Leste");
      attr(a196, "href", "Turks and Caicos");
      set_style(div2, "visibility", "hidden");
    },
    m: function m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, div0, anchor);
      append(div0, h1);
      append(h1, t1);
      append(div0, t2);
      mount_component(covidbasicstats, div0, null);
      insert(target, t3, anchor);
      mount_component(covidchart, target, anchor);
      insert(target, t4, anchor);
      insert(target, div1, anchor);
      append(div1, h2);
      append(h2, t5);
      insert(target, t6, anchor);
      mount_component(filter, target, anchor);
      insert(target, t7, anchor);
      mount_component(table, target, anchor);
      insert(target, t8, anchor);
      insert(target, div2, anchor);
      append(div2, a0);
      append(a0, t9);
      append(div2, t10);
      append(div2, a1);
      append(a1, t11);
      append(div2, t12);
      append(div2, a2);
      append(a2, t13);
      append(div2, t14);
      append(div2, a3);
      append(a3, t15);
      append(div2, t16);
      append(div2, a4);
      append(a4, t17);
      append(div2, t18);
      append(div2, a5);
      append(a5, t19);
      append(div2, t20);
      append(div2, a6);
      append(a6, t21);
      append(div2, t22);
      append(div2, a7);
      append(a7, t23);
      append(div2, t24);
      append(div2, a8);
      append(a8, t25);
      append(div2, t26);
      append(div2, a9);
      append(a9, t27);
      append(div2, t28);
      append(div2, a10);
      append(a10, t29);
      append(div2, t30);
      append(div2, a11);
      append(a11, t31);
      append(div2, t32);
      append(div2, a12);
      append(a12, t33);
      append(div2, t34);
      append(div2, a13);
      append(a13, t35);
      append(div2, t36);
      append(div2, a14);
      append(a14, t37);
      append(div2, t38);
      append(div2, a15);
      append(a15, t39);
      append(div2, t40);
      append(div2, a16);
      append(a16, t41);
      append(div2, t42);
      append(div2, a17);
      append(a17, t43);
      append(div2, t44);
      append(div2, a18);
      append(a18, t45);
      append(div2, t46);
      append(div2, a19);
      append(a19, t47);
      append(div2, t48);
      append(div2, a20);
      append(a20, t49);
      append(div2, t50);
      append(div2, a21);
      append(a21, t51);
      append(div2, t52);
      append(div2, a22);
      append(a22, t53);
      append(div2, t54);
      append(div2, a23);
      append(a23, t55);
      append(div2, t56);
      append(div2, a24);
      append(a24, t57);
      append(div2, t58);
      append(div2, a25);
      append(a25, t59);
      append(div2, t60);
      append(div2, a26);
      append(a26, t61);
      append(div2, t62);
      append(div2, a27);
      append(a27, t63);
      append(div2, t64);
      append(div2, a28);
      append(a28, t65);
      append(div2, t66);
      append(div2, a29);
      append(a29, t67);
      append(div2, t68);
      append(div2, a30);
      append(a30, t69);
      append(div2, t70);
      append(div2, a31);
      append(a31, t71);
      append(div2, t72);
      append(div2, a32);
      append(a32, t73);
      append(div2, t74);
      append(div2, a33);
      append(a33, t75);
      append(div2, t76);
      append(div2, a34);
      append(a34, t77);
      append(div2, t78);
      append(div2, a35);
      append(a35, t79);
      append(div2, t80);
      append(div2, a36);
      append(a36, t81);
      append(div2, t82);
      append(div2, a37);
      append(a37, t83);
      append(div2, t84);
      append(div2, a38);
      append(a38, t85);
      append(div2, t86);
      append(div2, a39);
      append(a39, t87);
      append(div2, t88);
      append(div2, a40);
      append(a40, t89);
      append(div2, t90);
      append(div2, a41);
      append(a41, t91);
      append(div2, t92);
      append(div2, a42);
      append(a42, t93);
      append(div2, t94);
      append(div2, a43);
      append(a43, t95);
      append(div2, t96);
      append(div2, a44);
      append(a44, t97);
      append(div2, t98);
      append(div2, a45);
      append(a45, t99);
      append(div2, t100);
      append(div2, a46);
      append(a46, t101);
      append(div2, t102);
      append(div2, a47);
      append(a47, t103);
      append(div2, t104);
      append(div2, a48);
      append(a48, t105);
      append(div2, t106);
      append(div2, a49);
      append(a49, t107);
      append(div2, t108);
      append(div2, a50);
      append(a50, t109);
      append(div2, t110);
      append(div2, a51);
      append(a51, t111);
      append(div2, t112);
      append(div2, a52);
      append(a52, t113);
      append(div2, t114);
      append(div2, a53);
      append(a53, t115);
      append(div2, t116);
      append(div2, a54);
      append(a54, t117);
      append(div2, t118);
      append(div2, a55);
      append(a55, t119);
      append(div2, t120);
      append(div2, a56);
      append(a56, t121);
      append(div2, t122);
      append(div2, a57);
      append(a57, t123);
      append(div2, t124);
      append(div2, a58);
      append(a58, t125);
      append(div2, t126);
      append(div2, a59);
      append(a59, t127);
      append(div2, t128);
      append(div2, a60);
      append(a60, t129);
      append(div2, t130);
      append(div2, a61);
      append(a61, t131);
      append(div2, t132);
      append(div2, a62);
      append(a62, t133);
      append(div2, t134);
      append(div2, a63);
      append(a63, t135);
      append(div2, t136);
      append(div2, a64);
      append(a64, t137);
      append(div2, t138);
      append(div2, a65);
      append(a65, t139);
      append(div2, t140);
      append(div2, a66);
      append(a66, t141);
      append(div2, t142);
      append(div2, a67);
      append(a67, t143);
      append(div2, t144);
      append(div2, a68);
      append(a68, t145);
      append(div2, t146);
      append(div2, a69);
      append(a69, t147);
      append(div2, t148);
      append(div2, a70);
      append(a70, t149);
      append(div2, t150);
      append(div2, a71);
      append(a71, t151);
      append(div2, t152);
      append(div2, a72);
      append(a72, t153);
      append(div2, t154);
      append(div2, a73);
      append(a73, t155);
      append(div2, t156);
      append(div2, a74);
      append(a74, t157);
      append(div2, t158);
      append(div2, a75);
      append(a75, t159);
      append(div2, t160);
      append(div2, a76);
      append(a76, t161);
      append(div2, t162);
      append(div2, a77);
      append(a77, t163);
      append(div2, t164);
      append(div2, a78);
      append(a78, t165);
      append(div2, t166);
      append(div2, a79);
      append(a79, t167);
      append(div2, t168);
      append(div2, a80);
      append(a80, t169);
      append(div2, t170);
      append(div2, a81);
      append(a81, t171);
      append(div2, t172);
      append(div2, a82);
      append(a82, t173);
      append(div2, t174);
      append(div2, a83);
      append(a83, t175);
      append(div2, t176);
      append(div2, a84);
      append(a84, t177);
      append(div2, t178);
      append(div2, a85);
      append(a85, t179);
      append(div2, t180);
      append(div2, a86);
      append(a86, t181);
      append(div2, t182);
      append(div2, a87);
      append(a87, t183);
      append(div2, t184);
      append(div2, a88);
      append(a88, t185);
      append(div2, t186);
      append(div2, a89);
      append(a89, t187);
      append(div2, t188);
      append(div2, a90);
      append(a90, t189);
      append(div2, t190);
      append(div2, a91);
      append(a91, t191);
      append(div2, t192);
      append(div2, a92);
      append(a92, t193);
      append(div2, t194);
      append(div2, a93);
      append(a93, t195);
      append(div2, t196);
      append(div2, a94);
      append(a94, t197);
      append(div2, t198);
      append(div2, a95);
      append(a95, t199);
      append(div2, t200);
      append(div2, a96);
      append(a96, t201);
      append(div2, t202);
      append(div2, a97);
      append(a97, t203);
      append(div2, t204);
      append(div2, a98);
      append(a98, t205);
      append(div2, t206);
      append(div2, a99);
      append(a99, t207);
      append(div2, t208);
      append(div2, a100);
      append(a100, t209);
      append(div2, t210);
      append(div2, a101);
      append(a101, t211);
      append(div2, t212);
      append(div2, a102);
      append(a102, t213);
      append(div2, t214);
      append(div2, a103);
      append(a103, t215);
      append(div2, t216);
      append(div2, a104);
      append(a104, t217);
      append(div2, t218);
      append(div2, a105);
      append(a105, t219);
      append(div2, t220);
      append(div2, a106);
      append(a106, t221);
      append(div2, t222);
      append(div2, a107);
      append(a107, t223);
      append(div2, t224);
      append(div2, a108);
      append(a108, t225);
      append(div2, t226);
      append(div2, a109);
      append(a109, t227);
      append(div2, t228);
      append(div2, a110);
      append(a110, t229);
      append(div2, t230);
      append(div2, a111);
      append(a111, t231);
      append(div2, t232);
      append(div2, a112);
      append(a112, t233);
      append(div2, t234);
      append(div2, a113);
      append(a113, t235);
      append(div2, t236);
      append(div2, a114);
      append(a114, t237);
      append(div2, t238);
      append(div2, a115);
      append(a115, t239);
      append(div2, t240);
      append(div2, a116);
      append(a116, t241);
      append(div2, t242);
      append(div2, a117);
      append(a117, t243);
      append(div2, t244);
      append(div2, a118);
      append(a118, t245);
      append(div2, t246);
      append(div2, a119);
      append(a119, t247);
      append(div2, t248);
      append(div2, a120);
      append(a120, t249);
      append(div2, t250);
      append(div2, a121);
      append(a121, t251);
      append(div2, t252);
      append(div2, a122);
      append(a122, t253);
      append(div2, t254);
      append(div2, a123);
      append(a123, t255);
      append(div2, t256);
      append(div2, a124);
      append(a124, t257);
      append(div2, t258);
      append(div2, a125);
      append(a125, t259);
      append(div2, t260);
      append(div2, a126);
      append(a126, t261);
      append(div2, t262);
      append(div2, a127);
      append(a127, t263);
      append(div2, t264);
      append(div2, a128);
      append(a128, t265);
      append(div2, t266);
      append(div2, a129);
      append(a129, t267);
      append(div2, t268);
      append(div2, a130);
      append(a130, t269);
      append(div2, t270);
      append(div2, a131);
      append(a131, t271);
      append(div2, t272);
      append(div2, a132);
      append(a132, t273);
      append(div2, t274);
      append(div2, a133);
      append(a133, t275);
      append(div2, t276);
      append(div2, a134);
      append(a134, t277);
      append(div2, t278);
      append(div2, a135);
      append(a135, t279);
      append(div2, t280);
      append(div2, a136);
      append(a136, t281);
      append(div2, t282);
      append(div2, a137);
      append(a137, t283);
      append(div2, t284);
      append(div2, a138);
      append(a138, t285);
      append(div2, t286);
      append(div2, a139);
      append(a139, t287);
      append(div2, t288);
      append(div2, a140);
      append(a140, t289);
      append(div2, t290);
      append(div2, a141);
      append(a141, t291);
      append(div2, t292);
      append(div2, a142);
      append(a142, t293);
      append(div2, t294);
      append(div2, a143);
      append(a143, t295);
      append(div2, t296);
      append(div2, a144);
      append(a144, t297);
      append(div2, t298);
      append(div2, a145);
      append(a145, t299);
      append(div2, t300);
      append(div2, a146);
      append(a146, t301);
      append(div2, t302);
      append(div2, a147);
      append(a147, t303);
      append(div2, t304);
      append(div2, a148);
      append(a148, t305);
      append(div2, t306);
      append(div2, a149);
      append(a149, t307);
      append(div2, t308);
      append(div2, a150);
      append(a150, t309);
      append(div2, t310);
      append(div2, a151);
      append(a151, t311);
      append(div2, t312);
      append(div2, a152);
      append(a152, t313);
      append(div2, t314);
      append(div2, a153);
      append(a153, t315);
      append(div2, t316);
      append(div2, a154);
      append(a154, t317);
      append(div2, t318);
      append(div2, a155);
      append(a155, t319);
      append(div2, t320);
      append(div2, a156);
      append(a156, t321);
      append(div2, t322);
      append(div2, a157);
      append(a157, t323);
      append(div2, t324);
      append(div2, a158);
      append(a158, t325);
      append(div2, t326);
      append(div2, a159);
      append(a159, t327);
      append(div2, t328);
      append(div2, a160);
      append(a160, t329);
      append(div2, t330);
      append(div2, a161);
      append(a161, t331);
      append(div2, t332);
      append(div2, a162);
      append(a162, t333);
      append(div2, t334);
      append(div2, a163);
      append(a163, t335);
      append(div2, t336);
      append(div2, a164);
      append(a164, t337);
      append(div2, t338);
      append(div2, a165);
      append(a165, t339);
      append(div2, t340);
      append(div2, a166);
      append(a166, t341);
      append(div2, t342);
      append(div2, a167);
      append(a167, t343);
      append(div2, t344);
      append(div2, a168);
      append(a168, t345);
      append(div2, t346);
      append(div2, a169);
      append(a169, t347);
      append(div2, t348);
      append(div2, a170);
      append(a170, t349);
      append(div2, t350);
      append(div2, a171);
      append(a171, t351);
      append(div2, t352);
      append(div2, a172);
      append(a172, t353);
      append(div2, t354);
      append(div2, a173);
      append(a173, t355);
      append(div2, t356);
      append(div2, a174);
      append(a174, t357);
      append(div2, t358);
      append(div2, a175);
      append(a175, t359);
      append(div2, t360);
      append(div2, a176);
      append(a176, t361);
      append(div2, t362);
      append(div2, a177);
      append(a177, t363);
      append(div2, t364);
      append(div2, a178);
      append(a178, t365);
      append(div2, t366);
      append(div2, a179);
      append(a179, t367);
      append(div2, t368);
      append(div2, a180);
      append(a180, t369);
      append(div2, t370);
      append(div2, a181);
      append(a181, t371);
      append(div2, t372);
      append(div2, a182);
      append(a182, t373);
      append(div2, t374);
      append(div2, a183);
      append(a183, t375);
      append(div2, t376);
      append(div2, a184);
      append(a184, t377);
      append(div2, t378);
      append(div2, a185);
      append(a185, t379);
      append(div2, t380);
      append(div2, a186);
      append(a186, t381);
      append(div2, t382);
      append(div2, a187);
      append(a187, t383);
      append(div2, t384);
      append(div2, a188);
      append(a188, t385);
      append(div2, t386);
      append(div2, a189);
      append(a189, t387);
      append(div2, t388);
      append(div2, a190);
      append(a190, t389);
      append(div2, t390);
      append(div2, a191);
      append(a191, t391);
      append(div2, t392);
      append(div2, a192);
      append(a192, t393);
      append(div2, t394);
      append(div2, a193);
      append(a193, t395);
      append(div2, t396);
      append(div2, a194);
      append(a194, t397);
      append(div2, t398);
      append(div2, a195);
      append(a195, t399);
      append(div2, t400);
      append(div2, a196);
      append(a196, t401);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var covidbasicstats_changes = {};
      if (dirty &
      /*worldStats*/
      1) covidbasicstats_changes.deaths =
      /*worldStats*/
      ctx[0].deaths;
      if (dirty &
      /*worldStats*/
      1) covidbasicstats_changes.recovered =
      /*worldStats*/
      ctx[0].recovered;
      if (dirty &
      /*worldStats*/
      1) covidbasicstats_changes.cases =
      /*worldStats*/
      ctx[0].cases;
      covidbasicstats.$set(covidbasicstats_changes);
      var covidchart_changes = {};
      if (dirty &
      /*worldTimeline*/
      2) covidchart_changes.historicData =
      /*worldTimeline*/
      ctx[1];
      covidchart.$set(covidchart_changes);
      var filter_changes = {};

      if (!updating_sortBy && dirty &
      /*sortBy*/
      8) {
        updating_sortBy = true;
        filter_changes.sortBy =
        /*sortBy*/
        ctx[3];
        add_flush_callback(function () {
          return updating_sortBy = false;
        });
      }

      if (!updating_search && dirty &
      /*search*/
      16) {
        updating_search = true;
        filter_changes.search =
        /*search*/
        ctx[4];
        add_flush_callback(function () {
          return updating_search = false;
        });
      }

      filter.$set(filter_changes);
      var table_changes = {};
      if (dirty &
      /*sortBy*/
      8) table_changes.sortBy =
      /*sortBy*/
      ctx[3];
      if (dirty &
      /*showCountries*/
      4) table_changes.list =
      /*showCountries*/
      ctx[2];

      if (!updating_page && dirty &
      /*page*/
      32) {
        updating_page = true;
        table_changes.page =
        /*page*/
        ctx[5];
        add_flush_callback(function () {
          return updating_page = false;
        });
      }

      table.$set(table_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(covidbasicstats.$$.fragment, local);
      transition_in(covidchart.$$.fragment, local);
      transition_in(filter.$$.fragment, local);
      transition_in(table.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(covidbasicstats.$$.fragment, local);
      transition_out(covidchart.$$.fragment, local);
      transition_out(filter.$$.fragment, local);
      transition_out(table.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(t0);
      if (detaching) detach(div0);
      destroy_component(covidbasicstats);
      if (detaching) detach(t3);
      destroy_component(covidchart, detaching);
      if (detaching) detach(t4);
      if (detaching) detach(div1);
      if (detaching) detach(t6);
      destroy_component(filter, detaching);
      if (detaching) detach(t7);
      destroy_component(table, detaching);
      if (detaching) detach(t8);
      if (detaching) detach(div2);
    }
  };
}

function preload(_x) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(page) {
    var countries, worldStats, worldTimeline;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return getDataForCountries();

          case 3:
            countries = _context.sent;
            _context.next = 6;
            return getWorldStats();

          case 6:
            worldStats = _context.sent;
            _context.next = 9;
            return getWorldTimeline();

          case 9:
            worldTimeline = _context.sent;
            return _context.abrupt("return", {
              countries: countries,
              worldStats: worldStats,
              worldTimeline: worldTimeline
            });

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            this.error(500, "There was an error in calling the api, please try again in 5 minutes.");

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 13]]);
  }));
  return _preload.apply(this, arguments);
}

function changeLocation(_x2) {
  return _changeLocation.apply(this, arguments);
}

function _changeLocation() {
  _changeLocation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(event) {
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return goto(event.detail);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _changeLocation.apply(this, arguments);
}

function instance$1($$self, $$props, $$invalidate) {
  var fields = ["Cases", "Deaths", "Recovered", "Active", "Critical"];
  var selectFields = ["Cases", "Deaths", "Recovered", "Active", "Critical"];
  var _$$props$worldStats = $$props.worldStats,
      worldStats = _$$props$worldStats === void 0 ? {
    cases: 0,
    deaths: 0,
    recovered: 0
  } : _$$props$worldStats;
  var _$$props$countries = $$props.countries,
      countries = _$$props$countries === void 0 ? [] : _$$props$countries;
  var _$$props$worldTimelin = $$props.worldTimeline,
      worldTimeline = _$$props$worldTimelin === void 0 ? {} : _$$props$worldTimelin;
  var showCountries = [];
  var sortBy = "none";
  var search = "";
  var page = 0;

  function filter_sortBy_binding(value) {
    sortBy = value;
    $$invalidate(3, sortBy);
  }

  function filter_search_binding(value) {
    search = value;
    $$invalidate(4, search);
  }

  function table_page_binding(value) {
    page = value;
    $$invalidate(5, page), $$invalidate(4, search);
  }

  $$self.$set = function ($$props) {
    if ("worldStats" in $$props) $$invalidate(0, worldStats = $$props.worldStats);
    if ("countries" in $$props) $$invalidate(8, countries = $$props.countries);
    if ("worldTimeline" in $$props) $$invalidate(1, worldTimeline = $$props.worldTimeline);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*countries, search*/
    272) {
       $$invalidate(2, showCountries = filterByName(countries, search));
    }

    if ($$self.$$.dirty &
    /*search*/
    16) {
       if (search.length > 0) {
        $$invalidate(5, page = 0);
      }
    }
  };

  return [worldStats, worldTimeline, showCountries, sortBy, search, page, fields, selectFields, countries, filter_sortBy_binding, filter_search_binding, table_page_binding];
}

var Routes = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Routes, _SvelteComponent);

  var _super = _createSuper$1(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      worldStats: 0,
      countries: 8,
      worldTimeline: 1
    });
    return _this;
  }

  return Routes;
}(SvelteComponent);

export default Routes;
export { preload };
