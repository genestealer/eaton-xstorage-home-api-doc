(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [9285],
  {
    2729: function (e, r, n) {
      "use strict";
      n.d(r, {
        Kw: function () {
          return o;
        },
        pG: function () {
          return _;
        },
      });
      var t = {
          err_onboard_unknown_tech_email: "ERR_ONBOARD_UNKNOWN_TECH_EMAIL",
          err_communication_failed: "SETUP_OFFLINE_MODAL_TITLE",
          err_invalid_queryparam: "ERR_INVALID_QUERY_PARAM",
          err_invalid_owner_name: "ERR_INVALID_OWNER_NAME",
          err_reset_pwd_wrong_invsn: "SIGNIN_INVALID_INVERTER_SN",
          err_reset_pwd_too_many_attempts:
            "SIGNIN_FAILED_LOGIN_LOCKED_ACCOUNT_MINUTES",
          err_reset_pwd_wrong_secret: "ERR_EMAIL_NOT_MATCH",
          err_change_pwd_wrong_password: "USERPROF_CHANGE_PASS_WRONG_PASS",
          "App already exists": "EXTAPP_APP_ALREADY_EXISTS",
          err_failed_auth: "EXTAPP_FAILED_AUTH",
          err_failed_find_req: "EXTAPP_FAILED_FIND_REQ",
          err_failed_update: "EXT_APP_FAILED_UPDATE",
          err_failed_store: "EXT_APP_FAILED_STORE",
          err_set_pwd_invalid_password: "ERR_CHANGE_PASS_INVALID_PASSWORD",
          err_incompatible_kernel_version: "ERR_INCOMPATIBLE_KERNEL_VERSION",
        },
        o = function (e) {
          return t[e]
            ? ""
                .concat(
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
                )
                .concat(t[e])
            : "UNEXPECTED_ERROR";
        },
        i = {
          code1001: "ERR_WIFI_MISSING_SECURITY_MODE",
          code1002: "ERR_WIFI_MISSING_PASSWORD",
          code1003: "ERR_WIFI_PASSWORD_INVALID",
          code1004: "ERR_WIFI_FAILED_GET_CONFIG_DATABASE",
          code1005: "ERR_WIFI_FAILED_STORE_CONFIG_DATABASE",
          code1006: "ERR_WIFI_FAILED_COLLAPSE_ROUTES",
          code1007: "ERR_WIFI_FAILED_DRIVERS",
          code1008: "ERR_WIFI_FAILED_START_WPA",
          code1009: "ERR_WIFI_FAILED_CONNECT_NETWORK",
          code1010: "ERR_WIFI_UPDATE_MISSING_ENABLED_STATE",
          code1011: "ERR_WIFI_UPDATE_MISSING_CONFIG",
          code1012: "ERR_WIFI_UPDATE_MISSING_SSID",
          code1013: "ERR_WIFI_FAILED_GET_WLAN",
          code1014: "ERR_WIFI_FAILED_GET_IPADDRESS",
          code1015: "ERR_HOTSPOT_FAILED_GET_CONFIG_DATABASE",
          code1016: "ERR_LAN_FAILED_GET_CONFIG_DATABASE",
          code1017: "ERR_DNS_FAILED_GET_CONFIG_DATABASE",
          code1018: "ERR_DNS_MISSING_NAME_SERVER",
          code1019: "ERR_LAN_INVALID_IPADDRESS",
          code1020: "ERR_LAN_INVALID_SUBNET_MASK_ADDRESS",
          code1021: "ERR_DNS_FAILED_APPLY_CONFIG",
          code1022: "ERR_NET_FAILED_IFCONFIG",
          code1023: "ERR_NET_FAILED_NETWORK_ROUTE",
          code1024: "ERR_LAN_FAILED_GET_IPADRRESS",
          code1025: "ERR_NET_FAILED_GET_NETWORK_CONFIG",
          code1026: "ERR_HOTSPOT_FAILED_SET_ENABLED_STATE",
          code1027: "ERR_DNS_INVALID_NAME_SERVER",
          code1028: "ERR_NET_NETWORK_UNREACHABLE",
          code1029: "ERR_WIFI_FAILED_SCAN",
          code1030: "ERR_LAN_MISSING_IPMODE",
          code1031: "ERR_HOTSPOT_ENABLED_MISSING",
          code1033: "ERR_HOTSPOT_FACTORY_DEFAULT_PASSWORD",
          code1900: "ERR_NET_SERVER_ERROR",
          code1901: "ERR_NET_SERVICE_UNAVAILABLE",
        },
        _ = function (e) {
          return e ? i["code".concat(e.code)] : "UNEXPECTED_ERROR";
        };
    },
    23513: function (e, r, n) {
      "use strict";
      var t,
        o = n(56824),
        i = n(30588),
        _ = n(22247),
        s = (0, i.ZP)(_.oH)(
          t ||
            (t = (0, o.default)([
              '\n&&&& {\n  label {\n    color: #C6CACC;\n    font-family: "Open Sans";\n    font-size: 10px;\n    line-height: 10px;\n    font-weight: 500;\n  }\n',
            ])),
        );
      r.Z = s;
    },
    29285: function (e, r, n) {
      "use strict";
      (n.r(r),
        n.d(r, {
          ChangePassword: function () {
            return k;
          },
          default: function () {
            return y;
          },
        }));
      var t,
        o,
        i,
        _,
        s = n(56824),
        a = n(30225),
        c = n(94404),
        u = n(14482),
        E = n(5189),
        d = n(76431),
        l = n(87121),
        R = n(2845),
        f = n(84628),
        A = n(49745),
        I = n(90012),
        S = n(98278),
        N = n.n(S),
        p = n(42477),
        g = n(13795),
        T = n(60326),
        P = n.n(T),
        h = n(2729),
        m = n(49318),
        D = n(83749),
        w = "".concat(g.CT, "/users/change_password"),
        C = {
          oldPwd: { value: "" },
          newPwd: { value: "" },
          confirmPwd: { value: "" },
          secret: { value: "" },
          confirmSecret: { value: "" },
        },
        v = { newPwd: [p.q9, p.uo], confirmNewPwd: [p.q9, p.uo] },
        O = {
          newPwd: [p.q9, p.uo],
          confirmNewPwd: [p.q9, p.uo],
          secret: [p.q9, p.GT],
          confirmSecret: [p.q9, p.GT],
        },
        x = O,
        F = (0, f.Jg)({
          path: function () {
            return ["scenes", "ChangePassword"];
          },
          connect: {
            props: [m.Z, ["isMobile", "translations", "user"]],
            actions: [m.Z, ["logout", "updateCurrentUser", "push"]],
          },
          actions: function () {
            return {
              change: function (e) {
                return { field: e };
              },
              submit: function () {
                return !0;
              },
              setForm: function (e) {
                return { form: e };
              },
              setError: function (e) {
                return e;
              },
              reset: function () {
                return !0;
              },
              setProfile: function (e) {
                return { profile: e };
              },
            };
          },
          reducers: function (e) {
            var r,
              n,
              t,
              o,
              i = e.actions;
            return {
              form: [
                C,
                N().object,
                ((r = {}),
                (0, R.Z)(r, i.change, function (e, r) {
                  return p.jR(e, r, x);
                }),
                (0, R.Z)(r, i.setForm, function (e, r) {
                  return p.Yg(r.form, x).form;
                }),
                (0, R.Z)(r, i.reset, function () {
                  return C;
                }),
                r),
              ],
              dirty: [
                !1,
                N().bool,
                ((n = {}),
                (0, R.Z)(n, i.change, function () {
                  return !0;
                }),
                (0, R.Z)(n, i.setError, function () {
                  return !0;
                }),
                (0, R.Z)(n, i.reset, function () {
                  return !1;
                }),
                (0, R.Z)(n, i.submit, function () {
                  return !1;
                }),
                n),
              ],
              error: [
                null,
                N().string,
                ((t = {}),
                (0, R.Z)(t, i.setError, function (e, r) {
                  return r;
                }),
                (0, R.Z)(t, i.reset, function () {
                  return null;
                }),
                (0, R.Z)(t, i.change, function () {
                  return null;
                }),
                (0, R.Z)(t, i.submit, function () {
                  return null;
                }),
                t),
              ],
              loading: [
                !1,
                N().bool,
                ((o = {}),
                (0, R.Z)(o, i.reset, function () {
                  return !1;
                }),
                (0, R.Z)(o, i.submit, function () {
                  return !0;
                }),
                (0, R.Z)(o, i.setError, function () {
                  return !1;
                }),
                o),
              ],
              profile: [
                null,
                N().string,
                (0, R.Z)({}, i.setProfile, function (e, r) {
                  return r.profile;
                }),
              ],
            };
          },
          stop: (0, l.Z)().mark(function e() {
            var r;
            return (0, l.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = this.actionCreators.reset),
                        (0, I.log)("[XS-ChangePassword] Stop Scene "),
                        (e.next = 4),
                        (0, D.gz)(r())
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
            var r = e.actions,
              n = e.workers;
            return (0, R.Z)({}, r.submit, n.submit);
          },
          start: (0, l.Z)().mark(function e() {
            var r, n, t;
            return (0, l.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        window.localStorage.getItem("token"),
                        (e.next = 3),
                        this.get("user")
                      );
                    case 3:
                      return (
                        (r = e.sent),
                        (n = this.actionCreators.setProfile),
                        (t = "tech" === r.profile ? "technician" : "user"),
                        (x = t && "user" === t ? v : O),
                        (e.next = 9),
                        (0, D.gz)(n(t))
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
            );
          }),
          workers: {
            submit: (0, l.Z)().mark(function e() {
              var r, n, t, o, i, _, s, a, c, u, E, d, R, f, I;
              return (0, l.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = this.actionCreators),
                          (n = r.setError),
                          (t = r.setForm),
                          (o = r.reset),
                          (i = r.updateCurrentUser),
                          (_ = r.push),
                          (e.next = 3),
                          this.get("form")
                        );
                      case 3:
                        return ((s = e.sent), (e.next = 6), this.get("dirty"));
                      case 6:
                        return (
                          (a = e.sent),
                          (e.next = 9),
                          this.get("translations")
                        );
                      case 9:
                        if (
                          ((c = e.sent), (u = p.Yg(s, x)), !a || !u.invalid)
                        ) {
                          e.next = 15;
                          break;
                        }
                        return (
                          (e.next = 14),
                          (0, D.gz)(n(c.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 14:
                      case 20:
                      case 24:
                      case 28:
                        return e.abrupt("return", !1);
                      case 15:
                        if (a || !u.invalid) {
                          e.next = 21;
                          break;
                        }
                        return ((e.next = 18), (0, D.gz)(t(u.form)));
                      case 18:
                        return (
                          (e.next = 20),
                          (0, D.gz)(n(c.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 21:
                        if (s.newPwd.value === s.confirmPwd.value) {
                          e.next = 25;
                          break;
                        }
                        return (
                          (e.next = 24),
                          (0, D.gz)(n(c.ERR_PWD_NOT_MATCH))
                        );
                      case 25:
                        if (s.secret.value === s.confirmSecret.value) {
                          e.next = 29;
                          break;
                        }
                        return (
                          (e.next = 28),
                          (0, D.gz)(n(c.ERR_EMAIL_NOT_MATCH))
                        );
                      case 29:
                        return ((e.next = 31), this.get("user"));
                      case 31:
                        return (
                          (E = e.sent),
                          ((d = P()(s, function (e) {
                            return e.value;
                          })).profile = E.profile),
                          delete d.confirmPwd,
                          delete d.confirmSecret,
                          "customer" == d.profile && (d.secret = "true"),
                          (e.prev = 37),
                          (e.next = 40),
                          (0, D.RE)(A.Z.post, w, d)
                        );
                      case 40:
                        return ((e.next = 42), (0, D.gz)(o()));
                      case 42:
                        return ((e.next = 44), (0, D.gz)(i()));
                      case 44:
                        return ((e.next = 46), (0, D.gz)(_("/")));
                      case 46:
                        e.next = 56;
                        break;
                      case 48:
                        if (
                          ((e.prev = 48),
                          (e.t0 = e.catch(37)),
                          console.log(e.t0),
                          !e.t0.response)
                        ) {
                          e.next = 56;
                          break;
                        }
                        return (
                          (R = e.t0.response || {}),
                          (f = R.data),
                          (I = (0, h.Kw)(f.error.errCode)),
                          (e.next = 56),
                          (0, D.gz)(n(c[I]))
                        );
                      case 56:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[37, 48]],
              );
            }),
          },
        }),
        L = n(30588),
        b = n(77835),
        Z = n(72768),
        G = n(89020),
        M = n(23513),
        W = n(82323),
        j = n(76048),
        U = n(22247),
        H = n(31228),
        k = (function (e) {
          (0, u.default)(n, e);
          var r = (0, E.default)(n);
          function n() {
            var e;
            (0, a.default)(this, n);
            for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
              o[i] = arguments[i];
            return (
              ((e = r.call.apply(r, [this].concat(o))).navigate = function (r) {
                (0, e.actions.push)(r);
              }),
              e
            );
          }
          return (
            (0, c.default)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    r = e.form,
                    n = e.dirty,
                    t = e.error,
                    o = e.isMobile,
                    i = e.translations,
                    _ = e.loading,
                    s = e.profile,
                    a = r || {},
                    c = a.oldPwd,
                    u = a.newPwd,
                    E = a.confirmPwd,
                    d = a.secret,
                    l = a.confirmSecret,
                    R = this.actions,
                    f = R.submit,
                    A = R.change,
                    I = R.logout,
                    S = i || {},
                    N = S.CHANGEPASSWORD_TITLE,
                    p = S.CHANGEPASSWORD_BUTTON_SAVE,
                    g = S.CHANGEPASSWORD_BUTTON_CANCEL,
                    T = S.CHANGEPASSWORD_CURRENT_PASS,
                    P = S.CHANGEPASSWORD_NEW_PASS,
                    h = S.CHANGEPASSWORD_CONFIRM_PASS,
                    m = S.USERPROF_CHANGE_PASS_DETAILS,
                    D = S.USERPROF_CHANGE_PASS_SECRET,
                    w = S.SETUP_FORM_CONFIRM_EMAIL,
                    C = S.SET_NEW_PWD_HELP,
                    v = S.SIGNIN_CIBERSECURITY_CERTIFIED;
                  return (0, H.jsxs)(V, {
                    children: [
                      (0, H.jsx)(U.G2, { white: !o }),
                      (0, H.jsxs)(W.Z, {
                        mobile: o,
                        children: [
                          (0, H.jsx)("h1", { children: N }),
                          (0, H.jsx)(z, {
                            dangerouslySetInnerHTML: { __html: C },
                            mobile: o ? 1 : 0,
                          }),
                          "technician" === s &&
                            (0, H.jsx)(K, {
                              dangerouslySetInnerHTML: { __html: m },
                              mobile: o ? 1 : 0,
                            }),
                          (0, H.jsxs)("div", {
                            className: "formDiv",
                            children: [
                              (0, H.jsx)(G.Z, { dirty: n, error: t, full: !1 }),
                              (0, H.jsxs)(U.l0.Row, {
                                children: [
                                  (0, H.jsx)(M.Z, {
                                    id: "CurrentPassword",
                                    type: "password",
                                    label: T,
                                    value: c.value,
                                    error: n && !c.valid,
                                    onChange: function (e) {
                                      var r = e.target;
                                      return A({ oldPwd: r.value });
                                    },
                                  }),
                                  (0, H.jsx)(Z.Z, {
                                    id: "CurrentPassword",
                                    showError: n && !c.valid,
                                    errorMessage: c.message,
                                  }),
                                ],
                              }),
                              (0, H.jsxs)(U.l0.Row, {
                                children: [
                                  (0, H.jsx)(M.Z, {
                                    type: "password",
                                    label: P,
                                    value: u.value,
                                    error: n && !u.valid,
                                    onChange: function (e) {
                                      var r = e.target;
                                      return A({ newPwd: r.value });
                                    },
                                  }),
                                  (0, H.jsx)(Z.Z, {
                                    id: "NewPassword",
                                    showError: n && !u.valid,
                                    errorMessage: u.message,
                                  }),
                                ],
                              }),
                              (0, H.jsxs)(U.l0.Row, {
                                children: [
                                  (0, H.jsx)(M.Z, {
                                    id: "ConfirmPassword",
                                    type: "password",
                                    label: h,
                                    value: E.value,
                                    error: n && !E.valid,
                                    onChange: function (e) {
                                      var r = e.target;
                                      return A({ confirmPwd: r.value });
                                    },
                                  }),
                                  (0, H.jsx)(Z.Z, {
                                    id: "ConfirmPassword",
                                    showError: n && !E.valid,
                                    errorMessage: E.message,
                                  }),
                                ],
                              }),
                              "technician" === s &&
                                (0, H.jsxs)(H.Fragment, {
                                  children: [
                                    (0, H.jsxs)(U.l0.Row, {
                                      children: [
                                        (0, H.jsx)(M.Z, {
                                          id: "Secret",
                                          label: D,
                                          value: d.value,
                                          error: n && !d.valid,
                                          onChange: function (e) {
                                            var r = e.target;
                                            return A({ secret: r.value });
                                          },
                                        }),
                                        (0, H.jsx)(Z.Z, {
                                          id: "Secret",
                                          showError: n && !d.valid,
                                          errorMessage: d.message,
                                        }),
                                      ],
                                    }),
                                    (0, H.jsxs)(U.l0.Row, {
                                      children: [
                                        (0, H.jsx)(M.Z, {
                                          id: "ConfirmSecret",
                                          label: w,
                                          value: l.value,
                                          error: n && !l.valid,
                                          onChange: function (e) {
                                            var r = e.target;
                                            return A({
                                              confirmSecret: r.value,
                                            });
                                          },
                                        }),
                                        (0, H.jsx)(Z.Z, {
                                          id: "ConfirmSecret",
                                          showError: n && !l.valid,
                                          errorMessage: l.message,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              (0, H.jsxs)(U.l0.Row, {
                                children: [
                                  (0, H.jsx)(j.Z, {
                                    disabled: _,
                                    onClick: f,
                                    children: p,
                                  }),
                                  (0, H.jsx)(B, {
                                    disabled: _,
                                    onClick: I,
                                    children: g,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, H.jsxs)("div", {
                            className: "cibersecurity",
                            children: [
                              (0, H.jsx)(U.QS, {}),
                              (0, H.jsx)("p", { children: v }),
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
        })(d.Component),
        y = F(k),
        V = L.ZP.div(t || (t = (0, s.default)(["\n\n"]))),
        B = L.ZP.button(
          o ||
            (o = (0, s.default)([
              '\n  color: #007bc1;\n  font-family: "Open Sans";\n  font-size: 14px;\n  line-height: 14px;\n  text-align: center;\n  text-decoration: underline;\n  background: transparent;\n  border: 0px;\n  width: 100%;\n  justify-content: center;\n  margin-top: 5%;\n  cursor: pointer;\n',
            ])),
        ),
        z = (0, L.ZP)(b.Z)(
          i ||
            (i = (0, s.default)([
              '\n  color: #727e84 !important;\n  font-family: "Open Sans";\n  font-size: 14px !important;\n  line-height: 20px !important;\n  margin: 0 auto;\n  margin-bottom: 20px;\n\n  ',
              "\n\n  ",
              "\n",
            ])),
          function (e) {
            return (
              !e.mobile &&
              "\n    padding-left: 20%;\n    padding-right: 20%;\n  "
            );
          },
          function (e) {
            return (
              e.mobile && "\n    padding-left: 5%;\n    padding-right: 5%;\n  "
            );
          },
        ),
        K = (0, L.ZP)(b.Z)(
          _ ||
            (_ = (0, s.default)([
              '\n  color: #727e84 !important;\n  font-family: "Open Sans";\n  font-size: 10px !important;\n  font-weight: lighter;\n  line-height: 20px !important;\n  margin: 0 auto;\n  margin-bottom: 20px;\n\n  ',
              "\n\n  ",
              "\n",
            ])),
          function (e) {
            return (
              !e.mobile &&
              "\n    padding-left: 20%;\n    padding-right: 20%;\n  "
            );
          },
          function (e) {
            return (
              e.mobile && "\n    padding-left: 5%;\n    padding-right: 5%;\n  "
            );
          },
        );
    },
    60326: function (e, r, n) {
      var t = n(7278),
        o = n(31709),
        i = n(61490);
      e.exports = function (e, r) {
        var n = {};
        return (
          (r = i(r, 3)),
          o(e, function (e, o, i) {
            t(n, o, r(e, o, i));
          }),
          n
        );
      };
    },
  },
]);
//# sourceMappingURL=9285.f0b1b69e.chunk.js.map
