"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [3097],
  {
    93097: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return U;
        },
      });
      var i,
        o,
        r,
        a,
        s,
        c,
        u = e(56824),
        f = e(30225),
        d = e(94404),
        l = e(14482),
        N = e(5189),
        p = e(76431),
        h = e(87121),
        x = e(2845),
        g = e(84628),
        I = e(49745),
        Z = e(83749),
        T = e(13795),
        v = e(49318),
        A = e(43064),
        O = e(64154),
        m = "".concat(T.CT, "/notifications/delete"),
        w = "".concat(T.CT, "/notifications/read/all"),
        b = (0, g.Jg)({
          path: function () {
            return ["scenes", "containers", "NotificationsList"];
          },
          connect: {
            props: [
              v.Z,
              ["isMobile", "translations"],
              A.Z,
              ["notificationsList", "loading"],
            ],
            actions: [
              A.Z,
              [
                "getNotifications",
                "resetNotifications",
                "setUnreadNotificationsValue",
                "updateNotifications",
                "setLoading",
              ],
              O.Z,
              ["getUnreadNotifications", "setUnreadNotifications"],
            ],
          },
          actions: function () {
            return {
              deleteNotification: function (t) {
                return { notificationId: t };
              },
              markAllNotificationsRead: function () {
                return !0;
              },
            };
          },
          takeLatest: function (t) {
            var n,
              e = t.actions,
              i = t.workers;
            return (
              (n = {}),
              (0, x.Z)(n, e.deleteNotification, i.deleteNotification),
              (0, x.Z)(
                n,
                e.markAllNotificationsRead,
                i.markAllNotificationsRead,
              ),
              n
            );
          },
          workers: {
            deleteNotification: (0, h.Z)().mark(function t(n) {
              var e, i, o, r, a, s, c;
              return (0, h.Z)().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e = n.payload.notificationId),
                          (i = this.actionCreators),
                          (o = i.getNotifications),
                          (r = i.resetNotifications),
                          (a = i.getUnreadNotifications),
                          (t.prev = 2),
                          (s = { id: e }),
                          (c = {
                            headers: {
                              "Content-Type":
                                "application/x-www-form-urlencoded",
                            },
                          }),
                          (t.next = 7),
                          (0, Z.RE)(I.Z.post, m, s, c)
                        );
                      case 7:
                        if (!t.sent.data.successful) {
                          t.next = 15;
                          break;
                        }
                        return ((t.next = 11), (0, Z.gz)(r()));
                      case 11:
                        return ((t.next = 13), (0, Z.gz)(o()));
                      case 13:
                        return ((t.next = 15), (0, Z.gz)(a()));
                      case 15:
                        t.next = 20;
                        break;
                      case 17:
                        ((t.prev = 17), (t.t0 = t.catch(2)), console.log(t.t0));
                      case 20:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this,
                [[2, 17]],
              );
            }),
            markAllNotificationsRead: (0, h.Z)().mark(function t() {
              var n, e, i, o, r, a;
              return (0, h.Z)().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (e = n.setUnreadNotificationsValue),
                          (i = n.updateNotifications),
                          (o = n.setUnreadNotifications),
                          (r = n.setLoading),
                          (t.next = 3),
                          this.get("notificationsList")
                        );
                      case 3:
                        return ((a = t.sent), (t.next = 6), (0, Z.gz)(r(!0)));
                      case 6:
                        return (
                          (t.prev = 6),
                          (t.next = 9),
                          (0, Z.RE)(I.Z.post, w)
                        );
                      case 9:
                        return ((t.next = 11), (0, Z.gz)(e(0)));
                      case 11:
                        return ((t.next = 13), (0, Z.gz)(o(!1)));
                      case 13:
                        return (
                          a.map(function (t) {
                            return ((t.status = "READ"), t);
                          }),
                          (t.next = 16),
                          (0, Z.gz)(i(a))
                        );
                      case 16:
                        return ((t.next = 18), (0, Z.gz)(r(!1)));
                      case 18:
                        t.next = 25;
                        break;
                      case 20:
                        return (
                          (t.prev = 20),
                          (t.t0 = t.catch(6)),
                          (t.next = 24),
                          (0, Z.gz)(r(!1))
                        );
                      case 24:
                        console.log(t.t0);
                      case 25:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this,
                [[6, 20]],
              );
            }),
          },
        }),
        k = e(30588),
        L = e(48229),
        _ = e(22247),
        C = e(31228),
        R = (function (t) {
          (0, l.default)(e, t);
          var n = (0, N.default)(e);
          function e() {
            return ((0, f.default)(this, e), n.apply(this, arguments));
          }
          return (
            (0, d.default)(e, [
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    n = t.translations,
                    e = t.notifications,
                    i = t.notificationsTotal,
                    o = t.showLoadMoreInfo,
                    r = t.unreadNotifications,
                    a = t.loadingButton,
                    s = t.isMobile,
                    c = t.getNotifications,
                    u = t.loading,
                    f = this.actions,
                    d = f.deleteNotification,
                    l = f.markAllNotificationsRead,
                    N = n || {},
                    p = N.NOTIF_UNREAD_TEXT,
                    h = N.NOTIFICATIONS_LOADING,
                    x = N.NOTIFICATIONS_LOAD_MORE,
                    g = N.NOTIFICATIONS_NO_MORE_RESULTS,
                    I = N.NOTIFICATIONS_MARK_ALL_READ,
                    Z = (p && p.replace("NUMBER_NOTIF", r)) || "";
                  return u
                    ? (0, C.jsx)(_.CE, {})
                    : (0, C.jsxs)(S, {
                        children: [
                          (0, C.jsx)(z, { children: Z }),
                          (0, C.jsx)(j, {
                            children: (0, C.jsxs)(_.rU, {
                              onClick: l,
                              children: [
                                (0, C.jsx)(_.Wt, {}),
                                (0, C.jsx)("span", { children: I }),
                              ],
                            }),
                          }),
                          (0, C.jsxs)(E, {
                            children: [
                              e &&
                                e.map(function (t) {
                                  return (0, C.jsx)(
                                    _.f1,
                                    {
                                      alert: !0,
                                      showAlert: "NORMAL" === t.status,
                                      close: !0,
                                      closeClick: function () {
                                        return d(t.alertId);
                                      },
                                      title: t.title,
                                      description: t.subtitle,
                                      label: t.date,
                                      iconType:
                                        "INFO" === t.level
                                          ? "info"
                                          : "WARNING" === t.level
                                            ? "warning"
                                            : "error",
                                      icon: (0, C.jsx)(L.Z, {
                                        children:
                                          "INFO" === t.level
                                            ? "info"
                                            : "WARNING" === t.level
                                              ? "warning"
                                              : "error",
                                      }),
                                    },
                                    t.alertId,
                                  );
                                }),
                              o &&
                                a &&
                                (0, C.jsx)(M, {
                                  mobile: s,
                                  children: (0, C.jsxs)(F, {
                                    children: [
                                      (0, C.jsx)(L.Z, {
                                        children: "autorenew",
                                      }),
                                      h,
                                    ],
                                  }),
                                }),
                              o &&
                                !a &&
                                (0, C.jsxs)(C.Fragment, {
                                  children: [
                                    i > e.length &&
                                      (0, C.jsx)(M, {
                                        mobile: s,
                                        children: (0, C.jsxs)(_.zx, {
                                          id: "Button_LoadMore",
                                          buttonType: "secondary-default",
                                          buttonWidth: "200px",
                                          smallShadow: !0,
                                          onClick: c,
                                          children: [
                                            (0, C.jsx)(L.Z, {
                                              children: "add",
                                            }),
                                            x,
                                          ],
                                        }),
                                      }),
                                    i === e.length &&
                                      (0, C.jsx)(M, {
                                        mobile: s,
                                        children: (0, C.jsx)(_.bZ, {
                                          icon: (0, C.jsx)(L.Z, {
                                            children: "error",
                                          }),
                                          message: g,
                                        }),
                                      }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      });
                },
              },
            ]),
            e
          );
        })(p.Component),
        U = b(R),
        S = k.ZP.div(i || (i = (0, u.default)([""]))),
        z = k.ZP.div(
          o ||
            (o = (0, u.default)([
              "\n  font-size: 14px;\n  color: #727e84;\n  font-weight: 600;\n  line-height: 20px;\n",
            ])),
        ),
        E = k.ZP.div(
          r ||
            (r = (0, u.default)([
              "\n  overflow-y: auto;\n  max-height: 80vh;\n\n  > div:not(:last-child) {\n    box-shadow: inset 0 -1px 0 0 rgba(114, 126, 132, 0.1);\n  }\n",
            ])),
        ),
        M = k.ZP.div(
          a ||
            (a = (0, u.default)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 31px;\n  margin-bottom: 31px;\n\n  ",
              "\n",
            ])),
          function (t) {
            return t.mobile && "\n    max-width: 100vw;\n  ";
          },
        ),
        j = k.ZP.div(
          s ||
            (s = (0, u.default)([
              "\n  border-bottom: 1px solid rgba(114, 126, 132, 0.1);\n  border-top: 1px solid rgba(114, 126, 132, 0.1);\n  margin-top: 20px;\n  display: flex;\n",
            ])),
        ),
        F = k.ZP.div(
          c ||
            (c = (0, u.default)([
              "\n  display: inline-flex;\n  align-items: center;\n  padding: 10px;\n  cursor: pointer;\n\n  span {\n    color: #007bc1;\n    font-family: 'Open Sans';\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 14px;\n    padding-left: 4px;\n  }\n",
            ])),
        );
    },
    43064: function (t, n, e) {
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
        N = e(13795),
        p = e(49318),
        h = "".concat(N.CT, "/notifications/?status=NORMAL"),
        x = "".concat(N.CT, "/notifications/read");
      n.Z = (0, a.Jg)({
        path: function () {
          return ["scenes", "containers", "NotificationsPanel"];
        },
        connect: { props: [p.Z, ["translations"]] },
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
              l().bool,
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
              l().array,
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
              l().number,
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
              l().number,
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
              l().bool,
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
              l().bool,
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
              l().bool,
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
            var n, e, o, r, a, u, d, l, N, p, x;
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
                        (d = o.setLoadingButton),
                        (l = o.markNotificationsAsRead),
                        (t.next = 9),
                        (0, c.gz)(d())
                      );
                    case 9:
                      return (
                        (t.prev = 9),
                        (N = h + "&size=4&offset=".concat(n.length)),
                        (t.next = 13),
                        (0, c.RE)(s.Z.get, N)
                      );
                    case 13:
                      return (
                        (p = t.sent),
                        (x = p.data.result),
                        (t.next = 17),
                        (0, c.gz)(a(x.total))
                      );
                    case 17:
                      if (!(x.total > x.size)) {
                        t.next = 20;
                        break;
                      }
                      return ((t.next = 20), (0, c.gz)(u()));
                    case 20:
                      if (!(x && x.results.length > 0)) {
                        t.next = 28;
                        break;
                      }
                      return (
                        x.results.forEach(function (t) {
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
                        (0, c.gz)(r(x.results))
                      );
                    case 24:
                      return ((t.next = 26), (0, c.gz)(l(x.results)));
                    case 26:
                      t.next = 30;
                      break;
                    case 28:
                      return ((t.next = 30), (0, c.gz)(r([])));
                    case 30:
                      return ((t.next = 32), (0, c.gz)(d()));
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
                        (0, c.RE)(s.Z.post, x, a, u)
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
    64154: function (t, n, e) {
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
        N = "".concat(f.CT, "/notifications/unread?status=NORMAL");
      n.Z = (0, r.Jg)({
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
                        (0, s.RE)(a.Z.get, N)
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
//# sourceMappingURL=3097.4d3ed883.chunk.js.map
