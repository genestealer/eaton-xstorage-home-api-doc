"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [8238],
  {
    88238: function (t, n, i) {
      (i.r(n),
        i.d(n, {
          default: function () {
            return b;
          },
        }));
      var o,
        a = i(56824),
        e = i(30225),
        s = i(94404),
        r = i(14482),
        c = i(5189),
        f = i(76431),
        u = i(87121),
        d = i(84628),
        l = i(83749),
        h = i(49318),
        p = i(43064),
        g = i(64154),
        v = (0, d.Jg)({
          path: function () {
            return ["scenes", "Notifications"];
          },
          connect: {
            props: [
              h.Z,
              ["isMobile", "translations"],
              p.Z,
              [
                "notificationsList",
                "notificationsTotal",
                "unreadNotifications",
                "loadingButton",
                "showLoadMoreInfo",
              ],
            ],
            actions: [
              h.Z,
              ["push"],
              p.Z,
              ["getNotifications"],
              g.Z,
              ["getUnreadNotifications"],
            ],
          },
          start: (0, u.Z)().mark(function t() {
            var n, i, o;
            return (0, u.Z)().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators),
                        (i = n.getNotifications),
                        (o = n.getUnreadNotifications),
                        (t.next = 3),
                        (0, l.gz)(i())
                      );
                    case 3:
                      return ((t.next = 5), (0, l.gz)(o()));
                    case 5:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
            );
          }),
        }),
        x = i(30588),
        N = i(93097),
        w = i(22247),
        Z = i(31228),
        k = (function (t) {
          (0, r.default)(i, t);
          var n = (0, c.default)(i);
          function i() {
            var t;
            (0, e.default)(this, i);
            for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
              a[s] = arguments[s];
            return (
              ((t = n.call.apply(n, [this].concat(a))).navigate = function (n) {
                (0, t.actions.push)(n);
              }),
              t
            );
          }
          return (
            (0, s.default)(i, [
              {
                key: "render",
                value: function () {
                  var t = this,
                    n = this.props,
                    i = n.translations,
                    o = n.isMobile,
                    a = n.notificationsList,
                    e = n.notificationsTotal,
                    s = n.unreadNotifications,
                    r = n.loadingButton,
                    c = n.showLoadMoreInfo,
                    f = this.actions.getNotifications,
                    u = i.NOTIF_TITLE;
                  return (0, Z.jsxs)(L, {
                    children: [
                      (0, Z.jsx)(w.xE, {
                        id: "BackButton",
                        onClick: function () {
                          return t.navigate("/more/");
                        },
                      }),
                      (0, Z.jsx)(w.V1, { mobile: o, blue: !0, children: u }),
                      (0, Z.jsx)(N.Z, {
                        notifications: a,
                        notificationsTotal: e,
                        unreadNotifications: s,
                        loadingButton: r,
                        showLoadMoreInfo: c,
                        getNotifications: f,
                      }),
                    ],
                  });
                },
              },
            ]),
            i
          );
        })(f.Component),
        b = v(k),
        L = x.ZP.div(
          o ||
            (o = (0, a.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n  height: 100%;\n  position: relative;\n  padding-bottom: 56px;\n",
            ])),
        );
    },
  },
]);
//# sourceMappingURL=8238.4320fb78.chunk.js.map
