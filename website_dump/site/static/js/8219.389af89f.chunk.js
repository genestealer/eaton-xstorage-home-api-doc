"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [8219],
  {
    27707: function (n, e, t) {
      var i,
        o,
        l,
        r,
        a,
        s,
        d,
        u,
        c = t(56824),
        p = t(30225),
        h = t(94404),
        f = t(14482),
        x = t(5189),
        g = t(76431),
        m = t(30588),
        b = t(48229),
        v = t(31228),
        j = (function (n) {
          (0, f.default)(t, n);
          var e = (0, x.default)(t);
          function t(n) {
            var i;
            return (
              (0, p.default)(this, t),
              ((i = e.call(this, n)).handleClickOutside = function (n) {
                var e = i.props,
                  t = e.open,
                  o = e.onClose,
                  l = e.fixed;
                if (t && !l) {
                  var r = i.slideRef.current;
                  (r && r.contains(n.target)) || o();
                }
              }),
              (i.slideRef = (0, g.createRef)()),
              i
            );
          }
          return (
            (0, h.default)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  document.addEventListener(
                    "click",
                    this.handleClickOutside,
                    !0,
                  );
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  document.removeEventListener(
                    "click",
                    this.handleClickOutside,
                    !0,
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.open,
                    t = n.title,
                    i = n.overlay,
                    o = n.children,
                    l = n.onClose,
                    r = n.type,
                    a = n.mobile;
                  return (0, v.jsxs)(w, {
                    children: [
                      (0, v.jsx)(k, {
                        mobile: a,
                        open: e,
                        children: (0, v.jsx)(y, {
                          open: e,
                          mobile: a,
                          ref: this.slideRef,
                          children:
                            e &&
                            (0, v.jsxs)("div", {
                              children: [
                                (0, v.jsx)(Z, {
                                  id: "Close_Button",
                                  mobile: a,
                                  onClick: l,
                                  children: (0, v.jsx)(b.Z, {
                                    children: "close",
                                  }),
                                }),
                                (0, v.jsx)(_, {
                                  children: (0, v.jsx)(E, {
                                    id: "SlidePanel_Title",
                                    mobile: a,
                                    children: t,
                                  }),
                                }),
                                (0, v.jsx)(S, {
                                  padding: "content-not-padded" !== r,
                                  children: o,
                                }),
                              ],
                            }),
                        }),
                      }),
                      i && e && (0, v.jsx)(C, {}),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(g.PureComponent);
      e.Z = j;
      var w = m.ZP.div(i || (i = (0, c.default)([""]))),
        C = m.ZP.div(
          o ||
            (o = (0, c.default)([
              "\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 1199;\n  background-color: rgba(0, 0, 0, 0.5);\n",
            ])),
        ),
        k = m.ZP.div(
          l ||
            (l = (0, c.default)([
              "\n  position: fixed;\n  z-index: 1200;\n  overflow: hidden;\n\n  ",
              "\n\n  ",
              "\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (n) {
            return (
              !n.mobile &&
              "\n    right: 0;\n    top: 0;\n    width: 0;\n    height: 100%;\n  "
            );
          },
          function (n) {
            return (
              n.mobile &&
              "\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 0;\n  "
            );
          },
          function (n) {
            var e = n.open,
              t = n.mobile;
            return (
              e &&
              !t &&
              "\n    width: 410px;\n    transition: all 0.5s ease-in-out;\n  "
            );
          },
          function (n) {
            var e = n.open,
              t = n.mobile;
            return (
              e &&
              t &&
              "\n    height: 410px;\n    transition: all 0.5s ease-in-out;\n  "
            );
          },
        ),
        y = m.ZP.div(
          r ||
            (r = (0, c.default)([
              "\n  position: absolute;\n  background: #FDFDFD;\n  box-shadow: 0 0 16px 0 rgba(66,78,84,0.1);\n\n  ",
              "\n\n  ",
              "\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (n) {
            return (
              !n.mobile &&
              "\n    right: -398px;\n    width: 398px;\n    height: 100%;\n  "
            );
          },
          function (n) {
            return (
              n.mobile &&
              "\n    bottom: -180px;\n    right: 0;\n    width: 100%;\n    height: 180px;\n    border-radius: 6px 6px 0 0;\n  "
            );
          },
          function (n) {
            return (
              !n.mobile &&
              "\n    transition: all 0.5s;\n    transform: translate3d(-398px, 0, 0);\n    animation-timing-function: 1s ease-in-out;\n  "
            );
          },
          function (n) {
            return (
              n.mobile &&
              "\n    transition: all 0.5s;\n    transform: translate3d(0, -180px, 0);\n    animation-timing-function: 1s ease-in-out;\n  "
            );
          },
        ),
        _ = m.ZP.div(
          a || (a = (0, c.default)(["\n  padding: 20px 20px 0;\n"])),
        ),
        S = m.ZP.div(
          s || (s = (0, c.default)(["\n  padding: 0 20px;\n\n  ", "\n"])),
          function (n) {
            return n.padding && "\n    padding: 20px;\n  ";
          },
        ),
        E = m.ZP.h2(
          d ||
            (d = (0, c.default)([
              "\n  color: #007bc1;\n  font-family: Eaton;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  line-height: 24px;\n  margin-bottom: 15px;\n\n  ",
              "\n",
            ])),
          function (n) {
            return (
              n.mobile &&
              '\n    color: #333F48;\n    font-family: "Open Sans";\n    font-size: 16px;\n    font-weight: 800;\n    letter-spacing: 0.5px;\n    line-height: 16px;\n    margin-top: 0px;\n  '
            );
          },
        ),
        Z = m.ZP.div(
          u ||
            (u = (0, c.default)([
              "\n  position: absolute;\n  right: 20px;\n  top: 40px;\n  color: #007bc1;\n  cursor: pointer;\n\n  span {\n    font-size: 20px;\n    font-weight: bold;\n  }\n\n  ",
              "\n",
            ])),
          function (n) {
            return n.mobile && "\n    top: 20px;\n  ";
          },
        );
    },
    68219: function (n, e, t) {
      (t.r(e),
        t.d(e, {
          default: function () {
            return P;
          },
        }));
      var i,
        o,
        l,
        r,
        a = t(56824),
        s = t(30225),
        d = t(94404),
        u = t(14482),
        c = t(5189),
        p = t(76431),
        h = t(30068),
        f = t(30588),
        x = t(48229),
        g = t(44497),
        m = t(76948),
        b = t(88858),
        v = t(12828),
        j = t(27707),
        w = t(95557),
        C = t(22247),
        k = t(31228),
        y = (function (n) {
          (0, u.default)(t, n);
          var e = (0, c.default)(t);
          function t() {
            return ((0, s.default)(this, t), e.apply(this, arguments));
          }
          return (
            (0, d.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.open,
                    t = n.onClose;
                  return (0, k.jsx)("div", {
                    children:
                      e &&
                      (0, k.jsx)(C.u_, {
                        open: e,
                        onClose: t,
                        size: "medium",
                        children: (0, k.jsxs)("div", {
                          children: [
                            (0, k.jsx)(C.xB, {
                              title: "Energy flow details",
                              subtitle: "Storage Unit",
                              type: "diagonal",
                              closeButton: !0,
                              onClose: t,
                            }),
                            (0, k.jsx)(C.hz, {
                              children: (0, k.jsxs)(C.aV, {
                                children: [
                                  (0, k.jsx)(C.Wq, {
                                    title: "Voltage",
                                    label: "95.5 V",
                                    shadow: !0,
                                  }),
                                  (0, k.jsx)(C.Wq, {
                                    title: "Current",
                                    label: "0.00 A",
                                    shadow: !0,
                                  }),
                                  (0, k.jsx)(C.Wq, {
                                    title: "Temperature",
                                    label: (0, k.jsx)("span", {
                                      children: "24.5 \xb0C",
                                    }),
                                    shadow: !0,
                                  }),
                                  (0, k.jsx)(C.Wq, {
                                    title:
                                      "Average Temperature after installation",
                                    label: (0, k.jsx)("span", {
                                      children: "-0.1 \xb0C",
                                    }),
                                    shadow: !0,
                                  }),
                                  (0, k.jsx)(C.Wq, {
                                    title:
                                      "Average Temperature before installation",
                                    label: (0, k.jsx)("span", {
                                      children: "23.0 \xb0C",
                                    }),
                                    shadow: !0,
                                  }),
                                  (0, k.jsx)(C.Wq, {
                                    title: "Total charge",
                                    label: "367 Ah",
                                    shadow: !0,
                                  }),
                                  (0, k.jsx)(C.Wq, {
                                    title: "Total discharge",
                                    label: "227 Ah",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                  });
                },
              },
            ]),
            t
          );
        })(p.Component),
        _ = y,
        S = t(11228),
        E = t(2282),
        Z = (function (n) {
          (0, u.default)(t, n);
          var e = (0, c.default)(t);
          function t() {
            var n;
            (0, s.default)(this, t);
            for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++)
              o[l] = arguments[l];
            return (
              ((n = e.call.apply(e, [this].concat(o))).navigate = function (e) {
                (0, n.actions.push)(e);
              }),
              (n.state = { switcherSelected: "battery" }),
              n
            );
          }
          return (
            (0, d.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    e = this.props,
                    t = e.loading,
                    i = e.error,
                    o = e.isMobile,
                    l = e.user,
                    r = e.visibleModals,
                    a = e.translations,
                    s = e.currentDevice,
                    d = e.userCanPowerUnit,
                    u = e.multipleSolarPanels,
                    c = e.multipvdetails,
                    p = e.deviceStatus,
                    h = e.userValid,
                    f = this.actions,
                    y = f.showModal,
                    E = f.hideModal,
                    Z = f.changeToPowerOn,
                    P = f.showMultiPVDetails,
                    A = f.hideMultiPVDetails,
                    F = p.currentMode || {},
                    R = F.command,
                    H = F.parameters,
                    V = l || {},
                    W = V.firstName,
                    z = V.lastName,
                    I = this.state.switcherSelected,
                    L = a.DASH_WELCOME,
                    q = a.DASH_TITLE,
                    B = a.DASH_BATTERY_STATUS,
                    N = a.DASH_ENERGY_FLOW,
                    U = a.DASH_ERROR_DEVICE_OFF_TITLE,
                    G = a.DASH_ERROR_DEVICE_OFF_MSG,
                    Y = a.DASH_ERROR_DEVICE_OFF_LABEL,
                    J = a.DASH_OPERATION_MODE_TITLE,
                    K = [
                      { slug: "battery", name: B },
                      { slug: "energy", name: N, disabled: !p },
                    ],
                    Q = -1 !== r.indexOf("operationMode"),
                    X = -1 !== r.indexOf("energyFlowInfo"),
                    $ = -1 !== r.indexOf("operationModeHelp"),
                    nn = function () {
                      return E("operationMode");
                    };
                  return (0, k.jsxs)(D, {
                    bgfull: "energy" === I,
                    mobile: o,
                    children: [
                      !!t && (0, k.jsx)(C.gb, {}),
                      i &&
                        (0, k.jsx)(C.P3, {
                          icon: (0, k.jsx)(x.Z, { children: "report" }),
                          title: U,
                          text: G,
                          label: Y,
                          mobile: o,
                          closable: !0,
                        }),
                      (0, k.jsx)(C.V1, {
                        paddingTop: o ? "12px" : "0px",
                        mobile: o,
                        children: q,
                      }),
                      h && o
                        ? (0, k.jsxs)(k.Fragment, {
                            children: [
                              (0, k.jsx)(C.T5, {
                                items: K,
                                selected: I,
                                onChange: function (e) {
                                  return n.setState({ switcherSelected: e });
                                },
                              }),
                              (0, k.jsx)(M, {
                                visible: "battery" === I,
                                children:
                                  "battery" === I &&
                                  (0, k.jsxs)(k.Fragment, {
                                    children: [
                                      (0, k.jsx)(C.AV, {
                                        mode: (0, m.lJ)(a, R, H),
                                        powerOn: d ? Z : void 0,
                                        isMobile: !0,
                                        onClick: function () {
                                          return n.navigate("/operation-mode/");
                                        },
                                        translations: a,
                                        currentDevice: s,
                                        deviceStatus: p,
                                      }),
                                      (0, k.jsx)(b.Z, {}),
                                    ],
                                  }),
                              }),
                              (0, k.jsx)(M, {
                                visible: "energy" === I,
                                children:
                                  "energy" === I &&
                                  (0, k.jsx)(k.Fragment, {
                                    children: (0, k.jsx)(g.Z, {
                                      deviceStatus: p,
                                      isMobile: o,
                                      currentDevice: s,
                                      multipleSolarPanels: u,
                                      translations: a,
                                      solarpanelClick: P,
                                      solarpanelClose: A,
                                      multipvdetails: c,
                                    }),
                                  }),
                              }),
                            ],
                          })
                        : (0, k.jsxs)("div", {
                            children: [
                              (0, k.jsxs)(O, {
                                children: [L, " ", W, " ", z, "..."],
                              }),
                              (0, k.jsxs)(k.Fragment, {
                                children: [
                                  (0, k.jsx)(T, {
                                    children: (0, k.jsx)(g.Z, {
                                      deviceStatus: p,
                                      isMobile: o,
                                      multipleSolarPanels: u,
                                      operationModeClick: function () {
                                        return y("operationMode");
                                      },
                                      solarpanelClick: P,
                                      solarpanelClose: A,
                                      multipvdetails: c,
                                      currentDevice: s,
                                      powerBatteryOn: d ? Z : void 0,
                                      translations: a,
                                      loading: t,
                                    }),
                                  }),
                                  (0, k.jsx)(v.Z, {}),
                                  (0, k.jsx)(j.Z, {
                                    open: Q,
                                    onClose: nn,
                                    fixed: $,
                                    title: (0, k.jsxs)("span", {
                                      children: [
                                        J,
                                        " ",
                                        (0, k.jsx)(C.MG, {
                                          onClick: function () {
                                            return y("operationModeHelp");
                                          },
                                        }),
                                      ],
                                    }),
                                    children: (0, k.jsx)(w.Z, { onCancel: nn }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                      h &&
                        (0, k.jsx)(_, {
                          open: X,
                          onClose: function () {
                            return E("energyFlowInfo");
                          },
                        }),
                      h &&
                        (0, k.jsx)(S.Z, {
                          open: $,
                          onClose: function () {
                            return E("operationModeHelp");
                          },
                        }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(p.Component),
        P = (0, h.Z)(Z),
        D = f.ZP.div(
          i ||
            (i = (0, a.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n  }\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (n) {
            var e = n.mobile,
              t = n.bgfull;
            return (
              e &&
              !t &&
              "\n    min-height: calc(100vh - 56px);\n    background: #f7f7f9;\n    background-repeat: no-repeat;\n    background-size: auto;\n    background-position: top;\n    background-image: url(".concat(
                E.Z,
                ")\n  ",
              )
            );
          },
          function (n) {
            var e = n.mobile,
              t = n.bgfull;
            return (
              e &&
              t &&
              "\n    min-height: calc(100vh - 56px);\n    background: #007ac1;\n  "
            );
          },
        ),
        M = f.ZP.div(
          o ||
            (o = (0, a.default)([
              "\n  display: none;\n  max-width: 450px;\n  margin: 0 auto;\n\n  ",
              "\n\n  @keyframes show {\n    0% {\n      opacity: 0;\n    }\n    99% {\n      opacity: 1;\n    }\n    100% {\n      display: block !important;\n    }\n  }\n",
            ])),
          function (n) {
            return (
              n.visible && "\n    animation: show 1s;\n    display: block;\n  "
            );
          },
        ),
        O = f.ZP.h3(
          l ||
            (l = (0, a.default)([
              "\n  font-size: 16px;\n  color: #ffffff;\n  font-weight: 600;\n  line-height: 0;\n",
            ])),
        ),
        T = f.ZP.div(r || (r = (0, a.default)(["\n  margin-top: 56px;\n"])));
    },
  },
]);
//# sourceMappingURL=8219.389af89f.chunk.js.map
