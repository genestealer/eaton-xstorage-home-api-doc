(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [9112],
  {
    81139: function (n, e, t) {
      "use strict";
      t.d(e, {
        Z: function () {
          return U;
        },
      });
      var r,
        o,
        i,
        a,
        s = t(56824),
        c = t(30225),
        u = t(94404),
        l = t(14482),
        d = t(5189),
        f = t(76431),
        h = t(87121),
        p = t(2845),
        g = t(84628),
        v = t(98278),
        x = t.n(v),
        m = t(83749),
        T = t(49745),
        b = t(13795),
        C = t(49318),
        E = "".concat(b.CT, "/commcard/reboot"),
        _ = (0, g.Jg)({
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
            var e,
              t,
              r,
              o = n.actions;
            return {
              successfullyRebooting: [
                !1,
                x().bool,
                ((e = {}),
                (0, p.Z)(e, o.setSuccessfullyRebooting, function (n, e) {
                  return e;
                }),
                (0, p.Z)(e, o.reset, function () {
                  return !1;
                }),
                e),
              ],
              rebootModal: [
                !1,
                x().bool,
                ((t = {}),
                (0, p.Z)(t, o.setRebootModal, function (n, e) {
                  return e;
                }),
                (0, p.Z)(t, o.setSuccessfullyRebooting, function () {
                  return !1;
                }),
                (0, p.Z)(t, o.reset, function () {
                  return !1;
                }),
                t),
              ],
              rebootStarted: [
                !1,
                x().bool,
                ((r = {}),
                (0, p.Z)(r, o.setSuccessfullyRebooting, function () {
                  return !0;
                }),
                (0, p.Z)(r, o.reset, function () {
                  return !1;
                }),
                r),
              ],
            };
          },
          stop: (0, h.Z)().mark(function n() {
            var e;
            return (0, h.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (e = this.actionCreators.reset),
                        (n.next = 3),
                        (0, m.gz)(e())
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
            var e = n.actions,
              t = n.workers;
            return (0, p.Z)({}, e.rebootUnit, t.rebootUnit);
          },
          workers: {
            rebootUnit: (0, h.Z)().mark(function n() {
              var e;
              return (0, h.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (e = this.actionCreators.setSuccessfullyRebooting),
                          (n.prev = 1),
                          (n.next = 4),
                          (0, m.RE)(T.Z.post, E)
                        );
                      case 4:
                        return ((n.next = 6), (0, m.gz)(e(!0)));
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
        N = t(30588),
        Z = t(48229),
        k = t(93983),
        j = t(22247),
        A = t(31228),
        R = (function (n) {
          (0, l.default)(t, n);
          var e = (0, d.default)(t);
          function t() {
            var n;
            (0, c.default)(this, t);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              ((n = e.call.apply(e, [this].concat(o))).navigate = function (e) {
                (0, n.actions.push)(e);
              }),
              n
            );
          }
          return (
            (0, u.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    e = this.props,
                    t = e.page,
                    r = e.isMobile,
                    o = e.translations,
                    i = e.rebootModal,
                    a = e.successfullyRebooting,
                    s = e.configs,
                    c = o.MAINTENANCE_TECH_PARAMS,
                    u = o.UNITSETT_SUPPORT_MONITORING,
                    l = o.UNITSETT_SUPPORT_DATETIMESYNC,
                    d = o.UNITSETT_SUPPORT_UNITLOG,
                    f = o.UNITSETT_SUPPORT_REBOOTUNIT_COMMCARD,
                    h = o.UNITSETT_SUPPORT_REBOOTUNIT_SUBMIT,
                    p = o.UNITSETT_SUPPORT_REBOOTUNIT_NOTE,
                    g = o.UNITSETT_SUPPORT_REBOOTUNIT_CONFIRMATION,
                    v = o.UNITSETT_SUPPORT_REBOOTUNIT_CANCEL,
                    x = o.UNITSETT_SUPPORT_SSH_STATUS,
                    m = o.UNITSETT_SUPPORT_HTTPS,
                    T = o.UNITSETT_SUPPORT_REBOOTUNIT_REBOOTSTARTED,
                    C = o.UNITSETT_SUPPORT_REBOOTUNIT_REBOOTSTARTED_DESC,
                    E = this.actions,
                    _ = E.setRebootModal,
                    N = E.rebootUnit,
                    R = s
                      ? [
                          {
                            id: "TechParams",
                            key: "tech-params",
                            icon: (0, A.jsx)(y, {
                              transformproperty: "rotate(180deg)",
                              children: "error_outline",
                            }),
                            title: c,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/techparams");
                            },
                            disabled: s && s.userType !== b.cC,
                          },
                          {
                            id: "DatetimeSync",
                            key: "datetime-sync",
                            icon: (0, A.jsx)(j.VE, {
                              fillColor: r ? "#007BC1" : "#FFFFFF",
                            }),
                            title: l,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/datetime-sync");
                            },
                            disabled: s && s.userType !== b.cC,
                          },
                          {
                            id: "Monitoring",
                            key: "monitoring",
                            icon: (0, A.jsx)(j.Q9, {
                              fillColor: r ? "#007BC1" : "#FFFFFF",
                            }),
                            title: u,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/monitoring");
                            },
                            disabled: s && s.userType !== b.cC,
                          },
                          {
                            id: "UnitLog",
                            key: "unit-log",
                            icon: (0, A.jsx)(j.oy, {
                              fillColor: r ? "#007BC1" : "#FFFFFF",
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
                            icon: (0, A.jsx)(j.CB, {
                              fillColor: r ? "#007BC1!important" : "#FFFFFF",
                            }),
                            title: x,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/ssh-connection");
                            },
                            disabled: s && s.userType !== b.cC,
                          },
                          {
                            id: "HTTPSTunnel",
                            key: "https-tunnel",
                            icon: (0, A.jsx)(Z.Z, { children: "https" }),
                            title: m,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/https-tunnel");
                            },
                          },
                          {
                            id: "RebootUnit",
                            key: "reboot-unit",
                            icon: (0, A.jsx)(Z.Z, {
                              children: "power_settings_new",
                            }),
                            title: f,
                            color: r ? "#CA3C3D" : "#EFC5C5",
                            onClick: function () {
                              return _(!0);
                            },
                          },
                        ]
                      : [],
                    U = Object.keys(o).filter(function (n) {
                      return /UNITSETT_SUPPORT_REBOOTUNIT_INFOPOINT(\d+)/.test(
                        n,
                      );
                    });
                  return (0, A.jsxs)(S, {
                    children: [
                      (0, A.jsx)(k.Z, { items: R, page: t }),
                      a &&
                        (0, A.jsx)(j.mJ, {
                          icon: (0, A.jsx)(Z.Z, { children: "report" }),
                          title: T,
                          text: (0, A.jsx)(M, { children: C }),
                          mobile: r,
                        }),
                      (0, A.jsx)(j.u_, {
                        open: i,
                        size: "large",
                        onClose: function () {
                          return _(!1);
                        },
                        children: (0, A.jsxs)("div", {
                          children: [
                            (0, A.jsx)(j.xB, { red: !0, title: f }),
                            (0, A.jsxs)(j.hz, {
                              padding: !0,
                              size: "large",
                              mobile: r,
                              children: [
                                (0, A.jsx)(O, { children: p }),
                                (0, A.jsx)(j.Gn, {
                                  children: U.map(function (n) {
                                    return (0, A.jsx)(
                                      j.E9,
                                      { children: o[n] },
                                      n,
                                    );
                                  }),
                                }),
                                (0, A.jsx)(j.ZT, {
                                  variant: "body1",
                                  children: g,
                                }),
                              ],
                            }),
                            (0, A.jsxs)(j.Zf, {
                              children: [
                                (0, A.jsx)(j.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    return _(!1);
                                  },
                                  children: v,
                                }),
                                (0, A.jsx)(j.zx, {
                                  id: "Button_Submit",
                                  buttonType: "primary-danger",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: N,
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
            t
          );
        })(f.Component),
        U = _(R),
        S = N.ZP.div(r || (r = (0, s.default)([""]))),
        y = (0, N.ZP)(Z.Z)(
          o || (o = (0, s.default)(["\n  transform: ", ";\n"])),
          function (n) {
            var e = n.transformproperty;
            return "".concat(e);
          },
        ),
        O = N.ZP.p(
          i ||
            (i = (0, s.default)([
              '\n  color: #424e54;\n  font-family: "Open Sans";\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: bold;\n  margin: 0;\n',
            ])),
        ),
        M = N.ZP.div(
          a ||
            (a = (0, s.default)([
              '\n  color: rgba(114, 126, 132, 1);\n  font-size: 14px;\n  line-height: 20px;\n  font-family: "Open Sans";\n  margin: 7px 0px;\n',
            ])),
        );
    },
    36082: function (n, e, t) {
      "use strict";
      t.d(e, {
        Z: function () {
          return N;
        },
      });
      var r,
        o,
        i,
        a = t(56824),
        s = t(30225),
        c = t(94404),
        u = t(14482),
        l = t(5189),
        d = t(76431),
        f = t(87121),
        h = t(2845),
        p = t(84628),
        g = t(83749),
        v = t(98278),
        x = t.n(v),
        m = t(49318),
        T = (0, p.Jg)({
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
            var e,
              t = n.actions;
            return {
              confirmationModal: [
                !1,
                x().bool,
                ((e = {}),
                (0, h.Z)(e, t.showConfirmationModal, function () {
                  return !0;
                }),
                (0, h.Z)(e, t.hideConfirmationModal, function () {
                  return !1;
                }),
                e),
              ],
              nextLocation: [
                {},
                x().object,
                (0, h.Z)({}, t.showConfirmationModal, function (n, e) {
                  return e.location;
                }),
              ],
            };
          },
          stop: (0, f.Z)().mark(function n() {
            var e;
            return (0, f.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (e = this.actionCreators.hideConfirmationModal),
                        (n.next = 3),
                        (0, g.gz)(e())
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
            var e = n.actions,
              t = n.workers;
            return (0, h.Z)(
              {},
              e.handleConfirmNavigationClick,
              t.handleConfirmNavigationClick,
            );
          },
          workers: {
            handleConfirmNavigationClick: (0, f.Z)().mark(function n() {
              var e, t, r, o;
              return (0, f.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (e = this.actionCreators),
                          (t = e.hideConfirmationModal),
                          (r = e.push),
                          (n.next = 3),
                          this.get("nextLocation")
                        );
                      case 3:
                        return ((o = n.sent), (n.next = 6), (0, g.gz)(t()));
                      case 6:
                        return ((n.next = 8), (0, g.gz)(r(o)));
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
        b = t(30588),
        C = t(22247),
        E = t(31228),
        _ = (function (n) {
          (0, u.default)(t, n);
          var e = (0, l.default)(t);
          function t() {
            var n;
            (0, s.default)(this, t);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              ((n = e.call.apply(e, [this].concat(o))).first = !0),
              (n.handleBlockedNavigation = function (e) {
                var t = n.props,
                  r = t.isForm,
                  o = t.isDirty,
                  i = n.actions.showConfirmationModal;
                return !(r && o && n.first) || ((n.first = !1), i(e), !1);
              }),
              n
            );
          }
          return (
            (0, c.default)(t, [
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
                    e = this.props,
                    t = e.isMobile,
                    r = e.loading,
                    o = e.children,
                    i = e.menu,
                    a = e.onBack,
                    s = e.title,
                    c = e.translations,
                    u = e.confirmationModal,
                    l = e.isForm,
                    d = e.isDirty,
                    f = this.actions,
                    h = f.showConfirmationModal,
                    p = f.hideConfirmationModal,
                    g = f.handleConfirmNavigationClick,
                    v = c.GENERAL_CANCEL,
                    x = c.GENERAL_CONTINUE,
                    m = c.BACK_BUTTON_MODAL_TEXT,
                    T = c.BACK_BUTTON_MODAL_TITLE;
                  return (0, E.jsxs)(Z, {
                    children: [
                      !!r && (0, E.jsx)(C.gb, {}),
                      t &&
                        (0, E.jsxs)("div", {
                          children: [
                            (0, E.jsx)(C.xE, {
                              id: "PageAdaptable_BackButton",
                              onClick: l && d ? h : a,
                            }),
                            o,
                          ],
                        }),
                      !t &&
                        (0, E.jsxs)("div", {
                          children: [
                            (0, E.jsx)(C.V1, { mobile: t, children: s }),
                            (0, E.jsx)(k, { children: i }),
                            (0, E.jsx)(j, { children: o }),
                          ],
                        }),
                      (0, E.jsx)(C.u_, {
                        size: "small",
                        open: u,
                        children: (0, E.jsxs)("div", {
                          children: [
                            (0, E.jsx)(C.xB, { title: T }),
                            (0, E.jsx)(C.hz, {
                              padding: !0,
                              size: "small",
                              mobile: t,
                              children: (0, E.jsx)(C.ZT, { children: m }),
                            }),
                            (0, E.jsxs)(C.Zf, {
                              children: [
                                (0, E.jsx)(C.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    ((n.first = !0), p());
                                  },
                                  children: v,
                                }),
                                (0, E.jsx)(C.zx, {
                                  id: "Button_Continue",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function (n) {
                                    t ? (p(), a(n)) : g(n);
                                  },
                                  children: x,
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
            t
          );
        })(d.Component),
        N = T(_),
        Z = b.ZP.div(
          r ||
            (r = (0, a.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n    padding-right: 0px;\n  }\n",
            ])),
        ),
        k = b.ZP.div(
          o ||
            (o = (0, a.default)([
              "\n  width: 40%;\n  padding-right: 5%;\n  float: left;\n  position: relative;\n  color: #fff;\n  margin-top: 25px;\n",
            ])),
        ),
        j = b.ZP.div(
          i ||
            (i = (0, a.default)([
              "\n  width: 60%;\n  float: left;\n  padding-right: 0;\n",
            ])),
        );
    },
    93983: function (n, e, t) {
      "use strict";
      t.d(e, {
        Z: function () {
          return b;
        },
      });
      var r,
        o,
        i,
        a,
        s = t(56824),
        c = t(30225),
        u = t(94404),
        l = t(14482),
        d = t(5189),
        f = t(76431),
        h = t(84628),
        p = t(49318),
        g = (0, h.Jg)({
          connect: { props: [p.Z, ["isMobile", "translations"]] },
        }),
        v = t(30588),
        x = t(22247),
        m = t(31228),
        T = (function (n) {
          (0, l.default)(t, n);
          var e = (0, d.default)(t);
          function t() {
            return ((0, c.default)(this, t), e.apply(this, arguments));
          }
          return (
            (0, u.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.page,
                    t = n.isMobile,
                    r = n.items,
                    o = n.margin,
                    i = (0, m.jsxs)("div", {
                      children: [(0, m.jsx)(_, {}), (0, m.jsx)(N, {})],
                    });
                  return (0, m.jsx)(C, {
                    margin: o,
                    children:
                      r &&
                      r.map(function (n) {
                        var r = n.key,
                          o = n.icon,
                          a = n.title,
                          s = n.onClick,
                          c = n.disabled,
                          u = n.link,
                          l = n.color,
                          d = n.hidden,
                          f = n.notifications,
                          h = n.id;
                        return d
                          ? ""
                          : (0, m.jsxs)(
                              E,
                              {
                                active: e === r,
                                mobile: t,
                                color: l ? l + "!important" : void 0,
                                link: u,
                                children: [
                                  (0, m.jsx)(x.Lr, {
                                    id: h,
                                    icon: o,
                                    mobile: t,
                                    title: a,
                                    onClick: s,
                                    link: u,
                                    disabled: c,
                                    notifications: f,
                                  }),
                                  e === r && i,
                                ],
                              },
                              r,
                            );
                      }),
                  });
                },
              },
            ]),
            t
          );
        })(f.PureComponent),
        b = g(T),
        C = v.ZP.div(
          r || (r = (0, s.default)(["\n  margin: ", ";\n"])),
          function (n) {
            return n.margin;
          },
        ),
        E = v.ZP.div(
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
        _ = v.ZP.div(
          i ||
            (i = (0, s.default)([
              "\n  position: absolute;\n  height: 56px;\n  width: 100%;\n  background-color: #007bc1;\n  z-index: 2;\n  top: 0;\n  left: 0;\n",
            ])),
        ),
        N = v.ZP.div(
          a ||
            (a = (0, s.default)([
              "\n  position: absolute;\n  height: 10px;\n  width: calc(100% - 48px);\n  opacity: 0.4;\n  background-color: #0067c6;\n  box-shadow: 0 0 20px 0 #424e54;\n  bottom: 0;\n  right: 24px;\n  z-index: 1;\n",
            ])),
        );
    },
    59112: function (n, e, t) {
      "use strict";
      (t.r(e),
        t.d(e, {
          default: function () {
            return M;
          },
        }));
      var r,
        o = t(56824),
        i = t(30225),
        a = t(94404),
        s = t(14482),
        c = t(5189),
        u = t(76431),
        l = t(87121),
        d = t(2845),
        f = t(84628),
        h = t(83749),
        p = t(49745),
        g = t(98278),
        v = t.n(g),
        x = t(60326),
        m = t.n(x),
        T = t(90012),
        b = t(42477),
        C = t(49318),
        E = {
          overvoltage: { value: 0 },
          undervoltage1: { value: 0 },
          undervoltage2: { value: 0 },
          undervoltage3: { value: 0 },
          undervoltage4: { value: 0 },
        },
        _ = {
          overvoltage: [b.q9],
          undervoltage1: [b.q9],
          undervoltage2: [b.q9],
          undervoltage3: [b.q9],
          undervoltage4: [b.q9],
        },
        N = (0, f.Jg)({
          path: function () {
            return ["scenes", "MaintenanceChangeUnitParams"];
          },
          connect: {
            props: [C.Z, ["isMobile", "translations"]],
            actions: [C.Z, ["push"]],
          },
          actions: function () {
            return {
              change: function (n) {
                return { field: n };
              },
              submit: function () {
                return {};
              },
              response: function (n) {
                return { response: n };
              },
              error: function (n) {
                return { error: n };
              },
              setForm: function (n) {
                return { form: n };
              },
              changeForm: function (n) {
                return { form: n };
              },
              reset: function () {
                return !0;
              },
            };
          },
          reducers: function (n) {
            var e,
              t,
              r,
              o,
              i,
              a = n.actions;
            return {
              form: [
                E,
                v().object,
                ((e = {}),
                (0, d.Z)(e, a.change, function (n, e) {
                  return b.jR(n, e, _);
                }),
                (0, d.Z)(e, a.setForm, function (n, e) {
                  return b.Yg(e.form, _).form;
                }),
                (0, d.Z)(e, a.changeForm, function (n, e) {
                  return e.form;
                }),
                (0, d.Z)(e, a.reset, function () {
                  return E;
                }),
                e),
              ],
              dirty: [
                !1,
                v().bool,
                ((t = {}),
                (0, d.Z)(t, a.change, function () {
                  return !0;
                }),
                (0, d.Z)(t, a.response, function () {
                  return !1;
                }),
                (0, d.Z)(t, a.error, function () {
                  return !0;
                }),
                (0, d.Z)(t, a.reset, function () {
                  return !1;
                }),
                t),
              ],
              submiting: [
                !1,
                v().bool,
                ((r = {}),
                (0, d.Z)(r, a.submit, function () {
                  return !0;
                }),
                (0, d.Z)(r, a.error, function () {
                  return !1;
                }),
                (0, d.Z)(r, a.response, function () {
                  return !1;
                }),
                (0, d.Z)(r, a.reset, function () {
                  return !1;
                }),
                r),
              ],
              response: [
                null,
                v().any,
                ((o = {}),
                (0, d.Z)(o, a.response, function (n, e) {
                  return e.response;
                }),
                (0, d.Z)(o, a.reset, function () {
                  return null;
                }),
                o),
              ],
              error: [
                null,
                v().any,
                ((i = {}),
                (0, d.Z)(i, a.error, function (n, e) {
                  return e.error;
                }),
                (0, d.Z)(i, a.reset, function () {
                  return null;
                }),
                i),
              ],
            };
          },
          takeLatest: function (n) {
            var e = n.actions,
              t = n.workers;
            return (0, d.Z)({}, e.submit, t.submit);
          },
          workers: {
            submit: (0, l.Z)().mark(function n(e) {
              var t, r, o, i, a, s, c, u, d, f, g;
              return (0, l.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (r = t.error),
                          (o = t.response),
                          (i = t.setForm),
                          (a = t.changeForm),
                          (s = t.reset),
                          (n.next = 3),
                          this.get("form")
                        );
                      case 3:
                        return ((c = n.sent), (n.next = 6), this.get("dirty"));
                      case 6:
                        if (
                          ((u = n.sent), (d = b.Yg(c, _)), !u || !d.invalid)
                        ) {
                          n.next = 13;
                          break;
                        }
                        return (
                          (0, T.scrollToFirstFormError)(d.form),
                          (n.next = 12),
                          (0, h.gz)(r([]))
                        );
                      case 12:
                        return n.abrupt("return", !1);
                      case 13:
                        if (u || !d.invalid) {
                          n.next = 20;
                          break;
                        }
                        return (
                          (0, T.scrollToFirstFormError)(d.form),
                          (n.next = 17),
                          (0, h.gz)(i(d.form))
                        );
                      case 17:
                        return ((n.next = 19), (0, h.gz)(r([])));
                      case 19:
                        return n.abrupt("return", !1);
                      case 20:
                        return (
                          (f = m()(c, function (n) {
                            return n.value;
                          })),
                          (n.prev = 21),
                          (n.next = 24),
                          (0, h.RE)(p.Z.post, "", f)
                        );
                      case 24:
                        return (
                          (g = n.sent),
                          (n.next = 27),
                          (0, h.gz)(o(g.data))
                        );
                      case 27:
                        return ((n.next = 29), (0, h.gz)(s()));
                      case 29:
                        n.next = 39;
                        break;
                      case 31:
                        if (
                          ((n.prev = 31),
                          (n.t0 = n.catch(21)),
                          !n.t0.response.data)
                        ) {
                          n.next = 37;
                          break;
                        }
                        return ((n.next = 36), (0, h.gz)(a(c)));
                      case 36:
                        (0, T.scrollToFirstFormError)(c);
                      case 37:
                        return ((n.next = 39), (0, h.gz)(r([])));
                      case 39:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this,
                [[21, 31]],
              );
            }),
          },
        }),
        Z = t(30588),
        k = t(48229),
        j = t(36082),
        A = t(81139),
        R = t(72768),
        U = t(89020),
        S = t(22247),
        y = t(31228),
        O = (function (n) {
          (0, s.default)(t, n);
          var e = (0, c.default)(t);
          function t() {
            var n;
            (0, i.default)(this, t);
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
              o[a] = arguments[a];
            return (
              ((n = e.call.apply(e, [this].concat(o))).navigate = function (e) {
                (0, n.actions.push)(e);
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
                    t = e.translations,
                    r = e.isMobile,
                    o = e.dirty,
                    i = e.form,
                    a = e.error,
                    s = i.overvoltage,
                    c = i.undervoltage1,
                    u = i.undervoltage2,
                    l = i.undervoltage3,
                    d = i.undervoltage4,
                    f = this.actions,
                    h = f.submit,
                    p = f.change,
                    g = t.MAINTENANCE_CHANGE_UNIT_PARAMS,
                    v = t.MAINTENANCE_TITLE,
                    x = t.UNITSETT_GENERAL_SAVE,
                    m = t.MAINTENANCE_CHANGE_PARAMS_OVERVOLTAGE,
                    T = t.UNITSETT_GENERAL_CANCEL,
                    b = t.MAINTENANCE_CHANGE_PARAMS_UNDERVOLTAGE1,
                    C = t.MAINTENANCE_CHANGE_PARAMS_UNDERVOLTAGE2,
                    E = t.MAINTENANCE_CHANGE_PARAMS_UNDERVOLTAGE3,
                    _ = t.MAINTENANCE_CHANGE_PARAMS_UNDERVOLTAGE4,
                    N = (0, y.jsxs)(S.l0.Buttons, {
                      align: "right",
                      children: [
                        (0, y.jsx)(S.zx, {
                          id: "Button_Cancel",
                          buttonType: "primary-cancel",
                          margin: "0 12px",
                          buttonWidth: "163px",
                          onClick: function () {
                            return window.location.reload();
                          },
                          children: T,
                        }),
                        (0, y.jsx)(S.zx, {
                          id: "Button_Save",
                          margin: "0 12px",
                          buttonWidth: "163px",
                          onClick: h,
                          children: x,
                        }),
                      ],
                    });
                  return (0, y.jsx)(P, {
                    children: (0, y.jsx)(j.Z, {
                      title: v,
                      menu: (0, y.jsx)(A.Z, { page: "unit-params" }),
                      onBack: function () {
                        return n.navigate("/maintenance/");
                      },
                      isForm: !0,
                      isDirty: o,
                      children: (0, y.jsxs)(S.e0, {
                        padding: !0,
                        mobile: r,
                        children: [
                          (0, y.jsx)(S.V1, { mobile: r, children: g }),
                          r &&
                            (0, y.jsx)(S.Oj, {
                              mobile: !0,
                              icon: (0, y.jsx)(k.Z, { children: "check" }),
                              onClick: h,
                              children: x,
                            }),
                          (0, y.jsxs)(S.l0, {
                            mobile: r,
                            buttons: N,
                            formHeight: "62vh",
                            children: [
                              (0, y.jsx)(U.Z, { dirty: o, error: a, full: r }),
                              (0, y.jsxs)(S.l0.Row, {
                                full: r,
                                relative: !0,
                                children: [
                                  (0, y.jsx)(S.oH, {
                                    id: "Overvoltage",
                                    label: m,
                                    error: o && !s.valid,
                                    value: s.value,
                                    onChange: function (n) {
                                      var e = n.target;
                                      return p({ overvoltage: e.value });
                                    },
                                    inputProps: { maxLength: 90 },
                                  }),
                                  (0, y.jsx)(R.Z, {
                                    id: "Overvoltage",
                                    showError: o && !s.valid,
                                    errorMessage: s.message,
                                  }),
                                ],
                              }),
                              (0, y.jsxs)(S.l0.Row, {
                                full: r,
                                relative: !0,
                                children: [
                                  (0, y.jsx)(S.oH, {
                                    id: "Undervoltage1",
                                    label: b,
                                    error: o && !c.valid,
                                    value: c.value,
                                    onChange: function (n) {
                                      var e = n.target;
                                      return p({ undervoltage1: e.value });
                                    },
                                    inputProps: { maxLength: 90 },
                                    endtext: "V",
                                  }),
                                  (0, y.jsx)(R.Z, {
                                    id: "Undervoltage1",
                                    showError: o && !c.valid,
                                    errorMessage: c.message,
                                  }),
                                ],
                              }),
                              (0, y.jsxs)(S.l0.Row, {
                                full: r,
                                relative: !0,
                                children: [
                                  (0, y.jsx)(S.oH, {
                                    id: "Undervoltage2",
                                    label: C,
                                    error: o && !u.valid,
                                    value: u.value,
                                    onChange: function (n) {
                                      var e = n.target;
                                      return p({ undervoltage2: e.value });
                                    },
                                    inputProps: { maxLength: 90 },
                                    endtext: "V",
                                  }),
                                  (0, y.jsx)(R.Z, {
                                    id: "Undervoltage2",
                                    showError: o && !u.valid,
                                    errorMessage: u.message,
                                  }),
                                ],
                              }),
                              (0, y.jsxs)(S.l0.Row, {
                                full: r,
                                relative: !0,
                                children: [
                                  (0, y.jsx)(S.oH, {
                                    id: "Undervoltage3",
                                    label: E,
                                    error: o && !l.valid,
                                    value: l.value,
                                    onChange: function (n) {
                                      var e = n.target;
                                      return p({ undervoltage3: e.value });
                                    },
                                    inputProps: { maxLength: 90 },
                                    endtext: "V",
                                  }),
                                  (0, y.jsx)(R.Z, {
                                    id: "Undervoltage3",
                                    showError: o && !l.valid,
                                    errorMessage: l.message,
                                  }),
                                ],
                              }),
                              (0, y.jsxs)(S.l0.Row, {
                                full: r,
                                relative: !0,
                                children: [
                                  (0, y.jsx)(S.oH, {
                                    id: "Undervoltage4",
                                    label: _,
                                    error: o && !d.valid,
                                    value: d.value,
                                    onChange: function (n) {
                                      var e = n.target;
                                      return p({ undervoltage4: e.value });
                                    },
                                    inputProps: { maxLength: 90 },
                                    endtext: "V",
                                  }),
                                  (0, y.jsx)(R.Z, {
                                    id: "Undervoltage4",
                                    showError: o && !d.valid,
                                    errorMessage: d.message,
                                  }),
                                ],
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
            t
          );
        })(u.Component),
        M = N(O),
        P = Z.ZP.div(r || (r = (0, o.default)([""])));
    },
    60326: function (n, e, t) {
      var r = t(7278),
        o = t(31709),
        i = t(61490);
      n.exports = function (n, e) {
        var t = {};
        return (
          (e = i(e, 3)),
          o(n, function (n, o, i) {
            r(t, o, e(n, o, i));
          }),
          t
        );
      };
    },
  },
]);
//# sourceMappingURL=9112.e22def70.chunk.js.map
