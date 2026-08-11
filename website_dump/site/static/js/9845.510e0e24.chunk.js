/*! For license information please see 9845.510e0e24.chunk.js.LICENSE.txt */
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [9845],
  {
    49845: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZP: function () {
          return Lt;
        },
      });
      n(86267);
      var r = n(76431),
        o = n(69486),
        i = n.n(o),
        u = n(4451),
        a = n.n(u),
        c = n(77315),
        l = n.n(c),
        s = n(29903),
        d = n.n(s),
        f = n(61551),
        p = n(557),
        h = "data-focus-lock",
        m = "data-focus-lock-disabled";
      function v(e, t) {
        return (function (e, t) {
          var n = (0, r.useState)(function () {
            return {
              value: e,
              callback: t,
              facade: {
                get current() {
                  return n.value;
                },
                set current(e) {
                  var t = n.value;
                  t !== e && ((n.value = e), n.callback(e, t));
                },
              },
            };
          })[0];
          return ((n.callback = t), n.facade);
        })(t || null, function (t) {
          return e.forEach(function (e) {
            return (function (e, t) {
              return ("function" === typeof e ? e(t) : e && (e.current = t), e);
            })(e, t);
          });
        });
      }
      var b = {
          width: "1px",
          height: "0px",
          padding: 0,
          overflow: "hidden",
          position: "fixed",
          top: "1px",
          left: "1px",
        },
        g = function (e) {
          var t = e.children;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement("div", {
              key: "guard-first",
              "data-focus-guard": !0,
              "data-focus-auto-guard": !0,
              style: b,
            }),
            t,
            t &&
              r.createElement("div", {
                key: "guard-last",
                "data-focus-guard": !0,
                "data-focus-auto-guard": !0,
                style: b,
              }),
          );
        };
      ((g.propTypes = {}), (g.defaultProps = { children: null }));
      var y = n(90849);
      function w(e) {
        return e;
      }
      function E(e, t) {
        void 0 === t && (t = w);
        var n = [],
          r = !1;
        return {
          read: function () {
            if (r)
              throw new Error(
                "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
              );
            return n.length ? n[n.length - 1] : e;
          },
          useMedium: function (e) {
            var o = t(e, r);
            return (
              n.push(o),
              function () {
                n = n.filter(function (e) {
                  return e !== o;
                });
              }
            );
          },
          assignSyncMedium: function (e) {
            for (r = !0; n.length;) {
              var t = n;
              ((n = []), t.forEach(e));
            }
            n = {
              push: function (t) {
                return e(t);
              },
              filter: function () {
                return n;
              },
            };
          },
          assignMedium: function (e) {
            r = !0;
            var t = [];
            if (n.length) {
              var o = n;
              ((n = []), o.forEach(e), (t = n));
            }
            var i = function () {
                var n = t;
                ((t = []), n.forEach(e));
              },
              u = function () {
                return Promise.resolve().then(i);
              };
            (u(),
              (n = {
                push: function (e) {
                  (t.push(e), u());
                },
                filter: function (e) {
                  return ((t = t.filter(e)), n);
                },
              }));
          },
        };
      }
      function x(e, t) {
        return (void 0 === t && (t = w), E(e, t));
      }
      var O = x({}, function (e) {
          return { target: e.target, currentTarget: e.currentTarget };
        }),
        S = x(),
        k = x(),
        N = (function (e) {
          void 0 === e && (e = {});
          var t = E(null);
          return ((t.options = (0, y.pi)({ async: !0, ssr: !1 }, e)), t);
        })({ async: !0 }),
        C = [],
        T = r.forwardRef(function (e, t) {
          var n,
            o = r.useState(),
            i = o[0],
            u = o[1],
            a = r.useRef(),
            c = r.useRef(!1),
            l = r.useRef(null),
            s = e.children,
            d = e.disabled,
            f = e.noFocusGuards,
            g = e.persistentFocus,
            y = e.crossFrame,
            w = e.autoFocus,
            E = (e.allowTextSelection, e.group),
            x = e.className,
            k = e.whiteList,
            T = e.shards,
            P = void 0 === T ? C : T,
            _ = e.as,
            I = void 0 === _ ? "div" : _,
            M = e.lockProps,
            L = void 0 === M ? {} : M,
            j = e.sideCar,
            A = e.returnFocus,
            R = e.onActivation,
            B = e.onDeactivation,
            q = r.useState({})[0],
            D = r.useCallback(
              function () {
                ((l.current =
                  l.current || (document && document.activeElement)),
                  a.current && R && R(a.current),
                  (c.current = !0));
              },
              [R],
            ),
            F = r.useCallback(
              function () {
                ((c.current = !1), B && B(a.current));
              },
              [B],
            ),
            W = r.useCallback(
              function (e) {
                var t = l.current;
                if (Boolean(A) && t && t.focus) {
                  var n = "object" === typeof A ? A : void 0;
                  ((l.current = null),
                    e
                      ? Promise.resolve().then(function () {
                          return t.focus(n);
                        })
                      : t.focus(n));
                }
              },
              [A],
            ),
            H = r.useCallback(function (e) {
              c.current && O.useMedium(e);
            }, []),
            U = S.useMedium,
            Z = r.useCallback(function (e) {
              a.current !== e && ((a.current = e), u(e));
            }, []);
          var z = (0, p.Z)((((n = {})[m] = d && "disabled"), (n[h] = E), n), L),
            V = !0 !== f,
            G = V && "tail" !== f,
            Q = v([t, Z]);
          return r.createElement(
            r.Fragment,
            null,
            V && [
              r.createElement("div", {
                key: "guard-first",
                "data-focus-guard": !0,
                tabIndex: d ? -1 : 0,
                style: b,
              }),
              r.createElement("div", {
                key: "guard-nearest",
                "data-focus-guard": !0,
                tabIndex: d ? -1 : 1,
                style: b,
              }),
            ],
            !d &&
              r.createElement(j, {
                id: q,
                sideCar: N,
                observed: i,
                disabled: d,
                persistentFocus: g,
                crossFrame: y,
                autoFocus: w,
                whiteList: k,
                shards: P,
                onActivation: D,
                onDeactivation: F,
                returnFocus: W,
              }),
            r.createElement(
              I,
              (0, p.Z)({ ref: Q }, z, { className: x, onBlur: U, onFocus: H }),
              s,
            ),
            G &&
              r.createElement("div", {
                "data-focus-guard": !0,
                tabIndex: d ? -1 : 0,
                style: b,
              }),
          );
        });
      ((T.propTypes = {}),
        (T.defaultProps = {
          children: void 0,
          disabled: !1,
          returnFocus: !1,
          noFocusGuards: !1,
          autoFocus: !0,
          persistentFocus: !1,
          crossFrame: !0,
          allowTextSelection: void 0,
          group: void 0,
          className: void 0,
          whiteList: void 0,
          shards: void 0,
          as: "div",
          lockProps: {},
          onActivation: void 0,
          onDeactivation: void 0,
        }));
      var P = T,
        _ = n(5357),
        I = n(2845);
      var M = function (e, t) {
          return function (n) {
            var o,
              i = [];
            function u() {
              ((o = e(
                i.map(function (e) {
                  return e.props;
                }),
              )),
                t(o));
            }
            var a = (function (e) {
              function t() {
                return e.apply(this, arguments) || this;
              }
              ((0, _.Z)(t, e),
                (t.peek = function () {
                  return o;
                }));
              var a = t.prototype;
              return (
                (a.componentDidMount = function () {
                  (i.push(this), u());
                }),
                (a.componentDidUpdate = function () {
                  u();
                }),
                (a.componentWillUnmount = function () {
                  var e = i.indexOf(this);
                  (i.splice(e, 1), u());
                }),
                (a.render = function () {
                  return r.createElement(n, this.props);
                }),
                t
              );
            })(r.PureComponent);
            return (
              (0, I.Z)(
                a,
                "displayName",
                "SideEffect(" +
                  (function (e) {
                    return e.displayName || e.name || "Component";
                  })(n) +
                  ")",
              ),
              a
            );
          };
        },
        L = function (e) {
          for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
          return t;
        },
        j = function (e) {
          return Array.isArray(e) ? e : [e];
        },
        A = function e(t) {
          return t.parentNode ? e(t.parentNode) : t;
        },
        R = function (e) {
          return j(e)
            .filter(Boolean)
            .reduce(function (e, t) {
              var n = t.getAttribute(h);
              return (
                e.push.apply(
                  e,
                  n
                    ? (function (e) {
                        for (
                          var t = new Set(), n = e.length, r = 0;
                          r < n;
                          r += 1
                        )
                          for (var o = r + 1; o < n; o += 1) {
                            var i = e[r].compareDocumentPosition(e[o]);
                            ((i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 &&
                              t.add(o),
                              (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 &&
                                t.add(r));
                          }
                        return e.filter(function (e, n) {
                          return !t.has(n);
                        });
                      })(
                        L(
                          A(t).querySelectorAll(
                            "[" +
                              h +
                              '="' +
                              n +
                              '"]:not([' +
                              m +
                              '="disabled"])',
                          ),
                        ),
                      )
                    : [t],
                ),
                e
              );
            }, []);
        },
        B = function (e) {
          return Boolean(
            L(e.querySelectorAll("iframe")).some(function (e) {
              return e === document.activeElement;
            }),
          );
        },
        q = function (e) {
          var t = document && document.activeElement;
          return (
            !(!t || (t.dataset && t.dataset.focusGuard)) &&
            R(e).reduce(function (e, n) {
              return e || n.contains(t) || B(n);
            }, !1)
          );
        },
        D = function (e) {
          return "INPUT" === e.tagName && "radio" === e.type;
        },
        F = function (e, t) {
          return D(e) && e.name
            ? (function (e, t) {
                return (
                  t
                    .filter(D)
                    .filter(function (t) {
                      return t.name === e.name;
                    })
                    .filter(function (e) {
                      return e.checked;
                    })[0] || e
                );
              })(e, t)
            : e;
        },
        W = function (e) {
          return e[0] && e.length > 1 ? F(e[0], e) : e[0];
        },
        H = function (e, t) {
          return e.length > 1 ? e.indexOf(F(e[t], e)) : t;
        },
        U = function (e, t) {
          return (
            !e ||
            e === document ||
            (e && e.nodeType === Node.DOCUMENT_NODE) ||
            (!(function (e) {
              if (e.nodeType !== Node.ELEMENT_NODE) return !1;
              var t = window.getComputedStyle(e, null);
              return (
                !(!t || !t.getPropertyValue) &&
                ("none" === t.getPropertyValue("display") ||
                  "hidden" === t.getPropertyValue("visibility"))
              );
            })(e) &&
              t(
                e.parentNode &&
                  e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                  ? e.parentNode.host
                  : e.parentNode,
              ))
          );
        },
        Z = function e(t, n) {
          var r = t.get(n);
          if (void 0 !== r) return r;
          var o = U(n, e.bind(void 0, t));
          return (t.set(n, o), o);
        },
        z = function (e) {
          return Boolean(e && e.dataset && e.dataset.focusGuard);
        },
        V = function (e) {
          return !z(e);
        },
        G = function (e) {
          return Boolean(e);
        },
        Q = "NEW_FOCUS",
        K = function (e, t, n, r) {
          var o = e.length,
            i = e[0],
            u = e[o - 1],
            a = z(n);
          if (!(e.indexOf(n) >= 0)) {
            var c = t.indexOf(n),
              l = r ? t.indexOf(r) : c,
              s = r ? e.indexOf(r) : -1,
              d = c - l,
              f = t.indexOf(i),
              p = t.indexOf(u),
              h = (function (e) {
                var t = new Set();
                return (
                  e.forEach(function (n) {
                    return t.add(F(n, e));
                  }),
                  e.filter(function (e) {
                    return t.has(e);
                  })
                );
              })(t),
              m = h.indexOf(n) - (r ? h.indexOf(r) : c),
              v = H(e, 0),
              b = H(e, o - 1);
            return -1 === c || -1 === s
              ? Q
              : !d && s >= 0
                ? s
                : c <= f && a && Math.abs(d) > 1
                  ? b
                  : c >= p && a && Math.abs(d) > 1
                    ? v
                    : d && Math.abs(m) > 1
                      ? s
                      : c <= f
                        ? b
                        : c > p
                          ? v
                          : d
                            ? Math.abs(d) > 1
                              ? s
                              : (o + s + d) % o
                            : void 0;
          }
        },
        $ = function (e, t) {
          var n = e.tabIndex - t.tabIndex,
            r = e.index - t.index;
          if (n) {
            if (!e.tabIndex) return 1;
            if (!t.tabIndex) return -1;
          }
          return n || r;
        },
        Y = function (e, t, n) {
          return L(e)
            .map(function (e, t) {
              return {
                node: e,
                index: t,
                tabIndex:
                  n && -1 === e.tabIndex
                    ? (e.dataset || {}).focusGuard
                      ? 0
                      : -1
                    : e.tabIndex,
              };
            })
            .filter(function (e) {
              return !t || e.tabIndex >= 0;
            })
            .sort($);
        },
        J = [
          "button:enabled",
          "select:enabled",
          "textarea:enabled",
          "input:enabled",
          "a[href]",
          "area[href]",
          "summary",
          "iframe",
          "object",
          "embed",
          "audio[controls]",
          "video[controls]",
          "[tabindex]",
          "[contenteditable]",
          "[autofocus]",
        ].join(","),
        X = J + ", [data-focus-guard]",
        ee = function (e, t) {
          return e.reduce(function (e, n) {
            return e.concat(
              L(n.querySelectorAll(t ? X : J)),
              n.parentNode
                ? L(n.parentNode.querySelectorAll(J)).filter(function (e) {
                    return e === n;
                  })
                : [],
            );
          }, []);
        },
        te = function (e, t) {
          return L(e)
            .filter(function (e) {
              return Z(t, e);
            })
            .filter(function (e) {
              return (function (e) {
                return !(
                  ("INPUT" === e.tagName || "BUTTON" === e.tagName) &&
                  ("hidden" === e.type || e.disabled)
                );
              })(e);
            });
        },
        ne = function (e, t, n) {
          return Y(te(ee(e, n), t), !0, n);
        },
        re = function (e, t) {
          return Y(te(ee(e), t), !1);
        },
        oe = function (e, t) {
          return te(
            (function (e) {
              var t = e.querySelectorAll("[data-autofocus-inside]");
              return L(t)
                .map(function (e) {
                  return ee([e]);
                })
                .reduce(function (e, t) {
                  return e.concat(t);
                }, []);
            })(e),
            t,
          );
        },
        ie = function e(t, n) {
          return (
            void 0 === n && (n = []),
            n.push(t),
            t.parentNode && e(t.parentNode, n),
            n
          );
        },
        ue = function (e, t) {
          for (var n = ie(e), r = ie(t), o = 0; o < n.length; o += 1) {
            var i = n[o];
            if (r.indexOf(i) >= 0) return i;
          }
          return !1;
        },
        ae = function (e, t, n) {
          var r = j(e),
            o = j(t),
            i = r[0],
            u = !1;
          return (
            o.filter(Boolean).forEach(function (e) {
              ((u = ue(u || e, e) || u),
                n.filter(Boolean).forEach(function (e) {
                  var t = ue(i, e);
                  t && (u = !u || t.contains(u) ? t : ue(t, u));
                }));
            }),
            u
          );
        },
        ce = function (e, t) {
          var n = document && document.activeElement,
            r = R(e).filter(V),
            o = ae(n || e, e, r),
            i = new Map(),
            u = re(r, i),
            a = ne(r, i).filter(function (e) {
              var t = e.node;
              return V(t);
            });
          if (a[0] || (a = u)[0]) {
            var c,
              l = re([o], i).map(function (e) {
                return e.node;
              }),
              s = (function (e, t) {
                var n = new Map();
                return (
                  t.forEach(function (e) {
                    return n.set(e.node, e);
                  }),
                  e
                    .map(function (e) {
                      return n.get(e);
                    })
                    .filter(G)
                );
              })(l, a),
              d = s.map(function (e) {
                return e.node;
              }),
              f = K(d, l, n, t);
            if (f === Q) {
              var p = u
                .map(function (e) {
                  return e.node;
                })
                .filter(
                  ((c = (function (e, t) {
                    return e.reduce(function (e, n) {
                      return e.concat(oe(n, t));
                    }, []);
                  })(r, i)),
                  function (e) {
                    return (
                      e.autofocus ||
                      (e.dataset && !!e.dataset.autofocus) ||
                      c.indexOf(e) >= 0
                    );
                  }),
                );
              return { node: p && p.length ? W(p) : W(d) };
            }
            return void 0 === f ? f : s[f];
          }
        },
        le = 0,
        se = !1,
        de = function (e, t) {
          var n,
            r = ce(e, t);
          if (!se && r) {
            if (le > 2)
              return (
                console.error(
                  "FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting",
                ),
                (se = !0),
                void setTimeout(function () {
                  se = !1;
                }, 1)
              );
            (le++,
              (n = r.node).focus(),
              "contentWindow" in n &&
                n.contentWindow &&
                n.contentWindow.focus(),
              le--);
          }
        };
      function fe(e) {
        var t = window.setImmediate;
        "undefined" !== typeof t ? t(e) : setTimeout(e, 1);
      }
      var pe = function () {
          return (
            (document && document.activeElement === document.body) ||
            (document &&
              L(document.querySelectorAll("[data-no-focus-lock]")).some(
                function (e) {
                  return e.contains(document.activeElement);
                },
              ))
          );
        },
        he = null,
        me = null,
        ve = null,
        be = !1,
        ge = function () {
          return !0;
        };
      function ye(e, t, n, r) {
        var o = null,
          i = e;
        do {
          var u = r[i];
          if (u.guard) u.node.dataset.focusAutoGuard && (o = u);
          else {
            if (!u.lockItem) break;
            if (i !== e) return;
            o = null;
          }
        } while ((i += n) !== t);
        o && (o.node.tabIndex = 0);
      }
      var we = function (e) {
          return e && "current" in e ? e.current : e;
        },
        Ee = function () {
          var e,
            t = !1;
          if (he) {
            var n = he,
              r = n.observed,
              o = n.persistentFocus,
              i = n.autoFocus,
              u = n.shards,
              a = n.crossFrame,
              c = r || (ve && ve.portaledElement),
              l = document && document.activeElement;
            if (c) {
              var s = [c].concat(u.map(we).filter(Boolean));
              if (
                ((l &&
                  !(function (e) {
                    return (he.whiteList || ge)(e);
                  })(l)) ||
                  ((o ||
                    (a ? Boolean(be) : "meanwhile" === be) ||
                    !pe() ||
                    (!me && i)) &&
                    (!c ||
                      q(s) ||
                      ((e = l), ve && ve.portaledElement === e) ||
                      (document && !me && l && !i
                        ? (l.blur && l.blur(), document.body.focus())
                        : ((t = de(s, me)), (ve = {}))),
                    (be = !1),
                    (me = document && document.activeElement))),
                document)
              ) {
                var d = document && document.activeElement,
                  f = (function (e) {
                    var t = R(e).filter(V),
                      n = ae(e, e, t),
                      r = new Map(),
                      o = ne([n], r, !0),
                      i = ne(t, r)
                        .filter(function (e) {
                          var t = e.node;
                          return V(t);
                        })
                        .map(function (e) {
                          return e.node;
                        });
                    return o.map(function (e) {
                      var t = e.node;
                      return {
                        node: t,
                        index: e.index,
                        lockItem: i.indexOf(t) >= 0,
                        guard: z(t),
                      };
                    });
                  })(s),
                  p = f
                    .map(function (e) {
                      return e.node;
                    })
                    .indexOf(d);
                p > -1 &&
                  (f
                    .filter(function (e) {
                      var t = e.guard,
                        n = e.node;
                      return t && n.dataset.focusAutoGuard;
                    })
                    .forEach(function (e) {
                      return e.node.removeAttribute("tabIndex");
                    }),
                  ye(p, f.length, 1, f),
                  ye(p, -1, -1, f));
              }
            }
          }
          return t;
        },
        xe = function (e) {
          Ee() && e && (e.stopPropagation(), e.preventDefault());
        },
        Oe = function () {
          return fe(Ee);
        },
        Se = function (e) {
          var t = e.target,
            n = e.currentTarget;
          n.contains(t) || (ve = { observerNode: n, portaledElement: t });
        },
        ke = function () {
          ((be = "just"),
            setTimeout(function () {
              be = "meanwhile";
            }, 0));
        };
      (O.assignSyncMedium(Se),
        S.assignMedium(Oe),
        k.assignMedium(function (e) {
          return e({ moveFocusInside: de, focusInside: q });
        }));
      var Ne = M(
          function (e) {
            return e.filter(function (e) {
              return !e.disabled;
            });
          },
          function (e) {
            var t = e.slice(-1)[0];
            t &&
              !he &&
              (document.addEventListener("focusin", xe, !0),
              document.addEventListener("focusout", Oe),
              window.addEventListener("blur", ke));
            var n = he,
              r = n && t && t.id === n.id;
            ((he = t),
              n &&
                !r &&
                (n.onDeactivation(),
                e.filter(function (e) {
                  return e.id === n.id;
                }).length || n.returnFocus(!t)),
              t
                ? ((me = null),
                  (r && n.observed === t.observed) || t.onActivation(),
                  Ee(),
                  fe(Ee))
                : (document.removeEventListener("focusin", xe, !0),
                  document.removeEventListener("focusout", Oe),
                  window.removeEventListener("blur", ke),
                  (me = null)));
          },
        )(function () {
          return null;
        }),
        Ce = r.forwardRef(function (e, t) {
          return r.createElement(P, (0, p.Z)({ sideCar: Ne, ref: t }, e));
        }),
        Te = P.propTypes || {};
      (Te.sideCar, (0, f.Z)(Te, ["sideCar"]));
      Ce.propTypes = {};
      var Pe,
        _e = Ce,
        Ie = n(30588),
        Me = n(37878),
        Le = n.n(Me),
        je = n(87745);
      function Ae(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          (t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function Re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ae(Object(n), !0).forEach(function (t) {
                qe(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Ae(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function Be(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      }
      function qe(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function De(e) {
        return (
          (De = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          De(e)
        );
      }
      function Fe(e, t) {
        return (
          (Fe =
            Object.setPrototypeOf ||
            function (e, t) {
              return ((e.__proto__ = t), e);
            }),
          Fe(e, t)
        );
      }
      function We(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function He(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = De(e);
          if (t) {
            var o = De(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return (function (e, t) {
            return !t || ("object" !== typeof t && "function" !== typeof t)
              ? We(e)
              : t;
          })(this, n);
        };
      }
      function Ue(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
          )
        );
      }
      function Ze(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == n) return;
            var r,
              o,
              i = [],
              u = !0,
              a = !1;
            try {
              for (
                n = n.call(e);
                !(u = (r = n.next()).done) &&
                (i.push(r.value), !t || i.length !== t);
                u = !0
              );
            } catch (c) {
              ((a = !0), (o = c));
            } finally {
              try {
                u || null == n.return || n.return();
              } finally {
                if (a) throw o;
              }
            }
            return i;
          })(e, t) ||
          ze(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function ze(e, t) {
        if (e) {
          if ("string" === typeof e) return Ve(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Ve(e, t)
                : void 0
          );
        }
      }
      function Ve(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Ge(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = ze(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var i,
          u = !0,
          a = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return ((u = e.done), e);
          },
          e: function (e) {
            ((a = !0), (i = e));
          },
          f: function () {
            try {
              u || null == n.return || n.return();
            } finally {
              if (a) throw i;
            }
          },
        };
      }
      var Qe,
        Ke,
        $e,
        Ye = (0, Ie.vJ)(
          Pe ||
            (Pe = Ue([
              "\n  .focus-outline-hidden :focus {\n      outline: none;\n  }\n",
            ])),
        ),
        Je = Ie.ZP.button(
          Qe ||
            (Qe = Ue([
              "\n  display: block;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 0;\n  cursor: ",
              ";\n",
            ])),
          function (e) {
            return e.disabled ? "not-allowed" : "pointer";
          },
        ),
        Xe = Ie.ZP.span(
          Ke || (Ke = Ue(["\n  font-size: 12px;\n  line-height: 1;\n"])),
        );
      function et(e) {
        var t = e.className,
          n = e.onClick,
          o = e.inverted,
          i = e.label,
          u = e.disabled;
        return r.createElement(
          Je,
          {
            className: t,
            onClick: n,
            "data-tour-elem": "".concat(o ? "right" : "left", "-arrow"),
            disabled: u,
          },
          i
            ? r.createElement(Xe, null, i)
            : r.createElement(
                "svg",
                { viewBox: "0 0 18.4 14.4" },
                r.createElement("path", {
                  d: o
                    ? "M17 7.2H1M10.8 1L17 7.2l-6.2 6.2"
                    : "M1.4 7.2h16M7.6 1L1.4 7.2l6.2 6.2",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeMiterlimit: "10",
                }),
              ),
        );
      }
      et.propTypes = {
        className: Le().string.isRequired,
        onClick: Le().func.isRequired,
        inverted: Le().bool,
        label: Le().node,
        disabled: Le().bool,
      };
      var tt,
        nt = (0, Ie.ZP)(et)(
          $e ||
            ($e = Ue([
              "\n  color: ",
              ";\n\n  ",
              ";\n  ",
              ";\n\n  &:hover {\n    color: ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.disabled ? "#caccce" : "#646464";
          },
          function (e) {
            return e.inverted ? "margin-left: 24px;" : "margin-right: 24px;";
          },
          function (e) {
            return (
              !e.label &&
              "\n    width: 16px;\n    height: 12px;\n    flex: 0 0 16px;\n  "
            );
          },
          function (e) {
            return e.disabled ? "#caccce" : "#000";
          },
        );
      function rt(e) {
        var t = e.className,
          n = e.onClick,
          o = e.ariaLabel;
        return r.createElement(
          Je,
          { className: t, onClick: n, "aria-label": o },
          r.createElement(
            "svg",
            { viewBox: "0 0 9.1 9.1", "aria-hidden": !0, role: "presentation" },
            r.createElement("path", {
              fill: "currentColor",
              d: "M5.9 4.5l2.8-2.8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L4.5 3.1 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4l2.8 2.8L.3 7.4c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L4.5 6l2.8 2.8c.3.2.5.3.8.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L5.9 4.5z",
            }),
          ),
        );
      }
      rt.propTypes = {
        className: Le().string.isRequired,
        onClick: Le().func.isRequired,
        ariaLabel: Le().string,
      };
      var ot = (0, Ie.ZP)(rt)(
        tt ||
          (tt = Ue([
            "\n  position: absolute;\n  top: 22px;\n  right: 22px;\n  width: 9px;\n  height: 9px;\n  color: #5e5e5e;\n  &:hover {\n    color: #000;\n  }\n",
          ])),
      );
      function it(e) {
        var t = e.getBoundingClientRect();
        return {
          top: t.top,
          right: t.right,
          bottom: t.bottom,
          left: t.left,
          width: t.width,
          height: t.height,
        };
      }
      function ut(e, t) {
        if (!t.highlightedSelectors) return it(e);
        var n,
          r = it(e),
          o = Ge(t.highlightedSelectors);
        try {
          for (o.s(); !(n = o.n()).done;) {
            var i = n.value,
              u = document.querySelector(i);
            if (
              u &&
              "none" !== u.style.display &&
              "hidden" !== u.style.visibility
            ) {
              var a = it(u);
              (a.top < r.top && (r.top = a.top),
                a.right > r.right && (r.right = a.right),
                a.bottom > r.bottom && (r.bottom = a.bottom),
                a.left < r.left && (r.left = a.left));
            }
          }
        } catch (c) {
          o.e(c);
        } finally {
          o.f();
        }
        return ((r.width = r.right - r.left), (r.height = r.bottom - r.top), r);
      }
      function at(e) {
        return (
          e === document.querySelector("body") ||
          e === document.querySelector("html")
        );
      }
      var ct,
        lt = function (e, t) {
          return e > t;
        },
        st = function (e, t) {
          return e > t;
        },
        dt = function (e) {
          return e < 0 ? 0 : e;
        };
      var ft,
        pt,
        ht,
        mt,
        vt,
        bt = Ie.ZP.div(
          ct ||
            (ct = Ue([
              "\n  --reactour-accent: ",
              ";\n  ",
              "\n  position: fixed;\n  transition: transform 0.3s;\n  top: 0;\n  left: 0;\n  z-index: 1000000;\n\n  transform: ",
              ";\n",
            ])),
          function (e) {
            return e.accentColor;
          },
          function (e) {
            return e.defaultStyles
              ? "\n  max-width: 331px;\n  min-width: 150px;\n  padding-right: 40px;\n  border-radius: ".concat(
                  e.rounded,
                  "px;\n  background-color: #fff;\n  padding: 24px 30px;\n  box-shadow: 0 0.5em 3em rgba(0, 0, 0, 0.3);\n  color: inherit;\n  ",
                )
              : "";
          },
          function (e) {
            var t = e.targetTop,
              n = e.targetRight,
              r = e.targetBottom,
              o = e.targetLeft,
              i = e.windowWidth,
              u = e.windowHeight,
              a = e.helperWidth,
              c = e.helperHeight,
              l = e.helperPosition,
              s = e.padding,
              d = { left: o, right: i - n, top: t, bottom: u - r },
              f = function (e) {
                return (
                  d[e] >
                  ((function (e) {
                    return /(left|right)/.test(e);
                  })(e)
                    ? a + 2 * s
                    : c + 2 * s)
                );
              },
              p = function (e) {
                for (
                  var t,
                    n =
                      ((t = d),
                      Object.keys(t)
                        .map(function (e) {
                          return { position: e, value: t[e] };
                        })
                        .sort(function (e, t) {
                          return t.value - e.value;
                        })
                        .map(function (e) {
                          return e.position;
                        })),
                    r = 0;
                  r < n.length;
                  r++
                )
                  if (f(n[r])) return e[n[r]];
                return e.center;
              },
              h = (function (e) {
                if (Array.isArray(e)) {
                  var l = lt(e[0], i),
                    d = st(e[1], u),
                    h = function (e, t) {
                      console.warn(
                        ""
                          .concat(e, ":")
                          .concat(
                            t,
                            " is outside window, falling back to center",
                          ),
                      );
                    };
                  return (
                    l && h("x", e[0]),
                    d && h("y", e[1]),
                    [l ? i / 2 - a / 2 : e[0], d ? u / 2 - c / 2 : e[1]]
                  );
                }
                var m = lt(o + a, i)
                    ? lt(n + s, i)
                      ? n - a
                      : n - a + s
                    : o - s,
                  v = m > s ? m : s,
                  b = st(t + c, u) ? (st(r + s, u) ? r - c : r - c + s) : t - s,
                  g = b > s ? b : s,
                  y = {
                    top: [v, t - c - 2 * s],
                    right: [n + 2 * s, g],
                    bottom: [v, r + 2 * s],
                    left: [o - a - 2 * s, g],
                    center: [i / 2 - a / 2, u / 2 - c / 2],
                  };
                return "center" === e || f(e) ? y[e] : p(y);
              })(l);
            return "translate("
              .concat(Math.round(h[0]), "px, ")
              .concat(Math.round(h[1]), "px)");
          },
        ),
        gt = Ie.ZP.span(
          ft ||
            (ft = Ue([
              "\n  position: absolute;\n  font-family: monospace;\n  background: var(--reactour-accent);\n  background: ",
              ";\n  height: 1.875em;\n  line-height: 2;\n  padding-left: 0.8125em;\n  padding-right: 0.8125em;\n  font-size: 1em;\n  border-radius: 1.625em;\n  color: white;\n  text-align: center;\n  box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.3);\n  top: -0.8125em;\n  left: -0.8125em;\n",
            ])),
          function (e) {
            return e.accentColor;
          },
        ),
        yt = Ie.ZP.div(
          pt ||
            (pt = Ue([
              "\n  display: flex;\n  margin-top: 24px;\n  align-items: center;\n  justify-content: center;\n",
            ])),
        ),
        wt = Ie.ZP.nav(
          ht ||
            (ht = Ue([
              "\n  counter-reset: dot;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n",
            ])),
        ),
        Et = Ie.ZP.button(
          mt ||
            (mt = Ue([
              "\n  counter-increment: dot;\n  width: 8px;\n  height: 8px;\n  border: ",
              ";\n\n  border-radius: 100%;\n  padding: 0;\n  display: block;\n  margin: 4px;\n  transition: opacity 0.3s, transform 0.3s;\n  cursor: ",
              ";\n  transform: scale(",
              ");\n\n  color: ",
              ";\n  background: ",
              ";\n\n  color: ",
              ";\n  background: ",
              ";\n\n  &:before {\n    content: counter(dot);\n    position: absolute;\n    bottom: calc(100% + 0.25em);\n    left: 50%;\n    opacity: 0;\n    transform: translate(-50%, 1em);\n    transition: 0.3s;\n    display: ",
              ";\n  }\n\n  &:hover {\n    background-color: currentColor;\n\n    &:before {\n      opacity: 0.5;\n      transform: translate(-50%, -2px);\n    }\n  }\n",
            ])),
          function (e) {
            return e.current === e.index ? "0" : "1px solid #caccce";
          },
          function (e) {
            return e.disabled ? "not-allowed" : "pointer";
          },
          function (e) {
            return e.current === e.index ? 1.25 : 1;
          },
          function (e) {
            return e.current === e.index ? "var(--reactour-accent)" : "#caccce";
          },
          function (e) {
            return e.current === e.index ? "var(--reactour-accent)" : "none";
          },
          function (e) {
            return e.current === e.index ? e.accentColor : "#caccce";
          },
          function (e) {
            return e.current === e.index ? e.accentColor : "none";
          },
          function (e) {
            return e.showNumber ? "block" : "none";
          },
        ),
        xt = Ie.ZP.div(
          vt ||
            (vt = Ue([
              "\n  opacity: ",
              ";\n  color: ",
              ";\n  width: 100%;\n  left: 0;\n  top: 0;\n  height: 100%;\n  position: fixed;\n  z-index: 99999;\n  pointer-events: none;\n",
            ])),
          function (e) {
            return !e.maskClassName && 0.7;
          },
          function (e) {
            return !e.maskClassName && "#000";
          },
        );
      function Ot(e) {
        var t = e.windowWidth,
          n = e.windowHeight,
          o = e.targetWidth,
          i = e.targetHeight,
          u = e.targetTop,
          a = e.targetLeft,
          c = e.padding,
          l = e.rounded,
          s = e.roundedStep,
          d = e.disableInteraction,
          f = e.disableInteractionClassName,
          p = e.className,
          h = e.onClick,
          m = e.highlightedBorder,
          v = dt(o + 2 * c),
          b = dt(i + 2 * c),
          g = dt(u - c),
          y = dt(a - c),
          w = s ? Math.min(v / 2, b / 2) : l;
        return r.createElement(
          xt,
          { onClick: h, maskClassName: p },
          r.createElement(
            "svg",
            {
              width: t,
              height: n,
              xmlns: "http://www.w3.org/2000/svg",
              className: p,
            },
            r.createElement(
              "defs",
              null,
              r.createElement(
                "mask",
                { id: "mask-main" },
                r.createElement("rect", {
                  x: 0,
                  y: 0,
                  width: t,
                  height: n,
                  fill: "white",
                }),
                r.createElement("rect", {
                  x: y,
                  y: g,
                  width: v,
                  height: b,
                  fill: "black",
                }),
                r.createElement("rect", {
                  x: y - 1,
                  y: g - 1,
                  width: w,
                  height: w,
                  fill: "white",
                }),
                r.createElement("circle", {
                  cx: y + w,
                  cy: g + w,
                  r: w,
                  fill: "black",
                }),
                r.createElement("rect", {
                  x: y + v - w + 1,
                  y: g - 1,
                  width: w,
                  height: w,
                  fill: "white",
                }),
                r.createElement("circle", {
                  cx: y + v - w,
                  cy: g + w,
                  r: w,
                  fill: "black",
                }),
                r.createElement("rect", {
                  x: y - 1,
                  y: g + b - w + 1,
                  width: w,
                  height: w,
                  fill: "white",
                }),
                r.createElement("circle", {
                  cx: y + w,
                  cy: g + b - w,
                  r: w,
                  fill: "black",
                }),
                r.createElement("rect", {
                  x: y + v - w + 1,
                  y: g + b - w + 1,
                  width: w,
                  height: w,
                  fill: "white",
                }),
                r.createElement("circle", {
                  cx: y + v - w,
                  cy: g + b - w,
                  r: w,
                  fill: "black ",
                }),
              ),
              r.createElement(
                "clipPath",
                { id: "clip-path" },
                r.createElement("rect", { x: 0, y: 0, width: t, height: g }),
                r.createElement("rect", { x: 0, y: g, width: y, height: b }),
                r.createElement("rect", {
                  x: a + o + c,
                  y: g,
                  width: dt(t - o - y),
                  height: b,
                }),
                r.createElement("rect", {
                  x: 0,
                  y: u + i + c,
                  width: t,
                  height: dt(n - i - g),
                }),
              ),
            ),
            r.createElement("rect", {
              x: 0,
              y: 0,
              width: t,
              height: n,
              fill: "currentColor",
              mask: "url(#mask-main)",
            }),
            r.createElement("rect", {
              x: 0,
              y: 0,
              width: t,
              height: n,
              fill: "currentColor",
              clipPath: "url(#clip-path)",
              pointerEvents: "auto",
            }),
            r.createElement("rect", {
              x: y,
              y: g,
              width: v,
              height: b,
              pointerEvents: "auto",
              fill: "transparent",
              display: d ? "block" : "none",
              className: f,
            }),
            m &&
              r.createElement("rect", {
                x: dt(y + m.width / 2),
                y: dt(g + m.width / 2),
                width: dt(v - m.width),
                height: dt(b - m.width),
                pointerEvents: "auto",
                fill: "none",
                strokeWidth: m.width,
                stroke: m.color,
                rx: w - 2,
              }),
          ),
        );
      }
      Ot.propTypes = {
        windowWidth: Le().number.isRequired,
        windowHeight: Le().number.isRequired,
        targetWidth: Le().number.isRequired,
        targetHeight: Le().number.isRequired,
        targetTop: Le().number.isRequired,
        targetLeft: Le().number.isRequired,
        padding: Le().number.isRequired,
        rounded: Le().number.isRequired,
        roundedStep: Le().bool,
        disableInteraction: Le().bool.isRequired,
        disableInteractionClassName: Le().string.isRequired,
        highlightedBorder: Le().shape({
          color: Le().string.isRequired,
          width: Le().number.isRequired,
        }),
      };
      var St = function (e) {
          var t = e.step,
            n = e.refresh,
            o = Ze((0, r.useState)(0), 2),
            i = o[0],
            u = o[1];
          return (
            (0, r.useEffect)(
              function () {
                if (t.resizeObservables) {
                  var e = function (e) {
                      var n,
                        r = Ge(e);
                      try {
                        var o = function () {
                          var e = n.value;
                          if (!e.attributes) return "continue";
                          var r = t.resizeObservables.find(function (t) {
                            return e.matches(t) || null != e.querySelector(t);
                          });
                          r && u(i + 1);
                        };
                        for (r.s(); !(n = r.n()).done;) o();
                      } catch (a) {
                        r.e(a);
                      } finally {
                        r.f();
                      }
                    },
                    n = new MutationObserver(function (t) {
                      var n,
                        r = Ge(t);
                      try {
                        for (r.s(); !(n = r.n()).done;) {
                          var o = n.value;
                          (0 !== o.addedNodes.length && e(o.addedNodes),
                            0 !== o.removedNodes.length && e(o.removedNodes));
                        }
                      } catch (i) {
                        r.e(i);
                      } finally {
                        r.f();
                      }
                    }),
                    r = document.documentElement || document.body;
                  return (
                    n.observe(r, { childList: !0, subtree: !0 }),
                    function () {
                      n.disconnect();
                    }
                  );
                }
              },
              [t, i],
            ),
            (0, r.useEffect)(
              function () {
                if (t.resizeObservables) {
                  var e,
                    r = new ResizeObserver(function (e) {
                      n();
                    }),
                    o = Ge(t.resizeObservables);
                  try {
                    for (o.s(); !(e = o.n()).done;) {
                      var i = e.value,
                        u = document.querySelector(i);
                      u && r.observe(u);
                    }
                  } catch (a) {
                    o.e(a);
                  } finally {
                    o.f();
                  }
                  return function () {
                    r.disconnect();
                  };
                }
              },
              [t, i],
            ),
            null
          );
        },
        kt = function (e) {
          var t = e.step,
            n = e.refresh;
          return (
            (0, r.useEffect)(
              function () {
                if (t.mutationObservables) {
                  var e = function (e) {
                      var r,
                        o = Ge(e);
                      try {
                        var i = function () {
                          var e = r.value;
                          if (!e.attributes) return "continue";
                          var o = t.mutationObservables.find(function (t) {
                            return e.matches(t) || null != e.querySelector(t);
                          });
                          o && n();
                        };
                        for (o.s(); !(r = o.n()).done;) i();
                      } catch (u) {
                        o.e(u);
                      } finally {
                        o.f();
                      }
                    },
                    r = new MutationObserver(function (t) {
                      var n,
                        r = Ge(t);
                      try {
                        for (r.s(); !(n = r.n()).done;) {
                          var o = n.value;
                          (0 !== o.addedNodes.length && e(o.addedNodes),
                            0 !== o.removedNodes.length && e(o.removedNodes));
                        }
                      } catch (i) {
                        r.e(i);
                      } finally {
                        r.f();
                      }
                    }),
                    o = document.documentElement || document.body;
                  return (
                    r.observe(o, { childList: !0, subtree: !0 }),
                    function () {
                      r.disconnect();
                    }
                  );
                }
              },
              [t],
            ),
            null
          );
        };
      function Nt(e) {
        var t = e.children,
          n = (0, r.useRef)(null);
        return (
          null === n.current &&
            ((n.current = document.createElement("div")),
            n.current.setAttribute("id", "___reactour")),
          (0, r.useEffect)(
            function () {
              return (
                document.body.appendChild(n.current),
                function () {
                  document.body.removeChild(n.current);
                }
              );
            },
            [n],
          ),
          (0, je.createPortal)(t, n.current)
        );
      }
      var Ct = {
          disableFocusLock: Le().bool,
          badgeContent: Le().func,
          highlightedMaskClassName: Le().string,
          children: Le().oneOfType([Le().node, Le().element]),
          className: Le().string,
          closeButtonAriaLabel: Le().string,
          closeWithMask: Le().bool,
          inViewThreshold: Le().number,
          isOpen: Le().bool.isRequired,
          lastStepNextButton: Le().node,
          maskClassName: Le().string,
          maskSpace: Le().number,
          nextButton: Le().node,
          onAfterOpen: Le().func,
          onBeforeClose: Le().func,
          onRequestClose: Le().func,
          prevButton: Le().node,
          scrollDuration: Le().number,
          scrollOffset: Le().number,
          showButtons: Le().bool,
          showCloseButton: Le().bool,
          showNavigation: Le().bool,
          showNavigationNumber: Le().bool,
          showNumber: Le().bool,
          startAt: Le().number,
          goToStep: Le().number,
          getCurrentStep: Le().func,
          nextStep: Le().func,
          prevStep: Le().func,
          steps: Le().arrayOf(
            Le().shape({
              selector: Le().string,
              content: Le().oneOfType([Le().node, Le().element, Le().func])
                .isRequired,
              position: Le().oneOfType([
                Le().arrayOf(Le().number),
                Le().oneOf(["top", "right", "bottom", "left", "center"]),
              ]),
              action: Le().func,
              style: Le().object,
              stepInteraction: Le().bool,
              navDotAriaLabel: Le().string,
              roundedStep: Le().bool,
            }),
          ),
          update: Le().string,
          updateDelay: Le().number,
          disableInteraction: Le().bool,
          disableDotsNavigation: Le().bool,
          disableKeyboardNavigation: Le().oneOfType([
            Le().arrayOf(Le().oneOf(["esc", "right", "left"])),
            Le().bool,
          ]),
          rounded: Le().number,
          accentColor: Le().string,
          highlightedBorder: Le().shape({
            color: Le().string.isRequired,
            width: Le().number.isRequired,
          }),
        },
        Tt = {
          base: "reactour__mask",
          isOpen: "reactour__mask--is-open",
          disableInteraction: "reactour__mask--disable-interaction",
        },
        Pt = { base: "reactour__helper", isOpen: "reactour__helper--is-open" },
        _t = { base: "reactour__dot", active: "reactour__dot--is-active" },
        It = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && Fe(e, t));
          })(c, e);
          var t,
            n,
            o,
            u = He(c);
          function c() {
            var e;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              qe(We((e = u.call(this))), "unlockFocus", function (t) {
                e.setState({ focusUnlocked: !0 }, t());
              }),
              qe(We(e), "showStep", function () {
                if (e.helper && e.helper.current) {
                  var t = e.props.steps,
                    n = e.state,
                    r = n.current;
                  n.focusUnlocked && e.setState({ focusUnlocked: !1 });
                  var o = t[r],
                    i = o.selector ? document.querySelector(o.selector) : null,
                    u = function (t) {
                      o.action &&
                        "function" === typeof o.action &&
                        e.unlockFocus(function () {
                          return o.action(t);
                        });
                    };
                  if (o.observe) {
                    var a = document.querySelector(o.observe),
                      c = { attributes: !0, childList: !0, characterData: !0 };
                    e.setState(
                      function (t) {
                        return (
                          t.observer &&
                            setTimeout(function () {
                              t.observer.disconnect();
                            }, 0),
                          {
                            observer: new MutationObserver(function (t) {
                              t.forEach(function (t) {
                                if (
                                  "childList" === t.type &&
                                  t.addedNodes.length > 0
                                ) {
                                  var n = function () {
                                    return u(t.addedNodes[0]);
                                  };
                                  setTimeout(function () {
                                    return e.calculateNode(
                                      t.addedNodes[0],
                                      o,
                                      n,
                                    );
                                  }, 100);
                                } else if (
                                  "childList" === t.type &&
                                  t.removedNodes.length > 0
                                ) {
                                  e.calculateNode(i, o, function () {
                                    return u(i);
                                  });
                                }
                              });
                            }),
                          }
                        );
                      },
                      function () {
                        return e.state.observer.observe(a, c);
                      },
                    );
                  } else
                    e.state.observer &&
                      (e.state.observer.disconnect(),
                      e.setState({ observer: null }));
                  if (i) {
                    e.calculateNode(i, o, function () {
                      return u(i);
                    });
                  } else
                    (e.setState(Mt(null, o, e.helper.current), u),
                      o.selector &&
                        console.warn(
                          "Doesn't find a DOM node '"
                            .concat(
                              o.selector,
                              "'. Please check the 'steps' Tour prop Array at position ",
                            )
                            .concat(r, "."),
                        ));
                }
              }),
              qe(We(e), "calculateNode", function (t, n, r) {
                var o = e.props,
                  i = o.scrollDuration,
                  u = o.inViewThreshold,
                  c = o.scrollOffset,
                  s = ut(t, n),
                  d = Math.max(
                    document.documentElement.clientWidth,
                    window.innerWidth || 0,
                  ),
                  f = Math.max(
                    document.documentElement.clientHeight,
                    window.innerHeight || 0,
                  );
                if (
                  (function (e) {
                    var t = e.top,
                      n = e.right,
                      r = e.bottom,
                      o = e.left,
                      i = e.w,
                      u = e.h,
                      a = e.threshold,
                      c = void 0 === a ? 0 : a;
                    return t >= 0 + c && o >= 0 + c && r <= u - c && n <= i - c;
                  })(Re(Re({}, s), {}, { w: d, h: f, threshold: u }))
                )
                  e.setState(Mt(t, n, e.helper.current), r);
                else {
                  var p = l()(t),
                    h = c || (s.height > f ? -25 : -f / 2 + s.height / 2);
                  a().to(t, {
                    context: at(p) ? window : p,
                    duration: i,
                    offset: h,
                    callback: function (t) {
                      e.setState(Mt(t, n, e.helper.current), r);
                    },
                  });
                }
              }),
              qe(We(e), "recalculateNode", function (t) {
                var n = document.querySelector(t.selector);
                e.calculateNode(n, t, function () {
                  return (
                    (r = n),
                    void (
                      t.action &&
                      "function" === typeof t.action &&
                      e.unlockFocus(function () {
                        return t.action(r);
                      })
                    )
                  );
                  var r;
                });
              }),
              qe(We(e), "maskClickHandler", function (t) {
                var n = e.props,
                  r = n.closeWithMask,
                  o = n.onRequestClose;
                r &&
                  !t.target.classList.contains(Tt.disableInteraction) &&
                  o(t);
              }),
              qe(We(e), "nextStep", function () {
                var t = e.props,
                  n = t.steps,
                  r = t.getCurrentStep;
                e.setState(function (e) {
                  var t = e.current < n.length - 1 ? e.current + 1 : e.current;
                  return ("function" === typeof r && r(t), { current: t });
                }, e.showStep);
              }),
              qe(We(e), "prevStep", function () {
                var t = e.props.getCurrentStep;
                e.setState(function (e) {
                  var n = e.current > 0 ? e.current - 1 : e.current;
                  return ("function" === typeof t && t(n), { current: n });
                }, e.showStep);
              }),
              qe(We(e), "gotoStep", function (t) {
                var n = e.props,
                  r = n.steps,
                  o = n.getCurrentStep;
                e.setState(function (e) {
                  var n = r[t] ? t : e.current;
                  return ("function" === typeof o && o(n), { current: n });
                }, e.showStep);
              }),
              qe(We(e), "keyDownHandler", function (t) {
                var n,
                  r,
                  o,
                  i = e.props,
                  u = i.onRequestClose,
                  a = i.nextStep,
                  c = i.prevStep,
                  l = i.disableKeyboardNavigation;
                (t.stopPropagation(), !0 !== l) &&
                  (l &&
                    ((n = l.includes("esc")),
                    (r = l.includes("right")),
                    (o = l.includes("left"))),
                  27 !== t.keyCode || n || (t.preventDefault(), u()),
                  39 !== t.keyCode ||
                    r ||
                    (t.preventDefault(),
                    "function" === typeof a ? a() : e.nextStep()),
                  37 !== t.keyCode ||
                    o ||
                    (t.preventDefault(),
                    "function" === typeof c ? c() : e.prevStep()));
              }),
              (e.state = {
                isOpen: !1,
                current: 0,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 0,
                height: 0,
                w: 0,
                h: 0,
                inDOM: !1,
                observer: null,
                focusUnlocked: !1,
              }),
              (e.helper = (0, r.createRef)()),
              (e.helperElement = null),
              (e.debouncedShowStep = d()(e.showStep, 70)),
              e
            );
          }
          return (
            (t = c),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this.props,
                    t = e.isOpen,
                    n = e.startAt;
                  t && this.open(n);
                },
              },
              {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                  var t = this.props,
                    n = t.isOpen,
                    r = t.update,
                    o = t.updateDelay;
                  (!n && e.isOpen
                    ? this.open(e.startAt)
                    : n && !e.isOpen && this.close(),
                    n &&
                      r !== e.update &&
                      (e.steps[this.state.current]
                        ? setTimeout(this.showStep, o)
                        : this.props.onRequestClose()),
                    n &&
                      e.isOpen &&
                      this.state.current !== e.goToStep &&
                      this.gotoStep(e.goToStep));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  (this.props.isOpen && this.close(),
                    this.state.observer && this.state.observer.disconnect());
                },
              },
              {
                key: "open",
                value: function (e) {
                  var t = this,
                    n = this.props.onAfterOpen;
                  (this.setState(
                    function (t) {
                      return {
                        isOpen: !0,
                        current: void 0 !== e ? e : t.current,
                      };
                    },
                    function () {
                      (setTimeout(t.showStep, 1),
                        (t.helperElement = t.helper.current),
                        t.props.disableFocusLock || t.helper.current.focus(),
                        n && n(t.helperElement));
                    },
                  ),
                    window.addEventListener(
                      "resize",
                      this.debouncedShowStep,
                      !1,
                    ),
                    window.addEventListener(
                      "keydown",
                      this.keyDownHandler,
                      !1,
                    ));
                },
              },
              {
                key: "close",
                value: function () {
                  (this.setState(function (e) {
                    return (
                      e.observer && e.observer.disconnect(),
                      { isOpen: !1, observer: null }
                    );
                  }, this.onBeforeClose),
                    window.removeEventListener(
                      "resize",
                      this.debouncedShowStep,
                    ),
                    window.removeEventListener("keydown", this.keyDownHandler));
                },
              },
              {
                key: "onBeforeClose",
                value: function () {
                  var e = this.props.onBeforeClose;
                  e && e(this.helperElement);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.className,
                    o = t.steps,
                    u = t.maskClassName,
                    a = t.showButtons,
                    c = t.showCloseButton,
                    l = t.closeButtonAriaLabel,
                    s = t.showNavigation,
                    d = t.showNavigationNumber,
                    f = t.showNumber,
                    p = t.onRequestClose,
                    h = t.maskSpace,
                    m = t.lastStepNextButton,
                    v = t.nextButton,
                    b = t.prevButton,
                    g = t.badgeContent,
                    y = t.highlightedMaskClassName,
                    w = t.disableInteraction,
                    E = t.disableDotsNavigation,
                    x = t.nextStep,
                    O = t.prevStep,
                    S = t.rounded,
                    k = t.accentColor,
                    N = t.CustomHelper,
                    C = t.disableFocusLock,
                    T = t.highlightedBorder,
                    P = this.state,
                    _ = P.isOpen,
                    I = P.current,
                    M = P.inDOM,
                    L = P.top,
                    j = P.right,
                    A = P.bottom,
                    R = P.left,
                    B = P.width,
                    q = P.height,
                    D = P.w,
                    F = P.h,
                    W = P.helperWidth,
                    H = P.helperHeight,
                    U = P.helperPosition;
                  return _
                    ? r.createElement(
                        Nt,
                        null,
                        r.createElement(Ye, null),
                        r.createElement(St, {
                          step: o[I],
                          refresh: function () {
                            return e.recalculateNode(o[I]);
                          },
                        }),
                        r.createElement(kt, {
                          step: o[I],
                          refresh: function () {
                            return e.recalculateNode(o[I]);
                          },
                        }),
                        r.createElement(Ot, {
                          onClick: this.maskClickHandler,
                          forwardRef: function (t) {
                            return (e.mask = t);
                          },
                          windowWidth: D,
                          windowHeight: F,
                          targetWidth: B,
                          targetHeight: q,
                          targetTop: L,
                          targetLeft: R,
                          padding: h,
                          rounded: S,
                          roundedStep: o[I].roundedStep,
                          className: u,
                          disableInteraction:
                            !1 === o[I].stepInteraction || w
                              ? !o[I].stepInteraction
                              : w,
                          disableInteractionClassName: ""
                            .concat(Tt.disableInteraction, " ")
                            .concat(y),
                          highlightedBorder: T,
                        }),
                        r.createElement(
                          _e,
                          { disabled: C, autoFocus: !1 },
                          r.createElement(
                            bt,
                            {
                              ref: this.helper,
                              targetHeight: q,
                              targetWidth: B,
                              targetTop: L,
                              targetRight: j,
                              targetBottom: A,
                              targetLeft: R,
                              windowWidth: D,
                              windowHeight: F,
                              helperWidth: W,
                              helperHeight: H,
                              helperPosition: U,
                              padding: h,
                              tabIndex: -1,
                              current: I,
                              style: o[I].style ? o[I].style : {},
                              rounded: S,
                              className: i()(Pt.base, n, qe({}, Pt.isOpen, _)),
                              accentColor: k,
                              defaultStyles: !N,
                              role: "dialog",
                            },
                            N
                              ? r.createElement(
                                  N,
                                  {
                                    current: I,
                                    totalSteps: o.length,
                                    gotoStep: this.gotoStep,
                                    close: p,
                                    content:
                                      o[I] &&
                                      ("function" === typeof o[I].content
                                        ? o[I].content({
                                            close: p,
                                            goTo: this.gotoStep,
                                            inDOM: M,
                                            step: I + 1,
                                          })
                                        : o[I].content),
                                  },
                                  this.props.children,
                                )
                              : r.createElement(
                                  r.Fragment,
                                  null,
                                  this.props.children,
                                  o[I] &&
                                    ("function" === typeof o[I].content
                                      ? o[I].content({
                                          close: p,
                                          goTo: this.gotoStep,
                                          inDOM: M,
                                          step: I + 1,
                                        })
                                      : o[I].content),
                                  f &&
                                    r.createElement(
                                      gt,
                                      {
                                        "data-tour-elem": "badge",
                                        accentColor: k,
                                      },
                                      "function" === typeof g
                                        ? g(I + 1, o.length)
                                        : I + 1,
                                    ),
                                  (a || s) &&
                                    r.createElement(
                                      yt,
                                      { "data-tour-elem": "controls" },
                                      a &&
                                        r.createElement(nt, {
                                          onClick:
                                            "function" === typeof O
                                              ? O
                                              : this.prevStep,
                                          disabled: 0 === I,
                                          label: b || null,
                                        }),
                                      s &&
                                        r.createElement(
                                          wt,
                                          { "data-tour-elem": "navigation" },
                                          o.map(function (t, n) {
                                            return r.createElement(Et, {
                                              key: ""
                                                .concat(
                                                  t.selector
                                                    ? t.selector
                                                    : "undef",
                                                  "_",
                                                )
                                                .concat(n),
                                              onClick: function () {
                                                return e.gotoStep(n);
                                              },
                                              current: I,
                                              index: n,
                                              accentColor: k,
                                              disabled: I === n || E,
                                              showNumber: d,
                                              "data-tour-elem": "dot",
                                              className: i()(
                                                _t.base,
                                                qe({}, _t.active, I === n),
                                              ),
                                              "aria-label": t.navDotAriaLabel,
                                            });
                                          }),
                                        ),
                                      a &&
                                        r.createElement(nt, {
                                          onClick:
                                            I === o.length - 1
                                              ? m
                                                ? p
                                                : function () {}
                                              : "function" === typeof x
                                                ? x
                                                : this.nextStep,
                                          disabled: !m && I === o.length - 1,
                                          inverted: !0,
                                          label:
                                            m && I === o.length - 1
                                              ? m
                                              : v || null,
                                        }),
                                    ),
                                  c &&
                                    r.createElement(ot, {
                                      onClick: p,
                                      className: "reactour__close",
                                      ariaLabel: l,
                                    }),
                                ),
                          ),
                        ),
                      )
                    : null;
                },
              },
            ]) && Be(t.prototype, n),
            o && Be(t, o),
            c
          );
        })(r.Component),
        Mt = function (e, t, n) {
          if (n) {
            var r = Math.max(
                document.documentElement.clientWidth,
                window.innerWidth || 0,
              ),
              o = Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0,
              ),
              i = it(n),
              u = i.width,
              a = i.height,
              c = {
                top: o + 10,
                right: r / 2 + 9,
                bottom: o / 2 + 9,
                left: r / 2 - u / 2,
                width: 0,
                height: 0,
                w: r,
                h: o,
                helperPosition: "center",
              };
            return (
              e && (c = ut(e, t)),
              function () {
                return Re(
                  Re(
                    {
                      w: r,
                      h: o,
                      helperWidth: u,
                      helperHeight: a,
                      helperPosition: t.position,
                    },
                    c,
                  ),
                  {},
                  { inDOM: !!e },
                );
              }
            );
          }
        };
      ((It.propTypes = Ct),
        (It.defaultProps = {
          disableFocusLock: !1,
          showNavigation: !0,
          showNavigationNumber: !0,
          showButtons: !0,
          showCloseButton: !0,
          closeButtonAriaLabel: "Close",
          showNumber: !0,
          scrollDuration: 1,
          maskSpace: 10,
          updateDelay: 1,
          disableInteraction: !1,
          rounded: 0,
          accentColor: "#007aff",
          closeWithMask: !0,
        }));
      var Lt = It;
    },
    69486: function (e, t) {
      var n;
      !(function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function o() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var i = typeof n;
              if ("string" === i || "number" === i) e.push(n);
              else if (Array.isArray(n)) {
                if (n.length) {
                  var u = o.apply(null, n);
                  u && e.push(u);
                }
              } else if ("object" === i)
                if (n.toString === Object.prototype.toString)
                  for (var a in n) r.call(n, a) && n[a] && e.push(a);
                else e.push(n.toString());
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 ===
              (n = function () {
                return o;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
    86267: function () {
      var e = "focus-outline-hidden";
      function t() {
        var e = this;
        (document.addEventListener(
          "keydown",
          function (t) {
            e.focusByKeyboard = !0;
          },
          !0,
        ),
          document.addEventListener(
            "mousedown",
            function (t) {
              e.focusByKeyboard = !1;
            },
            !0,
          ),
          document.addEventListener(
            "focus",
            function (t) {
              e.updateVisibility();
            },
            !0,
          ),
          document.addEventListener("focusout", function (t) {
            window.setTimeout(function () {
              document.hasFocus() ||
                ((e.focusByKeyboard = !0), e.updateVisibility());
            }, 0);
          }),
          this.updateVisibility());
      }
      ((t.prototype = {
        focusByKeyboard: !0,
        updateVisibility: function () {
          this.hidden = !this.focusByKeyboard;
        },
        set hidden(t) {
          document.documentElement.classList.toggle(e, t);
        },
        get hidden() {
          return document.documentElement.classList.contains(e);
        },
      }),
        new t());
    },
    29903: function (e, t, n) {
      var r = NaN,
        o = "[object Symbol]",
        i = /^\s+|\s+$/g,
        u = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        l = parseInt,
        s = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
        d = "object" == typeof self && self && self.Object === Object && self,
        f = s || d || Function("return this")(),
        p = Object.prototype.toString,
        h = Math.max,
        m = Math.min,
        v = function () {
          return f.Date.now();
        };
      function b(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function g(e) {
        if ("number" == typeof e) return e;
        if (
          (function (e) {
            return (
              "symbol" == typeof e ||
              ((function (e) {
                return !!e && "object" == typeof e;
              })(e) &&
                p.call(e) == o)
            );
          })(e)
        )
          return r;
        if (b(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = b(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(i, "");
        var n = a.test(e);
        return n || c.test(e) ? l(e.slice(2), n ? 2 : 8) : u.test(e) ? r : +e;
      }
      e.exports = function (e, t, n) {
        var r,
          o,
          i,
          u,
          a,
          c,
          l = 0,
          s = !1,
          d = !1,
          f = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        function p(t) {
          var n = r,
            i = o;
          return ((r = o = void 0), (l = t), (u = e.apply(i, n)));
        }
        function y(e) {
          var n = e - c;
          return void 0 === c || n >= t || n < 0 || (d && e - l >= i);
        }
        function w() {
          var e = v();
          if (y(e)) return E(e);
          a = setTimeout(
            w,
            (function (e) {
              var n = t - (e - c);
              return d ? m(n, i - (e - l)) : n;
            })(e),
          );
        }
        function E(e) {
          return ((a = void 0), f && r ? p(e) : ((r = o = void 0), u));
        }
        function x() {
          var e = v(),
            n = y(e);
          if (((r = arguments), (o = this), (c = e), n)) {
            if (void 0 === a)
              return (function (e) {
                return ((l = e), (a = setTimeout(w, t)), s ? p(e) : u);
              })(c);
            if (d) return ((a = setTimeout(w, t)), p(c));
          }
          return (void 0 === a && (a = setTimeout(w, t)), u);
        }
        return (
          (t = g(t) || 0),
          b(n) &&
            ((s = !!n.leading),
            (i = (d = "maxWait" in n) ? h(g(n.maxWait) || 0, t) : i),
            (f = "trailing" in n ? !!n.trailing : f)),
          (x.cancel = function () {
            (void 0 !== a && clearTimeout(a),
              (l = 0),
              (r = c = o = a = void 0));
          }),
          (x.flush = function () {
            return void 0 === a ? u : E(v());
          }),
          x
        );
      };
    },
    35936: function (e, t, n) {
      "use strict";
      var r = n(41791);
      function o() {}
      function i() {}
      ((i.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, n, o, i, u) {
            if (u !== r) {
              var a = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
              );
              throw ((a.name = "Invariant Violation"), a);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: o,
          };
          return ((n.PropTypes = n), n);
        }));
    },
    37878: function (e, t, n) {
      e.exports = n(35936)();
    },
    41791: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    44143: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = n(5258),
        u = (r = i) && r.__esModule ? r : { default: r };
      ((t.default = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.query,
          n = void 0 === t ? '[href^="#"]:not([href="#"]' : t,
          r = e.match,
          i =
            void 0 === r
              ? function (e) {
                  return document.getElementById(e.hash.substring(1));
                }
              : r,
          a = e.hashChange,
          c = void 0 === a || a,
          l = e.scrollSmoothConfig,
          s = document.querySelectorAll(n),
          d = function (e) {
            e.preventDefault();
            var t = i(e.target);
            t &&
              (c && history.replaceState(null, null, "#" + t.id),
              (0, u.default)(t, o({}, l)));
          };
        Array.from(s).map(function (e) {
          e.addEventListener("click", d, !1);
        });
      }),
        (e.exports = t.default));
    },
    4451: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a(n(5258)),
        o = n(40194),
        i = a(n(44143)),
        u = a(n(46209));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      ((t.default = {
        to: r.default,
        calcEndPoint: o.calcEndPoint,
        anchorScroll: i.default,
        observe: u.default,
      }),
        (e.exports = t.default));
    },
    46209: function (e, t) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.activeClass,
            n = void 0 === t ? "active" : t,
            r = e.query,
            o =
              void 0 === r ? '[href^="#"]:not([href="#"]):not([href="#0"])' : r,
            i = e.threshold,
            u = void 0 === i ? [0.25, 0.5, 0.75] : i,
            a = e.detectType,
            c = void 0 === a ? "max" : a,
            l = { threshold: u },
            s = function (e) {
              return e.classList.remove(n);
            },
            d = function (e) {
              (document.querySelectorAll("." + n).forEach(s),
                document
                  .querySelector('a[href="#' + e.id + '"]')
                  .classList.add(n));
            },
            f = document.querySelectorAll(o),
            p = new IntersectionObserver(function (e) {
              e.forEach(function (e) {
                e.intersectionRatio >=
                  Math[c].apply(
                    Math,
                    (function (e) {
                      if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++)
                          n[t] = e[t];
                        return n;
                      }
                      return Array.from(e);
                    })(u),
                  ) && d(e.target);
              });
            }, l);
          f.forEach(function (e) {
            var t = document.querySelector("#" + e.hash.slice(1));
            p.observe(t);
          });
        }),
        (e.exports = t.default));
    },
    5258: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        o = n(40194);
      ((t.default = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.duration,
          i = void 0 === n ? 500 : n,
          u = t.context,
          a = void 0 === u ? window : u,
          c = t.offset,
          l = void 0 === c ? 0 : c,
          s = t.ease,
          d = void 0 === s ? "easeInOutCubic" : s,
          f = t.callback;
        if (
          "object" === ("undefined" === typeof window ? "undefined" : r(window))
        ) {
          var p =
              null !== a.scrollTop && void 0 !== a.scrollTop
                ? a.scrollTop
                : window.pageYOffset,
            h = (0, o.calcEndPoint)(e, a, l),
            m = performance.now(),
            v = window.requestAnimationFrame;
          !(function t() {
            var n = performance.now() - m,
              r = (0, o.setPosition)(p, h, n, i, d);
            (a !== window ? (a.scrollTop = r) : window.scroll(0, r),
              n > i ? "function" === typeof f && f(e) : v(t));
          })();
        }
      }),
        (e.exports = t.default));
    },
    40194: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (t.easeFunctions = {
          linear: function (e) {
            return e;
          },
          easeInQuad: function (e) {
            return e * e;
          },
          easeOutQuad: function (e) {
            return e * (2 - e);
          },
          easeInOutQuad: function (e) {
            return e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1;
          },
          easeInCubic: function (e) {
            return e * e * e;
          },
          easeOutCubic: function (e) {
            return --e * e * e + 1;
          },
          easeInOutCubic: function (e) {
            return e < 0.5
              ? 4 * e * e * e
              : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
          },
          easeInQuart: function (e) {
            return e * e * e * e;
          },
          easeOutQuart: function (e) {
            return 1 - --e * e * e * e;
          },
          easeInOutQuart: function (e) {
            return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
          },
          easeInQuint: function (e) {
            return e * e * e * e * e;
          },
          easeOutQuint: function (e) {
            return 1 + --e * e * e * e * e;
          },
          easeInOutQuint: function (e) {
            return e < 0.5
              ? 16 * e * e * e * e * e
              : 1 + 16 * --e * e * e * e * e;
          },
        }),
        r = (t.isNumeric = function (e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        });
      ((t.setPosition = function (e, t, r, o) {
        return r > o
          ? t
          : e +
              (t - e) *
                n[
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : "easeInOutCubic"
                ](r / o);
      }),
        (t.calcEndPoint = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : window,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
          if (r(e)) return parseInt(e) + n;
          var o =
            t === window || t === document.documentElement
              ? window.pageYOffset
              : t.scrollTop - t.getBoundingClientRect().top;
          return (
            ("html" === e.nodeName.toLowerCase()
              ? -o
              : e.getBoundingClientRect().top + o) + n
          );
        }));
    },
    77315: function (e, t) {
      var n, r, o;
      ((r = []),
        void 0 ===
          (o =
            "function" ===
            typeof (n = function () {
              var e = /(auto|scroll)/,
                t = function e(t, n) {
                  return null === t.parentNode
                    ? n
                    : e(t.parentNode, n.concat([t]));
                },
                n = function (e, t) {
                  return getComputedStyle(e, null).getPropertyValue(t);
                },
                r = function (e) {
                  return (
                    n(e, "overflow") + n(e, "overflow-y") + n(e, "overflow-x")
                  );
                },
                o = function (t) {
                  return e.test(r(t));
                };
              return function (e) {
                if (e instanceof HTMLElement || e instanceof SVGElement) {
                  for (var n = t(e.parentNode, []), r = 0; r < n.length; r += 1)
                    if (o(n[r])) return n[r];
                  return document.scrollingElement || document.documentElement;
                }
              };
            })
              ? n.apply(t, r)
              : n) || (e.exports = o));
    },
  },
]);
//# sourceMappingURL=9845.510e0e24.chunk.js.map
