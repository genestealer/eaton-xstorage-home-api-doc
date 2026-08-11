"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [9350],
  {
    2729: function (e, n, t) {
      t.d(n, {
        Kw: function () {
          return o;
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
        o = function (e) {
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
        a = function (e) {
          return e ? i["code".concat(e.code)] : "UNEXPECTED_ERROR";
        };
    },
    76948: function (e, n, t) {
      t.d(n, {
        ET: function () {
          return f;
        },
        HH: function () {
          return _;
        },
        UD: function () {
          return d;
        },
        YV: function () {
          return s;
        },
        eQ: function () {
          return u;
        },
        eT: function () {
          return l;
        },
        lJ: function () {
          return E;
        },
        wS: function () {
          return a;
        },
        x_: function () {
          return c;
        },
      });
      var r = t(94467),
        o = t.n(r),
        i = t(90012),
        a = {
          SET_CHARGE: ["power", "soc"],
          SET_DISCHARGE: ["power", "soc"],
          SET_BASIC_MODE: [],
          SET_MAXIMIZE_AUTO_CONSUMPTION: [],
          SET_VARIABLE_GRID_INJECTION: ["maximumPower"],
          SET_FREQUENCY_REGULATION: ["powerAllocation", "optimalSoc"],
          SET_PEAK_SHAVING: ["maxHousePeakConsumption"],
        },
        c = "SET_BASIC_MODE",
        s = "SET_VARIABLE_GRID_INJECTION",
        u = function (e) {
          if (!e) return {};
          if (-1 !== ["SET_CHARGE", "SET_DISCHARGE"].indexOf(e.command))
            ((e.parameters.action =
              "SET_CHARGE" === e.command
                ? "ACTION_CHARGE"
                : "ACTION_DISCHARGE"),
              (e.command = "SET_CHARGE"));
          else if ("SET_PEAK_SHAVING" === e.command) {
            var n = parseInt(e.parameters.maxHousePeakConsumption);
            e.parameters.maxHousePeakConsumption = n;
          }
          return e;
        },
        _ = function (e) {
          return (
            e &&
              "SET_CHARGE" === e.command &&
              (e.command =
                "ACTION_CHARGE" === e.action ? "SET_CHARGE" : "SET_DISCHARGE"),
            e
          );
        },
        E = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          if (!n || "" === n || !e) return null;
          var r = t && Object.keys(t).length > 0;
          return (
            "SET_CHARGE" === n &&
              r &&
              (n =
                "ACTION_CHARGE" === t.action ? "SET_CHARGE" : "SET_DISCHARGE"),
            e["OPERATION_MODE_".concat(n)]
          );
        },
        f = function (e) {
          return -1 !==
            ["soc", "power", "powerAllocation", "optimalSoc"].indexOf(e)
            ? "%"
            : -1 !== ["maximumPower"].indexOf(e)
              ? "W"
              : "";
        },
        l = function (e) {
          var n = "",
            t = 0;
          if (e) {
            var r = ""
                .concat(o()().format("MM-DD-YYYY"), " ")
                .concat((0, i.convertFromMilitaryTime)(e)),
              a = o()().format("MM-DD-YYYY HH:mm"),
              c = o()(r, "MM-DD-YYYY HH:mm").unix(),
              s = o()(a, "MM-DD-YYYY HH:mm").unix();
            (c < s &&
              ((r = ""
                .concat(o()().add(1, "day").format("MM-DD-YYYY"), " ")
                .concat((0, i.convertFromMilitaryTime)(e))),
              (c = o()(r, "MM-DD-YYYY HH:mm").unix())),
              (t = c - s),
              (t = Math.round(t / 60)));
            var u = Math.floor(t / 60),
              _ = t % 60;
            n = "".concat(u, "h").concat(_, "m");
          }
          return { left: t, label: n };
        },
        d = function (e, n) {
          if (!e || !n) return !1;
          var t = a[e.command],
            r = !1;
          return (
            n.command.value === e.command &&
              t.length > 0 &&
              ((r = !0),
              t.forEach(function (t) {
                n[t].value !== e.parameters[t] && (r = !1);
              })),
            r
          );
        };
    },
    93874: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return S;
        },
      });
      var r = t(30225),
        o = t(94404),
        i = t(14482),
        a = t(5189),
        c = t(76431),
        s = t(87121),
        u = t(2845),
        _ = t(84628),
        E = t(83749),
        f = t(98278),
        l = t.n(f),
        d = t(49318),
        m = (0, _.Jg)({
          path: function () {
            return ["scenes", "containers", "PageAdaptable"];
          },
          connect: {
            props: [d.Z, ["isMobile", "translations"]],
            actions: [d.Z, ["push"]],
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
              t = e.actions;
            return {
              confirmationModal: [
                !1,
                l().bool,
                ((n = {}),
                (0, u.Z)(n, t.showConfirmationModal, function () {
                  return !0;
                }),
                (0, u.Z)(n, t.hideConfirmationModal, function () {
                  return !1;
                }),
                n),
              ],
              nextLocation: [
                {},
                l().object,
                (0, u.Z)({}, t.showConfirmationModal, function (e, n) {
                  return n.location;
                }),
              ],
            };
          },
          stop: (0, s.Z)().mark(function e() {
            var n;
            return (0, s.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators.hideConfirmationModal),
                        (e.next = 3),
                        (0, E.gz)(n())
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
              t = e.workers;
            return (0, u.Z)(
              {},
              n.handleConfirmNavigationClick,
              t.handleConfirmNavigationClick,
            );
          },
          workers: {
            handleConfirmNavigationClick: (0, s.Z)().mark(function e() {
              var n, t, r, o;
              return (0, s.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (t = n.hideConfirmationModal),
                          (r = n.push),
                          (e.next = 3),
                          this.get("nextLocation")
                        );
                      case 3:
                        return ((o = e.sent), (e.next = 6), (0, E.gz)(t()));
                      case 6:
                        return ((e.next = 8), (0, E.gz)(r(o)));
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
        R = t(22247),
        I = t(31228),
        A = (function (e) {
          (0, i.default)(t, e);
          var n = (0, a.default)(t);
          function t() {
            var e;
            (0, r.default)(this, t);
            for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
              i[a] = arguments[a];
            return (
              ((e = n.call.apply(n, [this].concat(i))).first = !0),
              (e.handleBlockedNavigation = function (n) {
                var t = e.props,
                  r = t.isForm,
                  o = t.isDirty,
                  i = e.actions.showConfirmationModal;
                return !(r && o && e.first) || ((e.first = !1), i(n), !1);
              }),
              e
            );
          }
          return (
            (0, o.default)(t, [
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
                    t = n.isMobile,
                    r = n.onBack,
                    o = n.translations,
                    i = n.confirmationModal,
                    a = n.isForm,
                    c = n.isDirty,
                    s = n.pageTitle,
                    u = n.actionButtonIcon,
                    _ = n.actionButtonTitle,
                    E = n.actionButtonClick,
                    f = n.isTechnician,
                    l = this.actions,
                    d = l.showConfirmationModal,
                    m = l.hideConfirmationModal,
                    A = l.handleConfirmNavigationClick,
                    S = o.GENERAL_CANCEL,
                    g = o.GENERAL_CONTINUE,
                    T = o.BACK_BUTTON_MODAL_TEXT,
                    h = o.BACK_BUTTON_MODAL_TITLE;
                  return t
                    ? (0, I.jsxs)(I.Fragment, {
                        children: [
                          (0, I.jsx)(R.SS, {
                            backArrowClick: a && c ? d : r,
                            pageTitle: s,
                            actionButtonIcon: u,
                            actionButtonTitle: _,
                            actionButtonClick: E,
                            isTechnician: f,
                          }),
                          (0, I.jsx)(R.u_, {
                            size: "small",
                            open: i,
                            children: (0, I.jsxs)("div", {
                              children: [
                                (0, I.jsx)(R.xB, { title: h }),
                                (0, I.jsx)(R.hz, {
                                  padding: !0,
                                  size: "small",
                                  mobile: t,
                                  children: (0, I.jsx)(R.ZT, { children: T }),
                                }),
                                (0, I.jsxs)(R.Zf, {
                                  children: [
                                    (0, I.jsx)(R.zx, {
                                      id: "Button_Cancel",
                                      buttonType: "primary-cancel",
                                      margin: "0 12px",
                                      buttonWidth: "156px",
                                      onClick: function () {
                                        ((e.first = !0), m());
                                      },
                                      children: S,
                                    }),
                                    (0, I.jsx)(R.zx, {
                                      id: "Button_Continue",
                                      margin: "0 12px",
                                      buttonWidth: "156px",
                                      onClick: function (e) {
                                        t ? (m(), r(e)) : A(e);
                                      },
                                      children: g,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      })
                    : (0, I.jsx)(I.Fragment, {});
                },
              },
            ]),
            t
          );
        })(c.Component),
        S = m(A);
    },
    20054: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      });
      var r = t(31105),
        o = t(87121),
        i = t(2845),
        a = t(84628),
        c = t(49745),
        s = t(98278),
        u = t.n(s),
        _ = t(83749),
        E = t(21649),
        f = t(13795),
        l = t(90012),
        d = t(76948),
        m = t(30375),
        R = t(2729),
        I = t(42477),
        A = t(49318),
        S = {
          name: { value: "" },
          updateBlockedState: { value: !1 },
          country: { value: "" },
          countryName: { value: "" },
          timezone: { value: "" },
          timezoneName: { value: "" },
          cityName: { value: "" },
          city: { value: "" },
          postalCode: { value: "" },
          bmsBackupLevel: { value: 0 },
          command: { value: d.x_ },
          soc: { value: 0 },
          power: { value: 0 },
          maximumPower: { value: 0 },
          powerAllocation: { value: 0 },
          optimalSoc: { value: 0 },
          maxHousePeakConsumption: { value: 0 },
          showEnergySaving: { value: !1 },
          energySavingMode: { value: !1 },
          houseConsumptionThreshold: { value: 300 },
        },
        g = {
          name: [I.q9],
          country: [I.q9],
          city: [I.q9],
          defaultMode: [I.q9],
          bmsBackupLevel: [
            function (e, n) {
              return (
                (e = parseInt(e)),
                !(0, E.isInteger)(e) || e < 0 || e > 100
                  ? { result: !1, message: "UNITSETT_GENERAL_FORMVAL_BATLEVEL" }
                  : { result: !0 }
              );
            },
          ],
          houseConsumptionThreshold: [
            function (e, n) {
              var t = (n || {}).energySavingMode;
              return (
                (e = parseInt(e)),
                !(0, E.isInteger)(e) || (t && t.value && (e < 300 || e > 1e3))
                  ? {
                      result: !1,
                      message:
                        "UNITSETT_GENERAL_HOUSE_THRESH_VALID_VALUE_ERROR",
                    }
                  : { result: !0 }
              );
            },
          ],
        },
        T = "".concat(f.CT, "/settings/"),
        h = "".concat(f.CT, "/geo/country"),
        v = "".concat(f.CT, "/geo/country/{country}/city"),
        C = "".concat(f.CT, "/settings/time/timezones"),
        p = (0, a.Jg)({
          path: function () {
            return ["scenes", "DeviceGeneralSettings"];
          },
          connect: {
            props: [
              A.Z,
              [
                "isMobile",
                "translations",
                "currentDevice",
                "userRole",
                "countryDevice",
                "batteryReadyMode",
              ],
            ],
            actions: [A.Z, ["checkSetupStatus", "push"]],
          },
          actions: function () {
            return {
              fetchDeviceInfo: function (e) {
                return { noLoader: e.noLoader };
              },
              setDeviceInfo: function (e) {
                return { info: e };
              },
              change: function (e) {
                return { field: e };
              },
              submit: function () {
                return !0;
              },
              response: function (e) {
                return { response: e };
              },
              setError: function (e) {
                return e;
              },
              setForm: function (e) {
                return { form: e };
              },
              cacheForm: function (e) {
                return { form: e };
              },
              reset: function () {
                return !0;
              },
              setSuccessMessage: function (e) {
                return e;
              },
              getTimezones: function () {
                return !0;
              },
              setTimezones: function (e) {
                return { timezones: e };
              },
              getCountries: function () {
                return !0;
              },
              setCountries: function (e) {
                return { countries: e };
              },
              getCities: function () {
                return !0;
              },
              setCities: function (e) {
                return { cities: e };
              },
              toggleMore: function () {
                return !0;
              },
              setFixNavbar: function (e) {
                return { fix: e };
              },
              setLoading: function (e) {
                return e;
              },
              revertChanges: !0,
            };
          },
          reducers: function (e) {
            var n,
              t,
              r,
              o,
              a,
              c,
              s,
              _,
              E,
              f,
              l,
              d = e.actions;
            return {
              deviceInfo: [
                {},
                u().object,
                ((n = {}),
                (0, i.Z)(n, d.setDeviceInfo, function (e, n) {
                  return n.info;
                }),
                (0, i.Z)(n, d.reset, function () {
                  return {};
                }),
                n),
              ],
              form: [
                S,
                u().object,
                ((t = {}),
                (0, i.Z)(t, d.change, function (e, n) {
                  return I.jR(e, n, g);
                }),
                (0, i.Z)(t, d.setForm, function (e, n) {
                  return I.Yg(n.form, g).form;
                }),
                (0, i.Z)(t, d.reset, function () {
                  return S;
                }),
                t),
              ],
              dirty: [
                !1,
                u().bool,
                ((r = {}),
                (0, i.Z)(r, d.change, function () {
                  return !0;
                }),
                (0, i.Z)(r, d.setError, function () {
                  return !0;
                }),
                (0, i.Z)(r, d.reset, function () {
                  return !1;
                }),
                (0, i.Z)(r, d.submit, function () {
                  return !1;
                }),
                (0, i.Z)(r, d.revertChanges, function () {
                  return !1;
                }),
                r),
              ],
              loading: [
                !0,
                u().bool,
                ((o = {}),
                (0, i.Z)(o, d.setForm, function () {
                  return !1;
                }),
                (0, i.Z)(o, d.setError, function () {
                  return !1;
                }),
                (0, i.Z)(o, d.reset, function () {
                  return !0;
                }),
                (0, i.Z)(o, d.fetchDeviceInfo, function (e, n) {
                  return !n.noLoader;
                }),
                (0, i.Z)(o, d.submit, function () {
                  return !0;
                }),
                (0, i.Z)(o, d.setLoading, function (e, n) {
                  return n;
                }),
                o),
              ],
              more: [
                !1,
                u().bool,
                ((a = {}),
                (0, i.Z)(a, d.submit, function () {
                  return !0;
                }),
                (0, i.Z)(a, d.toggleMore, function (e) {
                  return !e;
                }),
                (0, i.Z)(a, d.reset, function () {
                  return !1;
                }),
                a),
              ],
              error: [
                null,
                u().string,
                ((c = {}),
                (0, i.Z)(c, d.setError, function (e, n) {
                  return n;
                }),
                (0, i.Z)(c, d.reset, function () {
                  return null;
                }),
                (0, i.Z)(c, d.submit, function () {
                  return null;
                }),
                (0, i.Z)(c, d.change, function () {
                  return null;
                }),
                c),
              ],
              timezones: [
                [],
                u().array,
                ((s = {}),
                (0, i.Z)(s, d.setTimezones, function (e, n) {
                  return n.timezones;
                }),
                (0, i.Z)(s, d.reset, function () {
                  return [];
                }),
                s),
              ],
              countries: [
                [],
                u().array,
                ((_ = {}),
                (0, i.Z)(_, d.setCountries, function (e, n) {
                  return n.countries;
                }),
                (0, i.Z)(_, d.reset, function () {
                  return [];
                }),
                _),
              ],
              cities: [
                [],
                u().array,
                ((E = {}),
                (0, i.Z)(E, d.setCities, function (e, n) {
                  return n.cities;
                }),
                (0, i.Z)(E, d.reset, function () {
                  return [];
                }),
                E),
              ],
              successMessage: [
                !1,
                u().bool,
                ((f = {}),
                (0, i.Z)(f, d.change, function () {
                  return !1;
                }),
                (0, i.Z)(f, d.setSuccessMessage, function (e, n) {
                  return n;
                }),
                (0, i.Z)(f, d.setError, function () {
                  return !1;
                }),
                (0, i.Z)(f, d.reset, function () {
                  return !1;
                }),
                f),
              ],
              fixNavbar: [
                !1,
                u().bool,
                ((l = {}),
                (0, i.Z)(l, d.setFixNavbar, function (e, n) {
                  return n.fix;
                }),
                (0, i.Z)(l, d.reset, function () {
                  return !1;
                }),
                l),
              ],
              formContent: [
                S,
                u().object,
                (0, i.Z)({}, d.cacheForm, function (e, n) {
                  return n.form;
                }),
              ],
            };
          },
          selectors: function (e) {
            var n = e.selectors;
            return {
              userCanEdit: [
                function () {
                  return [n.userRole];
                },
                function (e) {
                  return (0, m.m)("EDIT_UNIT_SETTINGS", e);
                },
                u().bool,
              ],
              userCanEditOpMode: [
                function () {
                  return [n.userRole];
                },
                function (e) {
                  return (0, m.m)("EDIT_UNIT_DEFAULT_OPERATION_MODE", e);
                },
                u().bool,
              ],
              userIsTechnician: [
                function () {
                  return [n.userRole];
                },
                function (e) {
                  return (0, m.m)("EDIT_BLOCK_STATUS", e);
                },
                u().bool,
              ],
            };
          },
          start: (0, o.Z)().mark(function e() {
            var n, t, r, i, a, c;
            return (0, o.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators),
                        (t = n.fetchDeviceInfo),
                        (r = n.setForm),
                        (i = n.checkSetupStatus),
                        (0, l.log)(
                          "[XS-DeviceGeneralSettings] Start scene",
                          "yellow",
                        ),
                        (e.next = 4),
                        (0, _.gz)(i())
                      );
                    case 4:
                      return ((e.next = 6), this.get("countryDevice"));
                    case 6:
                      return ((a = e.sent), (e.next = 9), this.get("form"));
                    case 9:
                      if (((c = e.sent), a !== f.zN)) {
                        e.next = 14;
                        break;
                      }
                      return (
                        (c.command.value = d.YV),
                        (e.next = 14),
                        (0, _.gz)(r(c))
                      );
                    case 14:
                      return ((e.next = 16), (0, _.gz)(t({ noLoader: !1 })));
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
            );
          }),
          stop: (0, o.Z)().mark(function e() {
            var n;
            return (0, o.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators.reset),
                        (0, l.log)("[XS-DeviceGeneralSettings] Stop scene"),
                        (e.next = 4),
                        (0, _.gz)(n())
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
            var n,
              t = e.actions,
              r = e.workers;
            return (
              (n = {}),
              (0, i.Z)(n, t.submit, r.submit),
              (0, i.Z)(n, t.fetchDeviceInfo, r.fetchDeviceSettings),
              (0, i.Z)(n, t.getTimezones, r.getTimezones),
              (0, i.Z)(n, t.getCountries, r.getCountries),
              (0, i.Z)(n, t.getCities, r.getCities),
              (0, i.Z)(n, t.revertChanges, r.revertChanges),
              n
            );
          },
          workers: {
            submit: (0, o.Z)().mark(function e() {
              var n,
                t,
                r,
                i,
                a,
                s,
                u,
                f,
                m,
                A,
                S,
                h,
                v,
                C,
                p,
                N,
                D,
                x,
                L,
                O,
                F,
                M,
                Z;
              return (0, o.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (t = n.setError),
                          (r = n.setForm),
                          (i = n.setSuccessMessage),
                          (a = n.setLoading),
                          (s = n.cacheForm),
                          (e.next = 3),
                          this.get("form")
                        );
                      case 3:
                        return ((u = e.sent), (e.next = 6), this.get("dirty"));
                      case 6:
                        return (
                          (f = e.sent),
                          (e.next = 9),
                          this.get("translations")
                        );
                      case 9:
                        return (
                          (m = e.sent),
                          (e.next = 12),
                          this.get("userCanEdit")
                        );
                      case 12:
                        return (
                          (A = e.sent),
                          (e.next = 15),
                          this.get("userCanEditOpMode")
                        );
                      case 15:
                        if (
                          ((S = e.sent),
                          (h = A ? g : {}),
                          (v = I.Yg(u, h)),
                          !f || !v.invalid)
                        ) {
                          e.next = 23;
                          break;
                        }
                        return (
                          (0, l.scrollToFirstFormError)(
                            v.form,
                            "GeneralSettingsForm",
                          ),
                          (e.next = 22),
                          (0, _.gz)(t(m.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 22:
                      case 29:
                        return e.abrupt("return", !1);
                      case 23:
                        if (f || !v.invalid) {
                          e.next = 30;
                          break;
                        }
                        return (
                          (0, l.scrollToFirstFormError)(
                            v.form,
                            "GeneralSettingsForm",
                          ),
                          (e.next = 27),
                          (0, _.gz)(r(v.form))
                        );
                      case 27:
                        return (
                          (e.next = 29),
                          (0, _.gz)(t(m.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 30:
                        return (
                          (C = (0, E.mapValues)(u, function (e) {
                            return e.value;
                          })),
                          (p = (0, E.pick)(C, [
                            "name",
                            "country",
                            "timezone",
                            "city",
                            "postalCode",
                            "bmsBackupLevel",
                            "updateBlockedState",
                          ])),
                          ((N = {}).command = C.command),
                          (N.parameters = (0, E.pick)(C, d.wS[C.command])),
                          (N = (0, d.eQ)(N)),
                          (p.defaultMode = N),
                          (p.bmsBackupLevel = parseInt(p.bmsBackupLevel)),
                          C.showEnergySaving &&
                            (p.energySavingMode = {
                              enabled: C.energySavingMode,
                              houseConsumptionThreshold: Number(
                                C.houseConsumptionThreshold,
                              ),
                            }),
                          (e.prev = 39),
                          (e.next = 42),
                          this.get("currentDevice")
                        );
                      case 42:
                        return (
                          (D = e.sent),
                          (x = {}),
                          A
                            ? (x.settings = p)
                            : S && (x.condensed = { defaultMode: N }),
                          (L = (0, l.generateUrl)(T, { id: D.id })),
                          (e.next = 48),
                          (0, _.RE)(c.Z.put, L, x)
                        );
                      case 48:
                        if (((O = e.sent), !O.data.successful)) {
                          e.next = 61;
                          break;
                        }
                        return ((e.next = 53), (0, _.gz)(a(!1)));
                      case 53:
                        return ((e.next = 55), (0, _.gz)(i(!0)));
                      case 55:
                        return ((e.next = 57), (0, _.gz)(s(u)));
                      case 57:
                        return ((e.next = 59), (0, _.gw)(5e3));
                      case 59:
                        return ((e.next = 61), (0, _.gz)(i(!1)));
                      case 61:
                      case 71:
                        e.next = 75;
                        break;
                      case 63:
                        if (
                          ((e.prev = 63), (e.t0 = e.catch(39)), !e.t0.response)
                        ) {
                          e.next = 73;
                          break;
                        }
                        return (
                          (F = e.t0.response),
                          (M = F.data.message),
                          (Z = M ? (0, R.Kw)(M) : (0, R.Kw)(p.error.errCode)),
                          (e.next = 71),
                          (0, _.gz)(t(m[Z]))
                        );
                      case 73:
                        return (
                          (e.next = 75),
                          (0, _.gz)(t(m.UNEXPECTED_ERROR_SAVE_FORM))
                        );
                      case 75:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[39, 63]],
              );
            }),
            fetchDeviceSettings: (0, o.Z)().mark(function e(n) {
              var t, i, a, s, u, E, m, R, I, A, g, h, v, C, p;
              return (0, o.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (i = t.setForm),
                          (a = t.setDeviceInfo),
                          (s = t.fetchDeviceInfo),
                          (u = t.cacheForm),
                          (e.next = 3),
                          this.get("dirty")
                        );
                      case 3:
                        return (
                          (E = e.sent),
                          (e.prev = 4),
                          (e.next = 7),
                          this.get("currentDevice")
                        );
                      case 7:
                        return (
                          (m = e.sent),
                          (R = (0, l.generateUrl)(T, { id: m.id })),
                          (e.next = 11),
                          (0, _.RE)(c.Z.get, R)
                        );
                      case 11:
                        if (
                          ((I = e.sent),
                          (A = I.data),
                          (g = A.result),
                          !A.successful)
                        ) {
                          e.next = 33;
                          break;
                        }
                        return ((e.next = 17), (0, _.gz)(a(g)));
                      case 17:
                        if (E) {
                          e.next = 33;
                          break;
                        }
                        return (
                          (h = g.defaultMode),
                          (v = g),
                          h &&
                            ((v = (0, r.default)(
                              (0, r.default)({}, v),
                              {},
                              { command: h.command },
                              h.parameters,
                            )),
                            (v = (0, d.HH)(v))),
                          (v.cityName = v.city && v.city.name),
                          (v.countryName = v.country && v.country.name),
                          (v.timezoneName = v.timezone && v.timezone.name),
                          (v.city = v.city && v.city.geonameId),
                          (v.country = v.country && v.country.geonameId),
                          (v.timezone = v.timezone && v.timezone.id),
                          v.energySavingMode &&
                            ((v.showEnergySaving =
                              Object.keys(v.energySavingMode).length > 0),
                            (v.houseConsumptionThreshold =
                              v.energySavingMode.houseConsumptionThreshold),
                            (v.energySavingMode = v.energySavingMode.enabled)),
                          (C = (0, l.getFormValues)(S, v)),
                          (e.next = 31),
                          (0, _.gz)(i(C))
                        );
                      case 31:
                        return ((e.next = 33), (0, _.gz)(u(C)));
                      case 33:
                        e.next = 38;
                        break;
                      case 35:
                        ((e.prev = 35), (e.t0 = e.catch(4)), console.log(e.t0));
                      case 38:
                        return ((p = f.bd), (e.next = 41), (0, _.gw)(p));
                      case 41:
                        return ((e.next = 43), (0, _.gz)(s({ noLoader: !0 })));
                      case 43:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[4, 35]],
              );
            }),
            revertChanges: (0, o.Z)().mark(function e() {
              var n;
              return (0, o.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return ((e.next = 2), this.get("formContent"));
                      case 2:
                        return (
                          (n = e.sent),
                          (e.next = 5),
                          (0, _.gz)(this.actionCreators.setForm(n))
                        );
                      case 5:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
            getTimezones: (0, o.Z)().mark(function e() {
              var n, t, r, i;
              return (0, o.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators.setTimezones),
                          (e.prev = 1),
                          (e.next = 4),
                          (0, _.RE)(c.Z.get, C)
                        );
                      case 4:
                        return (
                          (t = e.sent),
                          (r = t.data.result),
                          (i = (0, E.orderBy)(r.results, ["name"], ["asc"])),
                          (e.next = 9),
                          (0, _.gz)(n(i))
                        );
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
            getCountries: (0, o.Z)().mark(function e() {
              var n, t, r, i, a;
              return (0, o.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators.setCountries),
                          (e.prev = 1),
                          (t = { size: 0 }),
                          (e.next = 5),
                          (0, _.RE)(c.Z.get, h, { params: t })
                        );
                      case 5:
                        return (
                          (r = e.sent),
                          (i = r.data.result),
                          (a = (0, E.orderBy)(i.results, ["name"], ["asc"])),
                          (e.next = 10),
                          (0, _.gz)(n(a))
                        );
                      case 10:
                        e.next = 15;
                        break;
                      case 12:
                        ((e.prev = 12), (e.t0 = e.catch(1)), console.log(e.t0));
                      case 15:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[1, 12]],
              );
            }),
            getCities: (0, o.Z)().mark(function e() {
              var n, t, r, i, a, s, u;
              return (0, o.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators.setCities),
                          (e.prev = 1),
                          (e.next = 4),
                          this.get("form")
                        );
                      case 4:
                        return (
                          (t = e.sent),
                          (r = t.country),
                          (i = (0, l.generateUrl)(v, { country: r.value })),
                          (e.next = 9),
                          (0, _.RE)(c.Z.get, i)
                        );
                      case 9:
                        if (((a = e.sent), !(s = a.data.result))) {
                          e.next = 15;
                          break;
                        }
                        return (
                          (u = (0, E.orderBy)(s.results, ["name"], ["asc"])),
                          (e.next = 15),
                          (0, _.gz)(n(u))
                        );
                      case 15:
                        e.next = 20;
                        break;
                      case 17:
                        ((e.prev = 17), (e.t0 = e.catch(1)), console.log(e.t0));
                      case 20:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[1, 17]],
              );
            }),
          },
        });
    },
  },
]);
//# sourceMappingURL=9350.d12bbf51.chunk.js.map
