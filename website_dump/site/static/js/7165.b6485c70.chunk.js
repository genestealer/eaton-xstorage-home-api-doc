"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [7165],
  {
    2729: function (e, t, n) {
      n.d(t, {
        Kw: function () {
          return a;
        },
        pG: function () {
          return i;
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
        a = function (e) {
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
        i = function (e) {
          return e ? o["code".concat(e.code)] : "UNEXPECTED_ERROR";
        };
    },
    93983: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      });
      var r,
        a,
        o,
        i,
        l = n(56824),
        s = n(30225),
        c = n(94404),
        d = n(14482),
        u = n(5189),
        f = n(76431),
        p = n(84628),
        h = n(49318),
        x = (0, p.Jg)({
          connect: { props: [h.Z, ["isMobile", "translations"]] },
        }),
        m = n(30588),
        g = n(22247),
        v = n(31228),
        _ = (function (e) {
          (0, d.default)(n, e);
          var t = (0, u.default)(n);
          function n() {
            return ((0, s.default)(this, n), t.apply(this, arguments));
          }
          return (
            (0, c.default)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.page,
                    n = e.isMobile,
                    r = e.items,
                    a = e.margin,
                    o = (0, v.jsxs)("div", {
                      children: [(0, v.jsx)(A, {}), (0, v.jsx)(T, {})],
                    });
                  return (0, v.jsx)(C, {
                    margin: a,
                    children:
                      r &&
                      r.map(function (e) {
                        var r = e.key,
                          a = e.icon,
                          i = e.title,
                          l = e.onClick,
                          s = e.disabled,
                          c = e.link,
                          d = e.color,
                          u = e.hidden,
                          f = e.notifications,
                          p = e.id;
                        return u
                          ? ""
                          : (0, v.jsxs)(
                              y,
                              {
                                active: t === r,
                                mobile: n,
                                color: d ? d + "!important" : void 0,
                                link: c,
                                children: [
                                  (0, v.jsx)(g.Lr, {
                                    id: p,
                                    icon: a,
                                    mobile: n,
                                    title: i,
                                    onClick: l,
                                    link: c,
                                    disabled: s,
                                    notifications: f,
                                  }),
                                  t === r && o,
                                ],
                              },
                              r,
                            );
                      }),
                  });
                },
              },
            ]),
            n
          );
        })(f.PureComponent),
        b = x(_),
        C = m.ZP.div(
          r || (r = (0, l.default)(["\n  margin: ", ";\n"])),
          function (e) {
            return e.margin;
          },
        ),
        y = m.ZP.div(
          a ||
            (a = (0, l.default)([
              "\n  position: relative;\n  height: 56px;\n  width: 100%;\n  cursor: pointer;\n\n  span.material-icons {\n    color: ",
              ";\n  }\n  \n  ",
              "\n\n  ",
              "\n\n  ",
              "\n\n",
              "\n",
            ])),
          function (e) {
            return e.color || "#007BC1";
          },
          function (e) {
            return (
              !e.mobile &&
              "\n    * {\n      color: "
                .concat(
                  e.color || "#FFF!important",
                  ";\n    }\n\n    span.material-icons {\n      color: ",
                )
                .concat(
                  e.color || "#FFF",
                  ";\n    }\n\n    > div:nth-child(1) {\n      padding-left: 10px;\n      z-index: 3;\n      position: absolute;\n      width: 100%;    \n      box-shadow: inset 0 -1px 0 0 rgba(253,253,253,0.1), 0 0 5px 0 rgba(81,141,197,0.1);\n      transition: background-color 0.1s ease-in-out;\n    }\n  ",
                )
            );
          },
          function (e) {
            return (
              e.mobile &&
              "\n    * {\n      color: ".concat(
                e.color || "#424E54",
                ";\n    }\n\n    > div:before {\n      content: '';      \n      position: absolute;\n      width: calc(100% + 16px);\n      height: 56px;\n      box-shadow: inset 0 -1px 0 0 rgba(114,126,132,0.1);\n    }\n  ",
              )
            );
          },
          function (e) {
            return (
              e.active &&
              !e.mobile &&
              "\n    > div:nth-child(1) {\n      position: relative;\n      background-color: #007BC1;\n      background: linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);\n      box-shadow: inset 0 -1px 0 0 rgba(253,253,253,0.1), 0 0 5px 0 rgba(81,141,197,0.1);\n    }\n  "
            );
          },
          function (e) {
            return (
              !e.active &&
              !e.mobile &&
              e.link &&
              "\n  &:hover > div:nth-child(1) {\n    background-color: #0074b8;\n  }\n"
            );
          },
        ),
        A = m.ZP.div(
          o ||
            (o = (0, l.default)([
              "\n  position: absolute;\n  height: 56px;\n  width: 100%;\n  background-color: #007bc1;\n  z-index: 2;\n  top: 0;\n  left: 0;\n",
            ])),
        ),
        T = m.ZP.div(
          i ||
            (i = (0, l.default)([
              "\n  position: absolute;\n  height: 10px;\n  width: calc(100% - 48px);\n  opacity: 0.4;\n  background-color: #0067c6;\n  box-shadow: 0 0 20px 0 #424e54;\n  bottom: 0;\n  right: 24px;\n  z-index: 1;\n",
            ])),
        );
    },
    27707: function (e, t, n) {
      var r,
        a,
        o,
        i,
        l,
        s,
        c,
        d,
        u = n(56824),
        f = n(30225),
        p = n(94404),
        h = n(14482),
        x = n(5189),
        m = n(76431),
        g = n(30588),
        v = n(48229),
        _ = n(31228),
        b = (function (e) {
          (0, h.default)(n, e);
          var t = (0, x.default)(n);
          function n(e) {
            var r;
            return (
              (0, f.default)(this, n),
              ((r = t.call(this, e)).handleClickOutside = function (e) {
                var t = r.props,
                  n = t.open,
                  a = t.onClose,
                  o = t.fixed;
                if (n && !o) {
                  var i = r.slideRef.current;
                  (i && i.contains(e.target)) || a();
                }
              }),
              (r.slideRef = (0, m.createRef)()),
              r
            );
          }
          return (
            (0, p.default)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  document.addEventListener(
                    "click",
                    this.handleClickOutside,
                    !0,
                  );
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  document.removeEventListener(
                    "click",
                    this.handleClickOutside,
                    !0,
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.open,
                    n = e.title,
                    r = e.overlay,
                    a = e.children,
                    o = e.onClose,
                    i = e.type,
                    l = e.mobile;
                  return (0, _.jsxs)(C, {
                    children: [
                      (0, _.jsx)(A, {
                        mobile: l,
                        open: t,
                        children: (0, _.jsx)(T, {
                          open: t,
                          mobile: l,
                          ref: this.slideRef,
                          children:
                            t &&
                            (0, _.jsxs)("div", {
                              children: [
                                (0, _.jsx)(O, {
                                  id: "Close_Button",
                                  mobile: l,
                                  onClick: o,
                                  children: (0, _.jsx)(v.Z, {
                                    children: "close",
                                  }),
                                }),
                                (0, _.jsx)(E, {
                                  children: (0, _.jsx)(R, {
                                    id: "SlidePanel_Title",
                                    mobile: l,
                                    children: n,
                                  }),
                                }),
                                (0, _.jsx)(D, {
                                  padding: "content-not-padded" !== i,
                                  children: a,
                                }),
                              ],
                            }),
                        }),
                      }),
                      r && t && (0, _.jsx)(y, {}),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(m.PureComponent);
      t.Z = b;
      var C = g.ZP.div(r || (r = (0, u.default)([""]))),
        y = g.ZP.div(
          a ||
            (a = (0, u.default)([
              "\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 1199;\n  background-color: rgba(0, 0, 0, 0.5);\n",
            ])),
        ),
        A = g.ZP.div(
          o ||
            (o = (0, u.default)([
              "\n  position: fixed;\n  z-index: 1200;\n  overflow: hidden;\n\n  ",
              "\n\n  ",
              "\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (e) {
            return (
              !e.mobile &&
              "\n    right: 0;\n    top: 0;\n    width: 0;\n    height: 100%;\n  "
            );
          },
          function (e) {
            return (
              e.mobile &&
              "\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 0;\n  "
            );
          },
          function (e) {
            var t = e.open,
              n = e.mobile;
            return (
              t &&
              !n &&
              "\n    width: 410px;\n    transition: all 0.5s ease-in-out;\n  "
            );
          },
          function (e) {
            var t = e.open,
              n = e.mobile;
            return (
              t &&
              n &&
              "\n    height: 410px;\n    transition: all 0.5s ease-in-out;\n  "
            );
          },
        ),
        T = g.ZP.div(
          i ||
            (i = (0, u.default)([
              "\n  position: absolute;\n  background: #FDFDFD;\n  box-shadow: 0 0 16px 0 rgba(66,78,84,0.1);\n\n  ",
              "\n\n  ",
              "\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (e) {
            return (
              !e.mobile &&
              "\n    right: -398px;\n    width: 398px;\n    height: 100%;\n  "
            );
          },
          function (e) {
            return (
              e.mobile &&
              "\n    bottom: -180px;\n    right: 0;\n    width: 100%;\n    height: 180px;\n    border-radius: 6px 6px 0 0;\n  "
            );
          },
          function (e) {
            return (
              !e.mobile &&
              "\n    transition: all 0.5s;\n    transform: translate3d(-398px, 0, 0);\n    animation-timing-function: 1s ease-in-out;\n  "
            );
          },
          function (e) {
            return (
              e.mobile &&
              "\n    transition: all 0.5s;\n    transform: translate3d(0, -180px, 0);\n    animation-timing-function: 1s ease-in-out;\n  "
            );
          },
        ),
        E = g.ZP.div(
          l || (l = (0, u.default)(["\n  padding: 20px 20px 0;\n"])),
        ),
        D = g.ZP.div(
          s || (s = (0, u.default)(["\n  padding: 0 20px;\n\n  ", "\n"])),
          function (e) {
            return e.padding && "\n    padding: 20px;\n  ";
          },
        ),
        R = g.ZP.h2(
          c ||
            (c = (0, u.default)([
              "\n  color: #007bc1;\n  font-family: Eaton;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  line-height: 24px;\n  margin-bottom: 15px;\n\n  ",
              "\n",
            ])),
          function (e) {
            return (
              e.mobile &&
              '\n    color: #333F48;\n    font-family: "Open Sans";\n    font-size: 16px;\n    font-weight: 800;\n    letter-spacing: 0.5px;\n    line-height: 16px;\n    margin-top: 0px;\n  '
            );
          },
        ),
        O = g.ZP.div(
          d ||
            (d = (0, u.default)([
              "\n  position: absolute;\n  right: 20px;\n  top: 40px;\n  color: #007bc1;\n  cursor: pointer;\n\n  span {\n    font-size: 20px;\n    font-weight: bold;\n  }\n\n  ",
              "\n",
            ])),
          function (e) {
            return e.mobile && "\n    top: 20px;\n  ";
          },
        );
    },
    47165: function (e, t, n) {
      (n.r(t),
        n.d(t, {
          default: function () {
            return ct;
          },
        }));
      var r = n(56824),
        a = n(2845),
        o = n(31105),
        i = n(30225),
        l = n(94404),
        s = n(14482),
        c = n(5189),
        d = n(87121),
        u = n(84628),
        f = n(49745),
        p = n(94467),
        h = n.n(p),
        x = n(83749),
        m = n(13795),
        g = n(90012),
        v = n(61047),
        _ = n(6892),
        b = n(21649),
        C = { timeOption: "today", selectedDayPicker: h()() },
        y = {
          totalHouseConsumption: !0,
          criticalLoads: !1,
          nonCriticalLoads: !1,
          batteryStateOfCharge: !0,
          photovoltaicProduction: !1,
          selfConsumption: !1,
          selfSufficiency: !1,
        },
        A = {
          totalHouseConsumption: !1,
          photovoltaicProduction: !1,
          batteryStateOfCharge: !1,
          criticalLoads: !1,
          nonCriticalLoads: !1,
          selfConsumption: !1,
          selfSufficiency: !1,
        },
        T = {
          sunData: [],
          totalHouseConsumption: [],
          photovoltaicProduction: [],
          batteryStateOfCharge: [],
          criticalLoads: [],
          nonCriticalLoads: [],
          selfConsumption: [],
          selfSufficiency: [],
          from: null,
          to: null,
        },
        E = {
          totalHouseConsumption: null,
          photovoltaicProduction: null,
          batteryStateOfCharge: null,
          criticalLoads: null,
          nonCriticalLoads: null,
          selfConsumption: null,
          selfSufficiency: null,
          time: null,
          month: null,
          year: null,
        },
        D = {
          today: "".concat(m.CT, "/metrics/"),
          "last-7": "".concat(m.CT, "/metrics/daily"),
          "last-30": "".concat(m.CT, "/metrics/weekly"),
        },
        R = "MMMM, Do YYYY",
        O = [
          { val: "today", label: "CHART_FILTER_TODAY" },
          { val: "last-7", label: "CHART_FILTER_LAST7D" },
          { val: "last-30", label: "CHART_FILTER_LAST30D" },
        ],
        k = [
          { val: "today", label: "CHART_MOBILE_FILTER_TODAY" },
          { val: "last-7", label: "CHART_MOBILE_FILTER_LAST7D" },
          { val: "last-30", label: "CHART_MOBILE_FILTER_LAST30D" },
        ],
        I = {
          A: [
            "nonCriticalLoads",
            "criticalLoads",
            "photovoltaicProduction",
            "totalHouseConsumption",
          ],
          B: ["batteryStateOfCharge", "selfConsumption", "selfSufficiency"],
        },
        M = function (e, t, n) {
          var r = (0, g.convertMillisToSec)(e.time);
          return "last-7" === t
            ? h().tz(
                "".concat(h().unix(r).format("YYYY-MM-DD"), " 00:00"),
                "YYYY-MM-DD HH:mm",
                h()().tz(),
              )
            : "last-30" === t
              ? e.week
              : (0, g.convertTimeToLocalNaive)(r);
        },
        S = function (e) {
          for (
            var t = [],
              n = {
                today: {
                  interval: 300,
                  start: h()().startOf("day").unix(),
                  end: h()().unix(),
                },
                "last-7": {
                  interval: 86400,
                  start: h()().startOf("day").subtract(6, "day").unix(),
                  end: h()().endOf("day").unix(),
                },
                "last-30": {
                  interval: 604800,
                  start: h()().startOf("day").subtract(1, "month").unix(),
                  end: h()().endOf("day").unix(),
                },
              }[e],
              r = function (t, r) {
                var a = {};
                return (
                  (t > n.start + 6e3 && t < n.start + 15e3 && "today" === e) ||
                    (0, b.mapValues)(E, function (e, n) {
                      var o,
                        i =
                          r[r.length - 1] && r[r.length - 1][n]
                            ? r[r.length - 1][n]
                            : 30;
                      ((o =
                        "time" === n
                          ? (0, g.convertSecToMillis)(h().utc(t, "X").unix())
                          : "month" === n
                            ? parseInt(h().utc(t, "X").format("MM")) - 1
                            : "year" === n
                              ? h().utc(t, "X").format("YYYY")
                              : (function (e, t) {
                                  var n = t + 0.4 * Math.random(),
                                    r = t;
                                  return (
                                    "batteryStateOfCharge" === e &&
                                      ((n = t < 90 ? t + 0.5 : 85), (r = t)),
                                    Math.floor(Math.random() * (n - r + 1) + r)
                                  );
                                })(n, i)),
                        (a[n] = o));
                    }),
                  a
                );
              },
              a = n.start;
            a < n.end;
            a += n.interval
          ) {
            var o = r(a, t);
            t = o.time ? [].concat((0, _.Z)(t), [o]) : t;
          }
          return t;
        },
        Y = (function () {
          var e = (0, v.Z)(
            (0, d.Z)().mark(function e(t, n, r, a) {
              var o, i;
              return (0, d.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = a.timeOption),
                        n && ((r = S(o)), (r = (0, b.reverse)(r))),
                        (i = (0, b.cloneDeep)(T)),
                        (r = (0, b.uniqWith)(r, b.isEqual)).forEach(
                          function (e, t) {
                            (0, b.mapValues)(e, function (n, a) {
                              if (
                                ((i[a] && 0 !== t) || (i[a] = []),
                                "today" === o)
                              ) {
                                var l = r[t - 1];
                                if (l && Math.abs(l.time - e.time) > 18e5) {
                                  l.time = l.time + 5e3;
                                  var s = { x: M(l, o), y: null };
                                  i[a] = [].concat((0, _.Z)(i[a]), [s]);
                                }
                              }
                              var c = { x: M(e, o), y: (0, b.round)(n, 2) };
                              i[a] = [].concat((0, _.Z)(i[a]), [c]);
                            });
                          },
                        ),
                        e.abrupt("return", i)
                      );
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t, n, r, a) {
            return e.apply(this, arguments);
          };
        })(),
        L = function (e) {
          var t = e.timeOption,
            n = e.selectedDayPicker;
          return {
            today: {
              from: h()(n).startOf("day").unix(),
              to: h()(n).endOf("day").unix(),
            },
            "last-7": {
              from: h()(n).startOf("week").unix(),
              to: h()(n).endOf("week").unix(),
            },
            "last-30": {
              from: h()(n).startOf("day").startOf("month").unix(),
              to: h()(n).endOf("day").endOf("month").unix(),
            },
          }[t];
        },
        P = function (e, t) {
          var n = (0, o.default)((0, o.default)({}, e), t.variable),
            r = 0;
          return (
            (0, b.mapValues)(n, function (e) {
              return e && r++;
            }),
            r ? n : e
          );
        },
        w = function (e, t) {
          "today" === t.filter.timeOption && (e.selfConsumption = !1);
          var n = 0;
          return (
            (0, b.mapValues)(e, function (e) {
              return e && n++;
            }),
            n ? e : y
          );
        },
        N = function (e, t) {
          var n = (0, o.default)({}, e);
          return (
            t.filter.timeOption && (n.selectedDayPicker = h()()),
            (0, o.default)((0, o.default)({}, n), t.filter)
          );
        },
        j = function (e) {
          var t = document.getElementById("chartjs-tooltip"),
            n = e.tooltip;
          if (0 === n.opacity || 0 === n.dataPoints.length)
            return ((t.style.opacity = 0), void (t.style.display = "none"));
          if (n.body.length) {
            (t.classList.remove("left", "right", "center"),
              t.classList.add(n.xAlign));
            var r = n.title || [],
              a = n.body.map(function (e) {
                return e.lines;
              }),
              o = "<thead>";
            (r.forEach(function (e) {
              o += "<tr><th>" + e + "</th></tr>";
            }),
              (o += "</thead><tbody>"),
              a.forEach(function (e, t) {
                var r = n.labelColors[t],
                  a = '<span style="background: '.concat(
                    r.borderColor,
                    ';"></span>',
                  );
                o += "<tr><td>".concat(a).concat(e, "</td></tr>");
              }),
              (o += "</tbody>"),
              (t.querySelector("table").innerHTML = o),
              (t.style.opacity = 1),
              (t.style.display = "block"),
              (t.style.position = "absolute"),
              (t.style.pointerEvents = "none"),
              "left" === n.xAlign || "center" === n.xAlign
                ? (t.style.left = n.caretX + 10 + "px")
                : (t.style.left = n.caretX - 175 + "px"),
              (t.style.top = n.caretY + "px"));
          }
        },
        Z = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "W";
          if (
            -1 !==
            [
              "batteryStateOfCharge",
              "selfConsumption",
              "selfSufficiency",
            ].indexOf(e.dataset.key)
          )
            return isNaN(e.parsed.y) ? null : "".concat(e.parsed.y, "%");
          if (
            -1 !==
            [
              "totalHouseConsumption",
              "photovoltaicProduction",
              "criticalLoads",
              "nonCriticalLoads",
            ].indexOf(e.dataset.key)
          ) {
            var n = (0, g.getEnergyValue)(e.parsed.y, t);
            return n && n.label;
          }
          return e.parsed.y ? "".concat(e.parsed.y) : null;
        },
        F = function (e) {
          return null !== e.parsed.y;
        },
        z = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "W",
            r = (0, b.max)(t) / 1e3,
            a = r / 1e3,
            o = n;
          Math.floor(Math.abs(a))
            ? (o = "M".concat(n))
            : Math.floor(Math.abs(r)) && (o = "k".concat(n));
          var i = (0, g.getEnergyValue)(e, n, o);
          return "".concat(i.value, " ").concat(i.unit);
        },
        H = n(98278),
        B = n.n(H),
        W = n(49318),
        V = (0, u.Jg)({
          path: function () {
            return ["scenes", "Chart"];
          },
          connect: {
            props: [
              W.Z,
              [
                "currentDevice",
                "currentRoute",
                "appLoading",
                "isMobile",
                "translations",
                "configs",
                "batteryReadyMode",
                "currentLocation",
              ],
            ],
            actions: [W.Z, ["checkSetupStatus", "clearLocationState"]],
          },
          actions: function () {
            return {
              changeFilter: function (e) {
                return { filter: e };
              },
              changeVariable: function (e) {
                return { variable: e };
              },
              resetAllVariables: function () {
                return {};
              },
              openExportChartPanel: function () {
                return {};
              },
              closeExportChartPanel: function () {
                return {};
              },
              setNoBatteryDetails: function (e) {
                return { status: e };
              },
              fetchMetrics: function (e) {
                return { update: e };
              },
              setMetrics: function (e, t) {
                return { metrics: e, averages: t };
              },
              error: !0,
              reset: !0,
              start: !0,
              checkLocationState: !0,
            };
          },
          reducers: function (e) {
            var t,
              n,
              r,
              i,
              l,
              s,
              c,
              d,
              u,
              f = e.actions;
            return {
              filters: [
                C,
                B().object,
                ((t = {}),
                (0, a.Z)(t, f.changeFilter, N),
                (0, a.Z)(t, f.start, function (e, t) {
                  return (0, o.default)((0, o.default)({}, C), {
                    selectedDayPicker: h()(),
                  });
                }),
                (0, a.Z)(t, f.reset, function (e, t) {
                  return (0, o.default)((0, o.default)({}, C), {
                    selectedDayPicker: h()(),
                  });
                }),
                t),
              ],
              updated: [
                !1,
                B().bool,
                ((n = {}),
                (0, a.Z)(n, f.fetchMetrics, function (e, t) {
                  return !!t.update;
                }),
                (0, a.Z)(n, f.reset, function (e, t) {
                  return !1;
                }),
                (0, a.Z)(n, f.changeFilter, function (e, t) {
                  return !1;
                }),
                n),
              ],
              variables: [
                y,
                B().object,
                ((r = {}),
                (0, a.Z)(r, f.changeVariable, P),
                (0, a.Z)(r, f.changeFilter, w),
                (0, a.Z)(r, f.reset, function (e, t) {
                  return y;
                }),
                (0, a.Z)(r, f.resetAllVariables, function (e, t) {
                  return A;
                }),
                r),
              ],
              metrics: [
                T,
                B().object,
                ((i = {}),
                (0, a.Z)(i, f.setMetrics, function (e, t) {
                  return t.metrics;
                }),
                (0, a.Z)(i, f.reset, function (e, t) {
                  return T;
                }),
                (0, a.Z)(i, f.changeFilter, function (e, t) {
                  return T;
                }),
                i),
              ],
              averages: [
                null,
                B().object,
                ((l = {}),
                (0, a.Z)(l, f.setMetrics, function (e, t) {
                  return t.averages || null;
                }),
                (0, a.Z)(l, f.reset, function (e, t) {
                  return null;
                }),
                (0, a.Z)(l, f.changeFilter, function (e, t) {
                  return null;
                }),
                l),
              ],
              loading: [
                1,
                B().number,
                ((s = {}),
                (0, a.Z)(s, f.reset, function (e, t) {
                  return 1;
                }),
                (0, a.Z)(s, f.error, function (e, t) {
                  return e > 0 ? e - 1 : 0;
                }),
                (0, a.Z)(s, f.setMetrics, function (e, t) {
                  return e > 0 ? e - 1 : 0;
                }),
                s),
              ],
              fetching: [
                !0,
                B().bool,
                ((c = {}),
                (0, a.Z)(c, f.reset, function (e, t) {
                  return !0;
                }),
                (0, a.Z)(c, f.changeFilter, function (e, t) {
                  return !0;
                }),
                (0, a.Z)(c, f.setMetrics, function (e, t) {
                  return !1;
                }),
                (0, a.Z)(c, f.error, function (e, t) {
                  return !1;
                }),
                c),
              ],
              exportChartPanelState: [
                !1,
                B().bool,
                ((d = {}),
                (0, a.Z)(d, f.openExportChartPanel, function () {
                  return !0;
                }),
                (0, a.Z)(d, f.closeExportChartPanel, function () {
                  return !1;
                }),
                (0, a.Z)(d, f.reset, function () {
                  return !1;
                }),
                d),
              ],
              noBatteryDetails: [
                !1,
                B().bool,
                ((u = {}),
                (0, a.Z)(u, f.setNoBatteryDetails, function (e, t) {
                  return t.status;
                }),
                (0, a.Z)(u, f.reset, function () {
                  return !1;
                }),
                u),
              ],
            };
          },
          selectors: function (e) {
            var t = e.selectors;
            return {
              todayChart: [
                function () {
                  return [t.filters];
                },
                function (e) {
                  return "today" === e.timeOption;
                },
                B().bool,
              ],
              ticksToHide: [
                function () {
                  return [t.variables];
                },
                function (e) {
                  return (function (e) {
                    var t = "";
                    return (
                      (0, b.mapKeys)(I, function (n, r) {
                        var a = 0;
                        return (
                          n.forEach(function (t) {
                            a = e[t] ? a : a + 1;
                          }),
                          (t = a === n.length ? "".concat(t).concat(r) : t),
                          n
                        );
                      }),
                      t
                    );
                  })(e);
                },
                B().string,
              ],
            };
          },
          start: (0, d.Z)().mark(function () {
            var e, t, n, r;
            return (0, d.Z)().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (e = this.actionCreators),
                        (t = e.start),
                        (n = e.checkSetupStatus),
                        (r = e.fetchMetrics),
                        (a.next = 3),
                        (0, x.gz)(t())
                      );
                    case 3:
                      return (
                        (0, g.log)("[XS-Chart] Start Scene", "yellow"),
                        (a.next = 6),
                        (0, x.gz)(n())
                      );
                    case 6:
                      return ((a.next = 8), (0, x.gz)(r()));
                    case 8:
                    case "end":
                      return a.stop();
                  }
              },
              t,
              this,
            );
          }),
          stop: (0, d.Z)().mark(function e() {
            return (0, d.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (0, g.log)("[XS-Chart] Stop Scene"),
                        (e.next = 3),
                        (0, x.gz)(this.actionCreators.reset())
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
            var t,
              n = e.actions,
              r = e.workers;
            return (
              (t = {}),
              (0, a.Z)(t, n.fetchMetrics, r.fetchMetrics),
              (0, a.Z)(t, n.changeFilter, r.fetchMetrics),
              (0, a.Z)(t, n.checkLocationState, r.checkLocationState),
              t
            );
          },
          workers: {
            fetchMetrics: (0, d.Z)().mark(function () {
              var e, t, n, r, a, i, l, s, c, u, p, h, v, _, b, C, y, A, T, E;
              return (0, d.Z)().wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        return (
                          (e = !1),
                          (r = this.actionCreators),
                          (a = r.fetchMetrics),
                          (i = r.setMetrics),
                          (l = r.error),
                          (d.next = 4),
                          this.get("currentDevice")
                        );
                      case 4:
                        return (
                          (s = d.sent),
                          (d.next = 7),
                          this.get("appLoading")
                        );
                      case 7:
                        return (
                          (c = d.sent),
                          (d.next = 10),
                          this.get("filters")
                        );
                      case 10:
                        return (
                          (u = d.sent),
                          (d.next = 13),
                          this.get("configs")
                        );
                      case 13:
                        if (
                          ((p = d.sent),
                          (h = (0, g.generateUrl)(D[u.timeOption])),
                          (v = L(u)),
                          (_ = {
                            from: (0, g.convertSecToMillis)(v.from),
                            to: (0, g.convertSecToMillis)(v.to),
                          }),
                          (d.prev = 17),
                          s.id || !c)
                        ) {
                          d.next = 24;
                          break;
                        }
                        return ((d.next = 21), (0, x.gw)(1e3));
                      case 21:
                        return ((d.next = 23), (0, x.gz)(a()));
                      case 23:
                        return d.abrupt("return", !1);
                      case 24:
                        return (
                          (d.next = 26),
                          (0, x.RE)(f.Z.get, h, { params: _ })
                        );
                      case 26:
                        if (
                          ((b = d.sent),
                          (C = b.data),
                          (y = C.result),
                          (A = C.successful),
                          (e = !A),
                          !A)
                        ) {
                          d.next = 37;
                          break;
                        }
                        return ((d.next = 33), Y(s, p.fakeAPI, y.metrics, u));
                      case 33:
                        ((t = d.sent),
                          (n = y.averages || y.total),
                          (d.next = 41));
                        break;
                      case 37:
                        return ((d.next = 39), Y(s, p.fakeAPI, [], u));
                      case 39:
                        ((t = d.sent), (n = {}));
                      case 41:
                        return (
                          (T = (0, o.default)((0, o.default)({}, t), v)),
                          (d.next = 44),
                          (0, x.gz)(i(T, n))
                        );
                      case 44:
                        d.next = 57;
                        break;
                      case 46:
                        return (
                          (d.prev = 46),
                          (d.t0 = d.catch(17)),
                          console.log(d.t0),
                          (d.next = 51),
                          Y(s, p.fakeAPI, [], u)
                        );
                      case 51:
                        return (
                          (t = d.sent),
                          (n = {}),
                          (E = (0, o.default)((0, o.default)({}, t), v)),
                          (d.next = 56),
                          (0, x.gz)(i(E, n))
                        );
                      case 56:
                        e = !0;
                      case 57:
                        if (!e) {
                          d.next = 60;
                          break;
                        }
                        return ((d.next = 60), (0, x.gz)(l()));
                      case 60:
                        return ((d.next = 62), (0, x.gw)(m.T$));
                      case 62:
                        return ((d.next = 64), (0, x.gz)(a(!0)));
                      case 64:
                      case "end":
                        return d.stop();
                    }
                },
                a,
                this,
                [[17, 46]],
              );
            }),
            checkLocationState: (0, d.Z)().mark(function e() {
              var t, n, r, a, o, i, l;
              return (0, d.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return ((e.next = 2), this.get("currentLocation"));
                      case 2:
                        if (!(t = e.sent).state) {
                          e.next = 34;
                          break;
                        }
                        if (!t.state.updateFilters) {
                          e.next = 32;
                          break;
                        }
                        return ((e.next = 7), this.get("currentRoute"));
                      case 7:
                        if (((n = e.sent), !(r = n.params.filter))) {
                          e.next = 32;
                          break;
                        }
                        return (
                          (a = this.actionCreators),
                          (o = a.resetAllVariables),
                          (i = a.changeVariable),
                          (l = a.changeFilter),
                          (e.next = 13),
                          (0, x.gz)(o())
                        );
                      case 13:
                        ((e.t0 = r),
                          (e.next =
                            "grid-consumption" === e.t0
                              ? 16
                              : "pv-production" === e.t0
                                ? 21
                                : "pv-consumption" === e.t0
                                  ? 26
                                  : 31));
                        break;
                      case 16:
                        return (
                          (e.next = 18),
                          (0, x.gz)(i({ totalHouseConsumption: !0 }))
                        );
                      case 18:
                        return (
                          (e.next = 20),
                          (0, x.gz)(l({ timeOption: "today" }))
                        );
                      case 20:
                      case 25:
                      case 30:
                      case 31:
                        return e.abrupt("break", 32);
                      case 21:
                        return (
                          (e.next = 23),
                          (0, x.gz)(i({ photovoltaicProduction: !0 }))
                        );
                      case 23:
                        return (
                          (e.next = 25),
                          (0, x.gz)(l({ timeOption: "today" }))
                        );
                      case 26:
                        return (
                          (e.next = 28),
                          (0, x.gz)(i({ selfConsumption: !0 }))
                        );
                      case 28:
                        return (
                          (e.next = 30),
                          (0, x.gz)(l({ timeOption: "last-7" }))
                        );
                      case 32:
                        return (
                          (e.next = 34),
                          (0, x.gz)(this.actionCreators.clearLocationState())
                        );
                      case 34:
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
        U = n(76431),
        G = n(30588),
        X = n(48229),
        K = n(23594),
        q = n.n(K);
      var J =
          n.p + "static/media/file-chart.343fbd0824cddb51f06c2ceae48d6a97.svg",
        $ = n(82857),
        Q = (0, u.Jg)({
          connect: {
            props: [
              W.Z,
              ["translations"],
              V,
              [
                "filters",
                "variables",
                "metrics",
                "fetching",
                "updated",
                "filters",
              ],
            ],
          },
        }),
        ee = n(94923),
        te = n(34692),
        ne = n(33809);
      n(36979);
      ne.kL.register(ne.ST, ne.f$, ne.FB, ne.jn, ne.od, ne.u, ne.Gu, te.Z);
      var re = {
        id: "vline",
        afterTooltipDraw: function (e, t, n) {
          var r = e.ctx;
          if (
            0 !== e.tooltip.opacity &&
            e.tooltip.dataPoints &&
            e.tooltip.dataPoints.length
          ) {
            var a = e.tooltip.dataPoints[0].element.x,
              o = e.scales.A.top,
              i = e.scales.A.bottom;
            (r.save(),
              r.beginPath(),
              r.moveTo(a, o),
              r.lineTo(a, i),
              (r.lineWidth = 1),
              (r.strokeStyle = "#007BC1"),
              r.stroke(),
              r.restore());
          }
        },
      };
      ne.kL.register(re);
      var ae,
        oe = {
          labels: [],
          datasets: [
            {
              key: "sunData",
              data: [],
              label: "sunLight",
              backgroundColor: "#F0CB2F",
              borderColor: "#F0CB2F",
              borderDash: [5, 8],
              borderWidth: 3,
              fill: !1,
              hidden: !1,
              yAxisID: "B",
            },
            {
              key: "batteryStateOfCharge",
              data: [],
              hidden: !1,
              label: "batteryState",
              backgroundColor: "#007BC1",
              borderColor: "#007BC1",
              borderWidth: 2,
              lineTension: 0,
              pointHoverRadius: 0,
              yAxisID: "B",
              fill: "origin",
            },
            {
              key: "totalHouseConsumption",
              data: [],
              hidden: !1,
              label: "houseConsumption",
              backgroundColor: "#DA3227",
              borderColor: "#DA3227",
              borderWidth: 2,
              lineTension: 0,
              pointHoverRadius: 0,
              yAxisID: "A",
              fill: "origin",
            },
            {
              key: "photovoltaicProduction",
              data: [],
              hidden: !1,
              label: "pvProduction",
              backgroundColor: "#00B2A9",
              borderColor: "#00B2A9",
              borderWidth: 2,
              lineTension: 0,
              pointHoverRadius: 0,
              yAxisID: "A",
              fill: "origin",
            },
            {
              key: "criticalLoads",
              data: [],
              hidden: !1,
              label: "criticalLoads",
              backgroundColor: "#5B6770",
              borderColor: "#5B6770",
              borderWidth: 2,
              lineTension: 0,
              pointHoverRadius: 0,
              yAxisID: "A",
              fill: "origin",
            },
            {
              key: "nonCriticalLoads",
              data: [],
              hidden: !1,
              label: "nonCriticalLoads",
              backgroundColor: "#87c6d4",
              borderColor: "#87c6d4",
              borderWidth: 2,
              lineTension: 0,
              pointHoverRadius: 0,
              yAxisID: "A",
              fill: "origin",
            },
          ],
        },
        ie = function (e, t, n) {
          var r = e.createLinearGradient(0, 0, 0, 400);
          return (r.addColorStop(0, t), r.addColorStop(1, n), r);
        },
        le = n(22247),
        se = n(31228);
      var ce = Q(function (e) {
          var t = e.variables,
            n = e.metrics,
            r = e.ticksToHide,
            a = e.translations,
            i = e.updated,
            l = e.viewSun,
            s = e.filters,
            c = (0, U.useRef)(null),
            d = (0, U.useState)({ datasets: [] }),
            u = (0, $.default)(d, 2),
            f = u[0],
            p = u[1],
            x =
              !!(
                !s ||
                h()(s.selectedDayPicker).format("DD/MM/YYYY") ===
                  h()().format("DD/MM/YYYY")
              ) && l;
          (0, U.useEffect)(
            function () {
              var e = c.current;
              e &&
                p(
                  (function (e, t, n, r, a, i) {
                    if (!n) return {};
                    var l = {
                        sunData: "#F0CB2F",
                        batteryStateOfCharge: ie(
                          e,
                          "rgba(0,123,193,0.5)",
                          "rgba(0,123,193,0)",
                        ),
                        totalHouseConsumption: ie(
                          e,
                          "rgba(218,220,221,0.5)",
                          "rgba(218,220,221,0)",
                        ),
                        photovoltaicProduction: ie(
                          e,
                          "rgba(0,178,169,0.5)",
                          "rgba(0,178,169,0)",
                        ),
                        criticalLoads: ie(
                          e,
                          "rgba(218,50,39,0.5)",
                          "rgba(218,50,39,0)",
                        ),
                        nonCriticalLoads: ie(
                          e,
                          "rgba(135,198,212,0.5)",
                          "rgba(135,198,212,0)",
                        ),
                        selfConsumption: ie(
                          e,
                          "rgba(152,63,240,0.5)",
                          "rgba(152,63,240,0)",
                        ),
                      },
                      s = n.selectedDayPicker,
                      c = (0, g.convertTimeToLocalNaive)(h()(s).startOf("day")),
                      d = (0, g.convertTimeToLocalNaive)(h()(s).endOf("day")),
                      u = (0, g.convertTimeToLocalNaive)(
                        h()(c).add(6, "hours"),
                      ),
                      f = (0, g.convertTimeToLocalNaive)(
                        h()(c).add(12, "hours"),
                      ),
                      p = (0, g.convertTimeToLocalNaive)(
                        h()(c).add(18, "hours"),
                      ),
                      x = (0, o.default)({}, oe);
                    return (
                      (x.labels = [c, u, f, p, d]),
                      (x.datasets = (0, _.Z)(x.datasets).map(function (e) {
                        var n = "CHART_VAR_".concat(e.key.toUpperCase());
                        return (0, o.default)((0, o.default)({}, e), {
                          label: a[n] ? a[n] : e.key,
                          backgroundColor: l[e.key],
                          data: t[e.key],
                          hidden: "sunData" === e.key ? !i : !r[e.key],
                        });
                      })),
                      x
                    );
                  })(e.ctx, n, s, t, a, x),
                );
            },
            [n, s, t, a, x],
          );
          var m = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = arguments.length > 2 ? arguments[2] : void 0;
            if (!t) return {};
            var r = t.selectedDayPicker,
              a = (0, g.convertTimeToLocalNaive)(h()()),
              o = (0, g.convertTimeToLocalNaive)(h()(r).startOf("day")),
              i = (0, g.convertTimeToLocalNaive)(h()(r).endOf("day")),
              l = {
                elements: { point: { radius: 0 } },
                animation: !1,
                maintainAspectRatio: !1,
                responsive: !0,
                hover: { mode: "index", intersect: !1 },
                interaction: { mode: "index", intersect: !1 },
                plugins: {
                  legend: { display: !1 },
                  tooltip: {
                    enabled: !1,
                    mode: "index",
                    intersect: !1,
                    filter: function (e) {
                      return 0 !== e.datasetIndex;
                    },
                    callbacks: {
                      label: Z,
                      title: function (e, t) {
                        return e[0]
                          ? h()(e[0].raw.x).format("DD/MM/YYYY HH:mm")
                          : "";
                      },
                    },
                    backgroundColor: "#fff",
                    titleColor: "#000",
                    bodycolor: "#000",
                    external: j,
                  },
                  vline: !0,
                },
                layout: { padding: { left: 0, right: 0, top: 50, bottom: 0 } },
                scales: {
                  xAxis: {
                    type: "time",
                    grid: { display: !1 },
                    time: {
                      displayFormats: { hour: "HH:mm" },
                      unit: "hour",
                      stepSize: 6,
                    },
                    min: o,
                    max: i,
                    ticks: {
                      autoSkip: !1,
                      source: "labels",
                      color: "rgba(91,103,112, 0.5)",
                      font: { size: 10 },
                    },
                  },
                  A: {
                    position: "left",
                    beginAtZero: !0,
                    grid: { display: !1 },
                    suggestedMin: 0,
                    suggestedMax: 0,
                    ticks: {
                      display: !0,
                      color: -1 === e.indexOf("A") ? "#007BC1" : "#CCC",
                      font: { weight: "bold" },
                      callback: function (e, t, n) {
                        return z(e, n);
                      },
                    },
                  },
                  B: {
                    position: "right",
                    grid: { display: !1 },
                    min: 0,
                    max: 100,
                    ticks: {
                      stepSize: 20,
                      display: !0,
                      color: -1 === e.indexOf("B") ? "#A0C599" : "#CCC",
                      font: { weight: "bold" },
                      callback: function (e, t, n) {
                        return "".concat(e, "%");
                      },
                    },
                  },
                },
              };
            return (
              n && (l.animation = !1),
              h()(r).format("DD/MM/YYYY") === h()().format("DD/MM/YYYY") &&
                (l.plugins.annotation = {
                  annotations: [
                    {
                      type: "line",
                      drawTime: "afterDatasetsDraw",
                      xScaleID: "xAxis",
                      yScaleID: "B",
                      xMin: a,
                      xMax: a,
                      yMin: 0,
                      yMax: 100,
                      borderWidth: 2,
                      borderColor: "#a0a6a9",
                      label: {
                        position: "end",
                        enabled: !0,
                        borderRadius: 10,
                        content: " ",
                        backgroundColor: "#a0a6a9",
                        color: "#fff",
                        yAdjust: -10,
                        font: { size: 0 },
                      },
                    },
                    {
                      type: "line",
                      drawTime: "beforeDatasetsDraw",
                      xScaleID: "xAxis",
                      yScaleID: "B",
                      xMin: a,
                      xMax: a,
                      yMin: 0,
                      yMax: 100,
                      borderWidth: 0,
                      borderColor: "#a0a6a9",
                      label: {
                        position: "end",
                        enabled: !0,
                        backgroundColor: "transparent",
                        color: "#a0a6a9",
                        content: h()().format("HH:mm"),
                        xAdjust: h()().format("HH") < 19 ? -20 : 25,
                        yAdjust: 5,
                      },
                    },
                  ],
                }),
              l
            );
          })(r, s, i);
          return (0, se.jsxs)(de, {
            children: [
              (0, se.jsx)(ee.kL, { ref: c, type: "line", data: f, options: m }),
              (0, se.jsx)(le.h7, {}),
            ],
          });
        }),
        de = G.ZP.div(
          ae ||
            (ae = (0, r.default)([
              "\n  height: 350px;\n  padding-top: 30px;\n\n  @media screen and (min-width: 1424px) {\n    height: 500px;\n  }\n",
            ])),
        ),
        ue = (0, u.Jg)({
          connect: {
            props: [
              W.Z,
              ["translations"],
              V,
              ["filters", "variables", "metrics", "fetching", "updated"],
            ],
          },
        }),
        fe = { "last-7": "day", "last-30": "week" };
      ne.kL.register(ne.vn, ne.f$, ne.FB, ne.ZL, ne.u);
      var pe,
        he = {
          labels: [],
          datasets: [
            {
              key: "batteryStateOfCharge",
              data: [],
              hidden: !1,
              label: "batteryStateOfCharge",
              backgroundColor: "#007BC1",
              borderColor: "#007BC1",
              borderRadius: 20,
              yAxisID: "B",
            },
            {
              key: "selfConsumption",
              data: [],
              hidden: !1,
              label: "selfConsumption",
              backgroundColor: "#E57F0A",
              borderColor: "#E57F0A",
              borderRadius: 20,
              yAxisID: "B",
            },
            {
              key: "totalHouseConsumption",
              data: [],
              hidden: !1,
              label: "totalHouseConsumption",
              backgroundColor: "#DA3227",
              borderColor: "#DA3227",
              borderRadius: 20,
              yAxisID: "A",
            },
            {
              key: "photovoltaicProduction",
              data: [],
              hidden: !1,
              label: "photovoltaicProduction",
              backgroundColor: "#00B2A9",
              borderColor: "#00B2A9",
              borderRadius: 20,
              yAxisID: "A",
            },
            {
              key: "criticalLoads",
              data: [],
              hidden: !1,
              label: "criticalLoads",
              backgroundColor: "#5B6770",
              borderColor: "#5B6770",
              borderRadius: 20,
              yAxisID: "A",
            },
            {
              key: "nonCriticalLoads",
              data: [],
              hidden: !1,
              label: "nonCriticalLoads",
              backgroundColor: "#87c6d4",
              borderColor: "#87c6d4",
              borderRadius: 20,
              yAxisID: "A",
            },
            {
              key: "selfSufficiency",
              data: [],
              hidden: !1,
              label: "selfSufficiency",
              backgroundColor: "#408B35",
              borderColor: "#408B35",
              borderRadius: 20,
              yAxisID: "B",
            },
          ],
        },
        xe = function (e, t) {
          for (
            var n = e + 1,
              r = h()("".concat(t, "-").concat(n), "YYYY-MM-DD"),
              a = r.daysInMonth(),
              o = new Set(),
              i = 0;
            i < a;
            i++
          ) {
            var l = h()(r, "YYYY-MM-DD").add(i, "days");
            o.add(l.isoWeek());
          }
          var s = [];
          return (
            o.forEach(function (e) {
              return s.push(e);
            }),
            s
          );
        };
      var me,
        ge,
        ve,
        _e,
        be,
        Ce,
        ye,
        Ae,
        Te,
        Ee,
        De,
        Re,
        Oe,
        ke,
        Ie,
        Me,
        Se,
        Ye,
        Le,
        Pe,
        we = ue(function (e) {
          var t = e.variables,
            n = e.filters,
            r = e.metrics,
            a = e.ticksToHide,
            i = e.translations,
            l = e.updated,
            s = (0, U.useRef)(null),
            c = (0, U.useState)({ datasets: [] }),
            d = (0, $.default)(c, 2),
            u = d[0],
            f = d[1];
          (0, U.useEffect)(
            function () {
              var e = s.current;
              e &&
                f(
                  (function (e, t, n, r, a, i) {
                    var l = (0, o.default)({}, he),
                      s = null,
                      c = null;
                    if (!t) return l;
                    "week" === r
                      ? ((s = h()(i.selectedDayPicker)
                          .startOf("day")
                          .startOf("month")
                          .startOf("week")),
                        (c = h()(i.selectedDayPicker)
                          .endOf("day")
                          .endOf("month")
                          .endOf("week")))
                      : ((s = h().tz(h().unix(t.from), h()().tz()).format()),
                        (c = h().tz(h().unix(t.to), h()().tz()).format()));
                    var d = 0;
                    if (
                      ((0, b.mapValues)(n, function (e) {
                        return e && d++;
                      }),
                      (l.labels = [s, c]),
                      (l.datasets = (0, _.Z)(l.datasets).map(function (e) {
                        return (0, o.default)((0, o.default)({}, e), {
                          label: a["CHART_VAR_".concat(e.key.toUpperCase())],
                          data: t[e.key],
                          hidden: !n[e.key],
                          barPercentage: d > 1 ? 0.9 : 0.4,
                          categoryPercentage: "day" === r ? void 0 : 0.8,
                          barThickness: "day" === r ? void 0 : "flex",
                        });
                      })),
                      "day" === r)
                    ) {
                      l.datasets.map(function (e) {
                        var t = e.data;
                        if (t.length > 0)
                          for (
                            var n = function (e) {
                                -1 ===
                                  t.findIndex(function (t) {
                                    return t.x.isSame(h()(s).add(e, "days"));
                                  }) &&
                                  t.push({ x: h()(s).add(e, "days"), y: null });
                              },
                              r = 0;
                            r < 7;
                            r++
                          )
                            n(r);
                        return t;
                      });
                      for (var u = [], f = 0; f < 7; f++) {
                        var p;
                        ((p = h()(s).add(f, "days")),
                          u.push(h().utc(h().tz(p, h()().tz()).format())));
                      }
                      l.labels = u;
                    }
                    if ("week" === r) {
                      var x = xe(
                          h()(c).startOf("week").month(),
                          h()(c).startOf("week").year(),
                        ),
                        m = l.datasets,
                        g = [],
                        v = [];
                      (m.forEach(function (e) {
                        ((g = []), (v = []));
                        var t = e.data;
                        (x.forEach(function (e, n) {
                          var r = null;
                          if (
                            1 === e &&
                            11 === h()(c).startOf("week").month()
                          ) {
                            var a = h()(c).startOf("week").year() + 1;
                            r = h()
                              .tz()
                              .day("Sunday")
                              .isoWeek(e)
                              .isoWeekYear(a)
                              .toDate();
                          } else if (
                            53 === e &&
                            11 === h()(c).startOf("week").month()
                          ) {
                            var o = h()(c).startOf("week").year();
                            r = h()
                              .tz()
                              .day("Sunday")
                              .isoWeek(e)
                              .isoWeekYear(o)
                              .add(1, "year")
                              .subtract(1, "day")
                              .day("Sunday")
                              .toDate();
                          } else if (
                            52 === e &&
                            0 === h()(c).startOf("week").month()
                          ) {
                            var i = h()(c).startOf("week").year() - 1;
                            r = h()
                              .tz()
                              .day("Sunday")
                              .isoWeek(e)
                              .isoWeekYear(i)
                              .toDate();
                          } else if (
                            53 === e &&
                            0 === h()(c).startOf("week").month()
                          ) {
                            var l = h()(c).startOf("week").year() - 1;
                            r = h()
                              .tz()
                              .day("Sunday")
                              .isoWeek(e)
                              .isoWeekYear(l)
                              .add(1, "year")
                              .subtract(1, "day")
                              .toDate();
                          } else
                            r = h()
                              .tz()
                              .day("Sunday")
                              .isoWeek(e)
                              .isoWeekYear(h()(c).startOf("week").year())
                              .toDate();
                          var s = (0, b.findIndex)(t, { x: e.toString() });
                          -1 !== s
                            ? v.push({ x: r, y: t[s].y })
                            : v.push({ x: r, y: null });
                        }),
                          v.forEach(function (e) {
                            g.push(e.x);
                          }),
                          (e.data = (0, b.clone)(v)));
                      }),
                        (l.labels = g));
                    }
                    if ("month" === r) {
                      l.datasets.map(function (e) {
                        for (var t = e.data, n = 0; n < t.length; n++)
                          if (n + 1 < t.length) {
                            var r = t[n].x,
                              a = t[n + 1].x;
                            if (h()(r).diff(a, "month") > 1) {
                              var o = h()(r).subtract(1, "month");
                              t.splice(n + 1, 0, { x: o, y: null });
                            }
                          }
                        return t;
                      });
                      for (var C = [], y = 0; y < 12; y++) {
                        var A;
                        ((A = h()(s).add(y, "month")),
                          C.push(h().utc(h().tz(A, h()().tz()).format())));
                      }
                      l.labels = C;
                    }
                    return l;
                  })(e.ctx, r, t, n ? fe[n.timeOption] : "week", i, n),
                );
            },
            [r, n, t, i],
          );
          var p = (function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              n = arguments.length > 2 ? arguments[2] : void 0;
            if (!(arguments.length > 5 ? arguments[5] : void 0)) return {};
            var r = { day: "DD-MM-YYYY", week: "DD-MM-YYYY", month: "MM-YYYY" },
              a = {
                elements: { point: { radius: 0 } },
                animation: { duration: 0 },
                maintainAspectRatio: !1,
                responsive: !0,
                legend: { display: !1 },
                hover: { mode: "index", intersect: !1 },
                interaction: { mode: "index", intersect: !1 },
                plugins: {
                  legend: { display: !1 },
                  tooltip: {
                    enabled: !1,
                    mode: "index",
                    intersect: !1,
                    callbacks: {
                      label: function (e) {
                        return Z(e, "Wh");
                      },
                      title: function (t, n) {
                        if (0 === t.length) return null;
                        var a = t[0].label.split(" ");
                        a = a.join(" ");
                        var o = t[0].dataIndex;
                        if ("week" === e) {
                          var i = h()(t[0].dataset.data[0].x).format(
                              "DD MM YYYY",
                            ),
                            l = h()(
                              h()(t[0].dataset.data[o].x).startOf("week"),
                            ).month(),
                            s = h()(
                              h()(t[0].dataset.data[o].x).endOf("week"),
                            ).month(),
                            c = h()(i, "DD MM YYYY").month();
                          return l < c || (l > s && 0 === c && 0 === s)
                            ? h()(i, "DD MM YYYY").startOf("month").format(r[e])
                            : s > c || (l > s && 0 !== c && 0 === s)
                              ? h()(i, "DD MM YYYY").endOf("month").format(r[e])
                              : t[0]
                                ? h()(t[0].dataset.data[o].x).format(r[e])
                                : "";
                        }
                        return t[0] ? h()(a, "MMM DD, YYYY").format(r[e]) : "";
                      },
                    },
                    external: j,
                    filter: F,
                  },
                  vline: !1,
                },
                layout: { padding: { left: 0, right: 0, top: 50, bottom: 0 } },
                scales: {
                  xAxis: {
                    type: "time",
                    distribution: "linear",
                    offset: !0,
                    grid: { display: !1 },
                    time: {
                      displayFormats: {
                        day: "MM-DD-YYYY",
                        week: "MM-DD-YYYY",
                        month: "MMM",
                      },
                      unit: e || "day",
                      stepSize: 1,
                    },
                    ticks: {
                      color: "rgba(91,103,112, 0.5)",
                      font: { size: 10 },
                      autoSkip: !1,
                      labelOffset: { day: 0, week: 5, month: -3 }[e],
                      callback: function (t, n, r) {
                        if (r.length && "week" === e) {
                          var a = h()
                              .tz(
                                h().tz(r[n].value, h().tz.guess()),
                                h()().tz(),
                              )
                              .startOf("week")
                              .format("MMM DD"),
                            o = h()
                              .tz(
                                h().tz(r[n].value, h().tz.guess()),
                                h()().tz(),
                              )
                              .endOf("week")
                              .format("DD");
                          if (0 === n)
                            ((a = h()
                              .tz(
                                h().tz(r[n].value, h().tz.guess()),
                                h()().tz(),
                              )
                              .startOf("month")
                              .format("MMM DD")),
                              (o = h()
                                .tz(
                                  h().tz(r[n].value, h().tz.guess()),
                                  h()().tz(),
                                )
                                .endOf("week")
                                .format("DD")));
                          else if (n === r.length - 1) {
                            ((a = h()
                              .tz(
                                h().tz(r[n].value, h().tz.guess()),
                                h()().tz(),
                              )
                              .startOf("week")
                              .format("MMM DD")),
                              (o = h()
                                .tz(
                                  h().tz(r[n].value, h().tz.guess()),
                                  h()().tz(),
                                )
                                .endOf("week")
                                .format("DD")));
                            var i = h()(
                                h()
                                  .tz(
                                    h().tz(r[n].value, h().tz.guess()),
                                    h()().tz(),
                                  )
                                  .startOf("week"),
                                "MM-DD-YYYY",
                              ).month(),
                              l = h()(
                                h()
                                  .tz(
                                    h().tz(r[n].value, h().tz.guess()),
                                    h()().tz(),
                                  )
                                  .endOf("week"),
                                "MM-DD-YYYY",
                              ).month();
                            (i < l || 0 === l) &&
                              (o = h()(
                                h()
                                  .tz(
                                    h().tz(r[n].value, h().tz.guess()),
                                    h()().tz(),
                                  )
                                  .startOf("week"),
                              )
                                .endOf("month")
                                .format("DD"));
                          }
                          return "".concat(a, " - ").concat(o);
                        }
                        return r.length && "day" === e
                          ? h()
                              .tz(
                                h().tz(r[n].value, h().tz.guess()),
                                h()().tz(),
                              )
                              .format("MMM DD")
                          : r.length && "month" === e
                            ? h()
                                .tz(
                                  h().tz(r[n].value, h().tz.guess()),
                                  h()().tz(),
                                )
                                .format("MMM")
                            : t;
                      },
                      source: "labels",
                    },
                  },
                  A: {
                    position: "left",
                    min: 0,
                    ticks: {
                      display: !0,
                      color: -1 === t.indexOf("A") ? "#007BC1" : "#CCCCCC",
                      font: { weight: "bold" },
                      callback: function (e, t, n) {
                        return z(e, n, "Wh");
                      },
                    },
                  },
                  B: {
                    id: "B",
                    position: "right",
                    grid: { display: !1 },
                    min: 0,
                    max: 100,
                    ticks: {
                      stepSize: 20,
                      display: !0,
                      color: -1 === t.indexOf("B") ? "#A0C599" : "#CCCCCC",
                      font: { weight: "bold" },
                      callback: function (e) {
                        return "".concat(e, "%");
                      },
                    },
                  },
                },
              };
            return (n && (a.animation = !1), a);
          })(n ? fe[n.timeOption] : "week", a, l, t, r, n);
          return (0, se.jsxs)(Ne, {
            children: [
              (0, se.jsx)(ee.kL, { ref: s, type: "bar", data: u, options: p }),
              (0, se.jsx)(le.h7, {}),
            ],
          });
        }),
        Ne = G.ZP.div(
          pe ||
            (pe = (0, r.default)([
              "\n  height: 350px;\n\n  @media screen and (min-width: 1424px) {\n    height: 500px;\n  }\n",
            ])),
        ),
        je = (function (e) {
          (0, s.default)(n, e);
          var t = (0, c.default)(n);
          function n() {
            var e;
            (0, i.default)(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = {
                showDatePicker: !1,
              }),
              (e.handleSelectActiveWeek = function () {
                setTimeout(function () {
                  var e = document.querySelectorAll(".react-datepicker__week"),
                    t = [];
                  e.forEach(function (e) {
                    return t.push(e);
                  });
                  for (var n = 0, r = t; n < r.length; n++) {
                    r[n].classList.remove("active");
                  }
                  var a = document.getElementsByClassName(
                    "react-datepicker__day--selected",
                  );
                  a.length && a[0].parentNode.classList.add("active");
                }, 10);
              }),
              (e.goToPrevNextDate = function (t) {
                var n = e.props,
                  r = n.changeFilter,
                  a = n.filters,
                  o = a.timeOption,
                  i = a.selectedDayPicker,
                  l = h()(i);
                ((l = (function (e, t, n, r) {
                  return "prev" === r
                    ? e.subtract(t, n)
                    : "next" === r
                      ? e.add(t, n)
                      : void 0;
                })(
                  l,
                  1,
                  { today: "day", "last-7": "week", "last-30": "month" }[o],
                  t,
                )),
                  r({ selectedDayPicker: l }));
              }),
              e
            );
          }
          return (
            (0, l.default)(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.label,
                    r = t.filters,
                    a = t.changeFilter,
                    o = t.icon,
                    i = t.isMobile,
                    l = r || {},
                    s = l.timeOption,
                    c = l.selectedDayPicker,
                    d = this.state.showDatePicker,
                    u = h()(new Date()).startOf("day"),
                    f =
                      (r && h()(r.selectedDayPicker).startOf("day")) ||
                      h()().startOf("day"),
                    p = !0;
                  return (
                    (p = !h()(f).isSame(u)),
                    (0, se.jsxs)(Fe, {
                      timeOption: s,
                      children: [
                        (0, se.jsx)(ze, {
                          onClick: function () {
                            return e.goToPrevNextDate("prev");
                          },
                          isMobile: i,
                          children: (0, se.jsx)(X.Z, {
                            children: "keyboard_arrow_left",
                          }),
                        }),
                        ("today" === s || "last-7" === s) &&
                          (0, se.jsx)(le.Mt, {
                            customInput: (0, se.jsxs)(Be, { children: [o, n] }),
                            selected: c,
                            onChange: function (e) {
                              return a({ selectedDayPicker: e });
                            },
                            onInputClick: function () {
                              (e.setState({ showDatePicker: !d }),
                                e.handleSelectActiveWeek());
                            },
                            onClickOutside: function () {
                              return e.setState({ showDatePicker: !d });
                            },
                            onSelect: function () {
                              return e.setState({ showDatePicker: !d });
                            },
                            onMonthChange: this.handleSelectActiveWeek,
                            onYearChange: this.handleSelectActiveWeek,
                            maxDate: h()().toDate(),
                            locale: h().locale(),
                            utcOffset: h()().utcOffset(),
                            popperPlacement: "bottom",
                            open: d,
                          }),
                        "last-30" === s &&
                          (0, se.jsx)(le.HG, {
                            customInput: (0, se.jsxs)(Be, { children: [o, n] }),
                            type: "month",
                            timezone: h()().tz(),
                            onChange: function (e) {
                              return a({ selectedDayPicker: e });
                            },
                            value: c,
                          }),
                        (0, se.jsx)(He, {
                          onClick: p
                            ? function () {
                                return e.goToPrevNextDate("next");
                              }
                            : null,
                          isMobile: i,
                          disabled: !0,
                          showNextArrow: p,
                          children: (0, se.jsx)(X.Z, {
                            children: "keyboard_arrow_right",
                          }),
                        }),
                      ],
                    })
                  );
                },
              },
            ]),
            n
          );
        })(U.Component),
        Ze = je,
        Fe = G.ZP.div(
          me ||
            (me = (0, r.default)([
              "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 15px;\n  position: relative;\n\n  .react-datepicker {\n    /* left: -75px!important; */\n  }\n\n  ",
              "\n",
            ])),
          function (e) {
            return (
              "last-7" === e.timeOption &&
              "\n    .react-datepicker__week{\n      &:hover, &.active {\n        background: #dcf1ff;\n        border-radius: 20px;\n      }\n    }\n\n    .react-datepicker__day{\n      &:hover{\n        background-color: transparent;\n        border-radius: none;\n      }\n    }\n    .react-datepicker__day--selected{\n      background-color: transparent;\n      border-radius: none;\n      color: #333;\n    }\n  "
            );
          },
        ),
        ze = G.ZP.div(
          ge ||
            (ge = (0, r.default)([
              "\n  left: 0;\n  outline: none;\n  position: absolute;\n  color: #007bc1;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n\n  > span {\n    opacity: 1 !important;\n  }\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (e) {
            return !!e.onClick && "\n    cursor: pointer;\n  ";
          },
          function (e) {
            return !e.isMobile && "\n    left: calc(50% - 250px);\n  ";
          },
        ),
        He = G.ZP.div(
          ve ||
            (ve = (0, r.default)([
              "\n  outline: none;\n  position: absolute;\n  right: 0;\n  color: #007bc1;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  \n  > span {\n    opacity: 1!important;\n  }\n  ",
              "\n  \n  ",
              "\n\n  ",
              "\n",
            ])),
          function (e) {
            return !e.showNextArrow && "\n    opacity: 0.2;\n  ";
          },
          function (e) {
            return !!e.onClick && "\n    cursor: pointer;\n  ";
          },
          function (e) {
            return !e.isMobile && "\n    right: calc(50% - 250px);\n  ";
          },
        ),
        Be = G.ZP.div(
          _e ||
            (_e = (0, r.default)([
              "\n  color: #007bc1;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  padding-top: 2px;\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
            ])),
        ),
        We = n(27707),
        Ve = n(2729),
        Ue = [
          {
            key: "TOTAL_HOUSE_CONSUMPTION",
            name: "CHART_VAR_TOTALHOUSECONSUMPTION",
          },
          { key: "CRITICAL_LOADS", name: "CHART_VAR_CRITICALLOADS" },
          { key: "NON_CRITICAL_LOADS", name: "CHART_VAR_NONCRITICALLOADS" },
          {
            key: "PHOTOVOLTAIC_PRODUCTION_AGG",
            name: "CHART_VAR_PHOTOVOLTAICPRODUCTION",
          },
          {
            key: "BATTERY_STATE_OF_CHARGE",
            name: "CHART_VAR_BATTERYSTATEOFCHARGE",
          },
          { key: "SELF_CONSUMPTION", name: "CHART_VAR_SELFCONSUMPTION" },
          { key: "SELF_SUFFICIENCY", name: "CHART_VAR_SELFSUFFICIENCY" },
          { key: "GRID_INJECTION", name: "CHART_VAR_GRIDINJECTION" },
          { key: "BATTERY_TEMPERATURE", name: "CHART_VAR_BATTERYTEMPERATURE" },
        ],
        Ge = [
          { val: "minute", label: "CHART_EXPORT_GRANULARITY_5MINUTE" },
          { val: "daily", label: "CHART_EXPORT_GRANULARITY_DAILY" },
          { val: "weekly", label: "CHART_EXPORT_GRANULARITY_WEEKLY" },
        ],
        Xe = [
          { timeOption: "today", granularity: "minute" },
          { timeOption: "last-7", granularity: "daily" },
          { timeOption: "last-30", granularity: "weekly" },
        ],
        Ke = [
          {
            variable: "totalHouseConsumption",
            includedInfo: "TOTAL_HOUSE_CONSUMPTION",
          },
          { variable: "criticalLoads", includedInfo: "CRITICAL_LOADS" },
          { variable: "nonCriticalLoads", includedInfo: "NON_CRITICAL_LOADS" },
          {
            variable: "batteryStateOfCharge",
            includedInfo: "BATTERY_STATE_OF_CHARGE",
          },
          {
            variable: "photovoltaicProduction",
            includedInfo: "PHOTOVOLTAIC_PRODUCTION_AGG",
          },
          { variable: "selfConsumption", includedInfo: "SELF_CONSUMPTION" },
          { variable: "selfSufficiency", includedInfo: "SELF_SUFFICIENCY" },
          { variable: "gridInjection", includedInfo: "GRID_INJECTION" },
        ],
        qe = n(42477),
        Je = "".concat(m.CT, "/metrics/export"),
        $e = "".concat(m.CT, "/metrics/export/{frequency}"),
        Qe = {
          startDate: { value: h()().format("DD/MM/YYYY") },
          endDate: { value: h()().format("DD/MM/YYYY") },
          granularity: { value: "daily" },
          includedInfo: { value: [] },
        },
        et = {
          startDate: [qe.q9],
          endDate: [qe.q9],
          granularity: [qe.q9],
          includedInfo: [qe.yD],
        },
        tt = (0, u.Jg)({
          path: function () {
            return ["scenes", "containers", "ExportChartPanel"];
          },
          connect: {
            props: [W.Z, ["isMobile", "translations", "batteryReadyMode"]],
            actions: [W.Z, []],
          },
          actions: function () {
            return {
              change: function (e) {
                return { field: e };
              },
              setForm: function (e) {
                return { form: e };
              },
              setError: function (e) {
                return e;
              },
              submit: function () {
                return !0;
              },
              reset: function () {
                return !1;
              },
              setLoading: function (e) {
                return { loading: e };
              },
            };
          },
          reducers: function (e) {
            var t,
              n,
              r,
              o,
              i = e.actions;
            return {
              form: [
                Qe,
                B().object,
                ((t = {}),
                (0, a.Z)(t, i.change, function (e, t) {
                  return qe.jR(e, t, et);
                }),
                (0, a.Z)(t, i.setForm, function (e, t) {
                  return qe.Yg(t.form, et).form;
                }),
                (0, a.Z)(t, i.reset, function () {
                  return Qe;
                }),
                t),
              ],
              dirty: [
                !1,
                B().bool,
                ((n = {}),
                (0, a.Z)(n, i.change, function () {
                  return !0;
                }),
                (0, a.Z)(n, i.setError, function () {
                  return !0;
                }),
                (0, a.Z)(n, i.reset, function () {
                  return !1;
                }),
                n),
              ],
              error: [
                null,
                B().string,
                ((r = {}),
                (0, a.Z)(r, i.setError, function (e, t) {
                  return t;
                }),
                (0, a.Z)(r, i.reset, function () {
                  return null;
                }),
                (0, a.Z)(r, i.change, function () {
                  return null;
                }),
                (0, a.Z)(r, i.submit, function () {
                  return null;
                }),
                r),
              ],
              loading: [
                !1,
                B().bool,
                ((o = {}),
                (0, a.Z)(o, i.submit, function () {
                  return !0;
                }),
                (0, a.Z)(o, i.setLoading, function (e, t) {
                  return t.loading;
                }),
                (0, a.Z)(o, i.setError, function () {
                  return !1;
                }),
                (0, a.Z)(o, i.reset, function () {
                  return !1;
                }),
                o),
              ],
            };
          },
          start: (0, d.Z)().mark(function e() {
            var t, n, r, a, o, i, l, s, c, u, f;
            return (0, d.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = this.props),
                        (n = t.variables),
                        (r = t.timeFilter),
                        (a = t.timeInterval),
                        (o = this.actionCreators.setForm),
                        (i = []),
                        (l = []),
                        (s = h()().format("DD/MM/YYYY")),
                        (c = h()().format("DD/MM/YYYY")),
                        a[0] && (s = h().unix(a[0]).format("DD/MM/YYYY")),
                        a[1] && (c = h().unix(a[1]).format("DD/MM/YYYY")),
                        (u = (0, b.find)(Xe, function (e) {
                          return e.timeOption === r;
                        })),
                        (0, b.findKey)(n, function (e, t) {
                          e && i.push(t);
                        }),
                        i.forEach(function (e) {
                          var t = (0, b.find)(Ke, function (t) {
                            return t.variable === e;
                          });
                          l.push(t.includedInfo);
                        }),
                        (f = {
                          granularity: { value: u.granularity },
                          includedInfo: { value: l },
                          startDate: { value: s },
                          endDate: { value: c },
                        }),
                        (e.next = 14),
                        (0, x.gz)(o(f))
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
          stop: (0, d.Z)().mark(function e() {
            var t;
            return (0, d.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators.reset),
                        (e.next = 3),
                        (0, x.gz)(t())
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
            var t = e.actions,
              n = e.workers;
            return (0, a.Z)({}, t.submit, n.submit);
          },
          workers: {
            submit: (0, d.Z)().mark(function e() {
              var t,
                n,
                r,
                a,
                o,
                i,
                l,
                s,
                c,
                u,
                p,
                m,
                v,
                _,
                C,
                y,
                A,
                T,
                E,
                D,
                R,
                O;
              return (0, d.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (n = t.setError),
                          (r = t.setLoading),
                          (e.next = 3),
                          this.get("form")
                        );
                      case 3:
                        return (
                          (a = e.sent),
                          (e.next = 6),
                          this.get("translations")
                        );
                      case 6:
                        if (((o = e.sent), !qe.Yg(a, et).invalid)) {
                          e.next = 12;
                          break;
                        }
                        return (
                          (e.next = 11),
                          (0, x.gz)(n(o.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 11:
                      case 19:
                        return e.abrupt("return", !1);
                      case 12:
                        if (
                          ((i = h()(a.startDate.value, "DD/MM/YYYY").format(
                            "DD/MM/YYYY 00:00:00",
                          )),
                          (l = h()(a.endDate.value, "DD/MM/YYYY").format(
                            "DD/MM/YYYY 23:59:59",
                          )),
                          (s = h()(i, "DD/MM/YYYY HH:mm:ss").valueOf()),
                          (c = h()(l, "DD/MM/YYYY HH:mm:ss").valueOf()),
                          !(
                            h()(s).diff(c) > 0 &&
                            a.startDate.value !== a.endDate.value
                          ))
                        ) {
                          e.next = 20;
                          break;
                        }
                        return (
                          (e.next = 19),
                          (0, x.gz)(n(o.CHART_EXPORT_STARTDATE_GREATER_ENDDATE))
                        );
                      case 20:
                        return (
                          (u = (0, b.indexOf)(
                            a.includedInfo.value,
                            "PHOTOVOLTAIC_PRODUCTION_AGG",
                          )),
                          (p = (0, b.cloneDeep)(a.includedInfo.value)),
                          u > -1 &&
                            (p.splice(
                              u + 1,
                              0,
                              "PHOTOVOLTAIC_PRODUCTION_METER_1",
                            ),
                            p.splice(
                              u + 2,
                              0,
                              "PHOTOVOLTAIC_PRODUCTION_METER_2",
                            )),
                          p.splice(0, 0, "DATE"),
                          (p = p.toString()),
                          (m = { from: s, to: c, field: p }),
                          (e.prev = 26),
                          (v = null),
                          (v =
                            "minute" === a.granularity.value
                              ? Je
                              : (0, g.generateUrl)($e, {
                                  frequency: a.granularity.value,
                                })),
                          (e.next = 31),
                          (0, x.RE)(f.Z.get, v, { params: m })
                        );
                      case 31:
                        if (
                          ((_ = e.sent),
                          (C = _.data),
                          (y = C.successful),
                          (A = C.result),
                          !y)
                        ) {
                          e.next = 43;
                          break;
                        }
                        return (
                          (T = A.url),
                          ((E = document.createElement("a")).href = T),
                          (E.download = T.substr(T.lastIndexOf("/") + 1)),
                          document.body.appendChild(E),
                          E.click(),
                          document.body.removeChild(E),
                          (e.next = 43),
                          (0, x.gz)(r(!1))
                        );
                      case 43:
                        e.next = 54;
                        break;
                      case 45:
                        if (
                          ((e.prev = 45),
                          (e.t0 = e.catch(26)),
                          console.log(e.t0),
                          (D = e.t0.response),
                          (R = D.data.result.errors),
                          !(O = (0, Ve.Kw)(R[0].code, "")))
                        ) {
                          e.next = 54;
                          break;
                        }
                        return ((e.next = 54), (0, x.gz)(n(o[O])));
                      case 54:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[26, 45]],
              );
            }),
          },
        }),
        nt = n(89020),
        rt = n(72768),
        at = (function (e) {
          (0, s.default)(n, e);
          var t = (0, c.default)(n);
          function n() {
            return ((0, i.default)(this, n), t.apply(this, arguments));
          }
          return (
            (0, l.default)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.onCancel,
                    n = e.translations,
                    r = e.form,
                    a = e.error,
                    o = e.dirty,
                    i = e.loading,
                    l = e.isMobile,
                    s = e.batteryReadyMode,
                    c = this.actions,
                    d = c.change,
                    u = c.submit,
                    f = n.CHART_EXPORT_PANEL_CANCEL_BUTTON,
                    p = n.CHART_EXPORT_PANEL_EXPORT_BUTTON,
                    x = n.CHART_EXPORT_INCLUDED_INFORMATION,
                    m = n.CHART_EXPORT_SELECTED,
                    g = n.CHART_EXPORT_STARTDATE,
                    v = n.CHART_EXPORT_ENDDATE,
                    _ = n.CHART_EXPORT_DATA_GRANULARITY,
                    C = n.CHART_EXPORT_TITLE,
                    y = n.DASH_NO_BATTERY,
                    A = r.startDate,
                    T = r.endDate,
                    E = r.granularity,
                    D = r.includedInfo;
                  if (i) return (0, se.jsx)(le.CE, {});
                  var R = (0, b.cloneDeep)(Ue);
                  R.forEach(function (e) {
                    ((e.name = n[e.name]),
                      "BATTERY_STATE_OF_CHARGE" === e.key &&
                        s &&
                        (e.help = (0, se.jsx)(le.cB, { label: y })));
                  });
                  var O = (function (e, t) {
                    var n = h()(t, "DD/MM/YYYY").diff(
                        h()(e, "DD/MM/YYYY"),
                        "weeks",
                      ),
                      r = h()(t, "DD/MM/YYYY").diff(
                        h()(e, "DD/MM/YYYY"),
                        "days",
                      ),
                      a = (0, b.cloneDeep)(Ge);
                    if (!e || !t) return null;
                    if (n > 0) return a;
                    if (r > 0) {
                      var o = a
                        .map(function (e) {
                          return e.val;
                        })
                        .indexOf("weekly");
                      return (a.splice(o, 1), a);
                    }
                    var i = a
                      .map(function (e) {
                        return e.val;
                      })
                      .indexOf("daily");
                    return (a.splice(i, 3), a);
                  })(A.value, T.value);
                  O &&
                    O.forEach(function (e) {
                      e.label = n[e.label];
                    });
                  var k = (0, se.jsxs)(le.l0.Buttons, {
                    mobile: !0,
                    smallForm: !0,
                    children: [
                      (0, se.jsx)(le.zx, {
                        id: "Button_Cancel",
                        buttonType: "primary-cancel",
                        margin: "0 7px",
                        buttonWidth: "156px",
                        onClick: t,
                        disabled: i,
                        children: f,
                      }),
                      (0, se.jsx)(le.zx, {
                        id: "Button_Export",
                        buttonWidth: "156px",
                        margin: "0 7px",
                        smallShadow: !0,
                        onClick: u,
                        disabled: i,
                        children: p,
                      }),
                    ],
                  });
                  return (0, se.jsxs)(it, {
                    children: [
                      !l &&
                        (0, se.jsxs)(se.Fragment, {
                          children: [
                            (0, se.jsxs)(le.l0, {
                              mobile: l,
                              position: "absolute",
                              leftPosition: "0",
                              containerHeight: !l && "calc(100vh - 168px)",
                              formmargin: l,
                              children: [
                                (0, se.jsx)(nt.Z, {
                                  dirty: o,
                                  error: a,
                                  full: !0,
                                }),
                                (0, se.jsxs)(le.l0.Row, {
                                  displayType: "flex",
                                  children: [
                                    (0, se.jsx)(le.KS, {
                                      id: "datepickerOne",
                                      onChange: function (e) {
                                        return d({ startDate: e });
                                      },
                                      maxDate: h()().toDate(),
                                      locale: h().locale(),
                                      utcOffset: h()().utcOffset(),
                                      popperPlacement: "bottom",
                                      label: g,
                                      selected: h()(
                                        A.value,
                                        "DD/MM/YYYY",
                                      ).toDate(),
                                      margin: "16px 0 0 8px",
                                    }),
                                    (0, se.jsx)(rt.Z, {
                                      id: "StartDate",
                                      showError: o && !A.valid,
                                      errorMessage: A.message,
                                      full: !0,
                                    }),
                                    (0, se.jsx)(le.KS, {
                                      id: "datepickerTwo",
                                      onChange: function (e) {
                                        return d({ endDate: e });
                                      },
                                      maxDate: h()().toDate(),
                                      locale: h().locale(),
                                      utcOffset: h()().utcOffset(),
                                      popperPlacement: "bottom",
                                      label: v,
                                      selected: h()(
                                        T.value,
                                        "DD/MM/YYYY",
                                      ).toDate(),
                                      margin: "16px 8px 0 8px",
                                    }),
                                    (0, se.jsx)(rt.Z, {
                                      id: "EndDate",
                                      showError: o && !T.valid,
                                      errorMessage: T.message,
                                      full: !0,
                                    }),
                                  ],
                                }),
                                (0, se.jsxs)(le.l0.Row, {
                                  children: [
                                    (0, se.jsx)(le.OC, {
                                      label: _,
                                      options: O,
                                      selected: E.value,
                                      onChange: function (e) {
                                        return d({ granularity: e });
                                      },
                                      containerMargin: !l && "0 8px",
                                      heightAuto: !0,
                                    }),
                                    (0, se.jsx)(rt.Z, {
                                      id: "Granularity",
                                      showError: o && !E.valid,
                                      errorMessage: E.message,
                                      full: !0,
                                    }),
                                  ],
                                }),
                                (0, se.jsxs)(le.l0.Row, {
                                  children: [
                                    (0, se.jsx)(le.LV, {
                                      options: R,
                                      onChange: function (e) {
                                        return d({ includedInfo: e });
                                      },
                                      label: x,
                                      selectedLabel: m,
                                      selected: D.value,
                                      containerMargin: !l && "0 8px",
                                      containerPadding: "16px 0 16px 8px",
                                      color: "#007BC1",
                                    }),
                                    (0, se.jsx)(rt.Z, {
                                      id: "Info",
                                      showError: o && !D.valid,
                                      errorMessage: D.message,
                                      full: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, se.jsxs)(le.l0.Buttons, {
                              fixedSideBar: !0,
                              mobile: !1,
                              children: [
                                (0, se.jsx)(le.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "163px",
                                  onClick: t,
                                  children: f,
                                }),
                                (0, se.jsx)(le.zx, {
                                  id: "Button_Export",
                                  margin: "0 12px",
                                  buttonWidth: "163px",
                                  smallShadow: !0,
                                  onClick: u,
                                  disabled: i,
                                  children: p,
                                }),
                              ],
                            }),
                          ],
                        }),
                      l &&
                        (0, se.jsx)(le.u_, {
                          open: !0,
                          size: "medium",
                          onClose: t,
                          children: (0, se.jsxs)("div", {
                            children: [
                              (0, se.jsx)(le.xB, { title: C }),
                              (0, se.jsx)(le.hz, {
                                type: "diagonal",
                                size: "medium",
                                mobile: l,
                                children: (0, se.jsxs)(le.l0, {
                                  mobile: !0,
                                  padding: "10px",
                                  containerHeight: "calc(80vh - 300px)",
                                  buttons: k,
                                  showButtons: !0,
                                  children: [
                                    (0, se.jsx)(nt.Z, {
                                      dirty: o,
                                      error: a,
                                      full: !0,
                                    }),
                                    (0, se.jsxs)(le.l0.Row, {
                                      padding: !0,
                                      displayType: "inline-flex",
                                      children: [
                                        (0, se.jsx)(le.KS, {
                                          id: "datepickerOne",
                                          onChange: function (e) {
                                            return d({ startDate: e });
                                          },
                                          maxDate: h()().toDate(),
                                          locale: h().locale(),
                                          utcOffset: h()().utcOffset(),
                                          popperPlacement: "bottom",
                                          label: g,
                                          selected: h()(
                                            A.value,
                                            "DD/MM/YYYY",
                                          ).toDate(),
                                        }),
                                        (0, se.jsx)(rt.Z, {
                                          id: "StartDate",
                                          showError: o && !A.valid,
                                          errorMessage: A.message,
                                        }),
                                        (0, se.jsx)(le.KS, {
                                          id: "datepickerTwo",
                                          onChange: function (e) {
                                            return d({ endDate: e });
                                          },
                                          maxDate: h()().toDate(),
                                          locale: h().locale(),
                                          utcOffset: h()().utcOffset(),
                                          popperPlacement: "bottom",
                                          label: v,
                                          margin: "0 0 0 24px",
                                          selected: h()(
                                            T.value,
                                            "DD/MM/YYYY",
                                          ).toDate(),
                                          className: "popupDatepickerTwo",
                                        }),
                                        (0, se.jsx)(rt.Z, {
                                          id: "EndDate",
                                          showError: o && !T.valid,
                                          errorMessage: T.message,
                                        }),
                                      ],
                                    }),
                                    (0, se.jsxs)(le.l0.Row, {
                                      children: [
                                        (0, se.jsx)(le.OC, {
                                          label: _,
                                          options: O,
                                          selected: E.value,
                                          onChange: function (e) {
                                            return d({ granularity: e });
                                          },
                                          heightAuto: !0,
                                        }),
                                        (0, se.jsx)(rt.Z, {
                                          id: "Granularity",
                                          showError: o && !E.valid,
                                          errorMessage: E.message,
                                        }),
                                      ],
                                    }),
                                    (0, se.jsxs)(le.l0.Row, {
                                      children: [
                                        (0, se.jsx)(le.LV, {
                                          options: R,
                                          onChange: function (e) {
                                            return d({ includedInfo: e });
                                          },
                                          label: x,
                                          selectedLabel: m,
                                          selected: D.value,
                                          color: "#007BC1",
                                        }),
                                        (0, se.jsx)(rt.Z, {
                                          id: "IncludedInfo",
                                          showError: o && !D.valid,
                                          errorMessage: D.message,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(U.Component),
        ot = tt(at),
        it = G.ZP.div(be || (be = (0, r.default)([""]))),
        lt = n(93983),
        st = (function (e) {
          (0, s.default)(n, e);
          var t = (0, c.default)(n);
          function n() {
            return ((0, i.default)(this, n), t.apply(this, arguments));
          }
          return (
            (0, l.default)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.filters,
                    n = e.variables,
                    r = e.loading,
                    i = e.fetching,
                    l = e.metrics,
                    s = e.averages,
                    c = e.todayChart,
                    d = e.isMobile,
                    u = e.ticksToHide,
                    f = e.translations,
                    p = e.invalidTimezone,
                    x = e.viewTzMessage,
                    m = e.currentDevice,
                    v = e.exportChartPanelState,
                    _ = e.batteryReadyMode,
                    b = e.noBatteryDetails,
                    C = this.actions,
                    y = C.changeFilter,
                    A = C.changeVariable,
                    T = C.navigate,
                    E = C.showInvalidTzMessage,
                    D = C.hideInvalidTzMessage,
                    I = C.openExportChartPanel,
                    M = C.closeExportChartPanel,
                    S = C.setNoBatteryDetails;
                  (0, C.checkLocationState)();
                  var Y = f.CHART_TITLE,
                    L = f.CHART_VAR_TOTALHOUSECONSUMPTION,
                    P = f.CHART_VAR_CRITICALLOADS,
                    w = f.CHART_VAR_NONCRITICALLOADS,
                    N = f.CHART_VAR_PHOTOVOLTAICPRODUCTION,
                    j = f.CHART_VAR_BATTERYSTATEOFCHARGE,
                    Z = f.CHART_VAR_SELFCONSUMPTION,
                    F = f.CHART_INTERVAL_FROM,
                    z = f.CHART_INTERVAL_TO,
                    H = f.CHART_INVALID_TIMEZONE_WAR_TITLE,
                    B = f.CHART_INVALID_TIMEZONE_WAR_DESC,
                    W = f.CHART_INVALID_TIMEZONE_WAR_BUTTON,
                    V = f.CHART_VAR_SUM,
                    U = f.CHART_VAR_AVERAGE,
                    G = f.CHART_VAR_SELFSUFFICIENCY,
                    K = f.CHART_EXPORT_BUTTON,
                    J = f.CHART_EXPORT_TITLE,
                    $ = f.DASH_NO_BATTERY,
                    Q = f.CHART_NOBATTERY_ERROR_DESCRIPTION,
                    ee = {};
                  ee = d
                    ? k.map(function (e) {
                        return (0, o.default)((0, o.default)({}, e), {
                          label: f[e.label],
                        });
                      })
                    : O.map(function (e) {
                        return (0, o.default)((0, o.default)({}, e), {
                          label: f[e.label],
                        });
                      });
                  var te = d ? "DD/MM/YYYY" : R,
                    ne = l.from ? h().unix(l.from).format(te) : "",
                    re = l.to ? h().unix(l.to).format(te) : "",
                    ae = d
                      ? "".concat(ne, " - ").concat(re)
                      : (0, se.jsxs)("div", {
                          children: [
                            (0, se.jsx)("span", { children: F }),
                            " ",
                            ne,
                            " ",
                            (0, se.jsx)("span", { children: z }),
                            " ",
                            re,
                          ],
                        }),
                    oe =
                      "today" === t.timeOption
                        ? h()(
                            h()(t.selectedDayPicker).format("DD-MM-YYYY"),
                            "DD-MM-YYYY",
                          ).format(R)
                        : ae,
                    ie = (0, se.jsx)(Ze, {
                      label: oe,
                      icon: (0, se.jsx)(pt, {}),
                      filters: t,
                      changeFilter: y,
                      isMobile: d,
                    }),
                    de = (0, se.jsxs)(ut, {
                      children: [
                        i && (0, se.jsx)(le.CE, { blue: "true" }),
                        c
                          ? (0, se.jsx)(ce, {
                              ticksToHide: u,
                              viewSun: !p,
                              showInvalidTzMessage: E,
                            })
                          : (0, se.jsx)(we, { ticksToHide: u }),
                      ],
                    }),
                    ue = function (e, t, r, o) {
                      var l =
                          arguments.length > 4 && void 0 !== arguments[4]
                            ? arguments[4]
                            : "w",
                        c =
                          arguments.length > 5 && void 0 !== arguments[5]
                            ? arguments[5]
                            : "",
                        d =
                          arguments.length > 6 &&
                          void 0 !== arguments[6] &&
                          arguments[6],
                        u = s && s[e];
                      if (o) {
                        var f = (0, g.getEnergyValue)(u, "Wh");
                        ((u = f ? f.value : u), (l = f && f.unit));
                      } else u = u && q()(u, 2);
                      var p = d ? "#A0C599" : "#0067C6";
                      return (0, se.jsxs)(xt, {
                        children: [
                          (0, se.jsx)(vt, {
                            disabled: i,
                            checked: n[e],
                            onChange: function () {
                              return A((0, a.Z)({}, e, !n[e]));
                            },
                          }),
                          (0, se.jsx)(mt, { children: t }),
                          (0, se.jsxs)(gt, {
                            children: [
                              (0, se.jsx)("span", { children: r }),
                              "batteryStateOfCharge" === e &&
                                _ &&
                                (0, se.jsx)(le.cB, {
                                  label: $,
                                  onClick: function () {
                                    return S(!0);
                                  },
                                }),
                            ],
                          }),
                          (0, se.jsx)(le.zX, {
                            value: u,
                            unit: l,
                            filterColor: p,
                            label: c,
                          }),
                        ],
                      });
                    },
                    fe = (0, se.jsxs)(ht, {
                      children: [
                        ue(
                          "totalHouseConsumption",
                          (0, se.jsx)(le.Gs, {}),
                          L,
                          !0,
                          "w",
                          V,
                        ),
                        ue(
                          "criticalLoads",
                          (0, se.jsx)(le.yz, {}),
                          P,
                          !0,
                          "w",
                          V,
                        ),
                        ue(
                          "nonCriticalLoads",
                          (0, se.jsx)(le.Ph, {}),
                          w,
                          !0,
                          "w",
                          V,
                        ),
                        ue(
                          "batteryStateOfCharge",
                          (0, se.jsx)(le.lY, {}),
                          j,
                          !1,
                          "%",
                          U,
                          !0,
                        ),
                        m.hasPv &&
                          ue(
                            "photovoltaicProduction",
                            (0, se.jsx)(le.el, {}),
                            N,
                            !0,
                            "w",
                            V,
                          ),
                        !c &&
                          m.hasPv &&
                          ue(
                            "selfConsumption",
                            (0, se.jsx)(le.hj, {}),
                            Z,
                            !1,
                            "%",
                            U,
                            !0,
                          ),
                        !c &&
                          m.hasPv &&
                          ue(
                            "selfSufficiency",
                            (0, se.jsx)(le.Wl, {}),
                            G,
                            !1,
                            "%",
                            U,
                            !0,
                          ),
                      ],
                    }),
                    pe = [
                      {
                        id: "ExportChart",
                        key: "export-print",
                        icon: (0, se.jsx)(At, {}),
                        title: K,
                        link: !0,
                        onClick: function () {
                          return I();
                        },
                      },
                    ];
                  return (0, se.jsxs)(dt, {
                    children: [
                      !!r && (0, se.jsx)(le.gb, {}),
                      !r &&
                        p &&
                        x &&
                        (0, se.jsx)(le.P3, {
                          icon: (0, se.jsx)(X.Z, { children: "report" }),
                          title: H,
                          text: B,
                          onClose: D,
                          buttons: (0, se.jsxs)(le.zx, {
                            buttonWidth: "156px",
                            onClick: function () {
                              return T("/settings/general/");
                            },
                            children: [
                              (0, se.jsx)(X.Z, { children: "settings" }),
                              W,
                            ],
                          }),
                          mobile: d,
                          closable: !0,
                        }),
                      (0, se.jsx)(le.V1, {
                        paddingTop: d ? "12px" : "0px",
                        mobile: d,
                        blue: d,
                        children: Y,
                      }),
                      d &&
                        (0, se.jsxs)("div", {
                          children: [
                            ie,
                            (0, se.jsx)(ft, {
                              children: (0, se.jsx)(le.jL, {
                                value: t.timeOption,
                                onChange: function (e) {
                                  return y({ timeOption: e });
                                },
                                options: ee,
                              }),
                            }),
                            de,
                            fe,
                            (0, se.jsx)(lt.Z, {
                              margin: "48px 0 16px 0",
                              items: pe,
                              page: "",
                            }),
                          ],
                        }),
                      !d &&
                        (0, se.jsxs)("div", {
                          children: [
                            (0, se.jsx)(_t, {
                              children: (0, se.jsx)(le.T5, {
                                items: ee.map(function (e) {
                                  return { slug: e.val, name: e.label };
                                }),
                                selected: t.timeOption,
                                onChange: function (e) {
                                  return y({ timeOption: e });
                                },
                              }),
                            }),
                            (0, se.jsxs)(bt, {
                              children: [
                                (0, se.jsxs)(Ct, { children: [ie, de] }),
                                (0, se.jsx)(yt, {
                                  children: (0, se.jsxs)(se.Fragment, {
                                    children: [
                                      (0, se.jsx)(Tt, {
                                        children: (0, se.jsxs)(le.rU, {
                                          onClick: I,
                                          children: [
                                            (0, se.jsx)(At, {}),
                                            (0, se.jsx)("span", {
                                              children: K,
                                            }),
                                          ],
                                        }),
                                      }),
                                      fe,
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      !d &&
                        (0, se.jsx)(We.Z, {
                          overlay: !0,
                          open: v,
                          onClose: M,
                          fixed: v,
                          title: J,
                          children: (0, se.jsx)(ot, {
                            timeFilter: t.timeOption,
                            variables: n,
                            timeInterval: [l.from, l.to],
                            onCancel: M,
                          }),
                        }),
                      d &&
                        v &&
                        (0, se.jsx)(ot, {
                          timeFilter: t.timeOption,
                          variables: n,
                          timeInterval: [l.from, l.to],
                          onCancel: M,
                        }),
                      b &&
                        (0, se.jsx)(le.P3, {
                          icon: (0, se.jsx)(le.Np, {
                            fillColor: "#CA3C3D",
                            size: { width: 20, height: 20 },
                          }),
                          title: $,
                          text: Q,
                          mobile: d,
                          onClose: function () {
                            return S(!1);
                          },
                          closable: !0,
                        }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(U.Component),
        ct = V(st),
        dt = G.ZP.div(
          Ce ||
            (Ce = (0, r.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n  }\n",
            ])),
        ),
        ut = G.ZP.div(
          ye || (ye = (0, r.default)(["\n  position: relative;\n"])),
        ),
        ft = G.ZP.div(
          Ae ||
            (Ae = (0, r.default)([
              "\n  position: absolute;\n  right: 20px;\n  top: 55px;\n  display: flex;\n  align-items: center;\n  height: 30px;\n}\n\n  @media screen and (min-width: 550px) and (max-width: 1024px) {\n    right: 70px;\n    top: 75px;\n  }\n\n  label{\n    @media screen and (max-width: 368px) {\n      font-size: 12px;\n    }\n  }\n",
            ])),
        ),
        pt = (0, G.ZP)(function (e) {
          return (0, se.jsx)(le.xh, (0, o.default)({}, e));
        })(
          Te ||
            (Te = (0, r.default)([
              "\n  margin: 0 5px 0;\n  float: left;\n  width: 20px;\n  height: 20px;\n",
            ])),
        ),
        ht = G.ZP.div(Ee || (Ee = (0, r.default)(["\n  margin-top: 14px;\n"]))),
        xt = G.ZP.div(
          De ||
            (De = (0, r.default)([
              "\n  display: flex;\n  align-items: center;\n  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.05);\n  padding: 8px 0;\n  position: relative;\n",
            ])),
        ),
        mt = G.ZP.div(
          Re ||
            (Re = (0, r.default)([
              "\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n\n  svg {\n    @media screen and (max-width: 400px) {\n      width: 40px;\n      height: 40px;\n    }\n  }\n",
            ])),
        ),
        gt = G.ZP.div(
          Oe ||
            (Oe = (0, r.default)([
              "\n  display: flex;\n  flex-direction: column;\n\n  font-size: 14px;\n  color: #5b6770;\n  line-height: 20px;\n  width: 51%;\n\n  @media screen and (max-width: 1350px) {\n    width: 29%;\n  }\n\n  @media screen and (max-width: 400px) {\n    width: 43%;\n  }\n",
            ])),
        ),
        vt = (0, G.ZP)(le.XZ)(
          ke || (ke = (0, r.default)(["\n  font-size: 18px !important;\n"])),
        ),
        _t = G.ZP.div(Ie || (Ie = (0, r.default)(["\n  margin-top: 30px;\n"]))),
        bt = G.ZP.div(
          Me ||
            (Me = (0, r.default)([
              "\n  display: flex;\n  padding-top: 20px;\n  align-items: center;\n  position: relative;\n",
            ])),
        ),
        Ct = G.ZP.div(
          Se ||
            (Se = (0, r.default)([
              "\n  width: 66%;\n  background-color: #fdfdfd;\n  border-radius: 6px;\n  box-shadow: 0 0 10px 0 rgba(114, 126, 132, 0.1);\n  position: relative;\n  padding: 20px;\n  padding-top: 30px;\n\n  > div {\n    text-align: center;\n    margin-bottom: 20px;\n    font-size: 16px;\n    color: #424e54;\n    opacity: 1;\n\n    span {\n      opacity: 0.5;\n      font-weight: 400;\n    }\n  }\n",
            ])),
        ),
        yt = G.ZP.div(
          Ye ||
            (Ye = (0, r.default)([
              "\n  width: 33%;\n  padding-left: 30px;\n  position: absolute;\n  top: 0;\n  left: 66%;\n",
            ])),
        ),
        At = G.ZP.div(
          Le ||
            (Le = (0, r.default)([
              "\n  background: url(",
              ") no-repeat center center;\n  height: 20px;\n  width: 20px;\n  margin-right: 4px;\n",
            ])),
          J,
        ),
        Tt = G.ZP.div(
          Pe ||
            (Pe = (0, r.default)([
              "\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n",
            ])),
        );
    },
  },
]);
//# sourceMappingURL=7165.b6485c70.chunk.js.map
