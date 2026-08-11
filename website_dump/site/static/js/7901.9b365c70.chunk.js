(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [7901],
  {
    36082: function (n, e, t) {
      "use strict";
      t.d(e, {
        Z: function () {
          return S;
        },
      });
      var r,
        i,
        a,
        s = t(56824),
        o = t(30225),
        c = t(94404),
        u = t(14482),
        l = t(5189),
        f = t(76431),
        g = t(87121),
        d = t(2845),
        h = t(84628),
        p = t(83749),
        x = t(98278),
        v = t.n(x),
        m = t(49318),
        b = (0, h.Jg)({
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
            var e,
              t = n.actions;
            return {
              confirmationModal: [
                !1,
                v().bool,
                ((e = {}),
                (0, d.Z)(e, t.showConfirmationModal, function () {
                  return !0;
                }),
                (0, d.Z)(e, t.hideConfirmationModal, function () {
                  return !1;
                }),
                e),
              ],
              nextLocation: [
                {},
                v().object,
                (0, d.Z)({}, t.showConfirmationModal, function (n, e) {
                  return e.location;
                }),
              ],
            };
          },
          stop: (0, g.Z)().mark(function n() {
            var e;
            return (0, g.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (e = this.actionCreators.hideConfirmationModal),
                        (n.next = 3),
                        (0, p.gz)(e())
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
            var e = n.actions,
              t = n.workers;
            return (0, d.Z)(
              {},
              e.handleConfirmNavigationClick,
              t.handleConfirmNavigationClick,
            );
          },
          workers: {
            handleConfirmNavigationClick: (0, g.Z)().mark(function n() {
              var e, t, r, i;
              return (0, g.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (e = this.actionCreators),
                          (t = e.hideConfirmationModal),
                          (r = e.push),
                          (n.next = 3),
                          this.get("nextLocation")
                        );
                      case 3:
                        return ((i = n.sent), (n.next = 6), (0, p.gz)(t()));
                      case 6:
                        return ((n.next = 8), (0, p.gz)(r(i)));
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
        Z = t(30588),
        C = t(22247),
        k = t(31228),
        w = (function (n) {
          (0, u.default)(t, n);
          var e = (0, l.default)(t);
          function t() {
            var n;
            (0, o.default)(this, t);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              ((n = e.call.apply(e, [this].concat(i))).first = !0),
              (n.handleBlockedNavigation = function (e) {
                var t = n.props,
                  r = t.isForm,
                  i = t.isDirty,
                  a = n.actions.showConfirmationModal;
                return !(r && i && n.first) || ((n.first = !1), a(e), !1);
              }),
              n
            );
          }
          return (
            (0, c.default)(t, [
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
                    e = this.props,
                    t = e.isMobile,
                    r = e.loading,
                    i = e.children,
                    a = e.menu,
                    s = e.onBack,
                    o = e.title,
                    c = e.translations,
                    u = e.confirmationModal,
                    l = e.isForm,
                    f = e.isDirty,
                    g = this.actions,
                    d = g.showConfirmationModal,
                    h = g.hideConfirmationModal,
                    p = g.handleConfirmNavigationClick,
                    x = c.GENERAL_CANCEL,
                    v = c.GENERAL_CONTINUE,
                    m = c.BACK_BUTTON_MODAL_TEXT,
                    b = c.BACK_BUTTON_MODAL_TITLE;
                  return (0, k.jsxs)(j, {
                    children: [
                      !!r && (0, k.jsx)(C.gb, {}),
                      t &&
                        (0, k.jsxs)("div", {
                          children: [
                            (0, k.jsx)(C.xE, {
                              id: "PageAdaptable_BackButton",
                              onClick: l && f ? d : s,
                            }),
                            i,
                          ],
                        }),
                      !t &&
                        (0, k.jsxs)("div", {
                          children: [
                            (0, k.jsx)(C.V1, { mobile: t, children: o }),
                            (0, k.jsx)(E, { children: a }),
                            (0, k.jsx)(_, { children: i }),
                          ],
                        }),
                      (0, k.jsx)(C.u_, {
                        size: "small",
                        open: u,
                        children: (0, k.jsxs)("div", {
                          children: [
                            (0, k.jsx)(C.xB, { title: b }),
                            (0, k.jsx)(C.hz, {
                              padding: !0,
                              size: "small",
                              mobile: t,
                              children: (0, k.jsx)(C.ZT, { children: m }),
                            }),
                            (0, k.jsxs)(C.Zf, {
                              children: [
                                (0, k.jsx)(C.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    ((n.first = !0), h());
                                  },
                                  children: x,
                                }),
                                (0, k.jsx)(C.zx, {
                                  id: "Button_Continue",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function (n) {
                                    t ? (h(), s(n)) : p(n);
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
            t
          );
        })(f.Component),
        S = b(w),
        j = Z.ZP.div(
          r ||
            (r = (0, s.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n    padding-right: 0px;\n  }\n",
            ])),
        ),
        E = Z.ZP.div(
          i ||
            (i = (0, s.default)([
              "\n  width: 40%;\n  padding-right: 5%;\n  float: left;\n  position: relative;\n  color: #fff;\n  margin-top: 25px;\n",
            ])),
        ),
        _ = Z.ZP.div(
          a ||
            (a = (0, s.default)([
              "\n  width: 60%;\n  float: left;\n  padding-right: 0;\n",
            ])),
        );
    },
    93983: function (n, e, t) {
      "use strict";
      t.d(e, {
        Z: function () {
          return Z;
        },
      });
      var r,
        i,
        a,
        s,
        o = t(56824),
        c = t(30225),
        u = t(94404),
        l = t(14482),
        f = t(5189),
        g = t(76431),
        d = t(84628),
        h = t(49318),
        p = (0, d.Jg)({
          connect: { props: [h.Z, ["isMobile", "translations"]] },
        }),
        x = t(30588),
        v = t(22247),
        m = t(31228),
        b = (function (n) {
          (0, l.default)(t, n);
          var e = (0, f.default)(t);
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
                    a = (0, m.jsxs)("div", {
                      children: [(0, m.jsx)(w, {}), (0, m.jsx)(S, {})],
                    });
                  return (0, m.jsx)(C, {
                    margin: i,
                    children:
                      r &&
                      r.map(function (n) {
                        var r = n.key,
                          i = n.icon,
                          s = n.title,
                          o = n.onClick,
                          c = n.disabled,
                          u = n.link,
                          l = n.color,
                          f = n.hidden,
                          g = n.notifications,
                          d = n.id;
                        return f
                          ? ""
                          : (0, m.jsxs)(
                              k,
                              {
                                active: e === r,
                                mobile: t,
                                color: l ? l + "!important" : void 0,
                                link: u,
                                children: [
                                  (0, m.jsx)(v.Lr, {
                                    id: d,
                                    icon: i,
                                    mobile: t,
                                    title: s,
                                    onClick: o,
                                    link: u,
                                    disabled: c,
                                    notifications: g,
                                  }),
                                  e === r && a,
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
        })(g.PureComponent),
        Z = p(b),
        C = x.ZP.div(
          r || (r = (0, o.default)(["\n  margin: ", ";\n"])),
          function (n) {
            return n.margin;
          },
        ),
        k = x.ZP.div(
          i ||
            (i = (0, o.default)([
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
          a ||
            (a = (0, o.default)([
              "\n  position: absolute;\n  height: 56px;\n  width: 100%;\n  background-color: #007bc1;\n  z-index: 2;\n  top: 0;\n  left: 0;\n",
            ])),
        ),
        S = x.ZP.div(
          s ||
            (s = (0, o.default)([
              "\n  position: absolute;\n  height: 10px;\n  width: calc(100% - 48px);\n  opacity: 0.4;\n  background-color: #0067c6;\n  box-shadow: 0 0 20px 0 #424e54;\n  bottom: 0;\n  right: 24px;\n  z-index: 1;\n",
            ])),
        );
    },
    23507: function (n, e, t) {
      "use strict";
      t.d(e, {
        Z: function () {
          return Z;
        },
      });
      var r,
        i = t(56824),
        a = t(2845),
        s = t(30225),
        o = t(94404),
        c = t(14482),
        u = t(5189),
        l = t(76431),
        f = t(84628),
        g = t(49318),
        d = (0, f.Jg)({
          connect: {
            props: [g.Z, ["isMobile", "translations", "configs"]],
            actions: [g.Z, ["push"]],
          },
        }),
        h = t(30588),
        p = t(48229),
        x = t(13795),
        v = t(93983),
        m = t(31228),
        b = (function (n) {
          (0, c.default)(t, n);
          var e = (0, u.default)(t);
          function t() {
            var n;
            (0, s.default)(this, t);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              ((n = e.call.apply(e, [this].concat(i))).navigate = function (e) {
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
                  var n,
                    e = this,
                    t = this.props,
                    r = t.page,
                    i = t.translations,
                    s = t.configs.userType,
                    o = i.USERPROF_MENU_CHANGE_PASS,
                    c = i.USERPROF_MENU_CHANGE_LANG,
                    u = i.USERPROF_MENU_MYAPPS,
                    l = [
                      {
                        id: "ChangeLanguage",
                        key: "change-language",
                        icon: (0, m.jsx)(p.Z, { children: "language" }),
                        title: c,
                        link: !0,
                        onClick: function () {
                          return e.navigate("/user-profile/language/");
                        },
                      },
                      {
                        id: "MyApps",
                        key: "my-apps",
                        icon: (0, m.jsx)(p.Z, { children: "extension" }),
                        title: u,
                        link: !0,
                        onClick: function () {
                          return e.navigate("/user-profile/my-apps/");
                        },
                      },
                      {
                        id: "ChangePassword",
                        key: "change-password",
                        icon: (0, m.jsx)(p.Z, { children: "https" }),
                        title: o,
                        link: !0,
                        onClick: function () {
                          return e.navigate("/user-profile/change-password/", {
                            userType: s,
                          });
                        },
                      },
                    ],
                    f = [].concat(l),
                    g = l,
                    d =
                      ((n = {}), (0, a.Z)(n, x.Df, f), (0, a.Z)(n, x.cC, g), n);
                  return (0, m.jsx)(C, {
                    children: (0, m.jsx)(v.Z, { items: d[s], page: r }),
                  });
                },
              },
            ]),
            t
          );
        })(l.PureComponent),
        Z = d(b),
        C = h.ZP.div(r || (r = (0, i.default)(["\n\n"])));
    },
    19818: function (n, e, t) {
      "use strict";
      var r = t(87121),
        i = t(2845),
        a = t(84628),
        s = t(90012),
        o = t(83749),
        c = t(98278),
        u = t.n(c),
        l = t(49318);
      e.Z = (0, a.Jg)({
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
          var e, t, i, a, c;
          return (0, r.Z)().wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (0, s.log)("[XS-UserProfile] Start Scene ", "yellow"),
                      (n.next = 3),
                      this.get("showSuccessMessage")
                    );
                  case 3:
                    return (
                      (e = n.sent),
                      (t = this.actionCreators),
                      (i = t.checkSetupStatus),
                      (a = t.setShowSuccessMessage),
                      (c = t.setChangesSaved),
                      (n.next = 7),
                      (0, o.gz)(i())
                    );
                  case 7:
                    if (!e) {
                      n.next = 18;
                      break;
                    }
                    return ((n.next = 10), (0, o.gw)(100));
                  case 10:
                    return ((n.next = 12), (0, o.gz)(c(!0)));
                  case 12:
                    return ((n.next = 14), (0, o.gw)(2e3));
                  case 14:
                    return ((n.next = 16), (0, o.gz)(c(!1)));
                  case 16:
                    return ((n.next = 18), (0, o.gz)(a(!1)));
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
                      (0, o.gz)(e())
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
    47901: function (n, e, t) {
      "use strict";
      (t.r(e),
        t.d(e, {
          UserProfileLanguage: function () {
            return T;
          },
          default: function () {
            return B;
          },
        }));
      var r,
        i,
        a,
        s = t(56824),
        o = t(30225),
        c = t(94404),
        u = t(14482),
        l = t(5189),
        f = t(76431),
        g = t(87121),
        d = t(2845),
        h = t(84628),
        p = t(49745),
        x = t(83749),
        v = t(60326),
        m = t.n(v),
        b = t(98278),
        Z = t.n(b),
        C = t(13795),
        k = t(90012),
        w = t(42477),
        S = t(49318),
        j = t(19818),
        E = "".concat(C.CT, "/internal/languages"),
        _ = "".concat(C.CT, "/users/me"),
        M = { language: { value: "" } },
        L = { language: [w.q9] },
        y = (0, h.Jg)({
          path: function () {
            return ["scenes", "UserProfileLanguage"];
          },
          connect: {
            props: [S.Z, ["isMobile", "translations", "user"]],
            actions: [
              S.Z,
              ["setCurrentUser", "checkSetupStatus", "setLanguage", "push"],
              j.Z,
              ["setShowSuccessMessage"],
            ],
          },
          actions: function () {
            return {
              reset: function () {
                return !0;
              },
              change: function (n) {
                return { field: n };
              },
              submit: function () {
                return !0;
              },
              response: function (n) {
                return { response: n };
              },
              setError: function (n) {
                return n;
              },
              setForm: function (n) {
                return { form: n };
              },
              fetchLanguages: function () {
                return !0;
              },
              setLanguages: function (n) {
                return { languages: n };
              },
              setSuccessMessage: function (n) {
                return n;
              },
            };
          },
          reducers: function (n) {
            var e,
              t,
              r,
              i,
              a,
              s,
              o = n.actions;
            return {
              languages: [
                [],
                Z().array,
                ((e = {}),
                (0, d.Z)(e, o.reset, function () {
                  return [];
                }),
                (0, d.Z)(e, o.setLanguages, function (n, e) {
                  return e.languages;
                }),
                e),
              ],
              loading: [
                !0,
                Z().bool,
                ((t = {}),
                (0, d.Z)(t, o.reset, function () {
                  return !0;
                }),
                (0, d.Z)(t, o.submit, function () {
                  return !0;
                }),
                (0, d.Z)(t, o.fetchLanguages, function () {
                  return !0;
                }),
                (0, d.Z)(t, o.setLanguages, function () {
                  return !1;
                }),
                (0, d.Z)(t, o.setLanguage, function () {
                  return !1;
                }),
                (0, d.Z)(t, o.setError, function () {
                  return !1;
                }),
                t),
              ],
              form: [
                M,
                Z().object,
                ((r = {}),
                (0, d.Z)(r, o.change, function (n, e) {
                  return w.jR(n, e, L);
                }),
                (0, d.Z)(r, o.setForm, function (n, e) {
                  return w.Yg(e.form, L).form;
                }),
                (0, d.Z)(r, o.reset, function () {
                  return M;
                }),
                r),
              ],
              dirty: [
                !1,
                Z().bool,
                ((i = {}),
                (0, d.Z)(i, o.change, function () {
                  return !0;
                }),
                (0, d.Z)(i, o.setError, function () {
                  return !0;
                }),
                (0, d.Z)(i, o.reset, function () {
                  return !1;
                }),
                (0, d.Z)(i, o.fetchLanguages, function () {
                  return !1;
                }),
                (0, d.Z)(i, o.submit, function () {
                  return !1;
                }),
                i),
              ],
              error: [
                null,
                Z().any,
                ((a = {}),
                (0, d.Z)(a, o.setError, function (n, e) {
                  return e;
                }),
                (0, d.Z)(a, o.reset, function () {
                  return null;
                }),
                (0, d.Z)(a, o.change, function () {
                  return null;
                }),
                (0, d.Z)(a, o.submit, function () {
                  return null;
                }),
                a),
              ],
              successMessage: [
                !1,
                Z().bool,
                ((s = {}),
                (0, d.Z)(s, o.change, function () {
                  return !1;
                }),
                (0, d.Z)(s, o.setSuccessMessage, function (n, e) {
                  return e;
                }),
                (0, d.Z)(s, o.setError, function () {
                  return !1;
                }),
                (0, d.Z)(s, o.reset, function () {
                  return !1;
                }),
                s),
              ],
            };
          },
          start: (0, g.Z)().mark(function n() {
            var e, t, r;
            return (0, g.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (e = this.actionCreators),
                        (t = e.fetchLanguages),
                        (r = e.checkSetupStatus),
                        (0, k.log)(
                          "[XS-UserProfileLanguage] Start Scene",
                          "yellow",
                        ),
                        (n.next = 4),
                        (0, x.gz)(r())
                      );
                    case 4:
                      return ((n.next = 6), (0, x.gz)(t()));
                    case 6:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this,
            );
          }),
          stop: (0, g.Z)().mark(function n() {
            var e;
            return (0, g.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (e = this.actionCreators.reset),
                        (0, k.log)("[XS-UserProfileLanguage] Stop Scene"),
                        (n.next = 4),
                        (0, x.gz)(e())
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
            var e,
              t = n.actions,
              r = n.workers;
            return (
              (e = {}),
              (0, d.Z)(e, t.fetchLanguages, r.fetchLanguages),
              (0, d.Z)(e, t.submit, r.submit),
              e
            );
          },
          workers: {
            fetchLanguages: (0, g.Z)().mark(function n() {
              var e, t, r, i, a, s, o;
              return (0, g.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (e = this.actionCreators),
                          (t = e.setLanguages),
                          (r = e.setForm),
                          (n.next = 3),
                          this.get("user")
                        );
                      case 3:
                        return (
                          (i = n.sent),
                          (n.prev = 4),
                          (n.next = 7),
                          (0, x.RE)(p.Z.get, E)
                        );
                      case 7:
                        if (
                          ((a = n.sent),
                          (s = a.data),
                          (o = s.result),
                          !s.successful)
                        ) {
                          n.next = 15;
                          break;
                        }
                        return ((n.next = 13), (0, x.gz)(t(o.results)));
                      case 13:
                        return (
                          (n.next = 15),
                          (0, x.gz)(r({ language: { value: i.language } }))
                        );
                      case 15:
                        n.next = 20;
                        break;
                      case 17:
                        ((n.prev = 17), (n.t0 = n.catch(4)), console.log(n.t0));
                      case 20:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this,
                [[4, 17]],
              );
            }),
            submit: (0, g.Z)().mark(function n() {
              var e, t, r, i, a, s, o, c, u, l, f, d, h, v, b, Z, C, k, S;
              return (0, g.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (e = this.actionCreators),
                          (t = e.setError),
                          (r = e.setForm),
                          (i = e.setSuccessMessage),
                          (a = e.setLanguage),
                          (s = e.setCurrentUser),
                          (o = e.setShowSuccessMessage),
                          (c = e.push),
                          (n.next = 3),
                          this.get("user")
                        );
                      case 3:
                        return ((u = n.sent), (n.next = 6), this.get("form"));
                      case 6:
                        return ((l = n.sent), (n.next = 9), this.get("dirty"));
                      case 9:
                        return (
                          (f = n.sent),
                          (n.next = 12),
                          this.get("translations")
                        );
                      case 12:
                        return (
                          (d = n.sent),
                          (n.next = 15),
                          this.get("isMobile")
                        );
                      case 15:
                        if (
                          ((h = n.sent), (v = w.Yg(l, L)), !f || !v.invalid)
                        ) {
                          n.next = 21;
                          break;
                        }
                        return (
                          (n.next = 20),
                          (0, x.gz)(t(d.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 20:
                        return n.abrupt("return", !1);
                      case 21:
                        if (f || !v.invalid) {
                          n.next = 27;
                          break;
                        }
                        return ((n.next = 24), (0, x.gz)(r(v.form)));
                      case 24:
                        return (
                          (n.next = 26),
                          (0, x.gz)(t(d.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 26:
                        return n.abrupt("return", !1);
                      case 27:
                        return (
                          ((b = m()(l, function (n) {
                            return n.value;
                          })).eulaVersion = u.eulaVersion),
                          (b.termsAndConditionsVersion =
                            u.termsAndConditionsVersion),
                          (n.prev = 30),
                          (n.next = 33),
                          (0, x.RE)(p.Z.post, _, b)
                        );
                      case 33:
                        if (
                          ((Z = n.sent),
                          (C = Z.data),
                          (k = C.successful),
                          (S = C.result),
                          !k)
                        ) {
                          n.next = 55;
                          break;
                        }
                        return ((n.next = 39), (0, x.gz)(a(S.language)));
                      case 39:
                        return (
                          (u.language = S.language),
                          (n.next = 42),
                          (0, x.gz)(s(u))
                        );
                      case 42:
                        if (!h) {
                          n.next = 49;
                          break;
                        }
                        return ((n.next = 45), (0, x.gz)(o(!0)));
                      case 45:
                        return ((n.next = 47), (0, x.gz)(c("/user-profile/")));
                      case 47:
                        n.next = 55;
                        break;
                      case 49:
                        return ((n.next = 51), (0, x.gz)(i(!0)));
                      case 51:
                        return ((n.next = 53), (0, x.gw)(5e3));
                      case 53:
                        return ((n.next = 55), (0, x.gz)(i(!1)));
                      case 55:
                        n.next = 60;
                        break;
                      case 57:
                        ((n.prev = 57),
                          (n.t0 = n.catch(30)),
                          console.log(n.t0));
                      case 60:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this,
                [[30, 57]],
              );
            }),
          },
        }),
        A = t(30588),
        P = t(48229),
        z = t(40915),
        R = t(23507),
        N = t(36082),
        F = t(22247),
        U = t(31228),
        T = (function (n) {
          (0, u.default)(t, n);
          var e = (0, l.default)(t);
          function t() {
            var n;
            (0, o.default)(this, t);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              ((n = e.call.apply(e, [this].concat(i))).navigate = function (e) {
                (0, n.actions.push)(e);
              }),
              n
            );
          }
          return (
            (0, c.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    e = this.props,
                    t = e.isMobile,
                    r = e.translations,
                    i = e.languages,
                    a = e.form,
                    s = e.loading,
                    o = e.dirty,
                    c = e.successMessage,
                    u = this.actions,
                    l = u.change,
                    f = u.submit,
                    g = u.fetchLanguages,
                    d = a.language,
                    h = r.USERPROF_TITLE,
                    p = r.USERPROF_CHANGE_LANG_TITLE,
                    x = r.USERPROF_CHANGE_LANG_SAVE,
                    v = r.USERPROF_CHANGE_LANG_LABEL,
                    m = r.USERPROF_CHANGE_LANG_CANCEL,
                    b = r.USERPROF_CHANGE_LANG_SUCCESS,
                    Z = !t && o,
                    C = (0, U.jsxs)(F.l0.Buttons, {
                      align: "right",
                      children: [
                        (0, U.jsx)(F.zx, {
                          id: "PrimaryButton_Cancel",
                          buttonType: "primary-cancel",
                          margin: "0 12px",
                          buttonWidth: "163px",
                          onClick: g,
                          disabled: !Z,
                          children: m,
                        }),
                        (0, U.jsx)(F.zx, {
                          id: "PrimaryButton_Save",
                          margin: "0 12px",
                          buttonWidth: "163px",
                          onClick: f,
                          disabled: !Z,
                          children: x,
                        }),
                      ],
                    });
                  return (0, U.jsxs)(O, {
                    children: [
                      s && (0, U.jsx)(F.gb, {}),
                      (0, U.jsx)(N.Z, {
                        title: h,
                        menu: (0, U.jsx)(R.Z, { page: "change-language" }),
                        onBack: function () {
                          return n.navigate("/user-profile/");
                        },
                        isForm: !0,
                        isDirty: o,
                        children: (0, U.jsxs)(F.e0, {
                          padding: !0,
                          mobile: t,
                          children: [
                            (0, U.jsx)(F.mV, {
                              mobile: t,
                              out: !c,
                              icon: (0, U.jsx)(P.Z, { children: "check" }),
                              message: b,
                            }),
                            (0, U.jsx)(F.V1, { mobile: t, children: p }),
                            t &&
                              o &&
                              (0, U.jsx)(F.Oj, {
                                id: "MobileActionButton_Save",
                                icon: (0, U.jsx)(P.Z, { children: "check" }),
                                onClick: f,
                                mobile: !0,
                                children: x,
                              }),
                            (0, U.jsx)(F.SK, { height: "20px" }),
                            (0, U.jsx)(F.l0, {
                              mobile: t,
                              showButtons: Z,
                              buttons: C,
                              containerHeight: t
                                ? "calc(100vh - 180px)"
                                : "calc(100vh - 350px)",
                              children: (0, U.jsxs)(F.l0.Row, {
                                full: t,
                                margin: t,
                                children: [
                                  (0, U.jsx)(G, { children: v }),
                                  (0, U.jsx)(F.Ee, {
                                    children: i.map(function (n) {
                                      return (0, U.jsx)(
                                        V,
                                        {
                                          value: n.identifier,
                                          control: (0, U.jsx)(F.Y8, {
                                            onChange: function (n) {
                                              var e = n.target;
                                              return l({ language: e.value });
                                            },
                                            checked: d.value === n.identifier,
                                          }),
                                          label: n.name,
                                        },
                                        n.identifier,
                                      );
                                    }),
                                  }),
                                ],
                              }),
                            }),
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
        })(f.Component),
        B = y(T),
        O = A.ZP.div(r || (r = (0, s.default)([""]))),
        G = (0, A.ZP)(F.ZT)(
          i ||
            (i = (0, s.default)([
              "\n  &&&& {\n    font-weight: bold;\n    color: #5b6770;\n    // margin-top: 40px;\n  }\n",
            ])),
        ),
        V = (0, A.ZP)(z.Z)(
          a ||
            (a = (0, s.default)([
              '\n  > span:nth-child(2) {\n    color: #424e54;\n    font-family: "Open Sans";\n    font-size: 14px;\n    line-height: 20px;\n  }\n',
            ])),
        );
    },
    60326: function (n, e, t) {
      var r = t(7278),
        i = t(31709),
        a = t(61490);
      n.exports = function (n, e) {
        var t = {};
        return (
          (e = a(e, 3)),
          i(n, function (n, i, a) {
            r(t, i, e(n, i, a));
          }),
          t
        );
      };
    },
  },
]);
//# sourceMappingURL=7901.9b365c70.chunk.js.map
