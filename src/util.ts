import techColors from "./data/techColors.json";

export const getContrastTextColor = (hex: string): "black" | "white" => {
    const strippedHex = hex.replace('#', '')
    const r = parseInt(strippedHex.slice(0, 2), 16)
    const g = parseInt(strippedHex.slice(2, 4), 16)
    const b = parseInt(strippedHex.slice(4, 6), 16)
    const brightness = 0.2126 * r + 0.7251 * g + 0.0722 * b;
    return brightness > 150 ? "black" : "white";
}

const techColorsTyped: Record<string, string> = techColors;

export const getTagColor = (tech: string): string => {
    tech = tech.toLowerCase().replace('.', '')

    if (tech in techColors) {
        return techColorsTyped[tech];
    }

    throw `No color for tech ${tech}`
}
