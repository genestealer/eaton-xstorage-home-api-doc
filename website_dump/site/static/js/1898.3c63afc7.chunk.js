"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [1898],
  {
    81898: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return j;
        },
      });
      var r = e(56824),
        i = e(30225),
        o = e(94404),
        a = e(14482),
        c = e(5189),
        s = e(76431),
        u = e(87121),
        l = e(2845),
        d = e(84628),
        p = e(83749),
        f = e(98278),
        g = e.n(f),
        h = e(49745),
        v = e(13795),
        T = e(90012),
        x = e(17631),
        k = e(30375),
        b = e(49318),
        w = "".concat(v.CT, "/device/power"),
        N = (0, d.Jg)({
          path: function () {
            return ["scenes", "containers", "DeviceSettingsMenu"];
          },
          connect: {
            props: [
              b.Z,
              [
                "isMobile",
                "translations",
                "currentDevice",
                "configs",
                "userRole",
                "user",
              ],
              x.Z,
              ["trdpartynotifications"],
            ],
            actions: [b.Z, ["push"]],
          },
          actions: function () {
            return {
              changePowerState: function (t) {
                return { state: t };
              },
              setPowerState: function (t) {
                return { status: t };
              },
              response: function () {
                return !0;
              },
              error: function (t) {
                return { error: t };
              },
              reset: function () {
                return !1;
              },
            };
          },
          reducers: function (t) {
            var n,
              e,
              r,
              i = t.actions;
            return {
              loading: [
                !1,
                g().bool,
                ((n = {}),
                (0, l.Z)(n, i.changePowerState, function () {
                  return !0;
                }),
                (0, l.Z)(n, i.response, function () {
                  return !1;
                }),
                (0, l.Z)(n, i.error, function () {
                  return !1;
                }),
                n),
              ],
              error: [
                null,
                g().string,
                ((e = {}),
                (0, l.Z)(e, i.changePowerState, function () {
                  return null;
                }),
                (0, l.Z)(e, i.error, function (t, n) {
                  return n.error;
                }),
                (0, l.Z)(e, i.reset, function () {
                  return null;
                }),
                e),
              ],
              powerState: [
                !1,
                g().bool,
                ((r = {}),
                (0, l.Z)(r, i.setPowerState, function (t, n) {
                  return n.status;
                }),
                (0, l.Z)(r, i.reset, function () {
                  return !1;
                }),
                r),
              ],
            };
          },
          selectors: function (t) {
            var n = t.selectors;
            return {
              userCanPowerUnit: [
                function () {
                  return [n.userRole];
                },
                function (t) {
                  return (0, k.m)("UNIT_POWER_ON_OFF", t);
                },
                g().bool,
              ],
              userCanChangeOwner: [
                function () {
                  return [n.userRole];
                },
                function (t) {
                  return (0, k.m)("CHANGE_UNIT_OWNER", t);
                },
                g().bool,
              ],
            };
          },
          start: (0, u.Z)().mark(function t() {
            var n, e;
            return (0, u.Z)().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators.setPowerState),
                        (t.next = 3),
                        this.get("currentDevice")
                      );
                    case 3:
                      return (
                        (e = t.sent),
                        (t.next = 6),
                        (0, p.gz)(n(e.powerState || !1))
                      );
                    case 6:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
            );
          }),
          stop: (0, u.Z)().mark(function t() {
            var n;
            return (0, u.Z)().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators.reset),
                        (t.next = 3),
                        (0, p.gz)(n())
                      );
                    case 3:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
            );
          }),
          takeLatest: function (t) {
            var n = t.actions,
              e = t.workers;
            return (0, l.Z)({}, n.changePowerState, e.changePowerState);
          },
          workers: {
            changePowerState: (0, u.Z)().mark(function t(n) {
              var e, r, i, o, a, c, s, l, d, f;
              return (0, u.Z)().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e = n.payload.state),
                          (r = this.actionCreators),
                          (i = r.response),
                          (o = r.error),
                          (a = r.setPowerState),
                          (t.next = 4),
                          this.get("powerState")
                        );
                      case 4:
                        return ((c = t.sent), (t.next = 7), (0, p.gz)(a(!c)));
                      case 7:
                        return (
                          (t.prev = 7),
                          (t.next = 10),
                          this.get("currentDevice")
                        );
                      case 10:
                        return (
                          (s = t.sent),
                          (l = { parameters: { state: e } }),
                          (d = (0, T.generateUrl)(w, { id: s.id })),
                          (t.next = 15),
                          (0, p.RE)(h.Z.post, d, l)
                        );
                      case 15:
                        return ((t.next = 17), (0, p.gw)(5e3));
                      case 17:
                        return ((t.next = 19), (0, p.gz)(i()));
                      case 19:
                        return (
                          (t.next = 21),
                          (0, p.gz)(b.Z.actionCreators.fetchCurrentDeviceInfo())
                        );
                      case 21:
                        t.next = 33;
                        break;
                      case 23:
                        return (
                          (t.prev = 23),
                          (t.t0 = t.catch(7)),
                          console.log(t.t0),
                          (t.next = 28),
                          this.get("translations")
                        );
                      case 28:
                        return (
                          (f = t.sent),
                          (t.next = 31),
                          (0, p.gz)(o(f.UNITSETT_ERR_UNIT_POWER))
                        );
                      case 31:
                        return (
                          (t.next = 33),
                          (0, p.gz)(b.Z.actionCreators.fetchCurrentDeviceInfo())
                        );
                      case 33:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this,
                [[7, 23]],
              );
            }),
          },
        }),
        Z = e(30588),
        E = e(48229),
        P = e(87371);
      var _ =
        e.p + "static/media/network_wifi.9c84ee9f0eb9d2ea7714dc99549b99c8.svg";
      var I,
        S,
        y,
        O =
          e.p +
          "static/media/network_wifi_blue.6d89e11f2983d90da3ce1942b8833101.svg",
        m = e(93983),
        C = e(22247),
        U = e(31228),
        R = (function (t) {
          (0, a.default)(e, t);
          var n = (0, c.default)(e);
          function e() {
            var t;
            (0, i.default)(this, e);
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
              o[a] = arguments[a];
            return (
              ((t = n.call.apply(n, [this].concat(o))).state = {
                powerStateModal: !1,
              }),
              (t.navigate = function (n) {
                (0, t.actions.push)(n);
              }),
              t
            );
          }
          return (
            (0, o.default)(e, [
              {
                key: "render",
                value: function () {
                  var t = this,
                    n = this.props,
                    e = n.isMobile,
                    r = n.page,
                    i = n.translations,
                    o = n.currentDevice,
                    a = n.loading,
                    c = n.error,
                    s = n.user,
                    u = n.userCanPowerUnit,
                    l = n.trdpartynotifications,
                    d = n.powerState,
                    p = this.actions,
                    f = p.changePowerState,
                    g = p.reset,
                    h = this.state.powerStateModal,
                    v = i.UNITSETT_GENERAL,
                    T = i.UNITSETT_UPDATES,
                    x = i.UNITSETT_SUPPORT,
                    k = i.UNITSETT_UNIT_POWER,
                    b = i.UNITSETT_TRD_PARTY_INTEGRATIONS,
                    w = i.UNITSETT_MODEL_POWEROFF_TITLE,
                    N = i.UNITSETT_MODEL_POWEROFF_SUBTITLE,
                    Z = i.UNITSETT_MODEL_POWEROFF_CANCEL,
                    P = i.UNITSETT_MODEL_POWEROFF_SUBMIT,
                    _ = i.UNITSETT_NETWORK_SETTINGS,
                    I = i.UNITSETT_CONNECT_CLOUD,
                    S = i.UNITSETT_REINSTALL_UNIT,
                    y = [
                      {
                        id: "UnitPower",
                        key: "unit-power",
                        icon: (0, U.jsx)(E.Z, {
                          children: "power_settings_new",
                        }),
                        title: k,
                        link: !1,
                      },
                      {
                        id: "GeneralSettings",
                        key: "general-settings",
                        icon: (0, U.jsx)(E.Z, { children: "settings" }),
                        title: v,
                        link: !0,
                        onClick: function () {
                          return t.navigate("/settings/general/");
                        },
                      },
                      {
                        id: "NetworkSettings",
                        key: "network-settings",
                        icon: (0, U.jsx)(A, { mobile: e }),
                        title: _,
                        link: !0,
                        onClick: function () {
                          return t.navigate("/settings/network/");
                        },
                      },
                      {
                        id: "TrdPartyIntegrations",
                        key: "trd-party-integrations",
                        icon: (0, U.jsx)(E.Z, { children: "extension" }),
                        title: b,
                        link: !0,
                        notifications: l,
                        onClick: function () {
                          return t.navigate("/settings/trdpartyintegrations");
                        },
                      },
                      {
                        id: "ConnectCloud",
                        key: "connect-cloud",
                        icon: (0, U.jsx)(E.Z, { children: "language" }),
                        title: I,
                        link: !0,
                        onClick: function () {
                          return t.navigate("/settings/connect-cloud/");
                        },
                      },
                      {
                        id: "Updates",
                        key: "updates",
                        icon: (0, U.jsx)(E.Z, { children: "sync" }),
                        title: T,
                        link: !0,
                        onClick: function () {
                          return t.navigate("/settings/updates/");
                        },
                      },
                      {
                        id: "Support",
                        key: "support",
                        icon: (0, U.jsx)(E.Z, { children: "build" }),
                        title: x,
                        link: !0,
                        onClick: function () {
                          return t.navigate("/settings/support/");
                        },
                      },
                    ];
                  s &&
                    "tech" === s.profile &&
                    y.push({
                      id: "ReinstallUnit",
                      key: "reinstall-unit",
                      icon: (0, U.jsx)(E.Z, { children: "history" }),
                      title: S,
                      link: !0,
                      onClick: function () {
                        return t.navigate("/settings/reinstall-unit");
                      },
                    });
                  var O = function () {
                    (t.setState({ powerStateModal: !1 }), f(!o.powerState));
                  };
                  return (0, U.jsxs)(z, {
                    children: [
                      a && (0, U.jsx)(C.gb, {}),
                      c &&
                        (0, U.jsx)(C.P3, {
                          icon: (0, U.jsx)(E.Z, { children: "report" }),
                          title: "Error ocurred",
                          text: c,
                          label: "Please try again later",
                          mobile: e,
                          onClose: g,
                          closable: !0,
                        }),
                      (0, U.jsx)(m.Z, { items: y, page: r }),
                      (0, U.jsx)(D, {
                        id: "PowerSwitch_PowerState",
                        checked: d,
                        onClick: function () {
                          return d ? t.setState({ powerStateModal: !0 }) : O();
                        },
                        disabled: !u,
                        classes: { checked: "checked", track: "bar" },
                      }),
                      h &&
                        (0, U.jsx)(C.u_, {
                          open: h,
                          onClose: function () {
                            return t.setState({ powerStateModal: !1 });
                          },
                          children: (0, U.jsxs)("div", {
                            children: [
                              (0, U.jsx)(C.xB, { title: w }),
                              (0, U.jsx)(C.hz, {
                                padding: !0,
                                children: (0, U.jsx)(C.ZT, {
                                  children: (0, U.jsx)("b", { children: N }),
                                }),
                              }),
                              (0, U.jsxs)(C.Zf, {
                                children: [
                                  (0, U.jsx)(C.zx, {
                                    id: "Button_Cancel",
                                    buttonType: "primary-cancel",
                                    margin: "0 12px",
                                    buttonWidth: "156px",
                                    onClick: function () {
                                      return t.setState({
                                        powerStateModal: !1,
                                      });
                                    },
                                    children: Z,
                                  }),
                                  (0, U.jsx)(C.zx, {
                                    id: "Button_Submit",
                                    margin: "0 12px",
                                    buttonWidth: "156px",
                                    onClick: O,
                                    children: P,
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
        })(s.Component),
        j = N(R),
        z = Z.ZP.div(I || (I = (0, r.default)(["\n  position: relative;\n"]))),
        D = (0, Z.ZP)(P.Z)(
          S ||
            (S = (0, r.default)([
              "\n  &&&& {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 10;\n\n    .checked {\n      color: #00b2a9;\n    }\n    .checked + .bar {\n      background-color: #00b2a9;\n      opacity: 0.4;\n    }\n  }\n",
            ])),
        ),
        A = Z.ZP.div(
          y ||
            (y = (0, r.default)([
              "\n  ",
              "\n\n  ",
              "\n\n  height: 24px;\n  width: 24px;\n",
            ])),
          function (t) {
            return (
              t.mobile &&
              "\n    background: url(".concat(
                O,
                ") no-repeat center center;\n  ",
              )
            );
          },
          function (t) {
            return (
              !t.mobile &&
              '\n    background: url("'.concat(
                _,
                '") no-repeat center center;\n  ',
              )
            );
          },
        );
    },
    93983: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return b;
        },
      });
      var r,
        i,
        o,
        a,
        c = e(56824),
        s = e(30225),
        u = e(94404),
        l = e(14482),
        d = e(5189),
        p = e(76431),
        f = e(84628),
        g = e(49318),
        h = (0, f.Jg)({
          connect: { props: [g.Z, ["isMobile", "translations"]] },
        }),
        v = e(30588),
        T = e(22247),
        x = e(31228),
        k = (function (t) {
          (0, l.default)(e, t);
          var n = (0, d.default)(e);
          function e() {
            return ((0, s.default)(this, e), n.apply(this, arguments));
          }
          return (
            (0, u.default)(e, [
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    n = t.page,
                    e = t.isMobile,
                    r = t.items,
                    i = t.margin,
                    o = (0, x.jsxs)("div", {
                      children: [(0, x.jsx)(Z, {}), (0, x.jsx)(E, {})],
                    });
                  return (0, x.jsx)(w, {
                    margin: i,
                    children:
                      r &&
                      r.map(function (t) {
                        var r = t.key,
                          i = t.icon,
                          a = t.title,
                          c = t.onClick,
                          s = t.disabled,
                          u = t.link,
                          l = t.color,
                          d = t.hidden,
                          p = t.notifications,
                          f = t.id;
                        return d
                          ? ""
                          : (0, x.jsxs)(
                              N,
                              {
                                active: n === r,
                                mobile: e,
                                color: l ? l + "!important" : void 0,
                                link: u,
                                children: [
                                  (0, x.jsx)(T.Lr, {
                                    id: f,
                                    icon: i,
                                    mobile: e,
                                    title: a,
                                    onClick: c,
                                    link: u,
                                    disabled: s,
                                    notifications: p,
                                  }),
                                  n === r && o,
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
        })(p.PureComponent),
        b = h(k),
        w = v.ZP.div(
          r || (r = (0, c.default)(["\n  margin: ", ";\n"])),
          function (t) {
            return t.margin;
          },
        ),
        N = v.ZP.div(
          i ||
            (i = (0, c.default)([
              "\n  position: relative;\n  height: 56px;\n  width: 100%;\n  cursor: pointer;\n\n  span.material-icons {\n    color: ",
              ";\n  }\n  \n  ",
              "\n\n  ",
              "\n\n  ",
              "\n\n",
              "\n",
            ])),
          function (t) {
            return t.color || "#007BC1";
          },
          function (t) {
            return (
              !t.mobile &&
              "\n    * {\n      color: "
                .concat(
                  t.color || "#FFF!important",
                  ";\n    }\n\n    span.material-icons {\n      color: ",
                )
                .concat(
                  t.color || "#FFF",
                  ";\n    }\n\n    > div:nth-child(1) {\n      padding-left: 10px;\n      z-index: 3;\n      position: absolute;\n      width: 100%;    \n      box-shadow: inset 0 -1px 0 0 rgba(253,253,253,0.1), 0 0 5px 0 rgba(81,141,197,0.1);\n      transition: background-color 0.1s ease-in-out;\n    }\n  ",
                )
            );
          },
          function (t) {
            return (
              t.mobile &&
              "\n    * {\n      color: ".concat(
                t.color || "#424E54",
                ";\n    }\n\n    > div:before {\n      content: '';      \n      position: absolute;\n      width: calc(100% + 16px);\n      height: 56px;\n      box-shadow: inset 0 -1px 0 0 rgba(114,126,132,0.1);\n    }\n  ",
              )
            );
          },
          function (t) {
            return (
              t.active &&
              !t.mobile &&
              "\n    > div:nth-child(1) {\n      position: relative;\n      background-color: #007BC1;\n      background: linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);\n      box-shadow: inset 0 -1px 0 0 rgba(253,253,253,0.1), 0 0 5px 0 rgba(81,141,197,0.1);\n    }\n  "
            );
          },
          function (t) {
            return (
              !t.active &&
              !t.mobile &&
              t.link &&
              "\n  &:hover > div:nth-child(1) {\n    background-color: #0074b8;\n  }\n"
            );
          },
        ),
        Z = v.ZP.div(
          o ||
            (o = (0, c.default)([
              "\n  position: absolute;\n  height: 56px;\n  width: 100%;\n  background-color: #007bc1;\n  z-index: 2;\n  top: 0;\n  left: 0;\n",
            ])),
        ),
        E = v.ZP.div(
          a ||
            (a = (0, c.default)([
              "\n  position: absolute;\n  height: 10px;\n  width: calc(100% - 48px);\n  opacity: 0.4;\n  background-color: #0067c6;\n  box-shadow: 0 0 20px 0 #424e54;\n  bottom: 0;\n  right: 24px;\n  z-index: 1;\n",
            ])),
        );
    },
    30375: function (t, n, e) {
      e.d(n, {
        m: function () {
          return i;
        },
      });
      var r = JSON.parse(
          '{"ADD_NEW_EVENT":["customer","technician"],"EDIT_EVENT":["customer","technician"],"DELETE_EVENT":["customer","technician"],"EDIT_UNIT_SETTINGS":["customer","technician"],"EDIT_UNIT_DEFAULT_OPERATION_MODE":["customer","technician"],"UNIT_POWER_ON_OFF":["customer","technician"],"CHANGE_OPERATION_MODE":["customer","technician"],"CHANGE_UNIT_OWNER":["customer","technician"],"EDIT_BLOCK_STATUS":["technician"],"SUPPORT_UNIT_LOG":["customer","technician"],"VIEW_SUPPORT_MAINTENANCE_OPTIONS":["customer","technician"],"REBOOT_UNIT":["technician"],"SUPPORT_HTTPS_TUNNEL":["customer","technician"]}',
        ),
        i = function (t, n) {
          var e = r[t];
          return !!e && -1 !== e.indexOf(n);
        };
    },
    17631: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return T;
        },
      });
      var r = e(87121),
        i = e(2845),
        o = e(84628),
        a = e(98278),
        c = e.n(a),
        s = e(90012),
        u = e(83749),
        l = e(13795),
        d = e(49745),
        p = e(21649),
        f = e(49318),
        g = "".concat(l.CT, "/trdparty/app?status=pending"),
        h = "".concat(l.CT, "/trdparty/app?status=accepted"),
        v = "".concat(l.CT, "/trdparty/app/{invitationID}"),
        T = (0, o.Jg)({
          path: function () {
            return ["scenes", "TrdPartyIntegrations"];
          },
          connect: {
            props: [f.Z, ["translations", "isMobile"]],
            actions: [f.Z, ["push"]],
          },
          actions: function () {
            return {
              getTrdPartyNotifications: function () {
                return {};
              },
              setOpenInvitations: function (t) {
                return { invitations: t };
              },
              setActiveIntegrations: function (t) {
                return { integrations: t };
              },
              ignoreInvitation: function (t) {
                return { invitation: t };
              },
              acceptInvitation: function (t) {
                return { invitation: t };
              },
              revokeInvitation: function (t) {
                return { invitation: t };
              },
              reset: function () {
                return {};
              },
              getOpenTrdPartyNotifications: !0,
              getActiveTrdPartyNotifications: !0,
              pollOpenTrdPartyNotifications: !0,
            };
          },
          reducers: function (t) {
            var n,
              e,
              r = t.actions;
            return {
              openInvitations: [
                [],
                c().array,
                ((n = {}),
                (0, i.Z)(n, r.setOpenInvitations, function (t, n) {
                  return n.invitations;
                }),
                (0, i.Z)(n, r.reset, function (t, n) {
                  return null;
                }),
                n),
              ],
              activeIntegrations: [
                [],
                c().array,
                ((e = {}),
                (0, i.Z)(e, r.setActiveIntegrations, function (t, n) {
                  return n.integrations;
                }),
                (0, i.Z)(e, r.reset, function (t, n) {
                  return null;
                }),
                e),
              ],
            };
          },
          selectors: function (t) {
            var n = t.selectors;
            return {
              trdpartynotifications: [
                function () {
                  return [n.openInvitations];
                },
                function (t) {
                  return (function (t) {
                    return (0, p.size)(t);
                  })(t);
                },
                c().number,
              ],
            };
          },
          start: (0, r.Z)().mark(function t() {
            var n, e, i;
            return (0, r.Z)().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators),
                        (e = n.pollOpenTrdPartyNotifications),
                        (i = n.getActiveTrdPartyNotifications),
                        (t.next = 3),
                        (0, u.gz)(e())
                      );
                    case 3:
                      return ((t.next = 5), (0, u.gz)(i()));
                    case 5:
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
              r = t.workers;
            return (
              (n = {}),
              (0, i.Z)(n, e.ignoreInvitation, r.ignoreInvitation),
              (0, i.Z)(n, e.acceptInvitation, r.acceptInvitation),
              (0, i.Z)(
                n,
                e.getTrdPartyNotifications,
                r.getTrdPartyNotifications,
              ),
              (0, i.Z)(
                n,
                e.getOpenTrdPartyNotifications,
                r.getOpenTrdPartyNotifications,
              ),
              (0, i.Z)(
                n,
                e.pollOpenTrdPartyNotifications,
                r.pollOpenTrdPartyNotifications,
              ),
              (0, i.Z)(
                n,
                e.getActiveTrdPartyNotifications,
                r.getActiveTrdPartyNotifications,
              ),
              (0, i.Z)(n, e.revokeInvitation, r.revokeInvitation),
              n
            );
          },
          workers: {
            getTrdPartyNotifications: (0, r.Z)().mark(function t() {
              var n, e, i;
              return (0, r.Z)().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (e = n.getOpenTrdPartyNotifications),
                          (i = n.getActiveTrdPartyNotifications),
                          (t.next = 3),
                          (0, u.gz)(e())
                        );
                      case 3:
                        return ((t.next = 5), (0, u.gz)(i()));
                      case 5:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this,
              );
            }),
            getOpenTrdPartyNotifications: (0, r.Z)().mark(function t() {
              var n, e, i;
              return (0, r.Z)().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators.setOpenInvitations),
                          (t.prev = 1),
                          (t.next = 4),
                          (0, u.RE)(d.Z.get, g)
                        );
                      case 4:
                        if (!(e = t.sent).data) {
                          t.next = 11;
                          break;
                        }
                        return (
                          (i = e.data.result.results),
                          (t.next = 9),
                          (0, u.gz)(n(i))
                        );
                      case 9:
                        t.next = 13;
                        break;
                      case 11:
                        return ((t.next = 13), (0, u.gz)(n([])));
                      case 13:
                        t.next = 18;
                        break;
                      case 15:
                        ((t.prev = 15), (t.t0 = t.catch(1)), console.log(t.t0));
                      case 18:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this,
                [[1, 15]],
              );
            }),
            getActiveTrdPartyNotifications: (0, r.Z)().mark(function t() {
              var n, e, i;
              return (0, r.Z)().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators.setActiveIntegrations),
                          (t.prev = 1),
                          (t.next = 4),
                          (0, u.RE)(d.Z.get, h)
                        );
                      case 4:
                        if (!(e = t.sent).data) {
                          t.next = 11;
                          break;
                        }
                        return (
                          (i = e.data.result.results),
                          (t.next = 9),
                          (0, u.gz)(n(i))
                        );
                      case 9:
                        t.next = 13;
                        break;
                      case 11:
                        return ((t.next = 13), (0, u.gz)(n([])));
                      case 13:
                        t.next = 18;
                        break;
                      case 15:
                        ((t.prev = 15), (t.t0 = t.catch(1)), console.log(t.t0));
                      case 18:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this,
                [[1, 15]],
              );
            }),
            ignoreInvitation: (0, r.Z)().mark(function t(n) {
              var e, i, o, a;
              return (0, r.Z)().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e = this.actionCreators.getTrdPartyNotifications),
                          (i = n.payload.invitation),
                          (o = { status: "rejected" }),
                          (t.prev = 3),
                          (a = (0, s.generateUrl)(v, { invitationID: i })),
                          (t.next = 7),
                          (0, u.RE)(d.Z.patch, a, o)
                        );
                      case 7:
                        return ((t.next = 9), (0, u.gz)(e()));
                      case 9:
                        t.next = 14;
                        break;
                      case 11:
                        ((t.prev = 11), (t.t0 = t.catch(3)), console.log(t.t0));
                      case 14:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this,
                [[3, 11]],
              );
            }),
            acceptInvitation: (0, r.Z)().mark(function t(n) {
              var e, i, o, a;
              return (0, r.Z)().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e = this.actionCreators.getTrdPartyNotifications),
                          (i = n.payload.invitation),
                          (o = { status: "accepted" }),
                          (t.prev = 3),
                          (a = (0, s.generateUrl)(v, { invitationID: i })),
                          (t.next = 7),
                          (0, u.RE)(d.Z.patch, a, o)
                        );
                      case 7:
                        return ((t.next = 9), (0, u.gz)(e()));
                      case 9:
                        t.next = 14;
                        break;
                      case 11:
                        ((t.prev = 11), (t.t0 = t.catch(3)), console.log(t.t0));
                      case 14:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this,
                [[3, 11]],
              );
            }),
            revokeInvitation: (0, r.Z)().mark(function t(n) {
              var e, i, o, a;
              return (0, r.Z)().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e = this.actionCreators.getTrdPartyNotifications),
                          (i = n.payload.invitation),
                          (o = { status: "revoked" }),
                          (t.prev = 3),
                          (a = (0, s.generateUrl)(v, { invitationID: i })),
                          (t.next = 7),
                          (0, u.RE)(d.Z.patch, a, o)
                        );
                      case 7:
                        return ((t.next = 9), (0, u.gz)(e()));
                      case 9:
                        t.next = 14;
                        break;
                      case 11:
                        ((t.prev = 11), (t.t0 = t.catch(3)), console.log(t.t0));
                      case 14:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this,
                [[3, 11]],
              );
            }),
            pollOpenTrdPartyNotifications: (0, r.Z)().mark(function (t) {
              var n, e, i, o;
              return (0, r.Z)().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (e = n.getOpenTrdPartyNotifications),
                          (i = n.pollOpenTrdPartyNotifications),
                          (t.prev = 1),
                          (t.next = 4),
                          (0, u.gz)(e())
                        );
                      case 4:
                        return ((o = l.bd), (t.next = 7), (0, u.gw)(o));
                      case 7:
                        return ((t.next = 9), (0, u.gz)(i()));
                      case 9:
                        t.next = 14;
                        break;
                      case 11:
                        ((t.prev = 11), (t.t0 = t.catch(1)), console.log(t.t0));
                      case 14:
                      case "end":
                        return t.stop();
                    }
                },
                i,
                this,
                [[1, 11]],
              );
            }),
          },
        });
    },
  },
]);
//# sourceMappingURL=1898.3c63afc7.chunk.js.map
