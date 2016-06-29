import { BitmapImage2D } from "@awayjs/core/lib/image/BitmapImage2D";
import { Rectangle } from "@awayjs/core/lib/geom/Rectangle";
import { IContextGL } from "../base/IContextGL";
import { IIndexBuffer } from "../base/IIndexBuffer";
import { ICubeTexture } from "../base/ICubeTexture";
import { ITextureBase } from "../base/ITextureBase";
import { IndexBufferSoftware } from "../base/IndexBufferSoftware";
import { VertexBufferSoftware } from "../base/VertexBufferSoftware";
import { TextureSoftware } from "../base/TextureSoftware";
import { ProgramSoftware } from "../base/ProgramSoftware";
import { SoftwareSamplerState } from "../base/SoftwareSamplerState";
export declare class ContextSoftware implements IContextGL {
    private _canvas;
    static MAX_SAMPLERS: number;
    private _backBufferRect;
    private _backBufferWidth;
    private _backBufferHeight;
    private _backBufferColor;
    private _frontBuffer;
    private _zbuffer;
    private _zbufferClear;
    private _colorClearUint8;
    private _colorClearUint32;
    private _cullingMode;
    private _blendSource;
    private _blendDestination;
    private _colorMaskR;
    private _colorMaskG;
    private _colorMaskB;
    private _colorMaskA;
    private _writeDepth;
    private _depthCompareMode;
    private _program;
    private _screenMatrix;
    private _frontBufferMatrix;
    private _bboxMin;
    private _bboxMax;
    private _clamp;
    _samplerStates: SoftwareSamplerState[];
    _textures: Array<TextureSoftware>;
    _vertexBuffers: Array<VertexBufferSoftware>;
    _vertexBufferOffsets: Array<number>;
    _vertexBufferFormats: Array<number>;
    _fragmentConstants: Float32Array;
    _vertexConstants: Float32Array;
    private _antialias;
    constructor(canvas: HTMLCanvasElement);
    readonly frontBuffer: BitmapImage2D;
    readonly container: HTMLElement;
    clear(red?: number, green?: number, blue?: number, alpha?: number, depth?: number, stencil?: number, mask?: number): void;
    configureBackBuffer(width: number, height: number, antiAlias: number, enableDepthAndStencil: boolean): void;
    createCubeTexture(size: number, format: string, optimizeForRenderToTexture: boolean, streamingLevels: number): ICubeTexture;
    createIndexBuffer(numIndices: number): IIndexBuffer;
    createProgram(): ProgramSoftware;
    createTexture(width: number, height: number, format: string, optimizeForRenderToTexture: boolean, streamingLevels: number): TextureSoftware;
    createVertexBuffer(numVertices: number, dataPerVertex: number): VertexBufferSoftware;
    dispose(): void;
    setBlendFactors(sourceFactor: string, destinationFactor: string): void;
    setColorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void;
    setStencilActions(triangleFace: string, compareMode: string, actionOnBothPass: string, actionOnDepthFail: string, actionOnDepthPassStencilFail: string, coordinateSystem: string): void;
    setStencilReferenceValue(referenceValue: number, readMask: number, writeMask: number): void;
    setCulling(triangleFaceToCull: string, coordinateSystem: string): void;
    setDepthTest(depthMask: boolean, passCompareMode: string): void;
    setProgram(program: ProgramSoftware): void;
    setProgramConstantsFromArray(programType: number, data: Float32Array): void;
    setTextureAt(sampler: number, texture: TextureSoftware): void;
    setVertexBufferAt(index: number, buffer: VertexBufferSoftware, bufferOffset: number, format: number): void;
    present(): void;
    drawToBitmapImage2D(destination: BitmapImage2D): void;
    drawIndices(mode: string, indexBuffer: IndexBufferSoftware, firstIndex: number, numIndices: number): void;
    drawVertices(mode: string, firstVertex: number, numVertices: number): void;
    setScissorRectangle(rectangle: Rectangle): void;
    setSamplerStateAt(sampler: number, wrap: string, filter: string, mipfilter: string): void;
    setRenderToTexture(target: ITextureBase, enableDepthAndStencil: boolean, antiAlias: number, surfaceSelector: number): void;
    setRenderToBackBuffer(): void;
    private _putPixel(x, y, source, dest);
    clamp(value: number, min?: number, max?: number): number;
    interpolate(min: number, max: number, gradient: number): number;
    private _triangle(position0, position1, position2, varying0, varying1, varying2);
    private _sx;
    private _sy;
    private _u;
    private _barycentric(a, b, c, x, y);
}
export declare class BlendModeSoftware {
    static destinationAlpha(result: Uint8ClampedArray, dest: Uint8ClampedArray, source: Uint8ClampedArray): void;
    static destinationColor(result: Uint8ClampedArray, dest: Uint8ClampedArray, source: Uint8ClampedArray): void;
    static zero(result: Uint8ClampedArray, dest: Uint8ClampedArray, source: Uint8ClampedArray): void;
    static one(result: Uint8ClampedArray, dest: Uint8ClampedArray, source: Uint8ClampedArray): void;
    static oneMinusDestinationAlpha(result: Uint8ClampedArray, dest: Uint8ClampedArray, source: Uint8ClampedArray): void;
    static oneMinusDestinationColor(result: Uint8ClampedArray, dest: Uint8ClampedArray, source: Uint8ClampedArray): void;
    static oneMinusSourceAlpha(result: Uint8ClampedArray, dest: Uint8ClampedArray, source: Uint8ClampedArray): void;
    static oneMinusSourceColor(result: Uint8ClampedArray, dest: Uint8ClampedArray, source: Uint8ClampedArray): void;
    static sourceAlpha(result: Uint8ClampedArray, dest: Uint8ClampedArray, source: Uint8ClampedArray): void;
    static sourceColor(result: Uint8ClampedArray, dest: Uint8ClampedArray, source: Uint8ClampedArray): void;
}
export declare class DepthCompareModeSoftware {
    static always(fragDepth: number, currentDepth: number): boolean;
    static equal(fragDepth: number, currentDepth: number): boolean;
    static greater(fragDepth: number, currentDepth: number): boolean;
    static greaterEqual(fragDepth: number, currentDepth: number): boolean;
    static less(fragDepth: number, currentDepth: number): boolean;
    static lessEqual(fragDepth: number, currentDepth: number): boolean;
    static never(fragDepth: number, currentDepth: number): boolean;
    static notEqual(fragDepth: number, currentDepth: number): boolean;
}
