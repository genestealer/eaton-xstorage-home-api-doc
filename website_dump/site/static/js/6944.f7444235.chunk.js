"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [6944],
  {
    27707: function (n, e, t) {
      var i,
        o,
        r,
        a,
        d,
        l,
        c,
        s,
        u = t(56824),
        p = t(30225),
        h = t(94404),
        f = t(14482),
        x = t(5189),
        m = t(76431),
        b = t(30588),
        v = t(48229),
        g = t(31228),
        w = (function (n) {
          (0, f.default)(t, n);
          var e = (0, x.default)(t);
          function t(n) {
            var i;
            return (
              (0, p.default)(this, t),
              ((i = e.call(this, n)).handleClickOutside = function (n) {
                var e = i.props,
                  t = e.open,
                  o = e.onClose,
                  r = e.fixed;
                if (t && !r) {
                  var a = i.slideRef.current;
                  (a && a.contains(n.target)) || o();
                }
              }),
              (i.slideRef = (0, m.createRef)()),
              i
            );
          }
          return (
            (0, h.default)(t, [
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
                    e = n.open,
                    t = n.title,
                    i = n.overlay,
                    o = n.children,
                    r = n.onClose,
                    a = n.type,
                    d = n.mobile;
                  return (0, g.jsxs)(k, {
                    children: [
                      (0, g.jsx)(Z, {
                        mobile: d,
                        open: e,
                        children: (0, g.jsx)(E, {
                          open: e,
                          mobile: d,
                          ref: this.slideRef,
                          children:
                            e &&
                            (0, g.jsxs)("div", {
                              children: [
                                (0, g.jsx)(F, {
                                  id: "Close_Button",
                                  mobile: d,
                                  onClick: r,
                                  children: (0, g.jsx)(v.Z, {
                                    children: "close",
                                  }),
                                }),
                                (0, g.jsx)(P, {
                                  children: (0, g.jsx)(C, {
                                    id: "SlidePanel_Title",
                                    mobile: d,
                                    children: t,
                                  }),
                                }),
                                (0, g.jsx)(y, {
                                  padding: "content-not-padded" !== a,
                                  children: o,
                                }),
                              ],
                            }),
                        }),
                      }),
                      i && e && (0, g.jsx)(j, {}),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(m.PureComponent);
      e.Z = w;
      var k = b.ZP.div(i || (i = (0, u.default)([""]))),
        j = b.ZP.div(
          o ||
            (o = (0, u.default)([
              "\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 1199;\n  background-color: rgba(0, 0, 0, 0.5);\n",
            ])),
        ),
        Z = b.ZP.div(
          r ||
            (r = (0, u.default)([
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
            var e = n.open,
              t = n.mobile;
            return (
              e &&
              !t &&
              "\n    width: 410px;\n    transition: all 0.5s ease-in-out;\n  "
            );
          },
          function (n) {
            var e = n.open,
              t = n.mobile;
            return (
              e &&
              t &&
              "\n    height: 410px;\n    transition: all 0.5s ease-in-out;\n  "
            );
          },
        ),
        E = b.ZP.div(
          a ||
            (a = (0, u.default)([
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
        P = b.ZP.div(
          d || (d = (0, u.default)(["\n  padding: 20px 20px 0;\n"])),
        ),
        y = b.ZP.div(
          l || (l = (0, u.default)(["\n  padding: 0 20px;\n\n  ", "\n"])),
          function (n) {
            return n.padding && "\n    padding: 20px;\n  ";
          },
        ),
        C = b.ZP.h2(
          c ||
            (c = (0, u.default)([
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
        F = b.ZP.div(
          s ||
            (s = (0, u.default)([
              "\n  position: absolute;\n  right: 20px;\n  top: 40px;\n  color: #007bc1;\n  cursor: pointer;\n\n  span {\n    font-size: 20px;\n    font-weight: bold;\n  }\n\n  ",
              "\n",
            ])),
          function (n) {
            return n.mobile && "\n    top: 20px;\n  ";
          },
        );
    },
    36944: function (n, e, t) {
      (t.r(e),
        t.d(e, {
          default: function () {
            return wn;
          },
        }));
      var i,
        o,
        r,
        a,
        d,
        l,
        c,
        s,
        u,
        p,
        h,
        f,
        x,
        m,
        b,
        v,
        g = t(56824),
        w = t(30225),
        k = t(94404),
        j = t(14482),
        Z = t(5189),
        E = t(76431),
        P = t(87121),
        y = t(2845),
        C = t(84628),
        F = t(83749),
        S = t(90012),
        D = t(30957),
        _ = t(98278),
        z = t.n(_),
        T = t(49318),
        H = (0, C.Jg)({
          path: function () {
            return ["scenes", "Schedule"];
          },
          connect: {
            props: [T.Z, ["isMobile", "translations"]],
            actions: [T.Z, ["checkSetupStatus"]],
          },
          actions: function () {
            return {
              changeSwitcher: function (n) {
                return { switcher: n };
              },
            };
          },
          reducers: function (n) {
            var e = n.actions;
            return {
              switcherSelected: [
                D.d0,
                z().string,
                (0, y.Z)({}, e.changeSwitcher, function (n, e) {
                  return e.switcher;
                }),
              ],
            };
          },
          start: (0, P.Z)().mark(function n() {
            var e;
            return (0, P.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (e = this.actionCreators.checkSetupStatus),
                        (0, S.log)("[XS-Schedule] Start Scene ", "yellow"),
                        (n.next = 4),
                        (0, F.gz)(e())
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
        R = t(30588),
        M = t(79895),
        L = t(21649),
        N = t.n(L),
        I = t(48229),
        U = t(94467),
        W = t.n(U),
        A = t(76948),
        B = t(27707),
        O = t(85071),
        V = function (n) {
          var e = Math.floor(n) + (n - Math.floor(n)) / 0.6;
          return parseFloat(Number(e).toFixed(2));
        },
        K = t(31228),
        Y = (function (n) {
          (0, j.default)(t, n);
          var e = (0, Z.default)(t);
          function t() {
            return ((0, w.default)(this, t), e.apply(this, arguments));
          }
          return (
            (0, k.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.start,
                    t = n.end,
                    i = n.name,
                    o = n.mobile,
                    r = n.full,
                    a = n.onClick,
                    d = n.eventIcon,
                    l = (function (n, e) {
                      var t = V(n),
                        i = 80 * t,
                        o = V(e) - t;
                      o < 0.35 &&
                        (t - Math.floor(t) > 0.65 &&
                          (i = 80 * (Math.floor(t) + 0.65)),
                        (o = 0.35));
                      var r = 80 * o;
                      return { top: i, height: (r -= 10) };
                    })(e, t),
                    c = l.top,
                    s = l.height;
                  return (0, K.jsxs)(J, {
                    top: c,
                    full: r,
                    children: [
                      (0, K.jsxs)(X, {
                        height: s || 0,
                        clickable: o,
                        onClick: o ? a : null,
                        children: [
                          (0, K.jsx)(G, { children: i }),
                          !o &&
                            !!a &&
                            (0, K.jsx)(Q, {
                              disabled: !a,
                              onClick: a,
                              small: s < 30,
                              children: (0, K.jsx)(I.Z, {
                                children: d || "edit",
                              }),
                            }),
                        ],
                      }),
                      (0, K.jsx)(q, {}),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(E.PureComponent),
        J = R.ZP.div(
          i ||
            (i = (0, g.default)([
              "\n  margin: 5px;\n  position: absolute;\n  width: calc(100% - 110px);\n  left: 100px;\n  \n  top: ",
              ";\n\n  @media screen and (max-width: 550px) {\n    width: calc(100% - 80px);\n    left: 70px;\n  }\n\n  ",
              "\n",
            ])),
          function (n) {
            var e = n.top;
            return "".concat(e, "px");
          },
          function (n) {
            return (
              n.full && "\n    width: calc(100% - 10px);\n    left: 0;\n  "
            );
          },
        ),
        X = R.ZP.div(
          o ||
            (o = (0, g.default)([
              "\n  width: 100%;\n  border: 2px solid #80BDE0;\n  border-radius: 6px;\n  position: relative;\n  background-color: #F9FBFD;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: ",
              ";\n\n  ",
              "\n",
            ])),
          function (n) {
            var e = n.height;
            return "".concat(e, "px");
          },
          function (n) {
            return n.clickable && "\n    cursor: pointer;\n  ";
          },
        ),
        q = R.ZP.div(
          r ||
            (r = (0, g.default)([
              "\n  background-color: #FFFFFF;\n  position: relative;\n  bottom: 8px;\n  border-radius: 6px;\n  height: 8px;\n  width: 80%;\n  left: 10%;\n  z-index: 1;\n  box-shadow: 0 0 20px 0 rgba(114,126,132,0.5);\n",
            ])),
        ),
        G = R.ZP.div(
          a ||
            (a = (0, g.default)([
              "\n  font-size: 12px;\n  font-weight: 600;\n  color: #268FCA;\n  line-height: 17px;\n",
            ])),
        ),
        Q = R.ZP.a(
          d ||
            (d = (0, g.default)([
              "\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  color: #007BC1;\n  cursor: pointer;\n\n  span{\n    font-size: 18px;\n  }\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (n) {
            return n.disabled && "\n    opacity: .6;\n  ";
          },
          function (n) {
            return (
              n.small &&
              "\n    top: -2px;\n\n    span{\n      font-size: 14px;\n    }\n  "
            );
          },
        ),
        $ = t(88885),
        nn = t(22247),
        en = (function (n) {
          (0, j.default)(t, n);
          var e = (0, Z.default)(t);
          function t(n) {
            var i;
            return (
              (0, w.default)(this, t),
              ((i = e.call(this, n)).state = {
                currentHourPosition: 0,
                scrolled: !1,
              }),
              (i.updateHourPosition = function () {
                var n = i.props.isMobile,
                  e = (function () {
                    var n = W()(new Date()).hour(),
                      e = W()(new Date()).minute(),
                      t = "".concat(n, ":").concat(e);
                    23 === n && e > 50 && (t = "23:50");
                    var i = (0, S.timeStringToFloat)(t);
                    return parseFloat(i.toFixed(2));
                  })(),
                  t = n ? 240 : 80,
                  o = i.scheduleRef.current,
                  r = o ? (o.scrollHeight * e) / 24 : 0;
                i.state.currentHourPosition !== r &&
                  (i.state.scrolled ||
                    setTimeout(function () {
                      var n = i.hourRef.current,
                        e = document.getElementById("schedule-container");
                      n && (0, S.scrollTo)(e, n.offsetTop - t, 1e3);
                    }, 200),
                  i.setState({ currentHourPosition: r, scrolled: !0 }));
              }),
              (i.scheduleRef = (0, E.createRef)()),
              (i.hourRef = (0, E.createRef)()),
              i
            );
          }
          return (
            (0, k.default)(t, [
              {
                key: "componentDidUpdate",
                value: function () {
                  this.updateHourPosition();
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this.updateHourPosition();
                },
              },
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.isMobile,
                    t = n.activeTab,
                    i = n.eventFormVisible,
                    o = n.currentEventId,
                    r = n.translations,
                    a = n.workdaysEvents,
                    d = n.weekendsEvents,
                    l = this.actions,
                    c = l.addNewEvent,
                    s = l.updateEvent,
                    u = l.hideEventForm,
                    p = this.state.currentHourPosition,
                    h = r.SCHEDULE_WORKDAYS,
                    f = r.SCHEDULE_WEEKENDS,
                    x = r.SCHEDULE_EVENT_ADD,
                    m = r.SCHEDULE_EVENT_EDIT,
                    b = function (n, t) {
                      return (
                        n &&
                        n.map(function (n) {
                          var i = n.id,
                            o = n.startTime,
                            a = n.endTime,
                            d = n.command,
                            l = n.parameters;
                          return (0, K.jsx)(
                            Y,
                            {
                              start: o / 100,
                              end: a / 100,
                              name: (0, A.lJ)(r, d, l),
                              mobile: e,
                              full: !e && t,
                              onClick: function () {
                                return s(i);
                              },
                              eventIcon: "edit",
                            },
                            i,
                          );
                        })
                      );
                    },
                    v = (0, K.jsxs)(ln, {
                      mobile: e,
                      children: [
                        N().times(24, function (n) {
                          return (0, K.jsx)(
                            nn.wY,
                            {
                              hour: n,
                              label: "true",
                              mobile: e,
                              onClick: function (n) {
                                return c(n, "WEEK_DAYS");
                              },
                            },
                            n,
                          );
                        }),
                        b(a, !1),
                      ],
                    }),
                    g = (0, K.jsxs)(cn, {
                      mobile: e,
                      children: [
                        N().times(24, function (n) {
                          return (0, K.jsx)(
                            nn.wY,
                            {
                              hour: n,
                              label: e ? "true" : "",
                              mobile: e,
                              onClick: function (n) {
                                return c(n, "WEEKENDS");
                              },
                            },
                            n,
                          );
                        }),
                        b(d, !0),
                      ],
                    }),
                    w = (0, K.jsxs)("div", {
                      children: [
                        !e && (0, K.jsxs)(an, { children: [v, g] }),
                        e &&
                          (0, K.jsxs)(dn, {
                            children: [
                              "workdays" === t && v,
                              "weekends" === t && g,
                            ],
                          }),
                      ],
                    });
                  return (0, K.jsxs)(on, {
                    children: [
                      !e &&
                        (0, K.jsxs)(sn, {
                          children: [
                            (0, K.jsx)(pn, {}),
                            (0, K.jsx)(un, { children: h }),
                            (0, K.jsx)(un, { children: f }),
                          ],
                        }),
                      (0, K.jsxs)(rn, {
                        mobile: e,
                        ref: this.scheduleRef,
                        id: "schedule-container",
                        children: [
                          w,
                          (0, K.jsx)(fn, { ref: this.hourRef, top: p }),
                        ],
                      }),
                      !e &&
                        (0, K.jsx)(B.Z, {
                          overlay: !0,
                          open: i,
                          onClose: u,
                          fixed: i,
                          title: o ? m : x,
                          children: (0, K.jsx)(O.Z, {
                            eventId: o,
                            onCancel: u,
                          }),
                        }),
                      (0, K.jsx)($.Z, {
                        permission: "ADD_NEW_EVENT",
                        children: (0, K.jsx)(hn, {
                          onClick: function () {
                            return c();
                          },
                          children: (0, K.jsx)(I.Z, { children: "add" }),
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(E.Component),
        tn = (0, M.Z)(en),
        on = R.ZP.div(l || (l = (0, g.default)([""]))),
        rn = R.ZP.div(
          c ||
            (c = (0, g.default)([
              "\n  position: relative;\n  overflow-y: scroll;\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (n) {
            return n.mobile && "\n    height: calc(100vh - 186px);\n  ";
          },
          function (n) {
            return !n.mobile && "\n    height: calc(100vh - 183px);\n  ";
          },
        ),
        an = R.ZP.div(
          s ||
            (s = (0, g.default)([
              "\n  width: 100%;\n  display: flex;\n  padding-left: 1px;\n  height: calc(100vh - 178px);\n  position: relative;\n",
            ])),
        ),
        dn = R.ZP.div(
          u ||
            (u = (0, g.default)([
              "\n  width: 100%;\n  padding-top: 18%;\n  position: relative;\n  padding-bottom: 56px;\n\n  @media screen and (min-width: 550px) and (max-width: 1024px) {\n    padding-top: 15%;\n  }\n",
            ])),
        ),
        ln = R.ZP.div(
          p ||
            (p = (0, g.default)([
              "\n  position: relative;\n  width: 100%;\n  display: table;\n\n  ",
              "\n\n  ",
              "    \n\n  > div:nth-child(1) > div:nth-child(1) div {\n    display: none;\n  }\n",
            ])),
          function (n) {
            return !n.mobile && "\n    width: calc(50% + 60px);\n  ";
          },
          function (n) {
            return n.mobile && "\n    background: #f7f7f9;\n  ";
          },
        ),
        cn = R.ZP.div(
          h ||
            (h = (0, g.default)([
              "\n  position: relative;\n  width: 100%;\n  display: table;\n\n  ",
              "\n",
            ])),
          function (n) {
            return (
              !n.mobile &&
              "\n    width: calc(50% - 60px);\n    background-color: rgba(114, 126, 132, 0.05);\n  "
            );
          },
        ),
        sn = R.ZP.div(
          f ||
            (f = (0, g.default)([
              "\n  box-shadow: 0 5px 20px 0 rgba(0, 123, 193, 0.05),\n    0 0 10px 0 rgba(114, 126, 132, 0.1);\n  display: flex;\n  position: relative;\n  z-index: 10;\n",
            ])),
        ),
        un = R.ZP.div(
          x ||
            (x = (0, g.default)([
              "\n  width: calc(50% - 50px);\n  color: #007bc1;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  line-height: 16px;\n  font-size: 16px;\n  border-left: 1px solid rgba(114, 126, 132, 0.15);\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:first-child {\n    border-left: none;\n  }\n",
            ])),
        ),
        pn = (0, R.ZP)(un)(m || (m = (0, g.default)(["\n  width: 100px;\n"]))),
        hn = (0, R.ZP)(nn.z)(
          b ||
            (b = (0, g.default)([
              "\n  position: fixed;\n  bottom: 50px;\n  right: 50px;\n  z-index: 10;\n\n  @media screen and (max-width: 1024px) {\n    bottom: 80px;\n    right: 30px;\n  }\n",
            ])),
        ),
        fn = R.ZP.div(
          v ||
            (v = (0, g.default)([
              "\n  position: absolute;\n  top: ",
              ";\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 5px 0 5px 15px;\n  border-color: transparent transparent transparent #007ac1;\n",
            ])),
          function (n) {
            var e = n.top;
            return "calc(".concat(e, "px)");
          },
        );
      var xn,
        mn,
        bn,
        vn =
          t.p +
          "static/media/background_blue_tablet.975df6017ffc57a2b699b8ebf301d8a0.svg",
        gn = (function (n) {
          (0, j.default)(t, n);
          var e = (0, Z.default)(t);
          function t() {
            return ((0, w.default)(this, t), e.apply(this, arguments));
          }
          return (
            (0, k.default)(t, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.isMobile,
                    t = n.switcherSelected,
                    i = n.translations,
                    o = this.actions.changeSwitcher,
                    r = i.SCHEDULE_TITLE;
                  return (0, K.jsxs)(kn, {
                    mobile: e,
                    children: [
                      (0, K.jsxs)(jn, {
                        mobile: e,
                        children: [
                          (0, K.jsx)(nn.V1, { mobile: e, children: r }),
                          e &&
                            (0, K.jsx)("div", {
                              children: (0, K.jsx)(nn.T5, {
                                items: (0, D.kL)(i),
                                selected: t,
                                onChange: function (n) {
                                  return o(n);
                                },
                              }),
                            }),
                        ],
                      }),
                      (0, K.jsx)(Zn, {
                        mobile: e,
                        children: (0, K.jsx)(tn, { activeTab: t }),
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(E.Component),
        wn = H(gn),
        kn = R.ZP.div(
          xn || (xn = (0, g.default)(["\n\n  ", "\n  \n"])),
          function (n) {
            return (
              n.mobile &&
              "\n    background: #f7f7f9;\n    height: calc(100vh - 56px);\n  "
            );
          },
        ),
        jn = R.ZP.div(
          mn ||
            (mn = (0, g.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n  }\n\n  ",
              "\n",
            ])),
          function (n) {
            return (
              n.mobile &&
              "\n    background-image: url(".concat(
                vn,
                ");\n    background-repeat: no-repeat;\n    background-size: auto;\n    background-position: top;\n    position: fixed;\n    z-index: 10;\n    min-height: 240px;\n\n    @media screen and (max-width: 375px) {\n      min-height: 224px;\n    }\n    @media screen and (min-width: 550px) and (max-width: 1024px) {\n      min-height: 290px;\n    }\n  ",
              )
            );
          },
        ),
        Zn = R.ZP.div(
          bn ||
            (bn = (0, g.default)(["\n  width: 100%;\n\n  ", "\n\n  ", "  \n"])),
          function (n) {
            return (
              !n.mobile &&
              "\n    height: calc(100vh - 134px);\n    background-color: #FFFFFF;\n  "
            );
          },
          function (n) {
            return (
              n.mobile &&
              "\n    padding-top: 130px;\n\n    @media screen and (max-width: 375px) {\n      padding-top: 145px;\n    }\n  "
            );
          },
        );
    },
  },
]);
//# sourceMappingURL=6944.f7444235.chunk.js.map
