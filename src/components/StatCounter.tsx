import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export default function StatCounter({ end, suffix = "", prefix = "", label, duration = 2000 }: Props) {
  const { ref, revealed } = useScrollReveal(0.3);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!revealed) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [revealed, end, duration]);

  return (
    <div ref={ref}>
      <div className="text-3xl md:text-4xl font-bold text-foreground mb-1.5 tracking-tighter">
        {prefix}{count}{suffix}
      </div>
      <div className="text-[13px] text-muted-foreground font-medium">{label}</div>
    </div>
  );
}
