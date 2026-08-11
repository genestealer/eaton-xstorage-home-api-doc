"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [1238],
  {
    43064: function (t, n, e) {
      var i = e(87121),
        o = e(6892),
        r = e(2845),
        a = e(84628),
        s = e(49745),
        c = e(83749),
        u = e(94467),
        f = e.n(u),
        l = e(98278),
        d = e.n(l),
        p = e(13795),
        h = e(49318),
        N = "".concat(p.CT, "/notifications/?status=NORMAL"),
        g = "".concat(p.CT, "/notifications/read");
      n.Z = (0, a.Jg)({
        path: function () {
          return ["scenes", "containers", "NotificationsPanel"];
        },
        connect: { props: [h.Z, ["translations"]] },
        actions: function () {
          return {
            showNotifications: function () {
              return !0;
            },
            hideNotifications: function () {
              return !0;
            },
            getNotifications: function () {
              return !0;
            },
            resetNotifications: function () {
              return !0;
            },
            setNotifications: function (t) {
              return { notifications: t };
            },
            setNotificationsTotal: function (t) {
              return { total: t };
            },
            setLoadingButton: function () {
              return !0;
            },
            setLoading: function (t) {
              return t;
            },
            setShowLoadMoreInfo: function () {
              return !0;
            },
            markNotificationsAsRead: function (t) {
              return { notifications: t };
            },
            setUnreadNotificationsValue: function (t) {
              return { unread: t };
            },
            updateNotifications: function (t) {
              return t;
            },
          };
        },
        reducers: function (t) {
          var n,
            e,
            i,
            a,
            s,
            c,
            u,
            f = t.actions;
          return {
            notificationsVisible: [
              !1,
              d().bool,
              ((n = {}),
              (0, r.Z)(n, f.showNotifications, function (t, n) {
                return !0;
              }),
              (0, r.Z)(n, f.hideNotifications, function (t, n) {
                return !1;
              }),
              n),
            ],
            notificationsList: [
              [],
              d().array,
              ((e = {}),
              (0, r.Z)(e, f.setNotifications, function (t, n) {
                return [].concat((0, o.Z)(t), (0, o.Z)(n.notifications));
              }),
              (0, r.Z)(e, f.updateNotifications, function (t, n) {
                return n;
              }),
              (0, r.Z)(e, f.hideNotifications, function () {
                return [];
              }),
              (0, r.Z)(e, f.resetNotifications, function () {
                return [];
              }),
              e),
            ],
            notificationsTotal: [
              0,
              d().number,
              ((i = {}),
              (0, r.Z)(i, f.setNotificationsTotal, function (t, n) {
                return n.total;
              }),
              (0, r.Z)(i, f.hideNotifications, function () {
                return 0;
              }),
              (0, r.Z)(i, f.resetNotifications, function () {
                return 0;
              }),
              i),
            ],
            unreadNotifications: [
              0,
              d().number,
              ((a = {}),
              (0, r.Z)(a, f.setUnreadNotificationsValue, function (t, n) {
                return n.unread;
              }),
              (0, r.Z)(a, f.hideNotifications, function () {
                return 0;
              }),
              a),
            ],
            loadingButton: [
              !1,
              d().bool,
              ((s = {}),
              (0, r.Z)(s, f.setLoadingButton, function (t) {
                return !t;
              }),
              (0, r.Z)(s, f.hideNotifications, function () {
                return !1;
              }),
              s),
            ],
            loading: [
              !1,
              d().bool,
              ((c = {}),
              (0, r.Z)(c, f.setLoading, function (t, n) {
                return n;
              }),
              (0, r.Z)(c, f.showNotifications, function () {
                return !0;
              }),
              (0, r.Z)(c, f.setNotifications, function () {
                return !1;
              }),
              c),
            ],
            showLoadMoreInfo: [
              !1,
              d().bool,
              ((u = {}),
              (0, r.Z)(u, f.setShowLoadMoreInfo, function (t) {
                return !0;
              }),
              (0, r.Z)(u, f.hideNotifications, function () {
                return !1;
              }),
              u),
            ],
          };
        },
        takeLatest: function (t) {
          var n,
            e = t.actions,
            i = t.workers;
          return (
            (n = {}),
            (0, r.Z)(n, e.getNotifications, i.getNotifications),
            (0, r.Z)(n, e.showNotifications, i.getNotifications),
            (0, r.Z)(n, e.markNotificationsAsRead, i.markNotificationsAsRead),
            n
          );
        },
        workers: {
          getNotifications: (0, i.Z)().mark(function t() {
            var n, e, o, r, a, u, l, d, p, h, g;
            return (0, i.Z)().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return ((t.next = 2), this.get("notificationsList"));
                    case 2:
                      return (
                        (n = t.sent),
                        (t.next = 5),
                        this.get("translations")
                      );
                    case 5:
                      return (
                        (e = t.sent),
                        (o = this.actionCreators),
                        (r = o.setNotifications),
                        (a = o.setNotificationsTotal),
                        (u = o.setShowLoadMoreInfo),
                        (l = o.setLoadingButton),
                        (d = o.markNotificationsAsRead),
                        (t.next = 9),
                        (0, c.gz)(l())
                      );
                    case 9:
                      return (
                        (t.prev = 9),
                        (p = N + "&size=4&offset=".concat(n.length)),
                        (t.next = 13),
                        (0, c.RE)(s.Z.get, p)
                      );
                    case 13:
                      return (
                        (h = t.sent),
                        (g = h.data.result),
                        (t.next = 17),
                        (0, c.gz)(a(g.total))
                      );
                    case 17:
                      if (!(g.total > g.size)) {
                        t.next = 20;
                        break;
                      }
                      return ((t.next = 20), (0, c.gz)(u()));
                    case 20:
                      if (!(g && g.results.length > 0)) {
                        t.next = 28;
                        break;
                      }
                      return (
                        g.results.forEach(function (t) {
                          if (
                            ((t.title = e["NOTIFICATIONS_TITLE_" + t.subType]),
                            t.previousAlertId && "INFO" === t.level
                              ? (t.subtitle =
                                  e.NOTIFICATIONS_SUBTITLE_ALARM_RESOLVED)
                              : (t.subtitle =
                                  e["NOTIFICATIONS_SUBTITLE_" + t.subType]),
                            f()().isSame(f()(t.createdAt), "d"))
                          ) {
                            var n = f().duration(f()().diff(f()(t.createdAt)));
                            if (n.hours() >= 1)
                              t.date = ""
                                .concat(e.NOTIFICATIONS_TODAY, ", ")
                                .concat(f()(t.createdAt).format("HH:mm"));
                            else {
                              var i = n.minutes();
                              t.date =
                                0 === i
                                  ? ""
                                      .concat(e.NOTIFICATIONS_TODAY, ", ")
                                      .concat(e.NOTIFICATIONS_JUST_NOW)
                                  : 1 === i
                                    ? ""
                                        .concat(e.NOTIFICATIONS_TODAY, ", ")
                                        .concat(e.NOTIFICATIONS_MINUTE_AGO)
                                    : ""
                                        .concat(e.NOTIFICATIONS_TODAY, ", ")
                                        .concat(
                                          e.NOTIFICATIONS_MINUTES_AGO.replace(
                                            "NUMBER_MIN",
                                            i,
                                          ),
                                        );
                            }
                          } else
                            t.date = f()(t.createdAt).format(
                              "DD/MM/YYYY, HH:mm",
                            );
                        }),
                        (t.next = 24),
                        (0, c.gz)(r(g.results))
                      );
                    case 24:
                      return ((t.next = 26), (0, c.gz)(d(g.results)));
                    case 26:
                      t.next = 30;
                      break;
                    case 28:
                      return ((t.next = 30), (0, c.gz)(r([])));
                    case 30:
                      return ((t.next = 32), (0, c.gz)(l()));
                    case 32:
                      t.next = 37;
                      break;
                    case 34:
                      ((t.prev = 34), (t.t0 = t.catch(9)), console.log(t.t0));
                    case 37:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[9, 34]],
            );
          }),
          markNotificationsAsRead: (0, i.Z)().mark(function t(n) {
            var e, o, r, a, u;
            return (0, i.Z)().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((e = n.payload.notifications),
                        (o = []),
                        e.forEach(function (t) {
                          "NORMAL" === t.status && o.push(t.alertId);
                        }),
                        !(o.length > 0))
                      ) {
                        t.next = 15;
                        break;
                      }
                      return (
                        (r = o.join()),
                        (a = { id: r }),
                        (u = {
                          headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                          },
                        }),
                        (t.prev = 7),
                        (t.next = 10),
                        (0, c.RE)(s.Z.post, g, a, u)
                      );
                    case 10:
                      t.next = 15;
                      break;
                    case 12:
                      ((t.prev = 12), (t.t0 = t.catch(7)), console.log(t.t0));
                    case 15:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[7, 12]],
            );
          }),
        },
      });
    },
    61238: function (t, n, e) {
      (e.r(n),
        e.d(n, {
          default: function () {
            return z;
          },
        }));
      var i,
        o,
        r,
        a,
        s,
        c,
        u,
        f,
        l = e(56824),
        d = e(30225),
        p = e(94404),
        h = e(14482),
        N = e(5189),
        g = e(76431),
        x = e(64154),
        Z = e(30588),
        v = e(48229),
        T = e(31105),
        I = e(84628),
        w = e(49318),
        O = (0, I.Jg)({
          path: function () {
            return ["scenes", "containers", "UserMenu"];
          },
          connect: {
            props: [w.Z, ["user", "translations", "configs"]],
            actions: [w.Z, ["logout", "setShowHelpTour", "push"]],
          },
        }),
        m = e(21649),
        k = e(13795),
        b = e(22247),
        U = e(31228),
        A = (function (t) {
          (0, h.default)(e, t);
          var n = (0, N.default)(e);
          function e() {
            var t;
            (0, d.default)(this, e);
            for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++)
              o[r] = arguments[r];
            return (
              ((t = n.call.apply(n, [this].concat(o))).navigate = function (n) {
                (0, t.actions.push)(n);
              }),
              (t.handleOnMenuChange = function (t, n) {
                var e =
                  n &&
                  (0, m.find)(n, function (n) {
                    return n.val === t;
                  });
                (0, m.isFunction)(e.action) && (0, e.action)();
              }),
              t
            );
          }
          return (
            (0, p.default)(e, [
              {
                key: "render",
                value: function () {
                  var t = this,
                    n = this.props,
                    e = n.user,
                    i = n.translations,
                    o = n.configs,
                    r = this.actions,
                    a = r.logout,
                    s = r.setShowHelpTour,
                    c = i.USERMENU_PROFILE,
                    u = i.USERMENU_TERMS,
                    f = i.USERMENU_LOGOUT,
                    l = i.USERMENU_VIEWTOUR,
                    d = (e || {}).username,
                    p = o.userType,
                    h = [
                      {
                        val: "profile",
                        label: c,
                        icon: (0, U.jsx)(E, { children: "account_circle" }),
                        action: function () {
                          t.navigate("/user-profile/language/");
                        },
                      },
                      {
                        val: "review_tour",
                        label: l,
                        hidden: p !== k.Df,
                        icon: (0, U.jsx)(L, {}),
                        action: function () {
                          return s(!0);
                        },
                      },
                      {
                        val: "terms",
                        label: u,
                        hidden: p !== k.Df,
                        icon: (0, U.jsx)(S, {}),
                        action: function () {
                          t.navigate("/terms/");
                        },
                      },
                      {
                        val: "logout",
                        label: f,
                        icon: (0, U.jsx)(R, { children: "power_settings_new" }),
                        action: a,
                      },
                    ];
                  return (0, U.jsxs)(C, {
                    children: [
                      (0, U.jsx)(v.Z, { children: "account_circle" }),
                      (0, U.jsx)(b.jL, {
                        placeholder: "".concat(d),
                        onChange: this.handleOnMenuChange,
                        options: h,
                      }),
                    ],
                  });
                },
              },
            ]),
            e
          );
        })(g.Component),
        _ = O(A),
        C = Z.ZP.div(
          i ||
            (i = (0, l.default)([
              "\n  display: flex;\n\n  > div > div > label {\n    color: #727e84;\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 24px;\n    margin-left: 5px;\n  }\n  > div > div > span {\n    color: #727e84;\n    font-size: 20px;\n    line-height: 20px;\n    margin-left: 0;\n  }\n  > div > div:nth-child(2) {\n    width: 250px;\n  }\n",
            ])),
        ),
        E = (0, Z.ZP)(v.Z)(
          o ||
            (o = (0, l.default)([
              "\n  color: #007bc1;\n  margin-right: 8px;\n  font-size: 20px !important;\n  float: left;\n",
            ])),
        ),
        S = (0, Z.ZP)(function (t) {
          return (0, U.jsx)(b.oy, (0, T.default)({}, t));
        })(
          r ||
            (r = (0, l.default)([
              "\n  width: 20px;\n  height: 20px;\n  margin-right: 8px;\n  float: left;\n",
            ])),
        ),
        L = (0, Z.ZP)(b.EW)(
          a ||
            (a = (0, l.default)([
              "\n  width: 20px;\n  height: 20px;\n  margin-right: 8px;\n  float: left;\n",
            ])),
        ),
        R = (0, Z.ZP)(v.Z)(
          s ||
            (s = (0, l.default)([
              "\n  color: #ca3c3d;\n  margin-right: 8px;\n  font-size: 20px !important;\n  float: left;\n",
            ])),
        ),
        M = (function (t) {
          (0, h.default)(e, t);
          var n = (0, N.default)(e);
          function e() {
            return ((0, d.default)(this, e), n.apply(this, arguments));
          }
          return (
            (0, p.default)(e, [
              {
                key: "componentDidUpdate",
                value: function (t) {
                  t.currentRoute.key !== this.props.currentRoute.key &&
                    this.actions.getUnreadNotifications();
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props.unreadNotifications,
                    n = this.actions.showNotifications;
                  return (0, U.jsxs)(F, {
                    children: [
                      (0, U.jsx)(y, {
                        onClick: n,
                        unread: t,
                        className: "second-step",
                        children: (0, U.jsx)(v.Z, {
                          children: "notifications",
                        }),
                      }),
                      (0, U.jsx)(j, { children: (0, U.jsx)(_, {}) }),
                    ],
                  });
                },
              },
            ]),
            e
          );
        })(g.Component),
        z = (0, x.Z)(M),
        F = Z.ZP.div(
          c ||
            (c = (0, l.default)([
              "\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding-top: 10px;\n  display: flex;\n  color: #727E84;\n  z-index: 1000;\n",
            ])),
        ),
        y = Z.ZP.div(
          u ||
            (u = (0, l.default)([
              "\n  margin: 15px 20px 0 40px;\n  position: relative;\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (t) {
            return (
              t.unread &&
              "\n    &:after{\n      position: absolute;\n      content: '';\n      right: 1px;\n      top: 1px;\n      height: 8px;\n      width: 8px;\n      background-color: #CA3C3D;\n      border-radius: 50%;\n      border: 1px solid #FFFFFF;\n    }\n  "
            );
          },
          function (t) {
            return !!t.onClick && "\n    cursor: pointer;\n  ";
          },
        ),
        j = Z.ZP.div(f || (f = (0, l.default)(["\n  margin: 15px 20px 0;\n"])));
    },
    64154: function (t, n, e) {
      var i = e(87121),
        o = e(2845),
        r = e(84628),
        a = e(49745),
        s = e(83749),
        c = e(98278),
        u = e.n(c),
        f = e(13795),
        l = e(49318),
        d = e(43064),
        p = "".concat(f.CT, "/notifications/unread?status=NORMAL");
      n.Z = (0, r.Jg)({
        path: function () {
          return ["scenes", "containers", "UserBar"];
        },
        connect: {
          props: [l.Z, ["currentRoute"]],
          actions: [
            d.Z,
            [
              "showNotifications",
              "hideNotifications",
              "setUnreadNotificationsValue",
            ],
          ],
        },
        actions: function () {
          return {
            getUnreadNotifications: function () {
              return !0;
            },
            setUnreadNotifications: function (t) {
              return { unread: t };
            },
          };
        },
        reducers: function (t) {
          var n = t.actions;
          return {
            unreadNotifications: [
              !1,
              u().bool,
              (0, o.Z)({}, n.setUnreadNotifications, function (t, n) {
                return n.unread;
              }),
            ],
          };
        },
        start: (0, i.Z)().mark(function t() {
          return (0, i.Z)().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      (0, s.gz)(this.actionCreators.getUnreadNotifications())
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this,
          );
        }),
        takeLatest: function (t) {
          var n,
            e = t.actions,
            i = t.workers;
          return (
            (n = {}),
            (0, o.Z)(n, e.getUnreadNotifications, i.getUnreadNotifications),
            (0, o.Z)(n, e.hideNotifications, i.getUnreadNotifications),
            n
          );
        },
        workers: {
          getUnreadNotifications: (0, i.Z)().mark(function () {
            var t, n, e, o, r, c, u;
            return (0, i.Z)().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators),
                        (n = t.setUnreadNotifications),
                        (e = t.getUnreadNotifications),
                        (o = t.setUnreadNotificationsValue),
                        (i.prev = 1),
                        (i.next = 4),
                        (0, s.RE)(a.Z.get, p)
                      );
                    case 4:
                      return (
                        (r = i.sent),
                        (c = r.data.result),
                        (i.next = 8),
                        (0, s.gz)(o(c.total))
                      );
                    case 8:
                      if (!(c && c.total > 0)) {
                        i.next = 13;
                        break;
                      }
                      return ((i.next = 11), (0, s.gz)(n(!0)));
                    case 11:
                      i.next = 15;
                      break;
                    case 13:
                      return ((i.next = 15), (0, s.gz)(n(!1)));
                    case 15:
                      return ((u = f.bd), (i.next = 18), (0, s.gw)(u));
                    case 18:
                      return ((i.next = 20), (0, s.gz)(e()));
                    case 20:
                      i.next = 25;
                      break;
                    case 22:
                      ((i.prev = 22), (i.t0 = i.catch(1)), console.log(i.t0));
                    case 25:
                    case "end":
                      return i.stop();
                  }
              },
              e,
              this,
              [[1, 22]],
            );
          }),
        },
      });
    },
  },
]);
//# sourceMappingURL=1238.1b3f4982.chunk.js.map
