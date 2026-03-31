import React from "react";

export function parseBoldLabel(text: string): { label: string; rest: string } {
  if (!text) return { label: "", rest: "" };
  const m = text.match(/^<b>(.*?)<\/b>([\s\S]*)/);
  if (m) return { label: m[1].replace(/<.*?>/g, ""), rest: m[2].trim().replace(/^:\s*/, "") };
  const m2 = text.match(/^\*\*(.*?)\*\*([\s\S]*)/);
  if (m2) return { label: m2[1], rest: m2[2].trim().replace(/^:\s*/, "") };
  return { label: "", rest: text };
}

export function InlineText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
  return (
    <span>
      {parts.map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**")) return <strong key={i}>{p.slice(2, -2)}</strong>;
        if (p.startsWith("*") && p.endsWith("*")) return <em key={i}>{p.slice(1, -1)}</em>;
        return p;
      })}
    </span>
  );
}

export function parseListItems(html: string): string[] {
  return html
    .replace(/^<ul>|<\/ul>$/g, "")
    .split("</li>")
    .map((s) => s.replace(/^<li>/, "").trim())
    .filter(Boolean);
}
