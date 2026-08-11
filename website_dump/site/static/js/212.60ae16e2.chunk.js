(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [212],
  {
    2729: function (e, n, t) {
      "use strict";
      t.d(n, {
        Kw: function () {
          return c;
        },
        pG: function () {
          return _;
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
        c = function (e) {
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
        _ = function (e) {
          return e ? o["code".concat(e.code)] : "UNEXPECTED_ERROR";
        };
    },
    43756: function (e, n, t) {
      "use strict";
      (t.r(n),
        t.d(n, {
          default: function () {
            return j;
          },
        }));
      var r,
        c,
        o,
        _,
        a,
        s,
        i,
        E,
        u,
        d,
        A,
        p = t(56824),
        R = t(30225),
        I = t(94404),
        l = t(14482),
        f = t(5189),
        S = t(76431),
        P = t(38391),
        T = t(37210),
        N = t(30588),
        h = t(77835),
        x = t(90012),
        D = t(65857),
        F = t(22247),
        g = t(89020),
        L = t(84628),
        C = t(49318),
        O = (0, L.Jg)({
          path: function () {
            return ["scenes", "containers", "ExternalAppAccepted"];
          },
          connect: { props: [C.Z, ["translations"]] },
        }),
        v = t(31228),
        Z = (function (e) {
          (0, l.default)(t, e);
          var n = (0, f.default)(t);
          function t() {
            return ((0, R.default)(this, t), n.apply(this, arguments));
          }
          return (
            (0, I.default)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    n = e.appInfo,
                    t = e.translations,
                    r = n.scope,
                    c = n.appName,
                    o = n.organization,
                    _ = t.EXTAPP_ACCEPTEDAPP.replace(
                      "<PERMISSION_LEVEL>",
                      t["EXTAPP_".concat(r)],
                    );
                  return (0, v.jsxs)(w, {
                    children: [
                      (0, v.jsx)(G, {
                        children: "".concat(c, ", ").concat(o, "\xae"),
                      }),
                      (0, v.jsx)(h.Z, {
                        variant: "body1",
                        color: "textPrimary",
                        children: _,
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(S.Component),
        m = O(Z),
        w = N.ZP.div(r || (r = (0, p.default)([""]))),
        G = N.ZP.h1(
          c ||
            (c = (0, p.default)([
              "\n  color: #007bc1;\n  font-family: Eaton;\n  font-size: 32px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  line-height: 32px;\n  text-align: center;\n",
            ])),
        ),
        U = (function (e) {
          (0, l.default)(t, e);
          var n = (0, f.default)(t);
          function t() {
            return ((0, R.default)(this, t), n.apply(this, arguments));
          }
          return (
            (0, I.default)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    n = e.loading,
                    t = e.translations,
                    r = e.user,
                    c = e.currentDevice,
                    o = e.appInfo,
                    _ = e.error,
                    a = e.isAppAccepted,
                    s = t.EXTAPP_ACCEPTREQUEST_SWITCHACCOUNT,
                    i = t.EXTAPP_ACCEPTREQUEST_ACCEPTAPP,
                    E = t.EXTAPP_ACCEPTREQUEST_DESC,
                    u = t.EXTAPP_ACCEPTREQUEST_NOAPPFOUND,
                    d = t.EXTAPP_ACCEPTREQUEST_NOAPPFOUND_DESC,
                    A = r.username,
                    p = c.name,
                    R = o || {},
                    I = R.organization,
                    l = R.appName,
                    f = R.scope,
                    S = this.actions.acceptApp,
                    T = (0, D.s)(E, /<PERMISSION_LEVEL>|<APP_NAME>/gi, {
                      "<PERMISSION_LEVEL>": t["EXTAPP_".concat(f)],
                      "<APP_NAME>": "".concat(l, ", ").concat(I, "\xae"),
                    });
                  return (0, v.jsxs)(W, {
                    children: [
                      n && (0, v.jsx)(F.gb, {}),
                      (0, v.jsxs)(b, {
                        children: [
                          (0, v.jsx)(F._i, { size: { width: 80, height: 20 } }),
                          (0, v.jsx)(y, { size: { width: 60, height: 16 } }),
                          (0, v.jsxs)(X, {
                            children: [
                              (0, v.jsx)(h.Z, {
                                color: "secondary",
                                variant: "body2",
                                children: A,
                              }),
                              (0, v.jsx)(B, {
                                onClick: function () {
                                  return (0, x.removeUserSession)();
                                },
                                children: s,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, v.jsxs)(M, {
                        children: [
                          (0, v.jsx)(F.SK, { height: "52px" }),
                          (0, v.jsx)(F.Rw, {}),
                          a && (0, v.jsx)(m, { appInfo: o }),
                          !a &&
                            (0, v.jsxs)(v.Fragment, {
                              children: [
                                l &&
                                  (0, v.jsxs)(v.Fragment, {
                                    children: [
                                      (0, v.jsx)(k, { children: p }),
                                      (0, v.jsx)(g.Z, {
                                        dirty: !0,
                                        error: _,
                                        full: !0,
                                      }),
                                      (0, v.jsx)(F.SK, { height: "15px" }),
                                      (0, v.jsx)(z, {
                                        children: (0, v.jsx)(h.Z, {
                                          variant: "body1",
                                          color: "textPrimary",
                                          children: (0, P.ZP)(T),
                                        }),
                                      }),
                                      (0, v.jsx)(V, {
                                        onClick: S,
                                        children: i,
                                      }),
                                    ],
                                  }),
                                !l &&
                                  (0, v.jsxs)(v.Fragment, {
                                    children: [
                                      (0, v.jsx)(k, { children: u }),
                                      (0, v.jsx)(z, {
                                        children: (0, v.jsx)(h.Z, {
                                          variant: "body1",
                                          color: "textPrimary",
                                          children: d,
                                        }),
                                      }),
                                    ],
                                  }),
                              ],
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
        })(S.Component),
        j = (0, T.Z)(U),
        W = N.ZP.div(o || (o = (0, p.default)([""]))),
        b = N.ZP.div(
          _ ||
            (_ = (0, p.default)([
              "\n  background-color: #007bc1;\n  padding: 22px;\n",
            ])),
        ),
        y = (0, N.ZP)(F.sY)(
          a || (a = (0, p.default)(["\n  padding-left: 8px;\n"])),
        ),
        M = N.ZP.div(
          s ||
            (s = (0, p.default)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 40px;\n",
            ])),
        ),
        k = N.ZP.h1(
          i ||
            (i = (0, p.default)([
              "\n  color: #007bc1;\n  font-family: Eaton;\n  font-size: 32px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  line-height: 32px;\n  text-align: center;\n",
            ])),
        ),
        V = N.ZP.button(
          E ||
            (E = (0, p.default)([
              '\n  height: 48px;\n  width: 100%;\n  margin-top: 20px;\n  border-radius: 6px;\n  background-color: #007BC1;\n  color: #FFFFFF;\n  font-family: "Open Sans";\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 14px;\n  text-align: center;\n  border: 0px;\n  cursor: pointer;\n',
            ])),
        ),
        X = N.ZP.div(
          u ||
            (u = (0, p.default)([
              "\n  float: right;  \n  display: flex;\n  flex-direction: column;\n",
            ])),
        ),
        B = N.ZP.a(
          d ||
            (d = (0, p.default)([
              '\n  font-family: "Open Sans";\n  font-size: 12px;\n  line-height: 14px;\n  font-weight: bold;\n  text-decoration: underline;\n  color: #FFF;\n  cursor: pointer;\n',
            ])),
        ),
        z = N.ZP.div(
          A ||
            (A = (0, p.default)([
              "\n  display: flex;\n  justify-content: center;\n  width: 75%;\n  text-align: center;\n  margin: 0 auto;\n",
            ])),
        );
    },
    37210: function (e, n, t) {
      "use strict";
      var r = t(87121),
        c = t(2845),
        o = t(84628),
        _ = t(98278),
        a = t.n(_),
        s = t(83749),
        i = t(49745),
        E = t(49318),
        u = t(13795),
        d = t(90012),
        A = t(2729),
        p = "".concat(u.CT, "/thirdparty/access_request/{access_id}"),
        R = "".concat(u.CT, "/thirdparty/access_request/{access_id}/accept");
      n.Z = (0, o.Jg)({
        path: function () {
          return ["scenes", "ExternalAppAcceptRequest"];
        },
        connect: {
          props: [
            E.Z,
            ["currentDevice", "user", "translations", "currentRoute"],
          ],
          actions: [E.Z, ["push"]],
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
            o = e.actions;
          return {
            appInfo: [
              {},
              a().object,
              ((n = {}),
              (0, c.Z)(n, o.setAppInfo, function (e, n) {
                return n;
              }),
              (0, c.Z)(n, o.reset, function () {
                return {};
              }),
              n),
            ],
            loading: [
              !1,
              a().bool,
              ((t = {}),
              (0, c.Z)(t, o.getAppInfo, function () {
                return !0;
              }),
              (0, c.Z)(t, o.setAppInfo, function () {
                return !1;
              }),
              (0, c.Z)(t, o.reset, function () {
                return !1;
              }),
              t),
            ],
            error: [
              null,
              a().string,
              ((r = {}),
              (0, c.Z)(r, o.setError, function (e, n) {
                return n;
              }),
              (0, c.Z)(r, o.reset, function () {
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
              a().bool,
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
                      (0, s.gz)(n())
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
            (0, c.Z)(n, t.getAppInfo, r.getAppInfo),
            (0, c.Z)(n, t.acceptApp, r.acceptApp),
            n
          );
        },
        workers: {
          getAppInfo: (0, r.Z)().mark(function e() {
            var n, t, c, o, _, a;
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
                        (c = t.params.accessid),
                        (e.prev = 5),
                        (o = (0, d.generateUrl)(p, { access_id: c })),
                        (e.next = 9),
                        (0, s.RE)(i.Z.get, o)
                      );
                    case 9:
                      return (
                        (_ = e.sent),
                        (a = _.data.result),
                        (e.next = 13),
                        (0, s.gz)(n(a))
                      );
                    case 13:
                      e.next = 20;
                      break;
                    case 15:
                      return (
                        (e.prev = 15),
                        (e.t0 = e.catch(5)),
                        (e.next = 19),
                        (0, s.gz)(n({}))
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
            var n, t, c, o, _, a, E, u, p, I, l, f, S, P, T;
            return (0, r.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators),
                        (t = n.setError),
                        (c = n.push),
                        (e.next = 3),
                        this.get("translations")
                      );
                    case 3:
                      return (
                        (o = e.sent),
                        (e.next = 6),
                        this.get("currentRoute")
                      );
                    case 6:
                      return (
                        (_ = e.sent),
                        (a = _.params),
                        (E = a.accessid),
                        (u = a.usercode),
                        (e.prev = 8),
                        (p = (0, d.generateUrl)(R, { access_id: E })),
                        (I = { userCode: u }),
                        (e.next = 13),
                        (0, s.RE)(i.Z.post, p, I)
                      );
                    case 13:
                      if (((l = e.sent), !l.data.successful)) {
                        e.next = 18;
                        break;
                      }
                      return (
                        (e.next = 18),
                        (0, s.gz)(
                          c(
                            "/hub/access_request/update-success/"
                              .concat(E, "/")
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
                        !(f = e.t0.response))
                      ) {
                        e.next = 29;
                        break;
                      }
                      return (
                        (S = f.data),
                        (P = (S || {}).error),
                        (T = (0, A.Kw)(P.errCode)),
                        (e.next = 29),
                        (0, s.gz)(t(o[T] || ""))
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
      "use strict";
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
    27025: function () {},
  },
]);
//# sourceMappingURL=212.60ae16e2.chunk.js.map
