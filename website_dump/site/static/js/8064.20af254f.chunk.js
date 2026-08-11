(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [8064, 9135],
  {
    9135: function (e, n, t) {
      "use strict";
      (t.r(n),
        t.d(n, {
          default: function () {
            return x;
          },
        }));
      var r,
        i = t(56824),
        a = t(30225),
        o = t(94404),
        s = t(14482),
        d = t(5189),
        c = t(76431),
        l = t(30588),
        u = t(84628),
        f = t(49318),
        p = (0, u.Jg)({
          connect: {
            props: [
              f.Z,
              [
                "translations",
                "navItems",
                "currentRoute",
                "isMobile",
                "userValid",
                "countryDevice",
                "showHelpTour",
              ],
            ],
            actions: [f.Z, ["push"]],
          },
        }),
        h = t(13795),
        m = t(22247),
        b = t(31228),
        v = (function (e) {
          (0, s.default)(t, e);
          var n = (0, d.default)(t);
          function t() {
            var e;
            (0, a.default)(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return (
              ((e = n.call.apply(n, [this].concat(i))).navigate = function (n) {
                (0, e.actions.push)(n);
              }),
              e
            );
          }
          return (
            (0, o.default)(t, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    n = this.props,
                    t = n.countryDevice,
                    r = n.translations,
                    i = n.navItems,
                    a = n.currentRoute,
                    o = n.isMobile,
                    s = n.userValid,
                    d = n.showHelpTour,
                    c = i && !a.hideNavBar,
                    l = i.filter(function (e) {
                      return !e.hide;
                    });
                  return (o && a.hideNavBar) || !s
                    ? ""
                    : (t !== h.zN ||
                        d ||
                        (l = l.filter(function (e) {
                          return "Schedule" !== e.key;
                        })),
                      (0, b.jsxs)(g, {
                        mobile: o,
                        className: "first-step",
                        children: [
                          !o && (0, b.jsx)(m.G2, {}),
                          c &&
                            l.map(function (n) {
                              var t = n.key,
                                i = n.icon,
                                a = n.name,
                                s = n.active,
                                d = n.path;
                              return (0, b.jsx)(
                                m.LY,
                                {
                                  id: t,
                                  active: s,
                                  icon: i,
                                  content: r[a] ? r[a] : a,
                                  href: d,
                                  mobile: o,
                                  onClick: function (n) {
                                    return e.navigate(d);
                                  },
                                },
                                t,
                              );
                            }),
                        ],
                      }));
                },
              },
            ]),
            t
          );
        })(c.PureComponent),
        x = c.memo(p(v)),
        g = l.ZP.div(
          r ||
            (r = (0, i.default)([
              "\n  background: #fff;\n  box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.05),\n    0 -2px 5px 0 rgba(0, 0, 0, 0.06);\n  z-index: 1000;\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (e) {
            return (
              e.mobile &&
              "\n    position: fixed;\n    height: 56px;\n    width: 100%;\n    bottom: 0;\n    display: flex;\n    min-width: 300px;\n  "
            );
          },
          function (e) {
            return (
              !e.mobile &&
              "\n    position: fixed;\n    left: 0;\n    top: 0;\n    height: 100vh;\n    width: 120px;\n    display: block;\n  "
            );
          },
        );
    },
    32514: function (e, n, t) {
      "use strict";
      (t.r(n),
        t.d(n, {
          default: function () {
            return X;
          },
        }));
      var r,
        i,
        a,
        o,
        s,
        d,
        c = t(56824),
        l = t(30225),
        u = t(94404),
        f = t(14482),
        p = t(5189),
        h = t(76431),
        m = t(87121),
        b = t(2845),
        v = t(84628),
        x = t(83749),
        g = t(98278),
        _ = t.n(g),
        T = t(49318),
        A = (0, v.Jg)({
          path: function () {
            return ["scenes", "containers", "TourLayout"];
          },
          connect: {
            props: [T.Z, ["isMobile", "translations", "user", "showHelpTour"]],
            actions: [T.Z, ["setShowHelpTour"]],
          },
          actions: function () {
            return {
              setSwitcherSelected: function (e) {
                return e;
              },
              reset: function () {
                return !0;
              },
            };
          },
          reducers: function (e) {
            var n,
              t = e.actions;
            return {
              switcherSelected: [
                "battery",
                _().string,
                ((n = {}),
                (0, b.Z)(n, t.setSwitcherSelected, function (e, n) {
                  return n;
                }),
                (0, b.Z)(n, t.reset, function () {
                  return "battery";
                }),
                n),
              ],
            };
          },
          stop: (0, m.Z)().mark(function e() {
            var n;
            return (0, m.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators.reset),
                        (e.next = 3),
                        (0, x.gz)(n())
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
        }),
        C = t(30588),
        S = t(38391),
        E = t(22247),
        w = t(31228),
        y = {
          id: "2840f0fb-a38e-4284-a0ba-aa01b23f35fc",
          updatedAt: 1575899085826,
          createdAt: 1557251649318,
          name: "Ubiwhere",
          description: "",
          firmwareVersion: "00.01.0006-154-g8abe5be0",
          commCardFirmwareVersion: "",
          hasPv: !0,
          address: "Travessa Senhor das Barrocas_",
          country: {
            id: "c5b8872a-6285-4e0f-ae82-e5ed29fff5ce",
            continentId: "5ad06a9c-4343-4d0a-bc3a-9fe23136c3f4",
            geonameId: 2264397,
            code: "PT",
            name: "Portugal",
            eu: !0,
            locale: "en",
            createdAt: 1560875990365,
            updatedAt: 1560875990365,
          },
          city: {
            id: "0192755c-da96-4a74-a29e-f020707a3121",
            countryId: "c5b8872a-6285-4e0f-ae82-e5ed29fff5ce",
            geonameId: 2743458,
            subdivision1Code: "03",
            subdivision1Name: "Braga",
            subdivision2Code: "",
            subdivision2Name: "",
            name: "Abade de Neiva",
            timeZone: "Europe/Lisbon",
            metroCode: "",
            eu: !0,
            locale: "en",
            createdAt: 1560876054538,
            updatedAt: 1560876054538,
          },
          postalCode: "3800-075",
          latitude: 41.549896,
          longitude: -8.6435585,
          defaultOperationMode: "BASIC",
          inverterManufacturer: "EATON",
          inverterModelName: "XSTH1P036P048V01",
          inverterTidaProtocol: "1.0",
          inverterSerialNumber: "RB76H39016",
          inverterIsSinglePhase: !0,
          inverterFirmwareVersion: "00.04.0057",
          inverterVaRating: 3600,
          inverterNominalVpv: 3600,
          bmsSerialNumber: "H-B60-H-46-007",
          bmsModel: "RESIDENCIAL",
          bmsFirmwareVersion: "4004",
          bmsCapacity: 4.2,
          bmsBackupLevel: 21,
          powerState: !0,
          deviceLastScheduleUpdate: 1575471643,
          deviceLastUpdate: 1575556226,
          lastTechParamsUpdate: -62135596800,
          timezone: {
            id: "78931bbb-a3d4-49a2-acf0-dfd9aff1351a",
            countryId: "c5b8872a-6285-4e0f-ae82-e5ed29fff5ce",
            timezone: "Atlantic/Madeira",
            name: "Atlantic/Madeira - Madeira Islands",
            version: "00.01.0001 2018-02-06",
            createdAt: 1560876105929,
            updatedAt: 1560876105929,
          },
          dns: "8.8.8.8",
          networkInterfaces: [
            {
              id: "6e886e54-8694-4d17-8e91-82180a49ec67",
              updatedAt: 1575899085998,
              createdAt: 1575899085998,
              name: "wlan1",
              macAddress: "76:da:38:99:5a:af",
              ipAddress: "192.168.3.99",
            },
            {
              id: "682624ae-0606-47e5-8c5e-d62f45752216",
              updatedAt: 1575899085951,
              createdAt: 1575899085951,
              name: "eth0",
              macAddress: "00:20:85:f2:aa:ad",
              ipAddress: "10.20.0.9",
            },
            {
              id: "f489eb5a-ee10-4d09-b14f-2e8d10608024",
              updatedAt: 1575899085951,
              createdAt: 1575899085951,
              name: "wlan0",
              macAddress: "74:da:38:99:5a:af",
              ipAddress: "192.168.2.34",
            },
          ],
          roles: [
            {
              id: "98b63f63-1026-4cfc-bc21-cd6beb6787ea",
              updatedAt: 1575657359970,
              createdAt: 1575657359970,
              device: null,
              user: {
                id: "c049e07f-4d27-433f-8429-05b662bd2747",
                firstName: "Bruno",
                lastName: "Silva",
                email: "bsilva@ubiwhere.com",
                phone: "911111112",
                language: "en-gb",
                azureId: "",
                updatedAt: 123,
                termsAndConditionsVersion: "",
                isDealer: !1,
                isAdmin: !1,
                weatherUnit: "celsius",
                dealerId: "",
                eulaVersion: "",
                country: null,
              },
              createdBy: {
                id: "c049e07f-4d27-433f-8429-05b662bd2747",
                firstName: "Bruno",
                lastName: "Silva",
                email: "bsilva@ubiwhere.com",
                phone: "911111112",
                language: "en-gb",
              },
              updatedBy: {
                id: "c049e07f-4d27-433f-8429-05b662bd2747",
                firstName: "Bruno",
                lastName: "Silva",
                email: "bsilva@ubiwhere.com",
                phone: "911111112",
                language: "en-gb",
              },
              name: null,
              owner: !0,
              technician: !1,
              write: !0,
              roleManagement: !0,
              status: "ACTIVE",
            },
          ],
          powerMeters: [
            {
              id: "1cd8f5ff-2c80-4901-b384-92a14801b443",
              updatedAt: 1575899085904,
              createdAt: 1575899085904,
              position: 1,
              model: "Sfere DDS1946-DS",
              singlePhase: !0,
            },
            {
              id: "1608b059-12c9-4c18-835c-5525cdcdf311",
              updatedAt: 1575899085888,
              createdAt: 1575899085888,
              position: 2,
              model: "None",
              singlePhase: !0,
            },
          ],
          updateStatus: "UPDATE_COMPLETE",
          connected: !0,
          hasBattery: !0,
        },
        I = {
          energyFlow: {
            operationMode: "MAXIMIZE_AUTO_CONSUMPTION",
            batteryStatus: "CHARGE",
            batteryBackupLevel: 5,
            batteryEnergyFlow: 1100,
            selfConsumption: 0,
            stateOfCharge: 75,
            gridRole: "NONE",
            gridValue: 0,
            criticalLoadRole: "PRODUCER",
            criticalLoadValue: 300,
            nonCriticalLoadRole: "CONSUMER",
            nonCriticalLoadValue: 2400,
            dcPvRole: "CONSUMER",
            dcPvValue: 2500,
            acPvRole: "CONSUMER",
            acPvValue: 1300,
            selfSufficient: 0,
          },
          today: {
            gridConsumption: 1014.2166748046875,
            gridInjection: 0,
            photovoltaicProduction: 0,
            selfConsumption: 0,
            selfSufficient: 0,
          },
          last30daysEnergyFlow: {
            gridConsumption: 41654.29861450195,
            gridInjection: 88.50000190734863,
            photovoltaicProduction: 0,
            selfConsumption: 0,
            selfSufficient: 0,
          },
          currentMode: {
            id: null,
            updatedAt: 1575449634724,
            createdAt: 1575449634724,
            user: {
              id: "5f2f6e7e-f5bb-4c6b-a84c-ef1fd5a8a1db",
              firstName: 'Tech1324!"#$\xe0\xe9\xed\xe71',
              lastName: '1324!"#$\xe0\xe9\xed\xe71',
              email: "technician_test_poliveira_250319@mailinator.com",
              phone: "1333742135461",
              language: "en-gb",
            },
            updatedBy: {
              id: "00000000-0000-0000-0000-000000000000",
              firstName: "Local",
              lastName: "User",
            },
            command: "SET_MAXIMIZE_AUTO_CONSUMPTION",
            parameters: null,
            startTime: null,
            endTime: null,
            duration: null,
            status: "ACTIVE",
            type: "DEFAULT",
          },
        },
        N = {
          backgroundColor: "#FDFDFD",
          borderRadius: "6px",
          boxShadow: "0 0 10px 0 rgba(81,141,197,0.1)",
          padding: "12px 12px 22px 16px",
          maxWidth: "calc(100vw - 30px)",
          marginLeft: "8px",
        },
        P = {
          backgroundColor: "#FDFDFD",
          borderRadius: "6px",
          boxShadow: "0 0 10px 0 rgba(81,141,197,0.1)",
          padding: "12px 12px 22px 16px",
          maxWidth: "400px",
          marginTop: "8px",
        },
        O = t(13718),
        j = t(2282),
        R = t(8712),
        L = t(12828),
        k = t(88858),
        D = t(9135),
        H = t(61238),
        M = t(31105),
        U = t(49845),
        Z = (0, v.Jg)({
          path: function () {
            return ["scenes", "containers", "TourCard"];
          },
          connect: { props: [T.Z, ["translations"]] },
        }),
        F = (function (e) {
          (0, f.default)(t, e);
          var n = (0, p.default)(t);
          function t() {
            return ((0, l.default)(this, t), n.apply(this, arguments));
          }
          return (
            (0, u.default)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    n = e.current,
                    t = e.content,
                    r = e.totalSteps,
                    i = e.gotoStep,
                    a = e.close,
                    o = e.translations,
                    s = o.HELP_TOUR_SKIP,
                    d = o.HELP_TOUR_CLOSE;
                  return (0, w.jsxs)(B, {
                    children: [
                      (0, w.jsx)(E.OR, {
                        children: (0, w.jsx)("span", { children: n + 1 }),
                      }),
                      (0, w.jsx)(E.Se, {
                        onClick: a,
                        children: n + 1 === r ? d : s,
                      }),
                      t,
                      (0, w.jsxs)(E.ZX, {
                        "data-tour-elem": "controls",
                        className: "CustomHelper__controls",
                        children: [
                          (0, w.jsx)(E.Eh, {
                            onClick: function () {
                              return i(n - 1);
                            },
                            disabled: 0 === n,
                            className: "CustomHelper__navArrow",
                          }),
                          (0, w.jsx)(E.W_, {
                            "data-tour-elem": "navigation",
                            children: Array.from(Array(r).keys()).map(
                              function (e, t) {
                                return (0, w.jsx)(
                                  E.oT,
                                  {
                                    onClick: function () {
                                      return n !== t && i(t);
                                    },
                                    current: n,
                                    index: t,
                                    disabled: n === t,
                                    showNumber: !0,
                                    "data-tour-elem": "dot",
                                  },
                                  e,
                                );
                              },
                            ),
                          }),
                          (0, w.jsx)(E.Eh, {
                            onClick: function () {
                              return i(n + 1);
                            },
                            disabled: n === r - 1,
                            className: "CustomHelper__navArrow",
                            inverted: !0,
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(h.PureComponent),
        V = Z(F),
        B = C.ZP.div(
          r ||
            (r = (0, c.default)([
              "\n  border-radius: 6px;\n  background-color: #fdfdfd;\n",
            ])),
        ),
        z = (function (e) {
          (0, f.default)(t, e);
          var n = (0, p.default)(t);
          function t() {
            return ((0, l.default)(this, t), n.apply(this, arguments));
          }
          return (
            (0, u.default)(t, [
              {
                key: "render",
                value: function () {
                  return (0, w.jsx)(
                    U.ZP,
                    (0, M.default)(
                      (0, M.default)({}, this.props),
                      {},
                      {
                        position: "top",
                        accentColor: "#007BC1",
                        CustomHelper: V,
                        maskClassName: "tourMask",
                      },
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(h.PureComponent),
        G = t(44497),
        W = (function (e) {
          (0, f.default)(t, e);
          var n = (0, p.default)(t);
          function t() {
            return ((0, l.default)(this, t), n.apply(this, arguments));
          }
          return (
            (0, u.default)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    n = e.isMobile,
                    t = e.translations,
                    r = e.user,
                    i = e.switcherSelected,
                    a = e.showHelpTour,
                    o = t.DASH_TITLE,
                    s = t.DASH_WELCOME,
                    d = t.DASH_BATTERY_STATUS,
                    c = t.DASH_ENERGY_FLOW,
                    l = t.OPERATION_MODE_BASIC,
                    u = r.firstName,
                    f = r.lastName,
                    p = this.actions,
                    h = p.setSwitcherSelected,
                    m = p.setShowHelpTour,
                    b = [
                      { slug: "battery", name: d },
                      { slug: "energy", name: c },
                    ],
                    v = I,
                    x = y,
                    g = (function (e, n, t) {
                      var r = [
                        {
                          selector: ".first-step",
                          content: function () {
                            return (0, w.jsxs)("div", {
                              children: [
                                (0, w.jsx)(E.nv, {
                                  weight: "bold",
                                  children: e.HELP_TOUR_MAIN_MENU,
                                }),
                                (0, w.jsx)(E.wM, {
                                  paragraphColor: "#727E84",
                                  paragraphSize: "14px",
                                  children: (0, S.ZP)(
                                    e.HELP_TOUR_MAIN_MENU_DESCRIPTION,
                                  ),
                                }),
                              ],
                            });
                          },
                          style: n ? N : P,
                          action: function () {
                            t("battery");
                          },
                        },
                        {
                          selector: ".second-step",
                          content: function () {
                            return (0, w.jsxs)("div", {
                              children: [
                                (0, w.jsx)(E.nv, {
                                  weight: "bold",
                                  children: e.HELP_TOUR_NOTIFICATIONS,
                                }),
                                (0, w.jsx)(E.nv, {
                                  color: "#727E84",
                                  size: "14px",
                                  children:
                                    e.HELP_TOUR_NOTIFICATIONS_DESCRIPTION,
                                }),
                              ],
                            });
                          },
                          style: n ? N : P,
                        },
                        {
                          selector: ".third-step",
                          content: function () {
                            return (0, w.jsxs)("div", {
                              children: [
                                (0, w.jsx)(E.nv, {
                                  weight: "bold",
                                  children: e.HELP_TOUR_UNIT,
                                }),
                                (0, w.jsx)(E.wM, {
                                  paragraphColor: "#727E84",
                                  paragraphSize: "14px",
                                  children: (0, S.ZP)(
                                    e.HELP_TOUR_UNIT_DESCRIPTION,
                                  ),
                                }),
                              ],
                            });
                          },
                          style: n ? N : P,
                          action: function () {
                            t("battery");
                          },
                        },
                        {
                          selector: ".fourth-step",
                          content: function () {
                            return (0, w.jsxs)("div", {
                              children: [
                                (0, w.jsx)(E.nv, {
                                  weight: "bold",
                                  children: e.HELP_TOUR_PHOTOVOLTAIC_PANELS,
                                }),
                                (0, w.jsx)(E.nv, {
                                  color: "#727E84",
                                  size: "14px",
                                  children:
                                    e.HELP_TOUR_PHOTOVOLTAIC_PANELS_DESCRIPTION,
                                }),
                              ],
                            });
                          },
                          style: n ? N : P,
                          action: function () {
                            t("energy");
                          },
                        },
                        {
                          selector: ".fifth-step",
                          content: function () {
                            return (0, w.jsxs)("div", {
                              children: [
                                (0, w.jsx)(E.nv, {
                                  weight: "bold",
                                  children: e.HELP_TOUR_CRITICAL_LOADS,
                                }),
                                (0, w.jsx)(E.nv, {
                                  color: "#727E84",
                                  size: "14px",
                                  children:
                                    e.HELP_TOUR_CRITICAL_LOADS_DESCRIPTION,
                                }),
                              ],
                            });
                          },
                          style: n ? N : P,
                          action: function () {
                            t("energy");
                          },
                        },
                        {
                          selector: ".sixth-step",
                          content: function () {
                            return (0, w.jsxs)("div", {
                              children: [
                                (0, w.jsx)(E.nv, {
                                  weight: "bold",
                                  children: e.HELP_TOUR_NON_CRITICAL_LOADS,
                                }),
                                (0, w.jsx)(E.nv, {
                                  color: "#727E84",
                                  size: "14px",
                                  children:
                                    e.HELP_TOUR_NON_CRITICAL_LOADS_DESCRIPTION,
                                }),
                              ],
                            });
                          },
                          style: n ? N : P,
                          action: function () {
                            t("energy");
                          },
                        },
                        {
                          selector: ".seventh-step",
                          content: function () {
                            return (0, w.jsxs)("div", {
                              children: [
                                (0, w.jsx)(E.nv, {
                                  weight: "bold",
                                  children: e.HELP_TOUR_GRID,
                                }),
                                (0, w.jsx)(E.nv, {
                                  color: "#727E84",
                                  size: "14px",
                                  children: e.HELP_TOUR_GRID_DESCRIPTION,
                                }),
                              ],
                            });
                          },
                          style: n ? N : P,
                          action: function () {
                            t("energy");
                          },
                        },
                      ];
                      return (
                        n &&
                          (r = r.filter(function (e) {
                            return ".second-step" !== e.selector;
                          })),
                        r
                      );
                    })(t, n, h);
                  return (0, w.jsxs)(w.Fragment, {
                    children: [
                      (0, w.jsx)(Y, {
                        mobile: n,
                        children: (0, w.jsxs)(J, {
                          bgfull: "energy" === i,
                          mobile: n,
                          children: [
                            n &&
                              (0, w.jsxs)(w.Fragment, {
                                children: [
                                  (0, w.jsx)(E.T5, {
                                    items: b,
                                    selected: i,
                                    onChange: function (e) {
                                      return h(e);
                                    },
                                  }),
                                  (0, w.jsxs)(K, {
                                    visible: "battery" === i,
                                    children: [
                                      (0, w.jsx)(E.AV, {
                                        mode: l,
                                        isMobile: !0,
                                        translations: t,
                                        currentDevice: x,
                                        deviceStatus: v,
                                      }),
                                      (0, w.jsx)(k.Z, {}),
                                    ],
                                  }),
                                  (0, w.jsx)(K, {
                                    visible: "energy" === i,
                                    children: (0, w.jsx)(G.Z, {
                                      deviceStatus: v,
                                      isMobile: !0,
                                      currentDevice: x,
                                      multipleSolarPanels: (0, R.T)(v),
                                      translations: t,
                                      multipvdetails: !1,
                                    }),
                                  }),
                                ],
                              }),
                            !n &&
                              (0, w.jsxs)(w.Fragment, {
                                children: [
                                  (0, w.jsx)(E.V1, {
                                    paddingTop: n ? "12px" : "0px",
                                    mobile: n,
                                    children: o,
                                  }),
                                  (0, w.jsxs)("div", {
                                    children: [
                                      (0, w.jsxs)($, {
                                        children: [s, " ", u, " ", f, "..."],
                                      }),
                                      (0, w.jsx)(q, {
                                        children: (0, w.jsx)(G.Z, {
                                          deviceStatus: v,
                                          isMobile: n,
                                          multipleSolarPanels: (0, R.T)(v),
                                          multipvdetails: !1,
                                          currentDevice: x,
                                          translations: t,
                                        }),
                                      }),
                                      (0, w.jsx)(L.Z, {}),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      }),
                      (0, w.jsx)(D.default, {}),
                      !n && (0, w.jsx)(H.default, {}),
                      (0, w.jsx)(z, {
                        steps: g,
                        isOpen: a,
                        onRequestClose: function () {
                          return m(!1);
                        },
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(h.Component),
        X = A(W),
        J = C.ZP.div(
          i ||
            (i = (0, c.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n  }\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (e) {
            var n = e.mobile,
              t = e.bgfull;
            return (
              n &&
              !t &&
              "\n    min-height: calc(100vh - 56px);\n    background: #f7f7f9;\n    background-repeat: no-repeat;\n    background-size: auto;\n    background-position: top;\n    background-image: url(".concat(
                j.Z,
                ")\n  ",
              )
            );
          },
          function (e) {
            var n = e.mobile,
              t = e.bgfull;
            return (
              n &&
              t &&
              "\n    min-height: calc(100vh - 56px);\n    background: #007ac1;\n  "
            );
          },
        ),
        Y = C.ZP.div(
          a ||
            (a = (0, c.default)([
              "\n  height: auto;\n  position: absolute;\n  min-height: 100vh;\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (e) {
            return (
              e.mobile &&
              "\n    padding-bottom: 56px;\n    background: #FFF;\n    min-width: 300px;\n    width: 100vw;\n  "
            );
          },
          function (e) {
            return (
              !e.mobile &&
              "\n    background: #f7f7f9;\n    min-width: 1024px;\n    width: 100%;\n    display: inline-block;\n    background-image: url(".concat(
                O.Z,
                ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-attachment: fixed;\n    background-position: top center;\n    padding-left: 120px;\n  ",
              )
            );
          },
        ),
        $ = C.ZP.h3(
          o ||
            (o = (0, c.default)([
              "\n  font-size: 16px;\n  color: #ffffff;\n  font-weight: 600;\n  line-height: 0;\n",
            ])),
        ),
        q = C.ZP.div(s || (s = (0, c.default)(["\n  margin-top: 56px;\n"]))),
        K = C.ZP.div(
          d ||
            (d = (0, c.default)([
              "\n  display: none;\n  max-width: 450px;\n  margin: 0 auto;\n\n  ",
              "\n\n  @keyframes show {\n    0% {\n      opacity: 0;\n    }\n    99% {\n      opacity: 1;\n    }\n    100% {\n      display: block !important;\n    }\n  }\n",
            ])),
          function (e) {
            return (
              e.visible && "\n    animation: show 1s;\n    display: block;\n  "
            );
          },
        );
    },
    27025: function () {},
  },
]);
//# sourceMappingURL=8064.20af254f.chunk.js.map
