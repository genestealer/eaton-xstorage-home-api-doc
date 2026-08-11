"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [9135],
  {
    9135: function (n, e, t) {
      (t.r(e),
        t.d(e, {
          default: function () {
            return m;
          },
        }));
      var i,
        r = t(56824),
        o = t(30225),
        a = t(94404),
        u = t(14482),
        c = t(5189),
        s = t(76431),
        l = t(30588),
        f = t(84628),
        d = t(49318),
        h = (0, f.Jg)({
          connect: {
            props: [
              d.Z,
              [
                "translations",
                "navItems",
                "currentRoute",
                "isMobile",
                "userValid",
                "countryDevice",
                "showHelpTour",
              ],
            ],
            actions: [d.Z, ["push"]],
          },
        }),
        p = t(13795),
        v = t(22247),
        x = t(31228),
        b = (function (n) {
          (0, u.default)(t, n);
          var e = (0, c.default)(t);
          function t() {
            var n;
            (0, o.default)(this, t);
            for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++)
              r[a] = arguments[a];
            return (
              ((n = e.call.apply(e, [this].concat(r))).navigate = function (e) {
                (0, n.actions.push)(e);
              }),
              n
            );
          }
          return (
            (0, a.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    e = this.props,
                    t = e.countryDevice,
                    i = e.translations,
                    r = e.navItems,
                    o = e.currentRoute,
                    a = e.isMobile,
                    u = e.userValid,
                    c = e.showHelpTour,
                    s = r && !o.hideNavBar,
                    l = r.filter(function (n) {
                      return !n.hide;
                    });
                  return (a && o.hideNavBar) || !u
                    ? ""
                    : (t !== p.zN ||
                        c ||
                        (l = l.filter(function (n) {
                          return "Schedule" !== n.key;
                        })),
                      (0, x.jsxs)(k, {
                        mobile: a,
                        className: "first-step",
                        children: [
                          !a && (0, x.jsx)(v.G2, {}),
                          s &&
                            l.map(function (e) {
                              var t = e.key,
                                r = e.icon,
                                o = e.name,
                                u = e.active,
                                c = e.path;
                              return (0, x.jsx)(
                                v.LY,
                                {
                                  id: t,
                                  active: u,
                                  icon: r,
                                  content: i[o] ? i[o] : o,
                                  href: c,
                                  mobile: a,
                                  onClick: function (e) {
                                    return n.navigate(c);
                                  },
                                },
                                t,
                              );
                            }),
                        ],
                      }));
                },
              },
            ]),
            t
          );
        })(s.PureComponent),
        m = s.memo(h(b)),
        k = l.ZP.div(
          i ||
            (i = (0, r.default)([
              "\n  background: #fff;\n  box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.05),\n    0 -2px 5px 0 rgba(0, 0, 0, 0.06);\n  z-index: 1000;\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (n) {
            return (
              n.mobile &&
              "\n    position: fixed;\n    height: 56px;\n    width: 100%;\n    bottom: 0;\n    display: flex;\n    min-width: 300px;\n  "
            );
          },
          function (n) {
            return (
              !n.mobile &&
              "\n    position: fixed;\n    left: 0;\n    top: 0;\n    height: 100vh;\n    width: 120px;\n    display: block;\n  "
            );
          },
        );
    },
  },
]);
//# sourceMappingURL=9135.92f4b095.chunk.js.map
