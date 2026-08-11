"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [9952],
  {
    39952: function (n, e, t) {
      (t.r(e),
        t.d(e, {
          Terms: function () {
            return E;
          },
          default: function () {
            return P;
          },
        }));
      var i,
        r,
        a,
        o,
        s,
        c,
        u,
        d,
        l = t(31105),
        p = t(56824),
        f = t(30225),
        x = t(94404),
        h = t(14482),
        g = t(5189),
        m = t(76431),
        v = t(87121),
        w = t(84628),
        b = t(83749),
        j = t(90012),
        k = t(49318),
        Z = (0, w.Jg)({
          path: function () {
            return ["scenes", "Terms"];
          },
          connect: {
            props: [k.Z, ["isMobile", "translations"]],
            actions: [k.Z, ["push"]],
          },
          actions: function () {
            return {
              error: function () {
                return !0;
              },
              reset: function () {
                return !0;
              },
            };
          },
          start: (0, v.Z)().mark(function n() {
            return (0, v.Z)().wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (0, j.log)("[XS-Terms] Start Scene", "yellow"),
                      (n.next = 3),
                      (0, b.gw)(100)
                    );
                  case 3:
                  case "end":
                    return n.stop();
                }
            }, n);
          }),
          stop: (0, v.Z)().mark(function n() {
            var e;
            return (0, v.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (e = this.actionCreators.reset),
                        (0, j.log)("[XS-Terms] Stop Scene"),
                        (n.next = 4),
                        (0, b.gz)(e())
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
        }),
        T = t(30588),
        y = t(22247),
        _ = t(31228),
        E = (function (n) {
          (0, h.default)(t, n);
          var e = (0, g.default)(t);
          function t() {
            var n;
            (0, f.default)(this, t);
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
            (0, x.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    e = this.props,
                    t = e.isMobile,
                    i = e.translations,
                    r = i.EULA_TERMS_TITLE,
                    a = i.EULA_TERMS_EULA;
                  return (0, _.jsxs)(S, {
                    children: [
                      t &&
                        (0, _.jsx)(y.xE, {
                          id: "BackButton",
                          onClick: function () {
                            return n.navigate("/more/");
                          },
                        }),
                      (0, _.jsx)(y.V1, { mobile: t, blue: t, children: r }),
                      t &&
                        (0, _.jsx)(U, {
                          children: (0, _.jsx)(y.Lr, {
                            id: "Terms",
                            title: a,
                            onClick: function () {
                              return n.navigate("/terms/eula/");
                            },
                            link: !0,
                          }),
                        }),
                      !t &&
                        (0, _.jsx)(C, {
                          children: (0, _.jsxs)(L, {
                            id: "TermsButton_Eulas",
                            onClick: function () {
                              return n.navigate("/terms/eula/");
                            },
                            children: [
                              (0, _.jsxs)(z, {
                                children: [
                                  (0, _.jsx)(B, {}),
                                  (0, _.jsx)(M, { children: a }),
                                ],
                              }),
                              (0, _.jsx)(A, {}),
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
        })(m.Component),
        P = Z(E),
        S = T.ZP.div(
          i ||
            (i = (0, p.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n  \n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n  }\n",
            ])),
        ),
        C = T.ZP.div(
          r ||
            (r = (0, p.default)([
              "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 25vh;\n",
            ])),
        ),
        L = T.ZP.div(a || (a = (0, p.default)([""]))),
        z = T.ZP.div(
          o ||
            (o = (0, p.default)([
              "\n  min-height: 300px;\n  min-width: 300px;\n  margin: 0 10px;\n  border-radius: 6px;\n  background-color: #ffffff;\n  box-shadow: 0 0 10px 0 rgba(114, 126, 132, 0.1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n",
            ])),
        ),
        A = T.ZP.div(
          s ||
            (s = (0, p.default)([
              "\n  position: relative;\n  z-index: 1;\n  width: calc(100% - 48px);\n  left: 24px;\n  height: 10px;\n  top: -10px;\n  background-color: #727e84;\n  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);\n",
            ])),
        ),
        M = T.ZP.span(
          c ||
            (c = (0, p.default)([
              "\n  color: #424e54;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 24px;\n",
            ])),
        ),
        B = (0, T.ZP)(function (n) {
          return (0, _.jsx)(y.oy, (0, l.default)({}, n));
        })(
          u ||
            (u = (0, p.default)([
              "\n  height: 80px;\n  width: 80px;\n  margin-bottom: 20px;\n",
            ])),
        ),
        U = T.ZP.div(
          d ||
            (d = (0, p.default)([
              "\n  > div:before {\n    content: '';\n    position: absolute;\n    width: calc(100% - 20px);\n    height: 56px;\n    box-shadow: inset 0 -1px 0 0 rgba(114, 126, 132, 0.1);\n\n    @media screen and (min-width: 550px) and (max-width: 1024px) {\n      width: calc(100% - 50px);\n    }\n  }\n",
            ])),
        );
    },
  },
]);
//# sourceMappingURL=9952.0eeb22e9.chunk.js.map
