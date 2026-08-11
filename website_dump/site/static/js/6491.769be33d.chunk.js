(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [6491],
  {
    81139: function (n, e, t) {
      "use strict";
      t.d(e, {
        Z: function () {
          return O;
        },
      });
      var r,
        o,
        a,
        i,
        l = t(56824),
        s = t(30225),
        u = t(94404),
        c = t(14482),
        E = t(5189),
        _ = t(76431),
        d = t(87121),
        T = t(2845),
        N = t(84628),
        C = t(98278),
        A = t.n(C),
        f = t(83749),
        p = t(49745),
        h = t(13795),
        m = t(49318),
        g = "".concat(h.CT, "/commcard/reboot"),
        v = (0, N.Jg)({
          path: function () {
            return ["scenes", "containers", "MaintenanceMenu"];
          },
          connect: {
            props: [m.Z, ["isMobile", "translations", "configs"]],
            actions: [m.Z, ["push"]],
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
                A().bool,
                ((e = {}),
                (0, T.Z)(e, o.setSuccessfullyRebooting, function (n, e) {
                  return e;
                }),
                (0, T.Z)(e, o.reset, function () {
                  return !1;
                }),
                e),
              ],
              rebootModal: [
                !1,
                A().bool,
                ((t = {}),
                (0, T.Z)(t, o.setRebootModal, function (n, e) {
                  return e;
                }),
                (0, T.Z)(t, o.setSuccessfullyRebooting, function () {
                  return !1;
                }),
                (0, T.Z)(t, o.reset, function () {
                  return !1;
                }),
                t),
              ],
              rebootStarted: [
                !1,
                A().bool,
                ((r = {}),
                (0, T.Z)(r, o.setSuccessfullyRebooting, function () {
                  return !0;
                }),
                (0, T.Z)(r, o.reset, function () {
                  return !1;
                }),
                r),
              ],
            };
          },
          stop: (0, d.Z)().mark(function n() {
            var e;
            return (0, d.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (e = this.actionCreators.reset),
                        (n.next = 3),
                        (0, f.gz)(e())
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
            return (0, T.Z)({}, e.rebootUnit, t.rebootUnit);
          },
          workers: {
            rebootUnit: (0, d.Z)().mark(function n() {
              var e;
              return (0, d.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (e = this.actionCreators.setSuccessfullyRebooting),
                          (n.prev = 1),
                          (n.next = 4),
                          (0, f.RE)(p.Z.post, g)
                        );
                      case 4:
                        return ((n.next = 6), (0, f.gz)(e(!0)));
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
        b = t(30588),
        M = t(48229),
        R = t(93983),
        x = t(22247),
        I = t(31228),
        P = (function (n) {
          (0, c.default)(t, n);
          var e = (0, E.default)(t);
          function t() {
            var n;
            (0, s.default)(this, t);
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
            (0, u.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    e = this.props,
                    t = e.page,
                    r = e.isMobile,
                    o = e.translations,
                    a = e.rebootModal,
                    i = e.successfullyRebooting,
                    l = e.configs,
                    s = o.MAINTENANCE_TECH_PARAMS,
                    u = o.UNITSETT_SUPPORT_MONITORING,
                    c = o.UNITSETT_SUPPORT_DATETIMESYNC,
                    E = o.UNITSETT_SUPPORT_UNITLOG,
                    _ = o.UNITSETT_SUPPORT_REBOOTUNIT_COMMCARD,
                    d = o.UNITSETT_SUPPORT_REBOOTUNIT_SUBMIT,
                    T = o.UNITSETT_SUPPORT_REBOOTUNIT_NOTE,
                    N = o.UNITSETT_SUPPORT_REBOOTUNIT_CONFIRMATION,
                    C = o.UNITSETT_SUPPORT_REBOOTUNIT_CANCEL,
                    A = o.UNITSETT_SUPPORT_SSH_STATUS,
                    f = o.UNITSETT_SUPPORT_HTTPS,
                    p = o.UNITSETT_SUPPORT_REBOOTUNIT_REBOOTSTARTED,
                    m = o.UNITSETT_SUPPORT_REBOOTUNIT_REBOOTSTARTED_DESC,
                    g = this.actions,
                    v = g.setRebootModal,
                    b = g.rebootUnit,
                    P = l
                      ? [
                          {
                            id: "TechParams",
                            key: "tech-params",
                            icon: (0, I.jsx)(j, {
                              transformproperty: "rotate(180deg)",
                              children: "error_outline",
                            }),
                            title: s,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/techparams");
                            },
                            disabled: l && l.userType !== h.cC,
                          },
                          {
                            id: "DatetimeSync",
                            key: "datetime-sync",
                            icon: (0, I.jsx)(x.VE, {
                              fillColor: r ? "#007BC1" : "#FFFFFF",
                            }),
                            title: c,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/datetime-sync");
                            },
                            disabled: l && l.userType !== h.cC,
                          },
                          {
                            id: "Monitoring",
                            key: "monitoring",
                            icon: (0, I.jsx)(x.Q9, {
                              fillColor: r ? "#007BC1" : "#FFFFFF",
                            }),
                            title: u,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/monitoring");
                            },
                            disabled: l && l.userType !== h.cC,
                          },
                          {
                            id: "UnitLog",
                            key: "unit-log",
                            icon: (0, I.jsx)(x.oy, {
                              fillColor: r ? "#007BC1" : "#FFFFFF",
                            }),
                            title: E,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/unit-log");
                            },
                          },
                          {
                            id: "SSHConnection",
                            key: "ssh-connection",
                            icon: (0, I.jsx)(x.CB, {
                              fillColor: r ? "#007BC1!important" : "#FFFFFF",
                            }),
                            title: A,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/ssh-connection");
                            },
                            disabled: l && l.userType !== h.cC,
                          },
                          {
                            id: "HTTPSTunnel",
                            key: "https-tunnel",
                            icon: (0, I.jsx)(M.Z, { children: "https" }),
                            title: f,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/https-tunnel");
                            },
                          },
                          {
                            id: "RebootUnit",
                            key: "reboot-unit",
                            icon: (0, I.jsx)(M.Z, {
                              children: "power_settings_new",
                            }),
                            title: _,
                            color: r ? "#CA3C3D" : "#EFC5C5",
                            onClick: function () {
                              return v(!0);
                            },
                          },
                        ]
                      : [],
                    O = Object.keys(o).filter(function (n) {
                      return /UNITSETT_SUPPORT_REBOOTUNIT_INFOPOINT(\d+)/.test(
                        n,
                      );
                    });
                  return (0, I.jsxs)(S, {
                    children: [
                      (0, I.jsx)(R.Z, { items: P, page: t }),
                      i &&
                        (0, I.jsx)(x.mJ, {
                          icon: (0, I.jsx)(M.Z, { children: "report" }),
                          title: p,
                          text: (0, I.jsx)(V, { children: m }),
                          mobile: r,
                        }),
                      (0, I.jsx)(x.u_, {
                        open: a,
                        size: "large",
                        onClose: function () {
                          return v(!1);
                        },
                        children: (0, I.jsxs)("div", {
                          children: [
                            (0, I.jsx)(x.xB, { red: !0, title: _ }),
                            (0, I.jsxs)(x.hz, {
                              padding: !0,
                              size: "large",
                              mobile: r,
                              children: [
                                (0, I.jsx)(D, { children: T }),
                                (0, I.jsx)(x.Gn, {
                                  children: O.map(function (n) {
                                    return (0, I.jsx)(
                                      x.E9,
                                      { children: o[n] },
                                      n,
                                    );
                                  }),
                                }),
                                (0, I.jsx)(x.ZT, {
                                  variant: "body1",
                                  children: N,
                                }),
                              ],
                            }),
                            (0, I.jsxs)(x.Zf, {
                              children: [
                                (0, I.jsx)(x.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    return v(!1);
                                  },
                                  children: C,
                                }),
                                (0, I.jsx)(x.zx, {
                                  id: "Button_Submit",
                                  buttonType: "primary-danger",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: b,
                                  children: d,
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
        })(_.Component),
        O = v(P),
        S = b.ZP.div(r || (r = (0, l.default)([""]))),
        j = (0, b.ZP)(M.Z)(
          o || (o = (0, l.default)(["\n  transform: ", ";\n"])),
          function (n) {
            var e = n.transformproperty;
            return "".concat(e);
          },
        ),
        D = b.ZP.p(
          a ||
            (a = (0, l.default)([
              '\n  color: #424e54;\n  font-family: "Open Sans";\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: bold;\n  margin: 0;\n',
            ])),
        ),
        V = b.ZP.div(
          i ||
            (i = (0, l.default)([
              '\n  color: rgba(114, 126, 132, 1);\n  font-size: 14px;\n  line-height: 20px;\n  font-family: "Open Sans";\n  margin: 7px 0px;\n',
            ])),
        );
    },
    36082: function (n, e, t) {
      "use strict";
      t.d(e, {
        Z: function () {
          return b;
        },
      });
      var r,
        o,
        a,
        i = t(56824),
        l = t(30225),
        s = t(94404),
        u = t(14482),
        c = t(5189),
        E = t(76431),
        _ = t(87121),
        d = t(2845),
        T = t(84628),
        N = t(83749),
        C = t(98278),
        A = t.n(C),
        f = t(49318),
        p = (0, T.Jg)({
          path: function () {
            return ["scenes", "containers", "PageAdaptable"];
          },
          connect: {
            props: [f.Z, ["isMobile", "translations"]],
            actions: [f.Z, ["push"]],
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
                A().bool,
                ((e = {}),
                (0, d.Z)(e, t.showConfirmationModal, function () {
                  return !0;
                }),
                (0, d.Z)(e, t.hideConfirmationModal, function () {
                  return !1;
                }),
                e),
              ],
              nextLocation: [
                {},
                A().object,
                (0, d.Z)({}, t.showConfirmationModal, function (n, e) {
                  return e.location;
                }),
              ],
            };
          },
          stop: (0, _.Z)().mark(function n() {
            var e;
            return (0, _.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (e = this.actionCreators.hideConfirmationModal),
                        (n.next = 3),
                        (0, N.gz)(e())
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
            return (0, d.Z)(
              {},
              e.handleConfirmNavigationClick,
              t.handleConfirmNavigationClick,
            );
          },
          workers: {
            handleConfirmNavigationClick: (0, _.Z)().mark(function n() {
              var e, t, r, o;
              return (0, _.Z)().wrap(
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
                        return ((o = n.sent), (n.next = 6), (0, N.gz)(t()));
                      case 6:
                        return ((n.next = 8), (0, N.gz)(r(o)));
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
        h = t(30588),
        m = t(22247),
        g = t(31228),
        v = (function (n) {
          (0, u.default)(t, n);
          var e = (0, c.default)(t);
          function t() {
            var n;
            (0, l.default)(this, t);
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
              o[a] = arguments[a];
            return (
              ((n = e.call.apply(e, [this].concat(o))).first = !0),
              (n.handleBlockedNavigation = function (e) {
                var t = n.props,
                  r = t.isForm,
                  o = t.isDirty,
                  a = n.actions.showConfirmationModal;
                return !(r && o && n.first) || ((n.first = !1), a(e), !1);
              }),
              n
            );
          }
          return (
            (0, s.default)(t, [
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
                    a = e.menu,
                    i = e.onBack,
                    l = e.title,
                    s = e.translations,
                    u = e.confirmationModal,
                    c = e.isForm,
                    E = e.isDirty,
                    _ = this.actions,
                    d = _.showConfirmationModal,
                    T = _.hideConfirmationModal,
                    N = _.handleConfirmNavigationClick,
                    C = s.GENERAL_CANCEL,
                    A = s.GENERAL_CONTINUE,
                    f = s.BACK_BUTTON_MODAL_TEXT,
                    p = s.BACK_BUTTON_MODAL_TITLE;
                  return (0, g.jsxs)(M, {
                    children: [
                      !!r && (0, g.jsx)(m.gb, {}),
                      t &&
                        (0, g.jsxs)("div", {
                          children: [
                            (0, g.jsx)(m.xE, {
                              id: "PageAdaptable_BackButton",
                              onClick: c && E ? d : i,
                            }),
                            o,
                          ],
                        }),
                      !t &&
                        (0, g.jsxs)("div", {
                          children: [
                            (0, g.jsx)(m.V1, { mobile: t, children: l }),
                            (0, g.jsx)(R, { children: a }),
                            (0, g.jsx)(x, { children: o }),
                          ],
                        }),
                      (0, g.jsx)(m.u_, {
                        size: "small",
                        open: u,
                        children: (0, g.jsxs)("div", {
                          children: [
                            (0, g.jsx)(m.xB, { title: p }),
                            (0, g.jsx)(m.hz, {
                              padding: !0,
                              size: "small",
                              mobile: t,
                              children: (0, g.jsx)(m.ZT, { children: f }),
                            }),
                            (0, g.jsxs)(m.Zf, {
                              children: [
                                (0, g.jsx)(m.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    ((n.first = !0), T());
                                  },
                                  children: C,
                                }),
                                (0, g.jsx)(m.zx, {
                                  id: "Button_Continue",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function (n) {
                                    t ? (T(), i(n)) : N(n);
                                  },
                                  children: A,
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
        })(E.Component),
        b = p(v),
        M = h.ZP.div(
          r ||
            (r = (0, i.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n    padding-right: 0px;\n  }\n",
            ])),
        ),
        R = h.ZP.div(
          o ||
            (o = (0, i.default)([
              "\n  width: 40%;\n  padding-right: 5%;\n  float: left;\n  position: relative;\n  color: #fff;\n  margin-top: 25px;\n",
            ])),
        ),
        x = h.ZP.div(
          a ||
            (a = (0, i.default)([
              "\n  width: 60%;\n  float: left;\n  padding-right: 0;\n",
            ])),
        );
    },
    93983: function (n, e, t) {
      "use strict";
      t.d(e, {
        Z: function () {
          return h;
        },
      });
      var r,
        o,
        a,
        i,
        l = t(56824),
        s = t(30225),
        u = t(94404),
        c = t(14482),
        E = t(5189),
        _ = t(76431),
        d = t(84628),
        T = t(49318),
        N = (0, d.Jg)({
          connect: { props: [T.Z, ["isMobile", "translations"]] },
        }),
        C = t(30588),
        A = t(22247),
        f = t(31228),
        p = (function (n) {
          (0, c.default)(t, n);
          var e = (0, E.default)(t);
          function t() {
            return ((0, s.default)(this, t), e.apply(this, arguments));
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
                    a = (0, f.jsxs)("div", {
                      children: [(0, f.jsx)(v, {}), (0, f.jsx)(b, {})],
                    });
                  return (0, f.jsx)(m, {
                    margin: o,
                    children:
                      r &&
                      r.map(function (n) {
                        var r = n.key,
                          o = n.icon,
                          i = n.title,
                          l = n.onClick,
                          s = n.disabled,
                          u = n.link,
                          c = n.color,
                          E = n.hidden,
                          _ = n.notifications,
                          d = n.id;
                        return E
                          ? ""
                          : (0, f.jsxs)(
                              g,
                              {
                                active: e === r,
                                mobile: t,
                                color: c ? c + "!important" : void 0,
                                link: u,
                                children: [
                                  (0, f.jsx)(A.Lr, {
                                    id: d,
                                    icon: o,
                                    mobile: t,
                                    title: i,
                                    onClick: l,
                                    link: u,
                                    disabled: s,
                                    notifications: _,
                                  }),
                                  e === r && a,
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
        })(_.PureComponent),
        h = N(p),
        m = C.ZP.div(
          r || (r = (0, l.default)(["\n  margin: ", ";\n"])),
          function (n) {
            return n.margin;
          },
        ),
        g = C.ZP.div(
          o ||
            (o = (0, l.default)([
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
        v = C.ZP.div(
          a ||
            (a = (0, l.default)([
              "\n  position: absolute;\n  height: 56px;\n  width: 100%;\n  background-color: #007bc1;\n  z-index: 2;\n  top: 0;\n  left: 0;\n",
            ])),
        ),
        b = C.ZP.div(
          i ||
            (i = (0, l.default)([
              "\n  position: absolute;\n  height: 10px;\n  width: calc(100% - 48px);\n  opacity: 0.4;\n  background-color: #0067c6;\n  box-shadow: 0 0 20px 0 #424e54;\n  bottom: 0;\n  right: 24px;\n  z-index: 1;\n",
            ])),
        );
    },
    66491: function (n, e, t) {
      "use strict";
      (t.r(e),
        t.d(e, {
          MaintenanceTechParams: function () {
            return X;
          },
          default: function () {
            return z;
          },
        }));
      var r,
        o,
        a,
        i,
        l = t(56824),
        s = t(30225),
        u = t(94404),
        c = t(14482),
        E = t(5189),
        _ = t(76431),
        d = t(87121),
        T = t(2845),
        N = t(84628),
        C = t(83749),
        A = t(90012),
        f = t(13795),
        p = t(98278),
        h = t.n(p),
        m = t(49745),
        g = t(49318),
        v = "".concat(f.CT, "/technical/status"),
        b = {
          operationMode: null,
          gridVoltage: null,
          gridFrequency: null,
          currentToGrid: null,
          inverterPower: null,
          inverterTemperature: null,
          busVoltage: null,
          gridCode: null,
          dcCurrentInjectionR: null,
          dcCurrentInjectionS: null,
          dcCurrentInjectionT: null,
          inverterModel: null,
          pv1Voltage: null,
          pv1Current: null,
          pv2Voltage: null,
          pv2Current: null,
          bmsVoltage: null,
          bmsCurrent: null,
          bmsTemperature: null,
          bmsAvgTemperature: null,
          bmsMaxTemperature: null,
          bmsMinTemperature: null,
          bmsTotalCharge: null,
          bmsTotalDischarge: null,
          bmsStateOfCharge: null,
          bmsState: null,
          bmsFaultCode: null,
          bmsHighestCellVoltage: null,
          bmsLowestCellVoltage: null,
          tidaProtocolVersion: null,
          invBootloaderVersion: null,
          meters: [
            {
              number: null,
              voltage: null,
              current: null,
              activePower: null,
              reactivePower: null,
              powerFactor: null,
              frequency: null,
            },
          ],
        },
        M = (0, N.Jg)({
          path: function () {
            return ["scenes", "MaintenanceTechParams"];
          },
          connect: {
            props: [g.Z, ["isMobile", "translations", "currentDevice"]],
            actions: [g.Z, ["push"]],
          },
          actions: function () {
            return {
              setParamsValues: function (n) {
                return { values: n };
              },
              getParamsValue: function () {
                return !0;
              },
              reset: function () {
                return !0;
              },
              setBmsFaultCodeModal: function (n) {
                return { state: n };
              },
              setLoading: function (n) {
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
              paramsValues: [
                b,
                h().object,
                ((e = {}),
                (0, T.Z)(e, o.setParamsValues, function (n, e) {
                  return e.values;
                }),
                (0, T.Z)(e, o.reset, function () {
                  return b;
                }),
                e),
              ],
              bmsFaultCodeModal: [
                !1,
                h().bool,
                ((t = {}),
                (0, T.Z)(t, o.setBmsFaultCodeModal, function (n, e) {
                  return e.state;
                }),
                (0, T.Z)(t, o.reset, function () {
                  return !1;
                }),
                t),
              ],
              loading: [
                !1,
                h().bool,
                ((r = {}),
                (0, T.Z)(r, o.setLoading, function (n, e) {
                  return e;
                }),
                (0, T.Z)(r, o.reset, function () {
                  return !1;
                }),
                r),
              ],
            };
          },
          start: (0, d.Z)().mark(function n() {
            var e, t, r;
            return (0, d.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (e = this.actionCreators),
                        (t = e.setLoading),
                        (r = e.getParamsValue),
                        (n.next = 3),
                        (0, C.gz)(t(!0))
                      );
                    case 3:
                      return ((n.next = 5), (0, C.gz)(r()));
                    case 5:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this,
            );
          }),
          stop: (0, d.Z)().mark(function n() {
            var e;
            return (0, d.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (e = this.actionCreators.reset),
                        (n.next = 3),
                        (0, C.gz)(e())
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
            return (0, T.Z)({}, e.getParamsValue, t.getParamsValue);
          },
          workers: {
            getParamsValue: (0, d.Z)().mark(function () {
              var n, e, t, r, o, a, i, l, s;
              return (0, d.Z)().wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return (
                          (u.prev = 0),
                          (u.next = 3),
                          this.get("currentDevice")
                        );
                      case 3:
                        return (
                          (n = u.sent),
                          (e = (0, A.generateUrl)(v, { id: n.id })),
                          (u.next = 7),
                          (0, C.RE)(m.Z.get, e)
                        );
                      case 7:
                        return (
                          (t = u.sent),
                          (r = t.data.result),
                          (o = this.actionCreators),
                          (a = o.setParamsValues),
                          (i = o.setLoading),
                          (l = o.getParamsValue),
                          (u.next = 12),
                          (0, C.gz)(a(r))
                        );
                      case 12:
                        return ((u.next = 14), (0, C.gz)(i(!1)));
                      case 14:
                        return ((s = f.E2), (u.next = 17), (0, C.gw)(s));
                      case 17:
                        return ((u.next = 19), (0, C.gz)(l()));
                      case 19:
                        u.next = 26;
                        break;
                      case 21:
                        return (
                          (u.prev = 21),
                          (u.t0 = u.catch(0)),
                          console.log(u.t0),
                          (u.next = 26),
                          (0, C.gz)(this.actionCreators.setLoading(!1))
                        );
                      case 26:
                      case "end":
                        return u.stop();
                    }
                },
                l,
                this,
                [[0, 21]],
              );
            }),
          },
        }),
        R = t(21649),
        x = function (n) {
          var e = {
            voltage: [],
            current: [],
            activePower: [],
            reactivePower: [],
            powerFactor: [],
            frequency: [],
          };
          return (
            n.map(function (n) {
              var t = 0;
              return (
                "S" === n.phaseType ? (t = 1) : "T" === n.phaseType && (t = 2),
                (e.voltage[t] = (0, R.round)(n.voltage, 2)),
                (e.current[t] = (0, R.round)(n.current, 2)),
                (e.activePower[t] = (0, R.round)(n.activePower, 2)),
                (e.reactivePower[t] = (0, R.round)(n.reactivePower, 2)),
                (e.powerFactor[t] = (0, R.round)(n.powerFactor, 2)),
                (e.frequency[t] = (0, R.round)(n.frequency, 2)),
                e
              );
            }),
            (e.voltage = e.voltage.join(", ")),
            (e.current = e.current.join(", ")),
            (e.activePower = e.activePower.join(", ")),
            (e.reactivePower = e.reactivePower.join(", ")),
            (e.powerFactor = e.powerFactor.join(", ")),
            (e.frequency = e.frequency[0]),
            e
          );
        },
        I = {
          VDE0126: "MAINTENANCE_GRIDCODE_VDE0126",
          VDE0126_1_1_A1: "MAINTENANCE_GRIDCODE_VDE0126_1_1_A1",
          VDE_AR_N_4105: "MAINTENANCE_GRIDCODE_VDE_AR_N_4105",
          CEI_0_21: "MAINTENANCE_GRIDCODE_CEI_0_21",
          RD_1699: "MAINTENANCE_GRIDCODE_RD_1699",
          UK_G59: "MAINTENANCE_GRIDCODE_UK_G59",
          UK_G83: "MAINTENANCE_GRIDCODE_UK_G83",
          UTE: "MAINTENANCE_GRIDCODE_UTE",
          UTE_ISLAND_50: "MAINTENANCE_GRIDCODE_UTE_ISLAND_50HZ",
          UTE_ISLAND_60: "MAINTENANCE_GRIDCODE_UTE_ISLAND_60HZ",
          EN50438_NO: "MAINTENANCE_GRIDCODE_EN50438_NO",
          EN50438_PT: "MAINTENANCE_GRIDCODE_EN50438_PT",
          EN50438_CZ: "MAINTENANCE_GRIDCODE_EN50438_CZ",
          EN50438_NL: "MAINTENANCE_GRIDCODE_EN50438_NL",
          C10_C11: "MAINTENANCE_GRIDCODE_C10_C11",
          ONORM: "MAINTENANCE_GRIDCODE_ONORM",
          EN50438_IE: "MAINTENANCE_GRIDCODE_EN50438_IE",
          EN50438_FI: "MAINTENANCE_GRIDCODE_EN50438_FI",
          NIE_G59_230: "MAINTENANCE_GRIDCODE_NIE_G59_230V",
          NIE_G83_230: "MAINTENANCE_GRIDCODE_NIE_G83_230V",
          NIE_G59_240: "MAINTENANCE_GRIDCODE_NIE_G59_240V",
          NIE_G83_240: "MAINTENANCE_GRIDCODE_NIE_G83_240V",
          UNKNOWN: "MAINTENANCE_GRIDCODE_UNKNOWN",
          NO_GRID_CODE: "MAINTENANCE_GRIDCODE_NOGRIDCODE",
          GUYANA: "MAINTENANCE_GRIDCODE_GUYANA",
          RSA_NRS_097_2_1: "MAINTENANCE_GRIDCODE_RSA_NRS_097_2_1",
          UK_G98: "MAINTENANCE_GRIDCODE_UK_G98",
          UK_G99: "MAINTENANCE_GRIDCODE_UK_G99",
          CEI_0_21_2019: "MAINTENANCE_GRIDCODE_CEI_0_21_2019",
          VDE_4105_2018: "MAINTENANCE_GRIDCODE_VDE_4105_2018",
        },
        P = function (n) {
          if (!n) return null;
          return { "03.07": "v1", "03.08": "v2", "04.00": "v4" }[n];
        },
        O = t(30588),
        S = t(23594),
        j = t.n(S),
        D = t(77835),
        V = t(36082),
        w = t(81139),
        k = (0, N.Jg)({
          path: function () {
            return ["scenes", "containers", "MaintenanceTechParamsMeterPhases"];
          },
          connect: { props: [g.Z, ["translations"]] },
        }),
        U = t(22247),
        G = t(31228),
        Z = (function (n) {
          (0, c.default)(t, n);
          var e = (0, E.default)(t);
          function t() {
            return ((0, s.default)(this, t), e.apply(this, arguments));
          }
          return (
            (0, u.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.translations,
                    t = n.meterPhaseValues,
                    r = e.MAINTENANCE_TECH_PARAMS_METER_VOLTAGE,
                    o = e.MAINTENANCE_TECH_PARAMS_METER_CURRENT,
                    a = e.MAINTENANCE_TECH_PARAMS_METER_ACTIVE_POWER,
                    i = e.MAINTENANCE_TECH_PARAMS_METER_REACTIVE_POWER,
                    l = e.MAINTENANCE_TECH_PARAMS_METER_POWER_FACTOR,
                    s = e.MAINTENANCE_TECH_PARAMS_METER_FREQUENCY;
                  return (0, G.jsxs)(G.Fragment, {
                    children: [
                      (0, G.jsx)(U.fX, {
                        id: "LabelValueInline_Voltage",
                        label: r,
                        value:
                          t && null !== t.voltage
                            ? "".concat(t.voltage, " V")
                            : "--",
                      }),
                      (0, G.jsx)(U.fX, {
                        id: "LabelValueInline_Current",
                        label: o,
                        value:
                          t && null !== t.current
                            ? "".concat(t.current, " A")
                            : "--",
                      }),
                      (0, G.jsx)(U.fX, {
                        id: "LabelValueInline_ActivePower",
                        label: a,
                        value:
                          t && null !== t.activePower
                            ? "".concat(t.activePower, " W")
                            : "--",
                      }),
                      (0, G.jsx)(U.fX, {
                        id: "LabelValueInline_ReactivePower",
                        label: i,
                        value:
                          t && null !== t.reactivePower
                            ? "".concat(t.reactivePower, " VAR")
                            : "--",
                      }),
                      (0, G.jsx)(U.fX, {
                        id: "LabelValueInline_PowerFactor",
                        label: l,
                        value: (t && t.powerFactor) || "--",
                      }),
                      (0, G.jsx)(U.fX, {
                        id: "LabelValueInline_Frequency",
                        label: s,
                        value:
                          t && null !== t.frequency
                            ? "".concat(t.frequency, " Hz")
                            : "--",
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(_.Component),
        F = k(Z),
        y = (0, N.Jg)({
          path: function () {
            return ["scenes", "containers", "BmsFaultCodeModal"];
          },
          connect: { props: [g.Z, ["translations", "isMobile"]], actions: [] },
        }),
        B = (function (n) {
          (0, c.default)(t, n);
          var e = (0, E.default)(t);
          function t() {
            return ((0, s.default)(this, t), e.apply(this, arguments));
          }
          return (
            (0, u.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.open,
                    t = n.onClose,
                    r = n.bmsfaultcode,
                    o = n.isMobile,
                    a = n.translations,
                    i = a.MAINTENANCE_TECH_PARAMS_BMS_FAULT_CODE,
                    l = a.MAINTENANCE_ERROR,
                    s = a.MAINTENANCE_ERRORS,
                    u = [];
                  return (
                    r &&
                      r.forEach(function (n) {
                        u.push(a["MAINTENANCE_BMSFAULTCODE_".concat(n)]);
                      }),
                    (0, G.jsx)(L, {
                      children: (0, G.jsx)(U.u_, {
                        open: e || !1,
                        size: "medium",
                        onClose: t,
                        children: (0, G.jsxs)("div", {
                          children: [
                            (0, G.jsx)(U.xB, {
                              title: i,
                              subtitle: r
                                ? ""
                                    .concat(r.length, " ")
                                    .concat(1 === r.length ? l : s)
                                : null,
                              closeButton: !0,
                              onClose: t,
                            }),
                            (0, G.jsx)(U.hz, {
                              type: "diagonal",
                              size: "medium",
                              mobile: o,
                              children: (0, G.jsx)(U.aV, {
                                children:
                                  u &&
                                  u.map(function (n, e) {
                                    return (0, G.jsx)(
                                      U.Wq,
                                      { title: n, shadow: !0 },
                                      e,
                                    );
                                  }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    })
                  );
                },
              },
            ]),
            t
          );
        })(_.Component),
        H = y(B),
        L = O.ZP.div(r || (r = (0, l.default)([""]))),
        X = (function (n) {
          (0, c.default)(t, n);
          var e = (0, E.default)(t);
          function t() {
            var n;
            (0, s.default)(this, t);
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
            (0, u.default)(t, [
              {
                key: "render",
                value: function () {
                  var n,
                    e = this,
                    t = this.props,
                    r = t.translations,
                    o = t.isMobile,
                    a = t.paramsValues,
                    i = t.bmsFaultCodeModal,
                    l = t.loading,
                    s = this.actions.setBmsFaultCodeModal,
                    u = r.MAINTENANCE_TECH_PARAMS,
                    c = r.MAINTENANCE_TITLE,
                    E = r.MAINTENANCE_TECH_PARAMS_SYSTEM,
                    d = r.MAINTENANCE_TECH_PARAMS_OPERATION_MODE,
                    T = r.MAINTENANCE_TECH_PARAMS_GRID_VOLTAGE,
                    N = r.MAINTENANCE_TECH_PARAMS_GRID_FREQUENCY,
                    C = r.MAINTENANCE_TECH_PARAMS_CURRENT_TO_GRID,
                    A = r.MAINTENANCE_TECH_PARAMS_BUS_VOLTAGE,
                    f = r.MAINTENANCE_TECH_PARAMS_INVERTER_POWER,
                    p = r.MAINTENANCE_TECH_PARAMS_GRID_CODE,
                    h = r.MAINTENANCE_TECH_PARAMS_INVERTER_TEMPERATURE,
                    m = r.MAINTENANCE_TECH_PARAMS_INVERTER_MODEL,
                    g = r.MAINTENANCE_TECH_PARAMS_PHOTOVOLTAIC_PANEL,
                    v = r.MAINTENANCE_TECH_PARAMS_PV_CURRENT_1,
                    b = r.MAINTENANCE_TECH_PARAMS_PV_CURRENT_2,
                    M = r.MAINTENANCE_TECH_PARAMS_PV_VOLTAGE_1,
                    R = r.MAINTENANCE_TECH_PARAMS_PV_VOLTAGE_2,
                    O = r.MAINTENANCE_TECH_PARAMS_BATTERY,
                    S = r.MAINTENANCE_TECH_PARAMS_VOLTAGE,
                    k = r.MAINTENANCE_TECH_PARAMS_CURRENT,
                    Z = r.MAINTENANCE_TECH_PARAMS_TEMPERATURE,
                    y = r.MAINTENANCE_TECH_PARAMS_AVERAGE_TEMPERATURE,
                    B = r.MAINTENANCE_TECH_PARAMS_MAX_TEMPERATURE,
                    L = r.MAINTENANCE_TECH_PARAMS_MIN_TEMPERATURE,
                    X = r.MAINTENANCE_TECH_PARAMS_TOTAL_CHARGE,
                    z = r.MAINTENANCE_TECH_PARAMS_TOTAL_DISCHARGE,
                    Y = r.MAINTENANCE_TECH_PARAMS_STATE_CHARGE,
                    J = r.MAINTENANCE_TECH_PARAMS_BMS_CHARGE,
                    Q = r.MAINTENANCE_TECH_PARAMS_BMS_FAULT_CODE,
                    $ = r.MAINTENANCE_TECH_PARAMS_HIGHEST_CELL_VOLTAGE,
                    nn = r.MAINTENANCE_TECH_PARAMS_LOWEST_CELL_VOLTAGE,
                    en = r.MAINTENANCE_TECH_PARAMS_METER,
                    tn = r.MAINTENANCE_ERRORS,
                    rn = r.MAINTENANCE_ERROR,
                    on = r.MAINTENANCE_TECH_PARAMS_INVERTER_BOOTLOADER,
                    an = r.MAINTENANCE_TECH_PARAMS_INVERTER_POWER_RATE;
                  return (0, G.jsx)(W, {
                    children: (0, G.jsxs)(V.Z, {
                      title: c,
                      menu: (0, G.jsx)(w.Z, { page: "tech-params" }),
                      onBack: function () {
                        return e.navigate("/maintenance/");
                      },
                      isForm: !1,
                      isDirty: !1,
                      loading: l,
                      children: [
                        (0, G.jsxs)(U.e0, {
                          padding: !0,
                          mobile: o,
                          children: [
                            (0, G.jsx)(U.V1, { mobile: o, children: u }),
                            (0, G.jsxs)(q, {
                              mobile: o,
                              children: [
                                (0, G.jsx)(D.Z, { variant: "h4", children: E }),
                                (0, G.jsx)(U.fX, {
                                  id: "OperationMode",
                                  label: d,
                                  value:
                                    r[
                                      "BATTERY_MODE_".concat(a.operationMode)
                                    ] || "--",
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "GridVoltage",
                                  label: T,
                                  value:
                                    null !== a.gridVoltage
                                      ? "".concat(j()(a.gridVoltage, 2), " V")
                                      : "--",
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "GridFrequency",
                                  label: N,
                                  value:
                                    null !== a.gridFrequency
                                      ? "".concat(
                                          j()(a.gridFrequency, 2),
                                          " Hz",
                                        )
                                      : "--",
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "CurrentToGrid",
                                  label: C,
                                  value:
                                    null !== a.currentToGrid
                                      ? "".concat(j()(a.currentToGrid, 2), " A")
                                      : "--",
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "InverterPower",
                                  label: f,
                                  value:
                                    null !== a.inverterPower
                                      ? "".concat(j()(a.inverterPower, 2), " W")
                                      : "--",
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "InverterTemperature",
                                  label: h,
                                  value:
                                    null !== a.inverterTemperature
                                      ? "".concat(
                                          j()(a.inverterTemperature, 2),
                                          " \xbaC",
                                        )
                                      : "--",
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "BusVoltage",
                                  label: A,
                                  value:
                                    null !== a.busVoltage
                                      ? "".concat(j()(a.busVoltage, 2), " V")
                                      : "--",
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "GridCode",
                                  label: p,
                                  value:
                                    null !== a.gridCode
                                      ? r[((n = a.gridCode), I[n])]
                                      : "--",
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "TidaProtocolVersion",
                                  label: m,
                                  value: a.tidaProtocolVersion || "--",
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "inverterPowerRating",
                                  label: an,
                                  value:
                                    a.inverterPowerRating &&
                                    0 !== a.inverterPowerRating
                                      ? "".concat(a.inverterPowerRating, " kW")
                                      : "--",
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "InverterBootloader",
                                  label: on,
                                  value: P(a.invBootloaderVersion) || "--",
                                }),
                                (0, G.jsx)(K, { variant: "h4", children: g }),
                                (0, G.jsx)(U.fX, {
                                  id: "Pv1Current",
                                  label: v,
                                  value:
                                    null !== a.pv1Current
                                      ? "".concat(j()(a.pv1Current, 2), " A")
                                      : "--",
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "Pv1Voltage",
                                  label: M,
                                  value:
                                    null !== a.pv1Voltage
                                      ? "".concat(j()(a.pv1Voltage, 2), " V")
                                      : "--",
                                }),
                                "1.1" === a.tidaProtocolVersion &&
                                  (0, G.jsxs)(G.Fragment, {
                                    children: [
                                      (0, G.jsx)(U.fX, {
                                        id: "Pv2Current",
                                        label: b,
                                        value:
                                          null !== a.pv2Current
                                            ? "".concat(
                                                j()(a.pv2Current, 2),
                                                " A",
                                              )
                                            : "--",
                                      }),
                                      (0, G.jsx)(U.fX, {
                                        id: "Pv2Voltage",
                                        label: R,
                                        value:
                                          null !== a.pv2Voltage
                                            ? "".concat(
                                                j()(a.pv2Voltage, 2),
                                                " V",
                                              )
                                            : "--",
                                      }),
                                    ],
                                  }),
                                (0, G.jsx)(K, { variant: "h4", children: O }),
                                (0, G.jsx)(U.fX, {
                                  id: "BmsVoltage",
                                  label: S,
                                  value:
                                    null !== a.bmsVoltage
                                      ? "".concat(j()(a.bmsVoltage, 2), " V")
                                      : "--",
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "BmsCurrent",
                                  label: k,
                                  value:
                                    null !== a.bmsCurrent
                                      ? "".concat(j()(a.bmsCurrent, 2), " A")
                                      : "--",
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "BmsTemperature",
                                  label: Z,
                                  value:
                                    null !== a.bmsTemperature
                                      ? "".concat(
                                          j()(a.bmsTemperature, 2),
                                          " \xbaC",
                                        )
                                      : "--",
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "BmsAvgTemperature",
                                  label: y,
                                  value:
                                    null !== a.bmsAvgTemperature
                                      ? "".concat(
                                          j()(a.bmsAvgTemperature, 2),
                                          " \xbaC",
                                        )
                                      : "--",
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "BmsMaxTemperature",
                                  label: B,
                                  value:
                                    null !== a.bmsMaxTemperature
                                      ? "".concat(
                                          j()(a.bmsMaxTemperature, 2),
                                          " \xbaC",
                                        )
                                      : "--",
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "BmsMinTemperature",
                                  label: L,
                                  value:
                                    null !== a.bmsMinTemperature
                                      ? "".concat(
                                          j()(a.bmsMinTemperature, 2),
                                          " \xbaC",
                                        )
                                      : "--",
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "BmsTotalCharge",
                                  label: X,
                                  value:
                                    null !== a.bmsTotalCharge
                                      ? "".concat(
                                          j()(a.bmsTotalCharge, 2),
                                          " Ah",
                                        )
                                      : "--",
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "BmsTotalDischarge",
                                  label: z,
                                  value:
                                    null !== a.bmsTotalDischarge
                                      ? "".concat(
                                          j()(a.bmsTotalDischarge, 2),
                                          " Ah",
                                        )
                                      : "--",
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "StateOfCharge",
                                  label: Y,
                                  value:
                                    null !== a.bmsStateOfCharge
                                      ? "".concat(
                                          j()(a.bmsStateOfCharge, 2),
                                          "%",
                                        )
                                      : "--",
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "BmsCharge",
                                  label: J,
                                  value:
                                    r[
                                      "MAINTENANCE_BATTERY_STATUS_".concat(
                                        a.bmsState,
                                      )
                                    ] || "--",
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "BmsFaultCode",
                                  label: Q,
                                  value:
                                    null !== a.bmsFaultCode
                                      ? ""
                                          .concat(a.bmsFaultCode.length, " ")
                                          .concat(
                                            1 === a.bmsFaultCode.length
                                              ? rn
                                              : tn,
                                          )
                                      : "--",
                                  onClick:
                                    null !== a.bmsFaultCode &&
                                    a.bmsFaultCode.length > 0
                                      ? function () {
                                          return s(!0);
                                        }
                                      : null,
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "BmsHighestCellVoltage",
                                  label: $,
                                  value:
                                    null !== a.bmsHighestCellVoltage
                                      ? "".concat(
                                          j()(a.bmsHighestCellVoltage, 2),
                                          " mV",
                                        )
                                      : "--",
                                }),
                                (0, G.jsx)(U.fX, {
                                  id: "BmsLowestCellVoltage",
                                  label: nn,
                                  value:
                                    null !== a.bmsLowestCellVoltage
                                      ? "".concat(
                                          j()(a.bmsLowestCellVoltage, 2),
                                          " mV",
                                        )
                                      : "--",
                                }),
                                a.meters &&
                                  a.meters.map(function (n) {
                                    return (0, G.jsx)(
                                      _.Fragment,
                                      {
                                        children:
                                          n.phases &&
                                          (0, G.jsxs)(G.Fragment, {
                                            children: [
                                              (0, G.jsxs)(K, {
                                                variant: "h4",
                                                children: [en, " ", n.number],
                                              }),
                                              (0, G.jsx)(F, {
                                                meterPhaseValues: x(n.phases),
                                              }),
                                            ],
                                          }),
                                      },
                                      n.number,
                                    );
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, G.jsx)(H, {
                          open: i,
                          onClose: function () {
                            return s(!1);
                          },
                          bmsfaultcode: a.bmsFaultCode,
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            t
          );
        })(_.Component),
        z = M(X),
        W = O.ZP.div(o || (o = (0, l.default)([""]))),
        q = O.ZP.div(
          a ||
            (a = (0, l.default)([
              "\n  overflow-y: auto;\n  padding-right: 2%;\n  max-height: calc(100vh - 350px);\n\n  &&::-webkit-scrollbar {\n    -webkit-appearance: none;\n    width: 7px;\n  }\n  &&::-webkit-scrollbar-thumb {\n    border-radius: 4px;\n    background-color: rgba(0, 0, 0, 0.5);\n    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);\n  }\n\n  ",
              "\n",
            ])),
          function (n) {
            return n.mobile && "\n    max-height: calc(100vh - 220px)\n  ";
          },
        ),
        K = (0, O.ZP)(D.Z)(
          i ||
            (i = (0, l.default)(["\n  &&&& {\n    margin: 40px 0 0;\n  }\n"])),
        );
    },
    60646: function (n, e, t) {
      var r = t(76682),
        o = t(25247),
        a = t(13479),
        i = t(40993),
        l = r.isFinite,
        s = Math.min;
      n.exports = function (n) {
        var e = Math[n];
        return function (n, t) {
          if (((n = a(n)), (t = null == t ? 0 : s(o(t), 292)) && l(n))) {
            var r = (i(n) + "e").split("e"),
              u = e(r[0] + "e" + (+r[1] + t));
            return +((r = (i(u) + "e").split("e"))[0] + "e" + (+r[1] - t));
          }
          return e(n);
        };
      };
    },
    23594: function (n, e, t) {
      var r = t(60646)("round");
      n.exports = r;
    },
  },
]);
//# sourceMappingURL=6491.769be33d.chunk.js.map
