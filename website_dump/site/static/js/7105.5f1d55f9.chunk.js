"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [7105],
  {
    77105: function (e, n, t) {
      (t.r(n),
        t.d(n, {
          TermsConditions: function () {
            return L;
          },
          default: function () {
            return z;
          },
        }));
      var r,
        s,
        a,
        c,
        i,
        o,
        u,
        l,
        d,
        x,
        f = t(56824),
        p = t(30225),
        h = t(94404),
        m = t(14482),
        T = t(5189),
        g = t(76431),
        C = t(87121),
        _ = t(2845),
        Z = t(84628),
        j = t(49745),
        E = t(83749),
        v = t(98278),
        k = t.n(v),
        M = t(13795),
        S = t(90012),
        b = t(49318),
        R = "".concat(M.CT, "/internal/termsandconditions/current"),
        A = "".concat(M.CT, "/users/me"),
        w = (0, Z.Jg)({
          path: function () {
            return ["scenes", "TermsAndConditions"];
          },
          connect: {
            props: [
              b.Z,
              ["isMobile", "translations", "user", "language", "userValid"],
            ],
            actions: [b.Z, ["checkUserValid", "push", "replace"]],
          },
          actions: function () {
            return {
              error: function () {
                return !0;
              },
              reset: function () {
                return !0;
              },
              fetchCurrentTerms: function () {
                return !0;
              },
              setCurrentTerms: function (e) {
                return { terms: e };
              },
              acceptCurrentTerms: function () {
                return !0;
              },
            };
          },
          reducers: function (e) {
            var n,
              t,
              r = e.actions;
            return {
              currentTerms: [
                {},
                k().object,
                ((n = {}),
                (0, _.Z)(n, r.reset, function () {
                  return {};
                }),
                (0, _.Z)(n, r.setCurrentTerms, function (e, n) {
                  return n.terms;
                }),
                n),
              ],
              loading: [
                !0,
                k().bool,
                ((t = {}),
                (0, _.Z)(t, r.reset, function () {
                  return !0;
                }),
                (0, _.Z)(t, r.setCurrentTerms, function () {
                  return !1;
                }),
                (0, _.Z)(t, r.error, function () {
                  return !1;
                }),
                t),
              ],
              error: [
                !1,
                k().any,
                (0, _.Z)({}, r.error, function () {
                  return !0;
                }),
              ],
            };
          },
          start: (0, C.Z)().mark(function e() {
            var n;
            return (0, C.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators.fetchCurrentTerms),
                        (0, S.log)(
                          "[XS-TermsAndConditions] Start Scene",
                          "yellow",
                        ),
                        (e.next = 4),
                        (0, E.gz)(n())
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
          stop: (0, C.Z)().mark(function e() {
            var n;
            return (0, C.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators.reset),
                        (0, S.log)("[XS-TermsAndConditions] Stop Scene"),
                        (e.next = 4),
                        (0, E.gz)(n())
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
              (0, _.Z)(n, t.fetchCurrentTerms, r.fetchCurrentTerms),
              (0, _.Z)(n, t.acceptCurrentTerms, r.acceptCurrentTerms),
              n
            );
          },
          workers: {
            fetchCurrentTerms: (0, C.Z)().mark(function e() {
              var n, t, r, s, a, c, i, o, u, l, d, x, f, p;
              return (0, C.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (t = n.setCurrentTerms),
                          (r = n.error),
                          (e.next = 3),
                          this.get("language")
                        );
                      case 3:
                        return (
                          (s = e.sent),
                          (e.prev = 4),
                          (a = { language: s }),
                          (e.next = 8),
                          (0, E.RE)(j.Z.get, R, { params: a })
                        );
                      case 8:
                        if (
                          ((c = e.sent),
                          (i = c.data),
                          (o = i.result),
                          !i.successful)
                        ) {
                          e.next = 16;
                          break;
                        }
                        return ((e.next = 14), (0, E.gz)(t(o)));
                      case 14:
                        e.next = 18;
                        break;
                      case 16:
                        return ((e.next = 18), (0, E.gz)(r()));
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
                          ((u = e.t0.response),
                          (l = u.status),
                          (d = u.data),
                          (x = d.error),
                          (f = x.step),
                          (p = x.errCode),
                          500 !== l)
                        ) {
                          e.next = 29;
                          break;
                        }
                        if (
                          "get_terms" !== f ||
                          "err_terms_translation_not_found" !== p
                        ) {
                          e.next = 29;
                          break;
                        }
                        return ((e.next = 29), (0, E.gz)(r()));
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
            acceptCurrentTerms: (0, C.Z)().mark(function e() {
              var n, t, r, s, a, c, i, o;
              return (0, C.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (t = n.checkUserValid),
                          (r = n.replace),
                          (e.next = 3),
                          this.get("currentTerms")
                        );
                      case 3:
                        return (
                          (s = e.sent),
                          (e.next = 6),
                          this.get("language")
                        );
                      case 6:
                        return (
                          (a = e.sent),
                          (e.prev = 7),
                          (c = {
                            termsAndConditionsVersion: s.version,
                            language: a,
                          }),
                          (e.next = 11),
                          (0, E.RE)(j.Z.post, A, c)
                        );
                      case 11:
                        if (((i = e.sent), (o = i.data), !o.successful)) {
                          e.next = 19;
                          break;
                        }
                        return ((e.next = 17), (0, E.gz)(r("/")));
                      case 17:
                        return ((e.next = 19), (0, E.gz)(t()));
                      case 19:
                        e.next = 24;
                        break;
                      case 21:
                        ((e.prev = 21), (e.t0 = e.catch(7)), console.log(e.t0));
                      case 24:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[7, 21]],
              );
            }),
          },
        }),
        O = t(30588),
        V = t(32763),
        y = t(48229),
        P = t(22247),
        D = t(31228),
        L = (function (e) {
          (0, m.default)(t, e);
          var n = (0, T.default)(t);
          function t() {
            var e;
            (0, p.default)(this, t);
            for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++)
              s[a] = arguments[a];
            return (
              ((e = n.call.apply(n, [this].concat(s))).navigate = function (n) {
                (0, e.actions.push)(n);
              }),
              (e.state = { confirmModal: !1 }),
              e
            );
          }
          return (
            (0, h.default)(t, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    n = this.props,
                    t = n.isMobile,
                    r = n.translations,
                    s = n.currentTerms,
                    a = n.userValid,
                    c = n.user,
                    i = n.loading,
                    o = n.error,
                    u = this.actions.acceptCurrentTerms,
                    l = this.state.confirmModal,
                    d = r.TERMS_TITLE,
                    x = r.TERMS_LAST_UPDATE,
                    f = r.TERMS_LAST_UPDATE_2,
                    p = r.TERMS_ACCEPT_BUTTON,
                    h = r.TERMS_REVOKE_BUTTON,
                    m = r.TERMS_REVOKE_MODAL_TITLE,
                    T = r.TERMS_REVOKE_MODAL_DESC_1,
                    g = r.TERMS_REVOKE_MODAL_DESC_2,
                    C = r.TERMS_REVOKE_MODAL_CANCEL,
                    _ = r.TERMS_REVOKE_MODAL_PROCEED,
                    Z = r.ERROR_TERMS_GETTING_TRANSLATIONS,
                    j = (0, S.convertMillisToSec)(parseInt(s.updatedAt)),
                    E = !c || (c && c.termsAndConditionsVersion !== s.version),
                    v = !i && !o,
                    k =
                      v &&
                      a &&
                      (0, D.jsxs)(D.Fragment, {
                        children: [
                          (0, D.jsxs)(I, {
                            paragraph: !0,
                            children: [
                              (0, D.jsx)("b", { children: x }),
                              " ",
                              (0, S.convertEpochToDate)(j),
                            ],
                          }),
                          (0, D.jsxs)(P.aV, {
                            children: [
                              (0, D.jsxs)(P.aV.Item, {
                                button: !0,
                                onClick: function () {
                                  return e.setState({ confirmModal: !0 });
                                },
                                children: [
                                  (0, D.jsx)(y.Z, {
                                    style: { color: "#CA3C3D" },
                                    children: "close",
                                  }),
                                  (0, D.jsx)(N, { primary: h }),
                                ],
                              }),
                              (0, D.jsx)(P.iz, {
                                variant: "inset",
                                component: "li",
                              }),
                            ],
                          }),
                        ],
                      }),
                    M =
                      v &&
                      E &&
                      (0, D.jsxs)(X, {
                        children: [
                          (0, D.jsx)(P.zx, {
                            id: "PrimaryButton_AcceptTerms",
                            buttonWidth: "280px",
                            onClick: u,
                            children: p,
                          }),
                          (0, D.jsx)(U, {
                            onClick: function () {
                              return e.setState({ confirmModal: !0 });
                            },
                            children: h,
                          }),
                        ],
                      }),
                    b = (0, D.jsxs)(P.V1, {
                      blue: t || !a,
                      marginBottom: "26px",
                      mobile: t,
                      children: [
                        !t &&
                          a &&
                          (0, D.jsx)(K, {
                            id: "BackButton",
                            onClick: function () {
                              return e.navigate("/terms/");
                            },
                          }),
                        d,
                      ],
                    }),
                    R =
                      !a &&
                      (0, D.jsxs)(W, {
                        paragraph: !0,
                        children: [
                          f,
                          " ",
                          (0, S.convertEpochToDate)(j, "D of MMMM, YYYY"),
                        ],
                      });
                  return (0, D.jsxs)(B, {
                    children: [
                      i && (0, D.jsx)(P.gb, {}),
                      t &&
                        a &&
                        (0, D.jsx)(P.xE, {
                          id: "BackButton",
                          onClick: function () {
                            return e.navigate("/terms/");
                          },
                        }),
                      t &&
                        (0, D.jsxs)(D.Fragment, {
                          children: [
                            b,
                            (0, D.jsxs)(F, {
                              children: [
                                R,
                                (0, D.jsx)(Y, {
                                  children: (0, D.jsx)(P.ZT, {
                                    dangerouslySetInnerHTML: { __html: s.text },
                                  }),
                                }),
                                k,
                                M,
                              ],
                            }),
                          ],
                        }),
                      !t &&
                        (0, D.jsxs)(D.Fragment, {
                          children: [
                            a && b,
                            (0, D.jsxs)(V.Z, {
                              container: !0,
                              spacing: 24,
                              justify: "center",
                              children: [
                                (0, D.jsx)(V.Z, {
                                  item: !0,
                                  xs: 8,
                                  children: (0, D.jsxs)(P.Xk, {
                                    children: [
                                      o && (0, D.jsx)(G, { children: Z }),
                                      !a &&
                                        (0, D.jsxs)(D.Fragment, {
                                          children: [b, R],
                                        }),
                                      (0, D.jsx)(P.ZT, {
                                        dangerouslySetInnerHTML: {
                                          __html: s.text,
                                        },
                                      }),
                                      M,
                                    ],
                                  }),
                                }),
                                a &&
                                  (0, D.jsx)(V.Z, {
                                    item: !0,
                                    xs: 4,
                                    children: !i && !o && k,
                                  }),
                              ],
                            }),
                          ],
                        }),
                      l &&
                        (0, D.jsx)(P.u_, {
                          open: l,
                          onClose: function () {
                            return e.setState({ confirmModal: !1 });
                          },
                          children: (0, D.jsxs)("div", {
                            children: [
                              (0, D.jsx)(P.xB, { red: !0, title: m }),
                              (0, D.jsxs)(P.hz, {
                                padding: !0,
                                children: [
                                  (0, D.jsx)(P.ZT, {
                                    children: (0, D.jsx)("b", { children: T }),
                                  }),
                                  (0, D.jsx)(P.ZT, { children: g }),
                                ],
                              }),
                              (0, D.jsxs)(P.Zf, {
                                children: [
                                  (0, D.jsx)(P.zx, {
                                    id: "Button_Cancel",
                                    buttonType: "primary-cancel",
                                    margin: "0 12px",
                                    buttonWidth: "156px",
                                    onClick: function () {
                                      return e.setState({ confirmModal: !1 });
                                    },
                                    children: C,
                                  }),
                                  (0, D.jsx)(P.zx, {
                                    id: "Button_Cancel",
                                    buttonType: "primary-danger",
                                    margin: "0 12px",
                                    buttonWidth: "156px",
                                    onClick: function () {
                                      return e.navigate(
                                        "/user-profile/delete/",
                                      );
                                    },
                                    children: _,
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
        })(g.Component),
        z = w(L),
        B = O.ZP.div(
          r ||
            (r = (0, f.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n  }\n",
            ])),
        ),
        I = (0, O.ZP)(P.ZT)(
          s || (s = (0, f.default)(["\n  &&&& {\n    color: #727e84;\n  }\n"])),
        ),
        K = (0, O.ZP)(P.xE)(
          a ||
            (a = (0, f.default)([
              "\n  &&&& {\n    color: #fff;\n    margin-right: 15px;\n  }\n",
            ])),
        ),
        N = (0, O.ZP)(P.aV.ItemText)(
          c ||
            (c = (0, f.default)([
              "\n  &&&& {\n    span {\n      color: #ca3c3d !important;\n    }\n  }\n",
            ])),
        ),
        U = (0, O.ZP)(P.ZT)(
          i ||
            (i = (0, f.default)([
              "\n  &&&& {\n    color: #ca3c3d !important;\n    width: 281px;\n    cursor: pointer;\n  }\n",
            ])),
        ),
        F = O.ZP.div(o || (o = (0, f.default)([""]))),
        Y = O.ZP.div(u || (u = (0, f.default)(["\n  margin-bottom: 40px;\n"]))),
        W = (0, O.ZP)(P.ZT)(
          l ||
            (l = (0, f.default)([
              "\n  &&&& {\n    color: #ca3c3d !important;\n    font-weight: bold;\n  }\n",
            ])),
        ),
        X = O.ZP.div(
          d ||
            (d = (0, f.default)([
              "\n  margin-top: 50px;\n  text-align: center;\n",
            ])),
        ),
        G = (0, O.ZP)(P.ZT)(
          x ||
            (x = (0, f.default)([
              "\n  &&&& {\n    color: #ca3c3d !important;\n    font-weight: 600;\n  }\n",
            ])),
        );
    },
  },
]);
//# sourceMappingURL=7105.5f1d55f9.chunk.js.map
