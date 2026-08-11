"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [9433],
  {
    36082: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return y;
        },
      });
      var i,
        r,
        o,
        a = e(56824),
        s = e(30225),
        l = e(94404),
        c = e(14482),
        d = e(5189),
        u = e(76431),
        f = e(87121),
        p = e(2845),
        h = e(84628),
        x = e(83749),
        m = e(98278),
        T = e.n(m),
        g = e(49318),
        v = (0, h.Jg)({
          path: function () {
            return ["scenes", "containers", "PageAdaptable"];
          },
          connect: {
            props: [g.Z, ["isMobile", "translations"]],
            actions: [g.Z, ["push"]],
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
        b = e(30588),
        j = e(22247),
        C = e(31228),
        _ = (function (n) {
          (0, c.default)(e, n);
          var t = (0, d.default)(e);
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
            (0, l.default)(e, [
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
                    l = t.translations,
                    c = t.confirmationModal,
                    d = t.isForm,
                    u = t.isDirty,
                    f = this.actions,
                    p = f.showConfirmationModal,
                    h = f.hideConfirmationModal,
                    x = f.handleConfirmNavigationClick,
                    m = l.GENERAL_CANCEL,
                    T = l.GENERAL_CONTINUE,
                    g = l.BACK_BUTTON_MODAL_TEXT,
                    v = l.BACK_BUTTON_MODAL_TITLE;
                  return (0, C.jsxs)(I, {
                    children: [
                      !!i && (0, C.jsx)(j.gb, {}),
                      e &&
                        (0, C.jsxs)("div", {
                          children: [
                            (0, C.jsx)(j.xE, {
                              id: "PageAdaptable_BackButton",
                              onClick: d && u ? p : a,
                            }),
                            r,
                          ],
                        }),
                      !e &&
                        (0, C.jsxs)("div", {
                          children: [
                            (0, C.jsx)(j.V1, { mobile: e, children: s }),
                            (0, C.jsx)(Z, { children: o }),
                            (0, C.jsx)(R, { children: r }),
                          ],
                        }),
                      (0, C.jsx)(j.u_, {
                        size: "small",
                        open: c,
                        children: (0, C.jsxs)("div", {
                          children: [
                            (0, C.jsx)(j.xB, { title: v }),
                            (0, C.jsx)(j.hz, {
                              padding: !0,
                              size: "small",
                              mobile: e,
                              children: (0, C.jsx)(j.ZT, { children: g }),
                            }),
                            (0, C.jsxs)(j.Zf, {
                              children: [
                                (0, C.jsx)(j.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    ((n.first = !0), h());
                                  },
                                  children: m,
                                }),
                                (0, C.jsx)(j.zx, {
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
        })(u.Component),
        y = v(_),
        I = b.ZP.div(
          i ||
            (i = (0, a.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n    padding-right: 0px;\n  }\n",
            ])),
        ),
        Z = b.ZP.div(
          r ||
            (r = (0, a.default)([
              "\n  width: 40%;\n  padding-right: 5%;\n  float: left;\n  position: relative;\n  color: #fff;\n  margin-top: 25px;\n",
            ])),
        ),
        R = b.ZP.div(
          o ||
            (o = (0, a.default)([
              "\n  width: 60%;\n  float: left;\n  padding-right: 0;\n",
            ])),
        );
    },
    9433: function (n, t, e) {
      (e.r(t),
        e.d(t, {
          default: function () {
            return J;
          },
        }));
      var i,
        r,
        o,
        a,
        s,
        l,
        c,
        d,
        u,
        f,
        p = e(30225),
        h = e(94404),
        x = e(14482),
        m = e(5189),
        T = e(76431),
        g = e(17631),
        v = e(21649),
        b = e(77835),
        j = e(81898),
        C = e(36082),
        _ = e(56824),
        y = e(84628),
        I = e(49318),
        Z = (0, y.Jg)({
          path: function () {
            return ["scenes", "containers", "TrdPartyActiveIntegrationsItem"];
          },
          connect: { props: [I.Z, ["translations", "isMobile"]] },
        }),
        R = e(30588),
        E = e(48229),
        P = e(31228),
        A = (function (n) {
          (0, x.default)(e, n);
          var t = (0, m.default)(e);
          function e() {
            return ((0, p.default)(this, e), t.apply(this, arguments));
          }
          return (
            (0, h.default)(e, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    t = n.name,
                    e = n.manufacturer;
                  return (0, P.jsxs)(N, {
                    children: [
                      (0, P.jsx)(k, { bold: !0, children: t }),
                      "" !== e &&
                        (0, P.jsxs)(k, {
                          bold: !1,
                          children: [", ", e, "\xae"],
                        }),
                    ],
                  });
                },
              },
            ]),
            e
          );
        })(T.PureComponent),
        N = R.ZP.p(i || (i = (0, _.default)(["\n  margin-bottom: 6px;\n"]))),
        k = R.ZP.span(
          r ||
            (r = (0, _.default)([
              "\n  color: #5b6770;\n  font-family: 'Open Sans';\n  font-size: 14px;\n  line-height: 14px;\n\n  ",
              "\n",
            ])),
          function (n) {
            return n.bold && "\n    font-weight: bold;\n  ";
          },
        ),
        w = e(22247),
        M = (function (n) {
          (0, x.default)(e, n);
          var t = (0, m.default)(e);
          function e() {
            return ((0, p.default)(this, e), t.apply(this, arguments));
          }
          return (
            (0, h.default)(e, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    t = n.integration,
                    e = n.isMobile,
                    i = n.translations,
                    r = n.revokeInvitation,
                    o = i.UNITSETT_TRDPARTY_BASIC_PERM,
                    a = i.UNITSETT_TRDPARTY_ADVANCED_PERM,
                    s = i.UNITSETT_TRDPARTY_REVOKE;
                  return (0, P.jsx)(D, {
                    mobile: e,
                    children: (0, P.jsxs)(U, {
                      mobile: e,
                      children: [
                        (0, P.jsxs)(F, {
                          firstWrapper: !0,
                          secondWrapper: !1,
                          mobile: e,
                          children: [
                            (0, P.jsx)(A, {
                              name: (t && t.name) || "--",
                              manufacturer: (t && t.manufacturer) || "--",
                            }),
                            (0, P.jsxs)(B, {
                              children: [
                                (0, P.jsx)(E.Z, { children: "https" }),
                                t &&
                                  "basic" === t.accessLevel &&
                                  (0, P.jsx)("span", { children: o }),
                                t &&
                                  "advanced" === t.accessLevel &&
                                  (0, P.jsx)("span", { children: a }),
                              ],
                            }),
                          ],
                        }),
                        (0, P.jsx)(F, {
                          firstWrapper: !1,
                          secondWrapper: !0,
                          mobile: e,
                          children: (0, P.jsxs)(w.rU, {
                            onClick: r,
                            children: [
                              (0, P.jsx)(E.Z, { children: "delete" }),
                              e && (0, P.jsx)("span", { children: s }),
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
        })(T.Component),
        S = Z(M),
        D = R.ZP.div(
          o ||
            (o = (0, _.default)([
              "\n  display: flex;\n  align-items: center;\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (n) {
            return (
              !n.mobile &&
              "\n    border-bottom: 1px solid rgba(114,126,132,0.1);\n  "
            );
          },
          function (n) {
            return n.mobile && "\n    margin-top: 10px;\n  ";
          },
        ),
        U = R.ZP.div(
          a ||
            (a = (0, _.default)([
              "\n  width: 100%;\n  display: flex;\n\n  ",
              "\n",
            ])),
          function (n) {
            return (
              n.mobile &&
              '\n    position: relative;\n    transform-style: preserve-3d;\n    background: #FFFFFF;\n\n    &:after {\n      content:"";\n      height: 10px;\n      width: 90%;\n      border-radius: 16px;\n      box-shadow: 0 0 20px 0 rgba(0,123,193,0.5);\n      position: absolute;\n      bottom: 2%;\n      left: 5%;\n      transform: translateZ(-1px);\n    }\n  '
            );
          },
        ),
        F = R.ZP.div(
          s || (s = (0, _.default)(["\n  ", "\n\n  ", "\n\n  ", "\n"])),
          function (n) {
            return (
              n.firstWrapper &&
              "\n    padding-left: 10px;\n    width: 60%;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n  "
            );
          },
          function (n) {
            return (
              n.secondWrapper &&
              "\n    width: 40%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    \n  "
            );
          },
          function (n) {
            var t = n.secondWrapper,
              e = n.mobile;
            return t && e && "\n    justify-content: center;\n  ";
          },
        ),
        B = R.ZP.p(
          l ||
            (l = (0, _.default)([
              "\n  display: flex;\n  align-items: center;\n  color: #727e84;\n  font-family: 'Open Sans';\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 14px;\n  margin-top: 0;\n\n  .material-icons {\n    margin-right: 10px;\n    color: #007bc1;\n  }\n",
            ])),
        ),
        O = (0, y.Jg)({
          path: function () {
            return ["scenes", "containers", "TrdPartyOpenInvitationsItem"];
          },
          connect: { props: [I.Z, ["translations", "isMobile"]] },
        }),
        W = (function (n) {
          (0, x.default)(e, n);
          var t = (0, m.default)(e);
          function e() {
            return ((0, p.default)(this, e), t.apply(this, arguments));
          }
          return (
            (0, h.default)(e, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    t = n.invitation,
                    e = n.isMobile,
                    i = n.translations,
                    r = n.ignoreInvitation,
                    o = n.acceptInvitation,
                    a = i.UNITSETT_TRDPARTY_ACCEPT,
                    s = i.UNITSETT_TRDPARTY_IGNORE,
                    l = i.UNITSETT_TRDPARTY_BASIC_PERM,
                    c = i.UNITSETT_TRDPARTY_ADVANCED_PERM;
                  return (0, P.jsx)(Y, {
                    mobile: e,
                    children: (0, P.jsxs)(z, {
                      mobile: e,
                      children: [
                        (0, P.jsxs)(V, {
                          firstWrapper: !0,
                          secondWrapper: !1,
                          mobile: e,
                          children: [
                            (0, P.jsx)(A, {
                              name: (t && t.name) || "--",
                              manufacturer: (t && t.manufacturer) || "--",
                            }),
                            (0, P.jsxs)(K, {
                              children: [
                                (0, P.jsx)(E.Z, { children: "https" }),
                                t &&
                                  "basic" === t.accessLevel &&
                                  (0, P.jsx)("span", { children: l }),
                                t &&
                                  "advanced" === t.accessLevel &&
                                  (0, P.jsx)("span", { children: c }),
                              ],
                            }),
                          ],
                        }),
                        (0, P.jsxs)(V, {
                          firstWrapper: !1,
                          secondWrapper: !0,
                          mobile: e,
                          children: [
                            (0, P.jsxs)(w.rU, {
                              borderRight: "1px solid rgba(66, 78, 84, 0.1)",
                              onClick: o,
                              children: [
                                (0, P.jsx)(E.Z, { children: "check" }),
                                a,
                              ],
                            }),
                            (0, P.jsxs)(w.rU, {
                              onClick: r,
                              children: [
                                (0, P.jsx)(E.Z, { children: "delete" }),
                                s,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            e
          );
        })(T.Component),
        L = O(W),
        Y = R.ZP.div(
          c ||
            (c = (0, _.default)([
              "\n  display: flex;\n  align-items: center;\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (n) {
            return (
              !n.mobile &&
              "\n    border-bottom: 1px solid rgba(114,126,132,0.1);\n  "
            );
          },
          function (n) {
            return n.mobile && "\n    margin-top: 10px;\n  ";
          },
        ),
        z = R.ZP.div(
          d ||
            (d = (0, _.default)([
              "\n  width: 100%;\n  display: flex;\n\n  ",
              "\n",
            ])),
          function (n) {
            return (
              n.mobile &&
              '\n    position: relative;\n    transform-style: preserve-3d;\n    background: #FFFFFF;\n\n    &:after {\n      content:"";\n      height: 10px;\n      width: 90%;\n      border-radius: 16px;\n      box-shadow: 0 0 20px 0 rgba(0,123,193,0.5);\n      position: absolute;\n      bottom: 2%;\n      left: 5%;\n      transform: translateZ(-1px);\n    }\n  '
            );
          },
        ),
        V = R.ZP.div(
          u || (u = (0, _.default)(["\n  ", "\n\n  ", "\n\n  ", "\n\n"])),
          function (n) {
            return (
              n.firstWrapper &&
              "\n    padding-left: 10px;\n    width: 60%;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n  "
            );
          },
          function (n) {
            return (
              n.secondWrapper &&
              "\n    width: 40%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n  "
            );
          },
          function (n) {
            var t = n.secondWrapper,
              e = n.mobile;
            return (
              t &&
              e &&
              "\n    flex-direction: column;\n    justify-content: center;\n  "
            );
          },
        ),
        K = R.ZP.p(
          f ||
            (f = (0, _.default)([
              "\n  display: flex;\n  align-items: center;\n  color: #727e84;\n  font-family: 'Open Sans';\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 14px;\n  margin-top: 0;\n\n  .material-icons {\n    margin-right: 10px;\n    color: #007bc1;\n  }\n",
            ])),
        ),
        G = (function (n) {
          (0, x.default)(e, n);
          var t = (0, m.default)(e);
          function e() {
            var n;
            (0, p.default)(this, e);
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
            (0, h.default)(e, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    t = this.actions,
                    e = t.ignoreInvitation,
                    i = t.acceptInvitation,
                    r = t.revokeInvitation,
                    o = this.props,
                    a = o.translations,
                    s = o.loading,
                    l = o.isMobile,
                    c = o.openInvitations,
                    d = o.activeIntegrations,
                    u = a.UNITSETT_TRD_PARTY_INTEGRATIONS,
                    f = a.UNITSETT_TRDPARTY_NOTRDPARTY,
                    p = a.UNITSETT_TRDPARTY_REQUESTTRDPARTY,
                    h = a.UNITSETT_TRDPARTY_OPENINVITATIONS,
                    x = a.UNITSETT_TRDPARTY_ACTIVEINTEGRATIONS,
                    m = a.UNITSETT_TITLE,
                    T = (0, v.size)(c) > 0,
                    g = (0, v.size)(d) > 0;
                  return (0, P.jsxs)("div", {
                    children: [
                      s && (0, P.jsx)(w.gb, {}),
                      (0, P.jsx)(C.Z, {
                        title: m,
                        menu: (0, P.jsx)(j.Z, {
                          page: "trd-party-integrations",
                        }),
                        onBack: function () {
                          return n.navigate("/settings/");
                        },
                        isForm: !1,
                        isDirty: !1,
                        children: (0, P.jsxs)(w.e0, {
                          padding: !0,
                          mobile: l,
                          children: [
                            (0, P.jsx)(w.V1, { mobile: l, children: u }),
                            (0, P.jsx)(w.SK, { height: "20px" }),
                            !T &&
                              !g &&
                              (0, P.jsxs)(P.Fragment, {
                                children: [
                                  (0, P.jsx)(b.Z, {
                                    variant: "h4",
                                    gutterBottom: !0,
                                    children: f,
                                  }),
                                  (0, P.jsx)(b.Z, {
                                    variant: "body1",
                                    component: "p",
                                    color: "textSecondary",
                                    children: p,
                                  }),
                                ],
                              }),
                            T &&
                              (0, P.jsxs)(P.Fragment, {
                                children: [
                                  (0, P.jsx)(b.Z, {
                                    variant: "h4",
                                    gutterBottom: !0,
                                    children: h,
                                  }),
                                  c.map(function (n) {
                                    return (0, P.jsx)(
                                      L,
                                      {
                                        acceptInvitation: function () {
                                          return i(n.id);
                                        },
                                        ignoreInvitation: function () {
                                          return e(n.id);
                                        },
                                        invitation: n,
                                      },
                                      n.id,
                                    );
                                  }),
                                ],
                              }),
                            g &&
                              (0, P.jsxs)(P.Fragment, {
                                children: [
                                  (0, P.jsx)(w.SK, { height: "40px" }),
                                  (0, P.jsx)(b.Z, {
                                    variant: "h4",
                                    gutterBottom: !0,
                                    children: x,
                                  }),
                                  d.map(function (n) {
                                    return (0, P.jsx)(
                                      S,
                                      {
                                        integration: n,
                                        revokeInvitation: function () {
                                          return r(n.id);
                                        },
                                      },
                                      n.id,
                                    );
                                  }),
                                ],
                              }),
                            l && (0, P.jsx)(w.SK, { height: "20px" }),
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
        })(T.Component),
        J = (0, g.Z)(G);
    },
  },
]);
//# sourceMappingURL=9433.58933d8d.chunk.js.map
