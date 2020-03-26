import { d as _inherits, e as _classCallCheck, i as init, s as safe_not_equal, f as _assertThisInitialized, S as SvelteComponent, k as element, B as text, l as space, m as claim_element, n as children, C as claim_text, j as detach, o as claim_space, p as attr, h as insert, q as append, w as _slicedToArray, D as set_data, x as noop, z as _getPrototypeOf, A as _possibleConstructorReturn, a as _asyncToGenerator, b as _regeneratorRuntime, a1 as assign, G as create_component, H as claim_component, I as mount_component, L as transition_in, M as transition_out, N as destroy_component, g as empty, Z as query_selector_all, a2 as get_spread_update, a3 as get_spread_object, a4 as check_outros, E as binding_callbacks, F as bind, K as add_flush_callback, a5 as group_outros, a0 as goto } from './client.6812f81c.js';
import { c as getProvincesForCountry, d as getCountryTimeline, e as getDataForCountry, C as CovidChart, f as filterByName, F as Filter, T as Table } from './helpers.4d41e3f7.js';
import { _ } from './cache.c7679f46.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment(ctx) {
  var div12;
  var div3;
  var div0;
  var t0;
  var t1_value =
  /*cases*/
  ctx[0].toLocaleString() + "";
  var t1;
  var t2;
  var div1;
  var t3;
  var t4_value =
  /*todayCases*/
  ctx[1].toLocaleString() + "";
  var t4;
  var t5;
  var div2;
  var t6;
  var t7_value =
  /*casesPerOneMillion*/
  ctx[2].toLocaleString() + "";
  var t7;
  var t8;
  var div7;
  var div4;
  var t9;
  var t10_value =
  /*deaths*/
  ctx[6].toLocaleString() + "";
  var t10;
  var t11;
  var div5;
  var t12;
  var t13_value =
  /*todayDeaths*/
  ctx[8].toLocaleString() + "";
  var t13;
  var t14;
  var div6;
  var t15;
  var t16_value =
  /*deathsPerMillion*/
  ctx[3].toLocaleString() + "";
  var t16;
  var t17;
  var div11;
  var div8;
  var t18;
  var t19_value =
  /*active*/
  ctx[5].toLocaleString() + "";
  var t19;
  var t20;
  var div9;
  var t21;
  var t22_value =
  /*critical*/
  ctx[7].toLocaleString() + "";
  var t22;
  var t23;
  var div10;
  var t24;
  var t25_value =
  /*recovered*/
  ctx[4].toLocaleString() + "";
  var t25;
  return {
    c: function c() {
      div12 = element("div");
      div3 = element("div");
      div0 = element("div");
      t0 = text("Cases: ");
      t1 = text(t1_value);
      t2 = space();
      div1 = element("div");
      t3 = text("Cases Today: ");
      t4 = text(t4_value);
      t5 = space();
      div2 = element("div");
      t6 = text("Cases Per Million: ");
      t7 = text(t7_value);
      t8 = space();
      div7 = element("div");
      div4 = element("div");
      t9 = text("Deaths: ");
      t10 = text(t10_value);
      t11 = space();
      div5 = element("div");
      t12 = text("Deaths Today: ");
      t13 = text(t13_value);
      t14 = space();
      div6 = element("div");
      t15 = text("Deaths Per Million: ");
      t16 = text(t16_value);
      t17 = space();
      div11 = element("div");
      div8 = element("div");
      t18 = text("Active: ");
      t19 = text(t19_value);
      t20 = space();
      div9 = element("div");
      t21 = text("Critical: ");
      t22 = text(t22_value);
      t23 = space();
      div10 = element("div");
      t24 = text("Recovered: ");
      t25 = text(t25_value);
      this.h();
    },
    l: function l(nodes) {
      div12 = claim_element(nodes, "DIV", {
        class: true
      });
      var div12_nodes = children(div12);
      div3 = claim_element(div12_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "Cases: ");
      t1 = claim_text(div0_nodes, t1_value);
      div0_nodes.forEach(detach);
      t2 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t3 = claim_text(div1_nodes, "Cases Today: ");
      t4 = claim_text(div1_nodes, t4_value);
      div1_nodes.forEach(detach);
      t5 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      t6 = claim_text(div2_nodes, "Cases Per Million: ");
      t7 = claim_text(div2_nodes, t7_value);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      t8 = claim_space(div12_nodes);
      div7 = claim_element(div12_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      div4 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      t9 = claim_text(div4_nodes, "Deaths: ");
      t10 = claim_text(div4_nodes, t10_value);
      div4_nodes.forEach(detach);
      t11 = claim_space(div7_nodes);
      div5 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      t12 = claim_text(div5_nodes, "Deaths Today: ");
      t13 = claim_text(div5_nodes, t13_value);
      div5_nodes.forEach(detach);
      t14 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      t15 = claim_text(div6_nodes, "Deaths Per Million: ");
      t16 = claim_text(div6_nodes, t16_value);
      div6_nodes.forEach(detach);
      div7_nodes.forEach(detach);
      t17 = claim_space(div12_nodes);
      div11 = claim_element(div12_nodes, "DIV", {
        class: true
      });
      var div11_nodes = children(div11);
      div8 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      t18 = claim_text(div8_nodes, "Active: ");
      t19 = claim_text(div8_nodes, t19_value);
      div8_nodes.forEach(detach);
      t20 = claim_space(div11_nodes);
      div9 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div9_nodes = children(div9);
      t21 = claim_text(div9_nodes, "Critical: ");
      t22 = claim_text(div9_nodes, t22_value);
      div9_nodes.forEach(detach);
      t23 = claim_space(div11_nodes);
      div10 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div10_nodes = children(div10);
      t24 = claim_text(div10_nodes, "Recovered: ");
      t25 = claim_text(div10_nodes, t25_value);
      div10_nodes.forEach(detach);
      div11_nodes.forEach(detach);
      div12_nodes.forEach(detach);
      this.h();
    },
    h: function h() {
      attr(div0, "class", "column svelte-br4p2");
      attr(div1, "class", "column svelte-br4p2");
      attr(div2, "class", "column svelte-br4p2");
      attr(div3, "class", "ui stackable three column grid svelte-br4p2");
      attr(div4, "class", "column  svelte-br4p2");
      attr(div5, "class", "column  svelte-br4p2");
      attr(div6, "class", "column svelte-br4p2");
      attr(div7, "class", "ui stackable three column grid svelte-br4p2");
      attr(div8, "class", "column svelte-br4p2");
      attr(div9, "class", "column svelte-br4p2");
      attr(div10, "class", "column svelte-br4p2");
      attr(div11, "class", "ui stackable three column grid svelte-br4p2");
      attr(div12, "class", "ui container");
    },
    m: function m(target, anchor) {
      insert(target, div12, anchor);
      append(div12, div3);
      append(div3, div0);
      append(div0, t0);
      append(div0, t1);
      append(div3, t2);
      append(div3, div1);
      append(div1, t3);
      append(div1, t4);
      append(div3, t5);
      append(div3, div2);
      append(div2, t6);
      append(div2, t7);
      append(div12, t8);
      append(div12, div7);
      append(div7, div4);
      append(div4, t9);
      append(div4, t10);
      append(div7, t11);
      append(div7, div5);
      append(div5, t12);
      append(div5, t13);
      append(div7, t14);
      append(div7, div6);
      append(div6, t15);
      append(div6, t16);
      append(div12, t17);
      append(div12, div11);
      append(div11, div8);
      append(div8, t18);
      append(div8, t19);
      append(div11, t20);
      append(div11, div9);
      append(div9, t21);
      append(div9, t22);
      append(div11, t23);
      append(div11, div10);
      append(div10, t24);
      append(div10, t25);
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*cases*/
      1 && t1_value !== (t1_value =
      /*cases*/
      ctx[0].toLocaleString() + "")) set_data(t1, t1_value);
      if (dirty &
      /*todayCases*/
      2 && t4_value !== (t4_value =
      /*todayCases*/
      ctx[1].toLocaleString() + "")) set_data(t4, t4_value);
      if (dirty &
      /*casesPerOneMillion*/
      4 && t7_value !== (t7_value =
      /*casesPerOneMillion*/
      ctx[2].toLocaleString() + "")) set_data(t7, t7_value);
      if (dirty &
      /*deaths*/
      64 && t10_value !== (t10_value =
      /*deaths*/
      ctx[6].toLocaleString() + "")) set_data(t10, t10_value);
      if (dirty &
      /*todayDeaths*/
      256 && t13_value !== (t13_value =
      /*todayDeaths*/
      ctx[8].toLocaleString() + "")) set_data(t13, t13_value);
      if (dirty &
      /*deathsPerMillion*/
      8 && t16_value !== (t16_value =
      /*deathsPerMillion*/
      ctx[3].toLocaleString() + "")) set_data(t16, t16_value);
      if (dirty &
      /*active*/
      32 && t19_value !== (t19_value =
      /*active*/
      ctx[5].toLocaleString() + "")) set_data(t19, t19_value);
      if (dirty &
      /*critical*/
      128 && t22_value !== (t22_value =
      /*critical*/
      ctx[7].toLocaleString() + "")) set_data(t22, t22_value);
      if (dirty &
      /*recovered*/
      16 && t25_value !== (t25_value =
      /*recovered*/
      ctx[4].toLocaleString() + "")) set_data(t25, t25_value);
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(div12);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$cases = $$props.cases,
      cases = _$$props$cases === void 0 ? 0 : _$$props$cases;
  var _$$props$todayCases = $$props.todayCases,
      todayCases = _$$props$todayCases === void 0 ? 0 : _$$props$todayCases;
  var _$$props$casesPerOneM = $$props.casesPerOneMillion,
      casesPerOneMillion = _$$props$casesPerOneM === void 0 ? 0 : _$$props$casesPerOneM;
  var _$$props$deathsPerMil = $$props.deathsPerMillion,
      deathsPerMillion = _$$props$deathsPerMil === void 0 ? 0 : _$$props$deathsPerMil;
  var _$$props$recovered = $$props.recovered,
      recovered = _$$props$recovered === void 0 ? 0 : _$$props$recovered;
  var _$$props$active = $$props.active,
      active = _$$props$active === void 0 ? 0 : _$$props$active;
  var _$$props$deaths = $$props.deaths,
      deaths = _$$props$deaths === void 0 ? 0 : _$$props$deaths;
  var _$$props$critical = $$props.critical,
      critical = _$$props$critical === void 0 ? 0 : _$$props$critical;
  var _$$props$todayDeaths = $$props.todayDeaths,
      todayDeaths = _$$props$todayDeaths === void 0 ? 0 : _$$props$todayDeaths;

  $$self.$set = function ($$props) {
    if ("cases" in $$props) $$invalidate(0, cases = $$props.cases);
    if ("todayCases" in $$props) $$invalidate(1, todayCases = $$props.todayCases);
    if ("casesPerOneMillion" in $$props) $$invalidate(2, casesPerOneMillion = $$props.casesPerOneMillion);
    if ("deathsPerMillion" in $$props) $$invalidate(3, deathsPerMillion = $$props.deathsPerMillion);
    if ("recovered" in $$props) $$invalidate(4, recovered = $$props.recovered);
    if ("active" in $$props) $$invalidate(5, active = $$props.active);
    if ("deaths" in $$props) $$invalidate(6, deaths = $$props.deaths);
    if ("critical" in $$props) $$invalidate(7, critical = $$props.critical);
    if ("todayDeaths" in $$props) $$invalidate(8, todayDeaths = $$props.todayDeaths);
  };

  return [cases, todayCases, casesPerOneMillion, deathsPerMillion, recovered, active, deaths, critical, todayDeaths];
}

var CovidInfo = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(CovidInfo, _SvelteComponent);

  var _super = _createSuper(CovidInfo);

  function CovidInfo(options) {
    var _this;

    _classCallCheck(this, CovidInfo);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      cases: 0,
      todayCases: 1,
      casesPerOneMillion: 2,
      deathsPerMillion: 3,
      recovered: 4,
      active: 5,
      deaths: 6,
      critical: 7,
      todayDeaths: 8
    });
    return _this;
  }

  return CovidInfo;
}(SvelteComponent);

function _createSuper$1(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$1()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function create_if_block(ctx) {
  var div;
  var h1;
  var t0;
  var t1;
  var updating_sortBy;
  var updating_search;
  var t2;
  var updating_page;
  var current;

  function filter_sortBy_binding(value) {
    /*filter_sortBy_binding*/
    ctx[14].call(null, value);
  }

  function filter_search_binding(value) {
    /*filter_search_binding*/
    ctx[15].call(null, value);
  }

  var filter_props = {
    geoRegionName: "Province / State",
    selectFields:
    /*fields*/
    ctx[8]
  };

  if (
  /*sortBy*/
  ctx[4] !== void 0) {
    filter_props.sortBy =
    /*sortBy*/
    ctx[4];
  }

  if (
  /*search*/
  ctx[5] !== void 0) {
    filter_props.search =
    /*search*/
    ctx[5];
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
    ctx[16].call(null, value);
  }

  var table_props = {
    geoRegionName: "Province / State",
    fields:
    /*fields*/
    ctx[8],
    sortBy:
    /*sortBy*/
    ctx[4],
    canNav: false,
    list:
    /*showProvinces*/
    ctx[3]
  };

  if (
  /*page*/
  ctx[6] !== void 0) {
    table_props.page =
    /*page*/
    ctx[6];
  }

  var table = new Table({
    props: table_props
  });
  binding_callbacks.push(function () {
    return bind(table, "page", table_page_binding);
  });
  table.$on("location",
  /*changeLocation*/
  ctx[9]);
  return {
    c: function c() {
      div = element("div");
      h1 = element("h1");
      t0 = text("Search By Province / State");
      t1 = space();
      create_component(filter.$$.fragment);
      t2 = space();
      create_component(table.$$.fragment);
      this.h();
    },
    l: function l(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Search By Province / State");
      h1_nodes.forEach(detach);
      div_nodes.forEach(detach);
      t1 = claim_space(nodes);
      claim_component(filter.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(table.$$.fragment, nodes);
      this.h();
    },
    h: function h() {
      attr(h1, "class", "svelte-15uwyg3");
      attr(div, "class", "ui container");
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
      append(div, h1);
      append(h1, t0);
      insert(target, t1, anchor);
      mount_component(filter, target, anchor);
      insert(target, t2, anchor);
      mount_component(table, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var filter_changes = {};

      if (!updating_sortBy && dirty &
      /*sortBy*/
      16) {
        updating_sortBy = true;
        filter_changes.sortBy =
        /*sortBy*/
        ctx[4];
        add_flush_callback(function () {
          return updating_sortBy = false;
        });
      }

      if (!updating_search && dirty &
      /*search*/
      32) {
        updating_search = true;
        filter_changes.search =
        /*search*/
        ctx[5];
        add_flush_callback(function () {
          return updating_search = false;
        });
      }

      filter.$set(filter_changes);
      var table_changes = {};
      if (dirty &
      /*sortBy*/
      16) table_changes.sortBy =
      /*sortBy*/
      ctx[4];
      if (dirty &
      /*showProvinces*/
      8) table_changes.list =
      /*showProvinces*/
      ctx[3];

      if (!updating_page && dirty &
      /*page*/
      64) {
        updating_page = true;
        table_changes.page =
        /*page*/
        ctx[6];
        add_flush_callback(function () {
          return updating_page = false;
        });
      }

      table.$set(table_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(filter.$$.fragment, local);
      transition_in(table.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(filter.$$.fragment, local);
      transition_out(table.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(div);
      if (detaching) detach(t1);
      destroy_component(filter, detaching);
      if (detaching) detach(t2);
      destroy_component(table, detaching);
    }
  };
}

function create_fragment$1(ctx) {
  var title_value;
  var t0;
  var div3;
  var div2;
  var a;
  var t1;
  var t2;
  var div0;
  var t3;
  var t4;
  var div1;
  var t5_value = _.startCase(
  /*showCountry*/
  ctx[7]) + "";
  var t5;
  var t6;
  var div4;
  var h1;
  var t7;
  var t8_value = _.startCase(
  /*showCountry*/
  ctx[7]) + "";
  var t8;
  var t9;
  var t10;
  var t11;
  var if_block_anchor;
  var current;
  document.title = title_value = "Covid 19 Tracker For " + _.startCase(
  /*showCountry*/
  ctx[7]);
  var covidinfo_spread_levels = [
  /*countryInfo*/
  ctx[1]];
  var covidinfo_props = {};

  for (var i = 0; i < covidinfo_spread_levels.length; i += 1) {
    covidinfo_props = assign(covidinfo_props, covidinfo_spread_levels[i]);
  }

  var covidinfo = new CovidInfo({
    props: covidinfo_props
  });
  var covidchart = new CovidChart({
    props: {
      title: "Covid-19 State For " + _.startCase(
      /*showCountry*/
      ctx[7]),
      historicData:
      /*historicCountryData*/
      ctx[0].timeline
    }
  });
  var if_block =
  /*provinces*/
  ctx[2].length > 0 && create_if_block(ctx);
  return {
    c: function c() {
      t0 = space();
      div3 = element("div");
      div2 = element("div");
      a = element("a");
      t1 = text("Home");
      t2 = space();
      div0 = element("div");
      t3 = text("/");
      t4 = space();
      div1 = element("div");
      t5 = text(t5_value);
      t6 = space();
      div4 = element("div");
      h1 = element("h1");
      t7 = text("Country ");
      t8 = text(t8_value);
      t9 = space();
      create_component(covidinfo.$$.fragment);
      t10 = space();
      create_component(covidchart.$$.fragment);
      t11 = space();
      if (if_block) if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l: function l(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-14u9moo\"]", document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      a = claim_element(div2_nodes, "A", {
        href: true,
        class: true
      });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "Home");
      a_nodes.forEach(detach);
      t2 = claim_space(div2_nodes);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      t3 = claim_text(div0_nodes, "/");
      div0_nodes.forEach(detach);
      t4 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t5 = claim_text(div1_nodes, t5_value);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      t6 = claim_space(nodes);
      div4 = claim_element(nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      h1 = claim_element(div4_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t7 = claim_text(h1_nodes, "Country ");
      t8 = claim_text(h1_nodes, t8_value);
      h1_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      t9 = claim_space(nodes);
      claim_component(covidinfo.$$.fragment, nodes);
      t10 = claim_space(nodes);
      claim_component(covidchart.$$.fragment, nodes);
      t11 = claim_space(nodes);
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h: function h() {
      attr(a, "href", "/covid-19-sapper-demo");
      attr(a, "class", "section");
      attr(div0, "class", "divider");
      attr(div1, "class", "active section");
      attr(div2, "class", "ui breadcrumb");
      attr(div3, "class", "ui container");
      attr(h1, "class", "svelte-15uwyg3");
      attr(div4, "class", "ui container");
    },
    m: function m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, div3, anchor);
      append(div3, div2);
      append(div2, a);
      append(a, t1);
      append(div2, t2);
      append(div2, div0);
      append(div0, t3);
      append(div2, t4);
      append(div2, div1);
      append(div1, t5);
      insert(target, t6, anchor);
      insert(target, div4, anchor);
      append(div4, h1);
      append(h1, t7);
      append(h1, t8);
      insert(target, t9, anchor);
      mount_component(covidinfo, target, anchor);
      insert(target, t10, anchor);
      mount_component(covidchart, target, anchor);
      insert(target, t11, anchor);
      if (if_block) if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if ((!current || dirty &
      /*_, showCountry*/
      128) && title_value !== (title_value = "Covid 19 Tracker For " + _.startCase(
      /*showCountry*/
      ctx[7]))) {
        document.title = title_value;
      }

      if ((!current || dirty &
      /*showCountry*/
      128) && t5_value !== (t5_value = _.startCase(
      /*showCountry*/
      ctx[7]) + "")) set_data(t5, t5_value);
      if ((!current || dirty &
      /*showCountry*/
      128) && t8_value !== (t8_value = _.startCase(
      /*showCountry*/
      ctx[7]) + "")) set_data(t8, t8_value);
      var covidinfo_changes = dirty &
      /*countryInfo*/
      2 ? get_spread_update(covidinfo_spread_levels, [get_spread_object(
      /*countryInfo*/
      ctx[1])]) : {};
      covidinfo.$set(covidinfo_changes);
      var covidchart_changes = {};
      if (dirty &
      /*showCountry*/
      128) covidchart_changes.title = "Covid-19 State For " + _.startCase(
      /*showCountry*/
      ctx[7]);
      if (dirty &
      /*historicCountryData*/
      1) covidchart_changes.historicData =
      /*historicCountryData*/
      ctx[0].timeline;
      covidchart.$set(covidchart_changes);

      if (
      /*provinces*/
      ctx[2].length > 0) {
        if (if_block) {
          if_block.p(ctx, dirty);
          transition_in(if_block, 1);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(covidinfo.$$.fragment, local);
      transition_in(covidchart.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o: function o(local) {
      transition_out(covidinfo.$$.fragment, local);
      transition_out(covidchart.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(t0);
      if (detaching) detach(div3);
      if (detaching) detach(t6);
      if (detaching) detach(div4);
      if (detaching) detach(t9);
      destroy_component(covidinfo, detaching);
      if (detaching) detach(t10);
      destroy_component(covidchart, detaching);
      if (detaching) detach(t11);
      if (if_block) if_block.d(detaching);
      if (detaching) detach(if_block_anchor);
    }
  };
}

function preload(_x) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(page) {
    var country, countryInfo, historicCountryData, provinces;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            country = page.params["country"];
            _context2.next = 4;
            return getDataForCountry(country);

          case 4:
            countryInfo = _context2.sent;
            _context2.next = 7;
            return getCountryTimeline(country);

          case 7:
            historicCountryData = _context2.sent;
            _context2.next = 10;
            return getProvincesForCountry(historicCountryData.country);

          case 10:
            provinces = _context2.sent;
            return _context2.abrupt("return", {
              countryInfo: countryInfo,
              historicCountryData: historicCountryData,
              provinces: provinces,
              country: country
            });

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            this.error(500, "There was an error in calling the api, please try again in 5 minutes.");

          case 17:
            return _context2.abrupt("return", {
              country: page.params["country"]
            });

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 14]]);
  }));
  return _preload.apply(this, arguments);
}

function instance$1($$self, $$props, $$invalidate) {
  var country = $$props.country;
  var _$$props$historicCoun = $$props.historicCountryData,
      historicCountryData = _$$props$historicCoun === void 0 ? {} : _$$props$historicCoun;
  var _$$props$countryInfo = $$props.countryInfo,
      countryInfo = _$$props$countryInfo === void 0 ? {} : _$$props$countryInfo;
  var _$$props$provinces = $$props.provinces,
      provinces = _$$props$provinces === void 0 ? [] : _$$props$provinces;
  var pieChart;
  var lineChart;
  var showProvinces = [];
  var sortBy = "none";
  var search = "";
  var page = 0;
  var unsubscribe;
  var fields = ["Cases", "Deaths", "Recovered"];

  function changeLocation(_x2) {
    return _changeLocation.apply(this, arguments);
  }

  function _changeLocation() {
    _changeLocation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(event) {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return goto(country + "/" + event.detail);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _changeLocation.apply(this, arguments);
  }

  function filter_sortBy_binding(value) {
    sortBy = value;
    $$invalidate(4, sortBy);
  }

  function filter_search_binding(value) {
    search = value;
    $$invalidate(5, search);
  }

  function table_page_binding(value) {
    page = value;
    $$invalidate(6, page), $$invalidate(5, search);
  }

  $$self.$set = function ($$props) {
    if ("country" in $$props) $$invalidate(10, country = $$props.country);
    if ("historicCountryData" in $$props) $$invalidate(0, historicCountryData = $$props.historicCountryData);
    if ("countryInfo" in $$props) $$invalidate(1, countryInfo = $$props.countryInfo);
    if ("provinces" in $$props) $$invalidate(2, provinces = $$props.provinces);
  };

  var showCountry;

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*country*/
    1024) {
       $$invalidate(7, showCountry = country.toLowerCase().includes("korea") ? "South Korea" : country);
    }

    if ($$self.$$.dirty &
    /*provinces, search*/
    36) {
       $$invalidate(3, showProvinces = filterByName(provinces, search));
    }

    if ($$self.$$.dirty &
    /*search*/
    32) {
       if (search.length > 0) {
        $$invalidate(6, page = 0);
      }
    }
  };

  return [historicCountryData, countryInfo, provinces, showProvinces, sortBy, search, page, showCountry, fields, changeLocation, country, pieChart, lineChart, unsubscribe, filter_sortBy_binding, filter_search_binding, table_page_binding];
}

var U5Bcountryu5D = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(U5Bcountryu5D, _SvelteComponent);

  var _super = _createSuper$1(U5Bcountryu5D);

  function U5Bcountryu5D(options) {
    var _this;

    _classCallCheck(this, U5Bcountryu5D);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      country: 10,
      historicCountryData: 0,
      countryInfo: 1,
      provinces: 2
    });
    return _this;
  }

  return U5Bcountryu5D;
}(SvelteComponent);

export default U5Bcountryu5D;
export { preload };
