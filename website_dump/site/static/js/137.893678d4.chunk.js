"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [137],
  {
    95557: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return ne;
        },
      });
      var r,
        a,
        o,
        i,
        s,
        u,
        c,
        l = t(56824),
        d = t(30225),
        f = t(94404),
        p = t(14482),
        m = t(5189),
        x = t(76431),
        h = t(30588),
        g = t(32763),
        E = t(77835),
        M = t(63779),
        O = t(94467),
        v = t.n(O),
        _ = t(88359),
        A = t.n(_),
        D = t(90012),
        b = t(76948),
        T = t(31105),
        Z = t(87121),
        S = t(2845),
        C = t(84628),
        R = t(49745),
        P = t(83749),
        j = t(60326),
        w = t.n(j),
        y = t(30938),
        k = t.n(y),
        I = t(98278),
        H = t.n(I),
        L = t(13795),
        N = t(42477),
        U = t(49318),
        F = t(30068),
        z = "".concat(L.CT, "/device/command"),
        B = "".concat(L.CT, "/settings/"),
        G = {
          command: { value: b.x_ },
          soc: { value: 0 },
          power: { value: 3 },
          maximumPower: { value: 0 },
          powerAllocation: { value: 0 },
          optimalSoc: { value: 0 },
          maxHousePeakConsumption: { value: 0 },
          duration: { value: 1 },
        },
        V = {},
        J = (0, C.Jg)({
          path: function () {
            return ["scenes", "containers", "OperationModeForm"];
          },
          connect: {
            props: [
              U.Z,
              [
                "isMobile",
                "translations",
                "currentDevice",
                "language",
                "isGermany",
              ],
              F.Z,
              ["deviceStatus"],
            ],
            actions: [U.Z, ["push"]],
          },
          actions: function () {
            return {
              setOperationMode: function (e) {
                return { mode: e };
              },
              updateDeviceStatus: function () {
                return !0;
              },
              getDeviceStatus: function () {
                return !0;
              },
              fetchDefaultMode: function () {
                return !0;
              },
              setDefaultMode: function (e) {
                return { mode: e };
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
              i,
              s = e.actions;
            return {
              operationMode: [
                {},
                H().object,
                ((n = {}),
                (0, S.Z)(n, s.setOperationMode, function (e, n) {
                  return n.mode || {};
                }),
                (0, S.Z)(n, s.reset, function () {
                  return {};
                }),
                n),
              ],
              defaultMode: [
                {},
                H().object,
                ((t = {}),
                (0, S.Z)(t, s.setDefaultMode, function (e, n) {
                  return n.mode || {};
                }),
                (0, S.Z)(t, s.reset, function () {
                  return {};
                }),
                t),
              ],
              loading: [
                !0,
                H().bool,
                ((r = {}),
                (0, S.Z)(r, s.setDefaultMode, function () {
                  return !1;
                }),
                (0, S.Z)(r, s.submit, function () {
                  return !0;
                }),
                (0, S.Z)(r, s.setError, function () {
                  return !1;
                }),
                (0, S.Z)(r, s.reset, function () {
                  return !0;
                }),
                r),
              ],
              form: [
                G,
                H().object,
                ((a = {}),
                (0, S.Z)(a, s.change, function (e, n) {
                  return N.jR(e, n, V);
                }),
                (0, S.Z)(a, s.setForm, function (e, n) {
                  return N.Yg(n.form, V).form;
                }),
                (0, S.Z)(a, s.reset, function () {
                  return G;
                }),
                a),
              ],
              dirty: [
                !1,
                H().bool,
                ((o = {}),
                (0, S.Z)(o, s.change, function () {
                  return !0;
                }),
                (0, S.Z)(o, s.submit, function () {
                  return !1;
                }),
                (0, S.Z)(o, s.setError, function () {
                  return !0;
                }),
                (0, S.Z)(o, s.reset, function () {
                  return !1;
                }),
                o),
              ],
              error: [
                null,
                H().string,
                ((i = {}),
                (0, S.Z)(i, s.setError, function (e, n) {
                  return n;
                }),
                (0, S.Z)(i, s.reset, function () {
                  return null;
                }),
                i),
              ],
            };
          },
          selectors: function (e) {
            var n = e.selectors;
            return {
              isManualMode: [
                function () {
                  return [n.operationMode];
                },
                function (e) {
                  return "MANUAL" === e.type;
                },
                H().bool,
              ],
              isDefaultMode: [
                function () {
                  return [n.operationMode];
                },
                function (e) {
                  return "DEFAULT" === e.type;
                },
                H().bool,
              ],
              isScheduleMode: [
                function () {
                  return [n.operationMode];
                },
                function (e) {
                  return "SCHEDULE" === e.type;
                },
                H().bool,
              ],
              timeLeft: [
                function () {
                  return [n.operationMode];
                },
                function (e) {
                  return (0, b.eT)(e.endTime);
                },
                H().object,
              ],
            };
          },
          start: (0, Z.Z)().mark(function e() {
            var n, t, r, a, o;
            return (0, Z.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators),
                        (t = n.getDeviceStatus),
                        (r = n.setForm),
                        (e.next = 3),
                        this.get("isGermany")
                      );
                    case 3:
                      return ((a = e.sent), (e.next = 6), this.get("form"));
                    case 6:
                      if (((o = e.sent), !a)) {
                        e.next = 11;
                        break;
                      }
                      return (
                        (o.command.value = b.YV),
                        (e.next = 11),
                        (0, P.gz)(r(o))
                      );
                    case 11:
                      return ((e.next = 13), (0, P.gz)(t()));
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
            );
          }),
          stop: (0, Z.Z)().mark(function e() {
            var n;
            return (0, Z.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators.reset),
                        (e.next = 3),
                        (0, P.gz)(n())
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
              (0, S.Z)(n, t.getDeviceStatus, r.getDeviceStatus),
              (0, S.Z)(n, t.setOperationMode, r.fetchDefaultMode),
              (0, S.Z)(
                n,
                t.setDefaultMode,
                (0, Z.Z)().mark(function e() {
                  var n, t, r;
                  return (0, Z.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return ((e.next = 2), this.get("form"));
                          case 2:
                            return (
                              (n = e.sent),
                              (e.next = 5),
                              this.get("defaultMode")
                            );
                          case 5:
                            if (
                              ((t = e.sent),
                              (r = this.actionCreators.change),
                              !(0, b.UD)(t, n))
                            ) {
                              e.next = 10;
                              break;
                            }
                            return (
                              (e.next = 10),
                              (0, P.gz)(r({ command: "DEFAULT" }))
                            );
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                  );
                }),
              ),
              (0, S.Z)(n, t.submit, r.submit),
              (0, S.Z)(n, t.updateDeviceStatus, function (e) {
                e.payload;
                return (0, Z.Z)().mark(function e() {
                  return (0, Z.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, P.gz)(F.Z.actionCreators.updateDeviceStatus())
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })();
              }),
              (0, S.Z)(n, t.change, r.onFormChange),
              n
            );
          },
          workers: {
            submit: (0, Z.Z)().mark(function e() {
              var n, t, r, a, o, i, s, u, c, l, d, f, p, m, x;
              return (0, Z.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (t = n.setError),
                          (r = n.setForm),
                          (a = n.updateDeviceStatus),
                          (o = n.push),
                          (e.next = 3),
                          this.get("form")
                        );
                      case 3:
                        return ((i = e.sent), (e.next = 6), this.get("dirty"));
                      case 6:
                        return (
                          (s = e.sent),
                          (e.next = 9),
                          this.get("translations")
                        );
                      case 9:
                        if (
                          ((u = e.sent), (c = N.Yg(i, V)), !s || !c.invalid)
                        ) {
                          e.next = 15;
                          break;
                        }
                        return (
                          (e.next = 14),
                          (0, P.gz)(t(u.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 14:
                        return e.abrupt("return", !1);
                      case 15:
                        if (s || !c.invalid) {
                          e.next = 21;
                          break;
                        }
                        return ((e.next = 18), (0, P.gz)(r(c.form)));
                      case 18:
                        return (
                          (e.next = 20),
                          (0, P.gz)(t(u.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 20:
                        return e.abrupt("return", !1);
                      case 21:
                        if (
                          ((l = w()(i, function (e) {
                            return e.value;
                          })),
                          "DEFAULT" !==
                            (d = k()(l, ["command", "duration"])).command)
                        ) {
                          e.next = 28;
                          break;
                        }
                        return ((e.next = 26), this.get("defaultMode"));
                      case 26:
                        ((f = e.sent), (d.command = f.command));
                      case 28:
                        return (
                          (d.parameters = k()(l, b.wS[d.command])),
                          (d = (0, b.eQ)(d)),
                          (e.prev = 30),
                          (e.next = 33),
                          this.get("isMobile")
                        );
                      case 33:
                        return (
                          (p = e.sent),
                          (e.next = 36),
                          this.get("currentDevice")
                        );
                      case 36:
                        return (
                          (m = e.sent),
                          (x = (0, D.generateUrl)(z, { id: m.id })),
                          (e.next = 40),
                          (0, P.RE)(R.Z.post, x, d)
                        );
                      case 40:
                        if (p) {
                          e.next = 45;
                          break;
                        }
                        return ((e.next = 43), (0, P.gz)(a()));
                      case 43:
                        e.next = 47;
                        break;
                      case 45:
                        return ((e.next = 47), (0, P.gz)(o("/")));
                      case 47:
                        e.next = 52;
                        break;
                      case 49:
                        ((e.prev = 49),
                          (e.t0 = e.catch(30)),
                          console.log(e.t0));
                      case 52:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[30, 49]],
              );
            }),
            getDeviceStatus: (0, Z.Z)().mark(function () {
              var e, n, t, r, a, o, i, s, u, c, l, d, f;
              return (0, Z.Z)().wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        return (
                          (e = this.actionCreators),
                          (n = e.getDeviceStatus),
                          (t = e.setOperationMode),
                          (r = e.change),
                          (p.next = 3),
                          this.get("deviceStatus")
                        );
                      case 3:
                        return (
                          (a = p.sent),
                          (p.next = 6),
                          this.get("isGermany")
                        );
                      case 6:
                        if (((o = p.sent), a && 0 !== Object.keys(a).length)) {
                          p.next = 13;
                          break;
                        }
                        return ((p.next = 10), (0, P.gw)(1e3));
                      case 10:
                        return ((p.next = 12), (0, P.gz)(n()));
                      case 12:
                        return p.abrupt("return", !1);
                      case 13:
                        if (
                          ((i = a.currentMode), !(Object.keys(i).length > 0))
                        ) {
                          p.next = 26;
                          break;
                        }
                        return ((p.next = 17), (0, P.gz)(t(i)));
                      case 17:
                        if (
                          ((u = (s = i || {}).command),
                          (c = s.parameters),
                          (l = s.duration),
                          (d = u),
                          !(c && Object.keys(c).length > 0))
                        ) {
                          p.next = 24;
                          break;
                        }
                        return (
                          "SET_CHARGE" === u &&
                            (d =
                              "ACTION_CHARGE" === c.action
                                ? "SET_CHARGE"
                                : "SET_DISCHARGE"),
                          (f = {
                            soc: c.soc || 0,
                            power: c.power || 3,
                            maximumPower: c.maximumPower || 0,
                            powerAllocation: c.powerAllocation || 0,
                            optimalSoc: c.optimalSoc || 0,
                            maxHousePeakConsumption:
                              c.maxHousePeakConsumption || 0,
                          }),
                          (p.next = 24),
                          (0, P.gz)(r(f))
                        );
                      case 24:
                        return (
                          (p.next = 26),
                          (0, P.gz)(
                            r({ command: o ? b.YV : d, duration: l || 1 }),
                          )
                        );
                      case 26:
                      case "end":
                        return p.stop();
                    }
                },
                n,
                this,
              );
            }),
            fetchDefaultMode: (0, Z.Z)().mark(function e() {
              var n, t, r, a, o, i, s;
              return (0, Z.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators.setDefaultMode),
                          (e.next = 3),
                          this.get("defaultMode")
                        );
                      case 3:
                        if (!(t = e.sent).command) {
                          e.next = 8;
                          break;
                        }
                        return ((e.next = 7), (0, P.gz)(n(t)));
                      case 7:
                        return e.abrupt("return", !1);
                      case 8:
                        return (
                          (e.prev = 8),
                          (e.next = 11),
                          this.get("currentDevice")
                        );
                      case 11:
                        return (
                          (r = e.sent),
                          (a = (0, D.generateUrl)(B, { id: r.id })),
                          (e.next = 15),
                          (0, P.RE)(R.Z.get, a)
                        );
                      case 15:
                        if (
                          ((o = e.sent),
                          (i = o.data),
                          (s = i.result),
                          !i.successful)
                        ) {
                          e.next = 21;
                          break;
                        }
                        return ((e.next = 21), (0, P.gz)(n(s.defaultMode)));
                      case 21:
                        e.next = 26;
                        break;
                      case 23:
                        ((e.prev = 23), (e.t0 = e.catch(8)), console.log(e.t0));
                      case 26:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[8, 23]],
              );
            }),
            onFormChange: (0, Z.Z)().mark(function e() {
              var n, t, r, a, o, i;
              return (0, Z.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators.setForm),
                          (e.next = 3),
                          this.get("form")
                        );
                      case 3:
                        if (
                          ((t = e.sent),
                          "DEFAULT" !==
                            (r = w()(t, function (e) {
                              return e.value;
                            })).command)
                        ) {
                          e.next = 14;
                          break;
                        }
                        return ((e.next = 8), this.get("defaultMode"));
                      case 8:
                        return (
                          (a = e.sent),
                          (o = (0, T.default)(
                            (0, T.default)({}, r),
                            a.parameters,
                          )),
                          (o = (0, b.HH)(o)),
                          (i = (0, D.getFormValues)(G, o)),
                          (e.next = 14),
                          (0, P.gz)(n(i))
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
          },
        }),
        W = t(84043),
        Y = t(81321),
        K = t(11498),
        X = t(49352),
        Q = t(16019),
        q = t(88885),
        $ = t(22247),
        ee = t(31228),
        ne = J(
          (function (e) {
            (0, p.default)(t, e);
            var n = (0, m.default)(t);
            function t(e) {
              var r;
              return (
                (0, d.default)(this, t),
                ((r = n.call(this, e)).detailsHeight = 0),
                (r.nodeRef = null),
                (r.nodeRef = (0, x.createRef)()),
                r
              );
            }
            return (
              (0, f.default)(t, [
                {
                  key: "componentDidUpdate",
                  value: function () {
                    var e = this.nodeRef.current;
                    this.detailsHeight = e ? e.scrollHeight : 0;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      n = e.isMobile,
                      t = e.onCancel,
                      r = e.operationMode,
                      a = e.defaultMode,
                      o = e.loading,
                      i = e.form,
                      s = e.translations,
                      u = e.isManualMode,
                      c = e.isDefaultMode,
                      l = e.isScheduleMode,
                      d = e.timeLeft,
                      f = e.language,
                      p = this.actions,
                      m = p.change,
                      x = p.submit;
                    if (o) return (0, ee.jsx)($.CE, {});
                    var h = s.DASH_OPERATION_MODE_UNIT_WORK_DEFAULT_MODE,
                      E = s.DASH_OPERATION_MODE_MANUALLY_CHANGED_BY,
                      O = s.DASH_OPERATION_MODE_SCHEDULED_BY,
                      _ = s.DASH_OPERATION_MODE_END_TIME,
                      T = s.DASH_OPERATION_MODE_CHANGE,
                      Z = s.DASH_OPERATION_MODE_DURATION,
                      S = s.DASH_OPERATION_MODE_HOURS,
                      C = s.DASH_OPERATION_MODE_CANCEL,
                      R = s.DASH_OPERATION_MODE_SAVE,
                      P = i.duration;
                    (M.Z.locale(W.Z),
                      M.Z.locale(Y.Z),
                      M.Z.locale(K.Z),
                      M.Z.locale(X.Z));
                    var j = new M.Z(f);
                    return (0, ee.jsxs)(te, {
                      children: [
                        r.type &&
                          (0, ee.jsxs)(ae, {
                            ref: this.nodeRef,
                            children: [
                              (0, ee.jsx)(oe, {
                                container: !0,
                                spacing: 1,
                                children: (0, ee.jsxs)(g.Z, {
                                  item: !0,
                                  xs: 12,
                                  children: [
                                    (0, ee.jsx)(ue, {
                                      id: "Typography_OperationMode",
                                      variant: "h4",
                                      children: (0, b.lJ)(
                                        s,
                                        r.command,
                                        r.parameters,
                                      ),
                                    }),
                                    c &&
                                      (0, ee.jsx)(ie, {
                                        id: "LightText_DefaultMode",
                                        gutterBottom: !0,
                                        children: h,
                                      }),
                                    r.user &&
                                      u &&
                                      (0, ee.jsxs)(ie, {
                                        id: "LightText_ChangedByUser",
                                        gutterBottom: !0,
                                        children: [
                                          E,
                                          " ",
                                          r.user.firstName,
                                          "\xa0",
                                          (0, ee.jsxs)("i", {
                                            children: [
                                              "(",
                                              j.format(
                                                v()
                                                  .unix(
                                                    (0, D.convertMillisToSec)(
                                                      r.updatedAt,
                                                    ),
                                                  )
                                                  .toDate(),
                                              ),
                                              ")",
                                            ],
                                          }),
                                        ],
                                      }),
                                    r.user &&
                                      l &&
                                      (0, ee.jsxs)(ie, {
                                        id: "LightText_ScheduledByUser",
                                        gutterBottom: !0,
                                        children: [O, " ", r.user.firstName],
                                      }),
                                  ],
                                }),
                              }),
                              (0, ee.jsxs)(oe, {
                                container: !0,
                                spacing: 1,
                                children: [
                                  !!r.endTime &&
                                    d.left > 0 &&
                                    (0, ee.jsxs)(g.Z, {
                                      item: !0,
                                      xs: 6,
                                      children: [
                                        (0, ee.jsx)($.ZT, {
                                          id: "Typography_OperationModeEndtime",
                                          children: (0, ee.jsx)("b", {
                                            children: _,
                                          }),
                                        }),
                                        (0, ee.jsxs)($.ZT, {
                                          id: "Typography_OperationModeTimeLeft",
                                          children: [
                                            (0, D.convertFromMilitaryTime)(
                                              r.endTime,
                                            ),
                                            " (",
                                            "".concat(d.label, " left"),
                                            ")",
                                          ],
                                        }),
                                      ],
                                    }),
                                  A()(r.parameters)
                                    .filter(function (e) {
                                      return "action" !== e;
                                    })
                                    .map(function (e) {
                                      return (0, ee.jsxs)(
                                        g.Z,
                                        {
                                          item: !0,
                                          xs: 6,
                                          children: [
                                            (0, ee.jsx)($.ZT, {
                                              id: "Typography_OperationMode_".concat(
                                                e,
                                              ),
                                              children: (0, ee.jsxs)("b", {
                                                children: [
                                                  s[
                                                    "OPERATION_MODE_PARAM_".concat(
                                                      e.toUpperCase(),
                                                    )
                                                  ],
                                                  ":",
                                                ],
                                              }),
                                            }),
                                            (0, ee.jsxs)($.ZT, {
                                              id: "Typography_OperationModeParameters_".concat(
                                                e,
                                              ),
                                              children: [
                                                r.parameters[e],
                                                (0, b.ET)(e),
                                              ],
                                            }),
                                          ],
                                        },
                                        e,
                                      );
                                    }),
                                ],
                              }),
                            ],
                          }),
                        (0, ee.jsxs)(q.Z, {
                          permission: "CHANGE_OPERATION_MODE",
                          children: [
                            (0, ee.jsx)(se, { children: T }),
                            (0, ee.jsxs)($.l0, {
                              mobile: n,
                              position: !n && "absolute",
                              leftPosition: !n && "0",
                              containerHeight:
                                !n &&
                                "calc(100vh - (220px + ".concat(
                                  this.detailsHeight,
                                  "px) )",
                                ),
                              children: [
                                (0, ee.jsx)(Q.Z, {
                                  change: m,
                                  form: i,
                                  defaultMode: a,
                                  full: !0,
                                }),
                                (0, ee.jsx)($.l0.Row, {
                                  full: !0,
                                  children: (0, ee.jsx)($.An, {
                                    id: "Duration",
                                    label: Z,
                                    value: (0, ee.jsxs)(re, {
                                      children: [
                                        P.value,
                                        (0, ee.jsxs)("span", {
                                          children: [" ", S],
                                        }),
                                      ],
                                    }),
                                    hideBottomScale: !0,
                                    sliderMax: 12,
                                    sliderMin: 1,
                                    sliderValue: P.value,
                                    onChange: function (e) {
                                      return m({ duration: e });
                                    },
                                    divideSlider: 13,
                                  }),
                                }),
                              ],
                            }),
                            (0, ee.jsxs)($.l0.Buttons, {
                              fixedSideBar: !0,
                              mobile: n,
                              children: [
                                (0, ee.jsx)($.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "163px",
                                  onClick: t,
                                  children: C,
                                }),
                                (0, ee.jsx)($.zx, {
                                  id: "Button_Submit",
                                  margin: "0 12px",
                                  buttonWidth: "163px",
                                  smallShadow: !0,
                                  onClick: x,
                                  children: R,
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
          })(x.Component),
        ),
        te = h.ZP.div(r || (r = (0, l.default)([""]))),
        re = h.ZP.label(a || (a = (0, l.default)(["\n  margin-left: 8px;\n"]))),
        ae = h.ZP.div(
          o ||
            (o = (0, l.default)([
              "\n  background: #007bc1;\n  position: relative;\n  left: -20px;\n  width: calc(100% + 40px);\n  padding: 20px;\n  margin-top: 26px;\n\n  @media screen and (min-width: 1024px) {\n    margin-top: -6px;\n  }\n\n  @media screen and (min-width: 550px) and (max-width: 1024px) {\n    left: -50px;\n    width: calc(100% + 74px);\n    padding: 20px 50px;\n  }\n\n  * {\n    color: #fdfdfd !important;\n  }\n\n  h2 {\n    font-size: 14px !important;\n    line-height: 14px !important;\n  }\n\n  p {\n    font-size: 12px;\n  }\n",
            ])),
        ),
        oe = (0, h.ZP)(g.Z)(
          i ||
            (i = (0, l.default)(["\n  &&&& {\n    margin: 4px -4px;\n  }\n"])),
        ),
        ie = (0, h.ZP)(E.Z)(s || (s = (0, l.default)(["\n  opacity: 0.5;\n"]))),
        se = (0, h.ZP)(E.Z)(
          u ||
            (u = (0, l.default)([
              '\n  &&&& {\n    color: #007bc1;\n    font-family: "Open Sans";\n    font-size: 14px;\n    font-weight: bold;\n    line-height: 14px;\n    margin-top: 24px;\n    margin-bottom: 8px;\n  }\n',
            ])),
        ),
        ue = (0, h.ZP)(E.Z)(
          c ||
            (c = (0, l.default)([
              "\n  &&&& {\n    font-size: 14px;\n    font-weight: 800;\n    line-height: 14px;\n  }\n",
            ])),
        );
    },
    11228: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var r,
        a = t(56824),
        o = t(30225),
        i = t(94404),
        s = t(14482),
        u = t(5189),
        c = t(76431),
        l = t(84628),
        d = t(49318),
        f = (0, l.Jg)({
          path: function () {
            return ["scenes", "containers", "OperationModeHelpModal"];
          },
          connect: { props: [d.Z, ["translations", "isMobile"]] },
        }),
        p = t(30588),
        m = t(22247),
        x = t(31228),
        h = (function (e) {
          (0, s.default)(t, e);
          var n = (0, u.default)(t);
          function t() {
            return ((0, o.default)(this, t), n.apply(this, arguments));
          }
          return (
            (0, i.default)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    n = e.open,
                    t = e.onClose,
                    r = e.isMobile,
                    a = e.translations,
                    o = a.DASH_OPMODE_HELPMODAL_TITLE,
                    i = a.DASH_OPMODE_HELPMODAL_SUBTITLE,
                    s = Object.keys(a).filter(function (e) {
                      return /DASH_OPMODE_HELPMODAL_TOPIC(\d+)_TITLE/.test(e);
                    });
                  return (0, x.jsx)(E, {
                    children: (0, x.jsx)(m.u_, {
                      open: n,
                      size: "medium",
                      onClose: t,
                      children: (0, x.jsxs)("div", {
                        children: [
                          (0, x.jsx)(m.xB, {
                            title: o,
                            subtitle: i,
                            closeButton: !0,
                            onClose: t,
                          }),
                          (0, x.jsx)(m.hz, {
                            type: "diagonal",
                            size: "medium",
                            mobile: r,
                            children: (0, x.jsx)(m.aV, {
                              children: s.map(function (e, n) {
                                return (0, x.jsx)(
                                  m.Wq,
                                  {
                                    title: a[e],
                                    shadow: !0,
                                    collapsible: !0,
                                    children: (0, x.jsx)(m.ZT, {
                                      children:
                                        a[
                                          "DASH_OPMODE_HELPMODAL_TOPIC".concat(
                                            n + 1,
                                            "_DESC",
                                          )
                                        ],
                                    }),
                                  },
                                  e,
                                );
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  });
                },
              },
            ]),
            t
          );
        })(c.Component),
        g = f(h),
        E = p.ZP.div(r || (r = (0, a.default)([""])));
    },
    16019: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return D;
        },
      });
      var r,
        a,
        o = t(56824),
        i = t(6892),
        s = t(30225),
        u = t(94404),
        c = t(14482),
        l = t(5189),
        d = t(76431),
        f = t(84628),
        p = t(49318),
        m = (0, f.Jg)({
          path: function () {
            return ["scenes", "containers", "OperationModeParams"];
          },
          connect: {
            props: [
              p.Z,
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
        x = t(30588),
        h = t(76948),
        g = t(69400),
        E = t.n(g),
        M = {
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
        O = t(72768),
        v = t(22247),
        _ = t(31228),
        A = (function (e) {
          (0, c.default)(t, e);
          var n = (0, l.default)(t);
          function t() {
            return ((0, s.default)(this, t), n.apply(this, arguments));
          }
          return (
            (0, u.default)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    n = e.form,
                    t = e.change,
                    r = e.translations,
                    a = e.dirty,
                    o = e.label,
                    s = e.defaultMode,
                    u = e.settings,
                    c = e.disabled,
                    l = e.full,
                    d = e.isMobile,
                    f = e.isGermany,
                    p = (function (e, n) {
                      var t = Object.keys(h.wS).map(function (n) {
                          return { val: n, label: (0, h.lJ)(e, n) };
                        }),
                        r = function () {
                          if (n[a]) {
                            var e = E()(M[a]);
                            t = t.filter(function (n) {
                              return -1 !== e.indexOf(n.val);
                            });
                          }
                        };
                      for (var a in n) r();
                      return t;
                    })(r, {
                      isGermany: f,
                      isSettings: u,
                      batteryReadyMode: e.batteryReadyMode,
                    });
                  s &&
                    Object.keys(s).length > 0 &&
                    (p = [
                      {
                        val: "DEFAULT",
                        label: (0, _.jsxs)("span", {
                          children: [
                            "Default",
                            " ",
                            (0, _.jsxs)(T, {
                              children: ["(", (0, h.lJ)(r, s.command), ")"],
                            }),
                          ],
                        }),
                      },
                    ].concat((0, i.Z)(p)));
                  var m = n || {},
                    x = m.command,
                    g = m.soc,
                    A = m.powerAllocation,
                    D = m.power,
                    Z = m.maximumPower,
                    S = m.optimalSoc,
                    C = m.maxHousePeakConsumption,
                    R = r.OPERATION_MODE_DEFAULT_LABEL,
                    P = r.OPERATION_MODE_PARAM_MAXHOUSEPEAKCONSUMPTION,
                    j = r.OPERATION_MODE_PARAM_OPTIMALSOC,
                    w = r.OPERATION_MODE_PARAM_POWERALLOCATION,
                    y = r.OPERATION_MODE_PARAM_MAXIMUMPOWER,
                    k = r.OPERATION_MODE_PARAM_SOC,
                    I = r.OPERATION_MODE_PARAM_POWER,
                    H = x && x.value;
                  "DEFAULT" === H && s && (H = s.command);
                  var L = h.wS[H] || [];
                  return (0, _.jsxs)(b, {
                    children: [
                      (0, _.jsx)(v.l0.Row, {
                        children: (0, _.jsx)(v.OC, {
                          id: "OperationMode",
                          label: o || R,
                          options: p,
                          selected: x ? x.value : null,
                          onChange: function (e) {
                            (("SET_CHARGE" !== e && "SET_DISCHARGE" !== e) ||
                              (t({ power: 5 }), t({ soc: 0 })),
                              t({ command: e }));
                          },
                          disabled: c || (f && u),
                          containerMargin: !d && l && "0 8px",
                          full: l,
                        }),
                      }),
                      -1 !== L.indexOf("power") &&
                        (0, _.jsx)(v.l0.Row, {
                          full: !0,
                          children: (0, _.jsx)(v.An, {
                            id: "Power",
                            label: I,
                            value: "".concat(D.value, "%"),
                            disabled: c || "DEFAULT" === x.value,
                            sliderMin: 5,
                            sliderMax: 100,
                            sliderValue: D.value,
                            sliderStep: 5,
                            onChange: function (e) {
                              return t({ power: e });
                            },
                          }),
                        }),
                      -1 !== L.indexOf("powerAllocation") &&
                        (0, _.jsx)(v.l0.Row, {
                          full: l,
                          children: (0, _.jsx)(v.An, {
                            id: "PowerAllocation",
                            label: w,
                            disabled: c || (x && "DEFAULT" === x.value),
                            value: "".concat(A.value, "%"),
                            sliderMin: 0,
                            sliderMax: 100,
                            sliderValue: A.value,
                            onChange: function (e) {
                              return t({ powerAllocation: e });
                            },
                          }),
                        }),
                      !f &&
                        -1 !== L.indexOf("maximumPower") &&
                        (0, _.jsx)(v.l0.Row, {
                          full: l,
                          children: (0, _.jsx)(v.An, {
                            id: "MaxPowerAllocation",
                            label: y,
                            value: "".concat(Z.value, "W"),
                            disabled: c || (x && "DEFAULT" === x.value),
                            sliderMin: -1e3,
                            sliderMax: 3e4,
                            sliderValue: Z.value,
                            onChange: function (e) {
                              return t({ maximumPower: e });
                            },
                          }),
                        }),
                      -1 !== L.indexOf("soc") &&
                        (0, _.jsx)(v.l0.Row, {
                          full: l,
                          children: (0, _.jsx)(v.An, {
                            id: "StateOfCharge",
                            label: k,
                            value: "".concat(g.value, "%"),
                            disabled: c || (x && "DEFAULT" === x.value),
                            hideBottomScale: !0,
                            sliderMin: 0,
                            sliderMax: 100,
                            sliderStep: 5,
                            sliderValue: g.value,
                            onChange: function (e) {
                              return t({ soc: e });
                            },
                          }),
                        }),
                      -1 !== L.indexOf("optimalSoc") &&
                        (0, _.jsx)(v.l0.Row, {
                          full: l,
                          children: (0, _.jsx)(v.An, {
                            id: "OptimalStateOfCharge",
                            label: j,
                            value: "".concat(S.value, "%"),
                            hideBottomScale: !0,
                            disabled: c || (x && "DEFAULT" === x.value),
                            sliderMin: 0,
                            sliderMax: 100,
                            sliderValue: S.value,
                            onChange: function (e) {
                              return t({ optimalSoc: e });
                            },
                          }),
                        }),
                      -1 !== L.indexOf("maxHousePeakConsumption") &&
                        (0, _.jsxs)(v.l0.Row, {
                          full: l,
                          children: [
                            (0, _.jsx)(v.oH, {
                              id: "MaxHousePeakConsumption",
                              label: P,
                              type: "number",
                              value: C.value,
                              error: a && !C.valid,
                              disabled: c || (x && "DEFAULT" === x.value),
                              onChange: function (e) {
                                var n = e.target;
                                return t({ maxHousePeakConsumption: n.value });
                              },
                            }),
                            (0, _.jsx)(O.Z, {
                              id: "MaxHousePeakConsumption",
                              showError: a && !C.valid,
                              errorMessage: C.message,
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
        D = m(A),
        b = x.ZP.div(r || (r = (0, o.default)([""]))),
        T = x.ZP.span(
          a ||
            (a = (0, o.default)([
              "\n  color: rgba(114, 126, 132, 0.5);\n  font-size: 12px;\n",
            ])),
        );
    },
    88885: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      });
      var r = t(30225),
        a = t(94404),
        o = t(14482),
        i = t(5189),
        s = t(76431),
        u = t(84628),
        c = t(49318),
        l = (0, u.Jg)({ connect: { props: [c.Z, ["userRole"]] } }),
        d = t(30375),
        f = (function (e) {
          (0, o.default)(t, e);
          var n = (0, i.default)(t);
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
        })(s.Component),
        p = l(f);
    },
  },
]);
//# sourceMappingURL=137.893678d4.chunk.js.map
