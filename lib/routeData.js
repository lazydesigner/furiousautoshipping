import fs from "fs";
import path from "path";

const routesFilePath = path.join(process.cwd(), "lib", "routeData2.json");

// Cache as a MAP for instant lookup
let cachedRoutesMap = null;

export function refreshRoutesCache() {
  cachedRoutesMap = null;
}

function loadRoutesFile() {
  if (cachedRoutesMap) return cachedRoutesMap;

  const fileContent = fs.readFileSync(routesFilePath, "utf8");
  const routesArray = JSON.parse(fileContent);

  // Build route_id => object map
  cachedRoutesMap = new Map();

  for (const route of routesArray) {
    cachedRoutesMap.set(route.route_id, route);
  }

  return cachedRoutesMap;
}

export async function getRouteData(routeId) {
  try {
    if (!routeId) return null;

    
    refreshRoutesCache()

    const routesMap = loadRoutesFile();

    return routesMap.get(routeId) || null;
  } catch (error) {
    console.error("getRouteData error:", error);
    return null;
  }
}
