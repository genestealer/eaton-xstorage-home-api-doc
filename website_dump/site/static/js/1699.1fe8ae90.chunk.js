"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [1699],
  {
    1699: function (e, n, t) {
      (t.r(n),
        t.d(n, {
          TermsAndEula: function () {
            return D;
          },
          default: function () {
            return B;
          },
        }));
      var r,
        a,
        s,
        c,
        i,
        u,
        o,
        l,
        d,
        x,
        f = t(56824),
        h = t(30225),
        p = t(94404),
        g = t(14482),
        E = t(5189),
        m = t(76431),
        Z = t(87121),
        _ = t(2845),
        k = t(84628),
        C = t(49745),
        v = t(83749),
        j = t(98278),
        b = t.n(j),
        T = t(13795),
        A = t(90012),
        w = t(49318),
        L = "".concat(T.CT, "/internal/eulas/current"),
        S = "".concat(T.CT, "/users/me"),
        U = (0, k.Jg)({
          path: function () {
            return ["scenes", "TermsAndEula"];
          },
          connect: {
            props: [
              w.Z,
              ["isMobile", "translations", "user", "language", "userValid"],
            ],
            actions: [
              w.Z,
              [
                "checkUserValid",
                "setUserValid",
                "setCurrentUser",
                "start",
                "push",
              ],
            ],
          },
          actions: function () {
            return {
              error: function () {
                return !0;
              },
              reset: function () {
                return !0;
              },
              fetchCurrentEula: function () {
                return !0;
              },
              setCurrentEula: function (e) {
                return { eula: e };
              },
              acceptCurrentEula: function () {
                return !0;
              },
              revokeEula: function () {
                return !0;
              },
            };
          },
          reducers: function (e) {
            var n,
              t,
              r = e.actions;
            return {
              currentEula: [
                {},
                b().object,
                ((n = {}),
                (0, _.Z)(n, r.reset, function () {
                  return {};
                }),
                (0, _.Z)(n, r.setCurrentEula, function (e, n) {
                  return n.eula;
                }),
                n),
              ],
              loading: [
                !0,
                b().bool,
                ((t = {}),
                (0, _.Z)(t, r.reset, function () {
                  return !0;
                }),
                (0, _.Z)(t, r.error, function () {
                  return !1;
                }),
                (0, _.Z)(t, r.setCurrentEula, function () {
                  return !1;
                }),
                t),
              ],
              error: [
                !1,
                b().any,
                (0, _.Z)({}, r.error, function () {
                  return !0;
                }),
              ],
            };
          },
          start: (0, Z.Z)().mark(function e() {
            var n;
            return (0, Z.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators.fetchCurrentEula),
                        (0, A.log)("[XS-TermsAndEula] Start Scene", "yellow"),
                        (e.next = 4),
                        (0, v.gz)(n())
                      );
                    case 4:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
            );
          }),
          stop: (0, Z.Z)().mark(function e() {
            var n;
            return (0, Z.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators.reset),
                        (0, A.log)("[XS-TermsAndEula] Stop Scene"),
                        (e.next = 4),
                        (0, v.gz)(n())
                      );
                    case 4:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
            );
          }),
          takeLatest: function (e) {
            var n,
              t = e.actions,
              r = e.workers;
            return (
              (n = {}),
              (0, _.Z)(n, t.fetchCurrentEula, r.fetchCurrentEula),
              (0, _.Z)(n, t.acceptCurrentEula, r.acceptCurrentEula),
              (0, _.Z)(n, t.revokeEula, r.revokeEula),
              n
            );
          },
          workers: {
            fetchCurrentEula: (0, Z.Z)().mark(function e() {
              var n, t, r, a, s, c, i, u, o, l, d, x, f, h;
              return (0, Z.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (t = n.setCurrentEula),
                          (r = n.error),
                          (e.next = 3),
                          this.get("language")
                        );
                      case 3:
                        return (
                          (a = e.sent),
                          (e.prev = 4),
                          (s = { language: a }),
                          (e.next = 8),
                          (0, v.RE)(C.Z.get, L, { params: s })
                        );
                      case 8:
                        if (
                          ((c = e.sent),
                          (i = c.data),
                          (u = i.result),
                          !i.successful)
                        ) {
                          e.next = 16;
                          break;
                        }
                        return ((e.next = 14), (0, v.gz)(t(u)));
                      case 14:
                        e.next = 18;
                        break;
                      case 16:
                        return ((e.next = 18), (0, v.gz)(r()));
                      case 18:
                        e.next = 32;
                        break;
                      case 20:
                        if (
                          ((e.prev = 20), (e.t0 = e.catch(4)), !e.t0.response)
                        ) {
                          e.next = 31;
                          break;
                        }
                        if (
                          ((o = e.t0.response),
                          (l = o.status),
                          (d = o.data),
                          (x = d.error),
                          (f = x.step),
                          (h = x.errCode),
                          500 !== l)
                        ) {
                          e.next = 29;
                          break;
                        }
                        if (
                          "get_eula" !== f ||
                          "err_eula_translation_not_found" !== h
                        ) {
                          e.next = 29;
                          break;
                        }
                        return ((e.next = 29), (0, v.gz)(r()));
                      case 29:
                        e.next = 32;
                        break;
                      case 31:
                        console.log(e.t0);
                      case 32:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[4, 20]],
              );
            }),
            acceptCurrentEula: (0, Z.Z)().mark(function e() {
              var n, t, r, a, s, c;
              return (0, Z.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators.start),
                          (e.next = 3),
                          this.get("currentEula")
                        );
                      case 3:
                        return (
                          (t = e.sent),
                          (e.next = 6),
                          this.get("language")
                        );
                      case 6:
                        return (
                          (r = e.sent),
                          (e.prev = 7),
                          (a = { eulaVersion: t.version, language: r }),
                          (e.next = 11),
                          (0, v.RE)(C.Z.post, S, a)
                        );
                      case 11:
                        if (((s = e.sent), (c = s.data), !c.successful)) {
                          e.next = 17;
                          break;
                        }
                        return ((e.next = 17), (0, v.gz)(n()));
                      case 17:
                        e.next = 22;
                        break;
                      case 19:
                        ((e.prev = 19), (e.t0 = e.catch(7)), console.log(e.t0));
                      case 22:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[7, 19]],
              );
            }),
            revokeEula: (0, Z.Z)().mark(function e() {
              var n, t, r, a, s, c, i, u, o, l;
              return (0, Z.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return ((e.next = 2), this.get("language"));
                      case 2:
                        return (
                          (n = e.sent),
                          (t = this.actionCreators),
                          (r = t.setUserValid),
                          (a = t.setCurrentUser),
                          (s = t.push),
                          (e.prev = 4),
                          (c = {
                            eulaVersion: "",
                            language: n,
                            termsAndConditionsVersion: "v1",
                          }),
                          (e.next = 8),
                          (0, v.RE)(C.Z.post, S, c)
                        );
                      case 8:
                        if (
                          ((i = e.sent),
                          (u = i.data),
                          (o = u.successful),
                          (l = u.result),
                          !o)
                        ) {
                          e.next = 19;
                          break;
                        }
                        return (
                          window.localStorage.removeItem("token"),
                          (e.next = 15),
                          (0, v.gz)(r(!1))
                        );
                      case 15:
                        return ((e.next = 17), (0, v.gz)(a(l)));
                      case 17:
                        return ((e.next = 19), (0, v.gz)(s("/")));
                      case 19:
                        e.next = 24;
                        break;
                      case 21:
                        ((e.prev = 21), (e.t0 = e.catch(4)), console.log(e.t0));
                      case 24:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[4, 21]],
              );
            }),
          },
        }),
        V = t(30588),
        y = t(32763),
        M = t(48229),
        O = t(94467),
        z = t.n(O),
        P = t(22247),
        R = t(31228),
        D = (function (e) {
          (0, g.default)(t, e);
          var n = (0, E.default)(t);
          function t() {
            var e;
            (0, h.default)(this, t);
            for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++)
              a[s] = arguments[s];
            return (
              ((e = n.call.apply(n, [this].concat(a))).navigate = function (n) {
                (0, e.actions.push)(n);
              }),
              (e.state = { confirmModal: !1 }),
              e
            );
          }
          return (
            (0, p.default)(t, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    n = this.props,
                    t = n.isMobile,
                    r = n.currentEula,
                    a = n.user,
                    s = n.userValid,
                    c = n.loading,
                    i = n.error,
                    u = n.translations,
                    o = this.actions,
                    l = o.acceptCurrentEula,
                    d = o.revokeEula,
                    x = this.state.confirmModal,
                    f = u.EULA_TITLE,
                    h = u.EULA_LAST_UPDATE,
                    p = u.EULA_LAST_UPDATE_2,
                    g = u.EULA_ACCEPT_BUTTON,
                    E = u.EULA_REVOKE_BUTTON,
                    m = u.EULA_REVOKE_MODAL_TITLE,
                    Z = u.EULA_REVOKE_MODAL_DESC_1,
                    _ = u.EULA_REVOKE_MODAL_DESC_2,
                    k = u.EULA_REVOKE_MODAL_CANCEL,
                    C = u.ERROR_EULAS_GETTING_TRANSLATIONS,
                    v = u.EULA_REVOKE_MODAL_SIGNOUT,
                    j = z().unix(r.releaseDate).format("DD/MM/YYYY"),
                    b = !a || (a && a.eulaVersion !== r.version),
                    T = !c && !i,
                    A =
                      T &&
                      s &&
                      (0, R.jsxs)(R.Fragment, {
                        children: [
                          (0, R.jsxs)(N, {
                            paragraph: !0,
                            children: [
                              (0, R.jsx)("b", { children: h }),
                              " ",
                              j,
                            ],
                          }),
                          (0, R.jsxs)(P.aV, {
                            children: [
                              (0, R.jsxs)(P.aV.Item, {
                                button: !0,
                                onClick: function () {
                                  return e.setState({ confirmModal: !0 });
                                },
                                children: [
                                  (0, R.jsx)(M.Z, {
                                    style: { color: "#CA3C3D" },
                                    children: "close",
                                  }),
                                  (0, R.jsx)(F, { primary: E }),
                                ],
                              }),
                              (0, R.jsx)(P.iz, {
                                variant: "inset",
                                component: "li",
                              }),
                            ],
                          }),
                        ],
                      }),
                    w =
                      T &&
                      b &&
                      (0, R.jsxs)(H, {
                        children: [
                          (0, R.jsxs)(P.zx, {
                            id: "PrimaryButton_AcceptEula",
                            buttonWidth: "280px",
                            smallShadow: !0,
                            onClick: l,
                            children: [
                              (0, R.jsx)(M.Z, { children: "check" }),
                              g,
                            ],
                          }),
                          (0, R.jsx)(G, {
                            onClick: function () {
                              return e.setState({ confirmModal: !0 });
                            },
                            children: E,
                          }),
                        ],
                      }),
                    L = (0, R.jsxs)(P.V1, {
                      mobile: t,
                      marginBottom: "26px",
                      blue: t || !s,
                      children: [
                        !t &&
                          s &&
                          (0, R.jsx)(K, {
                            id: "BackButton",
                            onClick: function () {
                              return e.navigate("/terms/");
                            },
                          }),
                        f,
                      ],
                    }),
                    S =
                      !s &&
                      (0, R.jsxs)(X, { paragraph: !0, children: [p, " ", j] });
                  return (0, R.jsxs)(I, {
                    children: [
                      c && (0, R.jsx)(P.gb, {}),
                      t &&
                        s &&
                        (0, R.jsx)(P.xE, {
                          id: "BackButton",
                          onClick: function () {
                            return e.navigate("/terms/");
                          },
                        }),
                      t &&
                        (0, R.jsxs)(R.Fragment, {
                          children: [
                            L,
                            (0, R.jsxs)(Y, {
                              children: [
                                S,
                                (0, R.jsx)(W, {
                                  children: (0, R.jsx)(P.ZT, {
                                    dangerouslySetInnerHTML: { __html: r.text },
                                  }),
                                }),
                                w,
                                A,
                              ],
                            }),
                          ],
                        }),
                      !t &&
                        (0, R.jsxs)(R.Fragment, {
                          children: [
                            s && L,
                            (0, R.jsxs)(y.Z, {
                              container: !0,
                              spacing: 3,
                              justifyContent: "center",
                              children: [
                                (0, R.jsx)(y.Z, {
                                  item: !0,
                                  xs: 8,
                                  children: (0, R.jsxs)(P.Xk, {
                                    children: [
                                      i && (0, R.jsx)(J, { children: C }),
                                      !s &&
                                        (0, R.jsxs)(R.Fragment, {
                                          children: [L, S],
                                        }),
                                      (0, R.jsx)(P.ZT, {
                                        dangerouslySetInnerHTML: {
                                          __html: r.text,
                                        },
                                      }),
                                      w,
                                    ],
                                  }),
                                }),
                                s &&
                                  (0, R.jsx)(y.Z, {
                                    item: !0,
                                    xs: 4,
                                    children: !c && !i && A,
                                  }),
                              ],
                            }),
                          ],
                        }),
                      (0, R.jsx)(P.u_, {
                        open: x,
                        size: "medium",
                        onClose: function () {
                          return e.setState({ confirmModal: !1 });
                        },
                        children: (0, R.jsxs)("div", {
                          children: [
                            (0, R.jsx)(P.xB, { red: !0, title: m }),
                            (0, R.jsxs)(P.hz, {
                              padding: !0,
                              children: [
                                (0, R.jsx)(P.ZT, {
                                  children: (0, R.jsx)("b", { children: Z }),
                                }),
                                (0, R.jsx)(P.ZT, { children: _ }),
                              ],
                            }),
                            (0, R.jsxs)(P.Zf, {
                              children: [
                                (0, R.jsx)(P.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    return e.setState({ confirmModal: !1 });
                                  },
                                  children: k,
                                }),
                                (0, R.jsx)(P.zx, {
                                  id: "Button_Revoke",
                                  buttonType: "primary-danger",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: d,
                                  children: v,
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
        })(m.Component),
        B = U(D),
        I = V.ZP.div(
          r ||
            (r = (0, f.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n  }\n",
            ])),
        ),
        N = (0, V.ZP)(P.ZT)(
          a || (a = (0, f.default)(["\n  &&&& {\n    color: #727e84;\n  }\n"])),
        ),
        K = (0, V.ZP)(P.xE)(
          s ||
            (s = (0, f.default)([
              "\n  &&&& {\n    color: #fff;\n    margin-right: 15px;\n  }\n",
            ])),
        ),
        F = (0, V.ZP)(P.aV.ItemText)(
          c ||
            (c = (0, f.default)([
              "\n  &&&& {\n    span {\n      color: #ca3c3d !important;\n    }\n  }\n",
            ])),
        ),
        Y = V.ZP.div(i || (i = (0, f.default)([""]))),
        G = V.ZP.button(
          u ||
            (u = (0, f.default)([
              "\n  border-radius: 20px;\n  border: 0px;\n  font-size: 16px;\n  font-weight: 600;\n  font-family: 'Open Sans';\n  text-align: center;\n  display: inline-block;\n  padding: 5px 20px;\n  background-color: #fdfdfd;\n  color: #ca3c3d;\n  display: block;\n  width: 280px;\n  margin: 10px auto;\n  text-align: center;\n",
            ])),
        ),
        W = V.ZP.div(
          o ||
            (o = (0, f.default)([
              "\n  margin-bottom: 40px;\n\n  > p > h1 {\n    line-height: 1.5em;\n  }\n",
            ])),
        ),
        X = (0, V.ZP)(P.ZT)(
          l ||
            (l = (0, f.default)([
              "\n  &&&& {\n    color: #ca3c3d;\n    font-weight: bold;\n  }\n",
            ])),
        ),
        H = V.ZP.div(
          d ||
            (d = (0, f.default)([
              "\n  margin-top: 50px;\n  text-align: center;\n",
            ])),
        ),
        J = (0, V.ZP)(P.ZT)(
          x ||
            (x = (0, f.default)([
              "\n  &&&& {\n    color: #ca3c3d;\n    font-weight: 600;\n  }\n",
            ])),
        );
    },
  },
]);
//# sourceMappingURL=1699.1fe8ae90.chunk.js.map
