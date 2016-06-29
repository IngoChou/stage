import { BitmapImage2D } from "@awayjs/core/lib/image/BitmapImage2D";
import { Rectangle } from "@awayjs/core/lib/geom/Rectangle";
import { CubeTextureWebGL } from "../base/CubeTextureWebGL";
import { IContextGL } from "../base/IContextGL";
import { IndexBufferWebGL } from "../base/IndexBufferWebGL";
import { ProgramWebGL } from "../base/ProgramWebGL";
import { TextureBaseWebGL } from "../base/TextureBaseWebGL";
import { TextureWebGL } from "../base/TextureWebGL";
import { VertexBufferWebGL } from "../base/VertexBufferWebGL";
export declare class ContextWebGL implements IContextGL {
    private _blendFactorDictionary;
    private _drawModeDictionary;
    private _compareModeDictionary;
    private _stencilActionDictionary;
    private _textureIndexDictionary;
    private _textureTypeDictionary;
    private _wrapDictionary;
    private _filterDictionary;
    private _mipmapFilterDictionary;
    private _vertexBufferPropertiesDictionary;
    private _container;
    private _width;
    private _height;
    private _drawing;
    private _blendEnabled;
    private _blendSourceFactor;
    private _blendDestinationFactor;
    private _standardDerivatives;
    private _samplerStates;
    static MAX_SAMPLERS: number;
    _gl: WebGLRenderingContext;
    _currentProgram: ProgramWebGL;
    private _currentArrayBuffer;
    private _activeTexture;
    private _stencilCompareMode;
    private _stencilCompareModeBack;
    private _stencilCompareModeFront;
    private _stencilReferenceValue;
    private _stencilReadMask;
    private _separateStencil;
    readonly container: HTMLElement;
    readonly standardDerivatives: boolean;
    constructor(canvas: HTMLCanvasElement);
    gl(): WebGLRenderingContext;
    clear(red?: number, green?: number, blue?: number, alpha?: number, depth?: number, stencil?: number, mask?: number): void;
    configureBackBuffer(width: number, height: number, antiAlias: number, enableDepthAndStencil?: boolean): void;
    createCubeTexture(size: number, format: string, optimizeForRenderToTexture: boolean, streamingLevels?: number): CubeTextureWebGL;
    createIndexBuffer(numIndices: number): IndexBufferWebGL;
    createProgram(): ProgramWebGL;
    createTexture(width: number, height: number, format: string, optimizeForRenderToTexture: boolean, streamingLevels?: number): TextureWebGL;
    createVertexBuffer(numVertices: number, dataPerVertex: number): VertexBufferWebGL;
    dispose(): void;
    drawToBitmapImage2D(destination: BitmapImage2D): void;
    drawIndices(mode: string, indexBuffer: IndexBufferWebGL, firstIndex?: number, numIndices?: number): void;
    drawVertices(mode: string, firstVertex?: number, numVertices?: number): void;
    present(): void;
    setBlendFactors(sourceFactor: string, destinationFactor: string): void;
    setColorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void;
    setCulling(triangleFaceToCull: string, coordinateSystem?: string): void;
    setDepthTest(depthMask: boolean, passCompareMode: string): void;
    setStencilActions(triangleFace?: string, compareMode?: string, actionOnBothPass?: string, actionOnDepthFail?: string, actionOnDepthPassStencilFail?: string, coordinateSystem?: string): void;
    setStencilReferenceValue(referenceValue: number, readMask: number, writeMask: number): void;
    setProgram(program: ProgramWebGL): void;
    static modulo: number;
    setProgramConstantsFromArray(programType: number, data: Float32Array): void;
    setScissorRectangle(rectangle: Rectangle): void;
    setTextureAt(sampler: number, texture: TextureBaseWebGL): void;
    setSamplerStateAt(sampler: number, wrap: string, filter: string, mipfilter: string): void;
    setVertexBufferAt(index: number, buffer: VertexBufferWebGL, bufferOffset?: number, format?: number): void;
    setRenderToTexture(target: TextureBaseWebGL, enableDepthAndStencil?: boolean, antiAlias?: number, surfaceSelector?: number): void;
    setRenderToBackBuffer(): void;
    private updateBlendStatus();
    private translateTriangleFace(triangleFace, coordinateSystem);
}
export declare class VertexBufferProperties {
    size: number;
    type: number;
    normalized: boolean;
    constructor(size: number, type: number, normalized: boolean);
}
