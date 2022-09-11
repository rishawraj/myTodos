/*! For license information please see main.js.LICENSE.txt */
(() => {
  "use strict";
  function e(e, t = !1) {
    const n = document.createElement("div");
    1 == t && n.classList.add("task-checked"), n.classList.add("task");
    const c = document.createElement("input");
    (c.type = "checkbox"),
      (c.name = "check"),
      (c.id = "check"),
      (c.checked = t);
    const l = document.createElement("p");
    l.textContent = e;
    const a = document.createElement("button");
    return (
      a.classList.add("delete-task"),
      (a.textContent = "x"),
      (a.style.backgroundColor = "lightcoral"),
      n.appendChild(c),
      n.appendChild(l),
      n.appendChild(a),
      n
    );
  }
  function t() {
    return null == localStorage.getItem("projects")
      ? []
      : JSON.parse(localStorage.getItem("projects"));
  }
  function n(e, t = !1) {
    let n = c();
    n.push(e), n.push(t), o(n);
  }
  function c() {
    return null == localStorage.getItem("general-tasks")
      ? []
      : JSON.parse(localStorage.getItem("general-tasks"));
  }
  function l(e) {
    return null == localStorage.getItem(e)
      ? []
      : JSON.parse(localStorage.getItem(e));
  }
  function a(e, t) {
    let n = l(e),
      c = [];
    for (let e = 0; e < n.length; e += 2)
      n[e] !== t && (c.push(n[e]), c.push(n[e + 1]));
    r(e, c);
  }
  function s(e) {
    localStorage.setItem("projects", JSON.stringify(e));
  }
  function o(e) {
    localStorage.setItem("general-tasks", JSON.stringify(e));
  }
  function r(e, t) {
    localStorage.setItem(e, JSON.stringify(t));
  }
  function d(e, t) {
    let n = l(e);
    for (let e = 0; e < n.length; e += 2) n[e] == t && (n[e + 1] = !n[e + 1]);
    r(e, n);
  }
  const i = document.querySelector(".add-project"),
    u = document.querySelector(".input-project"),
    p = document.querySelector(".cancel-proj");
  i.addEventListener("click", () => {
    (u.style.display = "block"), (i.style.display = "none");
  }),
    p.addEventListener("click", () => {
      (u.style.display = "none"), (i.style.display = "block");
    });
  const k = document.querySelector(".project-list"),
    m = document.querySelector("#project-input-text");
  function y() {
    let e = t();
    (k.innerHTML = ""),
      e.forEach((e) => {
        k.appendChild(
          (function (e) {
            const t = document.createElement("div");
            t.classList.add("project");
            const n = document.createElement("p");
            n.textContent = e;
            const c = document.createElement("button");
            return (
              c.classList.add("delete-project"),
              (c.textContent = "delete"),
              t.appendChild(n),
              t.appendChild(c),
              t
            );
          })(e)
        );
      });
  }
  document.querySelector(".add-proj").addEventListener("click", () => {
    "" != m.value &&
      ((function (e) {
        let n = t();
        n.push(e), s(n);
      })(m.value),
      (m.value = ""),
      y());
  }),
    k.addEventListener("click", (e) => {
      if ("delete-project" == e.target.classList[0]) {
        let n = e.target.parentElement.textContent.replace(/delete/g, "");
        !(function (e) {
          let n = t(),
            c = [];
          for (let t = 0; t < n.length; t++) n[t] !== e && c.push(n[t]);
          s(c);
        })(n),
          y(),
          localStorage.removeItem(n);
      }
    });
  const g = document.querySelector(".add-task-button"),
    v = document.querySelector(".input-task"),
    L = document.querySelector(".cancel-task");
  g.addEventListener("click", () => {
    (v.style.display = "block"), (g.style.display = "none");
  }),
    L.addEventListener("click", () => {
      (v.style.display = "none"), (g.style.display = "block");
    });
  const S = document.querySelector(".add-task"),
    E = document.querySelector(".task-list"),
    f = document.querySelector("#task-input-text");
  function h() {
    let t = c();
    E.innerHTML = "";
    for (let n = 0; n < t.length; n += 2) E.append(e(t[n], t[n + 1]));
  }
  function b(t) {
    const n = document.querySelector(".task-list");
    n.innerHTML = "";
    let c = l(t);
    for (let t = 0; t < c.length; t += 2) n.append(e(c[t], c[t + 1]));
  }
  S.addEventListener("click", () => {
    "" != f.value && (n(f.value), (f.value = ""), h());
  }),
    E.addEventListener("click", (e) => {
      "delete-task" == e.target.classList[0] &&
        (!(function (e) {
          let t = c(),
            n = [];
          for (let c = 0; c < t.length; c += 2)
            t[c] !== e && (n.push(t[c]), n.push(t[c + 1]));
          o(n);
        })(e.target.parentElement.textContent.replace(/x$/, "")),
        h());
    }),
    E.addEventListener("click", (e) => {
      "check" == e.target.id &&
        (!(function (e) {
          let t = c();
          for (let n = 0; n < t.length; n += 2)
            t[n] == e && (t[n + 1] = !t[n + 1]);
          o(t);
        })(e.target.parentElement.textContent.replace(/x$/, "")),
        h());
    }),
    document.addEventListener("DOMContentLoaded", y()),
    document.addEventListener("DOMContentLoaded", h()),
    document
      .querySelector(".delete-all-projects")
      .addEventListener("click", () => {
        localStorage.clear(), y(), h();
      }),
    document.querySelector(".general-project").addEventListener("click", () => {
      const e = document.querySelector("main");
      (e.innerHTML = ""),
        (e.innerHTML =
          '\n      <h2 class="project-title">general</h2>\n      <div class="task-list"></div>\n\n      <button class="add-task-button">+ add task</button>\n      <div class="input-task">\n        <form action="#">\n          <input id="task-input-text" type="text" required autocomplete="off" />\n          <div class="task-btns">\n            <button class="add-task" type="submit">add</button>\n            <button class="cancel-task">cancel</button>\n          </div>\n        </form>\n      </div>\n  '),
        b("general-tasks");
      const t = document.querySelector(".add-task-button"),
        c = document.querySelector(".input-task"),
        l = document.querySelector(".cancel-task");
      t.addEventListener("click", () => {
        (t.style.display = "none"), (c.style.display = "block");
      }),
        l.addEventListener("click", () => {
          (t.style.display = "block"), (c.style.display = "none");
        });
      const s = document.querySelector(".add-task"),
        o = document.querySelector("#task-input-text");
      s.addEventListener("click", () => {
        "" != o.value && (n(o.value), (o.value = ""), b("general-tasks"));
      });
      const r = document.querySelector(".task-list");
      r.addEventListener("click", (e) => {
        "delete-task" == e.target.classList[0] &&
          (a(
            "general-tasks",
            e.target.parentElement.textContent.replace(/x$/, "")
          ),
          b("general-tasks"));
      }),
        r.addEventListener("click", (e) => {
          "check" == e.target.id &&
            (d(
              "general-tasks",
              e.target.parentElement.textContent.replace(/x$/, "")
            ),
            b("general-tasks"));
        });
    }),
    k.addEventListener("click", (e) => {
      if (
        (e.target.classList.contains("project") ||
          e.target.parentElement.classList.contains("project")) &&
        !e.target.classList.contains("delete-project")
      ) {
        let t = e.target.textContent.replace("delete", "");
        !(function (e) {
          const t = document.querySelector("main");
          t.innerHTML = "";
          const n = document.createElement("h2");
          n.classList.add("project-title"), (n.textContent = e);
          const c = document.createElement("div");
          c.classList.add("task-list");
          const l = document.createElement("button");
          l.classList.add("add-task-button-new-project"),
            (l.textContent = "+ add task");
          const a = document.createElement("div");
          a.classList.add("input-task-new-project"),
            (a.innerHTML =
              '\n        <form action="#">\n          <input id="task-input-text" type="text" required autocomplete="off">\n          <div class="task-btns">\n            <button class="add-task" type="submit">add</button>\n            <button class="cancel-task">cancel</button>\n          </div>\n        </form>\n  '),
            t.appendChild(n),
            t.appendChild(c),
            t.appendChild(l),
            t.appendChild(a);
        })(t),
          b(t);
        const n = document.querySelector(".add-task-button-new-project"),
          c = document.querySelector(".input-task-new-project"),
          s = document.querySelector(".cancel-task");
        n.addEventListener("click", () => {
          (n.style.display = "none"), (c.style.display = "block");
        }),
          s.addEventListener("click", () => {
            (n.style.display = "block"), (c.style.display = "none");
          });
        const o = document.querySelector(".add-task"),
          i = document.querySelector("#task-input-text");
        o.addEventListener("click", () => {
          console.log(`${t}`),
            "" != i.value &&
              ((function (e, t, n = !1) {
                let c = l(e);
                c.push(t), c.push(n), r(e, c);
              })(`${t}`, i.value),
              (i.value = ""),
              b(`${t}`));
        });
        const u = document.querySelector(".task-list");
        u.addEventListener("click", (e) => {
          if ("delete-task" == e.target.classList[0]) {
            let n = e.target.parentElement.textContent.replace(/x$/, "");
            a(t, n), b(t);
          }
        }),
          u.addEventListener("click", (e) => {
            if ("check" == e.target.id) {
              let n = e.target.parentElement.textContent.replace(/x$/, "");
              d(t, n), b(t);
            }
          });
      }
    });
})();
