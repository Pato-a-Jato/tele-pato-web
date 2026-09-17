export default function StatTile({
  label,
  value,
  unit,
  hint,
}: {
  label: string;
  value: string;
  unit?: string;
  hint?: string;
}) {
  return (
    <div className="rounded-xl border border-black/10 bg-white p-4">
      <p className="text-xs font-medium text-[#52514e]">{label}</p>
      <p className="mt-1.5 text-2xl font-semibold text-black">
        {value}
        {unit ? <span className="ml-1 text-sm font-medium text-[#898781]">{unit}</span> : null}
      </p>
      {hint ? <p className="mt-1 text-xs text-[#898781]">{hint}</p> : null}
    </div>
  );
}
