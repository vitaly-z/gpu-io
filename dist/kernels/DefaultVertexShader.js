"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Vertex shader for fullscreen quad.
exports.default = "\nprecision highp float;\n\nattribute vec2 aPosition;\n\nuniform vec2 u_scale;\nuniform vec2 u_translation;\n\nvarying vec2 vUV_local;\nvarying vec2 vUV;\n\nvoid main() {\n\t// Calculate UV coordinates of current rendered object.\n\tvUV_local = 0.5 * (aPosition + 1.0);\n\t// Apply transformations.\n\tvec2 position = u_scale * aPosition + u_translation;\n\t// Calculate a global uv for the viewport.\n\tvUV = 0.5 * (position + 1.0);\n\t// Calculate vertex position.\n\tgl_Position = vec4(position, 0, 1);\n}\n";
//# sourceMappingURL=DefaultVertexShader.js.map