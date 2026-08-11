"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [9565],
  {
    36082: function (n, t, i) {
      i.d(t, {
        Z: function () {
          return E;
        },
      });
      var e,
        r,
        o,
        a = i(56824),
        s = i(30225),
        c = i(94404),
        l = i(14482),
        u = i(5189),
        d = i(76431),
        h = i(87121),
        f = i(2845),
        p = i(84628),
        x = i(83749),
        v = i(98278),
        m = i.n(v),
        g = i(49318),
        C = (0, p.Jg)({
          path: function () {
            return ["scenes", "containers", "PageAdaptable"];
          },
          connect: {
            props: [g.Z, ["isMobile", "translations"]],
            actions: [g.Z, ["push"]],
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
                m().bool,
                ((t = {}),
                (0, f.Z)(t, i.showConfirmationModal, function () {
                  return !0;
                }),
                (0, f.Z)(t, i.hideConfirmationModal, function () {
                  return !1;
                }),
                t),
              ],
              nextLocation: [
                {},
                m().object,
                (0, f.Z)({}, i.showConfirmationModal, function (n, t) {
                  return t.location;
                }),
              ],
            };
          },
          stop: (0, h.Z)().mark(function n() {
            var t;
            return (0, h.Z)().wrap(
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
            return (0, f.Z)(
              {},
              t.handleConfirmNavigationClick,
              i.handleConfirmNavigationClick,
            );
          },
          workers: {
            handleConfirmNavigationClick: (0, h.Z)().mark(function n() {
              var t, i, e, r;
              return (0, h.Z)().wrap(
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
        j = i(30588),
        T = i(22247),
        _ = i(31228),
        k = (function (n) {
          (0, l.default)(i, n);
          var t = (0, u.default)(i);
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
                    l = t.confirmationModal,
                    u = t.isForm,
                    d = t.isDirty,
                    h = this.actions,
                    f = h.showConfirmationModal,
                    p = h.hideConfirmationModal,
                    x = h.handleConfirmNavigationClick,
                    v = c.GENERAL_CANCEL,
                    m = c.GENERAL_CONTINUE,
                    g = c.BACK_BUTTON_MODAL_TEXT,
                    C = c.BACK_BUTTON_MODAL_TITLE;
                  return (0, _.jsxs)(Z, {
                    children: [
                      !!e && (0, _.jsx)(T.gb, {}),
                      i &&
                        (0, _.jsxs)("div", {
                          children: [
                            (0, _.jsx)(T.xE, {
                              id: "PageAdaptable_BackButton",
                              onClick: u && d ? f : a,
                            }),
                            r,
                          ],
                        }),
                      !i &&
                        (0, _.jsxs)("div", {
                          children: [
                            (0, _.jsx)(T.V1, { mobile: i, children: s }),
                            (0, _.jsx)(N, { children: o }),
                            (0, _.jsx)(w, { children: r }),
                          ],
                        }),
                      (0, _.jsx)(T.u_, {
                        size: "small",
                        open: l,
                        children: (0, _.jsxs)("div", {
                          children: [
                            (0, _.jsx)(T.xB, { title: C }),
                            (0, _.jsx)(T.hz, {
                              padding: !0,
                              size: "small",
                              mobile: i,
                              children: (0, _.jsx)(T.ZT, { children: g }),
                            }),
                            (0, _.jsxs)(T.Zf, {
                              children: [
                                (0, _.jsx)(T.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    ((n.first = !0), p());
                                  },
                                  children: v,
                                }),
                                (0, _.jsx)(T.zx, {
                                  id: "Button_Continue",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function (n) {
                                    i ? (p(), a(n)) : x(n);
                                  },
                                  children: m,
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
        E = C(k),
        Z = j.ZP.div(
          e ||
            (e = (0, a.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n    padding-right: 0px;\n  }\n",
            ])),
        ),
        N = j.ZP.div(
          r ||
            (r = (0, a.default)([
              "\n  width: 40%;\n  padding-right: 5%;\n  float: left;\n  position: relative;\n  color: #fff;\n  margin-top: 25px;\n",
            ])),
        ),
        w = j.ZP.div(
          o ||
            (o = (0, a.default)([
              "\n  width: 60%;\n  float: left;\n  padding-right: 0;\n",
            ])),
        );
    },
    29565: function (n, t, i) {
      (i.r(t),
        i.d(t, {
          DeviceReinstallUnit: function () {
            return k;
          },
          default: function () {
            return E;
          },
        }));
      var e,
        r = i(56824),
        o = i(30225),
        a = i(94404),
        s = i(14482),
        c = i(5189),
        l = i(76431),
        u = i(87121),
        d = i(84628),
        h = i(49318),
        f = i(90012),
        p = i(83749),
        x = (0, d.Jg)({
          path: function () {
            return ["scenes", "DeviceReinstallUnit"];
          },
          connect: {
            props: [h.Z, ["translations", "isMobile"]],
            actions: [h.Z, ["checkSetupStatus", "push"]],
          },
          start: (0, u.Z)().mark(function n() {
            var t;
            return (0, u.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators.checkSetupStatus),
                        (0, f.log)("[XS-ReinstallUnit] Start Scene ", "yellow"),
                        (n.next = 4),
                        (0, p.gz)(t())
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
        v = i(30588),
        m = i(48229),
        g = i(77835),
        C = i(36082),
        j = i(81898),
        T = i(22247),
        _ = i(31228),
        k = (function (n) {
          (0, s.default)(i, n);
          var t = (0, c.default)(i);
          function i() {
            var n;
            (0, o.default)(this, i);
            for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++)
              r[a] = arguments[a];
            return (
              ((n = t.call.apply(t, [this].concat(r))).navigate = function (t) {
                (0, n.actions.push)(t);
              }),
              n
            );
          }
          return (
            (0, a.default)(i, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    t = this.props,
                    i = t.translations,
                    e = t.isMobile,
                    r = i.UNITSETT_TITLE,
                    o = i.UNITSETT_REINSTALL_TITLE,
                    a = i.USERPROF_DOWNLOAD_ALERT,
                    s = i.UNITSETT_REINSTALL_OVERRIDE_CONF,
                    c = i.UNITSETT_RECONFIGURE_TOPOLOGY,
                    l = i.UNITSETT_KEEP_FOLLOWING_MIND;
                  return (0, _.jsx)(Z, {
                    children: (0, _.jsx)(C.Z, {
                      title: r,
                      menu: (0, _.jsx)(j.Z, { page: "reinstall-unit" }),
                      onBack: function () {
                        return n.navigate("/settings/");
                      },
                      isForm: !1,
                      isDirty: !1,
                      children: (0, _.jsxs)(T.e0, {
                        padding: !0,
                        mobile: e,
                        children: [
                          (0, _.jsx)(T.V1, { mobile: e, children: o }),
                          e &&
                            (0, _.jsx)(T.Oj, {
                              id: "MobileActionButton_Reinstall",
                              mobile: !0,
                              icon: (0, _.jsx)(m.Z, { children: "history" }),
                              onClick: function () {
                                return n.navigate("/setup");
                              },
                              children: o,
                            }),
                          (0, _.jsx)(T.SK, { height: "20px" }),
                          (0, _.jsx)(g.Z, {
                            variant: "h4",
                            gutterBottom: !0,
                            children: l,
                          }),
                          (0, _.jsxs)(T.Gn, {
                            children: [
                              (0, _.jsx)(T.E9, { children: s }),
                              (0, _.jsx)(T.E9, { children: c }),
                            ],
                          }),
                          (0, _.jsx)(g.Z, {
                            variant: "h5",
                            color: "error",
                            children: a,
                          }),
                          (0, _.jsx)(T.SK, { height: "25px" }),
                          !e &&
                            (0, _.jsxs)(T.zx, {
                              id: "PrimaryButton_Reinstall",
                              margin: "0px",
                              buttonWidth: "226px",
                              onClick: function () {
                                return n.navigate("/setup");
                              },
                              children: [
                                (0, _.jsx)(m.Z, { children: "history" }),
                                o,
                              ],
                            }),
                        ],
                      }),
                    }),
                  });
                },
              },
            ]),
            i
          );
        })(l.Component),
        E = x(k),
        Z = v.ZP.div(e || (e = (0, r.default)(["\n\n"])));
    },
  },
]);
//# sourceMappingURL=9565.8e0a703e.chunk.js.map
