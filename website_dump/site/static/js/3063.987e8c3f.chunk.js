"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [3063],
  {
    84748: function (n, t, e) {
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
      e.d(t, {
        Z: function () {
          return P;
        },
      });
      var i,
        r,
        o,
        a,
        s = e(56824),
        c = e(30225),
        l = e(94404),
        u = e(14482),
        d = e(5189),
        f = e(76431),
        p = e(87121),
        T = e(2845),
        h = e(84628),
        x = e(98278),
        g = e.n(x),
        m = e(83749),
        _ = e(49745),
        C = e(13795),
        b = e(49318),
        v = "".concat(C.CT, "/commcard/reboot"),
        S = (0, h.Jg)({
          path: function () {
            return ["scenes", "containers", "MaintenanceMenu"];
          },
          connect: {
            props: [b.Z, ["isMobile", "translations", "configs"]],
            actions: [b.Z, ["push"]],
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
                (0, T.Z)(t, r.setSuccessfullyRebooting, function (n, t) {
                  return t;
                }),
                (0, T.Z)(t, r.reset, function () {
                  return !1;
                }),
                t),
              ],
              rebootModal: [
                !1,
                g().bool,
                ((e = {}),
                (0, T.Z)(e, r.setRebootModal, function (n, t) {
                  return t;
                }),
                (0, T.Z)(e, r.setSuccessfullyRebooting, function () {
                  return !1;
                }),
                (0, T.Z)(e, r.reset, function () {
                  return !1;
                }),
                e),
              ],
              rebootStarted: [
                !1,
                g().bool,
                ((i = {}),
                (0, T.Z)(i, r.setSuccessfullyRebooting, function () {
                  return !0;
                }),
                (0, T.Z)(i, r.reset, function () {
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
                          (0, m.RE)(_.Z.post, v)
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
        O = e(30588),
        U = e(48229),
        E = e(93983),
        Z = e(22247),
        N = e(31228),
        j = (function (n) {
          (0, u.default)(e, n);
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
                    s = t.configs,
                    c = r.MAINTENANCE_TECH_PARAMS,
                    l = r.UNITSETT_SUPPORT_MONITORING,
                    u = r.UNITSETT_SUPPORT_DATETIMESYNC,
                    d = r.UNITSETT_SUPPORT_UNITLOG,
                    f = r.UNITSETT_SUPPORT_REBOOTUNIT_COMMCARD,
                    p = r.UNITSETT_SUPPORT_REBOOTUNIT_SUBMIT,
                    T = r.UNITSETT_SUPPORT_REBOOTUNIT_NOTE,
                    h = r.UNITSETT_SUPPORT_REBOOTUNIT_CONFIRMATION,
                    x = r.UNITSETT_SUPPORT_REBOOTUNIT_CANCEL,
                    g = r.UNITSETT_SUPPORT_SSH_STATUS,
                    m = r.UNITSETT_SUPPORT_HTTPS,
                    _ = r.UNITSETT_SUPPORT_REBOOTUNIT_REBOOTSTARTED,
                    b = r.UNITSETT_SUPPORT_REBOOTUNIT_REBOOTSTARTED_DESC,
                    v = this.actions,
                    S = v.setRebootModal,
                    O = v.rebootUnit,
                    j = s
                      ? [
                          {
                            id: "TechParams",
                            key: "tech-params",
                            icon: (0, N.jsx)(w, {
                              transformproperty: "rotate(180deg)",
                              children: "error_outline",
                            }),
                            title: c,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/techparams");
                            },
                            disabled: s && s.userType !== C.cC,
                          },
                          {
                            id: "DatetimeSync",
                            key: "datetime-sync",
                            icon: (0, N.jsx)(Z.VE, {
                              fillColor: i ? "#007BC1" : "#FFFFFF",
                            }),
                            title: u,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/datetime-sync");
                            },
                            disabled: s && s.userType !== C.cC,
                          },
                          {
                            id: "Monitoring",
                            key: "monitoring",
                            icon: (0, N.jsx)(Z.Q9, {
                              fillColor: i ? "#007BC1" : "#FFFFFF",
                            }),
                            title: l,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/monitoring");
                            },
                            disabled: s && s.userType !== C.cC,
                          },
                          {
                            id: "UnitLog",
                            key: "unit-log",
                            icon: (0, N.jsx)(Z.oy, {
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
                            icon: (0, N.jsx)(Z.CB, {
                              fillColor: i ? "#007BC1!important" : "#FFFFFF",
                            }),
                            title: g,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/ssh-connection");
                            },
                            disabled: s && s.userType !== C.cC,
                          },
                          {
                            id: "HTTPSTunnel",
                            key: "https-tunnel",
                            icon: (0, N.jsx)(U.Z, { children: "https" }),
                            title: m,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/https-tunnel");
                            },
                          },
                          {
                            id: "RebootUnit",
                            key: "reboot-unit",
                            icon: (0, N.jsx)(U.Z, {
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
                    P = Object.keys(r).filter(function (n) {
                      return /UNITSETT_SUPPORT_REBOOTUNIT_INFOPOINT(\d+)/.test(
                        n,
                      );
                    });
                  return (0, N.jsxs)(k, {
                    children: [
                      (0, N.jsx)(E.Z, { items: j, page: e }),
                      a &&
                        (0, N.jsx)(Z.mJ, {
                          icon: (0, N.jsx)(U.Z, { children: "report" }),
                          title: _,
                          text: (0, N.jsx)(I, { children: b }),
                          mobile: i,
                        }),
                      (0, N.jsx)(Z.u_, {
                        open: o,
                        size: "large",
                        onClose: function () {
                          return S(!1);
                        },
                        children: (0, N.jsxs)("div", {
                          children: [
                            (0, N.jsx)(Z.xB, { red: !0, title: f }),
                            (0, N.jsxs)(Z.hz, {
                              padding: !0,
                              size: "large",
                              mobile: i,
                              children: [
                                (0, N.jsx)(y, { children: T }),
                                (0, N.jsx)(Z.Gn, {
                                  children: P.map(function (n) {
                                    return (0, N.jsx)(
                                      Z.E9,
                                      { children: r[n] },
                                      n,
                                    );
                                  }),
                                }),
                                (0, N.jsx)(Z.ZT, {
                                  variant: "body1",
                                  children: h,
                                }),
                              ],
                            }),
                            (0, N.jsxs)(Z.Zf, {
                              children: [
                                (0, N.jsx)(Z.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    return S(!1);
                                  },
                                  children: x,
                                }),
                                (0, N.jsx)(Z.zx, {
                                  id: "Button_Submit",
                                  buttonType: "primary-danger",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: O,
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
        P = S(j),
        k = O.ZP.div(i || (i = (0, s.default)([""]))),
        w = (0, O.ZP)(U.Z)(
          r || (r = (0, s.default)(["\n  transform: ", ";\n"])),
          function (n) {
            var t = n.transformproperty;
            return "".concat(t);
          },
        ),
        y = O.ZP.p(
          o ||
            (o = (0, s.default)([
              '\n  color: #424e54;\n  font-family: "Open Sans";\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: bold;\n  margin: 0;\n',
            ])),
        ),
        I = O.ZP.div(
          a ||
            (a = (0, s.default)([
              '\n  color: rgba(114, 126, 132, 1);\n  font-size: 14px;\n  line-height: 20px;\n  font-family: "Open Sans";\n  margin: 7px 0px;\n',
            ])),
        );
    },
    36082: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return O;
        },
      });
      var i,
        r,
        o,
        a = e(56824),
        s = e(30225),
        c = e(94404),
        l = e(14482),
        u = e(5189),
        d = e(76431),
        f = e(87121),
        p = e(2845),
        T = e(84628),
        h = e(83749),
        x = e(98278),
        g = e.n(x),
        m = e(49318),
        _ = (0, T.Jg)({
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
                g().object,
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
                        (0, h.gz)(t())
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
                        return ((r = n.sent), (n.next = 6), (0, h.gz)(e()));
                      case 6:
                        return ((n.next = 8), (0, h.gz)(i(r)));
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
        C = e(30588),
        b = e(22247),
        v = e(31228),
        S = (function (n) {
          (0, l.default)(e, n);
          var t = (0, u.default)(e);
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
                    l = t.confirmationModal,
                    u = t.isForm,
                    d = t.isDirty,
                    f = this.actions,
                    p = f.showConfirmationModal,
                    T = f.hideConfirmationModal,
                    h = f.handleConfirmNavigationClick,
                    x = c.GENERAL_CANCEL,
                    g = c.GENERAL_CONTINUE,
                    m = c.BACK_BUTTON_MODAL_TEXT,
                    _ = c.BACK_BUTTON_MODAL_TITLE;
                  return (0, v.jsxs)(U, {
                    children: [
                      !!i && (0, v.jsx)(b.gb, {}),
                      e &&
                        (0, v.jsxs)("div", {
                          children: [
                            (0, v.jsx)(b.xE, {
                              id: "PageAdaptable_BackButton",
                              onClick: u && d ? p : a,
                            }),
                            r,
                          ],
                        }),
                      !e &&
                        (0, v.jsxs)("div", {
                          children: [
                            (0, v.jsx)(b.V1, { mobile: e, children: s }),
                            (0, v.jsx)(E, { children: o }),
                            (0, v.jsx)(Z, { children: r }),
                          ],
                        }),
                      (0, v.jsx)(b.u_, {
                        size: "small",
                        open: l,
                        children: (0, v.jsxs)("div", {
                          children: [
                            (0, v.jsx)(b.xB, { title: _ }),
                            (0, v.jsx)(b.hz, {
                              padding: !0,
                              size: "small",
                              mobile: e,
                              children: (0, v.jsx)(b.ZT, { children: m }),
                            }),
                            (0, v.jsxs)(b.Zf, {
                              children: [
                                (0, v.jsx)(b.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    ((n.first = !0), T());
                                  },
                                  children: x,
                                }),
                                (0, v.jsx)(b.zx, {
                                  id: "Button_Continue",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function (n) {
                                    e ? (T(), a(n)) : h(n);
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
        O = _(S),
        U = C.ZP.div(
          i ||
            (i = (0, a.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n    padding-right: 0px;\n  }\n",
            ])),
        ),
        E = C.ZP.div(
          r ||
            (r = (0, a.default)([
              "\n  width: 40%;\n  padding-right: 5%;\n  float: left;\n  position: relative;\n  color: #fff;\n  margin-top: 25px;\n",
            ])),
        ),
        Z = C.ZP.div(
          o ||
            (o = (0, a.default)([
              "\n  width: 60%;\n  float: left;\n  padding-right: 0;\n",
            ])),
        );
    },
    83063: function (n, t, e) {
      (e.r(t),
        e.d(t, {
          MaintenanceUnitLog: function () {
            return z;
          },
          default: function () {
            return D;
          },
        }));
      var i,
        r,
        o,
        a,
        s,
        c,
        l,
        u,
        d = e(56824),
        f = e(30225),
        p = e(94404),
        T = e(14482),
        h = e(5189),
        x = e(76431),
        g = e(87121),
        m = e(2845),
        _ = e(84628),
        C = e(98278),
        b = e.n(C),
        v = e(83749),
        S = e(49745),
        O = e(13795),
        U = e(90012),
        E = e(49318),
        Z = "".concat(O.CT, "/commcard/logs"),
        N = (0, _.Jg)({
          path: function () {
            return ["scenes", "MaintenanceUnitLog"];
          },
          connect: {
            props: [
              E.Z,
              ["translations", "isMobile", "userRole", "currentRoute"],
            ],
            actions: [E.Z, ["push"]],
          },
          actions: function () {
            return {
              setFilesToDownload: function (n) {
                return n;
              },
              requestLogDownload: function () {
                return !0;
              },
              getFile: function () {
                return !0;
              },
              getFilesToDownload: function () {
                return !0;
              },
              setConfirmationModal: function (n) {
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
              fileToDownload: [
                {},
                b().object,
                ((t = {}),
                (0, m.Z)(t, r.setFilesToDownload, function (n, t) {
                  return t;
                }),
                (0, m.Z)(t, r.reset, function () {
                  return {};
                }),
                t),
              ],
              loading: [
                !1,
                b().bool,
                ((e = {}),
                (0, m.Z)(e, r.setLoading, function (n, t) {
                  return t;
                }),
                (0, m.Z)(e, r.reset, function () {
                  return !1;
                }),
                e),
              ],
              confirmationModal: [
                !1,
                b().bool,
                ((i = {}),
                (0, m.Z)(i, r.setConfirmationModal, function (n, t) {
                  return t;
                }),
                (0, m.Z)(i, r.reset, function () {
                  return !1;
                }),
                i),
              ],
            };
          },
          selectors: function (n) {
            n.actions;
            var t = n.selectors;
            return {
              isSupportMenu: [
                function () {
                  return [t.currentRoute];
                },
                function (n) {
                  return n && "DeviceSupportMaintenanceUnitLog" === n.key;
                },
                b().bool,
              ],
            };
          },
          start: (0, g.Z)().mark(function n() {
            var t;
            return (0, g.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (0, U.log)("[XS-UNITLOG] Start Scene", "yellow"),
                        (t = this.actionCreators.getFilesToDownload),
                        (n.next = 4),
                        (0, v.gz)(t())
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
          stop: (0, g.Z)().mark(function n() {
            var t;
            return (0, g.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators.reset),
                        (n.next = 3),
                        (0, v.gz)(t())
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
              (0, m.Z)(t, e.requestLogDownload, i.requestLogDownload),
              (0, m.Z)(t, e.getFile, i.getFile),
              (0, m.Z)(t, e.getFilesToDownload, i.getFilesToDownload),
              t
            );
          },
          workers: {
            requestLogDownload: (0, g.Z)().mark(function n() {
              var t, e, i, r, o, a;
              return (0, g.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (e = t.setFilesToDownload),
                          (i = t.setConfirmationModal),
                          (r = t.setLoading),
                          (n.next = 3),
                          (0, v.gz)(i(!1))
                        );
                      case 3:
                        return ((n.next = 5), (0, v.gz)(r(!0)));
                      case 5:
                        return (
                          (n.prev = 5),
                          (n.next = 8),
                          (0, v.RE)(S.Z.post, Z)
                        );
                      case 8:
                        return (
                          (o = n.sent),
                          (a = o.data.result),
                          (n.next = 12),
                          (0, v.gz)(e(a || {}))
                        );
                      case 12:
                        return ((n.next = 14), (0, v.gz)(r(!1)));
                      case 14:
                        n.next = 21;
                        break;
                      case 16:
                        return (
                          (n.prev = 16),
                          (n.t0 = n.catch(5)),
                          (n.next = 20),
                          (0, v.gz)(r(!1))
                        );
                      case 20:
                        console.log(n.t0);
                      case 21:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this,
                [[5, 16]],
              );
            }),
            getFilesToDownload: (0, g.Z)().mark(function n() {
              var t, e, i, r, o;
              return (0, g.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (e = t.setFilesToDownload),
                          (i = t.setLoading),
                          (n.next = 3),
                          (0, v.gz)(i(!0))
                        );
                      case 3:
                        return (
                          (n.prev = 3),
                          (n.next = 6),
                          (0, v.RE)(S.Z.get, Z)
                        );
                      case 6:
                        return (
                          (r = n.sent),
                          (o = r.data.result),
                          (n.next = 10),
                          (0, v.gz)(e(o || {}))
                        );
                      case 10:
                        return ((n.next = 12), (0, v.gz)(i(!1)));
                      case 12:
                        n.next = 19;
                        break;
                      case 14:
                        return (
                          (n.prev = 14),
                          (n.t0 = n.catch(3)),
                          (n.next = 18),
                          (0, v.gz)(i(!1))
                        );
                      case 18:
                        console.log(n.t0);
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
            getFile: (0, g.Z)().mark(function n() {
              var t, e, i, r;
              return (0, g.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators.setLoading),
                          (n.next = 3),
                          (0, v.gz)(t(!0))
                        );
                      case 3:
                        return ((n.next = 5), this.get("fileToDownload"));
                      case 5:
                        return (
                          (e = n.sent),
                          (i = e.url),
                          ((r = document.createElement("a")).href = i),
                          (r.download = i.substr(i.lastIndexOf("/") + 1)),
                          document.body.appendChild(r),
                          r.click(),
                          document.body.removeChild(r),
                          (n.next = 15),
                          (0, v.gz)(t(!1))
                        );
                      case 15:
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
        j = e(30588),
        P = e(48229),
        k = e(94467),
        w = e.n(k),
        y = e(36082),
        I = e(81139),
        R = e(81898),
        M = e(22247),
        F = e(84748),
        L = e(31228),
        z = (function (n) {
          (0, T.default)(e, n);
          var t = (0, h.default)(e);
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
                    i = t.requestLogDownload,
                    r = t.getFile,
                    o = this.props,
                    a = o.translations,
                    s = o.isMobile,
                    c = o.confirmationModal,
                    l = o.fileToDownload,
                    u = o.loading,
                    d = o.isSupportMenu,
                    f = a.MAINTENANCE_TITLE,
                    p = a.UNITSETT_SUPPORT_UNITLOG_GETCOPY,
                    T = a.UNITSETT_SUPPORT_UNITLOG,
                    h = a.UNITSETT_SUPPORT_UNITLOG_REQUESTFILE,
                    x = a.UNITSETT_SUPPORT_UNITLOG_NOTE,
                    g = a.UNITSETT_SUPPORT_UNITLOG_REQUESTFILE_MODAL_DETAIL,
                    m = a.UNITSETT_SUPPORT_DISKMANAGEMENT_CANCEL,
                    _ = a.UNITSETT_SUPPORT_DISKMANAGEMENT_PROCEED,
                    C = a.UNITSETT_SUPPORT_UNITLOG_UNITLOGFILE,
                    b = a.UNITSETT_SUPPORT_UNITLOG_PLEASEWAIT,
                    v = a.UNITSETT_SUPPORT_UNITLOG_DOWNLOAD,
                    S = a.UNITSETT_TITLE,
                    O = Object.keys(a).filter(function (n) {
                      return /UNITSETT_SUPPORT_UNITLOG_INFOPOINT(\d+)/.test(n);
                    }),
                    U = d ? "/settings/support/" : "/maintenance/";
                  return (0, L.jsxs)("div", {
                    children: [
                      u && (0, L.jsx)(M.gb, {}),
                      (0, L.jsxs)(y.Z, {
                        title: d ? S : f,
                        menu: d
                          ? (0, L.jsx)(R.Z, { page: "support" })
                          : (0, L.jsx)(I.Z, { page: "unit-log" }),
                        isForm: !1,
                        onBack: function () {
                          return n.navigate(U);
                        },
                        children: [
                          (0, L.jsxs)(M.e0, {
                            padding: !0,
                            mobile: s,
                            children: [
                              (0, L.jsxs)(M.V1, {
                                mobile: s,
                                children: [
                                  !s &&
                                    d &&
                                    (0, L.jsx)(J, {
                                      id: "BackButton",
                                      onClick: function () {
                                        return n.navigate(U);
                                      },
                                      children: (0, L.jsx)(P.Z, {
                                        children: "arrow_back",
                                      }),
                                    }),
                                  T,
                                ],
                              }),
                              l.filename &&
                                (0, L.jsxs)(L.Fragment, {
                                  children: [
                                    (0, L.jsx)(F.Z, { children: C }),
                                    (0, L.jsxs)(W, {
                                      children: [
                                        (0, L.jsxs)(H, {
                                          children: [
                                            (0, L.jsx)(q, {
                                              children: l.filename,
                                            }),
                                            (0, L.jsx)(Y, {
                                              children: w()(l.createdAt).format(
                                                "DD/MM/YYYY HH:mm",
                                              ),
                                            }),
                                          ],
                                        }),
                                        l.downloading &&
                                          (0, L.jsx)(G, { children: b }),
                                        !l.downloading &&
                                          (0, L.jsx)(M.zx, {
                                            id: "PrimaryButton_GetFile",
                                            buttonType: "secondary-default",
                                            margin: "0",
                                            buttonWidth: s ? "180px" : "120px",
                                            buttonHeight: "32px",
                                            smallShadow: !0,
                                            onClick: function () {
                                              return r();
                                            },
                                            children: v,
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              (!l.downloading || !l.filename) &&
                                (0, L.jsxs)(L.Fragment, {
                                  children: [
                                    (0, L.jsx)(F.Z, { children: p }),
                                    (0, L.jsx)(A, { children: x }),
                                    (0, L.jsx)(M.Gn, {
                                      children: O.map(function (n) {
                                        return (0, L.jsx)(
                                          M.E9,
                                          { children: a[n] },
                                          n,
                                        );
                                      }),
                                    }),
                                    (0, L.jsx)(B, {
                                      isMobile: s,
                                      children: (0, L.jsxs)(M.zx, {
                                        id: "PrimaryButton_DownloadFile",
                                        buttonWidth: "260px",
                                        margin: "42px 0",
                                        smallShadow: !0,
                                        onClick: function () {
                                          return l.filename ? e(!0) : i();
                                        },
                                        children: [
                                          (0, L.jsx)(P.Z, {
                                            children: "get_app",
                                          }),
                                          " ",
                                          h,
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, L.jsx)(M.u_, {
                            open: c,
                            size: "small",
                            onClose: function () {
                              return e(!1);
                            },
                            children: (0, L.jsxs)("div", {
                              children: [
                                (0, L.jsx)(M.xB, { red: !0, title: h }),
                                (0, L.jsx)(M.hz, {
                                  padding: !0,
                                  size: "small",
                                  mobile: s,
                                  children: (0, L.jsx)(M.ZT, {
                                    variant: "body1",
                                    children: g.replace(
                                      "<filename>",
                                      l.filename,
                                    ),
                                  }),
                                }),
                                (0, L.jsxs)(M.Zf, {
                                  children: [
                                    (0, L.jsx)(M.zx, {
                                      id: "Button_Cancel",
                                      buttonType: "primary-cancel",
                                      margin: s ? "0 auto" : "0 12px",
                                      buttonWidth: "156px",
                                      onClick: function () {
                                        return e(!1);
                                      },
                                      children: m,
                                    }),
                                    (0, L.jsx)(M.zx, {
                                      id: "Button_Proceed",
                                      buttonType: "primary-danger",
                                      margin: s ? "0 auto" : "0 12px",
                                      buttonWidth: "156px",
                                      onClick: function () {
                                        return i();
                                      },
                                      children: _,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            e
          );
        })(x.Component),
        D = N(z),
        B = j.ZP.div(
          i || (i = (0, d.default)(["\n  z-index: 10;\n\n  ", "\n"])),
          function (n) {
            return (
              n.isMobile &&
              "\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    left: 0;\n  "
            );
          },
        ),
        A = j.ZP.p(
          r ||
            (r = (0, d.default)([
              "\n  color: #333f48;\n  font-family: 'Open Sans';\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: bold;\n  margin: 0;\n",
            ])),
        ),
        G = j.ZP.span(
          o ||
            (o = (0, d.default)([
              "\n  opacity: 0.6;\n  color: #727e84;\n  font-family: 'Open Sans';\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 14px;\n",
            ])),
        ),
        W = j.ZP.div(
          a ||
            (a = (0, d.default)([
              "\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  border-bottom: 1px solid rgba(114, 126, 132, 0.1);\n  padding: 8px;\n  margin-bottom: 80px;\n",
            ])),
        ),
        H = j.ZP.div(s || (s = (0, d.default)([""]))),
        Y = j.ZP.p(
          c ||
            (c = (0, d.default)([
              "\n  color: #727e84;\n  font-family: 'Open Sans';\n  font-size: 14px;\n  line-height: 20px;\n  margin: 2px 0;\n",
            ])),
        ),
        q = j.ZP.p(
          l ||
            (l = (0, d.default)([
              "\n  color: #424e54;\n  font-family: 'Open Sans';\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  margin: 2px 0;\n",
            ])),
        ),
        J = j.ZP.div(
          u ||
            (u = (0, d.default)([
              "\n  background: transparent;\n  border: 0;\n  display: inline-flex;\n  padding-right: 16px;\n  cursor: pointer;\n",
            ])),
        );
    },
  },
]);
//# sourceMappingURL=3063.987e8c3f.chunk.js.map
