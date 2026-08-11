"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [9559],
  {
    81139: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return P;
        },
      });
      var i,
        r,
        o,
        a,
        c = e(56824),
        s = e(30225),
        l = e(94404),
        u = e(14482),
        d = e(5189),
        f = e(76431),
        h = e(87121),
        p = e(2845),
        T = e(84628),
        x = e(98278),
        g = e.n(x),
        m = e(83749),
        b = e(49745),
        v = e(13795),
        C = e(49318),
        S = "".concat(v.CT, "/commcard/reboot"),
        _ = (0, T.Jg)({
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
              r = n.actions;
            return {
              successfullyRebooting: [
                !1,
                g().bool,
                ((t = {}),
                (0, p.Z)(t, r.setSuccessfullyRebooting, function (n, t) {
                  return t;
                }),
                (0, p.Z)(t, r.reset, function () {
                  return !1;
                }),
                t),
              ],
              rebootModal: [
                !1,
                g().bool,
                ((e = {}),
                (0, p.Z)(e, r.setRebootModal, function (n, t) {
                  return t;
                }),
                (0, p.Z)(e, r.setSuccessfullyRebooting, function () {
                  return !1;
                }),
                (0, p.Z)(e, r.reset, function () {
                  return !1;
                }),
                e),
              ],
              rebootStarted: [
                !1,
                g().bool,
                ((i = {}),
                (0, p.Z)(i, r.setSuccessfullyRebooting, function () {
                  return !0;
                }),
                (0, p.Z)(i, r.reset, function () {
                  return !1;
                }),
                i),
              ],
            };
          },
          stop: (0, h.Z)().mark(function n() {
            var t;
            return (0, h.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators.reset),
                        (n.next = 3),
                        (0, m.gz)(t())
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
            return (0, p.Z)({}, t.rebootUnit, e.rebootUnit);
          },
          workers: {
            rebootUnit: (0, h.Z)().mark(function n() {
              var t;
              return (0, h.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators.setSuccessfullyRebooting),
                          (n.prev = 1),
                          (n.next = 4),
                          (0, m.RE)(b.Z.post, S)
                        );
                      case 4:
                        return ((n.next = 6), (0, m.gz)(t(!0)));
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
        E = e(30588),
        k = e(48229),
        Z = e(93983),
        y = e(22247),
        I = e(31228),
        N = (function (n) {
          (0, u.default)(e, n);
          var t = (0, d.default)(e);
          function e() {
            var n;
            (0, s.default)(this, e);
            for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
              r[o] = arguments[o];
            return (
              ((n = t.call.apply(t, [this].concat(r))).navigate = function (t) {
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
                    r = t.translations,
                    o = t.rebootModal,
                    a = t.successfullyRebooting,
                    c = t.configs,
                    s = r.MAINTENANCE_TECH_PARAMS,
                    l = r.UNITSETT_SUPPORT_MONITORING,
                    u = r.UNITSETT_SUPPORT_DATETIMESYNC,
                    d = r.UNITSETT_SUPPORT_UNITLOG,
                    f = r.UNITSETT_SUPPORT_REBOOTUNIT_COMMCARD,
                    h = r.UNITSETT_SUPPORT_REBOOTUNIT_SUBMIT,
                    p = r.UNITSETT_SUPPORT_REBOOTUNIT_NOTE,
                    T = r.UNITSETT_SUPPORT_REBOOTUNIT_CONFIRMATION,
                    x = r.UNITSETT_SUPPORT_REBOOTUNIT_CANCEL,
                    g = r.UNITSETT_SUPPORT_SSH_STATUS,
                    m = r.UNITSETT_SUPPORT_HTTPS,
                    b = r.UNITSETT_SUPPORT_REBOOTUNIT_REBOOTSTARTED,
                    C = r.UNITSETT_SUPPORT_REBOOTUNIT_REBOOTSTARTED_DESC,
                    S = this.actions,
                    _ = S.setRebootModal,
                    E = S.rebootUnit,
                    N = c
                      ? [
                          {
                            id: "TechParams",
                            key: "tech-params",
                            icon: (0, I.jsx)(O, {
                              transformproperty: "rotate(180deg)",
                              children: "error_outline",
                            }),
                            title: s,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/techparams");
                            },
                            disabled: c && c.userType !== v.cC,
                          },
                          {
                            id: "DatetimeSync",
                            key: "datetime-sync",
                            icon: (0, I.jsx)(y.VE, {
                              fillColor: i ? "#007BC1" : "#FFFFFF",
                            }),
                            title: u,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/datetime-sync");
                            },
                            disabled: c && c.userType !== v.cC,
                          },
                          {
                            id: "Monitoring",
                            key: "monitoring",
                            icon: (0, I.jsx)(y.Q9, {
                              fillColor: i ? "#007BC1" : "#FFFFFF",
                            }),
                            title: l,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/monitoring");
                            },
                            disabled: c && c.userType !== v.cC,
                          },
                          {
                            id: "UnitLog",
                            key: "unit-log",
                            icon: (0, I.jsx)(y.oy, {
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
                            icon: (0, I.jsx)(y.CB, {
                              fillColor: i ? "#007BC1!important" : "#FFFFFF",
                            }),
                            title: g,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/ssh-connection");
                            },
                            disabled: c && c.userType !== v.cC,
                          },
                          {
                            id: "HTTPSTunnel",
                            key: "https-tunnel",
                            icon: (0, I.jsx)(k.Z, { children: "https" }),
                            title: m,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/https-tunnel");
                            },
                          },
                          {
                            id: "RebootUnit",
                            key: "reboot-unit",
                            icon: (0, I.jsx)(k.Z, {
                              children: "power_settings_new",
                            }),
                            title: f,
                            color: i ? "#CA3C3D" : "#EFC5C5",
                            onClick: function () {
                              return _(!0);
                            },
                          },
                        ]
                      : [],
                    P = Object.keys(r).filter(function (n) {
                      return /UNITSETT_SUPPORT_REBOOTUNIT_INFOPOINT(\d+)/.test(
                        n,
                      );
                    });
                  return (0, I.jsxs)(j, {
                    children: [
                      (0, I.jsx)(Z.Z, { items: N, page: e }),
                      a &&
                        (0, I.jsx)(y.mJ, {
                          icon: (0, I.jsx)(k.Z, { children: "report" }),
                          title: b,
                          text: (0, I.jsx)(M, { children: C }),
                          mobile: i,
                        }),
                      (0, I.jsx)(y.u_, {
                        open: o,
                        size: "large",
                        onClose: function () {
                          return _(!1);
                        },
                        children: (0, I.jsxs)("div", {
                          children: [
                            (0, I.jsx)(y.xB, { red: !0, title: f }),
                            (0, I.jsxs)(y.hz, {
                              padding: !0,
                              size: "large",
                              mobile: i,
                              children: [
                                (0, I.jsx)(U, { children: p }),
                                (0, I.jsx)(y.Gn, {
                                  children: P.map(function (n) {
                                    return (0, I.jsx)(
                                      y.E9,
                                      { children: r[n] },
                                      n,
                                    );
                                  }),
                                }),
                                (0, I.jsx)(y.ZT, {
                                  variant: "body1",
                                  children: T,
                                }),
                              ],
                            }),
                            (0, I.jsxs)(y.Zf, {
                              children: [
                                (0, I.jsx)(y.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    return _(!1);
                                  },
                                  children: x,
                                }),
                                (0, I.jsx)(y.zx, {
                                  id: "Button_Submit",
                                  buttonType: "primary-danger",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: E,
                                  children: h,
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
        P = _(N),
        j = E.ZP.div(i || (i = (0, c.default)([""]))),
        O = (0, E.ZP)(k.Z)(
          r || (r = (0, c.default)(["\n  transform: ", ";\n"])),
          function (n) {
            var t = n.transformproperty;
            return "".concat(t);
          },
        ),
        U = E.ZP.p(
          o ||
            (o = (0, c.default)([
              '\n  color: #424e54;\n  font-family: "Open Sans";\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: bold;\n  margin: 0;\n',
            ])),
        ),
        M = E.ZP.div(
          a ||
            (a = (0, c.default)([
              '\n  color: rgba(114, 126, 132, 1);\n  font-size: 14px;\n  line-height: 20px;\n  font-family: "Open Sans";\n  margin: 7px 0px;\n',
            ])),
        );
    },
    36082: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return E;
        },
      });
      var i,
        r,
        o,
        a = e(56824),
        c = e(30225),
        s = e(94404),
        l = e(14482),
        u = e(5189),
        d = e(76431),
        f = e(87121),
        h = e(2845),
        p = e(84628),
        T = e(83749),
        x = e(98278),
        g = e.n(x),
        m = e(49318),
        b = (0, p.Jg)({
          path: function () {
            return ["scenes", "containers", "PageAdaptable"];
          },
          connect: {
            props: [m.Z, ["isMobile", "translations"]],
            actions: [m.Z, ["push"]],
          },
          actions: function () {
            return {
              showConfirmationModal: function (n) {
                return { location: n };
              },
              hideConfirmationModal: function () {
                return !0;
              },
              handleConfirmNavigationClick: function () {
                return !0;
              },
            };
          },
          reducers: function (n) {
            var t,
              e = n.actions;
            return {
              confirmationModal: [
                !1,
                g().bool,
                ((t = {}),
                (0, h.Z)(t, e.showConfirmationModal, function () {
                  return !0;
                }),
                (0, h.Z)(t, e.hideConfirmationModal, function () {
                  return !1;
                }),
                t),
              ],
              nextLocation: [
                {},
                g().object,
                (0, h.Z)({}, e.showConfirmationModal, function (n, t) {
                  return t.location;
                }),
              ],
            };
          },
          stop: (0, f.Z)().mark(function n() {
            var t;
            return (0, f.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators.hideConfirmationModal),
                        (n.next = 3),
                        (0, T.gz)(t())
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
            return (0, h.Z)(
              {},
              t.handleConfirmNavigationClick,
              e.handleConfirmNavigationClick,
            );
          },
          workers: {
            handleConfirmNavigationClick: (0, f.Z)().mark(function n() {
              var t, e, i, r;
              return (0, f.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (e = t.hideConfirmationModal),
                          (i = t.push),
                          (n.next = 3),
                          this.get("nextLocation")
                        );
                      case 3:
                        return ((r = n.sent), (n.next = 6), (0, T.gz)(e()));
                      case 6:
                        return ((n.next = 8), (0, T.gz)(i(r)));
                      case 8:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this,
              );
            }),
          },
        }),
        v = e(30588),
        C = e(22247),
        S = e(31228),
        _ = (function (n) {
          (0, l.default)(e, n);
          var t = (0, u.default)(e);
          function e() {
            var n;
            (0, c.default)(this, e);
            for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
              r[o] = arguments[o];
            return (
              ((n = t.call.apply(t, [this].concat(r))).first = !0),
              (n.handleBlockedNavigation = function (t) {
                var e = n.props,
                  i = e.isForm,
                  r = e.isDirty,
                  o = n.actions.showConfirmationModal;
                return !(i && r && n.first) || ((n.first = !1), o(t), !1);
              }),
              n
            );
          }
          return (
            (0, s.default)(e, [
              {
                key: "componentDidMount",
                value: function () {
                  this.first = !0;
                },
              },
              {
                key: "render",
                value: function () {
                  var n = this,
                    t = this.props,
                    e = t.isMobile,
                    i = t.loading,
                    r = t.children,
                    o = t.menu,
                    a = t.onBack,
                    c = t.title,
                    s = t.translations,
                    l = t.confirmationModal,
                    u = t.isForm,
                    d = t.isDirty,
                    f = this.actions,
                    h = f.showConfirmationModal,
                    p = f.hideConfirmationModal,
                    T = f.handleConfirmNavigationClick,
                    x = s.GENERAL_CANCEL,
                    g = s.GENERAL_CONTINUE,
                    m = s.BACK_BUTTON_MODAL_TEXT,
                    b = s.BACK_BUTTON_MODAL_TITLE;
                  return (0, S.jsxs)(k, {
                    children: [
                      !!i && (0, S.jsx)(C.gb, {}),
                      e &&
                        (0, S.jsxs)("div", {
                          children: [
                            (0, S.jsx)(C.xE, {
                              id: "PageAdaptable_BackButton",
                              onClick: u && d ? h : a,
                            }),
                            r,
                          ],
                        }),
                      !e &&
                        (0, S.jsxs)("div", {
                          children: [
                            (0, S.jsx)(C.V1, { mobile: e, children: c }),
                            (0, S.jsx)(Z, { children: o }),
                            (0, S.jsx)(y, { children: r }),
                          ],
                        }),
                      (0, S.jsx)(C.u_, {
                        size: "small",
                        open: l,
                        children: (0, S.jsxs)("div", {
                          children: [
                            (0, S.jsx)(C.xB, { title: b }),
                            (0, S.jsx)(C.hz, {
                              padding: !0,
                              size: "small",
                              mobile: e,
                              children: (0, S.jsx)(C.ZT, { children: m }),
                            }),
                            (0, S.jsxs)(C.Zf, {
                              children: [
                                (0, S.jsx)(C.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    ((n.first = !0), p());
                                  },
                                  children: x,
                                }),
                                (0, S.jsx)(C.zx, {
                                  id: "Button_Continue",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function (n) {
                                    e ? (p(), a(n)) : T(n);
                                  },
                                  children: g,
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
        })(d.Component),
        E = b(_),
        k = v.ZP.div(
          i ||
            (i = (0, a.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n    padding-right: 0px;\n  }\n",
            ])),
        ),
        Z = v.ZP.div(
          r ||
            (r = (0, a.default)([
              "\n  width: 40%;\n  padding-right: 5%;\n  float: left;\n  position: relative;\n  color: #fff;\n  margin-top: 25px;\n",
            ])),
        ),
        y = v.ZP.div(
          o ||
            (o = (0, a.default)([
              "\n  width: 60%;\n  float: left;\n  padding-right: 0;\n",
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
        r,
        o,
        a,
        c = e(56824),
        s = e(30225),
        l = e(94404),
        u = e(14482),
        d = e(5189),
        f = e(76431),
        h = e(84628),
        p = e(49318),
        T = (0, h.Jg)({
          connect: { props: [p.Z, ["isMobile", "translations"]] },
        }),
        x = e(30588),
        g = e(22247),
        m = e(31228),
        b = (function (n) {
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
                    r = n.margin,
                    o = (0, m.jsxs)("div", {
                      children: [(0, m.jsx)(_, {}), (0, m.jsx)(E, {})],
                    });
                  return (0, m.jsx)(C, {
                    margin: r,
                    children:
                      i &&
                      i.map(function (n) {
                        var i = n.key,
                          r = n.icon,
                          a = n.title,
                          c = n.onClick,
                          s = n.disabled,
                          l = n.link,
                          u = n.color,
                          d = n.hidden,
                          f = n.notifications,
                          h = n.id;
                        return d
                          ? ""
                          : (0, m.jsxs)(
                              S,
                              {
                                active: t === i,
                                mobile: e,
                                color: u ? u + "!important" : void 0,
                                link: l,
                                children: [
                                  (0, m.jsx)(g.Lr, {
                                    id: h,
                                    icon: r,
                                    mobile: e,
                                    title: a,
                                    onClick: c,
                                    link: l,
                                    disabled: s,
                                    notifications: f,
                                  }),
                                  t === i && o,
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
        v = T(b),
        C = x.ZP.div(
          i || (i = (0, c.default)(["\n  margin: ", ";\n"])),
          function (n) {
            return n.margin;
          },
        ),
        S = x.ZP.div(
          r ||
            (r = (0, c.default)([
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
        _ = x.ZP.div(
          o ||
            (o = (0, c.default)([
              "\n  position: absolute;\n  height: 56px;\n  width: 100%;\n  background-color: #007bc1;\n  z-index: 2;\n  top: 0;\n  left: 0;\n",
            ])),
        ),
        E = x.ZP.div(
          a ||
            (a = (0, c.default)([
              "\n  position: absolute;\n  height: 10px;\n  width: calc(100% - 48px);\n  opacity: 0.4;\n  background-color: #0067c6;\n  box-shadow: 0 0 20px 0 #424e54;\n  bottom: 0;\n  right: 24px;\n  z-index: 1;\n",
            ])),
        );
    },
    49559: function (n, t, e) {
      (e.r(t),
        e.d(t, {
          MaintenanceDatetimeSync: function () {
            return U;
          },
          default: function () {
            return M;
          },
        }));
      var i,
        r,
        o,
        a,
        c = e(56824),
        s = e(30225),
        l = e(94404),
        u = e(14482),
        d = e(5189),
        f = e(76431),
        h = e(87121),
        p = e(2845),
        T = e(84628),
        x = e(83749),
        g = e(98278),
        m = e.n(g),
        b = e(49745),
        v = e(49318),
        C = e(90012),
        S = e(13795),
        _ = "".concat(S.CT, "/device/maintenance/date-time"),
        E = (0, T.Jg)({
          path: function () {
            return ["scenes", "MaintenanceDatetimeSync"];
          },
          connect: {
            props: [v.Z, ["translations", "isMobile"]],
            actions: [v.Z, ["push"]],
          },
          actions: function () {
            return {
              getDatetimeInfo: function () {
                return !0;
              },
              setDatetimeInfo: function (n) {
                return n;
              },
              forcesync: function () {
                return !0;
              },
              setSyncInProgress: function (n) {
                return n;
              },
              setLoading: function (n) {
                return n;
              },
              reset: function () {
                return !0;
              },
            };
          },
          reducers: function (n) {
            var t,
              e,
              i,
              r = n.actions;
            return {
              datetimeValues: [
                {},
                m().object,
                ((t = {}),
                (0, p.Z)(t, r.setDatetimeInfo, function (n, t) {
                  return t;
                }),
                (0, p.Z)(t, r.reset, function () {
                  return {};
                }),
                t),
              ],
              syncInProgress: [
                !1,
                m().bool,
                ((e = {}),
                (0, p.Z)(e, r.setSyncInProgress, function (n, t) {
                  return t;
                }),
                (0, p.Z)(e, r.reset, function () {
                  return !1;
                }),
                e),
              ],
              loading: [
                !1,
                m().bool,
                ((i = {}),
                (0, p.Z)(i, r.setLoading, function (n, t) {
                  return t;
                }),
                (0, p.Z)(i, r.reset, function () {
                  return !1;
                }),
                i),
              ],
            };
          },
          start: (0, h.Z)().mark(function n() {
            var t;
            return (0, h.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (0, C.log)("[XS-DATETIMESYNC] Start Scene", "yellow"),
                        (t = this.actionCreators.getDatetimeInfo),
                        (n.next = 4),
                        (0, x.gz)(t())
                      );
                    case 4:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this,
            );
          }),
          takeLatest: function (n) {
            var t,
              e = n.actions,
              i = n.workers;
            return (
              (t = {}),
              (0, p.Z)(t, e.getDatetimeInfo, i.getDatetimeInfo),
              (0, p.Z)(t, e.forcesync, i.forcesync),
              t
            );
          },
          workers: {
            getDatetimeInfo: (0, h.Z)().mark(function n() {
              var t, e, i, r, o;
              return (0, h.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (e = t.setDatetimeInfo),
                          (i = t.setLoading),
                          (n.next = 3),
                          (0, x.gz)(i(!0))
                        );
                      case 3:
                        return (
                          (n.prev = 3),
                          (n.next = 6),
                          (0, x.RE)(b.Z.get, _)
                        );
                      case 6:
                        return (
                          (r = n.sent),
                          (o = r.data.result),
                          (n.next = 10),
                          (0, x.gz)(e(o || {}))
                        );
                      case 10:
                        return ((n.next = 12), (0, x.gz)(i(!1)));
                      case 12:
                        n.next = 19;
                        break;
                      case 14:
                        return (
                          (n.prev = 14),
                          (n.t0 = n.catch(3)),
                          console.log(n.t0),
                          (n.next = 19),
                          (0, x.gz)(i(!1))
                        );
                      case 19:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this,
                [[3, 14]],
              );
            }),
            forcesync: (0, h.Z)().mark(function n() {
              var t, e, i, r, o;
              return (0, h.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (e = t.setSyncInProgress),
                          (i = t.setDatetimeInfo),
                          (n.next = 3),
                          (0, x.gz)(e(!0))
                        );
                      case 3:
                        return (
                          (n.prev = 3),
                          (n.next = 6),
                          (0, x.RE)(b.Z.post, _)
                        );
                      case 6:
                        return (
                          (r = n.sent),
                          (o = r.data.result),
                          (n.next = 10),
                          (0, x.gz)(e(!1))
                        );
                      case 10:
                        return ((n.next = 12), (0, x.gz)(i(o || {})));
                      case 12:
                        n.next = 19;
                        break;
                      case 14:
                        return (
                          (n.prev = 14),
                          (n.t0 = n.catch(3)),
                          console.log(n.t0),
                          (n.next = 19),
                          (0, x.gz)(e(!1))
                        );
                      case 19:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this,
                [[3, 14]],
              );
            }),
          },
        }),
        k = e(30588),
        Z = e(94467),
        y = e.n(Z),
        I = e(36082),
        N = e(81139),
        P = e(48229),
        j = e(22247),
        O = e(31228),
        U = (function (n) {
          (0, u.default)(e, n);
          var t = (0, d.default)(e);
          function e() {
            var n;
            (0, s.default)(this, e);
            for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
              r[o] = arguments[o];
            return (
              ((n = t.call.apply(t, [this].concat(r))).navigate = function (t) {
                var e = n.actions.push;
                (console.log("pushing to path: " + t), e(t));
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
                    e = t.translations,
                    i = t.isMobile,
                    r = t.datetimeValues,
                    o = t.syncInProgress,
                    a = t.loading,
                    c = this.actions.forcesync,
                    s = e.MAINTENANCE_TITLE,
                    l = e.UNITSETT_SUPPORT_DATETIMESYNC,
                    u = e.UNITSETT_SUPPORT_DATETIMESYNC_FORCESYNC,
                    d = e.UNITSETT_SUPPORT_DATETIMESYNC_UNIT_DATETIME,
                    f = e.UNITSETT_SUPPORT_DATETIMESYNC_TIMEZONE,
                    h = e.UNITSETT_SUPPORT_DATETIMESYNC_SYNCMETHOD,
                    p = e.UNITSETT_SUPPORT_DATETIMESYNC_SYNCINPROGRESS;
                  return (0, O.jsx)(R, {
                    children: (0, O.jsx)(I.Z, {
                      title: s,
                      menu: (0, O.jsx)(N.Z, { page: "datetime-sync" }),
                      isForm: !1,
                      onBack: function () {
                        return n.navigate("/maintenance/");
                      },
                      loading: a,
                      children: (0, O.jsxs)(j.e0, {
                        padding: !0,
                        mobile: i,
                        children: [
                          (0, O.jsx)(j.V1, { mobile: i, children: l }),
                          (0, O.jsx)(j.fX, {
                            id: "LabelValueInline_Datetime",
                            label: d,
                            value:
                              y()(r.time).format("DD/MM/YYYY HH:mm:ss") || "--",
                          }),
                          (0, O.jsx)(j.fX, {
                            id: "LabelValueInline_Timezone",
                            label: f,
                            value: r.timezone || "--",
                          }),
                          (0, O.jsx)(j.fX, {
                            id: "LabelValueInline_SyncMethod",
                            label: h,
                            value:
                              e[
                                "UNITSETT_SUPPORT_DATETIMESYNC_".concat(r.sync)
                              ] || "--",
                          }),
                          o &&
                            (0, O.jsxs)(F, {
                              children: [
                                (0, O.jsx)(P.Z, { children: "check" }),
                                (0, O.jsx)(D, { children: p }),
                              ],
                            }),
                          !o &&
                            (0, O.jsx)(w, {
                              isMobile: i,
                              children: (0, O.jsxs)(j.zx, {
                                id: "PrimaryButton_ForceSync",
                                buttonWidth: "260px",
                                margin: "42px 0",
                                smallShadow: !0,
                                onClick: c,
                                children: [
                                  (0, O.jsx)(P.Z, { children: "autorenew" }),
                                  " ",
                                  u,
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
            e
          );
        })(f.Component),
        M = E(U),
        R = k.ZP.div(i || (i = (0, c.default)(["\n  position: relative;\n"]))),
        w = k.ZP.div(
          r ||
            (r = (0, c.default)([
              "\n  position: absolute;\n  z-index: 10;\n\n  ",
              "\n",
            ])),
          function (n) {
            return (
              n.isMobile &&
              "\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    left: 0;\n  "
            );
          },
        ),
        F = k.ZP.div(
          o ||
            (o = (0, c.default)([
              "\n  display: inline-flex;\n  align-items: center;\n\n  span.material-icons {\n    color: #00b2a9;\n    margin-right: 8px;\n  }\n",
            ])),
        ),
        D = k.ZP.span(
          a ||
            (a = (0, c.default)([
              "\n  color: #727e84;\n  font-family: 'Open Sans';\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 12px;\n",
            ])),
        );
    },
  },
]);
//# sourceMappingURL=9559.cd09a2f1.chunk.js.map
