(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [1532],
  {
    16019: function (e, n, i) {
      "use strict";
      i.d(n, {
        Z: function () {
          return b;
        },
      });
      var r,
        a,
        t = i(56824),
        o = i(6892),
        l = i(30225),
        s = i(94404),
        d = i(14482),
        c = i(5189),
        u = i(76431),
        h = i(84628),
        E = i(49318),
        m = (0, h.Jg)({
          path: function () {
            return ["scenes", "containers", "OperationModeParams"];
          },
          connect: {
            props: [
              E.Z,
              [
                "translations",
                "isMobile",
                "countryDevice",
                "batteryReadyMode",
                "isGermany",
              ],
            ],
          },
        }),
        v = i(30588),
        f = i(76948),
        x = i(69400),
        T = i.n(x),
        _ = {
          isGermany: ["SET_CHARGE", "SET_VARIABLE_GRID_INJECTION"],
          isSettings: [
            "SET_BASIC_MODE",
            "SET_MAXIMIZE_AUTO_CONSUMPTION",
            "SET_VARIABLE_GRID_INJECTION",
            "SET_FREQUENCY_REGULATION",
            "SET_PEAK_SHAVING",
          ],
          batteryReadyMode: ["SET_BASIC_MODE"],
        },
        p = i(72768),
        g = i(22247),
        N = i(31228),
        A = (function (e) {
          (0, d.default)(i, e);
          var n = (0, c.default)(i);
          function i() {
            return ((0, l.default)(this, i), n.apply(this, arguments));
          }
          return (
            (0, s.default)(i, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    n = e.form,
                    i = e.change,
                    r = e.translations,
                    a = e.dirty,
                    t = e.label,
                    l = e.defaultMode,
                    s = e.settings,
                    d = e.disabled,
                    c = e.full,
                    u = e.isMobile,
                    h = e.isGermany,
                    E = (function (e, n) {
                      var i = Object.keys(f.wS).map(function (n) {
                          return { val: n, label: (0, f.lJ)(e, n) };
                        }),
                        r = function () {
                          if (n[a]) {
                            var e = T()(_[a]);
                            i = i.filter(function (n) {
                              return -1 !== e.indexOf(n.val);
                            });
                          }
                        };
                      for (var a in n) r();
                      return i;
                    })(r, {
                      isGermany: h,
                      isSettings: s,
                      batteryReadyMode: e.batteryReadyMode,
                    });
                  l &&
                    Object.keys(l).length > 0 &&
                    (E = [
                      {
                        val: "DEFAULT",
                        label: (0, N.jsxs)("span", {
                          children: [
                            "Default",
                            " ",
                            (0, N.jsxs)(R, {
                              children: ["(", (0, f.lJ)(r, l.command), ")"],
                            }),
                          ],
                        }),
                      },
                    ].concat((0, o.Z)(E)));
                  var m = n || {},
                    v = m.command,
                    x = m.soc,
                    A = m.powerAllocation,
                    b = m.power,
                    j = m.maximumPower,
                    C = m.optimalSoc,
                    w = m.maxHousePeakConsumption,
                    I = r.OPERATION_MODE_DEFAULT_LABEL,
                    M = r.OPERATION_MODE_PARAM_MAXHOUSEPEAKCONSUMPTION,
                    O = r.OPERATION_MODE_PARAM_OPTIMALSOC,
                    L = r.OPERATION_MODE_PARAM_POWERALLOCATION,
                    P = r.OPERATION_MODE_PARAM_MAXIMUMPOWER,
                    y = r.OPERATION_MODE_PARAM_SOC,
                    k = r.OPERATION_MODE_PARAM_POWER,
                    U = v && v.value;
                  "DEFAULT" === U && l && (U = l.command);
                  var B = f.wS[U] || [];
                  return (0, N.jsxs)(S, {
                    children: [
                      (0, N.jsx)(g.l0.Row, {
                        children: (0, N.jsx)(g.OC, {
                          id: "OperationMode",
                          label: t || I,
                          options: E,
                          selected: v ? v.value : null,
                          onChange: function (e) {
                            (("SET_CHARGE" !== e && "SET_DISCHARGE" !== e) ||
                              (i({ power: 5 }), i({ soc: 0 })),
                              i({ command: e }));
                          },
                          disabled: d || (h && s),
                          containerMargin: !u && c && "0 8px",
                          full: c,
                        }),
                      }),
                      -1 !== B.indexOf("power") &&
                        (0, N.jsx)(g.l0.Row, {
                          full: !0,
                          children: (0, N.jsx)(g.An, {
                            id: "Power",
                            label: k,
                            value: "".concat(b.value, "%"),
                            disabled: d || "DEFAULT" === v.value,
                            sliderMin: 5,
                            sliderMax: 100,
                            sliderValue: b.value,
                            sliderStep: 5,
                            onChange: function (e) {
                              return i({ power: e });
                            },
                          }),
                        }),
                      -1 !== B.indexOf("powerAllocation") &&
                        (0, N.jsx)(g.l0.Row, {
                          full: c,
                          children: (0, N.jsx)(g.An, {
                            id: "PowerAllocation",
                            label: L,
                            disabled: d || (v && "DEFAULT" === v.value),
                            value: "".concat(A.value, "%"),
                            sliderMin: 0,
                            sliderMax: 100,
                            sliderValue: A.value,
                            onChange: function (e) {
                              return i({ powerAllocation: e });
                            },
                          }),
                        }),
                      !h &&
                        -1 !== B.indexOf("maximumPower") &&
                        (0, N.jsx)(g.l0.Row, {
                          full: c,
                          children: (0, N.jsx)(g.An, {
                            id: "MaxPowerAllocation",
                            label: P,
                            value: "".concat(j.value, "W"),
                            disabled: d || (v && "DEFAULT" === v.value),
                            sliderMin: -1e3,
                            sliderMax: 3e4,
                            sliderValue: j.value,
                            onChange: function (e) {
                              return i({ maximumPower: e });
                            },
                          }),
                        }),
                      -1 !== B.indexOf("soc") &&
                        (0, N.jsx)(g.l0.Row, {
                          full: c,
                          children: (0, N.jsx)(g.An, {
                            id: "StateOfCharge",
                            label: y,
                            value: "".concat(x.value, "%"),
                            disabled: d || (v && "DEFAULT" === v.value),
                            hideBottomScale: !0,
                            sliderMin: 0,
                            sliderMax: 100,
                            sliderStep: 5,
                            sliderValue: x.value,
                            onChange: function (e) {
                              return i({ soc: e });
                            },
                          }),
                        }),
                      -1 !== B.indexOf("optimalSoc") &&
                        (0, N.jsx)(g.l0.Row, {
                          full: c,
                          children: (0, N.jsx)(g.An, {
                            id: "OptimalStateOfCharge",
                            label: O,
                            value: "".concat(C.value, "%"),
                            hideBottomScale: !0,
                            disabled: d || (v && "DEFAULT" === v.value),
                            sliderMin: 0,
                            sliderMax: 100,
                            sliderValue: C.value,
                            onChange: function (e) {
                              return i({ optimalSoc: e });
                            },
                          }),
                        }),
                      -1 !== B.indexOf("maxHousePeakConsumption") &&
                        (0, N.jsxs)(g.l0.Row, {
                          full: c,
                          children: [
                            (0, N.jsx)(g.oH, {
                              id: "MaxHousePeakConsumption",
                              label: M,
                              type: "number",
                              value: w.value,
                              error: a && !w.valid,
                              disabled: d || (v && "DEFAULT" === v.value),
                              onChange: function (e) {
                                var n = e.target;
                                return i({ maxHousePeakConsumption: n.value });
                              },
                            }),
                            (0, N.jsx)(p.Z, {
                              id: "MaxHousePeakConsumption",
                              showError: a && !w.valid,
                              errorMessage: w.message,
                            }),
                          ],
                        }),
                    ],
                  });
                },
              },
            ]),
            i
          );
        })(u.Component),
        b = m(A),
        S = v.ZP.div(r || (r = (0, t.default)([""]))),
        R = v.ZP.span(
          a ||
            (a = (0, t.default)([
              "\n  color: rgba(114, 126, 132, 0.5);\n  font-size: 12px;\n",
            ])),
        );
    },
    36082: function (e, n, i) {
      "use strict";
      i.d(n, {
        Z: function () {
          return b;
        },
      });
      var r,
        a,
        t,
        o = i(56824),
        l = i(30225),
        s = i(94404),
        d = i(14482),
        c = i(5189),
        u = i(76431),
        h = i(87121),
        E = i(2845),
        m = i(84628),
        v = i(83749),
        f = i(98278),
        x = i.n(f),
        T = i(49318),
        _ = (0, m.Jg)({
          path: function () {
            return ["scenes", "containers", "PageAdaptable"];
          },
          connect: {
            props: [T.Z, ["isMobile", "translations"]],
            actions: [T.Z, ["push"]],
          },
          actions: function () {
            return {
              showConfirmationModal: function (e) {
                return { location: e };
              },
              hideConfirmationModal: function () {
                return !0;
              },
              handleConfirmNavigationClick: function () {
                return !0;
              },
            };
          },
          reducers: function (e) {
            var n,
              i = e.actions;
            return {
              confirmationModal: [
                !1,
                x().bool,
                ((n = {}),
                (0, E.Z)(n, i.showConfirmationModal, function () {
                  return !0;
                }),
                (0, E.Z)(n, i.hideConfirmationModal, function () {
                  return !1;
                }),
                n),
              ],
              nextLocation: [
                {},
                x().object,
                (0, E.Z)({}, i.showConfirmationModal, function (e, n) {
                  return n.location;
                }),
              ],
            };
          },
          stop: (0, h.Z)().mark(function e() {
            var n;
            return (0, h.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators.hideConfirmationModal),
                        (e.next = 3),
                        (0, v.gz)(n())
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
            );
          }),
          takeLatest: function (e) {
            var n = e.actions,
              i = e.workers;
            return (0, E.Z)(
              {},
              n.handleConfirmNavigationClick,
              i.handleConfirmNavigationClick,
            );
          },
          workers: {
            handleConfirmNavigationClick: (0, h.Z)().mark(function e() {
              var n, i, r, a;
              return (0, h.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (i = n.hideConfirmationModal),
                          (r = n.push),
                          (e.next = 3),
                          this.get("nextLocation")
                        );
                      case 3:
                        return ((a = e.sent), (e.next = 6), (0, v.gz)(i()));
                      case 6:
                        return ((e.next = 8), (0, v.gz)(r(a)));
                      case 8:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
          },
        }),
        p = i(30588),
        g = i(22247),
        N = i(31228),
        A = (function (e) {
          (0, d.default)(i, e);
          var n = (0, c.default)(i);
          function i() {
            var e;
            (0, l.default)(this, i);
            for (var r = arguments.length, a = new Array(r), t = 0; t < r; t++)
              a[t] = arguments[t];
            return (
              ((e = n.call.apply(n, [this].concat(a))).first = !0),
              (e.handleBlockedNavigation = function (n) {
                var i = e.props,
                  r = i.isForm,
                  a = i.isDirty,
                  t = e.actions.showConfirmationModal;
                return !(r && a && e.first) || ((e.first = !1), t(n), !1);
              }),
              e
            );
          }
          return (
            (0, s.default)(i, [
              {
                key: "componentDidMount",
                value: function () {
                  this.first = !0;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    n = this.props,
                    i = n.isMobile,
                    r = n.loading,
                    a = n.children,
                    t = n.menu,
                    o = n.onBack,
                    l = n.title,
                    s = n.translations,
                    d = n.confirmationModal,
                    c = n.isForm,
                    u = n.isDirty,
                    h = this.actions,
                    E = h.showConfirmationModal,
                    m = h.hideConfirmationModal,
                    v = h.handleConfirmNavigationClick,
                    f = s.GENERAL_CANCEL,
                    x = s.GENERAL_CONTINUE,
                    T = s.BACK_BUTTON_MODAL_TEXT,
                    _ = s.BACK_BUTTON_MODAL_TITLE;
                  return (0, N.jsxs)(S, {
                    children: [
                      !!r && (0, N.jsx)(g.gb, {}),
                      i &&
                        (0, N.jsxs)("div", {
                          children: [
                            (0, N.jsx)(g.xE, {
                              id: "PageAdaptable_BackButton",
                              onClick: c && u ? E : o,
                            }),
                            a,
                          ],
                        }),
                      !i &&
                        (0, N.jsxs)("div", {
                          children: [
                            (0, N.jsx)(g.V1, { mobile: i, children: l }),
                            (0, N.jsx)(R, { children: t }),
                            (0, N.jsx)(j, { children: a }),
                          ],
                        }),
                      (0, N.jsx)(g.u_, {
                        size: "small",
                        open: d,
                        children: (0, N.jsxs)("div", {
                          children: [
                            (0, N.jsx)(g.xB, { title: _ }),
                            (0, N.jsx)(g.hz, {
                              padding: !0,
                              size: "small",
                              mobile: i,
                              children: (0, N.jsx)(g.ZT, { children: T }),
                            }),
                            (0, N.jsxs)(g.Zf, {
                              children: [
                                (0, N.jsx)(g.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    ((e.first = !0), m());
                                  },
                                  children: f,
                                }),
                                (0, N.jsx)(g.zx, {
                                  id: "Button_Continue",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function (e) {
                                    i ? (m(), o(e)) : v(e);
                                  },
                                  children: x,
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
            i
          );
        })(u.Component),
        b = _(A),
        S = p.ZP.div(
          r ||
            (r = (0, o.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n    padding-right: 0px;\n  }\n",
            ])),
        ),
        R = p.ZP.div(
          a ||
            (a = (0, o.default)([
              "\n  width: 40%;\n  padding-right: 5%;\n  float: left;\n  position: relative;\n  color: #fff;\n  margin-top: 25px;\n",
            ])),
        ),
        j = p.ZP.div(
          t ||
            (t = (0, o.default)([
              "\n  width: 60%;\n  float: left;\n  padding-right: 0;\n",
            ])),
        );
    },
    1532: function (e, n, i) {
      "use strict";
      (i.r(n),
        i.d(n, {
          DeviceGeneralSettings: function () {
            return P;
          },
        }));
      var r,
        a,
        t,
        o,
        l,
        s,
        d,
        c,
        u,
        h = i(56824),
        E = i(30225),
        m = i(94404),
        v = i(14482),
        f = i(5189),
        x = i(76431),
        T = i(20054),
        _ = i(30588),
        p = i(48229),
        g = i(41068),
        N = i(87371),
        A = i(40915),
        b = i(70077),
        S = i.n(b),
        R = i(81898),
        j = i(36082),
        C = i(93874),
        w = i(16019),
        I = i(72768),
        M = i(89020),
        O = i(22247),
        L = i(31228),
        P = (function (e) {
          (0, v.default)(i, e);
          var n = (0, f.default)(i);
          function i() {
            var e;
            (0, E.default)(this, i);
            for (var r = arguments.length, a = new Array(r), t = 0; t < r; t++)
              a[t] = arguments[t];
            return (
              ((e = n.call.apply(n, [this].concat(a))).state = { more: !1 }),
              (e.navigate = function (n) {
                (0, e.actions.push)(n);
              }),
              (e.hideBar = function () {
                var n = e.props.isMobile,
                  i = e.actions.setFixNavbar;
                n && window.scrollY > 50 ? i(!0) : i(!1);
              }),
              e
            );
          }
          return (
            (0, m.default)(i, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.isMobile &&
                    window.addEventListener("scroll", this.hideBar, !1);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.isMobile &&
                    window.removeEventListener("scroll", this.hideBar);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    n = this.props,
                    i = n.isMobile,
                    r = n.translations,
                    a = n.deviceInfo,
                    t = n.loading,
                    o = n.form,
                    l = n.dirty,
                    s = n.error,
                    d = n.successMessage,
                    c = n.userIsTechnician,
                    u = n.more,
                    h = n.currentDevice,
                    E = n.fixNavbar,
                    m = n.batteryReadyMode,
                    v = this.actions,
                    f = v.change,
                    x = v.submit,
                    T = v.toggleMore,
                    _ = v.revertChanges,
                    N = r.UNITSETT_TITLE,
                    A = r.UNITSETT_GENERAL_TITLE,
                    b = r.UNITSETT_GENERAL_CANCEL,
                    P = r.UNITSETT_GENERAL_SAVE,
                    V = r.UNITSETT_GENERAL_SHOW_MORE,
                    z = r.UNITSETT_GENERAL_SHOW_LESS,
                    W = r.UNITSETT_GENERAL_INVERTER_SN,
                    Y = r.UNITSETT_GENERAL_UNIT_NAME,
                    K = r.UNITSETT_GENERAL_BAT_BACKUP_LEVEL,
                    J = r.UNITSETT_GENERAL_COUNTRY,
                    X = r.UNITSETT_GENERAL_TIMEZONE,
                    Q = r.UNITSETT_GENERAL_CITY,
                    q = r.UNITSETT_GENERAL_POSTAL_CODE,
                    $ = r.UNITSETT_GENERAL_DEFAULT_MODE,
                    ee = r.UNITSETT_GENERAL_HAS_PV,
                    ne = r.UNITSETT_GENERAL_BAT_SERIAL_NUMBER,
                    ie = r.UNITSETT_GENERAL_INVERTER_SOFT_VERSION,
                    re = r.UNITSETT_GENERAL_BAT_MANG_SYS_VERSION,
                    ae = r.UNITSETT_GENERAL_SYS_CAPACITY,
                    te = r.UNITSETT_GENERAL_BMS_AVG_TEMP_AFTER_INSTALL,
                    oe = r.UNITSETT_GENERAL_XSTORAGE_VERSION,
                    le = r.UNITSETT_GENERAL_THIRD_PHASE_OF_SPP,
                    se = r.UNITSETT_GENERAL_SINGLE_PHASE_OF_POWER,
                    de = r.UNITSETT_GENERAL_THIRD_PHASE_OF_POWER,
                    ce = r.UNITSETT_GENERAL_NETWORK_INTERFACE,
                    ue = r.UNITSETT_GENERAL_NETWORK_INTERFACE_IP,
                    he = r.UNITSETT_GENERAL_NETWORK_INTERFACE_DNS,
                    Ee = r.UNITSETT_GENERAL_NETWORK_INTERFACE_MAC,
                    me = r.UNITSETT_GENERAL_SAVED_SUCCESS,
                    ve = r.UNITSETT_GENERAL_BLOCKED_STATUS,
                    fe = r.UNITSETT_GENERAL_BATTERY_CONNECTED,
                    xe = r.UNITSETT_GENERAL_ENERGY_SAVING_MODE,
                    Te = r.UNITSETT_GENERAL_HOUSE_CONSUMPTION_THRESHOLD,
                    _e = r.UNITSETT_GENERAL_ENERGY_SAVING_MODE_DISABLED,
                    pe = r.UNITSETT_GENERAL_ENERGY_SAVING_MODE_ENABLED,
                    ge = a.inverterSerialNumber,
                    Ne = a.hasPv,
                    Ae = a.bmsSerialNumber,
                    be = a.inverterFirmwareVersion,
                    Se = a.bmsFirmwareVersion,
                    Re = a.firmwareVersion,
                    je = a.bmsCapacity,
                    Ce = a.powerMeters,
                    we = a.networkInterfaces,
                    Ie = a.inverterIsSinglePhase,
                    Me = a.dns,
                    Oe = a.hasBattery,
                    Le = S()(Ce, ["position"], ["asc"]);
                  this.hideBar();
                  var Pe = o.cityName,
                    ye = o.name,
                    ke = o.postalCode,
                    Ue = o.countryName,
                    Be = o.timezoneName,
                    Ge = o.bmsBackupLevel,
                    Ze = o.updateBlockedState,
                    De = o.showEnergySaving,
                    He = o.energySavingMode,
                    Fe = o.houseConsumptionThreshold,
                    Ve = (0, L.jsxs)(O.l0.Buttons, {
                      align: "right",
                      children: [
                        (0, L.jsx)(O.zx, {
                          id: "PrimaryButton_Cancel",
                          buttonType: "primary-cancel",
                          margin: "0 12px",
                          buttonWidth: "163px",
                          onClick: _,
                          disabled: !l,
                          children: b,
                        }),
                        (0, L.jsx)(O.zx, {
                          id: "PrimaryButton_Save",
                          margin: "0 12px",
                          buttonWidth: "163px",
                          onClick: x,
                          disabled: !l,
                          children: P,
                        }),
                      ],
                    }),
                    ze = !i || u;
                  return (0, L.jsx)(y, {
                    children: (0, L.jsx)(j.Z, {
                      title: N,
                      menu: (0, L.jsx)(R.Z, { page: "general-settings" }),
                      onBack: function () {
                        (_(), e.navigate("/settings/"));
                      },
                      isForm: !0,
                      isDirty: l,
                      loading: t,
                      children: (0, L.jsxs)(O.e0, {
                        padding: !0,
                        mobile: i,
                        children: [
                          (0, L.jsx)(O.mV, {
                            mobile: i,
                            out: !d,
                            icon: (0, L.jsx)(p.Z, { children: "check" }),
                            message: me,
                          }),
                          E &&
                            (0, L.jsx)(C.Z, {
                              onBack: function () {
                                (_(), e.navigate("/settings/"));
                              },
                              isForm: !0,
                              isDirty: l,
                              pageTitle: A,
                              actionButtonIcon: l
                                ? (0, L.jsx)(p.Z, { children: "check" })
                                : null,
                              actionButtonTitle: l ? P : null,
                              actionButtonClick: l ? x : null,
                            }),
                          (0, L.jsx)(O.V1, {
                            mobile: i,
                            marginTop: "17px",
                            marginBottom: "40px",
                            id: "PageTitle_GeneralSettings",
                            children: A,
                          }),
                          i &&
                            l &&
                            (0, L.jsx)(O.Oj, {
                              mobile: !0,
                              icon: (0, L.jsx)(p.Z, { children: "check" }),
                              onClick: x,
                              id: "MobileActionButton_Save",
                              children: P,
                            }),
                          (0, L.jsxs)(O.l0, {
                            mobile: i,
                            buttons: Ve,
                            id: "FormContainer_GeneralSettingsForm",
                            containerHeight: i ? " auto" : "60vh",
                            showButtons: !i && l,
                            children: [
                              (0, L.jsx)(M.Z, { dirty: l, error: s, full: i }),
                              c &&
                                (0, L.jsxs)(O.l0.Row, {
                                  relative: !0,
                                  children: [
                                    (0, L.jsx)(H, {
                                      id: "SwitchLabel_UpdateBlockedState",
                                      control: (0, L.jsx)(D, {
                                        id: "PowerSwitch_UpdateBlockedState",
                                        checked: Ze.value,
                                        onChange: function () {
                                          return f({
                                            updateBlockedState: !Ze.value,
                                          });
                                        },
                                        classes: {
                                          checked: "checked",
                                          track: "bar",
                                        },
                                      }),
                                      disabled: !c,
                                      label: ve,
                                    }),
                                    (0, L.jsx)(I.Z, {
                                      id: "PowerSwitch_UpdateBlockedState",
                                      showError: l && !Ze.valid,
                                      errorMessage: Ze.message,
                                    }),
                                  ],
                                }),
                              (0, L.jsxs)(O.l0.Row, {
                                name: "name",
                                children: [
                                  (0, L.jsx)(O.oH, {
                                    id: "UnitName",
                                    label: Y,
                                    error: l && !ye.valid,
                                    value: ye.value,
                                    onChange: function (e) {
                                      var n = e.target;
                                      return f({ name: n.value });
                                    },
                                    inputProps: { maxLength: 80 },
                                  }),
                                  (0, L.jsx)(I.Z, {
                                    id: "UnitName",
                                    showError: l && !ye.valid,
                                    errorMessage: ye.message,
                                  }),
                                ],
                              }),
                              De.value &&
                                (0, L.jsxs)(L.Fragment, {
                                  children: [
                                    (0, L.jsxs)(O.l0.Row, {
                                      relative: !0,
                                      children: [
                                        (0, L.jsx)(F, { children: xe }),
                                        (0, L.jsx)(H, {
                                          id: "SwitchLabel_EnergySavingMode",
                                          control: (0, L.jsx)(D, {
                                            id: "PowerSwitch_EnergySavingMode",
                                            checked: He.value,
                                            onChange: function () {
                                              return f({
                                                energySavingMode: !He.value,
                                                houseConsumptionThreshold:
                                                  Fe.value,
                                              });
                                            },
                                            classes: {
                                              checked: "checked",
                                              track: "bar",
                                            },
                                          }),
                                          label: He.value ? pe : _e,
                                        }),
                                      ],
                                    }),
                                    (0, L.jsxs)(O.l0.Row, {
                                      children: [
                                        (0, L.jsx)(O.oH, {
                                          id: "HouseConsumptionThreshold",
                                          label: Te,
                                          value: Fe.value,
                                          disabled: !He.value,
                                          error: l && !Fe.valid,
                                          onChange: function (e) {
                                            var n = e.target;
                                            return f({
                                              houseConsumptionThreshold: n
                                                .validity.valid
                                                ? n.value
                                                : n.value.slice(0, -1),
                                            });
                                          },
                                          InputProps: {
                                            endAdornment: (0, L.jsx)(g.Z, {
                                              position: "end",
                                              children: "W",
                                            }),
                                          },
                                        }),
                                        (0, L.jsx)(I.Z, {
                                          id: "HouseConsumptionThreshold",
                                          showError: l && !Fe.valid,
                                          errorMessage: Fe.message,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              (0, L.jsx)(O.l0.Row, {
                                children: (0, L.jsx)(w.Z, {
                                  label: $,
                                  change: f,
                                  form: o,
                                  settings: !0,
                                  full: !1,
                                }),
                              }),
                              !m &&
                                (0, L.jsxs)(O.l0.Row, {
                                  name: "bmsBackupLevel",
                                  children: [
                                    (0, L.jsx)(O.oH, {
                                      id: "BatteryBackupLevel",
                                      label: K,
                                      type: "number",
                                      min: 0,
                                      max: 100,
                                      value: null === Ge.value ? "" : Ge.value,
                                      error: l && !Ge.valid,
                                      onChange: function (e) {
                                        var n = e.target;
                                        return f({ bmsBackupLevel: n.value });
                                      },
                                    }),
                                    (0, L.jsx)(I.Z, {
                                      id: "BatteryBackupLevel",
                                      showError: l && !Ge.valid,
                                      errorMessage: Ge.message,
                                    }),
                                  ],
                                }),
                              (0, L.jsxs)(O.l0.Row, {
                                name: "countryName",
                                children: [
                                  (0, L.jsx)(O.oH, {
                                    id: "Country",
                                    label: J,
                                    value: Ue.value,
                                    error: l && !Ue.valid,
                                    disabled: !0,
                                    onChange: function (e) {
                                      var n = e.target;
                                      return f({ countryName: n.value });
                                    },
                                  }),
                                  (0, L.jsx)(I.Z, {
                                    id: "Country",
                                    full: i,
                                    showError: l && !Ue.valid,
                                    errorMessage: Ue.message,
                                  }),
                                ],
                              }),
                              (0, L.jsxs)(O.l0.Row, {
                                name: "cityName",
                                children: [
                                  (0, L.jsx)(O.oH, {
                                    id: "City",
                                    label: Q,
                                    value: Pe.value,
                                    error: l && !Pe.valid,
                                    disabled: !0,
                                    onChange: function (e) {
                                      var n = e.target;
                                      return f({ cityName: n.value });
                                    },
                                  }),
                                  (0, L.jsx)(I.Z, {
                                    id: "City",
                                    full: i,
                                    showError: l && !Pe.valid,
                                    errorMessage: Pe.message,
                                  }),
                                ],
                              }),
                              (0, L.jsxs)(O.l0.Row, {
                                name: "timezoneName",
                                children: [
                                  (0, L.jsx)(O.oH, {
                                    id: "Timezone",
                                    label: X,
                                    value: Be.value,
                                    error: l && !Be.valid,
                                    disabled: !0,
                                    onChange: function (e) {
                                      var n = e.target;
                                      return f({ timezoneName: n.value });
                                    },
                                  }),
                                  (0, L.jsx)(I.Z, {
                                    id: "Timezone",
                                    full: i,
                                    showError: l && !Be.valid,
                                    errorMessage: Be.message,
                                  }),
                                ],
                              }),
                              (0, L.jsxs)(O.l0.Row, {
                                name: "postalCode",
                                children: [
                                  (0, L.jsx)(O.oH, {
                                    id: "PostalCode",
                                    label: q,
                                    error: l && !ke.valid,
                                    value: ke.value || "",
                                    onChange: function (e) {
                                      var n = e.target;
                                      return f({ postalCode: n.value });
                                    },
                                    inputProps: { maxLength: 80 },
                                  }),
                                  (0, L.jsx)(I.Z, {
                                    id: "PostalCode",
                                    showError: l && !ke.valid,
                                    errorMessage: ke.message,
                                  }),
                                ],
                              }),
                              ze &&
                                (0, L.jsx)(O.l0.Row, {
                                  name: "firmwareVersion",
                                  children: (0, L.jsx)(O.oH, {
                                    id: "FirmwareVersion",
                                    label: oe,
                                    value: Re || "-",
                                    disabled: !0,
                                  }),
                                }),
                              !m &&
                                (0, L.jsx)(O.l0.Row, {
                                  name: "inverterSerialNumber",
                                  children: (0, L.jsx)(O.oH, {
                                    id: "InverterSerialNumber",
                                    label: W,
                                    value: ge || "-",
                                    disabled: !0,
                                  }),
                                }),
                              (0, L.jsx)(O.l0.Row, {
                                name: "inverterFirmwareVersion",
                                children: (0, L.jsx)(O.oH, {
                                  id: "InverterFirmwareVersion",
                                  label: ie,
                                  value: be || "-",
                                  disabled: !0,
                                }),
                              }),
                              (0, L.jsx)(O.l0.Row, {
                                name: "bmsSerialNumber",
                                children: (0, L.jsx)(O.oH, {
                                  id: "BmsSerialNumber",
                                  label: ne,
                                  value: Ae || "-",
                                  disabled: !0,
                                }),
                              }),
                              ze &&
                                (0, L.jsxs)(L.Fragment, {
                                  children: [
                                    !m &&
                                      (0, L.jsxs)(L.Fragment, {
                                        children: [
                                          (0, L.jsx)(O.l0.Row, {
                                            name: "bmsFirmwareVersion",
                                            children: (0, L.jsx)(O.oH, {
                                              id: "BmsFirmwareVersion",
                                              label: re,
                                              value: Se || "-",
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, L.jsx)(O.l0.Row, {
                                            name: "bmsCapacity",
                                            children: (0, L.jsx)(O.oH, {
                                              id: "BmsCapacity",
                                              label: ae,
                                              value:
                                                (je && je.toString()) || "-",
                                              disabled: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                    (0, L.jsx)(O.l0.Row, {
                                      name: "bmsAvgTemperature",
                                      children: (0, L.jsx)(O.oH, {
                                        id: "BmsAvgTemperature",
                                        label: te,
                                        value: h.bmsAvgTemperature
                                          ? "".concat(
                                              h.bmsAvgTemperature.toString(),
                                              " \xbaC",
                                            )
                                          : "--",
                                        disabled: !0,
                                      }),
                                    }),
                                    (0, L.jsx)(O.l0.Row, {
                                      name: "dns",
                                      children: (0, L.jsx)(O.oH, {
                                        id: "Dns",
                                        label: he,
                                        value: Me || "-",
                                        disabled: !0,
                                      }),
                                    }),
                                    we &&
                                      we.map(function (e, n) {
                                        return (0, L.jsx)(
                                          O.l0.Row,
                                          {
                                            children: (0, L.jsxs)(U, {
                                              children: [
                                                (0, L.jsxs)(B, {
                                                  id: "InterfaceName_network_".concat(
                                                    n,
                                                  ),
                                                  children: [ce, " ", e.name],
                                                }),
                                                (0, L.jsxs)(G, {
                                                  children: [
                                                    (0, L.jsxs)(Z, {
                                                      id: "InterfaceInfoIp_network_".concat(
                                                        n,
                                                      ),
                                                      children: [
                                                        (0, L.jsx)("b", {
                                                          children: ue,
                                                        }),
                                                        " ",
                                                        e.ipAddress,
                                                      ],
                                                    }),
                                                    (0, L.jsxs)(Z, {
                                                      id: "InterfaceInfoMac_network_".concat(
                                                        n,
                                                      ),
                                                      children: [
                                                        (0, L.jsx)("b", {
                                                          children: Ee,
                                                        }),
                                                        " ",
                                                        e.macAddress,
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          },
                                          "network_".concat(n),
                                        );
                                      }),
                                  ],
                                }),
                              ze &&
                                (0, L.jsxs)(L.Fragment, {
                                  children: [
                                    (0, L.jsx)(O.l0.Row, {
                                      name: "inverterIsSinglePhase",
                                      children: (0, L.jsx)(O.oH, {
                                        id: "InverterIsSinglePhase",
                                        label: le,
                                        value: Ie ? se : de,
                                        disabled: !0,
                                      }),
                                    }),
                                    Le.map(function (e, n) {
                                      return (0, L.jsx)(
                                        O.l0.Row,
                                        {
                                          name: "meter_".concat(n + 1),
                                          children: (0, L.jsx)(O.oH, {
                                            id: "MeterModel_".concat(n),
                                            label: "Meter ".concat(
                                              n + 1,
                                              " model",
                                            ),
                                            value: e.model,
                                            disabled: !0,
                                          }),
                                        },
                                        "meter_".concat(n),
                                      );
                                    }),
                                    (0, L.jsx)(O.l0.Row, {
                                      name: "hasPv",
                                      children: (0, L.jsx)(O.oH, {
                                        id: "HasPv",
                                        label: ee,
                                        value: Ne ? "Yes" : "No",
                                        disabled: !0,
                                      }),
                                    }),
                                    (0, L.jsx)(O.l0.Row, {
                                      name: "hasBattery",
                                      children: (0, L.jsx)(O.oH, {
                                        id: "HasBattery",
                                        label: fe,
                                        value: Oe ? "Yes" : "No",
                                        disabled: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              i &&
                                (0, L.jsxs)(k, {
                                  onClick: T,
                                  children: [
                                    u ? z : V,
                                    (0, L.jsx)(p.Z, {
                                      children: u
                                        ? "expand_less"
                                        : "expand_more",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  });
                },
              },
            ]),
            i
          );
        })(x.Component);
      n.default = (0, T.Z)(P);
      var y = _.ZP.div(r || (r = (0, h.default)(["\n"]))),
        k = _.ZP.div(
          a ||
            (a = (0, h.default)([
              "\n  display: flex;\n  justify-content: center;\n  padding: 15px 0;\n  color: #007bc1;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n",
            ])),
        ),
        U = _.ZP.div(
          t ||
            (t = (0, h.default)([
              "\n  color: #424e54;\n  font-family: 'Open Sans';\n  padding: 0px 0px 16px 8px;\n  box-shadow: inset 0 -1px 0 0 rgba(114, 126, 132, 0.1);\n",
            ])),
        ),
        B = _.ZP.label(
          o ||
            (o = (0, h.default)([
              "\n  font-weight: bold;\n  font-size: 14px;\n  font-family: 'Open Sans';\n  color: rgba(114, 126, 132, 0.5);\n",
            ])),
        ),
        G = _.ZP.div(
          l ||
            (l = (0, h.default)(["\n  opacity: 0.6;\n  padding-top: 10px;\n"])),
        ),
        Z = _.ZP.div(
          s ||
            (s = (0, h.default)([
              "\n  width: 50%;\n  display: inline-block;\n  font-size: 14px;\n",
            ])),
        ),
        D = (0, _.ZP)(N.Z)(
          d ||
            (d = (0, h.default)([
              "\n  &&&& {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 1;\n\n    .checked {\n      color: #007bc1;\n    }\n    .checked + .bar {\n      background-color: #007bc1;\n      opacity: 0.4;\n    }\n  }\n",
            ])),
        ),
        H = (0, _.ZP)(A.Z)(
          c ||
            (c = (0, h.default)([
              "\n  height: 48px;\n  position: relative;\n  margin-left: 0 !important;\n  margin-right: 0;\n  width: 100%;\n  padding-left: 8px;\n\n  > span:nth-child(2) {\n    width: 85%;\n    color: #424e54;\n    font-family: 'Open Sans';\n    font-size: 14px;\n    line-height: 20px;\n  }\n  box-shadow: inset 0 -1px 0 0 rgba(114, 126, 132, 0.2);\n",
            ])),
        ),
        F = _.ZP.p(
          u ||
            (u = (0, h.default)([
              "\n  color: #5b6770;\n  font-family: 'Open Sans';\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 14px;\n  padding-left: 8px;\n  margin-bottom: 0;\n",
            ])),
        );
    },
    47481: function (e, n, i) {
      var r = i(96272),
        a = i(66656);
      e.exports = function (e, n) {
        var i = -1,
          t = a(e) ? Array(e.length) : [];
        return (
          r(e, function (e, r, a) {
            t[++i] = n(e, r, a);
          }),
          t
        );
      };
    },
    72296: function (e, n, i) {
      var r = i(46102),
        a = i(68054),
        t = i(61490),
        o = i(47481),
        l = i(15725),
        s = i(9460),
        d = i(63248),
        c = i(3391),
        u = i(92834);
      e.exports = function (e, n, i) {
        n = n.length
          ? r(n, function (e) {
              return u(e)
                ? function (n) {
                    return a(n, 1 === e.length ? e[0] : e);
                  }
                : e;
            })
          : [c];
        var h = -1;
        n = r(n, s(t));
        var E = o(e, function (e, i, a) {
          return {
            criteria: r(n, function (n) {
              return n(e);
            }),
            index: ++h,
            value: e,
          };
        });
        return l(E, function (e, n) {
          return d(e, n, i);
        });
      };
    },
    15725: function (e) {
      e.exports = function (e, n) {
        var i = e.length;
        for (e.sort(n); i--;) e[i] = e[i].value;
        return e;
      };
    },
    42533: function (e, n, i) {
      var r = i(214);
      e.exports = function (e, n) {
        if (e !== n) {
          var i = void 0 !== e,
            a = null === e,
            t = e === e,
            o = r(e),
            l = void 0 !== n,
            s = null === n,
            d = n === n,
            c = r(n);
          if (
            (!s && !c && !o && e > n) ||
            (o && l && d && !s && !c) ||
            (a && l && d) ||
            (!i && d) ||
            !t
          )
            return 1;
          if (
            (!a && !o && !c && e < n) ||
            (c && i && t && !a && !o) ||
            (s && i && t) ||
            (!l && t) ||
            !d
          )
            return -1;
        }
        return 0;
      };
    },
    63248: function (e, n, i) {
      var r = i(42533);
      e.exports = function (e, n, i) {
        for (
          var a = -1,
            t = e.criteria,
            o = n.criteria,
            l = t.length,
            s = i.length;
          ++a < l;
        ) {
          var d = r(t[a], o[a]);
          if (d) return a >= s ? d : d * ("desc" == i[a] ? -1 : 1);
        }
        return e.index - n.index;
      };
    },
    70077: function (e, n, i) {
      var r = i(72296),
        a = i(92834);
      e.exports = function (e, n, i, t) {
        return null == e
          ? []
          : (a(n) || (n = null == n ? [] : [n]),
            a((i = t ? void 0 : i)) || (i = null == i ? [] : [i]),
            r(e, n, i));
      };
    },
  },
]);
//# sourceMappingURL=1532.b3491540.chunk.js.map
