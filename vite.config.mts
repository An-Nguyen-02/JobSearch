import RubyPlugin from 'vite-plugin-ruby';
import StimulusHMR from "vite-plugin-stimulus-hmr";
import FullReload from "vite-plugin-full-reload";
import react from '@vitejs/plugin-react';
import commonjs from 'vite-plugin-commonjs';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    RubyPlugin(),
    commonjs({
      dynamic: {
        loose: true
      }
    }),
    StimulusHMR(),
    FullReload(["app/views/**/*.erb", "app/views/**/*.builder"]),
  ],
});
