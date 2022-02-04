const path = require('path');

const DEST_PATH = 'dist';
const FILENAME = 'bundle.js';

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.ts',

    mode: 'production',

    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    output: {
        filename: FILENAME,
        path: path.resolve(__dirname, DEST_PATH),
    },
};