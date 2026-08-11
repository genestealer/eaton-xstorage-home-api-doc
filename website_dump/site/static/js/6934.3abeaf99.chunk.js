(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [6934],
  {
    2729: function (e, r, n) {
      "use strict";
      n.d(r, {
        Kw: function () {
          return _;
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
        _ = function (e) {
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
        o = {
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
          return e ? o["code".concat(e.code)] : "UNEXPECTED_ERROR";
        };
    },
    23513: function (e, r, n) {
      "use strict";
      var t,
        _ = n(56824),
        o = n(30588),
        i = n(22247),
        c = (0, o.ZP)(i.oH)(
          t ||
            (t = (0, _.default)([
              '\n&&&& {\n  label {\n    color: #C6CACC;\n    font-family: "Open Sans";\n    font-size: 10px;\n    line-height: 10px;\n    font-weight: 500;\n  }\n',
            ])),
        );
      r.Z = c;
    },
    76934: function (e, r, n) {
      "use strict";
      (n.r(r),
        n.d(r, {
          ForgotPassword: function () {
            return G;
          },
          default: function () {
            return w;
          },
        }));
      var t,
        _,
        o = n(56824),
        i = n(76431),
        c = n(87121),
        s = n(2845),
        E = n(84628),
        a = n(83749),
        u = n(49745),
        R = n(98278),
        I = n.n(R),
        d = n(60326),
        l = n.n(d),
        A = n(42477),
        S = n(49318),
        f = n(13795),
        N = n(2729),
        T = n(86104),
        D = "".concat(f.CT, "/users/reset_password"),
        O = { serialNumber: { value: "" }, secret: { value: "" } },
        p = { serialNumber: [A.q9] },
        F = (0, E.Jg)({
          path: function () {
            return ["scenes", "ForgotPassword"];
          },
          connect: {
            props: [S.Z, ["translations", "isMobile"]],
            actions: [S.Z, ["logout", "push"]],
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
            var r,
              n,
              t,
              _ = e.actions;
            return {
              form: [
                O,
                I().object,
                ((r = {}),
                (0, s.Z)(r, _.change, function (e, r) {
                  return A.jR(e, r, p);
                }),
                (0, s.Z)(r, _.setForm, function (e, r) {
                  return A.Yg(r.form, p).form;
                }),
                (0, s.Z)(r, _.reset, function () {
                  return O;
                }),
                r),
              ],
              dirty: [
                !1,
                I().bool,
                ((n = {}),
                (0, s.Z)(n, _.change, function () {
                  return !0;
                }),
                (0, s.Z)(n, _.setError, function () {
                  return !0;
                }),
                (0, s.Z)(n, _.reset, function () {
                  return !1;
                }),
                (0, s.Z)(n, _.submit, function () {
                  return !1;
                }),
                n),
              ],
              error: [
                null,
                I().string,
                ((t = {}),
                (0, s.Z)(t, _.setError, function (e, r) {
                  return r;
                }),
                (0, s.Z)(t, _.reset, function () {
                  return null;
                }),
                (0, s.Z)(t, _.submit, function () {
                  return null;
                }),
                (0, s.Z)(t, _.change, function () {
                  return null;
                }),
                t),
              ],
              profile: [
                null,
                I().string,
                (0, s.Z)({}, _.setProfile, function (e, r) {
                  return r;
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
          start: (0, c.Z)().mark(function e() {
            var r;
            return (0, c.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = this.actionCreators.logout),
                        (e.next = 3),
                        (0, a.gz)(r())
                      );
                    case 3:
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
            return (0, s.Z)({}, r.submit, n.submit);
          },
          workers: {
            submit: (0, c.Z)().mark(function e() {
              var r,
                n,
                t,
                _,
                o,
                i,
                s,
                E,
                R,
                I,
                d,
                S,
                f,
                O,
                F,
                L,
                h,
                g,
                m,
                P,
                x,
                C,
                v,
                b;
              return (0, c.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = this.actionCreators),
                          (n = r.setError),
                          (t = r.setForm),
                          (_ = r.push),
                          (e.next = 3),
                          this.get("form")
                        );
                      case 3:
                        return ((o = e.sent), (e.next = 6), this.get("dirty"));
                      case 6:
                        return (
                          (i = e.sent),
                          (e.next = 9),
                          this.get("translations")
                        );
                      case 9:
                        if (
                          ((s = e.sent), (E = A.Yg(o, p)), !i || !E.invalid)
                        ) {
                          e.next = 15;
                          break;
                        }
                        return (
                          (e.next = 14),
                          (0, a.gz)(n(s.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 14:
                      case 20:
                        return e.abrupt("return", !1);
                      case 15:
                        if (i || !E.invalid) {
                          e.next = 21;
                          break;
                        }
                        return ((e.next = 18), (0, a.gz)(t(E.form)));
                      case 18:
                        return (
                          (e.next = 20),
                          (0, a.gz)(n(s.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 21:
                        return (
                          (R = l()(o, function (e) {
                            return e.value;
                          })),
                          (e.next = 24),
                          this.get("profile")
                        );
                      case 24:
                        return (
                          (I = e.sent),
                          (e.next = 27),
                          this.get("profileRole")
                        );
                      case 27:
                        return (
                          (d = e.sent),
                          (R.profile = d),
                          (e.prev = 29),
                          (e.next = 32),
                          (0, a.RE)(u.Z.post, D, R)
                        );
                      case 32:
                        return (
                          (S = e.sent),
                          (f = S.data.token),
                          window.localStorage.setItem("token", f),
                          (e.next = 37),
                          (0, a.gz)(_("/set-new-password/".concat(I)))
                        );
                      case 37:
                      case 51:
                        e.next = 55;
                        break;
                      case 39:
                        if (
                          ((e.prev = 39),
                          (e.t0 = e.catch(29)),
                          console.log(e.t0),
                          !e.t0.response)
                        ) {
                          e.next = 55;
                          break;
                        }
                        if (
                          ((O = e.t0.response || {}),
                          !((F = O.data) && F.error && F.error.errCode))
                        ) {
                          e.next = 53;
                          break;
                        }
                        return (
                          (L = F.error || {}),
                          (h = L.errCode),
                          (g = L.description),
                          (m = (0, N.Kw)(h)),
                          (P = ""),
                          "err_reset_pwd_too_many_attempts" === h
                            ? (x = (0, T.a)(g)) &&
                              ((C = x.translation),
                              (v = x.time),
                              (b = s[C]),
                              (P = b.replace("<LOCK_TIME>", v)))
                            : (P = s[m]),
                          (e.next = 51),
                          (0, a.gz)(n(P || "An unexpected error has occurred"))
                        );
                      case 53:
                        return (
                          (e.next = 55),
                          (0, a.gz)(n("An unexpected error has occurred"))
                        );
                      case 55:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[29, 39]],
              );
            }),
          },
        }),
        L = n(30588),
        h = n(72768),
        g = n(89020),
        m = n(82323),
        P = n(76048),
        x = n(23513),
        C = n(22247),
        v = n(91870),
        b = n(31228);
      function G(e) {
        var r = e.actions,
          n = r.submit,
          t = r.change,
          _ = r.push,
          o = r.setProfile,
          c = e.translations,
          s = e.dirty,
          E = e.form,
          a = e.error,
          u = e.isMobile,
          R = c.FORGOT_PASSWORD_TITLE,
          I = c.FORGOT_PASSWORD_DESC,
          d = c.FORGOT_PASSWORD_INV_SERIAL_NUMBER,
          l = c.FORGOT_PASSWORD_RESET,
          A = c.FORGOT_PASSWORD_CANCEL,
          S = c.USERPROF_CHANGE_PASS_SECRET,
          f = c.SIGNIN_CIBERSECURITY_CERTIFIED,
          N = E.serialNumber,
          T = E.secret,
          D = (0, v.UO)().profile;
        return (
          (0, i.useEffect)(
            function () {
              D && o(D);
            },
            [D],
          ),
          (0, b.jsxs)("div", {
            children: [
              (0, b.jsx)(C.G2, { white: !u }),
              (0, b.jsxs)(m.Z, {
                mobile: u,
                children: [
                  (0, b.jsx)("h1", { children: R }),
                  (0, b.jsx)(Z, {
                    dangerouslySetInnerHTML: { __html: I },
                    mobile: u ? 1 : 0,
                  }),
                  (0, b.jsxs)("div", {
                    className: "formDiv",
                    children: [
                      (0, b.jsx)(g.Z, { dirty: s, error: a, full: !1 }),
                      (0, b.jsxs)(C.l0.Row, {
                        children: [
                          (0, b.jsx)(x.Z, {
                            label: d,
                            value: N.value,
                            error: s && !N.valid,
                            onChange: function (e) {
                              var r = e.target;
                              return t({ serialNumber: r.value });
                            },
                          }),
                          (0, b.jsx)(h.Z, {
                            id: "SerialNumber",
                            showError: s && !N.valid,
                            errorMessage: N.message,
                          }),
                        ],
                      }),
                      "technician" === D &&
                        (0, b.jsx)(b.Fragment, {
                          children: (0, b.jsxs)(C.l0.Row, {
                            children: [
                              (0, b.jsx)(x.Z, {
                                id: "Secret",
                                label: S,
                                value: T.value,
                                error: s && !T.valid,
                                onChange: function (e) {
                                  var r = e.target;
                                  return t({ secret: r.value });
                                },
                              }),
                              (0, b.jsx)(h.Z, {
                                id: "Secret",
                                showError: s && !T.valid,
                                errorMessage: T.message,
                              }),
                            ],
                          }),
                        }),
                      (0, b.jsxs)(C.l0.Row, {
                        children: [
                          (0, b.jsx)(P.Z, {
                            id: "SigninButton_Submit",
                            onClick: n,
                            children: l,
                          }),
                          (0, b.jsx)(W, {
                            id: "PrimaryButton_Cancel",
                            onClick: function () {
                              return (
                                (e =
                                  "/signin" +
                                  ("technician" === D ? "/".concat(D) : "")),
                                void _(e)
                              );
                              var e;
                            },
                            children: A,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, b.jsxs)("div", {
                    className: "cibersecurity",
                    children: [
                      (0, b.jsx)(C.QS, {}),
                      (0, b.jsx)("p", { children: f }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      var w = F(G),
        W = L.ZP.button(
          t ||
            (t = (0, o.default)([
              '\n  color: #007bc1;\n  font-family: "Open Sans";\n  font-size: 14px;\n  line-height: 14px;\n  text-align: center;\n  text-decoration: underline;\n  background: transparent;\n  border: 0px;\n  width: 100%;\n  justify-content: center;\n  margin-top: 5%;\n',
            ])),
        ),
        Z = (0, L.ZP)(C.ZT)(
          _ ||
            (_ = (0, o.default)([
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
    60326: function (e, r, n) {
      var t = n(7278),
        _ = n(31709),
        o = n(61490);
      e.exports = function (e, r) {
        var n = {};
        return (
          (r = o(r, 3)),
          _(e, function (e, _, o) {
            t(n, _, r(e, _, o));
          }),
          n
        );
      };
    },
  },
]);
//# sourceMappingURL=6934.3abeaf99.chunk.js.map
