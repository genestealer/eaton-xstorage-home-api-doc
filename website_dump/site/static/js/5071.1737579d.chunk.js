(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [5071],
  {
    76948: function (e, n, t) {
      "use strict";
      t.d(n, {
        ET: function () {
          return E;
        },
        HH: function () {
          return l;
        },
        UD: function () {
          return m;
        },
        YV: function () {
          return s;
        },
        eQ: function () {
          return c;
        },
        eT: function () {
          return f;
        },
        lJ: function () {
          return d;
        },
        wS: function () {
          return o;
        },
        x_: function () {
          return u;
        },
      });
      var r = t(94467),
        a = t.n(r),
        i = t(90012),
        o = {
          SET_CHARGE: ["power", "soc"],
          SET_DISCHARGE: ["power", "soc"],
          SET_BASIC_MODE: [],
          SET_MAXIMIZE_AUTO_CONSUMPTION: [],
          SET_VARIABLE_GRID_INJECTION: ["maximumPower"],
          SET_FREQUENCY_REGULATION: ["powerAllocation", "optimalSoc"],
          SET_PEAK_SHAVING: ["maxHousePeakConsumption"],
        },
        u = "SET_BASIC_MODE",
        s = "SET_VARIABLE_GRID_INJECTION",
        c = function (e) {
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
        l = function (e) {
          return (
            e &&
              "SET_CHARGE" === e.command &&
              (e.command =
                "ACTION_CHARGE" === e.action ? "SET_CHARGE" : "SET_DISCHARGE"),
            e
          );
        },
        d = function () {
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
        E = function (e) {
          return -1 !==
            ["soc", "power", "powerAllocation", "optimalSoc"].indexOf(e)
            ? "%"
            : -1 !== ["maximumPower"].indexOf(e)
              ? "W"
              : "";
        },
        f = function (e) {
          var n = "",
            t = 0;
          if (e) {
            var r = ""
                .concat(a()().format("MM-DD-YYYY"), " ")
                .concat((0, i.convertFromMilitaryTime)(e)),
              o = a()().format("MM-DD-YYYY HH:mm"),
              u = a()(r, "MM-DD-YYYY HH:mm").unix(),
              s = a()(o, "MM-DD-YYYY HH:mm").unix();
            (u < s &&
              ((r = ""
                .concat(a()().add(1, "day").format("MM-DD-YYYY"), " ")
                .concat((0, i.convertFromMilitaryTime)(e))),
              (u = a()(r, "MM-DD-YYYY HH:mm").unix())),
              (t = u - s),
              (t = Math.round(t / 60)));
            var c = Math.floor(t / 60),
              l = t % 60;
            n = "".concat(c, "h").concat(l, "m");
          }
          return { left: t, label: n };
        },
        m = function (e, n) {
          if (!e || !n) return !1;
          var t = o[e.command],
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
    16019: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return C;
        },
      });
      var r,
        a,
        i = t(56824),
        o = t(6892),
        u = t(30225),
        s = t(94404),
        c = t(14482),
        l = t(5189),
        d = t(76431),
        E = t(84628),
        f = t(49318),
        m = (0, E.Jg)({
          path: function () {
            return ["scenes", "containers", "OperationModeParams"];
          },
          connect: {
            props: [
              f.Z,
              [
                "translations",
                "isMobile",
                "countryDevice",
                "batteryReadyMode",
                "isGermany",
              ],
            ],
          },
        }),
        v = t(30588),
        h = t(76948),
        x = t(69400),
        p = t.n(x),
        T = {
          isGermany: ["SET_CHARGE", "SET_VARIABLE_GRID_INJECTION"],
          isSettings: [
            "SET_BASIC_MODE",
            "SET_MAXIMIZE_AUTO_CONSUMPTION",
            "SET_VARIABLE_GRID_INJECTION",
            "SET_FREQUENCY_REGULATION",
            "SET_PEAK_SHAVING",
          ],
          batteryReadyMode: ["SET_BASIC_MODE"],
        },
        _ = t(72768),
        S = t(22247),
        g = t(31228),
        A = (function (e) {
          (0, c.default)(t, e);
          var n = (0, l.default)(t);
          function t() {
            return ((0, u.default)(this, t), n.apply(this, arguments));
          }
          return (
            (0, s.default)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    n = e.form,
                    t = e.change,
                    r = e.translations,
                    a = e.dirty,
                    i = e.label,
                    u = e.defaultMode,
                    s = e.settings,
                    c = e.disabled,
                    l = e.full,
                    d = e.isMobile,
                    E = e.isGermany,
                    f = (function (e, n) {
                      var t = Object.keys(h.wS).map(function (n) {
                          return { val: n, label: (0, h.lJ)(e, n) };
                        }),
                        r = function () {
                          if (n[a]) {
                            var e = p()(T[a]);
                            t = t.filter(function (n) {
                              return -1 !== e.indexOf(n.val);
                            });
                          }
                        };
                      for (var a in n) r();
                      return t;
                    })(r, {
                      isGermany: E,
                      isSettings: s,
                      batteryReadyMode: e.batteryReadyMode,
                    });
                  u &&
                    Object.keys(u).length > 0 &&
                    (f = [
                      {
                        val: "DEFAULT",
                        label: (0, g.jsxs)("span", {
                          children: [
                            "Default",
                            " ",
                            (0, g.jsxs)(b, {
                              children: ["(", (0, h.lJ)(r, u.command), ")"],
                            }),
                          ],
                        }),
                      },
                    ].concat((0, o.Z)(f)));
                  var m = n || {},
                    v = m.command,
                    x = m.soc,
                    A = m.powerAllocation,
                    C = m.power,
                    O = m.maximumPower,
                    R = m.optimalSoc,
                    I = m.maxHousePeakConsumption,
                    M = r.OPERATION_MODE_DEFAULT_LABEL,
                    Z = r.OPERATION_MODE_PARAM_MAXHOUSEPEAKCONSUMPTION,
                    N = r.OPERATION_MODE_PARAM_OPTIMALSOC,
                    H = r.OPERATION_MODE_PARAM_POWERALLOCATION,
                    w = r.OPERATION_MODE_PARAM_MAXIMUMPOWER,
                    k = r.OPERATION_MODE_PARAM_SOC,
                    L = r.OPERATION_MODE_PARAM_POWER,
                    P = v && v.value;
                  "DEFAULT" === P && u && (P = u.command);
                  var U = h.wS[P] || [];
                  return (0, g.jsxs)(D, {
                    children: [
                      (0, g.jsx)(S.l0.Row, {
                        children: (0, g.jsx)(S.OC, {
                          id: "OperationMode",
                          label: i || M,
                          options: f,
                          selected: v ? v.value : null,
                          onChange: function (e) {
                            (("SET_CHARGE" !== e && "SET_DISCHARGE" !== e) ||
                              (t({ power: 5 }), t({ soc: 0 })),
                              t({ command: e }));
                          },
                          disabled: c || (E && s),
                          containerMargin: !d && l && "0 8px",
                          full: l,
                        }),
                      }),
                      -1 !== U.indexOf("power") &&
                        (0, g.jsx)(S.l0.Row, {
                          full: !0,
                          children: (0, g.jsx)(S.An, {
                            id: "Power",
                            label: L,
                            value: "".concat(C.value, "%"),
                            disabled: c || "DEFAULT" === v.value,
                            sliderMin: 5,
                            sliderMax: 100,
                            sliderValue: C.value,
                            sliderStep: 5,
                            onChange: function (e) {
                              return t({ power: e });
                            },
                          }),
                        }),
                      -1 !== U.indexOf("powerAllocation") &&
                        (0, g.jsx)(S.l0.Row, {
                          full: l,
                          children: (0, g.jsx)(S.An, {
                            id: "PowerAllocation",
                            label: H,
                            disabled: c || (v && "DEFAULT" === v.value),
                            value: "".concat(A.value, "%"),
                            sliderMin: 0,
                            sliderMax: 100,
                            sliderValue: A.value,
                            onChange: function (e) {
                              return t({ powerAllocation: e });
                            },
                          }),
                        }),
                      !E &&
                        -1 !== U.indexOf("maximumPower") &&
                        (0, g.jsx)(S.l0.Row, {
                          full: l,
                          children: (0, g.jsx)(S.An, {
                            id: "MaxPowerAllocation",
                            label: w,
                            value: "".concat(O.value, "W"),
                            disabled: c || (v && "DEFAULT" === v.value),
                            sliderMin: -1e3,
                            sliderMax: 3e4,
                            sliderValue: O.value,
                            onChange: function (e) {
                              return t({ maximumPower: e });
                            },
                          }),
                        }),
                      -1 !== U.indexOf("soc") &&
                        (0, g.jsx)(S.l0.Row, {
                          full: l,
                          children: (0, g.jsx)(S.An, {
                            id: "StateOfCharge",
                            label: k,
                            value: "".concat(x.value, "%"),
                            disabled: c || (v && "DEFAULT" === v.value),
                            hideBottomScale: !0,
                            sliderMin: 0,
                            sliderMax: 100,
                            sliderStep: 5,
                            sliderValue: x.value,
                            onChange: function (e) {
                              return t({ soc: e });
                            },
                          }),
                        }),
                      -1 !== U.indexOf("optimalSoc") &&
                        (0, g.jsx)(S.l0.Row, {
                          full: l,
                          children: (0, g.jsx)(S.An, {
                            id: "OptimalStateOfCharge",
                            label: N,
                            value: "".concat(R.value, "%"),
                            hideBottomScale: !0,
                            disabled: c || (v && "DEFAULT" === v.value),
                            sliderMin: 0,
                            sliderMax: 100,
                            sliderValue: R.value,
                            onChange: function (e) {
                              return t({ optimalSoc: e });
                            },
                          }),
                        }),
                      -1 !== U.indexOf("maxHousePeakConsumption") &&
                        (0, g.jsxs)(S.l0.Row, {
                          full: l,
                          children: [
                            (0, g.jsx)(S.oH, {
                              id: "MaxHousePeakConsumption",
                              label: Z,
                              type: "number",
                              value: I.value,
                              error: a && !I.valid,
                              disabled: c || (v && "DEFAULT" === v.value),
                              onChange: function (e) {
                                var n = e.target;
                                return t({ maxHousePeakConsumption: n.value });
                              },
                            }),
                            (0, g.jsx)(_.Z, {
                              id: "MaxHousePeakConsumption",
                              showError: a && !I.valid,
                              errorMessage: I.message,
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
        })(d.Component),
        C = m(A),
        D = v.ZP.div(r || (r = (0, i.default)([""]))),
        b = v.ZP.span(
          a ||
            (a = (0, i.default)([
              "\n  color: rgba(114, 126, 132, 0.5);\n  font-size: 12px;\n",
            ])),
        );
    },
    85071: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return Q;
        },
      });
      var r,
        a,
        i,
        o,
        u = t(56824),
        s = t(6892),
        c = t(30225),
        l = t(94404),
        d = t(14482),
        E = t(5189),
        f = t(76431),
        m = t(31105),
        v = t(87121),
        h = t(2845),
        x = t(84628),
        p = t(49745),
        T = t(83749),
        _ = t(60326),
        S = t.n(_),
        g = t(30938),
        A = t.n(g),
        C = t(98278),
        D = t.n(C),
        b = t(94467),
        O = t.n(b),
        R = t(13795),
        I = t(90012),
        M = t(42477),
        Z = t(76948),
        N = t(30957),
        H = t(79895),
        w = t(49318),
        k = t(30375),
        L = "".concat(R.CT, "/schedule/event"),
        P = "".concat(R.CT, "/schedule/event/{eventId}"),
        U = {
          startTime: { value: O()().add(1, "hour").format("HH:00"), valid: !0 },
          endTime: { value: O()().add(2, "hour").format("HH:00"), valid: !0 },
          recurrence: { value: "WEEK_DAYS", valid: !0 },
          command: { value: Z.x_, valid: !0 },
          soc: { value: 0, valid: !0 },
          power: { value: 0, valid: !0 },
          maximumPower: { value: 0, valid: !0 },
          powerAllocation: { value: 0, valid: !0 },
          optimalSoc: { value: 0, valid: !0 },
          maxHousePeakConsumption: { value: 0, valid: !0 },
        },
        j = { endTime: [N.M7, N.Re], maxHousePeakConsumption: [N.Zv] },
        y = (0, x.Jg)({
          path: function () {
            return ["scenes", "containers", "ScheduleEventForm"];
          },
          connect: {
            props: [
              w.Z,
              ["isMobile", "translations", "currentDevice", "userRole"],
              H.Z,
              ["currentEventId", "initialHour", "recurrence"],
            ],
            actions: [w.Z, ["replace"]],
          },
          actions: function () {
            return {
              refreshSchedule: function () {
                return !0;
              },
              deleteEvent: function () {
                return !0;
              },
              fetchEvent: function () {
                return !0;
              },
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
              setLoading: function (e) {
                return e;
              },
            };
          },
          reducers: function (e) {
            var n,
              t,
              r,
              a,
              i = e.actions;
            return {
              form: [
                U,
                D().object,
                ((n = {}),
                (0, h.Z)(n, i.change, function (e, n) {
                  return M.jR(e, n, j);
                }),
                (0, h.Z)(n, i.setForm, function (e, n) {
                  return M.Yg(n.form, j).form;
                }),
                (0, h.Z)(n, i.reset, function () {
                  return U;
                }),
                n),
              ],
              dirty: [
                !1,
                D().bool,
                ((t = {}),
                (0, h.Z)(t, i.setError, function () {
                  return !0;
                }),
                (0, h.Z)(t, i.reset, function () {
                  return !1;
                }),
                (0, h.Z)(t, i.submit, function () {
                  return !1;
                }),
                (0, h.Z)(t, i.change, function () {
                  return !0;
                }),
                t),
              ],
              loading: [
                !0,
                D().bool,
                ((r = {}),
                (0, h.Z)(r, i.setLoading, function (e, n) {
                  return n;
                }),
                (0, h.Z)(r, i.setError, function () {
                  return !1;
                }),
                (0, h.Z)(r, i.reset, function () {
                  return !0;
                }),
                (0, h.Z)(r, i.deleteEvent, function () {
                  return !0;
                }),
                (0, h.Z)(r, i.setForm, function () {
                  return !1;
                }),
                r),
              ],
              error: [
                null,
                D().string,
                ((a = {}),
                (0, h.Z)(a, i.setError, function (e, n) {
                  return n;
                }),
                (0, h.Z)(a, i.reset, function () {
                  return null;
                }),
                (0, h.Z)(a, i.submit, function () {
                  return null;
                }),
                (0, h.Z)(a, i.change, function () {
                  return null;
                }),
                a),
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
                  return (0, k.m)("EDIT_EVENT", e);
                },
                D().bool,
              ],
              userCanDelete: [
                function () {
                  return [n.userRole];
                },
                function (e) {
                  return (0, k.m)("DELETE_EVENT", e);
                },
                D().bool,
              ],
            };
          },
          start: (0, v.Z)().mark(function e() {
            var n, t, r, a, i, o, u, s;
            return (0, v.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators),
                        (t = n.fetchEvent),
                        (r = n.setLoading),
                        (0, I.log)(
                          "[XS-ScheduleEventForm] Start Container ",
                          "orange",
                        ),
                        (e.next = 4),
                        this.get("currentEventId")
                      );
                    case 4:
                      if (!e.sent) {
                        e.next = 10;
                        break;
                      }
                      return ((e.next = 8), (0, T.gz)(t()));
                    case 8:
                      e.next = 23;
                      break;
                    case 10:
                      return ((e.next = 12), this.get("initialHour"));
                    case 12:
                      return (
                        (a = e.sent),
                        (e.next = 15),
                        this.get("recurrence")
                      );
                    case 15:
                      return (
                        (i = e.sent),
                        (o = O()(new Date()).set({
                          hour: a,
                          minute: 0,
                          second: 0,
                        })),
                        (u = {
                          startTime: o.format("HH:00"),
                          endTime: o.add(1, "hour").format("HH:00"),
                          recurrence: i,
                        }),
                        (s = (0, I.getFormValues)(U, u)),
                        (e.next = 21),
                        (0, T.gz)(this.actionCreators.setForm(s))
                      );
                    case 21:
                      return ((e.next = 23), (0, T.gz)(r(!1)));
                    case 23:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
            );
          }),
          stop: (0, v.Z)().mark(function e() {
            var n;
            return (0, v.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators.reset),
                        (0, I.log)("[XS-ScheduleEventForm] Stop Container "),
                        (e.next = 4),
                        (0, T.gz)(n())
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
              (0, h.Z)(n, t.submit, r.submit),
              (0, h.Z)(n, t.refreshSchedule, function (e) {
                e.payload;
                return (0, v.Z)().mark(function e() {
                  return (0, v.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, T.gz)(H.Z.actionCreators.fetchEvents())
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })();
              }),
              (0, h.Z)(n, t.fetchEvent, r.fetchEvent),
              (0, h.Z)(n, t.deleteEvent, r.deleteEvent),
              n
            );
          },
          workers: {
            submit: (0, v.Z)().mark(function e() {
              var n, t, r, a, i, o, u, s, c, l, d, E, f, m, h, x, _, g, C, D, b;
              return (0, v.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (t = n.setError),
                          (r = n.setForm),
                          (a = n.refreshSchedule),
                          (i = n.replace),
                          (e.next = 3),
                          this.get("form")
                        );
                      case 3:
                        return ((o = e.sent), (e.next = 6), this.get("dirty"));
                      case 6:
                        return (
                          (u = e.sent),
                          (e.next = 9),
                          this.get("translations")
                        );
                      case 9:
                        if (
                          ((s = e.sent), (c = M.Yg(o, j)), !u || !c.invalid)
                        ) {
                          e.next = 15;
                          break;
                        }
                        return (
                          (e.next = 14),
                          (0, T.gz)(t(s.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 14:
                        return e.abrupt("return", !1);
                      case 15:
                        if (u || !c.invalid) {
                          e.next = 21;
                          break;
                        }
                        return ((e.next = 18), (0, T.gz)(r(c.form)));
                      case 18:
                        return (
                          (e.next = 20),
                          (0, T.gz)(t(s.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 20:
                        return e.abrupt("return", !1);
                      case 21:
                        return (
                          (l = S()(o, function (e) {
                            return e.value;
                          })),
                          ((d = A()(l, [
                            "command",
                            "startTime",
                            "endTime",
                            "recurrence",
                          ])).parameters = A()(l, Z.wS[d.command])),
                          (d.startTime = parseInt(
                            d.startTime.replace(":", ""),
                          )),
                          (d.endTime = parseInt(d.endTime.replace(":", ""))),
                          (d = (0, Z.eQ)(d)),
                          (e.prev = 27),
                          (e.next = 30),
                          this.get("currentDevice")
                        );
                      case 30:
                        return (
                          (E = e.sent),
                          (e.next = 33),
                          this.get("currentEventId")
                        );
                      case 33:
                        if (!(f = e.sent)) {
                          e.next = 42;
                          break;
                        }
                        return (
                          (h = { id: E.id, eventId: f }),
                          (x = (0, I.generateUrl)(P, h)),
                          (e.next = 39),
                          (0, T.RE)(p.Z.put, x, d)
                        );
                      case 39:
                        ((m = e.sent), (e.next = 46));
                        break;
                      case 42:
                        return (
                          (_ = (0, I.generateUrl)(L, { id: E.id })),
                          (e.next = 45),
                          (0, T.RE)(p.Z.post, _, d)
                        );
                      case 45:
                        m = e.sent;
                      case 46:
                        if (!m.data.successful) {
                          e.next = 56;
                          break;
                        }
                        return ((e.next = 50), this.get("isMobile"));
                      case 50:
                        return ((g = e.sent), (e.next = 53), (0, T.gz)(a()));
                      case 53:
                        if (!g) {
                          e.next = 56;
                          break;
                        }
                        return ((e.next = 56), (0, T.gz)(i("/schedule/")));
                      case 56:
                        e.next = 69;
                        break;
                      case 58:
                        if (
                          ((e.prev = 58), (e.t0 = e.catch(27)), !e.t0.response)
                        ) {
                          e.next = 68;
                          break;
                        }
                        if (
                          ((C = e.t0.response),
                          (D = C.status),
                          (b = C.data),
                          400 !== D)
                        ) {
                          e.next = 66;
                          break;
                        }
                        if (
                          "err_schedule_add_event_overlap" !== b.error.errCode
                        ) {
                          e.next = 66;
                          break;
                        }
                        return (
                          (e.next = 66),
                          (0, T.gz)(t(s.SCHEDULE_DUPLICATE_EVENTS))
                        );
                      case 66:
                        e.next = 69;
                        break;
                      case 68:
                        console.log(e.t0);
                      case 69:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[27, 58]],
              );
            }),
            fetchEvent: (0, v.Z)().mark(function e() {
              var n, t, r, a, i, o, u, s, c, l;
              return (0, v.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators.setForm),
                          (e.prev = 1),
                          (e.next = 4),
                          this.get("currentDevice")
                        );
                      case 4:
                        return (
                          (t = e.sent),
                          (e.next = 7),
                          this.get("currentEventId")
                        );
                      case 7:
                        return (
                          (r = e.sent),
                          (a = { id: t.id, eventId: r }),
                          (i = (0, I.generateUrl)(P, a)),
                          (e.next = 12),
                          (0, T.RE)(p.Z.get, i)
                        );
                      case 12:
                        if (
                          ((o = e.sent),
                          (u = o.data),
                          (s = u.result),
                          !u.successful)
                        ) {
                          e.next = 23;
                          break;
                        }
                        return (
                          (c = (0, m.default)(
                            (0, m.default)({}, s),
                            s.parameters,
                          )),
                          (c = (0, Z.HH)(c)),
                          ((l = (0, I.getFormValues)(U, c)).startTime.value =
                            (0, I.convertFromMilitaryTime)(l.startTime.value)),
                          (l.endTime.value = (0, I.convertFromMilitaryTime)(
                            l.endTime.value,
                          )),
                          (e.next = 23),
                          (0, T.gz)(n(l))
                        );
                      case 23:
                        e.next = 28;
                        break;
                      case 25:
                        ((e.prev = 25), (e.t0 = e.catch(1)), console.log(e.t0));
                      case 28:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[1, 25]],
              );
            }),
            deleteEvent: (0, v.Z)().mark(function e() {
              var n, t, r, a, i, o, u, s;
              return (0, v.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (t = n.refreshSchedule),
                          (r = n.replace),
                          (e.prev = 1),
                          (e.next = 4),
                          this.get("currentDevice")
                        );
                      case 4:
                        return (
                          (a = e.sent),
                          (e.next = 7),
                          this.get("currentEventId")
                        );
                      case 7:
                        return (
                          (i = e.sent),
                          (o = { id: a.id, eventId: i }),
                          (u = (0, I.generateUrl)(P, o)),
                          (e.next = 12),
                          (0, T.RE)(p.Z.delete, u)
                        );
                      case 12:
                        return ((e.next = 14), this.get("isMobile"));
                      case 14:
                        return ((s = e.sent), (e.next = 17), (0, T.gz)(t()));
                      case 17:
                        if (!s) {
                          e.next = 20;
                          break;
                        }
                        return ((e.next = 20), (0, T.gz)(r("/schedule/")));
                      case 20:
                        e.next = 25;
                        break;
                      case 22:
                        ((e.prev = 22), (e.t0 = e.catch(1)), console.log(e.t0));
                      case 25:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[1, 22]],
              );
            }),
          },
        }),
        F = t(30588),
        V = t(32763),
        Y = t(48229),
        G = t(16019),
        z = t(89020),
        W = t(72768),
        B = t(88885),
        K = t(22247),
        J = t(31228),
        X = (function (e) {
          (0, d.default)(t, e);
          var n = (0, E.default)(t);
          function t() {
            var e;
            (0, c.default)(this, t);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            return (
              ((e = n.call.apply(n, [this].concat(a))).state = {
                confirmModal: !1,
              }),
              e
            );
          }
          return (
            (0, l.default)(t, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    n = this.props,
                    t = n.eventId,
                    r = n.isMobile,
                    a = n.form,
                    i = n.onCancel,
                    o = n.translations,
                    u = n.loading,
                    c = n.error,
                    l = n.dirty,
                    d = n.userCanEdit,
                    E = n.userCanDelete,
                    f = this.actions,
                    m = f.change,
                    v = f.submit,
                    h = f.deleteEvent,
                    x = o.SCHEDULE_EVENT_DELETE,
                    p = o.SCHEDULE_EVENT_CANCEL,
                    T = o.SCHEDULE_EVENT_SAVE,
                    _ = o.SCHEDULE_EVENT_START_TIME,
                    S = o.SCHEDULE_EVENT_END_TIME,
                    g = o.SCHEDULE_EVENT_RECURRENCY,
                    A = o.SCHEDULE_EVENT_DELETE_MODAL_TITLE,
                    C = o.SCHEDULE_EVENT_DELETE_MODAL_SUBTITLE,
                    D = o.SCHEDULE_EVENT_DELETE_MODAL_SUBTITLE_1,
                    b = o.SCHEDULE_EVENT_DELETE_MODAL_CANCEL,
                    O = o.SCHEDULE_EVENT_DELETE_MODAL_DELETE,
                    R = o.SCHEDULE_WORKDAYS,
                    I = o.SCHEDULE_WEEKENDS,
                    M = o.SCHEDULE_EVERYDAY,
                    Z = a.startTime,
                    N = a.endTime,
                    H = a.recurrence,
                    w = this.state.confirmModal;
                  if (u) return (0, J.jsx)(K.CE, { blue: "true" });
                  var k = [];
                  E &&
                    (k = [].concat((0, s.Z)(k), [
                      {
                        key: "delete",
                        label: x,
                        icon: (0, J.jsx)(ee, { children: "delete" }),
                        onClick: function () {
                          return e.setState({ confirmModal: !0 });
                        },
                      },
                    ]));
                  var L = [
                    { val: "WEEK_DAYS", label: R },
                    { val: "WEEKENDS", label: I },
                    { val: "EVERYDAY", label: M },
                  ];
                  return (0, J.jsxs)(q, {
                    mobile: r,
                    children: [
                      !r && t && !!k.length && (0, J.jsx)(K.nT, { actions: k }),
                      r &&
                        !!t &&
                        E &&
                        (0, J.jsx)($, {
                          onClick: function () {
                            return e.setState({ confirmModal: !0 });
                          },
                          children: (0, J.jsx)(Y.Z, { children: "delete" }),
                        }),
                      (0, J.jsxs)(K.l0, {
                        mobile: r,
                        position: "absolute",
                        leftPosition: "0",
                        formPadding: "0",
                        containerHeight:
                          !r && "calc(100vh - ".concat(t ? 250 : 168, "px)"),
                        formmargin: r,
                        children: [
                          (0, J.jsx)(z.Z, { dirty: l, error: c, full: !0 }),
                          (0, J.jsx)(K.l0.Row, {
                            children: (0, J.jsxs)(ne, {
                              mobile: r ? 1 : 0,
                              children: [
                                (0, J.jsxs)(V.Z, {
                                  item: !0,
                                  xs: 6,
                                  children: [
                                    r
                                      ? (0, J.jsx)(K.oH, {
                                          id: "StartTime",
                                          label: _,
                                          type: "time",
                                          error: l && !Z.valid,
                                          value: Z.value,
                                          disabled: !d,
                                          onChange: function (e) {
                                            var n = e.target;
                                            return m({ startTime: n.value });
                                          },
                                          padding: "0 16px 0 0",
                                          inputProps: { step: 1800 },
                                        })
                                      : (0, J.jsx)(K.jI, {
                                          id: "StartTime",
                                          label: _,
                                          time: Z.value,
                                          error: l && !Z.valid,
                                          draggable: !1,
                                          timeFormat: "HH:mm",
                                          disabled: !d,
                                          onTimeChange: function (e) {
                                            var n = e.hour,
                                              t = e.minute;
                                            return m({
                                              startTime: ""
                                                .concat(n, ":")
                                                .concat(t),
                                              endTime: N.value,
                                            });
                                          },
                                          containerMargin: "16px 0 0 8px",
                                        }),
                                    (0, J.jsx)(W.Z, {
                                      id: "StartTime",
                                      showError: l && !Z.valid,
                                      errorMessage: Z.message,
                                    }),
                                  ],
                                }),
                                (0, J.jsxs)(V.Z, {
                                  item: !0,
                                  xs: 6,
                                  children: [
                                    r
                                      ? (0, J.jsx)(K.oH, {
                                          id: "EndTime",
                                          label: S,
                                          type: "time",
                                          error: l && !N.valid,
                                          value: N.value,
                                          disabled: !d,
                                          onChange: function (e) {
                                            var n = e.target;
                                            return m({ endTime: n.value });
                                          },
                                          inputProps: { step: 1800 },
                                        })
                                      : (0, J.jsx)(K.jI, {
                                          id: "EndTime",
                                          label: S,
                                          error: l && !N.valid,
                                          time: N.value,
                                          timeFormat: "HH:mm",
                                          draggable: !1,
                                          disabled: !d,
                                          direction: "right",
                                          onTimeChange: function (e) {
                                            var n = e.hour,
                                              t = e.minute;
                                            return m({
                                              endTime: ""
                                                .concat(n, ":")
                                                .concat(t),
                                              startTime: Z.value,
                                            });
                                          },
                                          containerMargin: "16px 8px 0 0",
                                        }),
                                    (0, J.jsx)(W.Z, {
                                      id: "EndTime",
                                      showError: l && !N.valid,
                                      errorMessage: N.message,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, J.jsx)(K.l0.Row, {
                            children: (0, J.jsx)(K.OC, {
                              id: "Recurrency",
                              label: g,
                              options: L,
                              selected: H.value,
                              disabled: !d,
                              onChange: function (e) {
                                return m({ recurrence: e });
                              },
                              containerMargin: !r && "0 8px",
                              full: !0,
                            }),
                          }),
                          (0, J.jsx)(G.Z, {
                            change: m,
                            form: a,
                            dirty: l,
                            disabled: !d,
                            full: !0,
                          }),
                          (0, J.jsx)(B.Z, {
                            permission: "EDIT_EVENT",
                            children: (0, J.jsxs)(K.l0.Buttons, {
                              fixedSideBar: !0,
                              mobile: r,
                              children: [
                                (0, J.jsx)(K.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "163px",
                                  onClick: i,
                                  children: p,
                                }),
                                (0, J.jsx)(K.zx, {
                                  id: "Button_Save",
                                  margin: "0 12px",
                                  buttonWidth: "163px",
                                  smallShadow: !0,
                                  onClick: v,
                                  children: T,
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      w &&
                        (0, J.jsx)(K.u_, {
                          open: w,
                          size: "small",
                          onClose: function () {
                            return e.setState({ confirmModal: !1 });
                          },
                          children: (0, J.jsxs)("div", {
                            children: [
                              (0, J.jsx)(K.xB, { title: A }),
                              (0, J.jsxs)(K.hz, {
                                padding: !0,
                                size: "small",
                                mobile: r,
                                children: [
                                  (0, J.jsx)(K.ZT, {
                                    children: (0, J.jsx)("b", { children: C }),
                                  }),
                                  (0, J.jsx)(K.ZT, { children: D }),
                                ],
                              }),
                              (0, J.jsxs)(K.Zf, {
                                children: [
                                  (0, J.jsx)(K.zx, {
                                    id: "Button_Cancel",
                                    buttonType: "primary-cancel",
                                    margin: "0 12px",
                                    buttonWidth: "156px",
                                    onClick: function () {
                                      return e.setState({ confirmModal: !1 });
                                    },
                                    children: b,
                                  }),
                                  (0, J.jsx)(K.zx, {
                                    id: "Button_Delete",
                                    margin: "0 12px",
                                    buttonWidth: "156px",
                                    onClick: h,
                                    children: O,
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
            t
          );
        })(f.Component),
        Q = y(X),
        q = F.ZP.div(r || (r = (0, u.default)([""]))),
        $ = F.ZP.div(
          a ||
            (a = (0, u.default)([
              "\n  position: absolute;\n  top: 40px;\n  right: 40px;\n  color: #fff;\n  cursor: pointer;\n\n  @media screen and (max-width: 550px) {\n    top: 25px;\n    right: 20px;\n  }\n",
            ])),
        ),
        ee = (0, F.ZP)(Y.Z)(
          i ||
            (i = (0, u.default)([
              "\n  font-size: 20px !important;\n\n  &:hover {\n    color: #006ead;\n  }\n",
            ])),
        ),
        ne = (0, F.ZP)(V.Z)(
          o || (o = (0, u.default)(["\n  display: flex;\n\n  ", "\n"])),
          function (e) {
            return (
              !e.mobile &&
              "\n    > div:first-child {\n      margin-right: 24px;\n    }\n  "
            );
          },
        );
    },
    79895: function (e, n, t) {
      "use strict";
      var r = t(87121),
        a = t(6892),
        i = t(2845),
        o = t(84628),
        u = t(49745),
        s = t(83749),
        c = t(98278),
        l = t.n(c),
        d = t(94467),
        E = t.n(d),
        f = t(13795),
        m = t(90012),
        v = t(30375),
        h = t(49318),
        x = "".concat(f.CT, "/schedule/");
      n.Z = (0, o.Jg)({
        path: function () {
          return ["scenes", "containers", "ScheduleWeek"];
        },
        connect: {
          props: [
            h.Z,
            ["isMobile", "translations", "currentDevice", "userRole"],
          ],
          actions: [h.Z, ["push"]],
        },
        actions: function () {
          return {
            hideEventForm: function () {
              return !0;
            },
            fetchEvents: function () {
              return !0;
            },
            setEvents: function (e) {
              return { events: e };
            },
            addNewEvent: function (e, n) {
              return { initialHour: e, recurrence: n };
            },
            updateEvent: function (e) {
              return { eventId: e };
            },
            showEventForm: function () {
              return !0;
            },
            reset: function () {
              return !1;
            },
          };
        },
        reducers: function (e) {
          var n,
            t,
            r,
            a,
            o,
            u = e.actions;
          return {
            eventFormVisible: [
              !1,
              l().bool,
              ((n = {}),
              (0, i.Z)(n, u.showEventForm, function () {
                return !0;
              }),
              (0, i.Z)(n, u.hideEventForm, function () {
                return !1;
              }),
              (0, i.Z)(n, u.fetchEvents, function () {
                return !1;
              }),
              (0, i.Z)(n, u.reset, function () {
                return !1;
              }),
              n),
            ],
            currentEventId: [
              null,
              l().string,
              ((t = {}),
              (0, i.Z)(t, u.updateEvent, function (e, n) {
                return n.eventId;
              }),
              (0, i.Z)(t, u.hideEventForm, function () {
                return null;
              }),
              (0, i.Z)(t, u.addNewEvent, function () {
                return null;
              }),
              t),
            ],
            initialHour: [
              null,
              l().number,
              ((r = {}),
              (0, i.Z)(r, u.addNewEvent, function (e, n) {
                return n.initialHour || E()().add(1, "hour").format("HH");
              }),
              (0, i.Z)(r, u.updateEvent, function () {
                return null;
              }),
              (0, i.Z)(r, u.hideEventForm, function () {
                return null;
              }),
              r),
            ],
            recurrence: [
              null,
              l().string,
              ((a = {}),
              (0, i.Z)(a, u.addNewEvent, function (e, n) {
                return n.recurrence || "WEEK_DAYS";
              }),
              (0, i.Z)(a, u.updateEvent, function () {
                return null;
              }),
              (0, i.Z)(a, u.hideEventForm, function () {
                return null;
              }),
              a),
            ],
            events: [
              [],
              l().array,
              ((o = {}),
              (0, i.Z)(o, u.setEvents, function (e, n) {
                return n.events;
              }),
              (0, i.Z)(o, u.reset, function () {
                return [];
              }),
              o),
            ],
          };
        },
        selectors: function (e) {
          var n = e.selectors;
          return {
            everydaysEvents: [
              function () {
                return [n.events];
              },
              function (e) {
                return e.filter(function (e) {
                  return "EVERYDAY" === e.recurrence;
                });
              },
              l().array,
            ],
            workdaysEvents: [
              function () {
                return [n.events, n.everydaysEvents];
              },
              function (e, n) {
                return [].concat(
                  (0, a.Z)(n),
                  (0, a.Z)(
                    e.filter(function (e) {
                      return "WEEK_DAYS" === e.recurrence;
                    }),
                  ),
                );
              },
              l().array,
            ],
            weekendsEvents: [
              function () {
                return [n.events, n.everydaysEvents];
              },
              function (e, n) {
                return [].concat(
                  (0, a.Z)(n),
                  (0, a.Z)(
                    e.filter(function (e) {
                      return "WEEKENDS" === e.recurrence;
                    }),
                  ),
                );
              },
              l().array,
            ],
            userCanEdit: [
              function () {
                return [n.userRole];
              },
              function (e) {
                return (0, v.m)("EDIT_EVENT", e);
              },
              l().bool,
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
                      (n = this.actionCreators.fetchEvents),
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
        stop: (0, r.Z)().mark(function e() {
          var n;
          return (0, r.Z)().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = this.actionCreators.reset),
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
            (0, i.Z)(n, t.addNewEvent, r.gotoEventForm),
            (0, i.Z)(n, t.updateEvent, r.gotoEventForm),
            (0, i.Z)(n, t.fetchEvents, r.fetchEvents),
            n
          );
        },
        workers: {
          gotoEventForm: (0, r.Z)().mark(function e(n) {
            var t, a, i, o, u, c, l, d;
            return (0, r.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators),
                        (a = t.showEventForm),
                        (i = t.push),
                        (e.next = 3),
                        this.get("isMobile")
                      );
                    case 3:
                      return ((o = e.sent), (e.next = 6), this.get("userRole"));
                    case 6:
                      if (((u = e.sent), !n)) {
                        e.next = 25;
                        break;
                      }
                      if (
                        ((c = n.payload.eventId),
                        (l = (0, v.m)("ADD_NEW_EVENT", u)),
                        c || l)
                      ) {
                        e.next = 12;
                        break;
                      }
                      return e.abrupt("return", !1);
                    case 12:
                      if (!o) {
                        e.next = 23;
                        break;
                      }
                      if (!c) {
                        e.next = 19;
                        break;
                      }
                      return (
                        (d = "/schedule/event/".concat(c, "/")),
                        (e.next = 17),
                        (0, s.gz)(i(d, c))
                      );
                    case 17:
                      e.next = 21;
                      break;
                    case 19:
                      return (
                        (e.next = 21),
                        (0, s.gz)(i("/schedule/event/", null))
                      );
                    case 21:
                      e.next = 25;
                      break;
                    case 23:
                      return ((e.next = 25), (0, s.gz)(a()));
                    case 25:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
            );
          }),
          fetchEvents: (0, r.Z)().mark(function e() {
            var n, t, a, i, o, c;
            return (0, r.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators.setEvents),
                        (e.prev = 1),
                        (e.next = 4),
                        this.get("currentDevice")
                      );
                    case 4:
                      return (
                        (t = e.sent),
                        (a = (0, m.generateUrl)(x, { id: t.id })),
                        (e.next = 8),
                        (0, s.RE)(u.Z.get, a)
                      );
                    case 8:
                      if (
                        ((i = e.sent),
                        (o = i.data),
                        (c = o.result),
                        !o.successful)
                      ) {
                        e.next = 14;
                        break;
                      }
                      return ((e.next = 14), (0, s.gz)(n(c.results)));
                    case 14:
                      e.next = 18;
                      break;
                    case 16:
                      ((e.prev = 16), (e.t0 = e.catch(1)));
                    case 18:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[1, 16]],
            );
          }),
        },
      });
    },
    88885: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var r = t(30225),
        a = t(94404),
        i = t(14482),
        o = t(5189),
        u = t(76431),
        s = t(84628),
        c = t(49318),
        l = (0, s.Jg)({ connect: { props: [c.Z, ["userRole"]] } }),
        d = t(30375),
        E = (function (e) {
          (0, i.default)(t, e);
          var n = (0, o.default)(t);
          function t() {
            return ((0, r.default)(this, t), n.apply(this, arguments));
          }
          return (
            (0, a.default)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    n = e.children,
                    t = e.permission,
                    r = e.userRole;
                  return (0, d.m)(t, r) ? n : "";
                },
              },
            ]),
            t
          );
        })(u.Component),
        f = l(E);
    },
    30375: function (e, n, t) {
      "use strict";
      t.d(n, {
        m: function () {
          return a;
        },
      });
      var r = JSON.parse(
          '{"ADD_NEW_EVENT":["customer","technician"],"EDIT_EVENT":["customer","technician"],"DELETE_EVENT":["customer","technician"],"EDIT_UNIT_SETTINGS":["customer","technician"],"EDIT_UNIT_DEFAULT_OPERATION_MODE":["customer","technician"],"UNIT_POWER_ON_OFF":["customer","technician"],"CHANGE_OPERATION_MODE":["customer","technician"],"CHANGE_UNIT_OWNER":["customer","technician"],"EDIT_BLOCK_STATUS":["technician"],"SUPPORT_UNIT_LOG":["customer","technician"],"VIEW_SUPPORT_MAINTENANCE_OPTIONS":["customer","technician"],"REBOOT_UNIT":["technician"],"SUPPORT_HTTPS_TUNNEL":["customer","technician"]}',
        ),
        a = function (e, n) {
          var t = r[e];
          return !!t && -1 !== t.indexOf(n);
        };
    },
    30957: function (e, n, t) {
      "use strict";
      t.d(n, {
        M7: function () {
          return o;
        },
        Re: function () {
          return u;
        },
        Zv: function () {
          return s;
        },
        d0: function () {
          return a;
        },
        kL: function () {
          return i;
        },
      });
      var r = t(90012),
        a = "workdays",
        i = function (e) {
          return [
            { slug: "workdays", name: e.SCHEDULE_WORKDAYS },
            { slug: "weekends", name: e.SCHEDULE_WEEKENDS },
          ];
        },
        o = function (e, n) {
          return {
            result:
              (0, r.timeStringToFloat)(n.startTime.value) <
              (0, r.timeStringToFloat)(e),
            message: "SCHEDULE_VALIDATION_ERR_ENDTIME",
          };
        },
        u = function (e, n) {
          var t = (0, r.timeStringToFloat)(n.startTime.value);
          return {
            result: (0, r.timeStringToFloat)(e) - t >= 0.5,
            message: "SCHEDULE_VALIDATION_ERR_DURATION",
          };
        },
        s = function (e, n) {
          return "SET_PEAK_SHAVING" !== n.command.value
            ? { result: "end" }
            : e
              ? { result: !0 }
              : { result: !1, message: "FORM_VALIDATION_FIELD_REQUIRED" };
        };
    },
    60326: function (e, n, t) {
      var r = t(7278),
        a = t(31709),
        i = t(61490);
      e.exports = function (e, n) {
        var t = {};
        return (
          (n = i(n, 3)),
          a(e, function (e, a, i) {
            r(t, a, n(e, a, i));
          }),
          t
        );
      };
    },
  },
]);
//# sourceMappingURL=5071.1737579d.chunk.js.map
