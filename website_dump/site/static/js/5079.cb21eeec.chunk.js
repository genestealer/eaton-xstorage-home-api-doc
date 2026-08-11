"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [5079],
  {
    2729: function (e, n, t) {
      t.d(n, {
        Kw: function () {
          return _;
        },
        pG: function () {
          return o;
        },
      });
      var r = {
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
          return r[e]
            ? ""
                .concat(
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
                )
                .concat(r[e])
            : "UNEXPECTED_ERROR";
        },
        c = {
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
        o = function (e) {
          return e ? c["code".concat(e.code)] : "UNEXPECTED_ERROR";
        };
    },
    37210: function (e, n, t) {
      var r = t(87121),
        _ = t(2845),
        c = t(84628),
        o = t(98278),
        E = t.n(o),
        a = t(83749),
        s = t(49745),
        i = t(49318),
        u = t(13795),
        A = t(90012),
        R = t(2729),
        I = "".concat(u.CT, "/thirdparty/access_request/{access_id}"),
        p = "".concat(u.CT, "/thirdparty/access_request/{access_id}/accept");
      n.Z = (0, c.Jg)({
        path: function () {
          return ["scenes", "ExternalAppAcceptRequest"];
        },
        connect: {
          props: [
            i.Z,
            ["currentDevice", "user", "translations", "currentRoute"],
          ],
          actions: [i.Z, ["push"]],
        },
        actions: function () {
          return {
            setAppInfo: function (e) {
              return e;
            },
            getAppInfo: function () {
              return !0;
            },
            reset: function () {
              return !0;
            },
            acceptApp: function () {
              return !0;
            },
            setError: function (e) {
              return e;
            },
          };
        },
        reducers: function (e) {
          var n,
            t,
            r,
            c = e.actions;
          return {
            appInfo: [
              {},
              E().object,
              ((n = {}),
              (0, _.Z)(n, c.setAppInfo, function (e, n) {
                return n;
              }),
              (0, _.Z)(n, c.reset, function () {
                return {};
              }),
              n),
            ],
            loading: [
              !1,
              E().bool,
              ((t = {}),
              (0, _.Z)(t, c.getAppInfo, function () {
                return !0;
              }),
              (0, _.Z)(t, c.setAppInfo, function () {
                return !1;
              }),
              (0, _.Z)(t, c.reset, function () {
                return !1;
              }),
              t),
            ],
            error: [
              null,
              E().string,
              ((r = {}),
              (0, _.Z)(r, c.setError, function (e, n) {
                return n;
              }),
              (0, _.Z)(r, c.reset, function () {
                return null;
              }),
              r),
            ],
          };
        },
        selectors: function (e) {
          var n = e.selectors;
          return {
            isAppAccepted: [
              function () {
                return [n.appInfo];
              },
              function (e) {
                return e && "ACCEPTED" === e.status;
              },
              E().bool,
            ],
          };
        },
        start: (0, r.Z)().mark(function e() {
          var n;
          return (0, r.Z)().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = this.actionCreators.getAppInfo),
                      (e.next = 3),
                      (0, a.gz)(n())
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
          var n,
            t = e.actions,
            r = e.workers;
          return (
            (n = {}),
            (0, _.Z)(n, t.getAppInfo, r.getAppInfo),
            (0, _.Z)(n, t.acceptApp, r.acceptApp),
            n
          );
        },
        workers: {
          getAppInfo: (0, r.Z)().mark(function e() {
            var n, t, _, c, o, E;
            return (0, r.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators.setAppInfo),
                        (e.next = 3),
                        this.get("currentRoute")
                      );
                    case 3:
                      return (
                        (t = e.sent),
                        (_ = t.params.accessid),
                        (e.prev = 5),
                        (c = (0, A.generateUrl)(I, { access_id: _ })),
                        (e.next = 9),
                        (0, a.RE)(s.Z.get, c)
                      );
                    case 9:
                      return (
                        (o = e.sent),
                        (E = o.data.result),
                        (e.next = 13),
                        (0, a.gz)(n(E))
                      );
                    case 13:
                      e.next = 20;
                      break;
                    case 15:
                      return (
                        (e.prev = 15),
                        (e.t0 = e.catch(5)),
                        (e.next = 19),
                        (0, a.gz)(n({}))
                      );
                    case 19:
                      console.log(e.t0);
                    case 20:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[5, 15]],
            );
          }),
          acceptApp: (0, r.Z)().mark(function e() {
            var n, t, _, c, o, E, i, u, I, d, f, S, N, T, l;
            return (0, r.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators),
                        (t = n.setError),
                        (_ = n.push),
                        (e.next = 3),
                        this.get("translations")
                      );
                    case 3:
                      return (
                        (c = e.sent),
                        (e.next = 6),
                        this.get("currentRoute")
                      );
                    case 6:
                      return (
                        (o = e.sent),
                        (E = o.params),
                        (i = E.accessid),
                        (u = E.usercode),
                        (e.prev = 8),
                        (I = (0, A.generateUrl)(p, { access_id: i })),
                        (d = { userCode: u }),
                        (e.next = 13),
                        (0, a.RE)(s.Z.post, I, d)
                      );
                    case 13:
                      if (((f = e.sent), !f.data.successful)) {
                        e.next = 18;
                        break;
                      }
                      return (
                        (e.next = 18),
                        (0, a.gz)(
                          _(
                            "/hub/access_request/update-success/"
                              .concat(i, "/")
                              .concat(u),
                          ),
                        )
                      );
                    case 18:
                      e.next = 29;
                      break;
                    case 20:
                      if (
                        ((e.prev = 20),
                        (e.t0 = e.catch(8)),
                        !(S = e.t0.response))
                      ) {
                        e.next = 29;
                        break;
                      }
                      return (
                        (N = S.data),
                        (T = (N || {}).error),
                        (l = (0, R.Kw)(T.errCode)),
                        (e.next = 29),
                        (0, a.gz)(t(c[l] || ""))
                      );
                    case 29:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[8, 20]],
            );
          }),
        },
      });
    },
    65857: function (e, n, t) {
      t.d(n, {
        s: function () {
          return r;
        },
      });
      var r = function (e, n, t) {
        return e.replace(n, function (e) {
          return t[e];
        });
      };
    },
    25079: function (e, n, t) {
      (t.r(n),
        t.d(n, {
          default: function () {
            return h;
          },
        }));
      var r,
        _,
        c,
        o,
        E,
        a,
        s = t(56824),
        i = t(30225),
        u = t(94404),
        A = t(14482),
        R = t(5189),
        I = t(76431),
        p = t(84628),
        d = t(37210),
        f = t(49318),
        S = (0, p.Jg)({
          path: function () {
            return ["scenes", "ExternalAppAcceptSuccess"];
          },
          connect: {
            props: [f.Z, ["currentDevice", "translations"], d.Z, ["appInfo"]],
          },
        }),
        N = t(30588),
        T = t(77835),
        l = t(65857),
        D = t(22247),
        P = t(31228),
        L = (function (e) {
          (0, A.default)(t, e);
          var n = (0, R.default)(t);
          function t() {
            return ((0, i.default)(this, t), n.apply(this, arguments));
          }
          return (
            (0, u.default)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    n = e.translations,
                    t = e.appInfo,
                    r = e.currentDevice,
                    _ = n.EXTAPP_SUCCESS_GOTODASHBOARD,
                    c = n.EXTAPP_SUCCESS_TITLE,
                    o = n.EXTAPP_SUCCESS_DESCRIPTION,
                    E = t.appName,
                    a = t.organization,
                    s = (r || {}).name,
                    i = (0, l.s)(o, /<APP_NAME>|<UNIT_NAME>/gi, {
                      "<APP_NAME>": "".concat(E, ", ").concat(a, "\xae"),
                      "<UNIT_NAME>": s || "",
                    });
                  return (0, P.jsxs)(O, {
                    children: [
                      (0, P.jsxs)(F, {
                        children: [
                          (0, P.jsx)(D._i, { size: { width: 80, height: 20 } }),
                          (0, P.jsx)(x, { size: { width: 60, height: 16 } }),
                        ],
                      }),
                      (0, P.jsxs)(g, {
                        children: [
                          (0, P.jsx)(D.SK, { height: "52px" }),
                          (0, P.jsx)(D.Rw, {}),
                          (0, P.jsx)(C, { children: c }),
                          (0, P.jsx)(T.Z, {
                            variant: "body1",
                            color: "textPrimary",
                            children: i,
                          }),
                          (0, P.jsx)(v, {
                            onClick: function () {
                              return window.open("/", "_blank");
                            },
                            children: _,
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(I.Component),
        h = S(L),
        O = N.ZP.div(r || (r = (0, s.default)([""]))),
        F = N.ZP.div(
          _ ||
            (_ = (0, s.default)([
              "\n  background-color: #007bc1;\n  padding: 22px;\n",
            ])),
        ),
        x = (0, N.ZP)(D.sY)(
          c || (c = (0, s.default)(["\n  padding-left: 8px;\n"])),
        ),
        g = N.ZP.div(
          o ||
            (o = (0, s.default)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 40px;\n",
            ])),
        ),
        C = N.ZP.h1(
          E ||
            (E = (0, s.default)([
              "\n  color: #007bc1;\n  font-family: Eaton;\n  font-size: 32px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  line-height: 32px;\n  text-align: center;\n",
            ])),
        ),
        v = N.ZP.button(
          a ||
            (a = (0, s.default)([
              "\n  height: 48px;\n  width: 100%;\n  margin-top: 20px;\n  border-radius: 6px;\n  background-color: #007bc1;\n  color: #ffffff;\n  font-family: 'Open Sans';\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 14px;\n  text-align: center;\n  border: 0px;\n  cursor: pointer;\n",
            ])),
        );
    },
  },
]);
//# sourceMappingURL=5079.cb21eeec.chunk.js.map
