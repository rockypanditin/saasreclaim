import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, UserPlus, Mail, Shield, CheckCircle2, Trash2 } from "lucide-react";
import { isDemoMode } from "@/lib/storage";

interface TeamMember {
  id: string;
  email: string;
  role: "Admin" | "Department Head" | "Viewer";
  department: string;
}

const DEMO_TEAM_MEMBERS: TeamMember[] = [
  { id: "1", email: "alex@acmecorp.com", role: "Admin", department: "Executive" },
  { id: "2", email: "sarah@acmecorp.com", role: "Department Head", department: "Design" },
  { id: "3", email: "david@acmecorp.com", role: "Department Head", department: "Marketing" },
];

export function TeamSeats() {
  const [members, setMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    if (isDemoMode()) {
      setMembers(DEMO_TEAM_MEMBERS);
    } else {
      const saved = localStorage.getItem("saasreclaim_real_team_members");
      const userEmail = localStorage.getItem("saasreclaim_user_email") || "you@company.com";
      if (saved) {
        try {
          setMembers(JSON.parse(saved));
        } catch {
          setMembers([{ id: "owner", email: userEmail, role: "Admin", department: "Executive" }]);
        }
      } else {
        setMembers([{ id: "owner", email: userEmail, role: "Admin", department: "Executive" }]);
      }
    }
  }, []);

  const saveMembers = (newMembers: TeamMember[]) => {
    setMembers(newMembers);
    if (!isDemoMode()) {
      localStorage.setItem("saasreclaim_real_team_members", JSON.stringify(newMembers));
    }
  };

  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteDept, setInviteDept] = useState("Engineering");
  const [inviteRole, setInviteRole] = useState<"Admin" | "Department Head" | "Viewer">("Department Head");
  const [msg, setMsg] = useState("");

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail) return;

    const newMember: TeamMember = {
      id: `mem-${Date.now()}`,
      email: inviteEmail,
      role: inviteRole,
      department: inviteDept,
    };

    const updated = [...members, newMember];
    saveMembers(updated);
    setInviteEmail("");
    setMsg(`Invitation sent to ${inviteEmail}!`);
    setTimeout(() => setMsg(""), 3000);
  };

  const handleRemove = (id: string) => {
    const updated = members.filter((m) => m.id !== id);
    saveMembers(updated);
  };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-5">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <Users className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Team & Department Seat Sharing</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Invite department heads to manage software seats and budget limits.</p>
          </div>
        </div>
      </div>

      {/* Invite Form */}
      <form onSubmit={handleInvite} className="grid grid-cols-1 sm:grid-cols-4 gap-3 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <div className="sm:col-span-2">
          <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">Work Email</label>
          <Input
            type="email"
            value={inviteEmail}
            onChange={(e) => setInviteEmail(e.target.value)}
            placeholder="colleague@company.com"
            required
            className="text-xs bg-white dark:bg-slate-900"
          />
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">Department</label>
          <select
            value={inviteDept}
            onChange={(e) => setInviteDept(e.target.value)}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none"
          >
            <option value="Engineering">Engineering</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="HR">HR</option>
            <option value="Executive">Executive</option>
          </select>
        </div>

        <div className="flex items-end">
          <Button type="submit" size="sm" className="w-full gap-1.5 text-xs bg-emerald-600 hover:bg-emerald-500 text-white">
            <UserPlus className="h-3.5 w-3.5" />
            <span>Invite Seat</span>
          </Button>
        </div>
      </form>

      {msg && (
        <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5" />
          <span>{msg}</span>
        </div>
      )}

      {/* Members List Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 font-bold border-b border-slate-200 dark:border-slate-800">
            <tr>
              <th className="p-3">Member Email</th>
              <th className="p-3">Department</th>
              <th className="p-3">Role</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
            {members.map((mem) => (
              <tr key={mem.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-slate-400" />
                  <span>{mem.email}</span>
                </td>
                <td className="p-3">
                  <span className="rounded-md bg-blue-50 dark:bg-blue-950 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:text-blue-300">
                    {mem.department}
                  </span>
                </td>
                <td className="p-3">{mem.role}</td>
                <td className="p-3 text-right">
                  {mem.role !== "Admin" && (
                    <button onClick={() => handleRemove(mem.id)} className="text-slate-400 hover:text-rose-600 p-1">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
