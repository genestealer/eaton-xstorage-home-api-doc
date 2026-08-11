"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [4347],
  {
    84748: function (n, t, i) {
      var e,
        r = i(56824),
        o = i(30588);
      t.Z = o.ZP.h2(
        e ||
          (e = (0, r.default)([
            "\n  font-size: 16px;\n  color: #333F48;\n  text-transform: uppercase;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  margin: ",
            ";\n",
          ])),
        function (n) {
          return n.headermargin;
        },
      );
    },
    36082: function (n, t, i) {
      i.d(t, {
        Z: function () {
          return k;
        },
      });
      var e,
        r,
        o,
        a = i(56824),
        s = i(30225),
        c = i(94404),
        u = i(14482),
        l = i(5189),
        d = i(76431),
        p = i(87121),
        f = i(2845),
        h = i(84628),
        x = i(83749),
        T = i(98278),
        g = i.n(T),
        v = i(49318),
        m = (0, h.Jg)({
          path: function () {
            return ["scenes", "containers", "PageAdaptable"];
          },
          connect: {
            props: [v.Z, ["isMobile", "translations"]],
            actions: [v.Z, ["push"]],
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
              i = n.actions;
            return {
              confirmationModal: [
                !1,
                g().bool,
                ((t = {}),
                (0, f.Z)(t, i.showConfirmationModal, function () {
                  return !0;
                }),
                (0, f.Z)(t, i.hideConfirmationModal, function () {
                  return !1;
                }),
                t),
              ],
              nextLocation: [
                {},
                g().object,
                (0, f.Z)({}, i.showConfirmationModal, function (n, t) {
                  return t.location;
                }),
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
              i = n.workers;
            return (0, f.Z)(
              {},
              t.handleConfirmNavigationClick,
              i.handleConfirmNavigationClick,
            );
          },
          workers: {
            handleConfirmNavigationClick: (0, p.Z)().mark(function n() {
              var t, i, e, r;
              return (0, p.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (i = t.hideConfirmationModal),
                          (e = t.push),
                          (n.next = 3),
                          this.get("nextLocation")
                        );
                      case 3:
                        return ((r = n.sent), (n.next = 6), (0, x.gz)(i()));
                      case 6:
                        return ((n.next = 8), (0, x.gz)(e(r)));
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
        C = i(30588),
        _ = i(22247),
        S = i(31228),
        Z = (function (n) {
          (0, u.default)(i, n);
          var t = (0, l.default)(i);
          function i() {
            var n;
            (0, s.default)(this, i);
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
              r[o] = arguments[o];
            return (
              ((n = t.call.apply(t, [this].concat(r))).first = !0),
              (n.handleBlockedNavigation = function (t) {
                var i = n.props,
                  e = i.isForm,
                  r = i.isDirty,
                  o = n.actions.showConfirmationModal;
                return !(e && r && n.first) || ((n.first = !1), o(t), !1);
              }),
              n
            );
          }
          return (
            (0, c.default)(i, [
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
                    i = t.isMobile,
                    e = t.loading,
                    r = t.children,
                    o = t.menu,
                    a = t.onBack,
                    s = t.title,
                    c = t.translations,
                    u = t.confirmationModal,
                    l = t.isForm,
                    d = t.isDirty,
                    p = this.actions,
                    f = p.showConfirmationModal,
                    h = p.hideConfirmationModal,
                    x = p.handleConfirmNavigationClick,
                    T = c.GENERAL_CANCEL,
                    g = c.GENERAL_CONTINUE,
                    v = c.BACK_BUTTON_MODAL_TEXT,
                    m = c.BACK_BUTTON_MODAL_TITLE;
                  return (0, S.jsxs)(w, {
                    children: [
                      !!e && (0, S.jsx)(_.gb, {}),
                      i &&
                        (0, S.jsxs)("div", {
                          children: [
                            (0, S.jsx)(_.xE, {
                              id: "PageAdaptable_BackButton",
                              onClick: l && d ? f : a,
                            }),
                            r,
                          ],
                        }),
                      !i &&
                        (0, S.jsxs)("div", {
                          children: [
                            (0, S.jsx)(_.V1, { mobile: i, children: s }),
                            (0, S.jsx)(N, { children: o }),
                            (0, S.jsx)(P, { children: r }),
                          ],
                        }),
                      (0, S.jsx)(_.u_, {
                        size: "small",
                        open: u,
                        children: (0, S.jsxs)("div", {
                          children: [
                            (0, S.jsx)(_.xB, { title: m }),
                            (0, S.jsx)(_.hz, {
                              padding: !0,
                              size: "small",
                              mobile: i,
                              children: (0, S.jsx)(_.ZT, { children: v }),
                            }),
                            (0, S.jsxs)(_.Zf, {
                              children: [
                                (0, S.jsx)(_.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    ((n.first = !0), h());
                                  },
                                  children: T,
                                }),
                                (0, S.jsx)(_.zx, {
                                  id: "Button_Continue",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function (n) {
                                    i ? (h(), a(n)) : x(n);
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
            i
          );
        })(d.Component),
        k = m(Z),
        w = C.ZP.div(
          e ||
            (e = (0, a.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n    padding-right: 0px;\n  }\n",
            ])),
        ),
        N = C.ZP.div(
          r ||
            (r = (0, a.default)([
              "\n  width: 40%;\n  padding-right: 5%;\n  float: left;\n  position: relative;\n  color: #fff;\n  margin-top: 25px;\n",
            ])),
        ),
        P = C.ZP.div(
          o ||
            (o = (0, a.default)([
              "\n  width: 60%;\n  float: left;\n  padding-right: 0;\n",
            ])),
        );
    },
    88885: function (n, t, i) {
      i.d(t, {
        Z: function () {
          return f;
        },
      });
      var e = i(30225),
        r = i(94404),
        o = i(14482),
        a = i(5189),
        s = i(76431),
        c = i(84628),
        u = i(49318),
        l = (0, c.Jg)({ connect: { props: [u.Z, ["userRole"]] } }),
        d = i(30375),
        p = (function (n) {
          (0, o.default)(i, n);
          var t = (0, a.default)(i);
          function i() {
            return ((0, e.default)(this, i), t.apply(this, arguments));
          }
          return (
            (0, r.default)(i, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    t = n.children,
                    i = n.permission,
                    e = n.userRole;
                  return (0, d.m)(i, e) ? t : "";
                },
              },
            ]),
            i
          );
        })(s.Component),
        f = l(p);
    },
    44347: function (n, t, i) {
      (i.r(t),
        i.d(t, {
          DeviceSupport: function () {
            return U;
          },
          default: function () {
            return I;
          },
        }));
      var e,
        r,
        o,
        a,
        s = i(56824),
        c = i(30225),
        u = i(94404),
        l = i(14482),
        d = i(5189),
        p = i(76431),
        f = i(87121),
        h = i(84628),
        x = i(83749),
        T = i(90012),
        g = i(49318),
        v = (0, h.Jg)({
          path: function () {
            return ["scenes", "DeviceSupport"];
          },
          connect: {
            props: [g.Z, ["isMobile", "translations"]],
            actions: [g.Z, ["checkSetupStatus", "push"]],
          },
          actions: function () {
            return {
              reset: function () {
                return !0;
              },
            };
          },
          start: (0, f.Z)().mark(function n() {
            var t;
            return (0, f.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators.checkSetupStatus),
                        (0, T.log)(
                          "[XS-DeviceSupportList] Start Scene",
                          "yellow",
                        ),
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
          stop: (0, f.Z)().mark(function n() {
            var t;
            return (0, f.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators.reset),
                        (0, T.log)("[XS-DeviceSupportList] Stop Scene"),
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
        }),
        m = i(30588),
        C = i(48229),
        _ = i(81898),
        S = i(36082),
        Z = (0, h.Jg)({
          path: function () {
            return ["scenes", "containers", "SupportMaintenanceOptions"];
          },
          connect: {
            props: [g.Z, ["translations", "isMobile"]],
            actions: [g.Z, ["push"]],
          },
          actions: function () {
            return {};
          },
          reducers: function (n) {
            n.actions;
            return {};
          },
          takeLatest: function (n) {
            (n.actions, n.workers);
            return {};
          },
          workers: {},
        }),
        k = i(84748),
        w = i(88885),
        N = i(22247),
        P = i(31228),
        j = (function (n) {
          (0, l.default)(i, n);
          var t = (0, d.default)(i);
          function i() {
            var n;
            (0, c.default)(this, i);
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
              r[o] = arguments[o];
            return (
              ((n = t.call.apply(t, [this].concat(r))).navigate = function (t) {
                (0, n.actions.push)(t);
              }),
              n
            );
          }
          return (
            (0, u.default)(i, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    t = this.props,
                    i = t.translations,
                    e = t.isMobile,
                    r = i.UNITSETT_SUPPORT_MAINTENANCE_OPTIONS,
                    o = i.UNITSETT_SUPPORT_UNITLOG,
                    a = i.UNITSETT_SUPPORT_UNITLOG_DETAIL,
                    s = i.UNITSETT_SUPPORT_HTTPS,
                    c = i.UNITSETT_SUPPORT_HTTPS_DETAIL;
                  return (0, P.jsxs)(M, {
                    children: [
                      (0, P.jsx)(k.Z, { children: r }),
                      (0, P.jsxs)(b, {
                        children: [
                          (0, P.jsx)(w.Z, {
                            permission: "SUPPORT_UNIT_LOG",
                            children: (0, P.jsx)(N.Lr, {
                              id: "MoreNavItem_UnitLog",
                              onClick: function () {
                                return n.navigate("/settings/support/unit-log");
                              },
                              link: !0,
                              title: o,
                              description: a,
                              color: "#5B6770",
                              descriptionColor: "#424E54",
                              descriptionFontSize: !e && "14px",
                              descriptionMargin: "4px 0 0",
                            }),
                          }),
                          (0, P.jsx)(w.Z, {
                            permission: "SUPPORT_HTTPS_TUNNEL",
                            children: (0, P.jsx)(N.Lr, {
                              id: "MoreNavItem_HttpsTunnel",
                              onClick: function () {
                                return n.navigate(
                                  "/settings/support/https-tunnel",
                                );
                              },
                              link: !0,
                              title: s,
                              description: c,
                              color: "#5B6770",
                              descriptionColor: "#424E54",
                              descriptionFontSize: !e && "14px",
                              descriptionMargin: "4px 0 0",
                            }),
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            i
          );
        })(p.Component),
        E = Z(j),
        M = m.ZP.div(e || (e = (0, s.default)(["\n  margin-top: 80px;\n"]))),
        b = m.ZP.div(
          r ||
            (r = (0, s.default)([
              "\n  position: relative;\n\n  > div:before {\n    content: '';\n    width: calc(100% - 20px);\n    height: 70px;\n    position: absolute;\n    box-shadow: inset 0 -1px 0 0 rgba(114,126,132,0.1);\n  }\n\n  > div {\n    height: 70px;\n  }\n\n  > div > div {\n    padding-left: 8px;\n  }\n",
            ])),
        ),
        U = (function (n) {
          (0, l.default)(i, n);
          var t = (0, d.default)(i);
          function i() {
            var n;
            (0, c.default)(this, i);
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
              r[o] = arguments[o];
            return (
              ((n = t.call.apply(t, [this].concat(r))).navigate = function (t) {
                (0, n.actions.push)(t);
              }),
              n
            );
          }
          return (
            (0, u.default)(i, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    t = this.props,
                    i = t.isMobile,
                    e = t.translations,
                    r = e.UNITSETT_TITLE,
                    o = e.UNITSETT_SUPPORT_TITLE,
                    a = e.UNITSETT_SUPPORT_EMAIL_LABEL,
                    s = e.UNITSETT_SUPPORT_EMAIL;
                  return (0, P.jsx)("div", {
                    children: (0, P.jsx)(S.Z, {
                      title: r,
                      menu: (0, P.jsx)(_.Z, { page: "support" }),
                      isForm: !1,
                      onBack: function () {
                        return n.navigate("/settings/");
                      },
                      children: (0, P.jsxs)(N.e0, {
                        padding: !i,
                        mobile: i,
                        children: [
                          (0, P.jsx)(N.V1, {
                            mobile: i,
                            marginBottom: "10px",
                            children: o,
                          }),
                          (0, P.jsxs)(N.Zb, {
                            onClick: function () {
                              window.location =
                                "mailto:eatoncarexstorage@eaton.com";
                            },
                            icon: (0, P.jsx)(C.Z, { children: "email" }),
                            contentMargin: "16px",
                            children: [
                              (0, P.jsx)(L, { children: a }),
                              (0, P.jsx)(O, { children: s }),
                            ],
                          }),
                          (0, P.jsx)(w.Z, {
                            permission: "VIEW_SUPPORT_MAINTENANCE_OPTIONS",
                            children: (0, P.jsx)(E, {}),
                          }),
                        ],
                      }),
                    }),
                  });
                },
              },
            ]),
            i
          );
        })(p.Component),
        I = v(U),
        L = (0, m.ZP)(N.ZT)(
          o ||
            (o = (0, s.default)([
              "\n  &&&& {\n    color: #007bc1;\n    font-size: 12px;\n    font-weight: 800;\n    letter-spacing: 0.5px;\n    line-height: 18px;\n    text-transform: uppercase;\n  }\n",
            ])),
        ),
        O = (0, m.ZP)(N.ZT)(
          a ||
            (a = (0, s.default)([
              "\n  &&&& {\n    font-size: 20px;\n    font-weight: 600;\n    line-height: 20px;\n    color: #007bc1;\n    word-break: break-all;\n\n    @media screen and (max-width: 600px) {\n      font-size: 16px;\n    }\n    @media screen and (max-width: 480px) {\n      font-size: 14px;\n    }\n    @media screen and (max-width: 400px) {\n      font-size: 12px;\n    }\n    @media screen and withRouter {\n      font-size: 9px;\n    }\n  }\n",
            ])),
        );
    },
  },
]);
//# sourceMappingURL=4347.65baf020.chunk.js.map
