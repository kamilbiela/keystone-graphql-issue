import { type BuildOptions } from "esbuild";

export default function (defaults: BuildOptions) {
    return {
        ...defaults,
        // remove default config, bundle everything
        plugins: [],
    };
}
