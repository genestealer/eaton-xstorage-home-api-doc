"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [8603],
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
    68603: function (e, n, a) {
      (a.r(n),
        a.d(n, {
          WelcomeEmailValidation: function () {
            return z;
          },
          default: function () {
            return H;
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
        p = a(56824),
        m = a(30225),
        E = a(94404),
        _ = a(14482),
        h = a(5189),
        k = a(76431),
        u = a(87121),
        f = a(2845),
        S = a(84628),
        A = a(49318),
        D = a(83749),
        R = a(49745),
        g = a(13795),
        I = a(98278),
        y = a.n(I),
        T = a(42477),
        w = a(2729),
        N = "".concat(g.CT, "/cloudapi/onboard"),
        v = "".concat(g.CT, "/config/state"),
        O = {
          firstname: { value: "" },
          lastname: { value: "" },
          email: { value: "" },
          confirmemail: { value: "" },
        },
        b = {
          firstname: [T.q9],
          lastname: [T.q9],
          email: [T.q9, T.GT],
          confirmemail: [T.q9, T.GT],
        },
        F = (0, S.Jg)({
          path: function () {
            return ["scenes", "WelcomeEmailValidation"];
          },
          connect: {
            props: [
              A.Z,
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
              A.Z,
              ["fetchCurrentDeviceInfo", "setOwnerInfo", "push", "replace"],
            ],
          },
          actions: function () {
            return {
              change: function (e) {
                return { field: e };
              },
              resendEmail: function () {
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
              toggleChangeOwnerModal: function () {
                return !0;
              },
              changeOwnership: function () {
                return !0;
              },
              useLocalPortal: function () {
                return !0;
              },
            };
          },
          reducers: function (e) {
            var n,
              a,
              r,
              t,
              i,
              o = e.actions;
            return {
              form: [
                O,
                y().object,
                ((n = {}),
                (0, f.Z)(n, o.change, function (e, n) {
                  return T.jR(e, n, b);
                }),
                (0, f.Z)(n, o.setForm, function (e, n) {
                  return T.Yg(n.form, b).form;
                }),
                (0, f.Z)(n, o.reset, function () {
                  return O;
                }),
                n),
              ],
              dirty: [
                !1,
                y().bool,
                ((a = {}),
                (0, f.Z)(a, o.change, function () {
                  return !0;
                }),
                (0, f.Z)(a, o.setError, function () {
                  return !0;
                }),
                (0, f.Z)(a, o.reset, function () {
                  return !1;
                }),
                a),
              ],
              error: [
                null,
                y().string,
                ((r = {}),
                (0, f.Z)(r, o.setError, function (e, n) {
                  return n;
                }),
                (0, f.Z)(r, o.reset, function () {
                  return null;
                }),
                (0, f.Z)(r, o.change, function () {
                  return null;
                }),
                r),
              ],
              loading: [
                !1,
                y().bool,
                ((t = {}),
                (0, f.Z)(t, o.resendEmail, function () {
                  return !0;
                }),
                (0, f.Z)(t, o.changeOwnership, function () {
                  return !0;
                }),
                (0, f.Z)(t, o.setError, function () {
                  return !1;
                }),
                (0, f.Z)(t, o.reset, function () {
                  return !1;
                }),
                t),
              ],
              changeOwnermodal: [
                !1,
                y().bool,
                ((i = {}),
                (0, f.Z)(i, o.toggleChangeOwnerModal, function (e, n) {
                  return !e;
                }),
                (0, f.Z)(i, o.reset, function () {
                  return !1;
                }),
                i),
              ],
            };
          },
          takeLatest: function (e) {
            var n,
              a = e.actions,
              r = e.workers;
            return (
              (n = {}),
              (0, f.Z)(n, a.resendEmail, r.resendEmail),
              (0, f.Z)(n, a.changeOwnership, r.changeOwnership),
              (0, f.Z)(n, a.useLocalPortal, r.useLocalPortal),
              n
            );
          },
          workers: {
            resendEmail: (0, u.Z)().mark(function e() {
              var n, a, r, t, i, o, s, l, c, x;
              return (0, u.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return ((e.next = 2), this.get("configs"));
                      case 2:
                        return (
                          (n = e.sent),
                          (a = this.actionCreators.replace),
                          (e.next = 6),
                          this.get("user")
                        );
                      case 6:
                        return (
                          (r = e.sent),
                          (e.next = 9),
                          this.get("language")
                        );
                      case 9:
                        return (
                          (t = e.sent),
                          (e.prev = 10),
                          (i = {
                            techEmail: r.email,
                            ownerEmail: "o@email.com",
                            ownerName: "Something",
                            locale: t,
                          }),
                          (e.next = 14),
                          (0, D.RE)(R.Z.post, N, i)
                        );
                      case 14:
                        if (
                          ((o = e.sent),
                          (s = o.data.result),
                          (l = s.connected),
                          (c = s.setupComplete),
                          (x = s.onboardState),
                          c || n.userType !== g.Df)
                        ) {
                          e.next = 21;
                          break;
                        }
                        return ((e.next = 19), (0, D.gz)(a("/welcome")));
                      case 19:
                        e.next = 49;
                        break;
                      case 21:
                        if (c || n.userType !== g.cC) {
                          e.next = 26;
                          break;
                        }
                        return ((e.next = 24), (0, D.gz)(a("/setup/")));
                      case 24:
                        e.next = 49;
                        break;
                      case 26:
                        if (l) {
                          e.next = 31;
                          break;
                        }
                        return ((e.next = 29), (0, D.gz)(a("/")));
                      case 29:
                        e.next = 49;
                        break;
                      case 31:
                        if ("not_onboarded" !== x) {
                          e.next = 36;
                          break;
                        }
                        return (
                          (e.next = 34),
                          (0, D.gz)(a("/setup/welcomeafterinstallation"))
                        );
                      case 34:
                        e.next = 49;
                        break;
                      case 36:
                        if ("onboarded" !== x) {
                          e.next = 41;
                          break;
                        }
                        return (
                          (e.next = 39),
                          (0, D.gz)(a("/setup/unit-connected"))
                        );
                      case 39:
                        e.next = 49;
                        break;
                      case 41:
                        if ("onboarding" !== x) {
                          e.next = 46;
                          break;
                        }
                        return (
                          (e.next = 44),
                          (0, D.gz)(a("/setup/email-validation"))
                        );
                      case 44:
                        e.next = 49;
                        break;
                      case 46:
                        if ("unknown" !== x) {
                          e.next = 49;
                          break;
                        }
                        return (
                          (e.next = 49),
                          (0, D.gz)(a("/setup/welcomeafterinstallation"))
                        );
                      case 49:
                        e.next = 54;
                        break;
                      case 51:
                        ((e.prev = 51),
                          (e.t0 = e.catch(10)),
                          console.log(e.t0));
                      case 54:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[10, 51]],
              );
            }),
            changeOwnership: (0, u.Z)().mark(function e() {
              var n, a, r, t, i, o, s, l, c, x, d, p, m, E, _, h, k;
              return (0, u.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (a = n.setError),
                          (r = n.setForm),
                          (t = n.toggleChangeOwnerModal),
                          (i = n.setOwnerInfo),
                          (e.next = 3),
                          this.get("form")
                        );
                      case 3:
                        return ((o = e.sent), (e.next = 6), this.get("dirty"));
                      case 6:
                        return (
                          (s = e.sent),
                          (e.next = 9),
                          this.get("language")
                        );
                      case 9:
                        return ((l = e.sent), (e.next = 12), this.get("user"));
                      case 12:
                        return (
                          (c = e.sent),
                          (e.next = 15),
                          this.get("translations")
                        );
                      case 15:
                        if (
                          ((x = e.sent), (d = T.Yg(o, b)), !s || !d.invalid)
                        ) {
                          e.next = 21;
                          break;
                        }
                        return (
                          (e.next = 20),
                          (0, D.gz)(a(x.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 20:
                      case 26:
                        return e.abrupt("return", !1);
                      case 21:
                        if (s || !d.invalid) {
                          e.next = 27;
                          break;
                        }
                        return ((e.next = 24), (0, D.gz)(r(d.form)));
                      case 24:
                        return (
                          (e.next = 26),
                          (0, D.gz)(a(x.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 27:
                        return (
                          (e.prev = 27),
                          (p = {
                            techEmail: c.email,
                            ownerEmail: o.email.value,
                            ownerName:
                              o.firstname.value + " " + o.lastname.value,
                            locale: l,
                          }),
                          (e.next = 31),
                          (0, D.RE)(R.Z.post, N, p)
                        );
                      case 31:
                        if (
                          ((m = e.sent),
                          !(E = m.data.result.onboard) || !E.onboardedBy)
                        ) {
                          e.next = 36;
                          break;
                        }
                        return ((e.next = 36), (0, D.gz)(i(E.onboardedBy)));
                      case 36:
                        return ((e.next = 38), (0, D.gz)(t()));
                      case 38:
                      case 47:
                        e.next = 51;
                        break;
                      case 40:
                        if (
                          ((e.prev = 40),
                          (e.t0 = e.catch(27)),
                          (_ = e.t0.response || {}),
                          !(h = _.data))
                        ) {
                          e.next = 49;
                          break;
                        }
                        return (
                          (k = (0, w.Kw)(h.error.errCode)),
                          (e.next = 47),
                          (0, D.gz)(a(x[k]))
                        );
                      case 49:
                        return ((e.next = 51), (0, D.gz)(a("")));
                      case 51:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[27, 40]],
              );
            }),
            useLocalPortal: (0, u.Z)().mark(function e() {
              var n, a, r, t;
              return (0, u.Z)().wrap(
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
                          (0, D.RE)(R.Z.patch, v, t)
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
        B = a(30588),
        L = a(48229),
        C = a(51869),
        P = a(32763),
        G = a(77835),
        j = a(72768),
        V = a(89020),
        Z = JSON.parse(
          '{"v":"5.1.16","fr":25,"ip":0,"op":75,"w":240,"h":240,"nm":"Dashboard - No Units","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"circle 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[360]},{"t":75}],"ix":10,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'cycle\', 0);"},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[61,-35,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":25,"nm":"Drop Shadow","np":8,"mn":"ADBE Drop Shadow","ix":1,"en":1,"ef":[{"ty":2,"nm":"Shadow Color","mn":"ADBE Drop Shadow-0001","ix":1,"v":{"a":0,"k":[0.258823990822,0.305882006884,0.329412013292,0.20000000298],"ix":1}},{"ty":0,"nm":"Opacity","mn":"ADBE Drop Shadow-0002","ix":2,"v":{"a":0,"k":51,"ix":2}},{"ty":0,"nm":"Direction","mn":"ADBE Drop Shadow-0003","ix":3,"v":{"a":0,"k":180,"ix":3}},{"ty":0,"nm":"Distance","mn":"ADBE Drop Shadow-0004","ix":4,"v":{"a":0,"k":1.28,"ix":4}},{"ty":0,"nm":"Softness","mn":"ADBE Drop Shadow-0005","ix":5,"v":{"a":0,"k":2.56,"ix":5}},{"ty":7,"nm":"Shadow Only","mn":"ADBE Drop Shadow-0006","ix":6,"v":{"a":0,"k":0,"ix":6}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[10,10],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.482353001833,0.756862998009,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"circle","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"circle 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[360]},{"t":75}],"ix":10,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'cycle\', 0);"},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[-50,50,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":25,"nm":"Drop Shadow","np":8,"mn":"ADBE Drop Shadow","ix":1,"en":1,"ef":[{"ty":2,"nm":"Shadow Color","mn":"ADBE Drop Shadow-0001","ix":1,"v":{"a":0,"k":[0.258823990822,0.305882006884,0.329412013292,0.20000000298],"ix":1}},{"ty":0,"nm":"Opacity","mn":"ADBE Drop Shadow-0002","ix":2,"v":{"a":0,"k":51,"ix":2}},{"ty":0,"nm":"Direction","mn":"ADBE Drop Shadow-0003","ix":3,"v":{"a":0,"k":180,"ix":3}},{"ty":0,"nm":"Distance","mn":"ADBE Drop Shadow-0004","ix":4,"v":{"a":0,"k":1.28,"ix":4}},{"ty":0,"nm":"Softness","mn":"ADBE Drop Shadow-0005","ix":5,"v":{"a":0,"k":2.56,"ix":5}},{"ty":7,"nm":"Shadow Only","mn":"ADBE Drop Shadow-0006","ix":6,"v":{"a":0,"k":0,"ix":6}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[10,10],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.482353001833,0.756862998009,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"circle","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"circle 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[360]},{"t":75}],"ix":10,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'cycle\', 0);"},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[-30,-49,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":25,"nm":"Drop Shadow","np":8,"mn":"ADBE Drop Shadow","ix":1,"en":1,"ef":[{"ty":2,"nm":"Shadow Color","mn":"ADBE Drop Shadow-0001","ix":1,"v":{"a":0,"k":[0.258823990822,0.305882006884,0.329412013292,0.20000000298],"ix":1}},{"ty":0,"nm":"Opacity","mn":"ADBE Drop Shadow-0002","ix":2,"v":{"a":0,"k":51,"ix":2}},{"ty":0,"nm":"Direction","mn":"ADBE Drop Shadow-0003","ix":3,"v":{"a":0,"k":180,"ix":3}},{"ty":0,"nm":"Distance","mn":"ADBE Drop Shadow-0004","ix":4,"v":{"a":0,"k":1.28,"ix":4}},{"ty":0,"nm":"Softness","mn":"ADBE Drop Shadow-0005","ix":5,"v":{"a":0,"k":2.56,"ix":5}},{"ty":7,"nm":"Shadow Only","mn":"ADBE Drop Shadow-0006","ix":6,"v":{"a":0,"k":0,"ix":6}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[10,10],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.482353001833,0.756862998009,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"circle","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"circle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[360]},{"t":75}],"ix":10,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'cycle\', 0);"},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[57,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":25,"nm":"Drop Shadow","np":8,"mn":"ADBE Drop Shadow","ix":1,"en":1,"ef":[{"ty":2,"nm":"Shadow Color","mn":"ADBE Drop Shadow-0001","ix":1,"v":{"a":0,"k":[0.258823990822,0.305882006884,0.329412013292,0.20000000298],"ix":1}},{"ty":0,"nm":"Opacity","mn":"ADBE Drop Shadow-0002","ix":2,"v":{"a":0,"k":51,"ix":2}},{"ty":0,"nm":"Direction","mn":"ADBE Drop Shadow-0003","ix":3,"v":{"a":0,"k":180,"ix":3}},{"ty":0,"nm":"Distance","mn":"ADBE Drop Shadow-0004","ix":4,"v":{"a":0,"k":1.28,"ix":4}},{"ty":0,"nm":"Softness","mn":"ADBE Drop Shadow-0005","ix":5,"v":{"a":0,"k":2.56,"ix":5}},{"ty":7,"nm":"Shadow Only","mn":"ADBE Drop Shadow-0006","ix":6,"v":{"a":0,"k":0,"ix":6}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[10,10],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.482353001833,0.756862998009,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"circle","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":3,"nm":"\u25bd ic-battery","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[23.04,32.96,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"middle","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[23.04,30.611,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[43.2,69.94],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.482353001833,0.756862998009,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"middle","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"black","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[23.04,32.915,0],"ix":2},"a":{"a":0,"k":[23.04,32.915,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-1.63],[0,0],[-1.64,0],[0,0],[-0.74,-3.25],[0,0],[-1.38,0],[0,0],[-0.56,0.79],[0,0],[0,0.62],[0,0],[1.64,0]],"o":[[-1.64,0],[0,0],[0,1.63],[0,0],[3.33,0],[0,0],[0.3,1.35],[0,0],[0.97,0],[0,0],[0.35,-0.5],[0,0],[0,-1.63],[0,0]],"v":[[2.97,0],[0,2.96],[0,91],[2.97,93.96],[40.53,93.96],[47.49,99.51],[47.73,100.55],[50.62,102.86],[66.59,102.86],[69.02,101.6],[71.46,98.15],[72,96.44],[72,2.96],[69.03,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.482353001833,0.756862998009,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"gray","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[23.699,32.256,0],"ix":2},"a":{"a":0,"k":[22.381,32.256,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.01,-1.6],[0,0],[-1.59,0],[0,0],[-0.68,0.92],[0,0],[0,0.78],[0,0],[1.6,0]],"o":[[-1.59,0.01],[0,0],[0.01,1.59],[0,0],[1.14,0],[0,0],[0.46,-0.63],[0,0],[0,-1.6],[0,0]],"v":[[2.87,0],[0,2.92],[0,97.92],[2.87,100.8],[63.09,100.8],[65.99,99.34],[69.23,94.99],[69.94,92.82],[69.94,2.9],[67.05,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.482353001833,0.756862998009,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"inner circle","sr":1,"ks":{"o":{"a":0,"k":50,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[180,180],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"circle","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"outer circle","sr":1,"ks":{"o":{"a":0,"k":50,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[220,220],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"circle","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0}],"markers":[]}',
        ),
        M = a.t(Z, 2),
        W = a(22247),
        U = a(31228),
        z = (function (e) {
          (0, _.default)(a, e);
          var n = (0, h.default)(a);
          function a() {
            var e;
            (0, m.default)(this, a);
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
                  var e = this,
                    n = this.props,
                    a = n.translations,
                    r = n.isMobile,
                    t = n.changeOwnermodal,
                    i = n.ownerInfo,
                    o = n.dirty,
                    s = n.form,
                    l = n.loading,
                    c = n.error,
                    x = this.actions,
                    d = x.toggleChangeOwnerModal,
                    p = x.changeOwnership,
                    m = x.change,
                    E = x.useLocalPortal,
                    _ = a || {},
                    h = _.SETUP_XSTORAGECLOUD_OWNER_INFO,
                    k = _.UNITSETT_CONNECT_CLOUD_RESEND_EMAIL,
                    u = _.UNITSETT_CONNECT_CLOUD_CHANGE_OWNER,
                    f = _.SETUP_CHECK_EMAIL,
                    S = _.SETUP_ONE_STEP_USE_CLOUD,
                    A = _.SETUP_USE_LOCAL_BUTTON,
                    D = _.SETUP_FORM_NEW_OWNER_EMAIL,
                    R = _.SETUP_FORM_CONFIRM_NEW_OWNER_EMAIL,
                    g = _.SETUP_FORM_NEW_OWNER,
                    I = _.UNITSETT_MODEL_POWEROFF_CANCEL,
                    y = _.UNITSETT_CHANGEOWNER_TITLE,
                    T = _.UNITSETT_CHANGEOWNER_CONFIRM,
                    w = _.SETUP_FORM_LASTNAME,
                    N = _.SETUP_FORM_FIRSTNAME,
                    v = { loop: !0, autoplay: !0, animationData: M },
                    O = s || {},
                    b = O.firstname,
                    F = O.lastname,
                    B = O.email,
                    Z = O.confirmemail,
                    z = (0, U.jsx)(ee, {
                      mobile: r,
                      children: (0, U.jsx)(C.default, {
                        options: v,
                        isClickToPauseDisabled: !0,
                        height: r ? 350 : "80vh",
                        width: r ? "100%" : "80vh",
                      }),
                    }),
                    H = (0, U.jsx)(X, {
                      mobile: r,
                      children: (0, U.jsxs)(K, {
                        mobile: r,
                        children: [
                          (0, U.jsx)(Y, {
                            paddingBottom: "0.5rem",
                            id: "TitleCloud",
                            children: S,
                          }),
                          (0, U.jsx)(q, { children: f }),
                          (0, U.jsx)(W.SK, { height: "20px" }),
                          i &&
                            (0, U.jsxs)(U.Fragment, {
                              children: [
                                (0, U.jsx)(G.Z, {
                                  variant: "h4",
                                  gutterBottom: !0,
                                  children: h,
                                }),
                                (0, U.jsxs)(J, {
                                  children: [
                                    (0, U.jsx)(Q, {
                                      children: "account_circle",
                                    }),
                                    i.name,
                                  ],
                                }),
                                (0, U.jsxs)(J, {
                                  children: [
                                    (0, U.jsx)(Q, { children: "email" }),
                                    i.email,
                                  ],
                                }),
                                (0, U.jsx)(W.SK, { height: "20px" }),
                              ],
                            }),
                          (0, U.jsxs)(ne, {
                            mobile: r,
                            children: [
                              (0, U.jsxs)(W.zx, {
                                id: "Button_ResendEmail",
                                buttonWidth: "156px",
                                margin: r ? "5px 0" : "0px",
                                onClick: function () {
                                  return e.navigate(
                                    "/setup/welcomeafterinstallation",
                                  );
                                },
                                children: [
                                  (0, U.jsx)(L.Z, { children: "languages" }),
                                  k,
                                ],
                              }),
                              (0, U.jsxs)(W.zx, {
                                id: "Button_OpenModal",
                                buttonType: "secondary-default",
                                buttonWidth: "169px",
                                margin: r ? "5px 0" : "0 12px",
                                onClick: d,
                                children: [
                                  (0, U.jsx)(L.Z, { children: "edit" }),
                                  u,
                                ],
                              }),
                              (0, U.jsx)(W.zx, {
                                id: "Button_UseLocalPortal",
                                buttonType: "primary-cancel",
                                buttonWidth: "152px",
                                margin: r ? "5px 0" : "0px",
                                onClick: E,
                                children: A,
                              }),
                            ],
                          }),
                        ],
                      }),
                    });
                  return (0, U.jsxs)(U.Fragment, {
                    children: [
                      r && (0, U.jsxs)(U.Fragment, { children: [z, H] }),
                      !r &&
                        (0, U.jsx)("div", {
                          children: (0, U.jsxs)(P.Z, {
                            container: !0,
                            children: [
                              (0, U.jsx)(P.Z, { item: !0, xs: 7, children: z }),
                              (0, U.jsxs)(P.Z, {
                                style: {
                                  backgroundColor: "#f7f7f9",
                                  height: "100vh",
                                },
                                item: !0,
                                xs: 5,
                                children: [(0, U.jsx)($, {}), H],
                              }),
                            ],
                          }),
                        }),
                      (0, U.jsx)(W.u_, {
                        open: t,
                        size: "medium",
                        children: (0, U.jsxs)("div", {
                          children: [
                            (0, U.jsx)(W.xB, { red: !0, title: y }),
                            (0, U.jsxs)(W.hz, {
                              padding: !0,
                              size: "medium",
                              children: [
                                (0, U.jsx)(W.ZT, {
                                  variant: "body1",
                                  dangerouslySetInnerHTML: { __html: T },
                                }),
                                (0, U.jsx)(W.SK, { height: "40px" }),
                                (0, U.jsx)(G.Z, {
                                  variant: "h4",
                                  gutterBottom: !0,
                                  children: g,
                                }),
                                (0, U.jsx)(W.SK, { height: "20px" }),
                                (0, U.jsx)(V.Z, {
                                  dirty: o,
                                  error: c,
                                  full: !0,
                                }),
                                (0, U.jsxs)(W.l0.Row, {
                                  children: [
                                    (0, U.jsx)(W.oH, {
                                      id: "FirstName",
                                      label: N,
                                      value: b.value,
                                      error: o && !b.valid,
                                      onChange: function (e) {
                                        var n = e.target;
                                        return m({ firstname: n.value });
                                      },
                                    }),
                                    (0, U.jsx)(j.Z, {
                                      id: "FirstName",
                                      showError: o && !b.valid,
                                      errorMessage: b.message,
                                    }),
                                  ],
                                }),
                                (0, U.jsxs)(W.l0.Row, {
                                  children: [
                                    (0, U.jsx)(W.oH, {
                                      id: "LastName",
                                      label: w,
                                      value: F.value,
                                      error: o && !F.valid,
                                      onChange: function (e) {
                                        var n = e.target;
                                        return m({ lastname: n.value });
                                      },
                                    }),
                                    (0, U.jsx)(j.Z, {
                                      id: "LastName",
                                      showError: o && !F.valid,
                                      errorMessage: F.message,
                                    }),
                                  ],
                                }),
                                (0, U.jsxs)(W.l0.Row, {
                                  children: [
                                    (0, U.jsx)(W.oH, {
                                      id: "Email",
                                      label: D,
                                      value: B.value,
                                      error: o && !B.valid,
                                      onChange: function (e) {
                                        var n = e.target;
                                        return m({ email: n.value });
                                      },
                                    }),
                                    (0, U.jsx)(j.Z, {
                                      id: "Email",
                                      showError: o && !B.valid,
                                      errorMessage: B.message,
                                    }),
                                  ],
                                }),
                                (0, U.jsxs)(W.l0.Row, {
                                  children: [
                                    (0, U.jsx)(W.oH, {
                                      id: "ConfirmEmail",
                                      label: R,
                                      value: Z.value,
                                      error: o && !Z.valid,
                                      onChange: function (e) {
                                        var n = e.target;
                                        return m({ confirmemail: n.value });
                                      },
                                    }),
                                    (0, U.jsx)(j.Z, {
                                      id: "ConfirmEmail",
                                      showError: o && !Z.valid,
                                      errorMessage: Z.message,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, U.jsxs)(W.Zf, {
                              children: [
                                (0, U.jsx)(W.zx, {
                                  id: "PrimaryButton_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: d,
                                  disabled: l,
                                  children: I,
                                }),
                                (0, U.jsx)(W.zx, {
                                  id: "PrimaryButton_ChangeOwnership",
                                  buttonType: "primary-danger",
                                  margin: "0 12px",
                                  buttonWidth: "210px",
                                  onClick: p,
                                  disabled: l,
                                  children: y,
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
            a
          );
        })(k.Component),
        H = F(z),
        K = B.ZP.div(
          r || (r = (0, p.default)(["\n  width: 80%;\n\n  ", "\n\n  ", "\n"])),
          function (e) {
            return !e.mobile && "\n    margin-left: 75px;\n  ";
          },
          function (e) {
            return (
              e.mobile && "\n    width: 100vw;\n    padding: 0px 20px;\n  "
            );
          },
        ),
        X = B.ZP.div(
          t || (t = (0, p.default)(["\n  ", "\n\n  ", "\n"])),
          function (e) {
            return (
              e.mobile &&
              "\n    border-width: 140px 100vw 0 0;\n    border-color: transparent #f7f7f9 transparent transparent;\n    display: inline-block;\n    width: 0px;\n    border-style: solid;\n    position: absolute;\n    margin-top: -194px;\n    min-height: 100%;\n  "
            );
          },
          function (e) {
            return (
              !e.mobile &&
              "\n    width: 50%;\n    position: absolute;\n    right: 0;\n    top: 34%;\n"
            );
          },
        ),
        $ = B.ZP.div(
          i ||
            (i = (0, p.default)([
              "\n  margin-left: -248px;\n  width: 0;\n  height: 0;\n  min-height: 100vh;\n  border-style: solid;\n  border-width: 0 0 100vh 250px;\n  border-color: transparent transparent #f7f7f9 transparent;\n  display: inline-block;\n  position: absolute;\n",
            ])),
        ),
        Y = B.ZP.h2(
          o ||
            (o = (0, p.default)([
              '\n  color: #007bc1;\n  font-family: "Open Sans";\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 32px;\n  width: 100%;\n  padding-bottom: ',
              ";\n",
            ])),
          function (e) {
            return e.paddingBottom;
          },
        ),
        q = B.ZP.p(
          s ||
            (s = (0, p.default)([
              '\n  color: #727e84;\n  font-family: "Open Sans";\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 24px;\n',
            ])),
        ),
        J = B.ZP.p(
          l ||
            (l = (0, p.default)([
              '\n  color: rgba(66, 78, 84, 0.6);\n  font-family: "Open Sans";\n  font-size: 14px;\n  line-height: 20px;\n  display: flex;\n  align-items: center;\n',
            ])),
        ),
        Q = (0, B.ZP)(L.Z)(
          c ||
            (c = (0, p.default)([
              "\n  color: #007bc1;\n  vertical-align: middle;\n  font-size: 18px;\n  margin-right: 5px;\n",
            ])),
        ),
        ee = B.ZP.div(
          x ||
            (x = (0, p.default)([
              '\n  position: relative;\n\n  > * {\n    outline: none;\n  }\n\n  &:after {\n    content: "";\n    position: absolute;\n    z-index: 10;\n  }\n\n  ',
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
              "\n    height: 300px;\n\n    > * {\n      position: absolute;\n      bottom: 0;\n      display: flex;\n      align-items: center;\n    }\n  "
            );
          },
        ),
        ne = B.ZP.div(d || (d = (0, p.default)(["\n  ", "\n"])), function (e) {
          return !e.mobile && "\n    display: flex;\n  ";
        });
    },
  },
]);
//# sourceMappingURL=8603.9614cba0.chunk.js.map
