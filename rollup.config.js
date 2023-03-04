import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/main.js',
    output: { file: 'dist/bundler.js' },
    plugins: [
        typescript(),
        nodeResolve({browser: true}),
        terser()
    ]
};