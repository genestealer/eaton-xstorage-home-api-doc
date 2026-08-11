"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [9343],
  {
    89343: function (n, e, t) {
      (t.r(e),
        t.d(e, {
          default: function () {
            return I;
          },
        }));
      var r,
        c,
        i,
        a = t(56824),
        s = t(30225),
        o = t(94404),
        u = t(14482),
        d = t(5189),
        l = t(76431),
        f = t(87121),
        h = t(2845),
        v = t(84628),
        p = t(83749),
        x = t(90012),
        E = t(98278),
        w = t.n(E),
        g = t(49318),
        k = (0, v.Jg)({
          path: function () {
            return ["scenes", "ScheduleEvent"];
          },
          connect: {
            props: [
              g.Z,
              ["currentRoute", "translations", "isMobile", "currentLocation"],
            ],
            actions: [g.Z, ["push"]],
          },
          actions: function () {
            return {
              reset: function () {
                return {};
              },
              setEventId: function (n) {
                return { eventId: n };
              },
            };
          },
          reducers: function (n) {
            var e,
              t = n.actions;
            return {
              currentEventId: [
                null,
                w().string,
                ((e = {}),
                (0, h.Z)(e, t.setEventId, function (n, e) {
                  return e.eventId;
                }),
                (0, h.Z)(e, t.reset, function (n, e) {
                  return null;
                }),
                e),
              ],
            };
          },
          start: (0, f.Z)().mark(function n() {
            var e, t, r;
            return (0, f.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (e = this.actionCreators.setEventId),
                        (0, x.log)("[XS-ScheduleEvent] Start Scene ", "yellow"),
                        (n.next = 4),
                        this.get("currentRoute")
                      );
                    case 4:
                      if (((t = n.sent), !(r = t.params.id))) {
                        n.next = 9;
                        break;
                      }
                      return ((n.next = 9), (0, p.gz)(e(r)));
                    case 9:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this,
            );
          }),
          stop: (0, f.Z)().mark(function n() {
            var e;
            return (0, f.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (e = this.actionCreators.reset),
                        (0, x.log)("[XS-ScheduleEvent] Stop Scene "),
                        (n.next = 4),
                        (0, p.gz)(e())
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
            (n.actions, n.workers);
            return {};
          },
          workers: {},
        }),
        b = t(30588),
        S = t(85071),
        Z = t(22247),
        C = t(31228),
        _ = (function (n) {
          (0, u.default)(t, n);
          var e = (0, d.default)(t);
          function t() {
            var n;
            (0, s.default)(this, t);
            for (var r = arguments.length, c = new Array(r), i = 0; i < r; i++)
              c[i] = arguments[i];
            return (
              ((n = e.call.apply(e, [this].concat(c))).navigate = function (e) {
                (0, n.actions.push)(e);
              }),
              n
            );
          }
          return (
            (0, o.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    e = this.props,
                    t = e.translations,
                    r = e.isMobile,
                    c = e.currentLocation,
                    i = t.SCHEDULE_EVENT_ADD,
                    a = t.SCHEDULE_EVENT_EDIT,
                    s = c ? c.state : null;
                  return (0, C.jsxs)(m, {
                    children: [
                      (0, C.jsxs)(j, {
                        children: [
                          (0, C.jsx)(Z.xE, {
                            id: "ScheduleEvent_BackButton",
                            color: "white",
                            onClick: function () {
                              return n.navigate("/schedule/");
                            },
                          }),
                          (0, C.jsx)(Z.V1, { mobile: r, children: s ? a : i }),
                        ],
                      }),
                      (0, C.jsx)(y, {
                        children: (0, C.jsx)(S.Z, {
                          eventId: s,
                          onCancel: function () {
                            return n.navigate("/schedule/");
                          },
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(l.Component),
        I = k(_),
        m = b.ZP.div(r || (r = (0, a.default)([""]))),
        j = b.ZP.div(
          c ||
            (c = (0, a.default)([
              "\n  background-color: #007bc1;\n  height: 18vh;\n  padding: 25px 16px;\n\n  @media screen and (max-width: 580px) {\n    height: 20vh;\n  }\n",
            ])),
        ),
        y = b.ZP.div(
          i ||
            (i = (0, a.default)([
              "\n  border-width: 11vw 100vw 0 0;\n  border-color: #007bc1 #ffffff transparent transparent;\n  display: inline-block;\n  width: 0px;\n  border-style: solid;\n",
            ])),
        );
    },
  },
]);
//# sourceMappingURL=9343.7cf50435.chunk.js.map
