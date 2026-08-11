"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [4134],
  {
    14134: function (n, t, i) {
      i.r(t);
      var e = i(30225),
        o = i(94404),
        r = i(14482),
        a = i(5189),
        l = i(76431),
        d = i(43064),
        s = i(27707),
        u = i(93097),
        f = i(31228),
        c = (function (n) {
          (0, r.default)(i, n);
          var t = (0, a.default)(i);
          function i() {
            return ((0, e.default)(this, i), t.apply(this, arguments));
          }
          return (
            (0, o.default)(i, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    t = n.notificationsVisible,
                    i = n.translations,
                    e = n.notificationsList,
                    o = n.loadingButton,
                    r = n.unreadNotifications,
                    a = n.notificationsTotal,
                    l = n.showLoadMoreInfo,
                    d = this.actions,
                    c = d.hideNotifications,
                    p = d.getNotifications,
                    h = i.NOTIF_TITLE;
                  return (0, f.jsx)(s.Z, {
                    open: t,
                    onClose: c,
                    title: h,
                    children: (0, f.jsx)(u.Z, {
                      notifications: e,
                      notificationsTotal: a,
                      unreadNotifications: r,
                      loadingButton: o,
                      showLoadMoreInfo: l,
                      getNotifications: p,
                    }),
                  });
                },
              },
            ]),
            i
          );
        })(l.PureComponent);
      t.default = (0, d.Z)(c);
    },
    27707: function (n, t, i) {
      var e,
        o,
        r,
        a,
        l,
        d,
        s,
        u,
        f = i(56824),
        c = i(30225),
        p = i(94404),
        h = i(14482),
        x = i(5189),
        m = i(76431),
        g = i(30588),
        b = i(48229),
        v = i(31228),
        k = (function (n) {
          (0, h.default)(i, n);
          var t = (0, x.default)(i);
          function i(n) {
            var e;
            return (
              (0, c.default)(this, i),
              ((e = t.call(this, n)).handleClickOutside = function (n) {
                var t = e.props,
                  i = t.open,
                  o = t.onClose,
                  r = t.fixed;
                if (i && !r) {
                  var a = e.slideRef.current;
                  (a && a.contains(n.target)) || o();
                }
              }),
              (e.slideRef = (0, m.createRef)()),
              e
            );
          }
          return (
            (0, p.default)(i, [
              {
                key: "componentDidMount",
                value: function () {
                  document.addEventListener(
                    "click",
                    this.handleClickOutside,
                    !0,
                  );
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  document.removeEventListener(
                    "click",
                    this.handleClickOutside,
                    !0,
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    t = n.open,
                    i = n.title,
                    e = n.overlay,
                    o = n.children,
                    r = n.onClose,
                    a = n.type,
                    l = n.mobile;
                  return (0, v.jsxs)(w, {
                    children: [
                      (0, v.jsx)(j, {
                        mobile: l,
                        open: t,
                        children: (0, v.jsx)(C, {
                          open: t,
                          mobile: l,
                          ref: this.slideRef,
                          children:
                            t &&
                            (0, v.jsxs)("div", {
                              children: [
                                (0, v.jsx)(L, {
                                  id: "Close_Button",
                                  mobile: l,
                                  onClick: r,
                                  children: (0, v.jsx)(b.Z, {
                                    children: "close",
                                  }),
                                }),
                                (0, v.jsx)(P, {
                                  children: (0, v.jsx)(_, {
                                    id: "SlidePanel_Title",
                                    mobile: l,
                                    children: i,
                                  }),
                                }),
                                (0, v.jsx)(y, {
                                  padding: "content-not-padded" !== a,
                                  children: o,
                                }),
                              ],
                            }),
                        }),
                      }),
                      e && t && (0, v.jsx)(Z, {}),
                    ],
                  });
                },
              },
            ]),
            i
          );
        })(m.PureComponent);
      t.Z = k;
      var w = g.ZP.div(e || (e = (0, f.default)([""]))),
        Z = g.ZP.div(
          o ||
            (o = (0, f.default)([
              "\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 1199;\n  background-color: rgba(0, 0, 0, 0.5);\n",
            ])),
        ),
        j = g.ZP.div(
          r ||
            (r = (0, f.default)([
              "\n  position: fixed;\n  z-index: 1200;\n  overflow: hidden;\n\n  ",
              "\n\n  ",
              "\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (n) {
            return (
              !n.mobile &&
              "\n    right: 0;\n    top: 0;\n    width: 0;\n    height: 100%;\n  "
            );
          },
          function (n) {
            return (
              n.mobile &&
              "\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 0;\n  "
            );
          },
          function (n) {
            var t = n.open,
              i = n.mobile;
            return (
              t &&
              !i &&
              "\n    width: 410px;\n    transition: all 0.5s ease-in-out;\n  "
            );
          },
          function (n) {
            var t = n.open,
              i = n.mobile;
            return (
              t &&
              i &&
              "\n    height: 410px;\n    transition: all 0.5s ease-in-out;\n  "
            );
          },
        ),
        C = g.ZP.div(
          a ||
            (a = (0, f.default)([
              "\n  position: absolute;\n  background: #FDFDFD;\n  box-shadow: 0 0 16px 0 rgba(66,78,84,0.1);\n\n  ",
              "\n\n  ",
              "\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (n) {
            return (
              !n.mobile &&
              "\n    right: -398px;\n    width: 398px;\n    height: 100%;\n  "
            );
          },
          function (n) {
            return (
              n.mobile &&
              "\n    bottom: -180px;\n    right: 0;\n    width: 100%;\n    height: 180px;\n    border-radius: 6px 6px 0 0;\n  "
            );
          },
          function (n) {
            return (
              !n.mobile &&
              "\n    transition: all 0.5s;\n    transform: translate3d(-398px, 0, 0);\n    animation-timing-function: 1s ease-in-out;\n  "
            );
          },
          function (n) {
            return (
              n.mobile &&
              "\n    transition: all 0.5s;\n    transform: translate3d(0, -180px, 0);\n    animation-timing-function: 1s ease-in-out;\n  "
            );
          },
        ),
        P = g.ZP.div(
          l || (l = (0, f.default)(["\n  padding: 20px 20px 0;\n"])),
        ),
        y = g.ZP.div(
          d || (d = (0, f.default)(["\n  padding: 0 20px;\n\n  ", "\n"])),
          function (n) {
            return n.padding && "\n    padding: 20px;\n  ";
          },
        ),
        _ = g.ZP.h2(
          s ||
            (s = (0, f.default)([
              "\n  color: #007bc1;\n  font-family: Eaton;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  line-height: 24px;\n  margin-bottom: 15px;\n\n  ",
              "\n",
            ])),
          function (n) {
            return (
              n.mobile &&
              '\n    color: #333F48;\n    font-family: "Open Sans";\n    font-size: 16px;\n    font-weight: 800;\n    letter-spacing: 0.5px;\n    line-height: 16px;\n    margin-top: 0px;\n  '
            );
          },
        ),
        L = g.ZP.div(
          u ||
            (u = (0, f.default)([
              "\n  position: absolute;\n  right: 20px;\n  top: 40px;\n  color: #007bc1;\n  cursor: pointer;\n\n  span {\n    font-size: 20px;\n    font-weight: bold;\n  }\n\n  ",
              "\n",
            ])),
          function (n) {
            return n.mobile && "\n    top: 20px;\n  ";
          },
        );
    },
  },
]);
//# sourceMappingURL=4134.75e24c04.chunk.js.map
