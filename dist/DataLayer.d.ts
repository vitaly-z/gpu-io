export declare type DataArrayType = Uint8Array;
export declare type DataLayerBuffer = {
    texture: WebGLTexture;
    framebuffer?: WebGLFramebuffer;
};
export declare class DataLayer {
    private bufferIndex;
    readonly numBuffers: number;
    private readonly buffers;
    private readonly gl;
    private readonly errorCallback;
    private width;
    private height;
    private readonly glInternalFormat;
    private readonly glFormat;
    private readonly glType;
    private readonly writable;
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, options: {
        width: number;
        height: number;
        glInternalFormat: number;
        glFormat: number;
        glType: number;
        data?: DataArrayType;
    }, errorCallback: (message: string) => void, numBuffers: number, writable: boolean);
    private initBuffers;
    getCurrentStateTexture(): WebGLTexture;
    getLastStateTexture(): WebGLTexture;
    setAsRenderTarget(): void;
    resize(width: number, height: number, data?: DataArrayType): void;
    private destroyBuffers;
    destroy(): void;
}
