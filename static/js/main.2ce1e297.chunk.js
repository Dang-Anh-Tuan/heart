(this["webpackJsonpcamera-shake"] =
  this["webpackJsonpcamera-shake"] || []).push([
  [0],
  {
    44: function (e, t, o) {},
    48: function (e, t, o) {
      "use strict";
      o.r(t);
      var n = o(34),
        r = o.n(n),
        i = (o(44), o(11)),
        c = o(0),
        a = o(9),
        s = o(35),
        j = o(13),
        h = o(51),
        l = o(52),
        b = o(10),
        u = o(49),
        p = o(50),
        O = o(12),
        x = new c.MeshPhysicalMaterial({
          color: new c.Color("#bb86a1").convertSRGBToLinear(),
          roughness: 0,
          clearcoat: 1,
          clearcoatRoughness: 0,
        });
      function d(e) {
        var t = Object(a.useRef)(),
          o = Object(u.a)("/love.glb").nodes;
        return Object(O.jsxs)(
          "group",
          Object(b.a)(
            Object(b.a)({ ref: t }, e),
            {},
            {
              dispose: null,
              children: [
                Object(O.jsx)(p.a, {
                  resolution: 1024,
                  receiveShadow: !0,
                  mirror: 0,
                  blur: [500, 100],
                  mixBlur: 1,
                  mixStrength: 0.5,
                  depthScale: 1,
                  minDepthThreshold: 0.8,
                  maxDepthThreshold: 1,
                  position: [0, 0, 8],
                  scale: [2, 2, 1],
                  rotation: [-Math.PI / 2, 0, Math.PI],
                  args: [70, 70],
                  children: function (e, t) {
                    return Object(O.jsx)(
                      e,
                      Object(b.a)(
                        { metalness: 0.25, color: "#eea6b1", roughness: 1 },
                        t
                      )
                    );
                  },
                }),
                Object(O.jsx)("mesh", {
                  receiveShadow: !0,
                  castShadow: !0,
                  material: x,
                  geometry: o.H.geometry,
                  position: [2.5, 0.17, 1.78],
                  scale: [6, 6, 6],
                  rotation: [1.58, 0.028, 3.5],
                }),
                Object(O.jsx)("mesh", {
                  receiveShadow: !0,
                  castShadow: !0,
                  material: x,
                  geometry: o.L.geometry,
                  position: [-10, 0.26, -4],
                  scale: [6, 6, 6],
                  rotation: [1.59, 0, 4],
                }),
                Object(O.jsx)("mesh", {
                  receiveShadow: !0,
                  castShadow: !0,
                  material: x,
                  geometry: o.Heart.geometry,
                  position: [-6, 0.5, -1.5],
                  scale: [0.5, 0.5, 0.5],
                  rotation: [-0, 2.8, -0],
                }),
              ],
            }
          )
        );
      }
      function m() {
        var e = Object(a.useRef)();
        return (
          Object(j.c)(function (t) {
            return (e.current.rotation.x = t.clock.elapsedTime);
          }),
          Object(O.jsx)("group", {
            ref: e,
            children: Object(O.jsx)("rectAreaLight", {
              width: 15,
              height: 100,
              position: [30, 30, -10],
              intensity: 5,
              onUpdate: function (e) {
                return e.lookAt(0, 0, 0);
              },
            }),
          })
        );
      }
      function g() {
        var e = Object(a.useState)(function () {
            return new c.Vector3();
          }),
          t = Object(i.a)(e, 1)[0],
          o = Object(j.e)(),
          n = o.camera,
          r = o.mouse;
        return (
          Object(j.c)(function () {
            return n.position.lerp(t.set(2 * r.x, 1, 60), 0.05);
          }),
          Object(O.jsx)(h.a, {
            maxYaw: 0.01,
            maxPitch: 0.01,
            maxRoll: 0.01,
            yawFrequency: 0.5,
            pitchFrequency: 0.5,
            rollFrequency: 0.4,
          })
        );
      }
      function f() {
        return Object(O.jsxs)(j.a, {
          concurrent: !0,
          shadowMap: !0,
          pixelRatio: [1, 2],
          camera: { position: [0, 160, 160], fov: 20 },
          children: [
            Object(O.jsx)("fog", {
              attach: "fog",
              args: ["lightpink", 60, 100],
            }),
            Object(O.jsxs)(a.Suspense, {
              fallback: null,
              children: [
                Object(O.jsx)("ambientLight", { intensity: 1 }),
                Object(O.jsx)(d, {
                  position: [-4.5, -4, 0],
                  rotation: [0, -2.8, 0],
                }),
                Object(O.jsx)("spotLight", {
                  position: [50, 50, -30],
                  castShadow: !0,
                }),
                Object(O.jsx)("pointLight", {
                  position: [-10, -10, -10],
                  color: "red",
                  intensity: 3,
                }),
                Object(O.jsx)("pointLight", {
                  position: [0, -5, 5],
                  intensity: 0.5,
                }),
                Object(O.jsx)("directionalLight", {
                  position: [0, -5, 0],
                  color: "red",
                  intensity: 2,
                }),
                Object(O.jsx)(m, {}),
                Object(O.jsx)(g, {}),
              ],
            }),
            Object(O.jsx)(l.a, {}),
          ],
        });
      }
      u.a.preload("/pink-d.glb"),
        s.a.init(),
        r.a.render(Object(O.jsx)(f, {}), document.getElementById("root"));
    },
  },
  [[48, 1, 2]],
]);
//# sourceMappingURL=main.2ce1e297.chunk.js.map
