"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [6321],
  {
    6321: function (t, e, n) {
      (n.r(e),
        n.d(e, {
          DeviceSettings: function () {
            return w;
          },
          default: function () {
            return Z;
          },
        }));
      var r,
        i = n(56824),
        s = n(30225),
        c = n(94404),
        a = n(14482),
        u = n(5189),
        o = n(76431),
        f = n(87121),
        l = n(84628),
        p = n(83749),
        h = n(90012),
        d = n(49318),
        v = (0, l.Jg)({
          path: function () {
            return ["scenes", "DeviceSettings"];
          },
          connect: {
            props: [d.Z, ["isMobile", "translations"]],
            actions: [d.Z, ["checkSetupStatus", "push"]],
          },
          actions: function () {
            return {
              reset: function () {
                return !0;
              },
            };
          },
          start: (0, f.Z)().mark(function t() {
            var e;
            return (0, f.Z)().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e = this.actionCreators.checkSetupStatus),
                        (0, h.log)("[XS-DeviceSettings] Start Scene", "yellow"),
                        (t.next = 4),
                        (0, p.gz)(e())
                      );
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
            );
          }),
          stop: (0, f.Z)().mark(function t() {
            var e;
            return (0, f.Z)().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e = this.actionCreators.reset),
                        (0, h.log)("[XS-DeviceSettings] Stop Scene"),
                        (t.next = 4),
                        (0, p.gz)(e())
                      );
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
            );
          }),
        }),
        S = n(30588),
        g = n(81898),
        x = n(22247),
        k = n(31228),
        w = (function (t) {
          (0, a.default)(n, t);
          var e = (0, u.default)(n);
          function n() {
            var t;
            (0, s.default)(this, n);
            for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++)
              i[c] = arguments[c];
            return (
              ((t = e.call.apply(e, [this].concat(i))).navigate = function (e) {
                (0, t.actions.push)(e);
              }),
              t
            );
          }
          return (
            (0, c.default)(n, [
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = this.props,
                    n = e.translations,
                    r = e.isMobile,
                    i = n.UNITSETT_TITLE;
                  return (0, k.jsxs)(b, {
                    children: [
                      (0, k.jsx)(x.xE, {
                        id: "BackButton",
                        onClick: function () {
                          return t.navigate("/more/");
                        },
                      }),
                      (0, k.jsx)(x.V1, { blue: !0, mobile: r, children: i }),
                      (0, k.jsx)(g.Z, {}),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(o.Component),
        Z = v(w),
        b = S.ZP.div(
          r ||
            (r = (0, i.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n",
            ])),
        );
    },
  },
]);
//# sourceMappingURL=6321.1888a7f8.chunk.js.map
