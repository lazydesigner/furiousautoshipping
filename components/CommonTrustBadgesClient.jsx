"use client";

import dynamic from "next/dynamic";

const CommonTrustBadges = dynamic(() => import("./CommonTrustBadges"), {
  ssr: false,
});

export default function CommonTrustBadgesClient() {
  return <CommonTrustBadges />;
}
