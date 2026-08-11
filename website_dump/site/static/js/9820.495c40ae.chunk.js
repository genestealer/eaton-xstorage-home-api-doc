"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [9820],
  {
    43064: function (n, t, e) {
      var i = e(87121),
        o = e(6892),
        r = e(2845),
        a = e(84628),
        s = e(49745),
        c = e(83749),
        u = e(94467),
        f = e.n(u),
        d = e(98278),
        l = e.n(d),
        p = e(13795),
        h = e(49318),
        x = "".concat(p.CT, "/notifications/?status=NORMAL"),
        N = "".concat(p.CT, "/notifications/read");
      t.Z = (0, a.Jg)({
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
            setNotifications: function (n) {
              return { notifications: n };
            },
            setNotificationsTotal: function (n) {
              return { total: n };
            },
            setLoadingButton: function () {
              return !0;
            },
            setLoading: function (n) {
              return n;
            },
            setShowLoadMoreInfo: function () {
              return !0;
            },
            markNotificationsAsRead: function (n) {
              return { notifications: n };
            },
            setUnreadNotificationsValue: function (n) {
              return { unread: n };
            },
            updateNotifications: function (n) {
              return n;
            },
          };
        },
        reducers: function (n) {
          var t,
            e,
            i,
            a,
            s,
            c,
            u,
            f = n.actions;
          return {
            notificationsVisible: [
              !1,
              l().bool,
              ((t = {}),
              (0, r.Z)(t, f.showNotifications, function (n, t) {
                return !0;
              }),
              (0, r.Z)(t, f.hideNotifications, function (n, t) {
                return !1;
              }),
              t),
            ],
            notificationsList: [
              [],
              l().array,
              ((e = {}),
              (0, r.Z)(e, f.setNotifications, function (n, t) {
                return [].concat((0, o.Z)(n), (0, o.Z)(t.notifications));
              }),
              (0, r.Z)(e, f.updateNotifications, function (n, t) {
                return t;
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
              l().number,
              ((i = {}),
              (0, r.Z)(i, f.setNotificationsTotal, function (n, t) {
                return t.total;
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
              l().number,
              ((a = {}),
              (0, r.Z)(a, f.setUnreadNotificationsValue, function (n, t) {
                return t.unread;
              }),
              (0, r.Z)(a, f.hideNotifications, function () {
                return 0;
              }),
              a),
            ],
            loadingButton: [
              !1,
              l().bool,
              ((s = {}),
              (0, r.Z)(s, f.setLoadingButton, function (n) {
                return !n;
              }),
              (0, r.Z)(s, f.hideNotifications, function () {
                return !1;
              }),
              s),
            ],
            loading: [
              !1,
              l().bool,
              ((c = {}),
              (0, r.Z)(c, f.setLoading, function (n, t) {
                return t;
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
              l().bool,
              ((u = {}),
              (0, r.Z)(u, f.setShowLoadMoreInfo, function (n) {
                return !0;
              }),
              (0, r.Z)(u, f.hideNotifications, function () {
                return !1;
              }),
              u),
            ],
          };
        },
        takeLatest: function (n) {
          var t,
            e = n.actions,
            i = n.workers;
          return (
            (t = {}),
            (0, r.Z)(t, e.getNotifications, i.getNotifications),
            (0, r.Z)(t, e.showNotifications, i.getNotifications),
            (0, r.Z)(t, e.markNotificationsAsRead, i.markNotificationsAsRead),
            t
          );
        },
        workers: {
          getNotifications: (0, i.Z)().mark(function n() {
            var t, e, o, r, a, u, d, l, p, h, N;
            return (0, i.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return ((n.next = 2), this.get("notificationsList"));
                    case 2:
                      return (
                        (t = n.sent),
                        (n.next = 5),
                        this.get("translations")
                      );
                    case 5:
                      return (
                        (e = n.sent),
                        (o = this.actionCreators),
                        (r = o.setNotifications),
                        (a = o.setNotificationsTotal),
                        (u = o.setShowLoadMoreInfo),
                        (d = o.setLoadingButton),
                        (l = o.markNotificationsAsRead),
                        (n.next = 9),
                        (0, c.gz)(d())
                      );
                    case 9:
                      return (
                        (n.prev = 9),
                        (p = x + "&size=4&offset=".concat(t.length)),
                        (n.next = 13),
                        (0, c.RE)(s.Z.get, p)
                      );
                    case 13:
                      return (
                        (h = n.sent),
                        (N = h.data.result),
                        (n.next = 17),
                        (0, c.gz)(a(N.total))
                      );
                    case 17:
                      if (!(N.total > N.size)) {
                        n.next = 20;
                        break;
                      }
                      return ((n.next = 20), (0, c.gz)(u()));
                    case 20:
                      if (!(N && N.results.length > 0)) {
                        n.next = 28;
                        break;
                      }
                      return (
                        N.results.forEach(function (n) {
                          if (
                            ((n.title = e["NOTIFICATIONS_TITLE_" + n.subType]),
                            n.previousAlertId && "INFO" === n.level
                              ? (n.subtitle =
                                  e.NOTIFICATIONS_SUBTITLE_ALARM_RESOLVED)
                              : (n.subtitle =
                                  e["NOTIFICATIONS_SUBTITLE_" + n.subType]),
                            f()().isSame(f()(n.createdAt), "d"))
                          ) {
                            var t = f().duration(f()().diff(f()(n.createdAt)));
                            if (t.hours() >= 1)
                              n.date = ""
                                .concat(e.NOTIFICATIONS_TODAY, ", ")
                                .concat(f()(n.createdAt).format("HH:mm"));
                            else {
                              var i = t.minutes();
                              n.date =
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
                            n.date = f()(n.createdAt).format(
                              "DD/MM/YYYY, HH:mm",
                            );
                        }),
                        (n.next = 24),
                        (0, c.gz)(r(N.results))
                      );
                    case 24:
                      return ((n.next = 26), (0, c.gz)(l(N.results)));
                    case 26:
                      n.next = 30;
                      break;
                    case 28:
                      return ((n.next = 30), (0, c.gz)(r([])));
                    case 30:
                      return ((n.next = 32), (0, c.gz)(d()));
                    case 32:
                      n.next = 37;
                      break;
                    case 34:
                      ((n.prev = 34), (n.t0 = n.catch(9)), console.log(n.t0));
                    case 37:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this,
              [[9, 34]],
            );
          }),
          markNotificationsAsRead: (0, i.Z)().mark(function n(t) {
            var e, o, r, a, u;
            return (0, i.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (
                        ((e = t.payload.notifications),
                        (o = []),
                        e.forEach(function (n) {
                          "NORMAL" === n.status && o.push(n.alertId);
                        }),
                        !(o.length > 0))
                      ) {
                        n.next = 15;
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
                        (n.prev = 7),
                        (n.next = 10),
                        (0, c.RE)(s.Z.post, N, a, u)
                      );
                    case 10:
                      n.next = 15;
                      break;
                    case 12:
                      ((n.prev = 12), (n.t0 = n.catch(7)), console.log(n.t0));
                    case 15:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              null,
              [[7, 12]],
            );
          }),
        },
      });
    },
    64154: function (n, t, e) {
      var i = e(87121),
        o = e(2845),
        r = e(84628),
        a = e(49745),
        s = e(83749),
        c = e(98278),
        u = e.n(c),
        f = e(13795),
        d = e(49318),
        l = e(43064),
        p = "".concat(f.CT, "/notifications/unread?status=NORMAL");
      t.Z = (0, r.Jg)({
        path: function () {
          return ["scenes", "containers", "UserBar"];
        },
        connect: {
          props: [d.Z, ["currentRoute"]],
          actions: [
            l.Z,
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
            setUnreadNotifications: function (n) {
              return { unread: n };
            },
          };
        },
        reducers: function (n) {
          var t = n.actions;
          return {
            unreadNotifications: [
              !1,
              u().bool,
              (0, o.Z)({}, t.setUnreadNotifications, function (n, t) {
                return t.unread;
              }),
            ],
          };
        },
        start: (0, i.Z)().mark(function n() {
          return (0, i.Z)().wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (n.next = 2),
                      (0, s.gz)(this.actionCreators.getUnreadNotifications())
                    );
                  case 2:
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
            i = n.workers;
          return (
            (t = {}),
            (0, o.Z)(t, e.getUnreadNotifications, i.getUnreadNotifications),
            (0, o.Z)(t, e.hideNotifications, i.getUnreadNotifications),
            t
          );
        },
        workers: {
          getUnreadNotifications: (0, i.Z)().mark(function () {
            var n, t, e, o, r, c, u;
            return (0, i.Z)().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators),
                        (t = n.setUnreadNotifications),
                        (e = n.getUnreadNotifications),
                        (o = n.setUnreadNotificationsValue),
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
                      return ((i.next = 11), (0, s.gz)(t(!0)));
                    case 11:
                      i.next = 15;
                      break;
                    case 13:
                      return ((i.next = 15), (0, s.gz)(t(!1)));
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
    49820: function (n, t, e) {
      (e.r(t),
        e.d(t, {
          default: function () {
            return H;
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
        d,
        l,
        p,
        h,
        x,
        N = e(56824),
        g = e(30225),
        v = e(94404),
        w = e(14482),
        Z = e(5189),
        T = e(76431),
        m = e(84628),
        I = e(49318),
        b = e(64154),
        k = (0, m.Jg)({
          path: function () {
            return ["scenes", "More"];
          },
          connect: {
            props: [
              I.Z,
              ["user", "translations", "configs"],
              b.Z,
              ["unreadNotifications"],
            ],
            actions: [
              I.Z,
              ["logout", "setShowHelpTour", "push"],
              b.Z,
              ["getUnreadNotifications"],
            ],
          },
        }),
        O = e(30588),
        A = e(48229),
        _ = e(13795),
        C = e(31105),
        E = (0, m.Jg)({
          path: function () {
            return ["scenes", "containers", "DeviceChooserMobile"];
          },
          connect: {
            props: [I.Z, ["currentDevice", "translations"]],
            actions: [I.Z, ["push"]],
          },
        }),
        L = e(22247),
        j = e(31228),
        R = (function (n) {
          (0, w.default)(e, n);
          var t = (0, Z.default)(e);
          function e() {
            var n;
            (0, g.default)(this, e);
            for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++)
              o[r] = arguments[r];
            return (
              ((n = t.call.apply(t, [this].concat(o))).navigate = function (t) {
                (0, n.actions.push)(t);
              }),
              n
            );
          }
          return (
            (0, v.default)(e, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    t = this.props,
                    e = t.currentDevice,
                    i = t.translations.DEVICE_CHOOSER_UNIT_SETTINGS;
                  return (0, j.jsxs)(U, {
                    children: [
                      (0, j.jsx)(y, {}),
                      (0, j.jsx)(M, {
                        children: (0, j.jsxs)(z, {
                          children: [
                            (0, j.jsx)(P, { children: (0, j.jsx)(F, {}) }),
                            (0, j.jsxs)(D, {
                              children: [
                                (0, j.jsx)(V, {
                                  children: e.name || e.inverterSerialNumber,
                                }),
                                (0, j.jsxs)(Y, {
                                  onClick: function () {
                                    return n.navigate("/settings/");
                                  },
                                  children: [
                                    (0, j.jsx)(A.Z, { children: "settings" }),
                                    i,
                                  ],
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
        })(T.Component),
        S = E(R),
        U = O.ZP.div(
          i ||
            (i = (0, N.default)(["\n  height: 132px;\n  overflow: hidden;\n"])),
        ),
        M = O.ZP.div(
          o ||
            (o = (0, N.default)([
              "\n  background-color: rgba(66, 78, 84, 0.05);\n  height: 132px;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  margin-top: -10px;\n  display: flex;\n  padding: 0 0 0 15px;\n\n  @media screen and (min-width: 550px) and (max-width: 1024px) {\n    padding: 0 40px;\n  }\n",
            ])),
        ),
        y = O.ZP.div(
          r ||
            (r = (0, N.default)([
              "\n  background-color: #0067c6;\n  opacity: 0.4;\n  box-shadow: 0 0 30px 0 rgba(0, 103, 198, 0.4);\n  width: 80%;\n  height: 10px;\n  margin: 0 auto;\n  position: relative;\n  top: -10px;\n",
            ])),
        ),
        z = O.ZP.div(
          a || (a = (0, N.default)(["\n  width: 60%;\n  display: flex;\n"])),
        ),
        F = (0, O.ZP)(function (n) {
          return (0, j.jsx)(L.Rw, (0, C.default)({}, n));
        })(
          s ||
            (s = (0, N.default)([
              "\n  width: 66px;\n  display: block;\n  margin: 25px auto 0;\n  transition: all 0.2s ease-in-out;\n\n  @media screen and (max-width: 375px) {\n    width: 56px;\n  }\n",
            ])),
        ),
        P = O.ZP.div(c || (c = (0, N.default)(["\n  float: left;\n"]))),
        D = O.ZP.div(
          u ||
            (u = (0, N.default)([
              "\n  display: inline-block;\n  margin-left: 15px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  left: 20%;\n\n  @media screen and (max-width: 375px) {\n    margin-left: 10px;\n  }\n",
            ])),
        ),
        V = O.ZP.p(
          f ||
            (f = (0, N.default)([
              "\n  font-size: 14px;\n  font-weight: bold;\n  color: #424e54;\n  margin: 0;\n  margin-bottom: 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 36vw;\n",
            ])),
        ),
        Y = O.ZP.a(
          d ||
            (d = (0, N.default)([
              "\n  color: #007bc1;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 12px;\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  cursor: pointer;\n\n  span {\n    font-size: 16px;\n    margin: 0 5px 0 0;\n  }\n",
            ])),
        ),
        B = (function (n) {
          (0, w.default)(e, n);
          var t = (0, Z.default)(e);
          function e() {
            var n;
            (0, g.default)(this, e);
            for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++)
              o[r] = arguments[r];
            return (
              ((n = t.call.apply(t, [this].concat(o))).navigate = function (t) {
                (0, n.actions.push)(t);
              }),
              n
            );
          }
          return (
            (0, v.default)(e, [
              {
                key: "componentWillUnmount",
                value: function () {
                  window.removeEventListener("resize", this.onResize, !1);
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  window.addEventListener("resize", this.onResize, !1);
                },
              },
              {
                key: "render",
                value: function () {
                  var n = this,
                    t = this.props,
                    e = t.translations,
                    i = t.configs,
                    o = t.unreadNotifications,
                    r = this.actions,
                    a = r.logout,
                    s = r.setShowHelpTour,
                    c = i.userType,
                    u = e.MORE_TITLE,
                    f = e.MORE_NAV_NOTIFICATIONS,
                    d = e.MORE_NAV_PROFILE,
                    l = e.MORE_NAV_TERMS,
                    p = e.MORE_NAV_LOGOUT,
                    h = e.MORE_MAINTENANCE,
                    x = e.USERMENU_VIEWTOUR,
                    N = (0, j.jsxs)(j.Fragment, {
                      children: [
                        (0, j.jsx)(L.Lr, {
                          id: "ViewTour",
                          icon: (0, j.jsx)(L.EW, {}),
                          title: x,
                          onClick: function () {
                            return s(!0);
                          },
                          link: !0,
                        }),
                        (0, j.jsx)(L.Lr, {
                          id: "Terms",
                          icon: (0, j.jsx)(L.oy, {}),
                          title: l,
                          ref: function (t) {
                            n.lastItemRef = t;
                          },
                          onClick: function () {
                            return n.navigate("/terms/");
                          },
                          link: !0,
                        }),
                      ],
                    });
                  return (0, j.jsxs)(J, {
                    children: [
                      (0, j.jsx)(L.V1, { blue: !0, children: u }),
                      (0, j.jsx)(S, {}),
                      (0, j.jsxs)(G, {
                        children: [
                          (0, j.jsx)(L.Lr, {
                            id: "Notifications",
                            icon: (0, j.jsx)(W, {
                              unread: o,
                              children: (0, j.jsx)(A.Z, {
                                children: "notifications",
                              }),
                            }),
                            title: f,
                            onClick: function () {
                              return n.navigate("/notifications/");
                            },
                            link: !0,
                          }),
                          (0, j.jsx)(L.Lr, {
                            id: "Profile",
                            icon: (0, j.jsx)(W, {
                              unread: !1,
                              children: (0, j.jsx)(A.Z, {
                                children: "account_circle",
                              }),
                            }),
                            title: d,
                            onClick: function () {
                              return n.navigate("/user-profile/");
                            },
                            link: !0,
                          }),
                          c === _.Df && N,
                          c === _.cC &&
                            (0, j.jsx)(L.Lr, {
                              id: "Maintenance",
                              icon: (0, j.jsx)(L.OH, {}),
                              title: h,
                              onClick: function () {
                                return n.navigate("/maintenance/");
                              },
                              link: !0,
                            }),
                        ],
                      }),
                      (0, j.jsx)(L.Lr, {
                        id: "Logout",
                        logoutItem: !0,
                        icon: (0, j.jsx)(q, { children: "power_settings_new" }),
                        title: p,
                        onClick: function () {
                          return a();
                        },
                      }),
                    ],
                  });
                },
              },
            ]),
            e
          );
        })(T.Component),
        H = k(B),
        J = O.ZP.div(
          l ||
            (l = (0, N.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n  height: 100%;\n  position: relative;\n  padding-bottom: 56px;\n",
            ])),
        ),
        G = O.ZP.div(
          p ||
            (p = (0, N.default)([
              "\n  > div:before {\n    content: '';\n    position: absolute;\n    width: calc(100% + 16px);\n    height: 56px;\n    box-shadow: inset 0 -1px 0 0 rgba(114, 126, 132, 0.1);\n\n    @media screen and (min-width: 550px) and (max-width: 1024px) {\n      width: calc(100% - 50px);\n    }\n  }\n",
            ])),
        ),
        W = O.ZP.div(
          h || (h = (0, N.default)(["\n  color: #007bc1;\n\n  ", "\n"])),
          function (n) {
            return (
              n.unread &&
              "\n    &:after{\n      position: absolute;\n      content: '';\n      left: 14px;\n      top: 20px;\n      height: 8px;\n      width: 8px;\n      background-color: #CA3C3D;\n      border-radius: 50%;\n      border: 1px solid #FFFFFF;\n    }\n  "
            );
          },
        ),
        q = (0, O.ZP)(A.Z)(
          x || (x = (0, N.default)(["\n  color: #ca3c3d;\n"])),
        );
    },
  },
]);
//# sourceMappingURL=9820.495c40ae.chunk.js.map
