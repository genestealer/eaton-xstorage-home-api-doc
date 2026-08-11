/*! For license information please see 2406.60bee450.chunk.js.LICENSE.txt */
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [2406],
  {
    36979: function (t, e, i) {
      "use strict";
      var n = i(45886),
        a = i.n(n),
        r = i(33809),
        o = {
          datetime: "MMM D, YYYY, h:mm:ss a",
          millisecond: "h:mm:ss.SSS a",
          second: "h:mm:ss a",
          minute: "h:mm a",
          hour: "hA",
          day: "MMM D",
          week: "ll",
          month: "MMM YYYY",
          quarter: "[Q]Q - YYYY",
          year: "YYYY",
        };
      r.IQ._date.override(
        "function" === typeof a()
          ? {
              _id: "moment",
              formats: function () {
                return o;
              },
              parse: function (t, e) {
                return (
                  "string" === typeof t && "string" === typeof e
                    ? (t = a()(t, e))
                    : t instanceof a() || (t = a()(t)),
                  t.isValid() ? t.valueOf() : null
                );
              },
              format: function (t, e) {
                return a()(t).format(e);
              },
              add: function (t, e, i) {
                return a()(t).add(e, i).valueOf();
              },
              diff: function (t, e, i) {
                return a()(t).diff(a()(e), i);
              },
              startOf: function (t, e, i) {
                return (
                  (t = a()(t)),
                  "isoWeek" === e
                    ? ((i = Math.trunc(Math.min(Math.max(0, i), 6))),
                      t.isoWeekday(i).startOf("day").valueOf())
                    : t.startOf(e).valueOf()
                );
              },
              endOf: function (t, e) {
                return a()(t).endOf(e).valueOf();
              },
            }
          : {},
      );
    },
    34692: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return At;
        },
      });
      var n = i(6892),
        a = i(31105),
        r = i(30225),
        o = i(94404),
        s = i(14482),
        l = i(5189),
        u = i(12985),
        h = i(33809),
        c = i(6948),
        f = ["click", "dblclick"],
        d = ["enter", "leave"],
        v = f.concat(d);
      function g(t, e, i) {
        if (t.listened)
          switch (e.type) {
            case "mousemove":
            case "mouseout":
              !(function (t, e) {
                if (!t.moveListened) return;
                var i;
                "mousemove" === e.type && (i = y(t.elements, e));
                var n = t.hovered;
                ((t.hovered = i),
                  (function (t, e, i) {
                    var n = e.previous,
                      a = e.element;
                    n &&
                      n !== a &&
                      p(n.options.leave || t.listeners.leave, n, i);
                    a &&
                      a !== n &&
                      p(a.options.enter || t.listeners.enter, a, i);
                  })(t, { previous: n, element: i }, e));
              })(t, e);
              break;
            case "click":
              !(function (t, e, i) {
                var n = t.listeners,
                  a = y(t.elements, e);
                if (a) {
                  var r = a.options,
                    o = r.dblclick || n.dblclick,
                    s = r.click || n.click;
                  a.clickTimeout
                    ? (clearTimeout(a.clickTimeout),
                      delete a.clickTimeout,
                      p(o, a, e))
                    : o
                      ? (a.clickTimeout = setTimeout(function () {
                          (delete a.clickTimeout, p(s, a, e));
                        }, i.dblClickSpeed))
                      : p(s, a, e);
                }
              })(t, e, i);
          }
      }
      function p(t, e, i) {
        (0, c.C)(t, [e.$context, i]);
      }
      function y(t, e) {
        var i = Number.POSITIVE_INFINITY;
        return t
          .filter(function (t) {
            return t.options.display && t.inRange(e.x, e.y);
          })
          .reduce(function (t, n) {
            var a = n.getCenterPoint(),
              r = (0, c.aG)(e, a);
            return (r < i ? ((t = [n]), (i = r)) : r === i && t.push(n), t);
          }, [])
          .sort(function (t, e) {
            return t._index - e._index;
          })
          .slice(0, 1)[0];
      }
      function b(t, e, i) {
        var n = (function (t, e) {
            var i,
              n = t.axis,
              a = t.id,
              r = n + "ScaleID",
              o = {
                min: (0, c.v)(t.min, Number.NEGATIVE_INFINITY),
                max: (0, c.v)(t.max, Number.POSITIVE_INFINITY),
              },
              s = (0, u.Z)(e);
            try {
              for (s.s(); !(i = s.n()).done;) {
                var l = i.value;
                l.scaleID === a
                  ? _(l, t, ["value", "endValue"], o)
                  : l[r] === a &&
                    _(l, t, [n + "Min", n + "Max", n + "Value"], o);
              }
            } catch (h) {
              s.e(h);
            } finally {
              s.f();
            }
            return o;
          })(e, i),
          a = m(e, n, "min", "suggestedMin");
        (a = m(e, n, "max", "suggestedMax") || a) &&
          "function" === typeof e.handleTickRangeOptions &&
          e.handleTickRangeOptions();
      }
      function m(t, e, i, n) {
        if (
          (0, c.g)(e[i]) &&
          !(function (t, e, i) {
            return (0, c.j)(t[e]) || (0, c.j)(t[i]);
          })(t.options, i, n)
        ) {
          var a = t[i] !== e[i];
          return ((t[i] = e[i]), a);
        }
      }
      function x(t, e) {
        for (
          var i = 0, n = ["scaleID", "xScaleID", "yScaleID"];
          i < n.length;
          i++
        ) {
          var a = n[i];
          t[a] &&
            !e[t[a]] &&
            k(t, a) &&
            console.warn(
              "No scale found with id '"
                .concat(t[a], "' for annotation '")
                .concat(t.id, "'"),
            );
        }
      }
      function k(t, e) {
        if ("scaleID" === e) return !0;
        for (
          var i = e.charAt(0), n = 0, a = ["Min", "Max", "Value"];
          n < a.length;
          n++
        ) {
          var r = a[n];
          if ((0, c.j)(t[i + r])) return !0;
        }
        return !1;
      }
      function _(t, e, i, n) {
        var a,
          r = (0, u.Z)(i);
        try {
          for (r.s(); !(a = r.n()).done;) {
            var o = t[a.value];
            if ((0, c.j)(o)) {
              var s = e.parse(o);
              ((n.min = Math.min(n.min, s)), (n.max = Math.max(n.max, s)));
            }
          }
        } catch (l) {
          r.e(l);
        } finally {
          r.f();
        }
      }
      var w = 0.001,
        M = function (t, e, i) {
          return Math.min(i, Math.max(e, t));
        };
      function S(t, e, i) {
        for (var n = 0, a = Object.keys(t); n < a.length; n++) {
          var r = a[n];
          t[r] = M(t[r], e, i);
        }
        return t;
      }
      function P(t, e, i, n) {
        var a = i.x,
          r = i.y,
          o = i.width,
          s = i.height,
          l = n / 2;
        return (
          t >= a - l - w &&
          t <= a + o + l + w &&
          e >= r - l - w &&
          e <= r + s + l + w
        );
      }
      function C(t, e) {
        var i = t.getProps(["x", "y"], e);
        return { x: i.x, y: i.y };
      }
      var O = function (t, e) {
        return e > t || (t.length > e.length && t.substr(0, e.length) === e);
      };
      var D = function (t) {
          return "string" === typeof t && t.endsWith("%");
        },
        A = function (t) {
          return M(parseFloat(t) / 100, 0, 1);
        };
      function T(t, e) {
        return "start" === e ? 0 : "end" === e ? t : D(e) ? A(e) * t : t / 2;
      }
      function E(t, e) {
        return "number" === typeof e ? e : D(e) ? A(e) * t : t;
      }
      function R(t) {
        return (0, c.i)(t)
          ? { x: (0, c.v)(t.x, "center"), y: (0, c.v)(t.y, "center") }
          : { x: (t = (0, c.v)(t, "center")), y: t };
      }
      function L(t) {
        return t && ((0, c.j)(t.xValue) || (0, c.j)(t.yValue));
      }
      var I = new Map();
      function F(t) {
        if (t && "object" === typeof t) {
          var e = t.toString();
          return (
            "[object HTMLImageElement]" === e ||
            "[object HTMLCanvasElement]" === e
          );
        }
      }
      function z(t, e, i) {
        if (i) {
          var n = e.getCenterPoint();
          (t.translate(n.x, n.y),
            t.rotate((0, c.t)(i)),
            t.translate(-n.x, -n.y));
        }
      }
      function V(t, e) {
        if (e && e.borderWidth)
          return (
            (t.lineCap = e.borderCapStyle),
            t.setLineDash(e.borderDash),
            (t.lineDashOffset = e.borderDashOffset),
            (t.lineJoin = e.borderJoinStyle),
            (t.lineWidth = e.borderWidth),
            (t.strokeStyle = e.borderColor),
            !0
          );
      }
      function j(t, e) {
        ((t.shadowColor = e.backgroundShadowColor),
          (t.shadowBlur = e.shadowBlur),
          (t.shadowOffsetX = e.shadowOffsetX),
          (t.shadowOffsetY = e.shadowOffsetY));
      }
      function W(t, e) {
        var i = e.content;
        if (F(i))
          return { width: E(i.width, e.width), height: E(i.height, e.height) };
        var n = (0, c.O)(e.font),
          a = e.textStrokeWidth,
          r = (0, c.b)(i) ? i : [i],
          o = r.join() + n.string + a + (t._measureText ? "-spriting" : "");
        if (!I.has(o)) {
          (t.save(), (t.font = n.string));
          for (var s = r.length, l = 0, u = 0; u < s; u++) {
            var h = r[u];
            l = Math.max(l, t.measureText(h).width + a);
          }
          t.restore();
          var f = s * n.lineHeight + a;
          I.set(o, { width: l, height: f });
        }
        return I.get(o);
      }
      function N(t, e, i) {
        var n = e.x,
          a = e.y,
          r = e.width,
          o = e.height;
        (t.save(), j(t, i));
        var s = V(t, i);
        ((t.fillStyle = i.backgroundColor),
          t.beginPath(),
          (0, c.av)(t, {
            x: n,
            y: a,
            w: r,
            h: o,
            radius: S(
              (0, c.ax)((0, c.v)(i.cornerRadius, i.borderRadius)),
              0,
              Math.min(r, o) / 2,
            ),
          }),
          t.closePath(),
          t.fill(),
          s && ((t.shadowColor = i.borderShadowColor), t.stroke()),
          t.restore());
      }
      function B(t, e, i) {
        var n = i.content;
        if (F(n)) t.drawImage(n, e.x, e.y, e.width, e.height);
        else {
          var a = (0, c.b)(n) ? n : [n],
            r = (0, c.O)(i.font),
            o = r.lineHeight,
            s = (function (t, e) {
              var i = t.x,
                n = t.width,
                a = e.textAlign;
              return "center" === a
                ? i + n / 2
                : "end" === a || "right" === a
                  ? i + n
                  : i;
            })(e, i),
            l = e.y + o / 2 + i.textStrokeWidth / 2;
          (t.save(),
            (t.font = r.string),
            (t.textBaseline = "middle"),
            (t.textAlign = i.textAlign),
            (function (t, e) {
              if (e.textStrokeWidth > 0)
                return (
                  (t.lineJoin = "round"),
                  (t.miterLimit = 2),
                  (t.lineWidth = e.textStrokeWidth),
                  (t.strokeStyle = e.textStrokeColor),
                  !0
                );
            })(t, i) &&
              a.forEach(function (e, i) {
                return t.strokeText(e, s, l + i * o);
              }),
            (t.fillStyle = i.color),
            a.forEach(function (e, i) {
              return t.fillText(e, s, l + i * o);
            }),
            t.restore());
        }
      }
      function H(t) {
        var e = t.x,
          i = t.y;
        return { x: e + t.width / 2, y: i + t.height / 2 };
      }
      function Y(t, e, i) {
        var n = Math.cos(i),
          a = Math.sin(i),
          r = e.x,
          o = e.y;
        return {
          x: r + n * (t.x - r) - a * (t.y - o),
          y: o + a * (t.x - r) + n * (t.y - o),
        };
      }
      function Z(t, e, i) {
        return (
          (e = "number" === typeof e ? e : t.parse(e)),
          (0, c.g)(e) ? t.getPixelForValue(e) : i
        );
      }
      function X(t, e) {
        if (t) {
          var i = Z(t, e.min, e.start),
            n = Z(t, e.max, e.end);
          return { start: Math.min(i, n), end: Math.max(i, n) };
        }
        return { start: e.start, end: e.end };
      }
      function U(t, e) {
        var i = t.chartArea,
          n = t.scales,
          a = n[e.xScaleID],
          r = n[e.yScaleID],
          o = i.width / 2,
          s = i.height / 2;
        return (
          a && (o = Z(a, e.xValue, o)),
          r && (s = Z(r, e.yValue, s)),
          { x: o, y: s }
        );
      }
      function $(t, e) {
        var i = t.scales[e.xScaleID],
          n = t.scales[e.yScaleID],
          a = t.chartArea,
          r = a.top,
          o = a.left,
          s = a.bottom,
          l = a.right;
        if (!i && !n) return {};
        var u = X(i, { min: e.xMin, max: e.xMax, start: o, end: l });
        ((o = u.start), (l = u.end));
        var h = X(n, { min: e.yMin, max: e.yMax, start: r, end: s });
        return {
          x: o,
          y: (r = h.start),
          x2: l,
          y2: (s = h.end),
          width: l - o,
          height: s - r,
        };
      }
      function K(t, e) {
        if (!L(e)) {
          var i = $(t, e),
            n = H(i),
            a = e.radius;
          return (
            (a && !isNaN(a)) ||
              ((a = Math.min(i.width, i.height) / 2), (e.radius = a)),
            {
              x: n.x + e.xAdjust,
              y: n.y + e.yAdjust,
              width: 2 * a,
              height: 2 * a,
            }
          );
        }
        return (function (t, e) {
          var i = U(t, e);
          return {
            x: i.x + e.xAdjust,
            y: i.y + e.yAdjust,
            width: 2 * e.radius,
            height: 2 * e.radius,
          };
        })(t, e);
      }
      var Q = (function (t) {
        (0, s.default)(i, t);
        var e = (0, l.default)(i);
        function i() {
          return ((0, r.default)(this, i), e.apply(this, arguments));
        }
        return (
          (0, o.default)(i, [
            {
              key: "inRange",
              value: function (t, e, i) {
                var n = Y(
                  { x: t, y: e },
                  this.getCenterPoint(i),
                  (0, c.t)(-this.options.rotation),
                );
                return P(
                  n.x,
                  n.y,
                  this.getProps(["x", "y", "width", "height"], i),
                  this.options.borderWidth,
                );
              },
            },
            {
              key: "getCenterPoint",
              value: function (t) {
                return H(this.getProps(["x", "y", "width", "height"], t));
              },
            },
            {
              key: "draw",
              value: function (t) {
                (t.save(),
                  z(t, this, this.options.rotation),
                  N(t, this, this.options),
                  t.restore());
              },
            },
            {
              key: "drawLabel",
              value: function (t) {
                var e = this.x,
                  i = this.y,
                  n = this.width,
                  a = this.height,
                  r = this.options,
                  o = r.label,
                  s = r.borderWidth,
                  l = s / 2,
                  u = R(o.position),
                  h = (0, c.K)(o.padding),
                  f = W(t, o),
                  d = {
                    x: q(this, f, u, h),
                    y: G(this, f, u, h),
                    width: f.width,
                    height: f.height,
                  };
                (t.save(),
                  z(t, this, o.rotation),
                  t.beginPath(),
                  t.rect(
                    e + l + h.left,
                    i + l + h.top,
                    n - s - h.width,
                    a - s - h.height,
                  ),
                  t.clip(),
                  B(t, d, o),
                  t.restore());
              },
            },
            {
              key: "resolveElementProperties",
              value: function (t, e) {
                return $(t, e);
              },
            },
          ]),
          i
        );
      })(h.W_);
      function q(t, e, i, n) {
        var a = t.x,
          r = t.x2,
          o = t.width,
          s = t.options.label,
          l = s.xAdjust,
          u = s.borderWidth;
        return J(
          { start: a, end: r, size: o },
          {
            position: i.x,
            padding: { start: n.left, end: n.right },
            adjust: l,
            borderWidth: u,
            size: e.width,
          },
        );
      }
      function G(t, e, i, n) {
        var a = t.y,
          r = t.y2,
          o = t.height,
          s = t.options.label,
          l = s.yAdjust,
          u = s.borderWidth;
        return J(
          { start: a, end: r, size: o },
          {
            position: i.y,
            padding: { start: n.top, end: n.bottom },
            adjust: l,
            borderWidth: u,
            size: e.height,
          },
        );
      }
      function J(t, e) {
        var i = t.start,
          n = t.end,
          a = e.position,
          r = e.padding,
          o = r.start,
          s = r.end,
          l = e.adjust,
          u = e.borderWidth;
        return i + u / 2 + l + o + T(n - u - i - o - s - e.size, a);
      }
      ((Q.id = "boxAnnotation"),
        (Q.defaults = {
          adjustScaleRange: !0,
          backgroundShadowColor: "transparent",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderRadius: 0,
          borderShadowColor: "transparent",
          borderWidth: 1,
          cornerRadius: void 0,
          display: !0,
          label: {
            borderWidth: void 0,
            color: "black",
            content: null,
            drawTime: void 0,
            enabled: !1,
            font: {
              family: void 0,
              lineHeight: void 0,
              size: void 0,
              style: void 0,
              weight: "bold",
            },
            height: void 0,
            padding: 6,
            position: "center",
            rotation: void 0,
            textAlign: "start",
            textStrokeColor: void 0,
            textStrokeWidth: 0,
            xAdjust: 0,
            yAdjust: 0,
            width: void 0,
          },
          rotation: 0,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          xMax: void 0,
          xMin: void 0,
          xScaleID: "x",
          yMax: void 0,
          yMin: void 0,
          yScaleID: "y",
        }),
        (Q.defaultRoutes = { borderColor: "color", backgroundColor: "color" }),
        (Q.descriptors = { label: { _fallback: !0 } }));
      var tt = function (t, e, i) {
          return { x: t.x + i * (e.x - t.x), y: t.y + i * (e.y - t.y) };
        },
        et = function (t, e, i) {
          return tt(e, i, Math.abs((t - e.y) / (i.y - e.y))).x;
        },
        it = function (t, e, i) {
          return tt(e, i, Math.abs((t - e.x) / (i.x - e.x))).y;
        },
        nt = function (t) {
          return t * t;
        },
        at = 0.001;
      function rt(t, e) {
        var i = t.x,
          n = t.y,
          a = t.x2,
          r = t.y2,
          o = e.top,
          s = e.right,
          l = e.bottom,
          u = e.left;
        return !(
          (i < u && a < u) ||
          (i > s && a > s) ||
          (n < o && r < o) ||
          (n > l && r > l)
        );
      }
      function ot(t, e, i) {
        var n = t.x,
          a = t.y,
          r = i.top,
          o = i.right,
          s = i.bottom,
          l = i.left;
        return (
          n < l && ((a = it(l, { x: n, y: a }, e)), (n = l)),
          n > o && ((a = it(o, { x: n, y: a }, e)), (n = o)),
          a < r && ((n = et(r, { x: n, y: a }, e)), (a = r)),
          a > s && ((n = et(s, { x: n, y: a }, e)), (a = s)),
          { x: n, y: a }
        );
      }
      var st = (function (t) {
        (0, s.default)(i, t);
        var e = (0, l.default)(i);
        function i() {
          return ((0, r.default)(this, i), e.apply(this, arguments));
        }
        return (
          (0, o.default)(i, [
            {
              key: "intersects",
              value: function (t, e) {
                var i,
                  n,
                  a =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : at,
                  r = arguments.length > 3 ? arguments[3] : void 0,
                  o = this.getProps(["x", "y", "x2", "y2"], r),
                  s = o.x,
                  l = o.y,
                  u = o.x2,
                  h = o.y2,
                  c = u - s,
                  f = h - l,
                  d = nt(c) + nt(f),
                  v = 0 === d ? -1 : ((t - s) * c + (e - l) * f) / d;
                return (
                  v < 0
                    ? ((i = s), (n = l))
                    : v > 1
                      ? ((i = u), (n = h))
                      : ((i = s + v * c), (n = l + v * f)),
                  nt(t - i) + nt(e - n) <= a
                );
              },
            },
            {
              key: "labelIsVisible",
              value: function (t, e) {
                var i = this.options.label;
                return (
                  !(!i || !i.enabled) &&
                  (!e || rt(this.getProps(["x", "y", "x2", "y2"], t), e))
                );
              },
            },
            {
              key: "isOnLabel",
              value: function (t, e, i) {
                if (!this.labelIsVisible(i)) return !1;
                var n = this.getProps(
                    [
                      "labelX",
                      "labelY",
                      "labelWidth",
                      "labelHeight",
                      "labelRotation",
                    ],
                    i,
                  ),
                  a = n.labelX,
                  r = n.labelY,
                  o = n.labelWidth,
                  s = n.labelHeight,
                  l = Y({ x: t, y: e }, { x: a, y: r }, -n.labelRotation),
                  u = l.x,
                  h = l.y,
                  c = this.options.label.borderWidth / 2 || 0,
                  f = o / 2 + c,
                  d = s / 2 + c;
                return (
                  u >= a - f - at &&
                  u <= a + f + at &&
                  h >= r - d - at &&
                  h <= r + d + at
                );
              },
            },
            {
              key: "inRange",
              value: function (t, e, i) {
                var n = nt(this.options.borderWidth / 2);
                return this.intersects(t, e, n, i) || this.isOnLabel(t, e, i);
              },
            },
            {
              key: "getCenterPoint",
              value: function () {
                return { x: (this.x2 + this.x) / 2, y: (this.y2 + this.y) / 2 };
              },
            },
            {
              key: "draw",
              value: function (t) {
                var e = this.x,
                  i = this.y,
                  n = this.x2,
                  a = this.y2,
                  r = this.options;
                if ((t.save(), !V(t, r))) return t.restore();
                j(t, r);
                var o = Math.atan2(a - i, n - e),
                  s = Math.sqrt(Math.pow(n - e, 2) + Math.pow(a - i, 2)),
                  l = (function (t) {
                    var e = t.options,
                      i = e.arrowHeads && e.arrowHeads.start,
                      n = e.arrowHeads && e.arrowHeads.end;
                    return {
                      startOpts: i,
                      endOpts: n,
                      startAdjust: ct(t, i),
                      endAdjust: ct(t, n),
                    };
                  })(this),
                  u = l.startOpts,
                  h = l.endOpts,
                  c = l.startAdjust,
                  f = l.endAdjust;
                (t.translate(e, i),
                  t.rotate(o),
                  t.beginPath(),
                  t.moveTo(0 + c, 0),
                  t.lineTo(s - f, 0),
                  (t.shadowColor = r.borderShadowColor),
                  t.stroke(),
                  ft(t, 0, c, u),
                  ft(t, s, -f, h),
                  t.restore());
              },
            },
            {
              key: "drawLabel",
              value: function (t, e) {
                if (this.labelIsVisible(!1, e)) {
                  var i = this.labelX,
                    n = this.labelY,
                    a = this.labelWidth,
                    r = this.labelHeight,
                    o = this.labelRotation,
                    s = this.labelPadding,
                    l = this.labelTextSize,
                    u = this.options.label;
                  (t.save(),
                    t.translate(i, n),
                    t.rotate(o),
                    N(t, { x: -a / 2, y: -r / 2, width: a, height: r }, u),
                    B(
                      t,
                      {
                        x: -a / 2 + s.left + u.borderWidth / 2,
                        y: -r / 2 + s.top + u.borderWidth / 2,
                        width: l.width,
                        height: l.height,
                      },
                      u,
                    ),
                    t.restore());
                }
              },
            },
            {
              key: "resolveElementProperties",
              value: function (t, e) {
                var i,
                  n,
                  a = t.scales[e.scaleID],
                  r = t.chartArea,
                  o = r.top,
                  s = r.left,
                  l = r.bottom,
                  u = r.right;
                if (a)
                  ((i = Z(a, e.value, NaN)),
                    (n = Z(a, e.endValue, i)),
                    a.isHorizontal() ? ((s = i), (u = n)) : ((o = i), (l = n)));
                else {
                  var h = t.scales[e.xScaleID],
                    f = t.scales[e.yScaleID];
                  (h && ((s = Z(h, e.xMin, s)), (u = Z(h, e.xMax, u))),
                    f && ((o = Z(f, e.yMin, o)), (l = Z(f, e.yMax, l))));
                }
                var d = rt({ x: s, y: o, x2: u, y2: l }, t.chartArea)
                    ? (function (t, e, i) {
                        var n = ot(t, e, i),
                          a = n.x,
                          r = n.y,
                          o = ot(e, t, i),
                          s = o.x,
                          l = o.y;
                        return {
                          x: a,
                          y: r,
                          x2: s,
                          y2: l,
                          width: Math.abs(s - a),
                          height: Math.abs(l - r),
                        };
                      })({ x: s, y: o }, { x: u, y: l }, t.chartArea)
                    : {
                        x: s,
                        y: o,
                        x2: u,
                        y2: l,
                        width: Math.abs(u - s),
                        height: Math.abs(l - o),
                      },
                  v = e.label;
                return v && v.content
                  ? (function (t, e, i) {
                      var n = i.padding,
                        a = i.xPadding,
                        r = i.yPadding,
                        o = i.borderWidth,
                        s = (function (t, e, i) {
                          var n = t;
                          (e || i) && (n = { x: e || 6, y: i || 6 });
                          return (0, c.K)(n);
                        })(n, a, r),
                        l = W(e.ctx, i),
                        u = l.width + s.width + o,
                        h = l.height + s.height + o,
                        f = (function (t, e, i, n) {
                          var a = i.width,
                            r = i.height,
                            o = i.padding,
                            s = e.xAdjust,
                            l = e.yAdjust,
                            u = { x: t.x, y: t.y },
                            h = { x: t.x2, y: t.y2 },
                            f =
                              "auto" === e.rotation
                                ? (function (t) {
                                    var e = t.x,
                                      i = t.y,
                                      n = t.x2,
                                      a = t.y2,
                                      r = Math.atan2(a - i, n - e);
                                    return r > c.P / 2
                                      ? r - c.P
                                      : r < c.P / -2
                                        ? r + c.P
                                        : r;
                                  })(t)
                                : (0, c.t)(e.rotation),
                            d = (function (t, e, i) {
                              var n = Math.cos(i),
                                a = Math.sin(i);
                              return {
                                w: Math.abs(t * n) + Math.abs(e * a),
                                h: Math.abs(t * a) + Math.abs(e * n),
                              };
                            })(a, r, f),
                            v = (function (t, e, i, n) {
                              var a,
                                r = (function (t, e) {
                                  var i = t.x,
                                    n = t.x2,
                                    a = t.y,
                                    r = t.y2,
                                    o = Math.min(a, r) - e.top,
                                    s = Math.min(i, n) - e.left,
                                    l = e.bottom - Math.max(a, r),
                                    u = e.right - Math.max(i, n);
                                  return {
                                    x: Math.min(s, u),
                                    y: Math.min(o, l),
                                    dx: s <= u ? 1 : -1,
                                    dy: o <= l ? 1 : -1,
                                  };
                                })(t, n);
                              a =
                                "start" === e.position
                                  ? ut(
                                      { w: t.x2 - t.x, h: t.y2 - t.y },
                                      i,
                                      e,
                                      r,
                                    )
                                  : "end" === e.position
                                    ? 1 -
                                      ut(
                                        { w: t.x - t.x2, h: t.y - t.y2 },
                                        i,
                                        e,
                                        r,
                                      )
                                    : T(1, e.position);
                              return a;
                            })(t, e, { labelSize: d, padding: o }, n),
                            g = tt(u, h, v),
                            p = {
                              size: d.w,
                              min: n.left,
                              max: n.right,
                              padding: o.left,
                            },
                            y = {
                              size: d.h,
                              min: n.top,
                              max: n.bottom,
                              padding: o.top,
                            };
                          return {
                            x: ht(g.x, p) + s,
                            y: ht(g.y, y) + l,
                            width: a,
                            height: r,
                            rotation: f,
                          };
                        })(
                          t,
                          i,
                          { width: u, height: h, padding: s },
                          e.chartArea,
                        );
                      return (
                        (t.labelX = f.x),
                        (t.labelY = f.y),
                        (t.labelWidth = f.width),
                        (t.labelHeight = f.height),
                        (t.labelRotation = f.rotation),
                        (t.labelPadding = s),
                        (t.labelTextSize = l),
                        t
                      );
                    })(d, t, v)
                  : d;
              },
            },
          ]),
          i
        );
      })(h.W_);
      st.id = "lineAnnotation";
      var lt = {
        backgroundColor: void 0,
        backgroundShadowColor: void 0,
        borderColor: void 0,
        borderDash: void 0,
        borderDashOffset: void 0,
        borderShadowColor: void 0,
        borderWidth: void 0,
        enabled: void 0,
        fill: void 0,
        length: void 0,
        shadowBlur: void 0,
        shadowOffsetX: void 0,
        shadowOffsetY: void 0,
        width: void 0,
      };
      function ut(t, e, i, n) {
        var a = e.labelSize,
          r = e.padding,
          o = t.w * n.dx,
          s = t.h * n.dy,
          l = o > 0 && (a.w / 2 + r.left - n.x) / o,
          u = s > 0 && (a.h / 2 + r.top - n.y) / s;
        return M(Math.max(l, u), 0, 0.25);
      }
      function ht(t, e) {
        var i = e.size,
          n = e.min,
          a = e.max,
          r = e.padding,
          o = i / 2;
        return i > a - n
          ? (a + n) / 2
          : (n >= t - r - o && (t = n + r + o),
            a <= t + r + o && (t = a - r - o),
            t);
      }
      function ct(t, e) {
        if (!e || !e.enabled) return 0;
        var i = e.length,
          n = e.width,
          a = t.options.borderWidth / 2,
          r = { x: i, y: n + a },
          o = { x: 0, y: a };
        return Math.abs(et(0, r, o));
      }
      function ft(t, e, i, n) {
        if (n && n.enabled) {
          var a = n.length,
            r = n.width,
            o = n.fill,
            s = n.backgroundColor,
            l = n.borderColor,
            u = Math.abs(e - a) + i;
          (t.beginPath(),
            j(t, n),
            V(t, n),
            t.moveTo(u, -r),
            t.lineTo(e + i, 0),
            t.lineTo(u, r),
            !0 === o
              ? ((t.fillStyle = s || l),
                t.closePath(),
                t.fill(),
                (t.shadowColor = "transparent"))
              : (t.shadowColor = n.borderShadowColor),
            t.stroke());
        }
      }
      ((st.defaults = {
        adjustScaleRange: !0,
        arrowHeads: {
          enabled: !1,
          end: Object.assign({}, lt),
          fill: !1,
          length: 12,
          start: Object.assign({}, lt),
          width: 6,
        },
        borderDash: [],
        borderDashOffset: 0,
        borderShadowColor: "transparent",
        borderWidth: 2,
        display: !0,
        endValue: void 0,
        label: {
          backgroundColor: "rgba(0,0,0,0.8)",
          backgroundShadowColor: "transparent",
          borderCapStyle: "butt",
          borderColor: "black",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderRadius: 6,
          borderShadowColor: "transparent",
          borderWidth: 0,
          color: "#fff",
          content: null,
          cornerRadius: void 0,
          drawTime: void 0,
          enabled: !1,
          font: {
            family: void 0,
            lineHeight: void 0,
            size: void 0,
            style: void 0,
            weight: "bold",
          },
          height: void 0,
          padding: 6,
          position: "center",
          rotation: 0,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          textAlign: "center",
          textStrokeColor: void 0,
          textStrokeWidth: 0,
          width: void 0,
          xAdjust: 0,
          xPadding: void 0,
          yAdjust: 0,
          yPadding: void 0,
        },
        scaleID: void 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        value: void 0,
        xMax: void 0,
        xMin: void 0,
        xScaleID: "x",
        yMax: void 0,
        yMin: void 0,
        yScaleID: "y",
      }),
        (st.descriptors = {
          arrowHeads: {
            start: { _fallback: !0 },
            end: { _fallback: !0 },
            _fallback: !0,
          },
        }),
        (st.defaultRoutes = { borderColor: "color" }));
      var dt = (function (t) {
        (0, s.default)(i, t);
        var e = (0, l.default)(i);
        function i() {
          return ((0, r.default)(this, i), e.apply(this, arguments));
        }
        return (
          (0, o.default)(i, [
            {
              key: "inRange",
              value: function (t, e, i) {
                return (function (t, e, i, n) {
                  var a = e.width,
                    r = e.height,
                    o = e.getCenterPoint(!0),
                    s = a / 2,
                    l = r / 2;
                  if (s <= 0 || l <= 0) return !1;
                  var u = (0, c.t)(i || 0),
                    h = n / 2 || 0,
                    f = Math.cos(u),
                    d = Math.sin(u),
                    v = Math.pow(f * (t.x - o.x) + d * (t.y - o.y), 2),
                    g = Math.pow(d * (t.x - o.x) - f * (t.y - o.y), 2);
                  return (
                    v / Math.pow(s + h, 2) + g / Math.pow(l + h, 2) <= 1.0001
                  );
                })(
                  { x: t, y: e },
                  this.getProps(["width", "height"], i),
                  this.options.rotation,
                  this.options.borderWidth,
                );
              },
            },
            {
              key: "getCenterPoint",
              value: function (t) {
                return H(this.getProps(["x", "y", "width", "height"], t));
              },
            },
            {
              key: "draw",
              value: function (t) {
                var e = this.width,
                  i = this.height,
                  n = this.options,
                  a = this.getCenterPoint();
                (t.save(),
                  z(t, this, n.rotation),
                  j(t, this.options),
                  t.beginPath(),
                  (t.fillStyle = n.backgroundColor));
                var r = V(t, n);
                (t.ellipse(a.x, a.y, i / 2, e / 2, c.P / 2, 0, 2 * c.P),
                  t.fill(),
                  r && ((t.shadowColor = n.borderShadowColor), t.stroke()),
                  t.restore());
              },
            },
            {
              key: "resolveElementProperties",
              value: function (t, e) {
                return $(t, e);
              },
            },
          ]),
          i
        );
      })(h.W_);
      ((dt.id = "ellipseAnnotation"),
        (dt.defaults = {
          adjustScaleRange: !0,
          backgroundShadowColor: "transparent",
          borderDash: [],
          borderDashOffset: 0,
          borderShadowColor: "transparent",
          borderWidth: 1,
          display: !0,
          rotation: 0,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          xMax: void 0,
          xMin: void 0,
          xScaleID: "x",
          yMax: void 0,
          yMin: void 0,
          yScaleID: "y",
        }),
        (dt.defaultRoutes = {
          borderColor: "color",
          backgroundColor: "color",
        }));
      var vt = (function (t) {
        (0, s.default)(i, t);
        var e = (0, l.default)(i);
        function i() {
          return ((0, r.default)(this, i), e.apply(this, arguments));
        }
        return (
          (0, o.default)(i, [
            {
              key: "inRange",
              value: function (t, e, i) {
                var n = Y(
                  { x: t, y: e },
                  this.getCenterPoint(i),
                  (0, c.t)(-this.options.rotation),
                );
                return P(
                  n.x,
                  n.y,
                  this.getProps(["x", "y", "width", "height"], i),
                  this.options.borderWidth,
                );
              },
            },
            {
              key: "getCenterPoint",
              value: function (t) {
                return H(this.getProps(["x", "y", "width", "height"], t));
              },
            },
            {
              key: "draw",
              value: function (t) {
                if (this.options.content) {
                  var e = this.labelX,
                    i = this.labelY,
                    n = this.labelWidth,
                    a = this.labelHeight,
                    r = this.options;
                  (t.save(),
                    z(t, this, r.rotation),
                    (function (t, e) {
                      var i = e.pointX,
                        n = e.pointY,
                        a = e.calloutPosition,
                        r = e.options;
                      if (!a || e.inRange(i, n)) return;
                      var o = r.callout;
                      (t.save(), t.beginPath());
                      var s = V(t, o);
                      if (!s) return t.restore();
                      var l = (function (t, e) {
                          var i,
                            n,
                            a = t.x,
                            r = t.y,
                            o = t.width,
                            s = t.height,
                            l = (function (t, e) {
                              var i = t.width,
                                n = t.height,
                                a = t.options,
                                r = a.callout.margin + a.borderWidth / 2;
                              if ("right" === e) return i + r;
                              if ("bottom" === e) return n + r;
                              return -r;
                            })(t, e);
                          n =
                            "left" === e || "right" === e
                              ? { x: (i = { x: a + l, y: r }).x, y: i.y + s }
                              : { x: (i = { x: a, y: r + l }).x + o, y: i.y };
                          return { separatorStart: i, separatorEnd: n };
                        })(e, a),
                        u = l.separatorStart,
                        h = l.separatorEnd,
                        f = (function (t, e, i) {
                          var n,
                            a,
                            r = t.y,
                            o = t.width,
                            s = t.height,
                            l = t.options,
                            u = l.callout.start,
                            h = (function (t, e) {
                              var i = e.side;
                              if ("left" === t || "top" === t) return -i;
                              return i;
                            })(e, l.callout);
                          a =
                            "left" === e || "right" === e
                              ? {
                                  x: (n = { x: i.x, y: r + E(s, u) }).x + h,
                                  y: n.y,
                                }
                              : {
                                  x: (n = { x: i.x + E(o, u), y: i.y }).x,
                                  y: n.y + h,
                                };
                          return { sideStart: n, sideEnd: a };
                        })(e, a, u),
                        d = f.sideStart,
                        v = f.sideEnd;
                      (o.margin > 0 || 0 === r.borderWidth) &&
                        (t.moveTo(u.x, u.y), t.lineTo(h.x, h.y));
                      (t.moveTo(d.x, d.y), t.lineTo(v.x, v.y));
                      var g = Y(
                        { x: i, y: n },
                        e.getCenterPoint(),
                        (0, c.t)(-r.rotation),
                      );
                      (t.lineTo(g.x, g.y), t.stroke(), t.restore());
                    })(t, this),
                    N(t, this, r),
                    B(t, { x: e, y: i, width: n, height: a }, r),
                    t.restore());
                }
              },
            },
            {
              key: "resolveElementProperties",
              value: function (t, e) {
                var i = L(e) ? U(t, e) : H($(t, e)),
                  n = (0, c.K)(e.padding),
                  r = W(t.ctx, e),
                  o = (function (t, e, i, n) {
                    var a = e.width + n.width + i.borderWidth,
                      r = e.height + n.height + i.borderWidth,
                      o = R(i.position);
                    return {
                      x: gt(t.x, a, i.xAdjust, o.x),
                      y: gt(t.y, r, i.yAdjust, o.y),
                      width: a,
                      height: r,
                    };
                  })(i, r, e, n),
                  s = e.borderWidth / 2,
                  l = (0, a.default)(
                    (0, a.default)({ pointX: i.x, pointY: i.y }, o),
                    {},
                    {
                      labelX: o.x + n.left + s,
                      labelY: o.y + n.top + s,
                      labelWidth: r.width,
                      labelHeight: r.height,
                    },
                  );
                return (
                  (l.calloutPosition =
                    e.callout.enabled &&
                    (function (t, e, i) {
                      var n = e.position;
                      if (
                        "left" === n ||
                        "right" === n ||
                        "top" === n ||
                        "bottom" === n
                      )
                        return n;
                      return (function (t, e, i) {
                        for (
                          var n = t.x,
                            a = t.y,
                            r = t.width,
                            o = t.height,
                            s = t.pointX,
                            l = t.pointY,
                            u = { x: n + r / 2, y: a + o / 2 },
                            h = e.start,
                            f = E(r, h),
                            d = E(o, h),
                            v = [n, n + f, n + f, n + r],
                            g = [a + d, a + o, a, a + d],
                            p = [],
                            y = 0;
                          y < 4;
                          y++
                        ) {
                          var b = Y({ x: v[y], y: g[y] }, u, (0, c.t)(i));
                          p.push({
                            position: pt[y],
                            distance: (0, c.aG)(b, { x: s, y: l }),
                          });
                        }
                        return p.sort(function (t, e) {
                          return t.distance - e.distance;
                        })[0].position;
                      })(t, e, i);
                    })(l, e.callout, e.rotation)),
                  l
                );
              },
            },
          ]),
          i
        );
      })(h.W_);
      function gt(t, e) {
        var i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return t - T(e, arguments.length > 3 ? arguments[3] : void 0) + i;
      }
      ((vt.id = "labelAnnotation"),
        (vt.defaults = {
          adjustScaleRange: !0,
          backgroundColor: "transparent",
          backgroundShadowColor: "transparent",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderRadius: 0,
          borderShadowColor: "transparent",
          borderWidth: 0,
          callout: {
            borderCapStyle: "butt",
            borderColor: void 0,
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            borderWidth: 1,
            enabled: !1,
            margin: 5,
            position: "auto",
            side: 5,
            start: "50%",
          },
          color: "black",
          content: null,
          display: !0,
          font: {
            family: void 0,
            lineHeight: void 0,
            size: void 0,
            style: void 0,
            weight: void 0,
          },
          height: void 0,
          padding: 6,
          position: "center",
          rotation: 0,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          textAlign: "center",
          textStrokeColor: void 0,
          textStrokeWidth: 0,
          width: void 0,
          xAdjust: 0,
          xMax: void 0,
          xMin: void 0,
          xScaleID: "x",
          xValue: void 0,
          yAdjust: 0,
          yMax: void 0,
          yMin: void 0,
          yScaleID: "y",
          yValue: void 0,
        }),
        (vt.defaultRoutes = { borderColor: "color" }));
      var pt = ["left", "bottom", "top", "right"];
      var yt = (function (t) {
        (0, s.default)(i, t);
        var e = (0, l.default)(i);
        function i() {
          return ((0, r.default)(this, i), e.apply(this, arguments));
        }
        return (
          (0, o.default)(i, [
            {
              key: "inRange",
              value: function (t, e, i) {
                var n = this.getProps(["width"], i).width;
                return (function (t, e, i, n) {
                  if (!t || !e || i <= 0) return !1;
                  var a = n / 2 || 0;
                  return (
                    Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2) <=
                    Math.pow(i + a, 2)
                  );
                })(
                  { x: t, y: e },
                  this.getCenterPoint(i),
                  n / 2,
                  this.options.borderWidth,
                );
              },
            },
            {
              key: "getCenterPoint",
              value: function (t) {
                return C(this, t);
              },
            },
            {
              key: "draw",
              value: function (t) {
                var e = this.options,
                  i = e.borderWidth;
                if (!(e.radius < 0.1)) {
                  (t.save(), (t.fillStyle = e.backgroundColor), j(t, e));
                  var n = V(t, e);
                  ((e.borderWidth = 0),
                    (0, c.au)(t, e, this.x, this.y),
                    n &&
                      !F(e.pointStyle) &&
                      ((t.shadowColor = e.borderShadowColor), t.stroke()),
                    t.restore(),
                    (e.borderWidth = i));
                }
              },
            },
            {
              key: "resolveElementProperties",
              value: function (t, e) {
                return K(t, e);
              },
            },
          ]),
          i
        );
      })(h.W_);
      ((yt.id = "pointAnnotation"),
        (yt.defaults = {
          adjustScaleRange: !0,
          backgroundShadowColor: "transparent",
          borderDash: [],
          borderDashOffset: 0,
          borderShadowColor: "transparent",
          borderWidth: 1,
          display: !0,
          pointStyle: "circle",
          radius: 10,
          rotation: 0,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          xAdjust: 0,
          xMax: void 0,
          xMin: void 0,
          xScaleID: "x",
          xValue: void 0,
          yAdjust: 0,
          yMax: void 0,
          yMin: void 0,
          yScaleID: "y",
          yValue: void 0,
        }),
        (yt.defaultRoutes = {
          borderColor: "color",
          backgroundColor: "color",
        }));
      var bt = (function (t) {
        (0, s.default)(i, t);
        var e = (0, l.default)(i);
        function i() {
          return ((0, r.default)(this, i), e.apply(this, arguments));
        }
        return (
          (0, o.default)(i, [
            {
              key: "inRange",
              value: function (t, e, i) {
                return (
                  this.options.radius >= 0.1 &&
                  this.elements.length > 1 &&
                  (function (t, e, i, n) {
                    var a,
                      r = !1,
                      o = t[t.length - 1].getProps(["bX", "bY"], n),
                      s = (0, u.Z)(t);
                    try {
                      for (s.s(); !(a = s.n()).done;) {
                        var l = a.value.getProps(["bX", "bY"], n);
                        (l.bY > i !== o.bY > i &&
                          e <
                            ((o.bX - l.bX) * (i - l.bY)) / (o.bY - l.bY) +
                              l.bX &&
                          (r = !r),
                          (o = l));
                      }
                    } catch (h) {
                      s.e(h);
                    } finally {
                      s.f();
                    }
                    return r;
                  })(this.elements, t, e, i)
                );
              },
            },
            {
              key: "getCenterPoint",
              value: function (t) {
                return C(this, t);
              },
            },
            {
              key: "draw",
              value: function (t) {
                var e = this.elements,
                  i = this.options;
                (t.save(),
                  t.beginPath(),
                  (t.fillStyle = i.backgroundColor),
                  j(t, i));
                var n,
                  a = V(t, i),
                  r = !0,
                  o = (0, u.Z)(e);
                try {
                  for (o.s(); !(n = o.n()).done;) {
                    var s = n.value;
                    r ? (t.moveTo(s.x, s.y), (r = !1)) : t.lineTo(s.x, s.y);
                  }
                } catch (l) {
                  o.e(l);
                } finally {
                  o.f();
                }
                (t.closePath(),
                  t.fill(),
                  a && ((t.shadowColor = i.borderShadowColor), t.stroke()),
                  t.restore());
              },
            },
            {
              key: "resolveElementProperties",
              value: function (t, e) {
                for (
                  var i = K(t, e),
                    n = i.x,
                    a = i.y,
                    r = i.width,
                    o = i.height,
                    s = e.sides,
                    l = e.radius,
                    u = e.rotation,
                    h = e.borderWidth / 2,
                    f = [],
                    d = (2 * c.P) / s,
                    v = u * c.b2,
                    g = 0;
                  g < s;
                  g++, v += d
                ) {
                  var p = Math.sin(v),
                    y = Math.cos(v);
                  f.push({
                    type: "point",
                    optionScope: "point",
                    properties: {
                      x: n + p * l,
                      y: a - y * l,
                      bX: n + p * (l + h),
                      bY: a - y * (l + h),
                    },
                  });
                }
                return {
                  x: n,
                  y: a,
                  width: r,
                  height: o,
                  elements: f,
                  initProperties: { x: n, y: a },
                };
              },
            },
          ]),
          i
        );
      })(h.W_);
      ((bt.id = "polygonAnnotation"),
        (bt.defaults = {
          adjustScaleRange: !0,
          backgroundShadowColor: "transparent",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderShadowColor: "transparent",
          borderWidth: 1,
          display: !0,
          point: { radius: 0 },
          radius: 10,
          rotation: 0,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          sides: 3,
          xAdjust: 0,
          xMax: void 0,
          xMin: void 0,
          xScaleID: "x",
          xValue: void 0,
          yAdjust: 0,
          yMax: void 0,
          yMin: void 0,
          yScaleID: "y",
          yValue: void 0,
        }),
        (bt.defaultRoutes = {
          borderColor: "color",
          backgroundColor: "color",
        }));
      var mt = {
        box: Q,
        ellipse: dt,
        label: vt,
        line: st,
        point: yt,
        polygon: bt,
      };
      Object.keys(mt).forEach(function (t) {
        h.ce.describe("elements.".concat(mt[t].id), {
          _fallback: "plugins.annotation",
        });
      });
      var xt = { update: Object.assign };
      function kt() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "line";
        return mt[t]
          ? t
          : (console.warn(
              "Unknown annotation type: '".concat(t, "', defaulting to 'line'"),
            ),
            "line");
      }
      function _t(t, e, i, a) {
        for (
          var r = (function (t, e, i) {
              if ("reset" === i || "none" === i || "resize" === i) return xt;
              return new h.FK(t, e);
            })(t, i.animations, a),
            o = e.annotations,
            s = (function (t, e) {
              var i = e.length,
                a = t.length;
              if (a < i) {
                var r = i - a;
                t.splice.apply(t, [a, 0].concat((0, n.Z)(new Array(r))));
              } else a > i && t.splice(i, a - i);
              return t;
            })(e.elements, o),
            l = 0;
          l < o.length;
          l++
        ) {
          var u = o[l],
            f = St(s, l, u.type),
            d = u.setContext(Ot(t, f, u)),
            v = f.resolveElementProperties(t, d);
          ((v.skip = wt(v)),
            "elements" in v && (Mt(f, v, d, r), delete v.elements),
            (0, c.j)(f.x) || Object.assign(f, v),
            (v.options = Pt(d)),
            r.update(f, v));
        }
      }
      function wt(t) {
        return isNaN(t.x) || isNaN(t.y);
      }
      function Mt(t, e, i, n) {
        var a = e.elements,
          r = e.initProperties,
          o = t.elements || (t.elements = []);
        o.length = a.length;
        for (var s = 0; s < a.length; s++) {
          var l = a[s],
            u = l.properties,
            h = St(o, s, l.type, r),
            c = i[l.optionScope].override(l);
          ((u.options = Pt(c)), n.update(h, u));
        }
      }
      function St(t, e, i, n) {
        var a = mt[kt(i)],
          r = t[e];
        return (
          (r && r instanceof a) ||
            ((r = t[e] = new a()), (0, c.i)(n) && Object.assign(r, n)),
          r
        );
      }
      function Pt(t) {
        var e = mt[kt(t.type)],
          i = {};
        ((i.id = t.id),
          (i.type = t.type),
          (i.drawTime = t.drawTime),
          Object.assign(i, Ct(t, e.defaults), Ct(t, e.defaultRoutes)));
        var n,
          a = (0, u.Z)(v);
        try {
          for (a.s(); !(n = a.n()).done;) {
            var r = n.value;
            i[r] = t[r];
          }
        } catch (o) {
          a.e(o);
        } finally {
          a.f();
        }
        return i;
      }
      function Ct(t, e) {
        for (var i = {}, n = 0, a = Object.keys(e); n < a.length; n++) {
          var r = a[n],
            o = e[r],
            s = t[r];
          i[r] = (0, c.i)(o) ? Ct(s, o) : s;
        }
        return i;
      }
      function Ot(t, e, i) {
        return (
          e.$context ||
          (e.$context = Object.assign(Object.create(t.getContext()), {
            element: e,
            id: i.id,
            type: "annotation",
          }))
        );
      }
      var Dt = new Map(),
        At = {
          id: "annotation",
          version: "1.4.0",
          afterRegister: function () {
            (h.kL.register(mt),
              (function (t, e, i) {
                var n,
                  a =
                    !(arguments.length > 3 && void 0 !== arguments[3]) ||
                    arguments[3],
                  r = i.split("."),
                  o = 0,
                  s = (0, u.Z)(e.split("."));
                try {
                  for (s.s(); !(n = s.n()).done;) {
                    var l = n.value,
                      h = r[o++];
                    if (parseInt(l, 10) < parseInt(h, 10)) break;
                    if (O(h, l)) {
                      if (a)
                        throw new Error(
                          ""
                            .concat(t, " v")
                            .concat(i, " is not supported. v")
                            .concat(e, " or newer is required."),
                        );
                      return !1;
                    }
                  }
                } catch (c) {
                  s.e(c);
                } finally {
                  s.f();
                }
                return !0;
              })("chart.js", "3.7", h.kL.version, !1) ||
                (console.warn(
                  "".concat(
                    "chartjs-plugin-annotation",
                    " has known issues with chart.js versions prior to 3.7, please consider upgrading.",
                  ),
                ),
                h.kL.defaults.set("elements.lineAnnotation", {
                  callout: {},
                  font: {},
                  padding: 6,
                })));
          },
          afterUnregister: function () {
            h.kL.unregister(mt);
          },
          beforeInit: function (t) {
            Dt.set(t, {
              annotations: [],
              elements: [],
              visibleElements: [],
              listeners: {},
              listened: !1,
              moveListened: !1,
            });
          },
          beforeUpdate: function (t, e, i) {
            var a = (Dt.get(t).annotations = []),
              r = i.annotations;
            ((0, c.i)(r)
              ? Object.keys(r).forEach(function (t) {
                  var e = r[t];
                  (0, c.i)(e) && ((e.id = t), a.push(e));
                })
              : (0, c.b)(r) && a.push.apply(a, (0, n.Z)(r)),
              (function (t, e) {
                var i,
                  n = (0, u.Z)(t);
                try {
                  for (n.s(); !(i = n.n()).done;) x(i.value, e);
                } catch (a) {
                  n.e(a);
                } finally {
                  n.f();
                }
              })(a, t.scales));
          },
          afterDataLimits: function (t, e) {
            var i = Dt.get(t);
            b(
              0,
              e.scale,
              i.annotations.filter(function (t) {
                return t.display && t.adjustScaleRange;
              }),
            );
          },
          afterUpdate: function (t, e, i) {
            var n = Dt.get(t);
            (!(function (t, e, i) {
              ((e.listened = !1),
                (e.moveListened = !1),
                v.forEach(function (t) {
                  "function" === typeof i[t]
                    ? ((e.listened = !0), (e.listeners[t] = i[t]))
                    : (0, c.j)(e.listeners[t]) && delete e.listeners[t];
                }),
                d.forEach(function (t) {
                  "function" === typeof i[t] && (e.moveListened = !0);
                }),
                (e.listened && e.moveListened) ||
                  e.annotations.forEach(function (t) {
                    (e.listened ||
                      f.forEach(function (i) {
                        "function" === typeof t[i] && (e.listened = !0);
                      }),
                      e.moveListened ||
                        d.forEach(function (i) {
                          "function" === typeof t[i] &&
                            ((e.listened = !0), (e.moveListened = !0));
                        }));
                  }));
            })(0, n, i),
              _t(t, n, i, e.mode),
              (n.visibleElements = n.elements.filter(function (t) {
                return !t.skip && t.options.display;
              })));
          },
          beforeDatasetsDraw: function (t, e, i) {
            Tt(t, "beforeDatasetsDraw", i.clip);
          },
          afterDatasetsDraw: function (t, e, i) {
            Tt(t, "afterDatasetsDraw", i.clip);
          },
          beforeDraw: function (t, e, i) {
            Tt(t, "beforeDraw", i.clip);
          },
          afterDraw: function (t, e, i) {
            Tt(t, "afterDraw", i.clip);
          },
          beforeEvent: function (t, e, i) {
            g(Dt.get(t), e.event, i);
          },
          destroy: function (t) {
            Dt.delete(t);
          },
          _getState: function (t) {
            return Dt.get(t);
          },
          defaults: {
            animations: {
              numbers: {
                properties: [
                  "x",
                  "y",
                  "x2",
                  "y2",
                  "width",
                  "height",
                  "pointX",
                  "pointY",
                  "labelX",
                  "labelY",
                  "labelWidth",
                  "labelHeight",
                  "radius",
                ],
                type: "number",
              },
            },
            clip: !0,
            dblClickSpeed: 350,
            drawTime: "afterDatasetsDraw",
            label: { drawTime: null },
          },
          descriptors: {
            _indexable: !1,
            _scriptable: function (t) {
              return !v.includes(t);
            },
            annotations: {
              _allKeys: !1,
              _fallback: function (t, e) {
                return "elements.".concat(mt[kt(e.type)].id);
              },
            },
          },
          additionalOptionScopes: [""],
        };
      function Tt(t, e, i) {
        var n = t.ctx,
          a = t.chartArea,
          r = Dt.get(t).visibleElements;
        (i && (0, c.L)(n, a),
          Et(n, r, e),
          (function (t, e, i) {
            var n,
              a = (0, u.Z)(e);
            try {
              for (a.s(); !(n = a.n()).done;) {
                var r = n.value;
                (0, c.b)(r.elements) && Et(t, r.elements, i);
              }
            } catch (o) {
              a.e(o);
            } finally {
              a.f();
            }
          })(n, r, e),
          i && (0, c.N)(n),
          r.forEach(function (t) {
            if ("drawLabel" in t) {
              var i = t.options.label;
              i &&
                i.enabled &&
                i.content &&
                (i.drawTime || t.options.drawTime) === e &&
                t.drawLabel(n, a);
            }
          }));
      }
      function Et(t, e, i) {
        var n,
          a = (0, u.Z)(e);
        try {
          for (a.s(); !(n = a.n()).done;) {
            var r = n.value;
            r.options.drawTime === i && r.draw(t);
          }
        } catch (o) {
          a.e(o);
        } finally {
          a.f();
        }
      }
    },
    94923: function (t, e, i) {
      "use strict";
      i.d(e, {
        kL: function () {
          return v;
        },
      });
      var n = i(92701),
        a = i(31105),
        r = i(76431),
        o = i(33809),
        s = [
          "height",
          "width",
          "redraw",
          "datasetIdKey",
          "type",
          "data",
          "options",
          "plugins",
          "fallbackContent",
          "updateMode",
        ],
        l = "label";
      function u(t, e) {
        "function" === typeof t ? t(e) : t && (t.current = e);
      }
      function h(t, e) {
        t.labels = e;
      }
      function c(t, e) {
        var i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l,
          n = [];
        t.datasets = e.map(function (e) {
          var r = t.datasets.find(function (t) {
            return t[i] === e[i];
          });
          return r && e.data && !n.includes(r)
            ? (n.push(r), Object.assign(r, e), r)
            : (0, a.default)({}, e);
        });
      }
      function f(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
          i = { labels: [], datasets: [] };
        return (h(i, t.labels), c(i, t.datasets, e), i);
      }
      function d(t, e) {
        var i = t.height,
          l = void 0 === i ? 150 : i,
          d = t.width,
          v = void 0 === d ? 300 : d,
          g = t.redraw,
          p = void 0 !== g && g,
          y = t.datasetIdKey,
          b = t.type,
          m = t.data,
          x = t.options,
          k = t.plugins,
          _ = void 0 === k ? [] : k,
          w = t.fallbackContent,
          M = t.updateMode,
          S = (0, n.default)(t, s),
          P = (0, r.useRef)(null),
          C = (0, r.useRef)(),
          O = function () {
            P.current &&
              ((C.current = new o.kL(P.current, {
                type: b,
                data: f(m, y),
                options: x && (0, a.default)({}, x),
                plugins: _,
              })),
              u(e, C.current));
          },
          D = function () {
            (u(e, null),
              C.current && (C.current.destroy(), (C.current = null)));
          };
        return (
          (0, r.useEffect)(
            function () {
              var t, e;
              !p &&
                C.current &&
                x &&
                ((t = C.current), (e = x), Object.assign(t.options, e));
            },
            [p, x],
          ),
          (0, r.useEffect)(
            function () {
              !p && C.current && h(C.current.config.data, m.labels);
            },
            [p, m.labels],
          ),
          (0, r.useEffect)(
            function () {
              !p &&
                C.current &&
                m.datasets &&
                c(C.current.config.data, m.datasets, y);
            },
            [p, m.datasets],
          ),
          (0, r.useEffect)(
            function () {
              C.current && (p ? (D(), setTimeout(O)) : C.current.update(M));
            },
            [p, x, m.labels, m.datasets, M],
          ),
          (0, r.useEffect)(
            function () {
              C.current && (D(), setTimeout(O));
            },
            [b],
          ),
          (0, r.useEffect)(function () {
            return (
              O(),
              function () {
                return D();
              }
            );
          }, []),
          r.createElement(
            "canvas",
            Object.assign({ ref: P, role: "img", height: l, width: v }, S),
            w,
          )
        );
      }
      var v = (0, r.forwardRef)(d);
      function g(t, e) {
        return (
          o.kL.register(e),
          (0, r.forwardRef)(function (e, i) {
            return r.createElement(
              v,
              Object.assign({}, e, { ref: i, type: t }),
            );
          })
        );
      }
      (o.ST, o.vn, o.Xi, o.jI, o.CV, o.N0, o.tt, o.ho);
    },
    60646: function (t, e, i) {
      var n = i(76682),
        a = i(25247),
        r = i(13479),
        o = i(40993),
        s = n.isFinite,
        l = Math.min;
      t.exports = function (t) {
        var e = Math[t];
        return function (t, i) {
          if (((t = r(t)), (i = null == i ? 0 : l(a(i), 292)) && s(t))) {
            var n = (o(t) + "e").split("e"),
              u = e(n[0] + "e" + (+n[1] + i));
            return +((n = (o(u) + "e").split("e"))[0] + "e" + (+n[1] - i));
          }
          return e(t);
        };
      };
    },
    23594: function (t, e, i) {
      var n = i(60646)("round");
      t.exports = n;
    },
    33809: function (t, e, i) {
      "use strict";
      i.d(e, {
        FK: function () {
          return k;
        },
        vn: function () {
          return B;
        },
        ZL: function () {
          return Xe;
        },
        N0: function () {
          return H;
        },
        kL: function () {
          return xe;
        },
        jI: function () {
          return Y;
        },
        W_: function () {
          return K;
        },
        Gu: function () {
          return ui;
        },
        ST: function () {
          return Z;
        },
        jn: function () {
          return ze;
        },
        f$: function () {
          return Ci;
        },
        tt: function () {
          return U;
        },
        od: function () {
          return je;
        },
        CV: function () {
          return X;
        },
        Xi: function () {
          return $;
        },
        ho: function () {
          return ht;
        },
        FB: function () {
          return Xi;
        },
        u: function () {
          return _i;
        },
        IQ: function () {
          return dt;
        },
        ce: function () {
          return v.d;
        },
      });
      i(31105);
      var n = i(30992),
        a = i(78171);
      function r() {
        return (
          (r =
            "undefined" !== typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (t, e, i) {
                  var n = (function (t, e) {
                    for (
                      ;
                      !Object.prototype.hasOwnProperty.call(t, e) &&
                      null !== (t = (0, a.Z)(t));
                    );
                    return t;
                  })(t, e);
                  if (n) {
                    var r = Object.getOwnPropertyDescriptor(n, e);
                    return r.get
                      ? r.get.call(arguments.length < 3 ? t : i)
                      : r.value;
                  }
                }),
          r.apply(this, arguments)
        );
      }
      var o = i(14482),
        s = i(5189),
        l = i(82857),
        u = i(2845),
        h = i(12985),
        c = i(6892),
        f = i(30225),
        d = i(94404),
        v = i(6948),
        g = (function () {
          function t() {
            ((0, f.default)(this, t),
              (this._request = null),
              (this._charts = new Map()),
              (this._running = !1),
              (this._lastDate = void 0));
          }
          return (
            (0, d.default)(t, [
              {
                key: "_notify",
                value: function (t, e, i, n) {
                  var a = e.listeners[n],
                    r = e.duration;
                  a.forEach(function (n) {
                    return n({
                      chart: t,
                      initial: e.initial,
                      numSteps: r,
                      currentStep: Math.min(i - e.start, r),
                    });
                  });
                },
              },
              {
                key: "_refresh",
                value: function () {
                  var t = this;
                  this._request ||
                    ((this._running = !0),
                    (this._request = v.r.call(window, function () {
                      (t._update(),
                        (t._request = null),
                        t._running && t._refresh());
                    })));
                },
              },
              {
                key: "_update",
                value: function () {
                  var t = this,
                    e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : Date.now(),
                    i = 0;
                  (this._charts.forEach(function (n, a) {
                    if (n.running && n.items.length) {
                      for (
                        var r, o = n.items, s = o.length - 1, l = !1;
                        s >= 0;
                        --s
                      )
                        (r = o[s])._active
                          ? (r._total > n.duration && (n.duration = r._total),
                            r.tick(e),
                            (l = !0))
                          : ((o[s] = o[o.length - 1]), o.pop());
                      (l && (a.draw(), t._notify(a, n, e, "progress")),
                        o.length ||
                          ((n.running = !1),
                          t._notify(a, n, e, "complete"),
                          (n.initial = !1)),
                        (i += o.length));
                    }
                  }),
                    (this._lastDate = e),
                    0 === i && (this._running = !1));
                },
              },
              {
                key: "_getAnims",
                value: function (t) {
                  var e = this._charts,
                    i = e.get(t);
                  return (
                    i ||
                      ((i = {
                        running: !1,
                        initial: !0,
                        items: [],
                        listeners: { complete: [], progress: [] },
                      }),
                      e.set(t, i)),
                    i
                  );
                },
              },
              {
                key: "listen",
                value: function (t, e, i) {
                  this._getAnims(t).listeners[e].push(i);
                },
              },
              {
                key: "add",
                value: function (t, e) {
                  var i;
                  e &&
                    e.length &&
                    (i = this._getAnims(t).items).push.apply(i, (0, c.Z)(e));
                },
              },
              {
                key: "has",
                value: function (t) {
                  return this._getAnims(t).items.length > 0;
                },
              },
              {
                key: "start",
                value: function (t) {
                  var e = this._charts.get(t);
                  e &&
                    ((e.running = !0),
                    (e.start = Date.now()),
                    (e.duration = e.items.reduce(function (t, e) {
                      return Math.max(t, e._duration);
                    }, 0)),
                    this._refresh());
                },
              },
              {
                key: "running",
                value: function (t) {
                  if (!this._running) return !1;
                  var e = this._charts.get(t);
                  return !!(e && e.running && e.items.length);
                },
              },
              {
                key: "stop",
                value: function (t) {
                  var e = this._charts.get(t);
                  if (e && e.items.length) {
                    for (var i = e.items, n = i.length - 1; n >= 0; --n)
                      i[n].cancel();
                    ((e.items = []),
                      this._notify(t, e, Date.now(), "complete"));
                  }
                },
              },
              {
                key: "remove",
                value: function (t) {
                  return this._charts.delete(t);
                },
              },
            ]),
            t
          );
        })(),
        p = new g(),
        y = "transparent",
        b = {
          boolean: function (t, e, i) {
            return i > 0.5 ? e : t;
          },
          color: function (t, e, i) {
            var n = (0, v.c)(t || y),
              a = n.valid && (0, v.c)(e || y);
            return a && a.valid ? a.mix(n, i).hexString() : e;
          },
          number: function (t, e, i) {
            return t + (e - t) * i;
          },
        },
        m = (function () {
          function t(e, i, n, a) {
            (0, f.default)(this, t);
            var r = i[n];
            a = (0, v.a)([e.to, a, r, e.from]);
            var o = (0, v.a)([e.from, r, a]);
            ((this._active = !0),
              (this._fn = e.fn || b[e.type || typeof o]),
              (this._easing = v.e[e.easing] || v.e.linear),
              (this._start = Math.floor(Date.now() + (e.delay || 0))),
              (this._duration = this._total = Math.floor(e.duration)),
              (this._loop = !!e.loop),
              (this._target = i),
              (this._prop = n),
              (this._from = o),
              (this._to = a),
              (this._promises = void 0));
          }
          return (
            (0, d.default)(t, [
              {
                key: "active",
                value: function () {
                  return this._active;
                },
              },
              {
                key: "update",
                value: function (t, e, i) {
                  if (this._active) {
                    this._notify(!1);
                    var n = this._target[this._prop],
                      a = i - this._start,
                      r = this._duration - a;
                    ((this._start = i),
                      (this._duration = Math.floor(Math.max(r, t.duration))),
                      (this._total += a),
                      (this._loop = !!t.loop),
                      (this._to = (0, v.a)([t.to, e, n, t.from])),
                      (this._from = (0, v.a)([t.from, n, e])));
                  }
                },
              },
              {
                key: "cancel",
                value: function () {
                  this._active &&
                    (this.tick(Date.now()),
                    (this._active = !1),
                    this._notify(!1));
                },
              },
              {
                key: "tick",
                value: function (t) {
                  var e,
                    i = t - this._start,
                    n = this._duration,
                    a = this._prop,
                    r = this._from,
                    o = this._loop,
                    s = this._to;
                  if (((this._active = r !== s && (o || i < n)), !this._active))
                    return ((this._target[a] = s), void this._notify(!0));
                  i < 0
                    ? (this._target[a] = r)
                    : ((e = (i / n) % 2),
                      (e = o && e > 1 ? 2 - e : e),
                      (e = this._easing(Math.min(1, Math.max(0, e)))),
                      (this._target[a] = this._fn(r, s, e)));
                },
              },
              {
                key: "wait",
                value: function () {
                  var t = this._promises || (this._promises = []);
                  return new Promise(function (e, i) {
                    t.push({ res: e, rej: i });
                  });
                },
              },
              {
                key: "_notify",
                value: function (t) {
                  for (
                    var e = t ? "res" : "rej", i = this._promises || [], n = 0;
                    n < i.length;
                    n++
                  )
                    i[n][e]();
                },
              },
            ]),
            t
          );
        })();
      v.d.set("animation", {
        delay: void 0,
        duration: 1e3,
        easing: "easeOutQuart",
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0,
      });
      var x = Object.keys(v.d.animation);
      (v.d.describe("animation", {
        _fallback: !1,
        _indexable: !1,
        _scriptable: function (t) {
          return "onProgress" !== t && "onComplete" !== t && "fn" !== t;
        },
      }),
        v.d.set("animations", {
          colors: {
            type: "color",
            properties: ["color", "borderColor", "backgroundColor"],
          },
          numbers: {
            type: "number",
            properties: ["x", "y", "borderWidth", "radius", "tension"],
          },
        }),
        v.d.describe("animations", { _fallback: "animation" }),
        v.d.set("transitions", {
          active: { animation: { duration: 400 } },
          resize: { animation: { duration: 0 } },
          show: {
            animations: {
              colors: { from: "transparent" },
              visible: { type: "boolean", duration: 0 },
            },
          },
          hide: {
            animations: {
              colors: { to: "transparent" },
              visible: {
                type: "boolean",
                easing: "linear",
                fn: function (t) {
                  return 0 | t;
                },
              },
            },
          },
        }));
      var k = (function () {
        function t(e, i) {
          ((0, f.default)(this, t),
            (this._chart = e),
            (this._properties = new Map()),
            this.configure(i));
        }
        return (
          (0, d.default)(t, [
            {
              key: "configure",
              value: function (t) {
                if ((0, v.i)(t)) {
                  var e = this._properties;
                  Object.getOwnPropertyNames(t).forEach(function (i) {
                    var n = t[i];
                    if ((0, v.i)(n)) {
                      for (var a = {}, r = 0, o = x; r < o.length; r++) {
                        var s = o[r];
                        a[s] = n[s];
                      }
                      (((0, v.b)(n.properties) && n.properties) || [i]).forEach(
                        function (t) {
                          (t !== i && e.has(t)) || e.set(t, a);
                        },
                      );
                    }
                  });
                }
              },
            },
            {
              key: "_animateOptions",
              value: function (t, e) {
                var i = e.options,
                  n = (function (t, e) {
                    if (!e) return;
                    var i = t.options;
                    if (!i) return void (t.options = e);
                    i.$shared &&
                      (t.options = i =
                        Object.assign({}, i, { $shared: !1, $animations: {} }));
                    return i;
                  })(t, i);
                if (!n) return [];
                var a = this._createAnimations(n, i);
                return (
                  i.$shared &&
                    (function (t, e) {
                      for (
                        var i = [], n = Object.keys(e), a = 0;
                        a < n.length;
                        a++
                      ) {
                        var r = t[n[a]];
                        r && r.active() && i.push(r.wait());
                      }
                      return Promise.all(i);
                    })(t.options.$animations, i).then(
                      function () {
                        t.options = i;
                      },
                      function () {},
                    ),
                  a
                );
              },
            },
            {
              key: "_createAnimations",
              value: function (t, e) {
                var i,
                  n = this._properties,
                  a = [],
                  r = t.$animations || (t.$animations = {}),
                  o = Object.keys(e),
                  s = Date.now();
                for (i = o.length - 1; i >= 0; --i) {
                  var l = o[i];
                  if ("$" !== l.charAt(0))
                    if ("options" !== l) {
                      var u = e[l],
                        h = r[l],
                        f = n.get(l);
                      if (h) {
                        if (f && h.active()) {
                          h.update(f, u, s);
                          continue;
                        }
                        h.cancel();
                      }
                      f && f.duration
                        ? ((r[l] = h = new m(f, t, l, u)), a.push(h))
                        : (t[l] = u);
                    } else
                      a.push.apply(a, (0, c.Z)(this._animateOptions(t, e)));
                }
                return a;
              },
            },
            {
              key: "update",
              value: function (t, e) {
                if (0 !== this._properties.size) {
                  var i = this._createAnimations(t, e);
                  return i.length ? (p.add(this._chart, i), !0) : void 0;
                }
                Object.assign(t, e);
              },
            },
          ]),
          t
        );
      })();
      function _(t, e) {
        var i = (t && t.options) || {},
          n = i.reverse,
          a = void 0 === i.min ? e : 0,
          r = void 0 === i.max ? e : 0;
        return { start: n ? r : a, end: n ? a : r };
      }
      function w(t, e) {
        var i,
          n,
          a = [],
          r = t._getSortedDatasetMetas(e);
        for (i = 0, n = r.length; i < n; ++i) a.push(r[i].index);
        return a;
      }
      function M(t, e, i) {
        var n,
          a,
          r,
          o,
          s =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          l = t.keys,
          u = "single" === s.mode;
        if (null !== e) {
          for (n = 0, a = l.length; n < a; ++n) {
            if ((r = +l[n]) === i) {
              if (s.all) continue;
              break;
            }
            ((o = t.values[r]),
              (0, v.g)(o) &&
                (u || 0 === e || (0, v.s)(e) === (0, v.s)(o)) &&
                (e += o));
          }
          return e;
        }
      }
      function S(t, e) {
        var i = t && t.options.stacked;
        return i || (void 0 === i && void 0 !== e.stack);
      }
      function P(t, e, i) {
        var n = t[e] || (t[e] = {});
        return n[i] || (n[i] = {});
      }
      function C(t, e, i, n) {
        var a,
          r = (0, h.Z)(e.getMatchingVisibleMetas(n).reverse());
        try {
          for (r.s(); !(a = r.n()).done;) {
            var o = a.value,
              s = t[o.index];
            if ((i && s > 0) || (!i && s < 0)) return o.index;
          }
        } catch (l) {
          r.e(l);
        } finally {
          r.f();
        }
        return null;
      }
      function O(t, e) {
        for (
          var i,
            n = t.chart,
            a = t._cachedMeta,
            r = n._stacks || (n._stacks = {}),
            o = a.iScale,
            s = a.vScale,
            l = a.index,
            u = o.axis,
            h = s.axis,
            c = (function (t, e, i) {
              return ""
                .concat(t.id, ".")
                .concat(e.id, ".")
                .concat(i.stack || i.type);
            })(o, s, a),
            f = e.length,
            d = 0;
          d < f;
          ++d
        ) {
          var v = e[d],
            g = v[u],
            p = v[h];
          (((i = (v._stacks || (v._stacks = {}))[h] = P(r, c, g))[l] = p),
            (i._top = C(i, s, !0, a.type)),
            (i._bottom = C(i, s, !1, a.type)));
        }
      }
      function D(t, e) {
        var i = t.scales;
        return Object.keys(i)
          .filter(function (t) {
            return i[t].axis === e;
          })
          .shift();
      }
      function A(t, e) {
        var i = t.controller.index,
          n = t.vScale && t.vScale.axis;
        if (n) {
          e = e || t._parsed;
          var a,
            r = (0, h.Z)(e);
          try {
            for (r.s(); !(a = r.n()).done;) {
              var o = a.value._stacks;
              if (!o || void 0 === o[n] || void 0 === o[n][i]) return;
              delete o[n][i];
            }
          } catch (s) {
            r.e(s);
          } finally {
            r.f();
          }
        }
      }
      var T = function (t) {
          return "reset" === t || "none" === t;
        },
        E = function (t, e) {
          return e ? t : Object.assign({}, t);
        },
        R = (function () {
          function t(e, i) {
            ((0, f.default)(this, t),
              (this.chart = e),
              (this._ctx = e.ctx),
              (this.index = i),
              (this._cachedDataOpts = {}),
              (this._cachedMeta = this.getMeta()),
              (this._type = this._cachedMeta.type),
              (this.options = void 0),
              (this._parsing = !1),
              (this._data = void 0),
              (this._objectData = void 0),
              (this._sharedOptions = void 0),
              (this._drawStart = void 0),
              (this._drawCount = void 0),
              (this.enableOptionSharing = !1),
              (this.supportsDecimation = !1),
              (this.$context = void 0),
              (this._syncList = []),
              this.initialize());
          }
          return (
            (0, d.default)(t, [
              {
                key: "initialize",
                value: function () {
                  var t = this._cachedMeta;
                  (this.configure(),
                    this.linkScales(),
                    (t._stacked = S(t.vScale, t)),
                    this.addElements());
                },
              },
              {
                key: "updateIndex",
                value: function (t) {
                  (this.index !== t && A(this._cachedMeta), (this.index = t));
                },
              },
              {
                key: "linkScales",
                value: function () {
                  var t = this.chart,
                    e = this._cachedMeta,
                    i = this.getDataset(),
                    n = function (t, e, i, n) {
                      return "x" === t ? e : "r" === t ? n : i;
                    },
                    a = (e.xAxisID = (0, v.v)(i.xAxisID, D(t, "x"))),
                    r = (e.yAxisID = (0, v.v)(i.yAxisID, D(t, "y"))),
                    o = (e.rAxisID = (0, v.v)(i.rAxisID, D(t, "r"))),
                    s = e.indexAxis,
                    l = (e.iAxisID = n(s, a, r, o)),
                    u = (e.vAxisID = n(s, r, a, o));
                  ((e.xScale = this.getScaleForId(a)),
                    (e.yScale = this.getScaleForId(r)),
                    (e.rScale = this.getScaleForId(o)),
                    (e.iScale = this.getScaleForId(l)),
                    (e.vScale = this.getScaleForId(u)));
                },
              },
              {
                key: "getDataset",
                value: function () {
                  return this.chart.data.datasets[this.index];
                },
              },
              {
                key: "getMeta",
                value: function () {
                  return this.chart.getDatasetMeta(this.index);
                },
              },
              {
                key: "getScaleForId",
                value: function (t) {
                  return this.chart.scales[t];
                },
              },
              {
                key: "_getOtherScale",
                value: function (t) {
                  var e = this._cachedMeta;
                  return t === e.iScale ? e.vScale : e.iScale;
                },
              },
              {
                key: "reset",
                value: function () {
                  this._update("reset");
                },
              },
              {
                key: "_destroy",
                value: function () {
                  var t = this._cachedMeta;
                  (this._data && (0, v.u)(this._data, this),
                    t._stacked && A(t));
                },
              },
              {
                key: "_dataCheck",
                value: function () {
                  var t = this.getDataset(),
                    e = t.data || (t.data = []),
                    i = this._data;
                  if ((0, v.i)(e))
                    this._data = (function (t) {
                      var e,
                        i,
                        n,
                        a = Object.keys(t),
                        r = new Array(a.length);
                      for (e = 0, i = a.length; e < i; ++e)
                        ((n = a[e]), (r[e] = { x: n, y: t[n] }));
                      return r;
                    })(e);
                  else if (i !== e) {
                    if (i) {
                      (0, v.u)(i, this);
                      var n = this._cachedMeta;
                      (A(n), (n._parsed = []));
                    }
                    (e && Object.isExtensible(e) && (0, v.l)(e, this),
                      (this._syncList = []),
                      (this._data = e));
                  }
                },
              },
              {
                key: "addElements",
                value: function () {
                  var t = this._cachedMeta;
                  (this._dataCheck(),
                    this.datasetElementType &&
                      (t.dataset = new this.datasetElementType()));
                },
              },
              {
                key: "buildOrUpdateElements",
                value: function (t) {
                  var e = this._cachedMeta,
                    i = this.getDataset(),
                    n = !1;
                  this._dataCheck();
                  var a = e._stacked;
                  ((e._stacked = S(e.vScale, e)),
                    e.stack !== i.stack &&
                      ((n = !0), A(e), (e.stack = i.stack)),
                    this._resyncElements(t),
                    (n || a !== e._stacked) && O(this, e._parsed));
                },
              },
              {
                key: "configure",
                value: function () {
                  var t = this.chart.config,
                    e = t.datasetScopeKeys(this._type),
                    i = t.getOptionScopes(this.getDataset(), e, !0);
                  ((this.options = t.createResolver(i, this.getContext())),
                    (this._parsing = this.options.parsing),
                    (this._cachedDataOpts = {}));
                },
              },
              {
                key: "parse",
                value: function (t, e) {
                  var i,
                    n,
                    a,
                    r = this._cachedMeta,
                    o = this._data,
                    s = r.iScale,
                    l = r._stacked,
                    u = s.axis,
                    h = (0 === t && e === o.length) || r._sorted,
                    c = t > 0 && r._parsed[t - 1];
                  if (!1 === this._parsing)
                    ((r._parsed = o), (r._sorted = !0), (a = o));
                  else {
                    a = (0, v.b)(o[t])
                      ? this.parseArrayData(r, o, t, e)
                      : (0, v.i)(o[t])
                        ? this.parseObjectData(r, o, t, e)
                        : this.parsePrimitiveData(r, o, t, e);
                    for (i = 0; i < e; ++i)
                      ((r._parsed[i + t] = n = a[i]),
                        h &&
                          ((null === n[u] || (c && n[u] < c[u])) && (h = !1),
                          (c = n)));
                    r._sorted = h;
                  }
                  l && O(this, a);
                },
              },
              {
                key: "parsePrimitiveData",
                value: function (t, e, i, n) {
                  var a,
                    r,
                    o,
                    s = t.iScale,
                    l = t.vScale,
                    h = s.axis,
                    c = l.axis,
                    f = s.getLabels(),
                    d = s === l,
                    v = new Array(n);
                  for (a = 0, r = n; a < r; ++a) {
                    var g;
                    ((o = a + i),
                      (v[a] =
                        ((g = {}),
                        (0, u.Z)(g, h, d || s.parse(f[o], o)),
                        (0, u.Z)(g, c, l.parse(e[o], o)),
                        g)));
                  }
                  return v;
                },
              },
              {
                key: "parseArrayData",
                value: function (t, e, i, n) {
                  var a,
                    r,
                    o,
                    s,
                    l = t.xScale,
                    u = t.yScale,
                    h = new Array(n);
                  for (a = 0, r = n; a < r; ++a)
                    ((s = e[(o = a + i)]),
                      (h[a] = { x: l.parse(s[0], o), y: u.parse(s[1], o) }));
                  return h;
                },
              },
              {
                key: "parseObjectData",
                value: function (t, e, i, n) {
                  var a,
                    r,
                    o,
                    s,
                    l = t.xScale,
                    u = t.yScale,
                    h = this._parsing,
                    c = h.xAxisKey,
                    f = void 0 === c ? "x" : c,
                    d = h.yAxisKey,
                    g = void 0 === d ? "y" : d,
                    p = new Array(n);
                  for (a = 0, r = n; a < r; ++a)
                    ((s = e[(o = a + i)]),
                      (p[a] = {
                        x: l.parse((0, v.f)(s, f), o),
                        y: u.parse((0, v.f)(s, g), o),
                      }));
                  return p;
                },
              },
              {
                key: "getParsed",
                value: function (t) {
                  return this._cachedMeta._parsed[t];
                },
              },
              {
                key: "getDataElement",
                value: function (t) {
                  return this._cachedMeta.data[t];
                },
              },
              {
                key: "applyStack",
                value: function (t, e, i) {
                  var n = this.chart,
                    a = this._cachedMeta,
                    r = e[t.axis];
                  return M(
                    { keys: w(n, !0), values: e._stacks[t.axis] },
                    r,
                    a.index,
                    { mode: i },
                  );
                },
              },
              {
                key: "updateRangeFromParsed",
                value: function (t, e, i, n) {
                  var a = i[e.axis],
                    r = null === a ? NaN : a,
                    o = n && i._stacks[e.axis];
                  (n &&
                    o &&
                    ((n.values = o), (r = M(n, a, this._cachedMeta.index))),
                    (t.min = Math.min(t.min, r)),
                    (t.max = Math.max(t.max, r)));
                },
              },
              {
                key: "getMinMax",
                value: function (t, e) {
                  var i,
                    n,
                    a = this._cachedMeta,
                    r = a._parsed,
                    o = a._sorted && t === a.iScale,
                    s = r.length,
                    l = this._getOtherScale(t),
                    u = (function (t, e, i) {
                      return (
                        t &&
                        !e.hidden &&
                        e._stacked && { keys: w(i, !0), values: null }
                      );
                    })(e, a, this.chart),
                    h = {
                      min: Number.POSITIVE_INFINITY,
                      max: Number.NEGATIVE_INFINITY,
                    },
                    c = (function (t) {
                      var e = t.getUserBounds(),
                        i = e.min,
                        n = e.max,
                        a = e.minDefined,
                        r = e.maxDefined;
                      return {
                        min: a ? i : Number.NEGATIVE_INFINITY,
                        max: r ? n : Number.POSITIVE_INFINITY,
                      };
                    })(l),
                    f = c.min,
                    d = c.max;
                  function g() {
                    var e = (n = r[i])[l.axis];
                    return !(0, v.g)(n[t.axis]) || f > e || d < e;
                  }
                  for (
                    i = 0;
                    i < s &&
                    (g() || (this.updateRangeFromParsed(h, t, n, u), !o));
                    ++i
                  );
                  if (o)
                    for (i = s - 1; i >= 0; --i)
                      if (!g()) {
                        this.updateRangeFromParsed(h, t, n, u);
                        break;
                      }
                  return h;
                },
              },
              {
                key: "getAllParsedValues",
                value: function (t) {
                  var e,
                    i,
                    n,
                    a = this._cachedMeta._parsed,
                    r = [];
                  for (e = 0, i = a.length; e < i; ++e)
                    ((n = a[e][t.axis]), (0, v.g)(n) && r.push(n));
                  return r;
                },
              },
              {
                key: "getMaxOverflow",
                value: function () {
                  return !1;
                },
              },
              {
                key: "getLabelAndValue",
                value: function (t) {
                  var e = this._cachedMeta,
                    i = e.iScale,
                    n = e.vScale,
                    a = this.getParsed(t);
                  return {
                    label: i ? "" + i.getLabelForValue(a[i.axis]) : "",
                    value: n ? "" + n.getLabelForValue(a[n.axis]) : "",
                  };
                },
              },
              {
                key: "_update",
                value: function (t) {
                  var e = this._cachedMeta;
                  (this.update(t || "default"),
                    (e._clip = (function (t) {
                      var e, i, n, a;
                      return (
                        (0, v.i)(t)
                          ? ((e = t.top),
                            (i = t.right),
                            (n = t.bottom),
                            (a = t.left))
                          : (e = i = n = a = t),
                        {
                          top: e,
                          right: i,
                          bottom: n,
                          left: a,
                          disabled: !1 === t,
                        }
                      );
                    })(
                      (0, v.v)(
                        this.options.clip,
                        (function (t, e, i) {
                          if (!1 === i) return !1;
                          var n = _(t, i),
                            a = _(e, i);
                          return {
                            top: a.end,
                            right: n.end,
                            bottom: a.start,
                            left: n.start,
                          };
                        })(e.xScale, e.yScale, this.getMaxOverflow()),
                      ),
                    )));
                },
              },
              { key: "update", value: function (t) {} },
              {
                key: "draw",
                value: function () {
                  var t,
                    e = this._ctx,
                    i = this.chart,
                    n = this._cachedMeta,
                    a = n.data || [],
                    r = i.chartArea,
                    o = [],
                    s = this._drawStart || 0,
                    l = this._drawCount || a.length - s,
                    u = this.options.drawActiveElementsOnTop;
                  for (
                    n.dataset && n.dataset.draw(e, r, s, l), t = s;
                    t < s + l;
                    ++t
                  ) {
                    var h = a[t];
                    h.hidden || (h.active && u ? o.push(h) : h.draw(e, r));
                  }
                  for (t = 0; t < o.length; ++t) o[t].draw(e, r);
                },
              },
              {
                key: "getStyle",
                value: function (t, e) {
                  var i = e ? "active" : "default";
                  return void 0 === t && this._cachedMeta.dataset
                    ? this.resolveDatasetElementOptions(i)
                    : this.resolveDataElementOptions(t || 0, i);
                },
              },
              {
                key: "getContext",
                value: function (t, e, i) {
                  var n,
                    a = this.getDataset();
                  if (t >= 0 && t < this._cachedMeta.data.length) {
                    var r = this._cachedMeta.data[t];
                    ((n =
                      r.$context ||
                      (r.$context = (function (t, e, i) {
                        return (0, v.h)(t, {
                          active: !1,
                          dataIndex: e,
                          parsed: void 0,
                          raw: void 0,
                          element: i,
                          index: e,
                          mode: "default",
                          type: "data",
                        });
                      })(this.getContext(), t, r))),
                      (n.parsed = this.getParsed(t)),
                      (n.raw = a.data[t]),
                      (n.index = n.dataIndex = t));
                  } else
                    ((n =
                      this.$context ||
                      (this.$context = (function (t, e) {
                        return (0, v.h)(t, {
                          active: !1,
                          dataset: void 0,
                          datasetIndex: e,
                          index: e,
                          mode: "default",
                          type: "dataset",
                        });
                      })(this.chart.getContext(), this.index))),
                      (n.dataset = a),
                      (n.index = n.datasetIndex = this.index));
                  return ((n.active = !!e), (n.mode = i), n);
                },
              },
              {
                key: "resolveDatasetElementOptions",
                value: function (t) {
                  return this._resolveElementOptions(
                    this.datasetElementType.id,
                    t,
                  );
                },
              },
              {
                key: "resolveDataElementOptions",
                value: function (t, e) {
                  return this._resolveElementOptions(
                    this.dataElementType.id,
                    e,
                    t,
                  );
                },
              },
              {
                key: "_resolveElementOptions",
                value: function (t) {
                  var e = this,
                    i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "default",
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    a = "active" === i,
                    r = this._cachedDataOpts,
                    o = t + "-" + i,
                    s = r[o],
                    l = this.enableOptionSharing && (0, v.j)(n);
                  if (s) return E(s, l);
                  var u = this.chart.config,
                    h = u.datasetElementScopeKeys(this._type, t),
                    c = a ? ["".concat(t, "Hover"), "hover", t, ""] : [t, ""],
                    f = u.getOptionScopes(this.getDataset(), h),
                    d = Object.keys(v.d.elements[t]),
                    g = u.resolveNamedOptions(
                      f,
                      d,
                      function () {
                        return e.getContext(n, a);
                      },
                      c,
                    );
                  return (
                    g.$shared &&
                      ((g.$shared = l), (r[o] = Object.freeze(E(g, l)))),
                    g
                  );
                },
              },
              {
                key: "_resolveAnimations",
                value: function (t, e, i) {
                  var n,
                    a = this.chart,
                    r = this._cachedDataOpts,
                    o = "animation-".concat(e),
                    s = r[o];
                  if (s) return s;
                  if (!1 !== a.options.animation) {
                    var l = this.chart.config,
                      u = l.datasetAnimationScopeKeys(this._type, e),
                      h = l.getOptionScopes(this.getDataset(), u);
                    n = l.createResolver(h, this.getContext(t, i, e));
                  }
                  var c = new k(a, n && n.animations);
                  return (n && n._cacheable && (r[o] = Object.freeze(c)), c);
                },
              },
              {
                key: "getSharedOptions",
                value: function (t) {
                  if (t.$shared)
                    return (
                      this._sharedOptions ||
                      (this._sharedOptions = Object.assign({}, t))
                    );
                },
              },
              {
                key: "includeOptions",
                value: function (t, e) {
                  return !e || T(t) || this.chart._animationsDisabled;
                },
              },
              {
                key: "_getSharedOptions",
                value: function (t, e) {
                  var i = this.resolveDataElementOptions(t, e),
                    n = this._sharedOptions,
                    a = this.getSharedOptions(i),
                    r = this.includeOptions(e, a) || a !== n;
                  return (
                    this.updateSharedOptions(a, e, i),
                    { sharedOptions: a, includeOptions: r }
                  );
                },
              },
              {
                key: "updateElement",
                value: function (t, e, i, n) {
                  T(n)
                    ? Object.assign(t, i)
                    : this._resolveAnimations(e, n).update(t, i);
                },
              },
              {
                key: "updateSharedOptions",
                value: function (t, e, i) {
                  t && !T(e) && this._resolveAnimations(void 0, e).update(t, i);
                },
              },
              {
                key: "_setStyle",
                value: function (t, e, i, n) {
                  t.active = n;
                  var a = this.getStyle(e, n);
                  this._resolveAnimations(e, i, n).update(t, {
                    options: (!n && this.getSharedOptions(a)) || a,
                  });
                },
              },
              {
                key: "removeHoverStyle",
                value: function (t, e, i) {
                  this._setStyle(t, i, "active", !1);
                },
              },
              {
                key: "setHoverStyle",
                value: function (t, e, i) {
                  this._setStyle(t, i, "active", !0);
                },
              },
              {
                key: "_removeDatasetHoverStyle",
                value: function () {
                  var t = this._cachedMeta.dataset;
                  t && this._setStyle(t, void 0, "active", !1);
                },
              },
              {
                key: "_setDatasetHoverStyle",
                value: function () {
                  var t = this._cachedMeta.dataset;
                  t && this._setStyle(t, void 0, "active", !0);
                },
              },
              {
                key: "_resyncElements",
                value: function (t) {
                  var e,
                    i = this._data,
                    n = this._cachedMeta.data,
                    a = (0, h.Z)(this._syncList);
                  try {
                    for (a.s(); !(e = a.n()).done;) {
                      var r = (0, l.default)(e.value, 3),
                        o = r[0],
                        s = r[1],
                        u = r[2];
                      this[o](s, u);
                    }
                  } catch (v) {
                    a.e(v);
                  } finally {
                    a.f();
                  }
                  this._syncList = [];
                  var c = n.length,
                    f = i.length,
                    d = Math.min(f, c);
                  (d && this.parse(0, d),
                    f > c
                      ? this._insertElements(c, f - c, t)
                      : f < c && this._removeElements(f, c - f));
                },
              },
              {
                key: "_insertElements",
                value: function (t, e) {
                  var i,
                    n =
                      !(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2],
                    a = this._cachedMeta,
                    r = a.data,
                    o = t + e,
                    s = function (t) {
                      for (t.length += e, i = t.length - 1; i >= o; i--)
                        t[i] = t[i - e];
                    };
                  for (s(r), i = t; i < o; ++i)
                    r[i] = new this.dataElementType();
                  (this._parsing && s(a._parsed),
                    this.parse(t, e),
                    n && this.updateElements(r, t, e, "reset"));
                },
              },
              { key: "updateElements", value: function (t, e, i, n) {} },
              {
                key: "_removeElements",
                value: function (t, e) {
                  var i = this._cachedMeta;
                  if (this._parsing) {
                    var n = i._parsed.splice(t, e);
                    i._stacked && A(i, n);
                  }
                  i.data.splice(t, e);
                },
              },
              {
                key: "_sync",
                value: function (t) {
                  if (this._parsing) this._syncList.push(t);
                  else {
                    var e = (0, l.default)(t, 3),
                      i = e[0],
                      n = e[1],
                      a = e[2];
                    this[i](n, a);
                  }
                  this.chart._dataChanges.push(
                    [this.index].concat((0, c.Z)(t)),
                  );
                },
              },
              {
                key: "_onDataPush",
                value: function () {
                  var t = arguments.length;
                  this._sync([
                    "_insertElements",
                    this.getDataset().data.length - t,
                    t,
                  ]);
                },
              },
              {
                key: "_onDataPop",
                value: function () {
                  this._sync([
                    "_removeElements",
                    this._cachedMeta.data.length - 1,
                    1,
                  ]);
                },
              },
              {
                key: "_onDataShift",
                value: function () {
                  this._sync(["_removeElements", 0, 1]);
                },
              },
              {
                key: "_onDataSplice",
                value: function (t, e) {
                  e && this._sync(["_removeElements", t, e]);
                  var i = arguments.length - 2;
                  i && this._sync(["_insertElements", t, i]);
                },
              },
              {
                key: "_onDataUnshift",
                value: function () {
                  this._sync(["_insertElements", 0, arguments.length]);
                },
              },
            ]),
            t
          );
        })();
      function L(t) {
        var e,
          i,
          n,
          a,
          r = t.iScale,
          o = (function (t, e) {
            if (!t._cache.$bar) {
              for (
                var i = t.getMatchingVisibleMetas(e),
                  n = [],
                  a = 0,
                  r = i.length;
                a < r;
                a++
              )
                n = n.concat(i[a].controller.getAllParsedValues(t));
              t._cache.$bar = (0, v._)(
                n.sort(function (t, e) {
                  return t - e;
                }),
              );
            }
            return t._cache.$bar;
          })(r, t.type),
          s = r._length,
          l = function () {
            32767 !== n &&
              -32768 !== n &&
              ((0, v.j)(a) && (s = Math.min(s, Math.abs(n - a) || s)), (a = n));
          };
        for (e = 0, i = o.length; e < i; ++e)
          ((n = r.getPixelForValue(o[e])), l());
        for (a = void 0, e = 0, i = r.ticks.length; e < i; ++e)
          ((n = r.getPixelForTick(e)), l());
        return s;
      }
      function I(t, e, i, n) {
        return (
          (0, v.b)(t)
            ? (function (t, e, i, n) {
                var a = i.parse(t[0], n),
                  r = i.parse(t[1], n),
                  o = Math.min(a, r),
                  s = Math.max(a, r),
                  l = o,
                  u = s;
                (Math.abs(o) > Math.abs(s) && ((l = s), (u = o)),
                  (e[i.axis] = u),
                  (e._custom = {
                    barStart: l,
                    barEnd: u,
                    start: a,
                    end: r,
                    min: o,
                    max: s,
                  }));
              })(t, e, i, n)
            : (e[i.axis] = i.parse(t, n)),
          e
        );
      }
      function F(t, e, i, n) {
        var a,
          r,
          o,
          s,
          l = t.iScale,
          u = t.vScale,
          h = l.getLabels(),
          c = l === u,
          f = [];
        for (a = i, r = i + n; a < r; ++a)
          ((s = e[a]),
            ((o = {})[l.axis] = c || l.parse(h[a], a)),
            f.push(I(s, o, u, a)));
        return f;
      }
      function z(t) {
        return t && void 0 !== t.barStart && void 0 !== t.barEnd;
      }
      function V(t, e, i, n) {
        var a = e.borderSkipped,
          r = {};
        if (a)
          if (!0 !== a) {
            var o = (function (t) {
                var e, i, n, a, r;
                return (
                  t.horizontal
                    ? ((e = t.base > t.x), (i = "left"), (n = "right"))
                    : ((e = t.base < t.y), (i = "bottom"), (n = "top")),
                  e
                    ? ((a = "end"), (r = "start"))
                    : ((a = "start"), (r = "end")),
                  { start: i, end: n, reverse: e, top: a, bottom: r }
                );
              })(t),
              s = o.start,
              l = o.end,
              u = o.reverse,
              h = o.top,
              c = o.bottom;
            ("middle" === a &&
              i &&
              ((t.enableBorderRadius = !0),
              (i._top || 0) === n
                ? (a = h)
                : (i._bottom || 0) === n
                  ? (a = c)
                  : ((r[j(c, s, l, u)] = !0), (a = h))),
              (r[j(a, s, l, u)] = !0),
              (t.borderSkipped = r));
          } else t.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
        else t.borderSkipped = r;
      }
      function j(t, e, i, n) {
        var a, r, o;
        return (
          n
            ? ((o = i),
              (t = W((t = (a = t) === (r = e) ? o : a === o ? r : a), i, e)))
            : (t = W(t, e, i)),
          t
        );
      }
      function W(t, e, i) {
        return "start" === t ? e : "end" === t ? i : t;
      }
      function N(t, e, i) {
        var n = e.inflateAmount;
        t.inflateAmount = "auto" === n ? (1 === i ? 0.33 : 0) : n;
      }
      ((R.defaults = {}),
        (R.prototype.datasetElementType = null),
        (R.prototype.dataElementType = null));
      var B = (function (t) {
        (0, o.default)(i, t);
        var e = (0, s.default)(i);
        function i() {
          return ((0, f.default)(this, i), e.apply(this, arguments));
        }
        return (
          (0, d.default)(i, [
            {
              key: "parsePrimitiveData",
              value: function (t, e, i, n) {
                return F(t, e, i, n);
              },
            },
            {
              key: "parseArrayData",
              value: function (t, e, i, n) {
                return F(t, e, i, n);
              },
            },
            {
              key: "parseObjectData",
              value: function (t, e, i, n) {
                var a,
                  r,
                  o,
                  s,
                  l = t.iScale,
                  u = t.vScale,
                  h = this._parsing,
                  c = h.xAxisKey,
                  f = void 0 === c ? "x" : c,
                  d = h.yAxisKey,
                  g = void 0 === d ? "y" : d,
                  p = "x" === l.axis ? f : g,
                  y = "x" === u.axis ? f : g,
                  b = [];
                for (a = i, r = i + n; a < r; ++a)
                  ((s = e[a]),
                    ((o = {})[l.axis] = l.parse((0, v.f)(s, p), a)),
                    b.push(I((0, v.f)(s, y), o, u, a)));
                return b;
              },
            },
            {
              key: "updateRangeFromParsed",
              value: function (t, e, n, o) {
                r((0, a.Z)(i.prototype), "updateRangeFromParsed", this).call(
                  this,
                  t,
                  e,
                  n,
                  o,
                );
                var s = n._custom;
                s &&
                  e === this._cachedMeta.vScale &&
                  ((t.min = Math.min(t.min, s.min)),
                  (t.max = Math.max(t.max, s.max)));
              },
            },
            {
              key: "getMaxOverflow",
              value: function () {
                return 0;
              },
            },
            {
              key: "getLabelAndValue",
              value: function (t) {
                var e = this._cachedMeta,
                  i = e.iScale,
                  n = e.vScale,
                  a = this.getParsed(t),
                  r = a._custom,
                  o = z(r)
                    ? "[" + r.start + ", " + r.end + "]"
                    : "" + n.getLabelForValue(a[n.axis]);
                return { label: "" + i.getLabelForValue(a[i.axis]), value: o };
              },
            },
            {
              key: "initialize",
              value: function () {
                ((this.enableOptionSharing = !0),
                  r((0, a.Z)(i.prototype), "initialize", this).call(this),
                  (this._cachedMeta.stack = this.getDataset().stack));
              },
            },
            {
              key: "update",
              value: function (t) {
                var e = this._cachedMeta;
                this.updateElements(e.data, 0, e.data.length, t);
              },
            },
            {
              key: "updateElements",
              value: function (t, e, i, n) {
                for (
                  var a = "reset" === n,
                    r = this.index,
                    o = this._cachedMeta.vScale,
                    s = o.getBasePixel(),
                    l = o.isHorizontal(),
                    u = this._getRuler(),
                    h = this._getSharedOptions(e, n),
                    c = h.sharedOptions,
                    f = h.includeOptions,
                    d = e;
                  d < e + i;
                  d++
                ) {
                  var g = this.getParsed(d),
                    p =
                      a || (0, v.k)(g[o.axis])
                        ? { base: s, head: s }
                        : this._calculateBarValuePixels(d),
                    y = this._calculateBarIndexPixels(d, u),
                    b = (g._stacks || {})[o.axis],
                    m = {
                      horizontal: l,
                      base: p.base,
                      enableBorderRadius:
                        !b || z(g._custom) || r === b._top || r === b._bottom,
                      x: l ? p.head : y.center,
                      y: l ? y.center : p.head,
                      height: l ? y.size : Math.abs(p.size),
                      width: l ? Math.abs(p.size) : y.size,
                    };
                  f &&
                    (m.options =
                      c ||
                      this.resolveDataElementOptions(
                        d,
                        t[d].active ? "active" : n,
                      ));
                  var x = m.options || t[d].options;
                  (V(m, x, b, r),
                    N(m, x, u.ratio),
                    this.updateElement(t[d], d, m, n));
                }
              },
            },
            {
              key: "_getStacks",
              value: function (t, e) {
                var i,
                  n = this._cachedMeta.iScale,
                  a = n
                    .getMatchingVisibleMetas(this._type)
                    .filter(function (t) {
                      return t.controller.options.grouped;
                    }),
                  r = n.options.stacked,
                  o = [],
                  s = function (t) {
                    var i = t.controller.getParsed(e),
                      n = i && i[t.vScale.axis];
                    if ((0, v.k)(n) || isNaN(n)) return !0;
                  },
                  l = (0, h.Z)(a);
                try {
                  for (l.s(); !(i = l.n()).done;) {
                    var u = i.value;
                    if (
                      (void 0 === e || !s(u)) &&
                      ((!1 === r ||
                        -1 === o.indexOf(u.stack) ||
                        (void 0 === r && void 0 === u.stack)) &&
                        o.push(u.stack),
                      u.index === t)
                    )
                      break;
                  }
                } catch (c) {
                  l.e(c);
                } finally {
                  l.f();
                }
                return (o.length || o.push(void 0), o);
              },
            },
            {
              key: "_getStackCount",
              value: function (t) {
                return this._getStacks(void 0, t).length;
              },
            },
            {
              key: "_getStackIndex",
              value: function (t, e, i) {
                var n = this._getStacks(t, i),
                  a = void 0 !== e ? n.indexOf(e) : -1;
                return -1 === a ? n.length - 1 : a;
              },
            },
            {
              key: "_getRuler",
              value: function () {
                var t,
                  e,
                  i = this.options,
                  n = this._cachedMeta,
                  a = n.iScale,
                  r = [];
                for (t = 0, e = n.data.length; t < e; ++t)
                  r.push(a.getPixelForValue(this.getParsed(t)[a.axis], t));
                var o = i.barThickness;
                return {
                  min: o || L(n),
                  pixels: r,
                  start: a._startPixel,
                  end: a._endPixel,
                  stackCount: this._getStackCount(),
                  scale: a,
                  grouped: i.grouped,
                  ratio: o ? 1 : i.categoryPercentage * i.barPercentage,
                };
              },
            },
            {
              key: "_calculateBarValuePixels",
              value: function (t) {
                var e,
                  i,
                  n = this._cachedMeta,
                  a = n.vScale,
                  r = n._stacked,
                  o = this.options,
                  s = o.base,
                  l = o.minBarLength,
                  u = s || 0,
                  h = this.getParsed(t),
                  c = h._custom,
                  f = z(c),
                  d = h[a.axis],
                  g = 0,
                  p = r ? this.applyStack(a, h, r) : d;
                (p !== d && ((g = p - d), (p = d)),
                  f &&
                    ((d = c.barStart),
                    (p = c.barEnd - c.barStart),
                    0 !== d && (0, v.s)(d) !== (0, v.s)(c.barEnd) && (g = 0),
                    (g += d)));
                var y = (0, v.k)(s) || f ? g : s,
                  b = a.getPixelForValue(y);
                if (
                  ((i =
                    (e = this.chart.getDataVisibility(t)
                      ? a.getPixelForValue(g + p)
                      : b) - b),
                  Math.abs(i) < l)
                ) {
                  ((i =
                    (function (t, e, i) {
                      return 0 !== t
                        ? (0, v.s)(t)
                        : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1);
                    })(i, a, u) * l),
                    d === u && (b -= i / 2));
                  var m = a.getPixelForDecimal(0),
                    x = a.getPixelForDecimal(1),
                    k = Math.min(m, x),
                    _ = Math.max(m, x);
                  e = (b = Math.max(Math.min(b, _), k)) + i;
                }
                if (b === a.getPixelForValue(u)) {
                  var w = ((0, v.s)(i) * a.getLineWidthForValue(u)) / 2;
                  ((b += w), (i -= w));
                }
                return { size: i, base: b, head: e, center: e + i / 2 };
              },
            },
            {
              key: "_calculateBarIndexPixels",
              value: function (t, e) {
                var i,
                  n,
                  a = e.scale,
                  r = this.options,
                  o = r.skipNull,
                  s = (0, v.v)(r.maxBarThickness, 1 / 0);
                if (e.grouped) {
                  var l = o ? this._getStackCount(t) : e.stackCount,
                    u =
                      "flex" === r.barThickness
                        ? (function (t, e, i, n) {
                            var a = e.pixels,
                              r = a[t],
                              o = t > 0 ? a[t - 1] : null,
                              s = t < a.length - 1 ? a[t + 1] : null,
                              l = i.categoryPercentage;
                            (null === o &&
                              (o = r - (null === s ? e.end - e.start : s - r)),
                              null === s && (s = r + r - o));
                            var u = r - ((r - Math.min(o, s)) / 2) * l;
                            return {
                              chunk: ((Math.abs(s - o) / 2) * l) / n,
                              ratio: i.barPercentage,
                              start: u,
                            };
                          })(t, e, r, l)
                        : (function (t, e, i, n) {
                            var a,
                              r,
                              o = i.barThickness;
                            return (
                              (0, v.k)(o)
                                ? ((a = e.min * i.categoryPercentage),
                                  (r = i.barPercentage))
                                : ((a = o * n), (r = 1)),
                              {
                                chunk: a / n,
                                ratio: r,
                                start: e.pixels[t] - a / 2,
                              }
                            );
                          })(t, e, r, l),
                    h = this._getStackIndex(
                      this.index,
                      this._cachedMeta.stack,
                      o ? t : void 0,
                    );
                  ((i = u.start + u.chunk * h + u.chunk / 2),
                    (n = Math.min(s, u.chunk * u.ratio)));
                } else
                  ((i = a.getPixelForValue(this.getParsed(t)[a.axis], t)),
                    (n = Math.min(s, e.min * e.ratio)));
                return { base: i - n / 2, head: i + n / 2, center: i, size: n };
              },
            },
            {
              key: "draw",
              value: function () {
                for (
                  var t = this._cachedMeta,
                    e = t.vScale,
                    i = t.data,
                    n = i.length,
                    a = 0;
                  a < n;
                  ++a
                )
                  null !== this.getParsed(a)[e.axis] && i[a].draw(this._ctx);
              },
            },
          ]),
          i
        );
      })(R);
      ((B.id = "bar"),
        (B.defaults = {
          datasetElementType: !1,
          dataElementType: "bar",
          categoryPercentage: 0.8,
          barPercentage: 0.9,
          grouped: !0,
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "base", "width", "height"],
            },
          },
        }),
        (B.overrides = {
          scales: {
            _index_: { type: "category", offset: !0, grid: { offset: !0 } },
            _value_: { type: "linear", beginAtZero: !0 },
          },
        }));
      var H = (function (t) {
        (0, o.default)(i, t);
        var e = (0, s.default)(i);
        function i() {
          return ((0, f.default)(this, i), e.apply(this, arguments));
        }
        return (
          (0, d.default)(i, [
            {
              key: "initialize",
              value: function () {
                ((this.enableOptionSharing = !0),
                  r((0, a.Z)(i.prototype), "initialize", this).call(this));
              },
            },
            {
              key: "parsePrimitiveData",
              value: function (t, e, n, o) {
                for (
                  var s = r(
                      (0, a.Z)(i.prototype),
                      "parsePrimitiveData",
                      this,
                    ).call(this, t, e, n, o),
                    l = 0;
                  l < s.length;
                  l++
                )
                  s[l]._custom = this.resolveDataElementOptions(l + n).radius;
                return s;
              },
            },
            {
              key: "parseArrayData",
              value: function (t, e, n, o) {
                for (
                  var s = r((0, a.Z)(i.prototype), "parseArrayData", this).call(
                      this,
                      t,
                      e,
                      n,
                      o,
                    ),
                    l = 0;
                  l < s.length;
                  l++
                ) {
                  var u = e[n + l];
                  s[l]._custom = (0, v.v)(
                    u[2],
                    this.resolveDataElementOptions(l + n).radius,
                  );
                }
                return s;
              },
            },
            {
              key: "parseObjectData",
              value: function (t, e, n, o) {
                for (
                  var s = r(
                      (0, a.Z)(i.prototype),
                      "parseObjectData",
                      this,
                    ).call(this, t, e, n, o),
                    l = 0;
                  l < s.length;
                  l++
                ) {
                  var u = e[n + l];
                  s[l]._custom = (0, v.v)(
                    u && u.r && +u.r,
                    this.resolveDataElementOptions(l + n).radius,
                  );
                }
                return s;
              },
            },
            {
              key: "getMaxOverflow",
              value: function () {
                for (
                  var t = this._cachedMeta.data, e = 0, i = t.length - 1;
                  i >= 0;
                  --i
                )
                  e = Math.max(
                    e,
                    t[i].size(this.resolveDataElementOptions(i)) / 2,
                  );
                return e > 0 && e;
              },
            },
            {
              key: "getLabelAndValue",
              value: function (t) {
                var e = this._cachedMeta,
                  i = e.xScale,
                  n = e.yScale,
                  a = this.getParsed(t),
                  r = i.getLabelForValue(a.x),
                  o = n.getLabelForValue(a.y),
                  s = a._custom;
                return {
                  label: e.label,
                  value: "(" + r + ", " + o + (s ? ", " + s : "") + ")",
                };
              },
            },
            {
              key: "update",
              value: function (t) {
                var e = this._cachedMeta.data;
                this.updateElements(e, 0, e.length, t);
              },
            },
            {
              key: "updateElements",
              value: function (t, e, i, n) {
                for (
                  var a = "reset" === n,
                    r = this._cachedMeta,
                    o = r.iScale,
                    s = r.vScale,
                    l = this._getSharedOptions(e, n),
                    u = l.sharedOptions,
                    h = l.includeOptions,
                    c = o.axis,
                    f = s.axis,
                    d = e;
                  d < e + i;
                  d++
                ) {
                  var v = t[d],
                    g = !a && this.getParsed(d),
                    p = {},
                    y = (p[c] = a
                      ? o.getPixelForDecimal(0.5)
                      : o.getPixelForValue(g[c])),
                    b = (p[f] = a
                      ? s.getBasePixel()
                      : s.getPixelForValue(g[f]));
                  ((p.skip = isNaN(y) || isNaN(b)),
                    h &&
                      ((p.options =
                        u ||
                        this.resolveDataElementOptions(
                          d,
                          v.active ? "active" : n,
                        )),
                      a && (p.options.radius = 0)),
                    this.updateElement(v, d, p, n));
                }
              },
            },
            {
              key: "resolveDataElementOptions",
              value: function (t, e) {
                var n = this.getParsed(t),
                  o = r(
                    (0, a.Z)(i.prototype),
                    "resolveDataElementOptions",
                    this,
                  ).call(this, t, e);
                o.$shared && (o = Object.assign({}, o, { $shared: !1 }));
                var s = o.radius;
                return (
                  "active" !== e && (o.radius = 0),
                  (o.radius += (0, v.v)(n && n._custom, s)),
                  o
                );
              },
            },
          ]),
          i
        );
      })(R);
      ((H.id = "bubble"),
        (H.defaults = {
          datasetElementType: !1,
          dataElementType: "point",
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "borderWidth", "radius"],
            },
          },
        }),
        (H.overrides = {
          scales: { x: { type: "linear" }, y: { type: "linear" } },
          plugins: {
            tooltip: {
              callbacks: {
                title: function () {
                  return "";
                },
              },
            },
          },
        }));
      var Y = (function (t) {
        (0, o.default)(i, t);
        var e = (0, s.default)(i);
        function i(t, n) {
          var a;
          return (
            (0, f.default)(this, i),
            ((a = e.call(this, t, n)).enableOptionSharing = !0),
            (a.innerRadius = void 0),
            (a.outerRadius = void 0),
            (a.offsetX = void 0),
            (a.offsetY = void 0),
            a
          );
        }
        return (
          (0, d.default)(i, [
            { key: "linkScales", value: function () {} },
            {
              key: "parse",
              value: function (t, e) {
                var i = this.getDataset().data,
                  n = this._cachedMeta;
                if (!1 === this._parsing) n._parsed = i;
                else {
                  var a,
                    r,
                    o = function (t) {
                      return +i[t];
                    };
                  if ((0, v.i)(i[t])) {
                    var s = this._parsing.key,
                      l = void 0 === s ? "value" : s;
                    o = function (t) {
                      return +(0, v.f)(i[t], l);
                    };
                  }
                  for (a = t, r = t + e; a < r; ++a) n._parsed[a] = o(a);
                }
              },
            },
            {
              key: "_getRotation",
              value: function () {
                return (0, v.t)(this.options.rotation - 90);
              },
            },
            {
              key: "_getCircumference",
              value: function () {
                return (0, v.t)(this.options.circumference);
              },
            },
            {
              key: "_getRotationExtents",
              value: function () {
                for (
                  var t = v.T, e = -v.T, i = 0;
                  i < this.chart.data.datasets.length;
                  ++i
                )
                  if (this.chart.isDatasetVisible(i)) {
                    var n = this.chart.getDatasetMeta(i).controller,
                      a = n._getRotation(),
                      r = n._getCircumference();
                    ((t = Math.min(t, a)), (e = Math.max(e, a + r)));
                  }
                return { rotation: t, circumference: e - t };
              },
            },
            {
              key: "update",
              value: function (t) {
                var e = this.chart.chartArea,
                  i = this._cachedMeta,
                  n = i.data,
                  a =
                    this.getMaxBorderWidth() +
                    this.getMaxOffset(n) +
                    this.options.spacing,
                  r = Math.max((Math.min(e.width, e.height) - a) / 2, 0),
                  o = Math.min((0, v.m)(this.options.cutout, r), 1),
                  s = this._getRingWeight(this.index),
                  l = this._getRotationExtents(),
                  u = l.circumference,
                  h = (function (t, e, i) {
                    var n = 1,
                      a = 1,
                      r = 0,
                      o = 0;
                    if (e < v.T) {
                      var s = t,
                        l = s + e,
                        u = Math.cos(s),
                        h = Math.sin(s),
                        c = Math.cos(l),
                        f = Math.sin(l),
                        d = function (t, e, n) {
                          return (0, v.p)(t, s, l, !0)
                            ? 1
                            : Math.max(e, e * i, n, n * i);
                        },
                        g = function (t, e, n) {
                          return (0, v.p)(t, s, l, !0)
                            ? -1
                            : Math.min(e, e * i, n, n * i);
                        },
                        p = d(0, u, c),
                        y = d(v.H, h, f),
                        b = g(v.P, u, c),
                        m = g(v.P + v.H, h, f);
                      ((n = (p - b) / 2),
                        (a = (y - m) / 2),
                        (r = -(p + b) / 2),
                        (o = -(y + m) / 2));
                    }
                    return { ratioX: n, ratioY: a, offsetX: r, offsetY: o };
                  })(l.rotation, u, o),
                  c = h.ratioX,
                  f = h.ratioY,
                  d = h.offsetX,
                  g = h.offsetY,
                  p = (e.width - a) / c,
                  y = (e.height - a) / f,
                  b = Math.max(Math.min(p, y) / 2, 0),
                  m = (0, v.n)(this.options.radius, b),
                  x =
                    (m - Math.max(m * o, 0)) /
                    this._getVisibleDatasetWeightTotal();
                ((this.offsetX = d * m),
                  (this.offsetY = g * m),
                  (i.total = this.calculateTotal()),
                  (this.outerRadius =
                    m - x * this._getRingWeightOffset(this.index)),
                  (this.innerRadius = Math.max(this.outerRadius - x * s, 0)),
                  this.updateElements(n, 0, n.length, t));
              },
            },
            {
              key: "_circumference",
              value: function (t, e) {
                var i = this.options,
                  n = this._cachedMeta,
                  a = this._getCircumference();
                return (e && i.animation.animateRotate) ||
                  !this.chart.getDataVisibility(t) ||
                  null === n._parsed[t] ||
                  n.data[t].hidden
                  ? 0
                  : this.calculateCircumference((n._parsed[t] * a) / v.T);
              },
            },
            {
              key: "updateElements",
              value: function (t, e, i, n) {
                var a,
                  r = "reset" === n,
                  o = this.chart,
                  s = o.chartArea,
                  l = o.options.animation,
                  u = (s.left + s.right) / 2,
                  h = (s.top + s.bottom) / 2,
                  c = r && l.animateScale,
                  f = c ? 0 : this.innerRadius,
                  d = c ? 0 : this.outerRadius,
                  v = this._getSharedOptions(e, n),
                  g = v.sharedOptions,
                  p = v.includeOptions,
                  y = this._getRotation();
                for (a = 0; a < e; ++a) y += this._circumference(a, r);
                for (a = e; a < e + i; ++a) {
                  var b = this._circumference(a, r),
                    m = t[a],
                    x = {
                      x: u + this.offsetX,
                      y: h + this.offsetY,
                      startAngle: y,
                      endAngle: y + b,
                      circumference: b,
                      outerRadius: d,
                      innerRadius: f,
                    };
                  (p &&
                    (x.options =
                      g ||
                      this.resolveDataElementOptions(
                        a,
                        m.active ? "active" : n,
                      )),
                    (y += b),
                    this.updateElement(m, a, x, n));
                }
              },
            },
            {
              key: "calculateTotal",
              value: function () {
                var t,
                  e = this._cachedMeta,
                  i = e.data,
                  n = 0;
                for (t = 0; t < i.length; t++) {
                  var a = e._parsed[t];
                  null === a ||
                    isNaN(a) ||
                    !this.chart.getDataVisibility(t) ||
                    i[t].hidden ||
                    (n += Math.abs(a));
                }
                return n;
              },
            },
            {
              key: "calculateCircumference",
              value: function (t) {
                var e = this._cachedMeta.total;
                return e > 0 && !isNaN(t) ? v.T * (Math.abs(t) / e) : 0;
              },
            },
            {
              key: "getLabelAndValue",
              value: function (t) {
                var e = this._cachedMeta,
                  i = this.chart,
                  n = i.data.labels || [],
                  a = (0, v.o)(e._parsed[t], i.options.locale);
                return { label: n[t] || "", value: a };
              },
            },
            {
              key: "getMaxBorderWidth",
              value: function (t) {
                var e,
                  i,
                  n,
                  a,
                  r,
                  o = 0,
                  s = this.chart;
                if (!t)
                  for (e = 0, i = s.data.datasets.length; e < i; ++e)
                    if (s.isDatasetVisible(e)) {
                      ((t = (n = s.getDatasetMeta(e)).data),
                        (a = n.controller));
                      break;
                    }
                if (!t) return 0;
                for (e = 0, i = t.length; e < i; ++e)
                  "inner" !==
                    (r = a.resolveDataElementOptions(e)).borderAlign &&
                    (o = Math.max(
                      o,
                      r.borderWidth || 0,
                      r.hoverBorderWidth || 0,
                    ));
                return o;
              },
            },
            {
              key: "getMaxOffset",
              value: function (t) {
                for (var e = 0, i = 0, n = t.length; i < n; ++i) {
                  var a = this.resolveDataElementOptions(i);
                  e = Math.max(e, a.offset || 0, a.hoverOffset || 0);
                }
                return e;
              },
            },
            {
              key: "_getRingWeightOffset",
              value: function (t) {
                for (var e = 0, i = 0; i < t; ++i)
                  this.chart.isDatasetVisible(i) &&
                    (e += this._getRingWeight(i));
                return e;
              },
            },
            {
              key: "_getRingWeight",
              value: function (t) {
                return Math.max(
                  (0, v.v)(this.chart.data.datasets[t].weight, 1),
                  0,
                );
              },
            },
            {
              key: "_getVisibleDatasetWeightTotal",
              value: function () {
                return (
                  this._getRingWeightOffset(this.chart.data.datasets.length) ||
                  1
                );
              },
            },
          ]),
          i
        );
      })(R);
      ((Y.id = "doughnut"),
        (Y.defaults = {
          datasetElementType: !1,
          dataElementType: "arc",
          animation: { animateRotate: !0, animateScale: !1 },
          animations: {
            numbers: {
              type: "number",
              properties: [
                "circumference",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "startAngle",
                "x",
                "y",
                "offset",
                "borderWidth",
                "spacing",
              ],
            },
          },
          cutout: "50%",
          rotation: 0,
          circumference: 360,
          radius: "100%",
          spacing: 0,
          indexAxis: "r",
        }),
        (Y.descriptors = {
          _scriptable: function (t) {
            return "spacing" !== t;
          },
          _indexable: function (t) {
            return "spacing" !== t;
          },
        }),
        (Y.overrides = {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels: function (t) {
                  var e = t.data;
                  if (e.labels.length && e.datasets.length) {
                    var i = t.legend.options.labels.pointStyle;
                    return e.labels.map(function (e, n) {
                      var a = t.getDatasetMeta(0).controller.getStyle(n);
                      return {
                        text: e,
                        fillStyle: a.backgroundColor,
                        strokeStyle: a.borderColor,
                        lineWidth: a.borderWidth,
                        pointStyle: i,
                        hidden: !t.getDataVisibility(n),
                        index: n,
                      };
                    });
                  }
                  return [];
                },
              },
              onClick: function (t, e, i) {
                (i.chart.toggleDataVisibility(e.index), i.chart.update());
              },
            },
            tooltip: {
              callbacks: {
                title: function () {
                  return "";
                },
                label: function (t) {
                  var e = t.label,
                    i = ": " + t.formattedValue;
                  return (
                    (0, v.b)(e) ? ((e = e.slice())[0] += i) : (e += i),
                    e
                  );
                },
              },
            },
          },
        }));
      var Z = (function (t) {
        (0, o.default)(i, t);
        var e = (0, s.default)(i);
        function i() {
          return ((0, f.default)(this, i), e.apply(this, arguments));
        }
        return (
          (0, d.default)(i, [
            {
              key: "initialize",
              value: function () {
                ((this.enableOptionSharing = !0),
                  (this.supportsDecimation = !0),
                  r((0, a.Z)(i.prototype), "initialize", this).call(this));
              },
            },
            {
              key: "update",
              value: function (t) {
                var e = this._cachedMeta,
                  i = e.dataset,
                  n = e.data,
                  a = void 0 === n ? [] : n,
                  r = e._dataset,
                  o = this.chart._animationsDisabled,
                  s = (0, v.q)(e, a, o),
                  l = s.start,
                  u = s.count;
                ((this._drawStart = l),
                  (this._drawCount = u),
                  (0, v.w)(e) && ((l = 0), (u = a.length)),
                  (i._chart = this.chart),
                  (i._datasetIndex = this.index),
                  (i._decimated = !!r._decimated),
                  (i.points = a));
                var h = this.resolveDatasetElementOptions(t);
                (this.options.showLine || (h.borderWidth = 0),
                  (h.segment = this.options.segment),
                  this.updateElement(
                    i,
                    void 0,
                    { animated: !o, options: h },
                    t,
                  ),
                  this.updateElements(a, l, u, t));
              },
            },
            {
              key: "updateElements",
              value: function (t, e, i, n) {
                for (
                  var a = "reset" === n,
                    r = this._cachedMeta,
                    o = r.iScale,
                    s = r.vScale,
                    l = r._stacked,
                    u = r._dataset,
                    h = this._getSharedOptions(e, n),
                    c = h.sharedOptions,
                    f = h.includeOptions,
                    d = o.axis,
                    g = s.axis,
                    p = this.options,
                    y = p.spanGaps,
                    b = p.segment,
                    m = (0, v.x)(y) ? y : Number.POSITIVE_INFINITY,
                    x = this.chart._animationsDisabled || a || "none" === n,
                    k = e > 0 && this.getParsed(e - 1),
                    _ = e;
                  _ < e + i;
                  ++_
                ) {
                  var w = t[_],
                    M = this.getParsed(_),
                    S = x ? w : {},
                    P = (0, v.k)(M[g]),
                    C = (S[d] = o.getPixelForValue(M[d], _)),
                    O = (S[g] =
                      a || P
                        ? s.getBasePixel()
                        : s.getPixelForValue(
                            l ? this.applyStack(s, M, l) : M[g],
                            _,
                          ));
                  ((S.skip = isNaN(C) || isNaN(O) || P),
                    (S.stop = _ > 0 && Math.abs(M[d] - k[d]) > m),
                    b && ((S.parsed = M), (S.raw = u.data[_])),
                    f &&
                      (S.options =
                        c ||
                        this.resolveDataElementOptions(
                          _,
                          w.active ? "active" : n,
                        )),
                    x || this.updateElement(w, _, S, n),
                    (k = M));
                }
              },
            },
            {
              key: "getMaxOverflow",
              value: function () {
                var t = this._cachedMeta,
                  e = t.dataset,
                  i = (e.options && e.options.borderWidth) || 0,
                  n = t.data || [];
                if (!n.length) return i;
                var a = n[0].size(this.resolveDataElementOptions(0)),
                  r = n[n.length - 1].size(
                    this.resolveDataElementOptions(n.length - 1),
                  );
                return Math.max(i, a, r) / 2;
              },
            },
            {
              key: "draw",
              value: function () {
                var t = this._cachedMeta;
                (t.dataset.updateControlPoints(
                  this.chart.chartArea,
                  t.iScale.axis,
                ),
                  r((0, a.Z)(i.prototype), "draw", this).call(this));
              },
            },
          ]),
          i
        );
      })(R);
      ((Z.id = "line"),
        (Z.defaults = {
          datasetElementType: "line",
          dataElementType: "point",
          showLine: !0,
          spanGaps: !1,
        }),
        (Z.overrides = {
          scales: {
            _index_: { type: "category" },
            _value_: { type: "linear" },
          },
        }));
      var X = (function (t) {
        (0, o.default)(i, t);
        var e = (0, s.default)(i);
        function i(t, n) {
          var a;
          return (
            (0, f.default)(this, i),
            ((a = e.call(this, t, n)).innerRadius = void 0),
            (a.outerRadius = void 0),
            a
          );
        }
        return (
          (0, d.default)(i, [
            {
              key: "getLabelAndValue",
              value: function (t) {
                var e = this._cachedMeta,
                  i = this.chart,
                  n = i.data.labels || [],
                  a = (0, v.o)(e._parsed[t].r, i.options.locale);
                return { label: n[t] || "", value: a };
              },
            },
            {
              key: "parseObjectData",
              value: function (t, e, i, n) {
                return v.y.bind(this)(t, e, i, n);
              },
            },
            {
              key: "update",
              value: function (t) {
                var e = this._cachedMeta.data;
                (this._updateRadius(), this.updateElements(e, 0, e.length, t));
              },
            },
            {
              key: "getMinMax",
              value: function () {
                var t = this,
                  e = this._cachedMeta,
                  i = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY,
                  };
                return (
                  e.data.forEach(function (e, n) {
                    var a = t.getParsed(n).r;
                    !isNaN(a) &&
                      t.chart.getDataVisibility(n) &&
                      (a < i.min && (i.min = a), a > i.max && (i.max = a));
                  }),
                  i
                );
              },
            },
            {
              key: "_updateRadius",
              value: function () {
                var t = this.chart,
                  e = t.chartArea,
                  i = t.options,
                  n = Math.min(e.right - e.left, e.bottom - e.top),
                  a = Math.max(n / 2, 0),
                  r =
                    (a -
                      Math.max(
                        i.cutoutPercentage ? (a / 100) * i.cutoutPercentage : 1,
                        0,
                      )) /
                    t.getVisibleDatasetCount();
                ((this.outerRadius = a - r * this.index),
                  (this.innerRadius = this.outerRadius - r));
              },
            },
            {
              key: "updateElements",
              value: function (t, e, i, n) {
                var a,
                  r = "reset" === n,
                  o = this.chart,
                  s = o.options.animation,
                  l = this._cachedMeta.rScale,
                  u = l.xCenter,
                  h = l.yCenter,
                  c = l.getIndexAngle(0) - 0.5 * v.P,
                  f = c,
                  d = 360 / this.countVisibleElements();
                for (a = 0; a < e; ++a) f += this._computeAngle(a, n, d);
                for (a = e; a < e + i; a++) {
                  var g = t[a],
                    p = f,
                    y = f + this._computeAngle(a, n, d),
                    b = o.getDataVisibility(a)
                      ? l.getDistanceFromCenterForValue(this.getParsed(a).r)
                      : 0;
                  ((f = y),
                    r &&
                      (s.animateScale && (b = 0),
                      s.animateRotate && (p = y = c)));
                  var m = {
                    x: u,
                    y: h,
                    innerRadius: 0,
                    outerRadius: b,
                    startAngle: p,
                    endAngle: y,
                    options: this.resolveDataElementOptions(
                      a,
                      g.active ? "active" : n,
                    ),
                  };
                  this.updateElement(g, a, m, n);
                }
              },
            },
            {
              key: "countVisibleElements",
              value: function () {
                var t = this,
                  e = this._cachedMeta,
                  i = 0;
                return (
                  e.data.forEach(function (e, n) {
                    !isNaN(t.getParsed(n).r) &&
                      t.chart.getDataVisibility(n) &&
                      i++;
                  }),
                  i
                );
              },
            },
            {
              key: "_computeAngle",
              value: function (t, e, i) {
                return this.chart.getDataVisibility(t)
                  ? (0, v.t)(this.resolveDataElementOptions(t, e).angle || i)
                  : 0;
              },
            },
          ]),
          i
        );
      })(R);
      ((X.id = "polarArea"),
        (X.defaults = {
          dataElementType: "arc",
          animation: { animateRotate: !0, animateScale: !0 },
          animations: {
            numbers: {
              type: "number",
              properties: [
                "x",
                "y",
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
              ],
            },
          },
          indexAxis: "r",
          startAngle: 0,
        }),
        (X.overrides = {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels: function (t) {
                  var e = t.data;
                  if (e.labels.length && e.datasets.length) {
                    var i = t.legend.options.labels.pointStyle;
                    return e.labels.map(function (e, n) {
                      var a = t.getDatasetMeta(0).controller.getStyle(n);
                      return {
                        text: e,
                        fillStyle: a.backgroundColor,
                        strokeStyle: a.borderColor,
                        lineWidth: a.borderWidth,
                        pointStyle: i,
                        hidden: !t.getDataVisibility(n),
                        index: n,
                      };
                    });
                  }
                  return [];
                },
              },
              onClick: function (t, e, i) {
                (i.chart.toggleDataVisibility(e.index), i.chart.update());
              },
            },
            tooltip: {
              callbacks: {
                title: function () {
                  return "";
                },
                label: function (t) {
                  return (
                    t.chart.data.labels[t.dataIndex] + ": " + t.formattedValue
                  );
                },
              },
            },
          },
          scales: {
            r: {
              type: "radialLinear",
              angleLines: { display: !1 },
              beginAtZero: !0,
              grid: { circular: !0 },
              pointLabels: { display: !1 },
              startAngle: 0,
            },
          },
        }));
      var U = (function (t) {
        (0, o.default)(i, t);
        var e = (0, s.default)(i);
        function i() {
          return ((0, f.default)(this, i), e.apply(this, arguments));
        }
        return (0, d.default)(i);
      })(Y);
      ((U.id = "pie"),
        (U.defaults = {
          cutout: 0,
          rotation: 0,
          circumference: 360,
          radius: "100%",
        }));
      var $ = (function (t) {
        (0, o.default)(i, t);
        var e = (0, s.default)(i);
        function i() {
          return ((0, f.default)(this, i), e.apply(this, arguments));
        }
        return (
          (0, d.default)(i, [
            {
              key: "getLabelAndValue",
              value: function (t) {
                var e = this._cachedMeta.vScale,
                  i = this.getParsed(t);
                return {
                  label: e.getLabels()[t],
                  value: "" + e.getLabelForValue(i[e.axis]),
                };
              },
            },
            {
              key: "parseObjectData",
              value: function (t, e, i, n) {
                return v.y.bind(this)(t, e, i, n);
              },
            },
            {
              key: "update",
              value: function (t) {
                var e = this._cachedMeta,
                  i = e.dataset,
                  n = e.data || [],
                  a = e.iScale.getLabels();
                if (((i.points = n), "resize" !== t)) {
                  var r = this.resolveDatasetElementOptions(t);
                  this.options.showLine || (r.borderWidth = 0);
                  var o = {
                    _loop: !0,
                    _fullLoop: a.length === n.length,
                    options: r,
                  };
                  this.updateElement(i, void 0, o, t);
                }
                this.updateElements(n, 0, n.length, t);
              },
            },
            {
              key: "updateElements",
              value: function (t, e, i, n) {
                for (
                  var a = this._cachedMeta.rScale, r = "reset" === n, o = e;
                  o < e + i;
                  o++
                ) {
                  var s = t[o],
                    l = this.resolveDataElementOptions(
                      o,
                      s.active ? "active" : n,
                    ),
                    u = a.getPointPositionForValue(o, this.getParsed(o).r),
                    h = r ? a.xCenter : u.x,
                    c = r ? a.yCenter : u.y,
                    f = {
                      x: h,
                      y: c,
                      angle: u.angle,
                      skip: isNaN(h) || isNaN(c),
                      options: l,
                    };
                  this.updateElement(s, o, f, n);
                }
              },
            },
          ]),
          i
        );
      })(R);
      (($.id = "radar"),
        ($.defaults = {
          datasetElementType: "line",
          dataElementType: "point",
          indexAxis: "r",
          showLine: !0,
          elements: { line: { fill: "start" } },
        }),
        ($.overrides = {
          aspectRatio: 1,
          scales: { r: { type: "radialLinear" } },
        }));
      var K = (function () {
        function t() {
          ((0, f.default)(this, t),
            (this.x = void 0),
            (this.y = void 0),
            (this.active = !1),
            (this.options = void 0),
            (this.$animations = void 0));
        }
        return (
          (0, d.default)(t, [
            {
              key: "tooltipPosition",
              value: function (t) {
                var e = this.getProps(["x", "y"], t);
                return { x: e.x, y: e.y };
              },
            },
            {
              key: "hasValue",
              value: function () {
                return (0, v.x)(this.x) && (0, v.x)(this.y);
              },
            },
            {
              key: "getProps",
              value: function (t, e) {
                var i = this,
                  n = this.$animations;
                if (!e || !n) return this;
                var a = {};
                return (
                  t.forEach(function (t) {
                    a[t] = n[t] && n[t].active() ? n[t]._to : i[t];
                  }),
                  a
                );
              },
            },
          ]),
          t
        );
      })();
      ((K.defaults = {}), (K.defaultRoutes = void 0));
      var Q = {
        values: function (t) {
          return (0, v.b)(t) ? t : "" + t;
        },
        numeric: function (t, e, i) {
          if (0 === t) return "0";
          var n,
            a = this.chart.options.locale,
            r = t;
          if (i.length > 1) {
            var o = Math.max(
              Math.abs(i[0].value),
              Math.abs(i[i.length - 1].value),
            );
            ((o < 1e-4 || o > 1e15) && (n = "scientific"),
              (r = (function (t, e) {
                var i =
                  e.length > 3
                    ? e[2].value - e[1].value
                    : e[1].value - e[0].value;
                Math.abs(i) >= 1 &&
                  t !== Math.floor(t) &&
                  (i = t - Math.floor(t));
                return i;
              })(t, i)));
          }
          var s = (0, v.z)(Math.abs(r)),
            l = Math.max(Math.min(-1 * Math.floor(s), 20), 0),
            u = {
              notation: n,
              minimumFractionDigits: l,
              maximumFractionDigits: l,
            };
          return (
            Object.assign(u, this.options.ticks.format),
            (0, v.o)(t, a, u)
          );
        },
        logarithmic: function (t, e, i) {
          if (0 === t) return "0";
          var n = t / Math.pow(10, Math.floor((0, v.z)(t)));
          return 1 === n || 2 === n || 5 === n
            ? Q.numeric.call(this, t, e, i)
            : "";
        },
      };
      var q = { formatters: Q };
      function G(t, e) {
        var i = t.options.ticks,
          n =
            i.maxTicksLimit ||
            (function (t) {
              var e = t.options.offset,
                i = t._tickSize(),
                n = t._length / i + (e ? 0 : 1),
                a = t._maxLength / i;
              return Math.floor(Math.min(n, a));
            })(t),
          a = i.major.enabled
            ? (function (t) {
                var e,
                  i,
                  n = [];
                for (e = 0, i = t.length; e < i; e++) t[e].major && n.push(e);
                return n;
              })(e)
            : [],
          r = a.length,
          o = a[0],
          s = a[r - 1],
          l = [];
        if (r > n)
          return (
            (function (t, e, i, n) {
              var a,
                r = 0,
                o = i[0];
              for (n = Math.ceil(n), a = 0; a < t.length; a++)
                a === o && (e.push(t[a]), (o = i[++r * n]));
            })(e, l, a, r / n),
            l
          );
        var u = (function (t, e, i) {
          var n = (function (t) {
              var e,
                i,
                n = t.length;
              if (n < 2) return !1;
              for (i = t[0], e = 1; e < n; ++e)
                if (t[e] - t[e - 1] !== i) return !1;
              return i;
            })(t),
            a = e.length / i;
          if (!n) return Math.max(a, 1);
          for (var r = (0, v.A)(n), o = 0, s = r.length - 1; o < s; o++) {
            var l = r[o];
            if (l > a) return l;
          }
          return Math.max(a, 1);
        })(a, e, n);
        if (r > 0) {
          var h,
            c,
            f = r > 1 ? Math.round((s - o) / (r - 1)) : null;
          for (
            J(e, l, u, (0, v.k)(f) ? 0 : o - f, o), h = 0, c = r - 1;
            h < c;
            h++
          )
            J(e, l, u, a[h], a[h + 1]);
          return (J(e, l, u, s, (0, v.k)(f) ? e.length : s + f), l);
        }
        return (J(e, l, u), l);
      }
      function J(t, e, i, n, a) {
        var r,
          o,
          s,
          l = (0, v.v)(n, 0),
          u = Math.min((0, v.v)(a, t.length), t.length),
          h = 0;
        for (
          i = Math.ceil(i), a && (i = (r = a - n) / Math.floor(r / i)), s = l;
          s < 0;
        )
          (h++, (s = Math.round(l + h * i)));
        for (o = Math.max(l, 0); o < u; o++)
          o === s && (e.push(t[o]), h++, (s = Math.round(l + h * i)));
      }
      (v.d.set("scale", {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: "ticks",
        grace: 0,
        grid: {
          display: !0,
          lineWidth: 1,
          drawBorder: !0,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickLength: 8,
          tickWidth: function (t, e) {
            return e.lineWidth;
          },
          tickColor: function (t, e) {
            return e.color;
          },
          offset: !1,
          borderDash: [],
          borderDashOffset: 0,
          borderWidth: 1,
        },
        title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
        ticks: {
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          textStrokeWidth: 0,
          textStrokeColor: "",
          padding: 3,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 3,
          labelOffset: 0,
          callback: q.formatters.values,
          minor: {},
          major: {},
          align: "center",
          crossAlign: "near",
          showLabelBackdrop: !1,
          backdropColor: "rgba(255, 255, 255, 0.75)",
          backdropPadding: 2,
        },
      }),
        v.d.route("scale.ticks", "color", "", "color"),
        v.d.route("scale.grid", "color", "", "borderColor"),
        v.d.route("scale.grid", "borderColor", "", "borderColor"),
        v.d.route("scale.title", "color", "", "color"),
        v.d.describe("scale", {
          _fallback: !1,
          _scriptable: function (t) {
            return (
              !t.startsWith("before") &&
              !t.startsWith("after") &&
              "callback" !== t &&
              "parser" !== t
            );
          },
          _indexable: function (t) {
            return "borderDash" !== t && "tickBorderDash" !== t;
          },
        }),
        v.d.describe("scales", { _fallback: "scale" }),
        v.d.describe("scale.ticks", {
          _scriptable: function (t) {
            return "backdropPadding" !== t && "callback" !== t;
          },
          _indexable: function (t) {
            return "backdropPadding" !== t;
          },
        }));
      var tt = function (t, e, i) {
        return "top" === e || "left" === e ? t[e] + i : t[e] - i;
      };
      function et(t, e) {
        for (var i = [], n = t.length / e, a = t.length, r = 0; r < a; r += n)
          i.push(t[Math.floor(r)]);
        return i;
      }
      function it(t, e, i) {
        var n,
          a = t.ticks.length,
          r = Math.min(e, a - 1),
          o = t._startPixel,
          s = t._endPixel,
          l = 1e-6,
          u = t.getPixelForTick(r);
        if (!(
          i &&
          ((n =
            1 === a
              ? Math.max(u - o, s - u)
              : 0 === e
                ? (t.getPixelForTick(1) - u) / 2
                : (u - t.getPixelForTick(r - 1)) / 2),
          (u += r < e ? n : -n) < o - l || u > s + l)
        ))
          return u;
      }
      function nt(t) {
        return t.drawTicks ? t.tickLength : 0;
      }
      function at(t, e) {
        if (!t.display) return 0;
        var i = (0, v.O)(t.font, e),
          n = (0, v.K)(t.padding);
        return ((0, v.b)(t.text) ? t.text.length : 1) * i.lineHeight + n.height;
      }
      function rt(t, e, i) {
        var n = (0, v.R)(t);
        return (
          ((i && "right" !== e) || (!i && "right" === e)) &&
            (n = (function (t) {
              return "left" === t ? "right" : "right" === t ? "left" : t;
            })(n)),
          n
        );
      }
      var ot = (function (t) {
          (0, o.default)(i, t);
          var e = (0, s.default)(i);
          function i(t) {
            var n;
            return (
              (0, f.default)(this, i),
              ((n = e.call(this)).id = t.id),
              (n.type = t.type),
              (n.options = void 0),
              (n.ctx = t.ctx),
              (n.chart = t.chart),
              (n.top = void 0),
              (n.bottom = void 0),
              (n.left = void 0),
              (n.right = void 0),
              (n.width = void 0),
              (n.height = void 0),
              (n._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
              (n.maxWidth = void 0),
              (n.maxHeight = void 0),
              (n.paddingTop = void 0),
              (n.paddingBottom = void 0),
              (n.paddingLeft = void 0),
              (n.paddingRight = void 0),
              (n.axis = void 0),
              (n.labelRotation = void 0),
              (n.min = void 0),
              (n.max = void 0),
              (n._range = void 0),
              (n.ticks = []),
              (n._gridLineItems = null),
              (n._labelItems = null),
              (n._labelSizes = null),
              (n._length = 0),
              (n._maxLength = 0),
              (n._longestTextCache = {}),
              (n._startPixel = void 0),
              (n._endPixel = void 0),
              (n._reversePixels = !1),
              (n._userMax = void 0),
              (n._userMin = void 0),
              (n._suggestedMax = void 0),
              (n._suggestedMin = void 0),
              (n._ticksLength = 0),
              (n._borderValue = 0),
              (n._cache = {}),
              (n._dataLimitsCached = !1),
              (n.$context = void 0),
              n
            );
          }
          return (
            (0, d.default)(i, [
              {
                key: "init",
                value: function (t) {
                  ((this.options = t.setContext(this.getContext())),
                    (this.axis = t.axis),
                    (this._userMin = this.parse(t.min)),
                    (this._userMax = this.parse(t.max)),
                    (this._suggestedMin = this.parse(t.suggestedMin)),
                    (this._suggestedMax = this.parse(t.suggestedMax)));
                },
              },
              {
                key: "parse",
                value: function (t, e) {
                  return t;
                },
              },
              {
                key: "getUserBounds",
                value: function () {
                  var t = this._userMin,
                    e = this._userMax,
                    i = this._suggestedMin,
                    n = this._suggestedMax;
                  return (
                    (t = (0, v.B)(t, Number.POSITIVE_INFINITY)),
                    (e = (0, v.B)(e, Number.NEGATIVE_INFINITY)),
                    (i = (0, v.B)(i, Number.POSITIVE_INFINITY)),
                    (n = (0, v.B)(n, Number.NEGATIVE_INFINITY)),
                    {
                      min: (0, v.B)(t, i),
                      max: (0, v.B)(e, n),
                      minDefined: (0, v.g)(t),
                      maxDefined: (0, v.g)(e),
                    }
                  );
                },
              },
              {
                key: "getMinMax",
                value: function (t) {
                  var e,
                    i = this.getUserBounds(),
                    n = i.min,
                    a = i.max,
                    r = i.minDefined,
                    o = i.maxDefined;
                  if (r && o) return { min: n, max: a };
                  for (
                    var s = this.getMatchingVisibleMetas(), l = 0, u = s.length;
                    l < u;
                    ++l
                  )
                    ((e = s[l].controller.getMinMax(this, t)),
                      r || (n = Math.min(n, e.min)),
                      o || (a = Math.max(a, e.max)));
                  return (
                    (n = o && n > a ? a : n),
                    (a = r && n > a ? n : a),
                    {
                      min: (0, v.B)(n, (0, v.B)(a, n)),
                      max: (0, v.B)(a, (0, v.B)(n, a)),
                    }
                  );
                },
              },
              {
                key: "getPadding",
                value: function () {
                  return {
                    left: this.paddingLeft || 0,
                    top: this.paddingTop || 0,
                    right: this.paddingRight || 0,
                    bottom: this.paddingBottom || 0,
                  };
                },
              },
              {
                key: "getTicks",
                value: function () {
                  return this.ticks;
                },
              },
              {
                key: "getLabels",
                value: function () {
                  var t = this.chart.data;
                  return (
                    this.options.labels ||
                    (this.isHorizontal() ? t.xLabels : t.yLabels) ||
                    t.labels ||
                    []
                  );
                },
              },
              {
                key: "beforeLayout",
                value: function () {
                  ((this._cache = {}), (this._dataLimitsCached = !1));
                },
              },
              {
                key: "beforeUpdate",
                value: function () {
                  (0, v.C)(this.options.beforeUpdate, [this]);
                },
              },
              {
                key: "update",
                value: function (t, e, i) {
                  var n = this.options,
                    a = n.beginAtZero,
                    r = n.grace,
                    o = n.ticks,
                    s = o.sampleSize;
                  (this.beforeUpdate(),
                    (this.maxWidth = t),
                    (this.maxHeight = e),
                    (this._margins = i =
                      Object.assign(
                        { left: 0, right: 0, top: 0, bottom: 0 },
                        i,
                      )),
                    (this.ticks = null),
                    (this._labelSizes = null),
                    (this._gridLineItems = null),
                    (this._labelItems = null),
                    this.beforeSetDimensions(),
                    this.setDimensions(),
                    this.afterSetDimensions(),
                    (this._maxLength = this.isHorizontal()
                      ? this.width + i.left + i.right
                      : this.height + i.top + i.bottom),
                    this._dataLimitsCached ||
                      (this.beforeDataLimits(),
                      this.determineDataLimits(),
                      this.afterDataLimits(),
                      (this._range = (0, v.D)(this, r, a)),
                      (this._dataLimitsCached = !0)),
                    this.beforeBuildTicks(),
                    (this.ticks = this.buildTicks() || []),
                    this.afterBuildTicks());
                  var l = s < this.ticks.length;
                  (this._convertTicksToLabels(
                    l ? et(this.ticks, s) : this.ticks,
                  ),
                    this.configure(),
                    this.beforeCalculateLabelRotation(),
                    this.calculateLabelRotation(),
                    this.afterCalculateLabelRotation(),
                    o.display &&
                      (o.autoSkip || "auto" === o.source) &&
                      ((this.ticks = G(this, this.ticks)),
                      (this._labelSizes = null),
                      this.afterAutoSkip()),
                    l && this._convertTicksToLabels(this.ticks),
                    this.beforeFit(),
                    this.fit(),
                    this.afterFit(),
                    this.afterUpdate());
                },
              },
              {
                key: "configure",
                value: function () {
                  var t,
                    e,
                    i = this.options.reverse;
                  (this.isHorizontal()
                    ? ((t = this.left), (e = this.right))
                    : ((t = this.top), (e = this.bottom), (i = !i)),
                    (this._startPixel = t),
                    (this._endPixel = e),
                    (this._reversePixels = i),
                    (this._length = e - t),
                    (this._alignToPixels = this.options.alignToPixels));
                },
              },
              {
                key: "afterUpdate",
                value: function () {
                  (0, v.C)(this.options.afterUpdate, [this]);
                },
              },
              {
                key: "beforeSetDimensions",
                value: function () {
                  (0, v.C)(this.options.beforeSetDimensions, [this]);
                },
              },
              {
                key: "setDimensions",
                value: function () {
                  (this.isHorizontal()
                    ? ((this.width = this.maxWidth),
                      (this.left = 0),
                      (this.right = this.width))
                    : ((this.height = this.maxHeight),
                      (this.top = 0),
                      (this.bottom = this.height)),
                    (this.paddingLeft = 0),
                    (this.paddingTop = 0),
                    (this.paddingRight = 0),
                    (this.paddingBottom = 0));
                },
              },
              {
                key: "afterSetDimensions",
                value: function () {
                  (0, v.C)(this.options.afterSetDimensions, [this]);
                },
              },
              {
                key: "_callHooks",
                value: function (t) {
                  (this.chart.notifyPlugins(t, this.getContext()),
                    (0, v.C)(this.options[t], [this]));
                },
              },
              {
                key: "beforeDataLimits",
                value: function () {
                  this._callHooks("beforeDataLimits");
                },
              },
              { key: "determineDataLimits", value: function () {} },
              {
                key: "afterDataLimits",
                value: function () {
                  this._callHooks("afterDataLimits");
                },
              },
              {
                key: "beforeBuildTicks",
                value: function () {
                  this._callHooks("beforeBuildTicks");
                },
              },
              {
                key: "buildTicks",
                value: function () {
                  return [];
                },
              },
              {
                key: "afterBuildTicks",
                value: function () {
                  this._callHooks("afterBuildTicks");
                },
              },
              {
                key: "beforeTickToLabelConversion",
                value: function () {
                  (0, v.C)(this.options.beforeTickToLabelConversion, [this]);
                },
              },
              {
                key: "generateTickLabels",
                value: function (t) {
                  var e,
                    i,
                    n,
                    a = this.options.ticks;
                  for (e = 0, i = t.length; e < i; e++)
                    (n = t[e]).label = (0, v.C)(
                      a.callback,
                      [n.value, e, t],
                      this,
                    );
                },
              },
              {
                key: "afterTickToLabelConversion",
                value: function () {
                  (0, v.C)(this.options.afterTickToLabelConversion, [this]);
                },
              },
              {
                key: "beforeCalculateLabelRotation",
                value: function () {
                  (0, v.C)(this.options.beforeCalculateLabelRotation, [this]);
                },
              },
              {
                key: "calculateLabelRotation",
                value: function () {
                  var t,
                    e,
                    i,
                    n = this.options,
                    a = n.ticks,
                    r = this.ticks.length,
                    o = a.minRotation || 0,
                    s = a.maxRotation,
                    l = o;
                  if (
                    !this._isVisible() ||
                    !a.display ||
                    o >= s ||
                    r <= 1 ||
                    !this.isHorizontal()
                  )
                    this.labelRotation = o;
                  else {
                    var u = this._getLabelSizes(),
                      h = u.widest.width,
                      c = u.highest.height,
                      f = (0, v.E)(this.chart.width - h, 0, this.maxWidth);
                    (h + 6 > (t = n.offset ? this.maxWidth / r : f / (r - 1)) &&
                      ((t = f / (r - (n.offset ? 0.5 : 1))),
                      (e =
                        this.maxHeight -
                        nt(n.grid) -
                        a.padding -
                        at(n.title, this.chart.options.font)),
                      (i = Math.sqrt(h * h + c * c)),
                      (l = (0, v.F)(
                        Math.min(
                          Math.asin(
                            (0, v.E)((u.highest.height + 6) / t, -1, 1),
                          ),
                          Math.asin((0, v.E)(e / i, -1, 1)) -
                            Math.asin((0, v.E)(c / i, -1, 1)),
                        ),
                      )),
                      (l = Math.max(o, Math.min(s, l)))),
                      (this.labelRotation = l));
                  }
                },
              },
              {
                key: "afterCalculateLabelRotation",
                value: function () {
                  (0, v.C)(this.options.afterCalculateLabelRotation, [this]);
                },
              },
              { key: "afterAutoSkip", value: function () {} },
              {
                key: "beforeFit",
                value: function () {
                  (0, v.C)(this.options.beforeFit, [this]);
                },
              },
              {
                key: "fit",
                value: function () {
                  var t = { width: 0, height: 0 },
                    e = this.chart,
                    i = this.options,
                    n = i.ticks,
                    a = i.title,
                    r = i.grid,
                    o = this._isVisible(),
                    s = this.isHorizontal();
                  if (o) {
                    var l = at(a, e.options.font);
                    if (
                      (s
                        ? ((t.width = this.maxWidth), (t.height = nt(r) + l))
                        : ((t.height = this.maxHeight), (t.width = nt(r) + l)),
                      n.display && this.ticks.length)
                    ) {
                      var u = this._getLabelSizes(),
                        h = u.first,
                        c = u.last,
                        f = u.widest,
                        d = u.highest,
                        g = 2 * n.padding,
                        p = (0, v.t)(this.labelRotation),
                        y = Math.cos(p),
                        b = Math.sin(p);
                      if (s) {
                        var m = n.mirror ? 0 : b * f.width + y * d.height;
                        t.height = Math.min(this.maxHeight, t.height + m + g);
                      } else {
                        var x = n.mirror ? 0 : y * f.width + b * d.height;
                        t.width = Math.min(this.maxWidth, t.width + x + g);
                      }
                      this._calculatePadding(h, c, b, y);
                    }
                  }
                  (this._handleMargins(),
                    s
                      ? ((this.width = this._length =
                          e.width - this._margins.left - this._margins.right),
                        (this.height = t.height))
                      : ((this.width = t.width),
                        (this.height = this._length =
                          e.height -
                          this._margins.top -
                          this._margins.bottom)));
                },
              },
              {
                key: "_calculatePadding",
                value: function (t, e, i, n) {
                  var a = this.options,
                    r = a.ticks,
                    o = r.align,
                    s = r.padding,
                    l = a.position,
                    u = 0 !== this.labelRotation,
                    h = "top" !== l && "x" === this.axis;
                  if (this.isHorizontal()) {
                    var c = this.getPixelForTick(0) - this.left,
                      f =
                        this.right -
                        this.getPixelForTick(this.ticks.length - 1),
                      d = 0,
                      v = 0;
                    (u
                      ? h
                        ? ((d = n * t.width), (v = i * e.height))
                        : ((d = i * t.height), (v = n * e.width))
                      : "start" === o
                        ? (v = e.width)
                        : "end" === o
                          ? (d = t.width)
                          : "inner" !== o &&
                            ((d = t.width / 2), (v = e.width / 2)),
                      (this.paddingLeft = Math.max(
                        ((d - c + s) * this.width) / (this.width - c),
                        0,
                      )),
                      (this.paddingRight = Math.max(
                        ((v - f + s) * this.width) / (this.width - f),
                        0,
                      )));
                  } else {
                    var g = e.height / 2,
                      p = t.height / 2;
                    ("start" === o
                      ? ((g = 0), (p = t.height))
                      : "end" === o && ((g = e.height), (p = 0)),
                      (this.paddingTop = g + s),
                      (this.paddingBottom = p + s));
                  }
                },
              },
              {
                key: "_handleMargins",
                value: function () {
                  this._margins &&
                    ((this._margins.left = Math.max(
                      this.paddingLeft,
                      this._margins.left,
                    )),
                    (this._margins.top = Math.max(
                      this.paddingTop,
                      this._margins.top,
                    )),
                    (this._margins.right = Math.max(
                      this.paddingRight,
                      this._margins.right,
                    )),
                    (this._margins.bottom = Math.max(
                      this.paddingBottom,
                      this._margins.bottom,
                    )));
                },
              },
              {
                key: "afterFit",
                value: function () {
                  (0, v.C)(this.options.afterFit, [this]);
                },
              },
              {
                key: "isHorizontal",
                value: function () {
                  var t = this.options,
                    e = t.axis,
                    i = t.position;
                  return "top" === i || "bottom" === i || "x" === e;
                },
              },
              {
                key: "isFullSize",
                value: function () {
                  return this.options.fullSize;
                },
              },
              {
                key: "_convertTicksToLabels",
                value: function (t) {
                  var e, i;
                  for (
                    this.beforeTickToLabelConversion(),
                      this.generateTickLabels(t),
                      e = 0,
                      i = t.length;
                    e < i;
                    e++
                  )
                    (0, v.k)(t[e].label) && (t.splice(e, 1), i--, e--);
                  this.afterTickToLabelConversion();
                },
              },
              {
                key: "_getLabelSizes",
                value: function () {
                  var t = this._labelSizes;
                  if (!t) {
                    var e = this.options.ticks.sampleSize,
                      i = this.ticks;
                    (e < i.length && (i = et(i, e)),
                      (this._labelSizes = t =
                        this._computeLabelSizes(i, i.length)));
                  }
                  return t;
                },
              },
              {
                key: "_computeLabelSizes",
                value: function (t, e) {
                  var i,
                    n,
                    a,
                    r,
                    o,
                    s,
                    l,
                    u,
                    h,
                    c,
                    f,
                    d = this.ctx,
                    g = this._longestTextCache,
                    p = [],
                    y = [],
                    b = 0,
                    m = 0;
                  for (i = 0; i < e; ++i) {
                    if (
                      ((r = t[i].label),
                      (o = this._resolveTickFontOptions(i)),
                      (d.font = s = o.string),
                      (l = g[s] = g[s] || { data: {}, gc: [] }),
                      (u = o.lineHeight),
                      (h = c = 0),
                      (0, v.k)(r) || (0, v.b)(r))
                    ) {
                      if ((0, v.b)(r))
                        for (n = 0, a = r.length; n < a; ++n)
                          ((f = r[n]),
                            (0, v.k)(f) ||
                              (0, v.b)(f) ||
                              ((h = (0, v.G)(d, l.data, l.gc, h, f)),
                              (c += u)));
                    } else ((h = (0, v.G)(d, l.data, l.gc, h, r)), (c = u));
                    (p.push(h),
                      y.push(c),
                      (b = Math.max(h, b)),
                      (m = Math.max(c, m)));
                  }
                  !(function (t, e) {
                    (0, v.Q)(t, function (t) {
                      var i,
                        n = t.gc,
                        a = n.length / 2;
                      if (a > e) {
                        for (i = 0; i < a; ++i) delete t.data[n[i]];
                        n.splice(0, a);
                      }
                    });
                  })(g, e);
                  var x = p.indexOf(b),
                    k = y.indexOf(m),
                    _ = function (t) {
                      return { width: p[t] || 0, height: y[t] || 0 };
                    };
                  return {
                    first: _(0),
                    last: _(e - 1),
                    widest: _(x),
                    highest: _(k),
                    widths: p,
                    heights: y,
                  };
                },
              },
              {
                key: "getLabelForValue",
                value: function (t) {
                  return t;
                },
              },
              {
                key: "getPixelForValue",
                value: function (t, e) {
                  return NaN;
                },
              },
              { key: "getValueForPixel", value: function (t) {} },
              {
                key: "getPixelForTick",
                value: function (t) {
                  var e = this.ticks;
                  return t < 0 || t > e.length - 1
                    ? null
                    : this.getPixelForValue(e[t].value);
                },
              },
              {
                key: "getPixelForDecimal",
                value: function (t) {
                  this._reversePixels && (t = 1 - t);
                  var e = this._startPixel + t * this._length;
                  return (0, v.I)(
                    this._alignToPixels ? (0, v.J)(this.chart, e, 0) : e,
                  );
                },
              },
              {
                key: "getDecimalForPixel",
                value: function (t) {
                  var e = (t - this._startPixel) / this._length;
                  return this._reversePixels ? 1 - e : e;
                },
              },
              {
                key: "getBasePixel",
                value: function () {
                  return this.getPixelForValue(this.getBaseValue());
                },
              },
              {
                key: "getBaseValue",
                value: function () {
                  var t = this.min,
                    e = this.max;
                  return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
                },
              },
              {
                key: "getContext",
                value: function (t) {
                  var e,
                    i,
                    n = this.ticks || [];
                  if (t >= 0 && t < n.length) {
                    var a = n[t];
                    return (
                      a.$context ||
                      (a.$context = (function (t, e, i) {
                        return (0, v.h)(t, { tick: i, index: e, type: "tick" });
                      })(this.getContext(), t, a))
                    );
                  }
                  return (
                    this.$context ||
                    (this.$context =
                      ((e = this.chart.getContext()),
                      (i = this),
                      (0, v.h)(e, { scale: i, type: "scale" })))
                  );
                },
              },
              {
                key: "_tickSize",
                value: function () {
                  var t = this.options.ticks,
                    e = (0, v.t)(this.labelRotation),
                    i = Math.abs(Math.cos(e)),
                    n = Math.abs(Math.sin(e)),
                    a = this._getLabelSizes(),
                    r = t.autoSkipPadding || 0,
                    o = a ? a.widest.width + r : 0,
                    s = a ? a.highest.height + r : 0;
                  return this.isHorizontal()
                    ? s * i > o * n
                      ? o / i
                      : s / n
                    : s * n < o * i
                      ? s / i
                      : o / n;
                },
              },
              {
                key: "_isVisible",
                value: function () {
                  var t = this.options.display;
                  return "auto" !== t
                    ? !!t
                    : this.getMatchingVisibleMetas().length > 0;
                },
              },
              {
                key: "_computeGridLineItems",
                value: function (t) {
                  var e,
                    i,
                    n,
                    a,
                    r,
                    o,
                    s,
                    l,
                    u,
                    h,
                    c,
                    f,
                    d = this.axis,
                    g = this.chart,
                    p = this.options,
                    y = p.grid,
                    b = p.position,
                    m = y.offset,
                    x = this.isHorizontal(),
                    k = this.ticks.length + (m ? 1 : 0),
                    _ = nt(y),
                    w = [],
                    M = y.setContext(this.getContext()),
                    S = M.drawBorder ? M.borderWidth : 0,
                    P = S / 2,
                    C = function (t) {
                      return (0, v.J)(g, t, S);
                    };
                  if ("top" === b)
                    ((e = C(this.bottom)),
                      (o = this.bottom - _),
                      (l = e - P),
                      (h = C(t.top) + P),
                      (f = t.bottom));
                  else if ("bottom" === b)
                    ((e = C(this.top)),
                      (h = t.top),
                      (f = C(t.bottom) - P),
                      (o = e + P),
                      (l = this.top + _));
                  else if ("left" === b)
                    ((e = C(this.right)),
                      (r = this.right - _),
                      (s = e - P),
                      (u = C(t.left) + P),
                      (c = t.right));
                  else if ("right" === b)
                    ((e = C(this.left)),
                      (u = t.left),
                      (c = C(t.right) - P),
                      (r = e + P),
                      (s = this.left + _));
                  else if ("x" === d) {
                    if ("center" === b) e = C((t.top + t.bottom) / 2 + 0.5);
                    else if ((0, v.i)(b)) {
                      var O = Object.keys(b)[0],
                        D = b[O];
                      e = C(this.chart.scales[O].getPixelForValue(D));
                    }
                    ((h = t.top), (f = t.bottom), (l = (o = e + P) + _));
                  } else if ("y" === d) {
                    if ("center" === b) e = C((t.left + t.right) / 2);
                    else if ((0, v.i)(b)) {
                      var A = Object.keys(b)[0],
                        T = b[A];
                      e = C(this.chart.scales[A].getPixelForValue(T));
                    }
                    ((s = (r = e - P) - _), (u = t.left), (c = t.right));
                  }
                  var E = (0, v.v)(p.ticks.maxTicksLimit, k),
                    R = Math.max(1, Math.ceil(k / E));
                  for (i = 0; i < k; i += R) {
                    var L = y.setContext(this.getContext(i)),
                      I = L.lineWidth,
                      F = L.color,
                      z = L.borderDash || [],
                      V = L.borderDashOffset,
                      j = L.tickWidth,
                      W = L.tickColor,
                      N = L.tickBorderDash || [],
                      B = L.tickBorderDashOffset;
                    void 0 !== (n = it(this, i, m)) &&
                      ((a = (0, v.J)(g, n, I)),
                      x ? (r = s = u = c = a) : (o = l = h = f = a),
                      w.push({
                        tx1: r,
                        ty1: o,
                        tx2: s,
                        ty2: l,
                        x1: u,
                        y1: h,
                        x2: c,
                        y2: f,
                        width: I,
                        color: F,
                        borderDash: z,
                        borderDashOffset: V,
                        tickWidth: j,
                        tickColor: W,
                        tickBorderDash: N,
                        tickBorderDashOffset: B,
                      }));
                  }
                  return ((this._ticksLength = k), (this._borderValue = e), w);
                },
              },
              {
                key: "_computeLabelItems",
                value: function (t) {
                  var e,
                    i,
                    n,
                    a,
                    r,
                    o,
                    s,
                    l,
                    u,
                    h,
                    c,
                    f = this.axis,
                    d = this.options,
                    g = d.position,
                    p = d.ticks,
                    y = this.isHorizontal(),
                    b = this.ticks,
                    m = p.align,
                    x = p.crossAlign,
                    k = p.padding,
                    _ = p.mirror,
                    w = nt(d.grid),
                    M = w + k,
                    S = _ ? -k : M,
                    P = -(0, v.t)(this.labelRotation),
                    C = [],
                    O = "middle";
                  if ("top" === g)
                    ((r = this.bottom - S),
                      (o = this._getXAxisLabelAlignment()));
                  else if ("bottom" === g)
                    ((r = this.top + S), (o = this._getXAxisLabelAlignment()));
                  else if ("left" === g) {
                    var D = this._getYAxisLabelAlignment(w);
                    ((o = D.textAlign), (a = D.x));
                  } else if ("right" === g) {
                    var A = this._getYAxisLabelAlignment(w);
                    ((o = A.textAlign), (a = A.x));
                  } else if ("x" === f) {
                    if ("center" === g) r = (t.top + t.bottom) / 2 + M;
                    else if ((0, v.i)(g)) {
                      var T = Object.keys(g)[0],
                        E = g[T];
                      r = this.chart.scales[T].getPixelForValue(E) + M;
                    }
                    o = this._getXAxisLabelAlignment();
                  } else if ("y" === f) {
                    if ("center" === g) a = (t.left + t.right) / 2 - M;
                    else if ((0, v.i)(g)) {
                      var R = Object.keys(g)[0],
                        L = g[R];
                      a = this.chart.scales[R].getPixelForValue(L);
                    }
                    o = this._getYAxisLabelAlignment(w).textAlign;
                  }
                  "y" === f &&
                    ("start" === m
                      ? (O = "top")
                      : "end" === m && (O = "bottom"));
                  var I = this._getLabelSizes();
                  for (e = 0, i = b.length; e < i; ++e) {
                    n = b[e].label;
                    var F = p.setContext(this.getContext(e));
                    ((s = this.getPixelForTick(e) + p.labelOffset),
                      (u = (l = this._resolveTickFontOptions(e)).lineHeight));
                    var z = (h = (0, v.b)(n) ? n.length : 1) / 2,
                      V = F.color,
                      j = F.textStrokeColor,
                      W = F.textStrokeWidth,
                      N = o;
                    y
                      ? ((a = s),
                        "inner" === o &&
                          (N =
                            e === i - 1
                              ? this.options.reverse
                                ? "left"
                                : "right"
                              : 0 === e
                                ? this.options.reverse
                                  ? "right"
                                  : "left"
                                : "center"),
                        (c =
                          "top" === g
                            ? "near" === x || 0 !== P
                              ? -h * u + u / 2
                              : "center" === x
                                ? -I.highest.height / 2 - z * u + u
                                : -I.highest.height + u / 2
                            : "near" === x || 0 !== P
                              ? u / 2
                              : "center" === x
                                ? I.highest.height / 2 - z * u
                                : I.highest.height - h * u),
                        _ && (c *= -1))
                      : ((r = s), (c = ((1 - h) * u) / 2));
                    var B = void 0;
                    if (F.showLabelBackdrop) {
                      var H = (0, v.K)(F.backdropPadding),
                        Y = I.heights[e],
                        Z = I.widths[e],
                        X = r + c - H.top,
                        U = a - H.left;
                      switch (O) {
                        case "middle":
                          X -= Y / 2;
                          break;
                        case "bottom":
                          X -= Y;
                      }
                      switch (o) {
                        case "center":
                          U -= Z / 2;
                          break;
                        case "right":
                          U -= Z;
                      }
                      B = {
                        left: U,
                        top: X,
                        width: Z + H.width,
                        height: Y + H.height,
                        color: F.backdropColor,
                      };
                    }
                    C.push({
                      rotation: P,
                      label: n,
                      font: l,
                      color: V,
                      strokeColor: j,
                      strokeWidth: W,
                      textOffset: c,
                      textAlign: N,
                      textBaseline: O,
                      translation: [a, r],
                      backdrop: B,
                    });
                  }
                  return C;
                },
              },
              {
                key: "_getXAxisLabelAlignment",
                value: function () {
                  var t = this.options,
                    e = t.position,
                    i = t.ticks;
                  if (-(0, v.t)(this.labelRotation))
                    return "top" === e ? "left" : "right";
                  var n = "center";
                  return (
                    "start" === i.align
                      ? (n = "left")
                      : "end" === i.align
                        ? (n = "right")
                        : "inner" === i.align && (n = "inner"),
                    n
                  );
                },
              },
              {
                key: "_getYAxisLabelAlignment",
                value: function (t) {
                  var e,
                    i,
                    n = this.options,
                    a = n.position,
                    r = n.ticks,
                    o = r.crossAlign,
                    s = r.mirror,
                    l = r.padding,
                    u = t + l,
                    h = this._getLabelSizes().widest.width;
                  return (
                    "left" === a
                      ? s
                        ? ((i = this.right + l),
                          "near" === o
                            ? (e = "left")
                            : "center" === o
                              ? ((e = "center"), (i += h / 2))
                              : ((e = "right"), (i += h)))
                        : ((i = this.right - u),
                          "near" === o
                            ? (e = "right")
                            : "center" === o
                              ? ((e = "center"), (i -= h / 2))
                              : ((e = "left"), (i = this.left)))
                      : "right" === a
                        ? s
                          ? ((i = this.left + l),
                            "near" === o
                              ? (e = "right")
                              : "center" === o
                                ? ((e = "center"), (i -= h / 2))
                                : ((e = "left"), (i -= h)))
                          : ((i = this.left + u),
                            "near" === o
                              ? (e = "left")
                              : "center" === o
                                ? ((e = "center"), (i += h / 2))
                                : ((e = "right"), (i = this.right)))
                        : (e = "right"),
                    { textAlign: e, x: i }
                  );
                },
              },
              {
                key: "_computeLabelArea",
                value: function () {
                  if (!this.options.ticks.mirror) {
                    var t = this.chart,
                      e = this.options.position;
                    return "left" === e || "right" === e
                      ? {
                          top: 0,
                          left: this.left,
                          bottom: t.height,
                          right: this.right,
                        }
                      : "top" === e || "bottom" === e
                        ? {
                            top: this.top,
                            left: 0,
                            bottom: this.bottom,
                            right: t.width,
                          }
                        : void 0;
                  }
                },
              },
              {
                key: "drawBackground",
                value: function () {
                  var t = this.ctx,
                    e = this.options.backgroundColor,
                    i = this.left,
                    n = this.top,
                    a = this.width,
                    r = this.height;
                  e &&
                    (t.save(),
                    (t.fillStyle = e),
                    t.fillRect(i, n, a, r),
                    t.restore());
                },
              },
              {
                key: "getLineWidthForValue",
                value: function (t) {
                  var e = this.options.grid;
                  if (!this._isVisible() || !e.display) return 0;
                  var i = this.ticks.findIndex(function (e) {
                    return e.value === t;
                  });
                  return i >= 0
                    ? e.setContext(this.getContext(i)).lineWidth
                    : 0;
                },
              },
              {
                key: "drawGrid",
                value: function (t) {
                  var e,
                    i,
                    n = this.options.grid,
                    a = this.ctx,
                    r =
                      this._gridLineItems ||
                      (this._gridLineItems = this._computeGridLineItems(t)),
                    o = function (t, e, i) {
                      i.width &&
                        i.color &&
                        (a.save(),
                        (a.lineWidth = i.width),
                        (a.strokeStyle = i.color),
                        a.setLineDash(i.borderDash || []),
                        (a.lineDashOffset = i.borderDashOffset),
                        a.beginPath(),
                        a.moveTo(t.x, t.y),
                        a.lineTo(e.x, e.y),
                        a.stroke(),
                        a.restore());
                    };
                  if (n.display)
                    for (e = 0, i = r.length; e < i; ++e) {
                      var s = r[e];
                      (n.drawOnChartArea &&
                        o({ x: s.x1, y: s.y1 }, { x: s.x2, y: s.y2 }, s),
                        n.drawTicks &&
                          o(
                            { x: s.tx1, y: s.ty1 },
                            { x: s.tx2, y: s.ty2 },
                            {
                              color: s.tickColor,
                              width: s.tickWidth,
                              borderDash: s.tickBorderDash,
                              borderDashOffset: s.tickBorderDashOffset,
                            },
                          ));
                    }
                },
              },
              {
                key: "drawBorder",
                value: function () {
                  var t = this.chart,
                    e = this.ctx,
                    i = this.options.grid,
                    n = i.setContext(this.getContext()),
                    a = i.drawBorder ? n.borderWidth : 0;
                  if (a) {
                    var r,
                      o,
                      s,
                      l,
                      u = i.setContext(this.getContext(0)).lineWidth,
                      h = this._borderValue;
                    (this.isHorizontal()
                      ? ((r = (0, v.J)(t, this.left, a) - a / 2),
                        (o = (0, v.J)(t, this.right, u) + u / 2),
                        (s = l = h))
                      : ((s = (0, v.J)(t, this.top, a) - a / 2),
                        (l = (0, v.J)(t, this.bottom, u) + u / 2),
                        (r = o = h)),
                      e.save(),
                      (e.lineWidth = n.borderWidth),
                      (e.strokeStyle = n.borderColor),
                      e.beginPath(),
                      e.moveTo(r, s),
                      e.lineTo(o, l),
                      e.stroke(),
                      e.restore());
                  }
                },
              },
              {
                key: "drawLabels",
                value: function (t) {
                  if (this.options.ticks.display) {
                    var e = this.ctx,
                      i = this._computeLabelArea();
                    i && (0, v.L)(e, i);
                    var n,
                      a,
                      r =
                        this._labelItems ||
                        (this._labelItems = this._computeLabelItems(t));
                    for (n = 0, a = r.length; n < a; ++n) {
                      var o = r[n],
                        s = o.font,
                        l = o.label;
                      o.backdrop &&
                        ((e.fillStyle = o.backdrop.color),
                        e.fillRect(
                          o.backdrop.left,
                          o.backdrop.top,
                          o.backdrop.width,
                          o.backdrop.height,
                        ));
                      var u = o.textOffset;
                      (0, v.M)(e, l, 0, u, s, o);
                    }
                    i && (0, v.N)(e);
                  }
                },
              },
              {
                key: "drawTitle",
                value: function () {
                  var t = this.ctx,
                    e = this.options,
                    i = e.position,
                    n = e.title,
                    a = e.reverse;
                  if (n.display) {
                    var r = (0, v.O)(n.font),
                      o = (0, v.K)(n.padding),
                      s = n.align,
                      l = r.lineHeight / 2;
                    "bottom" === i || "center" === i || (0, v.i)(i)
                      ? ((l += o.bottom),
                        (0, v.b)(n.text) &&
                          (l += r.lineHeight * (n.text.length - 1)))
                      : (l += o.top);
                    var u = (function (t, e, i, n) {
                        var a,
                          r,
                          o,
                          s = t.top,
                          l = t.left,
                          u = t.bottom,
                          h = t.right,
                          c = t.chart,
                          f = c.chartArea,
                          d = c.scales,
                          g = 0,
                          p = u - s,
                          y = h - l;
                        if (t.isHorizontal()) {
                          if (((r = (0, v.S)(n, l, h)), (0, v.i)(i))) {
                            var b = Object.keys(i)[0],
                              m = i[b];
                            o = d[b].getPixelForValue(m) + p - e;
                          } else
                            o =
                              "center" === i
                                ? (f.bottom + f.top) / 2 + p - e
                                : tt(t, i, e);
                          a = h - l;
                        } else {
                          if ((0, v.i)(i)) {
                            var x = Object.keys(i)[0],
                              k = i[x];
                            r = d[x].getPixelForValue(k) - y + e;
                          } else
                            r =
                              "center" === i
                                ? (f.left + f.right) / 2 - y + e
                                : tt(t, i, e);
                          ((o = (0, v.S)(n, u, s)),
                            (g = "left" === i ? -v.H : v.H));
                        }
                        return {
                          titleX: r,
                          titleY: o,
                          maxWidth: a,
                          rotation: g,
                        };
                      })(this, l, i, s),
                      h = u.titleX,
                      c = u.titleY,
                      f = u.maxWidth,
                      d = u.rotation;
                    (0, v.M)(t, n.text, 0, 0, r, {
                      color: n.color,
                      maxWidth: f,
                      rotation: d,
                      textAlign: rt(s, i, a),
                      textBaseline: "middle",
                      translation: [h, c],
                    });
                  }
                },
              },
              {
                key: "draw",
                value: function (t) {
                  this._isVisible() &&
                    (this.drawBackground(),
                    this.drawGrid(t),
                    this.drawBorder(),
                    this.drawTitle(),
                    this.drawLabels(t));
                },
              },
              {
                key: "_layers",
                value: function () {
                  var t = this,
                    e = this.options,
                    n = (e.ticks && e.ticks.z) || 0,
                    a = (0, v.v)(e.grid && e.grid.z, -1);
                  return this._isVisible() && this.draw === i.prototype.draw
                    ? [
                        {
                          z: a,
                          draw: function (e) {
                            (t.drawBackground(), t.drawGrid(e), t.drawTitle());
                          },
                        },
                        {
                          z: a + 1,
                          draw: function () {
                            t.drawBorder();
                          },
                        },
                        {
                          z: n,
                          draw: function (e) {
                            t.drawLabels(e);
                          },
                        },
                      ]
                    : [
                        {
                          z: n,
                          draw: function (e) {
                            t.draw(e);
                          },
                        },
                      ];
                },
              },
              {
                key: "getMatchingVisibleMetas",
                value: function (t) {
                  var e,
                    i,
                    n = this.chart.getSortedVisibleDatasetMetas(),
                    a = this.axis + "AxisID",
                    r = [];
                  for (e = 0, i = n.length; e < i; ++e) {
                    var o = n[e];
                    o[a] !== this.id || (t && o.type !== t) || r.push(o);
                  }
                  return r;
                },
              },
              {
                key: "_resolveTickFontOptions",
                value: function (t) {
                  var e = this.options.ticks.setContext(this.getContext(t));
                  return (0, v.O)(e.font);
                },
              },
              {
                key: "_maxDigits",
                value: function () {
                  var t = this._resolveTickFontOptions(0).lineHeight;
                  return (this.isHorizontal() ? this.width : this.height) / t;
                },
              },
            ]),
            i
          );
        })(K),
        st = (function () {
          function t(e, i, n) {
            ((0, f.default)(this, t),
              (this.type = e),
              (this.scope = i),
              (this.override = n),
              (this.items = Object.create(null)));
          }
          return (
            (0, d.default)(t, [
              {
                key: "isForType",
                value: function (t) {
                  return Object.prototype.isPrototypeOf.call(
                    this.type.prototype,
                    t.prototype,
                  );
                },
              },
              {
                key: "register",
                value: function (t) {
                  var e,
                    i = Object.getPrototypeOf(t);
                  (function (t) {
                    return "id" in t && "defaults" in t;
                  })(i) && (e = this.register(i));
                  var n = this.items,
                    a = t.id,
                    r = this.scope + "." + a;
                  if (!a) throw new Error("class does not have id: " + t);
                  return (
                    a in n ||
                      ((n[a] = t),
                      (function (t, e, i) {
                        var n = (0, v.V)(Object.create(null), [
                          i ? v.d.get(i) : {},
                          v.d.get(e),
                          t.defaults,
                        ]);
                        (v.d.set(e, n),
                          t.defaultRoutes &&
                            (function (t, e) {
                              Object.keys(e).forEach(function (i) {
                                var n = i.split("."),
                                  a = n.pop(),
                                  r = [t].concat(n).join("."),
                                  o = e[i].split("."),
                                  s = o.pop(),
                                  l = o.join(".");
                                v.d.route(r, a, l, s);
                              });
                            })(e, t.defaultRoutes));
                        t.descriptors && v.d.describe(e, t.descriptors);
                      })(t, r, e),
                      this.override && v.d.override(t.id, t.overrides)),
                    r
                  );
                },
              },
              {
                key: "get",
                value: function (t) {
                  return this.items[t];
                },
              },
              {
                key: "unregister",
                value: function (t) {
                  var e = this.items,
                    i = t.id,
                    n = this.scope;
                  (i in e && delete e[i],
                    n &&
                      i in v.d[n] &&
                      (delete v.d[n][i], this.override && delete v.U[i]));
                },
              },
            ]),
            t
          );
        })();
      var lt = (function () {
          function t() {
            ((0, f.default)(this, t),
              (this.controllers = new st(R, "datasets", !0)),
              (this.elements = new st(K, "elements")),
              (this.plugins = new st(Object, "plugins")),
              (this.scales = new st(ot, "scales")),
              (this._typedRegistries = [
                this.controllers,
                this.scales,
                this.elements,
              ]));
          }
          return (
            (0, d.default)(t, [
              {
                key: "add",
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), i = 0;
                    i < t;
                    i++
                  )
                    e[i] = arguments[i];
                  this._each("register", e);
                },
              },
              {
                key: "remove",
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), i = 0;
                    i < t;
                    i++
                  )
                    e[i] = arguments[i];
                  this._each("unregister", e);
                },
              },
              {
                key: "addControllers",
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), i = 0;
                    i < t;
                    i++
                  )
                    e[i] = arguments[i];
                  this._each("register", e, this.controllers);
                },
              },
              {
                key: "addElements",
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), i = 0;
                    i < t;
                    i++
                  )
                    e[i] = arguments[i];
                  this._each("register", e, this.elements);
                },
              },
              {
                key: "addPlugins",
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), i = 0;
                    i < t;
                    i++
                  )
                    e[i] = arguments[i];
                  this._each("register", e, this.plugins);
                },
              },
              {
                key: "addScales",
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), i = 0;
                    i < t;
                    i++
                  )
                    e[i] = arguments[i];
                  this._each("register", e, this.scales);
                },
              },
              {
                key: "getController",
                value: function (t) {
                  return this._get(t, this.controllers, "controller");
                },
              },
              {
                key: "getElement",
                value: function (t) {
                  return this._get(t, this.elements, "element");
                },
              },
              {
                key: "getPlugin",
                value: function (t) {
                  return this._get(t, this.plugins, "plugin");
                },
              },
              {
                key: "getScale",
                value: function (t) {
                  return this._get(t, this.scales, "scale");
                },
              },
              {
                key: "removeControllers",
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), i = 0;
                    i < t;
                    i++
                  )
                    e[i] = arguments[i];
                  this._each("unregister", e, this.controllers);
                },
              },
              {
                key: "removeElements",
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), i = 0;
                    i < t;
                    i++
                  )
                    e[i] = arguments[i];
                  this._each("unregister", e, this.elements);
                },
              },
              {
                key: "removePlugins",
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), i = 0;
                    i < t;
                    i++
                  )
                    e[i] = arguments[i];
                  this._each("unregister", e, this.plugins);
                },
              },
              {
                key: "removeScales",
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), i = 0;
                    i < t;
                    i++
                  )
                    e[i] = arguments[i];
                  this._each("unregister", e, this.scales);
                },
              },
              {
                key: "_each",
                value: function (t, e, i) {
                  var n = this;
                  (0, c.Z)(e).forEach(function (e) {
                    var a = i || n._getRegistryForType(e);
                    i || a.isForType(e) || (a === n.plugins && e.id)
                      ? n._exec(t, a, e)
                      : (0, v.Q)(e, function (e) {
                          var a = i || n._getRegistryForType(e);
                          n._exec(t, a, e);
                        });
                  });
                },
              },
              {
                key: "_exec",
                value: function (t, e, i) {
                  var n = (0, v.W)(t);
                  ((0, v.C)(i["before" + n], [], i),
                    e[t](i),
                    (0, v.C)(i["after" + n], [], i));
                },
              },
              {
                key: "_getRegistryForType",
                value: function (t) {
                  for (var e = 0; e < this._typedRegistries.length; e++) {
                    var i = this._typedRegistries[e];
                    if (i.isForType(t)) return i;
                  }
                  return this.plugins;
                },
              },
              {
                key: "_get",
                value: function (t, e, i) {
                  var n = e.get(t);
                  if (void 0 === n)
                    throw new Error(
                      '"' + t + '" is not a registered ' + i + ".",
                    );
                  return n;
                },
              },
            ]),
            t
          );
        })(),
        ut = new lt(),
        ht = (function (t) {
          (0, o.default)(i, t);
          var e = (0, s.default)(i);
          function i() {
            return ((0, f.default)(this, i), e.apply(this, arguments));
          }
          return (
            (0, d.default)(i, [
              {
                key: "update",
                value: function (t) {
                  var e = this._cachedMeta,
                    i = e.data,
                    n = void 0 === i ? [] : i,
                    a = this.chart._animationsDisabled,
                    r = (0, v.q)(e, n, a),
                    o = r.start,
                    s = r.count;
                  if (
                    ((this._drawStart = o),
                    (this._drawCount = s),
                    (0, v.w)(e) && ((o = 0), (s = n.length)),
                    this.options.showLine)
                  ) {
                    var l = e.dataset,
                      u = e._dataset;
                    ((l._chart = this.chart),
                      (l._datasetIndex = this.index),
                      (l._decimated = !!u._decimated),
                      (l.points = n));
                    var h = this.resolveDatasetElementOptions(t);
                    ((h.segment = this.options.segment),
                      this.updateElement(
                        l,
                        void 0,
                        { animated: !a, options: h },
                        t,
                      ));
                  }
                  this.updateElements(n, o, s, t);
                },
              },
              {
                key: "addElements",
                value: function () {
                  var t = this.options.showLine;
                  (!this.datasetElementType &&
                    t &&
                    (this.datasetElementType = ut.getElement("line")),
                    r((0, a.Z)(i.prototype), "addElements", this).call(this));
                },
              },
              {
                key: "updateElements",
                value: function (t, e, i, n) {
                  for (
                    var a = "reset" === n,
                      r = this._cachedMeta,
                      o = r.iScale,
                      s = r.vScale,
                      l = r._stacked,
                      u = r._dataset,
                      h = this.resolveDataElementOptions(e, n),
                      c = this.getSharedOptions(h),
                      f = this.includeOptions(n, c),
                      d = o.axis,
                      g = s.axis,
                      p = this.options,
                      y = p.spanGaps,
                      b = p.segment,
                      m = (0, v.x)(y) ? y : Number.POSITIVE_INFINITY,
                      x = this.chart._animationsDisabled || a || "none" === n,
                      k = e > 0 && this.getParsed(e - 1),
                      _ = e;
                    _ < e + i;
                    ++_
                  ) {
                    var w = t[_],
                      M = this.getParsed(_),
                      S = x ? w : {},
                      P = (0, v.k)(M[g]),
                      C = (S[d] = o.getPixelForValue(M[d], _)),
                      O = (S[g] =
                        a || P
                          ? s.getBasePixel()
                          : s.getPixelForValue(
                              l ? this.applyStack(s, M, l) : M[g],
                              _,
                            ));
                    ((S.skip = isNaN(C) || isNaN(O) || P),
                      (S.stop = _ > 0 && Math.abs(M[d] - k[d]) > m),
                      b && ((S.parsed = M), (S.raw = u.data[_])),
                      f &&
                        (S.options =
                          c ||
                          this.resolveDataElementOptions(
                            _,
                            w.active ? "active" : n,
                          )),
                      x || this.updateElement(w, _, S, n),
                      (k = M));
                  }
                  this.updateSharedOptions(c, n, h);
                },
              },
              {
                key: "getMaxOverflow",
                value: function () {
                  var t = this._cachedMeta,
                    e = t.data || [];
                  if (!this.options.showLine) {
                    for (var i = 0, n = e.length - 1; n >= 0; --n)
                      i = Math.max(
                        i,
                        e[n].size(this.resolveDataElementOptions(n)) / 2,
                      );
                    return i > 0 && i;
                  }
                  var a = t.dataset,
                    r = (a.options && a.options.borderWidth) || 0;
                  if (!e.length) return r;
                  var o = e[0].size(this.resolveDataElementOptions(0)),
                    s = e[e.length - 1].size(
                      this.resolveDataElementOptions(e.length - 1),
                    );
                  return Math.max(r, o, s) / 2;
                },
              },
            ]),
            i
          );
        })(R);
      ((ht.id = "scatter"),
        (ht.defaults = {
          datasetElementType: !1,
          dataElementType: "point",
          showLine: !1,
          fill: !1,
        }),
        (ht.overrides = {
          interaction: { mode: "point" },
          plugins: {
            tooltip: {
              callbacks: {
                title: function () {
                  return "";
                },
                label: function (t) {
                  return "(" + t.label + ", " + t.formattedValue + ")";
                },
              },
            },
          },
          scales: { x: { type: "linear" }, y: { type: "linear" } },
        }));
      function ct() {
        throw new Error(
          "This method is not implemented: Check that a complete date adapter is provided.",
        );
      }
      var ft = (function () {
        function t(e) {
          ((0, f.default)(this, t), (this.options = e || {}));
        }
        return (
          (0, d.default)(t, [
            { key: "init", value: function (t) {} },
            {
              key: "formats",
              value: function () {
                return ct();
              },
            },
            {
              key: "parse",
              value: function (t, e) {
                return ct();
              },
            },
            {
              key: "format",
              value: function (t, e) {
                return ct();
              },
            },
            {
              key: "add",
              value: function (t, e, i) {
                return ct();
              },
            },
            {
              key: "diff",
              value: function (t, e, i) {
                return ct();
              },
            },
            {
              key: "startOf",
              value: function (t, e, i) {
                return ct();
              },
            },
            {
              key: "endOf",
              value: function (t, e) {
                return ct();
              },
            },
          ]),
          t
        );
      })();
      ft.override = function (t) {
        Object.assign(ft.prototype, t);
      };
      var dt = { _date: ft };
      function vt(t, e, i, n) {
        var a = t.controller,
          r = t.data,
          o = t._sorted,
          s = a._cachedMeta.iScale;
        if (s && e === s.axis && "r" !== e && o && r.length) {
          var l = s._reversePixels ? v.Y : v.Z;
          if (!n) return l(r, e, i);
          if (a._sharedOptions) {
            var u = r[0],
              h = "function" === typeof u.getRange && u.getRange(e);
            if (h) {
              var c = l(r, e, i - h),
                f = l(r, e, i + h);
              return { lo: c.lo, hi: f.hi };
            }
          }
        }
        return { lo: 0, hi: r.length - 1 };
      }
      function gt(t, e, i, n, a) {
        for (
          var r = t.getSortedVisibleDatasetMetas(),
            o = i[e],
            s = 0,
            l = r.length;
          s < l;
          ++s
        )
          for (
            var u = r[s],
              h = u.index,
              c = u.data,
              f = vt(r[s], e, o, a),
              d = f.lo,
              v = f.hi,
              g = d;
            g <= v;
            ++g
          ) {
            var p = c[g];
            p.skip || n(p, h, g);
          }
      }
      function pt(t, e, i, n, a) {
        var r = [];
        if (!a && !t.isPointInArea(e)) return r;
        return (
          gt(
            t,
            i,
            e,
            function (i, o, s) {
              (a || (0, v.$)(i, t.chartArea, 0)) &&
                i.inRange(e.x, e.y, n) &&
                r.push({ element: i, datasetIndex: o, index: s });
            },
            !0,
          ),
          r
        );
      }
      function yt(t, e, i, n, a, r) {
        var o = [],
          s = (function (t) {
            var e = -1 !== t.indexOf("x"),
              i = -1 !== t.indexOf("y");
            return function (t, n) {
              var a = e ? Math.abs(t.x - n.x) : 0,
                r = i ? Math.abs(t.y - n.y) : 0;
              return Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2));
            };
          })(i),
          l = Number.POSITIVE_INFINITY;
        return (
          gt(t, i, e, function (i, u, h) {
            var c = i.inRange(e.x, e.y, a);
            if (!n || c) {
              var f = i.getCenterPoint(a);
              if (!!r || t.isPointInArea(f) || c) {
                var d = s(e, f);
                d < l
                  ? ((o = [{ element: i, datasetIndex: u, index: h }]), (l = d))
                  : d === l &&
                    o.push({ element: i, datasetIndex: u, index: h });
              }
            }
          }),
          o
        );
      }
      function bt(t, e, i, n, a, r) {
        return r || t.isPointInArea(e)
          ? "r" !== i || n
            ? yt(t, e, i, n, a, r)
            : (function (t, e, i, n) {
                var a = [];
                return (
                  gt(t, i, e, function (t, i, r) {
                    var o = t.getProps(["startAngle", "endAngle"], n),
                      s = o.startAngle,
                      l = o.endAngle,
                      u = (0, v.a0)(t, { x: e.x, y: e.y }).angle;
                    (0, v.p)(u, s, l) &&
                      a.push({ element: t, datasetIndex: i, index: r });
                  }),
                  a
                );
              })(t, e, i, a)
          : [];
      }
      function mt(t, e, i, n, a) {
        var r = [],
          o = "x" === i ? "inXRange" : "inYRange",
          s = !1;
        return (
          gt(t, i, e, function (t, n, l) {
            t[o](e[i], a) &&
              (r.push({ element: t, datasetIndex: n, index: l }),
              (s = s || t.inRange(e.x, e.y, a)));
          }),
          n && !s ? [] : r
        );
      }
      var xt = {
          evaluateInteractionItems: gt,
          modes: {
            index: function (t, e, i, n) {
              var a = (0, v.X)(e, t),
                r = i.axis || "x",
                o = i.includeInvisible || !1,
                s = i.intersect ? pt(t, a, r, n, o) : bt(t, a, r, !1, n, o),
                l = [];
              return s.length
                ? (t.getSortedVisibleDatasetMetas().forEach(function (t) {
                    var e = s[0].index,
                      i = t.data[e];
                    i &&
                      !i.skip &&
                      l.push({ element: i, datasetIndex: t.index, index: e });
                  }),
                  l)
                : [];
            },
            dataset: function (t, e, i, n) {
              var a = (0, v.X)(e, t),
                r = i.axis || "xy",
                o = i.includeInvisible || !1,
                s = i.intersect ? pt(t, a, r, n, o) : bt(t, a, r, !1, n, o);
              if (s.length > 0) {
                var l = s[0].datasetIndex,
                  u = t.getDatasetMeta(l).data;
                s = [];
                for (var h = 0; h < u.length; ++h)
                  s.push({ element: u[h], datasetIndex: l, index: h });
              }
              return s;
            },
            point: function (t, e, i, n) {
              return pt(
                t,
                (0, v.X)(e, t),
                i.axis || "xy",
                n,
                i.includeInvisible || !1,
              );
            },
            nearest: function (t, e, i, n) {
              var a = (0, v.X)(e, t),
                r = i.axis || "xy",
                o = i.includeInvisible || !1;
              return bt(t, a, r, i.intersect, n, o);
            },
            x: function (t, e, i, n) {
              return mt(t, (0, v.X)(e, t), "x", i.intersect, n);
            },
            y: function (t, e, i, n) {
              return mt(t, (0, v.X)(e, t), "y", i.intersect, n);
            },
          },
        },
        kt = ["left", "top", "right", "bottom"];
      function _t(t, e) {
        return t.filter(function (t) {
          return t.pos === e;
        });
      }
      function wt(t, e) {
        return t.filter(function (t) {
          return -1 === kt.indexOf(t.pos) && t.box.axis === e;
        });
      }
      function Mt(t, e) {
        return t.sort(function (t, i) {
          var n = e ? i : t,
            a = e ? t : i;
          return n.weight === a.weight
            ? n.index - a.index
            : n.weight - a.weight;
        });
      }
      function St(t, e) {
        var i,
          n,
          a,
          r = (function (t) {
            var e,
              i = {},
              n = (0, h.Z)(t);
            try {
              for (n.s(); !(e = n.n()).done;) {
                var a = e.value,
                  r = a.stack,
                  o = a.pos,
                  s = a.stackWeight;
                if (r && kt.includes(o)) {
                  var l =
                    i[r] ||
                    (i[r] = { count: 0, placed: 0, weight: 0, size: 0 });
                  (l.count++, (l.weight += s));
                }
              }
            } catch (u) {
              n.e(u);
            } finally {
              n.f();
            }
            return i;
          })(t),
          o = e.vBoxMaxWidth,
          s = e.hBoxMaxHeight;
        for (i = 0, n = t.length; i < n; ++i) {
          var l = (a = t[i]).box.fullSize,
            u = r[a.stack],
            c = u && a.stackWeight / u.weight;
          a.horizontal
            ? ((a.width = c ? c * o : l && e.availableWidth), (a.height = s))
            : ((a.width = o), (a.height = c ? c * s : l && e.availableHeight));
        }
        return r;
      }
      function Pt(t, e, i, n) {
        return Math.max(t[i], e[i]) + Math.max(t[n], e[n]);
      }
      function Ct(t, e) {
        ((t.top = Math.max(t.top, e.top)),
          (t.left = Math.max(t.left, e.left)),
          (t.bottom = Math.max(t.bottom, e.bottom)),
          (t.right = Math.max(t.right, e.right)));
      }
      function Ot(t, e, i, n) {
        var a = i.pos,
          r = i.box,
          o = t.maxPadding;
        if (!(0, v.i)(a)) {
          i.size && (t[a] -= i.size);
          var s = n[i.stack] || { size: 0, count: 1 };
          ((s.size = Math.max(s.size, i.horizontal ? r.height : r.width)),
            (i.size = s.size / s.count),
            (t[a] += i.size));
        }
        r.getPadding && Ct(o, r.getPadding());
        var l = Math.max(0, e.outerWidth - Pt(o, t, "left", "right")),
          u = Math.max(0, e.outerHeight - Pt(o, t, "top", "bottom")),
          h = l !== t.w,
          c = u !== t.h;
        return (
          (t.w = l),
          (t.h = u),
          i.horizontal ? { same: h, other: c } : { same: c, other: h }
        );
      }
      function Dt(t, e) {
        var i = e.maxPadding;
        function n(t) {
          var n = { left: 0, top: 0, right: 0, bottom: 0 };
          return (
            t.forEach(function (t) {
              n[t] = Math.max(e[t], i[t]);
            }),
            n
          );
        }
        return n(t ? ["left", "right"] : ["top", "bottom"]);
      }
      function At(t, e, i, n) {
        var a,
          r,
          o,
          s,
          l,
          u,
          h = [];
        for (a = 0, r = t.length, l = 0; a < r; ++a) {
          (s = (o = t[a]).box).update(
            o.width || e.w,
            o.height || e.h,
            Dt(o.horizontal, e),
          );
          var c = Ot(e, i, o, n),
            f = c.same,
            d = c.other;
          ((l |= f && h.length), (u = u || d), s.fullSize || h.push(o));
        }
        return (l && At(h, e, i, n)) || u;
      }
      function Tt(t, e, i, n, a) {
        ((t.top = i),
          (t.left = e),
          (t.right = e + n),
          (t.bottom = i + a),
          (t.width = n),
          (t.height = a));
      }
      function Et(t, e, i, n) {
        var a,
          r = i.padding,
          o = e.x,
          s = e.y,
          l = (0, h.Z)(t);
        try {
          for (l.s(); !(a = l.n()).done;) {
            var u = a.value,
              c = u.box,
              f = n[u.stack] || { count: 1, placed: 0, weight: 1 },
              d = u.stackWeight / f.weight || 1;
            if (u.horizontal) {
              var g = e.w * d,
                p = f.size || c.height;
              ((0, v.j)(f.start) && (s = f.start),
                c.fullSize
                  ? Tt(c, r.left, s, i.outerWidth - r.right - r.left, p)
                  : Tt(c, e.left + f.placed, s, g, p),
                (f.start = s),
                (f.placed += g),
                (s = c.bottom));
            } else {
              var y = e.h * d,
                b = f.size || c.width;
              ((0, v.j)(f.start) && (o = f.start),
                c.fullSize
                  ? Tt(c, o, r.top, b, i.outerHeight - r.bottom - r.top)
                  : Tt(c, o, e.top + f.placed, b, y),
                (f.start = o),
                (f.placed += y),
                (o = c.right));
            }
          }
        } catch (m) {
          l.e(m);
        } finally {
          l.f();
        }
        ((e.x = o), (e.y = s));
      }
      v.d.set("layout", {
        autoPadding: !0,
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
      });
      var Rt = {
          addBox: function (t, e) {
            (t.boxes || (t.boxes = []),
              (e.fullSize = e.fullSize || !1),
              (e.position = e.position || "top"),
              (e.weight = e.weight || 0),
              (e._layers =
                e._layers ||
                function () {
                  return [
                    {
                      z: 0,
                      draw: function (t) {
                        e.draw(t);
                      },
                    },
                  ];
                }),
              t.boxes.push(e));
          },
          removeBox: function (t, e) {
            var i = t.boxes ? t.boxes.indexOf(e) : -1;
            -1 !== i && t.boxes.splice(i, 1);
          },
          configure: function (t, e, i) {
            ((e.fullSize = i.fullSize),
              (e.position = i.position),
              (e.weight = i.weight));
          },
          update: function (t, e, i, n) {
            if (t) {
              var a = (0, v.K)(t.options.layout.padding),
                r = Math.max(e - a.width, 0),
                o = Math.max(i - a.height, 0),
                s = (function (t) {
                  var e = (function (t) {
                      var e,
                        i,
                        n,
                        a,
                        r,
                        o,
                        s = [];
                      for (e = 0, i = (t || []).length; e < i; ++e) {
                        var l = (n = t[e]);
                        a = l.position;
                        var u = l.options;
                        r = u.stack;
                        var h = u.stackWeight;
                        ((o = void 0 === h ? 1 : h),
                          s.push({
                            index: e,
                            box: n,
                            pos: a,
                            horizontal: n.isHorizontal(),
                            weight: n.weight,
                            stack: r && a + r,
                            stackWeight: o,
                          }));
                      }
                      return s;
                    })(t),
                    i = Mt(
                      e.filter(function (t) {
                        return t.box.fullSize;
                      }),
                      !0,
                    ),
                    n = Mt(_t(e, "left"), !0),
                    a = Mt(_t(e, "right")),
                    r = Mt(_t(e, "top"), !0),
                    o = Mt(_t(e, "bottom")),
                    s = wt(e, "x"),
                    l = wt(e, "y");
                  return {
                    fullSize: i,
                    leftAndTop: n.concat(r),
                    rightAndBottom: a.concat(l).concat(o).concat(s),
                    chartArea: _t(e, "chartArea"),
                    vertical: n.concat(a).concat(l),
                    horizontal: r.concat(o).concat(s),
                  };
                })(t.boxes),
                l = s.vertical,
                u = s.horizontal;
              (0, v.Q)(t.boxes, function (t) {
                "function" === typeof t.beforeLayout && t.beforeLayout();
              });
              var h =
                  l.reduce(function (t, e) {
                    return e.box.options && !1 === e.box.options.display
                      ? t
                      : t + 1;
                  }, 0) || 1,
                c = Object.freeze({
                  outerWidth: e,
                  outerHeight: i,
                  padding: a,
                  availableWidth: r,
                  availableHeight: o,
                  vBoxMaxWidth: r / 2 / h,
                  hBoxMaxHeight: o / 2,
                }),
                f = Object.assign({}, a);
              Ct(f, (0, v.K)(n));
              var d = Object.assign(
                  { maxPadding: f, w: r, h: o, x: a.left, y: a.top },
                  a,
                ),
                g = St(l.concat(u), c);
              (At(s.fullSize, d, c, g),
                At(l, d, c, g),
                At(u, d, c, g) && At(l, d, c, g),
                (function (t) {
                  var e = t.maxPadding;
                  function i(i) {
                    var n = Math.max(e[i] - t[i], 0);
                    return ((t[i] += n), n);
                  }
                  ((t.y += i("top")),
                    (t.x += i("left")),
                    i("right"),
                    i("bottom"));
                })(d),
                Et(s.leftAndTop, d, c, g),
                (d.x += d.w),
                (d.y += d.h),
                Et(s.rightAndBottom, d, c, g),
                (t.chartArea = {
                  left: d.left,
                  top: d.top,
                  right: d.left + d.w,
                  bottom: d.top + d.h,
                  height: d.h,
                  width: d.w,
                }),
                (0, v.Q)(s.chartArea, function (e) {
                  var i = e.box;
                  (Object.assign(i, t.chartArea),
                    i.update(d.w, d.h, {
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                    }));
                }));
            }
          },
        },
        Lt = (function () {
          function t() {
            (0, f.default)(this, t);
          }
          return (
            (0, d.default)(t, [
              { key: "acquireContext", value: function (t, e) {} },
              {
                key: "releaseContext",
                value: function (t) {
                  return !1;
                },
              },
              { key: "addEventListener", value: function (t, e, i) {} },
              { key: "removeEventListener", value: function (t, e, i) {} },
              {
                key: "getDevicePixelRatio",
                value: function () {
                  return 1;
                },
              },
              {
                key: "getMaximumSize",
                value: function (t, e, i, n) {
                  return (
                    (e = Math.max(0, e || t.width)),
                    (i = i || t.height),
                    { width: e, height: Math.max(0, n ? Math.floor(e / n) : i) }
                  );
                },
              },
              {
                key: "isAttached",
                value: function (t) {
                  return !0;
                },
              },
              { key: "updateConfig", value: function (t) {} },
            ]),
            t
          );
        })(),
        It = (function (t) {
          (0, o.default)(i, t);
          var e = (0, s.default)(i);
          function i() {
            return ((0, f.default)(this, i), e.apply(this, arguments));
          }
          return (
            (0, d.default)(i, [
              {
                key: "acquireContext",
                value: function (t) {
                  return (t && t.getContext && t.getContext("2d")) || null;
                },
              },
              {
                key: "updateConfig",
                value: function (t) {
                  t.options.animation = !1;
                },
              },
            ]),
            i
          );
        })(Lt),
        Ft = "$chartjs",
        zt = {
          touchstart: "mousedown",
          touchmove: "mousemove",
          touchend: "mouseup",
          pointerenter: "mouseenter",
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointerleave: "mouseout",
          pointerout: "mouseout",
        },
        Vt = function (t) {
          return null === t || "" === t;
        };
      var jt = !!v.a5 && { passive: !0 };
      function Wt(t, e, i) {
        t.canvas.removeEventListener(e, i, jt);
      }
      function Nt(t, e) {
        var i,
          n = (0, h.Z)(t);
        try {
          for (n.s(); !(i = n.n()).done;) {
            var a = i.value;
            if (a === e || a.contains(e)) return !0;
          }
        } catch (r) {
          n.e(r);
        } finally {
          n.f();
        }
      }
      function Bt(t, e, i) {
        var n = t.canvas,
          a = new MutationObserver(function (t) {
            var e,
              a = !1,
              r = (0, h.Z)(t);
            try {
              for (r.s(); !(e = r.n()).done;) {
                var o = e.value;
                a = (a = a || Nt(o.addedNodes, n)) && !Nt(o.removedNodes, n);
              }
            } catch (s) {
              r.e(s);
            } finally {
              r.f();
            }
            a && i();
          });
        return (a.observe(document, { childList: !0, subtree: !0 }), a);
      }
      function Ht(t, e, i) {
        var n = t.canvas,
          a = new MutationObserver(function (t) {
            var e,
              a = !1,
              r = (0, h.Z)(t);
            try {
              for (r.s(); !(e = r.n()).done;) {
                var o = e.value;
                a = (a = a || Nt(o.removedNodes, n)) && !Nt(o.addedNodes, n);
              }
            } catch (s) {
              r.e(s);
            } finally {
              r.f();
            }
            a && i();
          });
        return (a.observe(document, { childList: !0, subtree: !0 }), a);
      }
      var Yt = new Map(),
        Zt = 0;
      function Xt() {
        var t = window.devicePixelRatio;
        t !== Zt &&
          ((Zt = t),
          Yt.forEach(function (e, i) {
            i.currentDevicePixelRatio !== t && e();
          }));
      }
      function Ut(t, e, i) {
        var n = t.canvas,
          a = n && (0, v.a2)(n);
        if (a) {
          var r = (0, v.a4)(function (t, e) {
              var n = a.clientWidth;
              (i(t, e), n < a.clientWidth && i());
            }, window),
            o = new ResizeObserver(function (t) {
              var e = t[0],
                i = e.contentRect.width,
                n = e.contentRect.height;
              (0 === i && 0 === n) || r(i, n);
            });
          return (
            o.observe(a),
            (function (t, e) {
              (Yt.size || window.addEventListener("resize", Xt), Yt.set(t, e));
            })(t, r),
            o
          );
        }
      }
      function $t(t, e, i) {
        (i && i.disconnect(),
          "resize" === e &&
            (function (t) {
              (Yt.delete(t),
                Yt.size || window.removeEventListener("resize", Xt));
            })(t));
      }
      function Kt(t, e, i) {
        var n = t.canvas,
          a = (0, v.a4)(
            function (e) {
              null !== t.ctx &&
                i(
                  (function (t, e) {
                    var i = zt[t.type] || t.type,
                      n = (0, v.X)(t, e),
                      a = n.x,
                      r = n.y;
                    return {
                      type: i,
                      chart: e,
                      native: t,
                      x: void 0 !== a ? a : null,
                      y: void 0 !== r ? r : null,
                    };
                  })(e, t),
                );
            },
            t,
            function (t) {
              var e = t[0];
              return [e, e.offsetX, e.offsetY];
            },
          );
        return (
          (function (t, e, i) {
            t.addEventListener(e, i, jt);
          })(n, e, a),
          a
        );
      }
      var Qt = (function (t) {
        (0, o.default)(i, t);
        var e = (0, s.default)(i);
        function i() {
          return ((0, f.default)(this, i), e.apply(this, arguments));
        }
        return (
          (0, d.default)(i, [
            {
              key: "acquireContext",
              value: function (t, e) {
                var i = t && t.getContext && t.getContext("2d");
                return i && i.canvas === t
                  ? ((function (t, e) {
                      var i = t.style,
                        n = t.getAttribute("height"),
                        a = t.getAttribute("width");
                      if (
                        ((t[Ft] = {
                          initial: {
                            height: n,
                            width: a,
                            style: {
                              display: i.display,
                              height: i.height,
                              width: i.width,
                            },
                          },
                        }),
                        (i.display = i.display || "block"),
                        (i.boxSizing = i.boxSizing || "border-box"),
                        Vt(a))
                      ) {
                        var r = (0, v.a3)(t, "width");
                        void 0 !== r && (t.width = r);
                      }
                      if (Vt(n))
                        if ("" === t.style.height)
                          t.height = t.width / (e || 2);
                        else {
                          var o = (0, v.a3)(t, "height");
                          void 0 !== o && (t.height = o);
                        }
                    })(t, e),
                    i)
                  : null;
              },
            },
            {
              key: "releaseContext",
              value: function (t) {
                var e = t.canvas;
                if (!e[Ft]) return !1;
                var i = e[Ft].initial;
                ["height", "width"].forEach(function (t) {
                  var n = i[t];
                  (0, v.k)(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
                });
                var n = i.style || {};
                return (
                  Object.keys(n).forEach(function (t) {
                    e.style[t] = n[t];
                  }),
                  (e.width = e.width),
                  delete e[Ft],
                  !0
                );
              },
            },
            {
              key: "addEventListener",
              value: function (t, e, i) {
                this.removeEventListener(t, e);
                var n = t.$proxies || (t.$proxies = {}),
                  a = { attach: Bt, detach: Ht, resize: Ut }[e] || Kt;
                n[e] = a(t, e, i);
              },
            },
            {
              key: "removeEventListener",
              value: function (t, e) {
                var i = t.$proxies || (t.$proxies = {}),
                  n = i[e];
                n &&
                  (({ attach: $t, detach: $t, resize: $t }[e] || Wt)(t, e, n),
                  (i[e] = void 0));
              },
            },
            {
              key: "getDevicePixelRatio",
              value: function () {
                return window.devicePixelRatio;
              },
            },
            {
              key: "getMaximumSize",
              value: function (t, e, i, n) {
                return (0, v.a1)(t, e, i, n);
              },
            },
            {
              key: "isAttached",
              value: function (t) {
                var e = (0, v.a2)(t);
                return !(!e || !e.isConnected);
              },
            },
          ]),
          i
        );
      })(Lt);
      var qt = (function () {
        function t() {
          ((0, f.default)(this, t), (this._init = []));
        }
        return (
          (0, d.default)(t, [
            {
              key: "notify",
              value: function (t, e, i, n) {
                "beforeInit" === e &&
                  ((this._init = this._createDescriptors(t, !0)),
                  this._notify(this._init, t, "install"));
                var a = n
                    ? this._descriptors(t).filter(n)
                    : this._descriptors(t),
                  r = this._notify(a, t, e, i);
                return (
                  "afterDestroy" === e &&
                    (this._notify(a, t, "stop"),
                    this._notify(this._init, t, "uninstall")),
                  r
                );
              },
            },
            {
              key: "_notify",
              value: function (t, e, i, n) {
                n = n || {};
                var a,
                  r = (0, h.Z)(t);
                try {
                  for (r.s(); !(a = r.n()).done;) {
                    var o = a.value,
                      s = o.plugin,
                      l = s[i],
                      u = [e, n, o.options];
                    if (!1 === (0, v.C)(l, u, s) && n.cancelable) return !1;
                  }
                } catch (c) {
                  r.e(c);
                } finally {
                  r.f();
                }
                return !0;
              },
            },
            {
              key: "invalidate",
              value: function () {
                (0, v.k)(this._cache) ||
                  ((this._oldCache = this._cache), (this._cache = void 0));
              },
            },
            {
              key: "_descriptors",
              value: function (t) {
                if (this._cache) return this._cache;
                var e = (this._cache = this._createDescriptors(t));
                return (this._notifyStateChanges(t), e);
              },
            },
            {
              key: "_createDescriptors",
              value: function (t, e) {
                var i = t && t.config,
                  n = (0, v.v)(i.options && i.options.plugins, {}),
                  a = (function (t) {
                    for (
                      var e = {},
                        i = [],
                        n = Object.keys(ut.plugins.items),
                        a = 0;
                      a < n.length;
                      a++
                    )
                      i.push(ut.getPlugin(n[a]));
                    for (var r = t.plugins || [], o = 0; o < r.length; o++) {
                      var s = r[o];
                      -1 === i.indexOf(s) && (i.push(s), (e[s.id] = !0));
                    }
                    return { plugins: i, localIds: e };
                  })(i);
                return !1 !== n || e
                  ? (function (t, e, i, n) {
                      var a,
                        r = e.plugins,
                        o = e.localIds,
                        s = [],
                        l = t.getContext(),
                        u = (0, h.Z)(r);
                      try {
                        for (u.s(); !(a = u.n()).done;) {
                          var c = a.value,
                            f = c.id,
                            d = Gt(i[f], n);
                          null !== d &&
                            s.push({
                              plugin: c,
                              options: Jt(
                                t.config,
                                { plugin: c, local: o[f] },
                                d,
                                l,
                              ),
                            });
                        }
                      } catch (v) {
                        u.e(v);
                      } finally {
                        u.f();
                      }
                      return s;
                    })(t, a, n, e)
                  : [];
              },
            },
            {
              key: "_notifyStateChanges",
              value: function (t) {
                var e = this._oldCache || [],
                  i = this._cache,
                  n = function (t, e) {
                    return t.filter(function (t) {
                      return !e.some(function (e) {
                        return t.plugin.id === e.plugin.id;
                      });
                    });
                  };
                (this._notify(n(e, i), t, "stop"),
                  this._notify(n(i, e), t, "start"));
              },
            },
          ]),
          t
        );
      })();
      function Gt(t, e) {
        return e || !1 !== t ? (!0 === t ? {} : t) : null;
      }
      function Jt(t, e, i, n) {
        var a = e.plugin,
          r = e.local,
          o = t.pluginScopeKeys(a),
          s = t.getOptionScopes(i, o);
        return (
          r && a.defaults && s.push(a.defaults),
          t.createResolver(s, n, [""], {
            scriptable: !1,
            indexable: !1,
            allKeys: !0,
          })
        );
      }
      function te(t, e) {
        var i = v.d.datasets[t] || {};
        return (
          ((e.datasets || {})[t] || {}).indexAxis ||
          e.indexAxis ||
          i.indexAxis ||
          "x"
        );
      }
      function ee(t, e) {
        return "x" === t || "y" === t
          ? t
          : e.axis ||
              ("top" === (i = e.position) || "bottom" === i
                ? "x"
                : "left" === i || "right" === i
                  ? "y"
                  : void 0) ||
              t.charAt(0).toLowerCase();
        var i;
      }
      function ie(t) {
        var e = t.options || (t.options = {});
        ((e.plugins = (0, v.v)(e.plugins, {})),
          (e.scales = (function (t, e) {
            var i = v.U[t.type] || { scales: {} },
              n = e.scales || {},
              a = te(t.type, e),
              r = Object.create(null),
              o = Object.create(null);
            return (
              Object.keys(n).forEach(function (t) {
                var e = n[t];
                if (!(0, v.i)(e))
                  return console.error(
                    "Invalid scale configuration for scale: ".concat(t),
                  );
                if (e._proxy)
                  return console.warn(
                    "Ignoring resolver passed as options for scale: ".concat(t),
                  );
                var s = ee(t, e),
                  l = (function (t, e) {
                    return t === e ? "_index_" : "_value_";
                  })(s, a),
                  u = i.scales || {};
                ((r[s] = r[s] || t),
                  (o[t] = (0, v.ac)(Object.create(null), [
                    { axis: s },
                    e,
                    u[s],
                    u[l],
                  ])));
              }),
              t.data.datasets.forEach(function (i) {
                var a = i.type || t.type,
                  s = i.indexAxis || te(a, e),
                  l = (v.U[a] || {}).scales || {};
                Object.keys(l).forEach(function (t) {
                  var e = (function (t, e) {
                      var i = t;
                      return (
                        "_index_" === t
                          ? (i = e)
                          : "_value_" === t && (i = "x" === e ? "y" : "x"),
                        i
                      );
                    })(t, s),
                    a = i[e + "AxisID"] || r[e] || e;
                  ((o[a] = o[a] || Object.create(null)),
                    (0, v.ac)(o[a], [{ axis: e }, n[a], l[t]]));
                });
              }),
              Object.keys(o).forEach(function (t) {
                var e = o[t];
                (0, v.ac)(e, [v.d.scales[e.type], v.d.scale]);
              }),
              o
            );
          })(t, e)));
      }
      function ne(t) {
        return (
          ((t = t || {}).datasets = t.datasets || []),
          (t.labels = t.labels || []),
          t
        );
      }
      var ae = new Map(),
        re = new Set();
      function oe(t, e) {
        var i = ae.get(t);
        return (i || ((i = e()), ae.set(t, i), re.add(i)), i);
      }
      var se = function (t, e, i) {
          var n = (0, v.f)(e, i);
          void 0 !== n && t.add(n);
        },
        le = (function () {
          function t(e) {
            ((0, f.default)(this, t),
              (this._config = (function (t) {
                return (((t = t || {}).data = ne(t.data)), ie(t), t);
              })(e)),
              (this._scopeCache = new Map()),
              (this._resolverCache = new Map()));
          }
          return (
            (0, d.default)(t, [
              {
                key: "platform",
                get: function () {
                  return this._config.platform;
                },
              },
              {
                key: "type",
                get: function () {
                  return this._config.type;
                },
                set: function (t) {
                  this._config.type = t;
                },
              },
              {
                key: "data",
                get: function () {
                  return this._config.data;
                },
                set: function (t) {
                  this._config.data = ne(t);
                },
              },
              {
                key: "options",
                get: function () {
                  return this._config.options;
                },
                set: function (t) {
                  this._config.options = t;
                },
              },
              {
                key: "plugins",
                get: function () {
                  return this._config.plugins;
                },
              },
              {
                key: "update",
                value: function () {
                  var t = this._config;
                  (this.clearCache(), ie(t));
                },
              },
              {
                key: "clearCache",
                value: function () {
                  (this._scopeCache.clear(), this._resolverCache.clear());
                },
              },
              {
                key: "datasetScopeKeys",
                value: function (t) {
                  return oe(t, function () {
                    return [["datasets.".concat(t), ""]];
                  });
                },
              },
              {
                key: "datasetAnimationScopeKeys",
                value: function (t, e) {
                  return oe(
                    "".concat(t, ".transition.").concat(e),
                    function () {
                      return [
                        [
                          "datasets.".concat(t, ".transitions.").concat(e),
                          "transitions.".concat(e),
                        ],
                        ["datasets.".concat(t), ""],
                      ];
                    },
                  );
                },
              },
              {
                key: "datasetElementScopeKeys",
                value: function (t, e) {
                  return oe("".concat(t, "-").concat(e), function () {
                    return [
                      [
                        "datasets.".concat(t, ".elements.").concat(e),
                        "datasets.".concat(t),
                        "elements.".concat(e),
                        "",
                      ],
                    ];
                  });
                },
              },
              {
                key: "pluginScopeKeys",
                value: function (t) {
                  var e = t.id,
                    i = this.type;
                  return oe("".concat(i, "-plugin-").concat(e), function () {
                    return [
                      ["plugins.".concat(e)].concat(
                        (0, c.Z)(t.additionalOptionScopes || []),
                      ),
                    ];
                  });
                },
              },
              {
                key: "_cachedScopes",
                value: function (t, e) {
                  var i = this._scopeCache,
                    n = i.get(t);
                  return ((n && !e) || ((n = new Map()), i.set(t, n)), n);
                },
              },
              {
                key: "getOptionScopes",
                value: function (t, e, i) {
                  var n = this.options,
                    a = this.type,
                    r = this._cachedScopes(t, i),
                    o = r.get(e);
                  if (o) return o;
                  var s = new Set();
                  e.forEach(function (e) {
                    (t &&
                      (s.add(t),
                      e.forEach(function (e) {
                        return se(s, t, e);
                      })),
                      e.forEach(function (t) {
                        return se(s, n, t);
                      }),
                      e.forEach(function (t) {
                        return se(s, v.U[a] || {}, t);
                      }),
                      e.forEach(function (t) {
                        return se(s, v.d, t);
                      }),
                      e.forEach(function (t) {
                        return se(s, v.a7, t);
                      }));
                  });
                  var l = Array.from(s);
                  return (
                    0 === l.length && l.push(Object.create(null)),
                    re.has(e) && r.set(e, l),
                    l
                  );
                },
              },
              {
                key: "chartOptionScopes",
                value: function () {
                  var t = this.options,
                    e = this.type;
                  return [
                    t,
                    v.U[e] || {},
                    v.d.datasets[e] || {},
                    { type: e },
                    v.d,
                    v.a7,
                  ];
                },
              },
              {
                key: "resolveNamedOptions",
                value: function (t, e, i) {
                  var n =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : [""],
                    a = { $shared: !0 },
                    r = ue(this._resolverCache, t, n),
                    o = r.resolver,
                    s = r.subPrefixes,
                    l = o;
                  if (
                    (function (t, e) {
                      var i,
                        n = (0, v.ab)(t),
                        a = n.isScriptable,
                        r = n.isIndexable,
                        o = (0, h.Z)(e);
                      try {
                        for (o.s(); !(i = o.n()).done;) {
                          var s = i.value,
                            l = a(s),
                            u = r(s),
                            c = (u || l) && t[s];
                          if (
                            (l && ((0, v.a8)(c) || he(c))) ||
                            (u && (0, v.b)(c))
                          )
                            return !0;
                        }
                      } catch (f) {
                        o.e(f);
                      } finally {
                        o.f();
                      }
                      return !1;
                    })(o, e)
                  ) {
                    ((a.$shared = !1), (i = (0, v.a8)(i) ? i() : i));
                    var u = this.createResolver(t, i, s);
                    l = (0, v.a9)(o, i, u);
                  }
                  var c,
                    f = (0, h.Z)(e);
                  try {
                    for (f.s(); !(c = f.n()).done;) {
                      var d = c.value;
                      a[d] = l[d];
                    }
                  } catch (g) {
                    f.e(g);
                  } finally {
                    f.f();
                  }
                  return a;
                },
              },
              {
                key: "createResolver",
                value: function (t, e) {
                  var i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : [""],
                    n = arguments.length > 3 ? arguments[3] : void 0,
                    a = ue(this._resolverCache, t, i).resolver;
                  return (0, v.i)(e) ? (0, v.a9)(a, e, void 0, n) : a;
                },
              },
            ]),
            t
          );
        })();
      function ue(t, e, i) {
        var n = t.get(e);
        n || ((n = new Map()), t.set(e, n));
        var a = i.join(),
          r = n.get(a);
        r ||
          ((r = {
            resolver: (0, v.aa)(e, i),
            subPrefixes: i.filter(function (t) {
              return !t.toLowerCase().includes("hover");
            }),
          }),
          n.set(a, r));
        return r;
      }
      var he = function (t) {
        return (
          (0, v.i)(t) &&
          Object.getOwnPropertyNames(t).reduce(function (e, i) {
            return e || (0, v.a8)(t[i]);
          }, !1)
        );
      };
      var ce = ["top", "bottom", "left", "right", "chartArea"];
      function fe(t, e) {
        return (
          "top" === t || "bottom" === t || (-1 === ce.indexOf(t) && "x" === e)
        );
      }
      function de(t, e) {
        return function (i, n) {
          return i[t] === n[t] ? i[e] - n[e] : i[t] - n[t];
        };
      }
      function ve(t) {
        var e = t.chart,
          i = e.options.animation;
        (e.notifyPlugins("afterRender"), (0, v.C)(i && i.onComplete, [t], e));
      }
      function ge(t) {
        var e = t.chart,
          i = e.options.animation;
        (0, v.C)(i && i.onProgress, [t], e);
      }
      function pe(t) {
        return (
          (0, v.a6)() && "string" === typeof t
            ? (t = document.getElementById(t))
            : t && t.length && (t = t[0]),
          t && t.canvas && (t = t.canvas),
          t
        );
      }
      var ye = {},
        be = function (t) {
          var e = pe(t);
          return Object.values(ye)
            .filter(function (t) {
              return t.canvas === e;
            })
            .pop();
        };
      function me(t, e, i) {
        for (var n = 0, a = Object.keys(t); n < a.length; n++) {
          var r = a[n],
            o = +r;
          if (o >= e) {
            var s = t[r];
            (delete t[r], (i > 0 || o > e) && (t[o + i] = s));
          }
        }
      }
      var xe = (function () {
          function t(e, i) {
            var n = this;
            (0, f.default)(this, t);
            var a = (this.config = new le(i)),
              r = pe(e),
              o = be(r);
            if (o)
              throw new Error(
                "Canvas is already in use. Chart with ID '" +
                  o.id +
                  "' must be destroyed before the canvas with ID '" +
                  o.canvas.id +
                  "' can be reused.",
              );
            var s = a.createResolver(a.chartOptionScopes(), this.getContext());
            ((this.platform = new (
              a.platform ||
              (function (t) {
                return !(0, v.a6)() ||
                  ("undefined" !== typeof OffscreenCanvas &&
                    t instanceof OffscreenCanvas)
                  ? It
                  : Qt;
              })(r)
            )()),
              this.platform.updateConfig(a));
            var l = this.platform.acquireContext(r, s.aspectRatio),
              u = l && l.canvas,
              h = u && u.height,
              c = u && u.width;
            ((this.id = (0, v.ad)()),
              (this.ctx = l),
              (this.canvas = u),
              (this.width = c),
              (this.height = h),
              (this._options = s),
              (this._aspectRatio = this.aspectRatio),
              (this._layers = []),
              (this._metasets = []),
              (this._stacks = void 0),
              (this.boxes = []),
              (this.currentDevicePixelRatio = void 0),
              (this.chartArea = void 0),
              (this._active = []),
              (this._lastEvent = void 0),
              (this._listeners = {}),
              (this._responsiveListeners = void 0),
              (this._sortedMetasets = []),
              (this.scales = {}),
              (this._plugins = new qt()),
              (this.$proxies = {}),
              (this._hiddenIndices = {}),
              (this.attached = !1),
              (this._animationsDisabled = void 0),
              (this.$context = void 0),
              (this._doResize = (0, v.ae)(function (t) {
                return n.update(t);
              }, s.resizeDelay || 0)),
              (this._dataChanges = []),
              (ye[this.id] = this),
              l && u
                ? (p.listen(this, "complete", ve),
                  p.listen(this, "progress", ge),
                  this._initialize(),
                  this.attached && this.update())
                : console.error(
                    "Failed to create chart: can't acquire context from the given item",
                  ));
          }
          return (
            (0, d.default)(t, [
              {
                key: "aspectRatio",
                get: function () {
                  var t = this.options,
                    e = t.aspectRatio,
                    i = t.maintainAspectRatio,
                    n = this.width,
                    a = this.height,
                    r = this._aspectRatio;
                  return (0, v.k)(e) ? (i && r ? r : a ? n / a : null) : e;
                },
              },
              {
                key: "data",
                get: function () {
                  return this.config.data;
                },
                set: function (t) {
                  this.config.data = t;
                },
              },
              {
                key: "options",
                get: function () {
                  return this._options;
                },
                set: function (t) {
                  this.config.options = t;
                },
              },
              {
                key: "_initialize",
                value: function () {
                  return (
                    this.notifyPlugins("beforeInit"),
                    this.options.responsive
                      ? this.resize()
                      : (0, v.af)(this, this.options.devicePixelRatio),
                    this.bindEvents(),
                    this.notifyPlugins("afterInit"),
                    this
                  );
                },
              },
              {
                key: "clear",
                value: function () {
                  return ((0, v.ag)(this.canvas, this.ctx), this);
                },
              },
              {
                key: "stop",
                value: function () {
                  return (p.stop(this), this);
                },
              },
              {
                key: "resize",
                value: function (t, e) {
                  p.running(this)
                    ? (this._resizeBeforeDraw = { width: t, height: e })
                    : this._resize(t, e);
                },
              },
              {
                key: "_resize",
                value: function (t, e) {
                  var i = this.options,
                    n = this.canvas,
                    a = i.maintainAspectRatio && this.aspectRatio,
                    r = this.platform.getMaximumSize(n, t, e, a),
                    o =
                      i.devicePixelRatio || this.platform.getDevicePixelRatio(),
                    s = this.width ? "resize" : "attach";
                  ((this.width = r.width),
                    (this.height = r.height),
                    (this._aspectRatio = this.aspectRatio),
                    (0, v.af)(this, o, !0) &&
                      (this.notifyPlugins("resize", { size: r }),
                      (0, v.C)(i.onResize, [this, r], this),
                      this.attached && this._doResize(s) && this.render()));
                },
              },
              {
                key: "ensureScalesHaveIDs",
                value: function () {
                  var t = this.options.scales || {};
                  (0, v.Q)(t, function (t, e) {
                    t.id = e;
                  });
                },
              },
              {
                key: "buildOrUpdateScales",
                value: function () {
                  var t = this,
                    e = this.options,
                    i = e.scales,
                    n = this.scales,
                    a = Object.keys(n).reduce(function (t, e) {
                      return ((t[e] = !1), t);
                    }, {}),
                    r = [];
                  (i &&
                    (r = r.concat(
                      Object.keys(i).map(function (t) {
                        var e = i[t],
                          n = ee(t, e),
                          a = "r" === n,
                          r = "x" === n;
                        return {
                          options: e,
                          dposition: a ? "chartArea" : r ? "bottom" : "left",
                          dtype: a ? "radialLinear" : r ? "category" : "linear",
                        };
                      }),
                    )),
                    (0, v.Q)(r, function (i) {
                      var r = i.options,
                        o = r.id,
                        s = ee(o, r),
                        l = (0, v.v)(r.type, i.dtype);
                      ((void 0 !== r.position &&
                        fe(r.position, s) === fe(i.dposition)) ||
                        (r.position = i.dposition),
                        (a[o] = !0));
                      var u = null;
                      o in n && n[o].type === l
                        ? (u = n[o])
                        : ((u = new (ut.getScale(l))({
                            id: o,
                            type: l,
                            ctx: t.ctx,
                            chart: t,
                          })),
                          (n[u.id] = u));
                      u.init(r, e);
                    }),
                    (0, v.Q)(a, function (t, e) {
                      t || delete n[e];
                    }),
                    (0, v.Q)(n, function (e) {
                      (Rt.configure(t, e, e.options), Rt.addBox(t, e));
                    }));
                },
              },
              {
                key: "_updateMetasets",
                value: function () {
                  var t = this._metasets,
                    e = this.data.datasets.length,
                    i = t.length;
                  if (
                    (t.sort(function (t, e) {
                      return t.index - e.index;
                    }),
                    i > e)
                  ) {
                    for (var n = e; n < i; ++n) this._destroyDatasetMeta(n);
                    t.splice(e, i - e);
                  }
                  this._sortedMetasets = t.slice(0).sort(de("order", "index"));
                },
              },
              {
                key: "_removeUnreferencedMetasets",
                value: function () {
                  var t = this,
                    e = this._metasets,
                    i = this.data.datasets;
                  (e.length > i.length && delete this._stacks,
                    e.forEach(function (e, n) {
                      0 ===
                        i.filter(function (t) {
                          return t === e._dataset;
                        }).length && t._destroyDatasetMeta(n);
                    }));
                },
              },
              {
                key: "buildOrUpdateControllers",
                value: function () {
                  var t,
                    e,
                    i = [],
                    n = this.data.datasets;
                  for (
                    this._removeUnreferencedMetasets(), t = 0, e = n.length;
                    t < e;
                    t++
                  ) {
                    var a = n[t],
                      r = this.getDatasetMeta(t),
                      o = a.type || this.config.type;
                    if (
                      (r.type &&
                        r.type !== o &&
                        (this._destroyDatasetMeta(t),
                        (r = this.getDatasetMeta(t))),
                      (r.type = o),
                      (r.indexAxis = a.indexAxis || te(o, this.options)),
                      (r.order = a.order || 0),
                      (r.index = t),
                      (r.label = "" + a.label),
                      (r.visible = this.isDatasetVisible(t)),
                      r.controller)
                    )
                      (r.controller.updateIndex(t), r.controller.linkScales());
                    else {
                      var s = ut.getController(o),
                        l = v.d.datasets[o],
                        u = l.datasetElementType,
                        h = l.dataElementType;
                      (Object.assign(s.prototype, {
                        dataElementType: ut.getElement(h),
                        datasetElementType: u && ut.getElement(u),
                      }),
                        (r.controller = new s(this, t)),
                        i.push(r.controller));
                    }
                  }
                  return (this._updateMetasets(), i);
                },
              },
              {
                key: "_resetElements",
                value: function () {
                  var t = this;
                  (0, v.Q)(
                    this.data.datasets,
                    function (e, i) {
                      t.getDatasetMeta(i).controller.reset();
                    },
                    this,
                  );
                },
              },
              {
                key: "reset",
                value: function () {
                  (this._resetElements(), this.notifyPlugins("reset"));
                },
              },
              {
                key: "update",
                value: function (t) {
                  var e = this.config;
                  e.update();
                  var i = (this._options = e.createResolver(
                      e.chartOptionScopes(),
                      this.getContext(),
                    )),
                    n = (this._animationsDisabled = !i.animation);
                  if (
                    (this._updateScales(),
                    this._checkEventBindings(),
                    this._updateHiddenIndices(),
                    this._plugins.invalidate(),
                    !1 !==
                      this.notifyPlugins("beforeUpdate", {
                        mode: t,
                        cancelable: !0,
                      }))
                  ) {
                    var a = this.buildOrUpdateControllers();
                    this.notifyPlugins("beforeElementsUpdate");
                    for (
                      var r = 0, o = 0, s = this.data.datasets.length;
                      o < s;
                      o++
                    ) {
                      var l = this.getDatasetMeta(o).controller,
                        u = !n && -1 === a.indexOf(l);
                      (l.buildOrUpdateElements(u),
                        (r = Math.max(+l.getMaxOverflow(), r)));
                    }
                    ((r = this._minPadding = i.layout.autoPadding ? r : 0),
                      this._updateLayout(r),
                      n ||
                        (0, v.Q)(a, function (t) {
                          t.reset();
                        }),
                      this._updateDatasets(t),
                      this.notifyPlugins("afterUpdate", { mode: t }),
                      this._layers.sort(de("z", "_idx")));
                    var h = this._active,
                      c = this._lastEvent;
                    (c
                      ? this._eventHandler(c, !0)
                      : h.length && this._updateHoverStyles(h, h, !0),
                      this.render());
                  }
                },
              },
              {
                key: "_updateScales",
                value: function () {
                  var t = this;
                  ((0, v.Q)(this.scales, function (e) {
                    Rt.removeBox(t, e);
                  }),
                    this.ensureScalesHaveIDs(),
                    this.buildOrUpdateScales());
                },
              },
              {
                key: "_checkEventBindings",
                value: function () {
                  var t = this.options,
                    e = new Set(Object.keys(this._listeners)),
                    i = new Set(t.events);
                  ((0, v.ah)(e, i) &&
                    !!this._responsiveListeners === t.responsive) ||
                    (this.unbindEvents(), this.bindEvents());
                },
              },
              {
                key: "_updateHiddenIndices",
                value: function () {
                  var t,
                    e = this._hiddenIndices,
                    i = this._getUniformDataChanges() || [],
                    n = (0, h.Z)(i);
                  try {
                    for (n.s(); !(t = n.n()).done;) {
                      var a = t.value,
                        r = a.method,
                        o = a.start,
                        s = a.count;
                      me(e, o, "_removeElements" === r ? -s : s);
                    }
                  } catch (l) {
                    n.e(l);
                  } finally {
                    n.f();
                  }
                },
              },
              {
                key: "_getUniformDataChanges",
                value: function () {
                  var t = this._dataChanges;
                  if (t && t.length) {
                    this._dataChanges = [];
                    for (
                      var e = this.data.datasets.length,
                        i = function (e) {
                          return new Set(
                            t
                              .filter(function (t) {
                                return t[0] === e;
                              })
                              .map(function (t, e) {
                                return e + "," + t.splice(1).join(",");
                              }),
                          );
                        },
                        n = i(0),
                        a = 1;
                      a < e;
                      a++
                    )
                      if (!(0, v.ah)(n, i(a))) return;
                    return Array.from(n)
                      .map(function (t) {
                        return t.split(",");
                      })
                      .map(function (t) {
                        return { method: t[1], start: +t[2], count: +t[3] };
                      });
                  }
                },
              },
              {
                key: "_updateLayout",
                value: function (t) {
                  var e = this;
                  if (
                    !1 !==
                    this.notifyPlugins("beforeLayout", { cancelable: !0 })
                  ) {
                    Rt.update(this, this.width, this.height, t);
                    var i = this.chartArea,
                      n = i.width <= 0 || i.height <= 0;
                    ((this._layers = []),
                      (0, v.Q)(
                        this.boxes,
                        function (t) {
                          var i;
                          (n && "chartArea" === t.position) ||
                            (t.configure && t.configure(),
                            (i = e._layers).push.apply(
                              i,
                              (0, c.Z)(t._layers()),
                            ));
                        },
                        this,
                      ),
                      this._layers.forEach(function (t, e) {
                        t._idx = e;
                      }),
                      this.notifyPlugins("afterLayout"));
                  }
                },
              },
              {
                key: "_updateDatasets",
                value: function (t) {
                  if (
                    !1 !==
                    this.notifyPlugins("beforeDatasetsUpdate", {
                      mode: t,
                      cancelable: !0,
                    })
                  ) {
                    for (var e = 0, i = this.data.datasets.length; e < i; ++e)
                      this.getDatasetMeta(e).controller.configure();
                    for (var n = 0, a = this.data.datasets.length; n < a; ++n)
                      this._updateDataset(
                        n,
                        (0, v.a8)(t) ? t({ datasetIndex: n }) : t,
                      );
                    this.notifyPlugins("afterDatasetsUpdate", { mode: t });
                  }
                },
              },
              {
                key: "_updateDataset",
                value: function (t, e) {
                  var i = this.getDatasetMeta(t),
                    n = { meta: i, index: t, mode: e, cancelable: !0 };
                  !1 !== this.notifyPlugins("beforeDatasetUpdate", n) &&
                    (i.controller._update(e),
                    (n.cancelable = !1),
                    this.notifyPlugins("afterDatasetUpdate", n));
                },
              },
              {
                key: "render",
                value: function () {
                  !1 !==
                    this.notifyPlugins("beforeRender", { cancelable: !0 }) &&
                    (p.has(this)
                      ? this.attached && !p.running(this) && p.start(this)
                      : (this.draw(), ve({ chart: this })));
                },
              },
              {
                key: "draw",
                value: function () {
                  var t;
                  if (this._resizeBeforeDraw) {
                    var e = this._resizeBeforeDraw,
                      i = e.width,
                      n = e.height;
                    (this._resize(i, n), (this._resizeBeforeDraw = null));
                  }
                  if (
                    (this.clear(),
                    !(this.width <= 0 || this.height <= 0) &&
                      !1 !==
                        this.notifyPlugins("beforeDraw", { cancelable: !0 }))
                  ) {
                    var a = this._layers;
                    for (t = 0; t < a.length && a[t].z <= 0; ++t)
                      a[t].draw(this.chartArea);
                    for (this._drawDatasets(); t < a.length; ++t)
                      a[t].draw(this.chartArea);
                    this.notifyPlugins("afterDraw");
                  }
                },
              },
              {
                key: "_getSortedDatasetMetas",
                value: function (t) {
                  var e,
                    i,
                    n = this._sortedMetasets,
                    a = [];
                  for (e = 0, i = n.length; e < i; ++e) {
                    var r = n[e];
                    (t && !r.visible) || a.push(r);
                  }
                  return a;
                },
              },
              {
                key: "getSortedVisibleDatasetMetas",
                value: function () {
                  return this._getSortedDatasetMetas(!0);
                },
              },
              {
                key: "_drawDatasets",
                value: function () {
                  if (
                    !1 !==
                    this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 })
                  ) {
                    for (
                      var t = this.getSortedVisibleDatasetMetas(),
                        e = t.length - 1;
                      e >= 0;
                      --e
                    )
                      this._drawDataset(t[e]);
                    this.notifyPlugins("afterDatasetsDraw");
                  }
                },
              },
              {
                key: "_drawDataset",
                value: function (t) {
                  var e = this.ctx,
                    i = t._clip,
                    n = !i.disabled,
                    a = this.chartArea,
                    r = { meta: t, index: t.index, cancelable: !0 };
                  !1 !== this.notifyPlugins("beforeDatasetDraw", r) &&
                    (n &&
                      (0, v.L)(e, {
                        left: !1 === i.left ? 0 : a.left - i.left,
                        right: !1 === i.right ? this.width : a.right + i.right,
                        top: !1 === i.top ? 0 : a.top - i.top,
                        bottom:
                          !1 === i.bottom ? this.height : a.bottom + i.bottom,
                      }),
                    t.controller.draw(),
                    n && (0, v.N)(e),
                    (r.cancelable = !1),
                    this.notifyPlugins("afterDatasetDraw", r));
                },
              },
              {
                key: "isPointInArea",
                value: function (t) {
                  return (0, v.$)(t, this.chartArea, this._minPadding);
                },
              },
              {
                key: "getElementsAtEventForMode",
                value: function (t, e, i, n) {
                  var a = xt.modes[e];
                  return "function" === typeof a ? a(this, t, i, n) : [];
                },
              },
              {
                key: "getDatasetMeta",
                value: function (t) {
                  var e = this.data.datasets[t],
                    i = this._metasets,
                    n = i
                      .filter(function (t) {
                        return t && t._dataset === e;
                      })
                      .pop();
                  return (
                    n ||
                      ((n = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null,
                        order: (e && e.order) || 0,
                        index: t,
                        _dataset: e,
                        _parsed: [],
                        _sorted: !1,
                      }),
                      i.push(n)),
                    n
                  );
                },
              },
              {
                key: "getContext",
                value: function () {
                  return (
                    this.$context ||
                    (this.$context = (0, v.h)(null, {
                      chart: this,
                      type: "chart",
                    }))
                  );
                },
              },
              {
                key: "getVisibleDatasetCount",
                value: function () {
                  return this.getSortedVisibleDatasetMetas().length;
                },
              },
              {
                key: "isDatasetVisible",
                value: function (t) {
                  var e = this.data.datasets[t];
                  if (!e) return !1;
                  var i = this.getDatasetMeta(t);
                  return "boolean" === typeof i.hidden ? !i.hidden : !e.hidden;
                },
              },
              {
                key: "setDatasetVisibility",
                value: function (t, e) {
                  this.getDatasetMeta(t).hidden = !e;
                },
              },
              {
                key: "toggleDataVisibility",
                value: function (t) {
                  this._hiddenIndices[t] = !this._hiddenIndices[t];
                },
              },
              {
                key: "getDataVisibility",
                value: function (t) {
                  return !this._hiddenIndices[t];
                },
              },
              {
                key: "_updateVisibility",
                value: function (t, e, i) {
                  var n = i ? "show" : "hide",
                    a = this.getDatasetMeta(t),
                    r = a.controller._resolveAnimations(void 0, n);
                  (0, v.j)(e)
                    ? ((a.data[e].hidden = !i), this.update())
                    : (this.setDatasetVisibility(t, i),
                      r.update(a, { visible: i }),
                      this.update(function (e) {
                        return e.datasetIndex === t ? n : void 0;
                      }));
                },
              },
              {
                key: "hide",
                value: function (t, e) {
                  this._updateVisibility(t, e, !1);
                },
              },
              {
                key: "show",
                value: function (t, e) {
                  this._updateVisibility(t, e, !0);
                },
              },
              {
                key: "_destroyDatasetMeta",
                value: function (t) {
                  var e = this._metasets[t];
                  (e && e.controller && e.controller._destroy(),
                    delete this._metasets[t]);
                },
              },
              {
                key: "_stop",
                value: function () {
                  var t, e;
                  for (
                    this.stop(),
                      p.remove(this),
                      t = 0,
                      e = this.data.datasets.length;
                    t < e;
                    ++t
                  )
                    this._destroyDatasetMeta(t);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.notifyPlugins("beforeDestroy");
                  var t = this.canvas,
                    e = this.ctx;
                  (this._stop(),
                    this.config.clearCache(),
                    t &&
                      (this.unbindEvents(),
                      (0, v.ag)(t, e),
                      this.platform.releaseContext(e),
                      (this.canvas = null),
                      (this.ctx = null)),
                    this.notifyPlugins("destroy"),
                    delete ye[this.id],
                    this.notifyPlugins("afterDestroy"));
                },
              },
              {
                key: "toBase64Image",
                value: function () {
                  var t;
                  return (t = this.canvas).toDataURL.apply(t, arguments);
                },
              },
              {
                key: "bindEvents",
                value: function () {
                  (this.bindUserEvents(),
                    this.options.responsive
                      ? this.bindResponsiveEvents()
                      : (this.attached = !0));
                },
              },
              {
                key: "bindUserEvents",
                value: function () {
                  var t = this,
                    e = this._listeners,
                    i = this.platform,
                    n = function (e, i, n) {
                      ((e.offsetX = i), (e.offsetY = n), t._eventHandler(e));
                    };
                  (0, v.Q)(this.options.events, function (a) {
                    return (function (n, a) {
                      (i.addEventListener(t, n, a), (e[n] = a));
                    })(a, n);
                  });
                },
              },
              {
                key: "bindResponsiveEvents",
                value: function () {
                  var t = this;
                  this._responsiveListeners || (this._responsiveListeners = {});
                  var e,
                    i = this._responsiveListeners,
                    n = this.platform,
                    a = function (e, a) {
                      (n.addEventListener(t, e, a), (i[e] = a));
                    },
                    r = function (e, a) {
                      i[e] && (n.removeEventListener(t, e, a), delete i[e]);
                    },
                    o = function (e, i) {
                      t.canvas && t.resize(e, i);
                    },
                    s = function i() {
                      (r("attach", i),
                        (t.attached = !0),
                        t.resize(),
                        a("resize", o),
                        a("detach", e));
                    };
                  ((e = function () {
                    ((t.attached = !1),
                      r("resize", o),
                      t._stop(),
                      t._resize(0, 0),
                      a("attach", s));
                  }),
                    n.isAttached(this.canvas) ? s() : e());
                },
              },
              {
                key: "unbindEvents",
                value: function () {
                  var t = this;
                  ((0, v.Q)(this._listeners, function (e, i) {
                    t.platform.removeEventListener(t, i, e);
                  }),
                    (this._listeners = {}),
                    (0, v.Q)(this._responsiveListeners, function (e, i) {
                      t.platform.removeEventListener(t, i, e);
                    }),
                    (this._responsiveListeners = void 0));
                },
              },
              {
                key: "updateHoverStyle",
                value: function (t, e, i) {
                  var n,
                    a,
                    r,
                    o = i ? "set" : "remove";
                  for (
                    "dataset" === e &&
                      this.getDatasetMeta(t[0].datasetIndex).controller[
                        "_" + o + "DatasetHoverStyle"
                      ](),
                      a = 0,
                      r = t.length;
                    a < r;
                    ++a
                  ) {
                    var s =
                      (n = t[a]) &&
                      this.getDatasetMeta(n.datasetIndex).controller;
                    s &&
                      s[o + "HoverStyle"](n.element, n.datasetIndex, n.index);
                  }
                },
              },
              {
                key: "getActiveElements",
                value: function () {
                  return this._active || [];
                },
              },
              {
                key: "setActiveElements",
                value: function (t) {
                  var e = this,
                    i = this._active || [],
                    n = t.map(function (t) {
                      var i = t.datasetIndex,
                        n = t.index,
                        a = e.getDatasetMeta(i);
                      if (!a) throw new Error("No dataset found at index " + i);
                      return { datasetIndex: i, element: a.data[n], index: n };
                    });
                  !(0, v.ai)(n, i) &&
                    ((this._active = n),
                    (this._lastEvent = null),
                    this._updateHoverStyles(n, i));
                },
              },
              {
                key: "notifyPlugins",
                value: function (t, e, i) {
                  return this._plugins.notify(this, t, e, i);
                },
              },
              {
                key: "_updateHoverStyles",
                value: function (t, e, i) {
                  var n = this.options.hover,
                    a = function (t, e) {
                      return t.filter(function (t) {
                        return !e.some(function (e) {
                          return (
                            t.datasetIndex === e.datasetIndex &&
                            t.index === e.index
                          );
                        });
                      });
                    },
                    r = a(e, t),
                    o = i ? t : a(t, e);
                  (r.length && this.updateHoverStyle(r, n.mode, !1),
                    o.length && n.mode && this.updateHoverStyle(o, n.mode, !0));
                },
              },
              {
                key: "_eventHandler",
                value: function (t, e) {
                  var i = this,
                    n = {
                      event: t,
                      replay: e,
                      cancelable: !0,
                      inChartArea: this.isPointInArea(t),
                    },
                    a = function (e) {
                      return (e.options.events || i.options.events).includes(
                        t.native.type,
                      );
                    };
                  if (!1 !== this.notifyPlugins("beforeEvent", n, a)) {
                    var r = this._handleEvent(t, e, n.inChartArea);
                    return (
                      (n.cancelable = !1),
                      this.notifyPlugins("afterEvent", n, a),
                      (r || n.changed) && this.render(),
                      this
                    );
                  }
                },
              },
              {
                key: "_handleEvent",
                value: function (t, e, i) {
                  var n = this._active,
                    a = void 0 === n ? [] : n,
                    r = this.options,
                    o = e,
                    s = this._getActiveElements(t, a, i, o),
                    l = (0, v.aj)(t),
                    u = (function (t, e, i, n) {
                      return i && "mouseout" !== t.type ? (n ? e : t) : null;
                    })(t, this._lastEvent, i, l);
                  i &&
                    ((this._lastEvent = null),
                    (0, v.C)(r.onHover, [t, s, this], this),
                    l && (0, v.C)(r.onClick, [t, s, this], this));
                  var h = !(0, v.ai)(s, a);
                  return (
                    (h || e) &&
                      ((this._active = s), this._updateHoverStyles(s, a, e)),
                    (this._lastEvent = u),
                    h
                  );
                },
              },
              {
                key: "_getActiveElements",
                value: function (t, e, i, n) {
                  if ("mouseout" === t.type) return [];
                  if (!i) return e;
                  var a = this.options.hover;
                  return this.getElementsAtEventForMode(t, a.mode, a, n);
                },
              },
            ]),
            t
          );
        })(),
        ke = function () {
          return (0, v.Q)(xe.instances, function (t) {
            return t._plugins.invalidate();
          });
        },
        _e = !0;
      function we(t, e, i) {
        var n = e.startAngle,
          a = e.pixelMargin,
          r = e.x,
          o = e.y,
          s = e.outerRadius,
          l = e.innerRadius,
          u = a / s;
        (t.beginPath(),
          t.arc(r, o, s, n - u, i + u),
          l > a
            ? ((u = a / l), t.arc(r, o, l, i + u, n - u, !0))
            : t.arc(r, o, a, i + v.H, n - v.H),
          t.closePath(),
          t.clip());
      }
      function Me(t, e, i, n) {
        var a,
          r =
            ((a = t.options.borderRadius),
            (0, v.al)(a, ["outerStart", "outerEnd", "innerStart", "innerEnd"])),
          o = (i - e) / 2,
          s = Math.min(o, (n * e) / 2),
          l = function (t) {
            var e = ((i - Math.min(o, t)) * n) / 2;
            return (0, v.E)(t, 0, Math.min(o, e));
          };
        return {
          outerStart: l(r.outerStart),
          outerEnd: l(r.outerEnd),
          innerStart: (0, v.E)(r.innerStart, 0, s),
          innerEnd: (0, v.E)(r.innerEnd, 0, s),
        };
      }
      function Se(t, e, i, n) {
        return { x: i + t * Math.cos(e), y: n + t * Math.sin(e) };
      }
      function Pe(t, e, i, n, a, r) {
        var o = e.x,
          s = e.y,
          l = e.startAngle,
          u = e.pixelMargin,
          h = e.innerRadius,
          c = Math.max(e.outerRadius + n + i - u, 0),
          f = h > 0 ? h + n + i + u : 0,
          d = 0,
          g = a - l;
        if (n) {
          var p = ((h > 0 ? h - n : 0) + (c > 0 ? c - n : 0)) / 2;
          d = (g - (0 !== p ? (g * p) / (p + n) : g)) / 2;
        }
        var y = (g - Math.max(0.001, g * c - i / v.P) / c) / 2,
          b = l + y + d,
          m = a - y - d,
          x = Me(e, f, c, m - b),
          k = x.outerStart,
          _ = x.outerEnd,
          w = x.innerStart,
          M = x.innerEnd,
          S = c - k,
          P = c - _,
          C = b + k / S,
          O = m - _ / P,
          D = f + w,
          A = f + M,
          T = b + w / D,
          E = m - M / A;
        if ((t.beginPath(), r)) {
          if ((t.arc(o, s, c, C, O), _ > 0)) {
            var R = Se(P, O, o, s);
            t.arc(R.x, R.y, _, O, m + v.H);
          }
          var L = Se(A, m, o, s);
          if ((t.lineTo(L.x, L.y), M > 0)) {
            var I = Se(A, E, o, s);
            t.arc(I.x, I.y, M, m + v.H, E + Math.PI);
          }
          if ((t.arc(o, s, f, m - M / f, b + w / f, !0), w > 0)) {
            var F = Se(D, T, o, s);
            t.arc(F.x, F.y, w, T + Math.PI, b - v.H);
          }
          var z = Se(S, b, o, s);
          if ((t.lineTo(z.x, z.y), k > 0)) {
            var V = Se(S, C, o, s);
            t.arc(V.x, V.y, k, b - v.H, C);
          }
        } else {
          t.moveTo(o, s);
          var j = Math.cos(C) * c + o,
            W = Math.sin(C) * c + s;
          t.lineTo(j, W);
          var N = Math.cos(O) * c + o,
            B = Math.sin(O) * c + s;
          t.lineTo(N, B);
        }
        t.closePath();
      }
      function Ce(t, e, i, n, a, r) {
        var o = e.options,
          s = o.borderWidth,
          l = o.borderJoinStyle,
          u = "inner" === o.borderAlign;
        s &&
          (u
            ? ((t.lineWidth = 2 * s), (t.lineJoin = l || "round"))
            : ((t.lineWidth = s), (t.lineJoin = l || "bevel")),
          e.fullCircles &&
            (function (t, e, i) {
              var n,
                a = e.x,
                r = e.y,
                o = e.startAngle,
                s = e.pixelMargin,
                l = e.fullCircles,
                u = Math.max(e.outerRadius - s, 0),
                h = e.innerRadius + s;
              for (
                i && we(t, e, o + v.T),
                  t.beginPath(),
                  t.arc(a, r, h, o + v.T, o, !0),
                  n = 0;
                n < l;
                ++n
              )
                t.stroke();
              for (t.beginPath(), t.arc(a, r, u, o, o + v.T), n = 0; n < l; ++n)
                t.stroke();
            })(t, e, u),
          u && we(t, e, a),
          Pe(t, e, i, n, a, r),
          t.stroke());
      }
      Object.defineProperties(xe, {
        defaults: { enumerable: _e, value: v.d },
        instances: { enumerable: _e, value: ye },
        overrides: { enumerable: _e, value: v.U },
        registry: { enumerable: _e, value: ut },
        version: { enumerable: _e, value: "3.9.1" },
        getChart: { enumerable: _e, value: be },
        register: {
          enumerable: _e,
          value: function () {
            (ut.add.apply(ut, arguments), ke());
          },
        },
        unregister: {
          enumerable: _e,
          value: function () {
            (ut.remove.apply(ut, arguments), ke());
          },
        },
      });
      var Oe = (function (t) {
        (0, o.default)(i, t);
        var e = (0, s.default)(i);
        function i(t) {
          var a;
          return (
            (0, f.default)(this, i),
            ((a = e.call(this)).options = void 0),
            (a.circumference = void 0),
            (a.startAngle = void 0),
            (a.endAngle = void 0),
            (a.innerRadius = void 0),
            (a.outerRadius = void 0),
            (a.pixelMargin = 0),
            (a.fullCircles = 0),
            t && Object.assign((0, n.Z)(a), t),
            a
          );
        }
        return (
          (0, d.default)(i, [
            {
              key: "inRange",
              value: function (t, e, i) {
                var n = this.getProps(["x", "y"], i),
                  a = (0, v.a0)(n, { x: t, y: e }),
                  r = a.angle,
                  o = a.distance,
                  s = this.getProps(
                    [
                      "startAngle",
                      "endAngle",
                      "innerRadius",
                      "outerRadius",
                      "circumference",
                    ],
                    i,
                  ),
                  l = s.startAngle,
                  u = s.endAngle,
                  h = s.innerRadius,
                  c = s.outerRadius,
                  f = s.circumference,
                  d = this.options.spacing / 2,
                  g = (0, v.v)(f, u - l) >= v.T || (0, v.p)(r, l, u),
                  p = (0, v.ak)(o, h + d, c + d);
                return g && p;
              },
            },
            {
              key: "getCenterPoint",
              value: function (t) {
                var e = this.getProps(
                    [
                      "x",
                      "y",
                      "startAngle",
                      "endAngle",
                      "innerRadius",
                      "outerRadius",
                      "circumference",
                    ],
                    t,
                  ),
                  i = e.x,
                  n = e.y,
                  a = e.startAngle,
                  r = e.endAngle,
                  o = e.innerRadius,
                  s = e.outerRadius,
                  l = this.options,
                  u = l.offset,
                  h = (a + r) / 2,
                  c = (o + s + l.spacing + u) / 2;
                return { x: i + Math.cos(h) * c, y: n + Math.sin(h) * c };
              },
            },
            {
              key: "tooltipPosition",
              value: function (t) {
                return this.getCenterPoint(t);
              },
            },
            {
              key: "draw",
              value: function (t) {
                var e = this.options,
                  i = this.circumference,
                  n = (e.offset || 0) / 2,
                  a = (e.spacing || 0) / 2,
                  r = e.circular;
                if (
                  ((this.pixelMargin = "inner" === e.borderAlign ? 0.33 : 0),
                  (this.fullCircles = i > v.T ? Math.floor(i / v.T) : 0),
                  !(0 === i || this.innerRadius < 0 || this.outerRadius < 0))
                ) {
                  t.save();
                  var o = 0;
                  if (n) {
                    o = n / 2;
                    var s = (this.startAngle + this.endAngle) / 2;
                    (t.translate(Math.cos(s) * o, Math.sin(s) * o),
                      this.circumference >= v.P && (o = n));
                  }
                  ((t.fillStyle = e.backgroundColor),
                    (t.strokeStyle = e.borderColor));
                  var l = (function (t, e, i, n, a) {
                    var r = e.fullCircles,
                      o = e.startAngle,
                      s = e.circumference,
                      l = e.endAngle;
                    if (r) {
                      Pe(t, e, i, n, o + v.T, a);
                      for (var u = 0; u < r; ++u) t.fill();
                      isNaN(s) ||
                        ((l = o + (s % v.T)), s % v.T === 0 && (l += v.T));
                    }
                    return (Pe(t, e, i, n, l, a), t.fill(), l);
                  })(t, this, o, a, r);
                  (Ce(t, this, o, a, l, r), t.restore());
                }
              },
            },
          ]),
          i
        );
      })(K);
      function De(t, e) {
        var i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e;
        ((t.lineCap = (0, v.v)(i.borderCapStyle, e.borderCapStyle)),
          t.setLineDash((0, v.v)(i.borderDash, e.borderDash)),
          (t.lineDashOffset = (0, v.v)(i.borderDashOffset, e.borderDashOffset)),
          (t.lineJoin = (0, v.v)(i.borderJoinStyle, e.borderJoinStyle)),
          (t.lineWidth = (0, v.v)(i.borderWidth, e.borderWidth)),
          (t.strokeStyle = (0, v.v)(i.borderColor, e.borderColor)));
      }
      function Ae(t, e, i) {
        t.lineTo(i.x, i.y);
      }
      function Te(t, e) {
        var i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = t.length,
          a = i.start,
          r = void 0 === a ? 0 : a,
          o = i.end,
          s = void 0 === o ? n - 1 : o,
          l = e.start,
          u = e.end,
          h = Math.max(r, l),
          c = Math.min(s, u),
          f = (r < l && s < l) || (r > u && s > u);
        return {
          count: n,
          start: h,
          loop: e.loop,
          ilen: c < h && !f ? n + c - h : c - h,
        };
      }
      function Ee(t, e, i, n) {
        var a,
          r,
          o,
          s = e.points,
          l = e.options,
          u = Te(s, i, n),
          h = u.count,
          c = u.start,
          f = u.loop,
          d = u.ilen,
          g = (function (t) {
            return t.stepped
              ? v.as
              : t.tension || "monotone" === t.cubicInterpolationMode
                ? v.at
                : Ae;
          })(l),
          p = n || {},
          y = p.move,
          b = void 0 === y || y,
          m = p.reverse;
        for (a = 0; a <= d; ++a)
          (r = s[(c + (m ? d - a : a)) % h]).skip ||
            (b ? (t.moveTo(r.x, r.y), (b = !1)) : g(t, o, r, m, l.stepped),
            (o = r));
        return (
          f && g(t, o, (r = s[(c + (m ? d : 0)) % h]), m, l.stepped),
          !!f
        );
      }
      function Re(t, e, i, n) {
        var a,
          r,
          o,
          s,
          l,
          u,
          h = e.points,
          c = Te(h, i, n),
          f = c.count,
          d = c.start,
          v = c.ilen,
          g = n || {},
          p = g.move,
          y = void 0 === p || p,
          b = g.reverse,
          m = 0,
          x = 0,
          k = function (t) {
            return (d + (b ? v - t : t)) % f;
          },
          _ = function () {
            s !== l && (t.lineTo(m, l), t.lineTo(m, s), t.lineTo(m, u));
          };
        for (y && ((r = h[k(0)]), t.moveTo(r.x, r.y)), a = 0; a <= v; ++a)
          if (!(r = h[k(a)]).skip) {
            var w = r.x,
              M = r.y,
              S = 0 | w;
            (S === o
              ? (M < s ? (s = M) : M > l && (l = M), (m = (x * m + w) / ++x))
              : (_(), t.lineTo(w, M), (o = S), (x = 0), (s = l = M)),
              (u = M));
          }
        _();
      }
      function Le(t) {
        var e = t.options,
          i = e.borderDash && e.borderDash.length;
        return !t._decimated &&
          !t._loop &&
          !e.tension &&
          "monotone" !== e.cubicInterpolationMode &&
          !e.stepped &&
          !i
          ? Re
          : Ee;
      }
      ((Oe.id = "arc"),
        (Oe.defaults = {
          borderAlign: "center",
          borderColor: "#fff",
          borderJoinStyle: void 0,
          borderRadius: 0,
          borderWidth: 2,
          offset: 0,
          spacing: 0,
          angle: void 0,
          circular: !0,
        }),
        (Oe.defaultRoutes = { backgroundColor: "backgroundColor" }));
      var Ie = "function" === typeof Path2D;
      function Fe(t, e, i, n) {
        Ie && !e.options.segment
          ? (function (t, e, i, n) {
              var a = e._path;
              (a ||
                ((a = e._path = new Path2D()),
                e.path(a, i, n) && a.closePath()),
                De(t, e.options),
                t.stroke(a));
            })(t, e, i, n)
          : (function (t, e, i, n) {
              var a,
                r = e.segments,
                o = e.options,
                s = Le(e),
                l = (0, h.Z)(r);
              try {
                for (l.s(); !(a = l.n()).done;) {
                  var u = a.value;
                  (De(t, o, u.style),
                    t.beginPath(),
                    s(t, e, u, { start: i, end: i + n - 1 }) && t.closePath(),
                    t.stroke());
                }
              } catch (c) {
                l.e(c);
              } finally {
                l.f();
              }
            })(t, e, i, n);
      }
      var ze = (function (t) {
        (0, o.default)(i, t);
        var e = (0, s.default)(i);
        function i(t) {
          var a;
          return (
            (0, f.default)(this, i),
            ((a = e.call(this)).animated = !0),
            (a.options = void 0),
            (a._chart = void 0),
            (a._loop = void 0),
            (a._fullLoop = void 0),
            (a._path = void 0),
            (a._points = void 0),
            (a._segments = void 0),
            (a._decimated = !1),
            (a._pointsUpdated = !1),
            (a._datasetIndex = void 0),
            t && Object.assign((0, n.Z)(a), t),
            a
          );
        }
        return (
          (0, d.default)(i, [
            {
              key: "updateControlPoints",
              value: function (t, e) {
                var i = this.options;
                if (
                  (i.tension || "monotone" === i.cubicInterpolationMode) &&
                  !i.stepped &&
                  !this._pointsUpdated
                ) {
                  var n = i.spanGaps ? this._loop : this._fullLoop;
                  ((0, v.am)(this._points, i, t, n, e),
                    (this._pointsUpdated = !0));
                }
              },
            },
            {
              key: "points",
              get: function () {
                return this._points;
              },
              set: function (t) {
                ((this._points = t),
                  delete this._segments,
                  delete this._path,
                  (this._pointsUpdated = !1));
              },
            },
            {
              key: "segments",
              get: function () {
                return (
                  this._segments ||
                  (this._segments = (0, v.an)(this, this.options.segment))
                );
              },
            },
            {
              key: "first",
              value: function () {
                var t = this.segments,
                  e = this.points;
                return t.length && e[t[0].start];
              },
            },
            {
              key: "last",
              value: function () {
                var t = this.segments,
                  e = this.points,
                  i = t.length;
                return i && e[t[i - 1].end];
              },
            },
            {
              key: "interpolate",
              value: function (t, e) {
                var i = this.options,
                  n = t[e],
                  a = this.points,
                  r = (0, v.ao)(this, { property: e, start: n, end: n });
                if (r.length) {
                  var o,
                    s,
                    l = [],
                    u = (function (t) {
                      return t.stepped
                        ? v.ap
                        : t.tension || "monotone" === t.cubicInterpolationMode
                          ? v.aq
                          : v.ar;
                    })(i);
                  for (o = 0, s = r.length; o < s; ++o) {
                    var h = r[o],
                      c = h.start,
                      f = h.end,
                      d = a[c],
                      g = a[f];
                    if (d !== g) {
                      var p = u(
                        d,
                        g,
                        Math.abs((n - d[e]) / (g[e] - d[e])),
                        i.stepped,
                      );
                      ((p[e] = t[e]), l.push(p));
                    } else l.push(d);
                  }
                  return 1 === l.length ? l[0] : l;
                }
              },
            },
            {
              key: "pathSegment",
              value: function (t, e, i) {
                return Le(this)(t, this, e, i);
              },
            },
            {
              key: "path",
              value: function (t, e, i) {
                var n = this.segments,
                  a = Le(this),
                  r = this._loop;
                ((e = e || 0), (i = i || this.points.length - e));
                var o,
                  s = (0, h.Z)(n);
                try {
                  for (s.s(); !(o = s.n()).done;) {
                    r &= a(t, this, o.value, { start: e, end: e + i - 1 });
                  }
                } catch (l) {
                  s.e(l);
                } finally {
                  s.f();
                }
                return !!r;
              },
            },
            {
              key: "draw",
              value: function (t, e, i, n) {
                var a = this.options || {};
                ((this.points || []).length &&
                  a.borderWidth &&
                  (t.save(), Fe(t, this, i, n), t.restore()),
                  this.animated &&
                    ((this._pointsUpdated = !1), (this._path = void 0)));
              },
            },
          ]),
          i
        );
      })(K);
      function Ve(t, e, i, n) {
        var a = t.options,
          r = t.getProps([i], n)[i];
        return Math.abs(e - r) < a.radius + a.hitRadius;
      }
      ((ze.id = "line"),
        (ze.defaults = {
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderWidth: 3,
          capBezierPoints: !0,
          cubicInterpolationMode: "default",
          fill: !1,
          spanGaps: !1,
          stepped: !1,
          tension: 0,
        }),
        (ze.defaultRoutes = {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        }),
        (ze.descriptors = {
          _scriptable: !0,
          _indexable: function (t) {
            return "borderDash" !== t && "fill" !== t;
          },
        }));
      var je = (function (t) {
        (0, o.default)(i, t);
        var e = (0, s.default)(i);
        function i(t) {
          var a;
          return (
            (0, f.default)(this, i),
            ((a = e.call(this)).options = void 0),
            (a.parsed = void 0),
            (a.skip = void 0),
            (a.stop = void 0),
            t && Object.assign((0, n.Z)(a), t),
            a
          );
        }
        return (
          (0, d.default)(i, [
            {
              key: "inRange",
              value: function (t, e, i) {
                var n = this.options,
                  a = this.getProps(["x", "y"], i),
                  r = a.x,
                  o = a.y;
                return (
                  Math.pow(t - r, 2) + Math.pow(e - o, 2) <
                  Math.pow(n.hitRadius + n.radius, 2)
                );
              },
            },
            {
              key: "inXRange",
              value: function (t, e) {
                return Ve(this, t, "x", e);
              },
            },
            {
              key: "inYRange",
              value: function (t, e) {
                return Ve(this, t, "y", e);
              },
            },
            {
              key: "getCenterPoint",
              value: function (t) {
                var e = this.getProps(["x", "y"], t);
                return { x: e.x, y: e.y };
              },
            },
            {
              key: "size",
              value: function (t) {
                var e = (t = t || this.options || {}).radius || 0;
                return (
                  2 *
                  ((e = Math.max(e, (e && t.hoverRadius) || 0)) +
                    ((e && t.borderWidth) || 0))
                );
              },
            },
            {
              key: "draw",
              value: function (t, e) {
                var i = this.options;
                this.skip ||
                  i.radius < 0.1 ||
                  !(0, v.$)(this, e, this.size(i) / 2) ||
                  ((t.strokeStyle = i.borderColor),
                  (t.lineWidth = i.borderWidth),
                  (t.fillStyle = i.backgroundColor),
                  (0, v.au)(t, i, this.x, this.y));
              },
            },
            {
              key: "getRange",
              value: function () {
                var t = this.options || {};
                return t.radius + t.hitRadius;
              },
            },
          ]),
          i
        );
      })(K);
      function We(t, e) {
        var i,
          n,
          a,
          r,
          o,
          s = t.getProps(["x", "y", "base", "width", "height"], e),
          l = s.x,
          u = s.y,
          h = s.base,
          c = s.width,
          f = s.height;
        return (
          t.horizontal
            ? ((o = f / 2),
              (i = Math.min(l, h)),
              (n = Math.max(l, h)),
              (a = u - o),
              (r = u + o))
            : ((i = l - (o = c / 2)),
              (n = l + o),
              (a = Math.min(u, h)),
              (r = Math.max(u, h))),
          { left: i, top: a, right: n, bottom: r }
        );
      }
      function Ne(t, e, i, n) {
        return t ? 0 : (0, v.E)(e, i, n);
      }
      function Be(t) {
        var e = We(t),
          i = e.right - e.left,
          n = e.bottom - e.top,
          a = (function (t, e, i) {
            var n = t.options.borderWidth,
              a = t.borderSkipped,
              r = (0, v.aw)(n);
            return {
              t: Ne(a.top, r.top, 0, i),
              r: Ne(a.right, r.right, 0, e),
              b: Ne(a.bottom, r.bottom, 0, i),
              l: Ne(a.left, r.left, 0, e),
            };
          })(t, i / 2, n / 2),
          r = (function (t, e, i) {
            var n = t.getProps(["enableBorderRadius"]).enableBorderRadius,
              a = t.options.borderRadius,
              r = (0, v.ax)(a),
              o = Math.min(e, i),
              s = t.borderSkipped,
              l = n || (0, v.i)(a);
            return {
              topLeft: Ne(!l || s.top || s.left, r.topLeft, 0, o),
              topRight: Ne(!l || s.top || s.right, r.topRight, 0, o),
              bottomLeft: Ne(!l || s.bottom || s.left, r.bottomLeft, 0, o),
              bottomRight: Ne(!l || s.bottom || s.right, r.bottomRight, 0, o),
            };
          })(t, i / 2, n / 2);
        return {
          outer: { x: e.left, y: e.top, w: i, h: n, radius: r },
          inner: {
            x: e.left + a.l,
            y: e.top + a.t,
            w: i - a.l - a.r,
            h: n - a.t - a.b,
            radius: {
              topLeft: Math.max(0, r.topLeft - Math.max(a.t, a.l)),
              topRight: Math.max(0, r.topRight - Math.max(a.t, a.r)),
              bottomLeft: Math.max(0, r.bottomLeft - Math.max(a.b, a.l)),
              bottomRight: Math.max(0, r.bottomRight - Math.max(a.b, a.r)),
            },
          },
        };
      }
      function He(t, e, i, n) {
        var a = null === e,
          r = null === i,
          o = t && !(a && r) && We(t, n);
        return (
          o &&
          (a || (0, v.ak)(e, o.left, o.right)) &&
          (r || (0, v.ak)(i, o.top, o.bottom))
        );
      }
      function Ye(t, e) {
        t.rect(e.x, e.y, e.w, e.h);
      }
      function Ze(t, e) {
        var i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = t.x !== i.x ? -e : 0,
          a = t.y !== i.y ? -e : 0,
          r = (t.x + t.w !== i.x + i.w ? e : 0) - n,
          o = (t.y + t.h !== i.y + i.h ? e : 0) - a;
        return {
          x: t.x + n,
          y: t.y + a,
          w: t.w + r,
          h: t.h + o,
          radius: t.radius,
        };
      }
      ((je.id = "point"),
        (je.defaults = {
          borderWidth: 1,
          hitRadius: 1,
          hoverBorderWidth: 1,
          hoverRadius: 4,
          pointStyle: "circle",
          radius: 3,
          rotation: 0,
        }),
        (je.defaultRoutes = {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        }));
      var Xe = (function (t) {
        (0, o.default)(i, t);
        var e = (0, s.default)(i);
        function i(t) {
          var a;
          return (
            (0, f.default)(this, i),
            ((a = e.call(this)).options = void 0),
            (a.horizontal = void 0),
            (a.base = void 0),
            (a.width = void 0),
            (a.height = void 0),
            (a.inflateAmount = void 0),
            t && Object.assign((0, n.Z)(a), t),
            a
          );
        }
        return (
          (0, d.default)(i, [
            {
              key: "draw",
              value: function (t) {
                var e,
                  i = this.inflateAmount,
                  n = this.options,
                  a = n.borderColor,
                  r = n.backgroundColor,
                  o = Be(this),
                  s = o.inner,
                  l = o.outer,
                  u =
                    (e = l.radius).topLeft ||
                    e.topRight ||
                    e.bottomLeft ||
                    e.bottomRight
                      ? v.av
                      : Ye;
                (t.save(),
                  (l.w === s.w && l.h === s.h) ||
                    (t.beginPath(),
                    u(t, Ze(l, i, s)),
                    t.clip(),
                    u(t, Ze(s, -i, l)),
                    (t.fillStyle = a),
                    t.fill("evenodd")),
                  t.beginPath(),
                  u(t, Ze(s, i)),
                  (t.fillStyle = r),
                  t.fill(),
                  t.restore());
              },
            },
            {
              key: "inRange",
              value: function (t, e, i) {
                return He(this, t, e, i);
              },
            },
            {
              key: "inXRange",
              value: function (t, e) {
                return He(this, t, null, e);
              },
            },
            {
              key: "inYRange",
              value: function (t, e) {
                return He(this, null, t, e);
              },
            },
            {
              key: "getCenterPoint",
              value: function (t) {
                var e = this.getProps(["x", "y", "base", "horizontal"], t),
                  i = e.x,
                  n = e.y,
                  a = e.base,
                  r = e.horizontal;
                return { x: r ? (i + a) / 2 : i, y: r ? n : (n + a) / 2 };
              },
            },
            {
              key: "getRange",
              value: function (t) {
                return "x" === t ? this.width / 2 : this.height / 2;
              },
            },
          ]),
          i
        );
      })(K);
      ((Xe.id = "bar"),
        (Xe.defaults = {
          borderSkipped: "start",
          borderWidth: 0,
          borderRadius: 0,
          inflateAmount: "auto",
          pointStyle: void 0,
        }),
        (Xe.defaultRoutes = {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        }));
      function Ue(t, e, i, n) {
        if (!n) {
          var a = e[t],
            r = i[t];
          return (
            "angle" === t && ((a = (0, v.az)(a)), (r = (0, v.az)(r))),
            { property: t, start: a, end: r }
          );
        }
      }
      function $e(t, e, i) {
        for (; e > t; e--) {
          var n = i[e];
          if (!isNaN(n.x) && !isNaN(n.y)) break;
        }
        return e;
      }
      function Ke(t, e, i, n) {
        return t && e ? n(t[i], e[i]) : t ? t[i] : e ? e[i] : 0;
      }
      function Qe(t, e) {
        var i = [],
          n = !1;
        return (
          (0, v.b)(t)
            ? ((n = !0), (i = t))
            : (i = (function (t, e) {
                var i = t || {},
                  n = i.x,
                  a = void 0 === n ? null : n,
                  r = i.y,
                  o = void 0 === r ? null : r,
                  s = e.points,
                  l = [];
                return (
                  e.segments.forEach(function (t) {
                    var e = t.start,
                      i = t.end;
                    i = $e(e, i, s);
                    var n = s[e],
                      r = s[i];
                    null !== o
                      ? (l.push({ x: n.x, y: o }), l.push({ x: r.x, y: o }))
                      : null !== a &&
                        (l.push({ x: a, y: n.y }), l.push({ x: a, y: r.y }));
                  }),
                  l
                );
              })(t, e)),
          i.length
            ? new ze({
                points: i,
                options: { tension: 0 },
                _loop: n,
                _fullLoop: n,
              })
            : null
        );
      }
      function qe(t) {
        return t && !1 !== t.fill;
      }
      function Ge(t, e, i) {
        var n,
          a = t[e].fill,
          r = [e];
        if (!i) return a;
        for (; !1 !== a && -1 === r.indexOf(a);) {
          if (!(0, v.g)(a)) return a;
          if (!(n = t[a])) return !1;
          if (n.visible) return a;
          (r.push(a), (a = n.fill));
        }
        return !1;
      }
      function Je(t, e, i) {
        var n = (function (t) {
          var e = t.options,
            i = e.fill,
            n = (0, v.v)(i && i.target, i);
          void 0 === n && (n = !!e.backgroundColor);
          if (!1 === n || null === n) return !1;
          if (!0 === n) return "origin";
          return n;
        })(t);
        if ((0, v.i)(n)) return !isNaN(n.value) && n;
        var a = parseFloat(n);
        return (0, v.g)(a) && Math.floor(a) === a
          ? (function (t, e, i, n) {
              ("-" !== t && "+" !== t) || (i = e + i);
              if (i === e || i < 0 || i >= n) return !1;
              return i;
            })(n[0], e, a, i)
          : ["origin", "start", "end", "stack", "shape"].indexOf(n) >= 0 && n;
      }
      function ti(t, e, i) {
        for (var n = [], a = 0; a < i.length; a++) {
          var r = ei(i[a], e, "x"),
            o = r.first,
            s = r.last,
            l = r.point;
          if (!(!l || (o && s)))
            if (o) n.unshift(l);
            else if ((t.push(l), !s)) break;
        }
        t.push.apply(t, n);
      }
      function ei(t, e, i) {
        var n = t.interpolate(e, i);
        if (!n) return {};
        for (
          var a = n[i], r = t.segments, o = t.points, s = !1, l = !1, u = 0;
          u < r.length;
          u++
        ) {
          var h = r[u],
            c = o[h.start][i],
            f = o[h.end][i];
          if ((0, v.ak)(a, c, f)) {
            ((s = a === c), (l = a === f));
            break;
          }
        }
        return { first: s, last: l, point: n };
      }
      var ii = (function () {
        function t(e) {
          ((0, f.default)(this, t),
            (this.x = e.x),
            (this.y = e.y),
            (this.radius = e.radius));
        }
        return (
          (0, d.default)(t, [
            {
              key: "pathSegment",
              value: function (t, e, i) {
                var n = this.x,
                  a = this.y,
                  r = this.radius;
                return (
                  (e = e || { start: 0, end: v.T }),
                  t.arc(n, a, r, e.end, e.start, !0),
                  !i.bounds
                );
              },
            },
            {
              key: "interpolate",
              value: function (t) {
                var e = this.x,
                  i = this.y,
                  n = this.radius,
                  a = t.angle;
                return {
                  x: e + Math.cos(a) * n,
                  y: i + Math.sin(a) * n,
                  angle: a,
                };
              },
            },
          ]),
          t
        );
      })();
      function ni(t) {
        var e = t.chart,
          i = t.fill,
          n = t.line;
        if ((0, v.g)(i))
          return (function (t, e) {
            var i = t.getDatasetMeta(e),
              n = i && t.isDatasetVisible(e);
            return n ? i.dataset : null;
          })(e, i);
        if ("stack" === i)
          return (function (t) {
            var e = t.scale,
              i = t.index,
              n = t.line,
              a = [],
              r = n.segments,
              o = n.points,
              s = (function (t, e) {
                for (
                  var i = [], n = t.getMatchingVisibleMetas("line"), a = 0;
                  a < n.length;
                  a++
                ) {
                  var r = n[a];
                  if (r.index === e) break;
                  r.hidden || i.unshift(r.dataset);
                }
                return i;
              })(e, i);
            s.push(Qe({ x: null, y: e.bottom }, n));
            for (var l = 0; l < r.length; l++)
              for (var u = r[l], h = u.start; h <= u.end; h++) ti(a, o[h], s);
            return new ze({ points: a, options: {} });
          })(t);
        if ("shape" === i) return !0;
        var a = (function (t) {
          var e = t.scale || {};
          if (e.getPointPositionForValue)
            return (function (t) {
              var e = t.scale,
                i = t.fill,
                n = e.options,
                a = e.getLabels().length,
                r = n.reverse ? e.max : e.min,
                o = (function (t, e, i) {
                  return "start" === t
                    ? i
                    : "end" === t
                      ? e.options.reverse
                        ? e.min
                        : e.max
                      : (0, v.i)(t)
                        ? t.value
                        : e.getBaseValue();
                })(i, e, r),
                s = [];
              if (n.grid.circular) {
                var l = e.getPointPositionForValue(0, r);
                return new ii({
                  x: l.x,
                  y: l.y,
                  radius: e.getDistanceFromCenterForValue(o),
                });
              }
              for (var u = 0; u < a; ++u)
                s.push(e.getPointPositionForValue(u, o));
              return s;
            })(t);
          return (function (t) {
            var e = t.scale,
              i = void 0 === e ? {} : e,
              n = t.fill,
              a = (function (t, e) {
                var i = null;
                return (
                  "start" === t
                    ? (i = e.bottom)
                    : "end" === t
                      ? (i = e.top)
                      : (0, v.i)(t)
                        ? (i = e.getPixelForValue(t.value))
                        : e.getBasePixel && (i = e.getBasePixel()),
                  i
                );
              })(n, i);
            if ((0, v.g)(a)) {
              var r = i.isHorizontal();
              return { x: r ? a : null, y: r ? null : a };
            }
            return null;
          })(t);
        })(t);
        return a instanceof ii ? a : Qe(a, n);
      }
      function ai(t, e, i) {
        var n = ni(e),
          a = e.line,
          r = e.scale,
          o = e.axis,
          s = a.options,
          l = s.fill,
          u = s.backgroundColor,
          h = l || {},
          c = h.above,
          f = void 0 === c ? u : c,
          d = h.below,
          g = void 0 === d ? u : d;
        n &&
          a.points.length &&
          ((0, v.L)(t, i),
          (function (t, e) {
            var i = e.line,
              n = e.target,
              a = e.above,
              r = e.below,
              o = e.area,
              s = e.scale,
              l = i._loop ? "angle" : e.axis;
            (t.save(),
              "x" === l &&
                r !== a &&
                (ri(t, n, o.top),
                oi(t, { line: i, target: n, color: a, scale: s, property: l }),
                t.restore(),
                t.save(),
                ri(t, n, o.bottom)));
            (oi(t, { line: i, target: n, color: r, scale: s, property: l }),
              t.restore());
          })(t, {
            line: a,
            target: n,
            above: f,
            below: g,
            area: i,
            scale: r,
            axis: o,
          }),
          (0, v.N)(t));
      }
      function ri(t, e, i) {
        var n = e.segments,
          a = e.points,
          r = !0,
          o = !1;
        t.beginPath();
        var s,
          l = (0, h.Z)(n);
        try {
          for (l.s(); !(s = l.n()).done;) {
            var u = s.value,
              c = u.start,
              f = u.end,
              d = a[c],
              v = a[$e(c, f, a)];
            (r
              ? (t.moveTo(d.x, d.y), (r = !1))
              : (t.lineTo(d.x, i), t.lineTo(d.x, d.y)),
              (o = !!e.pathSegment(t, u, { move: o }))
                ? t.closePath()
                : t.lineTo(v.x, i));
          }
        } catch (g) {
          l.e(g);
        } finally {
          l.f();
        }
        (t.lineTo(e.first().x, i), t.closePath(), t.clip());
      }
      function oi(t, e) {
        var i,
          n = e.line,
          a = e.target,
          r = e.property,
          o = e.color,
          s = e.scale,
          l = (function (t, e, i) {
            var n,
              a = t.segments,
              r = t.points,
              o = e.points,
              s = [],
              l = (0, h.Z)(a);
            try {
              for (l.s(); !(n = l.n()).done;) {
                var c = n.value,
                  f = c.start,
                  d = c.end;
                d = $e(f, d, r);
                var g = Ue(i, r[f], r[d], c.loop);
                if (e.segments) {
                  var p,
                    y = (0, v.ao)(e, g),
                    b = (0, h.Z)(y);
                  try {
                    for (b.s(); !(p = b.n()).done;) {
                      var m,
                        x = p.value,
                        k = Ue(i, o[x.start], o[x.end], x.loop),
                        _ = (0, v.ay)(c, r, k),
                        w = (0, h.Z)(_);
                      try {
                        for (w.s(); !(m = w.n()).done;) {
                          var M = m.value;
                          s.push({
                            source: M,
                            target: x,
                            start: (0, u.Z)({}, i, Ke(g, k, "start", Math.max)),
                            end: (0, u.Z)({}, i, Ke(g, k, "end", Math.min)),
                          });
                        }
                      } catch (S) {
                        w.e(S);
                      } finally {
                        w.f();
                      }
                    }
                  } catch (S) {
                    b.e(S);
                  } finally {
                    b.f();
                  }
                } else s.push({ source: c, target: g, start: r[f], end: r[d] });
              }
            } catch (S) {
              l.e(S);
            } finally {
              l.f();
            }
            return s;
          })(n, a, r),
          c = (0, h.Z)(l);
        try {
          for (c.s(); !(i = c.n()).done;) {
            var f = i.value,
              d = f.source,
              g = f.target,
              p = f.start,
              y = f.end,
              b = d.style,
              m = (void 0 === b ? {} : b).backgroundColor,
              x = void 0 === m ? o : m,
              k = !0 !== a;
            (t.save(),
              (t.fillStyle = x),
              si(t, s, k && Ue(r, p, y)),
              t.beginPath());
            var _ = !!n.pathSegment(t, d),
              w = void 0;
            if (k) {
              _ ? t.closePath() : li(t, a, y, r);
              var M = !!a.pathSegment(t, g, { move: _, reverse: !0 });
              (w = _ && M) || li(t, a, p, r);
            }
            (t.closePath(), t.fill(w ? "evenodd" : "nonzero"), t.restore());
          }
        } catch (S) {
          c.e(S);
        } finally {
          c.f();
        }
      }
      function si(t, e, i) {
        var n = e.chart.chartArea,
          a = n.top,
          r = n.bottom,
          o = i || {},
          s = o.property,
          l = o.start,
          u = o.end;
        "x" === s && (t.beginPath(), t.rect(l, a, u - l, r - a), t.clip());
      }
      function li(t, e, i, n) {
        var a = e.interpolate(i, n);
        a && t.lineTo(a.x, a.y);
      }
      var ui = {
        id: "filler",
        afterDatasetsUpdate: function (t, e, i) {
          var n,
            a,
            r,
            o,
            s = (t.data.datasets || []).length,
            l = [];
          for (a = 0; a < s; ++a)
            ((o = null),
              (r = (n = t.getDatasetMeta(a)).dataset) &&
                r.options &&
                r instanceof ze &&
                (o = {
                  visible: t.isDatasetVisible(a),
                  index: a,
                  fill: Je(r, a, s),
                  chart: t,
                  axis: n.controller.options.indexAxis,
                  scale: n.vScale,
                  line: r,
                }),
              (n.$filler = o),
              l.push(o));
          for (a = 0; a < s; ++a)
            (o = l[a]) && !1 !== o.fill && (o.fill = Ge(l, a, i.propagate));
        },
        beforeDraw: function (t, e, i) {
          for (
            var n = "beforeDraw" === i.drawTime,
              a = t.getSortedVisibleDatasetMetas(),
              r = t.chartArea,
              o = a.length - 1;
            o >= 0;
            --o
          ) {
            var s = a[o].$filler;
            s &&
              (s.line.updateControlPoints(r, s.axis),
              n && s.fill && ai(t.ctx, s, r));
          }
        },
        beforeDatasetsDraw: function (t, e, i) {
          if ("beforeDatasetsDraw" === i.drawTime)
            for (
              var n = t.getSortedVisibleDatasetMetas(), a = n.length - 1;
              a >= 0;
              --a
            ) {
              var r = n[a].$filler;
              qe(r) && ai(t.ctx, r, t.chartArea);
            }
        },
        beforeDatasetDraw: function (t, e, i) {
          var n = e.meta.$filler;
          qe(n) &&
            "beforeDatasetDraw" === i.drawTime &&
            ai(t.ctx, n, t.chartArea);
        },
        defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
      };
      new WeakMap();
      var hi = {
        average: function (t) {
          if (!t.length) return !1;
          var e,
            i,
            n = 0,
            a = 0,
            r = 0;
          for (e = 0, i = t.length; e < i; ++e) {
            var o = t[e].element;
            if (o && o.hasValue()) {
              var s = o.tooltipPosition();
              ((n += s.x), (a += s.y), ++r);
            }
          }
          return { x: n / r, y: a / r };
        },
        nearest: function (t, e) {
          if (!t.length) return !1;
          var i,
            n,
            a,
            r = e.x,
            o = e.y,
            s = Number.POSITIVE_INFINITY;
          for (i = 0, n = t.length; i < n; ++i) {
            var l = t[i].element;
            if (l && l.hasValue()) {
              var u = l.getCenterPoint(),
                h = (0, v.aG)(e, u);
              h < s && ((s = h), (a = l));
            }
          }
          if (a) {
            var c = a.tooltipPosition();
            ((r = c.x), (o = c.y));
          }
          return { x: r, y: o };
        },
      };
      function ci(t, e) {
        return (
          e && ((0, v.b)(e) ? Array.prototype.push.apply(t, e) : t.push(e)),
          t
        );
      }
      function fi(t) {
        return ("string" === typeof t || t instanceof String) &&
          t.indexOf("\n") > -1
          ? t.split("\n")
          : t;
      }
      function di(t, e) {
        var i = e.element,
          n = e.datasetIndex,
          a = e.index,
          r = t.getDatasetMeta(n).controller,
          o = r.getLabelAndValue(a),
          s = o.label,
          l = o.value;
        return {
          chart: t,
          label: s,
          parsed: r.getParsed(a),
          raw: t.data.datasets[n].data[a],
          formattedValue: l,
          dataset: r.getDataset(),
          dataIndex: a,
          datasetIndex: n,
          element: i,
        };
      }
      function vi(t, e) {
        var i = t.chart.ctx,
          n = t.body,
          a = t.footer,
          r = t.title,
          o = e.boxWidth,
          s = e.boxHeight,
          l = (0, v.O)(e.bodyFont),
          u = (0, v.O)(e.titleFont),
          h = (0, v.O)(e.footerFont),
          c = r.length,
          f = a.length,
          d = n.length,
          g = (0, v.K)(e.padding),
          p = g.height,
          y = 0,
          b = n.reduce(function (t, e) {
            return t + e.before.length + e.lines.length + e.after.length;
          }, 0);
        ((b += t.beforeBody.length + t.afterBody.length),
        c &&
          (p +=
            c * u.lineHeight + (c - 1) * e.titleSpacing + e.titleMarginBottom),
        b) &&
          (p +=
            d * (e.displayColors ? Math.max(s, l.lineHeight) : l.lineHeight) +
            (b - d) * l.lineHeight +
            (b - 1) * e.bodySpacing);
        f &&
          (p +=
            e.footerMarginTop + f * h.lineHeight + (f - 1) * e.footerSpacing);
        var m = 0,
          x = function (t) {
            y = Math.max(y, i.measureText(t).width + m);
          };
        return (
          i.save(),
          (i.font = u.string),
          (0, v.Q)(t.title, x),
          (i.font = l.string),
          (0, v.Q)(t.beforeBody.concat(t.afterBody), x),
          (m = e.displayColors ? o + 2 + e.boxPadding : 0),
          (0, v.Q)(n, function (t) {
            ((0, v.Q)(t.before, x), (0, v.Q)(t.lines, x), (0, v.Q)(t.after, x));
          }),
          (m = 0),
          (i.font = h.string),
          (0, v.Q)(t.footer, x),
          i.restore(),
          { width: (y += g.width), height: p }
        );
      }
      function gi(t, e, i, n) {
        var a = i.x,
          r = i.width,
          o = t.width,
          s = t.chartArea,
          l = s.left,
          u = s.right,
          h = "center";
        return (
          "center" === n
            ? (h = a <= (l + u) / 2 ? "left" : "right")
            : a <= r / 2
              ? (h = "left")
              : a >= o - r / 2 && (h = "right"),
          (function (t, e, i, n) {
            var a = n.x,
              r = n.width,
              o = i.caretSize + i.caretPadding;
            return (
              ("left" === t && a + r + o > e.width) ||
              ("right" === t && a - r - o < 0) ||
              void 0
            );
          })(h, t, e, i) && (h = "center"),
          h
        );
      }
      function pi(t, e, i) {
        var n =
          i.yAlign ||
          e.yAlign ||
          (function (t, e) {
            var i = e.y,
              n = e.height;
            return i < n / 2
              ? "top"
              : i > t.height - n / 2
                ? "bottom"
                : "center";
          })(t, i);
        return { xAlign: i.xAlign || e.xAlign || gi(t, e, i, n), yAlign: n };
      }
      function yi(t, e, i, n) {
        var a = t.caretSize,
          r = t.caretPadding,
          o = t.cornerRadius,
          s = i.xAlign,
          l = i.yAlign,
          u = a + r,
          h = (0, v.ax)(o),
          c = h.topLeft,
          f = h.topRight,
          d = h.bottomLeft,
          g = h.bottomRight,
          p = (function (t, e) {
            var i = t.x,
              n = t.width;
            return (
              "right" === e ? (i -= n) : "center" === e && (i -= n / 2),
              i
            );
          })(e, s),
          y = (function (t, e, i) {
            var n = t.y,
              a = t.height;
            return (
              "top" === e ? (n += i) : (n -= "bottom" === e ? a + i : a / 2),
              n
            );
          })(e, l, u);
        return (
          "center" === l
            ? "left" === s
              ? (p += u)
              : "right" === s && (p -= u)
            : "left" === s
              ? (p -= Math.max(c, d) + a)
              : "right" === s && (p += Math.max(f, g) + a),
          {
            x: (0, v.E)(p, 0, n.width - e.width),
            y: (0, v.E)(y, 0, n.height - e.height),
          }
        );
      }
      function bi(t, e, i) {
        var n = (0, v.K)(i.padding);
        return "center" === e
          ? t.x + t.width / 2
          : "right" === e
            ? t.x + t.width - n.right
            : t.x + n.left;
      }
      function mi(t) {
        return ci([], fi(t));
      }
      function xi(t, e) {
        var i =
          e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
        return i ? t.override(i) : t;
      }
      var ki = (function (t) {
        (0, o.default)(i, t);
        var e = (0, s.default)(i);
        function i(t) {
          var n;
          return (
            (0, f.default)(this, i),
            ((n = e.call(this)).opacity = 0),
            (n._active = []),
            (n._eventPosition = void 0),
            (n._size = void 0),
            (n._cachedAnimations = void 0),
            (n._tooltipItems = []),
            (n.$animations = void 0),
            (n.$context = void 0),
            (n.chart = t.chart || t._chart),
            (n._chart = n.chart),
            (n.options = t.options),
            (n.dataPoints = void 0),
            (n.title = void 0),
            (n.beforeBody = void 0),
            (n.body = void 0),
            (n.afterBody = void 0),
            (n.footer = void 0),
            (n.xAlign = void 0),
            (n.yAlign = void 0),
            (n.x = void 0),
            (n.y = void 0),
            (n.height = void 0),
            (n.width = void 0),
            (n.caretX = void 0),
            (n.caretY = void 0),
            (n.labelColors = void 0),
            (n.labelPointStyles = void 0),
            (n.labelTextColors = void 0),
            n
          );
        }
        return (
          (0, d.default)(i, [
            {
              key: "initialize",
              value: function (t) {
                ((this.options = t),
                  (this._cachedAnimations = void 0),
                  (this.$context = void 0));
              },
            },
            {
              key: "_resolveAnimations",
              value: function () {
                var t = this._cachedAnimations;
                if (t) return t;
                var e = this.chart,
                  i = this.options.setContext(this.getContext()),
                  n = i.enabled && e.options.animation && i.animations,
                  a = new k(this.chart, n);
                return (
                  n._cacheable && (this._cachedAnimations = Object.freeze(a)),
                  a
                );
              },
            },
            {
              key: "getContext",
              value: function () {
                return (
                  this.$context ||
                  (this.$context =
                    ((t = this.chart.getContext()),
                    (e = this),
                    (i = this._tooltipItems),
                    (0, v.h)(t, {
                      tooltip: e,
                      tooltipItems: i,
                      type: "tooltip",
                    })))
                );
                var t, e, i;
              },
            },
            {
              key: "getTitle",
              value: function (t, e) {
                var i = e.callbacks,
                  n = i.beforeTitle.apply(this, [t]),
                  a = i.title.apply(this, [t]),
                  r = i.afterTitle.apply(this, [t]),
                  o = [];
                return (
                  (o = ci(o, fi(n))),
                  (o = ci(o, fi(a))),
                  (o = ci(o, fi(r)))
                );
              },
            },
            {
              key: "getBeforeBody",
              value: function (t, e) {
                return mi(e.callbacks.beforeBody.apply(this, [t]));
              },
            },
            {
              key: "getBody",
              value: function (t, e) {
                var i = this,
                  n = e.callbacks,
                  a = [];
                return (
                  (0, v.Q)(t, function (t) {
                    var e = { before: [], lines: [], after: [] },
                      r = xi(n, t);
                    (ci(e.before, fi(r.beforeLabel.call(i, t))),
                      ci(e.lines, r.label.call(i, t)),
                      ci(e.after, fi(r.afterLabel.call(i, t))),
                      a.push(e));
                  }),
                  a
                );
              },
            },
            {
              key: "getAfterBody",
              value: function (t, e) {
                return mi(e.callbacks.afterBody.apply(this, [t]));
              },
            },
            {
              key: "getFooter",
              value: function (t, e) {
                var i = e.callbacks,
                  n = i.beforeFooter.apply(this, [t]),
                  a = i.footer.apply(this, [t]),
                  r = i.afterFooter.apply(this, [t]),
                  o = [];
                return (
                  (o = ci(o, fi(n))),
                  (o = ci(o, fi(a))),
                  (o = ci(o, fi(r)))
                );
              },
            },
            {
              key: "_createItems",
              value: function (t) {
                var e,
                  i,
                  n = this,
                  a = this._active,
                  r = this.chart.data,
                  o = [],
                  s = [],
                  l = [],
                  u = [];
                for (e = 0, i = a.length; e < i; ++e)
                  u.push(di(this.chart, a[e]));
                return (
                  t.filter &&
                    (u = u.filter(function (e, i, n) {
                      return t.filter(e, i, n, r);
                    })),
                  t.itemSort &&
                    (u = u.sort(function (e, i) {
                      return t.itemSort(e, i, r);
                    })),
                  (0, v.Q)(u, function (e) {
                    var i = xi(t.callbacks, e);
                    (o.push(i.labelColor.call(n, e)),
                      s.push(i.labelPointStyle.call(n, e)),
                      l.push(i.labelTextColor.call(n, e)));
                  }),
                  (this.labelColors = o),
                  (this.labelPointStyles = s),
                  (this.labelTextColors = l),
                  (this.dataPoints = u),
                  u
                );
              },
            },
            {
              key: "update",
              value: function (t, e) {
                var i,
                  n = this.options.setContext(this.getContext()),
                  a = this._active,
                  r = [];
                if (a.length) {
                  var o = hi[n.position].call(this, a, this._eventPosition);
                  ((r = this._createItems(n)),
                    (this.title = this.getTitle(r, n)),
                    (this.beforeBody = this.getBeforeBody(r, n)),
                    (this.body = this.getBody(r, n)),
                    (this.afterBody = this.getAfterBody(r, n)),
                    (this.footer = this.getFooter(r, n)));
                  var s = (this._size = vi(this, n)),
                    l = Object.assign({}, o, s),
                    u = pi(this.chart, n, l),
                    h = yi(n, l, u, this.chart);
                  ((this.xAlign = u.xAlign),
                    (this.yAlign = u.yAlign),
                    (i = {
                      opacity: 1,
                      x: h.x,
                      y: h.y,
                      width: s.width,
                      height: s.height,
                      caretX: o.x,
                      caretY: o.y,
                    }));
                } else 0 !== this.opacity && (i = { opacity: 0 });
                ((this._tooltipItems = r),
                  (this.$context = void 0),
                  i && this._resolveAnimations().update(this, i),
                  t &&
                    n.external &&
                    n.external.call(this, {
                      chart: this.chart,
                      tooltip: this,
                      replay: e,
                    }));
              },
            },
            {
              key: "drawCaret",
              value: function (t, e, i, n) {
                var a = this.getCaretPosition(t, i, n);
                (e.lineTo(a.x1, a.y1),
                  e.lineTo(a.x2, a.y2),
                  e.lineTo(a.x3, a.y3));
              },
            },
            {
              key: "getCaretPosition",
              value: function (t, e, i) {
                var n,
                  a,
                  r,
                  o,
                  s,
                  l,
                  u = this.xAlign,
                  h = this.yAlign,
                  c = i.caretSize,
                  f = i.cornerRadius,
                  d = (0, v.ax)(f),
                  g = d.topLeft,
                  p = d.topRight,
                  y = d.bottomLeft,
                  b = d.bottomRight,
                  m = t.x,
                  x = t.y,
                  k = e.width,
                  _ = e.height;
                return (
                  "center" === h
                    ? ((s = x + _ / 2),
                      "left" === u
                        ? ((a = (n = m) - c), (o = s + c), (l = s - c))
                        : ((a = (n = m + k) + c), (o = s - c), (l = s + c)),
                      (r = n))
                    : ((a =
                        "left" === u
                          ? m + Math.max(g, y) + c
                          : "right" === u
                            ? m + k - Math.max(p, b) - c
                            : this.caretX),
                      "top" === h
                        ? ((s = (o = x) - c), (n = a - c), (r = a + c))
                        : ((s = (o = x + _) + c), (n = a + c), (r = a - c)),
                      (l = o)),
                  { x1: n, x2: a, x3: r, y1: o, y2: s, y3: l }
                );
              },
            },
            {
              key: "drawTitle",
              value: function (t, e, i) {
                var n,
                  a,
                  r,
                  o = this.title,
                  s = o.length;
                if (s) {
                  var l = (0, v.aA)(i.rtl, this.x, this.width);
                  for (
                    t.x = bi(this, i.titleAlign, i),
                      e.textAlign = l.textAlign(i.titleAlign),
                      e.textBaseline = "middle",
                      n = (0, v.O)(i.titleFont),
                      a = i.titleSpacing,
                      e.fillStyle = i.titleColor,
                      e.font = n.string,
                      r = 0;
                    r < s;
                    ++r
                  )
                    (e.fillText(o[r], l.x(t.x), t.y + n.lineHeight / 2),
                      (t.y += n.lineHeight + a),
                      r + 1 === s && (t.y += i.titleMarginBottom - a));
                }
              },
            },
            {
              key: "_drawColorBox",
              value: function (t, e, i, n, a) {
                var r = this.labelColors[i],
                  o = this.labelPointStyles[i],
                  s = a.boxHeight,
                  l = a.boxWidth,
                  u = a.boxPadding,
                  h = (0, v.O)(a.bodyFont),
                  f = bi(this, "left", a),
                  d = n.x(f),
                  g = s < h.lineHeight ? (h.lineHeight - s) / 2 : 0,
                  p = e.y + g;
                if (a.usePointStyle) {
                  var y = {
                      radius: Math.min(l, s) / 2,
                      pointStyle: o.pointStyle,
                      rotation: o.rotation,
                      borderWidth: 1,
                    },
                    b = n.leftForLtr(d, l) + l / 2,
                    m = p + s / 2;
                  ((t.strokeStyle = a.multiKeyBackground),
                    (t.fillStyle = a.multiKeyBackground),
                    (0, v.au)(t, y, b, m),
                    (t.strokeStyle = r.borderColor),
                    (t.fillStyle = r.backgroundColor),
                    (0, v.au)(t, y, b, m));
                } else {
                  ((t.lineWidth = (0, v.i)(r.borderWidth)
                    ? Math.max.apply(
                        Math,
                        (0, c.Z)(Object.values(r.borderWidth)),
                      )
                    : r.borderWidth || 1),
                    (t.strokeStyle = r.borderColor),
                    t.setLineDash(r.borderDash || []),
                    (t.lineDashOffset = r.borderDashOffset || 0));
                  var x = n.leftForLtr(d, l - u),
                    k = n.leftForLtr(n.xPlus(d, 1), l - u - 2),
                    _ = (0, v.ax)(r.borderRadius);
                  Object.values(_).some(function (t) {
                    return 0 !== t;
                  })
                    ? (t.beginPath(),
                      (t.fillStyle = a.multiKeyBackground),
                      (0, v.av)(t, { x: x, y: p, w: l, h: s, radius: _ }),
                      t.fill(),
                      t.stroke(),
                      (t.fillStyle = r.backgroundColor),
                      t.beginPath(),
                      (0, v.av)(t, {
                        x: k,
                        y: p + 1,
                        w: l - 2,
                        h: s - 2,
                        radius: _,
                      }),
                      t.fill())
                    : ((t.fillStyle = a.multiKeyBackground),
                      t.fillRect(x, p, l, s),
                      t.strokeRect(x, p, l, s),
                      (t.fillStyle = r.backgroundColor),
                      t.fillRect(k, p + 1, l - 2, s - 2));
                }
                t.fillStyle = this.labelTextColors[i];
              },
            },
            {
              key: "drawBody",
              value: function (t, e, i) {
                var n,
                  a,
                  r,
                  o,
                  s,
                  l,
                  u,
                  h = this.body,
                  c = i.bodySpacing,
                  f = i.bodyAlign,
                  d = i.displayColors,
                  g = i.boxHeight,
                  p = i.boxWidth,
                  y = i.boxPadding,
                  b = (0, v.O)(i.bodyFont),
                  m = b.lineHeight,
                  x = 0,
                  k = (0, v.aA)(i.rtl, this.x, this.width),
                  _ = function (i) {
                    (e.fillText(i, k.x(t.x + x), t.y + m / 2), (t.y += m + c));
                  },
                  w = k.textAlign(f);
                for (
                  e.textAlign = f,
                    e.textBaseline = "middle",
                    e.font = b.string,
                    t.x = bi(this, w, i),
                    e.fillStyle = i.bodyColor,
                    (0, v.Q)(this.beforeBody, _),
                    x =
                      d && "right" !== w
                        ? "center" === f
                          ? p / 2 + y
                          : p + 2 + y
                        : 0,
                    o = 0,
                    l = h.length;
                  o < l;
                  ++o
                ) {
                  for (
                    n = h[o],
                      a = this.labelTextColors[o],
                      e.fillStyle = a,
                      (0, v.Q)(n.before, _),
                      r = n.lines,
                      d &&
                        r.length &&
                        (this._drawColorBox(e, t, o, k, i),
                        (m = Math.max(b.lineHeight, g))),
                      s = 0,
                      u = r.length;
                    s < u;
                    ++s
                  )
                    (_(r[s]), (m = b.lineHeight));
                  (0, v.Q)(n.after, _);
                }
                ((x = 0),
                  (m = b.lineHeight),
                  (0, v.Q)(this.afterBody, _),
                  (t.y -= c));
              },
            },
            {
              key: "drawFooter",
              value: function (t, e, i) {
                var n,
                  a,
                  r = this.footer,
                  o = r.length;
                if (o) {
                  var s = (0, v.aA)(i.rtl, this.x, this.width);
                  for (
                    t.x = bi(this, i.footerAlign, i),
                      t.y += i.footerMarginTop,
                      e.textAlign = s.textAlign(i.footerAlign),
                      e.textBaseline = "middle",
                      n = (0, v.O)(i.footerFont),
                      e.fillStyle = i.footerColor,
                      e.font = n.string,
                      a = 0;
                    a < o;
                    ++a
                  )
                    (e.fillText(r[a], s.x(t.x), t.y + n.lineHeight / 2),
                      (t.y += n.lineHeight + i.footerSpacing));
                }
              },
            },
            {
              key: "drawBackground",
              value: function (t, e, i, n) {
                var a = this.xAlign,
                  r = this.yAlign,
                  o = t.x,
                  s = t.y,
                  l = i.width,
                  u = i.height,
                  h = (0, v.ax)(n.cornerRadius),
                  c = h.topLeft,
                  f = h.topRight,
                  d = h.bottomLeft,
                  g = h.bottomRight;
                ((e.fillStyle = n.backgroundColor),
                  (e.strokeStyle = n.borderColor),
                  (e.lineWidth = n.borderWidth),
                  e.beginPath(),
                  e.moveTo(o + c, s),
                  "top" === r && this.drawCaret(t, e, i, n),
                  e.lineTo(o + l - f, s),
                  e.quadraticCurveTo(o + l, s, o + l, s + f),
                  "center" === r && "right" === a && this.drawCaret(t, e, i, n),
                  e.lineTo(o + l, s + u - g),
                  e.quadraticCurveTo(o + l, s + u, o + l - g, s + u),
                  "bottom" === r && this.drawCaret(t, e, i, n),
                  e.lineTo(o + d, s + u),
                  e.quadraticCurveTo(o, s + u, o, s + u - d),
                  "center" === r && "left" === a && this.drawCaret(t, e, i, n),
                  e.lineTo(o, s + c),
                  e.quadraticCurveTo(o, s, o + c, s),
                  e.closePath(),
                  e.fill(),
                  n.borderWidth > 0 && e.stroke());
              },
            },
            {
              key: "_updateAnimationTarget",
              value: function (t) {
                var e = this.chart,
                  i = this.$animations,
                  n = i && i.x,
                  a = i && i.y;
                if (n || a) {
                  var r = hi[t.position].call(
                    this,
                    this._active,
                    this._eventPosition,
                  );
                  if (!r) return;
                  var o = (this._size = vi(this, t)),
                    s = Object.assign({}, r, this._size),
                    l = pi(e, t, s),
                    u = yi(t, s, l, e);
                  (n._to === u.x && a._to === u.y) ||
                    ((this.xAlign = l.xAlign),
                    (this.yAlign = l.yAlign),
                    (this.width = o.width),
                    (this.height = o.height),
                    (this.caretX = r.x),
                    (this.caretY = r.y),
                    this._resolveAnimations().update(this, u));
                }
              },
            },
            {
              key: "_willRender",
              value: function () {
                return !!this.opacity;
              },
            },
            {
              key: "draw",
              value: function (t) {
                var e = this.options.setContext(this.getContext()),
                  i = this.opacity;
                if (i) {
                  this._updateAnimationTarget(e);
                  var n = { width: this.width, height: this.height },
                    a = { x: this.x, y: this.y };
                  i = Math.abs(i) < 0.001 ? 0 : i;
                  var r = (0, v.K)(e.padding),
                    o =
                      this.title.length ||
                      this.beforeBody.length ||
                      this.body.length ||
                      this.afterBody.length ||
                      this.footer.length;
                  e.enabled &&
                    o &&
                    (t.save(),
                    (t.globalAlpha = i),
                    this.drawBackground(a, t, n, e),
                    (0, v.aB)(t, e.textDirection),
                    (a.y += r.top),
                    this.drawTitle(a, t, e),
                    this.drawBody(a, t, e),
                    this.drawFooter(a, t, e),
                    (0, v.aD)(t, e.textDirection),
                    t.restore());
                }
              },
            },
            {
              key: "getActiveElements",
              value: function () {
                return this._active || [];
              },
            },
            {
              key: "setActiveElements",
              value: function (t, e) {
                var i = this,
                  n = this._active,
                  a = t.map(function (t) {
                    var e = t.datasetIndex,
                      n = t.index,
                      a = i.chart.getDatasetMeta(e);
                    if (!a)
                      throw new Error("Cannot find a dataset at index " + e);
                    return { datasetIndex: e, element: a.data[n], index: n };
                  }),
                  r = !(0, v.ai)(n, a),
                  o = this._positionChanged(a, e);
                (r || o) &&
                  ((this._active = a),
                  (this._eventPosition = e),
                  (this._ignoreReplayEvents = !0),
                  this.update(!0));
              },
            },
            {
              key: "handleEvent",
              value: function (t, e) {
                var i =
                  !(arguments.length > 2 && void 0 !== arguments[2]) ||
                  arguments[2];
                if (e && this._ignoreReplayEvents) return !1;
                this._ignoreReplayEvents = !1;
                var n = this.options,
                  a = this._active || [],
                  r = this._getActiveElements(t, a, e, i),
                  o = this._positionChanged(r, t),
                  s = e || !(0, v.ai)(r, a) || o;
                return (
                  s &&
                    ((this._active = r),
                    (n.enabled || n.external) &&
                      ((this._eventPosition = { x: t.x, y: t.y }),
                      this.update(!0, e))),
                  s
                );
              },
            },
            {
              key: "_getActiveElements",
              value: function (t, e, i, n) {
                var a = this.options;
                if ("mouseout" === t.type) return [];
                if (!n) return e;
                var r = this.chart.getElementsAtEventForMode(t, a.mode, a, i);
                return (a.reverse && r.reverse(), r);
              },
            },
            {
              key: "_positionChanged",
              value: function (t, e) {
                var i = this.caretX,
                  n = this.caretY,
                  a = this.options,
                  r = hi[a.position].call(this, t, e);
                return !1 !== r && (i !== r.x || n !== r.y);
              },
            },
          ]),
          i
        );
      })(K);
      ki.positioners = hi;
      var _i = {
        id: "tooltip",
        _element: ki,
        positioners: hi,
        afterInit: function (t, e, i) {
          i && (t.tooltip = new ki({ chart: t, options: i }));
        },
        beforeUpdate: function (t, e, i) {
          t.tooltip && t.tooltip.initialize(i);
        },
        reset: function (t, e, i) {
          t.tooltip && t.tooltip.initialize(i);
        },
        afterDraw: function (t) {
          var e = t.tooltip;
          if (e && e._willRender()) {
            var i = { tooltip: e };
            if (!1 === t.notifyPlugins("beforeTooltipDraw", i)) return;
            (e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i));
          }
        },
        afterEvent: function (t, e) {
          if (t.tooltip) {
            var i = e.replay;
            t.tooltip.handleEvent(e.event, i, e.inChartArea) &&
              (e.changed = !0);
          }
        },
        defaults: {
          enabled: !0,
          external: null,
          position: "average",
          backgroundColor: "rgba(0,0,0,0.8)",
          titleColor: "#fff",
          titleFont: { weight: "bold" },
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleAlign: "left",
          bodyColor: "#fff",
          bodySpacing: 2,
          bodyFont: {},
          bodyAlign: "left",
          footerColor: "#fff",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFont: { weight: "bold" },
          footerAlign: "left",
          padding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          boxHeight: function (t, e) {
            return e.bodyFont.size;
          },
          boxWidth: function (t, e) {
            return e.bodyFont.size;
          },
          multiKeyBackground: "#fff",
          displayColors: !0,
          boxPadding: 0,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          animation: { duration: 400, easing: "easeOutQuart" },
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "width", "height", "caretX", "caretY"],
            },
            opacity: { easing: "linear", duration: 200 },
          },
          callbacks: {
            beforeTitle: v.aF,
            title: function (t) {
              if (t.length > 0) {
                var e = t[0],
                  i = e.chart.data.labels,
                  n = i ? i.length : 0;
                if (this && this.options && "dataset" === this.options.mode)
                  return e.dataset.label || "";
                if (e.label) return e.label;
                if (n > 0 && e.dataIndex < n) return i[e.dataIndex];
              }
              return "";
            },
            afterTitle: v.aF,
            beforeBody: v.aF,
            beforeLabel: v.aF,
            label: function (t) {
              if (this && this.options && "dataset" === this.options.mode)
                return t.label + ": " + t.formattedValue || t.formattedValue;
              var e = t.dataset.label || "";
              e && (e += ": ");
              var i = t.formattedValue;
              return ((0, v.k)(i) || (e += i), e);
            },
            labelColor: function (t) {
              var e = t.chart
                .getDatasetMeta(t.datasetIndex)
                .controller.getStyle(t.dataIndex);
              return {
                borderColor: e.borderColor,
                backgroundColor: e.backgroundColor,
                borderWidth: e.borderWidth,
                borderDash: e.borderDash,
                borderDashOffset: e.borderDashOffset,
                borderRadius: 0,
              };
            },
            labelTextColor: function () {
              return this.options.bodyColor;
            },
            labelPointStyle: function (t) {
              var e = t.chart
                .getDatasetMeta(t.datasetIndex)
                .controller.getStyle(t.dataIndex);
              return { pointStyle: e.pointStyle, rotation: e.rotation };
            },
            afterLabel: v.aF,
            afterBody: v.aF,
            beforeFooter: v.aF,
            footer: v.aF,
            afterFooter: v.aF,
          },
        },
        defaultRoutes: {
          bodyFont: "font",
          footerFont: "font",
          titleFont: "font",
        },
        descriptors: {
          _scriptable: function (t) {
            return "filter" !== t && "itemSort" !== t && "external" !== t;
          },
          _indexable: !1,
          callbacks: { _scriptable: !1, _indexable: !1 },
          animation: { _fallback: !1 },
          animations: { _fallback: "animation" },
        },
        additionalOptionScopes: ["interaction"],
      };
      function wi(t, e, i, n) {
        var a = t.indexOf(e);
        return -1 === a
          ? (function (t, e, i, n) {
              return (
                "string" === typeof e
                  ? ((i = t.push(e) - 1), n.unshift({ index: i, label: e }))
                  : isNaN(e) && (i = null),
                i
              );
            })(t, e, i, n)
          : a !== t.lastIndexOf(e)
            ? i
            : a;
      }
      var Mi = (function (t) {
        (0, o.default)(i, t);
        var e = (0, s.default)(i);
        function i(t) {
          var n;
          return (
            (0, f.default)(this, i),
            ((n = e.call(this, t))._startValue = void 0),
            (n._valueRange = 0),
            (n._addedLabels = []),
            n
          );
        }
        return (
          (0, d.default)(i, [
            {
              key: "init",
              value: function (t) {
                var e = this._addedLabels;
                if (e.length) {
                  var n,
                    o = this.getLabels(),
                    s = (0, h.Z)(e);
                  try {
                    for (s.s(); !(n = s.n()).done;) {
                      var l = n.value,
                        u = l.index,
                        c = l.label;
                      o[u] === c && o.splice(u, 1);
                    }
                  } catch (f) {
                    s.e(f);
                  } finally {
                    s.f();
                  }
                  this._addedLabels = [];
                }
                r((0, a.Z)(i.prototype), "init", this).call(this, t);
              },
            },
            {
              key: "parse",
              value: function (t, e) {
                if ((0, v.k)(t)) return null;
                var i = this.getLabels();
                return (function (t, e) {
                  return null === t ? null : (0, v.E)(Math.round(t), 0, e);
                })(
                  (e =
                    isFinite(e) && i[e] === t
                      ? e
                      : wi(i, t, (0, v.v)(e, t), this._addedLabels)),
                  i.length - 1,
                );
              },
            },
            {
              key: "determineDataLimits",
              value: function () {
                var t = this.getUserBounds(),
                  e = t.minDefined,
                  i = t.maxDefined,
                  n = this.getMinMax(!0),
                  a = n.min,
                  r = n.max;
                ("ticks" === this.options.bounds &&
                  (e || (a = 0), i || (r = this.getLabels().length - 1)),
                  (this.min = a),
                  (this.max = r));
              },
            },
            {
              key: "buildTicks",
              value: function () {
                var t = this.min,
                  e = this.max,
                  i = this.options.offset,
                  n = [],
                  a = this.getLabels();
                ((a = 0 === t && e === a.length - 1 ? a : a.slice(t, e + 1)),
                  (this._valueRange = Math.max(a.length - (i ? 0 : 1), 1)),
                  (this._startValue = this.min - (i ? 0.5 : 0)));
                for (var r = t; r <= e; r++) n.push({ value: r });
                return n;
              },
            },
            {
              key: "getLabelForValue",
              value: function (t) {
                var e = this.getLabels();
                return t >= 0 && t < e.length ? e[t] : t;
              },
            },
            {
              key: "configure",
              value: function () {
                (r((0, a.Z)(i.prototype), "configure", this).call(this),
                  this.isHorizontal() ||
                    (this._reversePixels = !this._reversePixels));
              },
            },
            {
              key: "getPixelForValue",
              value: function (t) {
                return (
                  "number" !== typeof t && (t = this.parse(t)),
                  null === t
                    ? NaN
                    : this.getPixelForDecimal(
                        (t - this._startValue) / this._valueRange,
                      )
                );
              },
            },
            {
              key: "getPixelForTick",
              value: function (t) {
                var e = this.ticks;
                return t < 0 || t > e.length - 1
                  ? null
                  : this.getPixelForValue(e[t].value);
              },
            },
            {
              key: "getValueForPixel",
              value: function (t) {
                return Math.round(
                  this._startValue +
                    this.getDecimalForPixel(t) * this._valueRange,
                );
              },
            },
            {
              key: "getBasePixel",
              value: function () {
                return this.bottom;
              },
            },
          ]),
          i
        );
      })(ot);
      function Si(t, e, i) {
        var n = i.horizontal,
          a = i.minRotation,
          r = (0, v.t)(a),
          o = (n ? Math.sin(r) : Math.cos(r)) || 0.001,
          s = 0.75 * e * ("" + t).length;
        return Math.min(e / o, s);
      }
      ((Mi.id = "category"),
        (Mi.defaults = { ticks: { callback: Mi.prototype.getLabelForValue } }));
      var Pi = (function (t) {
          (0, o.default)(i, t);
          var e = (0, s.default)(i);
          function i(t) {
            var n;
            return (
              (0, f.default)(this, i),
              ((n = e.call(this, t)).start = void 0),
              (n.end = void 0),
              (n._startValue = void 0),
              (n._endValue = void 0),
              (n._valueRange = 0),
              n
            );
          }
          return (
            (0, d.default)(i, [
              {
                key: "parse",
                value: function (t, e) {
                  return (0, v.k)(t) ||
                    (("number" === typeof t || t instanceof Number) &&
                      !isFinite(+t))
                    ? null
                    : +t;
                },
              },
              {
                key: "handleTickRangeOptions",
                value: function () {
                  var t = this.options.beginAtZero,
                    e = this.getUserBounds(),
                    i = e.minDefined,
                    n = e.maxDefined,
                    a = this.min,
                    r = this.max,
                    o = function (t) {
                      return (a = i ? a : t);
                    },
                    s = function (t) {
                      return (r = n ? r : t);
                    };
                  if (t) {
                    var l = (0, v.s)(a),
                      u = (0, v.s)(r);
                    l < 0 && u < 0 ? s(0) : l > 0 && u > 0 && o(0);
                  }
                  if (a === r) {
                    var h = 1;
                    ((r >= Number.MAX_SAFE_INTEGER ||
                      a <= Number.MIN_SAFE_INTEGER) &&
                      (h = Math.abs(0.05 * r)),
                      s(r + h),
                      t || o(a - h));
                  }
                  ((this.min = a), (this.max = r));
                },
              },
              {
                key: "getTickLimit",
                value: function () {
                  var t,
                    e = this.options.ticks,
                    i = e.maxTicksLimit,
                    n = e.stepSize;
                  return (
                    n
                      ? (t =
                          Math.ceil(this.max / n) -
                          Math.floor(this.min / n) +
                          1) > 1e3 &&
                        (console.warn(
                          "scales."
                            .concat(this.id, ".ticks.stepSize: ")
                            .concat(n, " would result generating up to ")
                            .concat(t, " ticks. Limiting to 1000."),
                        ),
                        (t = 1e3))
                      : ((t = this.computeTickLimit()), (i = i || 11)),
                    i && (t = Math.min(i, t)),
                    t
                  );
                },
              },
              {
                key: "computeTickLimit",
                value: function () {
                  return Number.POSITIVE_INFINITY;
                },
              },
              {
                key: "buildTicks",
                value: function () {
                  var t = this.options,
                    e = t.ticks,
                    i = this.getTickLimit(),
                    n = (function (t, e) {
                      var i,
                        n,
                        a,
                        r,
                        o = [],
                        s = t.bounds,
                        l = t.step,
                        u = t.min,
                        h = t.max,
                        c = t.precision,
                        f = t.count,
                        d = t.maxTicks,
                        g = t.maxDigits,
                        p = t.includeBounds,
                        y = l || 1,
                        b = d - 1,
                        m = e.min,
                        x = e.max,
                        k = !(0, v.k)(u),
                        _ = !(0, v.k)(h),
                        w = !(0, v.k)(f),
                        M = (x - m) / (g + 1),
                        S = (0, v.aI)((x - m) / b / y) * y;
                      if (S < 1e-14 && !k && !_)
                        return [{ value: m }, { value: x }];
                      ((r = Math.ceil(x / S) - Math.floor(m / S)) > b &&
                        (S = (0, v.aI)((r * S) / b / y) * y),
                        (0, v.k)(c) ||
                          ((i = Math.pow(10, c)), (S = Math.ceil(S * i) / i)),
                        "ticks" === s
                          ? ((n = Math.floor(m / S) * S),
                            (a = Math.ceil(x / S) * S))
                          : ((n = m), (a = x)),
                        k && _ && l && (0, v.aJ)((h - u) / l, S / 1e3)
                          ? ((S =
                              (h - u) /
                              (r = Math.round(Math.min((h - u) / S, d)))),
                            (n = u),
                            (a = h))
                          : w
                            ? (S =
                                ((a = _ ? h : a) - (n = k ? u : n)) /
                                (r = f - 1))
                            : ((r = (a - n) / S),
                              (r = (0, v.aK)(r, Math.round(r), S / 1e3)
                                ? Math.round(r)
                                : Math.ceil(r))));
                      var P = Math.max((0, v.aL)(S), (0, v.aL)(n));
                      ((i = Math.pow(10, (0, v.k)(c) ? P : c)),
                        (n = Math.round(n * i) / i),
                        (a = Math.round(a * i) / i));
                      var C = 0;
                      for (
                        k &&
                        (p && n !== u
                          ? (o.push({ value: u }),
                            n < u && C++,
                            (0, v.aK)(
                              Math.round((n + C * S) * i) / i,
                              u,
                              Si(u, M, t),
                            ) && C++)
                          : n < u && C++);
                        C < r;
                        ++C
                      )
                        o.push({ value: Math.round((n + C * S) * i) / i });
                      return (
                        _ && p && a !== h
                          ? o.length &&
                            (0, v.aK)(o[o.length - 1].value, h, Si(h, M, t))
                            ? (o[o.length - 1].value = h)
                            : o.push({ value: h })
                          : (_ && a !== h) || o.push({ value: a }),
                        o
                      );
                    })(
                      {
                        maxTicks: (i = Math.max(2, i)),
                        bounds: t.bounds,
                        min: t.min,
                        max: t.max,
                        precision: e.precision,
                        step: e.stepSize,
                        count: e.count,
                        maxDigits: this._maxDigits(),
                        horizontal: this.isHorizontal(),
                        minRotation: e.minRotation || 0,
                        includeBounds: !1 !== e.includeBounds,
                      },
                      this._range || this,
                    );
                  return (
                    "ticks" === t.bounds && (0, v.aH)(n, this, "value"),
                    t.reverse
                      ? (n.reverse(),
                        (this.start = this.max),
                        (this.end = this.min))
                      : ((this.start = this.min), (this.end = this.max)),
                    n
                  );
                },
              },
              {
                key: "configure",
                value: function () {
                  var t = this.ticks,
                    e = this.min,
                    n = this.max;
                  if (
                    (r((0, a.Z)(i.prototype), "configure", this).call(this),
                    this.options.offset && t.length)
                  ) {
                    var o = (n - e) / Math.max(t.length - 1, 1) / 2;
                    ((e -= o), (n += o));
                  }
                  ((this._startValue = e),
                    (this._endValue = n),
                    (this._valueRange = n - e));
                },
              },
              {
                key: "getLabelForValue",
                value: function (t) {
                  return (0, v.o)(
                    t,
                    this.chart.options.locale,
                    this.options.ticks.format,
                  );
                },
              },
            ]),
            i
          );
        })(ot),
        Ci = (function (t) {
          (0, o.default)(i, t);
          var e = (0, s.default)(i);
          function i() {
            return ((0, f.default)(this, i), e.apply(this, arguments));
          }
          return (
            (0, d.default)(i, [
              {
                key: "determineDataLimits",
                value: function () {
                  var t = this.getMinMax(!0),
                    e = t.min,
                    i = t.max;
                  ((this.min = (0, v.g)(e) ? e : 0),
                    (this.max = (0, v.g)(i) ? i : 1),
                    this.handleTickRangeOptions());
                },
              },
              {
                key: "computeTickLimit",
                value: function () {
                  var t = this.isHorizontal(),
                    e = t ? this.width : this.height,
                    i = (0, v.t)(this.options.ticks.minRotation),
                    n = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
                    a = this._resolveTickFontOptions(0);
                  return Math.ceil(e / Math.min(40, a.lineHeight / n));
                },
              },
              {
                key: "getPixelForValue",
                value: function (t) {
                  return null === t
                    ? NaN
                    : this.getPixelForDecimal(
                        (t - this._startValue) / this._valueRange,
                      );
                },
              },
              {
                key: "getValueForPixel",
                value: function (t) {
                  return (
                    this._startValue +
                    this.getDecimalForPixel(t) * this._valueRange
                  );
                },
              },
            ]),
            i
          );
        })(Pi);
      function Oi(t) {
        return 1 === t / Math.pow(10, Math.floor((0, v.z)(t)));
      }
      ((Ci.id = "linear"),
        (Ci.defaults = { ticks: { callback: q.formatters.numeric } }));
      var Di = (function (t) {
        (0, o.default)(i, t);
        var e = (0, s.default)(i);
        function i(t) {
          var n;
          return (
            (0, f.default)(this, i),
            ((n = e.call(this, t)).start = void 0),
            (n.end = void 0),
            (n._startValue = void 0),
            (n._valueRange = 0),
            n
          );
        }
        return (
          (0, d.default)(i, [
            {
              key: "parse",
              value: function (t, e) {
                var i = Pi.prototype.parse.apply(this, [t, e]);
                if (0 !== i) return (0, v.g)(i) && i > 0 ? i : null;
                this._zero = !0;
              },
            },
            {
              key: "determineDataLimits",
              value: function () {
                var t = this.getMinMax(!0),
                  e = t.min,
                  i = t.max;
                ((this.min = (0, v.g)(e) ? Math.max(0, e) : null),
                  (this.max = (0, v.g)(i) ? Math.max(0, i) : null),
                  this.options.beginAtZero && (this._zero = !0),
                  this.handleTickRangeOptions());
              },
            },
            {
              key: "handleTickRangeOptions",
              value: function () {
                var t = this.getUserBounds(),
                  e = t.minDefined,
                  i = t.maxDefined,
                  n = this.min,
                  a = this.max,
                  r = function (t) {
                    return (n = e ? n : t);
                  },
                  o = function (t) {
                    return (a = i ? a : t);
                  },
                  s = function (t, e) {
                    return Math.pow(10, Math.floor((0, v.z)(t)) + e);
                  };
                (n === a &&
                  (n <= 0 ? (r(1), o(10)) : (r(s(n, -1)), o(s(a, 1)))),
                  n <= 0 && r(s(a, -1)),
                  a <= 0 && o(s(n, 1)),
                  this._zero &&
                    this.min !== this._suggestedMin &&
                    n === s(this.min, 0) &&
                    r(s(n, -1)),
                  (this.min = n),
                  (this.max = a));
              },
            },
            {
              key: "buildTicks",
              value: function () {
                var t = this.options,
                  e = (function (t, e) {
                    var i = Math.floor((0, v.z)(e.max)),
                      n = Math.ceil(e.max / Math.pow(10, i)),
                      a = [],
                      r = (0, v.B)(
                        t.min,
                        Math.pow(10, Math.floor((0, v.z)(e.min))),
                      ),
                      o = Math.floor((0, v.z)(r)),
                      s = Math.floor(r / Math.pow(10, o)),
                      l = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
                    do {
                      (a.push({ value: r, major: Oi(r) }),
                        10 === ++s && ((s = 1), (l = ++o >= 0 ? 1 : l)),
                        (r = Math.round(s * Math.pow(10, o) * l) / l));
                    } while (o < i || (o === i && s < n));
                    var u = (0, v.B)(t.max, r);
                    return (a.push({ value: u, major: Oi(r) }), a);
                  })({ min: this._userMin, max: this._userMax }, this);
                return (
                  "ticks" === t.bounds && (0, v.aH)(e, this, "value"),
                  t.reverse
                    ? (e.reverse(),
                      (this.start = this.max),
                      (this.end = this.min))
                    : ((this.start = this.min), (this.end = this.max)),
                  e
                );
              },
            },
            {
              key: "getLabelForValue",
              value: function (t) {
                return void 0 === t
                  ? "0"
                  : (0, v.o)(
                      t,
                      this.chart.options.locale,
                      this.options.ticks.format,
                    );
              },
            },
            {
              key: "configure",
              value: function () {
                var t = this.min;
                (r((0, a.Z)(i.prototype), "configure", this).call(this),
                  (this._startValue = (0, v.z)(t)),
                  (this._valueRange = (0, v.z)(this.max) - (0, v.z)(t)));
              },
            },
            {
              key: "getPixelForValue",
              value: function (t) {
                return (
                  (void 0 !== t && 0 !== t) || (t = this.min),
                  null === t || isNaN(t)
                    ? NaN
                    : this.getPixelForDecimal(
                        t === this.min
                          ? 0
                          : ((0, v.z)(t) - this._startValue) / this._valueRange,
                      )
                );
              },
            },
            {
              key: "getValueForPixel",
              value: function (t) {
                var e = this.getDecimalForPixel(t);
                return Math.pow(10, this._startValue + e * this._valueRange);
              },
            },
          ]),
          i
        );
      })(ot);
      function Ai(t) {
        var e = t.ticks;
        if (e.display && t.display) {
          var i = (0, v.K)(e.backdropPadding);
          return (0, v.v)(e.font && e.font.size, v.d.font.size) + i.height;
        }
        return 0;
      }
      function Ti(t, e, i, n, a) {
        return t === n || t === a
          ? { start: e - i / 2, end: e + i / 2 }
          : t < n || t > a
            ? { start: e - i, end: e }
            : { start: e, end: e + i };
      }
      function Ei(t) {
        for (
          var e,
            i,
            n,
            a = {
              l: t.left + t._padding.left,
              r: t.right - t._padding.right,
              t: t.top + t._padding.top,
              b: t.bottom - t._padding.bottom,
            },
            r = Object.assign({}, a),
            o = [],
            s = [],
            l = t._pointLabels.length,
            u = t.options.pointLabels,
            h = u.centerPointLabels ? v.P / l : 0,
            c = 0;
          c < l;
          c++
        ) {
          var f = u.setContext(t.getPointLabelContext(c));
          s[c] = f.padding;
          var d = t.getPointPosition(c, t.drawingArea + s[c], h),
            g = (0, v.O)(f.font),
            p =
              ((e = t.ctx),
              (i = g),
              (n = t._pointLabels[c]),
              (n = (0, v.b)(n) ? n : [n]),
              { w: (0, v.aM)(e, i.string, n), h: n.length * i.lineHeight });
          o[c] = p;
          var y = (0, v.az)(t.getIndexAngle(c) + h),
            b = Math.round((0, v.F)(y));
          Ri(r, a, y, Ti(b, d.x, p.w, 0, 180), Ti(b, d.y, p.h, 90, 270));
        }
        (t.setCenterPoint(a.l - r.l, r.r - a.r, a.t - r.t, r.b - a.b),
          (t._pointLabelItems = (function (t, e, i) {
            for (
              var n = [],
                a = t._pointLabels.length,
                r = t.options,
                o = Ai(r) / 2,
                s = t.drawingArea,
                l = r.pointLabels.centerPointLabels ? v.P / a : 0,
                u = 0;
              u < a;
              u++
            ) {
              var h = t.getPointPosition(u, s + o + i[u], l),
                c = Math.round((0, v.F)((0, v.az)(h.angle + v.H))),
                f = e[u],
                d = Fi(h.y, f.h, c),
                g = Li(c),
                p = Ii(h.x, f.w, g);
              n.push({
                x: h.x,
                y: d,
                textAlign: g,
                left: p,
                top: d,
                right: p + f.w,
                bottom: d + f.h,
              });
            }
            return n;
          })(t, o, s)));
      }
      function Ri(t, e, i, n, a) {
        var r = Math.abs(Math.sin(i)),
          o = Math.abs(Math.cos(i)),
          s = 0,
          l = 0;
        (n.start < e.l
          ? ((s = (e.l - n.start) / r), (t.l = Math.min(t.l, e.l - s)))
          : n.end > e.r &&
            ((s = (n.end - e.r) / r), (t.r = Math.max(t.r, e.r + s))),
          a.start < e.t
            ? ((l = (e.t - a.start) / o), (t.t = Math.min(t.t, e.t - l)))
            : a.end > e.b &&
              ((l = (a.end - e.b) / o), (t.b = Math.max(t.b, e.b + l))));
      }
      function Li(t) {
        return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
      }
      function Ii(t, e, i) {
        return ("right" === i ? (t -= e) : "center" === i && (t -= e / 2), t);
      }
      function Fi(t, e, i) {
        return (
          90 === i || 270 === i
            ? (t -= e / 2)
            : (i > 270 || i < 90) && (t -= e),
          t
        );
      }
      function zi(t, e, i, n) {
        var a = t.ctx;
        if (i) a.arc(t.xCenter, t.yCenter, e, 0, v.T);
        else {
          var r = t.getPointPosition(0, e);
          a.moveTo(r.x, r.y);
          for (var o = 1; o < n; o++)
            ((r = t.getPointPosition(o, e)), a.lineTo(r.x, r.y));
        }
      }
      ((Di.id = "logarithmic"),
        (Di.defaults = {
          ticks: { callback: q.formatters.logarithmic, major: { enabled: !0 } },
        }));
      var Vi = (function (t) {
        (0, o.default)(i, t);
        var e = (0, s.default)(i);
        function i(t) {
          var n;
          return (
            (0, f.default)(this, i),
            ((n = e.call(this, t)).xCenter = void 0),
            (n.yCenter = void 0),
            (n.drawingArea = void 0),
            (n._pointLabels = []),
            (n._pointLabelItems = []),
            n
          );
        }
        return (
          (0, d.default)(i, [
            {
              key: "setDimensions",
              value: function () {
                var t = (this._padding = (0, v.K)(Ai(this.options) / 2)),
                  e = (this.width = this.maxWidth - t.width),
                  i = (this.height = this.maxHeight - t.height);
                ((this.xCenter = Math.floor(this.left + e / 2 + t.left)),
                  (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
                  (this.drawingArea = Math.floor(Math.min(e, i) / 2)));
              },
            },
            {
              key: "determineDataLimits",
              value: function () {
                var t = this.getMinMax(!1),
                  e = t.min,
                  i = t.max;
                ((this.min = (0, v.g)(e) && !isNaN(e) ? e : 0),
                  (this.max = (0, v.g)(i) && !isNaN(i) ? i : 0),
                  this.handleTickRangeOptions());
              },
            },
            {
              key: "computeTickLimit",
              value: function () {
                return Math.ceil(this.drawingArea / Ai(this.options));
              },
            },
            {
              key: "generateTickLabels",
              value: function (t) {
                var e = this;
                (Pi.prototype.generateTickLabels.call(this, t),
                  (this._pointLabels = this.getLabels()
                    .map(function (t, i) {
                      var n = (0, v.C)(
                        e.options.pointLabels.callback,
                        [t, i],
                        e,
                      );
                      return n || 0 === n ? n : "";
                    })
                    .filter(function (t, i) {
                      return e.chart.getDataVisibility(i);
                    })));
              },
            },
            {
              key: "fit",
              value: function () {
                var t = this.options;
                t.display && t.pointLabels.display
                  ? Ei(this)
                  : this.setCenterPoint(0, 0, 0, 0);
              },
            },
            {
              key: "setCenterPoint",
              value: function (t, e, i, n) {
                ((this.xCenter += Math.floor((t - e) / 2)),
                  (this.yCenter += Math.floor((i - n) / 2)),
                  (this.drawingArea -= Math.min(
                    this.drawingArea / 2,
                    Math.max(t, e, i, n),
                  )));
              },
            },
            {
              key: "getIndexAngle",
              value: function (t) {
                var e = v.T / (this._pointLabels.length || 1),
                  i = this.options.startAngle || 0;
                return (0, v.az)(t * e + (0, v.t)(i));
              },
            },
            {
              key: "getDistanceFromCenterForValue",
              value: function (t) {
                if ((0, v.k)(t)) return NaN;
                var e = this.drawingArea / (this.max - this.min);
                return this.options.reverse
                  ? (this.max - t) * e
                  : (t - this.min) * e;
              },
            },
            {
              key: "getValueForDistanceFromCenter",
              value: function (t) {
                if ((0, v.k)(t)) return NaN;
                var e = t / (this.drawingArea / (this.max - this.min));
                return this.options.reverse ? this.max - e : this.min + e;
              },
            },
            {
              key: "getPointLabelContext",
              value: function (t) {
                var e = this._pointLabels || [];
                if (t >= 0 && t < e.length) {
                  var i = e[t];
                  return (function (t, e, i) {
                    return (0, v.h)(t, {
                      label: i,
                      index: e,
                      type: "pointLabel",
                    });
                  })(this.getContext(), t, i);
                }
              },
            },
            {
              key: "getPointPosition",
              value: function (t, e) {
                var i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0,
                  n = this.getIndexAngle(t) - v.H + i;
                return {
                  x: Math.cos(n) * e + this.xCenter,
                  y: Math.sin(n) * e + this.yCenter,
                  angle: n,
                };
              },
            },
            {
              key: "getPointPositionForValue",
              value: function (t, e) {
                return this.getPointPosition(
                  t,
                  this.getDistanceFromCenterForValue(e),
                );
              },
            },
            {
              key: "getBasePosition",
              value: function (t) {
                return this.getPointPositionForValue(
                  t || 0,
                  this.getBaseValue(),
                );
              },
            },
            {
              key: "getPointLabelPosition",
              value: function (t) {
                var e = this._pointLabelItems[t];
                return {
                  left: e.left,
                  top: e.top,
                  right: e.right,
                  bottom: e.bottom,
                };
              },
            },
            {
              key: "drawBackground",
              value: function () {
                var t = this.options,
                  e = t.backgroundColor,
                  i = t.grid.circular;
                if (e) {
                  var n = this.ctx;
                  (n.save(),
                    n.beginPath(),
                    zi(
                      this,
                      this.getDistanceFromCenterForValue(this._endValue),
                      i,
                      this._pointLabels.length,
                    ),
                    n.closePath(),
                    (n.fillStyle = e),
                    n.fill(),
                    n.restore());
                }
              },
            },
            {
              key: "drawGrid",
              value: function () {
                var t,
                  e,
                  i,
                  n = this,
                  a = this.ctx,
                  r = this.options,
                  o = r.angleLines,
                  s = r.grid,
                  l = this._pointLabels.length;
                if (
                  (r.pointLabels.display &&
                    (function (t, e) {
                      for (
                        var i = t.ctx, n = t.options.pointLabels, a = e - 1;
                        a >= 0;
                        a--
                      ) {
                        var r = n.setContext(t.getPointLabelContext(a)),
                          o = (0, v.O)(r.font),
                          s = t._pointLabelItems[a],
                          l = s.x,
                          u = s.y,
                          h = s.textAlign,
                          c = s.left,
                          f = s.top,
                          d = s.right,
                          g = s.bottom,
                          p = r.backdropColor;
                        if (!(0, v.k)(p)) {
                          var y = (0, v.ax)(r.borderRadius),
                            b = (0, v.K)(r.backdropPadding);
                          i.fillStyle = p;
                          var m = c - b.left,
                            x = f - b.top,
                            k = d - c + b.width,
                            _ = g - f + b.height;
                          Object.values(y).some(function (t) {
                            return 0 !== t;
                          })
                            ? (i.beginPath(),
                              (0, v.av)(i, {
                                x: m,
                                y: x,
                                w: k,
                                h: _,
                                radius: y,
                              }),
                              i.fill())
                            : i.fillRect(m, x, k, _);
                        }
                        (0, v.M)(
                          i,
                          t._pointLabels[a],
                          l,
                          u + o.lineHeight / 2,
                          o,
                          {
                            color: r.color,
                            textAlign: h,
                            textBaseline: "middle",
                          },
                        );
                      }
                    })(this, l),
                  s.display &&
                    this.ticks.forEach(function (t, i) {
                      if (0 !== i) {
                        e = n.getDistanceFromCenterForValue(t.value);
                        var a = s.setContext(n.getContext(i - 1));
                        !(function (t, e, i, n) {
                          var a = t.ctx,
                            r = e.circular,
                            o = e.color,
                            s = e.lineWidth;
                          (!r && !n) ||
                            !o ||
                            !s ||
                            i < 0 ||
                            (a.save(),
                            (a.strokeStyle = o),
                            (a.lineWidth = s),
                            a.setLineDash(e.borderDash),
                            (a.lineDashOffset = e.borderDashOffset),
                            a.beginPath(),
                            zi(t, i, r, n),
                            a.closePath(),
                            a.stroke(),
                            a.restore());
                        })(n, a, e, l);
                      }
                    }),
                  o.display)
                ) {
                  for (a.save(), t = l - 1; t >= 0; t--) {
                    var u = o.setContext(this.getPointLabelContext(t)),
                      h = u.color,
                      c = u.lineWidth;
                    c &&
                      h &&
                      ((a.lineWidth = c),
                      (a.strokeStyle = h),
                      a.setLineDash(u.borderDash),
                      (a.lineDashOffset = u.borderDashOffset),
                      (e = this.getDistanceFromCenterForValue(
                        r.ticks.reverse ? this.min : this.max,
                      )),
                      (i = this.getPointPosition(t, e)),
                      a.beginPath(),
                      a.moveTo(this.xCenter, this.yCenter),
                      a.lineTo(i.x, i.y),
                      a.stroke());
                  }
                  a.restore();
                }
              },
            },
            { key: "drawBorder", value: function () {} },
            {
              key: "drawLabels",
              value: function () {
                var t = this,
                  e = this.ctx,
                  i = this.options,
                  n = i.ticks;
                if (n.display) {
                  var a,
                    r,
                    o = this.getIndexAngle(0);
                  (e.save(),
                    e.translate(this.xCenter, this.yCenter),
                    e.rotate(o),
                    (e.textAlign = "center"),
                    (e.textBaseline = "middle"),
                    this.ticks.forEach(function (o, s) {
                      if (0 !== s || i.reverse) {
                        var l = n.setContext(t.getContext(s)),
                          u = (0, v.O)(l.font);
                        if (
                          ((a = t.getDistanceFromCenterForValue(
                            t.ticks[s].value,
                          )),
                          l.showLabelBackdrop)
                        ) {
                          ((e.font = u.string),
                            (r = e.measureText(o.label).width),
                            (e.fillStyle = l.backdropColor));
                          var h = (0, v.K)(l.backdropPadding);
                          e.fillRect(
                            -r / 2 - h.left,
                            -a - u.size / 2 - h.top,
                            r + h.width,
                            u.size + h.height,
                          );
                        }
                        (0, v.M)(e, o.label, 0, -a, u, { color: l.color });
                      }
                    }),
                    e.restore());
                }
              },
            },
            { key: "drawTitle", value: function () {} },
          ]),
          i
        );
      })(Pi);
      ((Vi.id = "radialLinear"),
        (Vi.defaults = {
          display: !0,
          animate: !0,
          position: "chartArea",
          angleLines: {
            display: !0,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0,
          },
          grid: { circular: !1 },
          startAngle: 0,
          ticks: { showLabelBackdrop: !0, callback: q.formatters.numeric },
          pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: { size: 10 },
            callback: function (t) {
              return t;
            },
            padding: 5,
            centerPointLabels: !1,
          },
        }),
        (Vi.defaultRoutes = {
          "angleLines.color": "borderColor",
          "pointLabels.color": "color",
          "ticks.color": "color",
        }),
        (Vi.descriptors = { angleLines: { _fallback: "grid" } }));
      var ji = {
          millisecond: { common: !0, size: 1, steps: 1e3 },
          second: { common: !0, size: 1e3, steps: 60 },
          minute: { common: !0, size: 6e4, steps: 60 },
          hour: { common: !0, size: 36e5, steps: 24 },
          day: { common: !0, size: 864e5, steps: 30 },
          week: { common: !1, size: 6048e5, steps: 4 },
          month: { common: !0, size: 2628e6, steps: 12 },
          quarter: { common: !1, size: 7884e6, steps: 4 },
          year: { common: !0, size: 3154e7 },
        },
        Wi = Object.keys(ji);
      function Ni(t, e) {
        return t - e;
      }
      function Bi(t, e) {
        if ((0, v.k)(e)) return null;
        var i = t._adapter,
          n = t._parseOpts,
          a = n.parser,
          r = n.round,
          o = n.isoWeekday,
          s = e;
        return (
          "function" === typeof a && (s = a(s)),
          (0, v.g)(s) ||
            (s = "string" === typeof a ? i.parse(s, a) : i.parse(s)),
          null === s
            ? null
            : (r &&
                (s =
                  "week" !== r || (!(0, v.x)(o) && !0 !== o)
                    ? i.startOf(s, r)
                    : i.startOf(s, "isoWeek", o)),
              +s)
        );
      }
      function Hi(t, e, i, n) {
        for (var a = Wi.length, r = Wi.indexOf(t); r < a - 1; ++r) {
          var o = ji[Wi[r]],
            s = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
          if (o.common && Math.ceil((i - e) / (s * o.size)) <= n) return Wi[r];
        }
        return Wi[a - 1];
      }
      function Yi(t, e, i) {
        if (i) {
          if (i.length) {
            var n = (0, v.aO)(i, e),
              a = n.lo,
              r = n.hi;
            t[i[a] >= e ? i[a] : i[r]] = !0;
          }
        } else t[e] = !0;
      }
      function Zi(t, e, i) {
        var n,
          a,
          r = [],
          o = {},
          s = e.length;
        for (n = 0; n < s; ++n)
          ((o[(a = e[n])] = n), r.push({ value: a, major: !1 }));
        return 0 !== s && i
          ? (function (t, e, i, n) {
              var a,
                r,
                o = t._adapter,
                s = +o.startOf(e[0].value, n),
                l = e[e.length - 1].value;
              for (a = s; a <= l; a = +o.add(a, 1, n))
                (r = i[a]) >= 0 && (e[r].major = !0);
              return e;
            })(t, r, o, i)
          : r;
      }
      var Xi = (function (t) {
        (0, o.default)(i, t);
        var e = (0, s.default)(i);
        function i(t) {
          var n;
          return (
            (0, f.default)(this, i),
            ((n = e.call(this, t))._cache = { data: [], labels: [], all: [] }),
            (n._unit = "day"),
            (n._majorUnit = void 0),
            (n._offsets = {}),
            (n._normalized = !1),
            (n._parseOpts = void 0),
            n
          );
        }
        return (
          (0, d.default)(i, [
            {
              key: "init",
              value: function (t, e) {
                var n = t.time || (t.time = {}),
                  o = (this._adapter = new dt._date(t.adapters.date));
                (o.init(e),
                  (0, v.ac)(n.displayFormats, o.formats()),
                  (this._parseOpts = {
                    parser: n.parser,
                    round: n.round,
                    isoWeekday: n.isoWeekday,
                  }),
                  r((0, a.Z)(i.prototype), "init", this).call(this, t),
                  (this._normalized = e.normalized));
              },
            },
            {
              key: "parse",
              value: function (t, e) {
                return void 0 === t ? null : Bi(this, t);
              },
            },
            {
              key: "beforeLayout",
              value: function () {
                (r((0, a.Z)(i.prototype), "beforeLayout", this).call(this),
                  (this._cache = { data: [], labels: [], all: [] }));
              },
            },
            {
              key: "determineDataLimits",
              value: function () {
                var t = this.options,
                  e = this._adapter,
                  i = t.time.unit || "day",
                  n = this.getUserBounds(),
                  a = n.min,
                  r = n.max,
                  o = n.minDefined,
                  s = n.maxDefined;
                function l(t) {
                  (o || isNaN(t.min) || (a = Math.min(a, t.min)),
                    s || isNaN(t.max) || (r = Math.max(r, t.max)));
                }
                ((o && s) ||
                  (l(this._getLabelBounds()),
                  ("ticks" === t.bounds && "labels" === t.ticks.source) ||
                    l(this.getMinMax(!1))),
                  (a =
                    (0, v.g)(a) && !isNaN(a) ? a : +e.startOf(Date.now(), i)),
                  (r =
                    (0, v.g)(r) && !isNaN(r) ? r : +e.endOf(Date.now(), i) + 1),
                  (this.min = Math.min(a, r - 1)),
                  (this.max = Math.max(a + 1, r)));
              },
            },
            {
              key: "_getLabelBounds",
              value: function () {
                var t = this.getLabelTimestamps(),
                  e = Number.POSITIVE_INFINITY,
                  i = Number.NEGATIVE_INFINITY;
                return (
                  t.length && ((e = t[0]), (i = t[t.length - 1])),
                  { min: e, max: i }
                );
              },
            },
            {
              key: "buildTicks",
              value: function () {
                var t = this.options,
                  e = t.time,
                  i = t.ticks,
                  n =
                    "labels" === i.source
                      ? this.getLabelTimestamps()
                      : this._generate();
                "ticks" === t.bounds &&
                  n.length &&
                  ((this.min = this._userMin || n[0]),
                  (this.max = this._userMax || n[n.length - 1]));
                var a = this.min,
                  r = this.max,
                  o = (0, v.aN)(n, a, r);
                return (
                  (this._unit =
                    e.unit ||
                    (i.autoSkip
                      ? Hi(
                          e.minUnit,
                          this.min,
                          this.max,
                          this._getLabelCapacity(a),
                        )
                      : (function (t, e, i, n, a) {
                          for (var r = Wi.length - 1; r >= Wi.indexOf(i); r--) {
                            var o = Wi[r];
                            if (
                              ji[o].common &&
                              t._adapter.diff(a, n, o) >= e - 1
                            )
                              return o;
                          }
                          return Wi[i ? Wi.indexOf(i) : 0];
                        })(this, o.length, e.minUnit, this.min, this.max))),
                  (this._majorUnit =
                    i.major.enabled && "year" !== this._unit
                      ? (function (t) {
                          for (
                            var e = Wi.indexOf(t) + 1, i = Wi.length;
                            e < i;
                            ++e
                          )
                            if (ji[Wi[e]].common) return Wi[e];
                        })(this._unit)
                      : void 0),
                  this.initOffsets(n),
                  t.reverse && o.reverse(),
                  Zi(this, o, this._majorUnit)
                );
              },
            },
            {
              key: "afterAutoSkip",
              value: function () {
                this.options.offsetAfterAutoskip &&
                  this.initOffsets(
                    this.ticks.map(function (t) {
                      return +t.value;
                    }),
                  );
              },
            },
            {
              key: "initOffsets",
              value: function (t) {
                var e,
                  i,
                  n = 0,
                  a = 0;
                this.options.offset &&
                  t.length &&
                  ((e = this.getDecimalForValue(t[0])),
                  (n =
                    1 === t.length
                      ? 1 - e
                      : (this.getDecimalForValue(t[1]) - e) / 2),
                  (i = this.getDecimalForValue(t[t.length - 1])),
                  (a =
                    1 === t.length
                      ? i
                      : (i - this.getDecimalForValue(t[t.length - 2])) / 2));
                var r = t.length < 3 ? 0.5 : 0.25;
                ((n = (0, v.E)(n, 0, r)),
                  (a = (0, v.E)(a, 0, r)),
                  (this._offsets = {
                    start: n,
                    end: a,
                    factor: 1 / (n + 1 + a),
                  }));
              },
            },
            {
              key: "_generate",
              value: function () {
                var t,
                  e,
                  i = this._adapter,
                  n = this.min,
                  a = this.max,
                  r = this.options,
                  o = r.time,
                  s = o.unit || Hi(o.minUnit, n, a, this._getLabelCapacity(n)),
                  l = (0, v.v)(o.stepSize, 1),
                  u = "week" === s && o.isoWeekday,
                  h = (0, v.x)(u) || !0 === u,
                  c = {},
                  f = n;
                if (
                  (h && (f = +i.startOf(f, "isoWeek", u)),
                  (f = +i.startOf(f, h ? "day" : s)),
                  i.diff(a, n, s) > 1e5 * l)
                )
                  throw new Error(
                    n +
                      " and " +
                      a +
                      " are too far apart with stepSize of " +
                      l +
                      " " +
                      s,
                  );
                var d = "data" === r.ticks.source && this.getDataTimestamps();
                for (t = f, e = 0; t < a; t = +i.add(t, l, s), e++) Yi(c, t, d);
                return (
                  (t !== a && "ticks" !== r.bounds && 1 !== e) || Yi(c, t, d),
                  Object.keys(c)
                    .sort(function (t, e) {
                      return t - e;
                    })
                    .map(function (t) {
                      return +t;
                    })
                );
              },
            },
            {
              key: "getLabelForValue",
              value: function (t) {
                var e = this._adapter,
                  i = this.options.time;
                return i.tooltipFormat
                  ? e.format(t, i.tooltipFormat)
                  : e.format(t, i.displayFormats.datetime);
              },
            },
            {
              key: "_tickFormatFunction",
              value: function (t, e, i, n) {
                var a = this.options,
                  r = a.time.displayFormats,
                  o = this._unit,
                  s = this._majorUnit,
                  l = o && r[o],
                  u = s && r[s],
                  h = i[e],
                  c = s && u && h && h.major,
                  f = this._adapter.format(t, n || (c ? u : l)),
                  d = a.ticks.callback;
                return d ? (0, v.C)(d, [f, e, i], this) : f;
              },
            },
            {
              key: "generateTickLabels",
              value: function (t) {
                var e, i, n;
                for (e = 0, i = t.length; e < i; ++e)
                  (n = t[e]).label = this._tickFormatFunction(n.value, e, t);
              },
            },
            {
              key: "getDecimalForValue",
              value: function (t) {
                return null === t
                  ? NaN
                  : (t - this.min) / (this.max - this.min);
              },
            },
            {
              key: "getPixelForValue",
              value: function (t) {
                var e = this._offsets,
                  i = this.getDecimalForValue(t);
                return this.getPixelForDecimal((e.start + i) * e.factor);
              },
            },
            {
              key: "getValueForPixel",
              value: function (t) {
                var e = this._offsets,
                  i = this.getDecimalForPixel(t) / e.factor - e.end;
                return this.min + i * (this.max - this.min);
              },
            },
            {
              key: "_getLabelSize",
              value: function (t) {
                var e = this.options.ticks,
                  i = this.ctx.measureText(t).width,
                  n = (0, v.t)(
                    this.isHorizontal() ? e.maxRotation : e.minRotation,
                  ),
                  a = Math.cos(n),
                  r = Math.sin(n),
                  o = this._resolveTickFontOptions(0).size;
                return { w: i * a + o * r, h: i * r + o * a };
              },
            },
            {
              key: "_getLabelCapacity",
              value: function (t) {
                var e = this.options.time,
                  i = e.displayFormats,
                  n = i[e.unit] || i.millisecond,
                  a = this._tickFormatFunction(
                    t,
                    0,
                    Zi(this, [t], this._majorUnit),
                    n,
                  ),
                  r = this._getLabelSize(a),
                  o =
                    Math.floor(
                      this.isHorizontal()
                        ? this.width / r.w
                        : this.height / r.h,
                    ) - 1;
                return o > 0 ? o : 1;
              },
            },
            {
              key: "getDataTimestamps",
              value: function () {
                var t,
                  e,
                  i = this._cache.data || [];
                if (i.length) return i;
                var n = this.getMatchingVisibleMetas();
                if (this._normalized && n.length)
                  return (this._cache.data =
                    n[0].controller.getAllParsedValues(this));
                for (t = 0, e = n.length; t < e; ++t)
                  i = i.concat(n[t].controller.getAllParsedValues(this));
                return (this._cache.data = this.normalize(i));
              },
            },
            {
              key: "getLabelTimestamps",
              value: function () {
                var t,
                  e,
                  i = this._cache.labels || [];
                if (i.length) return i;
                var n = this.getLabels();
                for (t = 0, e = n.length; t < e; ++t) i.push(Bi(this, n[t]));
                return (this._cache.labels = this._normalized
                  ? i
                  : this.normalize(i));
              },
            },
            {
              key: "normalize",
              value: function (t) {
                return (0, v._)(t.sort(Ni));
              },
            },
          ]),
          i
        );
      })(ot);
      function Ui(t, e, i) {
        var n,
          a,
          r,
          o,
          s = 0,
          l = t.length - 1;
        if (i) {
          if (e >= t[s].pos && e <= t[l].pos) {
            var u = (0, v.Z)(t, "pos", e);
            ((s = u.lo), (l = u.hi));
          }
          var h = t[s];
          ((n = h.pos), (r = h.time));
          var c = t[l];
          ((a = c.pos), (o = c.time));
        } else {
          if (e >= t[s].time && e <= t[l].time) {
            var f = (0, v.Z)(t, "time", e);
            ((s = f.lo), (l = f.hi));
          }
          var d = t[s];
          ((n = d.time), (r = d.pos));
          var g = t[l];
          ((a = g.time), (o = g.pos));
        }
        var p = a - n;
        return p ? r + ((o - r) * (e - n)) / p : r;
      }
      ((Xi.id = "time"),
        (Xi.defaults = {
          bounds: "data",
          adapters: {},
          time: {
            parser: !1,
            unit: !1,
            round: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {},
          },
          ticks: { source: "auto", major: { enabled: !1 } },
        }));
      var $i = (function (t) {
        (0, o.default)(i, t);
        var e = (0, s.default)(i);
        function i(t) {
          var n;
          return (
            (0, f.default)(this, i),
            ((n = e.call(this, t))._table = []),
            (n._minPos = void 0),
            (n._tableRange = void 0),
            n
          );
        }
        return (
          (0, d.default)(i, [
            {
              key: "initOffsets",
              value: function () {
                var t = this._getTimestampsForTable(),
                  e = (this._table = this.buildLookupTable(t));
                ((this._minPos = Ui(e, this.min)),
                  (this._tableRange = Ui(e, this.max) - this._minPos),
                  r((0, a.Z)(i.prototype), "initOffsets", this).call(this, t));
              },
            },
            {
              key: "buildLookupTable",
              value: function (t) {
                var e,
                  i,
                  n,
                  a,
                  r,
                  o = this.min,
                  s = this.max,
                  l = [],
                  u = [];
                for (e = 0, i = t.length; e < i; ++e)
                  (a = t[e]) >= o && a <= s && l.push(a);
                if (l.length < 2)
                  return [
                    { time: o, pos: 0 },
                    { time: s, pos: 1 },
                  ];
                for (e = 0, i = l.length; e < i; ++e)
                  ((r = l[e + 1]),
                    (n = l[e - 1]),
                    (a = l[e]),
                    Math.round((r + n) / 2) !== a &&
                      u.push({ time: a, pos: e / (i - 1) }));
                return u;
              },
            },
            {
              key: "_getTimestampsForTable",
              value: function () {
                var t = this._cache.all || [];
                if (t.length) return t;
                var e = this.getDataTimestamps(),
                  i = this.getLabelTimestamps();
                return (
                  (t =
                    e.length && i.length
                      ? this.normalize(e.concat(i))
                      : e.length
                        ? e
                        : i),
                  (t = this._cache.all = t)
                );
              },
            },
            {
              key: "getDecimalForValue",
              value: function (t) {
                return (Ui(this._table, t) - this._minPos) / this._tableRange;
              },
            },
            {
              key: "getValueForPixel",
              value: function (t) {
                var e = this._offsets,
                  i = this.getDecimalForPixel(t) / e.factor - e.end;
                return Ui(this._table, i * this._tableRange + this._minPos, !0);
              },
            },
          ]),
          i
        );
      })(Xi);
      (($i.id = "timeseries"), ($i.defaults = Xi.defaults));
    },
    6948: function (t, e, i) {
      "use strict";
      i.d(e, {
        $: function () {
          return _e;
        },
        A: function () {
          return Z;
        },
        B: function () {
          return v;
        },
        C: function () {
          return b;
        },
        D: function () {
          return We;
        },
        E: function () {
          return at;
        },
        F: function () {
          return q;
        },
        G: function () {
          return pe;
        },
        H: function () {
          return j;
        },
        I: function () {
          return rt;
        },
        J: function () {
          return be;
        },
        K: function () {
          return ze;
        },
        L: function () {
          return we;
        },
        M: function () {
          return Ce;
        },
        N: function () {
          return Me;
        },
        O: function () {
          return Ve;
        },
        P: function () {
          return L;
        },
        Q: function () {
          return m;
        },
        R: function () {
          return bt;
        },
        S: function () {
          return mt;
        },
        T: function () {
          return I;
        },
        U: function () {
          return he;
        },
        V: function () {
          return M;
        },
        W: function () {
          return D;
        },
        X: function () {
          return pi;
        },
        Y: function () {
          return ut;
        },
        Z: function () {
          return lt;
        },
        _: function () {
          return vt;
        },
        a: function () {
          return je;
        },
        a0: function () {
          return J;
        },
        a1: function () {
          return bi;
        },
        a2: function () {
          return hi;
        },
        a3: function () {
          return ki;
        },
        a4: function () {
          return pt;
        },
        a5: function () {
          return xi;
        },
        a6: function () {
          return ui;
        },
        a7: function () {
          return ce;
        },
        a8: function () {
          return T;
        },
        a9: function () {
          return He;
        },
        aA: function () {
          return Di;
        },
        aB: function () {
          return Ai;
        },
        aC: function () {
          return xt;
        },
        aD: function () {
          return Ti;
        },
        aE: function () {
          return ke;
        },
        aF: function () {
          return l;
        },
        aG: function () {
          return tt;
        },
        aH: function () {
          return K;
        },
        aI: function () {
          return Y;
        },
        aJ: function () {
          return $;
        },
        aK: function () {
          return U;
        },
        aL: function () {
          return G;
        },
        aM: function () {
          return ye;
        },
        aN: function () {
          return ht;
        },
        aO: function () {
          return st;
        },
        aa: function () {
          return Be;
        },
        ab: function () {
          return Ye;
        },
        ac: function () {
          return S;
        },
        ad: function () {
          return u;
        },
        ae: function () {
          return yt;
        },
        af: function () {
          return mi;
        },
        ag: function () {
          return me;
        },
        ah: function () {
          return E;
        },
        ai: function () {
          return x;
        },
        aj: function () {
          return R;
        },
        ak: function () {
          return ot;
        },
        al: function () {
          return Le;
        },
        am: function () {
          return li;
        },
        an: function () {
          return Fi;
        },
        ao: function () {
          return Ii;
        },
        ap: function () {
          return wi;
        },
        aq: function () {
          return Mi;
        },
        ar: function () {
          return _i;
        },
        as: function () {
          return Se;
        },
        at: function () {
          return Pe;
        },
        au: function () {
          return xe;
        },
        av: function () {
          return De;
        },
        aw: function () {
          return Ie;
        },
        ax: function () {
          return Fe;
        },
        ay: function () {
          return Li;
        },
        az: function () {
          return it;
        },
        b: function () {
          return c;
        },
        b2: function () {
          return V;
        },
        c: function () {
          return le;
        },
        d: function () {
          return ge;
        },
        e: function () {
          return Pt;
        },
        f: function () {
          return O;
        },
        g: function () {
          return d;
        },
        h: function () {
          return Ne;
        },
        i: function () {
          return f;
        },
        j: function () {
          return A;
        },
        k: function () {
          return h;
        },
        l: function () {
          return ft;
        },
        m: function () {
          return p;
        },
        n: function () {
          return y;
        },
        o: function () {
          return Pi;
        },
        p: function () {
          return nt;
        },
        q: function () {
          return kt;
        },
        r: function () {
          return gt;
        },
        s: function () {
          return H;
        },
        t: function () {
          return Q;
        },
        u: function () {
          return dt;
        },
        v: function () {
          return g;
        },
        w: function () {
          return _t;
        },
        x: function () {
          return X;
        },
        y: function () {
          return ei;
        },
        z: function () {
          return B;
        },
      });
      var n = i(2845),
        a = i(30225),
        r = i(94404),
        o = i(6892),
        s = i(12985);
      function l() {}
      var u = (function () {
        var t = 0;
        return function () {
          return t++;
        };
      })();
      function h(t) {
        return null === t || "undefined" === typeof t;
      }
      function c(t) {
        if (Array.isArray && Array.isArray(t)) return !0;
        var e = Object.prototype.toString.call(t);
        return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6);
      }
      function f(t) {
        return (
          null !== t && "[object Object]" === Object.prototype.toString.call(t)
        );
      }
      var d = function (t) {
        return ("number" === typeof t || t instanceof Number) && isFinite(+t);
      };
      function v(t, e) {
        return d(t) ? t : e;
      }
      function g(t, e) {
        return "undefined" === typeof t ? e : t;
      }
      var p = function (t, e) {
          return "string" === typeof t && t.endsWith("%")
            ? parseFloat(t) / 100
            : t / e;
        },
        y = function (t, e) {
          return "string" === typeof t && t.endsWith("%")
            ? (parseFloat(t) / 100) * e
            : +t;
        };
      function b(t, e, i) {
        if (t && "function" === typeof t.call) return t.apply(i, e);
      }
      function m(t, e, i, n) {
        var a, r, o;
        if (c(t))
          if (((r = t.length), n))
            for (a = r - 1; a >= 0; a--) e.call(i, t[a], a);
          else for (a = 0; a < r; a++) e.call(i, t[a], a);
        else if (f(t))
          for (r = (o = Object.keys(t)).length, a = 0; a < r; a++)
            e.call(i, t[o[a]], o[a]);
      }
      function x(t, e) {
        var i, n, a, r;
        if (!t || !e || t.length !== e.length) return !1;
        for (i = 0, n = t.length; i < n; ++i)
          if (
            ((a = t[i]),
            (r = e[i]),
            a.datasetIndex !== r.datasetIndex || a.index !== r.index)
          )
            return !1;
        return !0;
      }
      function k(t) {
        if (c(t)) return t.map(k);
        if (f(t)) {
          for (
            var e = Object.create(null),
              i = Object.keys(t),
              n = i.length,
              a = 0;
            a < n;
            ++a
          )
            e[i[a]] = k(t[i[a]]);
          return e;
        }
        return t;
      }
      function _(t) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
      }
      function w(t, e, i, n) {
        if (_(t)) {
          var a = e[t],
            r = i[t];
          f(a) && f(r) ? M(a, r, n) : (e[t] = k(r));
        }
      }
      function M(t, e, i) {
        var n = c(e) ? e : [e],
          a = n.length;
        if (!f(t)) return t;
        for (var r = (i = i || {}).merger || w, o = 0; o < a; ++o)
          if (f((e = n[o])))
            for (var s = Object.keys(e), l = 0, u = s.length; l < u; ++l)
              r(s[l], t, e, i);
        return t;
      }
      function S(t, e) {
        return M(t, e, { merger: P });
      }
      function P(t, e, i) {
        if (_(t)) {
          var n = e[t],
            a = i[t];
          f(n) && f(a)
            ? S(n, a)
            : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = k(a));
        }
      }
      var C = {
        "": function (t) {
          return t;
        },
        x: function (t) {
          return t.x;
        },
        y: function (t) {
          return t.y;
        },
      };
      function O(t, e) {
        var i =
          C[e] ||
          (C[e] = (function (t) {
            var e = (function (t) {
              var e,
                i = t.split("."),
                n = [],
                a = "",
                r = (0, s.Z)(i);
              try {
                for (r.s(); !(e = r.n()).done;) {
                  (a += e.value).endsWith("\\")
                    ? (a = a.slice(0, -1) + ".")
                    : (n.push(a), (a = ""));
                }
              } catch (o) {
                r.e(o);
              } finally {
                r.f();
              }
              return n;
            })(t);
            return function (t) {
              var i,
                n = (0, s.Z)(e);
              try {
                for (n.s(); !(i = n.n()).done;) {
                  var a = i.value;
                  if ("" === a) break;
                  t = t && t[a];
                }
              } catch (r) {
                n.e(r);
              } finally {
                n.f();
              }
              return t;
            };
          })(e));
        return i(t);
      }
      function D(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      }
      var A = function (t) {
          return "undefined" !== typeof t;
        },
        T = function (t) {
          return "function" === typeof t;
        },
        E = function (t, e) {
          if (t.size !== e.size) return !1;
          var i,
            n = (0, s.Z)(t);
          try {
            for (n.s(); !(i = n.n()).done;) {
              var a = i.value;
              if (!e.has(a)) return !1;
            }
          } catch (r) {
            n.e(r);
          } finally {
            n.f();
          }
          return !0;
        };
      function R(t) {
        return (
          "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type
        );
      }
      var L = Math.PI,
        I = 2 * L,
        F = I + L,
        z = Number.POSITIVE_INFINITY,
        V = L / 180,
        j = L / 2,
        W = L / 4,
        N = (2 * L) / 3,
        B = Math.log10,
        H = Math.sign;
      function Y(t) {
        var e = Math.round(t);
        t = U(t, e, t / 1e3) ? e : t;
        var i = Math.pow(10, Math.floor(B(t))),
          n = t / i;
        return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * i;
      }
      function Z(t) {
        var e,
          i = [],
          n = Math.sqrt(t);
        for (e = 1; e < n; e++) t % e === 0 && (i.push(e), i.push(t / e));
        return (
          n === (0 | n) && i.push(n),
          i
            .sort(function (t, e) {
              return t - e;
            })
            .pop(),
          i
        );
      }
      function X(t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
      }
      function U(t, e, i) {
        return Math.abs(t - e) < i;
      }
      function $(t, e) {
        var i = Math.round(t);
        return i - e <= t && i + e >= t;
      }
      function K(t, e, i) {
        var n, a, r;
        for (n = 0, a = t.length; n < a; n++)
          ((r = t[n][i]),
            isNaN(r) ||
              ((e.min = Math.min(e.min, r)), (e.max = Math.max(e.max, r))));
      }
      function Q(t) {
        return t * (L / 180);
      }
      function q(t) {
        return t * (180 / L);
      }
      function G(t) {
        if (d(t)) {
          for (var e = 1, i = 0; Math.round(t * e) / e !== t;) ((e *= 10), i++);
          return i;
        }
      }
      function J(t, e) {
        var i = e.x - t.x,
          n = e.y - t.y,
          a = Math.sqrt(i * i + n * n),
          r = Math.atan2(n, i);
        return (r < -0.5 * L && (r += I), { angle: r, distance: a });
      }
      function tt(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
      }
      function et(t, e) {
        return ((t - e + F) % I) - L;
      }
      function it(t) {
        return ((t % I) + I) % I;
      }
      function nt(t, e, i, n) {
        var a = it(t),
          r = it(e),
          o = it(i),
          s = it(r - a),
          l = it(o - a),
          u = it(a - r),
          h = it(a - o);
        return a === r || a === o || (n && r === o) || (s > l && u < h);
      }
      function at(t, e, i) {
        return Math.max(e, Math.min(i, t));
      }
      function rt(t) {
        return at(t, -32768, 32767);
      }
      function ot(t, e, i) {
        var n =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e-6;
        return t >= Math.min(e, i) - n && t <= Math.max(e, i) + n;
      }
      function st(t, e, i) {
        i =
          i ||
          function (i) {
            return t[i] < e;
          };
        for (var n, a = t.length - 1, r = 0; a - r > 1;)
          i((n = (r + a) >> 1)) ? (r = n) : (a = n);
        return { lo: r, hi: a };
      }
      var lt = function (t, e, i, n) {
          return st(
            t,
            i,
            n
              ? function (n) {
                  return t[n][e] <= i;
                }
              : function (n) {
                  return t[n][e] < i;
                },
          );
        },
        ut = function (t, e, i) {
          return st(t, i, function (n) {
            return t[n][e] >= i;
          });
        };
      function ht(t, e, i) {
        for (var n = 0, a = t.length; n < a && t[n] < e;) n++;
        for (; a > n && t[a - 1] > i;) a--;
        return n > 0 || a < t.length ? t.slice(n, a) : t;
      }
      var ct = ["push", "pop", "shift", "splice", "unshift"];
      function ft(t, e) {
        t._chartjs
          ? t._chartjs.listeners.push(e)
          : (Object.defineProperty(t, "_chartjs", {
              configurable: !0,
              enumerable: !1,
              value: { listeners: [e] },
            }),
            ct.forEach(function (e) {
              var i = "_onData" + D(e),
                n = t[e];
              Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !1,
                value: function () {
                  for (
                    var e = arguments.length, a = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    a[r] = arguments[r];
                  var o = n.apply(this, a);
                  return (
                    t._chartjs.listeners.forEach(function (t) {
                      "function" === typeof t[i] && t[i].apply(t, a);
                    }),
                    o
                  );
                },
              });
            }));
      }
      function dt(t, e) {
        var i = t._chartjs;
        if (i) {
          var n = i.listeners,
            a = n.indexOf(e);
          (-1 !== a && n.splice(a, 1),
            n.length > 0 ||
              (ct.forEach(function (e) {
                delete t[e];
              }),
              delete t._chartjs));
        }
      }
      function vt(t) {
        var e,
          i,
          n = new Set();
        for (e = 0, i = t.length; e < i; ++e) n.add(t[e]);
        return n.size === i ? t : Array.from(n);
      }
      var gt =
        "undefined" === typeof window
          ? function (t) {
              return t();
            }
          : window.requestAnimationFrame;
      function pt(t, e, i) {
        var n =
            i ||
            function (t) {
              return Array.prototype.slice.call(t);
            },
          a = !1,
          r = [];
        return function () {
          for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
            o[s] = arguments[s];
          ((r = n(o)),
            a ||
              ((a = !0),
              gt.call(window, function () {
                ((a = !1), t.apply(e, r));
              })));
        };
      }
      function yt(t, e) {
        var i;
        return function () {
          for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++)
            a[r] = arguments[r];
          return (
            e ? (clearTimeout(i), (i = setTimeout(t, e, a))) : t.apply(this, a),
            e
          );
        };
      }
      var bt = function (t) {
          return "start" === t ? "left" : "end" === t ? "right" : "center";
        },
        mt = function (t, e, i) {
          return "start" === t ? e : "end" === t ? i : (e + i) / 2;
        },
        xt = function (t, e, i, n) {
          return t === (n ? "left" : "right")
            ? i
            : "center" === t
              ? (e + i) / 2
              : e;
        };
      function kt(t, e, i) {
        var n = e.length,
          a = 0,
          r = n;
        if (t._sorted) {
          var o = t.iScale,
            s = t._parsed,
            l = o.axis,
            u = o.getUserBounds(),
            h = u.min,
            c = u.max,
            f = u.minDefined,
            d = u.maxDefined;
          (f &&
            (a = at(
              Math.min(
                lt(s, o.axis, h).lo,
                i ? n : lt(e, l, o.getPixelForValue(h)).lo,
              ),
              0,
              n - 1,
            )),
            (r = d
              ? at(
                  Math.max(
                    lt(s, o.axis, c, !0).hi + 1,
                    i ? 0 : lt(e, l, o.getPixelForValue(c), !0).hi + 1,
                  ),
                  a,
                  n,
                ) - a
              : n - a));
        }
        return { start: a, count: r };
      }
      function _t(t) {
        var e = t.xScale,
          i = t.yScale,
          n = t._scaleRanges,
          a = { xmin: e.min, xmax: e.max, ymin: i.min, ymax: i.max };
        if (!n) return ((t._scaleRanges = a), !0);
        var r =
          n.xmin !== e.min ||
          n.xmax !== e.max ||
          n.ymin !== i.min ||
          n.ymax !== i.max;
        return (Object.assign(n, a), r);
      }
      var wt = function (t) {
          return 0 === t || 1 === t;
        },
        Mt = function (t, e, i) {
          return -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * I) / i);
        },
        St = function (t, e, i) {
          return Math.pow(2, -10 * t) * Math.sin(((t - e) * I) / i) + 1;
        },
        Pt = {
          linear: function (t) {
            return t;
          },
          easeInQuad: function (t) {
            return t * t;
          },
          easeOutQuad: function (t) {
            return -t * (t - 2);
          },
          easeInOutQuad: function (t) {
            return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
          },
          easeInCubic: function (t) {
            return t * t * t;
          },
          easeOutCubic: function (t) {
            return (t -= 1) * t * t + 1;
          },
          easeInOutCubic: function (t) {
            return (t /= 0.5) < 1
              ? 0.5 * t * t * t
              : 0.5 * ((t -= 2) * t * t + 2);
          },
          easeInQuart: function (t) {
            return t * t * t * t;
          },
          easeOutQuart: function (t) {
            return -((t -= 1) * t * t * t - 1);
          },
          easeInOutQuart: function (t) {
            return (t /= 0.5) < 1
              ? 0.5 * t * t * t * t
              : -0.5 * ((t -= 2) * t * t * t - 2);
          },
          easeInQuint: function (t) {
            return t * t * t * t * t;
          },
          easeOutQuint: function (t) {
            return (t -= 1) * t * t * t * t + 1;
          },
          easeInOutQuint: function (t) {
            return (t /= 0.5) < 1
              ? 0.5 * t * t * t * t * t
              : 0.5 * ((t -= 2) * t * t * t * t + 2);
          },
          easeInSine: function (t) {
            return 1 - Math.cos(t * j);
          },
          easeOutSine: function (t) {
            return Math.sin(t * j);
          },
          easeInOutSine: function (t) {
            return -0.5 * (Math.cos(L * t) - 1);
          },
          easeInExpo: function (t) {
            return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
          },
          easeOutExpo: function (t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
          },
          easeInOutExpo: function (t) {
            return wt(t)
              ? t
              : t < 0.5
                ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1)));
          },
          easeInCirc: function (t) {
            return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
          },
          easeOutCirc: function (t) {
            return Math.sqrt(1 - (t -= 1) * t);
          },
          easeInOutCirc: function (t) {
            return (t /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - t * t) - 1)
              : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
          },
          easeInElastic: function (t) {
            return wt(t) ? t : Mt(t, 0.075, 0.3);
          },
          easeOutElastic: function (t) {
            return wt(t) ? t : St(t, 0.075, 0.3);
          },
          easeInOutElastic: function (t) {
            var e = 0.1125;
            return wt(t)
              ? t
              : t < 0.5
                ? 0.5 * Mt(2 * t, e, 0.45)
                : 0.5 + 0.5 * St(2 * t - 1, e, 0.45);
          },
          easeInBack: function (t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e);
          },
          easeOutBack: function (t) {
            var e = 1.70158;
            return (t -= 1) * t * ((e + 1) * t + e) + 1;
          },
          easeInOutBack: function (t) {
            var e = 1.70158;
            return (t /= 0.5) < 1
              ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
              : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
          },
          easeInBounce: function (t) {
            return 1 - Pt.easeOutBounce(1 - t);
          },
          easeOutBounce: function (t) {
            var e = 7.5625,
              i = 2.75;
            return t < 1 / i
              ? e * t * t
              : t < 2 / i
                ? e * (t -= 1.5 / i) * t + 0.75
                : t < 2.5 / i
                  ? e * (t -= 2.25 / i) * t + 0.9375
                  : e * (t -= 2.625 / i) * t + 0.984375;
          },
          easeInOutBounce: function (t) {
            return t < 0.5
              ? 0.5 * Pt.easeInBounce(2 * t)
              : 0.5 * Pt.easeOutBounce(2 * t - 1) + 0.5;
          },
        };
      function Ct(t) {
        return (t + 0.5) | 0;
      }
      var Ot = function (t, e, i) {
        return Math.max(Math.min(t, i), e);
      };
      function Dt(t) {
        return Ot(Ct(2.55 * t), 0, 255);
      }
      function At(t) {
        return Ot(Ct(255 * t), 0, 255);
      }
      function Tt(t) {
        return Ot(Ct(t / 2.55) / 100, 0, 1);
      }
      function Et(t) {
        return Ot(Ct(100 * t), 0, 100);
      }
      var Rt = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          a: 10,
          b: 11,
          c: 12,
          d: 13,
          e: 14,
          f: 15,
        },
        Lt = (0, o.Z)("0123456789ABCDEF"),
        It = function (t) {
          return Lt[15 & t];
        },
        Ft = function (t) {
          return Lt[(240 & t) >> 4] + Lt[15 & t];
        },
        zt = function (t) {
          return (240 & t) >> 4 === (15 & t);
        };
      function Vt(t) {
        var e = (function (t) {
          return zt(t.r) && zt(t.g) && zt(t.b) && zt(t.a);
        })(t)
          ? It
          : Ft;
        return t
          ? "#" +
              e(t.r) +
              e(t.g) +
              e(t.b) +
              (function (t, e) {
                return t < 255 ? e(t) : "";
              })(t.a, e)
          : void 0;
      }
      var jt =
        /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
      function Wt(t, e, i) {
        var n = e * Math.min(i, 1 - i),
          a = function (e) {
            var a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : (e + t / 30) % 12;
            return i - n * Math.max(Math.min(a - 3, 9 - a, 1), -1);
          };
        return [a(0), a(8), a(4)];
      }
      function Nt(t, e, i) {
        var n = function (n) {
          var a =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : (n + t / 60) % 6;
          return i - i * e * Math.max(Math.min(a, 4 - a, 1), 0);
        };
        return [n(5), n(3), n(1)];
      }
      function Bt(t, e, i) {
        var n,
          a = Wt(t, 1, 0.5);
        for (e + i > 1 && ((e *= n = 1 / (e + i)), (i *= n)), n = 0; n < 3; n++)
          ((a[n] *= 1 - e - i), (a[n] += e));
        return a;
      }
      function Ht(t) {
        var e,
          i,
          n,
          a = t.r / 255,
          r = t.g / 255,
          o = t.b / 255,
          s = Math.max(a, r, o),
          l = Math.min(a, r, o),
          u = (s + l) / 2;
        return (
          s !== l &&
            ((n = s - l),
            (i = u > 0.5 ? n / (2 - s - l) : n / (s + l)),
            (e = (function (t, e, i, n, a) {
              return t === a
                ? (e - i) / n + (e < i ? 6 : 0)
                : e === a
                  ? (i - t) / n + 2
                  : (t - e) / n + 4;
            })(a, r, o, n, s)),
            (e = 60 * e + 0.5)),
          [0 | e, i || 0, u]
        );
      }
      function Yt(t, e, i, n) {
        return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, n)).map(At);
      }
      function Zt(t, e, i) {
        return Yt(Wt, t, e, i);
      }
      function Xt(t) {
        return ((t % 360) + 360) % 360;
      }
      function Ut(t) {
        var e,
          i = jt.exec(t),
          n = 255;
        if (i) {
          i[5] !== e && (n = i[6] ? Dt(+i[5]) : At(+i[5]));
          var a = Xt(+i[2]),
            r = +i[3] / 100,
            o = +i[4] / 100;
          return {
            r: (e =
              "hwb" === i[1]
                ? (function (t, e, i) {
                    return Yt(Bt, t, e, i);
                  })(a, r, o)
                : "hsv" === i[1]
                  ? (function (t, e, i) {
                      return Yt(Nt, t, e, i);
                    })(a, r, o)
                  : Zt(a, r, o))[0],
            g: e[1],
            b: e[2],
            a: n,
          };
        }
      }
      var $t,
        Kt = {
          x: "dark",
          Z: "light",
          Y: "re",
          X: "blu",
          W: "gr",
          V: "medium",
          U: "slate",
          A: "ee",
          T: "ol",
          S: "or",
          B: "ra",
          C: "lateg",
          D: "ights",
          R: "in",
          Q: "turquois",
          E: "hi",
          P: "ro",
          O: "al",
          N: "le",
          M: "de",
          L: "yello",
          F: "en",
          K: "ch",
          G: "arks",
          H: "ea",
          I: "ightg",
          J: "wh",
        },
        Qt = {
          OiceXe: "f0f8ff",
          antiquewEte: "faebd7",
          aqua: "ffff",
          aquamarRe: "7fffd4",
          azuY: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "0",
          blanKedOmond: "ffebcd",
          Xe: "ff",
          XeviTet: "8a2be2",
          bPwn: "a52a2a",
          burlywood: "deb887",
          caMtXe: "5f9ea0",
          KartYuse: "7fff00",
          KocTate: "d2691e",
          cSO: "ff7f50",
          cSnflowerXe: "6495ed",
          cSnsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "ffff",
          xXe: "8b",
          xcyan: "8b8b",
          xgTMnPd: "b8860b",
          xWay: "a9a9a9",
          xgYF: "6400",
          xgYy: "a9a9a9",
          xkhaki: "bdb76b",
          xmagFta: "8b008b",
          xTivegYF: "556b2f",
          xSange: "ff8c00",
          xScEd: "9932cc",
          xYd: "8b0000",
          xsOmon: "e9967a",
          xsHgYF: "8fbc8f",
          xUXe: "483d8b",
          xUWay: "2f4f4f",
          xUgYy: "2f4f4f",
          xQe: "ced1",
          xviTet: "9400d3",
          dAppRk: "ff1493",
          dApskyXe: "bfff",
          dimWay: "696969",
          dimgYy: "696969",
          dodgerXe: "1e90ff",
          fiYbrick: "b22222",
          flSOwEte: "fffaf0",
          foYstWAn: "228b22",
          fuKsia: "ff00ff",
          gaRsbSo: "dcdcdc",
          ghostwEte: "f8f8ff",
          gTd: "ffd700",
          gTMnPd: "daa520",
          Way: "808080",
          gYF: "8000",
          gYFLw: "adff2f",
          gYy: "808080",
          honeyMw: "f0fff0",
          hotpRk: "ff69b4",
          RdianYd: "cd5c5c",
          Rdigo: "4b0082",
          ivSy: "fffff0",
          khaki: "f0e68c",
          lavFMr: "e6e6fa",
          lavFMrXsh: "fff0f5",
          lawngYF: "7cfc00",
          NmoncEffon: "fffacd",
          ZXe: "add8e6",
          ZcSO: "f08080",
          Zcyan: "e0ffff",
          ZgTMnPdLw: "fafad2",
          ZWay: "d3d3d3",
          ZgYF: "90ee90",
          ZgYy: "d3d3d3",
          ZpRk: "ffb6c1",
          ZsOmon: "ffa07a",
          ZsHgYF: "20b2aa",
          ZskyXe: "87cefa",
          ZUWay: "778899",
          ZUgYy: "778899",
          ZstAlXe: "b0c4de",
          ZLw: "ffffe0",
          lime: "ff00",
          limegYF: "32cd32",
          lRF: "faf0e6",
          magFta: "ff00ff",
          maPon: "800000",
          VaquamarRe: "66cdaa",
          VXe: "cd",
          VScEd: "ba55d3",
          VpurpN: "9370db",
          VsHgYF: "3cb371",
          VUXe: "7b68ee",
          VsprRggYF: "fa9a",
          VQe: "48d1cc",
          VviTetYd: "c71585",
          midnightXe: "191970",
          mRtcYam: "f5fffa",
          mistyPse: "ffe4e1",
          moccasR: "ffe4b5",
          navajowEte: "ffdead",
          navy: "80",
          Tdlace: "fdf5e6",
          Tive: "808000",
          TivedBb: "6b8e23",
          Sange: "ffa500",
          SangeYd: "ff4500",
          ScEd: "da70d6",
          pOegTMnPd: "eee8aa",
          pOegYF: "98fb98",
          pOeQe: "afeeee",
          pOeviTetYd: "db7093",
          papayawEp: "ffefd5",
          pHKpuff: "ffdab9",
          peru: "cd853f",
          pRk: "ffc0cb",
          plum: "dda0dd",
          powMrXe: "b0e0e6",
          purpN: "800080",
          YbeccapurpN: "663399",
          Yd: "ff0000",
          Psybrown: "bc8f8f",
          PyOXe: "4169e1",
          saddNbPwn: "8b4513",
          sOmon: "fa8072",
          sandybPwn: "f4a460",
          sHgYF: "2e8b57",
          sHshell: "fff5ee",
          siFna: "a0522d",
          silver: "c0c0c0",
          skyXe: "87ceeb",
          UXe: "6a5acd",
          UWay: "708090",
          UgYy: "708090",
          snow: "fffafa",
          sprRggYF: "ff7f",
          stAlXe: "4682b4",
          tan: "d2b48c",
          teO: "8080",
          tEstN: "d8bfd8",
          tomato: "ff6347",
          Qe: "40e0d0",
          viTet: "ee82ee",
          JHt: "f5deb3",
          wEte: "ffffff",
          wEtesmoke: "f5f5f5",
          Lw: "ffff00",
          LwgYF: "9acd32",
        };
      function qt(t) {
        $t ||
          (($t = (function () {
            var t,
              e,
              i,
              n,
              a,
              r = {},
              o = Object.keys(Qt),
              s = Object.keys(Kt);
            for (t = 0; t < o.length; t++) {
              for (n = a = o[t], e = 0; e < s.length; e++)
                ((i = s[e]), (a = a.replace(i, Kt[i])));
              ((i = parseInt(Qt[n], 16)),
                (r[a] = [(i >> 16) & 255, (i >> 8) & 255, 255 & i]));
            }
            return r;
          })()).transparent = [0, 0, 0, 0]);
        var e = $t[t.toLowerCase()];
        return (
          e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 }
        );
      }
      var Gt =
        /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
      var Jt = function (t) {
          return t <= 0.0031308
            ? 12.92 * t
            : 1.055 * Math.pow(t, 1 / 2.4) - 0.055;
        },
        te = function (t) {
          return t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
        };
      function ee(t, e, i) {
        if (t) {
          var n = Ht(t);
          ((n[e] = Math.max(0, Math.min(n[e] + n[e] * i, 0 === e ? 360 : 1))),
            (n = Zt(n)),
            (t.r = n[0]),
            (t.g = n[1]),
            (t.b = n[2]));
        }
      }
      function ie(t, e) {
        return t ? Object.assign(e || {}, t) : t;
      }
      function ne(t) {
        var e = { r: 0, g: 0, b: 0, a: 255 };
        return (
          Array.isArray(t)
            ? t.length >= 3 &&
              ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
              t.length > 3 && (e.a = At(t[3])))
            : ((e = ie(t, { r: 0, g: 0, b: 0, a: 1 })).a = At(e.a)),
          e
        );
      }
      function ae(t) {
        return "r" === t.charAt(0)
          ? (function (t) {
              var e,
                i,
                n,
                a = Gt.exec(t),
                r = 255;
              if (a) {
                if (a[7] !== e) {
                  var o = +a[7];
                  r = a[8] ? Dt(o) : Ot(255 * o, 0, 255);
                }
                return (
                  (e = +a[1]),
                  (i = +a[3]),
                  (n = +a[5]),
                  {
                    r: (e = 255 & (a[2] ? Dt(e) : Ot(e, 0, 255))),
                    g: (i = 255 & (a[4] ? Dt(i) : Ot(i, 0, 255))),
                    b: (n = 255 & (a[6] ? Dt(n) : Ot(n, 0, 255))),
                    a: r,
                  }
                );
              }
            })(t)
          : Ut(t);
      }
      var re = (function () {
        function t(e) {
          if (((0, a.default)(this, t), e instanceof t)) return e;
          var i,
            n = typeof e;
          ("object" === n
            ? (i = ne(e))
            : "string" === n &&
              (i =
                (function (t) {
                  var e,
                    i = t.length;
                  return (
                    "#" === t[0] &&
                      (4 === i || 5 === i
                        ? (e = {
                            r: 255 & (17 * Rt[t[1]]),
                            g: 255 & (17 * Rt[t[2]]),
                            b: 255 & (17 * Rt[t[3]]),
                            a: 5 === i ? 17 * Rt[t[4]] : 255,
                          })
                        : (7 !== i && 9 !== i) ||
                          (e = {
                            r: (Rt[t[1]] << 4) | Rt[t[2]],
                            g: (Rt[t[3]] << 4) | Rt[t[4]],
                            b: (Rt[t[5]] << 4) | Rt[t[6]],
                            a: 9 === i ? (Rt[t[7]] << 4) | Rt[t[8]] : 255,
                          })),
                    e
                  );
                })(e) ||
                qt(e) ||
                ae(e)),
            (this._rgb = i),
            (this._valid = !!i));
        }
        return (
          (0, r.default)(t, [
            {
              key: "valid",
              get: function () {
                return this._valid;
              },
            },
            {
              key: "rgb",
              get: function () {
                var t = ie(this._rgb);
                return (t && (t.a = Tt(t.a)), t);
              },
              set: function (t) {
                this._rgb = ne(t);
              },
            },
            {
              key: "rgbString",
              value: function () {
                return this._valid
                  ? (t = this._rgb) &&
                      (t.a < 255
                        ? "rgba("
                            .concat(t.r, ", ")
                            .concat(t.g, ", ")
                            .concat(t.b, ", ")
                            .concat(Tt(t.a), ")")
                        : "rgb("
                            .concat(t.r, ", ")
                            .concat(t.g, ", ")
                            .concat(t.b, ")"))
                  : void 0;
                var t;
              },
            },
            {
              key: "hexString",
              value: function () {
                return this._valid ? Vt(this._rgb) : void 0;
              },
            },
            {
              key: "hslString",
              value: function () {
                return this._valid
                  ? (function (t) {
                      if (t) {
                        var e = Ht(t),
                          i = e[0],
                          n = Et(e[1]),
                          a = Et(e[2]);
                        return t.a < 255
                          ? "hsla("
                              .concat(i, ", ")
                              .concat(n, "%, ")
                              .concat(a, "%, ")
                              .concat(Tt(t.a), ")")
                          : "hsl("
                              .concat(i, ", ")
                              .concat(n, "%, ")
                              .concat(a, "%)");
                      }
                    })(this._rgb)
                  : void 0;
              },
            },
            {
              key: "mix",
              value: function (t, e) {
                if (t) {
                  var i,
                    n = this.rgb,
                    a = t.rgb,
                    r = e === i ? 0.5 : e,
                    o = 2 * r - 1,
                    s = n.a - a.a,
                    l = ((o * s === -1 ? o : (o + s) / (1 + o * s)) + 1) / 2;
                  ((i = 1 - l),
                    (n.r = 255 & (l * n.r + i * a.r + 0.5)),
                    (n.g = 255 & (l * n.g + i * a.g + 0.5)),
                    (n.b = 255 & (l * n.b + i * a.b + 0.5)),
                    (n.a = r * n.a + (1 - r) * a.a),
                    (this.rgb = n));
                }
                return this;
              },
            },
            {
              key: "interpolate",
              value: function (t, e) {
                return (
                  t &&
                    (this._rgb = (function (t, e, i) {
                      var n = te(Tt(t.r)),
                        a = te(Tt(t.g)),
                        r = te(Tt(t.b));
                      return {
                        r: At(Jt(n + i * (te(Tt(e.r)) - n))),
                        g: At(Jt(a + i * (te(Tt(e.g)) - a))),
                        b: At(Jt(r + i * (te(Tt(e.b)) - r))),
                        a: t.a + i * (e.a - t.a),
                      };
                    })(this._rgb, t._rgb, e)),
                  this
                );
              },
            },
            {
              key: "clone",
              value: function () {
                return new t(this.rgb);
              },
            },
            {
              key: "alpha",
              value: function (t) {
                return ((this._rgb.a = At(t)), this);
              },
            },
            {
              key: "clearer",
              value: function (t) {
                return ((this._rgb.a *= 1 - t), this);
              },
            },
            {
              key: "greyscale",
              value: function () {
                var t = this._rgb,
                  e = Ct(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
                return ((t.r = t.g = t.b = e), this);
              },
            },
            {
              key: "opaquer",
              value: function (t) {
                return ((this._rgb.a *= 1 + t), this);
              },
            },
            {
              key: "negate",
              value: function () {
                var t = this._rgb;
                return (
                  (t.r = 255 - t.r),
                  (t.g = 255 - t.g),
                  (t.b = 255 - t.b),
                  this
                );
              },
            },
            {
              key: "lighten",
              value: function (t) {
                return (ee(this._rgb, 2, t), this);
              },
            },
            {
              key: "darken",
              value: function (t) {
                return (ee(this._rgb, 2, -t), this);
              },
            },
            {
              key: "saturate",
              value: function (t) {
                return (ee(this._rgb, 1, t), this);
              },
            },
            {
              key: "desaturate",
              value: function (t) {
                return (ee(this._rgb, 1, -t), this);
              },
            },
            {
              key: "rotate",
              value: function (t) {
                return (
                  (function (t, e) {
                    var i = Ht(t);
                    ((i[0] = Xt(i[0] + e)),
                      (i = Zt(i)),
                      (t.r = i[0]),
                      (t.g = i[1]),
                      (t.b = i[2]));
                  })(this._rgb, t),
                  this
                );
              },
            },
          ]),
          t
        );
      })();
      function oe(t) {
        return new re(t);
      }
      function se(t) {
        if (t && "object" === typeof t) {
          var e = t.toString();
          return (
            "[object CanvasPattern]" === e || "[object CanvasGradient]" === e
          );
        }
        return !1;
      }
      function le(t) {
        return se(t) ? t : oe(t);
      }
      function ue(t) {
        return se(t) ? t : oe(t).saturate(0.5).darken(0.1).hexString();
      }
      var he = Object.create(null),
        ce = Object.create(null);
      function fe(t, e) {
        if (!e) return t;
        for (var i = e.split("."), n = 0, a = i.length; n < a; ++n) {
          var r = i[n];
          t = t[r] || (t[r] = Object.create(null));
        }
        return t;
      }
      function de(t, e, i) {
        return "string" === typeof e ? M(fe(t, e), i) : M(fe(t, ""), e);
      }
      var ve = (function () {
          function t(e) {
            ((0, a.default)(this, t),
              (this.animation = void 0),
              (this.backgroundColor = "rgba(0,0,0,0.1)"),
              (this.borderColor = "rgba(0,0,0,0.1)"),
              (this.color = "#666"),
              (this.datasets = {}),
              (this.devicePixelRatio = function (t) {
                return t.chart.platform.getDevicePixelRatio();
              }),
              (this.elements = {}),
              (this.events = [
                "mousemove",
                "mouseout",
                "click",
                "touchstart",
                "touchmove",
              ]),
              (this.font = {
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                size: 12,
                style: "normal",
                lineHeight: 1.2,
                weight: null,
              }),
              (this.hover = {}),
              (this.hoverBackgroundColor = function (t, e) {
                return ue(e.backgroundColor);
              }),
              (this.hoverBorderColor = function (t, e) {
                return ue(e.borderColor);
              }),
              (this.hoverColor = function (t, e) {
                return ue(e.color);
              }),
              (this.indexAxis = "x"),
              (this.interaction = {
                mode: "nearest",
                intersect: !0,
                includeInvisible: !1,
              }),
              (this.maintainAspectRatio = !0),
              (this.onHover = null),
              (this.onClick = null),
              (this.parsing = !0),
              (this.plugins = {}),
              (this.responsive = !0),
              (this.scale = void 0),
              (this.scales = {}),
              (this.showLine = !0),
              (this.drawActiveElementsOnTop = !0),
              this.describe(e));
          }
          return (
            (0, r.default)(t, [
              {
                key: "set",
                value: function (t, e) {
                  return de(this, t, e);
                },
              },
              {
                key: "get",
                value: function (t) {
                  return fe(this, t);
                },
              },
              {
                key: "describe",
                value: function (t, e) {
                  return de(ce, t, e);
                },
              },
              {
                key: "override",
                value: function (t, e) {
                  return de(he, t, e);
                },
              },
              {
                key: "route",
                value: function (t, e, i, a) {
                  var r,
                    o = fe(this, t),
                    s = fe(this, i),
                    l = "_" + e;
                  Object.defineProperties(
                    o,
                    ((r = {}),
                    (0, n.Z)(r, l, { value: o[e], writable: !0 }),
                    (0, n.Z)(r, e, {
                      enumerable: !0,
                      get: function () {
                        var t = this[l],
                          e = s[a];
                        return f(t) ? Object.assign({}, e, t) : g(t, e);
                      },
                      set: function (t) {
                        this[l] = t;
                      },
                    }),
                    r),
                  );
                },
              },
            ]),
            t
          );
        })(),
        ge = new ve({
          _scriptable: function (t) {
            return !t.startsWith("on");
          },
          _indexable: function (t) {
            return "events" !== t;
          },
          hover: { _fallback: "interaction" },
          interaction: { _scriptable: !1, _indexable: !1 },
        });
      function pe(t, e, i, n, a) {
        var r = e[a];
        return (
          r || ((r = e[a] = t.measureText(a).width), i.push(a)),
          r > n && (n = r),
          n
        );
      }
      function ye(t, e, i, n) {
        var a = ((n = n || {}).data = n.data || {}),
          r = (n.garbageCollect = n.garbageCollect || []);
        (n.font !== e &&
          ((a = n.data = {}), (r = n.garbageCollect = []), (n.font = e)),
          t.save(),
          (t.font = e));
        var o,
          s,
          l,
          u,
          h,
          f = 0,
          d = i.length;
        for (o = 0; o < d; o++)
          if (void 0 !== (u = i[o]) && null !== u && !0 !== c(u))
            f = pe(t, a, r, f, u);
          else if (c(u))
            for (s = 0, l = u.length; s < l; s++)
              void 0 === (h = u[s]) ||
                null === h ||
                c(h) ||
                (f = pe(t, a, r, f, h));
        t.restore();
        var v = r.length / 2;
        if (v > i.length) {
          for (o = 0; o < v; o++) delete a[r[o]];
          r.splice(0, v);
        }
        return f;
      }
      function be(t, e, i) {
        var n = t.currentDevicePixelRatio,
          a = 0 !== i ? Math.max(i / 2, 0.5) : 0;
        return Math.round((e - a) * n) / n + a;
      }
      function me(t, e) {
        ((e = e || t.getContext("2d")).save(),
          e.resetTransform(),
          e.clearRect(0, 0, t.width, t.height),
          e.restore());
      }
      function xe(t, e, i, n) {
        ke(t, e, i, n, null);
      }
      function ke(t, e, i, n, a) {
        var r,
          o,
          s,
          l,
          u,
          h,
          c = e.pointStyle,
          f = e.rotation,
          d = e.radius,
          v = (f || 0) * V;
        if (
          c &&
          "object" === typeof c &&
          ("[object HTMLImageElement]" === (r = c.toString()) ||
            "[object HTMLCanvasElement]" === r)
        )
          return (
            t.save(),
            t.translate(i, n),
            t.rotate(v),
            t.drawImage(c, -c.width / 2, -c.height / 2, c.width, c.height),
            void t.restore()
          );
        if (!(isNaN(d) || d <= 0)) {
          switch ((t.beginPath(), c)) {
            default:
              (a ? t.ellipse(i, n, a / 2, d, 0, 0, I) : t.arc(i, n, d, 0, I),
                t.closePath());
              break;
            case "triangle":
              (t.moveTo(i + Math.sin(v) * d, n - Math.cos(v) * d),
                (v += N),
                t.lineTo(i + Math.sin(v) * d, n - Math.cos(v) * d),
                (v += N),
                t.lineTo(i + Math.sin(v) * d, n - Math.cos(v) * d),
                t.closePath());
              break;
            case "rectRounded":
              ((l = d - (u = 0.516 * d)),
                (o = Math.cos(v + W) * l),
                (s = Math.sin(v + W) * l),
                t.arc(i - o, n - s, u, v - L, v - j),
                t.arc(i + s, n - o, u, v - j, v),
                t.arc(i + o, n + s, u, v, v + j),
                t.arc(i - s, n + o, u, v + j, v + L),
                t.closePath());
              break;
            case "rect":
              if (!f) {
                ((l = Math.SQRT1_2 * d),
                  (h = a ? a / 2 : l),
                  t.rect(i - h, n - l, 2 * h, 2 * l));
                break;
              }
              v += W;
            case "rectRot":
              ((o = Math.cos(v) * d),
                (s = Math.sin(v) * d),
                t.moveTo(i - o, n - s),
                t.lineTo(i + s, n - o),
                t.lineTo(i + o, n + s),
                t.lineTo(i - s, n + o),
                t.closePath());
              break;
            case "crossRot":
              v += W;
            case "cross":
              ((o = Math.cos(v) * d),
                (s = Math.sin(v) * d),
                t.moveTo(i - o, n - s),
                t.lineTo(i + o, n + s),
                t.moveTo(i + s, n - o),
                t.lineTo(i - s, n + o));
              break;
            case "star":
              ((o = Math.cos(v) * d),
                (s = Math.sin(v) * d),
                t.moveTo(i - o, n - s),
                t.lineTo(i + o, n + s),
                t.moveTo(i + s, n - o),
                t.lineTo(i - s, n + o),
                (v += W),
                (o = Math.cos(v) * d),
                (s = Math.sin(v) * d),
                t.moveTo(i - o, n - s),
                t.lineTo(i + o, n + s),
                t.moveTo(i + s, n - o),
                t.lineTo(i - s, n + o));
              break;
            case "line":
              ((o = a ? a / 2 : Math.cos(v) * d),
                (s = Math.sin(v) * d),
                t.moveTo(i - o, n - s),
                t.lineTo(i + o, n + s));
              break;
            case "dash":
              (t.moveTo(i, n),
                t.lineTo(i + Math.cos(v) * d, n + Math.sin(v) * d));
          }
          (t.fill(), e.borderWidth > 0 && t.stroke());
        }
      }
      function _e(t, e, i) {
        return (
          (i = i || 0.5),
          !e ||
            (t &&
              t.x > e.left - i &&
              t.x < e.right + i &&
              t.y > e.top - i &&
              t.y < e.bottom + i)
        );
      }
      function we(t, e) {
        (t.save(),
          t.beginPath(),
          t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
          t.clip());
      }
      function Me(t) {
        t.restore();
      }
      function Se(t, e, i, n, a) {
        if (!e) return t.lineTo(i.x, i.y);
        if ("middle" === a) {
          var r = (e.x + i.x) / 2;
          (t.lineTo(r, e.y), t.lineTo(r, i.y));
        } else
          ("after" === a) !== !!n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
        t.lineTo(i.x, i.y);
      }
      function Pe(t, e, i, n) {
        if (!e) return t.lineTo(i.x, i.y);
        t.bezierCurveTo(
          n ? e.cp1x : e.cp2x,
          n ? e.cp1y : e.cp2y,
          n ? i.cp2x : i.cp1x,
          n ? i.cp2y : i.cp1y,
          i.x,
          i.y,
        );
      }
      function Ce(t, e, i, n, a) {
        var r,
          o,
          s =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
          l = c(e) ? e : [e],
          u = s.strokeWidth > 0 && "" !== s.strokeColor;
        for (
          t.save(),
            t.font = a.string,
            (function (t, e) {
              e.translation && t.translate(e.translation[0], e.translation[1]);
              h(e.rotation) || t.rotate(e.rotation);
              e.color && (t.fillStyle = e.color);
              e.textAlign && (t.textAlign = e.textAlign);
              e.textBaseline && (t.textBaseline = e.textBaseline);
            })(t, s),
            r = 0;
          r < l.length;
          ++r
        )
          ((o = l[r]),
            u &&
              (s.strokeColor && (t.strokeStyle = s.strokeColor),
              h(s.strokeWidth) || (t.lineWidth = s.strokeWidth),
              t.strokeText(o, i, n, s.maxWidth)),
            t.fillText(o, i, n, s.maxWidth),
            Oe(t, i, n, o, s),
            (n += a.lineHeight));
        t.restore();
      }
      function Oe(t, e, i, n, a) {
        if (a.strikethrough || a.underline) {
          var r = t.measureText(n),
            o = e - r.actualBoundingBoxLeft,
            s = e + r.actualBoundingBoxRight,
            l = i - r.actualBoundingBoxAscent,
            u = i + r.actualBoundingBoxDescent,
            h = a.strikethrough ? (l + u) / 2 : u;
          ((t.strokeStyle = t.fillStyle),
            t.beginPath(),
            (t.lineWidth = a.decorationWidth || 2),
            t.moveTo(o, h),
            t.lineTo(s, h),
            t.stroke());
        }
      }
      function De(t, e) {
        var i = e.x,
          n = e.y,
          a = e.w,
          r = e.h,
          o = e.radius;
        (t.arc(i + o.topLeft, n + o.topLeft, o.topLeft, -j, L, !0),
          t.lineTo(i, n + r - o.bottomLeft),
          t.arc(i + o.bottomLeft, n + r - o.bottomLeft, o.bottomLeft, L, j, !0),
          t.lineTo(i + a - o.bottomRight, n + r),
          t.arc(
            i + a - o.bottomRight,
            n + r - o.bottomRight,
            o.bottomRight,
            j,
            0,
            !0,
          ),
          t.lineTo(i + a, n + o.topRight),
          t.arc(i + a - o.topRight, n + o.topRight, o.topRight, 0, -j, !0),
          t.lineTo(i + o.topLeft, n));
      }
      var Ae = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
        Te = new RegExp(
          /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/,
        );
      function Ee(t, e) {
        var i = ("" + t).match(Ae);
        if (!i || "normal" === i[1]) return 1.2 * e;
        switch (((t = +i[2]), i[3])) {
          case "px":
            return t;
          case "%":
            t /= 100;
        }
        return e * t;
      }
      var Re = function (t) {
        return +t || 0;
      };
      function Le(t, e) {
        var i,
          n = {},
          a = f(e),
          r = a ? Object.keys(e) : e,
          o = f(t)
            ? a
              ? function (i) {
                  return g(t[i], t[e[i]]);
                }
              : function (e) {
                  return t[e];
                }
            : function () {
                return t;
              },
          l = (0, s.Z)(r);
        try {
          for (l.s(); !(i = l.n()).done;) {
            var u = i.value;
            n[u] = Re(o(u));
          }
        } catch (h) {
          l.e(h);
        } finally {
          l.f();
        }
        return n;
      }
      function Ie(t) {
        return Le(t, { top: "y", right: "x", bottom: "y", left: "x" });
      }
      function Fe(t) {
        return Le(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
      }
      function ze(t) {
        var e = Ie(t);
        return ((e.width = e.left + e.right), (e.height = e.top + e.bottom), e);
      }
      function Ve(t, e) {
        ((t = t || {}), (e = e || ge.font));
        var i = g(t.size, e.size);
        "string" === typeof i && (i = parseInt(i, 10));
        var n = g(t.style, e.style);
        n &&
          !("" + n).match(Te) &&
          (console.warn('Invalid font style specified: "' + n + '"'), (n = ""));
        var a = {
          family: g(t.family, e.family),
          lineHeight: Ee(g(t.lineHeight, e.lineHeight), i),
          size: i,
          style: n,
          weight: g(t.weight, e.weight),
          string: "",
        };
        return (
          (a.string = (function (t) {
            return !t || h(t.size) || h(t.family)
              ? null
              : (t.style ? t.style + " " : "") +
                  (t.weight ? t.weight + " " : "") +
                  t.size +
                  "px " +
                  t.family;
          })(a)),
          a
        );
      }
      function je(t, e, i, n) {
        var a,
          r,
          o,
          s = !0;
        for (a = 0, r = t.length; a < r; ++a)
          if (
            void 0 !== (o = t[a]) &&
            (void 0 !== e && "function" === typeof o && ((o = o(e)), (s = !1)),
            void 0 !== i && c(o) && ((o = o[i % o.length]), (s = !1)),
            void 0 !== o)
          )
            return (n && !s && (n.cacheable = !1), o);
      }
      function We(t, e, i) {
        var n = t.min,
          a = t.max,
          r = y(e, (a - n) / 2),
          o = function (t, e) {
            return i && 0 === t ? 0 : t + e;
          };
        return { min: o(n, -Math.abs(r)), max: o(a, r) };
      }
      function Ne(t, e) {
        return Object.assign(Object.create(t), e);
      }
      function Be(t) {
        var e,
          i =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : [""],
          a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
          r = arguments.length > 3 ? arguments[3] : void 0,
          l =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : function () {
                  return t[0];
                };
        A(r) || (r = Je("_fallback", t));
        var u =
          ((e = {}),
          (0, n.Z)(e, Symbol.toStringTag, "Object"),
          (0, n.Z)(e, "_cacheable", !0),
          (0, n.Z)(e, "_scopes", t),
          (0, n.Z)(e, "_rootScopes", a),
          (0, n.Z)(e, "_fallback", r),
          (0, n.Z)(e, "_getTarget", l),
          (0, n.Z)(e, "override", function (e) {
            return Be([e].concat((0, o.Z)(t)), i, a, r);
          }),
          e);
        return new Proxy(u, {
          deleteProperty: function (e, i) {
            return (delete e[i], delete e._keys, delete t[0][i], !0);
          },
          get: function (e, n) {
            return Ue(e, n, function () {
              return (function (t, e, i, n) {
                var a,
                  r,
                  o = (0, s.Z)(e);
                try {
                  for (o.s(); !(r = o.n()).done;) {
                    var l = r.value;
                    if (((a = Je(Ze(l, t), i)), A(a)))
                      return Xe(t, a) ? qe(i, n, t, a) : a;
                  }
                } catch (u) {
                  o.e(u);
                } finally {
                  o.f();
                }
              })(n, i, t, e);
            });
          },
          getOwnPropertyDescriptor: function (t, e) {
            return Reflect.getOwnPropertyDescriptor(t._scopes[0], e);
          },
          getPrototypeOf: function () {
            return Reflect.getPrototypeOf(t[0]);
          },
          has: function (t, e) {
            return ti(t).includes(e);
          },
          ownKeys: function (t) {
            return ti(t);
          },
          set: function (t, e, i) {
            var n = t._storage || (t._storage = l());
            return ((t[e] = n[e] = i), delete t._keys, !0);
          },
        });
      }
      function He(t, e, i, n) {
        var a = {
          _cacheable: !1,
          _proxy: t,
          _context: e,
          _subProxy: i,
          _stack: new Set(),
          _descriptors: Ye(t, n),
          setContext: function (e) {
            return He(t, e, i, n);
          },
          override: function (a) {
            return He(t.override(a), e, i, n);
          },
        };
        return new Proxy(a, {
          deleteProperty: function (e, i) {
            return (delete e[i], delete t[i], !0);
          },
          get: function (t, e, i) {
            return Ue(t, e, function () {
              return (function (t, e, i) {
                var n = t._proxy,
                  a = t._context,
                  r = t._subProxy,
                  o = t._descriptors,
                  l = n[e];
                T(l) &&
                  o.isScriptable(e) &&
                  (l = (function (t, e, i, n) {
                    var a = i._proxy,
                      r = i._context,
                      o = i._subProxy,
                      s = i._stack;
                    if (s.has(t))
                      throw new Error(
                        "Recursion detected: " +
                          Array.from(s).join("->") +
                          "->" +
                          t,
                      );
                    (s.add(t),
                      (e = e(r, o || n)),
                      s.delete(t),
                      Xe(t, e) && (e = qe(a._scopes, a, t, e)));
                    return e;
                  })(e, l, t, i));
                c(l) &&
                  l.length &&
                  (l = (function (t, e, i, n) {
                    var a = i._proxy,
                      r = i._context,
                      o = i._subProxy,
                      l = i._descriptors;
                    if (A(r.index) && n(t)) e = e[r.index % e.length];
                    else if (f(e[0])) {
                      var u = e,
                        h = a._scopes.filter(function (t) {
                          return t !== u;
                        });
                      e = [];
                      var c,
                        d = (0, s.Z)(u);
                      try {
                        for (d.s(); !(c = d.n()).done;) {
                          var v = qe(h, a, t, c.value);
                          e.push(He(v, r, o && o[t], l));
                        }
                      } catch (g) {
                        d.e(g);
                      } finally {
                        d.f();
                      }
                    }
                    return e;
                  })(e, l, t, o.isIndexable));
                Xe(e, l) && (l = He(l, a, r && r[e], o));
                return l;
              })(t, e, i);
            });
          },
          getOwnPropertyDescriptor: function (e, i) {
            return e._descriptors.allKeys
              ? Reflect.has(t, i)
                ? { enumerable: !0, configurable: !0 }
                : void 0
              : Reflect.getOwnPropertyDescriptor(t, i);
          },
          getPrototypeOf: function () {
            return Reflect.getPrototypeOf(t);
          },
          has: function (e, i) {
            return Reflect.has(t, i);
          },
          ownKeys: function () {
            return Reflect.ownKeys(t);
          },
          set: function (e, i, n) {
            return ((t[i] = n), delete e[i], !0);
          },
        });
      }
      function Ye(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { scriptable: !0, indexable: !0 },
          i = t._scriptable,
          n = void 0 === i ? e.scriptable : i,
          a = t._indexable,
          r = void 0 === a ? e.indexable : a,
          o = t._allKeys;
        return {
          allKeys: void 0 === o ? e.allKeys : o,
          scriptable: n,
          indexable: r,
          isScriptable: T(n)
            ? n
            : function () {
                return n;
              },
          isIndexable: T(r)
            ? r
            : function () {
                return r;
              },
        };
      }
      var Ze = function (t, e) {
          return t ? t + D(e) : e;
        },
        Xe = function (t, e) {
          return (
            f(e) &&
            "adapters" !== t &&
            (null === Object.getPrototypeOf(e) || e.constructor === Object)
          );
        };
      function Ue(t, e, i) {
        if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
        var n = i();
        return ((t[e] = n), n);
      }
      function $e(t, e, i) {
        return T(t) ? t(e, i) : t;
      }
      var Ke = function (t, e) {
        return !0 === t ? e : "string" === typeof t ? O(e, t) : void 0;
      };
      function Qe(t, e, i, n, a) {
        var r,
          o = (0, s.Z)(e);
        try {
          for (o.s(); !(r = o.n()).done;) {
            var l = r.value,
              u = Ke(i, l);
            if (u) {
              t.add(u);
              var h = $e(u._fallback, i, a);
              if (A(h) && h !== i && h !== n) return h;
            } else if (!1 === u && A(n) && i !== n) return null;
          }
        } catch (c) {
          o.e(c);
        } finally {
          o.f();
        }
        return !1;
      }
      function qe(t, e, i, n) {
        var a = e._rootScopes,
          r = $e(e._fallback, i, n),
          s = [].concat((0, o.Z)(t), (0, o.Z)(a)),
          l = new Set();
        l.add(n);
        var u = Ge(l, s, i, r || i, n);
        return (
          null !== u &&
          (!A(r) || r === i || null !== (u = Ge(l, s, r, u, n))) &&
          Be(Array.from(l), [""], a, r, function () {
            return (function (t, e, i) {
              var n = t._getTarget();
              e in n || (n[e] = {});
              var a = n[e];
              if (c(a) && f(i)) return i;
              return a;
            })(e, i, n);
          })
        );
      }
      function Ge(t, e, i, n, a) {
        for (; i;) i = Qe(t, e, i, n, a);
        return i;
      }
      function Je(t, e) {
        var i,
          n = (0, s.Z)(e);
        try {
          for (n.s(); !(i = n.n()).done;) {
            var a = i.value;
            if (a) {
              var r = a[t];
              if (A(r)) return r;
            }
          }
        } catch (o) {
          n.e(o);
        } finally {
          n.f();
        }
      }
      function ti(t) {
        var e = t._keys;
        return (
          e ||
            (e = t._keys =
              (function (t) {
                var e,
                  i = new Set(),
                  n = (0, s.Z)(t);
                try {
                  for (n.s(); !(e = n.n()).done;) {
                    var a,
                      r = e.value,
                      o = (0, s.Z)(
                        Object.keys(r).filter(function (t) {
                          return !t.startsWith("_");
                        }),
                      );
                    try {
                      for (o.s(); !(a = o.n()).done;) {
                        var l = a.value;
                        i.add(l);
                      }
                    } catch (u) {
                      o.e(u);
                    } finally {
                      o.f();
                    }
                  }
                } catch (u) {
                  n.e(u);
                } finally {
                  n.f();
                }
                return Array.from(i);
              })(t._scopes)),
          e
        );
      }
      function ei(t, e, i, n) {
        var a,
          r,
          o,
          s,
          l = t.iScale,
          u = this._parsing.key,
          h = void 0 === u ? "r" : u,
          c = new Array(n);
        for (a = 0, r = n; a < r; ++a)
          ((s = e[(o = a + i)]), (c[a] = { r: l.parse(O(s, h), o) }));
        return c;
      }
      var ii = Number.EPSILON || 1e-14,
        ni = function (t, e) {
          return e < t.length && !t[e].skip && t[e];
        },
        ai = function (t) {
          return "x" === t ? "y" : "x";
        };
      function ri(t, e, i, n) {
        var a = t.skip ? e : t,
          r = e,
          o = i.skip ? e : i,
          s = tt(r, a),
          l = tt(o, r),
          u = s / (s + l),
          h = l / (s + l),
          c = n * (u = isNaN(u) ? 0 : u),
          f = n * (h = isNaN(h) ? 0 : h);
        return {
          previous: { x: r.x - c * (o.x - a.x), y: r.y - c * (o.y - a.y) },
          next: { x: r.x + f * (o.x - a.x), y: r.y + f * (o.y - a.y) },
        };
      }
      function oi(t) {
        var e,
          i,
          n,
          a =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "x",
          r = ai(a),
          o = t.length,
          s = Array(o).fill(0),
          l = Array(o),
          u = ni(t, 0);
        for (e = 0; e < o; ++e)
          if (((i = n), (n = u), (u = ni(t, e + 1)), n)) {
            if (u) {
              var h = u[a] - n[a];
              s[e] = 0 !== h ? (u[r] - n[r]) / h : 0;
            }
            l[e] = i
              ? u
                ? H(s[e - 1]) !== H(s[e])
                  ? 0
                  : (s[e - 1] + s[e]) / 2
                : s[e - 1]
              : s[e];
          }
        (!(function (t, e, i) {
          for (
            var n, a, r, o, s, l = t.length, u = ni(t, 0), h = 0;
            h < l - 1;
            ++h
          )
            ((s = u),
              (u = ni(t, h + 1)),
              s &&
                u &&
                (U(e[h], 0, ii)
                  ? (i[h] = i[h + 1] = 0)
                  : ((n = i[h] / e[h]),
                    (a = i[h + 1] / e[h]),
                    (o = Math.pow(n, 2) + Math.pow(a, 2)) <= 9 ||
                      ((r = 3 / Math.sqrt(o)),
                      (i[h] = n * r * e[h]),
                      (i[h + 1] = a * r * e[h])))));
        })(t, s, l),
          (function (t, e) {
            for (
              var i,
                n,
                a,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "x",
                o = ai(r),
                s = t.length,
                l = ni(t, 0),
                u = 0;
              u < s;
              ++u
            )
              if (((n = a), (a = l), (l = ni(t, u + 1)), a)) {
                var h = a[r],
                  c = a[o];
                (n &&
                  ((i = (h - n[r]) / 3),
                  (a["cp1".concat(r)] = h - i),
                  (a["cp1".concat(o)] = c - i * e[u])),
                  l &&
                    ((i = (l[r] - h) / 3),
                    (a["cp2".concat(r)] = h + i),
                    (a["cp2".concat(o)] = c + i * e[u])));
              }
          })(t, l, a));
      }
      function si(t, e, i) {
        return Math.max(Math.min(t, i), e);
      }
      function li(t, e, i, n, a) {
        var r, o, s, l;
        if (
          (e.spanGaps &&
            (t = t.filter(function (t) {
              return !t.skip;
            })),
          "monotone" === e.cubicInterpolationMode)
        )
          oi(t, a);
        else {
          var u = n ? t[t.length - 1] : t[0];
          for (r = 0, o = t.length; r < o; ++r)
            ((l = ri(
              u,
              (s = t[r]),
              t[Math.min(r + 1, o - (n ? 0 : 1)) % o],
              e.tension,
            )),
              (s.cp1x = l.previous.x),
              (s.cp1y = l.previous.y),
              (s.cp2x = l.next.x),
              (s.cp2y = l.next.y),
              (u = s));
        }
        e.capBezierPoints &&
          (function (t, e) {
            var i,
              n,
              a,
              r,
              o,
              s = _e(t[0], e);
            for (i = 0, n = t.length; i < n; ++i)
              ((o = r),
                (r = s),
                (s = i < n - 1 && _e(t[i + 1], e)),
                r &&
                  ((a = t[i]),
                  o &&
                    ((a.cp1x = si(a.cp1x, e.left, e.right)),
                    (a.cp1y = si(a.cp1y, e.top, e.bottom))),
                  s &&
                    ((a.cp2x = si(a.cp2x, e.left, e.right)),
                    (a.cp2y = si(a.cp2y, e.top, e.bottom)))));
          })(t, i);
      }
      function ui() {
        return "undefined" !== typeof window && "undefined" !== typeof document;
      }
      function hi(t) {
        var e = t.parentNode;
        return (e && "[object ShadowRoot]" === e.toString() && (e = e.host), e);
      }
      function ci(t, e, i) {
        var n;
        return (
          "string" === typeof t
            ? ((n = parseInt(t, 10)),
              -1 !== t.indexOf("%") && (n = (n / 100) * e.parentNode[i]))
            : (n = t),
          n
        );
      }
      var fi = function (t) {
        return window.getComputedStyle(t, null);
      };
      var di = ["top", "right", "bottom", "left"];
      function vi(t, e, i) {
        var n = {};
        i = i ? "-" + i : "";
        for (var a = 0; a < 4; a++) {
          var r = di[a];
          n[r] = parseFloat(t[e + "-" + r + i]) || 0;
        }
        return ((n.width = n.left + n.right), (n.height = n.top + n.bottom), n);
      }
      var gi = function (t, e, i) {
        return (t > 0 || e > 0) && (!i || !i.shadowRoot);
      };
      function pi(t, e) {
        if ("native" in t) return t;
        var i = e.canvas,
          n = e.currentDevicePixelRatio,
          a = fi(i),
          r = "border-box" === a.boxSizing,
          o = vi(a, "padding"),
          s = vi(a, "border", "width"),
          l = (function (t, e) {
            var i,
              n,
              a = t.touches,
              r = a && a.length ? a[0] : t,
              o = r.offsetX,
              s = r.offsetY,
              l = !1;
            if (gi(o, s, t.target)) ((i = o), (n = s));
            else {
              var u = e.getBoundingClientRect();
              ((i = r.clientX - u.left), (n = r.clientY - u.top), (l = !0));
            }
            return { x: i, y: n, box: l };
          })(t, i),
          u = l.x,
          h = l.y,
          c = l.box,
          f = o.left + (c && s.left),
          d = o.top + (c && s.top),
          v = e.width,
          g = e.height;
        return (
          r && ((v -= o.width + s.width), (g -= o.height + s.height)),
          {
            x: Math.round((((u - f) / v) * i.width) / n),
            y: Math.round((((h - d) / g) * i.height) / n),
          }
        );
      }
      var yi = function (t) {
        return Math.round(10 * t) / 10;
      };
      function bi(t, e, i, n) {
        var a = fi(t),
          r = vi(a, "margin"),
          o = ci(a.maxWidth, t, "clientWidth") || z,
          s = ci(a.maxHeight, t, "clientHeight") || z,
          l = (function (t, e, i) {
            var n, a;
            if (void 0 === e || void 0 === i) {
              var r = hi(t);
              if (r) {
                var o = r.getBoundingClientRect(),
                  s = fi(r),
                  l = vi(s, "border", "width"),
                  u = vi(s, "padding");
                ((e = o.width - u.width - l.width),
                  (i = o.height - u.height - l.height),
                  (n = ci(s.maxWidth, r, "clientWidth")),
                  (a = ci(s.maxHeight, r, "clientHeight")));
              } else ((e = t.clientWidth), (i = t.clientHeight));
            }
            return { width: e, height: i, maxWidth: n || z, maxHeight: a || z };
          })(t, e, i),
          u = l.width,
          h = l.height;
        if ("content-box" === a.boxSizing) {
          var c = vi(a, "border", "width"),
            f = vi(a, "padding");
          ((u -= f.width + c.width), (h -= f.height + c.height));
        }
        return (
          (u = Math.max(0, u - r.width)),
          (h = Math.max(0, n ? Math.floor(u / n) : h - r.height)),
          (u = yi(Math.min(u, o, l.maxWidth))),
          (h = yi(Math.min(h, s, l.maxHeight))),
          u && !h && (h = yi(u / 2)),
          { width: u, height: h }
        );
      }
      function mi(t, e, i) {
        var n = e || 1,
          a = Math.floor(t.height * n),
          r = Math.floor(t.width * n);
        ((t.height = a / n), (t.width = r / n));
        var o = t.canvas;
        return (
          o.style &&
            (i || (!o.style.height && !o.style.width)) &&
            ((o.style.height = "".concat(t.height, "px")),
            (o.style.width = "".concat(t.width, "px"))),
          (t.currentDevicePixelRatio !== n ||
            o.height !== a ||
            o.width !== r) &&
            ((t.currentDevicePixelRatio = n),
            (o.height = a),
            (o.width = r),
            t.ctx.setTransform(n, 0, 0, n, 0, 0),
            !0)
        );
      }
      var xi = (function () {
        var t = !1;
        try {
          var e = {
            get passive() {
              return ((t = !0), !1);
            },
          };
          (window.addEventListener("test", null, e),
            window.removeEventListener("test", null, e));
        } catch (i) {}
        return t;
      })();
      function ki(t, e) {
        var i = (function (t, e) {
            return fi(t).getPropertyValue(e);
          })(t, e),
          n = i && i.match(/^(\d+)(\.\d+)?px$/);
        return n ? +n[1] : void 0;
      }
      function _i(t, e, i, n) {
        return { x: t.x + i * (e.x - t.x), y: t.y + i * (e.y - t.y) };
      }
      function wi(t, e, i, n) {
        return {
          x: t.x + i * (e.x - t.x),
          y:
            "middle" === n
              ? i < 0.5
                ? t.y
                : e.y
              : "after" === n
                ? i < 1
                  ? t.y
                  : e.y
                : i > 0
                  ? e.y
                  : t.y,
        };
      }
      function Mi(t, e, i, n) {
        var a = { x: t.cp2x, y: t.cp2y },
          r = { x: e.cp1x, y: e.cp1y },
          o = _i(t, a, i),
          s = _i(a, r, i),
          l = _i(r, e, i),
          u = _i(o, s, i),
          h = _i(s, l, i);
        return _i(u, h, i);
      }
      var Si = new Map();
      function Pi(t, e, i) {
        return (function (t, e) {
          e = e || {};
          var i = t + JSON.stringify(e),
            n = Si.get(i);
          return (n || ((n = new Intl.NumberFormat(t, e)), Si.set(i, n)), n);
        })(e, i).format(t);
      }
      var Ci = function (t, e) {
          return {
            x: function (i) {
              return t + t + e - i;
            },
            setWidth: function (t) {
              e = t;
            },
            textAlign: function (t) {
              return "center" === t ? t : "right" === t ? "left" : "right";
            },
            xPlus: function (t, e) {
              return t - e;
            },
            leftForLtr: function (t, e) {
              return t - e;
            },
          };
        },
        Oi = function () {
          return {
            x: function (t) {
              return t;
            },
            setWidth: function (t) {},
            textAlign: function (t) {
              return t;
            },
            xPlus: function (t, e) {
              return t + e;
            },
            leftForLtr: function (t, e) {
              return t;
            },
          };
        };
      function Di(t, e, i) {
        return t ? Ci(e, i) : Oi();
      }
      function Ai(t, e) {
        var i, n;
        ("ltr" !== e && "rtl" !== e) ||
          ((n = [
            (i = t.canvas.style).getPropertyValue("direction"),
            i.getPropertyPriority("direction"),
          ]),
          i.setProperty("direction", e, "important"),
          (t.prevTextDirection = n));
      }
      function Ti(t, e) {
        void 0 !== e &&
          (delete t.prevTextDirection,
          t.canvas.style.setProperty("direction", e[0], e[1]));
      }
      function Ei(t) {
        return "angle" === t
          ? { between: nt, compare: et, normalize: it }
          : {
              between: ot,
              compare: function (t, e) {
                return t - e;
              },
              normalize: function (t) {
                return t;
              },
            };
      }
      function Ri(t) {
        var e = t.start,
          i = t.end,
          n = t.count;
        return {
          start: e % n,
          end: i % n,
          loop: t.loop && (i - e + 1) % n === 0,
          style: t.style,
        };
      }
      function Li(t, e, i) {
        if (!i) return [t];
        for (
          var n,
            a,
            r,
            o = i.property,
            s = i.start,
            l = i.end,
            u = e.length,
            h = Ei(o),
            c = h.compare,
            f = h.between,
            d = h.normalize,
            v = (function (t, e, i) {
              var n,
                a,
                r = i.property,
                o = i.start,
                s = i.end,
                l = Ei(r),
                u = l.between,
                h = l.normalize,
                c = e.length,
                f = t.start,
                d = t.end,
                v = t.loop;
              if (v) {
                for (
                  f += c, d += c, n = 0, a = c;
                  n < a && u(h(e[f % c][r]), o, s);
                  ++n
                )
                  (f--, d--);
                ((f %= c), (d %= c));
              }
              return (
                d < f && (d += c),
                { start: f, end: d, loop: v, style: t.style }
              );
            })(t, e, i),
            g = v.start,
            p = v.end,
            y = v.loop,
            b = v.style,
            m = [],
            x = !1,
            k = null,
            _ = function () {
              return x || (f(s, r, n) && 0 !== c(s, r));
            },
            w = function () {
              return !x || 0 === c(l, n) || f(l, r, n);
            },
            M = g,
            S = g;
          M <= p;
          ++M
        )
          (a = e[M % u]).skip ||
            ((n = d(a[o])) !== r &&
              ((x = f(n, s, l)),
              null === k && _() && (k = 0 === c(n, s) ? M : S),
              null !== k &&
                w() &&
                (m.push(Ri({ start: k, end: M, loop: y, count: u, style: b })),
                (k = null)),
              (S = M),
              (r = n)));
        return (
          null !== k &&
            m.push(Ri({ start: k, end: p, loop: y, count: u, style: b })),
          m
        );
      }
      function Ii(t, e) {
        for (var i = [], n = t.segments, a = 0; a < n.length; a++) {
          var r = Li(n[a], t.points, e);
          r.length && i.push.apply(i, (0, o.Z)(r));
        }
        return i;
      }
      function Fi(t, e) {
        var i = t.points,
          n = t.options.spanGaps,
          a = i.length;
        if (!a) return [];
        var r = !!t._loop,
          o = (function (t, e, i, n) {
            var a = 0,
              r = e - 1;
            if (i && !n) for (; a < e && !t[a].skip;) a++;
            for (; a < e && t[a].skip;) a++;
            for (a %= e, i && (r += a); r > a && t[r % e].skip;) r--;
            return { start: a, end: (r %= e) };
          })(i, a, r, n),
          s = o.start,
          l = o.end;
        return zi(
          t,
          !0 === n
            ? [{ start: s, end: l, loop: r }]
            : (function (t, e, i, n) {
                var a,
                  r = t.length,
                  o = [],
                  s = e,
                  l = t[e];
                for (a = e + 1; a <= i; ++a) {
                  var u = t[a % r];
                  (u.skip || u.stop
                    ? l.skip ||
                      ((n = !1),
                      o.push({ start: e % r, end: (a - 1) % r, loop: n }),
                      (e = s = u.stop ? a : null))
                    : ((s = a), l.skip && (e = a)),
                    (l = u));
                }
                return (
                  null !== s && o.push({ start: e % r, end: s % r, loop: n }),
                  o
                );
              })(
                i,
                s,
                l < s ? l + a : l,
                !!t._fullLoop && 0 === s && l === a - 1,
              ),
          i,
          e,
        );
      }
      function zi(t, e, i, n) {
        return n && n.setContext && i
          ? (function (t, e, i, n) {
              var a = t._chart.getContext(),
                r = Vi(t.options),
                o = t._datasetIndex,
                l = t.options.spanGaps,
                u = i.length,
                h = [],
                c = r,
                f = e[0].start,
                d = f;
              function v(t, e, n, a) {
                var r = l ? -1 : 1;
                if (t !== e) {
                  for (t += u; i[t % u].skip;) t -= r;
                  for (; i[e % u].skip;) e += r;
                  t % u !== e % u &&
                    (h.push({ start: t % u, end: e % u, loop: n, style: a }),
                    (c = a),
                    (f = e % u));
                }
              }
              var g,
                p = (0, s.Z)(e);
              try {
                for (p.s(); !(g = p.n()).done;) {
                  var y = g.value;
                  f = l ? f : y.start;
                  var b = i[f % u],
                    m = void 0;
                  for (d = f + 1; d <= y.end; d++) {
                    var x = i[d % u];
                    (ji(
                      (m = Vi(
                        n.setContext(
                          Ne(a, {
                            type: "segment",
                            p0: b,
                            p1: x,
                            p0DataIndex: (d - 1) % u,
                            p1DataIndex: d % u,
                            datasetIndex: o,
                          }),
                        ),
                      )),
                      c,
                    ) && v(f, d - 1, y.loop, c),
                      (b = x),
                      (c = m));
                  }
                  f < d - 1 && v(f, d - 1, y.loop, c);
                }
              } catch (k) {
                p.e(k);
              } finally {
                p.f();
              }
              return h;
            })(t, e, i, n)
          : e;
      }
      function Vi(t) {
        return {
          backgroundColor: t.backgroundColor,
          borderCapStyle: t.borderCapStyle,
          borderDash: t.borderDash,
          borderDashOffset: t.borderDashOffset,
          borderJoinStyle: t.borderJoinStyle,
          borderWidth: t.borderWidth,
          borderColor: t.borderColor,
        };
      }
      function ji(t, e) {
        return e && JSON.stringify(t) !== JSON.stringify(e);
      }
    },
  },
]);
//# sourceMappingURL=2406.60bee450.chunk.js.map
