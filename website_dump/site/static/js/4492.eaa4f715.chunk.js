(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [4492],
  {
    30375: function (e, t, r) {
      "use strict";
      r.d(t, {
        m: function () {
          return a;
        },
      });
      var n = JSON.parse(
          '{"ADD_NEW_EVENT":["customer","technician"],"EDIT_EVENT":["customer","technician"],"DELETE_EVENT":["customer","technician"],"EDIT_UNIT_SETTINGS":["customer","technician"],"EDIT_UNIT_DEFAULT_OPERATION_MODE":["customer","technician"],"UNIT_POWER_ON_OFF":["customer","technician"],"CHANGE_OPERATION_MODE":["customer","technician"],"CHANGE_UNIT_OWNER":["customer","technician"],"EDIT_BLOCK_STATUS":["technician"],"SUPPORT_UNIT_LOG":["customer","technician"],"VIEW_SUPPORT_MAINTENANCE_OPTIONS":["customer","technician"],"REBOOT_UNIT":["technician"],"SUPPORT_HTTPS_TUNNEL":["customer","technician"]}',
        ),
        a = function (e, t) {
          var r = n[e];
          return !!r && -1 !== r.indexOf(t);
        };
    },
    23038: function (e, t, r) {
      "use strict";
      (r.r(t),
        r.d(t, {
          default: function () {
            return et;
          },
        }));
      var n,
        a,
        s,
        i,
        o,
        c,
        u,
        l,
        d,
        x,
        f = r(56824),
        g = r(30225),
        _ = r(94404),
        p = r(14482),
        E = r(5189),
        h = r(76431),
        m = r(4e3),
        T = r(30588),
        b = r(39211),
        v = r(77835),
        C = r(87121),
        R = r(2845),
        O = r(84628),
        S = r(83749),
        Z = r(49745),
        k = r(94467),
        P = r.n(k),
        I = r(21649),
        z = r(98278),
        N = r.n(z),
        M = r(42477),
        w = r(13795),
        U = r(90012),
        y = r(49318),
        L = r(20054),
        A = [
          { id: "manual", label: "SETUP_DATETIME_TYPE_MANUAL" },
          { id: "automatic", label: "SETUP_DATETIME_TYPE_AUTO" },
        ],
        j = {
          type: { value: "manual" },
          tz: { value: "" },
          ntpServer: { value: "" },
          curDate: { value: P()().format("YYYY-MM-DD") },
          curTime: { value: P()().format("HH:mm:ss") },
          country: { value: "" },
          city: { value: "" },
        },
        D = {
          type: [M.q9],
          tz: [M.q9],
          ntpServer: [M.Cr, M.q9],
          curDate: [M.qf, M.qb],
          curTime: [M.qf],
          country: [M.q9],
          city: [M.q9],
        },
        F = "".concat(w.CT, "/settings/time"),
        B = "".concat(w.CT, "/settings/location"),
        Y = "".concat(w.CT, "/settings/location/change"),
        G = "".concat(
          w.CT,
          "/settings/time/timezones?countryIsoCode={country}",
        ),
        q = "".concat(w.CT, "/settings/time/timezones"),
        V = "".concat(w.CT, "/geo/country"),
        H = "".concat(w.CT, "/geo/country/{country}/city"),
        W = "".concat(w.CT, "/auth/refresh"),
        K = (0, O.Jg)({
          path: function () {
            return ["scenes", "containers", "DateAndTimeConfigs"];
          },
          connect: {
            props: [y.Z, ["translations", "isMobile"]],
            actions: [y.Z, ["setCountryDevice"], L.Z, ["fetchDeviceInfo"]],
          },
          actions: function () {
            return {
              change: function (e) {
                return { field: e };
              },
              setForm: function (e) {
                return { form: e };
              },
              reset: function () {
                return !0;
              },
              submit: function () {
                return !0;
              },
              setError: function (e) {
                return e;
              },
              getFormInfo: function () {
                return !0;
              },
              getTimezones: function () {
                return !0;
              },
              setTimezones: function (e) {
                return { timezones: e };
              },
              getCountries: function () {
                return !0;
              },
              setCountries: function (e) {
                return { countries: e };
              },
              getCities: function () {
                return !0;
              },
              setCities: function (e) {
                return { cities: e };
              },
              stepBack: function () {
                return !0;
              },
              setConfigurationTypes: function (e) {
                return { types: e };
              },
              submitLocation: function () {
                return !0;
              },
              submitDateTime: function () {
                return !0;
              },
              setScheduledEventsModal: function (e) {
                return e;
              },
              checkScheduledEvents: function () {
                return !0;
              },
            };
          },
          reducers: function (e) {
            var t,
              r,
              n,
              a,
              s,
              i,
              o,
              c = e.actions;
            return {
              form: [
                j,
                N().object,
                ((t = {}),
                (0, R.Z)(t, c.change, function (e, t) {
                  return M.jR(e, t, D);
                }),
                (0, R.Z)(t, c.setForm, function (e, t) {
                  return M.Yg(t.form, D).form;
                }),
                (0, R.Z)(t, c.reset, function () {
                  return j;
                }),
                t),
              ],
              dirty: [
                !1,
                N().bool,
                ((r = {}),
                (0, R.Z)(r, c.setError, function () {
                  return !0;
                }),
                (0, R.Z)(r, c.reset, function () {
                  return !1;
                }),
                (0, R.Z)(r, c.submit, function () {
                  return !1;
                }),
                (0, R.Z)(r, c.change, function () {
                  return !1;
                }),
                r),
              ],
              error: [
                null,
                N().string,
                ((n = {}),
                (0, R.Z)(n, c.setError, function (e, t) {
                  return t;
                }),
                (0, R.Z)(n, c.reset, function () {
                  return null;
                }),
                (0, R.Z)(n, c.change, function () {
                  return null;
                }),
                (0, R.Z)(n, c.submit, function () {
                  return null;
                }),
                n),
              ],
              timezones: [
                [],
                N().array,
                ((a = {}),
                (0, R.Z)(a, c.getTimezones, function () {
                  return [];
                }),
                (0, R.Z)(a, c.setTimezones, function (e, t) {
                  return t.timezones;
                }),
                a),
              ],
              countries: [
                [],
                N().array,
                ((s = {}),
                (0, R.Z)(s, c.getCountries, function () {
                  return [];
                }),
                (0, R.Z)(s, c.setCountries, function (e, t) {
                  return t.countries;
                }),
                s),
              ],
              cities: [
                [],
                N().array,
                ((i = {}),
                (0, R.Z)(i, c.getCities, function () {
                  return [];
                }),
                (0, R.Z)(i, c.setCities, function (e, t) {
                  return t.cities;
                }),
                i),
              ],
              configurationTypes: [
                A,
                N().array,
                (0, R.Z)({}, c.setConfigurationTypes, function (e, t) {
                  return t.types;
                }),
              ],
              scheduledEventsModal: [
                !1,
                N().bool,
                ((o = {}),
                (0, R.Z)(o, c.setScheduledEventsModal, function (e, t) {
                  return t;
                }),
                (0, R.Z)(o, c.setError, function () {
                  return !1;
                }),
                (0, R.Z)(o, c.reset, function () {
                  return !1;
                }),
                o),
              ],
            };
          },
          start: (0, C.Z)().mark(function e() {
            var t, r, n;
            return (0, C.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators),
                        (r = t.getFormInfo),
                        (n = t.getCountries),
                        (e.next = 3),
                        (0, S.gz)(m.Z.actionCreators.setLoading(!0))
                      );
                    case 3:
                      return ((e.next = 5), (0, S.gz)(r()));
                    case 5:
                      return ((e.next = 7), (0, S.gz)(n()));
                    case 7:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
            );
          }),
          stop: (0, C.Z)().mark(function e() {
            var t;
            return (0, C.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators.reset),
                        (e.next = 3),
                        (0, S.gz)(t())
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
            var t,
              r = e.actions,
              n = e.workers;
            return (
              (t = {}),
              (0, R.Z)(t, r.stepBack, n.stepBack),
              (0, R.Z)(t, r.submit, n.submit),
              (0, R.Z)(t, r.getFormInfo, n.getFormInfo),
              (0, R.Z)(t, r.getTimezones, n.getTimezones),
              (0, R.Z)(t, r.getCountries, n.getCountries),
              (0, R.Z)(t, r.getCities, n.getCities),
              (0, R.Z)(t, r.change, n.updateTimezones),
              (0, R.Z)(t, r.submitLocation, n.submitLocation),
              (0, R.Z)(t, r.submitDateTime, n.submitDateTime),
              (0, R.Z)(t, r.checkScheduledEvents, n.checkScheduledEvents),
              t
            );
          },
          workers: {
            submit: (0, C.Z)().mark(function e() {
              var t, r, n, a, s, i, o, c;
              return (0, C.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (r = t.setError),
                          (n = t.setForm),
                          (a = t.checkScheduledEvents),
                          (e.next = 3),
                          (0, S.gz)(m.Z.actionCreators.submitting(!0))
                        );
                      case 3:
                        return ((e.next = 5), this.get("form"));
                      case 5:
                        return ((s = e.sent), (e.next = 8), this.get("dirty"));
                      case 8:
                        return (
                          (i = e.sent),
                          (e.next = 11),
                          this.get("translations")
                        );
                      case 11:
                        if (
                          ((o = e.sent), (c = M.Yg(s, D)), !i || !c.invalid)
                        ) {
                          e.next = 19;
                          break;
                        }
                        return (
                          (e.next = 16),
                          (0, S.gz)(r(o.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 16:
                        return (
                          (e.next = 18),
                          (0, S.gz)(m.Z.actionCreators.submitting(!1))
                        );
                      case 18:
                      case 26:
                        return e.abrupt("return", !1);
                      case 19:
                        if (i || !c.invalid) {
                          e.next = 27;
                          break;
                        }
                        return ((e.next = 22), (0, S.gz)(n(c.form)));
                      case 22:
                        return (
                          (e.next = 24),
                          (0, S.gz)(r(o.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 24:
                        return (
                          (e.next = 26),
                          (0, S.gz)(m.Z.actionCreators.submitting(!1))
                        );
                      case 27:
                        return ((e.next = 29), (0, S.gz)(a()));
                      case 29:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
            checkScheduledEvents: (0, C.Z)().mark(function e() {
              var t, r, n, a, s, i, o, c, u;
              return (0, C.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (r = t.submitLocation),
                          (n = t.setScheduledEventsModal),
                          (e.next = 3),
                          this.get("form")
                        );
                      case 3:
                        return (
                          (a = e.sent),
                          (s = (0, I.mapValues)(a, function (e) {
                            return e.value;
                          })),
                          (i = (0, I.pick)(s, ["country", "city"])),
                          (e.next = 8),
                          this.get("countries")
                        );
                      case 8:
                        return (
                          (o = e.sent),
                          (e.next = 11),
                          this.get("cities")
                        );
                      case 11:
                        return (
                          (c = e.sent),
                          (i.country = (0, I.find)(o, function (e) {
                            return e.id === i.country;
                          })),
                          (i.city = (0, I.find)(c, function (e) {
                            return e.id === i.city;
                          })),
                          (e.prev = 14),
                          (e.next = 17),
                          (0, S.RE)(Z.Z.post, Y, i)
                        );
                      case 17:
                        if (((u = e.sent), !u.data.result.supported)) {
                          e.next = 24;
                          break;
                        }
                        return ((e.next = 22), (0, S.gz)(r()));
                      case 22:
                        e.next = 28;
                        break;
                      case 24:
                        return (
                          (e.next = 26),
                          (0, S.gz)(m.Z.actionCreators.submitting(!1))
                        );
                      case 26:
                        return ((e.next = 28), (0, S.gz)(n(!0)));
                      case 28:
                        e.next = 34;
                        break;
                      case 30:
                        return (
                          (e.prev = 30),
                          (e.t0 = e.catch(14)),
                          (e.next = 34),
                          (0, S.gz)(m.Z.actionCreators.submitting(!1))
                        );
                      case 34:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[14, 30]],
              );
            }),
            submitLocation: (0, C.Z)().mark(function e() {
              var t, r, n, a, s, i, o, c, u, l, d, x, f, g;
              return (0, C.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (r = t.submitDateTime),
                          (n = t.setCountryDevice),
                          (a = t.setError),
                          (s = t.change),
                          (e.next = 3),
                          (0, S.gz)(m.Z.actionCreators.submitting(!0))
                        );
                      case 3:
                        return ((e.next = 5), this.get("translations"));
                      case 5:
                        return ((i = e.sent), (e.next = 8), this.get("form"));
                      case 8:
                        return (
                          (o = e.sent),
                          (c = (0, I.mapValues)(o, function (e) {
                            return e.value;
                          })),
                          (u = (0, I.pick)(c, ["country", "city"])),
                          (e.next = 13),
                          this.get("countries")
                        );
                      case 13:
                        return (
                          (l = e.sent),
                          (e.next = 16),
                          this.get("cities")
                        );
                      case 16:
                        return (
                          (d = e.sent),
                          (u.country = (0, I.find)(l, function (e) {
                            return e.id === u.country;
                          })),
                          (u.city = (0, I.find)(d, function (e) {
                            return e.id === u.city;
                          })),
                          (e.prev = 19),
                          (e.next = 22),
                          (0, S.RE)(Z.Z.put, B, u)
                        );
                      case 22:
                        return ((e.next = 24), (0, S.gz)(n(u.country.id)));
                      case 24:
                        return (
                          (e.next = 26),
                          (0, S.gz)(
                            this.actionCreators.fetchDeviceInfo({
                              noLoader: !1,
                            }),
                          )
                        );
                      case 26:
                        return ((e.next = 28), (0, S.gz)(r()));
                      case 28:
                      case 40:
                      case 46:
                        e.next = 53;
                        break;
                      case 30:
                        return (
                          (e.prev = 30),
                          (e.t0 = e.catch(19)),
                          (e.next = 34),
                          (0, S.gz)(m.Z.actionCreators.submitting(!1))
                        );
                      case 34:
                        if (!e.t0.response) {
                          e.next = 53;
                          break;
                        }
                        if (
                          ((x = e.t0.response),
                          (f = x.status),
                          (g = x.data),
                          500 !== f)
                        ) {
                          e.next = 42;
                          break;
                        }
                        if ("err_internal" !== g.error.errCode) {
                          e.next = 40;
                          break;
                        }
                        return (
                          (e.next = 40),
                          (0, S.gz)(a(i.ERR_TIME_SETUP_PUT_INTERNAL_ERROR))
                        );
                      case 42:
                        if (412 !== f) {
                          e.next = 53;
                          break;
                        }
                        if (
                          "err_invalid_request_unit_connected" !==
                          g.error.errCode
                        ) {
                          e.next = 48;
                          break;
                        }
                        return (
                          (e.next = 46),
                          (0, S.gz)(a(i.ERR_TIME_SETUP_PUT_UNIT_CONNECTED))
                        );
                      case 48:
                        if ("err_communication_failed" !== g.error.errCode) {
                          e.next = 53;
                          break;
                        }
                        return (
                          (e.next = 51),
                          (0, S.gz)(m.Z.actionCreators.showModalNoInternet())
                        );
                      case 51:
                        return (
                          (e.next = 53),
                          (0, S.gz)(s({ type: "manual" }))
                        );
                      case 53:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[19, 30]],
              );
            }),
            submitDateTime: (0, C.Z)().mark(function e() {
              var t, r, n, a, s, i, o, c, u, l, d, x;
              return (0, C.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (r = t.setError),
                          (n = t.change),
                          (e.next = 3),
                          this.get("translations")
                        );
                      case 3:
                        return ((a = e.sent), (e.next = 6), this.get("form"));
                      case 6:
                        return (
                          (s = e.sent),
                          (i = (0, I.mapValues)(s, function (e) {
                            return e.value;
                          })),
                          ((o = (0, I.pick)(i, [
                            "curDate",
                            "curTime",
                            "type",
                            "tz",
                            "ntpServer",
                          ])).curDateTime = ""
                            .concat(o.curDate, " ")
                            .concat(o.curTime)),
                          (e.prev = 10),
                          (e.next = 13),
                          (0, S.RE)(Z.Z.put, F, o)
                        );
                      case 13:
                        return (
                          P().tz.setDefault(s.tz.value),
                          (e.next = 16),
                          (0, S.RE)(Z.Z.post, W)
                        );
                      case 16:
                        return (
                          (c = e.sent),
                          (u = c.data.token),
                          window.localStorage.removeItem("token"),
                          window.localStorage.setItem("token", u),
                          (e.next = 22),
                          (0, S.gz)(
                            this.actionCreators.fetchDeviceInfo({
                              noLoader: !1,
                            }),
                          )
                        );
                      case 22:
                        return (
                          (e.next = 24),
                          (0, S.gz)(m.Z.actionCreators.submitting(!1))
                        );
                      case 24:
                        return (
                          (e.next = 26),
                          (0, S.gz)(m.Z.actionCreators.changeStep(2))
                        );
                      case 26:
                        e.next = 59;
                        break;
                      case 28:
                        return (
                          (e.prev = 28),
                          (e.t0 = e.catch(10)),
                          (e.next = 32),
                          (0, S.gz)(m.Z.actionCreators.submitting(!1))
                        );
                      case 32:
                        if (!e.t0.response) {
                          e.next = 59;
                          break;
                        }
                        ((l = e.t0.response),
                          (d = l.status),
                          (x = l.data),
                          (e.t1 = d),
                          (e.next =
                            500 === e.t1
                              ? 37
                              : 412 === e.t1
                                ? 41
                                : 400 === e.t1
                                  ? 54
                                  : 58));
                        break;
                      case 37:
                        if ("err_internal" !== x.error.errCode) {
                          e.next = 40;
                          break;
                        }
                        return (
                          (e.next = 40),
                          (0, S.gz)(r(a.ERR_TIME_SETUP_PUT_INTERNAL_ERROR))
                        );
                      case 40:
                      case 53:
                      case 57:
                      case 58:
                        return e.abrupt("break", 59);
                      case 41:
                        if (
                          "err_invalid_request_unit_connected" !==
                          x.error.errCode
                        ) {
                          e.next = 46;
                          break;
                        }
                        return (
                          (e.next = 44),
                          (0, S.gz)(r(a.ERR_TIME_SETUP_PUT_UNIT_CONNECTED))
                        );
                      case 44:
                        e.next = 53;
                        break;
                      case 46:
                        if ("err_communication_failed" !== x.error.errCode) {
                          e.next = 53;
                          break;
                        }
                        return (
                          (e.next = 49),
                          (0, S.gz)(m.Z.actionCreators.showModalNoInternet())
                        );
                      case 49:
                        return (
                          (e.next = 51),
                          (0, S.gz)(m.Z.actionCreators.showModalNoInternet())
                        );
                      case 51:
                        return (
                          (e.next = 53),
                          (0, S.gz)(n({ type: "manual" }))
                        );
                      case 54:
                        if ("err_invalid_ntpserver" !== x.error.errCode) {
                          e.next = 57;
                          break;
                        }
                        return (
                          (e.next = 57),
                          (0, S.gz)(r(a.ERR_TIME_SETUP_INVALID_NTPSERVER))
                        );
                      case 59:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[10, 28]],
              );
            }),
            stepBack: (0, C.Z)().mark(function e() {
              return (0, C.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        (0, S.gz)(m.Z.actionCreators.changeStep(0))
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
            getFormInfo: (0, C.Z)().mark(function e() {
              var t, r, n, a, s, i, o, c, u, l, d, x, f, g, _, p, E;
              return (0, C.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (r = t.setForm),
                          (n = t.getCities),
                          (a = t.getTimezones),
                          (s = t.setError),
                          (i = {}),
                          (e.prev = 2),
                          (e.next = 5),
                          (0, S.RE)(Z.Z.get, F)
                        );
                      case 5:
                        ((o = e.sent).data &&
                          (((i = (0, I.mapValues)(o.data.result, function (e) {
                            return { value: e };
                          })).curDate = { value: P()().format("YYYY-MM-DD") }),
                          (i.curTime = { value: P()().format("HH:mm:ss") })),
                          (e.next = 28));
                        break;
                      case 9:
                        return (
                          (e.prev = 9),
                          (e.t0 = e.catch(2)),
                          (e.next = 13),
                          (0, S.gz)(m.Z.actionCreators.setLoading(!1))
                        );
                      case 13:
                        if (!e.t0.response) {
                          e.next = 28;
                          break;
                        }
                        return ((e.next = 16), this.get("translations"));
                      case 16:
                        if (
                          ((c = e.sent),
                          (u = e.t0.response),
                          (l = u.status),
                          (d = u.data),
                          500 !== l)
                        ) {
                          e.next = 24;
                          break;
                        }
                        if ("err_internal" !== d.error.errCode) {
                          e.next = 22;
                          break;
                        }
                        return (
                          (e.next = 22),
                          (0, S.gz)(s(c.ERR_TIME_SETUP_GET_INTERNAL_ERROR))
                        );
                      case 22:
                        e.next = 28;
                        break;
                      case 24:
                        if (412 !== l) {
                          e.next = 28;
                          break;
                        }
                        if (
                          "err_invalid_request_unit_connected" !==
                          d.error.errCode
                        ) {
                          e.next = 28;
                          break;
                        }
                        return (
                          (e.next = 28),
                          (0, S.gz)(s(c.ERR_TIME_SETUP_GET_UNIT_CONNECTED))
                        );
                      case 28:
                        return (
                          (e.prev = 28),
                          (e.next = 31),
                          (0, S.RE)(Z.Z.get, B)
                        );
                      case 31:
                        ((x = e.sent),
                          (i.country = { value: "" }),
                          (i.city = { value: "" }),
                          x &&
                            x.data &&
                            ((f = x.data.result),
                            (i.country = { value: f.country.id }),
                            (i.city = { value: f.city.id })),
                          (e.next = 55));
                        break;
                      case 37:
                        return (
                          (e.prev = 37),
                          (e.t1 = e.catch(28)),
                          (e.next = 41),
                          (0, S.gz)(m.Z.actionCreators.setLoading(!1))
                        );
                      case 41:
                        return ((e.next = 43), this.get("translations"));
                      case 43:
                        if (
                          ((g = e.sent),
                          (_ = e.t1.response),
                          (p = _.status),
                          (E = _.data),
                          500 !== p)
                        ) {
                          e.next = 51;
                          break;
                        }
                        if ("err_internal" !== E.error.errCode) {
                          e.next = 49;
                          break;
                        }
                        return (
                          (e.next = 49),
                          (0, S.gz)(s(g.ERR_LOCATION_SETUP_GET_INTERNAL_ERROR))
                        );
                      case 49:
                        e.next = 55;
                        break;
                      case 51:
                        if (412 !== p) {
                          e.next = 55;
                          break;
                        }
                        if (
                          "err_invalid_request_unit_connected" !==
                          E.error.errCode
                        ) {
                          e.next = 55;
                          break;
                        }
                        return (
                          (e.next = 55),
                          (0, S.gz)(s(g.ERR_LOCATION_SETUP_GET_UNIT_CONNECTED))
                        );
                      case 55:
                        return ((e.next = 57), (0, S.gz)(r(i)));
                      case 57:
                        return ((e.next = 59), (0, S.gz)(n()));
                      case 59:
                        return ((e.next = 61), (0, S.gz)(a()));
                      case 61:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [
                  [2, 9],
                  [28, 37],
                ],
              );
            }),
            getTimezones: (0, C.Z)().mark(function e() {
              var t, r, n, a, s, i, o, c, u, l, d, x, f, g;
              return (0, C.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (r = t.setTimezones),
                          (n = t.setError),
                          (e.next = 3),
                          this.get("form")
                        );
                      case 3:
                        return (
                          (a = e.sent),
                          (s = a.country.value),
                          (e.next = 7),
                          this.get("countries")
                        );
                      case 7:
                        return (
                          (i = e.sent),
                          (e.prev = 8),
                          (o = q),
                          "" !== s &&
                            ((c = (0, I.filter)(i, { id: s })),
                            (o = (0, U.generateUrl)(G, {
                              country: c[0].isoCode,
                            }))),
                          (e.next = 13),
                          (0, S.RE)(Z.Z.get, o)
                        );
                      case 13:
                        return (
                          (u = e.sent),
                          (l = u.data.result.results),
                          (e.next = 17),
                          (0, S.gz)(r(l))
                        );
                      case 17:
                      case 32:
                        e.next = 38;
                        break;
                      case 19:
                        return (
                          (e.prev = 19),
                          (e.t0 = e.catch(8)),
                          console.log(e.t0),
                          (e.next = 24),
                          (0, S.gz)(m.Z.actionCreators.setLoading(!1))
                        );
                      case 24:
                        return ((e.next = 26), this.get("translations"));
                      case 26:
                        if (
                          ((d = e.sent),
                          (x = e.t0.response),
                          (f = x.status),
                          (g = x.data),
                          500 !== f)
                        ) {
                          e.next = 34;
                          break;
                        }
                        if ("err_internal" !== g.error.errCode) {
                          e.next = 32;
                          break;
                        }
                        return (
                          (e.next = 32),
                          (0, S.gz)(n(d.ERR_TIMEZONE_SETUP_GET_INTERNAL_ERROR))
                        );
                      case 34:
                        if (412 !== f) {
                          e.next = 38;
                          break;
                        }
                        if (
                          "err_invalid_request_unit_connected" !==
                          g.error.errCode
                        ) {
                          e.next = 38;
                          break;
                        }
                        return (
                          (e.next = 38),
                          (0, S.gz)(n(d.ERR_TIMEZONE_SETUP_GET_UNIT_CONNECTED))
                        );
                      case 38:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[8, 19]],
              );
            }),
            updateTimezones: (0, C.Z)().mark(function e(t) {
              var r, n;
              return (0, C.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((r = this.actionCreators.getTimezones),
                          (n = t.payload.field),
                          "country" !== Object.keys(n)[0])
                        ) {
                          e.next = 5;
                          break;
                        }
                        return ((e.next = 5), (0, S.gz)(r()));
                      case 5:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
            getCountries: (0, C.Z)().mark(function e() {
              var t, r, n, a, s, i, o, c, u, l;
              return (0, C.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (r = t.setCountries),
                          (n = t.setError),
                          (e.prev = 1),
                          (e.next = 4),
                          (0, S.RE)(Z.Z.get, V)
                        );
                      case 4:
                        return (
                          (a = e.sent),
                          (s = a.data.result.results),
                          (i = (0, I.orderBy)(s, ["name"], ["asc"])),
                          (e.next = 9),
                          (0, S.gz)(r(i))
                        );
                      case 9:
                      case 24:
                        e.next = 30;
                        break;
                      case 11:
                        return (
                          (e.prev = 11),
                          (e.t0 = e.catch(1)),
                          (e.next = 15),
                          (0, S.gz)(m.Z.actionCreators.setLoading(!1))
                        );
                      case 15:
                        return ((e.next = 17), this.get("translations"));
                      case 17:
                        if (((o = e.sent), !e.t0.response)) {
                          e.next = 30;
                          break;
                        }
                        if (
                          ((c = e.t0.response),
                          (u = c.status),
                          (l = c.data),
                          500 !== u)
                        ) {
                          e.next = 26;
                          break;
                        }
                        if ("err_internal" !== l.error.errCode) {
                          e.next = 24;
                          break;
                        }
                        return (
                          (e.next = 24),
                          (0, S.gz)(n(o.ERR_COUNTRY_SETUP_GET_INTERNAL_ERROR))
                        );
                      case 26:
                        if (412 !== u) {
                          e.next = 30;
                          break;
                        }
                        if (
                          "err_invalid_request_unit_connected" !==
                          l.error.errCode
                        ) {
                          e.next = 30;
                          break;
                        }
                        return (
                          (e.next = 30),
                          (0, S.gz)(n(o.ERR_COUNTRY_SETUP_GET_UNIT_CONNECTED))
                        );
                      case 30:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[1, 11]],
              );
            }),
            getCities: (0, C.Z)().mark(function e() {
              var t, r, n, a, s, i, o, c, u, l, d, x, f;
              return (0, C.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (r = t.setCities),
                          (n = t.setError),
                          (e.prev = 1),
                          (e.next = 4),
                          this.get("form")
                        );
                      case 4:
                        if (((a = e.sent), (s = a.country).value)) {
                          e.next = 10;
                          break;
                        }
                        return (
                          (e.next = 9),
                          (0, S.gz)(m.Z.actionCreators.setLoading(!1))
                        );
                      case 9:
                        return e.abrupt("return", !1);
                      case 10:
                        return (
                          (i = (0, U.generateUrl)(H, { country: s.value })),
                          (e.next = 13),
                          (0, S.RE)(Z.Z.get, i)
                        );
                      case 13:
                        if (((o = e.sent), !(c = o.data.result.results))) {
                          e.next = 19;
                          break;
                        }
                        return (
                          (u = (0, I.orderBy)(c, ["name"], ["asc"])),
                          (e.next = 19),
                          (0, S.gz)(r(u))
                        );
                      case 19:
                      case 31:
                        e.next = 37;
                        break;
                      case 21:
                        return (
                          (e.prev = 21),
                          (e.t0 = e.catch(1)),
                          (e.next = 25),
                          this.get("translations")
                        );
                      case 25:
                        if (
                          ((l = e.sent),
                          (d = e.t0.response),
                          (x = d.status),
                          (f = d.data),
                          500 !== x)
                        ) {
                          e.next = 33;
                          break;
                        }
                        if ("err_internal" !== f.error.errCode) {
                          e.next = 31;
                          break;
                        }
                        return (
                          (e.next = 31),
                          (0, S.gz)(n(l.ERR_CITY_SETUP_GET_INTERNAL_ERROR))
                        );
                      case 33:
                        if (412 !== x) {
                          e.next = 37;
                          break;
                        }
                        if (
                          "err_invalid_request_unit_connected" !==
                          f.error.errCode
                        ) {
                          e.next = 37;
                          break;
                        }
                        return (
                          (e.next = 37),
                          (0, S.gz)(n(l.ERR_CITY_SETUP_GET_UNIT_CONNECTED))
                        );
                      case 37:
                        return (
                          (e.next = 39),
                          (0, S.gz)(m.Z.actionCreators.setLoading(!1))
                        );
                      case 39:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[1, 21]],
              );
            }),
          },
        }),
        J = r(22247),
        X = r(72768),
        Q = r(89020),
        $ = r(31228),
        ee = (function (e) {
          (0, p.default)(r, e);
          var t = (0, E.default)(r);
          function r() {
            return ((0, g.default)(this, r), t.apply(this, arguments));
          }
          return (
            (0, _.default)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.form,
                    r = e.dirty,
                    n = e.timezones,
                    a = e.translations,
                    s = e.countries,
                    i = e.cities,
                    o = e.error,
                    c = e.isMobile,
                    u = e.configurationTypes,
                    l = e.scheduledEventsModal,
                    d = this.actions,
                    x = d.change,
                    f = d.getCities,
                    g = d.submit,
                    _ = d.stepBack,
                    p = d.setScheduledEventsModal,
                    E = d.submitLocation,
                    h = t.type,
                    m = t.tz,
                    T = t.curDate,
                    b = t.curTime,
                    C = t.ntpServer,
                    R = t.country,
                    O = t.city,
                    S = a.SETUP_DATETIME_TYPE,
                    Z = a.SETUP_DATETIME_TIMEZONE,
                    k = a.SETUP_DATETIME_CURRENT_TIME,
                    P = a.SETUP_DATETIME_CURRENT_DATE,
                    I = a.SETUP_DATETIME_NTP_SERVER,
                    z = a.SETUP_DATETIME_CITY_NO_OPTIONS,
                    N = a.SETUP_DATETIME_COUNTRY,
                    M = a.SETUP_DATETIME_CITY,
                    w = a.SETUP_NEXT,
                    U = a.SETUP_BACK,
                    y = a.SETUP_DATETIME_CONFIGS,
                    L = a.SETUP_DATETIME_CITY_HELPTEXT,
                    A = a.SETUP_DATETIME_MODAL_SCHEDULEDEVENTSCONFLICT,
                    j = a.SETUP_DATETIME_MODAL_SCHEDULEDEVENTSCONFLICT_DESC,
                    D = a.SETUP_DATETIME_MODAL_UNDOABLE_ACTION,
                    F = a.SETUP_DATETIME_MODAL_CANCELBUTTON,
                    B = a.SETUP_DATETIME_MODAL_CONTINUEBUTTON,
                    Y = (0, $.jsxs)(J.l0.Buttons, {
                      align: c ? "center" : "right",
                      mobile: c,
                      fixed: c,
                      children: [
                        (0, $.jsx)(J.zx, {
                          id: "PrimaryButton_Back",
                          buttonType: "primary-cancel",
                          margin: "0 12px",
                          buttonWidth: c ? "156px" : "163px",
                          onClick: _,
                          children: U,
                        }),
                        (0, $.jsx)(J.zx, {
                          id: "PrimaryButton_Submit",
                          margin: "0 12px",
                          buttonWidth: c ? "156px" : "163px",
                          onClick: g,
                          children: w,
                        }),
                      ],
                    });
                  return (0, $.jsxs)(J.e0, {
                    padding: !0,
                    mobile: c,
                    children: [
                      !c && (0, $.jsx)(J.V1, { mobile: c, children: y }),
                      (0, $.jsxs)(J.l0, {
                        showButtons: !0,
                        buttons: Y,
                        mobile: c,
                        fixed: c,
                        containerHeight: c ? "calc(100vh - 310px)" : "66vh",
                        children: [
                          (0, $.jsx)(Q.Z, { dirty: r, error: o, full: !1 }),
                          (0, $.jsxs)(J.l0.Row, {
                            full: c,
                            children: [
                              (0, $.jsx)(J.OC, {
                                id: "Select_Type",
                                color: "rgba(0, 0, 0, 0.02)",
                                label: S,
                                options: u.map(function (e) {
                                  var t = e.id,
                                    r = e.label;
                                  return { val: t, label: a[r] };
                                }),
                                selected: h.value,
                                error: r && !h.valid,
                                full: !1,
                                onChange: function (e) {
                                  return x({ type: e });
                                },
                              }),
                              (0, $.jsx)(X.Z, {
                                id: "Type",
                                showError: r && !h.valid,
                                errorMessage: h.message,
                              }),
                            ],
                          }),
                          "manual" === h.value &&
                            (0, $.jsxs)(J.l0.Row, {
                              full: c,
                              children: [
                                (0, $.jsx)(re, {
                                  type: "date",
                                  marginhalfinput: "16px 0 0 0",
                                  label: P,
                                  placeholder: "YYYY-MM-DD",
                                  value: T.value,
                                  error: r && !T.valid,
                                  onChange: function (e) {
                                    var t = e.target;
                                    return x({ curDate: t.value });
                                  },
                                  id: "InputText_CurrentDate",
                                }),
                                (0, $.jsx)(re, {
                                  type: "time",
                                  marginhalfinput: "16px 0 0 10%",
                                  label: k,
                                  placeholder: "HH:MM:SS",
                                  value: b.value,
                                  error: r && !b.valid,
                                  onChange: function (e) {
                                    var t = e.target;
                                    return x({ curTime: t.value });
                                  },
                                  id: "InputText_CurrentTime",
                                }),
                              ],
                            }),
                          "automatic" === h.value &&
                            (0, $.jsxs)(J.l0.Row, {
                              full: c,
                              children: [
                                (0, $.jsx)(J.oH, {
                                  id: "InputText_NtpServer",
                                  label: I,
                                  value: C.value,
                                  error: r && !C.valid,
                                  onChange: function (e) {
                                    var t = e.target;
                                    return x({ ntpServer: t.value });
                                  },
                                }),
                                (0, $.jsx)(X.Z, {
                                  id: "NtpServer",
                                  showError: r && !C.valid,
                                  errorMessage: C.message,
                                }),
                              ],
                            }),
                          (0, $.jsxs)(J.l0.Row, {
                            full: c,
                            children: [
                              (0, $.jsx)(J.OC, {
                                id: "Select_Country",
                                color: "rgba(0, 0, 0, 0.02)",
                                label: N,
                                options: s.map(function (e) {
                                  return { val: e.id, label: e.name };
                                }),
                                selected: R.value,
                                disabled: !s.length,
                                error: r && !R.valid,
                                full: !1,
                                onChange: function (e) {
                                  (x({ country: e }),
                                    x({ city: "" }),
                                    x({ tz: "" }),
                                    f());
                                },
                              }),
                              (0, $.jsx)(X.Z, {
                                id: "Country",
                                showError: r && !R.valid,
                                errorMessage: R.message,
                              }),
                            ],
                          }),
                          (0, $.jsxs)(J.l0.Row, {
                            full: c,
                            children: [
                              (0, $.jsx)(J.i3, {
                                id: "City",
                                noOptionsLabel: z,
                                options: i,
                                selected: O.value,
                                dirty: r,
                                label: M,
                                helperText: L,
                                onChange: function (e) {
                                  x({ city: e });
                                },
                              }),
                              (0, $.jsx)(X.Z, {
                                id: "City",
                                showError: r && !O.valid,
                                errorMessage: O.message,
                              }),
                            ],
                          }),
                          (0, $.jsxs)(J.l0.Row, {
                            full: c,
                            children: [
                              (0, $.jsx)(J.OC, {
                                id: "Select_Timezone",
                                color: "rgba(0, 0, 0, 0.02)",
                                label: Z,
                                options: n.map(function (e) {
                                  var t = e.name;
                                  return { val: t, label: t };
                                }),
                                selected: m.value,
                                disabled: !n.length,
                                error: r && !m.valid,
                                full: !1,
                                onChange: function (e) {
                                  return x({ tz: e });
                                },
                              }),
                              (0, $.jsx)(X.Z, {
                                id: "Timezone",
                                showError: r && !m.valid,
                                errorMessage: m.message,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, $.jsx)(J.u_, {
                        open: l,
                        size: "small",
                        onClose: function () {
                          return p(!1);
                        },
                        children: (0, $.jsxs)("div", {
                          children: [
                            (0, $.jsx)(J.xB, {
                              title: A,
                              onClose: function () {
                                return p(!1);
                              },
                            }),
                            (0, $.jsxs)(J.hz, {
                              padding: !0,
                              size: "small",
                              mobile: c,
                              children: [
                                (0, $.jsx)(v.Z, {
                                  variant: "h5",
                                  component: "p",
                                  color: "textSecondary",
                                  gutterBottom: !0,
                                  children: j,
                                }),
                                (0, $.jsx)(v.Z, {
                                  variant: "body1",
                                  component: "p",
                                  color: "textSecondary",
                                  children: D,
                                }),
                              ],
                            }),
                            (0, $.jsxs)(J.Zf, {
                              children: [
                                (0, $.jsx)(J.zx, {
                                  id: "Button_Cancel",
                                  buttonType: "primary-cancel",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: function () {
                                    return p(!1);
                                  },
                                  children: F,
                                }),
                                (0, $.jsx)(J.zx, {
                                  id: "Button_Submit",
                                  margin: "0 12px",
                                  buttonWidth: "156px",
                                  onClick: E,
                                  children: B,
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
            r
          );
        })(h.Component),
        te = K(ee),
        re = (0, T.ZP)(J.oH)(
          n ||
            (n = (0, f.default)([
              "\n  &&&& {\n    width: 45%;\n    margin: ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.marginhalfinput;
          },
        ),
        ne = r(31105),
        ae = r(60326),
        se = r.n(ae),
        ie = r(87611),
        oe = r.n(ie),
        ce = "".concat(w.CT, "/settings/topology"),
        ue = "".concat(w.CT, "/settings/default_opmode"),
        le = "".concat(w.CT, "/settings/meter"),
        de = "".concat(
          w.CT,
          "/settings/topology/meter/{pos}/status?meter_id={meterid}",
        ),
        xe = "".concat(w.CT, "/settings/topology/meter/{pos}/setup"),
        fe = "".concat(w.CT, "/config/finish"),
        ge = "".concat(w.CT, "/settings/topology/meter/{pos}/auto_setup"),
        _e = {
          powerMeter1: { value: "" },
          powerMeter2: { value: "" },
          hasPv: { value: !1 },
          maximumPower: { value: 0 },
          hasBattery: { value: !0 },
        },
        pe = { powerMeter1: [M.q9], powerMeter2: [M.q9], maximumPower: [M.$K] },
        Ee = {
          configBaudrate: {
            value: "",
            valid: !1,
            message: "FORM_VALIDATION_FIELD_REQUIRED",
          },
          meterAddress: {
            value: "",
            valid: !1,
            message: "FORM_VALIDATION_FIELD_REQUIRED",
          },
        },
        he = { configBaudrate: [M.q9], meterAddress: [M.q9] },
        me = { Retry: !1, Confirm: !1 },
        Te = (0, O.Jg)({
          path: function () {
            return ["scenes", "containers", "TopologyConfigs"];
          },
          connect: {
            props: [
              y.Z,
              ["translations", "isMobile", "countryDevice", "setupStatus"],
            ],
            actions: [
              y.Z,
              ["checkSetupStatus", "push"],
              L.Z,
              ["fetchDeviceInfo"],
            ],
          },
          actions: function () {
            return {
              change: function (e) {
                return { field: e };
              },
              setForm: function (e) {
                return { form: e };
              },
              changeConfigurationForm: function (e) {
                return { field: e };
              },
              setConfigurationForm: function (e) {
                return { form: e };
              },
              reset: function () {
                return !0;
              },
              setError: function (e) {
                return e;
              },
              getFormInfo: function () {
                return !0;
              },
              setupMeter: function () {
                return !0;
              },
              getMeters: function () {
                return !0;
              },
              submitAndNext: function () {
                return !0;
              },
              revertForm: function () {
                return !0;
              },
              stepBack: function () {
                return !0;
              },
              autoSetupMeter: function () {
                return !0;
              },
              setMeters: function (e) {
                return { meters: e };
              },
              setActionModal: function (e) {
                return e;
              },
              setActionRequired: function (e) {
                return { actionRequired: e };
              },
              setSuccessMessage: function (e) {
                return e;
              },
              setButtons: function (e) {
                return { buttons: e };
              },
            };
          },
          reducers: function (e) {
            var t,
              r,
              n,
              a,
              s,
              i,
              o,
              c,
              u,
              l,
              d,
              x,
              f = e.actions;
            return {
              meters: [
                [],
                N().array,
                ((t = {}),
                (0, R.Z)(t, f.setMeters, function (e, t) {
                  return t.meters;
                }),
                (0, R.Z)(t, f.reset, function () {
                  return [];
                }),
                t),
              ],
              lastPowerMeterValue: [
                {},
                N().object,
                ((r = {}),
                (0, R.Z)(r, f.change, function (e, t) {
                  return t.field;
                }),
                (0, R.Z)(r, f.reset, function () {
                  return {};
                }),
                r),
              ],
              form: [
                _e,
                N().object,
                ((n = {}),
                (0, R.Z)(n, f.change, function (e, t) {
                  return M.jR(e, t, pe);
                }),
                (0, R.Z)(n, f.setForm, function (e, t) {
                  return M.Yg(t.form, he).form;
                }),
                (0, R.Z)(n, f.reset, function () {
                  return _e;
                }),
                n),
              ],
              error: [
                null,
                N().string,
                ((a = {}),
                (0, R.Z)(a, f.setError, function (e, t) {
                  return t;
                }),
                (0, R.Z)(a, f.change, function () {
                  return null;
                }),
                (0, R.Z)(a, f.reset, function () {
                  return null;
                }),
                a),
              ],
              dirty: [
                !1,
                N().bool,
                ((s = {}),
                (0, R.Z)(s, f.setError, function () {
                  return !0;
                }),
                (0, R.Z)(s, f.reset, function () {
                  return !1;
                }),
                s),
              ],
              configurationForm: [
                Ee,
                N().object,
                ((i = {}),
                (0, R.Z)(i, f.changeConfigurationForm, function (e, t) {
                  return M.jR(e, t, he);
                }),
                (0, R.Z)(i, f.setConfigurationForm, function (e, t) {
                  return M.Yg(t.form, he).form;
                }),
                (0, R.Z)(i, f.setError, function () {
                  return Ee;
                }),
                (0, R.Z)(i, f.reset, function () {
                  return Ee;
                }),
                i),
              ],
              lastValidForm: [
                _e,
                N().object,
                ((o = {}),
                (0, R.Z)(o, f.setForm, function (e, t) {
                  return M.Yg(t.form, pe).form;
                }),
                (0, R.Z)(o, f.reset, function () {
                  return _e;
                }),
                o),
              ],
              actionsRequired: [
                {},
                N().object,
                ((c = {}),
                (0, R.Z)(c, f.setActionRequired, function (e, t) {
                  return t.actionRequired;
                }),
                (0, R.Z)(c, f.reset, function () {
                  return {};
                }),
                c),
              ],
              buttonsRequired: [
                me,
                N().object,
                ((u = {}),
                (0, R.Z)(u, f.setButtons, function (e, t) {
                  return (0, ne.default)((0, ne.default)({}, e), t.buttons);
                }),
                (0, R.Z)(u, f.reset, function () {
                  return me;
                }),
                u),
              ],
              actionModal: [
                !1,
                N().bool,
                ((l = {}),
                (0, R.Z)(l, f.setActionModal, function (e, t) {
                  return t;
                }),
                (0, R.Z)(l, f.reset, function () {
                  return !1;
                }),
                l),
              ],
              successMessage: [
                !1,
                N().bool,
                ((d = {}),
                (0, R.Z)(d, f.change, function () {
                  return !1;
                }),
                (0, R.Z)(d, f.setSuccessMessage, function (e, t) {
                  return t;
                }),
                (0, R.Z)(d, f.setError, function () {
                  return !1;
                }),
                (0, R.Z)(d, f.reset, function () {
                  return !1;
                }),
                d),
              ],
              loading: [
                !1,
                N().bool,
                ((x = {}),
                (0, R.Z)(x, f.reset, function () {
                  return !1;
                }),
                (0, R.Z)(x, f.getMeters, function () {
                  return !0;
                }),
                (0, R.Z)(x, f.setError, function () {
                  return !1;
                }),
                (0, R.Z)(x, f.getFormInfo, function () {
                  return !0;
                }),
                (0, R.Z)(x, f.setForm, function () {
                  return !1;
                }),
                x),
              ],
            };
          },
          start: (0, C.Z)().mark(function e() {
            var t;
            return (0, C.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators.getMeters),
                        (e.next = 3),
                        (0, S.gz)(t())
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
          stop: (0, C.Z)().mark(function e() {
            var t, r, n, a;
            return (0, C.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators),
                        (r = t.reset),
                        (n = t.setForm),
                        (e.next = 3),
                        this.get("lastValidForm")
                      );
                    case 3:
                      return ((a = e.sent), (e.next = 6), (0, S.gz)(n(a)));
                    case 6:
                      return ((e.next = 8), (0, S.gz)(r()));
                    case 8:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
            );
          }),
          takeLatest: function (e) {
            var t,
              r = e.actions,
              n = e.workers;
            return (
              (t = {}),
              (0, R.Z)(
                t,
                r.stepBack,
                (0, C.Z)().mark(function e() {
                  return (0, C.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, S.gz)(m.Z.actionCreators.changeStep(1))
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              ),
              (0, R.Z)(t, r.submitAndNext, n.submitAndNext),
              (0, R.Z)(t, r.getMeters, n.getMeters),
              (0, R.Z)(t, r.getFormInfo, n.getFormInfo),
              (0, R.Z)(t, r.change, n.changePowerMeters),
              (0, R.Z)(t, r.setupMeter, n.setupMeter),
              (0, R.Z)(t, r.revertForm, n.revertForm),
              (0, R.Z)(t, r.autoSetupMeter, n.autoSetupMeter),
              t
            );
          },
          workers: {
            submitAndNext: (0, C.Z)().mark(function e() {
              var t,
                r,
                n,
                a,
                s,
                i,
                o,
                c,
                u,
                l,
                d,
                x,
                f,
                g,
                _,
                p,
                E,
                h,
                T,
                b,
                v,
                R,
                O,
                k,
                P;
              return (0, C.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (r = t.setError),
                          (n = t.setForm),
                          (a = t.checkSetupStatus),
                          (s = t.push),
                          (i = t.fetchDeviceInfo),
                          (e.next = 3),
                          (0, S.gz)(m.Z.actionCreators.submitting(!0))
                        );
                      case 3:
                        return ((e.next = 5), this.get("form"));
                      case 5:
                        return ((o = e.sent), (e.next = 8), this.get("dirty"));
                      case 8:
                        return (
                          (c = e.sent),
                          (e.next = 11),
                          this.get("setupStatus")
                        );
                      case 11:
                        return (
                          (u = e.sent),
                          (e.next = 14),
                          this.get("countryDevice")
                        );
                      case 14:
                        return (
                          (l = e.sent),
                          (e.next = 17),
                          this.get("translations")
                        );
                      case 17:
                        if (
                          ((d = e.sent), (x = M.Yg(o, pe)), !c || !x.invalid)
                        ) {
                          e.next = 27;
                          break;
                        }
                        return ((e.next = 22), (0, S.gz)(n(x.form)));
                      case 22:
                        return (
                          (e.next = 24),
                          (0, S.gz)(r(d.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 24:
                        return (
                          (e.next = 26),
                          (0, S.gz)(m.Z.actionCreators.submitting(!1))
                        );
                      case 26:
                      case 34:
                      case 58:
                        return e.abrupt("return", !1);
                      case 27:
                        if (c || !x.invalid) {
                          e.next = 35;
                          break;
                        }
                        return ((e.next = 30), (0, S.gz)(n(x.form)));
                      case 30:
                        return (
                          (e.next = 32),
                          (0, S.gz)(r(d.FORM_SAVE_ERRORS_FIELDS))
                        );
                      case 32:
                        return (
                          (e.next = 34),
                          (0, S.gz)(m.Z.actionCreators.submitting(!1))
                        );
                      case 35:
                        return (
                          (f = se()(o, function (e) {
                            return e.value;
                          })),
                          (e.prev = 36),
                          (e.next = 39),
                          (0, S.RE)(Z.Z.put, ce, f)
                        );
                      case 39:
                        e.next = 59;
                        break;
                      case 41:
                        if (
                          ((e.prev = 41),
                          (e.t0 = e.catch(36)),
                          (g = e.t0.response),
                          (_ = g.status),
                          (p = g.data),
                          500 !== _ || "err_internal" !== p.error.errCode)
                        ) {
                          e.next = 49;
                          break;
                        }
                        return (
                          (e.next = 47),
                          (0, S.gz)(r(d.ERR_TOPOLOGY_SETUP_PUT_INTERNAL_ERROR))
                        );
                      case 47:
                      case 52:
                        e.next = 56;
                        break;
                      case 49:
                        if (
                          412 !== _ ||
                          "err_invalid_request_unit_connected" !==
                            p.error.errCode
                        ) {
                          e.next = 54;
                          break;
                        }
                        return (
                          (e.next = 52),
                          (0, S.gz)(r(d.ERR_TOPOLOGY_SETUP_PUT_UNIT_CONNECTED))
                        );
                      case 54:
                        return ((e.next = 56), (0, S.gz)(r(d.ERR_FATAL_ERROR)));
                      case 56:
                        return (
                          (e.next = 58),
                          (0, S.gz)(m.Z.actionCreators.submitting(!1))
                        );
                      case 59:
                        return ((e.next = 61), (0, S.gz)(i({ noLoader: !1 })));
                      case 61:
                        if (w.zN !== l) {
                          e.next = 95;
                          break;
                        }
                        return (
                          (e.prev = 62),
                          (E = {
                            defaultMode: {
                              command: "SET_VARIABLE_GRID_INJECTION",
                              parameters: {
                                maximumPower: Number(o.maximumPower.value),
                              },
                            },
                          }),
                          (e.next = 66),
                          (0, S.RE)(Z.Z.put, ue, E)
                        );
                      case 66:
                      case 75:
                      case 89:
                        e.next = 95;
                        break;
                      case 68:
                        if (
                          ((e.prev = 68), (e.t1 = e.catch(62)), !e.t1.response)
                        ) {
                          e.next = 95;
                          break;
                        }
                        if (
                          ((h = e.t1.response),
                          (T = h.status),
                          (b = h.data),
                          500 !== T)
                        ) {
                          e.next = 77;
                          break;
                        }
                        return (
                          (e.next = 75),
                          (0, S.gz)(r(d.ERR_OPMODE_SETUP_PUT_INTERNAL_ERROR))
                        );
                      case 77:
                        if (400 !== T) {
                          e.next = 91;
                          break;
                        }
                        if ("invalid_op_mode" !== b.error.err_code) {
                          e.next = 84;
                          break;
                        }
                        return (
                          (v = (0, U.getAPIError)(
                            d,
                            "SETUP_OPERATION_MODE_POST_INVALID_OP",
                            "",
                          )),
                          (e.next = 82),
                          (0, S.gz)(r(v))
                        );
                      case 82:
                        e.next = 89;
                        break;
                      case 84:
                        if ("out_of_range_arg" !== b.error.err_code) {
                          e.next = 89;
                          break;
                        }
                        return (
                          (R = (R = (0, U.getAPIError)(
                            d,
                            "SETUP_OPERATION_MODE_POST_INVALID_ARGS",
                            "",
                          )).replace("MAXIMUM_POWER", b.error.description)),
                          (e.next = 89),
                          (0, S.gz)(r(R))
                        );
                      case 91:
                        if (412 !== T) {
                          e.next = 95;
                          break;
                        }
                        if (
                          "err_invalid_request_unit_connected" !==
                          b.error.errCode
                        ) {
                          e.next = 95;
                          break;
                        }
                        return (
                          (e.next = 95),
                          (0, S.gz)(r(d.ERR_OPMODE_SETUP_PUT_UNIT_CONNECTED))
                        );
                      case 95:
                        if (((e.prev = 95), u && (!u || u.setupComplete))) {
                          e.next = 103;
                          break;
                        }
                        return ((e.next = 99), (0, S.RE)(Z.Z.post, fe));
                      case 99:
                        return (
                          (e.next = 101),
                          (0, S.gz)(m.Z.actionCreators.submitting(!1))
                        );
                      case 101:
                        e.next = 110;
                        break;
                      case 103:
                        if (!u || u.connected) {
                          e.next = 110;
                          break;
                        }
                        return (
                          (e.next = 106),
                          (0, S.gz)(m.Z.actionCreators.submitting(!1))
                        );
                      case 106:
                        return ((e.next = 108), (0, S.gz)(s("/")));
                      case 108:
                        return (
                          (e.next = 110),
                          (0, S.gz)(m.Z.actionCreators.changeStep(0))
                        );
                      case 110:
                      case 119:
                      case 124:
                        e.next = 130;
                        break;
                      case 112:
                        if (
                          ((e.prev = 112),
                          (e.t2 = e.catch(95)),
                          (O = e.t2.response),
                          (k = O.status),
                          (P = O.data),
                          500 !== k)
                        ) {
                          e.next = 121;
                          break;
                        }
                        if ("err_internal" !== P.error.errCode) {
                          e.next = 119;
                          break;
                        }
                        return (
                          (e.next = 119),
                          (0, S.gz)(r(d.ERR_FINISH_SETUP_PUT_INTERNAL_ERROR))
                        );
                      case 121:
                        if (403 !== k) {
                          e.next = 126;
                          break;
                        }
                        return (
                          (e.next = 124),
                          (0, S.gz)(r(d.ERR_FINISH_SETUP_PUT_TECH_PROFILE))
                        );
                      case 126:
                        if (412 !== k) {
                          e.next = 130;
                          break;
                        }
                        if (
                          "err_invalid_request_unit_connected" !==
                          P.error.errCode
                        ) {
                          e.next = 130;
                          break;
                        }
                        return (
                          (e.next = 130),
                          (0, S.gz)(r(d.ERR_FINISH_SETUP_PUT_UNIT_CONNECTED))
                        );
                      case 130:
                        return ((e.next = 132), (0, S.gz)(a()));
                      case 132:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [
                  [36, 41],
                  [62, 68],
                  [95, 112],
                ],
              );
            }),
            getMeters: (0, C.Z)().mark(function e() {
              var t, r, n, a, s, i, o, c, u, l;
              return (0, C.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (r = t.setMeters),
                          (n = t.getFormInfo),
                          (a = t.setError),
                          (e.prev = 1),
                          (e.next = 4),
                          (0, S.RE)(Z.Z.get, le)
                        );
                      case 4:
                        return (
                          (s = e.sent),
                          (i = s.data.supportedMeters),
                          (e.next = 8),
                          (0, S.gz)(r(i))
                        );
                      case 8:
                        return ((e.next = 10), (0, S.gz)(n()));
                      case 10:
                      case 23:
                        e.next = 29;
                        break;
                      case 12:
                        return (
                          (e.prev = 12),
                          (e.t0 = e.catch(1)),
                          console.log(e.t0),
                          (e.next = 17),
                          this.get("translations")
                        );
                      case 17:
                        if (
                          ((o = e.sent),
                          (c = e.t0.response),
                          (u = c.status),
                          (l = c.data),
                          500 !== u)
                        ) {
                          e.next = 25;
                          break;
                        }
                        if ("err_internal" !== l.error.errCode) {
                          e.next = 23;
                          break;
                        }
                        return (
                          (e.next = 23),
                          (0, S.gz)(a(o.ERR_METERS_SETUP_GET_INTERNAL_ERROR))
                        );
                      case 25:
                        if (412 !== u) {
                          e.next = 29;
                          break;
                        }
                        if (
                          "err_invalid_request_unit_connected" !==
                          l.error.errCode
                        ) {
                          e.next = 29;
                          break;
                        }
                        return (
                          (e.next = 29),
                          (0, S.gz)(a(o.ERR_METERS_SETUP_GET_UNIT_CONNECTED))
                        );
                      case 29:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[1, 12]],
              );
            }),
            getFormInfo: (0, C.Z)().mark(function e() {
              var t, r, n, a, s, i, o, c, u, l, d, x, f, g;
              return (0, C.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (r = t.setForm),
                          (n = t.setError),
                          (e.next = 3),
                          this.get("meters")
                        );
                      case 3:
                        return ((a = e.sent), (e.next = 6), this.get("form"));
                      case 6:
                        return (
                          (s = e.sent),
                          (e.next = 9),
                          this.get("translations")
                        );
                      case 9:
                        return (
                          (i = e.sent),
                          (e.prev = 10),
                          (e.next = 13),
                          (0, S.RE)(Z.Z.get, ce)
                        );
                      case 13:
                        ((o = e.sent).data &&
                          o.data.result &&
                          (((s = se()(o.data.result, function (e) {
                            return { value: e };
                          })).powerMeter1 = {
                            value: oe()(a, { model: s.powerMeter1.value.model })
                              .id,
                          }),
                          (s.powerMeter2 = {
                            value: oe()(a, { model: s.powerMeter2.value.model })
                              .id,
                          })),
                          (e.next = 30));
                        break;
                      case 17:
                        if (
                          ((e.prev = 17),
                          (e.t0 = e.catch(10)),
                          (c = e.t0.response),
                          (u = c.status),
                          (l = c.data),
                          500 !== u)
                        ) {
                          e.next = 26;
                          break;
                        }
                        if ("err_internal" !== l.error.errCode) {
                          e.next = 24;
                          break;
                        }
                        return (
                          (e.next = 24),
                          (0, S.gz)(n(i.ERR_TOPOLOGY_SETUP_GET_INTERNAL_ERROR))
                        );
                      case 24:
                        e.next = 30;
                        break;
                      case 26:
                        if (412 !== u) {
                          e.next = 30;
                          break;
                        }
                        if (
                          "err_invalid_request_unit_connected" !==
                          l.error.errCode
                        ) {
                          e.next = 30;
                          break;
                        }
                        return (
                          (e.next = 30),
                          (0, S.gz)(n(i.ERR_TOPOLOGY_SETUP_GET_UNIT_CONNECTED))
                        );
                      case 30:
                        return (
                          (e.prev = 30),
                          (e.next = 33),
                          (0, S.RE)(Z.Z.get, ue)
                        );
                      case 33:
                        ((d = e.sent).data &&
                        d.data.result.defaultMode.parameters
                          ? (s.maximumPower = {
                              value:
                                d.data.result.defaultMode.parameters
                                  .maximumPower,
                            })
                          : (s.maximumPower = { value: 0 }),
                          (e.next = 50));
                        break;
                      case 37:
                        if (
                          ((e.prev = 37),
                          (e.t1 = e.catch(30)),
                          (x = e.t1.response),
                          (f = x.status),
                          (g = x.data),
                          500 !== f)
                        ) {
                          e.next = 46;
                          break;
                        }
                        if ("err_internal" !== g.error.errCode) {
                          e.next = 44;
                          break;
                        }
                        return (
                          (e.next = 44),
                          (0, S.gz)(n(i.ERR_OPMODE_SETUP_GET_INTERNAL_ERROR))
                        );
                      case 44:
                        e.next = 50;
                        break;
                      case 46:
                        if (412 !== f) {
                          e.next = 50;
                          break;
                        }
                        if (
                          "err_invalid_request_unit_connected" !==
                          g.error.errCode
                        ) {
                          e.next = 50;
                          break;
                        }
                        return (
                          (e.next = 50),
                          (0, S.gz)(n(i.ERR_OPMODE_SETUP_GET_UNIT_CONNECTED))
                        );
                      case 50:
                        return ((e.next = 52), (0, S.gz)(r(s)));
                      case 52:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [
                  [10, 17],
                  [30, 37],
                ],
              );
            }),
            changePowerMeters: (0, C.Z)().mark(function e(t) {
              var r, n, a, s, i, o, c, u, l, d, x, f, g, _, p, E, h, m, T, b, v;
              return (0, C.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = this.actionCreators),
                          (n = r.setError),
                          (a = r.setActionRequired),
                          (s = r.setActionModal),
                          (i = r.revertForm),
                          (o = r.setButtons),
                          (c = t.payload.field),
                          (u = Object.keys(c)[0]),
                          (e.next = 5),
                          this.get("meters")
                        );
                      case 5:
                        return (
                          (l = e.sent),
                          (d = oe()(l, { id: c[u] })),
                          (e.next = 9),
                          this.get("translations")
                        );
                      case 9:
                        return (
                          (x = e.sent),
                          (e.next = 12),
                          (0, S.gz)(o({ Submit: !1, Confirm: !1, Retry: !1 }))
                        );
                      case 12:
                        return (
                          (e.next = 14),
                          (0, S.gz)(
                            a({
                              loadingSetupMeter:
                                x.SETUP_TOPOLOGY_LOADING_METER_STATUS,
                            }),
                          )
                        );
                      case 14:
                        return ((e.next = 16), (0, S.gz)(s(!0)));
                      case 16:
                        if (
                          -1 !== ["powerMeter1", "powerMeter2"].indexOf(u) &&
                          "None" !== d.model
                        ) {
                          e.next = 22;
                          break;
                        }
                        return ((e.next = 19), (0, S.gz)(a({})));
                      case 19:
                        return ((e.next = 21), (0, S.gz)(s(!1)));
                      case 21:
                        return e.abrupt("return", !1);
                      case 22:
                        return (
                          (f = l.filter(function (e) {
                            return e.id === c[u];
                          })),
                          (g = (0, U.generateUrl)(de, {
                            pos: u.substr(u.length - 1),
                            meterid: f[0].id,
                          })),
                          (e.prev = 24),
                          (e.next = 27),
                          (0, S.RE)(Z.Z.get, g)
                        );
                      case 27:
                        if (
                          ((_ = e.sent),
                          (p = _.data),
                          (E = p.status),
                          (h = p.details),
                          "not_ready" !== E)
                        ) {
                          e.next = 40;
                          break;
                        }
                        return (
                          (m = x.SETUP_TOPOLOGY_STATUS_FAILED_NO_DETAILS),
                          x["SETUP_TOPOLOGY_".concat(h.toUpperCase())] &&
                            (m = x["SETUP_TOPOLOGY_".concat(h.toUpperCase())]),
                          (m = (m = m.replace(
                            "<pos>",
                            u.substr(u.length - 1),
                          )).replace("<selected_meter_mode_name>", f[0].model)),
                          (e.next = 36),
                          (0, S.gz)(a({ showInformation: m }))
                        );
                      case 36:
                        return (
                          (e.next = 38),
                          (0, S.gz)(o({ Submit: !1, Confirm: !1, Retry: !0 }))
                        );
                      case 38:
                        e.next = 44;
                        break;
                      case 40:
                        return ((e.next = 42), (0, S.gz)(a({})));
                      case 42:
                        return ((e.next = 44), (0, S.gz)(s(!1)));
                      case 44:
                        e.next = 63;
                        break;
                      case 46:
                        return (
                          (e.prev = 46),
                          (e.t0 = e.catch(24)),
                          console.log(e.t0),
                          (e.next = 51),
                          (0, S.gz)(a({}))
                        );
                      case 51:
                        return ((e.next = 53), (0, S.gz)(s(!1)));
                      case 53:
                        if (!e.t0.response) {
                          e.next = 63;
                          break;
                        }
                        return (
                          (T = e.t0.response.status),
                          (b = ""),
                          (500 !== T && 400 !== T) ||
                            (b = "ERR_METER_SETUP_FAILED"),
                          412 === T &&
                            (b = "ERR_METER_SETUP_CONNECTION_FAILED"),
                          (v = (0, U.getAPIError)(x, b)),
                          (e.next = 61),
                          (0, S.gz)(n(v))
                        );
                      case 61:
                        return ((e.next = 63), (0, S.gz)(i()));
                      case 63:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[24, 46]],
              );
            }),
            setupMeter: (0, C.Z)().mark(function e() {
              var t, r, n, a, s, i, o, c, u, l, d, x, f, g, _, p, E, h, m;
              return (0, C.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (r = t.setError),
                          (n = t.setActionRequired),
                          (a = t.setActionModal),
                          (s = t.revertForm),
                          (i = t.setSuccessMessage),
                          (o = t.setConfigurationForm),
                          (e.next = 3),
                          this.get("meters")
                        );
                      case 3:
                        return (
                          (c = e.sent),
                          (e.next = 6),
                          this.get("lastPowerMeterValue")
                        );
                      case 6:
                        return (
                          (u = e.sent),
                          (l = Object.keys(u)[0]),
                          (e.next = 10),
                          this.get("configurationForm")
                        );
                      case 10:
                        return (
                          (d = e.sent),
                          (e.next = 13),
                          this.get("translations")
                        );
                      case 13:
                        if (((x = e.sent), !(f = M.Yg(d, he)).invalid)) {
                          e.next = 19;
                          break;
                        }
                        return ((e.next = 18), (0, S.gz)(o(f.form)));
                      case 18:
                        return e.abrupt("return", !1);
                      case 19:
                        return ((e.next = 21), (0, S.gz)(a(!1)));
                      case 21:
                        return (
                          (g = c.filter(function (e) {
                            return e.id === u[l];
                          })),
                          (_ = (0, U.generateUrl)(xe, {
                            pos: l.substr(l.length - 1),
                          })),
                          (p = {
                            meterId: g[0].id,
                            meterAddr: Number(d.meterAddress.value),
                            baudrate: Number(d.configBaudrate.value),
                          }),
                          (e.prev = 24),
                          (e.next = 27),
                          (0, S.RE)(Z.Z.post, _, p)
                        );
                      case 27:
                        return ((e.next = 29), (0, S.gz)(i(!0)));
                      case 29:
                        return ((e.next = 31), (0, S.gw)(5e3));
                      case 31:
                        return ((e.next = 33), (0, S.gz)(i(!1)));
                      case 33:
                      case 45:
                      case 53:
                      case 59:
                        e.next = 64;
                        break;
                      case 35:
                        if (
                          ((e.prev = 35),
                          (e.t0 = e.catch(24)),
                          console.log(e.t0),
                          !e.t0.response)
                        ) {
                          e.next = 64;
                          break;
                        }
                        if (
                          ((E = e.t0.response),
                          (h = E.status),
                          (m = E.data),
                          500 !== h)
                        ) {
                          e.next = 47;
                          break;
                        }
                        return (
                          (e.next = 43),
                          (0, S.gz)(r(x.ERR_METER_SETUP_FAILED))
                        );
                      case 43:
                        return ((e.next = 45), (0, S.gz)(s()));
                      case 47:
                        if (412 !== h) {
                          e.next = 55;
                          break;
                        }
                        if (
                          "action_required_activate_set_mode" !==
                          m.error.errCode
                        ) {
                          e.next = 53;
                          break;
                        }
                        return (
                          (e.next = 51),
                          (0, S.gz)(n({ activateSetMode: !0 }))
                        );
                      case 51:
                        return ((e.next = 53), (0, S.gz)(a(!0)));
                      case 55:
                        if (400 !== h) {
                          e.next = 64;
                          break;
                        }
                        if ("err_invalid_meter_pos" !== m.error.errCode) {
                          e.next = 61;
                          break;
                        }
                        return (
                          (e.next = 59),
                          (0, S.gz)(r(x.ERR_METER_INVALID_POS))
                        );
                      case 61:
                        if ("err_invalid_meter_id" !== m.error.errCode) {
                          e.next = 64;
                          break;
                        }
                        return (
                          (e.next = 64),
                          (0, S.gz)(r(x.ERR_METER_INVALID_METERID))
                        );
                      case 64:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[24, 35]],
              );
            }),
            revertForm: (0, C.Z)().mark(function e() {
              var t, r, n, a;
              return (0, C.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (r = t.setForm),
                          (n = t.setActionModal),
                          (e.next = 3),
                          this.get("lastValidForm")
                        );
                      case 3:
                        return ((a = e.sent), (e.next = 6), (0, S.gz)(r(a)));
                      case 6:
                        return ((e.next = 8), (0, S.gz)(n(!1)));
                      case 8:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
            autoSetupMeter: (0, C.Z)().mark(function e() {
              var t,
                r,
                n,
                a,
                s,
                i,
                o,
                c,
                u,
                l,
                d,
                x,
                f,
                g,
                _,
                p,
                E,
                h,
                m,
                T,
                b,
                v,
                R,
                O;
              return (0, C.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators),
                          (r = t.setError),
                          (n = t.setActionRequired),
                          (a = t.setActionModal),
                          (s = t.setButtons),
                          (i = t.revertForm),
                          (e.next = 3),
                          this.get("meters")
                        );
                      case 3:
                        return (
                          (o = e.sent),
                          (e.next = 6),
                          this.get("lastPowerMeterValue")
                        );
                      case 6:
                        return (
                          (c = e.sent),
                          (u = Object.keys(c)[0]),
                          (l = u.substr(u.length - 1)),
                          (e.next = 11),
                          this.get("translations")
                        );
                      case 11:
                        return (
                          (d = e.sent),
                          (x = ""),
                          (f = o.filter(function (e) {
                            return e.id === c[u];
                          })),
                          (g = (g =
                            d.SETUP_TOPOLOGY_LOADING_TRYING_SETUP.replace(
                              "<selected_meter_model_name>",
                              f[0].model,
                            )).replace("<pos>", l)),
                          (e.next = 18),
                          (0, S.gz)(s({ Submit: !1, Confirm: !1, Retry: !1 }))
                        );
                      case 18:
                        return (
                          (e.next = 20),
                          (0, S.gz)(n({ loadingSetupMeter: g }))
                        );
                      case 20:
                        return ((e.next = 22), (0, S.gz)(a(!0)));
                      case 22:
                        return (
                          (_ = (0, U.generateUrl)(ge, { pos: l })),
                          (p = { meterId: f[0].id }),
                          (e.prev = 24),
                          (e.next = 27),
                          (0, S.RE)(Z.Z.post, _, p)
                        );
                      case 27:
                        if (
                          ((E = e.sent),
                          (h = E.data),
                          (m = h.status),
                          (T = h.details),
                          (b = h.initialConfig),
                          "not_ready" !== m)
                        ) {
                          e.next = 67;
                          break;
                        }
                        if ("action_required_confirmation_needed" !== T) {
                          e.next = 40;
                          break;
                        }
                        return (
                          (x = (x = (x = (x = (x =
                            d.SETUP_TOPOLOGY_SETUP_FAILED_CONFIRMATION_NEEDED).replace(
                            "<selected_meter_model_name>",
                            f[0].model,
                          )).replace("<old_pos>", b.meterAddr)).replace(
                            "<old_baudrate>",
                            b.baudrate,
                          )).replace("<pos>", l)),
                          (e.next = 38),
                          (0, S.gz)(s({ Submit: !1, Retry: !0, Confirm: !0 }))
                        );
                      case 38:
                      case 48:
                      case 56:
                        e.next = 63;
                        break;
                      case 40:
                        if ("action_required_activate_set_mode" !== T) {
                          e.next = 50;
                          break;
                        }
                        return (
                          (x = (x = (x = (x = (x =
                            d.SETUP_TOPOLOGY_SETUP_FAILED_ACTIVATE_SET_MODE).replace(
                            "<selected_meter_model_name>",
                            f[0].model,
                          )).replace("<old_pos>", b.meterAddr)).replace(
                            "<old_baudrate>",
                            b.baudrate,
                          )).replace("<pos>", l)),
                          (e.next = 48),
                          (0, S.gz)(s({ Submit: !1, Confirm: !1, Retry: !0 }))
                        );
                      case 50:
                        if ("error_meter_not_found" !== T) {
                          e.next = 58;
                          break;
                        }
                        return (
                          (x = (x = (x =
                            d.SETUP_TOPOLOGY_SETUP_FAILED_METER_NOT_FOUND).replace(
                            "<selected_meter_model_name>",
                            f[0].model,
                          )).replace("<pos>", l)),
                          (e.next = 56),
                          (0, S.gz)(s({ Submit: !1, Confirm: !1, Retry: !0 }))
                        );
                      case 58:
                        if ("action_required_set_baudrate" !== T) {
                          e.next = 63;
                          break;
                        }
                        return (
                          (x = (x =
                            d.SETUP_TOPOLOGY_SETUP_FAILED_SET_BAUDRATE).replace(
                            "<pos>",
                            l,
                          )),
                          (e.next = 63),
                          (0, S.gz)(s({ Submit: !1, Confirm: !0, Retry: !1 }))
                        );
                      case 63:
                        return (
                          (e.next = 65),
                          (0, S.gz)(n({ showInformation: x }))
                        );
                      case 65:
                        e.next = 77;
                        break;
                      case 67:
                        if ("ready" !== m) {
                          e.next = 77;
                          break;
                        }
                        return (
                          (x = (x = (x = (x = (x =
                            d.SETUP_TOPOLOGY_SUCCESSFULLY_UPDATED).replace(
                            "<selected_meter_model_name>",
                            f[0].model,
                          )).replace("<old_pos>", b.meterAddr)).replace(
                            "<old_baudrate>",
                            b.baudrate,
                          )).replace("<pos>", l)),
                          (e.next = 75),
                          (0, S.gz)(n({ showInformation: x }))
                        );
                      case 75:
                        return (
                          (e.next = 77),
                          (0, S.gz)(s({ Submit: !1, Confirm: !0, Retry: !1 }))
                        );
                      case 77:
                      case 89:
                      case 97:
                      case 103:
                        e.next = 108;
                        break;
                      case 79:
                        if (
                          ((e.prev = 79),
                          (e.t0 = e.catch(24)),
                          console.log(e.t0),
                          !e.t0.response)
                        ) {
                          e.next = 108;
                          break;
                        }
                        if (
                          ((v = e.t0.response),
                          (R = v.status),
                          (O = v.data),
                          500 !== R)
                        ) {
                          e.next = 91;
                          break;
                        }
                        return (
                          (e.next = 87),
                          (0, S.gz)(r(d.ERR_METER_SETUP_FAILED))
                        );
                      case 87:
                        return ((e.next = 89), (0, S.gz)(i()));
                      case 91:
                        if (412 !== R) {
                          e.next = 99;
                          break;
                        }
                        if (
                          "action_required_activate_set_mode" !==
                          O.error.errCode
                        ) {
                          e.next = 97;
                          break;
                        }
                        return (
                          (e.next = 95),
                          (0, S.gz)(n({ activateSetMode: !0 }))
                        );
                      case 95:
                        return ((e.next = 97), (0, S.gz)(a(!0)));
                      case 99:
                        if (400 !== R) {
                          e.next = 108;
                          break;
                        }
                        if ("err_invalid_meter_pos" !== O.error.errCode) {
                          e.next = 105;
                          break;
                        }
                        return (
                          (e.next = 103),
                          (0, S.gz)(r(d.ERR_METER_INVALID_POS))
                        );
                      case 105:
                        if ("err_invalid_meter_id" !== O.error.errCode) {
                          e.next = 108;
                          break;
                        }
                        return (
                          (e.next = 108),
                          (0, S.gz)(r(d.ERR_METER_INVALID_METERID))
                        );
                      case 108:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[24, 79]],
              );
            }),
          },
        }),
        be = r(87371),
        ve = r(41068),
        Ce = r(40915),
        Re = r(79272),
        Oe = r(48229),
        Se = r(38391),
        Ze = r(90830),
        ke = (function (e) {
          (0, p.default)(r, e);
          var t = (0, E.default)(r);
          function r() {
            var e;
            (0, g.default)(this, r);
            for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
              a[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(a))).htmlParserTransform =
                function (t, r) {
                  if ("try_manually" === t.name)
                    return (0, $.jsx)(
                      ye,
                      {
                        onClick: function () {
                          (e.actions.setButtons({
                            Submit: !0,
                            Retry: !1,
                            Confirm: !1,
                          }),
                            e.actions.setActionRequired({
                              fillConfigurationForm: !0,
                            }));
                        },
                        children:
                          e.props.translations.SETUP_TOPOLOGY_TRY_MANUALLY,
                      },
                      "Try_manually_".concat(r),
                    );
                }),
              e
            );
          }
          return (
            (0, _.default)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.dirty,
                    r = e.form,
                    n = e.meters,
                    a = e.translations,
                    s = e.error,
                    i = e.actionModal,
                    o = e.countryDevice,
                    c = e.actionsRequired,
                    u = e.isMobile,
                    l = e.successMessage,
                    d = e.configurationForm,
                    x = e.lastPowerMeterValue,
                    f = e.buttonsRequired,
                    g = e.loading,
                    _ = this.actions,
                    p = _.change,
                    E = _.submitAndNext,
                    h = _.stepBack,
                    m = _.setActionModal,
                    T = _.setupMeter,
                    b = _.changeConfigurationForm,
                    v = _.revertForm,
                    C = _.autoSetupMeter,
                    R = c.fillConfigurationForm,
                    O = c.loadingSetupMeter,
                    S = c.showInformation,
                    Z = f.Retry,
                    k = f.Confirm,
                    P = f.Submit,
                    z = r.powerMeter1,
                    N = r.powerMeter2,
                    M = r.hasPv,
                    U = r.maximumPower,
                    y = r.hasBattery,
                    L = d.configBaudrate,
                    A = d.meterAddress,
                    j = a.SETUP_ACTION_REQUIRED,
                    D = a.SETUP_TOPOLOGY_METER_1,
                    F = a.SETUP_TOPOLOGY_METER_2,
                    B = a.SETUP_TOPOLOGY_HAS_PV,
                    Y = a.SETUP_TOPOLOGY,
                    G = a.SETUP_FINISH,
                    q = a.SETUP_BACK,
                    V = a.SETUP_OPERATION_MODE,
                    H = a.SETUP_OPERATION_MODE_DESCRIPTION,
                    W = a.SETUP_TOPOLOGY_SETUP_SUCCESS,
                    K = a.SETUP_TOPOLOGY_SELECT_BAUDRATE,
                    ee = a.SETUP_TOPOLOGY_METER_ADDRESS,
                    te = a.SETUP_TOPOLOGY_RETRY,
                    re = a.SETUP_TOPOLOGY_CONFIRM,
                    ne = a.SETUP_TOPOLOGY_SUBMIT,
                    ae = a.SETUP_CANCEL_BUTTON,
                    se = a.UNITSETT_GENERAL_BATTERY_CONNECTED,
                    ie = w.zN === o,
                    oe = {};
                  if (Object.keys(x).length > 0) {
                    var ce = Object.keys(x)[0];
                    oe = (0, I.filter)(n, { id: x[ce] })[0];
                  }
                  var ue = (0, $.jsxs)(J.l0.Buttons, {
                    align: u ? "center" : "right",
                    fixed: u,
                    mobile: u,
                    children: [
                      (0, $.jsx)(J.zx, {
                        id: "PrimaryButton_Back",
                        buttonType: "primary-cancel",
                        margin: "0 12px",
                        buttonWidth: u ? "156px" : "163px",
                        onClick: h,
                        children: q,
                      }),
                      (0, $.jsx)(J.zx, {
                        id: "PrimaryButton_Submit",
                        margin: "0 12px",
                        buttonWidth: u ? "156px" : "163px",
                        onClick: E,
                        children: G,
                      }),
                    ],
                  });
                  return (0, $.jsxs)($.Fragment, {
                    children: [
                      (0, $.jsxs)(J.e0, {
                        padding: !0,
                        mobile: !1,
                        children: [
                          g && (0, $.jsx)(J.gb, {}),
                          (0, $.jsx)(Ne, {
                            out: !l,
                            mobile: u,
                            icon: (0, $.jsx)(Oe.Z, { children: "check" }),
                            message: W,
                          }),
                          !u && (0, $.jsx)(J.V1, { mobile: u, children: Y }),
                          (0, $.jsxs)(J.l0, {
                            showButtons: !0,
                            buttons: ue,
                            fixed: u,
                            mobile: u,
                            containerHeight: u ? "calc(100vh - 310px)" : "66vh",
                            children: [
                              (0, $.jsx)(Q.Z, { dirty: t, error: s, full: !1 }),
                              (0, $.jsxs)(J.l0.Row, {
                                full: u,
                                children: [
                                  (0, $.jsx)(J.OC, {
                                    id: "Select_Meter1",
                                    color: "rgba(0, 0, 0, 0.02)",
                                    label: D,
                                    options: n.map(function (e) {
                                      return { val: e.id, label: e.model };
                                    }),
                                    selected: z.value,
                                    disabled: !1,
                                    error: t && !z.valid,
                                    full: !1,
                                    onChange: function (e) {
                                      return p({ powerMeter1: e });
                                    },
                                  }),
                                  (0, $.jsx)(X.Z, {
                                    id: "PowerMeter1",
                                    showError: t && !z.valid,
                                    errorMessage: z.message,
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(J.l0.Row, {
                                full: u,
                                children: [
                                  (0, $.jsx)(J.OC, {
                                    id: "Select_Meter2",
                                    color: "rgba(0, 0, 0, 0.02)",
                                    label: F,
                                    options: n.map(function (e) {
                                      return { val: e.id, label: e.model };
                                    }),
                                    selected: N.value,
                                    disabled: !1,
                                    error: t && !N.valid,
                                    full: !1,
                                    onChange: function (e) {
                                      return p({ powerMeter2: e });
                                    },
                                  }),
                                  (0, $.jsx)(X.Z, {
                                    id: "PowerMeter2",
                                    showError: t && !N.valid,
                                    errorMessage: N.message,
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(J.l0.Row, {
                                full: u,
                                relative: !0,
                                children: [
                                  (0, $.jsx)(ze, {
                                    control: (0, $.jsx)(Ie, {
                                      checked: y.value,
                                      onChange: function () {
                                        return p({ hasBattery: !y.value });
                                      },
                                      classes: {
                                        checked: "checked",
                                        track: "bar",
                                      },
                                      id: "PowerSwitch_Hasbattery",
                                    }),
                                    label: se,
                                    id: "SwitchLabel_Hasbattery",
                                  }),
                                  (0, $.jsx)(X.Z, {
                                    id: "HasBattery",
                                    showError: t && !y.valid,
                                    errorMessage: y.message,
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(J.l0.Row, {
                                full: u,
                                relative: !0,
                                children: [
                                  (0, $.jsx)(ze, {
                                    control: (0, $.jsx)(Ie, {
                                      checked: M.value,
                                      onChange: function () {
                                        return p({ hasPv: !M.value });
                                      },
                                      classes: {
                                        checked: "checked",
                                        track: "bar",
                                      },
                                      id: "PowerSwitch_Haspv",
                                    }),
                                    label: B,
                                    id: "SwitchLabel_Haspv",
                                  }),
                                  (0, $.jsx)(X.Z, {
                                    id: "HasPv",
                                    showError: t && !M.valid,
                                    errorMessage: M.message,
                                  }),
                                ],
                              }),
                              ie &&
                                (0, $.jsxs)(J.l0.Row, {
                                  full: u,
                                  children: [
                                    (0, $.jsx)(J.oH, {
                                      id: "InputText_OperationMode",
                                      label: V,
                                      helperText: U.valid && H,
                                      value: U.value,
                                      error: t && !U.valid,
                                      onChange: function (e) {
                                        var t = e.target;
                                        return p({
                                          maximumPower: t.validity.valid
                                            ? t.value
                                            : t.value.slice(0, -1),
                                        });
                                      },
                                      margin: "normal",
                                      fullWidth: !0,
                                      InputProps: {
                                        endAdornment: (0, $.jsx)(ve.Z, {
                                          position: "end",
                                          children: "W",
                                        }),
                                        inputProps: {
                                          maxLength: 5,
                                          pattern: "-?[0-9]{0,10}",
                                        },
                                      },
                                    }),
                                    (0, $.jsx)(X.Z, {
                                      id: "MaximumPower",
                                      showError: t && !U.valid,
                                      errorMessage: U.message,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, $.jsx)(J.u_, {
                        open: i,
                        size: "large",
                        children: (0, $.jsxs)("div", {
                          children: [
                            (0, $.jsx)(J.xB, { title: j, onClose: v }),
                            (0, $.jsxs)(J.hz, {
                              size: "small",
                              padding: !0,
                              children: [
                                O &&
                                  (0, $.jsxs)($.Fragment, {
                                    children: [
                                      (0, $.jsx)(Ue, { children: O }),
                                      (0, $.jsx)(J.SK, { height: "10px" }),
                                      (0, $.jsx)(Re.Z, {}),
                                    ],
                                  }),
                                R &&
                                  (0, $.jsxs)($.Fragment, {
                                    children: [
                                      (0, $.jsx)(J.OC, {
                                        color: "rgba(0, 0, 0, 0.02)",
                                        label: K,
                                        options:
                                          oe &&
                                          oe.supportedBaudrates &&
                                          oe.supportedBaudrates.map(
                                            function (e) {
                                              return {
                                                val: e.toString(),
                                                label: e.toString(),
                                              };
                                            },
                                          ),
                                        selected: L.value,
                                        error: !L.valid,
                                        onChange: function (e) {
                                          return b({ configBaudrate: e });
                                        },
                                        id: "Select_Baudrate",
                                      }),
                                      (0, $.jsx)(X.Z, {
                                        id: "ConfigBaudrate",
                                        showError: t && !L.valid,
                                        errorMessage: L.message,
                                      }),
                                      (0, $.jsx)(we, { children: ee }),
                                      (0, $.jsx)(Me, {
                                        value: A.value,
                                        error: A.valid ? 0 : 1,
                                        onValueChange: function (e) {
                                          b({ meterAddress: e.value });
                                        },
                                        allowNegative: !1,
                                        format: "#",
                                      }),
                                      (0, $.jsx)(X.Z, {
                                        id: "ConfigBaudrate",
                                        showError: t && !A.valid,
                                        errorMessage: A.message,
                                      }),
                                    ],
                                  }),
                                S &&
                                  (0, $.jsx)(Le, {
                                    children: (0, Se.ZP)(S, {
                                      transform: this.htmlParserTransform,
                                    }),
                                  }),
                              ],
                            }),
                            !O &&
                              (0, $.jsxs)(J.Zf, {
                                align: "right",
                                children: [
                                  (0, $.jsx)(J.zx, {
                                    id: "PrimaryButton_Cancel",
                                    buttonType: "primary-cancel",
                                    margin: "0 12px",
                                    buttonWidth: u ? "100px" : "156px",
                                    onClick: v,
                                    children: ae,
                                  }),
                                  Z &&
                                    (0, $.jsx)(J.zx, {
                                      id: "PrimaryButton_Retry",
                                      margin: "0 12px",
                                      buttonWidth: u ? "100px" : "156px",
                                      onClick: C,
                                      children: te,
                                    }),
                                  k &&
                                    (0, $.jsx)(J.zx, {
                                      id: "PrimaryButton_Confirm",
                                      margin: "0 12px",
                                      buttonWidth: u ? "100px" : "156px",
                                      onClick: function () {
                                        return m(!1);
                                      },
                                      children: re,
                                    }),
                                  P &&
                                    (0, $.jsx)(J.zx, {
                                      id: "PrimaryButton_Submit",
                                      margin: "0 12px",
                                      buttonWidth: u ? "100px" : "156px",
                                      onClick: T,
                                      children: ne,
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
            r
          );
        })(h.Component),
        Pe = Te(ke),
        Ie = (0, T.ZP)(be.Z)(
          a ||
            (a = (0, f.default)([
              "\n  &&&& {\n    position: absolute;\n    top: 8px;\n    right: 0;\n    z-index: 10;\n\n    .checked {\n      color: #007bc1;\n    }\n    .checked + .bar {\n      background-color: #007bc1;\n      opacity: 0.4;\n    }\n  }\n",
            ])),
        ),
        ze = (0, T.ZP)(Ce.Z)(
          s ||
            (s = (0, f.default)([
              "\n  padding: 0 0px 20px;\n  margin-top: 20px !important;\n  margin-left: 0 !important;\n  margin-right: 0;\n  width: 100%;\n\n  > span:nth-child(2) {\n    font-size: 14px;\n    font-weight: bold;\n    color: #5b6770;\n    line-height: 14px;\n    font-family: 'Open Sans';\n    width: 85%;\n    padding-left: 8px;\n  }\n  box-shadow: inset 0 -1px 0 0 rgba(114, 126, 132, 0.2);\n",
            ])),
        ),
        Ne = (0, T.ZP)(J.mV)(
          i ||
            (i = (0, f.default)([
              "\n  top: -30px !important;\n  left: 9vw !important;\n",
            ])),
        ),
        Me = (0, T.ZP)(Ze.Z)(
          o ||
            (o = (0, f.default)([
              "\n  font-size: 14px;\n  color: #424e54;\n  font-family: 'Open Sans';\n  padding: 8px 8px 8px 0px;\n  box-shadow: inset 0 -1px 0 0 rgba(114, 126, 132, 0.2);\n  border: 0px;\n  width: 100%;\n\n  &:focus {\n    box-shadow: inset 0 -1px 0 0 #9fa7aa;\n    outline: 0;\n  }\n\n  ",
              "\n",
            ])),
          function (e) {
            return (
              e.error &&
              "\n    box-shadow: inset 0 -1px 0 0 rgba(202,60,61,0.5);\n  "
            );
          },
        ),
        we = T.ZP.p(
          c ||
            (c = (0, f.default)([
              "\n  font-size: 14px;\n  font-weight: bold;\n  color: #5b6770;\n  line-height: 14px;\n  font-family: 'Open Sans';\n  cursor: auto;\n",
            ])),
        ),
        Ue = T.ZP.div(
          u ||
            (u = (0, f.default)([
              "\n  color: rgba(114, 126, 132, 1);\n  font-size: 14px;\n  line-height: 20px;\n  font-family: 'Open Sans';\n  margin: 7px 0px;\n",
            ])),
        ),
        ye = T.ZP.a(
          l ||
            (l = (0, f.default)([
              "\n  font-size: 14px;\n  line-height: 20px;\n  font-family: 'Open Sans';\n  color: #007bc1;\n  text-decoration: underline;\n  cursor: pointer;\n",
            ])),
        ),
        Le = T.ZP.div(
          d ||
            (d = (0, f.default)([
              "\n  color: #424e54;\n  font-family: 'Open Sans';\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n",
            ])),
        ),
        Ae = "".concat(w.CT, "/internal/languages"),
        je = (0, O.Jg)({
          path: function () {
            return ["scenes", "containers", "LangMenu"];
          },
          connect: {
            props: [y.Z, ["language"]],
            actions: [y.Z, ["setLanguage"]],
          },
          actions: function () {
            return {
              fetchLanguages: function () {
                return !0;
              },
              setLanguages: function (e) {
                return { languages: e };
              },
              setCurrentLanguage: function (e) {
                return { language: e };
              },
              reset: function () {
                return !0;
              },
            };
          },
          reducers: function (e) {
            var t,
              r,
              n = e.actions;
            return {
              languages: [
                [],
                N().array,
                ((t = {}),
                (0, R.Z)(t, n.reset, function (e, t) {
                  return [];
                }),
                (0, R.Z)(t, n.setLanguages, function (e, t) {
                  return t.languages;
                }),
                t),
              ],
              currentLanguage: [
                null,
                N().object,
                ((r = {}),
                (0, R.Z)(r, n.reset, function (e, t) {
                  return null;
                }),
                (0, R.Z)(r, n.setCurrentLanguage, function (e, t) {
                  return t.language;
                }),
                r),
              ],
            };
          },
          start: (0, C.Z)().mark(function e() {
            var t;
            return (0, C.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = this.actionCreators.fetchLanguages),
                        (e.next = 3),
                        (0, S.gz)(t())
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
            var t,
              r = e.actions,
              n = e.workers;
            return (
              (t = {}),
              (0, R.Z)(t, r.fetchLanguages, n.fetchLanguages),
              (0, R.Z)(t, r.setLanguage, [n.setCurrentLanguage]),
              (0, R.Z)(t, r.setLanguages, [n.setCurrentLanguage]),
              t
            );
          },
          workers: {
            fetchLanguages: (0, C.Z)().mark(function e() {
              var t, r, n, a;
              return (0, C.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = this.actionCreators.setLanguages),
                          (e.prev = 1),
                          (e.next = 4),
                          (0, S.RE)(Z.Z.get, Ae)
                        );
                      case 4:
                        if (
                          ((r = e.sent),
                          (n = r.data),
                          (a = n.result),
                          !n.successful)
                        ) {
                          e.next = 10;
                          break;
                        }
                        return ((e.next = 10), (0, S.gz)(t(a.results)));
                      case 10:
                        e.next = 15;
                        break;
                      case 12:
                        ((e.prev = 12), (e.t0 = e.catch(1)), console.log(e.t0));
                      case 15:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[1, 12]],
              );
            }),
            setCurrentLanguage: (0, C.Z)().mark(function () {
              var e, t, r, n, a;
              return (0, C.Z)().wrap(
                function (s) {
                  for (;;)
                    switch ((s.prev = s.next)) {
                      case 0:
                        return ((s.next = 2), this.get("languages"));
                      case 2:
                        return (
                          (e = s.sent),
                          (s.next = 5),
                          this.get("language")
                        );
                      case 5:
                        if (
                          ((t = s.sent),
                          (r = {
                            default: !0,
                            id: "526e4c3a-4294-488e-a5f6-3aea6334707a",
                            updatedAt: 1536965157425,
                            createdAt: 1533241923088,
                            name: "English (UK)",
                            identifier: "en-gb",
                            locales: "en",
                            isDefault: !0,
                          }),
                          (n = this.actionCreators.setCurrentLanguage),
                          !(a = oe()(e, function (e) {
                            return (
                              e.identifier.substring(0, 2) === t.substring(0, 2)
                            );
                          })))
                        ) {
                          s.next = 14;
                          break;
                        }
                        return ((s.next = 12), (0, S.gz)(n(a)));
                      case 12:
                        s.next = 16;
                        break;
                      case 14:
                        return ((s.next = 16), (0, S.gz)(n(r)));
                      case 16:
                      case "end":
                        return s.stop();
                    }
                },
                n,
                this,
              );
            }),
          },
        }),
        De = (function (e) {
          (0, p.default)(r, e);
          var t = (0, E.default)(r);
          function r() {
            var e;
            (0, g.default)(this, r);
            for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
              a[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(a))).handleOnMenuChange =
                function (e, t) {
                  var r =
                    t &&
                    (0, I.find)(t, function (t) {
                      return t.val === e;
                    });
                  (0, I.isFunction)(r.action) && (0, r.action)();
                }),
              e
            );
          }
          return (
            (0, _.default)(r, [
              {
                key: "render",
                value: function () {
                  var e = [],
                    t = this.props,
                    r = t.languages,
                    n = t.currentLanguage,
                    a = this.actions.setLanguage;
                  return (
                    r.forEach(function (t) {
                      e.push({
                        val: t.identifier,
                        label: t.name,
                        action: function () {
                          a(t.locales);
                        },
                      });
                    }),
                    (0, $.jsxs)(Be, {
                      children: [
                        (0, $.jsx)(Oe.Z, { children: "languages" }),
                        (0, $.jsx)(J.jL, {
                          color: "#727E84",
                          placeholder: n ? n.name : "",
                          onChange: this.handleOnMenuChange,
                          options: e,
                        }),
                      ],
                    })
                  );
                },
              },
            ]),
            r
          );
        })(h.Component),
        Fe = je(De),
        Be = T.ZP.div(
          x ||
            (x = (0, f.default)([
              "\n  position: absolute;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  span.material-icons {\n    color: #727E84;\n    margin-right: 4px;\n  }\n",
            ])),
        ),
        Ye = function (e) {
          var t = e.width,
            r = e.height,
            n = e.fillColor;
          return (0, $.jsxs)("svg", {
            width: t,
            height: r,
            viewBox: "0 0 24 24",
            children: [
              (0, $.jsx)("path", {
                fill: "#ffffff",
                fillOpacity: ".3",
                d: "M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z",
              }),
              (0, $.jsx)("path", { d: "M0 0h24v24H0z", fill: "none" }),
              (0, $.jsx)("path", {
                d: "M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z",
                fill: n,
              }),
            ],
          });
        };
      Ye.defaultProps = { width: 24, height: 24, fillColor: "#FFFFFF" };
      var Ge,
        qe,
        Ve,
        He,
        We,
        Ke,
        Je,
        Xe,
        Qe = Ye,
        $e = (function (e) {
          (0, p.default)(r, e);
          var t = (0, E.default)(r);
          function r() {
            return ((0, g.default)(this, r), t.apply(this, arguments));
          }
          return (
            (0, _.default)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.currentStep,
                    r = e.translations,
                    n = e.submitting,
                    a = e.loading,
                    s = e.isMobile,
                    i = e.modalNoInternet,
                    o = e.noInternetConnection,
                    c = e.setupStatus,
                    u = this.actions,
                    l = u.changeStep,
                    d = u.setNoInternetConnection,
                    x = r.SETUP_NETWORK_CONFIGS,
                    f = r.SETUP_DATETIME_CONFIGS,
                    g = r.SETUP_TOPOLOGY,
                    _ = r.SETUP_INSTALLATION_PROCESS,
                    p = r.SETUP_NETWORK_MOBILE,
                    E = r.SETUP_DATETIME_MOBILE,
                    h = r.SETUP_TOPOLOGY_MOBILE,
                    m = r.DASH_UNIT_OFFLINE_DESKTOP,
                    T = r.DASH_UNIT_OFFLINE_MOBILE,
                    v = r.SETUP_OFFLINE_MODAL_DESC,
                    C = r.SETUP_OFFLINE_MODAL_TITLE,
                    R = r.SETUP_OFFLINE_MODAL_POINT_CONFIG_MANUALLY,
                    O = [
                      {
                        step: 0,
                        label: s ? p : x,
                        icon: (0, $.jsx)(Qe, {}),
                        id: "Network",
                      },
                      {
                        step: 1,
                        label: s ? E : f,
                        icon: (0, $.jsx)(Oe.Z, { children: "calendar_today" }),
                        id: "DateTime",
                      },
                      {
                        step: 2,
                        label: s ? h : g,
                        icon: (0, $.jsx)(Oe.Z, { children: "apps" }),
                        id: "Topology",
                      },
                    ],
                    S = c && c.setupComplete,
                    Z = Object.keys(r).filter(function (e) {
                      return /SETUP_OFFLINE_MODAL_POINT(\d+)/.test(e);
                    }),
                    k = (0, $.jsxs)("div", {
                      children: [(0, $.jsx)(st, {}), (0, $.jsx)(it, {})],
                    });
                  return (0, $.jsxs)(tt, {
                    mobile: s,
                    children: [
                      o &&
                        (0, $.jsx)(J.XO, {
                          mobile: s,
                          icon: (0, $.jsx)(Oe.Z, { children: "warning" }),
                          message: s ? T : m,
                        }),
                      (0, $.jsx)(J.u_, {
                        open: i,
                        size: "medium",
                        children: (0, $.jsxs)("div", {
                          children: [
                            (0, $.jsx)(J.xB, { red: !0, title: C }),
                            (0, $.jsxs)(J.hz, {
                              padding: !0,
                              children: [
                                (0, $.jsx)(J.ZT, {
                                  children: (0, $.jsx)("b", { children: v }),
                                }),
                                (0, $.jsxs)(J.ZT, {
                                  children: [
                                    Z.map(function (e) {
                                      return (0, $.jsx)(
                                        ct,
                                        { children: r[e] },
                                        e,
                                      );
                                    }),
                                    (0, $.jsx)(ct, { children: R }),
                                  ],
                                }),
                              ],
                            }),
                            (0, $.jsx)(J.Zf, {
                              buttonsposition: "end",
                              children: (0, $.jsx)(J.zx, {
                                id: "Button_Ok",
                                buttonType: "primary-danger",
                                margin: "0 12px",
                                buttonWidth: "156px",
                                onClick: function () {
                                  return d(!0);
                                },
                                children: "OK",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (n || a) && (0, $.jsx)(J.gb, {}),
                      !s &&
                        (0, $.jsxs)($.Fragment, {
                          children: [
                            (0, $.jsx)(Fe, {}),
                            (0, $.jsx)(J.V1, { mobile: s, children: _ }),
                            (0, $.jsx)(J.Fe, {
                              children: O.map(function (e) {
                                var r = e.step,
                                  n = e.label,
                                  a = e.icon,
                                  s = e.id;
                                return (0, $.jsx)(
                                  at,
                                  {
                                    active: t === r,
                                    children: (0, $.jsx)(J.Lr, {
                                      color: "#FFFFFF",
                                      disabled: !(S || r <= t),
                                      className: S || r <= t ? "active" : "",
                                      onClick: function () {
                                        return l(r);
                                      },
                                      link: r >= t,
                                      check: r < t,
                                      title: n,
                                      icon: a,
                                      id: s,
                                      children: t && k,
                                    }),
                                  },
                                  r,
                                );
                              }),
                            }),
                            (0, $.jsxs)(J.Xl, {
                              children: [
                                0 === t && (0, $.jsx)(b.Z, {}),
                                1 === t && (0, $.jsx)(te, {}),
                                2 === t && (0, $.jsx)(Pe, {}),
                              ],
                            }),
                          ],
                        }),
                      s &&
                        (0, $.jsxs)($.Fragment, {
                          children: [
                            (0, $.jsxs)(rt, {
                              children: [
                                (0, $.jsx)(J.V1, { mobile: s, children: _ }),
                                (0, $.jsx)(ot, {
                                  children: (0, $.jsx)(J.T5, {
                                    items: O.map(function (e) {
                                      var r = e.step,
                                        n = e.label;
                                      e.icon;
                                      return {
                                        disabled: !(r <= t),
                                        slug: r,
                                        name: n,
                                      };
                                    }),
                                    selected: t,
                                    onChange: function (e) {
                                      return l(e);
                                    },
                                  }),
                                }),
                              ],
                            }),
                            (0, $.jsxs)(nt, {
                              children: [
                                0 === t && (0, $.jsx)(b.Z, {}),
                                1 === t && (0, $.jsx)(te, {}),
                                2 === t && (0, $.jsx)(Pe, {}),
                              ],
                            }),
                          ],
                        }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(h.Component),
        et = (0, m.Z)($e),
        tt = T.ZP.div(
          Ge || (Ge = (0, f.default)(["\n  padding: 20px;\n\n  ", "\n"])),
          function (e) {
            return e.mobile && "\n    padding: 0px;\n  ";
          },
        ),
        rt = T.ZP.div(
          qe ||
            (qe = (0, f.default)([
              "\n  height: 25%;\n  \n  @media screen and (max-width: 350px) {\n    height: 36%;\n  }\n  \n  @media screen and (min-width: 550px) and (max-width: 1024px) {\n    height: 15%;\n  }\n\n  width: 100vw;\n  position: absolute;\n  padding: 15px;\n  background-color: #007bc1;\n",
            ])),
        ),
        nt = T.ZP.div(
          Ve ||
            (Ve = (0, f.default)([
              "\n  position: absolute;\n  top: 25%;\n  height: 75%;\n\n  @media screen and (max-width: 350px) {\n    top: 36%;\n    height: 74%;\n  }\n\n  @media screen and (min-width: 550px) and (max-width: 1024px) {\n    top: 15%;\n    height: 85%;\n  }\n\n  border-width: 15vw 100vw 0 0;\n  border-color: #007bc1 #FFFFFF transparent transparent;\n  display: inline-block;\n  width: 0px;\n  border-style: solid;\n",
            ])),
        ),
        at = T.ZP.div(
          He ||
            (He = (0, f.default)([
              "\n  position: relative;\n  height: 56px;\n  width: 100%;\n  \n  ",
              "\n\n  ",
              "\n\n  ",
              "\n\n",
              "\n",
            ])),
          function (e) {
            var t = e.mobile,
              r = e.color;
            return (
              !t &&
              "\n    span {\n      color: ".concat(
                r || "#FFF",
                ";\n    }\n\n    > div:nth-of-type(1) {\n      padding-left: 10px;\n      z-index: 3;\n      position: absolute;\n      width: 100%;    \n      box-shadow: inset 0 -1px 0 0 rgba(253,253,253,0.1), 0 0 5px 0 rgba(81,141,197,0.1);\n      transition: background-color 0.1s ease-in-out;\n    }\n  ",
              )
            );
          },
          function (e) {
            var t = e.mobile,
              r = e.color;
            return (
              t &&
              "\n    * {\n      color: ".concat(
                r || "#424E54",
                "\n    }\n\n    > div:before {\n      content: '';\n      position: absolute;\n      width: calc(100% + 20px);\n      height: 56px;\n      box-shadow: inset 0 -1px 0 0 rgba(114,126,132,0.1);\n\n      @media screen and (min-width: 550px) and (max-width: 1024px) {\n        width: calc(100% + 50px);\n      }\n    }\n  ",
              )
            );
          },
          function (e) {
            var t = e.active,
              r = e.mobile;
            return (
              t &&
              !r &&
              "\n    > div:nth-of-type(1) {\n      position: relative;\n      background-color: #007BC1;\n      background: linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);\n      box-shadow: inset 0 -1px 0 0 rgba(253,253,253,0.1), 0 0 5px 0 rgba(81,141,197,0.1);\n    }\n  "
            );
          },
          function (e) {
            var t = e.active,
              r = e.mobile,
              n = e.link;
            return (
              !t &&
              !r &&
              n &&
              "\n  &:hover > div:nth-of-type(1) {\n    background-color: #0074b8;\n  }\n"
            );
          },
        ),
        st = T.ZP.div(
          We ||
            (We = (0, f.default)([
              "\n  position: absolute;\n  height: 56px;\n  width: 100%;\n  background-color: #007BC1;\n  z-index: 2;\n  top: 0;\n  left: 0;\n",
            ])),
        ),
        it = T.ZP.div(
          Ke ||
            (Ke = (0, f.default)([
              "\n  position: absolute;\n  height: 10px;\n  width: calc(100% - 48px);\n  opacity: 0.4;\n  background-color: #0067C6;\n  box-shadow: 0 0 20px 0 #424E54;\n  bottom: 0;\n  right: 24px;\n  z-index: 1;\n",
            ])),
        ),
        ot = T.ZP.div(Je || (Je = (0, f.default)(["\n  margin-top: 30px;\n"]))),
        ct = (0, T.ZP)(J.E9)(
          Xe || (Xe = (0, f.default)(["\n  margin-left: 14px;\n"])),
        );
    },
    27025: function () {},
  },
]);
//# sourceMappingURL=4492.eaa4f715.chunk.js.map
