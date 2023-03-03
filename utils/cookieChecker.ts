import { JsonParsedChangelog } from "@/interfaces";
import Cookies from "js-cookie";
const md2json = require("md-2-json");

export const checkCookiesForNewUpdates = (
    changelog: JsonParsedChangelog
): { count: number, unSeens: string[] } => {
    const seenUpdates = Cookies.get("seenUpdates");
    let count = 0;
    let unSeens = [];

    const releases = Object.keys(changelog.Changelog);

    if (!seenUpdates) {
        const cookie = [];
        for (const key of releases) {
            if (key !== "raw") {
                cookie.push(key);
                const object = { [key]: changelog.Changelog[key] };
                unSeens.push(md2json.toMd(object))
                count++;
            }
        }
        Cookies.set("seenUpdates", JSON.stringify(cookie));
    } else {
        const parsedCookie = JSON.parse(seenUpdates) as string[];
        for (const key of releases) {
            if (key !== "raw") {
                const parsed = JSON.parse(seenUpdates) as string[];
                if (!parsed.includes(key)) {
                    count++;
                    parsedCookie.push(key);
                    const object = { [key]: changelog.Changelog[key] };
                    unSeens.push(md2json.toMd(object))
                }
            }
        }
        Cookies.set("seenUpdates", JSON.stringify(parsedCookie));
    }

    return { count, unSeens };
};
