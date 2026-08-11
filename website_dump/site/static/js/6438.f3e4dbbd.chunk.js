"use strict";
(self.webpackChunkx_device_frontend =
  self.webpackChunkx_device_frontend || []).push([
  [6438],
  {
    36438: function (n, i, a) {
      (a.r(i),
        a.d(i, {
          WelcomeUnitConnected: function () {
            return U;
          },
          default: function () {
            return N;
          },
        }));
      var t,
        e,
        r,
        o,
        s,
        x,
        l,
        c,
        p,
        k,
        m = a(56824),
        d = a(30225),
        h = a(94404),
        f = a(14482),
        u = a(5189),
        y = a(76431),
        D = a(87121),
        S = a(2845),
        E = a(84628),
        g = a(83749),
        w = a(90012),
        b = a(49745),
        v = a(13795),
        A = a(49318),
        B = a(98278),
        _ = a.n(B),
        j = "".concat(v.CT, "/config/state"),
        V = (0, E.Jg)({
          path: function () {
            return ["scenes", "WelcomeUnitConnected"];
          },
          connect: {
            props: [A.Z, ["translations", "isMobile", "configs", "ownerInfo"]],
            actions: [
              A.Z,
              ["checkSetupStatus", "fetchCurrentDeviceInfo", "replace"],
            ],
          },
          actions: function () {
            return {
              disconnectFromCloud: function () {
                return !0;
              },
              response: function () {
                return !0;
              },
              error: function (n) {
                return { error: n };
              },
            };
          },
          reducers: function (n) {
            var i,
              a = n.actions;
            return {
              loading: [
                !1,
                _().bool,
                ((i = {}),
                (0, S.Z)(i, a.disconnectFromCloud, function () {
                  return !0;
                }),
                (0, S.Z)(i, a.response, function () {
                  return !1;
                }),
                (0, S.Z)(i, a.error, function () {
                  return !1;
                }),
                i),
              ],
            };
          },
          start: (0, D.Z)().mark(function n() {
            var i;
            return (0, D.Z)().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (i = this.actionCreators.checkSetupStatus),
                        (0, w.log)(
                          "[XS-WelcomeUnitConnected] Start Scene ",
                          "yellow",
                        ),
                        (n.next = 4),
                        (0, g.gz)(i())
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
          takeLatest: function (n) {
            var i = n.actions,
              a = n.workers;
            return (0, S.Z)({}, i.disconnectFromCloud, a.disconnectFromCloud);
          },
          workers: {
            disconnectFromCloud: (0, D.Z)().mark(function n() {
              var i, a, t, e, r, o, s, x, l, c, p, k;
              return (0, D.Z)().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (i = this.actionCreators),
                          (a = i.response),
                          (t = i.error),
                          (e = i.fetchCurrentDeviceInfo),
                          (r = i.replace),
                          (n.next = 3),
                          this.get("configs")
                        );
                      case 3:
                        return (
                          (o = n.sent),
                          (n.prev = 4),
                          (s = { connected: !1 }),
                          (n.next = 8),
                          (0, g.RE)(b.Z.patch, j, s)
                        );
                      case 8:
                        return ((x = n.sent), (n.next = 11), (0, g.gz)(a(x)));
                      case 11:
                        if (
                          ((l = x.data),
                          (c = l.connected),
                          (p = l.setupComplete),
                          (k = l.onboardState),
                          p || o.userType !== v.Df)
                        ) {
                          n.next = 17;
                          break;
                        }
                        return ((n.next = 15), (0, g.gz)(r("/welcome")));
                      case 15:
                      case 20:
                      case 27:
                      case 32:
                      case 37:
                      case 42:
                        n.next = 47;
                        break;
                      case 17:
                        if (p || o.userType !== v.cC) {
                          n.next = 22;
                          break;
                        }
                        return ((n.next = 20), (0, g.gz)(r("/setup/")));
                      case 22:
                        if (c) {
                          n.next = 29;
                          break;
                        }
                        return ((n.next = 25), (0, g.gz)(e()));
                      case 25:
                        return ((n.next = 27), (0, g.gz)(r("/")));
                      case 29:
                        if ("not_onboarded" !== k) {
                          n.next = 34;
                          break;
                        }
                        return (
                          (n.next = 32),
                          (0, g.gz)(r("/setup/welcomeafterinstallation"))
                        );
                      case 34:
                        if ("onboarded" !== k) {
                          n.next = 39;
                          break;
                        }
                        return (
                          (n.next = 37),
                          (0, g.gz)(r("/setup/unit-connected"))
                        );
                      case 39:
                        if ("onboarding" !== k) {
                          n.next = 44;
                          break;
                        }
                        return (
                          (n.next = 42),
                          (0, g.gz)(r("/setup/email-validation"))
                        );
                      case 44:
                        if ("unknown" !== k) {
                          n.next = 47;
                          break;
                        }
                        return (
                          (n.next = 47),
                          (0, g.gz)(r("/setup/welcomeafterinstallation"))
                        );
                      case 47:
                        n.next = 54;
                        break;
                      case 49:
                        return (
                          (n.prev = 49),
                          (n.t0 = n.catch(4)),
                          console.log(n.t0),
                          (n.next = 54),
                          (0, g.gz)(t([]))
                        );
                      case 54:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this,
                [[4, 49]],
              );
            }),
          },
        }),
        C = a(30588),
        G = a(48229),
        O = a(32763),
        Z = a(51869),
        P = JSON.parse(
          '{"v":"5.1.16","fr":25,"ip":0,"op":75,"w":240,"h":240,"nm":"Dashboard - No Units","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"circle 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[360]},{"t":75}],"ix":10,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'cycle\', 0);"},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[61,-35,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":25,"nm":"Drop Shadow","np":8,"mn":"ADBE Drop Shadow","ix":1,"en":1,"ef":[{"ty":2,"nm":"Shadow Color","mn":"ADBE Drop Shadow-0001","ix":1,"v":{"a":0,"k":[0.258823990822,0.305882006884,0.329412013292,0.20000000298],"ix":1}},{"ty":0,"nm":"Opacity","mn":"ADBE Drop Shadow-0002","ix":2,"v":{"a":0,"k":51,"ix":2}},{"ty":0,"nm":"Direction","mn":"ADBE Drop Shadow-0003","ix":3,"v":{"a":0,"k":180,"ix":3}},{"ty":0,"nm":"Distance","mn":"ADBE Drop Shadow-0004","ix":4,"v":{"a":0,"k":1.28,"ix":4}},{"ty":0,"nm":"Softness","mn":"ADBE Drop Shadow-0005","ix":5,"v":{"a":0,"k":2.56,"ix":5}},{"ty":7,"nm":"Shadow Only","mn":"ADBE Drop Shadow-0006","ix":6,"v":{"a":0,"k":0,"ix":6}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[10,10],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.482353001833,0.756862998009,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"circle","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"circle 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[360]},{"t":75}],"ix":10,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'cycle\', 0);"},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[-50,50,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":25,"nm":"Drop Shadow","np":8,"mn":"ADBE Drop Shadow","ix":1,"en":1,"ef":[{"ty":2,"nm":"Shadow Color","mn":"ADBE Drop Shadow-0001","ix":1,"v":{"a":0,"k":[0.258823990822,0.305882006884,0.329412013292,0.20000000298],"ix":1}},{"ty":0,"nm":"Opacity","mn":"ADBE Drop Shadow-0002","ix":2,"v":{"a":0,"k":51,"ix":2}},{"ty":0,"nm":"Direction","mn":"ADBE Drop Shadow-0003","ix":3,"v":{"a":0,"k":180,"ix":3}},{"ty":0,"nm":"Distance","mn":"ADBE Drop Shadow-0004","ix":4,"v":{"a":0,"k":1.28,"ix":4}},{"ty":0,"nm":"Softness","mn":"ADBE Drop Shadow-0005","ix":5,"v":{"a":0,"k":2.56,"ix":5}},{"ty":7,"nm":"Shadow Only","mn":"ADBE Drop Shadow-0006","ix":6,"v":{"a":0,"k":0,"ix":6}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[10,10],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.482353001833,0.756862998009,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"circle","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"circle 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[360]},{"t":75}],"ix":10,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'cycle\', 0);"},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[-30,-49,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":25,"nm":"Drop Shadow","np":8,"mn":"ADBE Drop Shadow","ix":1,"en":1,"ef":[{"ty":2,"nm":"Shadow Color","mn":"ADBE Drop Shadow-0001","ix":1,"v":{"a":0,"k":[0.258823990822,0.305882006884,0.329412013292,0.20000000298],"ix":1}},{"ty":0,"nm":"Opacity","mn":"ADBE Drop Shadow-0002","ix":2,"v":{"a":0,"k":51,"ix":2}},{"ty":0,"nm":"Direction","mn":"ADBE Drop Shadow-0003","ix":3,"v":{"a":0,"k":180,"ix":3}},{"ty":0,"nm":"Distance","mn":"ADBE Drop Shadow-0004","ix":4,"v":{"a":0,"k":1.28,"ix":4}},{"ty":0,"nm":"Softness","mn":"ADBE Drop Shadow-0005","ix":5,"v":{"a":0,"k":2.56,"ix":5}},{"ty":7,"nm":"Shadow Only","mn":"ADBE Drop Shadow-0006","ix":6,"v":{"a":0,"k":0,"ix":6}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[10,10],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.482353001833,0.756862998009,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"circle","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"circle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[360]},{"t":75}],"ix":10,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'cycle\', 0);"},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[57,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":25,"nm":"Drop Shadow","np":8,"mn":"ADBE Drop Shadow","ix":1,"en":1,"ef":[{"ty":2,"nm":"Shadow Color","mn":"ADBE Drop Shadow-0001","ix":1,"v":{"a":0,"k":[0.258823990822,0.305882006884,0.329412013292,0.20000000298],"ix":1}},{"ty":0,"nm":"Opacity","mn":"ADBE Drop Shadow-0002","ix":2,"v":{"a":0,"k":51,"ix":2}},{"ty":0,"nm":"Direction","mn":"ADBE Drop Shadow-0003","ix":3,"v":{"a":0,"k":180,"ix":3}},{"ty":0,"nm":"Distance","mn":"ADBE Drop Shadow-0004","ix":4,"v":{"a":0,"k":1.28,"ix":4}},{"ty":0,"nm":"Softness","mn":"ADBE Drop Shadow-0005","ix":5,"v":{"a":0,"k":2.56,"ix":5}},{"ty":7,"nm":"Shadow Only","mn":"ADBE Drop Shadow-0006","ix":6,"v":{"a":0,"k":0,"ix":6}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[10,10],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.482353001833,0.756862998009,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"circle","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":3,"nm":"\u25bd ic-battery","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[23.04,32.96,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"middle","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[23.04,30.611,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[43.2,69.94],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.482353001833,0.756862998009,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"middle","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"black","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[23.04,32.915,0],"ix":2},"a":{"a":0,"k":[23.04,32.915,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-1.63],[0,0],[-1.64,0],[0,0],[-0.74,-3.25],[0,0],[-1.38,0],[0,0],[-0.56,0.79],[0,0],[0,0.62],[0,0],[1.64,0]],"o":[[-1.64,0],[0,0],[0,1.63],[0,0],[3.33,0],[0,0],[0.3,1.35],[0,0],[0.97,0],[0,0],[0.35,-0.5],[0,0],[0,-1.63],[0,0]],"v":[[2.97,0],[0,2.96],[0,91],[2.97,93.96],[40.53,93.96],[47.49,99.51],[47.73,100.55],[50.62,102.86],[66.59,102.86],[69.02,101.6],[71.46,98.15],[72,96.44],[72,2.96],[69.03,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.482353001833,0.756862998009,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"gray","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[23.699,32.256,0],"ix":2},"a":{"a":0,"k":[22.381,32.256,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.01,-1.6],[0,0],[-1.59,0],[0,0],[-0.68,0.92],[0,0],[0,0.78],[0,0],[1.6,0]],"o":[[-1.59,0.01],[0,0],[0.01,1.59],[0,0],[1.14,0],[0,0],[0.46,-0.63],[0,0],[0,-1.6],[0,0]],"v":[[2.87,0],[0,2.92],[0,97.92],[2.87,100.8],[63.09,100.8],[65.99,99.34],[69.23,94.99],[69.94,92.82],[69.94,2.9],[67.05,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.482353001833,0.756862998009,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"inner circle","sr":1,"ks":{"o":{"a":0,"k":50,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[180,180],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"circle","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"outer circle","sr":1,"ks":{"o":{"a":0,"k":50,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[220,220],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.301961004734,0.639216005802,0.831372976303,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[64,64],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"circle","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":0,"bm":0}],"markers":[]}',
        ),
        T = a.t(P, 2),
        F = a(22247),
        z = a(31228),
        U = (function (n) {
          (0, f.default)(a, n);
          var i = (0, u.default)(a);
          function a() {
            return ((0, d.default)(this, a), i.apply(this, arguments));
          }
          return (
            (0, h.default)(a, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    i = n.translations,
                    a = n.isMobile,
                    t = n.ownerInfo,
                    e = this.actions.disconnectFromCloud,
                    r = i.SETUP_UNIT_CONNECTED,
                    o = i.SETUP_USE_CLOUD_MANAGE,
                    s = i.SETUP_OPEN_CLOUD,
                    x = i.SETUP_XSTORAGECLOUD_OWNER_INFO,
                    l = i.SETUP_DISCONNECT_CLOUD,
                    c = { loop: !0, autoplay: !0, animationData: T },
                    p = (0, z.jsx)(X, {
                      mobile: a,
                      children: (0, z.jsx)(Z.default, {
                        options: c,
                        isClickToPauseDisabled: !0,
                        height: a ? 350 : "80vh",
                        width: a ? "100%" : "80vh",
                      }),
                    }),
                    k = (0, z.jsx)(I, {
                      mobile: a,
                      children: (0, z.jsxs)($, {
                        mobile: a,
                        children: [
                          (0, z.jsx)(M, { children: r }),
                          (0, z.jsx)(R, { children: o }),
                          (0, z.jsx)(F.SK, { height: "26px" }),
                          t &&
                            (0, z.jsxs)(z.Fragment, {
                              children: [
                                (0, z.jsx)(q, { children: x }),
                                (0, z.jsxs)(J, {
                                  children: [
                                    (0, z.jsx)(K, {
                                      children: "account_circle",
                                    }),
                                    t.name,
                                  ],
                                }),
                                (0, z.jsxs)(J, {
                                  children: [
                                    (0, z.jsx)(K, { children: "email" }),
                                    t.email,
                                  ],
                                }),
                              ],
                            }),
                          (0, z.jsx)(F.SK, { height: "40px" }),
                          (0, z.jsxs)(W, {
                            href: v.E,
                            target: "_blank",
                            noMargin: !a,
                            children: [
                              (0, z.jsx)(G.Z, { children: "languages" }),
                              s,
                            ],
                          }),
                          (0, z.jsxs)(F.zx, {
                            buttonType: "secondary-danger",
                            buttonWidth: "320px",
                            margin: "0px",
                            onClick: e,
                            children: [
                              (0, z.jsx)(G.Z, { children: "report" }),
                              l,
                            ],
                          }),
                        ],
                      }),
                    });
                  return (0, z.jsxs)(z.Fragment, {
                    children: [
                      a && (0, z.jsxs)(z.Fragment, { children: [p, k] }),
                      !a &&
                        (0, z.jsx)("div", {
                          children: (0, z.jsxs)(O.Z, {
                            container: !0,
                            children: [
                              (0, z.jsxs)(O.Z, {
                                item: !0,
                                xs: 7,
                                children: [
                                  (0, z.jsx)(F.V1, {
                                    mobile: a,
                                    marginTop: "50px",
                                    marginLeft: "20px",
                                    children: "Welcome",
                                  }),
                                  p,
                                ],
                              }),
                              (0, z.jsxs)(O.Z, {
                                style: {
                                  backgroundColor: "#f7f7f9",
                                  height: "100vh",
                                },
                                item: !0,
                                xs: 5,
                                children: [(0, z.jsx)(L, {}), k],
                              }),
                            ],
                          }),
                        }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(y.Component),
        N = V(U),
        $ = C.ZP.div(
          t ||
            (t = (0, m.default)([
              "\n  width: 60%;\n  margin-left: 12%;\n\n  ",
              "\n",
            ])),
          function (n) {
            return (
              n.mobile &&
              "\n    width: 100vw;\n    text-align: center;\n    padding: 0px 20px;\n    margin-left: 0px;\n    margin-bottom: 20px;\n  "
            );
          },
        ),
        I = C.ZP.div(
          e || (e = (0, m.default)(["\n  ", "\n\n  ", "\n"])),
          function (n) {
            return (
              n.mobile &&
              "\n    border-width: 140px 100vw 0 0;\n    border-color: transparent #f7f7f9 transparent transparent;\n    display: inline-block;\n    width: 0px;\n    border-style: solid;\n    position: absolute;\n    margin-top: -194px;\n    min-height: calc(100% - 106px);\n  "
            );
          },
          function (n) {
            return (
              !n.mobile &&
              "\n    width: 50%;\n    position: absolute;\n    right: 0;\n    top: 34%;\n"
            );
          },
        ),
        L = C.ZP.div(
          r ||
            (r = (0, m.default)([
              "\n  margin-left: -248px;\n  width: 0;\n  height: 0;\n  min-height: 100vh;\n  border-style: solid;\n  border-width: 0 0 100vh 250px;\n  border-color: transparent transparent #f7f7f9 transparent;\n  display: inline-block;\n  position: absolute;\n",
            ])),
        ),
        W = C.ZP.a(
          o ||
            (o = (0, m.default)([
              '\n  color: #ffffff !important;\n  text-decoration: none !important;\n  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);\n  border-radius: 20px;\n  border: 0px;\n  background-color: #007bc1;\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 600;\n  font-family: "Open Sans";\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 20px;\n  cursor: pointer;\n  max-width: 100%;\n  width: 320px;\n  margin: 0 auto;\n\n  ',
              "\n\n  margin-bottom: 20px;\n  height: 40px;\n\n  span.material-icons {\n    font-size: 24px;\n    line-height: 25px;\n    overflow: visible;\n    vertical-align: middle;\n    height: 25px;\n    margin-right: 5px;\n  }\n",
            ])),
          function (n) {
            return n.noMargin && "\n    margin: 0px;\n  ";
          },
        ),
        M = C.ZP.h2(
          s ||
            (s = (0, m.default)([
              '\n  color: #007bc1;\n  font-family: "Open Sans";\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 32px;\n  width: 70vh;\n  width: 100%;\n  margin-bottom: 0;\n',
            ])),
        ),
        R = C.ZP.p(
          x ||
            (x = (0, m.default)([
              '\n  color: #727e84;\n  font-family: "Open Sans";\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 24px;\n  margin-top: 7px;\n',
            ])),
        ),
        J = C.ZP.p(
          l ||
            (l = (0, m.default)([
              '\n  color: rgba(66, 78, 84, 0.6);\n  font-family: "Open Sans";\n  font-size: 14px;\n  line-height: 20px;\n  display: flex;\n  align-items: center;\n',
            ])),
        ),
        K = (0, C.ZP)(G.Z)(
          c ||
            (c = (0, m.default)([
              "\n  color: #007bc1;\n  vertical-align: middle;\n  font-size: 20px !important;\n  margin-right: 5px;\n",
            ])),
        ),
        X = C.ZP.div(
          p ||
            (p = (0, m.default)([
              '\n  position: relative;\n\n  > * {\n    outline: none;\n  }\n\n  &:after {\n    content: "";\n    position: absolute;\n    z-index: 10;\n  }\n\n  ',
              "\n\n  ",
              "\n",
            ])),
          function (n) {
            return (
              !n.mobile &&
              "\n    > * {\n      position: fixed;\n      left: calc(50% - 48vh);\n      top: 12%;\n    }\n  "
            );
          },
          function (n) {
            return (
              n.mobile &&
              "\n    height: 300px;\n\n    > * {\n      position: absolute;\n      bottom: 0;\n      display: flex;\n      align-items: center;\n    }\n  "
            );
          },
        ),
        q = (0, C.ZP)(F.ZT)(
          k ||
            (k = (0, m.default)([
              '\n  color: #333f48 !important;\n  font-family: "Open Sans";\n  font-size: 14px !important;\n  font-weight: 800 !important;\n  letter-spacing: 0.5px !important;\n  line-height: 14px !important;\n  text-transform: uppercase;\n',
            ])),
        );
    },
  },
]);
//# sourceMappingURL=6438.f3e4dbbd.chunk.js.map
