"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [9211],
  {
    39211: function (e, t, n) {
      var r,
        s,
        o,
        a,
        i,
        u,
        c,
        l = n(56824),
        d = n(30225),
        f = n(94404),
        p = n(14482),
        h = n(5189),
        v = n(76431),
        g = n(30588),
        x = n(79408),
        m = n(21649),
        w = n(48229),
        b = n(79272),
        k = n(40915),
        E = n(87371),
        S = n(72768),
        Z = n(89020),
        _ = n(93874),
        N = n(22247),
        j = n(31228),
        T = (function (e) {
          (0, p.default)(n, e);
          var t = (0, h.default)(n);
          function n() {
            var e;
            (0, d.default)(this, n);
            for (var r = arguments.length, s = new Array(r), o = 0; o < r; o++)
              s[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(s))).navigate = function (t) {
                (0, e.actions.push)(t);
              }),
              (e.hideBar = function () {
                var t = e.props.isMobile,
                  n = e.actions.setFixNavbar;
                t && window.scrollY > 50 ? n(!0) : n(!1);
              }),
              e
            );
          }
          return (
            (0, f.default)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.isMobile &&
                    window.addEventListener("scroll", this.hideBar);
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
                    t = this.props,
                    n = t.translations,
                    r = t.form,
                    s = t.dirty,
                    o = t.error,
                    a = t.info,
                    i = t.successMessage,
                    u = t.currentRoute,
                    c = t.networkNames,
                    l = t.loading,
                    d = t.isMobile,
                    f = t.loadingWifiNetwork,
                    p = t.wifiModal,
                    h = t.hotspotModal,
                    v = t.fixNavbar,
                    g = t.showFormButtons,
                    x = t.showTopBarButtons,
                    k = t.apiError,
                    E = this.actions,
                    T = E.change,
                    z = E.submit,
                    O = E.scanWifi,
                    D = E.patchWifi,
                    A = E.patchHotspot,
                    B = E.setWifiModal,
                    F = E.setHotspotModal,
                    U = E.revertChanges,
                    L = n.SETUP_NEXT,
                    H = n.SETUP_NETWORK_SETTINGS,
                    K = n.SETUP_NETWORK_IP_ORIGIN,
                    G = n.SETUP_IP_MODE_DHCP,
                    V = n.SETUP_DNS_SERVER,
                    q = n.SETUP_IP_MODE_STATIC,
                    Y = n.SETUP_NETWORK_IPV4,
                    $ = n.SETUP_NETWORK_SUBNET_MASK,
                    J = n.SETUP_NETWORK_GATEWAY,
                    X = n.SETUP_NETWORK_NAME,
                    Q = n.SETUP_NETWORK_SECURITY_MODE,
                    ee = n.SETUP_NETWORK_PASSWORD,
                    te = n.SETUP_NETWORK_WIFI,
                    ne = n.SETUP_NETWORK_LAN,
                    re = n.SETUP_NETWORK_HOTSPOT,
                    se = n.SETUP_BACK,
                    oe = n.UNITSETT_GENERAL_SAVE,
                    ae = n.UNITSETT_NETWORK_SETT_SAVED_SUCCESS,
                    ie = n.SETUP_NETWORK_SCAN_WIFI_BUTTON,
                    ue = n.SETUP_NETWORK_SCAN_WIFI_LOADING,
                    ce = n.SETUP_NETWORK,
                    le = n.SETUP_NETWORK_WIFI_ENABLED,
                    de = n.SETUP_NETWORK_WIFI_DISABLED,
                    fe = n.SETUP_NETWORK_HOTSPOT_ENABLED,
                    pe = n.SETUP_NETWORK_HOTSPOT_DISABLED,
                    he = n.SETUP_NETWORK_DISABLE_WIFI,
                    ve = n.SETUP_NETWORK_ENABLE_WIFI,
                    ge = n.SETUP_TOPOLOGY_CONFIRM,
                    xe = n.SETUP_CANCEL_BUTTON,
                    me = n.SETUP_NETWORK_DISABLE_HOTSPOT,
                    we = n.UNITSETT_GENERAL_CANCEL,
                    be = r.connection,
                    ke = r.iporigin,
                    Ee = r.dnsaddress,
                    Se = r.intendedipv4,
                    Ze = r.subnetmask,
                    _e = r.gateway,
                    Ne = r.networkname,
                    je = r.securitymode,
                    Te = r.networkpassword,
                    ye = r.hotspotNetworkname,
                    Ce = r.hotspotPassword,
                    Pe = r.wifiEnabled,
                    We = r.hotspotEnabled;
                  this.hideBar();
                  var Re = (0, j.jsxs)(N.l0.Buttons, {
                      align: "DeviceSetup" === u.key && d ? "center" : "right",
                      mobile: d,
                      fixed: "DeviceSetup" === u.key && d,
                      children: [
                        "NetworkSettings" !== u.key
                          ? (0, j.jsx)(N.zx, {
                              id: "PrimaryButton_Back",
                              buttonType: "primary-cancel",
                              margin: "0 12px",
                              buttonWidth: d ? "156px" : "163px",
                              disabled: !0,
                              children: se,
                            })
                          : (0, j.jsxs)(N.zx, {
                              id: "PrimaryButton_Cancel",
                              buttonType: "primary-cancel",
                              margin: "0 12px",
                              buttonWidth: "163px",
                              onClick: U,
                              disabled: !s,
                              children: [" ", we],
                            }),
                        (0, j.jsx)(N.zx, {
                          id: "PrimaryButton_Submit",
                          margin: "0 12px",
                          buttonWidth:
                            "DeviceSetup" === u.key && d ? "156px" : "163px",
                          onClick: z,
                          children:
                            "NetworkSettings" === u.key
                              ? (0, j.jsx)("span", { children: oe })
                              : (0, j.jsx)("span", { children: L }),
                        }),
                      ],
                    }),
                    Me = [
                      { id: "lan", label: ne, disabled: !1 },
                      { id: "wifi", label: te, disabled: !Pe.value },
                      { id: "hotspot", label: re, disabled: !We.value },
                    ],
                    Ie = [
                      { id: "static", label: q },
                      { id: "dhcp", label: G },
                    ],
                    ze = (0, m.filter)(c, { ssid: Ne.value });
                  return (
                    ze && ze[0] && ze[0].secMode && (je.value = ze[0].secMode),
                    (0, j.jsxs)(j.Fragment, {
                      children: [
                        (0, j.jsxs)(N.e0, {
                          padding: !0,
                          mobile: d,
                          children: [
                            l && (0, j.jsx)(N.gb, {}),
                            ("DeviceSetup" !== u.key ||
                              ("DeviceSetup" === u.key && !d)) &&
                              (0, j.jsx)(N.V1, { mobile: d, children: H }),
                            "DeviceSetup" !== u.key &&
                              v &&
                              (0, j.jsx)(_.Z, {
                                onBack: function () {
                                  (U(), e.navigate("/settings/"));
                                },
                                isForm: !0,
                                isDirty: s,
                                backArrowClick: function () {
                                  return e.navigate("/settings/");
                                },
                                pageTitle: H,
                                actionButtonIcon: x
                                  ? (0, j.jsx)(w.Z, { children: "check" })
                                  : null,
                                actionButtonTitle: x ? oe : null,
                                actionButtonClick: x ? z : null,
                              }),
                            !d &&
                              (0, j.jsxs)(j.Fragment, {
                                children: [
                                  "DeviceSetup" !== u.key &&
                                    (0, j.jsx)(N.mV, {
                                      out: !i,
                                      mobile: d,
                                      icon: (0, j.jsx)(w.Z, {
                                        children: "check",
                                      }),
                                      message: ae,
                                    }),
                                  (0, j.jsx)(P, {
                                    children: (0, j.jsx)(N.T5, {
                                      items: Me.map(function (e) {
                                        return {
                                          slug: e.id,
                                          name: e.label,
                                          redDot: e.disabled,
                                        };
                                      }),
                                      selected: be.value,
                                      onChange: function (e) {
                                        return T({ connection: e });
                                      },
                                      selectedColor: "#FFF",
                                      notSelectedColor: "rgba(114,126,132,0.5)",
                                      cursorColor: "#007BC1",
                                    }),
                                  }),
                                ],
                              }),
                            d &&
                              x &&
                              (0, j.jsx)(N.Oj, {
                                id: "MobileActionButton_Save",
                                mobile: !0,
                                icon: (0, j.jsx)(w.Z, { children: "check" }),
                                onClick: z,
                                children: oe,
                              }),
                            (0, j.jsxs)(N.l0, {
                              showButtons: g,
                              buttons: Re,
                              mobile: d,
                              fixed: "DeviceSetup" === u.key && d,
                              containerHeight: d
                                ? "DeviceSetup" === u.key &&
                                  "calc(100vh - 350px)"
                                : "DeviceSetup" === u.key
                                  ? "55vh"
                                  : "calc(100vh - 380px)",
                              children: [
                                (0, j.jsx)(Z.Z, {
                                  id: "FormGeneralError",
                                  dirty: s,
                                  error: o,
                                  info: a,
                                  full: !0,
                                }),
                                k &&
                                  k.map(function (e, t) {
                                    return (0, j.jsx)(
                                      Z.Z,
                                      {
                                        id: "ApiError_".concat(t),
                                        dirty: !0,
                                        error: e,
                                        full: !0,
                                      },
                                      t,
                                    );
                                  }),
                                d &&
                                  (0, j.jsx)(I, {
                                    margin: "0 8px",
                                    children: ne,
                                  }),
                                ("lan" === be.value || d) &&
                                  (0, j.jsx)(j.Fragment, {
                                    children: (0, j.jsxs)(N.l0.Row, {
                                      full: d,
                                      children: [
                                        (0, j.jsx)(N.OC, {
                                          id: "IpOrigin",
                                          color: "rgba(0, 0, 0, 0.02)",
                                          label: K,
                                          options: Ie.map(function (e) {
                                            return {
                                              val: e.id,
                                              label: e.label,
                                            };
                                          }),
                                          selected: ke.value,
                                          disabled: !1,
                                          error: s && !ke.valid,
                                          full: !1,
                                          onChange: function (e) {
                                            return T({ iporigin: e });
                                          },
                                        }),
                                        (0, j.jsx)(S.Z, {
                                          id: "IpOrigin",
                                          showError: s && !ke.valid,
                                          errorMessage: ke.message,
                                        }),
                                      ],
                                    }),
                                  }),
                                ("lan" === be.value || d) &&
                                  "static" === ke.value &&
                                  (0, j.jsxs)(j.Fragment, {
                                    children: [
                                      (0, j.jsxs)(N.l0.Row, {
                                        full: d,
                                        children: [
                                          (0, j.jsx)(N.oH, {
                                            id: "Ipv4",
                                            label: Y,
                                            value: Se.value,
                                            error: s && !Se.valid,
                                            onChange: function (e) {
                                              var t = e.target;
                                              return T({
                                                intendedipv4: t.value,
                                              });
                                            },
                                          }),
                                          (0, j.jsx)(S.Z, {
                                            id: "Ipv4_Error",
                                            showError: s && !Se.valid,
                                            errorMessage: Se.message,
                                          }),
                                          (0, j.jsx)(S.Z, {
                                            id: "Ipv4_formatError",
                                            showError: s && !Se.formatvalid,
                                            errorMessage: Se.formatmessage,
                                          }),
                                        ],
                                      }),
                                      (0, j.jsxs)(N.l0.Row, {
                                        full: d,
                                        children: [
                                          (0, j.jsx)(N.oH, {
                                            id: "SubnetMask",
                                            label: $,
                                            value: Ze.value,
                                            error: s && !Ze.valid,
                                            onChange: function (e) {
                                              var t = e.target;
                                              return T({ subnetmask: t.value });
                                            },
                                          }),
                                          (0, j.jsx)(S.Z, {
                                            id: "Subnetmask_Error",
                                            showError: s && !Ze.valid,
                                            errorMessage: Ze.message,
                                          }),
                                          (0, j.jsx)(S.Z, {
                                            id: "Subnetmask_formatError",
                                            showError: s && !Ze.formatvalid,
                                            errorMessage: Ze.formatmessage,
                                          }),
                                        ],
                                      }),
                                      (0, j.jsxs)(N.l0.Row, {
                                        full: d,
                                        children: [
                                          (0, j.jsx)(N.oH, {
                                            id: "Gateway",
                                            label: J,
                                            value: _e.value,
                                            error: s && !_e.valid,
                                            onChange: function (e) {
                                              var t = e.target;
                                              return T({ gateway: t.value });
                                            },
                                          }),
                                          (0, j.jsx)(S.Z, {
                                            id: "Gateway_Error",
                                            showError: s && !_e.valid,
                                            errorMessage: _e.message,
                                          }),
                                          (0, j.jsx)(S.Z, {
                                            id: "Gateway_formatError",
                                            showError: s && !_e.formatvalid,
                                            errorMessage: _e.formatmessage,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ("lan" === be.value || d) &&
                                  (0, j.jsx)(j.Fragment, {
                                    children: (0, j.jsxs)(N.l0.Row, {
                                      full: d,
                                      children: [
                                        (0, j.jsx)(N.oH, {
                                          id: "DnsServer",
                                          label: V,
                                          value: Ee.value,
                                          error: s && !Ee.valid,
                                          onChange: function (e) {
                                            var t = e.target;
                                            return T({ dnsaddress: t.value });
                                          },
                                        }),
                                        (0, j.jsx)(S.Z, {
                                          id: "DnsServer_Error",
                                          showError: s && !Ee.valid,
                                          errorMessage: Ee.message,
                                        }),
                                        (0, j.jsx)(S.Z, {
                                          id: "DnsServer_formatError",
                                          showError: s && !Ee.formatvalid,
                                          errorMessage: Ee.formatmessage,
                                        }),
                                      ],
                                    }),
                                  }),
                                d &&
                                  (0, j.jsx)(j.Fragment, {
                                    children: (0, j.jsx)(I, {
                                      margin: "32px 0 0 8px",
                                      children: te,
                                    }),
                                  }),
                                ("wifi" === be.value || d) &&
                                  (0, j.jsxs)(j.Fragment, {
                                    children: [
                                      (0, j.jsxs)(N.l0.Row, {
                                        full: d,
                                        children: [
                                          (0, j.jsx)(M, { children: te }),
                                          (0, j.jsx)(R, {
                                            id: "SwitchLabel_wifi",
                                            control: (0, j.jsx)(W, {
                                              id: "PowerSwitch_wifi",
                                              checked: Pe.value,
                                              onChange: function () {
                                                return B(!0);
                                              },
                                              classes: {
                                                checked: "checked",
                                                track: "bar",
                                              },
                                            }),
                                            label: Pe.value ? le : de,
                                          }),
                                        ],
                                      }),
                                      (0, j.jsxs)(N.l0.Row, {
                                        full: d,
                                        children: [
                                          (0, j.jsx)(N.OC, {
                                            id: "NetworkName",
                                            label: (0, j.jsxs)(j.Fragment, {
                                              children: [
                                                X,
                                                (0, j.jsx)(y, {
                                                  disabled: !Pe.value,
                                                  onClick: O,
                                                  children: ie,
                                                }),
                                              ],
                                            }),
                                            options: c.map(function (e) {
                                              var t = e.ssid;
                                              return { val: t, label: t };
                                            }),
                                            selected: Ne.value,
                                            error: s && !Ne.valid,
                                            disabled: !Pe.value,
                                            full: !1,
                                            onChange: function (e) {
                                              return T({ networkname: e });
                                            },
                                          }),
                                          (0, j.jsx)(S.Z, {
                                            id: "Networkname_Error",
                                            showError: s && !Ne.valid,
                                            errorMessage: Ne.message,
                                          }),
                                        ],
                                      }),
                                      (0, j.jsx)(N.l0.Row, {
                                        full: d,
                                        children: (0, j.jsx)(N.oH, {
                                          id: "SecurityMode",
                                          label: Q,
                                          value: je.value,
                                          disabled: !0,
                                          onChange: function (e) {
                                            var t = e.target;
                                            return T({ securitymode: t.value });
                                          },
                                        }),
                                      }),
                                      (0, j.jsxs)(N.l0.Row, {
                                        full: d,
                                        children: [
                                          (0, j.jsx)(N.oH, {
                                            id: "NetworkPassword",
                                            type: "password",
                                            label: ee,
                                            value: Te.value,
                                            error: s && !Te.valid,
                                            onChange: function (e) {
                                              var t = e.target;
                                              return T({
                                                networkpassword:
                                                  t.value.replace(/\x00/g, ""),
                                              });
                                            },
                                            disabled: !Pe.value,
                                          }),
                                          (0, j.jsx)(S.Z, {
                                            id: "NetworkPassword_Error",
                                            showError: s && !Te.valid,
                                            errorMessage: Te.message,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ("wifi" === be.value || d) &&
                                  (0, j.jsxs)(N.l0.Row, {
                                    full: d,
                                    children: [
                                      (0, j.jsx)(N.oH, {
                                        id: "WifiDnsServer",
                                        label: V,
                                        value: Ee.value,
                                        error: s && !Ee.valid,
                                        onChange: function (e) {
                                          var t = e.target;
                                          return T({ dnsaddress: t.value });
                                        },
                                        disabled: !Pe.value,
                                      }),
                                      (0, j.jsx)(S.Z, {
                                        id: "WifiDnsServer_Error",
                                        showError: s && !Ee.valid,
                                        errorMessage: Ee.message,
                                      }),
                                      (0, j.jsx)(S.Z, {
                                        id: "WifiDnsServer_formatError",
                                        showError: s && !Ee.formatvalid,
                                        errorMessage: Ee.formatmessage,
                                      }),
                                    ],
                                  }),
                                d &&
                                  (0, j.jsx)(I, {
                                    margin: "32px 0 0 8px",
                                    children: re,
                                  }),
                                ("hotspot" === be.value || d) &&
                                  (0, j.jsxs)(j.Fragment, {
                                    children: [
                                      (0, j.jsxs)(N.l0.Row, {
                                        full: d,
                                        children: [
                                          (0, j.jsx)(M, { children: re }),
                                          (0, j.jsx)(R, {
                                            id: "SwitchLabel_Hotspot",
                                            control: (0, j.jsx)(W, {
                                              id: "PowerSwitch_Hotspot",
                                              checked: We.value,
                                              onChange: function () {
                                                return We.value
                                                  ? F(!0)
                                                  : A(!We.value);
                                              },
                                              classes: {
                                                checked: "checked",
                                                track: "bar",
                                              },
                                            }),
                                            label: We.value ? fe : pe,
                                          }),
                                        ],
                                      }),
                                      (0, j.jsxs)(N.l0.Row, {
                                        full: d,
                                        children: [
                                          (0, j.jsx)(N.oH, {
                                            id: "HotspotNetworkname",
                                            label: X,
                                            value: ye.value,
                                            error: s && !ye.valid,
                                            onChange: function (e) {
                                              var t = e.target;
                                              return T({
                                                hotspotNetworkname: t.value,
                                              });
                                            },
                                            disabled: !We.value,
                                          }),
                                          (0, j.jsx)(S.Z, {
                                            id: "HotspotNetworkname_Error",
                                            showError: s && !ye.valid,
                                            errorMessage: ye.message,
                                          }),
                                        ],
                                      }),
                                      (0, j.jsxs)(N.l0.Row, {
                                        full: d,
                                        children: [
                                          (0, j.jsx)(N.oH, {
                                            id: "HotspotPassword",
                                            type: "password",
                                            label: ee,
                                            value: Ce.value,
                                            error: s && !Ce.valid,
                                            onChange: function (e) {
                                              var t = e.target;
                                              return T({
                                                hotspotPassword:
                                                  t.value.replace(/\x00/g, ""),
                                              });
                                            },
                                            disabled: !We.value,
                                          }),
                                          (0, j.jsx)(S.Z, {
                                            id: "HotspotPassword_Error",
                                            showError: s && !Ce.valid,
                                            errorMessage: Ce.message,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, j.jsx)(N.u_, {
                          open: f,
                          size: "small",
                          children: (0, j.jsxs)("div", {
                            children: [
                              (0, j.jsx)(N.xB, { title: ce }),
                              (0, j.jsxs)(N.hz, {
                                size: "small",
                                padding: !0,
                                children: [
                                  (0, j.jsx)(b.Z, { variant: "query" }),
                                  (0, j.jsx)(C, { children: ue }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, j.jsx)(N.u_, {
                          open: p,
                          size: "small",
                          children: (0, j.jsxs)("div", {
                            children: [
                              (0, j.jsx)(N.xB, { title: ce }),
                              (0, j.jsx)(N.hz, {
                                padding: !0,
                                children: (0, j.jsx)(N.ZT, {
                                  children: Pe.value ? he : ve,
                                }),
                              }),
                              (0, j.jsxs)(N.Zf, {
                                children: [
                                  (0, j.jsx)(N.zx, {
                                    id: "PrimaryButton_Cancel",
                                    buttonType: "primary-cancel",
                                    margin: "0 12px",
                                    buttonWidth: "156px",
                                    onClick: function () {
                                      return B(!1);
                                    },
                                    children: xe,
                                  }),
                                  (0, j.jsx)(N.zx, {
                                    id: "PrimaryButton_Confirm",
                                    margin: "0 12px",
                                    buttonWidth: "156px",
                                    onClick: function () {
                                      return D(!Pe.value);
                                    },
                                    children: ge,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, j.jsx)(N.u_, {
                          open: h,
                          size: "small",
                          children: (0, j.jsxs)("div", {
                            children: [
                              (0, j.jsx)(N.xB, { title: ce }),
                              (0, j.jsx)(N.hz, {
                                padding: !0,
                                children: (0, j.jsx)(N.ZT, { children: me }),
                              }),
                              (0, j.jsxs)(N.Zf, {
                                children: [
                                  (0, j.jsx)(N.zx, {
                                    id: "PrimaryButton_Cancel",
                                    buttonType: "primary-cancel",
                                    margin: "0 12px",
                                    buttonWidth: "156px",
                                    onClick: function () {
                                      return F(!1);
                                    },
                                    children: xe,
                                  }),
                                  (0, j.jsx)(N.zx, {
                                    id: "PrimaryButton_Confirm",
                                    margin: "0 12px",
                                    buttonWidth: "156px",
                                    onClick: function () {
                                      return A(!We.value);
                                    },
                                    children: ge,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    })
                  );
                },
              },
            ]),
            n
          );
        })(v.Component);
      t.Z = (0, x.Z)(T);
      var y = g.ZP.button(
          r ||
            (r = (0, l.default)([
              "\n  color: #007bc1;\n  font-family: 'Open Sans';\n  font-size: 14px;\n  line-height: 14px;\n  text-align: center;\n  text-decoration: underline;\n  background: transparent;\n  border: 0px;\n  justify-content: center;\n  cursor: pointer;\n",
            ])),
        ),
        C = (0, g.ZP)(N.ZT)(
          s ||
            (s = (0, l.default)([
              "\n  &&&& {\n    color: #5b6770;\n    font-size: 20px;\n    font-weight: 600;\n    line-height: 20px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 20px;\n  }\n",
            ])),
        ),
        P = g.ZP.div(o || (o = (0, l.default)(["\n  margin-top: 30px;\n"]))),
        W = (0, g.ZP)(E.Z)(
          a ||
            (a = (0, l.default)([
              "\n  &&&& {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 10;\n\n    .checked {\n      color: #007bc1;\n    }\n    .checked + .bar {\n      background-color: #007bc1;\n      opacity: 0.4;\n    }\n  }\n",
            ])),
        ),
        R = (0, g.ZP)(k.Z)(
          i ||
            (i = (0, l.default)([
              "\n  height: 48px;\n  position: relative;\n  margin-left: 0 !important;\n  margin-right: 0;\n  width: 100%;\n  padding-left: 8px;\n\n  > span:nth-child(2) {\n    width: 85%;\n    color: #424e54;\n    font-family: 'Open Sans';\n    font-size: 14px;\n    line-height: 20px;\n  }\n  box-shadow: inset 0 -1px 0 0 rgba(114, 126, 132, 0.2);\n",
            ])),
        ),
        M = g.ZP.p(
          u ||
            (u = (0, l.default)([
              "\n  color: #5b6770;\n  font-family: 'Open Sans';\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 14px;\n  padding-left: 8px;\n  margin-bottom: 0;\n",
            ])),
        ),
        I = g.ZP.h4(
          c ||
            (c = (0, l.default)([
              "\n  color: #333f48;\n  font-family: 'Open Sans';\n  font-size: 16px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  line-height: 24px;\n  text-transform: uppercase;\n  margin: ",
              ";\n",
            ])),
          function (e) {
            return e.margin;
          },
        );
    },
    79408: function (e, t, n) {
      var r = n(87121),
        s = n(2845),
        o = n(84628),
        a = n(83749),
        i = n(49745),
        u = n(98278),
        c = n.n(u),
        l = n(87611),
        d = n.n(l),
        f = n(13795),
        p = n(42477),
        h = n(4e3),
        v = n(49318),
        g = n(20054),
        x = n(2729),
        m = "".concat(f.CT, "/v2/settings/network/"),
        w = "".concat(f.CT, "/v2/settings/network/wifi/scan"),
        b = "".concat(f.CT, "/v2/settings/network/wifi/set_enable"),
        k = "".concat(f.CT, "/v2/settings/network/hotspot/set_enable"),
        E = {
          dnsaddress: "ip",
          intendedipv4: "ip",
          subnetmask: "subnet",
          gateway: "ip",
        },
        S = {
          connection: { value: "lan" },
          iporigin: { value: "static" },
          dnsaddress: { value: "8.8.8.8" },
          intendedipv4: { value: "" },
          subnetmask: { value: "" },
          gateway: { value: "" },
          wifiEnabled: { value: !0 },
          networkname: { value: "" },
          securitymode: { value: "" },
          networkpassword: { value: "" },
          hotspotEnabled: { value: !0 },
          hotspotNetworkname: { value: "" },
          hotspotPassword: { value: "" },
        },
        Z = {
          connection: [p.q9],
          iporigin: [p.q9],
          dnsaddress: [p.q9],
          intendedipv4: [p.$Z, p.q9],
          subnetmask: [p.$Z, p.q9],
          gateway: [],
          networkname: [p.ne, p.q9],
          securitymode: [p.ne, p.q9],
          networkpassword: [p.ne, p.q9],
          hotspotNetworkname: [p.$C, p.q9],
          hotspotPassword: [p.$C, p.q9, p.hv],
        };
      t.Z = (0, o.Jg)({
        path: function () {
          return ["scenes", "containers", "SetupNetworkConfigs"];
        },
        connect: {
          props: [v.Z, ["translations", "currentRoute", "isMobile"]],
          actions: [
            h.Z,
            ["submitting", "changeStep"],
            v.Z,
            ["push"],
            g.Z,
            ["fetchDeviceInfo"],
          ],
        },
        actions: function () {
          return {
            change: function (e) {
              return { field: e };
            },
            reset: function () {
              return !0;
            },
            setForm: function (e) {
              return { form: e };
            },
            cacheForm: function (e) {
              return { form: e };
            },
            setError: function (e) {
              return e;
            },
            setApiError: function (e) {
              return e;
            },
            setInfo: function (e) {
              return e;
            },
            submit: function () {
              return !0;
            },
            checkNetworkStatus: function () {
              return !0;
            },
            setNetworkNames: function (e) {
              return { networkNames: e };
            },
            setLoading: function (e) {
              return e;
            },
            setLoadingWifiNetwork: function () {
              return !0;
            },
            setSuccessMessage: function (e) {
              return e;
            },
            scanWifi: function () {
              return { scan: !0 };
            },
            patchHotspot: function (e) {
              return { enabled: e };
            },
            patchWifi: function (e) {
              return { enabled: e };
            },
            setWifiModal: function (e) {
              return { value: e };
            },
            setHotspotModal: function (e) {
              return { value: e };
            },
            setFixNavbar: function (e) {
              return { fix: e };
            },
            revertChanges: !0,
          };
        },
        reducers: function (e) {
          var t,
            n,
            r,
            o,
            a,
            i,
            u,
            l,
            d,
            f,
            h,
            v = e.actions;
          return {
            form: [
              S,
              c().object,
              ((t = {}),
              (0, s.Z)(t, v.change, function (e, t) {
                return j({ invalid: !1, form: p.jR(e, t, Z) }).form;
              }),
              (0, s.Z)(t, v.setForm, function (e, t) {
                return j(p.Yg(t.form, Z)).form;
              }),
              (0, s.Z)(t, v.reset, function () {
                return S;
              }),
              t),
            ],
            dirty: [
              !1,
              c().bool,
              ((n = {}),
              (0, s.Z)(n, v.change, function (e, t) {
                return e || (t.field && !t.field.connection);
              }),
              (0, s.Z)(n, v.reset, function () {
                return !1;
              }),
              (0, s.Z)(n, v.setSuccessMessage, function () {
                return !1;
              }),
              (0, s.Z)(n, v.setError, function () {
                return !0;
              }),
              (0, s.Z)(n, v.revertChanges, function () {
                return !1;
              }),
              n),
            ],
            error: [
              null,
              c().any,
              ((r = {}),
              (0, s.Z)(r, v.setError, function (e, t) {
                return t;
              }),
              (0, s.Z)(r, v.reset, function () {
                return null;
              }),
              (0, s.Z)(r, v.submit, function () {
                return null;
              }),
              r),
            ],
            apiError: [
              null,
              c().array,
              ((o = {}),
              (0, s.Z)(o, v.setApiError, function (e, t) {
                return t;
              }),
              (0, s.Z)(o, v.reset, function () {
                return null;
              }),
              (0, s.Z)(o, v.submit, function () {
                return null;
              }),
              o),
            ],
            info: [
              null,
              c().any,
              ((a = {}),
              (0, s.Z)(a, v.setInfo, function (e, t) {
                return t;
              }),
              (0, s.Z)(a, v.reset, function () {
                return null;
              }),
              (0, s.Z)(a, v.submit, function () {
                return null;
              }),
              (0, s.Z)(a, v.setError, function () {
                return null;
              }),
              a),
            ],
            loading: [
              !1,
              c().bool,
              ((i = {}),
              (0, s.Z)(i, v.setLoading, function (e, t) {
                return t;
              }),
              (0, s.Z)(i, v.checkNetworkStatus, function () {
                return !0;
              }),
              (0, s.Z)(i, v.setError, function () {
                return !1;
              }),
              (0, s.Z)(i, v.setApiError, function () {
                return !1;
              }),
              (0, s.Z)(i, v.setForm, function () {
                return !1;
              }),
              (0, s.Z)(i, v.setSuccessMessage, function () {
                return !1;
              }),
              (0, s.Z)(i, v.patchHotspot, function () {
                return !0;
              }),
              (0, s.Z)(i, v.patchWifi, function () {
                return !0;
              }),
              (0, s.Z)(i, v.change, function () {
                return !1;
              }),
              i),
            ],
            loadingWifiNetwork: [
              !1,
              c().bool,
              ((u = {}),
              (0, s.Z)(u, v.setLoadingWifiNetwork, function (e, t) {
                return !e;
              }),
              (0, s.Z)(u, v.setError, function () {
                return !1;
              }),
              (0, s.Z)(u, v.setApiError, function () {
                return !1;
              }),
              u),
            ],
            networkNames: [
              [],
              c().array,
              (0, s.Z)({}, v.setNetworkNames, function (e, t) {
                return t.networkNames;
              }),
            ],
            successMessage: [
              !1,
              c().bool,
              ((l = {}),
              (0, s.Z)(l, v.change, function () {
                return !1;
              }),
              (0, s.Z)(l, v.setSuccessMessage, function (e, t) {
                return t;
              }),
              (0, s.Z)(l, v.setError, function () {
                return !1;
              }),
              (0, s.Z)(l, v.reset, function () {
                return !1;
              }),
              l),
            ],
            wifiModal: [
              !1,
              c().bool,
              ((d = {}),
              (0, s.Z)(d, v.setWifiModal, function (e, t) {
                return t.value;
              }),
              (0, s.Z)(d, v.reset, function () {
                return !1;
              }),
              (0, s.Z)(d, v.patchWifi, function () {
                return !1;
              }),
              d),
            ],
            hotspotModal: [
              !1,
              c().bool,
              ((f = {}),
              (0, s.Z)(f, v.setHotspotModal, function (e, t) {
                return t.value;
              }),
              (0, s.Z)(f, v.reset, function () {
                return !1;
              }),
              (0, s.Z)(f, v.patchHotspot, function () {
                return !1;
              }),
              f),
            ],
            fixNavbar: [
              !1,
              c().bool,
              ((h = {}),
              (0, s.Z)(h, v.setFixNavbar, function (e, t) {
                return t.fix;
              }),
              (0, s.Z)(h, v.reset, function () {
                return !1;
              }),
              h),
            ],
            formContent: [
              S,
              c().object,
              (0, s.Z)({}, v.cacheForm, function (e, t) {
                return t.form;
              }),
            ],
          };
        },
        selectors: function (e) {
          e.actions;
          var t = e.selectors;
          return {
            showFormButtons: [
              function () {
                return [t.currentRoute, t.dirty, t.isMobile];
              },
              function (e, t, n) {
                return (
                  "DeviceSetup" === e.key ||
                  ("DeviceSetup" !== e.key && t && !n)
                );
              },
              c().bool,
            ],
            showTopBarButtons: [
              function () {
                return [t.currentRoute, t.dirty, t.isMobile];
              },
              function (e, t, n) {
                return "DeviceSetup" !== e.key && t && n;
              },
              c().bool,
            ],
          };
        },
        takeLatest: function (e) {
          var t,
            n = e.actions,
            r = e.workers;
          return (
            (t = {}),
            (0, s.Z)(t, n.submit, r.submit),
            (0, s.Z)(t, n.checkNetworkStatus, r.checkNetworkStatus),
            (0, s.Z)(t, n.scanWifi, r.checkWifiNetwork),
            (0, s.Z)(t, n.patchHotspot, r.patchHotspot),
            (0, s.Z)(t, n.patchWifi, r.patchWifi),
            (0, s.Z)(t, n.revertChanges, r.revertChanges),
            t
          );
        },
        start: (0, r.Z)().mark(function e() {
          var t;
          return (0, r.Z)().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = this.actionCreators.checkNetworkStatus),
                      (e.next = 3),
                      (0, a.gz)(t())
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
        stop: (0, r.Z)().mark(function e() {
          var t;
          return (0, r.Z)().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = this.actionCreators.reset),
                      (e.next = 3),
                      (0, a.gz)(t())
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
        workers: {
          checkNetworkStatus: (0, r.Z)().mark(function e() {
            var t, n, s, o, u, c, l, d, f, p, h, v, g, w, b, k, E;
            return (0, r.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators),
                        (n = t.setForm),
                        (s = t.setApiError),
                        (o = t.setInfo),
                        (u = t.setNetworkNames),
                        (c = t.cacheForm),
                        (e.prev = 1),
                        (e.next = 4),
                        (0, a.RE)(i.Z.get, m)
                      );
                    case 4:
                      if (
                        ((l = e.sent),
                        (d = l.data.result),
                        (f =
                          d.hotspot && d.hotspot.password
                            ? d.hotspot.password
                            : "\0\0\0\0\0\0\0\0"),
                        (p = !!d.hotspot && d.hotspot.enabled),
                        "P4svFJA9" !== f || !p)
                      ) {
                        e.next = 16;
                        break;
                      }
                      return ((e.next = 11), this.get("translations"));
                    case 11:
                      return (
                        (h = e.sent),
                        (v = h[(0, x.pG)({ code: 1033 })]),
                        (f = ""),
                        (e.next = 16),
                        (0, a.gz)(o(v))
                      );
                    case 16:
                      return (
                        (g = {
                          connection: { value: "lan" },
                          iporigin: { value: d.lan.ipMode },
                          dnsaddress: { value: d.dnsServer },
                          intendedipv4: { value: d.lan.ipv4 },
                          subnetmask: { value: d.lan.subnetMask },
                          gateway: { value: d.lan.gateway },
                          wifiEnabled: { value: !!d.wifi && d.wifi.enabled },
                          networkname: { value: d.wifi.ssid },
                          securitymode: { value: d.wifi.secMode },
                          networkpassword: { value: "\0\0\0\0\0\0\0\0" },
                          hotspotEnabled: { value: p },
                          hotspotNetworkname: {
                            value: d.hotspot ? d.hotspot.ssid : "",
                          },
                          hotspotPassword: { value: f },
                        }),
                        (e.next = 19),
                        (0, a.gz)(n(g))
                      );
                    case 19:
                      return ((e.next = 21), (0, a.gz)(c(g)));
                    case 21:
                      if (!d.wifi.ssid) {
                        e.next = 24;
                        break;
                      }
                      return (
                        (e.next = 24),
                        (0, a.gz)(u([{ ssid: d.wifi.ssid }]))
                      );
                    case 24:
                      e.next = 41;
                      break;
                    case 26:
                      if (
                        ((e.prev = 26), (e.t0 = e.catch(1)), !e.t0.response)
                      ) {
                        e.next = 40;
                        break;
                      }
                      return ((e.next = 31), this.get("translations"));
                    case 31:
                      if (
                        ((w = e.sent),
                        (b = e.t0.response || {}),
                        (k = b.data),
                        (E = []),
                        !k || !k.errors)
                      ) {
                        e.next = 38;
                        break;
                      }
                      return (
                        k.errors.forEach(function (e) {
                          e.messages.forEach(function (e) {
                            E.push(w[(0, x.pG)(e)]);
                          });
                        }),
                        (e.next = 38),
                        (0, a.gz)(s(E))
                      );
                    case 38:
                      e.next = 41;
                      break;
                    case 40:
                      console.log(e.t0);
                    case 41:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[1, 26]],
            );
          }),
          checkWifiNetwork: (0, r.Z)().mark(function e(t) {
            var n, s, o, u, c, l, d, f, p, h, v, g;
            return (0, r.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators),
                        (s = n.setNetworkNames),
                        (o = n.setApiError),
                        (u = n.setLoadingWifiNetwork),
                        (c = !1),
                        (e.next = 4),
                        this.get("networkNames")
                      );
                    case 4:
                      if (
                        ((l = e.sent),
                        t.payload &&
                          ((t.payload.field &&
                            "wifi" === t.payload.field.connection &&
                            0 === l.length) ||
                            t.payload.scan) &&
                          (c = !0),
                        !c)
                      ) {
                        e.next = 36;
                        break;
                      }
                      return ((e.next = 9), (0, a.gz)(u()));
                    case 9:
                      return (
                        (e.prev = 9),
                        (e.next = 12),
                        (0, a.RE)(i.Z.post, w)
                      );
                    case 12:
                      return (
                        (d = e.sent),
                        (f = d.data.result),
                        (e.next = 16),
                        (0, a.gz)(s(f.results))
                      );
                    case 16:
                      return ((e.next = 18), (0, a.gz)(u()));
                    case 18:
                    case 32:
                      e.next = 36;
                      break;
                    case 20:
                      if (
                        ((e.prev = 20), (e.t0 = e.catch(9)), !e.t0.response)
                      ) {
                        e.next = 34;
                        break;
                      }
                      return ((e.next = 25), this.get("translations"));
                    case 25:
                      if (
                        ((p = e.sent),
                        (h = e.t0.response || {}),
                        !(v = h.data) || !v.errors)
                      ) {
                        e.next = 32;
                        break;
                      }
                      return (
                        (g = []),
                        v.errors.forEach(function (e) {
                          e.messages.forEach(function (e) {
                            g.push(p[(0, x.pG)(e)]);
                          });
                        }),
                        (e.next = 32),
                        (0, a.gz)(o(g))
                      );
                    case 34:
                      return ((e.next = 36), (0, a.gz)(o(["unknown error"])));
                    case 36:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[9, 20]],
            );
          }),
          submit: (0, r.Z)().mark(function e() {
            var t,
              n,
              s,
              o,
              u,
              c,
              l,
              f,
              h,
              v,
              g,
              w,
              b,
              k,
              S,
              _,
              N,
              T,
              y,
              C,
              P,
              W,
              R,
              M,
              I,
              z,
              O,
              D,
              A;
            return (0, r.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators),
                        (n = t.setError),
                        (s = t.setApiError),
                        (o = t.setSuccessMessage),
                        (u = t.setLoading),
                        (c = t.change),
                        (l = t.cacheForm),
                        (e.next = 3),
                        this.get("currentRoute")
                      );
                    case 3:
                      return (
                        (f = e.sent),
                        (e.next = 6),
                        this.get("translations")
                      );
                    case 6:
                      return ((h = e.sent), (e.next = 9), this.get("form"));
                    case 9:
                      if (
                        ((v = e.sent),
                        (g = v.networkname),
                        (w = v.networkpassword),
                        (b = v.securitymode),
                        (k = v.iporigin),
                        (S = v.dnsaddress),
                        (_ = v.intendedipv4),
                        (N = v.subnetmask),
                        (T = v.gateway),
                        (y = v.hotspotPassword),
                        (C = v.hotspotNetworkname),
                        (P = v.wifiEnabled),
                        (W = v.hotspotEnabled),
                        "NetworkSettings" !== f.key)
                      ) {
                        e.next = 14;
                        break;
                      }
                      return ((e.next = 14), (0, a.gz)(u(!0)));
                    case 14:
                      return (
                        (e.next = 16),
                        (0, a.gz)(this.actionCreators.submitting(!0))
                      );
                    case 16:
                      if (!(R = j(p.Yg(v, Z))).invalid && R.allIpsValid) {
                        e.next = 36;
                        break;
                      }
                      if (
                        ((M = d()(Object.keys(v), function (e) {
                          return !v[e].valid || (E[e] && !v[e].formatvalid);
                        })),
                        -1 ===
                          [
                            "networkname",
                            "networkpassword",
                            "securitymode",
                          ].indexOf(M))
                      ) {
                        e.next = 24;
                        break;
                      }
                      return (
                        (e.next = 22),
                        (0, a.gz)(c({ connection: "wifi" }))
                      );
                    case 22:
                    case 27:
                      e.next = 31;
                      break;
                    case 24:
                      if (
                        -1 ===
                        ["hotspotNetworkname", "hotspotPassword"].indexOf(M)
                      ) {
                        e.next = 29;
                        break;
                      }
                      return (
                        (e.next = 27),
                        (0, a.gz)(c({ connection: "hotspot" }))
                      );
                    case 29:
                      return (
                        (e.next = 31),
                        (0, a.gz)(c({ connection: "lan" }))
                      );
                    case 31:
                      return (
                        (e.next = 33),
                        (0, a.gz)(n(h.FORM_SAVE_ERRORS_FIELDS))
                      );
                    case 33:
                      return (
                        (e.next = 35),
                        (0, a.gz)(this.actionCreators.submitting(!1))
                      );
                    case 35:
                      return e.abrupt("return", !1);
                    case 36:
                      return (
                        (e.prev = 36),
                        (I = {
                          wifi: {
                            ssid: g.value,
                            password: w.value,
                            secMode: b.value,
                            enabled: P.value,
                          },
                          lan: {
                            ipMode: k.value,
                            ipv4: _.value,
                            subnetMask: N.value,
                            gateway: T.value,
                          },
                          hotspot: {
                            ssid: C.value,
                            password: y.value,
                            enabled: W.value,
                          },
                          dnsServer: S.value,
                        }),
                        (e.next = 40),
                        (0, a.RE)(i.Z.put, m, I)
                      );
                    case 40:
                      return (
                        (e.next = 42),
                        (0, a.gz)(this.actionCreators.submitting(!1))
                      );
                    case 42:
                      return (
                        (e.next = 44),
                        (0, a.gz)(
                          this.actionCreators.fetchDeviceInfo({ noLoader: !1 }),
                        )
                      );
                    case 44:
                      if ("NetworkSettings" === f.key) {
                        e.next = 49;
                        break;
                      }
                      return (
                        (e.next = 47),
                        (0, a.gz)(this.actionCreators.changeStep(1))
                      );
                    case 47:
                      e.next = 57;
                      break;
                    case 49:
                      return ((e.next = 51), (0, a.gz)(o(!0)));
                    case 51:
                      return ((e.next = 53), (0, a.gz)(l(v)));
                    case 53:
                      return ((e.next = 55), (0, a.gw)(5e3));
                    case 55:
                      return ((e.next = 57), (0, a.gz)(o(!1)));
                    case 57:
                      e.next = 75;
                      break;
                    case 59:
                      if (
                        ((e.prev = 59),
                        (e.t0 = e.catch(36)),
                        "NetworkSettings" === f.key)
                      ) {
                        e.next = 64;
                        break;
                      }
                      return (
                        (e.next = 64),
                        (0, a.gz)(this.actionCreators.submitting(!1))
                      );
                    case 64:
                      if ((console.log(e.t0), !e.t0.response)) {
                        e.next = 75;
                        break;
                      }
                      return ((e.next = 68), this.get("translations"));
                    case 68:
                      if (
                        ((z = e.sent),
                        (O = e.t0.response || {}),
                        !(D = O.data) || !D.errors)
                      ) {
                        e.next = 75;
                        break;
                      }
                      return (
                        (A = []),
                        D.errors.forEach(function (e) {
                          e.messages.forEach(function (e) {
                            A.push(z[(0, x.pG)(e)]);
                          });
                        }),
                        (e.next = 75),
                        (0, a.gz)(s(A))
                      );
                    case 75:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[36, 59]],
            );
          }),
          patchHotspot: (0, r.Z)().mark(function e(t) {
            var n, s, o, u, c, l, d, f, p, h, v, g;
            return (0, r.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators),
                        (s = n.change),
                        (o = n.setApiError),
                        (e.next = 3),
                        this.get("form")
                      );
                    case 3:
                      return (
                        (u = e.sent),
                        (c = t.payload.enabled),
                        (l = { enabled: c }),
                        (e.prev = 6),
                        (e.next = 9),
                        (0, a.RE)(i.Z.post, k, l)
                      );
                    case 9:
                      return (
                        (d = e.sent),
                        (f = d.data.result),
                        (e.next = 13),
                        (0, a.gz)(
                          s({
                            hotspotEnabled: f.enabled,
                            hotspotNetworkname: u.hotspotNetworkname.value,
                            hotspotPassword: u.hotspotPassword.value,
                          }),
                        )
                      );
                    case 13:
                      e.next = 27;
                      break;
                    case 15:
                      if (
                        ((e.prev = 15), (e.t0 = e.catch(6)), !e.t0.response)
                      ) {
                        e.next = 27;
                        break;
                      }
                      return ((e.next = 20), this.get("translations"));
                    case 20:
                      if (
                        ((p = e.sent),
                        (h = e.t0.response || {}),
                        !(v = h.data) || !v.errors)
                      ) {
                        e.next = 27;
                        break;
                      }
                      return (
                        (g = []),
                        v.errors.forEach(function (e) {
                          e.messages.forEach(function (e) {
                            g.push(p[(0, x.pG)(e)]);
                          });
                        }),
                        (e.next = 27),
                        (0, a.gz)(o(g))
                      );
                    case 27:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[6, 15]],
            );
          }),
          patchWifi: (0, r.Z)().mark(function e(t) {
            var n, s, o, u, c, l, d, f, p, h, v, g;
            return (0, r.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators),
                        (s = n.setApiError),
                        (o = n.change),
                        (e.next = 3),
                        this.get("form")
                      );
                    case 3:
                      return (
                        (u = e.sent),
                        (c = t.payload.enabled),
                        (l = { enabled: c }),
                        (e.prev = 6),
                        (e.next = 9),
                        (0, a.RE)(i.Z.post, b, l)
                      );
                    case 9:
                      return (
                        (d = e.sent),
                        (f = d.data.result),
                        (e.next = 13),
                        (0, a.gz)(
                          o({
                            wifiEnabled: f.enabled,
                            networkname: u.networkname.value,
                            securitymode: u.securitymode.value,
                            networkpassword: u.networkpassword.value,
                          }),
                        )
                      );
                    case 13:
                      e.next = 27;
                      break;
                    case 15:
                      if (
                        ((e.prev = 15), (e.t0 = e.catch(6)), !e.t0.response)
                      ) {
                        e.next = 27;
                        break;
                      }
                      return ((e.next = 20), this.get("translations"));
                    case 20:
                      if (
                        ((p = e.sent),
                        (h = e.t0.response || {}),
                        !(v = h.data) || !v.errors)
                      ) {
                        e.next = 27;
                        break;
                      }
                      return (
                        (g = []),
                        v.errors.forEach(function (e) {
                          e.messages.forEach(function (e) {
                            g.push(p[(0, x.pG)(e)]);
                          });
                        }),
                        (e.next = 27),
                        (0, a.gz)(s(g))
                      );
                    case 27:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[6, 15]],
            );
          }),
          revertChanges: (0, r.Z)().mark(function e() {
            var t;
            return (0, r.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return ((e.next = 2), this.get("formContent"));
                    case 2:
                      return (
                        (t = e.sent),
                        (e.next = 5),
                        (0, a.gz)(this.actionCreators.setForm(t))
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
            );
          }),
        },
      });
      var _ = function (e) {
        return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
          e,
        );
      };
      function N(e) {
        if (!_(e)) return !1;
        var t = e
          .split(".")
          .map(function (e) {
            return parseInt(e);
          })
          .map(function (e) {
            return ("00000000" + e.toString(2)).slice(-8);
          })
          .join("");
        return /^11111111[1]*?[0]*?$/.test(t);
      }
      function j(e) {
        var t,
          n = !0,
          r = e.form,
          s = e.invalid;
        for (var o in r)
          E[o] &&
            ("ip" === E[o] &&
              ((t = _(r[o].value) || ("gateway" === o && !r[o].value)) ||
                (n = !1),
              (r[o].formatvalid = t),
              (r[o].formatmessage = t ? "" : "ERR_NET_IP_INVALID")),
            "subnet" === E[o] &&
              ((t = N(r[o].value)) || (n = !1),
              (r[o].formatvalid = t),
              (r[o].formatmessage = t ? "" : "ERR_NET_SUBNET_INVALID")));
        return { invalid: s, allIpsValid: n, form: r };
      }
    },
    4e3: function (e, t, n) {
      var r = n(87121),
        s = n(2845),
        o = n(84628),
        a = n(98278),
        i = n.n(a),
        u = n(83749),
        c = n(49318),
        l = n(13795);
      t.Z = (0, o.Jg)({
        path: function () {
          return ["scenes", "DeviceSetup"];
        },
        connect: {
          props: [
            c.Z,
            [
              "translations",
              "isMobile",
              "configs",
              "setupStatus",
              "currentLocation",
            ],
          ],
          actions: [c.Z, ["checkSetupStatus", "replace"]],
        },
        actions: function () {
          return {
            changeStep: function (e) {
              return { step: e };
            },
            submitting: function (e) {
              return { submitValue: e };
            },
            setNoInternetConnection: function () {
              return {};
            },
            setLoading: function (e) {
              return { loadingValue: e };
            },
            showModalNoInternet: function () {
              return {};
            },
          };
        },
        reducers: function (e) {
          var t,
            n = e.actions;
          return {
            submitting: [
              !1,
              i().bool,
              (0, s.Z)({}, n.submitting, function (e, t) {
                return t.submitValue;
              }),
            ],
            loading: [
              !1,
              i().bool,
              (0, s.Z)({}, n.setLoading, function (e, t) {
                return t.loadingValue;
              }),
            ],
            currentStep: [
              0,
              i().number,
              (0, s.Z)({}, n.changeStep, function (e, t) {
                return t.step;
              }),
            ],
            noInternetConnection: [
              !1,
              i().bool,
              (0, s.Z)({}, n.setNoInternetConnection, function (e, t) {
                return !e;
              }),
            ],
            modalNoInternet: [
              !1,
              i().bool,
              ((t = {}),
              (0, s.Z)(t, n.showModalNoInternet, function (e, t) {
                return !0;
              }),
              (0, s.Z)(t, n.setNoInternetConnection, function (e, t) {
                return !1;
              }),
              t),
            ],
          };
        },
        start: (0, r.Z)().mark(function e() {
          var t, n, s, o, a;
          return (0, r.Z)().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = this.actionCreators),
                      (n = t.checkSetupStatus),
                      (s = t.replace),
                      (e.next = 3),
                      this.get("configs")
                    );
                  case 3:
                    return (
                      (o = e.sent),
                      (e.next = 6),
                      this.get("currentLocation")
                    );
                  case 6:
                    if (
                      ((a = e.sent),
                      o.userType !== l.Df ||
                        !a ||
                        !a.pathname.startsWith("/setup"))
                    ) {
                      e.next = 10;
                      break;
                    }
                    return ((e.next = 10), (0, u.gz)(s("/401")));
                  case 10:
                    return ((e.next = 12), (0, u.gz)(n()));
                  case 12:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this,
          );
        }),
        stop: (0, r.Z)().mark(function e() {
          var t, n, s;
          return (0, r.Z)().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = this.actionCreators),
                      (n = t.changeStep),
                      (s = t.checkSetupStatus),
                      (e.next = 3),
                      (0, u.gz)(s())
                    );
                  case 3:
                    return ((e.next = 5), (0, u.gz)(n(0)));
                  case 5:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this,
          );
        }),
        takeLatest: function (e) {
          (e.actions, e.workers);
          return {};
        },
        workers: {},
      });
    },
  },
]);
//# sourceMappingURL=9211.d6dfd88b.chunk.js.map
