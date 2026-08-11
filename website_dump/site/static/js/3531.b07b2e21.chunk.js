(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [3531],
  {
    2729: function (e, n, r) {
      "use strict";
      r.d(n, {
        Kw: function () {
          return o;
        },
        pG: function () {
          return i;
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
        _ = {
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
        i = function (e) {
          return e ? _["code".concat(e.code)] : "UNEXPECTED_ERROR";
        };
    },
    23513: function (e, n, r) {
      "use strict";
      var t,
        o = r(56824),
        _ = r(30588),
        i = r(22247),
        c = (0, _.ZP)(i.oH)(
          t ||
            (t = (0, o.default)([
              '\n&&&& {\n  label {\n    color: #C6CACC;\n    font-family: "Open Sans";\n    font-size: 10px;\n    line-height: 10px;\n    font-weight: 500;\n  }\n',
            ])),
        );
      n.Z = c;
    },
    63531: function (e, n, r) {
      "use strict";
      (r.r(n),
        r.d(n, {
          default: function () {
            return G;
          },
        }));
      var t,
        o,
        _,
        i = r(56824),
        c = r(76431),
        s = r(87121),
        E = r(2845),
        a = r(84628),
        u = r(83749),
        R = r(2729),
        d = r(49745),
        I = r(98278),
        l = r.n(I),
        A = r(60326),
        f = r.n(A),
        S = r(42477),
        N = r(13795),
        T = r(49318),
        D = "".concat(N.CT, "/users/set_password"),
        p = { newPwd: { value: "" }, confirmNewPwd: { value: "" } },
        P = { newPwd: [S.q9, S.uo], confirmNewPwd: [S.q9, S.uo] },
        O = (0, a.Jg)({
          path: function () {
            return ["scenes", "SetNewPassword"];
          },
          connect: {
            props: [T.Z, ["translations", "isMobile", "user"]],
            actions: [T.Z, ["logout", "push", "replace"]],
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
              setProfile: function (e) {
                return e;
              },
              reset: function () {
                return !0;
              },
            };
          },
          reducers: function (e) {
            var n,
              r,
              t,
              o = e.actions;
            return {
              form: [
                p,
                l().object,
                ((n = {}),
                (0, E.Z)(n, o.change, function (e, n) {
                  return S.jR(e, n, P);
                }),
                (0, E.Z)(n, o.setForm, function (e, n) {
                  return S.Yg(n.form, P).form;
                }),
                (0, E.Z)(n, o.reset, function () {
                  return p;
                }),
                n),
              ],
              dirty: [
                !1,
                l().bool,
                ((r = {}),
                (0, E.Z)(r, o.change, function () {
                  return !0;
                }),
                (0, E.Z)(r, o.setError, function () {
                  return !0;
                }),
                (0, E.Z)(r, o.reset, function () {
                  return !1;
                }),
                (0, E.Z)(r, o.submit, function () {
                  return !1;
                }),
                r),
              ],
              error: [
                null,
                l().string,
                ((t = {}),
                (0, E.Z)(t, o.setError, function (e, n) {
                  return n;
                }),
                (0, E.Z)(t, o.reset, function () {
                  return null;
                }),
                (0, E.Z)(t, o.change, function () {
                  return null;
                }),
                (0, E.Z)(t, o.submit, function () {
                  return null;
                }),
                t),
              ],
              profile: [
                null,
                l().string,
                (0, E.Z)({}, o.setProfile, function (e, n) {
                  return n;
                }),
              ],
            };
          },
          selectors: {
            profileRole: [
              function (e) {
                return [e.profile];
              },
              function (e) {
                return (
                  e &&
                  ("user" === e
                    ? "customer"
                    : "technician" === e
                      ? "tech"
                      : null)
                );
              },
            ],
          },
          takeLatest: function (e) {
            var n = e.actions,
              r = e.workers;
            return (0, E.Z)({}, n.submit, r.submit);
          },
          start: (0, s.Z)().mark(function e() {
            var n, r, t, o;
            return (0, s.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = window.localStorage.getItem("token")),
                        (e.next = 3),
                        this.get("profile")
                      );
                    case 3:
                      if (((r = e.sent), n)) {
                        e.next = 9;
                        break;
                      }
                      return (
                        (t = this.actionCreators.replace),
                        (o = r || "user"),
                        (e.next = 9),
                        (0, u.gz)(t("/forgot-password/".concat(o)))
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
            submit: (0, s.Z)().mark(function e() {
              var n, r, t, o, _, i, c, E, a, I, l, A, N, T, p;
              return (0, s.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (r = n.setError),
                          (t = n.setForm),
                          (o = n.replace),
                          (e.next = 3),
                          this.get("form")
                        );
                      case 3:
                        return ((_ = e.sent), (e.next = 6), this.get("dirty"));
                      case 6:
                        return (
                          (i = e.sent),
                          (e.next = 9),
                          this.get("translations")
                        );
                      case 9:
                        if (
                          ((c = e.sent), (E = S.Yg(_, P)), !i || !E.invalid)
                        ) {
                          e.next = 15;
                          break;
                        }
                        return (
                          (e.next = 14),
                          (0, u.gz)(r(c.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 14:
                      case 20:
                      case 24:
                        return e.abrupt("return", !1);
                      case 15:
                        if (i || !E.invalid) {
                          e.next = 21;
                          break;
                        }
                        return ((e.next = 18), (0, u.gz)(t(E.form)));
                      case 18:
                        return (
                          (e.next = 20),
                          (0, u.gz)(r(c.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 21:
                        if (_.newPwd.value === _.confirmNewPwd.value) {
                          e.next = 25;
                          break;
                        }
                        return (
                          (e.next = 24),
                          (0, u.gz)(r(c.ERR_PWD_NOT_MATCH))
                        );
                      case 25:
                        return (
                          (a = f()(_, function (e) {
                            return e.value;
                          })),
                          (e.next = 28),
                          this.get("profile")
                        );
                      case 28:
                        return (
                          (I = e.sent),
                          (e.next = 31),
                          this.get("profileRole")
                        );
                      case 31:
                        return (
                          (l = e.sent),
                          (a.profile = l),
                          (A = {
                            "Content-Type": "application/json",
                            Authorization: "Bearer ".concat(
                              window.localStorage.getItem("token"),
                            ),
                          }),
                          (e.prev = 34),
                          (e.next = 37),
                          (0, u.RE)(d.Z.post, D, a, { headers: A })
                        );
                      case 37:
                        return (
                          (e.next = 39),
                          (0, u.gz)(
                            o(
                              "/signin" +
                                ("technician" === I ? "/".concat(I) : ""),
                            ),
                          )
                        );
                      case 39:
                      case 50:
                        e.next = 54;
                        break;
                      case 41:
                        if (
                          ((e.prev = 41),
                          (e.t0 = e.catch(34)),
                          console.log(e.t0),
                          !e.t0.response)
                        ) {
                          e.next = 54;
                          break;
                        }
                        if (
                          ((N = e.t0.response || {}),
                          !((T = N.data) && T.error && T.error.errCode))
                        ) {
                          e.next = 52;
                          break;
                        }
                        return (
                          (p = (0, R.Kw)(T.error.errCode)),
                          (e.next = 50),
                          (0, u.gz)(r(c[p]))
                        );
                      case 52:
                        return (
                          (e.next = 54),
                          (0, u.gz)(r("An unexpected error has occurred"))
                        );
                      case 54:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[34, 41]],
              );
            }),
          },
        }),
        w = r(30588),
        F = r(72768),
        h = r(89020),
        L = r(82323),
        g = r(76048),
        x = r(23513),
        m = r(91870),
        C = r(22247),
        v = r(31228);
      var G = O(function (e) {
          var n = e.actions,
            r = n.submit,
            t = n.change,
            o = n.setProfile,
            _ = n.push,
            i = e.translations,
            s = e.dirty,
            E = e.form,
            a = e.error,
            u = e.isMobile,
            R = i.SET_NEW_PASSWORD,
            d = i.SET_NEW_PWD_HELP,
            I = i.USERPROF_CHANGE_PASS_NEW_PASS,
            l = i.USERPROF_CHANGE_PASS_CONFIRM_PASS,
            A = i.SET_NEW_PASSWORD_BUTTON,
            f = i.FORGOT_PASSWORD_CANCEL,
            S = i.SIGNIN_CIBERSECURITY_CERTIFIED,
            N = E.newPwd,
            T = E.confirmNewPwd,
            D = (0, m.UO)().profile;
          return (
            (0, c.useEffect)(
              function () {
                D && o(D);
              },
              [D],
            ),
            (0, v.jsxs)(W, {
              children: [
                (0, v.jsx)(C.G2, { white: !u }),
                (0, v.jsxs)(L.Z, {
                  mobile: u,
                  children: [
                    (0, v.jsx)("h1", { children: R }),
                    (0, v.jsx)(Z, {
                      dangerouslySetInnerHTML: { __html: d },
                      mobile: u ? 1 : 0,
                    }),
                    (0, v.jsxs)("div", {
                      className: "formDiv",
                      children: [
                        (0, v.jsx)(h.Z, { dirty: s, error: a, full: !1 }),
                        (0, v.jsxs)(C.l0.Row, {
                          children: [
                            (0, v.jsx)(x.Z, {
                              id: "NewPassword",
                              type: "password",
                              label: I,
                              value: N.value,
                              error: s && !N.valid,
                              onChange: function (e) {
                                var n = e.target;
                                return t({ newPwd: n.value });
                              },
                            }),
                            (0, v.jsx)(F.Z, {
                              id: "NewPassword",
                              showError: s && !N.valid,
                              errorMessage: N.message,
                            }),
                          ],
                        }),
                        (0, v.jsxs)(C.l0.Row, {
                          children: [
                            (0, v.jsx)(x.Z, {
                              id: "ConfirmPassword",
                              type: "password",
                              label: l,
                              value: T.value,
                              error: s && !T.valid,
                              onChange: function (e) {
                                var n = e.target;
                                return t({ confirmNewPwd: n.value });
                              },
                            }),
                            (0, v.jsx)(F.Z, {
                              id: "ConfirmPassword",
                              showError: s && !T.valid,
                              errorMessage: T.message,
                            }),
                          ],
                        }),
                        (0, v.jsxs)(C.l0.Row, {
                          children: [
                            (0, v.jsx)(g.Z, { onClick: r, children: A }),
                            (0, v.jsx)(b, {
                              onClick: function () {
                                return (
                                  (e =
                                    "/signin" +
                                    ("technician" === D ? "/".concat(D) : "")),
                                  void _(e)
                                );
                                var e;
                              },
                              children: f,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, v.jsxs)("div", {
                      className: "cibersecurity",
                      children: [
                        (0, v.jsx)(C.QS, {}),
                        (0, v.jsx)("p", { children: S }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        W = w.ZP.div(t || (t = (0, i.default)([""]))),
        b = w.ZP.button(
          o ||
            (o = (0, i.default)([
              '\n  color: #007bc1;\n  font-family: "Open Sans";\n  font-size: 14px;\n  line-height: 14px;\n  text-align: center;\n  text-decoration: underline;\n  background: transparent;\n  border: 0px;\n  width: 100%;\n  justify-content: center;\n  margin-top: 5%;\n  cursor: pointer;\n',
            ])),
        ),
        Z = (0, w.ZP)(C.ZT)(
          _ ||
            (_ = (0, i.default)([
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
        );
    },
    60326: function (e, n, r) {
      var t = r(7278),
        o = r(31709),
        _ = r(61490);
      e.exports = function (e, n) {
        var r = {};
        return (
          (n = _(n, 3)),
          o(e, function (e, o, _) {
            t(r, o, n(e, o, _));
          }),
          r
        );
      };
    },
  },
]);
//# sourceMappingURL=3531.b07b2e21.chunk.js.map
