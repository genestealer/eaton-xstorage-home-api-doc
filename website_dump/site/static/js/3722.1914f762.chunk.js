"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [3722],
  {
    36082: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return j;
        },
      });
      var r,
        i,
        a,
        s = t(56824),
        o = t(30225),
        c = t(94404),
        l = t(14482),
        u = t(5189),
        d = t(76431),
        p = t(87121),
        x = t(2845),
        h = t(84628),
        f = t(83749),
        T = t(98278),
        _ = t.n(T),
        g = t(49318),
        E = (0, h.Jg)({
          path: function () {
            return ["scenes", "containers", "PageAdaptable"];
          },
          connect: {
            props: [g.Z, ["isMobile", "translations"]],
            actions: [g.Z, ["push"]],
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
              t = e.actions;
            return {
              confirmationModal: [
                !1,
                _().bool,
                ((n = {}),
                (0, x.Z)(n, t.showConfirmationModal, function () {
                  return !0;
                }),
                (0, x.Z)(n, t.hideConfirmationModal, function () {
                  return !1;
                }),
                n),
              ],
              nextLocation: [
                {},
                _().object,
                (0, x.Z)({}, t.showConfirmationModal, function (e, n) {
                  return n.location;
                }),
              ],
            };
          },
          stop: (0, p.Z)().mark(function e() {
            var n;
            return (0, p.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators.hideConfirmationModal),
                        (e.next = 3),
                        (0, f.gz)(n())
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
              t = e.workers;
            return (0, x.Z)(
              {},
              n.handleConfirmNavigationClick,
              t.handleConfirmNavigationClick,
            );
          },
          workers: {
            handleConfirmNavigationClick: (0, p.Z)().mark(function e() {
              var n, t, r, i;
              return (0, p.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (t = n.hideConfirmationModal),
                          (r = n.push),
                          (e.next = 3),
                          this.get("nextLocation")
                        );
                      case 3:
                        return ((i = e.sent), (e.next = 6), (0, f.gz)(t()));
                      case 6:
                        return ((e.next = 8), (0, f.gz)(r(i)));
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
        S = t(30588),
        m = t(22247),
        U = t(31228),
        v = (function (e) {
          (0, l.default)(t, e);
          var n = (0, u.default)(t);
          function t() {
            var e;
            (0, o.default)(this, t);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              ((e = n.call.apply(n, [this].concat(i))).first = !0),
              (e.handleBlockedNavigation = function (n) {
                var t = e.props,
                  r = t.isForm,
                  i = t.isDirty,
                  a = e.actions.showConfirmationModal;
                return !(r && i && e.first) || ((e.first = !1), a(n), !1);
              }),
              e
            );
          }
          return (
            (0, c.default)(t, [
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
                    t = n.isMobile,
                    r = n.loading,
                    i = n.children,
                    a = n.menu,
                    s = n.onBack,
                    o = n.title,
                    c = n.translations,
                    l = n.confirmationModal,
                    u = n.isForm,
                    d = n.isDirty,
                    p = this.actions,
                    x = p.showConfirmationModal,
                    h = p.hideConfirmationModal,
                    f = p.handleConfirmNavigationClick,
                    T = c.GENERAL_CANCEL,
                    _ = c.GENERAL_CONTINUE,
                    g = c.BACK_BUTTON_MODAL_TEXT,
                    E = c.BACK_BUTTON_MODAL_TITLE;
                  return (0, U.jsxs)(C, {
                    children: [
                      !!r && (0, U.jsx)(m.gb, {}),
                      t &&
                        (0, U.jsxs)("div", {
                          children: [
                            (0, U.jsx)(m.xE, {
                              id: "PageAdaptable_BackButton",
                              onClick: u && d ? x : s,
                            }),
                            i,
                          ],
                        }),
                      !t &&
                        (0, U.jsxs)("div", {
                          children: [
                            (0, U.jsx)(m.V1, { mobile: t, children: o }),
                            (0, U.jsx)(b, { children: a }),
                            (0, U.jsx)(Z, { children: i }),
                          ],
                        }),
                      (0, U.jsx)(m.u_, {
                        size: "small",
                        open: l,
                        children: (0, U.jsxs)("div", {
                          children: [
                            (0, U.jsx)(m.xB, { title: E }),
                            (0, U.jsx)(m.hz, {
                              padding: !0,
                              size: "small",
                              mobile: t,
                              children: (0, U.jsx)(m.ZT, { children: g }),
                            }),
                            (0, U.jsxs)(m.Zf, {
                              children: [
                                (0, U.jsx)(m.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    ((e.first = !0), h());
                                  },
                                  children: T,
                                }),
                                (0, U.jsx)(m.zx, {
                                  id: "Button_Continue",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function (e) {
                                    t ? (h(), s(e)) : f(e);
                                  },
                                  children: _,
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
            t
          );
        })(d.Component),
        j = E(v),
        C = S.ZP.div(
          r ||
            (r = (0, s.default)([
              "\n  width: 100%;\n  padding: 25px 24px 0;\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n    padding-right: 0px;\n  }\n",
            ])),
        ),
        b = S.ZP.div(
          i ||
            (i = (0, s.default)([
              "\n  width: 40%;\n  padding-right: 5%;\n  float: left;\n  position: relative;\n  color: #fff;\n  margin-top: 25px;\n",
            ])),
        ),
        Z = S.ZP.div(
          a ||
            (a = (0, s.default)([
              "\n  width: 60%;\n  float: left;\n  padding-right: 0;\n",
            ])),
        );
    },
    83722: function (e, n, t) {
      (t.r(n),
        t.d(n, {
          DeviceUpdates: function () {
            return R;
          },
          default: function () {
            return w;
          },
        }));
      var r,
        i,
        a,
        s,
        o,
        c,
        l = t(56824),
        u = t(30225),
        d = t(94404),
        p = t(14482),
        x = t(5189),
        h = t(76431),
        f = t(87121),
        T = t(2845),
        _ = t(84628),
        g = t(83749),
        E = t(90012),
        S = t(49745),
        m = t(98278),
        U = t.n(m),
        v = t(13795),
        j = t(49318),
        C = "".concat(v.CT, "/commcard/update"),
        b = (0, _.Jg)({
          path: function () {
            return ["scenes", "DeviceUpdates"];
          },
          connect: {
            values: [
              j.Z,
              ["isMobile", "translations", "currentDevice", "userRole"],
            ],
            actions: [
              j.Z,
              ["checkSetupStatus", "resetUpdateProgressMessage", "push"],
            ],
          },
          actions: function () {
            return {
              reset: function () {
                return !0;
              },
              setError: function (e) {
                return { error: e };
              },
              updateUnit: function () {
                return !0;
              },
              setUpdateInProgress: function (e) {
                return { updateStatus: e };
              },
              setConfirmationUpdate: function () {
                return !0;
              },
              handleselectedFile: function (e) {
                return { uploadedFile: e };
              },
              setSuccessfullyUploaded: function (e) {
                return { uploaded: e };
              },
            };
          },
          reducers: function (e) {
            var n,
              t,
              r,
              i,
              a,
              s = e.actions;
            return {
              uploadedFile: [
                null,
                U().any,
                ((n = {}),
                (0, T.Z)(n, s.handleselectedFile, function (e, n) {
                  return n.uploadedFile;
                }),
                (0, T.Z)(n, s.reset, function () {
                  return null;
                }),
                n),
              ],
              updateInProgress: [
                !1,
                U().bool,
                ((t = {}),
                (0, T.Z)(t, s.setUpdateInProgress, function (e, n) {
                  return n.updateStatus;
                }),
                (0, T.Z)(t, s.setSuccessfullyUploaded, function () {
                  return !1;
                }),
                (0, T.Z)(t, s.reset, function (e, n) {
                  return !1;
                }),
                t),
              ],
              error: [
                null,
                U().any,
                ((r = {}),
                (0, T.Z)(r, s.setError, function (e, n) {
                  return n.error;
                }),
                (0, T.Z)(r, s.reset, function (e, n) {
                  return null;
                }),
                r),
              ],
              dirty: [
                !1,
                U().bool,
                ((i = {}),
                (0, T.Z)(i, s.setError, function () {
                  return !0;
                }),
                (0, T.Z)(i, s.handleselectedFile, function () {
                  return !0;
                }),
                (0, T.Z)(i, s.updateUnit, function () {
                  return !1;
                }),
                (0, T.Z)(i, s.reset, function () {
                  return !1;
                }),
                i),
              ],
              successfullyUploaded: [
                !1,
                U().bool,
                ((a = {}),
                (0, T.Z)(a, s.setSuccessfullyUploaded, function (e, n) {
                  return n.uploaded;
                }),
                (0, T.Z)(a, s.setUpdateInProgress, function () {
                  return !1;
                }),
                (0, T.Z)(a, s.reset, function (e, n) {
                  return !1;
                }),
                a),
              ],
            };
          },
          start: (0, f.Z)().mark(function e() {
            var n, t, r;
            return (0, f.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators),
                        (t = n.setUpdateInProgress),
                        (r = n.checkSetupStatus),
                        (0, E.log)("[XS-DeviceUpdates] Start Scene", "yellow"),
                        (e.next = 4),
                        (0, g.gz)(r())
                      );
                    case 4:
                      return ((e.next = 6), this.get("currentDevice"));
                    case 6:
                      if ("UPDATE_WILL_START" !== e.sent.updateStatus) {
                        e.next = 12;
                        break;
                      }
                      return ((e.next = 10), (0, g.gz)(t(!0)));
                    case 10:
                      e.next = 14;
                      break;
                    case 12:
                      return ((e.next = 14), (0, g.gz)(t(!1)));
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
            );
          }),
          stop: (0, f.Z)().mark(function e() {
            var n;
            return (0, f.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.actionCreators.reset),
                        (0, E.log)("[XS-DeviceUpdates] Stop Scene"),
                        (e.next = 4),
                        (0, g.gz)(n())
                      );
                    case 4:
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
              t = e.workers;
            return (0, T.Z)({}, n.updateUnit, t.updateUnit);
          },
          workers: {
            updateUnit: (0, f.Z)().mark(function e() {
              var n, t, r, i, a, s, o, c, l, u, d, p, x, h, T, _;
              return (0, f.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.actionCreators),
                          (t = n.setUpdateInProgress),
                          (r = n.setSuccessfullyUploaded),
                          (i = n.setError),
                          (a = n.resetUpdateProgressMessage),
                          (e.next = 3),
                          this.get("uploadedFile")
                        );
                      case 3:
                        return ((s = e.sent), (e.next = 6), (0, g.gz)(t(!0)));
                      case 6:
                        return (
                          (e.prev = 6),
                          (o = { update_file: s }),
                          (c = {
                            headers: { "Content-Type": "multipart/form-data" },
                          }),
                          (e.next = 11),
                          (0, g.RE)(S.Z.postForm, C, o, c)
                        );
                      case 11:
                        if (200 !== e.sent.status) {
                          e.next = 17;
                          break;
                        }
                        return ((e.next = 15), (0, g.gz)(t(!1)));
                      case 15:
                        return ((e.next = 17), (0, g.gz)(r(!0)));
                      case 17:
                        e.next = 73;
                        break;
                      case 19:
                        return (
                          (e.prev = 19),
                          (e.t0 = e.catch(6)),
                          (e.next = 23),
                          (0, g.gz)(t(!1))
                        );
                      case 23:
                        if (!e.t0.response) {
                          e.next = 73;
                          break;
                        }
                        return (
                          (e.prev = 24),
                          (l = e.t0.response),
                          (u = l.data.error),
                          (e.next = 29),
                          this.get("translations")
                        );
                      case 29:
                        if (
                          ((d = e.sent),
                          (p = d.UPLOADFILE_ERROR_HEXFILE),
                          (x = d.UPLOADFILE_ERROR_WRONGFILE),
                          (h = d.UPLOADFILE_ERROR_UPDATEPROGRESS),
                          (T = d.UPLOADFILE_ERROR_UPDATE),
                          (_ = d.ERR_FW_VERSION_NOT_SUPPORTED),
                          400 !== l.status)
                        ) {
                          e.next = 53;
                          break;
                        }
                        return ((e.next = 34), (0, g.gz)(a()));
                      case 34:
                        if (
                          "upload" !== u.step ||
                          "err_missing_update_file" !== u.errCode
                        ) {
                          e.next = 39;
                          break;
                        }
                        return ((e.next = 37), (0, g.gz)(i({ message: p })));
                      case 37:
                        e.next = 51;
                        break;
                      case 39:
                        if (
                          "upload" !== u.step ||
                          "err_invalid_filetype" !== u.errCode
                        ) {
                          e.next = 44;
                          break;
                        }
                        return ((e.next = 42), (0, g.gz)(i([x])));
                      case 42:
                        e.next = 51;
                        break;
                      case 44:
                        if (
                          "update" !== u.step ||
                          "err_incompatible_inv_fw_version" !== u.errCode
                        ) {
                          e.next = 49;
                          break;
                        }
                        return ((e.next = 47), (0, g.gz)(i([_])));
                      case 47:
                        e.next = 51;
                        break;
                      case 49:
                        return (
                          (e.next = 51),
                          (0, g.gz)(
                            i(["Update failed with error code: " + u.errCode]),
                          )
                        );
                      case 51:
                        e.next = 68;
                        break;
                      case 53:
                        if (412 !== l.status) {
                          e.next = 59;
                          break;
                        }
                        if (
                          "upload" !== u.step ||
                          "err_upload_in_progress" !== u.errCode
                        ) {
                          e.next = 57;
                          break;
                        }
                        return ((e.next = 57), (0, g.gz)(i({ message: h })));
                      case 57:
                        e.next = 68;
                        break;
                      case 59:
                        if (500 !== l.status) {
                          e.next = 68;
                          break;
                        }
                        if (
                          "upload" !== u.step ||
                          "err_internal" !== u.errCode
                        ) {
                          e.next = 65;
                          break;
                        }
                        return ((e.next = 63), (0, g.gz)(i([p])));
                      case 63:
                        e.next = 68;
                        break;
                      case 65:
                        if (
                          "update" !== u.step ||
                          "err_internal" !== u.errCode
                        ) {
                          e.next = 68;
                          break;
                        }
                        return ((e.next = 68), (0, g.gz)(i([T])));
                      case 68:
                        e.next = 73;
                        break;
                      case 70:
                        ((e.prev = 70),
                          (e.t1 = e.catch(24)),
                          console.log(e.t1));
                      case 73:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [
                  [6, 19],
                  [24, 70],
                ],
              );
            }),
          },
        }),
        Z = t(30588),
        k = t(79272),
        I = t(48229),
        P = t(77835),
        A = t(81898),
        N = t(36082),
        D = t(89020),
        y = t(22247),
        L = t(31228),
        R = (function (e) {
          (0, p.default)(t, e);
          var n = (0, x.default)(t);
          function t() {
            var e;
            (0, u.default)(this, t);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              ((e = n.call.apply(n, [this].concat(i))).navigate = function (n) {
                (0, e.actions.push)(n);
              }),
              e
            );
          }
          return (
            (0, d.default)(t, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    n = this.props,
                    t = n.isMobile,
                    r = n.translations,
                    i = n.currentDevice,
                    a = n.updateInProgress,
                    s = n.uploadedFile,
                    o = n.successfullyUploaded,
                    c = n.dirty,
                    l = n.error,
                    u = n.userRole,
                    d = this.actions,
                    p = d.updateUnit,
                    x = d.handleselectedFile,
                    h = i.firmwareVersion,
                    f = r.UNITSETT_TITLE,
                    T = r.UNITSETT_UPDATES_TITLE,
                    _ = r.UNITSETT_UPDATES_CURRENT_STATUS,
                    g = r.UNITSETT_UPDATES_PLEASE_VISIT,
                    E = r.UNITSETT_UPDATES_INSTALL_NEW_FIRMWARE,
                    S = r.UNITSETT_UPDATES_CURRENT_VERSION,
                    m = r.UNITSETT_UPDATES_ALERT,
                    U = r.UNITSETT_UPDATES_INSTALL_BUTTON,
                    v = r.UNITSETT_UPDATES_CANCEL,
                    j = r.UNITSETT_UPDATES_SELECT_FILE_BUTTON,
                    C = r.UNITSETT_UPDATES_FIRMWARE_FILE,
                    b = r.UNITSETT_UPDATES_SELECT_VALID_FILE,
                    Z = r.UNITSETT_UPDATES_UPLOADING,
                    R = r.UNITSETT_UPDATES_WAIT_ALERT_TITLE,
                    w = r.UNITSETT_UPDATES_SUCCESS,
                    V = r.UNIT_UPDATING_ALERT_DESC,
                    W = r.UNITSETT_UPDATES_UPDATES_BLOCKED_GO_SETTINGS,
                    G = r.UNITSETT_UPDATES_UPDATES_BLOCKED_CONTACT_TECH,
                    H = r.UNITSETT_UPDATES_UPDATES_BLOCKED,
                    J = !t && c,
                    X = (0, L.jsxs)(y.l0.Buttons, {
                      align: "right",
                      children: [
                        (0, L.jsx)(y.zx, {
                          id: "PrimaryButton_Cancel",
                          buttonType: "primary-cancel",
                          margin: "0 12px",
                          buttonWidth: "163px",
                          onClick: function () {
                            return x(null);
                          },
                          disabled: !J,
                          children: v,
                        }),
                        (0, L.jsx)(y.zx, {
                          id: "PrimaryButton_Install",
                          margin: "0 12px",
                          buttonWidth: "163px",
                          onClick: p,
                          disabled: !J,
                          children: U,
                        }),
                      ],
                    });
                  return (0, L.jsxs)(O, {
                    children: [
                      o &&
                        (0, L.jsx)(y.mJ, {
                          icon: (0, L.jsx)(I.Z, { children: "report" }),
                          title: w,
                          text: (0, L.jsx)(M, { children: V }),
                          mobile: t,
                        }),
                      a &&
                        (0, L.jsx)(y.mJ, {
                          icon: (0, L.jsx)(I.Z, { children: "report" }),
                          title: R,
                          text: (0, L.jsxs)(L.Fragment, {
                            children: [
                              (0, L.jsx)(M, { children: Z }),
                              (0, L.jsx)(y.SK, { height: "10px" }),
                              (0, L.jsx)(k.Z, {}),
                            ],
                          }),
                          mobile: t,
                        }),
                      (0, L.jsx)(N.Z, {
                        title: f,
                        menu: (0, L.jsx)(A.Z, { page: "updates" }),
                        isForm: !1,
                        onBack: function () {
                          return e.navigate("/settings/");
                        },
                        children: (0, L.jsxs)(y.e0, {
                          padding: !0,
                          mobile: t,
                          children: [
                            (0, L.jsx)(y.V1, { mobile: t, children: T }),
                            t &&
                              c &&
                              (0, L.jsx)(y.Oj, {
                                id: "MobileActionButton_UpdateUnit",
                                mobile: !0,
                                icon: (0, L.jsx)(I.Z, { children: "check" }),
                                onClick: p,
                                children: U,
                              }),
                            (0, L.jsxs)(z, {
                              mobile: t,
                              children: [
                                i.updateBlockedState &&
                                  (0, L.jsxs)(L.Fragment, {
                                    children: [
                                      (0, L.jsxs)(K, {
                                        children: [
                                          (0, L.jsx)(I.Z, {
                                            children: "report",
                                          }),
                                          (0, L.jsx)(P.Z, {
                                            variant: "h5",
                                            color: "error",
                                            children: H,
                                          }),
                                        ],
                                      }),
                                      "technician" === u &&
                                        (0, L.jsx)(P.Z, {
                                          variant: "h5",
                                          color: "textPrimary",
                                          children: W,
                                        }),
                                      "technician" !== u &&
                                        (0, L.jsx)(P.Z, {
                                          variant: "h5",
                                          color: "textPrimary",
                                          children: G,
                                        }),
                                    ],
                                  }),
                                (0, L.jsx)(y.SK, { height: "20px" }),
                                (0, L.jsx)(P.Z, { variant: "h4", children: _ }),
                                (0, L.jsx)(y.aV, {
                                  children: (0, L.jsx)(y.aV.Item, {
                                    children: (0, L.jsx)(y.aV.ItemText, {
                                      primary: S,
                                      secondary: h,
                                    }),
                                  }),
                                }),
                                (0, L.jsx)(y.iz, {
                                  variant: "inset",
                                  component: "hr",
                                }),
                                (0, L.jsx)(y.SK, { height: "30px" }),
                                (0, L.jsx)(P.Z, { variant: "h4", children: E }),
                                (0, L.jsx)(y.SK, { height: "10px" }),
                                (0, L.jsx)(P.Z, {
                                  variant: "body1",
                                  color: "textSecondary",
                                  dangerouslySetInnerHTML: { __html: g },
                                }),
                                (0, L.jsx)(y.SK, { height: "20px" }),
                                (0, L.jsxs)(y.l0, {
                                  mobile: t,
                                  buttons: X,
                                  id: "GeneralSettingsForm",
                                  containerHeight: !t && "calc(100vh - 590px)",
                                  showButtons: J,
                                  children: [
                                    (0, L.jsx)(D.Z, {
                                      dirty: c,
                                      error: l,
                                      full: t,
                                    }),
                                    (0, L.jsx)(y.SK, { height: "10px" }),
                                    (0, L.jsxs)(y.l0.Row, {
                                      children: [
                                        (0, L.jsx)(y.aV.ItemText, {
                                          primary: C,
                                        }),
                                        s
                                          ? (0, L.jsx)(F, { children: s.name })
                                          : (0, L.jsx)(F, { children: b }),
                                        (0, L.jsxs)(B, {
                                          children: [
                                            (0, L.jsx)("input", {
                                              type: "file",
                                              accept: ".hex",
                                              name: "file",
                                              id: "file",
                                              className: "inputfile",
                                              disabled: a,
                                              onChange: function (e) {
                                                return x(e.target.files[0]);
                                              },
                                            }),
                                            (0, L.jsxs)("label", {
                                              htmlFor: "file",
                                              children: [
                                                (0, L.jsx)(I.Z, {
                                                  children: "cloud_upload",
                                                }),
                                                (0, L.jsx)("span", {
                                                  children: j,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, L.jsx)(y.SK, { height: "20px" }),
                                    (0, L.jsx)(y.iz, { variant: "inset" }),
                                    (0, L.jsx)(y.SK, { height: "20px" }),
                                    (0, L.jsx)(P.Z, {
                                      variant: "h5",
                                      color: "error",
                                      children: m,
                                    }),
                                    (0, L.jsx)(y.SK, { height: "20px" }),
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
            t
          );
        })(h.Component),
        w = b(R),
        z = Z.ZP.div(r || (r = (0, l.default)(["\n  ", "\n"])), function (e) {
          return (
            !e.mobile &&
            "\n    max-height: calc(100vh - 200px);\n    overflow-y: auto;\n  "
          );
        }),
        O = Z.ZP.div(i || (i = (0, l.default)([""]))),
        F = Z.ZP.p(
          a ||
            (a = (0, l.default)([
              "\n  display: inline-block;\n  opacity: 0.6;\n  color: #424e54;\n  font-family: 'Open Sans';\n  font-size: 14px;\n  line-height: 20px;\n  margin-right: 20px;\n  max-width: 50%;\n",
            ])),
        ),
        M = Z.ZP.div(
          s ||
            (s = (0, l.default)([
              "\n  color: rgba(114, 126, 132, 1);\n  font-size: 14px;\n  line-height: 20px;\n  font-family: 'Open Sans';\n  margin: 7px 0px;\n",
            ])),
        ),
        B = Z.ZP.div(
          o ||
            (o = (0, l.default)([
              "\n  display: inline-block;\n  float: right;\n",
            ])),
        ),
        K = Z.ZP.div(
          c ||
            (c = (0, l.default)([
              "\n  display: flex;\n  align-items: center;\n\n  span {\n    border-radius: 50%;\n    padding: 6px 6px 6px 0;\n    color: rgba(202, 60, 61, 1);\n    font-size: 20px;\n    width: 32px;\n    height: 32px;\n  }\n",
            ])),
        );
    },
  },
]);
//# sourceMappingURL=3722.1914f762.chunk.js.map
