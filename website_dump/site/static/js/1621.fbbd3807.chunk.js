"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [1621],
  {
    71621: function (n, r, e) {
      (e.r(r),
        e.d(r, {
          default: function () {
            return R;
          },
        }));
      var t,
        a,
        i = e(56824),
        l = e(30225),
        o = e(94404),
        s = e(14482),
        p = e(5189),
        u = e(76431),
        c = e(30588),
        d = e(84628),
        f = e(49318),
        h = (0, d.Jg)({
          path: function () {
            return ["scenes", "FatalError"];
          },
          connect: { props: [f.Z, ["translations", "isMobile"]] },
        }),
        v = e(77835),
        x = e(31228),
        _ = (function (n) {
          (0, s.default)(e, n);
          var r = (0, p.default)(e);
          function e() {
            return ((0, l.default)(this, e), r.apply(this, arguments));
          }
          return (
            (0, o.default)(e, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    r = n.isMobile,
                    e = n.translations,
                    t = e.ERROR_404_DESC,
                    a = e.ERR_FATAL_ERROR;
                  return (0, x.jsx)(b, {
                    children: (0, x.jsxs)(m, {
                      mobile: r,
                      children: [
                        (0, x.jsx)(v.Z, {
                          variant: "h1",
                          color: "primary",
                          paragraph: !0,
                          children: "Oops!",
                        }),
                        (0, x.jsx)(v.Z, {
                          variant: "h2",
                          color: "primary",
                          paragraph: !0,
                          children: a,
                        }),
                        (0, x.jsx)(v.Z, {
                          variant: "h3",
                          color: "textPrimary",
                          paragraph: !0,
                          dangerouslySetInnerHTML: { __html: t },
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            e
          );
        })(u.Component),
        R = h(_),
        b = c.ZP.div(t || (t = (0, i.default)(["\n\n"]))),
        m = c.ZP.div(
          a ||
            (a = (0, i.default)([
              "\n  position: relative;\n  display: inline-block;\n  padding: 20px;\n\n  ",
              "\n",
            ])),
          function (n) {
            return (
              !n.mobile && "\n    left: calc(50% + 80px);\n    top: 320px;\n  "
            );
          },
        );
    },
  },
]);
//# sourceMappingURL=1621.fbbd3807.chunk.js.map
