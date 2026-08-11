"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [9950],
  {
    2729: function (e, n, r) {
      r.d(n, {
        Kw: function () {
          return a;
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
        a = function (e) {
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
    36082: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return N;
        },
      });
      var t,
        a,
        o,
        i = r(56824),
        s = r(30225),
        c = r(94404),
        u = r(14482),
        l = r(5189),
        d = r(76431),
        _ = r(87121),
        E = r(2845),
        f = r(84628),
        x = r(83749),
        h = r(98278),
        g = r.n(h),
        m = r(49318),
        p = (0, f.Jg)({
          path: function () {
            return ["scenes", "containers", "PageAdaptable"];
          },
          connect: {
            props: [m.Z, ["isMobile", "translations"]],
            actions: [m.Z, ["push"]],
          },
          actions: function () {
            return {
              showConfirmationModal: function (e) {
                return { location: e };
              },
              hideConfirmationModal: function () {
                return !0;
              },
              handleConfirmNavigationClick: function () {
                return !0;
              },
            };
          },
          reducers: function (e) {
            var n,
              r = e.actions;
            return {
              confirmationModal: [
                !1,
                g().bool,
                ((n = {}),
                (0, E.Z)(n, r.showConfirmationModal, function () {
                  return !0;
                }),
                (0, E.Z)(n, r.hideConfirmationModal, function () {
                  return !1;
                }),
                n),
              ],
              nextLocation: [
                {},
                g().object,
                (0, E.Z)({}, r.showConfirmationModal, function (e, n) {
                  return n.location;
                }),
              ],
            };
          },
          stop: (0, _.Z)().mark(function e() {
            var n;
            return (0, _.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators.hideConfirmationModal),
                        (e.next = 3),
                        (0, x.gz)(n())
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
            var n = e.actions,
              r = e.workers;
            return (0, E.Z)(
              {},
              n.handleConfirmNavigationClick,
              r.handleConfirmNavigationClick,
            );
          },
          workers: {
            handleConfirmNavigationClick: (0, _.Z)().mark(function e() {
              var n, r, t, a;
              return (0, _.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (r = n.hideConfirmationModal),
                          (t = n.push),
                          (e.next = 3),
                          this.get("nextLocation")
                        );
                      case 3:
                        return ((a = e.sent), (e.next = 6), (0, x.gz)(r()));
                      case 6:
                        return ((e.next = 8), (0, x.gz)(t(a)));
                      case 8:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
          },
        }),
        b = r(30588),
        C = r(22247),
        R = r(31228),
        O = (function (e) {
          (0, u.default)(r, e);
          var n = (0, l.default)(r);
          function r() {
            var e;
            (0, s.default)(this, r);
            for (var t = arguments.length, a = new Array(t), o = 0; o < t; o++)
              a[o] = arguments[o];
            return (
              ((e = n.call.apply(n, [this].concat(a))).first = !0),
              (e.handleBlockedNavigation = function (n) {
                var r = e.props,
                  t = r.isForm,
                  a = r.isDirty,
                  o = e.actions.showConfirmationModal;
                return !(t && a && e.first) || ((e.first = !1), o(n), !1);
              }),
              e
            );
          }
          return (
            (0, c.default)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this.first = !0;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    n = this.props,
                    r = n.isMobile,
                    t = n.loading,
                    a = n.children,
                    o = n.menu,
                    i = n.onBack,
                    s = n.title,
                    c = n.translations,
                    u = n.confirmationModal,
                    l = n.isForm,
                    d = n.isDirty,
                    _ = this.actions,
                    E = _.showConfirmationModal,
                    f = _.hideConfirmationModal,
                    x = _.handleConfirmNavigationClick,
                    h = c.GENERAL_CANCEL,
                    g = c.GENERAL_CONTINUE,
                    m = c.BACK_BUTTON_MODAL_TEXT,
                    p = c.BACK_BUTTON_MODAL_TITLE;
                  return (0, R.jsxs)(T, {
                    children: [
                      !!t && (0, R.jsx)(C.gb, {}),
                      r &&
                        (0, R.jsxs)("div", {
                          children: [
                            (0, R.jsx)(C.xE, {
                              id: "PageAdaptable_BackButton",
                              onClick: l && d ? E : i,
                            }),
                            a,
                          ],
                        }),
                      !r &&
                        (0, R.jsxs)("div", {
                          children: [
                            (0, R.jsx)(C.V1, { mobile: r, children: s }),
                            (0, R.jsx)(v, { children: o }),
                            (0, R.jsx)(S, { children: a }),
                          ],
                        }),
                      (0, R.jsx)(C.u_, {
                        size: "small",
                        open: u,
                        children: (0, R.jsxs)("div", {
                          children: [
                            (0, R.jsx)(C.xB, { title: p }),
                            (0, R.jsx)(C.hz, {
                              padding: !0,
                              size: "small",
                              mobile: r,
                              children: (0, R.jsx)(C.ZT, { children: m }),
                            }),
                            (0, R.jsxs)(C.Zf, {
                              children: [
                                (0, R.jsx)(C.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    ((e.first = !0), f());
                                  },
                                  children: h,
                                }),
                                (0, R.jsx)(C.zx, {
                                  id: "Button_Continue",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function (e) {
                                    r ? (f(), i(e)) : x(e);
                                  },
                                  children: g,
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
            r
          );
        })(d.Component),
        N = p(O),
        T = b.ZP.div(
          t ||
            (t = (0, i.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n    padding-right: 0px;\n  }\n",
            ])),
        ),
        v = b.ZP.div(
          a ||
            (a = (0, i.default)([
              "\n  width: 40%;\n  padding-right: 5%;\n  float: left;\n  position: relative;\n  color: #fff;\n  margin-top: 25px;\n",
            ])),
        ),
        S = b.ZP.div(
          o ||
            (o = (0, i.default)([
              "\n  width: 60%;\n  float: left;\n  padding-right: 0;\n",
            ])),
        );
    },
    9950: function (e, n, r) {
      (r.r(n),
        r.d(n, {
          DeviceConnectCloud: function () {
            return me;
          },
          default: function () {
            return pe;
          },
        }));
      var t,
        a,
        o,
        i,
        s,
        c,
        u,
        l,
        d,
        _ = r(30225),
        E = r(94404),
        f = r(14482),
        x = r(5189),
        h = r(76431),
        g = r(87121),
        m = r(2845),
        p = r(84628),
        b = r(98278),
        C = r.n(b),
        R = r(83749),
        O = r(49745),
        N = r(49318),
        T = r(13795),
        v = "".concat(T.CT, "/config/state"),
        S = (0, p.Jg)({
          path: function () {
            return ["scenes", "DeviceConnectCloud"];
          },
          connect: {
            props: [
              N.Z,
              [
                "translations",
                "isMobile",
                "configs",
                "user",
                "noInternetConnection",
                "ownerInfo",
              ],
            ],
            actions: [N.Z, ["setOwnerInfo", "setNoInternetConnection", "push"]],
          },
          actions: function () {
            return {
              checkSetupStatus: function () {
                return !0;
              },
              setLoading: function (e) {
                return { loading: e };
              },
              setOnboardPage: function (e) {
                return { page: e };
              },
            };
          },
          reducers: function (e) {
            var n,
              r = e.actions;
            return {
              showOnboardPage: [
                1,
                C().number,
                (0, m.Z)({}, r.setOnboardPage, function (e, n) {
                  return n.page;
                }),
              ],
              loading: [
                !1,
                C().bool,
                ((n = {}),
                (0, m.Z)(n, r.setLoading, function (e, n) {
                  return n.loading;
                }),
                (0, m.Z)(n, r.checkSetupStatus, function () {
                  return !0;
                }),
                (0, m.Z)(n, r.setOnboardPage, function () {
                  return !1;
                }),
                (0, m.Z)(n, r.setOwnerInfo, function () {
                  return !1;
                }),
                n),
              ],
            };
          },
          start: (0, g.Z)().mark(function e() {
            var n;
            return (0, g.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators.checkSetupStatus),
                        (e.next = 3),
                        (0, R.gz)(n())
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
            var n = e.actions,
              r = e.workers;
            return (0, m.Z)({}, n.checkSetupStatus, r.checkSetupStatus);
          },
          workers: {
            checkSetupStatus: (0, g.Z)().mark(function e() {
              var n, r, t, a, o, i, s, c;
              return (0, g.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (r = n.setOnboardPage),
                          (t = n.setOwnerInfo),
                          (a = n.setNoInternetConnection),
                          (o = n.replace),
                          (e.next = 3),
                          this.get("configs")
                        );
                      case 3:
                        return (
                          (i = e.sent),
                          (e.prev = 4),
                          (e.next = 7),
                          (0, R.RE)(O.Z.get, v)
                        );
                      case 7:
                        if (((s = e.sent), (c = s.data), 200 !== s.status)) {
                          e.next = 12;
                          break;
                        }
                        return ((e.next = 12), (0, R.gz)(a(!1)));
                      case 12:
                        if (c.setupComplete || i.userType !== T.Df) {
                          e.next = 17;
                          break;
                        }
                        return ((e.next = 15), (0, R.gz)(o("/welcome")));
                      case 15:
                        e.next = 40;
                        break;
                      case 17:
                        if (c.setupComplete || i.userType !== T.cC) {
                          e.next = 22;
                          break;
                        }
                        return ((e.next = 20), (0, R.gz)(o("/setup/")));
                      case 20:
                        e.next = 40;
                        break;
                      case 22:
                        if ("not_onboarded" !== c.onboardState) {
                          e.next = 27;
                          break;
                        }
                        return ((e.next = 25), (0, R.gz)(r(1)));
                      case 25:
                        e.next = 40;
                        break;
                      case 27:
                        if ("onboarded" !== c.onboardState) {
                          e.next = 32;
                          break;
                        }
                        return ((e.next = 30), (0, R.gz)(r(3)));
                      case 30:
                        e.next = 40;
                        break;
                      case 32:
                        if ("onboarding" !== c.onboardState) {
                          e.next = 37;
                          break;
                        }
                        return ((e.next = 35), (0, R.gz)(r(2)));
                      case 35:
                        e.next = 40;
                        break;
                      case 37:
                        if ("unknown" !== c.onboardState) {
                          e.next = 40;
                          break;
                        }
                        return ((e.next = 40), (0, R.gz)(r(4)));
                      case 40:
                        if (!c.onboard || !c.onboard.onboardedBy.name) {
                          e.next = 43;
                          break;
                        }
                        return (
                          (e.next = 43),
                          (0, R.gz)(t(c.onboard.onboardedBy))
                        );
                      case 43:
                        e.next = 48;
                        break;
                      case 45:
                        ((e.prev = 45), (e.t0 = e.catch(4)), console.log(e.t0));
                      case 48:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[4, 45]],
              );
            }),
          },
        }),
        w = r(77835),
        I = r(81898),
        A = r(36082),
        L = r(56824),
        j = r(42477),
        k = r(2729),
        Z = "".concat(T.CT, "/config/state"),
        F = {
          name: { value: "" },
          email: { value: "" },
          confirmemail: { value: "" },
        },
        P = { name: [j.q9], email: [j.q9, j.GT], confirmemail: [j.q9, j.GT] },
        M = (0, p.Jg)({
          path: function () {
            return [
              "scenes",
              "containers",
              "ConnectCloudConnectChangeOwnership",
            ];
          },
          connect: {
            props: [N.Z, ["translations", "isMobile", "ownerInfo"]],
            actions: [N.Z, ["push"]],
          },
          actions: function () {
            return {
              change: function (e) {
                return { field: e };
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
              setChangeOwnership: function (e) {
                return e;
              },
              confirmChangeOwnership: function () {
                return !0;
              },
              changeOwnership: function () {
                return !0;
              },
              connectCloud: function () {
                return !0;
              },
            };
          },
          reducers: function (e) {
            var n,
              r,
              t,
              a,
              o = e.actions;
            return {
              form: [
                F,
                C().object,
                ((n = {}),
                (0, m.Z)(n, o.change, function (e, n) {
                  return j.jR(e, n, P);
                }),
                (0, m.Z)(n, o.setForm, function (e, n) {
                  return j.Yg(n.form, P).form;
                }),
                (0, m.Z)(n, o.reset, function () {
                  return F;
                }),
                n),
              ],
              dirty: [
                !1,
                C().bool,
                ((r = {}),
                (0, m.Z)(r, o.change, function () {
                  return !0;
                }),
                (0, m.Z)(r, o.setError, function () {
                  return !0;
                }),
                (0, m.Z)(r, o.reset, function () {
                  return !1;
                }),
                (0, m.Z)(r, o.changeOwnership, function () {
                  return !1;
                }),
                r),
              ],
              error: [
                null,
                C().string,
                ((t = {}),
                (0, m.Z)(t, o.setError, function (e, n) {
                  return n;
                }),
                (0, m.Z)(t, o.reset, function () {
                  return null;
                }),
                (0, m.Z)(t, o.changeOwnership, function () {
                  return null;
                }),
                (0, m.Z)(t, o.change, function () {
                  return null;
                }),
                t),
              ],
              showChangeOwnership: [
                !1,
                C().bool,
                ((a = {}),
                (0, m.Z)(a, o.setChangeOwnership, function (e, n) {
                  return n;
                }),
                (0, m.Z)(a, o.reset, function () {
                  return !1;
                }),
                a),
              ],
            };
          },
          takeLatest: function (e) {
            var n,
              r = e.actions,
              t = e.workers;
            return (
              (n = {}),
              (0, m.Z)(n, r.changeOwnership, t.changeOwnership),
              (0, m.Z)(n, r.connectCloud, t.connectCloud),
              n
            );
          },
          workers: {
            changeOwnership: (0, g.Z)().mark(function e() {
              var n, r, t, a, o, i, s, c;
              return (0, g.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (r = n.setError),
                          (t = n.setForm),
                          (a = n.setChangeOwnership),
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
                          ((s = e.sent), (c = j.Yg(o, P)), !i || !c.invalid)
                        ) {
                          e.next = 15;
                          break;
                        }
                        return (
                          (e.next = 14),
                          (0, R.gz)(r(s.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 14:
                        return e.abrupt("return", !1);
                      case 15:
                        if (i || !c.invalid) {
                          e.next = 21;
                          break;
                        }
                        return ((e.next = 18), (0, R.gz)(t(c.form)));
                      case 18:
                        return (
                          (e.next = 20),
                          (0, R.gz)(r(s.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 20:
                        return e.abrupt("return", !1);
                      case 21:
                        return ((e.prev = 21), (e.next = 24), (0, R.gz)(a(!0)));
                      case 24:
                        e.next = 29;
                        break;
                      case 26:
                        ((e.prev = 26),
                          (e.t0 = e.catch(21)),
                          console.log(e.t0));
                      case 29:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[21, 26]],
              );
            }),
            connectCloud: (0, g.Z)().mark(function e() {
              var n, r, t, a, o, i, s, c, u, l;
              return (0, g.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (r = n.setError),
                          (t = n.push),
                          (e.next = 3),
                          (0, R.gz)(S.actionCreators.setLoading(!0))
                        );
                      case 3:
                        return (
                          (e.prev = 3),
                          (a = { connected: !0 }),
                          (e.next = 7),
                          (0, R.RE)(O.Z.patch, Z, a)
                        );
                      case 7:
                        if (((o = e.sent), !(i = o.data).connected)) {
                          e.next = 17;
                          break;
                        }
                        if ("onboarded" !== i.onboardState) {
                          e.next = 15;
                          break;
                        }
                        return (
                          (e.next = 13),
                          (0, R.gz)(S.actionCreators.setLoading(!1))
                        );
                      case 13:
                        return (
                          (e.next = 15),
                          (0, R.gz)(t("/setup/unit-connected"))
                        );
                      case 15:
                        e.next = 37;
                        break;
                      case 17:
                        if ("not_onboarded" !== i.onboardState) {
                          e.next = 22;
                          break;
                        }
                        return (
                          (e.next = 20),
                          (0, R.gz)(S.actionCreators.setOnboardPage(1))
                        );
                      case 20:
                      case 25:
                      case 30:
                        e.next = 35;
                        break;
                      case 22:
                        if ("onboarded" !== i.onboardState) {
                          e.next = 27;
                          break;
                        }
                        return (
                          (e.next = 25),
                          (0, R.gz)(S.actionCreators.setOnboardPage(3))
                        );
                      case 27:
                        if ("onboarding" !== i.onboardState) {
                          e.next = 32;
                          break;
                        }
                        return (
                          (e.next = 30),
                          (0, R.gz)(S.actionCreators.setOnboardPage(2))
                        );
                      case 32:
                        if ("unknown" !== i.onboardState) {
                          e.next = 35;
                          break;
                        }
                        return (
                          (e.next = 35),
                          (0, R.gz)(S.actionCreators.setOnboardPage(4))
                        );
                      case 35:
                        return (
                          (e.next = 37),
                          (0, R.gz)(S.actionCreators.setLoading(!1))
                        );
                      case 37:
                        e.next = 53;
                        break;
                      case 39:
                        if (
                          ((e.prev = 39),
                          (e.t0 = e.catch(3)),
                          console.log(e.t0),
                          !e.t0.response)
                        ) {
                          e.next = 51;
                          break;
                        }
                        return ((e.next = 45), this.get("translations"));
                      case 45:
                        if (
                          ((s = e.sent),
                          (c = e.t0.response || {}),
                          !(u = c.data))
                        ) {
                          e.next = 51;
                          break;
                        }
                        return (
                          (l = (0, k.Kw)(u.error.errCode)),
                          (e.next = 51),
                          (0, R.gz)(r(s[l]))
                        );
                      case 51:
                        return (
                          (e.next = 53),
                          (0, R.gz)(S.actionCreators.setLoading(!1))
                        );
                      case 53:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[3, 39]],
              );
            }),
          },
        }),
        D = r(30588),
        U = r(48229),
        y = r(72768),
        z = r(89020),
        W = r(22247),
        B = r(31228),
        G = (function (e) {
          (0, f.default)(r, e);
          var n = (0, x.default)(r);
          function r() {
            return ((0, _.default)(this, r), n.apply(this, arguments));
          }
          return (
            (0, E.default)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    n = e.ownerInfo,
                    r = e.isMobile,
                    t = e.translations,
                    a = e.showChangeOwnership,
                    o = e.form,
                    i = e.error,
                    s = e.dirty,
                    c = this.actions,
                    u = c.connectCloud,
                    l = c.setChangeOwnership,
                    d = c.changeOwnership,
                    _ = c.change,
                    E = o.name,
                    f = o.email,
                    x = o.confirmemail,
                    h = t.UNITSETT_CONNECT_CLOUD,
                    g = t.UNITSETT_CHANGEOWNER_TITLE,
                    m = t.SETUP_FORM_NAME,
                    p = t.SETUP_FORM_EMAIL,
                    b = t.UNITSETT_CHANGEOWNER_CONFIRM,
                    C = t.SETUP_FORM_NEW_OWNER,
                    R = t.SETUP_FORM_NEW_OWNER_EMAIL,
                    O = t.SETUP_FORM_CONFIRM_NEW_OWNER_EMAIL,
                    N = t.UNITSETT_MODEL_POWEROFF_CANCEL;
                  return (0, B.jsxs)(V, {
                    children: [
                      n &&
                        (0, B.jsxs)(W.l0, {
                          mobile: !0,
                          children: [
                            (0, B.jsx)(W.l0.Row, {
                              children: (0, B.jsx)(W.oH, {
                                id: "Name",
                                label: m,
                                value: n.name,
                                disabled: !0,
                              }),
                            }),
                            (0, B.jsx)(W.l0.Row, {
                              children: (0, B.jsx)(W.oH, {
                                id: "Email",
                                label: p,
                                value: n.email,
                                disabled: !0,
                              }),
                            }),
                            (0, B.jsx)(W.SK, { height: "50px" }),
                            (0, B.jsxs)(K, {
                              full: r,
                              children: [
                                (0, B.jsxs)(W.zx, {
                                  id: "PrimaryButton_ConnectCloud",
                                  margin: r ? "0 0 16px 0" : "0px",
                                  buttonWidth: "257px",
                                  onClick: u,
                                  children: [
                                    (0, B.jsx)(U.Z, { children: "languages" }),
                                    h,
                                  ],
                                }),
                                (0, B.jsxs)(W.zx, {
                                  id: "PrimaryButton_ChangeOwner",
                                  buttonType: "secondary-default",
                                  buttonWidth: "202px",
                                  onClick: function () {
                                    return l(!0);
                                  },
                                  margin: r ? "0 0 16px 0" : "0 12px",
                                  disabled: !0,
                                  children: [
                                    (0, B.jsx)(U.Z, { children: "vpn_key" }),
                                    g,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      !n &&
                        (0, B.jsxs)(K, {
                          full: r,
                          children: [
                            (0, B.jsxs)(W.zx, {
                              id: "PrimaryButton_connectCloud",
                              margin: !r && "0px",
                              buttonWidth: "257px",
                              onClick: u,
                              disabled: n,
                              children: [
                                (0, B.jsx)(U.Z, { children: "languages" }),
                                h,
                              ],
                            }),
                            r && (0, B.jsx)(W.SK, { height: "10px" }),
                            (0, B.jsxs)(W.zx, {
                              id: "PrimaryButton_changeownership",
                              buttonType: "secondary-default",
                              buttonWidth: "202px",
                              onClick: function () {
                                return l(!0);
                              },
                              margin: !r && "0 12px",
                              disabled: !0,
                              children: [
                                (0, B.jsx)(U.Z, { children: "vpn_key" }),
                                g,
                              ],
                            }),
                          ],
                        }),
                      (0, B.jsx)(W.u_, {
                        open: a,
                        size: "medium",
                        children: (0, B.jsxs)("div", {
                          children: [
                            (0, B.jsx)(W.xB, { red: !0, title: g }),
                            (0, B.jsxs)(W.hz, {
                              padding: !0,
                              size: "medium",
                              children: [
                                (0, B.jsx)(W.ZT, {
                                  variant: "body1",
                                  dangerouslySetInnerHTML: { __html: b },
                                }),
                                (0, B.jsx)(W.SK, { height: "40px" }),
                                (0, B.jsx)(w.Z, {
                                  variant: "h4",
                                  gutterBottom: !0,
                                  children: C,
                                }),
                                (0, B.jsx)(W.SK, { height: "20px" }),
                                (0, B.jsx)(z.Z, {
                                  dirty: s,
                                  error: i,
                                  full: !0,
                                }),
                                (0, B.jsxs)(W.l0.Row, {
                                  children: [
                                    (0, B.jsx)(W.oH, {
                                      id: "Name",
                                      label: m,
                                      value: E.value,
                                      error: s && !E.valid,
                                      onChange: function (e) {
                                        var n = e.target;
                                        return _({ name: n.value });
                                      },
                                    }),
                                    (0, B.jsx)(y.Z, {
                                      id: "Name",
                                      showError: s && !E.valid,
                                      errorMessage: E.message,
                                    }),
                                  ],
                                }),
                                (0, B.jsxs)(W.l0.Row, {
                                  children: [
                                    (0, B.jsx)(W.oH, {
                                      id: "NewOwnerEmail",
                                      label: R,
                                      value: f.value,
                                      error: s && !f.valid,
                                      onChange: function (e) {
                                        var n = e.target;
                                        return _({ email: n.value });
                                      },
                                    }),
                                    (0, B.jsx)(y.Z, {
                                      id: "NewOwnerEmail",
                                      showError: s && !f.valid,
                                      errorMessage: f.message,
                                    }),
                                  ],
                                }),
                                (0, B.jsxs)(W.l0.Row, {
                                  children: [
                                    (0, B.jsx)(W.oH, {
                                      id: "ConfirmNewOwnerEmail",
                                      label: O,
                                      value: x.value,
                                      error: s && !x.valid,
                                      onChange: function (e) {
                                        var n = e.target;
                                        return _({ confirmemail: n.value });
                                      },
                                    }),
                                    (0, B.jsx)(y.Z, {
                                      id: "ConfirmNewOwnerEmail",
                                      showError: s && !x.valid,
                                      errorMessage: x.message,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, B.jsxs)(W.Zf, {
                              children: [
                                (0, B.jsx)(W.zx, {
                                  id: "PrimaryButton_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    return l(!1);
                                  },
                                  children: N,
                                }),
                                (0, B.jsx)(W.zx, {
                                  id: "PrimaryButton_ChangeOwnership",
                                  buttonType: "primary-danger",
                                  margin: "0 12px",
                                  buttonWidth: "210px",
                                  disabled: !0,
                                  onClick: d,
                                  children: g,
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
            r
          );
        })(h.Component),
        H = M(G),
        V = D.ZP.div(t || (t = (0, L.default)([""]))),
        K = D.ZP.div(
          a ||
            (a = (0, L.default)(["\n  display: flex;\n\n  ", "\n\n  ", "\n"])),
          function (e) {
            return (
              !e.full &&
              "\n    > button {\n\n      @media screen and (max-width: 1500px) {\n        height: auto;\n      }\n    }\n  "
            );
          },
          function (e) {
            return (
              e.full && "\n    display: block;\n    text-align: center;\n  "
            );
          },
        ),
        X = "".concat(T.CT, "/cloudapi/onboard"),
        q = (0, p.Jg)({
          path: function () {
            return ["scenes", "containers", "ConnectCloudFinishOnboard"];
          },
          connect: {
            props: [
              S,
              ["ownerInfo"],
              N.Z,
              ["translations", "isMobile", "user", "language"],
            ],
          },
          actions: function () {
            return {
              resendEmail: function () {
                return !0;
              },
              changeOwner: function () {
                return !0;
              },
            };
          },
          takeLatest: function (e) {
            var n,
              r = e.actions,
              t = e.workers;
            return (
              (n = {}),
              (0, m.Z)(n, r.resendEmail, t.resendEmail),
              (0, m.Z)(n, r.changeOwner, t.changeOwner),
              n
            );
          },
          workers: {
            resendEmail: (0, g.Z)().mark(function e() {
              var n, r, t, a, o, i;
              return (0, g.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return ((e.next = 2), this.get("user"));
                      case 2:
                        return (
                          (n = e.sent),
                          (e.next = 5),
                          this.get("ownerInfo")
                        );
                      case 5:
                        return (
                          (r = e.sent),
                          (e.next = 8),
                          this.get("language")
                        );
                      case 8:
                        return (
                          (t = e.sent),
                          (a = {
                            techEmail: n.email,
                            ownerEmail: r.email,
                            ownerName: r.name,
                            locale: t,
                          }),
                          (e.prev = 10),
                          (e.next = 13),
                          (0, R.RE)(O.Z.post, X, a)
                        );
                      case 13:
                        if (
                          ((o = e.sent),
                          "not_onboarded" !== (i = o.data.result).onboardState)
                        ) {
                          e.next = 20;
                          break;
                        }
                        return (
                          (e.next = 18),
                          (0, R.gz)(S.actionCreators.setOnboardPage(1))
                        );
                      case 18:
                        e.next = 33;
                        break;
                      case 20:
                        if ("onboarded" !== i.onboardState) {
                          e.next = 25;
                          break;
                        }
                        return (
                          (e.next = 23),
                          (0, R.gz)(S.actionCreators.setOnboardPage(3))
                        );
                      case 23:
                        e.next = 33;
                        break;
                      case 25:
                        if ("onboarding" !== i.onboardState) {
                          e.next = 30;
                          break;
                        }
                        return (
                          (e.next = 28),
                          (0, R.gz)(S.actionCreators.setOnboardPage(2))
                        );
                      case 28:
                        e.next = 33;
                        break;
                      case 30:
                        if ("unknown" !== i.onboardState) {
                          e.next = 33;
                          break;
                        }
                        return (
                          (e.next = 33),
                          (0, R.gz)(S.actionCreators.setOnboardPage(4))
                        );
                      case 33:
                        e.next = 38;
                        break;
                      case 35:
                        ((e.prev = 35),
                          (e.t0 = e.catch(10)),
                          console.log(e.t0));
                      case 38:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[10, 35]],
              );
            }),
            changeOwner: (0, g.Z)().mark(function e() {
              return (0, g.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        (0, R.gz)(S.actionCreators.setOnboardPage(5))
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          },
        }),
        Y = (function (e) {
          (0, f.default)(r, e);
          var n = (0, x.default)(r);
          function r() {
            return ((0, _.default)(this, r), n.apply(this, arguments));
          }
          return (
            (0, E.default)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    n = e.isMobile,
                    r = e.ownerInfo,
                    t = e.translations,
                    a = this.actions.changeOwner,
                    o = t.SETUP_FORM_NAME,
                    i = t.SETUP_FORM_EMAIL,
                    s = t.UNITSETT_CONNECT_CLOUD_CHANGE_OWNER,
                    c = t.UNITSETT_CONNECT_CLOUD_RESEND_EMAIL,
                    u = t.UNITSETT_CONNECT_CLOUD_CHANGE_OWNER_FORM_HELP,
                    l = t.UNITSETT_CONNECT_CLOUD_CHANGE_OWNER_FORM_CHECK_INBOX,
                    d = (0, B.jsxs)($, {
                      mobile: n,
                      fullWidth: n,
                      children: [
                        (0, B.jsxs)(W.zx, {
                          id: "Button_ResendEmail",
                          margin: "0 12px",
                          buttonWidth: "156px",
                          onClick: a,
                          children: [
                            (0, B.jsx)(U.Z, { children: "languages" }),
                            c,
                          ],
                        }),
                        (0, B.jsxs)(W.zx, {
                          id: "Button_ChangeOwner",
                          buttonType: "secondary-default",
                          margin: "0 12px",
                          buttonWidth: "169px",
                          onClick: a,
                          disabled: !0,
                          children: [(0, B.jsx)(U.Z, { children: "edit" }), s],
                        }),
                      ],
                    });
                  return (0, B.jsxs)(Q, {
                    children: [
                      r &&
                        (0, B.jsxs)(B.Fragment, {
                          children: [
                            (0, B.jsx)(ee, { children: u }),
                            (0, B.jsx)(ee, { children: l }),
                            (0, B.jsxs)(W.l0, {
                              mobile: n,
                              children: [
                                (0, B.jsx)(W.l0.Row, {
                                  children: (0, B.jsx)(W.oH, {
                                    id: "Name",
                                    label: o,
                                    value: r.name,
                                    disabled: !0,
                                  }),
                                }),
                                (0, B.jsx)(W.l0.Row, {
                                  children: (0, B.jsx)(W.oH, {
                                    id: "Email",
                                    label: i,
                                    value: r.email,
                                    disabled: !0,
                                  }),
                                }),
                                d,
                              ],
                            }),
                          ],
                        }),
                      !r &&
                        (0, B.jsxs)($, {
                          mobile: n,
                          children: [
                            (0, B.jsxs)(W.zx, {
                              id: "Button_ResendEmail",
                              margin: "0px",
                              buttonWidth: "156px",
                              onClick: a,
                              disabled: r,
                              children: [
                                (0, B.jsx)(U.Z, { children: "languages" }),
                                c,
                              ],
                            }),
                            (0, B.jsxs)(W.zx, {
                              id: "Button_ChangeOwner",
                              buttonType: "secondary-default",
                              margin: n ? "12px" : "0 12px",
                              buttonWidth: "169px",
                              onClick: a,
                              disabled: !0,
                              children: [
                                (0, B.jsx)(U.Z, { children: "edit" }),
                                s,
                              ],
                            }),
                          ],
                        }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(h.Component),
        J = q(Y),
        Q = D.ZP.div(o || (o = (0, L.default)([""]))),
        $ = D.ZP.div(
          i ||
            (i = (0, L.default)([
              "\n  display: flex;\n  margin-top: 20px;\n  ",
              "\n  ",
              "\n",
            ])),
          function (e) {
            return !e.mobile && "margin-bottom: 20px;";
          },
          function (e) {
            return (
              e.mobile &&
              "\n    justify-content: center;\n    flex-wrap: wrap;\n    text-align: center;\n  "
            );
          },
        ),
        ee = D.ZP.p(
          s ||
            (s = (0, L.default)([
              "\n  color: #333f48;\n  font-family: Helvetica;\n  font-size: 14px;\n  line-height: 20px;\n",
            ])),
        ),
        ne = "".concat(T.CT, "/cloudapi/onboard"),
        re = {
          ownerFirstName: { value: "" },
          ownerLastName: { value: "" },
          ownerEmail: { value: "" },
          ownerConfirmEmail: { value: "" },
        },
        te = {
          ownerFirstName: [j.q9],
          ownerLastName: [j.q9],
          ownerEmail: [j.q9, j.GT],
          ownerConfirmEmail: [j.q9, j.GT],
        },
        ae = (0, p.Jg)({
          path: function () {
            return ["scenes", "containers", "ConnectCloudNotOnboarded"];
          },
          connect: {
            props: [N.Z, ["isMobile", "translations", "user", "language"]],
            actions: [N.Z, ["setOwnerInfo"], S, ["setLoading"]],
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
            var n,
              r,
              t,
              a,
              o = e.actions;
            return {
              form: [
                re,
                C().object,
                ((n = {}),
                (0, m.Z)(n, o.change, function (e, n) {
                  return j.jR(e, n, te);
                }),
                (0, m.Z)(n, o.setForm, function (e, n) {
                  return j.Yg(n.form, te).form;
                }),
                (0, m.Z)(n, o.reset, function () {
                  return re;
                }),
                n),
              ],
              dirty: [
                !1,
                C().bool,
                ((r = {}),
                (0, m.Z)(r, o.change, function () {
                  return !0;
                }),
                (0, m.Z)(r, o.setError, function () {
                  return !0;
                }),
                (0, m.Z)(r, o.reset, function () {
                  return !1;
                }),
                (0, m.Z)(r, o.submit, function () {
                  return !1;
                }),
                r),
              ],
              error: [
                null,
                C().string,
                ((t = {}),
                (0, m.Z)(t, o.setError, function (e, n) {
                  return n;
                }),
                (0, m.Z)(t, o.reset, function () {
                  return null;
                }),
                (0, m.Z)(t, o.submit, function () {
                  return null;
                }),
                (0, m.Z)(t, o.change, function () {
                  return null;
                }),
                t),
              ],
              loading: [
                !1,
                C().bool,
                ((a = {}),
                (0, m.Z)(a, o.setLoading, function (e, n) {
                  return n;
                }),
                (0, m.Z)(a, o.submit, function () {
                  return !0;
                }),
                (0, m.Z)(a, o.setError, function () {
                  return !1;
                }),
                (0, m.Z)(a, o.reset, function () {
                  return !1;
                }),
                a),
              ],
            };
          },
          takeLatest: function (e) {
            var n = e.actions,
              r = e.workers;
            return (0, m.Z)({}, n.submit, r.submit);
          },
          workers: {
            submit: (0, g.Z)().mark(function e() {
              var n, r, t, a, o, i, s, c, u, l, d, _, E, f, x, h, m;
              return (0, g.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (r = n.setError),
                          (t = n.setForm),
                          (a = n.reset),
                          (o = n.setOwnerInfo),
                          (e.next = 3),
                          this.get("form")
                        );
                      case 3:
                        return ((i = e.sent), (e.next = 6), this.get("dirty"));
                      case 6:
                        return ((s = e.sent), (e.next = 9), this.get("user"));
                      case 9:
                        return (
                          (c = e.sent),
                          (e.next = 12),
                          this.get("language")
                        );
                      case 12:
                        return (
                          (u = e.sent),
                          (l = j.Yg(i, te)),
                          (e.next = 16),
                          this.get("translations")
                        );
                      case 16:
                        if (((d = e.sent), !s || !l.invalid)) {
                          e.next = 21;
                          break;
                        }
                        return (
                          (e.next = 20),
                          (0, R.gz)(r(d.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 20:
                        return e.abrupt("return", !1);
                      case 21:
                        if (s || !l.invalid) {
                          e.next = 27;
                          break;
                        }
                        return ((e.next = 24), (0, R.gz)(t(l.form)));
                      case 24:
                        return (
                          (e.next = 26),
                          (0, R.gz)(r(d.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 26:
                        return e.abrupt("return", !1);
                      case 27:
                        if (i.ownerEmail.value === i.ownerConfirmEmail.value) {
                          e.next = 31;
                          break;
                        }
                        return (
                          (e.next = 30),
                          (0, R.gz)(r(d.ERR_EMAIL_NOT_MATCH))
                        );
                      case 30:
                        return e.abrupt("return", !1);
                      case 31:
                        return (
                          (_ = {
                            techEmail: c.email,
                            ownerEmail: i.ownerEmail.value,
                            ownerName:
                              i.ownerFirstName.value +
                              " " +
                              i.ownerLastName.value,
                            locale: u,
                          }),
                          (e.prev = 32),
                          (e.next = 35),
                          (0, R.RE)(O.Z.post, ne, _)
                        );
                      case 35:
                        if (
                          ((E = e.sent),
                          !(f = E.data.result).onboard ||
                            !f.onboard.onboardedBy)
                        ) {
                          e.next = 40;
                          break;
                        }
                        return (
                          (e.next = 40),
                          (0, R.gz)(o(f.onboard.onboardedBy))
                        );
                      case 40:
                        if ("not_onboarded" !== f.onboardState) {
                          e.next = 45;
                          break;
                        }
                        return (
                          (e.next = 43),
                          (0, R.gz)(S.actionCreators.setOnboardPage(1))
                        );
                      case 43:
                        e.next = 58;
                        break;
                      case 45:
                        if ("onboarded" !== f.onboardState) {
                          e.next = 50;
                          break;
                        }
                        return (
                          (e.next = 48),
                          (0, R.gz)(S.actionCreators.setOnboardPage(3))
                        );
                      case 48:
                        e.next = 58;
                        break;
                      case 50:
                        if ("onboarding" !== f.onboardState) {
                          e.next = 55;
                          break;
                        }
                        return (
                          (e.next = 53),
                          (0, R.gz)(S.actionCreators.setOnboardPage(2))
                        );
                      case 53:
                        e.next = 58;
                        break;
                      case 55:
                        if ("unknown" !== f.onboardState) {
                          e.next = 58;
                          break;
                        }
                        return (
                          (e.next = 58),
                          (0, R.gz)(S.actionCreators.setOnboardPage(4))
                        );
                      case 58:
                        return ((e.next = 60), (0, R.gz)(a()));
                      case 60:
                        e.next = 73;
                        break;
                      case 62:
                        if (
                          ((e.prev = 62), (e.t0 = e.catch(32)), !e.t0.response)
                        ) {
                          e.next = 72;
                          break;
                        }
                        if (((x = e.t0.response || {}), !(h = x.data))) {
                          e.next = 70;
                          break;
                        }
                        return (
                          (m = (0, k.Kw)(h.error.errCode)),
                          (e.next = 70),
                          (0, R.gz)(r(d[m]))
                        );
                      case 70:
                        e.next = 73;
                        break;
                      case 72:
                        console.log(e.t0);
                      case 73:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[32, 62]],
              );
            }),
          },
        }),
        oe = (function (e) {
          (0, f.default)(r, e);
          var n = (0, x.default)(r);
          function r() {
            return ((0, _.default)(this, r), n.apply(this, arguments));
          }
          return (
            (0, E.default)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.actions,
                    n = e.submit,
                    r = e.change,
                    t = this.props,
                    a = t.isMobile,
                    o = t.translations,
                    i = t.form,
                    s = t.error,
                    c = t.dirty,
                    u = t.loading,
                    l = o.SETUP_CONNECT_CLOUD_BUTTON,
                    d = o.SETUP_FORM_EMAIL,
                    _ = o.SETUP_FORM_CONFIRM_EMAIL,
                    E = o.SETUP_FORM_EMAIL_PLACEHOLDER,
                    f = o.SETUP_FORM_CONFIRM_EMAIL_PLACEHOLDER,
                    x = o.SETUP_FORM_LASTNAME_PLACEHOLDER,
                    h = o.SETUP_FORM_FIRSTNAME_PLACEHOLDER,
                    g = o.SETUP_FORM_FIRSTNAME,
                    m = o.SETUP_FORM_LASTNAME,
                    p = i.ownerFirstName,
                    b = i.ownerLastName,
                    C = i.ownerEmail,
                    R = i.ownerConfirmEmail;
                  return (0, B.jsxs)(se, {
                    children: [
                      u && (0, B.jsx)(W.gb, {}),
                      (0, B.jsxs)(W.l0, {
                        mobile: a,
                        margin: "0 0 20px 0",
                        children: [
                          (0, B.jsx)(z.Z, { dirty: c, error: s, full: !0 }),
                          (0, B.jsxs)(W.l0.Row, {
                            children: [
                              (0, B.jsx)(W.oH, {
                                id: "FirstName",
                                label: g,
                                value: p.value,
                                placeholder: h,
                                onChange: function (e) {
                                  var n = e.target;
                                  return r({ ownerFirstName: n.value });
                                },
                              }),
                              (0, B.jsx)(y.Z, {
                                id: "FirstName",
                                showError: c && !p.valid,
                                errorMessage: p.message,
                              }),
                            ],
                          }),
                          (0, B.jsxs)(W.l0.Row, {
                            children: [
                              (0, B.jsx)(W.oH, {
                                id: "LastName",
                                label: m,
                                value: b.value,
                                placeholder: x,
                                onChange: function (e) {
                                  var n = e.target;
                                  return r({ ownerLastName: n.value });
                                },
                              }),
                              (0, B.jsx)(y.Z, {
                                id: "LastName",
                                showError: c && !b.valid,
                                errorMessage: b.message,
                              }),
                            ],
                          }),
                          (0, B.jsxs)(W.l0.Row, {
                            children: [
                              (0, B.jsx)(W.oH, {
                                id: "Email",
                                label: d,
                                placeholder: E,
                                onChange: function (e) {
                                  var n = e.target;
                                  return r({ ownerEmail: n.value });
                                },
                                value: C.value,
                              }),
                              (0, B.jsx)(y.Z, {
                                id: "Email",
                                showError: c && !C.valid,
                                errorMessage: C.message,
                              }),
                            ],
                          }),
                          (0, B.jsxs)(W.l0.Row, {
                            children: [
                              (0, B.jsx)(W.oH, {
                                id: "ConfirmEmail",
                                label: _,
                                placeholder: f,
                                value: R.value,
                                onChange: function (e) {
                                  var n = e.target;
                                  return r({ ownerConfirmEmail: n.value });
                                },
                              }),
                              (0, B.jsx)(y.Z, {
                                id: "ConfirmEmail",
                                showError: c && !R.valid,
                                errorMessage: R.message,
                              }),
                            ],
                          }),
                          (0, B.jsx)(W.SK, { height: "50px" }),
                          (0, B.jsxs)(W.zx, {
                            id: "PrimaryButton_Connect",
                            margin: "0px",
                            buttonWidth: "257px",
                            onClick: n,
                            children: [
                              (0, B.jsx)(U.Z, { children: "check" }),
                              l,
                            ],
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(h.Component),
        ie = ae(oe),
        se = D.ZP.div(c || (c = (0, L.default)([""]))),
        ce = r(90012),
        ue = "".concat(T.CT, "/cloudapi/onboard"),
        le = {
          ownerName: { value: "" },
          ownerEmail: { value: "" },
          ownerConfirmEmail: { value: "" },
        },
        de = {
          ownerName: [j.q9],
          ownerEmail: [j.q9, j.GT],
          ownerConfirmEmail: [j.q9, j.GT],
        },
        _e = (0, p.Jg)({
          path: function () {
            return ["scenes", "containers", "ConnectCloudChangeOwner"];
          },
          connect: {
            props: [
              N.Z,
              ["isMobile", "translations", "user", "language", "ownerInfo"],
            ],
            actions: [N.Z, ["setOwnerInfo"]],
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
              cancel: function () {
                return !0;
              },
            };
          },
          reducers: function (e) {
            var n,
              r,
              t,
              a = e.actions;
            return {
              form: [
                le,
                C().object,
                ((n = {}),
                (0, m.Z)(n, a.change, function (e, n) {
                  return j.jR(e, n, de);
                }),
                (0, m.Z)(n, a.setForm, function (e, n) {
                  return j.Yg(n.form, de).form;
                }),
                (0, m.Z)(n, a.reset, function () {
                  return le;
                }),
                n),
              ],
              dirty: [
                !1,
                C().bool,
                ((r = {}),
                (0, m.Z)(r, a.change, function () {
                  return !0;
                }),
                (0, m.Z)(r, a.setError, function () {
                  return !0;
                }),
                (0, m.Z)(r, a.reset, function () {
                  return !1;
                }),
                r),
              ],
              error: [
                null,
                C().string,
                ((t = {}),
                (0, m.Z)(t, a.setError, function (e, n) {
                  return n;
                }),
                (0, m.Z)(t, a.reset, function () {
                  return null;
                }),
                (0, m.Z)(t, a.submit, function () {
                  return null;
                }),
                (0, m.Z)(t, a.change, function () {
                  return null;
                }),
                t),
              ],
            };
          },
          start: (0, g.Z)().mark(function e() {
            var n, r, t;
            return (0, g.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (0, ce.log)(
                          "[ConnectCloudChangeOwner] Start container ",
                          "yellow",
                        ),
                        (e.next = 3),
                        this.get("ownerInfo")
                      );
                    case 3:
                      return ((n = e.sent), (e.next = 6), this.get("form"));
                    case 6:
                      return (
                        (r = e.sent),
                        (t = this.actionCreators.setForm),
                        n &&
                          ((r.ownerName = { value: n.name }),
                          (r.ownerEmail = { value: n.email }),
                          (r.ownerConfirmEmail = { value: n.email })),
                        (e.next = 11),
                        (0, R.gz)(t(r))
                      );
                    case 11:
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
              r = e.actions,
              t = e.workers;
            return (
              (n = {}),
              (0, m.Z)(n, r.submit, t.submit),
              (0, m.Z)(
                n,
                r.cancel,
                (0, g.Z)().mark(function e() {
                  return (0, g.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, R.gz)(S.actionCreators.setOnboardPage(2))
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              ),
              n
            );
          },
          workers: {
            submit: (0, g.Z)().mark(function e() {
              var n, r, t, a, o, i, s, c, u, l, d, _, E, f, x, h, m;
              return (0, g.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (r = n.setError),
                          (t = n.setForm),
                          (a = n.reset),
                          (o = n.setOwnerInfo),
                          (e.next = 3),
                          this.get("form")
                        );
                      case 3:
                        return ((i = e.sent), (e.next = 6), this.get("dirty"));
                      case 6:
                        return ((s = e.sent), (e.next = 9), this.get("user"));
                      case 9:
                        return (
                          (c = e.sent),
                          (e.next = 12),
                          this.get("language")
                        );
                      case 12:
                        return (
                          (u = e.sent),
                          (e.next = 15),
                          this.get("translations")
                        );
                      case 15:
                        if (
                          ((l = e.sent), (d = j.Yg(i, de)), !s || !d.invalid)
                        ) {
                          e.next = 21;
                          break;
                        }
                        return (
                          (e.next = 20),
                          (0, R.gz)(r(l.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 20:
                      case 26:
                        return e.abrupt("return", !1);
                      case 21:
                        if (s || !d.invalid) {
                          e.next = 27;
                          break;
                        }
                        return ((e.next = 24), (0, R.gz)(t(d.form)));
                      case 24:
                        return (
                          (e.next = 26),
                          (0, R.gz)(r(l.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 27:
                        return (
                          (_ = {
                            techEmail: c.email,
                            ownerEmail: i.ownerEmail.value,
                            ownerName: i.ownerName.value,
                            locale: u,
                          }),
                          (e.prev = 28),
                          (e.next = 31),
                          (0, R.RE)(O.Z.post, ue, _)
                        );
                      case 31:
                        if (
                          ((E = e.sent),
                          !(f = E.data.result).onboard ||
                            !f.onboard.onboardedBy)
                        ) {
                          e.next = 36;
                          break;
                        }
                        return (
                          (e.next = 36),
                          (0, R.gz)(o(f.onboard.onboardedBy))
                        );
                      case 36:
                        if ("not_onboarded" !== f.onboardState) {
                          e.next = 41;
                          break;
                        }
                        return (
                          (e.next = 39),
                          (0, R.gz)(S.actionCreators.setOnboardPage(1))
                        );
                      case 39:
                      case 44:
                      case 49:
                        e.next = 54;
                        break;
                      case 41:
                        if ("onboarded" !== f.onboardState) {
                          e.next = 46;
                          break;
                        }
                        return (
                          (e.next = 44),
                          (0, R.gz)(S.actionCreators.setOnboardPage(3))
                        );
                      case 46:
                        if ("onboarding" !== f.onboardState) {
                          e.next = 51;
                          break;
                        }
                        return (
                          (e.next = 49),
                          (0, R.gz)(S.actionCreators.setOnboardPage(2))
                        );
                      case 51:
                        if ("unknown" !== f.onboardState) {
                          e.next = 54;
                          break;
                        }
                        return (
                          (e.next = 54),
                          (0, R.gz)(S.actionCreators.setOnboardPage(4))
                        );
                      case 54:
                        return ((e.next = 56), (0, R.gz)(a()));
                      case 56:
                        e.next = 66;
                        break;
                      case 58:
                        if (
                          ((e.prev = 58), (e.t0 = e.catch(28)), !e.t0.response)
                        ) {
                          e.next = 66;
                          break;
                        }
                        if (((x = e.t0.response || {}), !(h = x.data))) {
                          e.next = 66;
                          break;
                        }
                        return (
                          (m = (0, k.Kw)(h.error.errCode)),
                          (e.next = 66),
                          (0, R.gz)(r(l[m]))
                        );
                      case 66:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[28, 58]],
              );
            }),
          },
        }),
        Ee = (function (e) {
          (0, f.default)(r, e);
          var n = (0, x.default)(r);
          function r() {
            return ((0, _.default)(this, r), n.apply(this, arguments));
          }
          return (
            (0, E.default)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.actions,
                    n = e.submit,
                    r = e.change,
                    t = e.cancel,
                    a = this.props,
                    o = a.isMobile,
                    i = a.translations,
                    s = a.form,
                    c = a.error,
                    u = a.dirty,
                    l = i.SETUP_SUBMIT_BUTTON,
                    d = i.SETUP_CANCEL_BUTTON,
                    _ = i.SETUP_FORM_NAME,
                    E = i.SETUP_FORM_EMAIL,
                    f = i.SETUP_FORM_CONFIRM_EMAIL,
                    x = i.SETUP_FORM_EMAIL_PLACEHOLDER,
                    h = i.SETUP_FORM_CONFIRM_EMAIL_PLACEHOLDER,
                    g = i.SETUP_FORM_NAME_PLACEHOLDER,
                    m = i.UNITSETT_CONNECT_CLOUD_CHANGE_OWNER_FORM_HELP,
                    p = i.UNITSETT_CONNECT_CLOUD_CHANGE_OWNER_FORM_CHECK_INBOX,
                    b = s.ownerName,
                    C = s.ownerEmail,
                    R = s.ownerConfirmEmail;
                  return (0, B.jsxs)(xe, {
                    children: [
                      (0, B.jsx)(he, { children: m }),
                      (0, B.jsx)(he, { children: p }),
                      (0, B.jsxs)(W.l0, {
                        mobile: !0,
                        containerHeight: !0,
                        children: [
                          (0, B.jsx)(z.Z, { dirty: u, error: c, full: !0 }),
                          (0, B.jsxs)(W.l0.Row, {
                            children: [
                              (0, B.jsx)(W.oH, {
                                id: "Name",
                                label: _,
                                value: b.value,
                                placeholder: g,
                                onChange: function (e) {
                                  var n = e.target;
                                  return r({ ownerName: n.value });
                                },
                              }),
                              (0, B.jsx)(y.Z, {
                                id: "Name",
                                showError: u && !b.valid,
                                errorMessage: b.message,
                              }),
                            ],
                          }),
                          (0, B.jsxs)(W.l0.Row, {
                            children: [
                              (0, B.jsx)(W.oH, {
                                id: "Email",
                                label: E,
                                placeholder: x,
                                onChange: function (e) {
                                  var n = e.target;
                                  return r({ ownerEmail: n.value });
                                },
                                value: C.value,
                              }),
                              (0, B.jsx)(y.Z, {
                                id: "Email",
                                showError: u && !C.valid,
                                errorMessage: C.message,
                              }),
                            ],
                          }),
                          (0, B.jsxs)(W.l0.Row, {
                            children: [
                              (0, B.jsx)(W.oH, {
                                id: "ConfirmEmail",
                                label: f,
                                placeholder: h,
                                value: R.value,
                                onChange: function (e) {
                                  var n = e.target;
                                  return r({ ownerConfirmEmail: n.value });
                                },
                              }),
                              (0, B.jsx)(y.Z, {
                                id: "ConfirmEmail",
                                showError: u && !R.valid,
                                errorMessage: R.message,
                              }),
                            ],
                          }),
                          (0, B.jsx)(W.SK, { height: "50px" }),
                          (0, B.jsxs)(ge, {
                            mobile: o,
                            children: [
                              (0, B.jsxs)(W.zx, {
                                id: "PrimaryButton_Submit",
                                margin: "0px",
                                buttonWidth: "107px",
                                onClick: n,
                                children: [
                                  (0, B.jsx)(U.Z, { children: "check" }),
                                  l,
                                ],
                              }),
                              (0, B.jsx)(W.zx, {
                                id: "PrimaryButton_Cancel",
                                buttonType: "secondary-default",
                                margin: "0 12px",
                                buttonWidth: "107px",
                                onClick: t,
                                children: d,
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
            r
          );
        })(h.Component),
        fe = _e(Ee),
        xe = D.ZP.div(u || (u = (0, L.default)([""]))),
        he = D.ZP.p(
          l ||
            (l = (0, L.default)([
              "\n  color: #333f48;\n  font-family: Helvetica;\n  font-size: 14px;\n  line-height: 20px;\n",
            ])),
        ),
        ge = D.ZP.div(
          d || (d = (0, L.default)(["\n  display: flex;\n\n  ", "\n"])),
          function (e) {
            return (
              e.mobile &&
              "\n    text-align: center;\n    margin-bottom: 20px;\n  "
            );
          },
        ),
        me = (function (e) {
          (0, f.default)(r, e);
          var n = (0, x.default)(r);
          function r() {
            var e;
            (0, _.default)(this, r);
            for (var t = arguments.length, a = new Array(t), o = 0; o < t; o++)
              a[o] = arguments[o];
            return (
              ((e = n.call.apply(n, [this].concat(a))).navigate = function (n) {
                (0, e.actions.push)(n);
              }),
              e
            );
          }
          return (
            (0, E.default)(r, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    n = this.props,
                    r = n.translations,
                    t = n.isMobile,
                    a = n.user,
                    o = n.loading,
                    i = n.showOnboardPage,
                    s = n.noInternetConnection,
                    c = r.UNITSETT_CONNECT_CLOUD,
                    u = r.UNITSETT_MAIN_FEATURES,
                    l = r.UNITSETT_TITLE,
                    d = r.SETUP_XSTORAGECLOUD_LOCAL_PORTAL_UNAVAILABLE,
                    _ = r.SETUP_XSTORAGECLOUD_OWNER_INFO,
                    E = r.SETUP_XSTORAGECLOUD_CONTROL_UNIT,
                    f = r.SETUP_XSTORAGECLOUD_ACCESS_MONITORING_DATA,
                    x = r.SETUP_XSTORAGECLOUD_DATA_PERSIST,
                    h = r.UNITSETT_CONNECT_CLOUD_OFFLINE;
                  return (0, B.jsxs)("div", {
                    children: [
                      o && (0, B.jsx)(W.gb, {}),
                      (0, B.jsx)(A.Z, {
                        title: l,
                        menu: (0, B.jsx)(I.Z, { page: "connect-cloud" }),
                        onBack: function () {
                          return e.navigate("/settings/");
                        },
                        isForm: !1,
                        isDirty: !1,
                        children: (0, B.jsxs)(W.e0, {
                          padding: !0,
                          mobile: t,
                          children: [
                            (0, B.jsx)(W.V1, { mobile: t, children: c }),
                            (0, B.jsx)(W.SK, { height: "20px" }),
                            (0, B.jsx)(w.Z, {
                              variant: "h4",
                              gutterBottom: !0,
                              children: u,
                            }),
                            (0, B.jsxs)(W.Gn, {
                              children: [
                                (0, B.jsx)(W.E9, { children: E }),
                                (0, B.jsx)(W.E9, { children: f }),
                                (0, B.jsx)(W.E9, { children: x }),
                              ],
                            }),
                            s &&
                              (0, B.jsx)(B.Fragment, {
                                children: (0, B.jsx)(w.Z, {
                                  variant: "h5",
                                  color: "error",
                                  children: h,
                                }),
                              }),
                            !s &&
                              (0, B.jsxs)(B.Fragment, {
                                children: [
                                  (0, B.jsx)(w.Z, {
                                    variant: "h5",
                                    color: "error",
                                    children: d,
                                  }),
                                  (0, B.jsx)(W.SK, { height: "20px" }),
                                  a &&
                                    "tech" === a.profile &&
                                    1 === i &&
                                    (0, B.jsxs)(B.Fragment, {
                                      children: [
                                        (0, B.jsx)(w.Z, {
                                          variant: "h4",
                                          gutterBottom: !0,
                                          children: _,
                                        }),
                                        (0, B.jsx)(ie, {}),
                                      ],
                                    }),
                                  a &&
                                    "tech" === a.profile &&
                                    2 === i &&
                                    (0, B.jsx)(J, {}),
                                  3 === i &&
                                    (0, B.jsx)(B.Fragment, {
                                      children: (0, B.jsx)(H, {}),
                                    }),
                                  a &&
                                    "tech" === a.profile &&
                                    4 === i &&
                                    (0, B.jsx)(B.Fragment, {
                                      children: (0, B.jsx)(J, {}),
                                    }),
                                  a &&
                                    "tech" === a.profile &&
                                    5 === i &&
                                    (0, B.jsxs)(B.Fragment, {
                                      children: [
                                        (0, B.jsx)(w.Z, {
                                          variant: "h4",
                                          gutterBottom: !0,
                                          children: _,
                                        }),
                                        (0, B.jsx)(fe, {}),
                                      ],
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
            r
          );
        })(h.Component),
        pe = S(me);
    },
  },
]);
//# sourceMappingURL=9950.f6d654ed.chunk.js.map
