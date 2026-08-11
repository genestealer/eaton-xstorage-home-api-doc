"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [8695],
  {
    81139: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return P;
        },
      });
      var i,
        o,
        r,
        c,
        a = e(56824),
        s = e(30225),
        l = e(94404),
        u = e(14482),
        d = e(5189),
        f = e(76431),
        p = e(87121),
        T = e(2845),
        h = e(84628),
        b = e(98278),
        x = e.n(b),
        g = e(83749),
        m = e(49745),
        v = e(13795),
        C = e(49318),
        k = "".concat(v.CT, "/commcard/reboot"),
        S = (0, h.Jg)({
          path: function () {
            return ["scenes", "containers", "MaintenanceMenu"];
          },
          connect: {
            props: [C.Z, ["isMobile", "translations", "configs"]],
            actions: [C.Z, ["push"]],
          },
          actions: function () {
            return {
              setSuccessfullyRebooting: function (n) {
                return n;
              },
              rebootUnit: function () {
                return !0;
              },
              reset: function () {
                return !0;
              },
              setRebootModal: function (n) {
                return n;
              },
            };
          },
          reducers: function (n) {
            var t,
              e,
              i,
              o = n.actions;
            return {
              successfullyRebooting: [
                !1,
                x().bool,
                ((t = {}),
                (0, T.Z)(t, o.setSuccessfullyRebooting, function (n, t) {
                  return t;
                }),
                (0, T.Z)(t, o.reset, function () {
                  return !1;
                }),
                t),
              ],
              rebootModal: [
                !1,
                x().bool,
                ((e = {}),
                (0, T.Z)(e, o.setRebootModal, function (n, t) {
                  return t;
                }),
                (0, T.Z)(e, o.setSuccessfullyRebooting, function () {
                  return !1;
                }),
                (0, T.Z)(e, o.reset, function () {
                  return !1;
                }),
                e),
              ],
              rebootStarted: [
                !1,
                x().bool,
                ((i = {}),
                (0, T.Z)(i, o.setSuccessfullyRebooting, function () {
                  return !0;
                }),
                (0, T.Z)(i, o.reset, function () {
                  return !1;
                }),
                i),
              ],
            };
          },
          stop: (0, p.Z)().mark(function n() {
            var t;
            return (0, p.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators.reset),
                        (n.next = 3),
                        (0, g.gz)(t())
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
            var t = n.actions,
              e = n.workers;
            return (0, T.Z)({}, t.rebootUnit, e.rebootUnit);
          },
          workers: {
            rebootUnit: (0, p.Z)().mark(function n() {
              var t;
              return (0, p.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators.setSuccessfullyRebooting),
                          (n.prev = 1),
                          (n.next = 4),
                          (0, g.RE)(m.Z.post, k)
                        );
                      case 4:
                        return ((n.next = 6), (0, g.gz)(t(!0)));
                      case 6:
                        n.next = 11;
                        break;
                      case 8:
                        ((n.prev = 8), (n.t0 = n.catch(1)), console.log(n.t0));
                      case 11:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this,
                [[1, 8]],
              );
            }),
          },
        }),
        _ = e(30588),
        O = e(48229),
        U = e(93983),
        y = e(22247),
        E = e(31228),
        R = (function (n) {
          (0, u.default)(e, n);
          var t = (0, d.default)(e);
          function e() {
            var n;
            (0, s.default)(this, e);
            for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++)
              o[r] = arguments[r];
            return (
              ((n = t.call.apply(t, [this].concat(o))).navigate = function (t) {
                (0, n.actions.push)(t);
              }),
              n
            );
          }
          return (
            (0, l.default)(e, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    t = this.props,
                    e = t.page,
                    i = t.isMobile,
                    o = t.translations,
                    r = t.rebootModal,
                    c = t.successfullyRebooting,
                    a = t.configs,
                    s = o.MAINTENANCE_TECH_PARAMS,
                    l = o.UNITSETT_SUPPORT_MONITORING,
                    u = o.UNITSETT_SUPPORT_DATETIMESYNC,
                    d = o.UNITSETT_SUPPORT_UNITLOG,
                    f = o.UNITSETT_SUPPORT_REBOOTUNIT_COMMCARD,
                    p = o.UNITSETT_SUPPORT_REBOOTUNIT_SUBMIT,
                    T = o.UNITSETT_SUPPORT_REBOOTUNIT_NOTE,
                    h = o.UNITSETT_SUPPORT_REBOOTUNIT_CONFIRMATION,
                    b = o.UNITSETT_SUPPORT_REBOOTUNIT_CANCEL,
                    x = o.UNITSETT_SUPPORT_SSH_STATUS,
                    g = o.UNITSETT_SUPPORT_HTTPS,
                    m = o.UNITSETT_SUPPORT_REBOOTUNIT_REBOOTSTARTED,
                    C = o.UNITSETT_SUPPORT_REBOOTUNIT_REBOOTSTARTED_DESC,
                    k = this.actions,
                    S = k.setRebootModal,
                    _ = k.rebootUnit,
                    R = a
                      ? [
                          {
                            id: "TechParams",
                            key: "tech-params",
                            icon: (0, E.jsx)(Z, {
                              transformproperty: "rotate(180deg)",
                              children: "error_outline",
                            }),
                            title: s,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/techparams");
                            },
                            disabled: a && a.userType !== v.cC,
                          },
                          {
                            id: "DatetimeSync",
                            key: "datetime-sync",
                            icon: (0, E.jsx)(y.VE, {
                              fillColor: i ? "#007BC1" : "#FFFFFF",
                            }),
                            title: u,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/datetime-sync");
                            },
                            disabled: a && a.userType !== v.cC,
                          },
                          {
                            id: "Monitoring",
                            key: "monitoring",
                            icon: (0, E.jsx)(y.Q9, {
                              fillColor: i ? "#007BC1" : "#FFFFFF",
                            }),
                            title: l,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/monitoring");
                            },
                            disabled: a && a.userType !== v.cC,
                          },
                          {
                            id: "UnitLog",
                            key: "unit-log",
                            icon: (0, E.jsx)(y.oy, {
                              fillColor: i ? "#007BC1" : "#FFFFFF",
                            }),
                            title: d,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/unit-log");
                            },
                          },
                          {
                            id: "SSHConnection",
                            key: "ssh-connection",
                            icon: (0, E.jsx)(y.CB, {
                              fillColor: i ? "#007BC1!important" : "#FFFFFF",
                            }),
                            title: x,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/ssh-connection");
                            },
                            disabled: a && a.userType !== v.cC,
                          },
                          {
                            id: "HTTPSTunnel",
                            key: "https-tunnel",
                            icon: (0, E.jsx)(O.Z, { children: "https" }),
                            title: g,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/https-tunnel");
                            },
                          },
                          {
                            id: "RebootUnit",
                            key: "reboot-unit",
                            icon: (0, E.jsx)(O.Z, {
                              children: "power_settings_new",
                            }),
                            title: f,
                            color: i ? "#CA3C3D" : "#EFC5C5",
                            onClick: function () {
                              return S(!0);
                            },
                          },
                        ]
                      : [],
                    P = Object.keys(o).filter(function (n) {
                      return /UNITSETT_SUPPORT_REBOOTUNIT_INFOPOINT(\d+)/.test(
                        n,
                      );
                    });
                  return (0, E.jsxs)(N, {
                    children: [
                      (0, E.jsx)(U.Z, { items: R, page: e }),
                      c &&
                        (0, E.jsx)(y.mJ, {
                          icon: (0, E.jsx)(O.Z, { children: "report" }),
                          title: m,
                          text: (0, E.jsx)(F, { children: C }),
                          mobile: i,
                        }),
                      (0, E.jsx)(y.u_, {
                        open: r,
                        size: "large",
                        onClose: function () {
                          return S(!1);
                        },
                        children: (0, E.jsxs)("div", {
                          children: [
                            (0, E.jsx)(y.xB, { red: !0, title: f }),
                            (0, E.jsxs)(y.hz, {
                              padding: !0,
                              size: "large",
                              mobile: i,
                              children: [
                                (0, E.jsx)(j, { children: T }),
                                (0, E.jsx)(y.Gn, {
                                  children: P.map(function (n) {
                                    return (0, E.jsx)(
                                      y.E9,
                                      { children: o[n] },
                                      n,
                                    );
                                  }),
                                }),
                                (0, E.jsx)(y.ZT, {
                                  variant: "body1",
                                  children: h,
                                }),
                              ],
                            }),
                            (0, E.jsxs)(y.Zf, {
                              children: [
                                (0, E.jsx)(y.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    return S(!1);
                                  },
                                  children: b,
                                }),
                                (0, E.jsx)(y.zx, {
                                  id: "Button_Submit",
                                  buttonType: "primary-danger",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: _,
                                  children: p,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            e
          );
        })(f.Component),
        P = S(R),
        N = _.ZP.div(i || (i = (0, a.default)([""]))),
        Z = (0, _.ZP)(O.Z)(
          o || (o = (0, a.default)(["\n  transform: ", ";\n"])),
          function (n) {
            var t = n.transformproperty;
            return "".concat(t);
          },
        ),
        j = _.ZP.p(
          r ||
            (r = (0, a.default)([
              '\n  color: #424e54;\n  font-family: "Open Sans";\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: bold;\n  margin: 0;\n',
            ])),
        ),
        F = _.ZP.div(
          c ||
            (c = (0, a.default)([
              '\n  color: rgba(114, 126, 132, 1);\n  font-size: 14px;\n  line-height: 20px;\n  font-family: "Open Sans";\n  margin: 7px 0px;\n',
            ])),
        );
    },
    93983: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return v;
        },
      });
      var i,
        o,
        r,
        c,
        a = e(56824),
        s = e(30225),
        l = e(94404),
        u = e(14482),
        d = e(5189),
        f = e(76431),
        p = e(84628),
        T = e(49318),
        h = (0, p.Jg)({
          connect: { props: [T.Z, ["isMobile", "translations"]] },
        }),
        b = e(30588),
        x = e(22247),
        g = e(31228),
        m = (function (n) {
          (0, u.default)(e, n);
          var t = (0, d.default)(e);
          function e() {
            return ((0, s.default)(this, e), t.apply(this, arguments));
          }
          return (
            (0, l.default)(e, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    t = n.page,
                    e = n.isMobile,
                    i = n.items,
                    o = n.margin,
                    r = (0, g.jsxs)("div", {
                      children: [(0, g.jsx)(S, {}), (0, g.jsx)(_, {})],
                    });
                  return (0, g.jsx)(C, {
                    margin: o,
                    children:
                      i &&
                      i.map(function (n) {
                        var i = n.key,
                          o = n.icon,
                          c = n.title,
                          a = n.onClick,
                          s = n.disabled,
                          l = n.link,
                          u = n.color,
                          d = n.hidden,
                          f = n.notifications,
                          p = n.id;
                        return d
                          ? ""
                          : (0, g.jsxs)(
                              k,
                              {
                                active: t === i,
                                mobile: e,
                                color: u ? u + "!important" : void 0,
                                link: l,
                                children: [
                                  (0, g.jsx)(x.Lr, {
                                    id: p,
                                    icon: o,
                                    mobile: e,
                                    title: c,
                                    onClick: a,
                                    link: l,
                                    disabled: s,
                                    notifications: f,
                                  }),
                                  t === i && r,
                                ],
                              },
                              i,
                            );
                      }),
                  });
                },
              },
            ]),
            e
          );
        })(f.PureComponent),
        v = h(m),
        C = b.ZP.div(
          i || (i = (0, a.default)(["\n  margin: ", ";\n"])),
          function (n) {
            return n.margin;
          },
        ),
        k = b.ZP.div(
          o ||
            (o = (0, a.default)([
              "\n  position: relative;\n  height: 56px;\n  width: 100%;\n  cursor: pointer;\n\n  span.material-icons {\n    color: ",
              ";\n  }\n  \n  ",
              "\n\n  ",
              "\n\n  ",
              "\n\n",
              "\n",
            ])),
          function (n) {
            return n.color || "#007BC1";
          },
          function (n) {
            return (
              !n.mobile &&
              "\n    * {\n      color: "
                .concat(
                  n.color || "#FFF!important",
                  ";\n    }\n\n    span.material-icons {\n      color: ",
                )
                .concat(
                  n.color || "#FFF",
                  ";\n    }\n\n    > div:nth-child(1) {\n      padding-left: 10px;\n      z-index: 3;\n      position: absolute;\n      width: 100%;    \n      box-shadow: inset 0 -1px 0 0 rgba(253,253,253,0.1), 0 0 5px 0 rgba(81,141,197,0.1);\n      transition: background-color 0.1s ease-in-out;\n    }\n  ",
                )
            );
          },
          function (n) {
            return (
              n.mobile &&
              "\n    * {\n      color: ".concat(
                n.color || "#424E54",
                ";\n    }\n\n    > div:before {\n      content: '';      \n      position: absolute;\n      width: calc(100% + 16px);\n      height: 56px;\n      box-shadow: inset 0 -1px 0 0 rgba(114,126,132,0.1);\n    }\n  ",
              )
            );
          },
          function (n) {
            return (
              n.active &&
              !n.mobile &&
              "\n    > div:nth-child(1) {\n      position: relative;\n      background-color: #007BC1;\n      background: linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);\n      box-shadow: inset 0 -1px 0 0 rgba(253,253,253,0.1), 0 0 5px 0 rgba(81,141,197,0.1);\n    }\n  "
            );
          },
          function (n) {
            return (
              !n.active &&
              !n.mobile &&
              n.link &&
              "\n  &:hover > div:nth-child(1) {\n    background-color: #0074b8;\n  }\n"
            );
          },
        ),
        S = b.ZP.div(
          r ||
            (r = (0, a.default)([
              "\n  position: absolute;\n  height: 56px;\n  width: 100%;\n  background-color: #007bc1;\n  z-index: 2;\n  top: 0;\n  left: 0;\n",
            ])),
        ),
        _ = b.ZP.div(
          c ||
            (c = (0, a.default)([
              "\n  position: absolute;\n  height: 10px;\n  width: calc(100% - 48px);\n  opacity: 0.4;\n  background-color: #0067c6;\n  box-shadow: 0 0 20px 0 #424e54;\n  bottom: 0;\n  right: 24px;\n  z-index: 1;\n",
            ])),
        );
    },
    28695: function (n, t, e) {
      (e.r(t),
        e.d(t, {
          default: function () {
            return g;
          },
        }));
      var i,
        o = e(56824),
        r = e(30225),
        c = e(94404),
        a = e(14482),
        s = e(5189),
        l = e(76431),
        u = e(84628),
        d = e(49318),
        f = (0, u.Jg)({
          path: function () {
            return ["scenes", "MaintenanceMenuMobile"];
          },
          connect: {
            props: [d.Z, ["isMobile", "translations"]],
            actions: [d.Z, ["push"]],
          },
        }),
        p = e(30588),
        T = e(22247),
        h = e(81139),
        b = e(31228),
        x = (function (n) {
          (0, a.default)(e, n);
          var t = (0, s.default)(e);
          function e() {
            var n;
            (0, r.default)(this, e);
            for (var i = arguments.length, o = new Array(i), c = 0; c < i; c++)
              o[c] = arguments[c];
            return (
              ((n = t.call.apply(t, [this].concat(o))).navigate = function (t) {
                (0, n.actions.push)(t);
              }),
              n
            );
          }
          return (
            (0, c.default)(e, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    t = this.props,
                    e = t.isMobile,
                    i = t.translations.MORE_MAINTENANCE;
                  return (0, b.jsxs)(m, {
                    children: [
                      (0, b.jsx)(T.xE, {
                        id: "BackButton",
                        onClick: function () {
                          return n.navigate("/more/");
                        },
                      }),
                      (0, b.jsx)(T.V1, { mobile: e, blue: !0, children: i }),
                      (0, b.jsx)(h.Z, {}),
                    ],
                  });
                },
              },
            ]),
            e
          );
        })(l.Component),
        g = f(x),
        m = p.ZP.div(
          i ||
            (i = (0, o.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n  padding-bottom: 56px;\n",
            ])),
        );
    },
  },
]);
//# sourceMappingURL=8695.339a80df.chunk.js.map
