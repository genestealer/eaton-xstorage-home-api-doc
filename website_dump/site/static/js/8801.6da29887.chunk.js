"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [8801],
  {
    2729: function (e, n, a) {
      a.d(n, {
        Kw: function () {
          return t;
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
        t = function (e) {
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
        o = function (e) {
          return e ? i["code".concat(e.code)] : "UNEXPECTED_ERROR";
        };
    },
    68801: function (e, n, a) {
      (a.r(n),
        a.d(n, {
          WelcomeAfterInstallation: function () {
            return H;
          },
          default: function () {
            return X;
          },
        }));
      var r,
        t,
        i,
        o,
        s,
        l,
        c,
        x,
        d,
        p,
        m = a(56824),
        _ = a(30225),
        E = a(94404),
        k = a(14482),
        u = a(5189),
        h = a(76431),
        f = a(87121),
        A = a(2845),
        S = a(84628),
        D = a(83749),
        R = a(90012),
        I = a(49745),
        y = a(13795),
        T = a(49318),
        v = a(42477),
        g = a(98278),
        b = a.n(g),
        w = a(2729),
        O = "".concat(y.CT, "/cloudapi/onboard"),
        N = "".concat(y.CT, "/config/state"),
        F = {
          firstname: { value: "", valid: !0 },
          lastname: { value: "", valid: !0 },
          email: { value: "", valid: !0 },
          confirmemail: { value: "", valid: !0 },
        },
        L = {
          firstname: [v.q9],
          lastname: [v.q9],
          email: [v.q9, v.GT],
          confirmemail: [v.q9, v.GT],
        },
        C = (0, S.Jg)({
          path: function () {
            return ["scenes", "WelcomeAfterInstallation"];
          },
          connect: {
            props: [
              T.Z,
              [
                "translations",
                "isMobile",
                "configs",
                "language",
                "user",
                "ownerInfo",
              ],
            ],
            actions: [
              T.Z,
              ["fetchCurrentDeviceInfo", "setOwnerInfo", "replace"],
            ],
          },
          actions: function () {
            return {
              change: function (e) {
                return { field: e };
              },
              reset: function () {
                return !0;
              },
              useLocalPortal: function () {
                return !0;
              },
              setForm: function (e) {
                return { form: e };
              },
              setError: function (e) {
                return e;
              },
              connectToCloud: function () {
                return !0;
              },
              onboardComplete: function () {
                return !0;
              },
            };
          },
          reducers: function (e) {
            var n,
              a,
              r,
              t,
              i = e.actions;
            return {
              form: [
                F,
                b().object,
                ((n = {}),
                (0, A.Z)(n, i.change, function (e, n) {
                  return v.jR(e, n, L);
                }),
                (0, A.Z)(n, i.setForm, function (e, n) {
                  return v.Yg(n.form, L).form;
                }),
                (0, A.Z)(n, i.reset, function () {
                  return F;
                }),
                n),
              ],
              dirty: [
                !1,
                b().bool,
                ((a = {}),
                (0, A.Z)(a, i.change, function () {
                  return !0;
                }),
                (0, A.Z)(a, i.connectToCloud, function () {
                  return !1;
                }),
                (0, A.Z)(a, i.setError, function () {
                  return !0;
                }),
                (0, A.Z)(a, i.reset, function () {
                  return !1;
                }),
                a),
              ],
              error: [
                null,
                b().string,
                ((r = {}),
                (0, A.Z)(r, i.setError, function (e, n) {
                  return n;
                }),
                (0, A.Z)(r, i.connectToCloud, function () {
                  return null;
                }),
                (0, A.Z)(r, i.reset, function () {
                  return null;
                }),
                (0, A.Z)(r, i.change, function () {
                  return null;
                }),
                r),
              ],
              loading: [
                !1,
                b().bool,
                ((t = {}),
                (0, A.Z)(t, i.connectToCloud, function () {
                  return !0;
                }),
                (0, A.Z)(t, i.setError, function () {
                  return !1;
                }),
                (0, A.Z)(t, i.setForm, function () {
                  return !1;
                }),
                t),
              ],
            };
          },
          start: (0, f.Z)().mark(function e() {
            var n, a, r;
            return (0, f.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (0, R.log)(
                          "[XS-WelcomeAfterInstallation] Start Scene ",
                          "yellow",
                        ),
                        (e.next = 3),
                        this.get("ownerInfo")
                      );
                    case 3:
                      return ((n = e.sent), (e.next = 6), this.get("form"));
                    case 6:
                      if (
                        ((a = e.sent), (r = this.actionCreators.setForm), !n)
                      ) {
                        e.next = 14;
                        break;
                      }
                      return (
                        (a.name = { value: n.name }),
                        (a.email = { value: n.email }),
                        (a.confirmemail = { value: n.email }),
                        (e.next = 14),
                        (0, D.gz)(r(a))
                      );
                    case 14:
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
              a = e.actions,
              r = e.workers;
            return (
              (n = {}),
              (0, A.Z)(n, a.connectToCloud, r.connectToCloud),
              (0, A.Z)(n, a.useLocalPortal, r.useLocalPortal),
              (0, A.Z)(n, a.onboardComplete, r.onboardComplete),
              n
            );
          },
          workers: {
            connectToCloud: (0, f.Z)().mark(function e() {
              var n,
                a,
                r,
                t,
                i,
                o,
                s,
                l,
                c,
                x,
                d,
                p,
                m,
                _,
                E,
                k,
                u,
                h,
                A,
                S,
                R,
                T,
                g;
              return (0, f.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return ((e.next = 2), this.get("configs"));
                      case 2:
                        return (
                          (n = e.sent),
                          (e.next = 5),
                          this.get("language")
                        );
                      case 5:
                        return ((a = e.sent), (e.next = 8), this.get("form"));
                      case 8:
                        return ((r = e.sent), (e.next = 11), this.get("dirty"));
                      case 11:
                        return ((t = e.sent), (e.next = 14), this.get("user"));
                      case 14:
                        return (
                          (i = e.sent),
                          (o = this.actionCreators),
                          (s = o.setError),
                          (l = o.setForm),
                          (c = o.setOwnerInfo),
                          (x = o.replace),
                          (d = v.Yg(r, L)),
                          (e.next = 19),
                          this.get("translations")
                        );
                      case 19:
                        if (((p = e.sent), !t || !d.invalid)) {
                          e.next = 24;
                          break;
                        }
                        return (
                          (e.next = 23),
                          (0, D.gz)(s(p.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 23:
                        return e.abrupt("return", !1);
                      case 24:
                        if (t || !d.invalid) {
                          e.next = 30;
                          break;
                        }
                        return ((e.next = 27), (0, D.gz)(l(d.form)));
                      case 27:
                        return (
                          (e.next = 29),
                          (0, D.gz)(s(p.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 29:
                        return e.abrupt("return", !1);
                      case 30:
                        if (r.email.value === r.confirmemail.value) {
                          e.next = 34;
                          break;
                        }
                        return (
                          (e.next = 33),
                          (0, D.gz)(s(p.ERR_EMAIL_NOT_MATCH))
                        );
                      case 33:
                        return e.abrupt("return", !1);
                      case 34:
                        return (
                          (e.prev = 34),
                          (m = {
                            techEmail: i.email,
                            ownerEmail: r.email.value,
                            ownerName:
                              r.firstname.value + " " + r.lastname.value,
                            locale: a,
                          }),
                          (e.next = 38),
                          (0, D.RE)(I.Z.post, O, m)
                        );
                      case 38:
                        if (
                          ((_ = e.sent),
                          (E = _.data.result),
                          (k = E.connected),
                          (u = E.setupComplete),
                          (h = E.onboardState),
                          (A = E.onboard),
                          !(Object.keys(A).length > 0))
                        ) {
                          e.next = 43;
                          break;
                        }
                        return ((e.next = 43), (0, D.gz)(c(A.onboardedBy)));
                      case 43:
                        if (u || n.userType !== y.Df) {
                          e.next = 48;
                          break;
                        }
                        return ((e.next = 46), (0, D.gz)(x("/welcome")));
                      case 46:
                        e.next = 76;
                        break;
                      case 48:
                        if (u || n.userType !== y.cC) {
                          e.next = 53;
                          break;
                        }
                        return ((e.next = 51), (0, D.gz)(x("/setup/")));
                      case 51:
                        e.next = 76;
                        break;
                      case 53:
                        if (k) {
                          e.next = 58;
                          break;
                        }
                        return ((e.next = 56), (0, D.gz)(x("/")));
                      case 56:
                        e.next = 76;
                        break;
                      case 58:
                        if ("not_onboarded" !== h) {
                          e.next = 63;
                          break;
                        }
                        return (
                          (e.next = 61),
                          (0, D.gz)(x("/setup/welcomeafterinstallation"))
                        );
                      case 61:
                        e.next = 76;
                        break;
                      case 63:
                        if ("onboarded" !== h) {
                          e.next = 68;
                          break;
                        }
                        return (
                          (e.next = 66),
                          (0, D.gz)(x("/setup/unit-connected"))
                        );
                      case 66:
                        e.next = 76;
                        break;
                      case 68:
                        if ("onboarding" !== h) {
                          e.next = 73;
                          break;
                        }
                        return (
                          (e.next = 71),
                          (0, D.gz)(x("/setup/email-validation"))
                        );
                      case 71:
                        e.next = 76;
                        break;
                      case 73:
                        if ("unknown" !== h) {
                          e.next = 76;
                          break;
                        }
                        return (
                          (e.next = 76),
                          (0, D.gz)(x("/setup/welcomeafterinstallation"))
                        );
                      case 76:
                        e.next = 95;
                        break;
                      case 78:
                        if (
                          ((e.prev = 78), (e.t0 = e.catch(34)), !e.t0.response)
                        ) {
                          e.next = 94;
                          break;
                        }
                        if (
                          ((S = e.t0.response || {}),
                          "" !== (R = S.data).error.errCode)
                        ) {
                          e.next = 88;
                          break;
                        }
                        return (
                          (T = this.actionCreators.onboardComplete),
                          (e.next = 86),
                          (0, D.gz)(T())
                        );
                      case 86:
                        e.next = 92;
                        break;
                      case 88:
                        if (!(g = (0, w.Kw)(R.error.errCode))) {
                          e.next = 92;
                          break;
                        }
                        return ((e.next = 92), (0, D.gz)(s(p[g] || "")));
                      case 92:
                        e.next = 95;
                        break;
                      case 94:
                        console.log(e.t0);
                      case 95:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[34, 78]],
              );
            }),
            onboardComplete: (0, f.Z)().mark(function e() {
              var n, a, r, t, i, o, s, l, c;
              return (0, f.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (a = n.fetchCurrentDeviceInfo),
                          (r = n.setError),
                          (t = n.replace),
                          (e.next = 3),
                          this.get("translations")
                        );
                      case 3:
                        return (
                          (i = e.sent),
                          (e.prev = 4),
                          (o = { connected: !0 }),
                          (e.next = 8),
                          (0, D.RE)(I.Z.patch, N, o)
                        );
                      case 8:
                        return ((e.next = 10), (0, D.gz)(a()));
                      case 10:
                        return ((e.next = 12), (0, D.gz)(t("/")));
                      case 12:
                        e.next = 22;
                        break;
                      case 14:
                        if (
                          ((e.prev = 14), (e.t0 = e.catch(4)), !e.t0.response)
                        ) {
                          e.next = 22;
                          break;
                        }
                        if (
                          ((s = e.t0.response || {}),
                          (l = s.data),
                          !(c = (0, w.Kw)(l.error.errCode)))
                        ) {
                          e.next = 22;
                          break;
                        }
                        return ((e.next = 22), (0, D.gz)(r(i[c])));
                      case 22:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[4, 14]],
              );
            }),
            useLocalPortal: (0, f.Z)().mark(function e() {
              var n, a, r, t;
              return (0, f.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (a = n.fetchCurrentDeviceInfo),
                          (r = n.replace),
                          (e.prev = 1),
                          (t = { connected: !1 }),
                          (e.next = 5),
                          (0, D.RE)(I.Z.patch, N, t)
                        );
                      case 5:
                        return ((e.next = 7), (0, D.gz)(a()));
                      case 7:
                        return ((e.next = 9), (0, D.gz)(r("/")));
                      case 9:
                        e.next = 14;
                        break;
                      case 11:
                        ((e.prev = 11), (e.t0 = e.catch(1)), console.log(e.t0));
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[1, 11]],
              );
            }),
          },
        }),
        P = a(30588),
        B = a(48229),
        G = a(51869),
        j = a(32763),
        U = a(72768),
        V = a(89020),
        Z = JSON.parse(
          '{"v":"5.1.16","fr":25,"ip":0,"op":75,"w":240,"h":240,"nm":"Dashboard - No Units","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"circle 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[360]},{"t":75}],"ix":10,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'cycle\', 0);"},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[61,-35,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":25,"nm":"Drop Shadow","np":8,"mn":"ADBE Drop Shadow","ix":1,"en":1,"ef":[{"ty":2,"nm":"Shadow Color","mn":"ADBE Drop Shadow-0001","ix":1,"v":{"a":0,"k":[0.258823990822,0.305882006884,0.329412013292,0.20000000298],"ix":1}},{"ty":0,"nm":"Opacity","mn":"ADBE Drop Shadow-0002","ix":2,"v":{"a":0,"k":51,"ix":2}},{"ty":0,"nm":"Direction","mn":"ADBE Drop Shadow-0003","ix":3,"v":{"a":0,"k":180,"ix":3}},{"ty":0,"nm":"Distance","mn":"ADBE Drop Shadow-0004","ix":4,"v":{"a":0,"k":1.28,"ix":4}},{"ty":0,"nm":"Softness","mn":"ADBE Drop Shadow-0005","ix":5,"v":{"a":0,"k":2.56,"ix":5}},{"ty":7,"nm":"Shadow Only","mn":"ADBE Drop Shadow-0006","ix":6,"v":{"a":0,"k":0,"ix":6}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[10,10],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.482353001833,0.756862998009,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"circle","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"circle 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[360]},{"t":75}],"ix":10,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'cycle\', 0);"},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[-50,50,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":25,"nm":"Drop Shadow","np":8,"mn":"ADBE Drop Shadow","ix":1,"en":1,"ef":[{"ty":2,"nm":"Shadow Color","mn":"ADBE Drop Shadow-0001","ix":1,"v":{"a":0,"k":[0.258823990822,0.305882006884,0.329412013292,0.20000000298],"ix":1}},{"ty":0,"nm":"Opacity","mn":"ADBE Drop Shadow-0002","ix":2,"v":{"a":0,"k":51,"ix":2}},{"ty":0,"nm":"Direction","mn":"ADBE Drop Shadow-0003","ix":3,"v":{"a":0,"k":180,"ix":3}},{"ty":0,"nm":"Distance","mn":"ADBE Drop Shadow-0004","ix":4,"v":{"a":0,"k":1.28,"ix":4}},{"ty":0,"nm":"Softness","mn":"ADBE Drop Shadow-0005","ix":5,"v":{"a":0,"k":2.56,"ix":5}},{"ty":7,"nm":"Shadow Only","mn":"ADBE Drop Shadow-0006","ix":6,"v":{"a":0,"k":0,"ix":6}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[10,10],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.482353001833,0.756862998009,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"circle","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"circle 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[360]},{"t":75}],"ix":10,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'cycle\', 0);"},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[-30,-49,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":25,"nm":"Drop Shadow","np":8,"mn":"ADBE Drop Shadow","ix":1,"en":1,"ef":[{"ty":2,"nm":"Shadow Color","mn":"ADBE Drop Shadow-0001","ix":1,"v":{"a":0,"k":[0.258823990822,0.305882006884,0.329412013292,0.20000000298],"ix":1}},{"ty":0,"nm":"Opacity","mn":"ADBE Drop Shadow-0002","ix":2,"v":{"a":0,"k":51,"ix":2}},{"ty":0,"nm":"Direction","mn":"ADBE Drop Shadow-0003","ix":3,"v":{"a":0,"k":180,"ix":3}},{"ty":0,"nm":"Distance","mn":"ADBE Drop Shadow-0004","ix":4,"v":{"a":0,"k":1.28,"ix":4}},{"ty":0,"nm":"Softness","mn":"ADBE Drop Shadow-0005","ix":5,"v":{"a":0,"k":2.56,"ix":5}},{"ty":7,"nm":"Shadow Only","mn":"ADBE Drop Shadow-0006","ix":6,"v":{"a":0,"k":0,"ix":6}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[10,10],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.482353001833,0.756862998009,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"circle","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"circle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[360]},{"t":75}],"ix":10,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'cycle\', 0);"},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[57,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":25,"nm":"Drop Shadow","np":8,"mn":"ADBE Drop Shadow","ix":1,"en":1,"ef":[{"ty":2,"nm":"Shadow Color","mn":"ADBE Drop Shadow-0001","ix":1,"v":{"a":0,"k":[0.258823990822,0.305882006884,0.329412013292,0.20000000298],"ix":1}},{"ty":0,"nm":"Opacity","mn":"ADBE Drop Shadow-0002","ix":2,"v":{"a":0,"k":51,"ix":2}},{"ty":0,"nm":"Direction","mn":"ADBE Drop Shadow-0003","ix":3,"v":{"a":0,"k":180,"ix":3}},{"ty":0,"nm":"Distance","mn":"ADBE Drop Shadow-0004","ix":4,"v":{"a":0,"k":1.28,"ix":4}},{"ty":0,"nm":"Softness","mn":"ADBE Drop Shadow-0005","ix":5,"v":{"a":0,"k":2.56,"ix":5}},{"ty":7,"nm":"Shadow Only","mn":"ADBE Drop Shadow-0006","ix":6,"v":{"a":0,"k":0,"ix":6}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[10,10],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.482353001833,0.756862998009,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"circle","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":3,"nm":"\u25bd ic-battery","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[23.04,32.96,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"middle","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[23.04,30.611,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[43.2,69.94],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.482353001833,0.756862998009,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"middle","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"black","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[23.04,32.915,0],"ix":2},"a":{"a":0,"k":[23.04,32.915,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-1.63],[0,0],[-1.64,0],[0,0],[-0.74,-3.25],[0,0],[-1.38,0],[0,0],[-0.56,0.79],[0,0],[0,0.62],[0,0],[1.64,0]],"o":[[-1.64,0],[0,0],[0,1.63],[0,0],[3.33,0],[0,0],[0.3,1.35],[0,0],[0.97,0],[0,0],[0.35,-0.5],[0,0],[0,-1.63],[0,0]],"v":[[2.97,0],[0,2.96],[0,91],[2.97,93.96],[40.53,93.96],[47.49,99.51],[47.73,100.55],[50.62,102.86],[66.59,102.86],[69.02,101.6],[71.46,98.15],[72,96.44],[72,2.96],[69.03,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.482353001833,0.756862998009,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"gray","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[23.699,32.256,0],"ix":2},"a":{"a":0,"k":[22.381,32.256,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.01,-1.6],[0,0],[-1.59,0],[0,0],[-0.68,0.92],[0,0],[0,0.78],[0,0],[1.6,0]],"o":[[-1.59,0.01],[0,0],[0.01,1.59],[0,0],[1.14,0],[0,0],[0.46,-0.63],[0,0],[0,-1.6],[0,0]],"v":[[2.87,0],[0,2.92],[0,97.92],[2.87,100.8],[63.09,100.8],[65.99,99.34],[69.23,94.99],[69.94,92.82],[69.94,2.9],[67.05,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.482353001833,0.756862998009,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"inner circle","sr":1,"ks":{"o":{"a":0,"k":50,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[180,180],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"circle","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"outer circle","sr":1,"ks":{"o":{"a":0,"k":50,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[220,220],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"circle","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0}],"markers":[]}',
        ),
        M = a.t(Z, 2),
        W = a(22247),
        z = a(31228),
        H = (function (e) {
          (0, k.default)(a, e);
          var n = (0, u.default)(a);
          function a() {
            var e;
            (0, _.default)(this, a);
            for (var r = arguments.length, t = new Array(r), i = 0; i < r; i++)
              t[i] = arguments[i];
            return (
              ((e = n.call.apply(n, [this].concat(t))).navigate = function (n) {
                (0, e.actions.push)(n);
              }),
              e
            );
          }
          return (
            (0, E.default)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    n = e.translations,
                    a = e.form,
                    r = e.isMobile,
                    t = e.dirty,
                    i = e.error,
                    o = e.loading,
                    s = this.actions,
                    l = s.change,
                    c = s.connectToCloud,
                    x = s.useLocalPortal,
                    d = a.firstname,
                    p = a.lastname,
                    m = a.email,
                    _ = a.confirmemail,
                    E = n.SETUP_UNIT_INSTALLED,
                    k = n.UNITSETT_MAIN_FEATURES,
                    u = n.SETUP_XSTORAGECLOUD_OWNER_INFO,
                    h = n.SETUP_FILL_FORM,
                    f = n.SETUP_USE_LOCAL_BUTTON,
                    A = n.USERPROF_INFO_FIRST_NAME,
                    S = n.USERPROF_INFO_LAST_NAME,
                    D = n.SETUP_FORM_NAME_PLACEHOLDER,
                    R = n.SETUP_FORM_EMAIL,
                    I = n.SETUP_FORM_EMAIL_PLACEHOLDER,
                    y = n.SETUP_FORM_CONFIRM_EMAIL,
                    T = n.SETUP_FORM_CONFIRM_EMAIL_PLACEHOLDER,
                    v = n.SETUP_CONNECT_CLOUD_BUTTON,
                    g = n.SETUP_XSTORAGECLOUD_CONTROL_UNIT,
                    b = n.SETUP_XSTORAGECLOUD_ACCESS_MONITORING_DATA,
                    w = n.SETUP_XSTORAGECLOUD_DATA_PERSIST,
                    O = n.SETUP_XSTORAGECLOUD_LOCAL_PORTAL_UNAVAILABLE,
                    N = { loop: !0, autoplay: !0, animationData: M },
                    F = (0, z.jsx)(ae, {
                      mobile: r,
                      children: (0, z.jsx)(G.default, {
                        options: N,
                        isClickToPauseDisabled: !0,
                        height: r ? 270 : "80vh",
                        width: r ? "100%" : "80vh",
                      }),
                    }),
                    L = (0, z.jsx)($, {
                      paddingleft: "7%",
                      mobile: r,
                      children: (0, z.jsxs)(K, {
                        mobile: r,
                        children: [
                          (0, z.jsx)(q, { children: E }),
                          (0, z.jsx)(J, { children: k }),
                          (0, z.jsxs)("ul", {
                            children: [
                              (0, z.jsx)(Q, { children: g }),
                              (0, z.jsx)(Q, { children: b }),
                              (0, z.jsx)(Q, { children: w }),
                            ],
                          }),
                          (0, z.jsx)(ee, { children: O }),
                          (0, z.jsx)(J, { children: u }),
                          (0, z.jsx)(ne, { children: h }),
                          (0, z.jsxs)(W.l0, {
                            mobile: r,
                            margin: "0 0 15px 0",
                            containerHeight: !r && "390px",
                            children: [
                              (0, z.jsx)(V.Z, { dirty: t, error: i, full: !1 }),
                              (0, z.jsxs)(W.l0.Row, {
                                children: [
                                  (0, z.jsx)(W.oH, {
                                    id: "FirstName",
                                    label: A,
                                    placeholder: D,
                                    value: d.value,
                                    error: t && !d.valid,
                                    onChange: function (e) {
                                      var n = e.target;
                                      return l({ firstname: n.value });
                                    },
                                  }),
                                  (0, z.jsx)(U.Z, {
                                    id: "FirstName",
                                    showError: t && !d.valid,
                                    errorMessage: d.message,
                                  }),
                                ],
                              }),
                              (0, z.jsxs)(W.l0.Row, {
                                children: [
                                  (0, z.jsx)(W.oH, {
                                    id: "LastName",
                                    label: S,
                                    placeholder: D,
                                    value: p.value,
                                    error: t && !p.valid,
                                    onChange: function (e) {
                                      var n = e.target;
                                      return l({ lastname: n.value });
                                    },
                                    marginhalfinput: "8px 0 0 10%",
                                  }),
                                  (0, z.jsx)(U.Z, {
                                    id: "LastName",
                                    showError: t && !p.valid,
                                    errorMessage: p.message,
                                  }),
                                ],
                              }),
                              (0, z.jsxs)(W.l0.Row, {
                                children: [
                                  (0, z.jsx)(W.oH, {
                                    id: "Email",
                                    label: R,
                                    placeholder: I,
                                    value: m.value,
                                    error: t && !m.valid,
                                    onChange: function (e) {
                                      var n = e.target;
                                      return l({ email: n.value });
                                    },
                                  }),
                                  (0, z.jsx)(U.Z, {
                                    id: "Email",
                                    showError: t && !m.valid,
                                    errorMessage: m.message,
                                  }),
                                ],
                              }),
                              (0, z.jsxs)(W.l0.Row, {
                                children: [
                                  (0, z.jsx)(W.oH, {
                                    id: "ConfirmEmail",
                                    label: y,
                                    placeholder: T,
                                    value: _.value,
                                    error: t && !_.valid,
                                    onChange: function (e) {
                                      var n = e.target;
                                      return l({ confirmemail: n.value });
                                    },
                                  }),
                                  (0, z.jsx)(U.Z, {
                                    id: "ConfirmEmail",
                                    showError: t && !_.valid,
                                    errorMessage: _.message,
                                  }),
                                ],
                              }),
                              (0, z.jsx)(W.SK, { height: "50px" }),
                              !r &&
                                (0, z.jsxs)(re, {
                                  mobile: r,
                                  children: [
                                    (0, z.jsxs)(W.zx, {
                                      id: "PrimaryButton_ConnectCloud",
                                      margin: r ? "0 0 28px 0" : "0 12px",
                                      buttonWidth: r
                                        ? "calc(100vw - 100px)"
                                        : "257px",
                                      onClick: c,
                                      disabled: o,
                                      children: [
                                        (0, z.jsx)(B.Z, { children: "check" }),
                                        v,
                                      ],
                                    }),
                                    (0, z.jsx)(W.zx, {
                                      id: "PrimaryButton_UseLocalPortal",
                                      buttonType: "secondary-default",
                                      margin: r ? "0" : "0 12px",
                                      buttonWidth: r
                                        ? "calc(100vw - 100px)"
                                        : "152px",
                                      onClick: x,
                                      disabled: o,
                                      children: f,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          r &&
                            (0, z.jsxs)(re, {
                              mobile: r,
                              children: [
                                (0, z.jsxs)(W.zx, {
                                  id: "Button_ConnectCloud",
                                  margin: "20px 16px 16px 16px",
                                  buttonWidth: "calc(100vw - 100px)",
                                  onClick: c,
                                  disabled: o,
                                  children: [
                                    (0, z.jsx)(B.Z, { children: "check" }),
                                    v,
                                  ],
                                }),
                                (0, z.jsx)(W.zx, {
                                  id: "Button_UseLocalPortal",
                                  buttonType: "secondary-default",
                                  margin: "0px 16px 20px 16px",
                                  buttonWidth: "calc(100vw - 100px)",
                                  onClick: x,
                                  disabled: o,
                                  children: f,
                                }),
                              ],
                            }),
                        ],
                      }),
                    });
                  return (0, z.jsxs)(z.Fragment, {
                    children: [
                      r && (0, z.jsxs)(z.Fragment, { children: [F, L] }),
                      !r &&
                        (0, z.jsx)("div", {
                          children: (0, z.jsxs)(j.Z, {
                            container: !0,
                            children: [
                              (0, z.jsx)(j.Z, { item: !0, xs: 7, children: F }),
                              (0, z.jsxs)(j.Z, {
                                style: {
                                  backgroundColor: "#f7f7f9",
                                  height: "100vh",
                                },
                                item: !0,
                                xs: 5,
                                children: [(0, z.jsx)(Y, {}), L],
                              }),
                            ],
                          }),
                        }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(h.Component),
        X = C(H),
        K = P.ZP.div(
          r ||
            (r = (0, m.default)([
              "\n  width: 80%;\n\n  ",
              "\n\n  ",
              "\n\n  ul {\n    padding: 0 20px;\n  }\n",
            ])),
          function (e) {
            return !e.mobile && "\n    margin-left: 75px;\n  ";
          },
          function (e) {
            return (
              e.mobile && "\n    width: 100vw;\n    padding: 0px 20px;\n  "
            );
          },
        ),
        $ = P.ZP.div(
          t || (t = (0, m.default)(["\n  ", "\n\n  ", "\n"])),
          function (e) {
            return (
              e.mobile &&
              "\n    border-width: 100px 100vw 0 0;\n    border-color: transparent #f7f7f9 transparent transparent;\n    display: inline-block;\n    width: 0px;\n    border-style: solid;\n    position: absolute;\n    margin-top: -170px;\n    min-height: 100%;\n  "
            );
          },
          function (e) {
            return (
              !e.mobile &&
              "\n    width: 46%;\n    position: absolute;\n    right: 0;\n    top: 15%;\n    max-height: 80vh;\n    overflow-y: auto;\n"
            );
          },
        ),
        Y = P.ZP.div(
          i ||
            (i = (0, m.default)([
              "\n  margin-left: -248px;\n  width: 0;\n  height: 0;\n  min-height: 100vh;\n  border-style: solid;\n  border-width: 0 0 100vh 250px;\n  border-color: transparent transparent #f7f7f9 transparent;\n  display: inline-block;\n  position: absolute;\n",
            ])),
        ),
        q = P.ZP.h2(
          o ||
            (o = (0, m.default)([
              "\n  color: #007bc1;\n  font-family: 'Open Sans';\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  line-height: 32px;\n  margin: 0 0 16px 0;\n",
            ])),
        ),
        J = P.ZP.h4(
          s ||
            (s = (0, m.default)([
              "\n  color: #333f48;\n  font-family: 'Open Sans';\n  font-size: 16px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  line-height: 24px;\n  text-transform: uppercase;\n  margin: 0px;\n",
            ])),
        ),
        Q = P.ZP.li(
          l ||
            (l = (0, m.default)([
              "\n  color: #333f48;\n  font-family: 'Open Sans';\n  font-size: 14px;\n  line-height: 20px;\n  margin: 10px 0;\n",
            ])),
        ),
        ee = P.ZP.p(
          c ||
            (c = (0, m.default)([
              "\n  height: 40px;\n  color: #ca3c3d;\n  font-family: 'Open Sans';\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  margin: 20px 0 32px 0;\n",
            ])),
        ),
        ne = P.ZP.p(
          x ||
            (x = (0, m.default)([
              "\n  color: #333f48;\n  font-family: Helvetica;\n  font-size: 14px;\n  line-height: 20px;\n",
            ])),
        ),
        ae = P.ZP.div(
          d ||
            (d = (0, m.default)([
              "\n  position: relative;\n\n  > * {\n    outline: none;\n  }\n\n  &:after {\n    content: '';\n    position: absolute;\n    z-index: 10;\n  }\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (e) {
            return (
              !e.mobile &&
              "\n    > * {\n      position: fixed;\n      left: calc(50% - 48vh);\n      top: 12%;\n    }\n  "
            );
          },
          function (e) {
            return (
              e.mobile &&
              "\n    height: 226px;\n\n    > * {\n      position: absolute;\n      bottom: 0;\n      display: flex;\n      align-items: center;\n    }\n  "
            );
          },
        ),
        re = P.ZP.div(
          p || (p = (0, m.default)(["\n  display: flex;\n\n  ", "\n"])),
          function (e) {
            return (
              e.mobile &&
              "\n    background-color: #F9FBFD;\n    box-shadow: inset 0 1px 0 0 rgba(0,0,0,0.05);\n    display: block;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    text-align: center;\n    max-width: 100vw;\n  "
            );
          },
        );
    },
  },
]);
//# sourceMappingURL=8801.6da29887.chunk.js.map
