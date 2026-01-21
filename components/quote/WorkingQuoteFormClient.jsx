"use client";

import dynamic from "next/dynamic";

const WorkingQuoteForm = dynamic(() => import("./WorkingQuoteForm"), {
  ssr: false,
  loading: () => (
    <div className="bg-white/10 rounded-2xl p-6 text-white">
      Loading quote form...
    </div>
  ),
});

export default function WorkingQuoteFormClient() {
  return <WorkingQuoteForm />;
}
