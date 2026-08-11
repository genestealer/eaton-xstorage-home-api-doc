"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [1853],
  {
    2729: function (n, t, e) {
      e.d(t, {
        Kw: function () {
          return i;
        },
        pG: function () {
          return a;
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
        i = function (n) {
          return r[n]
            ? ""
                .concat(
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
                )
                .concat(r[n])
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
        a = function (n) {
          return n ? o["code".concat(n.code)] : "UNEXPECTED_ERROR";
        };
    },
    81139: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return U;
        },
      });
      var r,
        i,
        o,
        a,
        s = e(56824),
        c = e(30225),
        u = e(94404),
        l = e(14482),
        _ = e(5189),
        d = e(76431),
        T = e(87121),
        E = e(2845),
        S = e(84628),
        f = e(98278),
        p = e.n(f),
        R = e(83749),
        h = e(49745),
        I = e(13795),
        A = e(49318),
        N = "".concat(I.CT, "/commcard/reboot"),
        x = (0, S.Jg)({
          path: function () {
            return ["scenes", "containers", "MaintenanceMenu"];
          },
          connect: {
            props: [A.Z, ["isMobile", "translations", "configs"]],
            actions: [A.Z, ["push"]],
          },
          actions: function () {
            return {
              setSuccessfullyRebooting: function (n) {
                return n;
              },
              rebootUnit: function () {
                return !0;
              },
              reset: function () {
                return !0;
              },
              setRebootModal: function (n) {
                return n;
              },
            };
          },
          reducers: function (n) {
            var t,
              e,
              r,
              i = n.actions;
            return {
              successfullyRebooting: [
                !1,
                p().bool,
                ((t = {}),
                (0, E.Z)(t, i.setSuccessfullyRebooting, function (n, t) {
                  return t;
                }),
                (0, E.Z)(t, i.reset, function () {
                  return !1;
                }),
                t),
              ],
              rebootModal: [
                !1,
                p().bool,
                ((e = {}),
                (0, E.Z)(e, i.setRebootModal, function (n, t) {
                  return t;
                }),
                (0, E.Z)(e, i.setSuccessfullyRebooting, function () {
                  return !1;
                }),
                (0, E.Z)(e, i.reset, function () {
                  return !1;
                }),
                e),
              ],
              rebootStarted: [
                !1,
                p().bool,
                ((r = {}),
                (0, E.Z)(r, i.setSuccessfullyRebooting, function () {
                  return !0;
                }),
                (0, E.Z)(r, i.reset, function () {
                  return !1;
                }),
                r),
              ],
            };
          },
          stop: (0, T.Z)().mark(function n() {
            var t;
            return (0, T.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators.reset),
                        (n.next = 3),
                        (0, R.gz)(t())
                      );
                    case 3:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this,
            );
          }),
          takeLatest: function (n) {
            var t = n.actions,
              e = n.workers;
            return (0, E.Z)({}, t.rebootUnit, e.rebootUnit);
          },
          workers: {
            rebootUnit: (0, T.Z)().mark(function n() {
              var t;
              return (0, T.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators.setSuccessfullyRebooting),
                          (n.prev = 1),
                          (n.next = 4),
                          (0, R.RE)(h.Z.post, N)
                        );
                      case 4:
                        return ((n.next = 6), (0, R.gz)(t(!0)));
                      case 6:
                        n.next = 11;
                        break;
                      case 8:
                        ((n.prev = 8), (n.t0 = n.catch(1)), console.log(n.t0));
                      case 11:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this,
                [[1, 8]],
              );
            }),
          },
        }),
        g = e(30588),
        P = e(48229),
        O = e(93983),
        C = e(22247),
        b = e(31228),
        m = (function (n) {
          (0, l.default)(e, n);
          var t = (0, _.default)(e);
          function e() {
            var n;
            (0, c.default)(this, e);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return (
              ((n = t.call.apply(t, [this].concat(i))).navigate = function (t) {
                (0, n.actions.push)(t);
              }),
              n
            );
          }
          return (
            (0, u.default)(e, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    t = this.props,
                    e = t.page,
                    r = t.isMobile,
                    i = t.translations,
                    o = t.rebootModal,
                    a = t.successfullyRebooting,
                    s = t.configs,
                    c = i.MAINTENANCE_TECH_PARAMS,
                    u = i.UNITSETT_SUPPORT_MONITORING,
                    l = i.UNITSETT_SUPPORT_DATETIMESYNC,
                    _ = i.UNITSETT_SUPPORT_UNITLOG,
                    d = i.UNITSETT_SUPPORT_REBOOTUNIT_COMMCARD,
                    T = i.UNITSETT_SUPPORT_REBOOTUNIT_SUBMIT,
                    E = i.UNITSETT_SUPPORT_REBOOTUNIT_NOTE,
                    S = i.UNITSETT_SUPPORT_REBOOTUNIT_CONFIRMATION,
                    f = i.UNITSETT_SUPPORT_REBOOTUNIT_CANCEL,
                    p = i.UNITSETT_SUPPORT_SSH_STATUS,
                    R = i.UNITSETT_SUPPORT_HTTPS,
                    h = i.UNITSETT_SUPPORT_REBOOTUNIT_REBOOTSTARTED,
                    A = i.UNITSETT_SUPPORT_REBOOTUNIT_REBOOTSTARTED_DESC,
                    N = this.actions,
                    x = N.setRebootModal,
                    g = N.rebootUnit,
                    m = s
                      ? [
                          {
                            id: "TechParams",
                            key: "tech-params",
                            icon: (0, b.jsx)(D, {
                              transformproperty: "rotate(180deg)",
                              children: "error_outline",
                            }),
                            title: c,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/techparams");
                            },
                            disabled: s && s.userType !== I.cC,
                          },
                          {
                            id: "DatetimeSync",
                            key: "datetime-sync",
                            icon: (0, b.jsx)(C.VE, {
                              fillColor: r ? "#007BC1" : "#FFFFFF",
                            }),
                            title: l,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/datetime-sync");
                            },
                            disabled: s && s.userType !== I.cC,
                          },
                          {
                            id: "Monitoring",
                            key: "monitoring",
                            icon: (0, b.jsx)(C.Q9, {
                              fillColor: r ? "#007BC1" : "#FFFFFF",
                            }),
                            title: u,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/monitoring");
                            },
                            disabled: s && s.userType !== I.cC,
                          },
                          {
                            id: "UnitLog",
                            key: "unit-log",
                            icon: (0, b.jsx)(C.oy, {
                              fillColor: r ? "#007BC1" : "#FFFFFF",
                            }),
                            title: _,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/unit-log");
                            },
                          },
                          {
                            id: "SSHConnection",
                            key: "ssh-connection",
                            icon: (0, b.jsx)(C.CB, {
                              fillColor: r ? "#007BC1!important" : "#FFFFFF",
                            }),
                            title: p,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/ssh-connection");
                            },
                            disabled: s && s.userType !== I.cC,
                          },
                          {
                            id: "HTTPSTunnel",
                            key: "https-tunnel",
                            icon: (0, b.jsx)(P.Z, { children: "https" }),
                            title: R,
                            link: !0,
                            onClick: function () {
                              return n.navigate("/maintenance/https-tunnel");
                            },
                          },
                          {
                            id: "RebootUnit",
                            key: "reboot-unit",
                            icon: (0, b.jsx)(P.Z, {
                              children: "power_settings_new",
                            }),
                            title: d,
                            color: r ? "#CA3C3D" : "#EFC5C5",
                            onClick: function () {
                              return x(!0);
                            },
                          },
                        ]
                      : [],
                    U = Object.keys(i).filter(function (n) {
                      return /UNITSETT_SUPPORT_REBOOTUNIT_INFOPOINT(\d+)/.test(
                        n,
                      );
                    });
                  return (0, b.jsxs)(v, {
                    children: [
                      (0, b.jsx)(O.Z, { items: m, page: e }),
                      a &&
                        (0, b.jsx)(C.mJ, {
                          icon: (0, b.jsx)(P.Z, { children: "report" }),
                          title: h,
                          text: (0, b.jsx)(k, { children: A }),
                          mobile: r,
                        }),
                      (0, b.jsx)(C.u_, {
                        open: o,
                        size: "large",
                        onClose: function () {
                          return x(!1);
                        },
                        children: (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)(C.xB, { red: !0, title: d }),
                            (0, b.jsxs)(C.hz, {
                              padding: !0,
                              size: "large",
                              mobile: r,
                              children: [
                                (0, b.jsx)(F, { children: E }),
                                (0, b.jsx)(C.Gn, {
                                  children: U.map(function (n) {
                                    return (0, b.jsx)(
                                      C.E9,
                                      { children: i[n] },
                                      n,
                                    );
                                  }),
                                }),
                                (0, b.jsx)(C.ZT, {
                                  variant: "body1",
                                  children: S,
                                }),
                              ],
                            }),
                            (0, b.jsxs)(C.Zf, {
                              children: [
                                (0, b.jsx)(C.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    return x(!1);
                                  },
                                  children: f,
                                }),
                                (0, b.jsx)(C.zx, {
                                  id: "Button_Submit",
                                  buttonType: "primary-danger",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: g,
                                  children: T,
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
            e
          );
        })(d.Component),
        U = x(m),
        v = g.ZP.div(r || (r = (0, s.default)([""]))),
        D = (0, g.ZP)(P.Z)(
          i || (i = (0, s.default)(["\n  transform: ", ";\n"])),
          function (n) {
            var t = n.transformproperty;
            return "".concat(t);
          },
        ),
        F = g.ZP.p(
          o ||
            (o = (0, s.default)([
              '\n  color: #424e54;\n  font-family: "Open Sans";\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: bold;\n  margin: 0;\n',
            ])),
        ),
        k = g.ZP.div(
          a ||
            (a = (0, s.default)([
              '\n  color: rgba(114, 126, 132, 1);\n  font-size: 14px;\n  line-height: 20px;\n  font-family: "Open Sans";\n  margin: 7px 0px;\n',
            ])),
        );
    },
    36082: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return g;
        },
      });
      var r,
        i,
        o,
        a = e(56824),
        s = e(30225),
        c = e(94404),
        u = e(14482),
        l = e(5189),
        _ = e(76431),
        d = e(87121),
        T = e(2845),
        E = e(84628),
        S = e(83749),
        f = e(98278),
        p = e.n(f),
        R = e(49318),
        h = (0, E.Jg)({
          path: function () {
            return ["scenes", "containers", "PageAdaptable"];
          },
          connect: {
            props: [R.Z, ["isMobile", "translations"]],
            actions: [R.Z, ["push"]],
          },
          actions: function () {
            return {
              showConfirmationModal: function (n) {
                return { location: n };
              },
              hideConfirmationModal: function () {
                return !0;
              },
              handleConfirmNavigationClick: function () {
                return !0;
              },
            };
          },
          reducers: function (n) {
            var t,
              e = n.actions;
            return {
              confirmationModal: [
                !1,
                p().bool,
                ((t = {}),
                (0, T.Z)(t, e.showConfirmationModal, function () {
                  return !0;
                }),
                (0, T.Z)(t, e.hideConfirmationModal, function () {
                  return !1;
                }),
                t),
              ],
              nextLocation: [
                {},
                p().object,
                (0, T.Z)({}, e.showConfirmationModal, function (n, t) {
                  return t.location;
                }),
              ],
            };
          },
          stop: (0, d.Z)().mark(function n() {
            var t;
            return (0, d.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators.hideConfirmationModal),
                        (n.next = 3),
                        (0, S.gz)(t())
                      );
                    case 3:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this,
            );
          }),
          takeLatest: function (n) {
            var t = n.actions,
              e = n.workers;
            return (0, T.Z)(
              {},
              t.handleConfirmNavigationClick,
              e.handleConfirmNavigationClick,
            );
          },
          workers: {
            handleConfirmNavigationClick: (0, d.Z)().mark(function n() {
              var t, e, r, i;
              return (0, d.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (e = t.hideConfirmationModal),
                          (r = t.push),
                          (n.next = 3),
                          this.get("nextLocation")
                        );
                      case 3:
                        return ((i = n.sent), (n.next = 6), (0, S.gz)(e()));
                      case 6:
                        return ((n.next = 8), (0, S.gz)(r(i)));
                      case 8:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this,
              );
            }),
          },
        }),
        I = e(30588),
        A = e(22247),
        N = e(31228),
        x = (function (n) {
          (0, u.default)(e, n);
          var t = (0, l.default)(e);
          function e() {
            var n;
            (0, s.default)(this, e);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return (
              ((n = t.call.apply(t, [this].concat(i))).first = !0),
              (n.handleBlockedNavigation = function (t) {
                var e = n.props,
                  r = e.isForm,
                  i = e.isDirty,
                  o = n.actions.showConfirmationModal;
                return !(r && i && n.first) || ((n.first = !1), o(t), !1);
              }),
              n
            );
          }
          return (
            (0, c.default)(e, [
              {
                key: "componentDidMount",
                value: function () {
                  this.first = !0;
                },
              },
              {
                key: "render",
                value: function () {
                  var n = this,
                    t = this.props,
                    e = t.isMobile,
                    r = t.loading,
                    i = t.children,
                    o = t.menu,
                    a = t.onBack,
                    s = t.title,
                    c = t.translations,
                    u = t.confirmationModal,
                    l = t.isForm,
                    _ = t.isDirty,
                    d = this.actions,
                    T = d.showConfirmationModal,
                    E = d.hideConfirmationModal,
                    S = d.handleConfirmNavigationClick,
                    f = c.GENERAL_CANCEL,
                    p = c.GENERAL_CONTINUE,
                    R = c.BACK_BUTTON_MODAL_TEXT,
                    h = c.BACK_BUTTON_MODAL_TITLE;
                  return (0, N.jsxs)(P, {
                    children: [
                      !!r && (0, N.jsx)(A.gb, {}),
                      e &&
                        (0, N.jsxs)("div", {
                          children: [
                            (0, N.jsx)(A.xE, {
                              id: "PageAdaptable_BackButton",
                              onClick: l && _ ? T : a,
                            }),
                            i,
                          ],
                        }),
                      !e &&
                        (0, N.jsxs)("div", {
                          children: [
                            (0, N.jsx)(A.V1, { mobile: e, children: s }),
                            (0, N.jsx)(O, { children: o }),
                            (0, N.jsx)(C, { children: i }),
                          ],
                        }),
                      (0, N.jsx)(A.u_, {
                        size: "small",
                        open: u,
                        children: (0, N.jsxs)("div", {
                          children: [
                            (0, N.jsx)(A.xB, { title: h }),
                            (0, N.jsx)(A.hz, {
                              padding: !0,
                              size: "small",
                              mobile: e,
                              children: (0, N.jsx)(A.ZT, { children: R }),
                            }),
                            (0, N.jsxs)(A.Zf, {
                              children: [
                                (0, N.jsx)(A.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    ((n.first = !0), E());
                                  },
                                  children: f,
                                }),
                                (0, N.jsx)(A.zx, {
                                  id: "Button_Continue",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function (n) {
                                    e ? (E(), a(n)) : S(n);
                                  },
                                  children: p,
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
            e
          );
        })(_.Component),
        g = h(x),
        P = I.ZP.div(
          r ||
            (r = (0, a.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n    padding-right: 0px;\n  }\n",
            ])),
        ),
        O = I.ZP.div(
          i ||
            (i = (0, a.default)([
              "\n  width: 40%;\n  padding-right: 5%;\n  float: left;\n  position: relative;\n  color: #fff;\n  margin-top: 25px;\n",
            ])),
        ),
        C = I.ZP.div(
          o ||
            (o = (0, a.default)([
              "\n  width: 60%;\n  float: left;\n  padding-right: 0;\n",
            ])),
        );
    },
    61853: function (n, t, e) {
      (e.r(t),
        e.d(t, {
          MaintenanceHttpsTunnel: function () {
            return j;
          },
          default: function () {
            return y;
          },
        }));
      var r,
        i,
        o,
        a,
        s,
        c = e(56824),
        u = e(30225),
        l = e(94404),
        _ = e(14482),
        d = e(5189),
        T = e(76431),
        E = e(87121),
        S = e(2845),
        f = e(84628),
        p = e(49745),
        R = e(90012),
        h = e(98278),
        I = e.n(h),
        A = e(13795),
        N = e(2729),
        x = e(49318),
        g = e(83749),
        P = "".concat(A.CT, "/technical/https_tunnel/open"),
        O = "".concat(A.CT, "/technical/https_tunnel/close"),
        C = "".concat(A.CT, "/technical/https_tunnel"),
        b = { enabled: !1, technicianPassword: "", port: null },
        m = (0, f.Jg)({
          path: function () {
            return ["scenes", "MaintenanceHttpsTunnel"];
          },
          connect: {
            props: [x.Z, ["translations", "isMobile", "currentRoute"]],
            actions: [x.Z, ["push"]],
          },
          actions: function () {
            return {
              getHttpsStatus: function () {
                return !0;
              },
              setHttpsStatus: function (n) {
                return n;
              },
              reset: function () {
                return !0;
              },
              setOpenStatus: function (n) {
                return n;
              },
              setError: function (n) {
                return n;
              },
              setLoading: function (n) {
                return n;
              },
            };
          },
          reducers: function (n) {
            var t,
              e,
              r,
              i = n.actions;
            return {
              httpsStatus: [
                b,
                I().object,
                ((t = {}),
                (0, S.Z)(t, i.setHttpsStatus, function (n, t) {
                  return t;
                }),
                (0, S.Z)(t, i.reset, function () {
                  return b;
                }),
                t),
              ],
              loading: [
                !1,
                I().bool,
                ((e = {}),
                (0, S.Z)(e, i.setLoading, function (n, t) {
                  return t;
                }),
                (0, S.Z)(e, i.getHttpsStatus, function () {
                  return !0;
                }),
                (0, S.Z)(e, i.setHttpsStatus, function () {
                  return !1;
                }),
                (0, S.Z)(e, i.setOpenStatus, function () {
                  return !0;
                }),
                (0, S.Z)(e, i.reset, function () {
                  return !1;
                }),
                (0, S.Z)(e, i.setError, function () {
                  return !1;
                }),
                e),
              ],
              error: [
                null,
                I().string,
                ((r = {}),
                (0, S.Z)(r, i.setError, function (n, t) {
                  return t;
                }),
                (0, S.Z)(r, i.reset, function () {
                  return null;
                }),
                (0, S.Z)(r, i.getHttpsStatus, function () {
                  return null;
                }),
                (0, S.Z)(r, i.setOpenStatus, function () {
                  return null;
                }),
                r),
              ],
            };
          },
          selectors: function (n) {
            var t = n.selectors;
            return {
              isSupportMenu: [
                function () {
                  return [t.currentRoute];
                },
                function (n) {
                  return n && "DeviceSupportMaintenanceHttpsTunnel" === n.key;
                },
                I().bool,
              ],
            };
          },
          start: (0, E.Z)().mark(function n() {
            return (0, E.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (0, R.log)("[XS-SSH Status] Start Scene", "yellow"),
                        (n.next = 3),
                        (0, g.gz)(this.actionCreators.getHttpsStatus())
                      );
                    case 3:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this,
            );
          }),
          takeLatest: function (n) {
            var t,
              e = n.actions,
              r = n.workers;
            return (
              (t = {}),
              (0, S.Z)(t, e.getHttpsStatus, r.getHttpsStatus),
              (0, S.Z)(t, e.setOpenStatus, r.setOpenStatus),
              t
            );
          },
          workers: {
            getHttpsStatus: (0, E.Z)().mark(function n() {
              var t, e, r, i, o, a, s, c, u, l;
              return (0, E.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return ((n.next = 2), this.get("translations"));
                      case 2:
                        return (
                          (t = n.sent),
                          (e = this.actionCreators),
                          (r = e.setHttpsStatus),
                          (i = e.setError),
                          (o = e.setLoading),
                          (n.prev = 4),
                          (n.next = 7),
                          (0, g.RE)(p.Z.get, C)
                        );
                      case 7:
                        if (((a = n.sent), !(s = a.data.result))) {
                          n.next = 15;
                          break;
                        }
                        return ((n.next = 12), (0, g.gz)(r(s)));
                      case 12:
                        if (!s.enabled || "" !== s.technicianPassword) {
                          n.next = 15;
                          break;
                        }
                        return (
                          (n.next = 15),
                          (0, g.gz)(
                            i(t.UNITSETT_SUPPORT_HTTPSSTATUS_EMPTY_TECHPASS),
                          )
                        );
                      case 15:
                        n.next = 29;
                        break;
                      case 17:
                        return (
                          (n.prev = 17),
                          (n.t0 = n.catch(4)),
                          (n.next = 21),
                          (0, g.gz)(o(!1))
                        );
                      case 21:
                        if (((c = n.t0.response || {}), !(u = c.data))) {
                          n.next = 28;
                          break;
                        }
                        return (
                          (l = u.message
                            ? (0, N.Kw)(u.message, "API_ERROR_")
                            : (0, N.Kw)(u.error.errCode)),
                          (n.next = 26),
                          (0, g.gz)(i(t[l] || ""))
                        );
                      case 26:
                        n.next = 29;
                        break;
                      case 28:
                        console.log(n.t0);
                      case 29:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this,
                [[4, 17]],
              );
            }),
            setOpenStatus: (0, E.Z)().mark(function n(t) {
              var e, r, i, o, a, s, c, u, l, _, d, T;
              return (0, E.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (e = t.payload),
                          (n.next = 3),
                          this.get("translations")
                        );
                      case 3:
                        return (
                          (r = n.sent),
                          (i = this.actionCreators),
                          (o = i.setHttpsStatus),
                          (a = i.setError),
                          (n.prev = 5),
                          (s = e ? P : O),
                          (c = {
                            headers: { "content-type": "application/json" },
                          }),
                          (n.next = 10),
                          (0, g.RE)(p.Z.post, s, c)
                        );
                      case 10:
                        if (((u = n.sent), !(l = u.data.result))) {
                          n.next = 18;
                          break;
                        }
                        return ((n.next = 15), (0, g.gz)(o(l)));
                      case 15:
                        if (!l.enabled || "" !== l.technicianPassword) {
                          n.next = 18;
                          break;
                        }
                        return (
                          (n.next = 18),
                          (0, g.gz)(
                            a(r.UNITSETT_SUPPORT_HTTPSSTATUS_EMPTY_TECHPASS),
                          )
                        );
                      case 18:
                        n.next = 30;
                        break;
                      case 20:
                        if (
                          ((n.prev = 20),
                          (n.t0 = n.catch(5)),
                          (_ = n.t0.response || {}),
                          !(d = _.data))
                        ) {
                          n.next = 29;
                          break;
                        }
                        return (
                          (T = d.message
                            ? (0, N.Kw)(d.message)
                            : (0, N.Kw)(d.error.errCode)),
                          (n.next = 27),
                          (0, g.gz)(a(r[T] || ""))
                        );
                      case 27:
                        n.next = 30;
                        break;
                      case 29:
                        console.log(n.t0);
                      case 30:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this,
                [[5, 20]],
              );
            }),
          },
        }),
        U = e(30588),
        v = e(48229),
        D = e(40915),
        F = e(87371),
        k = e(36082),
        L = e(81139),
        Z = e(81898),
        w = e(22247),
        M = e(31228),
        j = (function (n) {
          (0, _.default)(e, n);
          var t = (0, d.default)(e);
          function e() {
            var n;
            (0, u.default)(this, e);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return (
              ((n = t.call.apply(t, [this].concat(i))).navigate = function (t) {
                (0, n.actions.push)(t);
              }),
              n
            );
          }
          return (
            (0, l.default)(e, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    t = this.props,
                    e = t.translations,
                    r = t.isMobile,
                    i = t.loading,
                    o = t.httpsStatus,
                    a = t.error,
                    s = t.isSupportMenu,
                    c = e.MAINTENANCE_TITLE,
                    u = e.UNITSETT_SUPPORT_HTTPS_STATUS,
                    l = e.UNITSETT_SUPPORT_HTTPSSTATUS_HTTPSPORT,
                    _ = e.UNITSETT_SUPPORT_HTTPSSTATUS_ENABLED,
                    d = e.UNITSETT_SUPPORT_HTTPSSTATUS_DISABLED,
                    T = e.UNITSETT_SUPPORT_HTTPSSTATUS_HTTPSTUNNEL,
                    E = e.UNITSETT_SUPPORT_HTTPSSTATUS_TECHPASSWORD,
                    S = e.UNITSETT_SUPPORT_HTTPSSTATUS_TECHUSERNAME,
                    f = e.UNITSETT_TITLE,
                    p = o || {},
                    R = p.enabled,
                    h = p.port,
                    I = p.technicianUsername,
                    A = p.technicianPassword,
                    N = this.actions.setOpenStatus,
                    x = s ? "/settings/support/" : "/maintenance/";
                  return (0, M.jsx)(H, {
                    children: (0, M.jsx)(k.Z, {
                      title: s ? f : c,
                      menu: s
                        ? (0, M.jsx)(Z.Z, { page: "support" })
                        : (0, M.jsx)(L.Z, { page: "https-tunnel" }),
                      isForm: !1,
                      onBack: function () {
                        return n.navigate(x);
                      },
                      loading: i,
                      children: (0, M.jsxs)(w.e0, {
                        padding: !0,
                        mobile: r,
                        children: [
                          (0, M.jsxs)(w.V1, {
                            mobile: r,
                            children: [
                              !r &&
                                s &&
                                (0, M.jsx)(z, {
                                  id: "BackButton",
                                  onClick: function () {
                                    return n.navigate(x);
                                  },
                                  children: (0, M.jsx)(v.Z, {
                                    children: "arrow_back",
                                  }),
                                }),
                              u,
                            ],
                          }),
                          (0, M.jsx)(w.Bc, { children: a }),
                          (0, M.jsx)(w.SK, { height: "20px" }),
                          (0, M.jsx)(W, { children: T }),
                          (0, M.jsx)(B, {
                            id: "SwitchLabel_HTTPSStatusEnabled",
                            control: (0, M.jsx)(G, {
                              id: "PowerSwitch_HTTPSStatusEnabled",
                              checked: R,
                              onChange: function () {
                                return N(!R);
                              },
                              classes: { checked: "checked", track: "bar" },
                            }),
                            label: R ? _ : d,
                          }),
                          R &&
                            (0, M.jsxs)(M.Fragment, {
                              children: [
                                (0, M.jsx)(w.fX, {
                                  id: "LabelValueInline_HTTPSStatusEnabled",
                                  label: l,
                                  value: (h && h.toString()) || "--",
                                }),
                                (0, M.jsx)(w.fX, {
                                  id: "LabelValueInline_HTTPSStatusTechUsername",
                                  label: S,
                                  value: I || "--",
                                }),
                                (0, M.jsx)(w.fX, {
                                  id: "LabelValueInline_HTTPSStatusTechPass",
                                  label: E,
                                  value: A || "--",
                                }),
                              ],
                            }),
                        ],
                      }),
                    }),
                  });
                },
              },
            ]),
            e
          );
        })(T.Component),
        y = m(j),
        H = U.ZP.div(r || (r = (0, c.default)([""]))),
        B = (0, U.ZP)(D.Z)(
          i ||
            (i = (0, c.default)([
              "\n  height: 48px;\n  position: relative;\n  margin-left: 0 !important;\n  margin-right: 0;\n  width: 100%;\n  padding-left: 8px;\n\n  > span:nth-child(2) {\n    width: 85%;\n    color: #424e54;\n    font-family: 'Open Sans';\n    font-size: 14px;\n    line-height: 20px;\n  }\n  box-shadow: inset 0 -1px 0 0 rgba(114, 126, 132, 0.2);\n",
            ])),
        ),
        G = (0, U.ZP)(F.Z)(
          o ||
            (o = (0, c.default)([
              "\n  &&&& {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 1;\n\n    .checked {\n      color: #007bc1;\n    }\n    .checked + .bar {\n      background-color: #007bc1;\n      opacity: 0.4;\n    }\n  }\n",
            ])),
        ),
        W = U.ZP.p(
          a ||
            (a = (0, c.default)([
              "\n  color: #5b6770;\n  font-family: 'Open Sans';\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 14px;\n  padding-left: 8px;\n  margin-bottom: 0;\n",
            ])),
        ),
        z = U.ZP.div(
          s ||
            (s = (0, c.default)([
              "\n  background: transparent;\n  border: 0;\n  display: inline-flex;\n  padding-right: 16px;\n  cursor: pointer;\n",
            ])),
        );
    },
  },
]);
//# sourceMappingURL=1853.d1ca4178.chunk.js.map
