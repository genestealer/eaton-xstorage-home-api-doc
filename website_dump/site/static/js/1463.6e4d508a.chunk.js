"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [1463],
  {
    81463: function (n, e, t) {
      (t.r(e),
        t.d(e, {
          Unauthorized: function () {
            return Z;
          },
          default: function () {
            return _;
          },
        }));
      var i = t(56824),
        o = t(30225),
        r = t(94404),
        a = t(14482),
        c = t(5189),
        l = t(76431),
        u = t(30588),
        d = t(22247);
      var f =
          t.p +
          "static/media/background-blue-partial.ef5b80cab453577084c07fa9f441349c.svg",
        s = t(84628),
        p = t(49318),
        b = (0, s.Jg)({
          path: function () {
            return ["scenes", "Unauthorized"];
          },
          connect: { props: [p.Z, ["translations", "isMobile"]] },
        });
      var h,
        g,
        x,
        m,
        k,
        v =
          t.p +
          "static/media/background_blue_tablet.7f8d004ce1dd02c9826558e94bfc7c61.svg",
        F = t(31228),
        Z = (function (n) {
          (0, a.default)(t, n);
          var e = (0, c.default)(t);
          function t() {
            return ((0, o.default)(this, t), e.apply(this, arguments));
          }
          return (
            (0, r.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.translations,
                    t = n.isMobile,
                    i = e.API_UNAUTHORIZED,
                    o = e.API_UNAUTHORIZED_DESC;
                  return (0, F.jsx)(P, {
                    mobile: t,
                    children: (0, F.jsxs)(j, {
                      mobile: t,
                      children: [
                        (0, F.jsx)(z, { mobile: t, children: "Oops!" }),
                        (0, F.jsx)(C, { mobile: t, children: i }),
                        (0, F.jsx)(U, { paragraph: !0, children: o }),
                        t && (0, F.jsx)(d.SK, { height: "30vh" }),
                      ],
                    }),
                  });
                },
              },
            ]),
            t
          );
        })(l.Component),
        _ = b(Z),
        P = u.ZP.div(
          h ||
            (h = (0, i.default)([
              "\n  min-height: 790px;\n  height: 100vh;\n  background: #f7f7f9;\n\n  ",
              "\n\n  ",
              "\n\n  width: 100%;\n  display: inline-block;\n  background-repeat: no-repeat;\n  background-size: auto;\n  background-attachment: fixed;\n  background-position: top center;\n",
            ])),
          function (n) {
            return (
              !n.mobile && "\n    background-image: url(".concat(f, ");\n  ")
            );
          },
          function (n) {
            return (
              n.mobile && "\n    background-image: url(".concat(v, ");\n  ")
            );
          },
        ),
        j = u.ZP.div(
          g ||
            (g = (0, i.default)([
              "\n  position: relative;\n  display: inline-block;\n  padding: 20px;\n\n  ",
              "\n",
            ])),
          function (n) {
            return (
              !n.mobile && "\n    left: calc(50% + 80px);\n    top: 320px;\n  "
            );
          },
        ),
        z = (0, u.ZP)(d.V1)(
          x ||
            (x = (0, i.default)([
              "\n  &&&& {\n    ",
              "\n\n    ",
              "\n    font-size: 56px;\n  }\n",
            ])),
          function (n) {
            return !n.mobile && "\n      color: #007BC1;\n    ";
          },
          function (n) {
            return n.mobile && "\n      color: #FFFFFF;\n    ";
          },
        ),
        C = u.ZP.h2(
          m ||
            (m = (0, i.default)([
              "\n  ",
              "\n\n  ",
              "\n\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  line-height: 32px;\n",
            ])),
          function (n) {
            return !n.mobile && "\n    color: #007BC1;\n  ";
          },
          function (n) {
            return n.mobile && "\n    color: #FFFFFF;\n  ";
          },
        ),
        U = (0, u.ZP)(d.ZT)(
          k ||
            (k = (0, i.default)([
              "\n  &&&& {\n    color: #424e54;\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 24px;\n\n    a {\n      color: #333;\n      text-decoration: underline;\n    }\n  }\n",
            ])),
        );
    },
  },
]);
//# sourceMappingURL=1463.6e4d508a.chunk.js.map
