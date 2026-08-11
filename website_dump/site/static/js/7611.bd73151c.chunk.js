"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [7611],
  {
    44497: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return Kn;
        },
      });
      var o,
        i,
        r = t(56824),
        a = t(30225),
        l = t(94404),
        s = t(14482),
        u = t(5189),
        c = t(76431),
        d = t(30588),
        p = t(32763),
        h = t(48229),
        f = t(76948),
        x = t(22247),
        v = t(31105),
        m = t(13795),
        g = t(94762),
        b = t(31228),
        j = (function (n) {
          (0, s.default)(t, n);
          var e = (0, u.default)(t);
          function t() {
            return ((0, a.default)(this, t), e.apply(this, arguments));
          }
          return (
            (0, l.default)(t, [
              {
                key: "componentDidUpdate",
                value: function () {
                  this.animation();
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this.animation();
                },
              },
              {
                key: "animation",
                value: function () {
                  var n = this.props,
                    e = n.reverse,
                    t = n.id,
                    o = n.mobile;
                  if (document.querySelector("#motion-".concat(t, " path"))) {
                    var i = g.default.path("#motion-".concat(t, " path"));
                    (0, g.default)({
                      targets: "#motion-".concat(t, " > div"),
                      translateX: i("x"),
                      translateY: i("y"),
                      rotate: i("angle"),
                      easing: "linear",
                      duration: 2e3,
                      loop: !0,
                      direction: (e && o) || (!e && !o) ? "reverse" : "normal",
                    });
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var n,
                    e,
                    t,
                    o = this.props,
                    i = o.id,
                    r = o.mobile;
                  return (
                    r
                      ? ((n = { height: "100", width: "120" }),
                        (e = "M 10 90 H 108 V 0"),
                        (t = "#FFF"))
                      : ((n = { height: "86", width: "255" }),
                        (e = "M0,75 l180,0 M185,70 l60,-65 V 0 H250"),
                        (t = "#007BC1")),
                    (0, b.jsxs)(D, {
                      id: "motion-".concat(i),
                      mobile: r,
                      children: [
                        (0, b.jsx)(
                          "svg",
                          (0, v.default)(
                            (0, v.default)(
                              {
                                xmlns: "http://www.w3.org/2000/svg",
                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                              },
                              n,
                            ),
                            {},
                            {
                              children: (0, b.jsx)("path", {
                                strokeDasharray: "5, 10",
                                strokeLinecap: "round",
                                d: e,
                                fill: "none",
                                stroke: t,
                                strokeWidth: "3",
                                id: "".concat(i, "-wire"),
                              }),
                            },
                          ),
                        ),
                        (0, b.jsx)(E, { mobile: r }),
                      ],
                    })
                  );
                },
              },
            ]),
            t
          );
        })(c.Component);
      j.defaultProps = {
        id: "GridFlow",
        duration: m.s1,
        reverse: !1,
        mobile: !1,
      };
      var w,
        C,
        P,
        S,
        D = d.ZP.div(
          o ||
            (o = (0, r.default)([
              "\n  position: absolute;\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (n) {
            return !n.mobile && "\n    right: 55px;\n    top: 90px;\n  ";
          },
          function (n) {
            return n.mobile && "\n    right: 48px;\n    top: 80px;\n  ";
          },
        ),
        E = d.ZP.div(
          i ||
            (i = (0, r.default)([
              "\n  box-shadow: 0px 0px 3px 2px rgba(51, 51, 51, 0.5);\n  border-radius: 50%;\n  position: absolute;\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (n) {
            return (
              !n.mobile &&
              "\n    background: #007BC1;\n    border: 3px solid #FFF;\n    top: -7px;\n    left: -7px;\n    width: 14px;\n    height: 14px;\n    box-shadow: 0px 0px 15px 1px rgba(0, 123, 193, 0.4);\n  "
            );
          },
          function (n) {
            return (
              n.mobile &&
              "\n    background: #FFF;\n    width: 12px;\n    height: 12px;\n    top: -6px;\n    left: -6px;\n  "
            );
          },
        );
      function O(n) {
        var e = n.id,
          t = n.color;
        return (0, b.jsxs)("svg", {
          width: "42",
          height: "56",
          viewBox: "0 0 42 56",
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          children: [
            (0, b.jsxs)("defs", {
              children: [
                (0, b.jsx)("path", {
                  d: "M66.2807498,34.3065491 C66.3770204,33.6166097 65.5924149,33.3125551 65.328473,33.2122732 L53.4655271,28.6851478 C52.8646381,28.4565051 51.9797507,27.8171078 51.5754141,27.3173028 L51.0683889,26.6931484 C50.7041651,26.2462923 50.213185,26 49.6869057,26 C49.1349542,26 48.6158952,26.2791848 48.2604962,26.7621423 L47.9909384,27.1287729 C47.6154831,27.6398094 46.769104,28.2872292 46.1770397,28.5150697 L33.9619038,33.2090642 C33.7003687,33.3109506 32.91817,33.6158075 33.0120338,34.3033401 C33.0112316,34.3233965 33,34.3402438 33,34.3611025 L33,38.9275384 C33,39.3134231 33.3120772,39.624698 33.6979619,39.624698 C34.0838466,39.624698 34.3951216,39.3126208 34.3951216,38.9275384 L34.3951216,35.0582621 L45.2135314,35.0582621 L38.4649616,73.1814236 C38.3975722,73.5608902 38.6510848,73.9227073 39.0313537,73.9884922 C39.4084136,74.0582884 39.7710329,73.8031713 39.8384223,73.4245069 L41.4453392,64.3493974 L57.9212518,64.3493974 L59.7383596,73.4397497 C59.805749,73.7702788 60.0961654,73.9997238 60.4218809,73.9997238 C60.4676095,73.9997238 60.513338,73.9957125 60.5590665,73.9852832 C60.9369287,73.9098712 61.1824187,73.5432406 61.107809,73.1661807 L53.4952106,35.0582621 L64.8960575,35.0582621 L64.8960575,38.9275384 C64.8960575,39.3134231 65.208937,39.624698 65.5932172,39.624698 C65.9799041,39.624698 66.2919814,39.3126208 66.2919814,38.9275384 L66.2919814,34.3611025 C66.2927836,34.3410461 66.2823543,34.325001 66.2807498,34.3065491 Z M44.570925,46.6989833 L47.9708821,46.6989833 L43.6130325,52.1029736 L44.570925,46.6989833 Z M43.9122736,53.9561828 L49.4406134,47.0985064 L55.2016071,53.9561828 L43.9122736,53.9561828 Z M53.6644864,55.3505021 L49.4847374,57.7965779 L45.1228765,55.3505021 L53.6644864,55.3505021 Z M42.9688216,55.7420026 L48.0896158,58.6124713 L41.8119698,62.2851951 L42.9688216,55.7420026 Z M43.4349318,62.9526713 L49.499178,59.4034948 L55.8273661,62.9526713 L43.4349318,62.9526713 Z M57.5137063,62.2996357 L50.8942996,58.5876014 L56.1578952,55.5077441 L57.5137063,62.2996357 Z M55.4815941,52.1214254 L50.9255875,46.6997856 L54.3977475,46.6997856 L55.4815941,52.1214254 Z M54.119365,45.3038618 L44.8172173,45.3038618 L46.5372522,35.5869482 L52.17871,35.5869482 L54.119365,45.3038618 Z M36.6687125,33.6639428 L46.6768446,29.8163274 C47.5135967,29.4954254 48.5854095,28.676323 49.1157001,27.9542934 L49.3844555,27.5884651 C49.5649629,27.3413705 49.7952101,27.3405682 49.9861468,27.5740245 L50.493172,28.1973767 C51.0531461,28.8865138 52.1418062,29.673526 52.9689312,29.9888123 L62.6008057,33.6639428 L36.6687125,33.6639428 Z",
                  id: "path-".concat(e),
                }),
                (0, b.jsxs)("filter", {
                  x: "-18%",
                  y: "-12.5%",
                  width: "136%",
                  height: "125%",
                  filterUnits: "objectBoundingBox",
                  id: "filter-".concat(e),
                  children: [
                    (0, b.jsx)("feOffset", {
                      in: "SourceAlpha",
                      result: "shadowOffsetOuter1",
                    }),
                    (0, b.jsx)("feGaussianBlur", {
                      stdDeviation: "2",
                      in: "shadowOffsetOuter1",
                      result: "shadowBlurOuter1",
                    }),
                    (0, b.jsx)("feComposite", {
                      in: "shadowBlurOuter1",
                      in2: "SourceAlpha",
                      operator: "out",
                      result: "shadowBlurOuter1",
                    }),
                    (0, b.jsx)("feColorMatrix", {
                      values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0",
                      in: "shadowBlurOuter1",
                    }),
                  ],
                }),
              ],
            }),
            (0, b.jsx)("g", {
              id: "energy_flow",
              fill: "none",
              fillRule: "evenodd",
              transform: "translate(-262 -286)",
              children: (0, b.jsx)("g", {
                id: "screen-2",
                fillRule: "nonzero",
                children: (0, b.jsx)("g", {
                  id: "flow-diagram",
                  transform: "translate(15 239)",
                  children: (0, b.jsx)("g", {
                    id: "power-grid",
                    transform: "translate(218 25)",
                    children: (0, b.jsxs)("g", {
                      id: "ic-grid",
                      children: [
                        (0, b.jsx)("use", {
                          fill: "#000",
                          filter: "url(#filter-".concat(e, ")"),
                          xlinkHref: "#path-".concat(e),
                        }),
                        (0, b.jsx)("use", {
                          fillOpacity: "0.8",
                          fill: t,
                          fillRule: "evenodd",
                          xlinkHref: "#path-".concat(e),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }
      O.defaultProps = { id: "grid-icon", color: "#FFF" };
      var L,
        _,
        k = (function (n) {
          (0, s.default)(t, n);
          var e = (0, u.default)(t);
          function t() {
            return ((0, a.default)(this, t), e.apply(this, arguments));
          }
          return (
            (0, l.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.status,
                    t = n.value,
                    o = n.mobile,
                    i = !e || "NONE" === e,
                    r = "DISCONNECTED" === e,
                    a = "CONSUMER" === e;
                  return (0, b.jsxs)(T, {
                    mobile: o,
                    children: [
                      (0, b.jsx)(x.aF, {
                        align: "right",
                        disconnected: r,
                        white: !o,
                        children: (0, b.jsx)(N, {
                          className: "seventh-step",
                          children: (0, b.jsx)(O, {
                            color: o ? "#FFF" : "rgba(0,123,193,0.5)",
                          }),
                        }),
                      }),
                      !r &&
                        !i &&
                        (0, b.jsxs)(Z, {
                          children: [
                            (0, b.jsx)(j, { reverse: a, mobile: o }),
                            (0, b.jsx)(y, {
                              mobile: o,
                              children: (0, b.jsx)(x.BP, {
                                direction: a ? "up" : "down",
                                value: t,
                              }),
                            }),
                          ],
                        }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(c.Component),
        T = d.ZP.div(
          w ||
            (w = (0, r.default)(["\n  height: 100px;\n\n  ", "\n\n  ", "\n"])),
          function (n) {
            return n.mobile && "\n    position: relative;\n  ";
          },
          function (n) {
            return (
              !n.mobile &&
              "\n    position: absolute;\n    top: 0;\n    right: 0;\n  "
            );
          },
        ),
        Z = d.ZP.div(C || (C = (0, r.default)(["\n  position: relative;\n"]))),
        N = d.ZP.div(
          P ||
            (P = (0, r.default)([
              "\n  margin: 10px 20px;\n  position: absolute;\n\n  svg {\n    position: relative;\n    top: 0;\n    left: 0;\n  }\n",
            ])),
        ),
        y = d.ZP.div(
          S ||
            (S = (0, r.default)([
              "\n  position: absolute;\n  width: 100px;\n\n  > div {\n    float: right;\n  }\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (n) {
            return n.mobile && "\n    right: 70px;\n    top: 115px;\n  ";
          },
          function (n) {
            return (
              !n.mobile &&
              "\n    right: 10px;\n    top: 130px;\n\n    label{\n      color: #727E84;\n      text-shadow: none;\n    }\n  "
            );
          },
        ),
        A = (function (n) {
          (0, s.default)(t, n);
          var e = (0, u.default)(t);
          function t() {
            return ((0, a.default)(this, t), e.apply(this, arguments));
          }
          return (
            (0, l.default)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  if (document.querySelector("#motion-ac path")) {
                    var n = g.default.path("#motion-ac path");
                    (0, g.default)({
                      targets: "#motion-ac > div",
                      translateX: n("x"),
                      translateY: n("y"),
                      rotate: n("angle"),
                      easing: "linear",
                      duration: 2e3,
                      loop: !0,
                      direction: "normal",
                    });
                  }
                  if (document.querySelector("#motion-dc path")) {
                    var e = g.default.path("#motion-dc path");
                    (0, g.default)({
                      targets: "#motion-dc > div",
                      translateX: e("x"),
                      translateY: e("y"),
                      rotate: e("angle"),
                      easing: "linear",
                      duration: 2e3,
                      loop: !0,
                      direction: "normal",
                    });
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.mobile,
                    t = n.acPanelOn,
                    o = n.dcPanelOn,
                    i = n.bothPanelsOn;
                  return (0, b.jsxs)("div", {
                    children: [
                      (t || i) &&
                        (0, b.jsxs)(
                          G,
                          {
                            id: "motion-ac",
                            mobile: e,
                            children: [
                              (0, b.jsx)(
                                "svg",
                                (0, v.default)(
                                  (0, v.default)(
                                    {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      xmlnsXlink:
                                        "http://www.w3.org/1999/xlink",
                                    },
                                    { height: "300", width: "300" },
                                  ),
                                  {},
                                  {
                                    children: (0, b.jsx)("path", {
                                      strokeDasharray: "5, 10",
                                      strokeLinecap: "round",
                                      d: "M 168 130 V 170 H 123 V 254",
                                      fill: "none",
                                      stroke: "#fff",
                                      strokeWidth: "3",
                                      id: "ac-wire",
                                    }),
                                  },
                                ),
                              ),
                              (0, b.jsx)(z, { circleItem: "ac", mobile: e }),
                            ],
                          },
                          "ac",
                        ),
                      (o || i) &&
                        (0, b.jsxs)(
                          G,
                          {
                            id: "motion-dc",
                            mobile: e,
                            children: [
                              (0, b.jsx)(
                                "svg",
                                (0, v.default)(
                                  (0, v.default)(
                                    {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      xmlnsXlink:
                                        "http://www.w3.org/1999/xlink",
                                    },
                                    { height: "300", width: "300" },
                                  ),
                                  {},
                                  {
                                    children: (0, b.jsx)("path", {
                                      strokeDasharray: "5, 10",
                                      strokeLinecap: "round",
                                      d: "M 78 130 V 170 H 123 V 254",
                                      fill: "none",
                                      stroke: "#fff",
                                      strokeWidth: "3",
                                      id: "dc-wire",
                                    }),
                                  },
                                ),
                              ),
                              (0, b.jsx)(z, { circleItem: "dc", mobile: e }),
                            ],
                          },
                          "dc",
                        ),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(c.Component);
      A.defaultProps = {
        id: "MultipleEnergyFlow",
        duration: m.s1,
        begin: 0,
        reverse: !1,
        mobile: !1,
      };
      var R,
        M,
        F,
        I,
        H,
        V,
        B,
        Y,
        U,
        G = d.ZP.div(
          L ||
            (L = (0, r.default)([
              "\n  position: absolute;\n  z-index: 1000;\n\n  ",
              " ",
              ";\n",
            ])),
          function (n) {
            return (
              !n.mobile &&
              "\n    left: 0px;\n    top: 0px;\n    padding: 20px 20px 0;\n\n  "
            );
          },
          function (n) {
            return n.mobile && "\n    left: 51px;\n    top: 80px;\n  ";
          },
        ),
        z = d.ZP.div(
          _ ||
            (_ = (0, r.default)([
              "\n  box-shadow: 0px 0px 3px 2px rgba(51, 51, 51, 0.5);\n  border-radius: 50%;\n  position: absolute;\n\n  ",
              ";\n\n  ",
              ";\n",
            ])),
          function (n) {
            return n.mobile
              ? "\n    background: #FFF;\n    width: 12px;\n    height: 12px;\n    top: 0;\n  "
              : "\n    background: #007BC1;\n    border: 3px solid #FFF;\n    top: 13px;\n    width: 14px;\n    height: 14px;\n    box-shadow: 0px 0px 15px 1px rgba(0, 123, 193, 0.4);\n  ";
          },
          function (n) {
            n.circleItem;
            return "\n    left:  13px;\n  ";
          },
        ),
        X = (function (n) {
          (0, s.default)(t, n);
          var e = (0, u.default)(t);
          function t() {
            return ((0, a.default)(this, t), e.apply(this, arguments));
          }
          return (
            (0, l.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.onClose,
                    t = n.multipleSolarPanels,
                    o = n.mobile,
                    i = t && "NONE" !== t.dcPvRole && "NONE" !== t.acPvRole,
                    r = t && "NONE" === t.dcPvRole && "NONE" !== t.acPvRole,
                    a = t && "NONE" !== t.dcPvRole && "NONE" === t.acPvRole;
                  return (0, b.jsxs)(W, {
                    children: [
                      (0, b.jsxs)(x.jz, {
                        children: [
                          (0, b.jsx)(q, {}),
                          (0, b.jsx)($, {}),
                          i &&
                            (0, b.jsxs)(J, {
                              children: [
                                (0, b.jsx)(A, {
                                  acPanelOn: r,
                                  dcPanelOn: a,
                                  bothPanelsOn: i,
                                }),
                                (0, b.jsx)(K, {
                                  imageIndex: 1,
                                  children: (0, b.jsx)(x.BP, {
                                    direction: "up",
                                    value: t.acPvValue,
                                  }),
                                }),
                                (0, b.jsx)(K, {
                                  children: (0, b.jsx)(x.BP, {
                                    direction: "up",
                                    value: t.dcPvValue,
                                  }),
                                }),
                              ],
                            }),
                          r &&
                            (0, b.jsxs)(J, {
                              children: [
                                (0, b.jsx)(A, {
                                  acPanelOn: r,
                                  dcPanelOn: a,
                                  bothPanelsOn: i,
                                }),
                                (0, b.jsx)(K, {
                                  imageIndex: 1,
                                  children: (0, b.jsx)(x.BP, {
                                    direction: "up",
                                    value: t.acPvValue,
                                  }),
                                }),
                              ],
                            }),
                          a &&
                            (0, b.jsxs)(J, {
                              children: [
                                (0, b.jsx)(A, {
                                  acPanelOn: r,
                                  dcPanelOn: a,
                                  bothPanelsOn: i,
                                }),
                                (0, b.jsx)(K, {
                                  children: (0, b.jsx)(x.BP, {
                                    direction: "up",
                                    value: t.dcPvValue,
                                  }),
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, b.jsx)(x.sK, {
                        onClose: e,
                        mobile: o,
                        closeButton: !0,
                        children: (0, b.jsx)(h.Z, { children: "close" }),
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(c.Component),
        W = d.ZP.div(R || (R = (0, r.default)([""]))),
        $ = (0, d.ZP)(function (n) {
          return (0, b.jsx)(x.fr, (0, v.default)({}, n));
        })(
          M ||
            (M = (0, r.default)([
              "\n  position: absolute !important;\n  top: 35%;\n  left: 25%;\n",
            ])),
        ),
        q = (0, d.ZP)(function (n) {
          return (0, b.jsx)(x.De, (0, v.default)({}, n));
        })(
          F ||
            (F = (0, r.default)([
              "\n  position: absolute !important;\n  top: 35%;\n  left: 58%;\n",
            ])),
        ),
        J = d.ZP.div(
          I || (I = (0, r.default)(["\n  // position: relative;\n"])),
        ),
        K = d.ZP.div(
          H ||
            (H = (0, r.default)([
              "\n  position: absolute;\n  width: 80px;\n  z-index: 1000;\n\n  ",
              ";\n",
            ])),
          function (n) {
            return n.imageIndex
              ? "\n    left: 70%;\n    top: 55%;\n  "
              : "\n    left: 5%;\n    top: 55%;\n  ";
          },
        ),
        Q = (function (n) {
          (0, s.default)(t, n);
          var e = (0, u.default)(t);
          function t() {
            return ((0, a.default)(this, t), e.apply(this, arguments));
          }
          return (
            (0, l.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.open,
                    t = n.onClose,
                    o = n.multipleSolarPanels,
                    i = n.mobile;
                  return (0, b.jsx)(en, {
                    children:
                      e &&
                      (0, b.jsx)(tn, {
                        open: e,
                        type: "medium",
                        onClose: t,
                        children: (0, b.jsx)("div", {
                          children: (0, b.jsx)(X, {
                            mobile: i,
                            multipleSolarPanels: o,
                            onClose: t,
                          }),
                        }),
                      }),
                  });
                },
              },
            ]),
            t
          );
        })(c.Component),
        nn = Q,
        en = d.ZP.div(V || (V = (0, r.default)([""]))),
        tn = (0, d.ZP)(x.u_)(
          B ||
            (B = (0, r.default)([
              '\n  > div[role="document"] {\n    background: transparent;\n  }\n',
            ])),
        ),
        on = (function (n) {
          (0, s.default)(t, n);
          var e = (0, u.default)(t);
          function t() {
            return ((0, a.default)(this, t), e.apply(this, arguments));
          }
          return (
            (0, l.default)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var n = this.props,
                    e = n.reverse,
                    t = n.id;
                  if (document.querySelector("#motion-".concat(t, " path"))) {
                    var o = g.default.path("#motion-".concat(t, " path"));
                    (0, g.default)({
                      targets: "#motion-".concat(t, " > div"),
                      translateX: o("x"),
                      translateY: o("y"),
                      rotate: o("angle"),
                      easing: "linear",
                      duration: 2e3,
                      loop: !0,
                      direction: e ? "reverse" : "normal",
                    });
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var n,
                    e,
                    t = this.props,
                    o = t.id,
                    i = t.mobile,
                    r = t.multipvdetails;
                  return (
                    i && !r
                      ? ((n = { height: "100", width: "120" }),
                        (e = "M 10 10 V 90 H 120"))
                      : i && r
                        ? ((n = { height: "100", width: "120" }),
                          (e = "M0 10 H 0 V 85 H 80"))
                        : i || r
                          ? ((n = { height: "250", width: "400" }),
                            (e = "M 150 150 H 400"))
                          : ((n = { height: "110", width: "250" }),
                            (e = "M 10 0 l 75 75 H 240")),
                    (0, b.jsxs)(pn, {
                      id: "motion-".concat(o),
                      mobile: i,
                      multipvdetails: r,
                      children: [
                        (0, b.jsx)(
                          "svg",
                          (0, v.default)(
                            (0, v.default)(
                              {
                                xmlns: "http://www.w3.org/2000/svg",
                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                              },
                              n,
                            ),
                            {},
                            {
                              children: (0, b.jsx)("path", {
                                strokeDasharray: "5, 10",
                                strokeLinecap: "round",
                                d: e,
                                fill: "none",
                                stroke: "#fff",
                                strokeWidth: "3",
                                id: "".concat(o, "-wire"),
                              }),
                            },
                          ),
                        ),
                        !r && (0, b.jsx)(hn, { mobile: i }),
                      ],
                    })
                  );
                },
              },
            ]),
            t
          );
        })(c.Component);
      on.defaultProps = {
        id: "EnergySolarFlow",
        duration: m.s1,
        begin: 0,
        reverse: !1,
        mobile: !1,
      };
      var rn,
        an,
        ln,
        sn,
        un,
        cn,
        dn,
        pn = d.ZP.div(
          Y || (Y = (0, r.default)(["\n  position: absolute;\n\n  ", ";\n"])),
          function (n) {
            var e = n.mobile,
              t = n.multipvdetails;
            return !e && t
              ? "\n    left: 20px;\n    top: -150px;\n  "
              : e || t
                ? "\n    left: 51px;\n    top: 80px;\n  "
                : "\n    left: 50px;\n    top: 90px;\n  ";
          },
        ),
        hn = d.ZP.div(
          U ||
            (U = (0, r.default)([
              "\n  box-shadow: 0px 0px 3px 2px rgba(51, 51, 51, 0.5);\n  border-radius: 50%;\n  position: absolute;\n\n  ",
              ";\n",
            ])),
          function (n) {
            n.mobile;
            return "\n    background: #FFF;\n    width: 12px;\n    height: 12px;\n    top: -6px;\n    left: -6px;\n  ";
          },
        ),
        fn = (function (n) {
          (0, s.default)(t, n);
          var e = (0, u.default)(t);
          function t() {
            return ((0, a.default)(this, t), e.apply(this, arguments));
          }
          return (
            (0, l.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.mobile,
                    t = n.onClick,
                    o = n.onClose,
                    i = n.multipvdetails,
                    r = n.multipleSolarPanels,
                    a =
                      r &&
                      (0 === r.numberPV ||
                        "NONE" === r.onePvRole ||
                        ("NONE" === r.acPvRole && "NONE" === r.dcPvRole)),
                    l = r && 0 === r.numberPV,
                    s =
                      r &&
                      ("CONSUMER" === r.acPvRole || "CONSUMER" === r.dcPvRole);
                  return (0, b.jsxs)("div", {
                    children: [
                      i &&
                        (0, b.jsxs)(xn, {
                          mobile: e,
                          multipvdetails: i,
                          children: [
                            e
                              ? (0, b.jsx)(nn, {
                                  multipleSolarPanels: r,
                                  open: i,
                                  onClose: o,
                                  mobile: e,
                                })
                              : (0, b.jsx)(X, {
                                  multipleSolarPanels: r,
                                  onClose: o,
                                  mobile: e,
                                }),
                            !l &&
                              !a &&
                              !e &&
                              (0, b.jsxs)(gn, {
                                children: [
                                  (0, b.jsx)(on, {
                                    multipvdetails: i,
                                    reverse: s,
                                    mobile: e,
                                  }),
                                  (0, b.jsx)(bn, {
                                    mobile: e,
                                    multipvdetails: i,
                                    children: (0, b.jsx)(x.BP, {
                                      direction: "up",
                                      value: r.pvValueSum,
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      r &&
                        !i &&
                        (0, b.jsxs)("div", {
                          children: [
                            r.numberPV > 1 &&
                              (0, b.jsxs)(xn, {
                                mobile: e,
                                multipvdetails: i,
                                onClick: t,
                                children: [
                                  (0, b.jsxs)("div", {
                                    children: [
                                      (0, b.jsx)(x.aF, {
                                        className: "fourth-step",
                                        disconnected: l,
                                        clickable: !0,
                                        children: (0, b.jsx)(vn, {}),
                                      }),
                                      (0, b.jsx)(x.sK, {
                                        mobile: e,
                                        children: r.numberPV,
                                      }),
                                    ],
                                  }),
                                  !l &&
                                    !a &&
                                    (0, b.jsxs)(gn, {
                                      children: [
                                        (0, b.jsx)(on, {
                                          multipvdetails: i,
                                          reverse: s,
                                          mobile: e,
                                        }),
                                        (0, b.jsx)(bn, {
                                          mobile: e,
                                          children: (0, b.jsx)(x.BP, {
                                            direction: "up",
                                            value: r.pvValueSum,
                                          }),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            r &&
                              1 === r.numberPV &&
                              (0, b.jsxs)(xn, {
                                mobile: e,
                                children: [
                                  (0, b.jsxs)(x.aF, {
                                    disconnected: l,
                                    children: [
                                      "ac" === r.onePvType &&
                                        (0, b.jsx)(mn, {}),
                                      "dc" === r.onePvType &&
                                        (0, b.jsx)(vn, {}),
                                    ],
                                  }),
                                  !l &&
                                    !a &&
                                    (0, b.jsxs)(gn, {
                                      children: [
                                        (0, b.jsx)(on, {
                                          multipvdetails: i,
                                          reverse: s,
                                          mobile: e,
                                        }),
                                        (0, b.jsx)(bn, {
                                          mobile: e,
                                          children: (0, b.jsx)(x.BP, {
                                            direction: "up",
                                            value: r.pvValueSum,
                                          }),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            (!r || !r.numberPV) &&
                              (0, b.jsx)(xn, {
                                mobile: e,
                                children: (0, b.jsx)(x.aF, {
                                  disconnected: l,
                                  children: (0, b.jsx)(vn, {}),
                                }),
                              }),
                          ],
                        }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(c.Component),
        xn = d.ZP.div(
          rn || (rn = (0, r.default)(["\n  ", ";\n\n  ", ";\n"])),
          function (n) {
            var e = n.mobile,
              t = n.multipvdetails;
            return e && !t
              ? "\n    height: 100px;\n    position: relative;\n\n  "
              : e && t
                ? "\n    height: 300px;\n    position: absolute;\n    top: -20%;\n    left: -12%;\n  "
                : e || t
                  ? "\n  height: 300px;\n    position: absolute;\n    top: -34%;\n    left: -12%;\n  "
                  : "\n  height: 100px;\n    position: absolute;\n    top: 0;\n    left: 0;\n  ";
          },
          function (n) {
            return !!n.onClick && "\n  cursor: pointer;\n  ";
          },
        ),
        vn = (0, d.ZP)(function (n) {
          return (0, b.jsx)(x.fr, (0, v.default)({}, n));
        })(
          an ||
            (an = (0, r.default)([
              "\n  position: absolute !important;\n  top: 38px !important;\n  left: 32px !important;\n",
            ])),
        ),
        mn = (0, d.ZP)(function (n) {
          return (0, b.jsx)(x.De, (0, v.default)({}, n));
        })(
          ln ||
            (ln = (0, r.default)([
              "\n  position: absolute !important;\n  top: 38px !important;\n  left: 32px !important;\n",
            ])),
        ),
        gn = d.ZP.div(
          sn || (sn = (0, r.default)(["\n  position: relative;\n"])),
        ),
        bn = d.ZP.div(
          un ||
            (un = (0, r.default)([
              "\n  position: absolute;\n  width: 80px;\n\n  ",
              ";\n",
            ])),
          function (n) {
            var e = n.mobile,
              t = n.multipvdetails;
            return e
              ? "\n    left: 75px;\n    top: 115px;\n  "
              : e || t
                ? "\n    left: 250px;\n    top: 15px;\n  "
                : "\n    left: 0;\n    top: 130px;\n  ";
          },
        );
      function jn(n) {
        var e = n.id,
          t = n.color;
        return (0, b.jsxs)("svg", {
          width: "56",
          height: "56",
          viewBox: "0 0 56 56",
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          children: [
            (0, b.jsxs)("defs", {
              children: [
                (0, b.jsx)("path", {
                  d: "M71.75,50.75 C71.543,50.75 71.2985,50.723 71.1635,50.58725 L50.537,29.96075 C50.39075,29.8145 50.19875,29.741 50.00675,29.741 C49.81475,29.741 49.62275,29.8145 49.4765,29.96075 L28.84325,50.59475 C28.7075,50.7305 28.457,50.75 28.25,50.75 C27.83525,50.75 27.5,50.41475 27.5,50 C27.5,49.793 27.512,49.5335 27.64775,49.39775 L49.27625,27.8075 C49.27625,27.8075 49.556,27.5 50.00675,27.5 C50.45675,27.5 50.74325,27.7985 50.74325,27.7985 L72.34775,49.40225 C72.48275,49.538 72.5,49.793 72.5,50 C72.5,50.414 72.16475,50.75 71.75,50.75 Z M68,71 C68,71.828 67.328,72.5 66.5,72.5 L54.5,72.5 L54.5,61.25 C54.5,60.83525 54.16475,60.5 53.75,60.5 L46.25,60.5 C45.83525,60.5 45.5,60.83525 45.5,61.25 L45.5,72.5 L33.5,72.5 C32.672,72.5 32,71.828 32,71 L32,49.55825 L50.00675,31.55225 L68,49.5455 L68,71 Z M47,72.5 L53,72.5 L53,62 L47,62 L47,72.5 Z M36.5,30.5 L39.5,30.5 L39.5,35.45075 L36.5,38.44475 L36.5,30.5 Z M73.40825,48.34175 L51.8285,26.76125 C51.8285,26.76125 51.1265,26 50.00675,26 C48.887,26 48.22475,26.74325 48.22475,26.74325 L41,33.953 L41,29.75 C41,29.33525 40.66475,29 40.25,29 L35.75,29 C35.33525,29 35,29.33525 35,29.75 L35,39.94175 L26.58725,48.33725 C26.18,48.7445 26,49.379 26,50 C26,51.242 27.00725,52.25 28.25,52.25 C28.871,52.25 29.4965,52.06175 29.90375,51.6545 L30.5,51.05825 L30.5,71 C30.5,72.65825 31.84175,74 33.5,74 L66.5,74 C68.15825,74 69.5,72.65825 69.5,71 L69.5,51.0455 L70.103,51.64775 C70.51025,52.05425 71.129,52.25 71.75,52.25 C72.99275,52.25 74,51.24275 74,50 C74,49.37825 73.8155,48.749 73.40825,48.34175 Z M38,56 L42.5,56 L42.5,51.5 L38,51.5 L38,56 Z M43.25,50 L37.25,50 C36.83525,50 36.5,50.33525 36.5,50.75 L36.5,56.75 C36.5,57.16475 36.83525,57.5 37.25,57.5 L43.25,57.5 C43.66475,57.5 44,57.16475 44,56.75 L44,50.75 C44,50.33525 43.66475,50 43.25,50 Z M57.5,56 L62,56 L62,51.5 L57.5,51.5 L57.5,56 Z M56.75,57.5 L62.75,57.5 C63.16475,57.5 63.5,57.16475 63.5,56.75 L63.5,50.75 C63.5,50.33525 63.16475,50 62.75,50 L56.75,50 C56.33525,50 56,50.33525 56,50.75 L56,56.75 C56,57.16475 56.33525,57.5 56.75,57.5 Z",
                  id: "path-".concat(e),
                }),
                (0, b.jsxs)("filter", {
                  x: "-12.5%",
                  y: "-12.5%",
                  width: "125%",
                  height: "125%",
                  filterUnits: "objectBoundingBox",
                  id: "filter-".concat(e),
                  children: [
                    (0, b.jsx)("feOffset", {
                      in: "SourceAlpha",
                      result: "shadowOffsetOuter1",
                    }),
                    (0, b.jsx)("feGaussianBlur", {
                      stdDeviation: "2",
                      in: "shadowOffsetOuter1",
                      result: "shadowBlurOuter1",
                    }),
                    (0, b.jsx)("feComposite", {
                      in: "shadowBlurOuter1",
                      in2: "SourceAlpha",
                      operator: "out",
                      result: "shadowBlurOuter1",
                    }),
                    (0, b.jsx)("feColorMatrix", {
                      values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0",
                      in: "shadowBlurOuter1",
                    }),
                  ],
                }),
              ],
            }),
            (0, b.jsx)("g", {
              id: "energy_flow",
              fill: "none",
              fillRule: "evenodd",
              transform: "translate(-160 -687)",
              children: (0, b.jsx)("g", {
                id: "screen-2",
                children: (0, b.jsx)("g", {
                  id: "flow-diagram",
                  transform: "translate(15 239)",
                  children: (0, b.jsx)("g", {
                    id: "house",
                    transform: "translate(123 426)",
                    children: (0, b.jsxs)("g", {
                      id: "ic-house",
                      children: [
                        (0, b.jsx)("use", {
                          fill: "#000",
                          filter: "url(#filter-".concat(e),
                          xlinkHref: "#path-".concat(e),
                        }),
                        (0, b.jsx)("use", {
                          fillOpacity: "0.8",
                          fill: t,
                          xlinkHref: "#path-".concat(e),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }
      jn.defaultProps = { id: "non-critical-icon", color: "#FFF" };
      var wn = (function (n) {
        (0, s.default)(t, n);
        var e = (0, u.default)(t);
        function t() {
          return ((0, a.default)(this, t), e.apply(this, arguments));
        }
        return (
          (0, l.default)(t, [
            {
              key: "componentDidMount",
              value: function () {
                var n = this.props,
                  e = n.reverse,
                  t = n.id;
                if (document.querySelector("#motion-".concat(t, " path"))) {
                  var o = g.default.path("#motion-".concat(t, " path"));
                  (0, g.default)({
                    targets: "#motion-".concat(t, " > div"),
                    translateX: o("x"),
                    translateY: o("y"),
                    rotate: o("angle"),
                    easing: "linear",
                    duration: 2e3,
                    loop: !0,
                    direction: e ? "reverse" : "normal",
                  });
                }
              },
            },
            {
              key: "render",
              value: function () {
                var n,
                  e,
                  t,
                  o = this.props,
                  i = o.id,
                  r = o.mobile;
                return (
                  r
                    ? ((n = { height: "160", width: "100" }),
                      (e = "M10 30 V 150 H 60"),
                      (t = "#FFF"))
                    : ((n = { height: "86", width: "255" }),
                      (e = "M 0 15 H 180 l 60 60"),
                      (t = "#007BC1")),
                  (0, b.jsxs)(Ln, {
                    id: "motion-".concat(i),
                    mobile: r,
                    children: [
                      (0, b.jsx)(
                        "svg",
                        (0, v.default)(
                          (0, v.default)(
                            {
                              xmlns: "http://www.w3.org/2000/svg",
                              xmlnsXlink: "http://www.w3.org/1999/xlink",
                            },
                            n,
                          ),
                          {},
                          {
                            children: (0, b.jsx)("path", {
                              strokeDasharray: "5, 10",
                              strokeLinecap: "round",
                              d: e,
                              fill: "none",
                              stroke: t,
                              strokeWidth: "3",
                              id: "".concat(i, "-wire"),
                            }),
                          },
                        ),
                      ),
                      (0, b.jsx)(_n, { mobile: r }),
                    ],
                  })
                );
              },
            },
          ]),
          t
        );
      })(c.Component);
      wn.defaultProps = {
        id: "NonCriticalFlow",
        duration: m.s1 + 0.5,
        begin: 0,
        reverse: !1,
        mobile: !1,
      };
      var Cn,
        Pn,
        Sn,
        Dn,
        En,
        On,
        Ln = d.ZP.div(
          cn ||
            (cn = (0, r.default)([
              "\n  position: absolute;\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (n) {
            return !n.mobile && "\n    right: 50px;\n    top: -45px;\n  ";
          },
          function (n) {
            return n.mobile && "\n    left: 5px;\n    top: -89px;\n  ";
          },
        ),
        _n = d.ZP.div(
          dn ||
            (dn = (0, r.default)([
              "\n  box-shadow: 0px 0px 3px 2px rgba(51, 51, 51, 0.5);\n  border-radius: 50%;\n  position: absolute;\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (n) {
            return (
              !n.mobile &&
              "\n    background: #007BC1;\n    border: 3px solid #FFF;\n    top: -7px;\n    left: -7px;\n    width: 14px;\n    height: 14px;\n    box-shadow: 0px 0px 15px 1px rgba(0, 123, 193, 0.4);\n  "
            );
          },
          function (n) {
            return (
              n.mobile &&
              "\n    background: #FFF;\n    width: 12px;\n    height: 12px;\n    top: -6px;\n    left: -6px;\n  "
            );
          },
        ),
        kn = (function (n) {
          (0, s.default)(t, n);
          var e = (0, u.default)(t);
          function t() {
            return ((0, a.default)(this, t), e.apply(this, arguments));
          }
          return (
            (0, l.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.status,
                    t = n.value,
                    o = n.mobile,
                    i = !e || "NONE" === e,
                    r = "DISCONNECTED" === e,
                    a = "PRODUCER" === e;
                  return (0, b.jsxs)(Tn, {
                    mobile: o,
                    children: [
                      (0, b.jsx)(x.aF, {
                        disconnected: r,
                        align: "right",
                        white: !o,
                        children: (0, b.jsx)(Nn, {
                          className: "sixth-step",
                          children: (0, b.jsx)(jn, {
                            color: o ? "#FFF" : "rgba(0,123,193,0.5)",
                          }),
                        }),
                      }),
                      !r &&
                        !i &&
                        (0, b.jsxs)(Zn, {
                          children: [
                            (0, b.jsx)(wn, { reverse: a, mobile: o }),
                            (0, b.jsx)(yn, {
                              mobile: o,
                              children: (0, b.jsx)(x.BP, {
                                direction: "down",
                                value: t,
                              }),
                            }),
                          ],
                        }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(c.Component),
        Tn = d.ZP.div(
          Cn ||
            (Cn = (0, r.default)(["\n  height: 100px;\n\n  ", "\n\n  ", "\n"])),
          function (n) {
            return (
              n.mobile &&
              "\n    position: relative;\n    display: inline-block;\n    width: 100%;\n  "
            );
          },
          function (n) {
            return (
              !n.mobile &&
              "\n    position: absolute;\n    bottom: 0;\n    right: 0;\n  "
            );
          },
        ),
        Zn = d.ZP.div(
          Pn || (Pn = (0, r.default)(["\n  position: relative;\n"])),
        ),
        Nn = d.ZP.div(
          Sn ||
            (Sn = (0, r.default)([
              "\n  margin: 10px 12px;\n  position: absolute;\n\n  svg {\n    position: relative;\n    top: 0;\n    left: 0;\n  }\n",
            ])),
        ),
        yn = d.ZP.div(
          Dn ||
            (Dn = (0, r.default)([
              "\n  position: absolute;\n  width: 100px;\n\n  > div {\n    float: right;\n  }\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (n) {
            return n.mobile && "\n    left: 0;\n    top: -20px;\n  ";
          },
          function (n) {
            return (
              !n.mobile &&
              "\n    right: 10px;\n    top: -35px;\n\n    label{\n      color: #727E84;\n      text-shadow: none;\n    }\n  "
            );
          },
        ),
        An = (function (n) {
          (0, s.default)(t, n);
          var e = (0, u.default)(t);
          function t() {
            return ((0, a.default)(this, t), e.apply(this, arguments));
          }
          return (
            (0, l.default)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var n = this.props,
                    e = n.reverse,
                    t = n.id,
                    o = n.mobile;
                  if (document.querySelector("#motion-".concat(t, " path"))) {
                    var i = g.default.path("#motion-".concat(t, " path"));
                    (0, g.default)({
                      targets: "#motion-".concat(t, " > div"),
                      translateX: i("x"),
                      translateY: i("y"),
                      rotate: i("angle"),
                      easing: "linear",
                      duration: 2e3,
                      loop: !0,
                      direction: (e && o) || (!e && !o) ? "reverse" : "normal",
                    });
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var n,
                    e,
                    t = this.props,
                    o = t.id,
                    i = t.mobile;
                  return (
                    i
                      ? ((n = { height: "160", width: "100" }),
                        (e = "M90 30 V 150 H 25"))
                      : ((n = { height: "86", width: "255" }),
                        (e = "M30 70 l 60 -60 H 240")),
                    (0, b.jsxs)(Yn, {
                      id: "motion-".concat(o),
                      mobile: i,
                      children: [
                        (0, b.jsx)(
                          "svg",
                          (0, v.default)(
                            (0, v.default)(
                              {
                                xmlns: "http://www.w3.org/2000/svg",
                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                              },
                              n,
                            ),
                            {},
                            {
                              children: (0, b.jsx)("path", {
                                strokeDasharray: "5, 10",
                                strokeLinecap: "round",
                                d: e,
                                fill: "none",
                                stroke: "#fff",
                                strokeWidth: "3",
                                id: "".concat(o, "-wire"),
                              }),
                            },
                          ),
                        ),
                        (0, b.jsx)(Un, { mobile: i }),
                      ],
                    })
                  );
                },
              },
            ]),
            t
          );
        })(c.Component);
      An.defaultProps = {
        id: "CriticalFlow",
        duration: m.s1 + 0.5,
        begin: 0,
        reverse: !1,
        mobile: !1,
      };
      var Rn,
        Mn,
        Fn,
        In,
        Hn,
        Vn,
        Bn,
        Yn = d.ZP.div(
          En ||
            (En = (0, r.default)([
              "\n  position: absolute;\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (n) {
            return !n.mobile && "\n    left: 45px;\n    top: -45px;\n  ";
          },
          function (n) {
            return n.mobile && "\n    right: 0;\n    top: -90px;\n  ";
          },
        ),
        Un = d.ZP.div(
          On ||
            (On = (0, r.default)([
              "\n  box-shadow: 0px 0px 3px 2px rgba(51, 51, 51, 0.5);\n  border-radius: 50%;\n  position: absolute;\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (n) {
            return (
              !n.mobile &&
              "\n    background: #007BC1;\n    border: 3px solid #FFF;\n    top: -7px;\n    left: -7px;\n    width: 14px;\n    height: 14px;\n    box-shadow: 0px 0px 15px 1px rgba(0, 123, 193, 0.4);\n  "
            );
          },
          function (n) {
            return (
              n.mobile &&
              "\n    background: #FFF;\n    width: 12px;\n    height: 12px;\n    top: -6px;\n    left: -6px;\n  "
            );
          },
        ),
        Gn = (function (n) {
          (0, s.default)(t, n);
          var e = (0, u.default)(t);
          function t() {
            return ((0, a.default)(this, t), e.apply(this, arguments));
          }
          return (
            (0, l.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.status,
                    t = n.value,
                    o = n.mobile,
                    i = !e || "NONE" === e,
                    r = "DISCONNECTED" === e,
                    a = "PRODUCER" === e;
                  return (0, b.jsxs)(zn, {
                    mobile: o,
                    children: [
                      (0, b.jsx)(Wn, {
                        disconnected: r,
                        children: (0, b.jsx)($n, { className: "fifth-step" }),
                      }),
                      !r &&
                        !i &&
                        (0, b.jsxs)(Xn, {
                          children: [
                            (0, b.jsx)(An, { reverse: a, mobile: o }),
                            (0, b.jsx)(qn, {
                              mobile: o,
                              children: (0, b.jsx)(x.BP, {
                                direction: "down",
                                value: t,
                              }),
                            }),
                          ],
                        }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(c.Component),
        zn = d.ZP.div(
          Rn ||
            (Rn = (0, r.default)(["\n  height: 100px;\n\n  ", "\n\n  ", "\n"])),
          function (n) {
            return (
              n.mobile &&
              "\n    position: relative;\n\n    // > div > div{\n    //   margin: 15px 0;\n    // }\n  "
            );
          },
          function (n) {
            return (
              !n.mobile &&
              "\n    position: absolute;\n    bottom: 0;\n    left: 0;\n  "
            );
          },
        ),
        Xn = d.ZP.div(
          Mn || (Mn = (0, r.default)(["\n  position: relative;\n"])),
        ),
        Wn = (0, d.ZP)(x.aF)(
          Fn ||
            (Fn = (0, r.default)([
              "\n  > div {\n    position: relative;\n  }\n",
            ])),
        ),
        $n = (0, d.ZP)(function (n) {
          return (0, b.jsx)(x.$b, (0, v.default)({}, n));
        })(
          In ||
            (In = (0, r.default)([
              "\n  position: absolute !important;\n  top: 15px !important;\n  left: 25px !important;\n\n  ",
              "\n",
            ])),
          function (n) {
            return !n.mobile && "\n    padding-top: 0px;\n  ";
          },
        ),
        qn = d.ZP.div(
          Hn ||
            (Hn = (0, r.default)([
              "\n  position: absolute;\n  width: 80px;\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (n) {
            return n.mobile && "\n    right: 20px;\n    top: -20px;\n  ";
          },
          function (n) {
            return !n.mobile && "\n    left: 0;\n    top: -35px;\n  ";
          },
        ),
        Jn = ["UPDATE_WILL_START", "UPDATE_INITIATED"],
        Kn = (function (n) {
          (0, s.default)(t, n);
          var e = (0, u.default)(t);
          function t() {
            return ((0, a.default)(this, t), e.apply(this, arguments));
          }
          return (
            (0, l.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.deviceStatus,
                    t = n.isMobile,
                    o = n.operationModeClick,
                    i = n.solarpanelClick,
                    r = n.solarpanelClose,
                    a = n.batteryClick,
                    l = n.multipleSolarPanels,
                    s = n.translations,
                    u = n.currentDevice,
                    c = n.powerBatteryOn,
                    d = n.multipvdetails,
                    v = n.loading,
                    m = e.energyFlow || {},
                    g = m.stateOfCharge,
                    j = m.batteryStatus,
                    w = m.dcPvRole,
                    C = m.dcPvValue,
                    P = m.gridRole,
                    S = m.gridValue,
                    D = m.criticalLoadRole,
                    E = m.criticalLoadValue,
                    O = m.nonCriticalLoadRole,
                    L = m.nonCriticalLoadValue,
                    _ = m.batteryBackupLevel,
                    T = (e && e.currentMode) || {},
                    Z = T.command,
                    N = T.parameters,
                    y = (s || {}).DASH_OPERATION_MODE_BUTTON,
                    A = "DISCONNECTED" !== P && "NONE" !== P,
                    R = !u.powerState || !(0, f.lJ)(s, Z, N),
                    M = Jn.includes(u.updateStatus);
                  return (0, b.jsx)(Qn, {
                    mobile: t,
                    children: (0, b.jsxs)(p.Z, {
                      container: !0,
                      children: [
                        (0, b.jsx)(p.Z, {
                          item: !0,
                          xs: 6,
                          children:
                            ((!M && !t && u.powerState) || (!M && t)) &&
                            (0, b.jsx)(fn, {
                              status: w,
                              multipleSolarPanels: l,
                              mobile: t,
                              value: C,
                              hidden: M,
                              onClick: i,
                              onClose: r,
                              multipvdetails: d,
                            }),
                        }),
                        (0, b.jsx)(p.Z, {
                          item: !0,
                          xs: 6,
                          children:
                            ((!M && !t && u.powerState) || (!M && t)) &&
                            (0, b.jsx)(k, {
                              status: P,
                              mobile: t,
                              value: S,
                              hidden: M,
                            }),
                        }),
                        (0, b.jsxs)(p.Z, {
                          item: !0,
                          xs: 12,
                          children: [
                            t &&
                              (0, b.jsx)(x.Hb, {
                                percentage: g,
                                mode: j,
                                gridconnected: A,
                                onClick: a,
                                batteryBackupLevel: _,
                              }),
                            !t &&
                              (0, b.jsxs)(b.Fragment, {
                                children: [
                                  (0, b.jsx)(x.AV, {
                                    mode: (0, f.lJ)(s, Z, N),
                                    powerOn: c,
                                    isMobile: !1,
                                    translations: s,
                                    currentDevice: u,
                                    deviceStatus: e,
                                    loading: v,
                                  }),
                                  ((!M && !R) || !e.currentMode) &&
                                    (0, b.jsx)(ne, {
                                      children: (0, b.jsxs)(x.zx, {
                                        buttonType: "primary-default-dark",
                                        buttonWidth: "200px",
                                        onClick: o,
                                        children: [
                                          (0, b.jsx)(h.Z, {
                                            children: "settings",
                                          }),
                                          " ",
                                          y,
                                        ],
                                      }),
                                    }),
                                ],
                              }),
                          ],
                        }),
                        (0, b.jsx)(p.Z, {
                          item: !0,
                          xs: 6,
                          children:
                            ((!M && !t && u.powerState) || (!M && t)) &&
                            (0, b.jsx)(Gn, {
                              status: D,
                              mobile: t,
                              value: E,
                              hidden: M,
                            }),
                        }),
                        (0, b.jsx)(p.Z, {
                          item: !0,
                          xs: 6,
                          children:
                            ((!M && !t && u.powerState) || (!M && t)) &&
                            (0, b.jsx)(kn, { status: O, mobile: t, value: L }),
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            t
          );
        })(c.PureComponent),
        Qn = d.ZP.div(
          Vn ||
            (Vn = (0, r.default)([
              "\n  padding-top: 10px;\n  margin: 0 auto;\n  position: relative;\n\n  @media screen and (min-width: 550px) and (max-width: 1024px) {\n    padding-top: 50px;\n  }\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (n) {
            return n.mobile && "\n    max-width: 330px;\n  ";
          },
          function (n) {
            return (
              !n.mobile && "\n    max-width: 815px;\n    height: 400px;\n  "
            );
          },
        ),
        ne = d.ZP.div(
          Bn ||
            (Bn = (0, r.default)([
              "\n  display: flex;\n  justify-content: center;\n  bottom: -16px;\n  position: absolute;\n  width: 100%;\n  z-index: 101;\n\n  .bg-button {\n    background-color: #005eab;\n  }\n\n  button:hover .bg-button {\n    background-color: #005499;\n  }\n",
            ])),
        );
    },
    12828: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return E;
        },
      });
      var o,
        i,
        r,
        a,
        l,
        s,
        u,
        c,
        d = t(56824),
        p = t(30225),
        h = t(94404),
        f = t(14482),
        x = t(5189),
        v = t(76431),
        m = t(84628),
        g = t(49318),
        b = t(30068),
        j = (0, m.Jg)({
          path: function () {
            return ["scenes", "containers", "DashboardDesktopConsumptions"];
          },
          connect: {
            props: [
              g.Z,
              ["translations", "currentDevice"],
              b.Z,
              ["deviceStatus"],
            ],
            actions: [g.Z, ["push"]],
          },
        }),
        w = t(30588),
        C = t(32763),
        P = t(22247),
        S = t(31228),
        D = (function (n) {
          (0, f.default)(t, n);
          var e = (0, x.default)(t);
          function t() {
            var n;
            (0, p.default)(this, t);
            for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
              i[r] = arguments[r];
            return (
              ((n = e.call.apply(e, [this].concat(i))).navigate = function (
                e,
                t,
              ) {
                (0, n.actions.push)(e, t);
              }),
              n
            );
          }
          return (
            (0, h.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    e = this.props,
                    t = e.deviceStatus,
                    o = e.translations,
                    i = e.currentDevice;
                  if (!t) return "";
                  var r = o.DASH_GRID_CONSUMPTION,
                    a = o.DASH_GRID_CONSUMPTION_TODAY,
                    l = o.DASH_GRID_CONSUMPTION_LAST30D,
                    s = o.DASH_PV_PROD,
                    u = o.DASH_PV_PROD_TODAY,
                    c = o.DASH_PV_PROD_LAST30D,
                    d = o.DASH_PV_SELF,
                    p = o.DASH_PV_SELF_TODAY,
                    h = o.DASH_PV_SELF_LAST30D,
                    f = t.today || {},
                    x = t.last30daysEnergyFlow || {};
                  return (0, S.jsx)(O, {
                    children: (0, S.jsxs)(C.Z, {
                      container: !0,
                      alignItems: "center",
                      justify: "center",
                      children: [
                        (0, S.jsx)(C.Z, {
                          item: !0,
                          xs: i.hasPv ? 4 : 5,
                          children: (0, S.jsxs)(L, {
                            onClick: function () {
                              return n.navigate("/chart/grid-consumption/", {
                                updateFilters: !0,
                              });
                            },
                            children: [
                              (0, S.jsxs)(_, {
                                children: [
                                  (0, S.jsx)(T, {
                                    children: (0, S.jsx)(y, {
                                      children: (0, S.jsx)(P.f3, {}),
                                    }),
                                  }),
                                  (0, S.jsxs)(Z, {
                                    children: [
                                      (0, S.jsx)(N, { children: r }),
                                      (0, S.jsxs)(C.Z, {
                                        container: !0,
                                        children: [
                                          (0, S.jsx)(C.Z, {
                                            item: !0,
                                            xs: 6,
                                            children: (0, S.jsx)(P.jl, {
                                              label: a,
                                              children: (0, S.jsx)(P.l$, {
                                                value: f.gridConsumption,
                                                color: "#007BC1",
                                                showArrow:
                                                  f.gridConsumption !==
                                                  x.gridConsumption,
                                                arrow:
                                                  f.gridConsumption >
                                                  x.gridConsumption
                                                    ? "up"
                                                    : "down",
                                                arrowColor:
                                                  f.gridConsumption >
                                                  x.gridConsumption
                                                    ? "red"
                                                    : "green",
                                              }),
                                            }),
                                          }),
                                          (0, S.jsx)(C.Z, {
                                            item: !0,
                                            xs: 6,
                                            children: (0, S.jsx)(P.jl, {
                                              label: l,
                                              children: (0, S.jsx)(P.l$, {
                                                value: x.gridConsumption,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, S.jsx)(k, {}),
                            ],
                          }),
                        }),
                        i.hasPv &&
                          (0, S.jsx)(C.Z, {
                            item: !0,
                            xs: 4,
                            children: (0, S.jsxs)(L, {
                              onClick: function () {
                                return n.navigate("/chart/pv-production/", {
                                  updateFilters: !0,
                                });
                              },
                              children: [
                                (0, S.jsxs)(_, {
                                  children: [
                                    (0, S.jsx)(T, {
                                      children: (0, S.jsx)(y, {
                                        children: (0, S.jsx)(P.K, {}),
                                      }),
                                    }),
                                    (0, S.jsxs)(Z, {
                                      children: [
                                        (0, S.jsx)(N, { children: s }),
                                        (0, S.jsxs)(C.Z, {
                                          container: !0,
                                          children: [
                                            (0, S.jsx)(C.Z, {
                                              item: !0,
                                              xs: 6,
                                              children: (0, S.jsx)(P.jl, {
                                                label: u,
                                                children: (0, S.jsx)(P.l$, {
                                                  blue: !0,
                                                  value:
                                                    f.photovoltaicProduction,
                                                  showArrow:
                                                    f.photovoltaicProduction !==
                                                    x.photovoltaicProduction,
                                                  arrow:
                                                    f.photovoltaicProduction >
                                                    x.photovoltaicProduction
                                                      ? "up"
                                                      : "down",
                                                  arrowColor:
                                                    f.photovoltaicProduction >
                                                    x.photovoltaicProduction
                                                      ? "green"
                                                      : "red",
                                                }),
                                              }),
                                            }),
                                            (0, S.jsx)(C.Z, {
                                              item: !0,
                                              xs: 6,
                                              children: (0, S.jsx)(P.jl, {
                                                label: c,
                                                children: (0, S.jsx)(P.l$, {
                                                  value:
                                                    x.photovoltaicProduction,
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, S.jsx)(k, {}),
                              ],
                            }),
                          }),
                        i.hasPv &&
                          (0, S.jsx)(C.Z, {
                            item: !0,
                            xs: 4,
                            children: (0, S.jsxs)(L, {
                              onClick: function () {
                                return n.navigate("/chart/pv-consumption/", {
                                  updateFilters: !0,
                                });
                              },
                              children: [
                                (0, S.jsxs)(_, {
                                  children: [
                                    (0, S.jsx)(T, {
                                      children: (0, S.jsx)(y, {
                                        children: (0, S.jsx)(P.gQ, {}),
                                      }),
                                    }),
                                    (0, S.jsxs)(Z, {
                                      children: [
                                        (0, S.jsx)(N, { children: d }),
                                        (0, S.jsxs)(C.Z, {
                                          container: !0,
                                          children: [
                                            (0, S.jsx)(C.Z, {
                                              item: !0,
                                              xs: 6,
                                              children: (0, S.jsx)(P.jl, {
                                                label: p,
                                                children: (0, S.jsx)(P.l$, {
                                                  blue: !0,
                                                  showPercentage: !0,
                                                  value: f.selfConsumption,
                                                  showArrow:
                                                    f.selfConsumption !==
                                                    x.selfConsumption,
                                                  arrow:
                                                    f.selfConsumption >
                                                    x.selfConsumption
                                                      ? "up"
                                                      : "down",
                                                  arrowColor:
                                                    f.selfConsumption >
                                                    x.selfConsumption
                                                      ? "green"
                                                      : "red",
                                                }),
                                              }),
                                            }),
                                            (0, S.jsx)(C.Z, {
                                              item: !0,
                                              xs: 6,
                                              children: (0, S.jsx)(P.jl, {
                                                label: h,
                                                children: (0, S.jsx)(P.l$, {
                                                  showPercentage: !0,
                                                  value: x.selfConsumption,
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, S.jsx)(k, {}),
                              ],
                            }),
                          }),
                      ],
                    }),
                  });
                },
              },
            ]),
            t
          );
        })(v.Component),
        E = j(D),
        O = w.ZP.div(o || (o = (0, d.default)(["\n  padding: 60px 5% 0;\n"]))),
        L = w.ZP.div(i || (i = (0, d.default)(["\n  position: relative;\n"]))),
        _ = w.ZP.div(
          r ||
            (r = (0, d.default)([
              "\n  background-color: #fdfdfd;\n  height: 136px;\n  margin: 0 10px;\n  border-radius: 6px;\n  box-shadow: 0 0 10px 0 rgba(114, 126, 132, 0.1);\n  display: flex;\n  align-items: center;\n  padding: 25px 10px;\n  position: relative;\n  z-index: 2;\n  cursor: pointer;\n  transition: box-shadow 0.2s ease-in-out;\n\n  &:hover {\n    box-shadow: 0 0 10px 0 rgba(114, 126, 132, 0.3);\n  }\n",
            ])),
        ),
        k = w.ZP.div(
          a ||
            (a = (0, d.default)([
              "\n  position: absolute;\n  height: 10px;\n  width: calc(100% - 96px);\n  background-color: #727e84;\n  box-shadow: 0 0 30px 0 rgba(114, 126, 132, 0.3);\n  z-index: 1;\n  left: 48px;\n  bottom: 0;\n",
            ])),
        ),
        T = w.ZP.div(
          l || (l = (0, d.default)(["\n  width: 25%;\n  display: flex;\n"])),
        ),
        Z = w.ZP.div(
          s ||
            (s = (0, d.default)([
              "\n  width: 75%;\n\n  label {\n    font-size: 12px;\n  }\n",
            ])),
        ),
        N = w.ZP.div(
          u ||
            (u = (0, d.default)([
              "\n  font-size: 16px;\n  font-weight: 800;\n  color: #007bc1;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n",
            ])),
        ),
        y = w.ZP.div(
          c ||
            (c = (0, d.default)(["\n  margin: 0 auto;\n  display: block;\n"])),
        );
    },
    88858: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return b;
        },
      });
      var o,
        i = t(56824),
        r = t(30225),
        a = t(94404),
        l = t(14482),
        s = t(5189),
        u = t(76431),
        c = t(84628),
        d = t(49318),
        p = t(30068),
        h = (0, c.Jg)({
          path: function () {
            return ["scenes", "containers", "DashboardGridConsumptions"];
          },
          connect: {
            props: [
              d.Z,
              ["translations", "currentDevice"],
              p.Z,
              ["deviceStatus"],
            ],
            actions: [d.Z, ["push"]],
          },
        }),
        f = t(30588),
        x = t(32763),
        v = t(22247),
        m = t(31228),
        g = (function (n) {
          (0, l.default)(t, n);
          var e = (0, s.default)(t);
          function t() {
            var n;
            (0, r.default)(this, t);
            for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
              i[a] = arguments[a];
            return (
              ((n = e.call.apply(e, [this].concat(i))).state = {
                gridSelected: "consumptions",
              }),
              (n.navigate = function (e, t) {
                (0, n.actions.push)(e, t);
              }),
              n
            );
          }
          return (
            (0, a.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    e = this.props,
                    t = e.deviceStatus,
                    o = e.translations,
                    i = e.currentDevice;
                  if (!t) return "";
                  var r = o.DASH_GRID_CONSUMPTION,
                    a = o.DASH_GRID_CONSUMPTION_TODAY,
                    l = o.DASH_GRID_CONSUMPTION_LAST30D,
                    s = o.DASH_PV_PROD,
                    u = o.DASH_PV_PROD_TODAY,
                    c = o.DASH_PV_PROD_LAST30D,
                    d = o.DASH_PV_SELF,
                    p = o.DASH_PV_SELF_TODAY,
                    h = o.DASH_PV_SELF_LAST30D,
                    f = t.today || {},
                    g = t.last30daysEnergyFlow || {},
                    b = this.state.gridSelected;
                  return (0, m.jsx)(j, {
                    children: (0, m.jsxs)(v.qF, {
                      children: [
                        (0, m.jsx)(v.qF.Item, {
                          open: "consumptions" === b,
                          onCollapse: function () {
                            return n.setState({ gridSelected: "consumptions" });
                          },
                          onClose: function () {
                            return n.setState({ gridSelected: "" });
                          },
                          onLinkClick: function () {
                            return n.navigate("/chart/grid-consumption/", {
                              updateFilters: !0,
                            });
                          },
                          title: r,
                          children: (0, m.jsxs)(x.Z, {
                            container: !0,
                            children: [
                              (0, m.jsx)(x.Z, {
                                item: !0,
                                xs: 6,
                                children: (0, m.jsx)(v.jl, {
                                  label: a,
                                  children: (0, m.jsx)(v.l$, {
                                    value: f.gridConsumption,
                                    color: "#007BC1",
                                    showArrow:
                                      f.gridConsumption !== g.gridConsumption,
                                    arrow:
                                      f.gridConsumption > g.gridConsumption
                                        ? "up"
                                        : "down",
                                    arrowColor:
                                      f.gridConsumption > g.gridConsumption
                                        ? "red"
                                        : "green",
                                  }),
                                }),
                              }),
                              (0, m.jsx)(x.Z, {
                                item: !0,
                                xs: 6,
                                children: (0, m.jsx)(v.jl, {
                                  label: l,
                                  children: (0, m.jsx)(v.l$, {
                                    value: g.gridConsumption,
                                    showArrow: !1,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        i.hasPv &&
                          (0, m.jsx)(v.qF.Item, {
                            open: "billing" === b,
                            onCollapse: function () {
                              return n.setState({ gridSelected: "billing" });
                            },
                            onClose: function () {
                              return n.setState({ gridSelected: "" });
                            },
                            onLinkClick: function () {
                              return n.navigate("/chart/pv-production/", {
                                updateFilters: !0,
                              });
                            },
                            title: s,
                            children: (0, m.jsxs)(x.Z, {
                              container: !0,
                              children: [
                                (0, m.jsx)(x.Z, {
                                  item: !0,
                                  xs: 6,
                                  children: (0, m.jsx)(v.jl, {
                                    label: u,
                                    children: (0, m.jsx)(v.l$, {
                                      color: "#007BC1",
                                      value: f.photovoltaicProduction,
                                      showArrow:
                                        f.photovoltaicProduction !==
                                        g.photovoltaicProduction,
                                      arrow:
                                        f.photovoltaicProduction >
                                        g.photovoltaicProduction
                                          ? "up"
                                          : "down",
                                      arrowColor:
                                        f.photovoltaicProduction >
                                        g.photovoltaicProduction
                                          ? "green"
                                          : "red",
                                    }),
                                  }),
                                }),
                                (0, m.jsx)(x.Z, {
                                  item: !0,
                                  xs: 6,
                                  children: (0, m.jsx)(v.jl, {
                                    label: c,
                                    children: (0, m.jsx)(v.l$, {
                                      value: g.photovoltaicProduction,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        i.hasPv &&
                          (0, m.jsx)(v.qF.Item, {
                            open: "consumption" === b,
                            onCollapse: function () {
                              return n.setState({
                                gridSelected: "consumption",
                              });
                            },
                            onClose: function () {
                              return n.setState({ gridSelected: "" });
                            },
                            onLinkClick: function () {
                              return n.navigate("/chart/pv-consumption/", {
                                updateFilters: !0,
                              });
                            },
                            title: d,
                            children: (0, m.jsxs)(x.Z, {
                              container: !0,
                              children: [
                                (0, m.jsx)(x.Z, {
                                  item: !0,
                                  xs: 6,
                                  children: (0, m.jsx)(v.jl, {
                                    label: p,
                                    children: (0, m.jsx)(v.l$, {
                                      color: "#007BC1",
                                      showPercentage: !0,
                                      value: f.selfConsumption,
                                      showArrow:
                                        f.selfConsumption !== g.selfConsumption,
                                      arrow:
                                        f.selfConsumption > g.selfConsumption
                                          ? "up"
                                          : "down",
                                      arrowColor:
                                        f.selfConsumption > g.selfConsumption
                                          ? "green"
                                          : "red",
                                    }),
                                  }),
                                }),
                                (0, m.jsx)(x.Z, {
                                  item: !0,
                                  xs: 6,
                                  children: (0, m.jsx)(v.jl, {
                                    label: h,
                                    children: (0, m.jsx)(v.l$, {
                                      showPercentage: !0,
                                      value: g.selfConsumption,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                      ],
                    }),
                  });
                },
              },
            ]),
            t
          );
        })(u.Component),
        b = h(g),
        j = f.ZP.div(o || (o = (0, i.default)([""])));
    },
    76948: function (n, e, t) {
      t.d(e, {
        ET: function () {
          return p;
        },
        HH: function () {
          return c;
        },
        UD: function () {
          return f;
        },
        YV: function () {
          return s;
        },
        eQ: function () {
          return u;
        },
        eT: function () {
          return h;
        },
        lJ: function () {
          return d;
        },
        wS: function () {
          return a;
        },
        x_: function () {
          return l;
        },
      });
      var o = t(94467),
        i = t.n(o),
        r = t(90012),
        a = {
          SET_CHARGE: ["power", "soc"],
          SET_DISCHARGE: ["power", "soc"],
          SET_BASIC_MODE: [],
          SET_MAXIMIZE_AUTO_CONSUMPTION: [],
          SET_VARIABLE_GRID_INJECTION: ["maximumPower"],
          SET_FREQUENCY_REGULATION: ["powerAllocation", "optimalSoc"],
          SET_PEAK_SHAVING: ["maxHousePeakConsumption"],
        },
        l = "SET_BASIC_MODE",
        s = "SET_VARIABLE_GRID_INJECTION",
        u = function (n) {
          if (!n) return {};
          if (-1 !== ["SET_CHARGE", "SET_DISCHARGE"].indexOf(n.command))
            ((n.parameters.action =
              "SET_CHARGE" === n.command
                ? "ACTION_CHARGE"
                : "ACTION_DISCHARGE"),
              (n.command = "SET_CHARGE"));
          else if ("SET_PEAK_SHAVING" === n.command) {
            var e = parseInt(n.parameters.maxHousePeakConsumption);
            n.parameters.maxHousePeakConsumption = e;
          }
          return n;
        },
        c = function (n) {
          return (
            n &&
              "SET_CHARGE" === n.command &&
              (n.command =
                "ACTION_CHARGE" === n.action ? "SET_CHARGE" : "SET_DISCHARGE"),
            n
          );
        },
        d = function () {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          if (!e || "" === e || !n) return null;
          var o = t && Object.keys(t).length > 0;
          return (
            "SET_CHARGE" === e &&
              o &&
              (e =
                "ACTION_CHARGE" === t.action ? "SET_CHARGE" : "SET_DISCHARGE"),
            n["OPERATION_MODE_".concat(e)]
          );
        },
        p = function (n) {
          return -1 !==
            ["soc", "power", "powerAllocation", "optimalSoc"].indexOf(n)
            ? "%"
            : -1 !== ["maximumPower"].indexOf(n)
              ? "W"
              : "";
        },
        h = function (n) {
          var e = "",
            t = 0;
          if (n) {
            var o = ""
                .concat(i()().format("MM-DD-YYYY"), " ")
                .concat((0, r.convertFromMilitaryTime)(n)),
              a = i()().format("MM-DD-YYYY HH:mm"),
              l = i()(o, "MM-DD-YYYY HH:mm").unix(),
              s = i()(a, "MM-DD-YYYY HH:mm").unix();
            (l < s &&
              ((o = ""
                .concat(i()().add(1, "day").format("MM-DD-YYYY"), " ")
                .concat((0, r.convertFromMilitaryTime)(n))),
              (l = i()(o, "MM-DD-YYYY HH:mm").unix())),
              (t = l - s),
              (t = Math.round(t / 60)));
            var u = Math.floor(t / 60),
              c = t % 60;
            e = "".concat(u, "h").concat(c, "m");
          }
          return { left: t, label: e };
        },
        f = function (n, e) {
          if (!n || !e) return !1;
          var t = a[n.command],
            o = !1;
          return (
            e.command.value === n.command &&
              t.length > 0 &&
              ((o = !0),
              t.forEach(function (t) {
                e[t].value !== n.parameters[t] && (o = !1);
              })),
            o
          );
        };
    },
    30375: function (n, e, t) {
      t.d(e, {
        m: function () {
          return i;
        },
      });
      var o = JSON.parse(
          '{"ADD_NEW_EVENT":["customer","technician"],"EDIT_EVENT":["customer","technician"],"DELETE_EVENT":["customer","technician"],"EDIT_UNIT_SETTINGS":["customer","technician"],"EDIT_UNIT_DEFAULT_OPERATION_MODE":["customer","technician"],"UNIT_POWER_ON_OFF":["customer","technician"],"CHANGE_OPERATION_MODE":["customer","technician"],"CHANGE_UNIT_OWNER":["customer","technician"],"EDIT_BLOCK_STATUS":["technician"],"SUPPORT_UNIT_LOG":["customer","technician"],"VIEW_SUPPORT_MAINTENANCE_OPTIONS":["customer","technician"],"REBOOT_UNIT":["technician"],"SUPPORT_HTTPS_TUNNEL":["customer","technician"]}',
        ),
        i = function (n, e) {
          var t = o[n];
          return !!t && -1 !== t.indexOf(e);
        };
    },
    30068: function (n, e, t) {
      var o = t(87121),
        i = t(31105),
        r = t(6892),
        a = t(84628),
        l = t(49745),
        s = t(83749),
        u = t(13795),
        c = t(90012),
        d = t(8712),
        p = t(30375),
        h = t(98278),
        f = t.n(h),
        x = t(49318),
        v = "".concat(u.CT, "/device/status"),
        m = "".concat(u.CT, "/device/power");
      e.Z = (0, a.Jg)({
        path: function () {
          return ["scenes", "Dashboard"];
        },
        connect: {
          values: [
            x.Z,
            [
              "currentDevice",
              "appLoading",
              "isMobile",
              "user",
              "translations",
              "userRole",
              "userValid",
            ],
          ],
          actions: [
            x.Z,
            [
              "logout",
              "fetchCurrentDeviceInfo",
              "setCurrentDeviceInfo",
              "push",
            ],
          ],
        },
        actions: function () {
          return {
            fetchDeviceStatus: !0,
            updateDeviceStatus: !0,
            incrementPriorityCount: !0,
            setDeviceStatus: function (n) {
              return { status: n };
            },
            showModal: function (n) {
              return { modal: n };
            },
            hideModal: function (n) {
              return { modal: n };
            },
            showMultiPVDetails: function (n) {
              return { multipvdetails: n };
            },
            hideMultiPVDetails: function (n) {
              return { multipvdetails: n };
            },
            error: !0,
            reset: !0,
            changeToPowerOn: !0,
          };
        },
        reducers: function (n) {
          n.actions;
          return {
            partialDeviceStatus: [
              {},
              f().object,
              {
                setDeviceStatus: function (n, e) {
                  return e.status;
                },
                reset: function () {
                  return {};
                },
              },
            ],
            fetchWithPriority: [
              !1,
              f().bool,
              {
                updateDeviceStatus: function () {
                  return !0;
                },
              },
            ],
            fetchWithPriorityCount: [
              0,
              f().number,
              {
                updateDeviceStatus: function () {
                  return 0;
                },
                incrementPriorityCount: function (n) {
                  return n + 1;
                },
              },
            ],
            visibleModals: [
              [],
              f().array,
              {
                showModal: function (n, e) {
                  var t = e.modal;
                  return [].concat((0, r.Z)(n), [t]);
                },
                hideModal: function (n, e) {
                  var t = e.modal;
                  return n.filter(function (n) {
                    return n !== t;
                  });
                },
                updateDeviceStatus: function () {
                  return [];
                },
                reset: function () {
                  return [];
                },
              },
            ],
            loading: [
              !0,
              f().bool,
              {
                reset: function () {
                  return !0;
                },
                setDeviceStatus: function () {
                  return !1;
                },
                error: function () {
                  return !1;
                },
                setCurrentDeviceInfo: function () {
                  return !1;
                },
                changeToPowerOn: function () {
                  return !0;
                },
              },
            ],
            multipvdetails: [
              !1,
              f().bool,
              {
                reset: function () {
                  return !1;
                },
                showMultiPVDetails: function () {
                  return !0;
                },
                hideMultiPVDetails: function () {
                  return !1;
                },
              },
            ],
            error: [
              !1,
              f().bool,
              {
                reset: function () {
                  return !1;
                },
                setDeviceStatus: function () {
                  return !1;
                },
                error: function () {
                  return !0;
                },
              },
            ],
          };
        },
        selectors: {
          deviceStatus: [
            function (n) {
              return [n.partialDeviceStatus, n.translations];
            },
            function (n, e) {
              var t = (n || {}).energyFlow;
              if (!t) return n;
              var o = e["BATTERY_STATUS_".concat(t.batteryStatus)],
                r = {
                  energyFlow: (0, i.default)((0, i.default)({}, n.energyFlow), {
                    batteryStatus: o,
                  }),
                };
              return (0, i.default)((0, i.default)({}, n), r);
            },
          ],
          multipleSolarPanels: [
            function (n) {
              return [n.deviceStatus];
            },
            function (n) {
              return (0, d.T)(n);
            },
          ],
          userCanPowerUnit: [
            function (n) {
              return [n.userRole];
            },
            function (n) {
              return (0, p.m)("UNIT_POWER_ON_OFF", n);
            },
          ],
        },
        start: (0, o.Z)().mark(function n() {
          return (0, o.Z)().wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (0, c.log)("[XS-Dashboard] Start Scene ", "yellow"),
                      (n.next = 3),
                      (0, s.gz)(this.actionCreators.fetchDeviceStatus())
                    );
                  case 3:
                  case "end":
                    return n.stop();
                }
            },
            n,
            this,
          );
        }),
        stop: (0, o.Z)().mark(function n() {
          return (0, o.Z)().wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (0, c.log)("[XS-Dashboard] Stop Scene"),
                      (n.next = 3),
                      (0, s.gz)(this.actionCreators.reset())
                    );
                  case 3:
                  case "end":
                    return n.stop();
                }
            },
            n,
            this,
          );
        }),
        takeLatest: function (n) {
          n.actions;
          var e = n.workers;
          return {
            fetchDeviceStatus: e.fetchDeviceStatus,
            updateDeviceStatus: e.fetchDeviceStatus,
            changeToPowerOn: e.changeToPowerOn,
          };
        },
        workers: {
          fetchDeviceStatus: (0, o.Z)().mark(function () {
            var n, e, t, i, r, a, d, p, h, f, x, m, g;
            return (0, o.Z)().wrap(
              function (o) {
                for (;;)
                  switch ((o.prev = o.next)) {
                    case 0:
                      return (
                        (0, c.log)("[XS-Dashboard] fetchDeviceStatus"),
                        (n = this.actionCreators),
                        (e = n.fetchDeviceStatus),
                        (t = n.setDeviceStatus),
                        (i = n.error),
                        (r = n.incrementPriorityCount),
                        (o.prev = 2),
                        (o.next = 5),
                        this.get("currentDevice")
                      );
                    case 5:
                      return (
                        (a = o.sent),
                        (o.next = 8),
                        this.get("appLoading")
                      );
                    case 8:
                      if (((d = o.sent), a.id || !d)) {
                        o.next = 14;
                        break;
                      }
                      return ((o.next = 12), (0, s.gw)(1e3));
                    case 12:
                      return ((o.next = 14), (0, s.gz)(e()));
                    case 14:
                      return ((o.next = 16), (0, s.RE)(l.Z.get, v));
                    case 16:
                      if (
                        ((p = o.sent),
                        (h = p.data || {}),
                        (f = h.result),
                        !h.successful)
                      ) {
                        o.next = 36;
                        break;
                      }
                      return ((o.next = 21), (0, s.gz)(t(f)));
                    case 21:
                      return (
                        (x = u.E2),
                        (o.next = 24),
                        this.get("fetchWithPriority")
                      );
                    case 24:
                      return (
                        (m = o.sent),
                        (o.next = 27),
                        this.get("fetchWithPriorityCount")
                      );
                    case 27:
                      if (((g = o.sent), !(m && g < 6))) {
                        o.next = 32;
                        break;
                      }
                      return ((x = 5e3), (o.next = 32), (0, s.gz)(r()));
                    case 32:
                      return ((o.next = 34), (0, s.gw)(x));
                    case 34:
                      o.next = 42;
                      break;
                    case 36:
                      return ((o.next = 38), (0, s.gz)(i()));
                    case 38:
                      return ((o.next = 40), (0, s.gz)(t({})));
                    case 40:
                      return ((o.next = 42), (0, s.gw)(1e4));
                    case 42:
                      o.next = 52;
                      break;
                    case 44:
                      return (
                        (o.prev = 44),
                        (o.t0 = o.catch(2)),
                        (o.next = 48),
                        (0, s.gz)(i())
                      );
                    case 48:
                      return ((o.next = 50), (0, s.gz)(t({})));
                    case 50:
                      return ((o.next = 52), (0, s.gw)(1e4));
                    case 52:
                      return ((o.next = 54), (0, s.gz)(e()));
                    case 54:
                    case "end":
                      return o.stop();
                  }
              },
              e,
              this,
              [[2, 44]],
            );
          }),
          changeToPowerOn: (0, o.Z)().mark(function n() {
            var e, t, i, r, a, u;
            return (0, o.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (0, c.log)("[XS-Dashboard] changeToPowerOn"),
                        (e = this.actionCreators),
                        (t = e.fetchCurrentDeviceInfo),
                        (i = e.error),
                        (n.prev = 2),
                        (n.next = 5),
                        this.get("currentDevice")
                      );
                    case 5:
                      return (
                        (r = n.sent),
                        (a = { parameters: { state: !0 } }),
                        (u = (0, c.generateUrl)(m, { id: r.id })),
                        (n.next = 10),
                        (0, s.RE)(l.Z.post, u, a)
                      );
                    case 10:
                      return ((n.next = 12), (0, s.gw)(5e3));
                    case 12:
                      return ((n.next = 14), (0, s.gz)(t()));
                    case 14:
                      n.next = 21;
                      break;
                    case 16:
                      return (
                        (n.prev = 16),
                        (n.t0 = n.catch(2)),
                        console.log(n.t0),
                        (n.next = 21),
                        (0, s.gz)(i("Error trying to change device state"))
                      );
                    case 21:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this,
              [[2, 16]],
            );
          }),
        },
      });
    },
    8712: function (n, e, t) {
      t.d(e, {
        T: function () {
          return o;
        },
      });
      var o = function (n) {
        var e = (n || {}).energyFlow;
        if (!e) return {};
        var t = e.acPvValue + e.dcPvValue,
          o = 0,
          i = "",
          r = "",
          a = 0;
        return (
          "DISCONNECTED" === e.acPvRole && "DISCONNECTED" === e.dcPvRole
            ? (o = 0)
            : ("DISCONNECTED" === e.acPvRole &&
                  "DISCONNECTED" !== e.dcPvRole) ||
                ("DISCONNECTED" !== e.acPvRole && "DISCONNECTED" === e.dcPvRole)
              ? ((o = 1),
                "DISCONNECTED" !== e.acPvRole
                  ? ((i = e.acPvRole), (a = e.acPvValue), (r = "ac"))
                  : ((i = e.dcPvRole), (a = e.dcPvValue), (r = "dc")))
              : (o = 2),
          {
            acPvRole: e.acPvRole,
            acPvValue: e.acPvValue,
            dcPvRole: e.dcPvRole,
            dcPvValue: e.dcPvValue,
            pvValueSum: t,
            numberPV: o,
            onePvType: r,
            onePvRole: i,
            onePvValue: a,
          }
        );
      };
    },
    2282: function (n, e, t) {
      t(76431);
      e.Z =
        t.p +
        "static/media/background_blue_tablet.7f8d004ce1dd02c9826558e94bfc7c61.svg";
    },
  },
]);
//# sourceMappingURL=7611.bd73151c.chunk.js.map
