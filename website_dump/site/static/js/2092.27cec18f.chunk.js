"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [2092],
  {
    93983: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return m;
        },
      });
      var r,
        i,
        o,
        a,
        s = t(56824),
        c = t(30225),
        u = t(94404),
        l = t(14482),
        d = t(5189),
        p = t(76431),
        f = t(84628),
        h = t(49318),
        g = (0, f.Jg)({
          connect: { props: [h.Z, ["isMobile", "translations"]] },
        }),
        x = t(30588),
        v = t(22247),
        b = t(31228),
        k = (function (n) {
          (0, l.default)(t, n);
          var e = (0, d.default)(t);
          function t() {
            return ((0, c.default)(this, t), e.apply(this, arguments));
          }
          return (
            (0, u.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.page,
                    t = n.isMobile,
                    r = n.items,
                    i = n.margin,
                    o = (0, b.jsxs)("div", {
                      children: [(0, b.jsx)(w, {}), (0, b.jsx)(C, {})],
                    });
                  return (0, b.jsx)(Z, {
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
                          d = n.hidden,
                          p = n.notifications,
                          f = n.id;
                        return d
                          ? ""
                          : (0, b.jsxs)(
                              S,
                              {
                                active: e === r,
                                mobile: t,
                                color: l ? l + "!important" : void 0,
                                link: u,
                                children: [
                                  (0, b.jsx)(v.Lr, {
                                    id: f,
                                    icon: i,
                                    mobile: t,
                                    title: a,
                                    onClick: s,
                                    link: u,
                                    disabled: c,
                                    notifications: p,
                                  }),
                                  e === r && o,
                                ],
                              },
                              r,
                            );
                      }),
                  });
                },
              },
            ]),
            t
          );
        })(p.PureComponent),
        m = g(k),
        Z = x.ZP.div(
          r || (r = (0, s.default)(["\n  margin: ", ";\n"])),
          function (n) {
            return n.margin;
          },
        ),
        S = x.ZP.div(
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
        w = x.ZP.div(
          o ||
            (o = (0, s.default)([
              "\n  position: absolute;\n  height: 56px;\n  width: 100%;\n  background-color: #007bc1;\n  z-index: 2;\n  top: 0;\n  left: 0;\n",
            ])),
        ),
        C = x.ZP.div(
          a ||
            (a = (0, s.default)([
              "\n  position: absolute;\n  height: 10px;\n  width: calc(100% - 48px);\n  opacity: 0.4;\n  background-color: #0067c6;\n  box-shadow: 0 0 20px 0 #424e54;\n  bottom: 0;\n  right: 24px;\n  z-index: 1;\n",
            ])),
        );
    },
    23507: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return m;
        },
      });
      var r,
        i = t(56824),
        o = t(2845),
        a = t(30225),
        s = t(94404),
        c = t(14482),
        u = t(5189),
        l = t(76431),
        d = t(84628),
        p = t(49318),
        f = (0, d.Jg)({
          connect: {
            props: [p.Z, ["isMobile", "translations", "configs"]],
            actions: [p.Z, ["push"]],
          },
        }),
        h = t(30588),
        g = t(48229),
        x = t(13795),
        v = t(93983),
        b = t(31228),
        k = (function (n) {
          (0, c.default)(t, n);
          var e = (0, u.default)(t);
          function t() {
            var n;
            (0, a.default)(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return (
              ((n = e.call.apply(e, [this].concat(i))).navigate = function (e) {
                (0, n.actions.push)(e);
              }),
              n
            );
          }
          return (
            (0, s.default)(t, [
              {
                key: "render",
                value: function () {
                  var n,
                    e = this,
                    t = this.props,
                    r = t.page,
                    i = t.translations,
                    a = t.configs.userType,
                    s = i.USERPROF_MENU_CHANGE_PASS,
                    c = i.USERPROF_MENU_CHANGE_LANG,
                    u = i.USERPROF_MENU_MYAPPS,
                    l = [
                      {
                        id: "ChangeLanguage",
                        key: "change-language",
                        icon: (0, b.jsx)(g.Z, { children: "language" }),
                        title: c,
                        link: !0,
                        onClick: function () {
                          return e.navigate("/user-profile/language/");
                        },
                      },
                      {
                        id: "MyApps",
                        key: "my-apps",
                        icon: (0, b.jsx)(g.Z, { children: "extension" }),
                        title: u,
                        link: !0,
                        onClick: function () {
                          return e.navigate("/user-profile/my-apps/");
                        },
                      },
                      {
                        id: "ChangePassword",
                        key: "change-password",
                        icon: (0, b.jsx)(g.Z, { children: "https" }),
                        title: s,
                        link: !0,
                        onClick: function () {
                          return e.navigate("/user-profile/change-password/", {
                            userType: a,
                          });
                        },
                      },
                    ],
                    d = [].concat(l),
                    p = l,
                    f =
                      ((n = {}), (0, o.Z)(n, x.Df, d), (0, o.Z)(n, x.cC, p), n);
                  return (0, b.jsx)(Z, {
                    children: (0, b.jsx)(v.Z, { items: f[a], page: r }),
                  });
                },
              },
            ]),
            t
          );
        })(l.PureComponent),
        m = f(k),
        Z = h.ZP.div(r || (r = (0, i.default)(["\n\n"])));
    },
    72092: function (n, e, t) {
      (t.r(e),
        t.d(e, {
          UserProfile: function () {
            return v;
          },
        }));
      var r,
        i,
        o = t(56824),
        a = t(30225),
        s = t(94404),
        c = t(14482),
        u = t(5189),
        l = t(76431),
        d = t(19818),
        p = t(30588),
        f = t(48229),
        h = t(23507),
        g = t(22247),
        x = t(31228),
        v = (function (n) {
          (0, c.default)(t, n);
          var e = (0, u.default)(t);
          function t() {
            var n;
            (0, a.default)(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return (
              ((n = e.call.apply(e, [this].concat(i))).navigate = function (e) {
                (0, n.actions.push)(e);
              }),
              n
            );
          }
          return (
            (0, s.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    e = this.props,
                    t = e.translations,
                    r = e.isMobile,
                    i = e.successMessage,
                    o = t.USERPROF_TITLE,
                    a = t.USERPROF_CHANGES_SAVED_SUCCESS;
                  return (0, x.jsxs)(b, {
                    children: [
                      (0, x.jsx)(g.xE, {
                        id: "BackButton",
                        onClick: function () {
                          return n.navigate("/more/");
                        },
                      }),
                      (0, x.jsx)(g.mV, {
                        mobile: r,
                        out: !i,
                        icon: (0, x.jsx)(f.Z, { children: "check" }),
                        message: a,
                      }),
                      (0, x.jsx)(k, { children: "account_circle" }),
                      (0, x.jsx)(g.V1, {
                        mobile: r,
                        blue: !0,
                        center: !0,
                        marginBottom: "30px",
                        children: o,
                      }),
                      (0, x.jsx)(h.Z, {}),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(l.Component);
      e.default = (0, d.Z)(v);
      var b = p.ZP.div(
          r ||
            (r = (0, o.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n  }\n",
            ])),
        ),
        k = (0, p.ZP)(f.Z)(
          i ||
            (i = (0, o.default)([
              "\n  &&&& {\n    color: #007bc1;\n    font-size: 110px;\n    margin: 0 auto;\n    display: block;\n  }\n",
            ])),
        );
    },
    19818: function (n, e, t) {
      var r = t(87121),
        i = t(2845),
        o = t(84628),
        a = t(90012),
        s = t(83749),
        c = t(98278),
        u = t.n(c),
        l = t(49318);
      e.Z = (0, o.Jg)({
        path: function () {
          return ["scenes", "UserProfile"];
        },
        connect: {
          props: [l.Z, ["isMobile", "translations"]],
          actions: [l.Z, ["checkSetupStatus", "push"]],
        },
        reducers: function (n) {
          var e,
            t,
            r = n.actions;
          return {
            successMessage: [
              !1,
              u().bool,
              ((e = {}),
              (0, i.Z)(e, r.setChangesSaved, function (n, e) {
                return e;
              }),
              (0, i.Z)(e, r.reset, function () {
                return !1;
              }),
              e),
            ],
            showSuccessMessage: [
              !1,
              u().bool,
              ((t = {}),
              (0, i.Z)(t, r.setShowSuccessMessage, function (n, e) {
                return e;
              }),
              (0, i.Z)(t, r.reset, function () {
                return !1;
              }),
              t),
            ],
          };
        },
        actions: function () {
          return {
            reset: function () {
              return !0;
            },
            setChangesSaved: function (n) {
              return n;
            },
            setShowSuccessMessage: function (n) {
              return n;
            },
          };
        },
        start: (0, r.Z)().mark(function n() {
          var e, t, i, o, c;
          return (0, r.Z)().wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (0, a.log)("[XS-UserProfile] Start Scene ", "yellow"),
                      (n.next = 3),
                      this.get("showSuccessMessage")
                    );
                  case 3:
                    return (
                      (e = n.sent),
                      (t = this.actionCreators),
                      (i = t.checkSetupStatus),
                      (o = t.setShowSuccessMessage),
                      (c = t.setChangesSaved),
                      (n.next = 7),
                      (0, s.gz)(i())
                    );
                  case 7:
                    if (!e) {
                      n.next = 18;
                      break;
                    }
                    return ((n.next = 10), (0, s.gw)(100));
                  case 10:
                    return ((n.next = 12), (0, s.gz)(c(!0)));
                  case 12:
                    return ((n.next = 14), (0, s.gw)(2e3));
                  case 14:
                    return ((n.next = 16), (0, s.gz)(c(!1)));
                  case 16:
                    return ((n.next = 18), (0, s.gz)(o(!1)));
                  case 18:
                  case "end":
                    return n.stop();
                }
            },
            n,
            this,
          );
        }),
        stop: (0, r.Z)().mark(function n() {
          var e;
          return (0, r.Z)().wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (e = this.actionCreators.reset),
                      (n.next = 3),
                      (0, s.gz)(e())
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
      });
    },
  },
]);
//# sourceMappingURL=2092.27cec18f.chunk.js.map
