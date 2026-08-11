(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [9061],
  {
    84748: function (n, t, e) {
      "use strict";
      var i,
        r = e(56824),
        o = e(30588);
      t.Z = o.ZP.h2(
        i ||
          (i = (0, r.default)([
            "\n  font-size: 16px;\n  color: #333F48;\n  text-transform: uppercase;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  margin: ",
            ";\n",
          ])),
        function (n) {
          return n.headermargin;
        },
      );
    },
    81139: function (n, t, e) {
      "use strict";
      e.d(t, {
        Z: function () {
          return N;
        },
      });
      var i,
        r,
        o,
        a,
        s = e(56824),
        c = e(30225),
        u = e(94404),
        l = e(14482),
        d = e(5189),
        f = e(76431),
        p = e(87121),
        h = e(2845),
        x = e(84628),
        g = e(98278),
        T = e.n(g),
        m = e(83749),
        b = e(49745),
        k = e(13795),
        S = e(49318),
        v = "".concat(k.CT, "/commcard/reboot"),
        C = (0, x.Jg)({
          path: function () {
            return ["scenes", "containers", "MaintenanceMenu"];
          },
          connect: {
            props: [S.Z, ["isMobile", "translations", "configs"]],
            actions: [S.Z, ["push"]],
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
                T().bool,
                ((t = {}),
                (0, h.Z)(t, r.setSuccessfullyRebooting, function (n, t) {
                  return t;
                }),
                (0, h.Z)(t, r.reset, function () {
                  return !1;
                }),
                t),
              ],
              rebootModal: [
                !1,
                T().bool,
                ((e = {}),
                (0, h.Z)(e, r.setRebootModal, function (n, t) {
                  return t;
                }),
                (0, h.Z)(e, r.setSuccessfullyRebooting, function () {
                  return !1;
                }),
                (0, h.Z)(e, r.reset, function () {
                  return !1;
                }),
                e),
              ],
              rebootStarted: [
                !1,
                T().bool,
                ((i = {}),
                (0, h.Z)(i, r.setSuccessfullyRebooting, function () {
                  return !0;
                }),
                (0, h.Z)(i, r.reset, function () {
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
            return (0, h.Z)({}, t.rebootUnit, e.rebootUnit);
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
                          (0, m.RE)(b.Z.post, v)
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
        _ = e(30588),
        E = e(48229),
        I = e(93983),
        Z = e(22247),
        M = e(31228),
        P = (function (n) {
          (0, l.default)(e, n);
          var t = (0, d.default)(e);
          function e() {
            var n;
            (0, c.default)(this, e);
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
            (0, u.default)(e, [
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
                    s = t.configs,
                    c = r.MAINTENANCE_TECH_PARAMS,
                    u = r.UNITSETT_SUPPORT_MONITORING,
                    l = r.UNITSETT_SUPPORT_DATETIMESYNC,
                    d = r.UNITSETT_SUPPORT_UNITLOG,
                    f = r.UNITSETT_SUPPORT_REBOOTUNIT_COMMCARD,
                    p = r.UNITSETT_SUPPORT_REBOOTUNIT_SUBMIT,
                    h = r.UNITSETT_SUPPORT_REBOOTUNIT_NOTE,
                    x = r.UNITSETT_SUPPORT_REBOOTUNIT_CONFIRMATION,
                    g = r.UNITSETT_SUPPORT_REBOOTUNIT_CANCEL,
                    T = r.UNITSETT_SUPPORT_SSH_STATUS,
                    m = r.UNITSETT_SUPPORT_HTTPS,
                    b = r.UNITSETT_SUPPORT_REBOOTUNIT_REBOOTSTARTED,
                    S = r.UNITSETT_SUPPORT_REBOOTUNIT_REBOOTSTARTED_DESC,
                    v = this.actions,
                    C = v.setRebootModal,
                    _ = v.rebootUnit,
                    P = s
                      ? [
                          {
                            id: "TechParams",
                            key: "tech-params",
                            icon: (0, M.jsx)(U, {
                              transformproperty: "rotate(180deg)",
                              children: "error_outline",
                            }),
                            title: c,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/techparams");
                            },
                            disabled: s && s.userType !== k.cC,
                          },
                          {
                            id: "DatetimeSync",
                            key: "datetime-sync",
                            icon: (0, M.jsx)(Z.VE, {
                              fillColor: i ? "#007BC1" : "#FFFFFF",
                            }),
                            title: l,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/datetime-sync");
                            },
                            disabled: s && s.userType !== k.cC,
                          },
                          {
                            id: "Monitoring",
                            key: "monitoring",
                            icon: (0, M.jsx)(Z.Q9, {
                              fillColor: i ? "#007BC1" : "#FFFFFF",
                            }),
                            title: u,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/monitoring");
                            },
                            disabled: s && s.userType !== k.cC,
                          },
                          {
                            id: "UnitLog",
                            key: "unit-log",
                            icon: (0, M.jsx)(Z.oy, {
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
                            icon: (0, M.jsx)(Z.CB, {
                              fillColor: i ? "#007BC1!important" : "#FFFFFF",
                            }),
                            title: T,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/ssh-connection");
                            },
                            disabled: s && s.userType !== k.cC,
                          },
                          {
                            id: "HTTPSTunnel",
                            key: "https-tunnel",
                            icon: (0, M.jsx)(E.Z, { children: "https" }),
                            title: m,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/https-tunnel");
                            },
                          },
                          {
                            id: "RebootUnit",
                            key: "reboot-unit",
                            icon: (0, M.jsx)(E.Z, {
                              children: "power_settings_new",
                            }),
                            title: f,
                            color: i ? "#CA3C3D" : "#EFC5C5",
                            onClick: function () {
                              return C(!0);
                            },
                          },
                        ]
                      : [],
                    N = Object.keys(r).filter(function (n) {
                      return /UNITSETT_SUPPORT_REBOOTUNIT_INFOPOINT(\d+)/.test(
                        n,
                      );
                    });
                  return (0, M.jsxs)(j, {
                    children: [
                      (0, M.jsx)(I.Z, { items: P, page: e }),
                      a &&
                        (0, M.jsx)(Z.mJ, {
                          icon: (0, M.jsx)(E.Z, { children: "report" }),
                          title: b,
                          text: (0, M.jsx)(y, { children: S }),
                          mobile: i,
                        }),
                      (0, M.jsx)(Z.u_, {
                        open: o,
                        size: "large",
                        onClose: function () {
                          return C(!1);
                        },
                        children: (0, M.jsxs)("div", {
                          children: [
                            (0, M.jsx)(Z.xB, { red: !0, title: f }),
                            (0, M.jsxs)(Z.hz, {
                              padding: !0,
                              size: "large",
                              mobile: i,
                              children: [
                                (0, M.jsx)(O, { children: h }),
                                (0, M.jsx)(Z.Gn, {
                                  children: N.map(function (n) {
                                    return (0, M.jsx)(
                                      Z.E9,
                                      { children: r[n] },
                                      n,
                                    );
                                  }),
                                }),
                                (0, M.jsx)(Z.ZT, {
                                  variant: "body1",
                                  children: x,
                                }),
                              ],
                            }),
                            (0, M.jsxs)(Z.Zf, {
                              children: [
                                (0, M.jsx)(Z.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    return C(!1);
                                  },
                                  children: g,
                                }),
                                (0, M.jsx)(Z.zx, {
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
        N = C(P),
        j = _.ZP.div(i || (i = (0, s.default)([""]))),
        U = (0, _.ZP)(E.Z)(
          r || (r = (0, s.default)(["\n  transform: ", ";\n"])),
          function (n) {
            var t = n.transformproperty;
            return "".concat(t);
          },
        ),
        O = _.ZP.p(
          o ||
            (o = (0, s.default)([
              '\n  color: #424e54;\n  font-family: "Open Sans";\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: bold;\n  margin: 0;\n',
            ])),
        ),
        y = _.ZP.div(
          a ||
            (a = (0, s.default)([
              '\n  color: rgba(114, 126, 132, 1);\n  font-size: 14px;\n  line-height: 20px;\n  font-family: "Open Sans";\n  margin: 7px 0px;\n',
            ])),
        );
    },
    36082: function (n, t, e) {
      "use strict";
      e.d(t, {
        Z: function () {
          return _;
        },
      });
      var i,
        r,
        o,
        a = e(56824),
        s = e(30225),
        c = e(94404),
        u = e(14482),
        l = e(5189),
        d = e(76431),
        f = e(87121),
        p = e(2845),
        h = e(84628),
        x = e(83749),
        g = e(98278),
        T = e.n(g),
        m = e(49318),
        b = (0, h.Jg)({
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
                T().bool,
                ((t = {}),
                (0, p.Z)(t, e.showConfirmationModal, function () {
                  return !0;
                }),
                (0, p.Z)(t, e.hideConfirmationModal, function () {
                  return !1;
                }),
                t),
              ],
              nextLocation: [
                {},
                T().object,
                (0, p.Z)({}, e.showConfirmationModal, function (n, t) {
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
            return (0, p.Z)(
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
                        return ((r = n.sent), (n.next = 6), (0, x.gz)(e()));
                      case 6:
                        return ((n.next = 8), (0, x.gz)(i(r)));
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
        k = e(30588),
        S = e(22247),
        v = e(31228),
        C = (function (n) {
          (0, u.default)(e, n);
          var t = (0, l.default)(e);
          function e() {
            var n;
            (0, s.default)(this, e);
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
                    r = t.children,
                    o = t.menu,
                    a = t.onBack,
                    s = t.title,
                    c = t.translations,
                    u = t.confirmationModal,
                    l = t.isForm,
                    d = t.isDirty,
                    f = this.actions,
                    p = f.showConfirmationModal,
                    h = f.hideConfirmationModal,
                    x = f.handleConfirmNavigationClick,
                    g = c.GENERAL_CANCEL,
                    T = c.GENERAL_CONTINUE,
                    m = c.BACK_BUTTON_MODAL_TEXT,
                    b = c.BACK_BUTTON_MODAL_TITLE;
                  return (0, v.jsxs)(E, {
                    children: [
                      !!i && (0, v.jsx)(S.gb, {}),
                      e &&
                        (0, v.jsxs)("div", {
                          children: [
                            (0, v.jsx)(S.xE, {
                              id: "PageAdaptable_BackButton",
                              onClick: l && d ? p : a,
                            }),
                            r,
                          ],
                        }),
                      !e &&
                        (0, v.jsxs)("div", {
                          children: [
                            (0, v.jsx)(S.V1, { mobile: e, children: s }),
                            (0, v.jsx)(I, { children: o }),
                            (0, v.jsx)(Z, { children: r }),
                          ],
                        }),
                      (0, v.jsx)(S.u_, {
                        size: "small",
                        open: u,
                        children: (0, v.jsxs)("div", {
                          children: [
                            (0, v.jsx)(S.xB, { title: b }),
                            (0, v.jsx)(S.hz, {
                              padding: !0,
                              size: "small",
                              mobile: e,
                              children: (0, v.jsx)(S.ZT, { children: m }),
                            }),
                            (0, v.jsxs)(S.Zf, {
                              children: [
                                (0, v.jsx)(S.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    ((n.first = !0), h());
                                  },
                                  children: g,
                                }),
                                (0, v.jsx)(S.zx, {
                                  id: "Button_Continue",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function (n) {
                                    e ? (h(), a(n)) : x(n);
                                  },
                                  children: T,
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
        _ = b(C),
        E = k.ZP.div(
          i ||
            (i = (0, a.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n    padding-right: 0px;\n  }\n",
            ])),
        ),
        I = k.ZP.div(
          r ||
            (r = (0, a.default)([
              "\n  width: 40%;\n  padding-right: 5%;\n  float: left;\n  position: relative;\n  color: #fff;\n  margin-top: 25px;\n",
            ])),
        ),
        Z = k.ZP.div(
          o ||
            (o = (0, a.default)([
              "\n  width: 60%;\n  float: left;\n  padding-right: 0;\n",
            ])),
        );
    },
    93983: function (n, t, e) {
      "use strict";
      e.d(t, {
        Z: function () {
          return k;
        },
      });
      var i,
        r,
        o,
        a,
        s = e(56824),
        c = e(30225),
        u = e(94404),
        l = e(14482),
        d = e(5189),
        f = e(76431),
        p = e(84628),
        h = e(49318),
        x = (0, p.Jg)({
          connect: { props: [h.Z, ["isMobile", "translations"]] },
        }),
        g = e(30588),
        T = e(22247),
        m = e(31228),
        b = (function (n) {
          (0, l.default)(e, n);
          var t = (0, d.default)(e);
          function e() {
            return ((0, c.default)(this, e), t.apply(this, arguments));
          }
          return (
            (0, u.default)(e, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    t = n.page,
                    e = n.isMobile,
                    i = n.items,
                    r = n.margin,
                    o = (0, m.jsxs)("div", {
                      children: [(0, m.jsx)(C, {}), (0, m.jsx)(_, {})],
                    });
                  return (0, m.jsx)(S, {
                    margin: r,
                    children:
                      i &&
                      i.map(function (n) {
                        var i = n.key,
                          r = n.icon,
                          a = n.title,
                          s = n.onClick,
                          c = n.disabled,
                          u = n.link,
                          l = n.color,
                          d = n.hidden,
                          f = n.notifications,
                          p = n.id;
                        return d
                          ? ""
                          : (0, m.jsxs)(
                              v,
                              {
                                active: t === i,
                                mobile: e,
                                color: l ? l + "!important" : void 0,
                                link: u,
                                children: [
                                  (0, m.jsx)(T.Lr, {
                                    id: p,
                                    icon: r,
                                    mobile: e,
                                    title: a,
                                    onClick: s,
                                    link: u,
                                    disabled: c,
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
        k = x(b),
        S = g.ZP.div(
          i || (i = (0, s.default)(["\n  margin: ", ";\n"])),
          function (n) {
            return n.margin;
          },
        ),
        v = g.ZP.div(
          r ||
            (r = (0, s.default)([
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
        C = g.ZP.div(
          o ||
            (o = (0, s.default)([
              "\n  position: absolute;\n  height: 56px;\n  width: 100%;\n  background-color: #007bc1;\n  z-index: 2;\n  top: 0;\n  left: 0;\n",
            ])),
        ),
        _ = g.ZP.div(
          a ||
            (a = (0, s.default)([
              "\n  position: absolute;\n  height: 10px;\n  width: calc(100% - 48px);\n  opacity: 0.4;\n  background-color: #0067c6;\n  box-shadow: 0 0 20px 0 #424e54;\n  bottom: 0;\n  right: 24px;\n  z-index: 1;\n",
            ])),
        );
    },
    6640: function (n, t, e) {
      "use strict";
      (e.r(t),
        e.d(t, {
          MaintenanceMonitoring: function () {
            return q;
          },
          default: function () {
            return $;
          },
        }));
      var i,
        r,
        o,
        a,
        s,
        c,
        u,
        l,
        d = e(56824),
        f = e(30225),
        p = e(94404),
        h = e(14482),
        x = e(5189),
        g = e(76431),
        T = e(87121),
        m = e(2845),
        b = e(84628),
        k = e(83749),
        S = e(98278),
        v = e.n(S),
        C = e(49745),
        _ = e(69400),
        E = e.n(_),
        I = e(23594),
        Z = e.n(I),
        M = e(90012),
        P = e(49318),
        N = e(13795),
        j = "".concat(N.CT, "/device/maintenance/diagnostics"),
        U = "".concat(N.CT, "/device/maintenance/free-disk-space"),
        O = (0, b.Jg)({
          path: function () {
            return ["scenes", "MaintenanceMonitoring"];
          },
          connect: {
            props: [P.Z, ["translations", "isMobile"]],
            actions: [P.Z, ["push"]],
          },
          actions: function () {
            return {
              getDiskInfo: function () {
                return !0;
              },
              setDiskInfo: function (n) {
                return n;
              },
              setConfirmationModal: function (n) {
                return n;
              },
              setLoading: function (n) {
                return n;
              },
              setSuccessMessage: function (n) {
                return n;
              },
              setErrorMessage: function (n) {
                return n;
              },
              freeDiskSpace: function () {
                return !0;
              },
              reset: function () {
                return !0;
              },
              setMemoryInfo: function (n) {
                return n;
              },
              setCpuInfo: function (n) {
                return n;
              },
              setLoadingData: function (n) {
                return n;
              },
              updateDiskInfo: function () {
                return !0;
              },
            };
          },
          reducers: function (n) {
            var t,
              e,
              i,
              r,
              o,
              a,
              s,
              c,
              u = n.actions;
            return {
              diskInfo: [
                [],
                v().array,
                ((t = {}),
                (0, m.Z)(t, u.setDiskInfo, function (n, t) {
                  return t;
                }),
                (0, m.Z)(t, u.reset, function () {
                  return [];
                }),
                t),
              ],
              cpuInfo: [
                {},
                v().object,
                ((e = {}),
                (0, m.Z)(e, u.setCpuInfo, function (n, t) {
                  return t;
                }),
                (0, m.Z)(e, u.reset, function () {
                  return {};
                }),
                e),
              ],
              memoryInfo: [
                {},
                v().object,
                ((i = {}),
                (0, m.Z)(i, u.setMemoryInfo, function (n, t) {
                  return t;
                }),
                (0, m.Z)(i, u.reset, function () {
                  return {};
                }),
                i),
              ],
              confirmationModal: [
                !1,
                v().bool,
                ((r = {}),
                (0, m.Z)(r, u.setConfirmationModal, function (n, t) {
                  return t;
                }),
                (0, m.Z)(r, u.reset, function () {
                  return !1;
                }),
                r),
              ],
              loading: [
                !1,
                v().bool,
                ((o = {}),
                (0, m.Z)(o, u.setLoading, function (n, t) {
                  return t;
                }),
                (0, m.Z)(o, u.getDiskInfo, function () {
                  return !0;
                }),
                (0, m.Z)(o, u.setDiskInfo, function () {
                  return !1;
                }),
                (0, m.Z)(o, u.reset, function () {
                  return !1;
                }),
                o),
              ],
              loadingData: [
                !1,
                v().bool,
                ((a = {}),
                (0, m.Z)(a, u.setLoadingData, function (n, t) {
                  return t;
                }),
                (0, m.Z)(a, u.updateDiskInfo, function () {
                  return !0;
                }),
                (0, m.Z)(a, u.reset, function () {
                  return !1;
                }),
                a),
              ],
              successMessage: [
                !1,
                v().bool,
                ((s = {}),
                (0, m.Z)(s, u.setSuccessMessage, function (n, t) {
                  return t;
                }),
                (0, m.Z)(s, u.reset, function () {
                  return !1;
                }),
                s),
              ],
              errorMessage: [
                !1,
                v().bool,
                ((c = {}),
                (0, m.Z)(c, u.setErrorMessage, function (n, t) {
                  return t;
                }),
                (0, m.Z)(c, u.reset, function () {
                  return !1;
                }),
                c),
              ],
            };
          },
          start: (0, T.Z)().mark(function n() {
            return (0, T.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (0, M.log)("[XS-DiskInfo] Start Scene", "yellow"),
                        (n.next = 3),
                        (0, k.gz)(this.actionCreators.getDiskInfo())
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
          stop: (0, T.Z)().mark(function n() {
            return (0, T.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (0, M.log)("[XS-DiskInfo] Stop Scene", "yellow"),
                        (n.next = 3),
                        (0, k.gz)(this.actionCreators.reset())
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
              (0, m.Z)(t, e.getDiskInfo, i.getDiskInfo),
              (0, m.Z)(t, e.freeDiskSpace, i.freeDiskSpace),
              (0, m.Z)(t, e.updateDiskInfo, i.getDiskInfo),
              t
            );
          },
          workers: {
            getDiskInfo: (0, T.Z)().mark(function n() {
              var t, e, i, r, o, a, s, c, u, l, d, f, p, h, x;
              return (0, T.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.prev = 0),
                          (n.next = 3),
                          (0, k.RE)(C.Z.get, j)
                        );
                      case 3:
                        if (
                          ((t = n.sent),
                          (e = t.data.result),
                          (i = e.diskUsage),
                          (r = e.ramUsage),
                          (o = e.cpuUsage),
                          (a = this.actionCreators),
                          (s = a.setDiskInfo),
                          (c = a.setMemoryInfo),
                          (u = a.setCpuInfo),
                          (l = a.setLoadingData),
                          (d = a.setLoading),
                          (f = a.updateDiskInfo),
                          !i || !i.partition)
                        ) {
                          n.next = 12;
                          break;
                        }
                        return (
                          (p = E()(i.partition)).map(function (n) {
                            return (
                              (n.usedPercentage =
                                Z()((n.used / n.size) * 100, 2) + " %"),
                              n
                            );
                          }),
                          (n.next = 12),
                          (0, k.gz)(s(p || {}))
                        );
                      case 12:
                        if (!r) {
                          n.next = 17;
                          break;
                        }
                        return (
                          ((h = E()(r)).usedPercentage =
                            Z()((h.used / h.total) * 100, 2) + " %"),
                          (n.next = 17),
                          (0, k.gz)(c(h || {}))
                        );
                      case 17:
                        if (!o) {
                          n.next = 21;
                          break;
                        }
                        return (
                          (x = { used: Z()(o.used, 2) }),
                          (n.next = 21),
                          (0, k.gz)(u(x || {}))
                        );
                      case 21:
                        return ((n.next = 23), (0, k.gz)(l(!1)));
                      case 23:
                        return ((n.next = 25), (0, k.gz)(d(!1)));
                      case 25:
                        return ((n.next = 27), (0, k.gw)(N.m4));
                      case 27:
                        return ((n.next = 29), (0, k.gz)(f()));
                      case 29:
                        n.next = 36;
                        break;
                      case 31:
                        return (
                          (n.prev = 31),
                          (n.t0 = n.catch(0)),
                          console.log(n.t0),
                          (n.next = 36),
                          (0, k.gz)(this.actionCreators.setLoading(!1))
                        );
                      case 36:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this,
                [[0, 31]],
              );
            }),
            freeDiskSpace: (0, T.Z)().mark(function n() {
              var t, e, i, r, o, a, s, c, u;
              return (0, T.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (e = t.setConfirmationModal),
                          (i = t.setLoading),
                          (r = t.setDiskInfo),
                          (o = t.setSuccessMessage),
                          (a = t.setErrorMessage),
                          (n.next = 3),
                          (0, k.gz)(e(!1))
                        );
                      case 3:
                        return ((n.next = 5), (0, k.gz)(i(!0)));
                      case 5:
                        return (
                          (n.prev = 5),
                          (n.next = 8),
                          (0, k.RE)(C.Z.post, U)
                        );
                      case 8:
                        if (((s = n.sent), !(c = s.data.result))) {
                          n.next = 15;
                          break;
                        }
                        return (
                          (u = E()(c.partition)).map(function (n) {
                            return (
                              (n.usedPercentage =
                                Z()((n.used / n.size) * 100, 2) + " %"),
                              n
                            );
                          }),
                          (n.next = 15),
                          (0, k.gz)(r(u || {}))
                        );
                      case 15:
                        return ((n.next = 17), (0, k.gz)(i(!1)));
                      case 17:
                        return ((n.next = 19), (0, k.gz)(o(!0)));
                      case 19:
                        return ((n.next = 21), (0, k.gw)(5e3));
                      case 21:
                        return ((n.next = 23), (0, k.gz)(o(!1)));
                      case 23:
                        n.next = 36;
                        break;
                      case 25:
                        return (
                          (n.prev = 25),
                          (n.t0 = n.catch(5)),
                          console.log(n.t0),
                          (n.next = 30),
                          (0, k.gz)(i(!1))
                        );
                      case 30:
                        return ((n.next = 32), (0, k.gz)(a(!0)));
                      case 32:
                        return ((n.next = 34), (0, k.gw)(5e3));
                      case 34:
                        return ((n.next = 36), (0, k.gz)(a(!1)));
                      case 36:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this,
                [[5, 25]],
              );
            }),
          },
        }),
        y = e(30588),
        R = e(48229),
        w = e(36082),
        D = e(81139),
        A = (0, b.Jg)({
          path: function () {
            return ["scenes", "containers", "DiskInfoTable"];
          },
          connect: { props: [P.Z, ["translations"]] },
        }),
        z = e(31228),
        F = (function (n) {
          (0, h.default)(e, n);
          var t = (0, x.default)(e);
          function e() {
            return ((0, f.default)(this, e), t.apply(this, arguments));
          }
          return (
            (0, p.default)(e, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    t = n.columns,
                    e = n.data,
                    i = n.translations;
                  return (0, z.jsxs)(L, {
                    children: [
                      (0, z.jsx)("thead", {
                        children: (0, z.jsx)("tr", {
                          children: t.map(function (n) {
                            return (0, z.jsx)(W, { children: i[n.key] }, n.id);
                          }),
                        }),
                      }),
                      (0, z.jsx)(G, {
                        children: e.map(function (n, e) {
                          return (0, z.jsx)(
                            K,
                            {
                              children: t.map(function (t) {
                                return (0, z.jsx)(
                                  J,
                                  {
                                    children: (0, z.jsx)("div", {
                                      children: n[t.dataMapping],
                                    }),
                                  },
                                  t.id,
                                );
                              }),
                            },
                            e,
                          );
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            e
          );
        })(g.Component),
        B = A(F),
        L = y.ZP.table(
          i ||
            (i = (0, d.default)([
              "\n  width: 100%;\n  border-spacing: 0;\n  margin-top: 4px;\n",
            ])),
        ),
        G = y.ZP.tbody(
          r ||
            (r = (0, d.default)([
              "\n  > tr:not(:last-child) > td > div {\n    border-bottom: 1px solid rgba(114,126,132,0.1);\n  }\n",
            ])),
        ),
        K = y.ZP.tr(
          o ||
            (o = (0, d.default)([
              "\n  \n  background-color: #F0F0F4;\n  \n  > td:first-child {\n    padding-left: 16px;\n  }\n\n  > td:last-child {\n    padding-right: 16px;\n  }\n",
            ])),
        ),
        W = y.ZP.th(
          a ||
            (a = (0, d.default)([
              '\n  color: #5B6770;\n  font-family: "Open Sans";\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 14px;\n  padding: 21px 0;\n  border-bottom: 2px solid rgba(114,126,132,0.1); \n',
            ])),
        ),
        J = y.ZP.td(
          s ||
            (s = (0, d.default)([
              '\n  color: #5B6770;\n  font-family: "Open Sans";\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 14px;\n  text-align: center;\n\n  div {\n    padding: 16px 0;\n  }\n',
            ])),
        ),
        H = e(84748),
        V = e.p + "static/media/mini-loader.744e33609d1d50fd11ef.gif",
        X = (function (n) {
          (0, h.default)(e, n);
          var t = (0, x.default)(e);
          function e() {
            return ((0, f.default)(this, e), t.apply(this, arguments));
          }
          return (
            (0, p.default)(e, [
              {
                key: "render",
                value: function () {
                  var n = this.props.loading;
                  return (0, z.jsx)(Y, {
                    children:
                      n && (0, z.jsx)("img", { src: V, alt: "loading" }),
                  });
                },
              },
            ]),
            e
          );
        })(g.PureComponent),
        Y = y.ZP.div(
          c ||
            (c = (0, d.default)(["\n  height: 24px;\n  padding-left: 8px;\n"])),
        ),
        Q = e(22247),
        q = (function (n) {
          (0, h.default)(e, n);
          var t = (0, x.default)(e);
          function e() {
            var n;
            (0, f.default)(this, e);
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
            (0, p.default)(e, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    t = this.actions,
                    e = t.setConfirmationModal,
                    i = t.freeDiskSpace,
                    r = this.props,
                    o = r.translations,
                    a = r.isMobile,
                    s = r.diskInfo,
                    c = r.confirmationModal,
                    u = r.successMessage,
                    l = r.loading,
                    d = r.errorMessage,
                    f = r.cpuInfo,
                    p = r.memoryInfo,
                    h = r.loadingData,
                    x = o.MAINTENANCE_TITLE,
                    g = o.UNITSETT_SUPPORT_MONITORING,
                    T = o.UNITSETT_SUPPORT_DISKMANAGEMENT_FREE_DISK_SPACE,
                    m = o.UNITSETT_SUPPORT_MONITORING_DISK,
                    b = o.UNITSETT_SUPPORT_DISKMANAGEMENT_FREEDISKSPACE_MESSAGE,
                    k = o.UNITSETT_SUPPORT_DISKMANAGEMENT_CANCEL,
                    S = o.UNITSETT_SUPPORT_DISKMANAGEMENT_PROCEED,
                    v = o.UNITSETT_SUPPORT_DISKMANAGEMENT_DISKFREE_SUCCESS,
                    C = o.UNITSETT_SUPPORT_DISKMANAGEMENT_DISKFREE_ERROR,
                    _ = o.UNITSETT_SUPPORT_MONITORING_CPU,
                    E = o.UNITSETT_SUPPORT_MONITORING_CPU_USAGE,
                    I = o.UNITSETT_SUPPORT_MONITORING_MEMORY,
                    Z = o.UNITSETT_SUPPORT_MONITORING_MEMORY_USAGE;
                  return (0, z.jsx)(nn, {
                    children: (0, z.jsxs)(w.Z, {
                      title: x,
                      menu: (0, z.jsx)(D.Z, { page: "monitoring" }),
                      isForm: !1,
                      onBack: function () {
                        return n.navigate("/maintenance/");
                      },
                      loading: l,
                      children: [
                        (0, z.jsxs)(Q.e0, {
                          padding: !0,
                          mobile: a,
                          children: [
                            (0, z.jsx)(Q.V1, { mobile: a, children: g }),
                            (0, z.jsx)(X, { loading: h }),
                            (0, z.jsx)(Q.mV, {
                              out: !u,
                              mobile: a,
                              icon: (0, z.jsx)(R.Z, { children: "check" }),
                              message: v,
                            }),
                            (0, z.jsx)(Q.mV, {
                              out: !d,
                              mobile: a,
                              icon: (0, z.jsx)(R.Z, { children: "report" }),
                              message: C,
                              alertColor: "#CA3C3D",
                            }),
                            f &&
                              Object.keys(f).length > 0 &&
                              (0, z.jsxs)(z.Fragment, {
                                children: [
                                  (0, z.jsx)(H.Z, {
                                    headermargin: "16px 0",
                                    children: _,
                                  }),
                                  (0, z.jsx)(Q.fX, {
                                    id: "CPUUsage",
                                    label: E,
                                    value: "".concat(f.used, "%"),
                                  }),
                                  (0, z.jsx)(Q.SK, { height: "40px" }),
                                ],
                              }),
                            p &&
                              Object.keys(p).length > 0 &&
                              (0, z.jsxs)(z.Fragment, {
                                children: [
                                  (0, z.jsx)(H.Z, {
                                    headermargin: "16px 0",
                                    children: I,
                                  }),
                                  (0, z.jsx)(Q.fX, {
                                    id: "MemoryUsage",
                                    label: Z,
                                    value: p.usedPercentage,
                                  }),
                                  (0, z.jsx)(Q.SK, { height: "40px" }),
                                ],
                              }),
                            (0, z.jsx)(H.Z, {
                              headermargin: "41px 0 0",
                              children: m,
                            }),
                            (0, z.jsx)(B, {
                              data: s,
                              columns: [
                                {
                                  id: "name",
                                  key: "UNITSETT_SUPPORT_DISKMANAGEMENT_NAME",
                                  dataMapping: "name",
                                },
                                {
                                  id: "diskusage",
                                  key: "UNITSETT_SUPPORT_DISKMANAGEMENT_DISKUSAGE",
                                  dataMapping: "usedPercentage",
                                },
                              ],
                            }),
                            !d &&
                              (0, z.jsx)(tn, {
                                isMobile: a,
                                children: (0, z.jsxs)(Q.zx, {
                                  id: "PrimaryButton_Freediskspace",
                                  margin: "42px 0",
                                  buttonWidth: "260px",
                                  smallShadow: !0,
                                  onClick: function () {
                                    return e(!0);
                                  },
                                  children: [
                                    (0, z.jsx)(R.Z, { children: "clear_all" }),
                                    " ",
                                    T,
                                  ],
                                }),
                              }),
                          ],
                        }),
                        (0, z.jsx)(Q.u_, {
                          open: c,
                          size: "medium",
                          onClose: function () {
                            return e(!1);
                          },
                          children: (0, z.jsxs)("div", {
                            children: [
                              (0, z.jsx)(Q.xB, { red: !0, title: T }),
                              (0, z.jsx)(Q.hz, {
                                padding: !0,
                                size: "medium",
                                mobile: a,
                                children: (0, z.jsx)(Q.ZT, {
                                  variant: "body1",
                                  children: b,
                                }),
                              }),
                              (0, z.jsxs)(Q.Zf, {
                                children: [
                                  (0, z.jsx)(Q.zx, {
                                    id: "Button_Cancel",
                                    buttonType: "primary-cancel",
                                    margin: a ? "0 auto" : "0 12px",
                                    buttonWidth: a ? "156px" : "200px",
                                    onClick: function () {
                                      return e(!1);
                                    },
                                    children: k,
                                  }),
                                  (0, z.jsx)(Q.zx, {
                                    id: "Button_Proceed",
                                    buttonType: "primary-danger",
                                    margin: a ? "0 auto" : "0 12px",
                                    buttonWidth: a ? "156px" : "200px",
                                    onClick: function () {
                                      return i();
                                    },
                                    children: S,
                                  }),
                                ],
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
            e
          );
        })(g.Component),
        $ = O(q),
        nn = y.ZP.div(u || (u = (0, d.default)(["\n  position: relative;\n"]))),
        tn = y.ZP.div(
          l || (l = (0, d.default)(["\n  z-index: 10;\n\n  ", "\n"])),
          function (n) {
            return (
              n.isMobile &&
              "\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    left: 0;\n  "
            );
          },
        );
    },
    60646: function (n, t, e) {
      var i = e(76682),
        r = e(25247),
        o = e(13479),
        a = e(40993),
        s = i.isFinite,
        c = Math.min;
      n.exports = function (n) {
        var t = Math[n];
        return function (n, e) {
          if (((n = o(n)), (e = null == e ? 0 : c(r(e), 292)) && s(n))) {
            var i = (a(n) + "e").split("e"),
              u = t(i[0] + "e" + (+i[1] + e));
            return +((i = (a(u) + "e").split("e"))[0] + "e" + (+i[1] - e));
          }
          return t(n);
        };
      };
    },
    23594: function (n, t, e) {
      var i = e(60646)("round");
      n.exports = i;
    },
  },
]);
//# sourceMappingURL=9061.2eeef971.chunk.js.map
