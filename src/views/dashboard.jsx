"use client";
// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useAuth } from "../auth/authcontext";
export default function Dashboard() {
  const { user, logout, token } = useAuth(); // assumes you store {user, token} in context
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  // OPTIONAL: load protected data (e.g., /api/admin/submissions) if your backend exposes it
  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        setLoading(true);
        setErr("");

        // If you don't have this API yet, comment this out safely.
        const res = await fetch("http://localhost:5000/api/admin/submissions", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // your backend should verify this
          },
        });

        if (!res.ok) {
          throw new Error(`Failed to load: ${res.status}`);
        }

        const data = await res.json();
        if (!ignore) setSubmissions(data);
      } catch (e) {
        if (!ignore) setErr(e.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    if (token) load();
    else setLoading(false);

    return () => { ignore = true; };
  }, [token]);

  return (
    <section className="[min-height:100vh] [padding:32px_20px_60px] [background:radial-gradient(1200px_600px_at_20%_-20%,_rgba(79,140,255,0.12),_transparent_60%),_radial-gradient(1200px_600px_at_100%_0%,_rgba(101,240,198,0.1),_transparent_60%),_var(--dash-bg)] [color:var(--text)]">
      <div className="[max-width:1100px] [margin:0_auto_24px] [display:flex] [align-items:center] [justify-content:space-between]">
        <div>
          <h1 className="[font-size:2rem] [font-weight:800] [letter-spacing:-0.02em]">Welcome{user?.firstName ? `, ${user.firstName}` : ""} 👋</h1>
          <p className="[color:var(--muted)] [margin-top:6px]">Here’s your Total Health control center.</p>
        </div>

        <button className="[background:linear-gradient(135deg,_var(--accent),_#7aa8ff)] [color:white] [border:none] [padding:10px_14px] [border-radius:10px] [font-weight:700] [cursor:pointer] [box-shadow:var(--shadow)] [&:hover]:[filter:brightness(1.05)]" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="[max-width:1100px] [margin:0_auto] [display:grid] [gap:20px] [grid-template-columns:1.2fr_1fr] max-[900px]:[grid-template-columns:1fr]">
        {/* Profile card */}
        <div className="[background:linear-gradient(180deg,_var(--panel),_var(--panel-2))] [border:1px_solid_var(--border)] [border-radius:16px] [padding:18px] [box-shadow:var(--shadow)] [display:flex] [flex-direction:column] [gap:12px]">
          <h2 className="[font-size:1.1rem] [font-weight:800] [letter-spacing:0.02em] [margin-bottom:12px]">Your Profile</h2>
          <div className="[display:grid] [grid-template-columns:160px_1fr] [gap:12px] [align-items:center] [padding:8px_0] [border-bottom:1px_dashed_var(--border)] [&:last-child]:[border-bottom:none]">
            <span className="[color:var(--muted)] [font-size:0.9rem]">Name</span>
            <span className="[font-weight:700]">
              {user?.firstName || "-"} {user?.lastName || ""}
            </span>
          </div>
          <div className="[display:grid] [grid-template-columns:160px_1fr] [gap:12px] [align-items:center] [padding:8px_0] [border-bottom:1px_dashed_var(--border)] [&:last-child]:[border-bottom:none]">
            <span className="[color:var(--muted)] [font-size:0.9rem]">Email</span>
            <span className="[font-weight:700]">{user?.email || "-"}</span>
          </div>
          <div className="[display:grid] [grid-template-columns:160px_1fr] [gap:12px] [align-items:center] [padding:8px_0] [border-bottom:1px_dashed_var(--border)] [&:last-child]:[border-bottom:none]">
            <span className="[color:var(--muted)] [font-size:0.9rem]">Member Since</span>
            <span className="[font-weight:700]">
              {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "-"}
            </span>
          </div>
        </div>

        {/* Quick actions */}
        <div className="[background:linear-gradient(180deg,_var(--panel),_var(--panel-2))] [border:1px_solid_var(--border)] [border-radius:16px] [padding:18px] [box-shadow:var(--shadow)]">
          <h2 className="[font-size:1.1rem] [font-weight:800] [letter-spacing:0.02em] [margin-bottom:12px]">Quick Actions</h2>
          <div className="[display:flex] [gap:10px] [flex-wrap:wrap]">
            <button className="[background:var(--accent-2)] [color:#0e1b15] [border:none] [padding:10px_14px] [border-radius:10px] [font-weight:800] [cursor:pointer] [&:hover]:[filter:brightness(1.05)]">Book Appointment</button>
            <button className="[border:none] [padding:10px_14px] [border-radius:10px] [font-weight:800] [cursor:pointer] [&:hover]:[filter:brightness(1.05)] [background:#29314a] [color:var(--text)]">Update Profile</button>
            <button className="[padding:10px_14px] [border-radius:10px] [font-weight:800] [cursor:pointer] [&:hover]:[filter:brightness(1.05)] [background:transparent] [color:var(--text)] [border:1px_solid_var(--border)]">Manage Newsletter</button>
          </div>
        </div>

        {/* Protected data list (optional) */}
        <div className="[background:linear-gradient(180deg,_var(--panel),_var(--panel-2))] [border:1px_solid_var(--border)] [border-radius:16px] [padding:18px] [box-shadow:var(--shadow)] [grid-column:1_/_-1]">
          <div className="[display:flex] [align-items:center] [justify-content:space-between] [margin-bottom:8px]">
            <h2 className="[font-size:1.1rem] [font-weight:800] [letter-spacing:0.02em] [margin-bottom:12px]">Recent Contact Submissions</h2>
            <span className="[background:rgba(79,140,255,0.2)] [color:#cfe0ff] [border:1px_solid_rgba(79,140,255,0.35)] [padding:4px_10px] [border-radius:999px] [font-size:0.8rem] [font-weight:700]">
              {loading ? "Loading…" : `${submissions?.length || 0}`}
            </span>
          </div>

          {err && <div className="[background:rgba(255,_105,_97,_0.1)] [color:#ffb3ae] [border:1px_solid_rgba(255,_105,_97,_0.3)] [padding:10px_12px] [border-radius:8px] [margin-top:8px]">{err}</div>}

          {!loading && !err && (submissions?.length || 0) === 0 && (
            <p className="[color:var(--muted)] [margin-top:6px]">No submissions found.</p>
          )}

          {!loading && !err && submissions?.length > 0 && (
            <ul className="[list-style:none] [padding:0] [margin:8px_0_0]">
              {submissions.map((s) => (
                <li key={s._id} className="[padding:12px_0] [border-bottom:1px_dashed_var(--border)] [&:last-child]:[border-bottom:none]">
                  <div className="[font-weight:700]">
                    {s.firstName} {s.lastName} — <span className="">{s.email}</span>
                  </div>
                  <div className="[color:var(--muted)] [margin:4px_0_4px]">{s.message}</div>
                  <div className="[color:var(--muted)] [font-size:0.85rem]">
                    {new Date(s.date).toLocaleString()}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
