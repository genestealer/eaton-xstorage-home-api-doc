"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [4152],
  {
    36082: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return b;
        },
      });
      var r,
        i,
        o,
        a = e(56824),
        s = e(30225),
        c = e(94404),
        u = e(14482),
        l = e(5189),
        p = e(76431),
        d = e(87121),
        f = e(2845),
        h = e(84628),
        x = e(83749),
        g = e(98278),
        v = e.n(g),
        m = e(49318),
        A = (0, h.Jg)({
          path: function () {
            return ["scenes", "containers", "PageAdaptable"];
          },
          connect: {
            props: [m.Z, ["isMobile", "translations"]],
            actions: [m.Z, ["push"]],
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
              e = n.actions;
            return {
              confirmationModal: [
                !1,
                v().bool,
                ((t = {}),
                (0, f.Z)(t, e.showConfirmationModal, function () {
                  return !0;
                }),
                (0, f.Z)(t, e.hideConfirmationModal, function () {
                  return !1;
                }),
                t),
              ],
              nextLocation: [
                {},
                v().object,
                (0, f.Z)({}, e.showConfirmationModal, function (n, t) {
                  return t.location;
                }),
              ],
            };
          },
          stop: (0, d.Z)().mark(function n() {
            var t;
            return (0, d.Z)().wrap(
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
              e = n.workers;
            return (0, f.Z)(
              {},
              t.handleConfirmNavigationClick,
              e.handleConfirmNavigationClick,
            );
          },
          workers: {
            handleConfirmNavigationClick: (0, d.Z)().mark(function n() {
              var t, e, r, i;
              return (0, d.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (e = t.hideConfirmationModal),
                          (r = t.push),
                          (n.next = 3),
                          this.get("nextLocation")
                        );
                      case 3:
                        return ((i = n.sent), (n.next = 6), (0, x.gz)(e()));
                      case 6:
                        return ((n.next = 8), (0, x.gz)(r(i)));
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
        Z = e(30588),
        P = e(22247),
        C = e(31228),
        k = (function (n) {
          (0, u.default)(e, n);
          var t = (0, l.default)(e);
          function e() {
            var n;
            (0, s.default)(this, e);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return (
              ((n = t.call.apply(t, [this].concat(i))).first = !0),
              (n.handleBlockedNavigation = function (t) {
                var e = n.props,
                  r = e.isForm,
                  i = e.isDirty,
                  o = n.actions.showConfirmationModal;
                return !(r && i && n.first) || ((n.first = !1), o(t), !1);
              }),
              n
            );
          }
          return (
            (0, c.default)(e, [
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
                    e = t.isMobile,
                    r = t.loading,
                    i = t.children,
                    o = t.menu,
                    a = t.onBack,
                    s = t.title,
                    c = t.translations,
                    u = t.confirmationModal,
                    l = t.isForm,
                    p = t.isDirty,
                    d = this.actions,
                    f = d.showConfirmationModal,
                    h = d.hideConfirmationModal,
                    x = d.handleConfirmNavigationClick,
                    g = c.GENERAL_CANCEL,
                    v = c.GENERAL_CONTINUE,
                    m = c.BACK_BUTTON_MODAL_TEXT,
                    A = c.BACK_BUTTON_MODAL_TITLE;
                  return (0, C.jsxs)(M, {
                    children: [
                      !!r && (0, C.jsx)(P.gb, {}),
                      e &&
                        (0, C.jsxs)("div", {
                          children: [
                            (0, C.jsx)(P.xE, {
                              id: "PageAdaptable_BackButton",
                              onClick: l && p ? f : a,
                            }),
                            i,
                          ],
                        }),
                      !e &&
                        (0, C.jsxs)("div", {
                          children: [
                            (0, C.jsx)(P.V1, { mobile: e, children: s }),
                            (0, C.jsx)(E, { children: o }),
                            (0, C.jsx)(_, { children: i }),
                          ],
                        }),
                      (0, C.jsx)(P.u_, {
                        size: "small",
                        open: u,
                        children: (0, C.jsxs)("div", {
                          children: [
                            (0, C.jsx)(P.xB, { title: A }),
                            (0, C.jsx)(P.hz, {
                              padding: !0,
                              size: "small",
                              mobile: e,
                              children: (0, C.jsx)(P.ZT, { children: m }),
                            }),
                            (0, C.jsxs)(P.Zf, {
                              children: [
                                (0, C.jsx)(P.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    ((n.first = !0), h());
                                  },
                                  children: g,
                                }),
                                (0, C.jsx)(P.zx, {
                                  id: "Button_Continue",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function (n) {
                                    e ? (h(), a(n)) : x(n);
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
            e
          );
        })(p.Component),
        b = A(k),
        M = Z.ZP.div(
          r ||
            (r = (0, a.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n    padding-right: 0px;\n  }\n",
            ])),
        ),
        E = Z.ZP.div(
          i ||
            (i = (0, a.default)([
              "\n  width: 40%;\n  padding-right: 5%;\n  float: left;\n  position: relative;\n  color: #fff;\n  margin-top: 25px;\n",
            ])),
        ),
        _ = Z.ZP.div(
          o ||
            (o = (0, a.default)([
              "\n  width: 60%;\n  float: left;\n  padding-right: 0;\n",
            ])),
        );
    },
    93983: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return Z;
        },
      });
      var r,
        i,
        o,
        a,
        s = e(56824),
        c = e(30225),
        u = e(94404),
        l = e(14482),
        p = e(5189),
        d = e(76431),
        f = e(84628),
        h = e(49318),
        x = (0, f.Jg)({
          connect: { props: [h.Z, ["isMobile", "translations"]] },
        }),
        g = e(30588),
        v = e(22247),
        m = e(31228),
        A = (function (n) {
          (0, l.default)(e, n);
          var t = (0, p.default)(e);
          function e() {
            return ((0, c.default)(this, e), t.apply(this, arguments));
          }
          return (
            (0, u.default)(e, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    t = n.page,
                    e = n.isMobile,
                    r = n.items,
                    i = n.margin,
                    o = (0, m.jsxs)("div", {
                      children: [(0, m.jsx)(k, {}), (0, m.jsx)(b, {})],
                    });
                  return (0, m.jsx)(P, {
                    margin: i,
                    children:
                      r &&
                      r.map(function (n) {
                        var r = n.key,
                          i = n.icon,
                          a = n.title,
                          s = n.onClick,
                          c = n.disabled,
                          u = n.link,
                          l = n.color,
                          p = n.hidden,
                          d = n.notifications,
                          f = n.id;
                        return p
                          ? ""
                          : (0, m.jsxs)(
                              C,
                              {
                                active: t === r,
                                mobile: e,
                                color: l ? l + "!important" : void 0,
                                link: u,
                                children: [
                                  (0, m.jsx)(v.Lr, {
                                    id: f,
                                    icon: i,
                                    mobile: e,
                                    title: a,
                                    onClick: s,
                                    link: u,
                                    disabled: c,
                                    notifications: d,
                                  }),
                                  t === r && o,
                                ],
                              },
                              r,
                            );
                      }),
                  });
                },
              },
            ]),
            e
          );
        })(d.PureComponent),
        Z = x(A),
        P = g.ZP.div(
          r || (r = (0, s.default)(["\n  margin: ", ";\n"])),
          function (n) {
            return n.margin;
          },
        ),
        C = g.ZP.div(
          i ||
            (i = (0, s.default)([
              "\n  position: relative;\n  height: 56px;\n  width: 100%;\n  cursor: pointer;\n\n  span.material-icons {\n    color: ",
              ";\n  }\n  \n  ",
              "\n\n  ",
              "\n\n  ",
              "\n\n",
              "\n",
            ])),
          function (n) {
            return n.color || "#007BC1";
          },
          function (n) {
            return (
              !n.mobile &&
              "\n    * {\n      color: "
                .concat(
                  n.color || "#FFF!important",
                  ";\n    }\n\n    span.material-icons {\n      color: ",
                )
                .concat(
                  n.color || "#FFF",
                  ";\n    }\n\n    > div:nth-child(1) {\n      padding-left: 10px;\n      z-index: 3;\n      position: absolute;\n      width: 100%;    \n      box-shadow: inset 0 -1px 0 0 rgba(253,253,253,0.1), 0 0 5px 0 rgba(81,141,197,0.1);\n      transition: background-color 0.1s ease-in-out;\n    }\n  ",
                )
            );
          },
          function (n) {
            return (
              n.mobile &&
              "\n    * {\n      color: ".concat(
                n.color || "#424E54",
                ";\n    }\n\n    > div:before {\n      content: '';      \n      position: absolute;\n      width: calc(100% + 16px);\n      height: 56px;\n      box-shadow: inset 0 -1px 0 0 rgba(114,126,132,0.1);\n    }\n  ",
              )
            );
          },
          function (n) {
            return (
              n.active &&
              !n.mobile &&
              "\n    > div:nth-child(1) {\n      position: relative;\n      background-color: #007BC1;\n      background: linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);\n      box-shadow: inset 0 -1px 0 0 rgba(253,253,253,0.1), 0 0 5px 0 rgba(81,141,197,0.1);\n    }\n  "
            );
          },
          function (n) {
            return (
              !n.active &&
              !n.mobile &&
              n.link &&
              "\n  &:hover > div:nth-child(1) {\n    background-color: #0074b8;\n  }\n"
            );
          },
        ),
        k = g.ZP.div(
          o ||
            (o = (0, s.default)([
              "\n  position: absolute;\n  height: 56px;\n  width: 100%;\n  background-color: #007bc1;\n  z-index: 2;\n  top: 0;\n  left: 0;\n",
            ])),
        ),
        b = g.ZP.div(
          a ||
            (a = (0, s.default)([
              "\n  position: absolute;\n  height: 10px;\n  width: calc(100% - 48px);\n  opacity: 0.4;\n  background-color: #0067c6;\n  box-shadow: 0 0 20px 0 #424e54;\n  bottom: 0;\n  right: 24px;\n  z-index: 1;\n",
            ])),
        );
    },
    23507: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return Z;
        },
      });
      var r,
        i = e(56824),
        o = e(2845),
        a = e(30225),
        s = e(94404),
        c = e(14482),
        u = e(5189),
        l = e(76431),
        p = e(84628),
        d = e(49318),
        f = (0, p.Jg)({
          connect: {
            props: [d.Z, ["isMobile", "translations", "configs"]],
            actions: [d.Z, ["push"]],
          },
        }),
        h = e(30588),
        x = e(48229),
        g = e(13795),
        v = e(93983),
        m = e(31228),
        A = (function (n) {
          (0, c.default)(e, n);
          var t = (0, u.default)(e);
          function e() {
            var n;
            (0, a.default)(this, e);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return (
              ((n = t.call.apply(t, [this].concat(i))).navigate = function (t) {
                (0, n.actions.push)(t);
              }),
              n
            );
          }
          return (
            (0, s.default)(e, [
              {
                key: "render",
                value: function () {
                  var n,
                    t = this,
                    e = this.props,
                    r = e.page,
                    i = e.translations,
                    a = e.configs.userType,
                    s = i.USERPROF_MENU_CHANGE_PASS,
                    c = i.USERPROF_MENU_CHANGE_LANG,
                    u = i.USERPROF_MENU_MYAPPS,
                    l = [
                      {
                        id: "ChangeLanguage",
                        key: "change-language",
                        icon: (0, m.jsx)(x.Z, { children: "language" }),
                        title: c,
                        link: !0,
                        onClick: function () {
                          return t.navigate("/user-profile/language/");
                        },
                      },
                      {
                        id: "MyApps",
                        key: "my-apps",
                        icon: (0, m.jsx)(x.Z, { children: "extension" }),
                        title: u,
                        link: !0,
                        onClick: function () {
                          return t.navigate("/user-profile/my-apps/");
                        },
                      },
                      {
                        id: "ChangePassword",
                        key: "change-password",
                        icon: (0, m.jsx)(x.Z, { children: "https" }),
                        title: s,
                        link: !0,
                        onClick: function () {
                          return t.navigate("/user-profile/change-password/", {
                            userType: a,
                          });
                        },
                      },
                    ],
                    p = [].concat(l),
                    d = l,
                    f =
                      ((n = {}), (0, o.Z)(n, g.Df, p), (0, o.Z)(n, g.cC, d), n);
                  return (0, m.jsx)(P, {
                    children: (0, m.jsx)(v.Z, { items: f[a], page: r }),
                  });
                },
              },
            ]),
            e
          );
        })(l.PureComponent),
        Z = f(A),
        P = h.ZP.div(r || (r = (0, i.default)(["\n\n"])));
    },
    4152: function (n, t, e) {
      (e.r(t),
        e.d(t, {
          default: function () {
            return T;
          },
        }));
      var r,
        i,
        o,
        a,
        s,
        c,
        u,
        l = e(56824),
        p = e(30225),
        d = e(94404),
        f = e(14482),
        h = e(5189),
        x = e(76431),
        g = e(77835),
        v = e(48229),
        m = e(87121),
        A = e(2845),
        Z = e(84628),
        P = e(49745),
        C = e(83749),
        k = e(98278),
        b = e.n(k),
        M = e(49318),
        E = e(90012),
        _ = e(13795),
        j = "".concat(_.CT, "/thirdparty/myapps"),
        y = "".concat(_.CT, "/thirdparty/myapps/{appid}/revoke"),
        R = (0, Z.Jg)({
          path: function () {
            return ["scenes", "UserProfileMyApps"];
          },
          connect: {
            props: [M.Z, ["isMobile", "translations"]],
            actions: [M.Z, ["push"]],
          },
          actions: function () {
            return {
              getAppsList: function () {
                return !0;
              },
              setMyApps: function (n) {
                return n;
              },
              setError: function (n) {
                return n;
              },
              reset: function () {
                return !0;
              },
              setRemoveAppModal: function (n) {
                return n;
              },
              revokeApp: function (n) {
                return n;
              },
              setActiveAppsCount: function (n) {
                return n;
              },
            };
          },
          reducers: function (n) {
            var t,
              e,
              r,
              i,
              o,
              a = n.actions;
            return {
              myApps: [
                [],
                b().array,
                ((t = {}),
                (0, A.Z)(t, a.reset, function (n, t) {
                  return [];
                }),
                (0, A.Z)(t, a.setMyApps, function (n, t) {
                  return t;
                }),
                t),
              ],
              loading: [
                !1,
                b().bool,
                ((e = {}),
                (0, A.Z)(e, a.reset, function () {
                  return !0;
                }),
                (0, A.Z)(e, a.getAppsList, function () {
                  return !0;
                }),
                (0, A.Z)(e, a.setMyApps, function () {
                  return !1;
                }),
                (0, A.Z)(e, a.setError, function () {
                  return !1;
                }),
                e),
              ],
              error: [
                null,
                b().string,
                ((r = {}),
                (0, A.Z)(r, a.setError, function (n, t) {
                  return t;
                }),
                (0, A.Z)(r, a.reset, function () {
                  return null;
                }),
                (0, A.Z)(r, a.getAppsList, function () {
                  return null;
                }),
                r),
              ],
              removeAppModal: [
                !1,
                b().bool,
                ((i = {}),
                (0, A.Z)(i, a.setRemoveAppModal, function (n, t) {
                  return t;
                }),
                (0, A.Z)(i, a.setError, function () {
                  return !1;
                }),
                (0, A.Z)(i, a.reset, function () {
                  return !1;
                }),
                (0, A.Z)(i, a.revokeApp, function () {
                  return !1;
                }),
                i),
              ],
              activeAppsCount: [
                0,
                b().number,
                ((o = {}),
                (0, A.Z)(o, a.setActiveAppsCount, function (n, t) {
                  return t;
                }),
                (0, A.Z)(o, a.getAppsList, function () {
                  return 0;
                }),
                (0, A.Z)(o, a.reset, function () {
                  return 0;
                }),
                o),
              ],
            };
          },
          start: (0, m.Z)().mark(function n() {
            var t;
            return (0, m.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (0, E.log)(
                          "[XS-UserProfileMyApps] Start Scene",
                          "yellow",
                        ),
                        (t = this.actionCreators.getAppsList),
                        (n.next = 4),
                        (0, C.gz)(t())
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
          stop: (0, m.Z)().mark(function n() {
            var t;
            return (0, m.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators.reset),
                        (0, E.log)("[XS-UserProfileMyApps] Stop Scene"),
                        (n.next = 4),
                        (0, C.gz)(t())
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
            var t,
              e = n.actions,
              r = n.workers;
            return (
              (t = {}),
              (0, A.Z)(t, e.getAppsList, r.getAppsList),
              (0, A.Z)(t, e.revokeApp, r.revokeApp),
              t
            );
          },
          workers: {
            getAppsList: (0, m.Z)().mark(function n() {
              var t, e, r, i, o, a, s, c, u, l;
              return (0, m.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (e = t.setMyApps),
                          (r = t.setActiveAppsCount),
                          (n.next = 3),
                          this.get("translations")
                        );
                      case 3:
                        return (
                          (i = n.sent),
                          (n.prev = 4),
                          (n.next = 7),
                          (0, C.RE)(P.Z.get, j)
                        );
                      case 7:
                        return (
                          (o = n.sent),
                          (a = o.data.result),
                          (c = (s = a || {}).apps),
                          (u = s.total),
                          (n.next = 12),
                          (0, C.gz)(r(u))
                        );
                      case 12:
                        if (!(u > 0)) {
                          n.next = 16;
                          break;
                        }
                        return (
                          (l = c.map(function (n) {
                            var t = n.scope;
                            return (
                              (n.unitsMessage =
                                i["USERPROF_MYAPP_UNITACCESS_".concat(t)]),
                              n
                            );
                          })),
                          (n.next = 16),
                          (0, C.gz)(e(l))
                        );
                      case 16:
                        n.next = 21;
                        break;
                      case 18:
                        ((n.prev = 18), (n.t0 = n.catch(4)), console.log(n.t0));
                      case 21:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this,
                [[4, 18]],
              );
            }),
            revokeApp: (0, m.Z)().mark(function n(t) {
              var e, r, i, o, a;
              return (0, m.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (e = t.payload),
                          (r = this.actionCreators.getAppsList),
                          (n.prev = 2),
                          (i = (0, E.generateUrl)(y, { appid: e })),
                          (n.next = 6),
                          (0, C.RE)(P.Z.post, i)
                        );
                      case 6:
                        if (((o = n.sent), (a = o.data || {}), !a.successful)) {
                          n.next = 11;
                          break;
                        }
                        return ((n.next = 11), (0, C.gz)(r()));
                      case 11:
                        n.next = 16;
                        break;
                      case 13:
                        ((n.prev = 13), (n.t0 = n.catch(2)), console.log(n.t0));
                      case 16:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this,
                [[2, 13]],
              );
            }),
          },
        }),
        S = e(30588),
        w = e(22247),
        O = e(23507),
        L = e(36082),
        N = e(31228),
        U = (function (n) {
          (0, f.default)(e, n);
          var t = (0, h.default)(e);
          function e() {
            var n;
            (0, p.default)(this, e);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return (
              ((n = t.call.apply(t, [this].concat(i))).navigate = function (t) {
                (0, n.actions.push)(t);
              }),
              (n.state = { revokeAppId: "" }),
              n
            );
          }
          return (
            (0, d.default)(e, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    t = this.props,
                    e = t.translations,
                    r = t.isMobile,
                    i = t.error,
                    o = t.activeAppsCount,
                    a = t.myApps,
                    s = t.removeAppModal,
                    c = this.actions,
                    u = c.setRemoveAppModal,
                    l = c.revokeApp,
                    p = this.state.revokeAppId,
                    d = e.USERPROF_TITLE,
                    f = e.USERPROF_MYAPP_TITLE,
                    h = e.USERPROF_MYAPP_ACTIVEEXTERNALAPPS,
                    x = e.USERPROF_MYAPP_NOAPPSPRESENT,
                    v = e.USERPROF_MYAPP_NOAPPSDESCRIPTION,
                    m = e.USERPROF_MYAPP_MODAL_REMOVEAPPACCESS,
                    A = e.USERPROF_MYAPP_MODAL_REMOVEAPPACCESS_AREYOUSURE,
                    Z = e.USERPROF_MYAPP_MODAL_REMOVEAPPACCESS_UNDOABLE,
                    P = e.USERPROF_MYAPP_MODAL_CANCEL,
                    C = e.USERPROF_MYAPP_MODAL_REMOVE,
                    k = h.replace("<NUM_ACTIVE_APPS>", o.toString());
                  return (0, N.jsx)(F, {
                    children: (0, N.jsx)(L.Z, {
                      title: d,
                      menu: (0, N.jsx)(O.Z, { page: "my-apps" }),
                      onBack: function () {
                        return n.navigate("/user-profile/");
                      },
                      children: (0, N.jsxs)(w.e0, {
                        padding: !0,
                        mobile: r,
                        children: [
                          (0, N.jsx)(w.V1, { mobile: r, children: f }),
                          (0, N.jsx)(w.SK, { height: "34px" }),
                          (0, N.jsx)(g.Z, {
                            variant: "h5",
                            color: "error",
                            children: i,
                          }),
                          0 === o &&
                            (0, N.jsxs)(N.Fragment, {
                              children: [
                                (0, N.jsx)(g.Z, {
                                  variant: "h6",
                                  component: "h2",
                                  color: "textSecondary",
                                  gutterBottom: !0,
                                  children: x,
                                }),
                                (0, N.jsx)(g.Z, {
                                  variant: "body1",
                                  color: "textSecondary",
                                  children: v,
                                }),
                              ],
                            }),
                          o > 0 &&
                            (0, N.jsxs)(N.Fragment, {
                              children: [
                                (0, N.jsx)(B, {
                                  color: "textPrimary",
                                  variant: "h5",
                                  component: "p",
                                  children: k,
                                }),
                                (0, N.jsx)(w.SK, { height: "15px" }),
                                a &&
                                  a.map(function (t) {
                                    return (0, N.jsxs)(
                                      w.aV,
                                      {
                                        children: [
                                          (0, N.jsxs)(I, {
                                            children: [
                                              (0, N.jsxs)(D, {
                                                children: [
                                                  (0, N.jsxs)(Y, {
                                                    children: [
                                                      (0, N.jsx)(g.Z, {
                                                        variant: "h5",
                                                        component: "span",
                                                        children: t.appName,
                                                      }),
                                                      (0, N.jsxs)(g.Z, {
                                                        variant: "body2",
                                                        component: "span",
                                                        children: [
                                                          ", ",
                                                          t.organization,
                                                          " \xae",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, N.jsxs)(V, {
                                                    children: [
                                                      (0, N.jsx)(w.W9, {}),
                                                      (0, N.jsx)(g.Z, {
                                                        variant: "h5",
                                                        component: "span",
                                                        color: "textPrimary",
                                                        children:
                                                          t.unitsMessage,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, N.jsx)(z, {
                                                color: "error",
                                                onClick: function () {
                                                  (n.setState({
                                                    revokeAppId: t.id,
                                                  }),
                                                    u(!0));
                                                },
                                                children: "delete",
                                              }),
                                            ],
                                          }),
                                          (0, N.jsx)(w.iz, {
                                            variant: "inset",
                                            component: "li",
                                          }),
                                        ],
                                      },
                                      t.id,
                                    );
                                  }),
                              ],
                            }),
                          (0, N.jsx)(w.cV, {
                            open: s,
                            onClose: function () {
                              return u(!1);
                            },
                            modalTitle: m,
                            modalContent: A,
                            modalDescription: Z,
                            cancelButtonText: P,
                            submitButtonText: C,
                            submitButtonAction: function () {
                              return l(p);
                            },
                            dangerModal: !0,
                          }),
                        ],
                      }),
                    }),
                  });
                },
              },
            ]),
            e
          );
        })(x.Component),
        T = R(U),
        F = S.ZP.div(r || (r = (0, l.default)([""]))),
        B = (0, S.ZP)(g.Z)(i || (i = (0, l.default)(["\n  opacity: 0.8;\n"]))),
        z = (0, S.ZP)(v.Z)(
          o ||
            (o = (0, l.default)([
              "\n  position: absolute;\n  right: 0;\n  cursor: pointer;\n",
            ])),
        ),
        D = S.ZP.div(a || (a = (0, l.default)(["\n  padding-left: 8px;\n"]))),
        I = (0, S.ZP)(w.aV.Item)(
          s ||
            (s = (0, l.default)([
              "\n\n  &&&& {\n    padding-top: 0!important;\n  }\n",
            ])),
        ),
        Y = S.ZP.div(c || (c = (0, l.default)([""]))),
        V = S.ZP.div(
          u ||
            (u = (0, l.default)([
              "\n  padding-top: 12px;\n  display: flex;\n\n  span {\n    padding-left: 12px;\n  }\n",
            ])),
        );
    },
  },
]);
//# sourceMappingURL=4152.80c4f738.chunk.js.map
