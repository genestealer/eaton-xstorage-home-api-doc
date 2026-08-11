(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [9571],
  {
    2729: function (n, e, r) {
      "use strict";
      r.d(e, {
        Kw: function () {
          return o;
        },
        pG: function () {
          return a;
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
        o = function (n) {
          return t[n]
            ? ""
                .concat(
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
                )
                .concat(t[n])
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
        a = function (n) {
          return n ? i["code".concat(n.code)] : "UNEXPECTED_ERROR";
        };
    },
    23513: function (n, e, r) {
      "use strict";
      var t,
        o = r(56824),
        i = r(30588),
        a = r(22247),
        s = (0, i.ZP)(a.oH)(
          t ||
            (t = (0, o.default)([
              '\n&&&& {\n  label {\n    color: #C6CACC;\n    font-family: "Open Sans";\n    font-size: 10px;\n    line-height: 10px;\n    font-weight: 500;\n  }\n',
            ])),
        );
      e.Z = s;
    },
    36082: function (n, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return I;
        },
      });
      var t,
        o,
        i,
        a = r(56824),
        s = r(30225),
        c = r(94404),
        u = r(14482),
        l = r(5189),
        d = r(76431),
        _ = r(87121),
        f = r(2845),
        E = r(84628),
        h = r(83749),
        p = r(98278),
        g = r.n(p),
        R = r(49318),
        S = (0, E.Jg)({
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
            var e,
              r = n.actions;
            return {
              confirmationModal: [
                !1,
                g().bool,
                ((e = {}),
                (0, f.Z)(e, r.showConfirmationModal, function () {
                  return !0;
                }),
                (0, f.Z)(e, r.hideConfirmationModal, function () {
                  return !1;
                }),
                e),
              ],
              nextLocation: [
                {},
                g().object,
                (0, f.Z)({}, r.showConfirmationModal, function (n, e) {
                  return e.location;
                }),
              ],
            };
          },
          stop: (0, _.Z)().mark(function n() {
            var e;
            return (0, _.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (e = this.actionCreators.hideConfirmationModal),
                        (n.next = 3),
                        (0, h.gz)(e())
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
            var e = n.actions,
              r = n.workers;
            return (0, f.Z)(
              {},
              e.handleConfirmNavigationClick,
              r.handleConfirmNavigationClick,
            );
          },
          workers: {
            handleConfirmNavigationClick: (0, _.Z)().mark(function n() {
              var e, r, t, o;
              return (0, _.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (e = this.actionCreators),
                          (r = e.hideConfirmationModal),
                          (t = e.push),
                          (n.next = 3),
                          this.get("nextLocation")
                        );
                      case 3:
                        return ((o = n.sent), (n.next = 6), (0, h.gz)(r()));
                      case 6:
                        return ((n.next = 8), (0, h.gz)(t(o)));
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
        x = r(30588),
        A = r(22247),
        v = r(31228),
        P = (function (n) {
          (0, u.default)(r, n);
          var e = (0, l.default)(r);
          function r() {
            var n;
            (0, s.default)(this, r);
            for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
              o[i] = arguments[i];
            return (
              ((n = e.call.apply(e, [this].concat(o))).first = !0),
              (n.handleBlockedNavigation = function (e) {
                var r = n.props,
                  t = r.isForm,
                  o = r.isDirty,
                  i = n.actions.showConfirmationModal;
                return !(t && o && n.first) || ((n.first = !1), i(e), !1);
              }),
              n
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
                  var n = this,
                    e = this.props,
                    r = e.isMobile,
                    t = e.loading,
                    o = e.children,
                    i = e.menu,
                    a = e.onBack,
                    s = e.title,
                    c = e.translations,
                    u = e.confirmationModal,
                    l = e.isForm,
                    d = e.isDirty,
                    _ = this.actions,
                    f = _.showConfirmationModal,
                    E = _.hideConfirmationModal,
                    h = _.handleConfirmNavigationClick,
                    p = c.GENERAL_CANCEL,
                    g = c.GENERAL_CONTINUE,
                    R = c.BACK_BUTTON_MODAL_TEXT,
                    S = c.BACK_BUTTON_MODAL_TITLE;
                  return (0, v.jsxs)(m, {
                    children: [
                      !!t && (0, v.jsx)(A.gb, {}),
                      r &&
                        (0, v.jsxs)("div", {
                          children: [
                            (0, v.jsx)(A.xE, {
                              id: "PageAdaptable_BackButton",
                              onClick: l && d ? f : a,
                            }),
                            o,
                          ],
                        }),
                      !r &&
                        (0, v.jsxs)("div", {
                          children: [
                            (0, v.jsx)(A.V1, { mobile: r, children: s }),
                            (0, v.jsx)(w, { children: i }),
                            (0, v.jsx)(C, { children: o }),
                          ],
                        }),
                      (0, v.jsx)(A.u_, {
                        size: "small",
                        open: u,
                        children: (0, v.jsxs)("div", {
                          children: [
                            (0, v.jsx)(A.xB, { title: S }),
                            (0, v.jsx)(A.hz, {
                              padding: !0,
                              size: "small",
                              mobile: r,
                              children: (0, v.jsx)(A.ZT, { children: R }),
                            }),
                            (0, v.jsxs)(A.Zf, {
                              children: [
                                (0, v.jsx)(A.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    ((n.first = !0), E());
                                  },
                                  children: p,
                                }),
                                (0, v.jsx)(A.zx, {
                                  id: "Button_Continue",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function (n) {
                                    r ? (E(), a(n)) : h(n);
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
        I = S(P),
        m = x.ZP.div(
          t ||
            (t = (0, a.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n    padding-right: 0px;\n  }\n",
            ])),
        ),
        w = x.ZP.div(
          o ||
            (o = (0, a.default)([
              "\n  width: 40%;\n  padding-right: 5%;\n  float: left;\n  position: relative;\n  color: #fff;\n  margin-top: 25px;\n",
            ])),
        ),
        C = x.ZP.div(
          i ||
            (i = (0, a.default)([
              "\n  width: 60%;\n  float: left;\n  padding-right: 0;\n",
            ])),
        );
    },
    93983: function (n, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return x;
        },
      });
      var t,
        o,
        i,
        a,
        s = r(56824),
        c = r(30225),
        u = r(94404),
        l = r(14482),
        d = r(5189),
        _ = r(76431),
        f = r(84628),
        E = r(49318),
        h = (0, f.Jg)({
          connect: { props: [E.Z, ["isMobile", "translations"]] },
        }),
        p = r(30588),
        g = r(22247),
        R = r(31228),
        S = (function (n) {
          (0, l.default)(r, n);
          var e = (0, d.default)(r);
          function r() {
            return ((0, c.default)(this, r), e.apply(this, arguments));
          }
          return (
            (0, u.default)(r, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.page,
                    r = n.isMobile,
                    t = n.items,
                    o = n.margin,
                    i = (0, R.jsxs)("div", {
                      children: [(0, R.jsx)(P, {}), (0, R.jsx)(I, {})],
                    });
                  return (0, R.jsx)(A, {
                    margin: o,
                    children:
                      t &&
                      t.map(function (n) {
                        var t = n.key,
                          o = n.icon,
                          a = n.title,
                          s = n.onClick,
                          c = n.disabled,
                          u = n.link,
                          l = n.color,
                          d = n.hidden,
                          _ = n.notifications,
                          f = n.id;
                        return d
                          ? ""
                          : (0, R.jsxs)(
                              v,
                              {
                                active: e === t,
                                mobile: r,
                                color: l ? l + "!important" : void 0,
                                link: u,
                                children: [
                                  (0, R.jsx)(g.Lr, {
                                    id: f,
                                    icon: o,
                                    mobile: r,
                                    title: a,
                                    onClick: s,
                                    link: u,
                                    disabled: c,
                                    notifications: _,
                                  }),
                                  e === t && i,
                                ],
                              },
                              t,
                            );
                      }),
                  });
                },
              },
            ]),
            r
          );
        })(_.PureComponent),
        x = h(S),
        A = p.ZP.div(
          t || (t = (0, s.default)(["\n  margin: ", ";\n"])),
          function (n) {
            return n.margin;
          },
        ),
        v = p.ZP.div(
          o ||
            (o = (0, s.default)([
              "\n  position: relative;\n  height: 56px;\n  width: 100%;\n  cursor: pointer;\n\n  span.material-icons {\n    color: ",
              ";\n  }\n  \n  ",
              "\n\n  ",
              "\n\n  ",
              "\n\n",
              "\n",
            ])),
          function (n) {
            return n.color || "#007BC1";
          },
          function (n) {
            return (
              !n.mobile &&
              "\n    * {\n      color: "
                .concat(
                  n.color || "#FFF!important",
                  ";\n    }\n\n    span.material-icons {\n      color: ",
                )
                .concat(
                  n.color || "#FFF",
                  ";\n    }\n\n    > div:nth-child(1) {\n      padding-left: 10px;\n      z-index: 3;\n      position: absolute;\n      width: 100%;    \n      box-shadow: inset 0 -1px 0 0 rgba(253,253,253,0.1), 0 0 5px 0 rgba(81,141,197,0.1);\n      transition: background-color 0.1s ease-in-out;\n    }\n  ",
                )
            );
          },
          function (n) {
            return (
              n.mobile &&
              "\n    * {\n      color: ".concat(
                n.color || "#424E54",
                ";\n    }\n\n    > div:before {\n      content: '';      \n      position: absolute;\n      width: calc(100% + 16px);\n      height: 56px;\n      box-shadow: inset 0 -1px 0 0 rgba(114,126,132,0.1);\n    }\n  ",
              )
            );
          },
          function (n) {
            return (
              n.active &&
              !n.mobile &&
              "\n    > div:nth-child(1) {\n      position: relative;\n      background-color: #007BC1;\n      background: linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);\n      box-shadow: inset 0 -1px 0 0 rgba(253,253,253,0.1), 0 0 5px 0 rgba(81,141,197,0.1);\n    }\n  "
            );
          },
          function (n) {
            return (
              !n.active &&
              !n.mobile &&
              n.link &&
              "\n  &:hover > div:nth-child(1) {\n    background-color: #0074b8;\n  }\n"
            );
          },
        ),
        P = p.ZP.div(
          i ||
            (i = (0, s.default)([
              "\n  position: absolute;\n  height: 56px;\n  width: 100%;\n  background-color: #007bc1;\n  z-index: 2;\n  top: 0;\n  left: 0;\n",
            ])),
        ),
        I = p.ZP.div(
          a ||
            (a = (0, s.default)([
              "\n  position: absolute;\n  height: 10px;\n  width: calc(100% - 48px);\n  opacity: 0.4;\n  background-color: #0067c6;\n  box-shadow: 0 0 20px 0 #424e54;\n  bottom: 0;\n  right: 24px;\n  z-index: 1;\n",
            ])),
        );
    },
    23507: function (n, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return x;
        },
      });
      var t,
        o = r(56824),
        i = r(2845),
        a = r(30225),
        s = r(94404),
        c = r(14482),
        u = r(5189),
        l = r(76431),
        d = r(84628),
        _ = r(49318),
        f = (0, d.Jg)({
          connect: {
            props: [_.Z, ["isMobile", "translations", "configs"]],
            actions: [_.Z, ["push"]],
          },
        }),
        E = r(30588),
        h = r(48229),
        p = r(13795),
        g = r(93983),
        R = r(31228),
        S = (function (n) {
          (0, c.default)(r, n);
          var e = (0, u.default)(r);
          function r() {
            var n;
            (0, a.default)(this, r);
            for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
              o[i] = arguments[i];
            return (
              ((n = e.call.apply(e, [this].concat(o))).navigate = function (e) {
                (0, n.actions.push)(e);
              }),
              n
            );
          }
          return (
            (0, s.default)(r, [
              {
                key: "render",
                value: function () {
                  var n,
                    e = this,
                    r = this.props,
                    t = r.page,
                    o = r.translations,
                    a = r.configs.userType,
                    s = o.USERPROF_MENU_CHANGE_PASS,
                    c = o.USERPROF_MENU_CHANGE_LANG,
                    u = o.USERPROF_MENU_MYAPPS,
                    l = [
                      {
                        id: "ChangeLanguage",
                        key: "change-language",
                        icon: (0, R.jsx)(h.Z, { children: "language" }),
                        title: c,
                        link: !0,
                        onClick: function () {
                          return e.navigate("/user-profile/language/");
                        },
                      },
                      {
                        id: "MyApps",
                        key: "my-apps",
                        icon: (0, R.jsx)(h.Z, { children: "extension" }),
                        title: u,
                        link: !0,
                        onClick: function () {
                          return e.navigate("/user-profile/my-apps/");
                        },
                      },
                      {
                        id: "ChangePassword",
                        key: "change-password",
                        icon: (0, R.jsx)(h.Z, { children: "https" }),
                        title: s,
                        link: !0,
                        onClick: function () {
                          return e.navigate("/user-profile/change-password/", {
                            userType: a,
                          });
                        },
                      },
                    ],
                    d = [].concat(l),
                    _ = l,
                    f =
                      ((n = {}), (0, i.Z)(n, p.Df, d), (0, i.Z)(n, p.cC, _), n);
                  return (0, R.jsx)(A, {
                    children: (0, R.jsx)(g.Z, { items: f[a], page: t }),
                  });
                },
              },
            ]),
            r
          );
        })(l.PureComponent),
        x = f(S),
        A = E.ZP.div(t || (t = (0, o.default)(["\n\n"])));
    },
    19818: function (n, e, r) {
      "use strict";
      var t = r(87121),
        o = r(2845),
        i = r(84628),
        a = r(90012),
        s = r(83749),
        c = r(98278),
        u = r.n(c),
        l = r(49318);
      e.Z = (0, i.Jg)({
        path: function () {
          return ["scenes", "UserProfile"];
        },
        connect: {
          props: [l.Z, ["isMobile", "translations"]],
          actions: [l.Z, ["checkSetupStatus", "push"]],
        },
        reducers: function (n) {
          var e,
            r,
            t = n.actions;
          return {
            successMessage: [
              !1,
              u().bool,
              ((e = {}),
              (0, o.Z)(e, t.setChangesSaved, function (n, e) {
                return e;
              }),
              (0, o.Z)(e, t.reset, function () {
                return !1;
              }),
              e),
            ],
            showSuccessMessage: [
              !1,
              u().bool,
              ((r = {}),
              (0, o.Z)(r, t.setShowSuccessMessage, function (n, e) {
                return e;
              }),
              (0, o.Z)(r, t.reset, function () {
                return !1;
              }),
              r),
            ],
          };
        },
        actions: function () {
          return {
            reset: function () {
              return !0;
            },
            setChangesSaved: function (n) {
              return n;
            },
            setShowSuccessMessage: function (n) {
              return n;
            },
          };
        },
        start: (0, t.Z)().mark(function n() {
          var e, r, o, i, c;
          return (0, t.Z)().wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (0, a.log)("[XS-UserProfile] Start Scene ", "yellow"),
                      (n.next = 3),
                      this.get("showSuccessMessage")
                    );
                  case 3:
                    return (
                      (e = n.sent),
                      (r = this.actionCreators),
                      (o = r.checkSetupStatus),
                      (i = r.setShowSuccessMessage),
                      (c = r.setChangesSaved),
                      (n.next = 7),
                      (0, s.gz)(o())
                    );
                  case 7:
                    if (!e) {
                      n.next = 18;
                      break;
                    }
                    return ((n.next = 10), (0, s.gw)(100));
                  case 10:
                    return ((n.next = 12), (0, s.gz)(c(!0)));
                  case 12:
                    return ((n.next = 14), (0, s.gw)(2e3));
                  case 14:
                    return ((n.next = 16), (0, s.gz)(c(!1)));
                  case 16:
                    return ((n.next = 18), (0, s.gz)(i(!1)));
                  case 18:
                  case "end":
                    return n.stop();
                }
            },
            n,
            this,
          );
        }),
        stop: (0, t.Z)().mark(function n() {
          var e;
          return (0, t.Z)().wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (e = this.actionCreators.reset),
                      (n.next = 3),
                      (0, s.gz)(e())
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
      });
    },
    19571: function (n, e, r) {
      "use strict";
      (r.r(e),
        r.d(e, {
          UserProfileChangePass: function () {
            return y;
          },
          default: function () {
            return z;
          },
        }));
      var t,
        o = r(56824),
        i = r(30225),
        a = r(94404),
        s = r(14482),
        c = r(5189),
        u = r(76431),
        l = r(87121),
        d = r(2845),
        _ = r(84628),
        f = r(49745),
        E = r(83749),
        h = r(90012),
        p = r(42477),
        g = r(98278),
        R = r.n(g),
        S = r(13795),
        x = r(60326),
        A = r.n(x),
        v = r(49318),
        P = r(19818),
        I = r(2729),
        m = "".concat(S.CT, "/users/change_password"),
        w = {
          oldPwd: { value: "" },
          newPwd: { value: "" },
          confirmPwd: { value: "" },
          secret: { value: "" },
          confirmSecret: { value: "" },
        },
        C = { newPwd: [p.q9, p.uo], confirmNewPwd: [p.q9, p.uo] },
        N = {
          newPwd: [p.q9, p.uo],
          confirmNewPwd: [p.q9, p.uo],
          secret: [p.q9, p.GT],
          confirmSecret: [p.q9, p.GT],
        },
        T = N,
        Z = (0, _.Jg)({
          path: function () {
            return ["scenes", "UserProfileChangePass"];
          },
          connect: {
            props: [v.Z, ["isMobile", "translations", "user"]],
            actions: [
              v.Z,
              ["checkSetupStatus", "push"],
              P.Z,
              ["setShowSuccessMessage"],
            ],
          },
          actions: function () {
            return {
              change: function (n) {
                return { field: n };
              },
              changePassword: function () {
                return !0;
              },
              setForm: function (n) {
                return { form: n };
              },
              setError: function (n) {
                return n;
              },
              reset: function () {
                return !0;
              },
              setSuccessMessage: function (n) {
                return n;
              },
              setProfile: function (n) {
                return { profile: n };
              },
              updateProfile: !0,
            };
          },
          reducers: function (n) {
            var e,
              r,
              t,
              o,
              i,
              a = n.actions;
            return {
              form: [
                w,
                R().object,
                ((e = {}),
                (0, d.Z)(e, a.change, function (n, e) {
                  return p.jR(n, e, T);
                }),
                (0, d.Z)(e, a.setForm, function (n, e) {
                  return p.Yg(e.form, T).form;
                }),
                (0, d.Z)(e, a.reset, function () {
                  return w;
                }),
                e),
              ],
              dirty: [
                !1,
                R().bool,
                ((r = {}),
                (0, d.Z)(r, a.change, function () {
                  return !0;
                }),
                (0, d.Z)(r, a.setError, function () {
                  return !0;
                }),
                (0, d.Z)(r, a.reset, function () {
                  return !1;
                }),
                (0, d.Z)(r, a.changePassword, function () {
                  return !1;
                }),
                r),
              ],
              error: [
                null,
                R().string,
                ((t = {}),
                (0, d.Z)(t, a.setError, function (n, e) {
                  return e;
                }),
                (0, d.Z)(t, a.reset, function () {
                  return null;
                }),
                (0, d.Z)(t, a.change, function () {
                  return null;
                }),
                t),
              ],
              successMessage: [
                !1,
                R().bool,
                ((o = {}),
                (0, d.Z)(o, a.change, function () {
                  return !1;
                }),
                (0, d.Z)(o, a.setSuccessMessage, function (n, e) {
                  return e;
                }),
                (0, d.Z)(o, a.setError, function () {
                  return !1;
                }),
                (0, d.Z)(o, a.reset, function () {
                  return !1;
                }),
                o),
              ],
              loading: [
                !1,
                R().bool,
                ((i = {}),
                (0, d.Z)(i, a.reset, function () {
                  return !1;
                }),
                (0, d.Z)(i, a.changePassword, function () {
                  return !0;
                }),
                (0, d.Z)(i, a.setError, function () {
                  return !1;
                }),
                i),
              ],
              profile: [
                null,
                R().string,
                (0, d.Z)({}, a.setProfile, function (n, e) {
                  return e.profile;
                }),
              ],
            };
          },
          start: (0, l.Z)().mark(function n() {
            var e, r, t;
            return (0, l.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (0, h.log)(
                          "[XS-UserProfileChangePass] Start Scene ",
                          "yellow",
                        ),
                        (e = this.actionCreators),
                        (r = e.checkSetupStatus),
                        (t = e.updateProfile),
                        (n.next = 4),
                        (0, E.gz)(t())
                      );
                    case 4:
                      return ((n.next = 6), (0, E.gz)(r()));
                    case 6:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this,
            );
          }),
          stop: (0, l.Z)().mark(function n() {
            var e;
            return (0, l.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (e = this.actionCreators.reset),
                        (0, h.log)("[XS-UserProfileChangePass] Stop Scene "),
                        (n.next = 4),
                        (0, E.gz)(e())
                      );
                    case 4:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this,
            );
          }),
          takeLatest: function (n) {
            var e,
              r = n.actions,
              t = n.workers;
            return (
              (e = {}),
              (0, d.Z)(e, r.changePassword, t.changePassword),
              (0, d.Z)(e, r.updateProfile, t.updateProfile),
              e
            );
          },
          workers: {
            changePassword: (0, l.Z)().mark(function n() {
              var e, r, t, o, i, a, s, c, u, d, _, h, g, R, S, x, v;
              return (0, l.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (e = this.actionCreators),
                          (r = e.setError),
                          (t = e.setForm),
                          (o = e.reset),
                          (i = e.setSuccessMessage),
                          (a = e.setShowSuccessMessage),
                          (s = e.push),
                          (n.next = 3),
                          this.get("form")
                        );
                      case 3:
                        return ((c = n.sent), (n.next = 6), this.get("dirty"));
                      case 6:
                        return (
                          (u = n.sent),
                          (n.next = 9),
                          this.get("translations")
                        );
                      case 9:
                        return (
                          (d = n.sent),
                          (n.next = 12),
                          this.get("isMobile")
                        );
                      case 12:
                        if (
                          ((_ = n.sent), (h = p.Yg(c, T)), !u || !h.invalid)
                        ) {
                          n.next = 18;
                          break;
                        }
                        return (
                          (n.next = 17),
                          (0, E.gz)(r(d.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 17:
                      case 23:
                      case 27:
                      case 31:
                        return n.abrupt("return", !1);
                      case 18:
                        if (u || !h.invalid) {
                          n.next = 24;
                          break;
                        }
                        return ((n.next = 21), (0, E.gz)(t(h.form)));
                      case 21:
                        return (
                          (n.next = 23),
                          (0, E.gz)(r(d.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 24:
                        if (c.newPwd.value === c.confirmPwd.value) {
                          n.next = 28;
                          break;
                        }
                        return (
                          (n.next = 27),
                          (0, E.gz)(r(d.ERR_PWD_NOT_MATCH))
                        );
                      case 28:
                        if (c.secret.value === c.confirmSecret.value) {
                          n.next = 32;
                          break;
                        }
                        return (
                          (n.next = 31),
                          (0, E.gz)(r(d.ERR_EMAIL_NOT_MATCH))
                        );
                      case 32:
                        return ((n.next = 34), this.get("user"));
                      case 34:
                        return (
                          (g = n.sent),
                          ((R = A()(c, function (n) {
                            return n.value;
                          })).profile = g.profile),
                          delete R.confirmPwd,
                          delete R.confirmSecret,
                          "customer" == R.profile && (R.secret = "true"),
                          (n.prev = 40),
                          (n.next = 43),
                          (0, E.RE)(f.Z.post, m, R)
                        );
                      case 43:
                        return ((n.next = 45), (0, E.gz)(o()));
                      case 45:
                        if (!_) {
                          n.next = 52;
                          break;
                        }
                        return ((n.next = 48), (0, E.gz)(a(!0)));
                      case 48:
                        return ((n.next = 50), (0, E.gz)(s("/user-profile/")));
                      case 50:
                        n.next = 58;
                        break;
                      case 52:
                        return ((n.next = 54), (0, E.gz)(i(!0)));
                      case 54:
                        return ((n.next = 56), (0, E.gw)(5e3));
                      case 56:
                        return ((n.next = 58), (0, E.gz)(i(!1)));
                      case 58:
                        n.next = 68;
                        break;
                      case 60:
                        if (
                          ((n.prev = 60),
                          (n.t0 = n.catch(40)),
                          console.log(n.t0),
                          !n.t0.response)
                        ) {
                          n.next = 68;
                          break;
                        }
                        return (
                          (S = n.t0.response || {}),
                          (x = S.data),
                          (v = (0, I.Kw)(x.error.errCode)),
                          (n.next = 68),
                          (0, E.gz)(r(d[v]))
                        );
                      case 68:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this,
                [[40, 60]],
              );
            }),
            updateProfile: (0, l.Z)().mark(function n() {
              var e, r, t;
              return (0, l.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (e = this.actionCreators.setProfile),
                          (n.next = 3),
                          this.get("user")
                        );
                      case 3:
                        return (
                          (r = n.sent),
                          (t = "tech" === r.profile ? "technician" : "user"),
                          (T = t && "user" === t ? C : N),
                          (n.next = 8),
                          (0, E.gz)(e(t))
                        );
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
        b = r(48229),
        F = r(23507),
        O = r(36082),
        D = r(72768),
        L = r(89020),
        M = r(23513),
        k = r(30588),
        j = r(77835),
        U = r(22247),
        G = r(31228),
        y = (function (n) {
          (0, s.default)(r, n);
          var e = (0, c.default)(r);
          function r() {
            var n;
            (0, i.default)(this, r);
            for (var t = arguments.length, o = new Array(t), a = 0; a < t; a++)
              o[a] = arguments[a];
            return (
              ((n = e.call.apply(e, [this].concat(o))).navigate = function (e) {
                (0, n.actions.push)(e);
              }),
              n
            );
          }
          return (
            (0, a.default)(r, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    e = this.props,
                    r = e.loading,
                    t = e.isMobile,
                    o = e.form,
                    i = e.translations,
                    a = e.dirty,
                    s = e.successMessage,
                    c = e.error,
                    u = e.profile,
                    l = this.actions,
                    d = l.changePassword,
                    _ = l.reset,
                    f = l.change;
                  (0, l.updateProfile)();
                  var E = o || {},
                    h = E.oldPwd,
                    p = E.newPwd,
                    g = E.confirmPwd,
                    R = E.secret,
                    S = E.confirmSecret,
                    x = i.USERPROF_TITLE,
                    A = i.USERPROF_CHANGE_PASS_TITLE,
                    v = i.USERPROF_CHANGE_PASS_SAVE_BUTTON,
                    P = i.USERPROF_CHANGE_PASS_CANCEL_BUTTON,
                    I = i.USERPROF_CHANGE_PASS_CURRENT_PASS,
                    m = i.USERPROF_CHANGE_PASS_NEW_PASS,
                    w = i.USERPROF_CHANGE_PASS_CONFIRM_PASS,
                    C = i.USERPROF_CHANGE_PASS_SAVE_SUCCESS,
                    N = i.USERPROF_CHANGE_PASS_DETAILS,
                    T = i.USERPROF_CHANGE_PASS_SECRET,
                    Z = i.SETUP_FORM_CONFIRM_EMAIL,
                    k = (0, G.jsxs)(U.l0.Buttons, {
                      align: "right",
                      children: [
                        (0, G.jsx)(U.zx, {
                          id: "Button_Cancel",
                          buttonType: "primary-cancel",
                          margin: "0 12px",
                          buttonWidth: "163px",
                          onClick: _,
                          children: P,
                        }),
                        (0, G.jsx)(U.zx, {
                          id: "Button_Save",
                          margin: "0 12px",
                          buttonWidth: "163px",
                          onClick: d,
                          children: v,
                        }),
                      ],
                    });
                  return (0, G.jsx)("div", {
                    children: (0, G.jsx)(O.Z, {
                      loading: r,
                      title: x,
                      menu: (0, G.jsx)(F.Z, { page: "change-password" }),
                      onBack: function () {
                        return n.navigate("/user-profile/");
                      },
                      isForm: !0,
                      isDirty: a,
                      children: (0, G.jsxs)(U.e0, {
                        padding: !0,
                        mobile: t,
                        children: [
                          (0, G.jsx)(U.mV, {
                            out: !s,
                            mobile: t,
                            icon: (0, G.jsx)(b.Z, { children: "check" }),
                            message: C,
                          }),
                          (0, G.jsx)(U.V1, { mobile: t, children: A }),
                          t &&
                            (0, G.jsx)(U.Oj, {
                              id: "MobileActionButton_Save",
                              icon: (0, G.jsx)(b.Z, { children: "check" }),
                              onClick: d,
                              mobile: !0,
                              children: v,
                            }),
                          (0, G.jsxs)(U.l0, {
                            mobile: t,
                            buttons: k,
                            showButtons: !t,
                            containerHeight: t
                              ? "calc(100vh - 180px)"
                              : "calc(100vh - 350px)",
                            children: [
                              "technician" === u &&
                                (0, G.jsx)(B, {
                                  dangerouslySetInnerHTML: { __html: N },
                                  mobile: t ? 1 : 0,
                                }),
                              (0, G.jsx)(L.Z, { dirty: a, error: c, full: !1 }),
                              (0, G.jsxs)(U.l0.Row, {
                                children: [
                                  (0, G.jsx)(M.Z, {
                                    id: "CurrentPassword",
                                    type: "password",
                                    label: I,
                                    value: h.value,
                                    error: a && !h.valid,
                                    onChange: function (n) {
                                      var e = n.target;
                                      return f({ oldPwd: e.value });
                                    },
                                  }),
                                  (0, G.jsx)(D.Z, {
                                    id: "CurrentPassword",
                                    showError: a && !h.valid,
                                    errorMessage: h.message,
                                  }),
                                ],
                              }),
                              (0, G.jsxs)(U.l0.Row, {
                                children: [
                                  (0, G.jsx)(M.Z, {
                                    type: "password",
                                    label: m,
                                    value: p.value,
                                    error: a && !p.valid,
                                    onChange: function (n) {
                                      var e = n.target;
                                      return f({ newPwd: e.value });
                                    },
                                  }),
                                  (0, G.jsx)(D.Z, {
                                    id: "NewPassword",
                                    showError: a && !p.valid,
                                    errorMessage: p.message,
                                  }),
                                ],
                              }),
                              (0, G.jsxs)(U.l0.Row, {
                                children: [
                                  (0, G.jsx)(M.Z, {
                                    id: "confirmPwdword",
                                    type: "password",
                                    label: w,
                                    value: g.value,
                                    error: a && !g.valid,
                                    onChange: function (n) {
                                      var e = n.target;
                                      return f({ confirmPwd: e.value });
                                    },
                                  }),
                                  (0, G.jsx)(D.Z, {
                                    id: "confirmPwdword",
                                    showError: a && !g.valid,
                                    errorMessage: g.message,
                                  }),
                                ],
                              }),
                              "technician" === u &&
                                (0, G.jsxs)(G.Fragment, {
                                  children: [
                                    (0, G.jsxs)(U.l0.Row, {
                                      children: [
                                        (0, G.jsx)(M.Z, {
                                          id: "Secret",
                                          label: T,
                                          value: R.value,
                                          error: a && !R.valid,
                                          onChange: function (n) {
                                            var e = n.target;
                                            return f({ secret: e.value });
                                          },
                                        }),
                                        (0, G.jsx)(D.Z, {
                                          id: "Secret",
                                          showError: a && !R.valid,
                                          errorMessage: R.message,
                                        }),
                                      ],
                                    }),
                                    (0, G.jsxs)(U.l0.Row, {
                                      children: [
                                        (0, G.jsx)(M.Z, {
                                          id: "ConfirmSecret",
                                          label: Z,
                                          value: S.value,
                                          error: a && !S.valid,
                                          onChange: function (n) {
                                            var e = n.target;
                                            return f({
                                              confirmSecret: e.value,
                                            });
                                          },
                                        }),
                                        (0, G.jsx)(D.Z, {
                                          id: "ConfirmSecret",
                                          showError: a && !S.valid,
                                          errorMessage: S.message,
                                        }),
                                      ],
                                    }),
                                  ],
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
            r
          );
        })(u.Component),
        z = Z(y),
        B = (0, k.ZP)(j.Z)(
          t ||
            (t = (0, o.default)([
              '\n  color: #727e84 !important;\n  font-family: "Open Sans";\n  font-size: 10px !important;\n  font-weight: lighter;\n  line-height: 20px !important;\n  margin: 0 auto;\n  margin-bottom: 20px;\n\n  ',
              "\n\n  ",
              "\n",
            ])),
          function (n) {
            return (
              !n.mobile &&
              "\n    padding-left: 20%;\n    padding-right: 20%;\n  "
            );
          },
          function (n) {
            return (
              n.mobile && "\n    padding-left: 5%;\n    padding-right: 5%;\n  "
            );
          },
        );
    },
    60326: function (n, e, r) {
      var t = r(7278),
        o = r(31709),
        i = r(61490);
      n.exports = function (n, e) {
        var r = {};
        return (
          (e = i(e, 3)),
          o(n, function (n, o, i) {
            t(r, o, e(n, o, i));
          }),
          r
        );
      };
    },
  },
]);
//# sourceMappingURL=9571.9413e92b.chunk.js.map
