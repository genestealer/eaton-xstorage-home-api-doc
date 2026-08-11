(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [6199],
  {
    76948: function (e, t, n) {
      "use strict";
      n.d(t, {
        ET: function () {
          return d;
        },
        HH: function () {
          return f;
        },
        UD: function () {
          return h;
        },
        YV: function () {
          return i;
        },
        eQ: function () {
          return s;
        },
        eT: function () {
          return v;
        },
        lJ: function () {
          return l;
        },
        wS: function () {
          return a;
        },
        x_: function () {
          return u;
        },
      });
      var r = n(94467),
        o = n.n(r),
        c = n(90012),
        a = {
          SET_CHARGE: ["power", "soc"],
          SET_DISCHARGE: ["power", "soc"],
          SET_BASIC_MODE: [],
          SET_MAXIMIZE_AUTO_CONSUMPTION: [],
          SET_VARIABLE_GRID_INJECTION: ["maximumPower"],
          SET_FREQUENCY_REGULATION: ["powerAllocation", "optimalSoc"],
          SET_PEAK_SHAVING: ["maxHousePeakConsumption"],
        },
        u = "SET_BASIC_MODE",
        i = "SET_VARIABLE_GRID_INJECTION",
        s = function (e) {
          if (!e) return {};
          if (-1 !== ["SET_CHARGE", "SET_DISCHARGE"].indexOf(e.command))
            ((e.parameters.action =
              "SET_CHARGE" === e.command
                ? "ACTION_CHARGE"
                : "ACTION_DISCHARGE"),
              (e.command = "SET_CHARGE"));
          else if ("SET_PEAK_SHAVING" === e.command) {
            var t = parseInt(e.parameters.maxHousePeakConsumption);
            e.parameters.maxHousePeakConsumption = t;
          }
          return e;
        },
        f = function (e) {
          return (
            e &&
              "SET_CHARGE" === e.command &&
              (e.command =
                "ACTION_CHARGE" === e.action ? "SET_CHARGE" : "SET_DISCHARGE"),
            e
          );
        },
        l = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          if (!t || "" === t || !e) return null;
          var r = n && Object.keys(n).length > 0;
          return (
            "SET_CHARGE" === t &&
              r &&
              (t =
                "ACTION_CHARGE" === n.action ? "SET_CHARGE" : "SET_DISCHARGE"),
            e["OPERATION_MODE_".concat(t)]
          );
        },
        d = function (e) {
          return -1 !==
            ["soc", "power", "powerAllocation", "optimalSoc"].indexOf(e)
            ? "%"
            : -1 !== ["maximumPower"].indexOf(e)
              ? "W"
              : "";
        },
        v = function (e) {
          var t = "",
            n = 0;
          if (e) {
            var r = ""
                .concat(o()().format("MM-DD-YYYY"), " ")
                .concat((0, c.convertFromMilitaryTime)(e)),
              a = o()().format("MM-DD-YYYY HH:mm"),
              u = o()(r, "MM-DD-YYYY HH:mm").unix(),
              i = o()(a, "MM-DD-YYYY HH:mm").unix();
            (u < i &&
              ((r = ""
                .concat(o()().add(1, "day").format("MM-DD-YYYY"), " ")
                .concat((0, c.convertFromMilitaryTime)(e))),
              (u = o()(r, "MM-DD-YYYY HH:mm").unix())),
              (n = u - i),
              (n = Math.round(n / 60)));
            var s = Math.floor(n / 60),
              f = n % 60;
            t = "".concat(s, "h").concat(f, "m");
          }
          return { left: n, label: t };
        },
        h = function (e, t) {
          if (!e || !t) return !1;
          var n = a[e.command],
            r = !1;
          return (
            t.command.value === e.command &&
              n.length > 0 &&
              ((r = !0),
              n.forEach(function (n) {
                t[n].value !== e.parameters[n] && (r = !1);
              })),
            r
          );
        };
    },
    30375: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return o;
        },
      });
      var r = JSON.parse(
          '{"ADD_NEW_EVENT":["customer","technician"],"EDIT_EVENT":["customer","technician"],"DELETE_EVENT":["customer","technician"],"EDIT_UNIT_SETTINGS":["customer","technician"],"EDIT_UNIT_DEFAULT_OPERATION_MODE":["customer","technician"],"UNIT_POWER_ON_OFF":["customer","technician"],"CHANGE_OPERATION_MODE":["customer","technician"],"CHANGE_UNIT_OWNER":["customer","technician"],"EDIT_BLOCK_STATUS":["technician"],"SUPPORT_UNIT_LOG":["customer","technician"],"VIEW_SUPPORT_MAINTENANCE_OPTIONS":["customer","technician"],"REBOOT_UNIT":["technician"],"SUPPORT_HTTPS_TUNNEL":["customer","technician"]}',
        ),
        o = function (e, t) {
          var n = r[e];
          return !!n && -1 !== n.indexOf(t);
        };
    },
    30068: function (e, t, n) {
      "use strict";
      var r = n(87121),
        o = n(31105),
        c = n(6892),
        a = n(84628),
        u = n(49745),
        i = n(83749),
        s = n(13795),
        f = n(90012),
        l = n(8712),
        d = n(30375),
        v = n(98278),
        h = n.n(v),
        E = n(49318),
        p = "".concat(s.CT, "/device/status"),
        S = "".concat(s.CT, "/device/power");
      t.Z = (0, a.Jg)({
        path: function () {
          return ["scenes", "Dashboard"];
        },
        connect: {
          values: [
            E.Z,
            [
              "currentDevice",
              "appLoading",
              "isMobile",
              "user",
              "translations",
              "userRole",
              "userValid",
            ],
          ],
          actions: [
            E.Z,
            [
              "logout",
              "fetchCurrentDeviceInfo",
              "setCurrentDeviceInfo",
              "push",
            ],
          ],
        },
        actions: function () {
          return {
            fetchDeviceStatus: !0,
            updateDeviceStatus: !0,
            incrementPriorityCount: !0,
            setDeviceStatus: function (e) {
              return { status: e };
            },
            showModal: function (e) {
              return { modal: e };
            },
            hideModal: function (e) {
              return { modal: e };
            },
            showMultiPVDetails: function (e) {
              return { multipvdetails: e };
            },
            hideMultiPVDetails: function (e) {
              return { multipvdetails: e };
            },
            error: !0,
            reset: !0,
            changeToPowerOn: !0,
          };
        },
        reducers: function (e) {
          e.actions;
          return {
            partialDeviceStatus: [
              {},
              h().object,
              {
                setDeviceStatus: function (e, t) {
                  return t.status;
                },
                reset: function () {
                  return {};
                },
              },
            ],
            fetchWithPriority: [
              !1,
              h().bool,
              {
                updateDeviceStatus: function () {
                  return !0;
                },
              },
            ],
            fetchWithPriorityCount: [
              0,
              h().number,
              {
                updateDeviceStatus: function () {
                  return 0;
                },
                incrementPriorityCount: function (e) {
                  return e + 1;
                },
              },
            ],
            visibleModals: [
              [],
              h().array,
              {
                showModal: function (e, t) {
                  var n = t.modal;
                  return [].concat((0, c.Z)(e), [n]);
                },
                hideModal: function (e, t) {
                  var n = t.modal;
                  return e.filter(function (e) {
                    return e !== n;
                  });
                },
                updateDeviceStatus: function () {
                  return [];
                },
                reset: function () {
                  return [];
                },
              },
            ],
            loading: [
              !0,
              h().bool,
              {
                reset: function () {
                  return !0;
                },
                setDeviceStatus: function () {
                  return !1;
                },
                error: function () {
                  return !1;
                },
                setCurrentDeviceInfo: function () {
                  return !1;
                },
                changeToPowerOn: function () {
                  return !0;
                },
              },
            ],
            multipvdetails: [
              !1,
              h().bool,
              {
                reset: function () {
                  return !1;
                },
                showMultiPVDetails: function () {
                  return !0;
                },
                hideMultiPVDetails: function () {
                  return !1;
                },
              },
            ],
            error: [
              !1,
              h().bool,
              {
                reset: function () {
                  return !1;
                },
                setDeviceStatus: function () {
                  return !1;
                },
                error: function () {
                  return !0;
                },
              },
            ],
          };
        },
        selectors: {
          deviceStatus: [
            function (e) {
              return [e.partialDeviceStatus, e.translations];
            },
            function (e, t) {
              var n = (e || {}).energyFlow;
              if (!n) return e;
              var r = t["BATTERY_STATUS_".concat(n.batteryStatus)],
                c = {
                  energyFlow: (0, o.default)((0, o.default)({}, e.energyFlow), {
                    batteryStatus: r,
                  }),
                };
              return (0, o.default)((0, o.default)({}, e), c);
            },
          ],
          multipleSolarPanels: [
            function (e) {
              return [e.deviceStatus];
            },
            function (e) {
              return (0, l.T)(e);
            },
          ],
          userCanPowerUnit: [
            function (e) {
              return [e.userRole];
            },
            function (e) {
              return (0, d.m)("UNIT_POWER_ON_OFF", e);
            },
          ],
        },
        start: (0, r.Z)().mark(function e() {
          return (0, r.Z)().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (0, f.log)("[XS-Dashboard] Start Scene ", "yellow"),
                      (e.next = 3),
                      (0, i.gz)(this.actionCreators.fetchDeviceStatus())
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
        stop: (0, r.Z)().mark(function e() {
          return (0, r.Z)().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (0, f.log)("[XS-Dashboard] Stop Scene"),
                      (e.next = 3),
                      (0, i.gz)(this.actionCreators.reset())
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
          e.actions;
          var t = e.workers;
          return {
            fetchDeviceStatus: t.fetchDeviceStatus,
            updateDeviceStatus: t.fetchDeviceStatus,
            changeToPowerOn: t.changeToPowerOn,
          };
        },
        workers: {
          fetchDeviceStatus: (0, r.Z)().mark(function () {
            var e, t, n, o, c, a, l, d, v, h, E, S, T;
            return (0, r.Z)().wrap(
              function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (0, f.log)("[XS-Dashboard] fetchDeviceStatus"),
                        (e = this.actionCreators),
                        (t = e.fetchDeviceStatus),
                        (n = e.setDeviceStatus),
                        (o = e.error),
                        (c = e.incrementPriorityCount),
                        (r.prev = 2),
                        (r.next = 5),
                        this.get("currentDevice")
                      );
                    case 5:
                      return (
                        (a = r.sent),
                        (r.next = 8),
                        this.get("appLoading")
                      );
                    case 8:
                      if (((l = r.sent), a.id || !l)) {
                        r.next = 14;
                        break;
                      }
                      return ((r.next = 12), (0, i.gw)(1e3));
                    case 12:
                      return ((r.next = 14), (0, i.gz)(t()));
                    case 14:
                      return ((r.next = 16), (0, i.RE)(u.Z.get, p));
                    case 16:
                      if (
                        ((d = r.sent),
                        (v = d.data || {}),
                        (h = v.result),
                        !v.successful)
                      ) {
                        r.next = 36;
                        break;
                      }
                      return ((r.next = 21), (0, i.gz)(n(h)));
                    case 21:
                      return (
                        (E = s.E2),
                        (r.next = 24),
                        this.get("fetchWithPriority")
                      );
                    case 24:
                      return (
                        (S = r.sent),
                        (r.next = 27),
                        this.get("fetchWithPriorityCount")
                      );
                    case 27:
                      if (((T = r.sent), !(S && T < 6))) {
                        r.next = 32;
                        break;
                      }
                      return ((E = 5e3), (r.next = 32), (0, i.gz)(c()));
                    case 32:
                      return ((r.next = 34), (0, i.gw)(E));
                    case 34:
                      r.next = 42;
                      break;
                    case 36:
                      return ((r.next = 38), (0, i.gz)(o()));
                    case 38:
                      return ((r.next = 40), (0, i.gz)(n({})));
                    case 40:
                      return ((r.next = 42), (0, i.gw)(1e4));
                    case 42:
                      r.next = 52;
                      break;
                    case 44:
                      return (
                        (r.prev = 44),
                        (r.t0 = r.catch(2)),
                        (r.next = 48),
                        (0, i.gz)(o())
                      );
                    case 48:
                      return ((r.next = 50), (0, i.gz)(n({})));
                    case 50:
                      return ((r.next = 52), (0, i.gw)(1e4));
                    case 52:
                      return ((r.next = 54), (0, i.gz)(t()));
                    case 54:
                    case "end":
                      return r.stop();
                  }
              },
              t,
              this,
              [[2, 44]],
            );
          }),
          changeToPowerOn: (0, r.Z)().mark(function e() {
            var t, n, o, c, a, s;
            return (0, r.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (0, f.log)("[XS-Dashboard] changeToPowerOn"),
                        (t = this.actionCreators),
                        (n = t.fetchCurrentDeviceInfo),
                        (o = t.error),
                        (e.prev = 2),
                        (e.next = 5),
                        this.get("currentDevice")
                      );
                    case 5:
                      return (
                        (c = e.sent),
                        (a = { parameters: { state: !0 } }),
                        (s = (0, f.generateUrl)(S, { id: c.id })),
                        (e.next = 10),
                        (0, i.RE)(u.Z.post, s, a)
                      );
                    case 10:
                      return ((e.next = 12), (0, i.gw)(5e3));
                    case 12:
                      return ((e.next = 14), (0, i.gz)(n()));
                    case 14:
                      e.next = 21;
                      break;
                    case 16:
                      return (
                        (e.prev = 16),
                        (e.t0 = e.catch(2)),
                        console.log(e.t0),
                        (e.next = 21),
                        (0, i.gz)(o("Error trying to change device state"))
                      );
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[2, 16]],
            );
          }),
        },
      });
    },
    8712: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return r;
        },
      });
      var r = function (e) {
        var t = (e || {}).energyFlow;
        if (!t) return {};
        var n = t.acPvValue + t.dcPvValue,
          r = 0,
          o = "",
          c = "",
          a = 0;
        return (
          "DISCONNECTED" === t.acPvRole && "DISCONNECTED" === t.dcPvRole
            ? (r = 0)
            : ("DISCONNECTED" === t.acPvRole &&
                  "DISCONNECTED" !== t.dcPvRole) ||
                ("DISCONNECTED" !== t.acPvRole && "DISCONNECTED" === t.dcPvRole)
              ? ((r = 1),
                "DISCONNECTED" !== t.acPvRole
                  ? ((o = t.acPvRole), (a = t.acPvValue), (c = "ac"))
                  : ((o = t.dcPvRole), (a = t.dcPvValue), (c = "dc")))
              : (r = 2),
          {
            acPvRole: t.acPvRole,
            acPvValue: t.acPvValue,
            dcPvRole: t.dcPvRole,
            dcPvValue: t.dcPvValue,
            pvValueSum: n,
            numberPV: r,
            onePvType: c,
            onePvRole: o,
            onePvValue: a,
          }
        );
      };
    },
    5745: function (e, t, n) {
      "use strict";
      (n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        }));
      var r,
        o = n(56824),
        c = n(30225),
        a = n(94404),
        u = n(14482),
        i = n(5189),
        s = n(76431),
        f = n(87121),
        l = n(2845),
        d = n(84628),
        v = n(83749),
        h = n(69242),
        E = n(98278),
        p = n.n(E),
        S = n(49318),
        T = (0, d.Jg)({
          path: function () {
            return ["scenes", "OperationMode"];
          },
          connect: { props: [S.Z, ["translations"]], actions: [S.Z, ["push"]] },
          actions: function () {
            return {
              showOperationModeHelp: function () {
                return {};
              },
              hideOperationModeHelp: function () {
                return {};
              },
              reset: function () {
                return !1;
              },
            };
          },
          reducers: function (e) {
            var t,
              n = e.actions;
            return {
              operationModeHelpVisible: [
                !1,
                p().bool,
                ((t = {}),
                (0, l.Z)(t, n.showOperationModeHelp, function (e, t) {
                  return !0;
                }),
                (0, l.Z)(t, n.hideOperationModeHelp, function (e, t) {
                  return !1;
                }),
                t),
              ],
            };
          },
          stop: (0, f.Z)().mark(function e() {
            var t;
            return (0, f.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators.reset),
                        (0, h.log)("[XS-OperationMode] Stop Scene"),
                        (e.next = 4),
                        (0, v.gz)(t())
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
        }),
        m = n(30588),
        D = n(77835),
        _ = n(95557),
        C = n(11228),
        O = n(22247),
        P = n(31228),
        x = (function (e) {
          (0, u.default)(n, e);
          var t = (0, i.default)(n);
          function n() {
            var e;
            (0, c.default)(this, n);
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
              o[a] = arguments[a];
            return (
              ((e = t.call.apply(t, [this].concat(o))).navigate = function (t) {
                (0, e.actions.push)(t);
              }),
              e
            );
          }
          return (
            (0, a.default)(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.operationModeHelpVisible,
                    r = t.translations,
                    o = this.actions,
                    c = o.showOperationModeHelp,
                    a = o.hideOperationModeHelp,
                    u = r.DASH_OPERATION_MODE_TITLE;
                  return (0, P.jsxs)(I, {
                    children: [
                      (0, P.jsxs)(D.Z, {
                        variant: "h4",
                        children: [u, " ", (0, P.jsx)(O.MG, { onClick: c })],
                      }),
                      (0, P.jsx)(_.Z, {
                        onCancel: function () {
                          return e.navigate("/");
                        },
                      }),
                      (0, P.jsx)(C.Z, { open: n, onClose: a }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(s.Component),
        g = T(x),
        I = m.ZP.div(
          r ||
            (r = (0, o.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0px;\n",
            ])),
        );
    },
    69242: function () {},
  },
]);
//# sourceMappingURL=6199.b776cc61.chunk.js.map
