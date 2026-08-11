"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [373],
  {
    36082: function (n, t, i) {
      i.d(t, {
        Z: function () {
          return M;
        },
      });
      var e,
        r,
        o,
        a = i(56824),
        s = i(30225),
        c = i(94404),
        u = i(14482),
        l = i(5189),
        d = i(76431),
        f = i(87121),
        h = i(2845),
        p = i(84628),
        x = i(83749),
        g = i(98278),
        v = i.n(g),
        C = i(49318),
        m = (0, p.Jg)({
          path: function () {
            return ["scenes", "containers", "PageAdaptable"];
          },
          connect: {
            props: [C.Z, ["isMobile", "translations"]],
            actions: [C.Z, ["push"]],
          },
          actions: function () {
            return {
              showConfirmationModal: function (n) {
                return { location: n };
              },
              hideConfirmationModal: function () {
                return !0;
              },
              handleConfirmNavigationClick: function () {
                return !0;
              },
            };
          },
          reducers: function (n) {
            var t,
              i = n.actions;
            return {
              confirmationModal: [
                !1,
                v().bool,
                ((t = {}),
                (0, h.Z)(t, i.showConfirmationModal, function () {
                  return !0;
                }),
                (0, h.Z)(t, i.hideConfirmationModal, function () {
                  return !1;
                }),
                t),
              ],
              nextLocation: [
                {},
                v().object,
                (0, h.Z)({}, i.showConfirmationModal, function (n, t) {
                  return t.location;
                }),
              ],
            };
          },
          stop: (0, f.Z)().mark(function n() {
            var t;
            return (0, f.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators.hideConfirmationModal),
                        (n.next = 3),
                        (0, x.gz)(t())
                      );
                    case 3:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this,
            );
          }),
          takeLatest: function (n) {
            var t = n.actions,
              i = n.workers;
            return (0, h.Z)(
              {},
              t.handleConfirmNavigationClick,
              i.handleConfirmNavigationClick,
            );
          },
          workers: {
            handleConfirmNavigationClick: (0, f.Z)().mark(function n() {
              var t, i, e, r;
              return (0, f.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (i = t.hideConfirmationModal),
                          (e = t.push),
                          (n.next = 3),
                          this.get("nextLocation")
                        );
                      case 3:
                        return ((r = n.sent), (n.next = 6), (0, x.gz)(i()));
                      case 6:
                        return ((n.next = 8), (0, x.gz)(e(r)));
                      case 8:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this,
              );
            }),
          },
        }),
        k = i(30588),
        w = i(22247),
        Z = i(31228),
        j = (function (n) {
          (0, u.default)(i, n);
          var t = (0, l.default)(i);
          function i() {
            var n;
            (0, s.default)(this, i);
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
              r[o] = arguments[o];
            return (
              ((n = t.call.apply(t, [this].concat(r))).first = !0),
              (n.handleBlockedNavigation = function (t) {
                var i = n.props,
                  e = i.isForm,
                  r = i.isDirty,
                  o = n.actions.showConfirmationModal;
                return !(e && r && n.first) || ((n.first = !1), o(t), !1);
              }),
              n
            );
          }
          return (
            (0, c.default)(i, [
              {
                key: "componentDidMount",
                value: function () {
                  this.first = !0;
                },
              },
              {
                key: "render",
                value: function () {
                  var n = this,
                    t = this.props,
                    i = t.isMobile,
                    e = t.loading,
                    r = t.children,
                    o = t.menu,
                    a = t.onBack,
                    s = t.title,
                    c = t.translations,
                    u = t.confirmationModal,
                    l = t.isForm,
                    d = t.isDirty,
                    f = this.actions,
                    h = f.showConfirmationModal,
                    p = f.hideConfirmationModal,
                    x = f.handleConfirmNavigationClick,
                    g = c.GENERAL_CANCEL,
                    v = c.GENERAL_CONTINUE,
                    C = c.BACK_BUTTON_MODAL_TEXT,
                    m = c.BACK_BUTTON_MODAL_TITLE;
                  return (0, Z.jsxs)(N, {
                    children: [
                      !!e && (0, Z.jsx)(w.gb, {}),
                      i &&
                        (0, Z.jsxs)("div", {
                          children: [
                            (0, Z.jsx)(w.xE, {
                              id: "PageAdaptable_BackButton",
                              onClick: l && d ? h : a,
                            }),
                            r,
                          ],
                        }),
                      !i &&
                        (0, Z.jsxs)("div", {
                          children: [
                            (0, Z.jsx)(w.V1, { mobile: i, children: s }),
                            (0, Z.jsx)(_, { children: o }),
                            (0, Z.jsx)(T, { children: r }),
                          ],
                        }),
                      (0, Z.jsx)(w.u_, {
                        size: "small",
                        open: u,
                        children: (0, Z.jsxs)("div", {
                          children: [
                            (0, Z.jsx)(w.xB, { title: m }),
                            (0, Z.jsx)(w.hz, {
                              padding: !0,
                              size: "small",
                              mobile: i,
                              children: (0, Z.jsx)(w.ZT, { children: C }),
                            }),
                            (0, Z.jsxs)(w.Zf, {
                              children: [
                                (0, Z.jsx)(w.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    ((n.first = !0), p());
                                  },
                                  children: g,
                                }),
                                (0, Z.jsx)(w.zx, {
                                  id: "Button_Continue",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function (n) {
                                    i ? (p(), a(n)) : x(n);
                                  },
                                  children: v,
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
            i
          );
        })(d.Component),
        M = m(j),
        N = k.ZP.div(
          e ||
            (e = (0, a.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n    padding-right: 0px;\n  }\n",
            ])),
        ),
        _ = k.ZP.div(
          r ||
            (r = (0, a.default)([
              "\n  width: 40%;\n  padding-right: 5%;\n  float: left;\n  position: relative;\n  color: #fff;\n  margin-top: 25px;\n",
            ])),
        ),
        T = k.ZP.div(
          o ||
            (o = (0, a.default)([
              "\n  width: 60%;\n  float: left;\n  padding-right: 0;\n",
            ])),
        );
    },
    10373: function (n, t, i) {
      (i.r(t),
        i.d(t, {
          default: function () {
            return k;
          },
        }));
      var e = i(30225),
        r = i(94404),
        o = i(14482),
        a = i(5189),
        s = i(76431),
        c = i(87121),
        u = i(84628),
        l = i(83749),
        d = i(90012),
        f = i(79408),
        h = i(49318),
        p = (0, u.Jg)({
          path: function () {
            return ["scenes", "NetworkSettings"];
          },
          connect: {
            props: [h.Z, ["isMobile", "translations"], f.Z, ["dirty"]],
            actions: [
              h.Z,
              ["checkSetupStatus", "push"],
              f.Z,
              ["revertChanges"],
            ],
          },
          actions: function () {
            return {
              reset: function () {
                return !0;
              },
            };
          },
          start: (0, c.Z)().mark(function n() {
            var t;
            return (0, c.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators.checkSetupStatus),
                        (0, d.log)(
                          "[XS-NetworkSettings] Start Scene",
                          "yellow",
                        ),
                        (n.next = 4),
                        (0, l.gz)(t())
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
          stop: (0, c.Z)().mark(function n() {
            var t;
            return (0, c.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators.reset),
                        (0, d.log)("[XS-NetworkSettings] Stop Scene"),
                        (n.next = 4),
                        (0, l.gz)(t())
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
        x = i(39211),
        g = i(36082),
        v = i(81898),
        C = i(31228),
        m = (function (n) {
          (0, o.default)(i, n);
          var t = (0, a.default)(i);
          function i() {
            var n;
            (0, e.default)(this, i);
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
              o[a] = arguments[a];
            return (
              ((n = t.call.apply(t, [this].concat(o))).navigate = function (t) {
                (0, n.actions.push)(t);
              }),
              n
            );
          }
          return (
            (0, r.default)(i, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    t = this.props,
                    i = t.translations,
                    e = t.dirty,
                    r = this.actions.revertChanges,
                    o = i.UNITSETT_TITLE;
                  return (0, C.jsx)("div", {
                    children: (0, C.jsx)(g.Z, {
                      title: o,
                      menu: (0, C.jsx)(v.Z, { page: "network-settings" }),
                      onBack: function () {
                        (r(), n.navigate("/settings/"));
                      },
                      isForm: !0,
                      isDirty: e,
                      children: (0, C.jsx)(x.Z, {}),
                    }),
                  });
                },
              },
            ]),
            i
          );
        })(s.Component),
        k = p(m);
    },
  },
]);
//# sourceMappingURL=373.524bb9bc.chunk.js.map
