"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [8830],
  {
    81139: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return y;
        },
      });
      var i,
        o,
        r,
        a,
        s = e(56824),
        c = e(30225),
        l = e(94404),
        u = e(14482),
        d = e(5189),
        f = e(76431),
        h = e(87121),
        p = e(2845),
        x = e(84628),
        T = e(98278),
        g = e.n(T),
        S = e(83749),
        b = e(49745),
        m = e(13795),
        v = e(49318),
        C = "".concat(m.CT, "/commcard/reboot"),
        _ = (0, x.Jg)({
          path: function () {
            return ["scenes", "containers", "MaintenanceMenu"];
          },
          connect: {
            props: [v.Z, ["isMobile", "translations", "configs"]],
            actions: [v.Z, ["push"]],
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
                g().bool,
                ((t = {}),
                (0, p.Z)(t, o.setSuccessfullyRebooting, function (n, t) {
                  return t;
                }),
                (0, p.Z)(t, o.reset, function () {
                  return !1;
                }),
                t),
              ],
              rebootModal: [
                !1,
                g().bool,
                ((e = {}),
                (0, p.Z)(e, o.setRebootModal, function (n, t) {
                  return t;
                }),
                (0, p.Z)(e, o.setSuccessfullyRebooting, function () {
                  return !1;
                }),
                (0, p.Z)(e, o.reset, function () {
                  return !1;
                }),
                e),
              ],
              rebootStarted: [
                !1,
                g().bool,
                ((i = {}),
                (0, p.Z)(i, o.setSuccessfullyRebooting, function () {
                  return !0;
                }),
                (0, p.Z)(i, o.reset, function () {
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
                        (0, S.gz)(t())
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
                          (0, S.RE)(b.Z.post, C)
                        );
                      case 4:
                        return ((n.next = 6), (0, S.gz)(t(!0)));
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
        k = e(30588),
        E = e(48229),
        Z = e(93983),
        U = e(22247),
        P = e(31228),
        O = (function (n) {
          (0, u.default)(e, n);
          var t = (0, d.default)(e);
          function e() {
            var n;
            (0, c.default)(this, e);
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
                    a = t.successfullyRebooting,
                    s = t.configs,
                    c = o.MAINTENANCE_TECH_PARAMS,
                    l = o.UNITSETT_SUPPORT_MONITORING,
                    u = o.UNITSETT_SUPPORT_DATETIMESYNC,
                    d = o.UNITSETT_SUPPORT_UNITLOG,
                    f = o.UNITSETT_SUPPORT_REBOOTUNIT_COMMCARD,
                    h = o.UNITSETT_SUPPORT_REBOOTUNIT_SUBMIT,
                    p = o.UNITSETT_SUPPORT_REBOOTUNIT_NOTE,
                    x = o.UNITSETT_SUPPORT_REBOOTUNIT_CONFIRMATION,
                    T = o.UNITSETT_SUPPORT_REBOOTUNIT_CANCEL,
                    g = o.UNITSETT_SUPPORT_SSH_STATUS,
                    S = o.UNITSETT_SUPPORT_HTTPS,
                    b = o.UNITSETT_SUPPORT_REBOOTUNIT_REBOOTSTARTED,
                    v = o.UNITSETT_SUPPORT_REBOOTUNIT_REBOOTSTARTED_DESC,
                    C = this.actions,
                    _ = C.setRebootModal,
                    k = C.rebootUnit,
                    O = s
                      ? [
                          {
                            id: "TechParams",
                            key: "tech-params",
                            icon: (0, P.jsx)(j, {
                              transformproperty: "rotate(180deg)",
                              children: "error_outline",
                            }),
                            title: c,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/techparams");
                            },
                            disabled: s && s.userType !== m.cC,
                          },
                          {
                            id: "DatetimeSync",
                            key: "datetime-sync",
                            icon: (0, P.jsx)(U.VE, {
                              fillColor: i ? "#007BC1" : "#FFFFFF",
                            }),
                            title: u,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/datetime-sync");
                            },
                            disabled: s && s.userType !== m.cC,
                          },
                          {
                            id: "Monitoring",
                            key: "monitoring",
                            icon: (0, P.jsx)(U.Q9, {
                              fillColor: i ? "#007BC1" : "#FFFFFF",
                            }),
                            title: l,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/monitoring");
                            },
                            disabled: s && s.userType !== m.cC,
                          },
                          {
                            id: "UnitLog",
                            key: "unit-log",
                            icon: (0, P.jsx)(U.oy, {
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
                            icon: (0, P.jsx)(U.CB, {
                              fillColor: i ? "#007BC1!important" : "#FFFFFF",
                            }),
                            title: g,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/ssh-connection");
                            },
                            disabled: s && s.userType !== m.cC,
                          },
                          {
                            id: "HTTPSTunnel",
                            key: "https-tunnel",
                            icon: (0, P.jsx)(E.Z, { children: "https" }),
                            title: S,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/https-tunnel");
                            },
                          },
                          {
                            id: "RebootUnit",
                            key: "reboot-unit",
                            icon: (0, P.jsx)(E.Z, {
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
                    y = Object.keys(o).filter(function (n) {
                      return /UNITSETT_SUPPORT_REBOOTUNIT_INFOPOINT(\d+)/.test(
                        n,
                      );
                    });
                  return (0, P.jsxs)(N, {
                    children: [
                      (0, P.jsx)(Z.Z, { items: O, page: e }),
                      a &&
                        (0, P.jsx)(U.mJ, {
                          icon: (0, P.jsx)(E.Z, { children: "report" }),
                          title: b,
                          text: (0, P.jsx)(R, { children: v }),
                          mobile: i,
                        }),
                      (0, P.jsx)(U.u_, {
                        open: r,
                        size: "large",
                        onClose: function () {
                          return _(!1);
                        },
                        children: (0, P.jsxs)("div", {
                          children: [
                            (0, P.jsx)(U.xB, { red: !0, title: f }),
                            (0, P.jsxs)(U.hz, {
                              padding: !0,
                              size: "large",
                              mobile: i,
                              children: [
                                (0, P.jsx)(w, { children: p }),
                                (0, P.jsx)(U.Gn, {
                                  children: y.map(function (n) {
                                    return (0, P.jsx)(
                                      U.E9,
                                      { children: o[n] },
                                      n,
                                    );
                                  }),
                                }),
                                (0, P.jsx)(U.ZT, {
                                  variant: "body1",
                                  children: x,
                                }),
                              ],
                            }),
                            (0, P.jsxs)(U.Zf, {
                              children: [
                                (0, P.jsx)(U.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    return _(!1);
                                  },
                                  children: T,
                                }),
                                (0, P.jsx)(U.zx, {
                                  id: "Button_Submit",
                                  buttonType: "primary-danger",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: k,
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
        y = _(O),
        N = k.ZP.div(i || (i = (0, s.default)([""]))),
        j = (0, k.ZP)(E.Z)(
          o || (o = (0, s.default)(["\n  transform: ", ";\n"])),
          function (n) {
            var t = n.transformproperty;
            return "".concat(t);
          },
        ),
        w = k.ZP.p(
          r ||
            (r = (0, s.default)([
              '\n  color: #424e54;\n  font-family: "Open Sans";\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: bold;\n  margin: 0;\n',
            ])),
        ),
        R = k.ZP.div(
          a ||
            (a = (0, s.default)([
              '\n  color: rgba(114, 126, 132, 1);\n  font-size: 14px;\n  line-height: 20px;\n  font-family: "Open Sans";\n  margin: 7px 0px;\n',
            ])),
        );
    },
    36082: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return k;
        },
      });
      var i,
        o,
        r,
        a = e(56824),
        s = e(30225),
        c = e(94404),
        l = e(14482),
        u = e(5189),
        d = e(76431),
        f = e(87121),
        h = e(2845),
        p = e(84628),
        x = e(83749),
        T = e(98278),
        g = e.n(T),
        S = e(49318),
        b = (0, p.Jg)({
          path: function () {
            return ["scenes", "containers", "PageAdaptable"];
          },
          connect: {
            props: [S.Z, ["isMobile", "translations"]],
            actions: [S.Z, ["push"]],
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
                        (0, x.gz)(t())
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
              var t, e, i, o;
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
                        return ((o = n.sent), (n.next = 6), (0, x.gz)(e()));
                      case 6:
                        return ((n.next = 8), (0, x.gz)(i(o)));
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
        m = e(30588),
        v = e(22247),
        C = e(31228),
        _ = (function (n) {
          (0, l.default)(e, n);
          var t = (0, u.default)(e);
          function e() {
            var n;
            (0, s.default)(this, e);
            for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++)
              o[r] = arguments[r];
            return (
              ((n = t.call.apply(t, [this].concat(o))).first = !0),
              (n.handleBlockedNavigation = function (t) {
                var e = n.props,
                  i = e.isForm,
                  o = e.isDirty,
                  r = n.actions.showConfirmationModal;
                return !(i && o && n.first) || ((n.first = !1), r(t), !1);
              }),
              n
            );
          }
          return (
            (0, c.default)(e, [
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
                    o = t.children,
                    r = t.menu,
                    a = t.onBack,
                    s = t.title,
                    c = t.translations,
                    l = t.confirmationModal,
                    u = t.isForm,
                    d = t.isDirty,
                    f = this.actions,
                    h = f.showConfirmationModal,
                    p = f.hideConfirmationModal,
                    x = f.handleConfirmNavigationClick,
                    T = c.GENERAL_CANCEL,
                    g = c.GENERAL_CONTINUE,
                    S = c.BACK_BUTTON_MODAL_TEXT,
                    b = c.BACK_BUTTON_MODAL_TITLE;
                  return (0, C.jsxs)(E, {
                    children: [
                      !!i && (0, C.jsx)(v.gb, {}),
                      e &&
                        (0, C.jsxs)("div", {
                          children: [
                            (0, C.jsx)(v.xE, {
                              id: "PageAdaptable_BackButton",
                              onClick: u && d ? h : a,
                            }),
                            o,
                          ],
                        }),
                      !e &&
                        (0, C.jsxs)("div", {
                          children: [
                            (0, C.jsx)(v.V1, { mobile: e, children: s }),
                            (0, C.jsx)(Z, { children: r }),
                            (0, C.jsx)(U, { children: o }),
                          ],
                        }),
                      (0, C.jsx)(v.u_, {
                        size: "small",
                        open: l,
                        children: (0, C.jsxs)("div", {
                          children: [
                            (0, C.jsx)(v.xB, { title: b }),
                            (0, C.jsx)(v.hz, {
                              padding: !0,
                              size: "small",
                              mobile: e,
                              children: (0, C.jsx)(v.ZT, { children: S }),
                            }),
                            (0, C.jsxs)(v.Zf, {
                              children: [
                                (0, C.jsx)(v.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    ((n.first = !0), p());
                                  },
                                  children: T,
                                }),
                                (0, C.jsx)(v.zx, {
                                  id: "Button_Continue",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function (n) {
                                    e ? (p(), a(n)) : x(n);
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
        k = b(_),
        E = m.ZP.div(
          i ||
            (i = (0, a.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n    padding-right: 0px;\n  }\n",
            ])),
        ),
        Z = m.ZP.div(
          o ||
            (o = (0, a.default)([
              "\n  width: 40%;\n  padding-right: 5%;\n  float: left;\n  position: relative;\n  color: #fff;\n  margin-top: 25px;\n",
            ])),
        ),
        U = m.ZP.div(
          r ||
            (r = (0, a.default)([
              "\n  width: 60%;\n  float: left;\n  padding-right: 0;\n",
            ])),
        );
    },
    93983: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return m;
        },
      });
      var i,
        o,
        r,
        a,
        s = e(56824),
        c = e(30225),
        l = e(94404),
        u = e(14482),
        d = e(5189),
        f = e(76431),
        h = e(84628),
        p = e(49318),
        x = (0, h.Jg)({
          connect: { props: [p.Z, ["isMobile", "translations"]] },
        }),
        T = e(30588),
        g = e(22247),
        S = e(31228),
        b = (function (n) {
          (0, u.default)(e, n);
          var t = (0, d.default)(e);
          function e() {
            return ((0, c.default)(this, e), t.apply(this, arguments));
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
                    r = (0, S.jsxs)("div", {
                      children: [(0, S.jsx)(_, {}), (0, S.jsx)(k, {})],
                    });
                  return (0, S.jsx)(v, {
                    margin: o,
                    children:
                      i &&
                      i.map(function (n) {
                        var i = n.key,
                          o = n.icon,
                          a = n.title,
                          s = n.onClick,
                          c = n.disabled,
                          l = n.link,
                          u = n.color,
                          d = n.hidden,
                          f = n.notifications,
                          h = n.id;
                        return d
                          ? ""
                          : (0, S.jsxs)(
                              C,
                              {
                                active: t === i,
                                mobile: e,
                                color: u ? u + "!important" : void 0,
                                link: l,
                                children: [
                                  (0, S.jsx)(g.Lr, {
                                    id: h,
                                    icon: o,
                                    mobile: e,
                                    title: a,
                                    onClick: s,
                                    link: l,
                                    disabled: c,
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
        m = x(b),
        v = T.ZP.div(
          i || (i = (0, s.default)(["\n  margin: ", ";\n"])),
          function (n) {
            return n.margin;
          },
        ),
        C = T.ZP.div(
          o ||
            (o = (0, s.default)([
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
        _ = T.ZP.div(
          r ||
            (r = (0, s.default)([
              "\n  position: absolute;\n  height: 56px;\n  width: 100%;\n  background-color: #007bc1;\n  z-index: 2;\n  top: 0;\n  left: 0;\n",
            ])),
        ),
        k = T.ZP.div(
          a ||
            (a = (0, s.default)([
              "\n  position: absolute;\n  height: 10px;\n  width: calc(100% - 48px);\n  opacity: 0.4;\n  background-color: #0067c6;\n  box-shadow: 0 0 20px 0 #424e54;\n  bottom: 0;\n  right: 24px;\n  z-index: 1;\n",
            ])),
        );
    },
    18830: function (n, t, e) {
      (e.r(t),
        e.d(t, {
          default: function () {
            return B;
          },
        }));
      var i,
        o,
        r,
        a,
        s,
        c,
        l = e(56824),
        u = e(30225),
        d = e(94404),
        f = e(14482),
        h = e(5189),
        p = e(76431),
        x = e(87121),
        T = e(2845),
        g = e(84628),
        S = e(98278),
        b = e.n(S),
        m = e(83749),
        v = e(49745),
        C = e(90012),
        _ = e(49318),
        k = e(13795),
        E = "".concat(k.CT, "/technical/tunnel/open"),
        Z = "".concat(k.CT, "/technical/tunnel/close"),
        U = "".concat(k.CT, "/technical/tunnel"),
        P = { enabled: !1 },
        O = (0, g.Jg)({
          path: function () {
            return ["scenes", "MaintenanceSshConnection"];
          },
          connect: {
            props: [_.Z, ["translations", "isMobile"]],
            actions: [_.Z, ["push"]],
          },
          actions: function () {
            return {
              getSshStatus: !0,
              setSshStatus: function (n) {
                return n;
              },
              setError: function (n) {
                return n;
              },
              setLoading: function (n) {
                return n;
              },
              getFile: function (n) {
                return n;
              },
              reset: !0,
              setEnableStatus: function (n) {
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
              sshStatus: [
                P,
                b().object,
                ((t = {}),
                (0, T.Z)(t, o.setSshStatus, function (n, t) {
                  return t;
                }),
                (0, T.Z)(t, o.reset, function () {
                  return P;
                }),
                t),
              ],
              loading: [
                !1,
                b().bool,
                ((e = {}),
                (0, T.Z)(e, o.setLoading, function (n, t) {
                  return t;
                }),
                (0, T.Z)(e, o.getSshStatus, function () {
                  return !0;
                }),
                (0, T.Z)(e, o.setSshStatus, function () {
                  return !1;
                }),
                (0, T.Z)(e, o.setEnableStatus, function () {
                  return !0;
                }),
                (0, T.Z)(e, o.reset, function () {
                  return !1;
                }),
                e),
              ],
              error: [
                null,
                b().string,
                ((i = {}),
                (0, T.Z)(i, o.setError, function (n, t) {
                  return t;
                }),
                (0, T.Z)(i, o.reset, function () {
                  return null;
                }),
                i),
              ],
            };
          },
          start: (0, x.Z)().mark(function n() {
            return (0, x.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (0, C.log)("[XS-SSH Status] Start Scene", "yellow"),
                        (n.next = 3),
                        (0, m.gz)(this.actionCreators.getSshStatus())
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
          stop: (0, x.Z)().mark(function n() {
            return (0, x.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (0, C.log)("[XS-SSH Status] Stop Scene", "yellow"),
                        (n.next = 3),
                        (0, m.gz)(this.actionCreators.reset())
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
            var t,
              e = n.actions,
              i = n.workers;
            return (
              (t = {}),
              (0, T.Z)(t, e.getSshStatus, i.getSshStatus),
              (0, T.Z)(t, e.setEnableStatus, i.setEnableStatus),
              (0, T.Z)(t, e.getFile, i.getFile),
              t
            );
          },
          workers: {
            getSshStatus: (0, x.Z)().mark(function n() {
              var t, e, i;
              return (0, x.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.prev = 0),
                          (n.next = 3),
                          (0, m.RE)(v.Z.get, U)
                        );
                      case 3:
                        return (
                          (t = n.sent),
                          (e = t.data.result),
                          (i = this.actionCreators.setSshStatus),
                          (n.next = 8),
                          (0, m.gz)(i(e))
                        );
                      case 8:
                        n.next = 15;
                        break;
                      case 10:
                        return (
                          (n.prev = 10),
                          (n.t0 = n.catch(0)),
                          console.log(n.t0),
                          (n.next = 15),
                          (0, m.gz)(this.actionCreators.setLoading(!1))
                        );
                      case 15:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this,
                [[0, 10]],
              );
            }),
            setEnableStatus: (0, x.Z)().mark(function n(t) {
              var e, i, o, r;
              return (0, x.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (e = t.payload),
                          (n.prev = 1),
                          (i = e ? E : Z),
                          (n.next = 5),
                          (0, m.RE)(v.Z.post, i)
                        );
                      case 5:
                        return (
                          (o = n.sent),
                          (r = o.data.result),
                          (n.next = 9),
                          (0, m.gz)(this.actionCreators.setSshStatus(r))
                        );
                      case 9:
                        n.next = 14;
                        break;
                      case 11:
                        ((n.prev = 11), (n.t0 = n.catch(1)), console.log(n.t0));
                      case 14:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this,
                [[1, 11]],
              );
            }),
            getFile: function (n) {
              var t = this,
                e = n.payload;
              return (0, x.Z)().mark(function n() {
                var i, o;
                return (0, x.Z)().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.next = 2),
                          (0, m.gz)(t.actionCreators.setLoading(!0))
                        );
                      case 2:
                        return (
                          (i = e),
                          ((o = document.createElement("a")).href = i),
                          (o.download = i.substr(i.lastIndexOf("/") + 1)),
                          document.body.appendChild(o),
                          o.click(),
                          document.body.removeChild(o),
                          (n.next = 11),
                          (0, m.gz)(t.actionCreators.setLoading(!1))
                        );
                      case 11:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })();
            },
          },
        }),
        y = e(30588),
        N = e(48229),
        j = e(40915),
        w = e(87371),
        R = e(36082),
        I = e(81139),
        F = e(22247),
        M = e(31228),
        A = (function (n) {
          (0, f.default)(e, n);
          var t = (0, h.default)(e);
          function e() {
            var n;
            (0, u.default)(this, e);
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
            (0, d.default)(e, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    t = this.props,
                    e = t.translations,
                    i = t.isMobile,
                    o = t.loading,
                    r = t.successMessage,
                    a = t.sshStatus,
                    s = e.MAINTENANCE_TITLE,
                    c = e.UNITSETT_SUPPORT_SSH_STATUS,
                    l = e.UNITSETT_SUPPORT_SSHSTATUS_OPEN_SUCCESS,
                    u = e.UNITSETT_SUPPORT_SSHSTATUS_SSHPORT,
                    d = e.UNITSETT_SUPPORT_SSHSTATUS_ENABLED,
                    f = e.UNITSETT_SUPPORT_SSHSTATUS_DISABLED,
                    h = e.UNITSETT_SUPPORT_SSHSTATUS_SSHTUNNEL,
                    p = e.UNITSETT_SUPPORT_SSHTUNNEL_EXPIRATION,
                    x = e.UNITSETT_SUPPORT_SSH_CERTIFICATE,
                    T = e.UNITSETT_SUPPORT_UNITLOG_DOWNLOAD,
                    g = a || {},
                    S = g.enabled,
                    b = g.port,
                    m = g.expiresIn,
                    v = g.keysArchive,
                    _ = this.actions,
                    k = _.setEnableStatus,
                    E = _.getFile;
                  return (0, M.jsx)(z, {
                    children: (0, M.jsx)(R.Z, {
                      title: s,
                      menu: (0, M.jsx)(I.Z, { page: "ssh-connection" }),
                      isForm: !1,
                      onBack: function () {
                        return n.navigate("/maintenance/");
                      },
                      loading: o,
                      children: (0, M.jsxs)(F.e0, {
                        padding: !0,
                        mobile: i,
                        children: [
                          (0, M.jsx)(F.V1, { mobile: i, children: c }),
                          (0, M.jsx)(F.mV, {
                            out: !r,
                            mobile: i,
                            icon: (0, M.jsx)(N.Z, { children: "check" }),
                            message: l,
                          }),
                          (0, M.jsx)(D, { children: h }),
                          (0, M.jsx)(L, {
                            id: "SwitchLabel_SSHStatusEnabled",
                            control: (0, M.jsx)(H, {
                              id: "PowerSwitch_SSHStatusEnabled",
                              checked: S,
                              onChange: function () {
                                return k(!S);
                              },
                              classes: { checked: "checked", track: "bar" },
                            }),
                            label: (0, M.jsxs)(V, {
                              disabled: !S,
                              children: [
                                (0, M.jsx)("span", { children: S ? d : f }),
                                S &&
                                  m &&
                                  (0, M.jsxs)("span", {
                                    children: [p, (0, C.remainingTime)(m)],
                                  }),
                              ],
                            }),
                          }),
                          S &&
                            (0, M.jsx)(F.fX, {
                              id: "LabelValueInline_SSHStatusEnabled",
                              label: u,
                              value: (b && b.toString()) || "--",
                            }),
                          v &&
                            v.url &&
                            (0, M.jsxs)(W, {
                              children: [
                                (0, M.jsx)(D, { children: x }),
                                (0, M.jsx)(F.zx, {
                                  id: "Button_Download",
                                  buttonType: "secondary-default",
                                  margin: i ? "0 auto" : "0",
                                  buttonWidth: "120px",
                                  onClick: function () {
                                    E(v.url);
                                  },
                                  children: T,
                                }),
                              ],
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
        })(p.Component),
        B = O(A),
        z = y.ZP.div(
          i ||
            (i = (0, l.default)([
              "\n  #LabelValueInlineWrapper_LabelValueInline_SSHStatusEnabled {\n    span:first-child {\n      color: #424E54;\n      font-size: 16px;\n      font-weight: 600;\n      line-height: 18px;\n      font-family: 'Open Sans';\n    }\n\n    span:nth-child(2) {\n      font-weight: 600;\n    }\n  }\n",
            ])),
        ),
        L = (0, y.ZP)(j.Z)(
          o ||
            (o = (0, l.default)([
              "\n  min-height: 48px;\n  position: relative;\n  margin-left: 0 !important;\n  margin-right: 0;\n  width: 100%;\n  padding-left: 8px;\n\n  > span:nth-child(2) {\n    width: 85%;\n    color: #424e54;\n    font-family: 'Open Sans';\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  box-shadow: inset 0 -1px 0 0 rgba(114, 126, 132, 0.2);\n",
            ])),
        ),
        H = (0, y.ZP)(w.Z)(
          r ||
            (r = (0, l.default)([
              "\n  &&&& {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 1;\n\n    .checked {\n      color: #007bc1;\n    }\n    .checked + .bar {\n      background-color: #007bc1;\n      opacity: 0.4;\n    }\n  }\n",
            ])),
        ),
        D = y.ZP.p(
          a ||
            (a = (0, l.default)([
              "\n  color: #333F48;\n  font-family: 'Open Sans';\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 14px;\n  padding-left: 8px;\n  margin-top: 38px;\n  margin-bottom: 28px;\n",
            ])),
        ),
        V = y.ZP.div(
          s ||
            (s = (0, l.default)([
              "\n  display: flex;\n  flex-direction: column;\n  padding-right: 24px;\n\n  span:first-child {\n    color: #424E54;\n    font-family: 'Open Sans';\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 18px;\n    margin-bottom: 8px;\n\n    ",
              "\n  }\n\n  span:nth-child(2) {\n    color: #424E54;\n    font-family: 'Open Sans';\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 14px;\n    margin-bottom: 16px;\n  }\n",
            ])),
          function (n) {
            return (
              n.disabled &&
              "\n      font-size: 14px;\n      font-weight: 400;\n    "
            );
          },
        ),
        W = y.ZP.div(
          c ||
            (c = (0, l.default)([
              "\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n",
            ])),
        );
    },
  },
]);
//# sourceMappingURL=8830.89b20237.chunk.js.map
