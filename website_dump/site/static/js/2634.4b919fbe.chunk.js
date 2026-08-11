"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [2634],
  {
    42634: function (e, r, n) {
      (n.r(r),
        n.d(r, {
          default: function () {
            return G;
          },
        }));
      var t,
        a = n(56824),
        s = n(30225),
        i = n(94404),
        o = n(14482),
        u = n(5189),
        c = n(76431),
        l = n(87121),
        d = n(2845),
        f = n(84628),
        h = n(83749),
        v = n(49745),
        x = n(21649),
        g = n(42477),
        I = n(90012),
        _ = n(86104),
        N = n(49318),
        m = n(13795),
        E = "".concat(m.CT, "/auth/signin"),
        p = {
          username: { value: "", valid: !0 },
          pwd: { value: "", valid: !0 },
          inverterSn: { value: "", valid: !0 },
          email: { value: "", valid: !0 },
        },
        S = {
          username: [g.q9],
          pwd: [g.q9],
          inverterSn: [g.q9],
          email: [g.q9, g.GT],
        },
        w = (0, f.Jg)({
          path: function () {
            return ["scenes", "SigninTechnician"];
          },
          connect: {
            props: [
              N.Z,
              ["userValid", "translations", "isMobile", "currentLocation"],
            ],
            actions: [
              N.Z,
              ["setUserValid", "changeConfig", "start", "push", "replace"],
            ],
          },
          actions: function () {
            return {
              change: function (e) {
                return { field: e };
              },
              submit: function () {
                return !0;
              },
              setError: function (e) {
                return e;
              },
              setForm: function (e) {
                return { form: e };
              },
              reset: function () {
                return !0;
              },
            };
          },
          reducers: function (e) {
            var r,
              n,
              t,
              a,
              s = e.actions;
            return {
              form: [
                p,
                ((r = {}),
                (0, d.Z)(r, s.change, function (e, r) {
                  return g.jR(e, r, S);
                }),
                (0, d.Z)(r, s.setForm, function (e, r) {
                  return g.Yg(r.form, S).form;
                }),
                (0, d.Z)(r, s.reset, function () {
                  return p;
                }),
                r),
              ],
              dirty: [
                !1,
                ((n = {}),
                (0, d.Z)(n, s.setError, function () {
                  return !0;
                }),
                (0, d.Z)(n, s.change, function () {
                  return !0;
                }),
                (0, d.Z)(n, s.reset, function () {
                  return !1;
                }),
                (0, d.Z)(n, s.submit, function () {
                  return !1;
                }),
                n),
              ],
              error: [
                null,
                ((t = {}),
                (0, d.Z)(t, s.setError, function (e, r) {
                  return r;
                }),
                (0, d.Z)(t, s.reset, function () {
                  return null;
                }),
                (0, d.Z)(t, s.change, function () {
                  return null;
                }),
                (0, d.Z)(t, s.submit, function () {
                  return null;
                }),
                t),
              ],
              loading: [
                !1,
                ((a = {}),
                (0, d.Z)(a, s.submit, function () {
                  return !0;
                }),
                (0, d.Z)(a, s.reset, function () {
                  return !1;
                }),
                (0, d.Z)(a, s.setError, function () {
                  return !1;
                }),
                a),
              ],
            };
          },
          start: (0, l.Z)().mark(function e() {
            var r, n;
            return (0, l.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (0, I.log)(
                          "[XS-SIGNINTECHNICIAN] Start scene ",
                          "yellow",
                        ),
                        (r = this.actionCreators.replace),
                        (e.next = 4),
                        this.get("userValid")
                      );
                    case 4:
                      if (!e.sent) {
                        e.next = 12;
                        break;
                      }
                      return ((e.next = 8), this.get("currentLocation"));
                    case 8:
                      if (
                        (n = e.sent).pathname &&
                        !n.pathname.startsWith("/signin")
                      ) {
                        e.next = 12;
                        break;
                      }
                      return ((e.next = 12), (0, h.gz)(r("/")));
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
            );
          }),
          takeLatest: function (e) {
            var r = e.actions,
              n = e.workers;
            return (0, d.Z)({}, r.submit, n.submit);
          },
          workers: {
            submit: (0, l.Z)().mark(function e() {
              var r,
                n,
                t,
                a,
                s,
                i,
                o,
                u,
                c,
                d,
                f,
                I,
                N,
                p,
                w,
                R,
                b,
                k,
                C,
                Z,
                j,
                D,
                y,
                G,
                L,
                O;
              return (0, l.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return ((e.next = 2), this.get("form"));
                      case 2:
                        return ((r = e.sent), (e.next = 5), this.get("dirty"));
                      case 5:
                        return (
                          (n = e.sent),
                          (e.next = 8),
                          this.get("translations")
                        );
                      case 8:
                        if (
                          ((t = e.sent),
                          (a = this.actionCreators),
                          (s = a.setForm),
                          (i = a.setError),
                          (o = a.changeConfig),
                          (u = a.reset),
                          (c = a.start),
                          (d = a.setUserValid),
                          (f = g.Yg(r, S)),
                          !n || !f.invalid)
                        ) {
                          e.next = 17;
                          break;
                        }
                        return ((e.next = 14), (0, h.gz)(s(f.form)));
                      case 14:
                        return (
                          (e.next = 16),
                          (0, h.gz)(i(t.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 16:
                      case 22:
                        return e.abrupt("return", !1);
                      case 17:
                        if (n || !f.invalid) {
                          e.next = 23;
                          break;
                        }
                        return ((e.next = 20), (0, h.gz)(s(f.form)));
                      case 20:
                        return (
                          (e.next = 22),
                          (0, h.gz)(i(t.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 23:
                        return (
                          ((I = (0, x.mapValues)(r, function (e) {
                            return e.value;
                          })).userType = "tech"),
                          (e.prev = 25),
                          (e.next = 28),
                          (0, h.RE)(v.Z.post, E, I)
                        );
                      case 28:
                        return (
                          (N = e.sent),
                          (p = N.data.result.token),
                          window.localStorage.setItem("token", p),
                          window.localStorage.setItem("userType", m.cC),
                          (e.next = 34),
                          (0, h.gz)(o({ userType: m.cC }))
                        );
                      case 34:
                        return ((e.next = 36), (0, h.gz)(u()));
                      case 36:
                        return ((e.next = 38), (0, h.gz)(c()));
                      case 38:
                      case 58:
                      case 82:
                        e.next = 88;
                        break;
                      case 40:
                        return (
                          (e.prev = 40),
                          (e.t0 = e.catch(25)),
                          console.log(e.t0),
                          (e.next = 45),
                          (0, h.gz)(d(!1))
                        );
                      case 45:
                        if (!e.t0.response) {
                          e.next = 88;
                          break;
                        }
                        if (
                          ((w = e.t0.response),
                          (R = w.status),
                          (b = w.data),
                          (k = (b || {}).error),
                          (Z = (C = k || {}).errCode),
                          (j = C.description),
                          500 !== R)
                        ) {
                          e.next = 60;
                          break;
                        }
                        if ("err_internal" !== Z) {
                          e.next = 55;
                          break;
                        }
                        return (
                          (e.next = 53),
                          (0, h.gz)(i(t.SIGNIN_INTERNAL_ERR))
                        );
                      case 53:
                        e.next = 58;
                        break;
                      case 55:
                        if ("err_invalid_inverter_sn" !== Z) {
                          e.next = 58;
                          break;
                        }
                        return (
                          (e.next = 58),
                          (0, h.gz)(i(t.SIGNIN_INVALID_INVERTER_SN))
                        );
                      case 60:
                        if (401 !== R) {
                          e.next = 84;
                          break;
                        }
                        if ("err_wrong_credentials" !== Z) {
                          e.next = 66;
                          break;
                        }
                        return (
                          (e.next = 64),
                          (0, h.gz)(i(t.SIGNIN_WRONG_CREDENTIALS))
                        );
                      case 64:
                      case 69:
                      case 74:
                        e.next = 82;
                        break;
                      case 66:
                        if ("err_invalid_inverter_sn" !== Z) {
                          e.next = 71;
                          break;
                        }
                        return (
                          (e.next = 69),
                          (0, h.gz)(i(t.SIGNIN_INVALID_INVERTER_SN))
                        );
                      case 71:
                        if ("err_internal" !== Z) {
                          e.next = 76;
                          break;
                        }
                        return (
                          (e.next = 74),
                          (0, h.gz)(i(t.SIGNIN_INTERNAL_ERR))
                        );
                      case 76:
                        if ("err_code_too_many_failed_signin" !== Z) {
                          e.next = 82;
                          break;
                        }
                        return (
                          (D = (0, _.a)(j)),
                          (y = ""),
                          D &&
                            ((G = D.translation),
                            (L = D.time),
                            (O = t[G]),
                            (y = O.replace("<LOCK_TIME>", L))),
                          (e.next = 82),
                          (0, h.gz)(i(y))
                        );
                      case 84:
                        if (400 !== R) {
                          e.next = 88;
                          break;
                        }
                        if ("err_invalid_credentials" !== Z) {
                          e.next = 88;
                          break;
                        }
                        return (
                          (e.next = 88),
                          (0, h.gz)(i(t.SIGNIN_WRONG_CREDENTIALS))
                        );
                      case 88:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[25, 40]],
              );
            }),
          },
        }),
        R = n(30588),
        b = n(72768),
        k = n(89020),
        C = n(82323),
        Z = n(76048),
        j = n(22247),
        D = n(31228),
        y = (function (e) {
          (0, o.default)(n, e);
          var r = (0, u.default)(n);
          function n() {
            var e;
            (0, s.default)(this, n);
            for (var t = arguments.length, a = new Array(t), i = 0; i < t; i++)
              a[i] = arguments[i];
            return (
              ((e = r.call.apply(r, [this].concat(a))).navigate = function (r) {
                (0, e.actions.push)(r);
              }),
              (e.handleOnKeyDown = function (r) {
                "Enter" === r.key &&
                  (r.preventDefault(),
                  r.stopPropagation(),
                  setTimeout(function () {
                    e.actions.submit();
                  }, 500));
              }),
              e
            );
          }
          return (
            (0, i.default)(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    r = this.actions,
                    n = r.submit,
                    t = r.change,
                    a = this.props,
                    s = a.translations,
                    i = a.dirty,
                    o = a.form,
                    u = a.error,
                    c = a.isMobile,
                    l = a.loading,
                    d = s.SIGNIN,
                    f = s.SIGNIN_EXISTING_ACCOUNT,
                    h = s.SIGNIN_USERNAME_PLACEHOLDER,
                    v = s.SIGNIN_PASSWORD_PLACEHOLDER,
                    x = s.SIGNIN_UNITSERIAL_PLACEHOLDER,
                    g = s.SIGNIN_EMAIL_PLACEHOLDER,
                    I = s.SIGNIN_FORGOT_PASSWORD,
                    _ = s.SIGNIN_CIBERSECURITY_CERTIFIED,
                    N = s.SIGNIN_IM_USER,
                    m = o.username,
                    E = o.pwd,
                    p = o.inverterSn,
                    S = o.email;
                  return (0, D.jsxs)(L, {
                    children: [
                      l && (0, D.jsx)(j.gb, {}),
                      (0, D.jsx)(j.G2, { white: !c }),
                      (0, D.jsxs)(C.Z, {
                        mobile: c,
                        children: [
                          (0, D.jsx)("h1", { children: d }),
                          (0, D.jsx)("span", { children: f }),
                          (0, D.jsxs)("div", {
                            className: "formDiv",
                            children: [
                              (0, D.jsx)(k.Z, { dirty: i, error: u, full: !1 }),
                              (0, D.jsxs)(j.l0.Row, {
                                children: [
                                  (0, D.jsx)(j.oH, {
                                    id: "Username",
                                    placeholder: h,
                                    value: m.value,
                                    filled: m.value,
                                    onKeyDown: this.handleOnKeyDown,
                                    error: i && !m.valid,
                                    onChange: function (e) {
                                      var r = e.target;
                                      return t({ username: r.value });
                                    },
                                  }),
                                  (0, D.jsx)(b.Z, {
                                    id: "Username",
                                    showError: i && !m.valid,
                                    errorMessage: m.message,
                                  }),
                                ],
                              }),
                              (0, D.jsxs)(j.l0.Row, {
                                children: [
                                  (0, D.jsx)(j.CM, {
                                    id: "Password",
                                    placeholder: v,
                                    value: E.value,
                                    filled: E.value,
                                    error: i && !E.valid,
                                    onKeyDown: this.handleOnKeyDown,
                                    onChange: function (e) {
                                      var r = e.target;
                                      return t({ pwd: r.value });
                                    },
                                    endlink: "/forgot-password/technician",
                                    endtext: I,
                                  }),
                                  (0, D.jsx)(b.Z, {
                                    id: "Password",
                                    showError: i && !E.valid,
                                    errorMessage: E.message,
                                  }),
                                ],
                              }),
                              (0, D.jsxs)(j.l0.Row, {
                                children: [
                                  (0, D.jsx)(j.oH, {
                                    id: "InverterSn",
                                    placeholder: x,
                                    value: p.value,
                                    filled: p.value,
                                    onKeyDown: this.handleOnKeyDown,
                                    error: i && !p.valid,
                                    onChange: function (e) {
                                      var r = e.target;
                                      return t({ inverterSn: r.value });
                                    },
                                  }),
                                  (0, D.jsx)(b.Z, {
                                    id: "InverterSn",
                                    showError: i && !p.valid,
                                    errorMessage: p.message,
                                  }),
                                ],
                              }),
                              (0, D.jsxs)(j.l0.Row, {
                                children: [
                                  (0, D.jsx)(j.oH, {
                                    id: "Email",
                                    placeholder: g,
                                    value: S.value,
                                    filled: S.value,
                                    onKeyDown: this.handleOnKeyDown,
                                    error: i && !S.valid,
                                    onChange: function (e) {
                                      var r = e.target;
                                      return t({ email: r.value });
                                    },
                                  }),
                                  (0, D.jsx)(b.Z, {
                                    id: "Email",
                                    showError: i && !S.valid,
                                    errorMessage: S.message,
                                  }),
                                ],
                              }),
                              (0, D.jsxs)(j.l0.Row, {
                                children: [
                                  (0, D.jsx)(Z.Z, {
                                    onClick: n,
                                    disabled: !i,
                                    children: d,
                                  }),
                                  (0, D.jsx)(Z.Z, {
                                    white: !0,
                                    onClick: function () {
                                      return e.navigate("/signin");
                                    },
                                    children: N,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, D.jsxs)("div", {
                            className: "cibersecurity",
                            children: [
                              (0, D.jsx)(j.QS, {}),
                              (0, D.jsx)("p", { children: _ }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(c.Component),
        G = w(y),
        L = R.ZP.div(t || (t = (0, a.default)([""])));
    },
  },
]);
//# sourceMappingURL=2634.4b919fbe.chunk.js.map
