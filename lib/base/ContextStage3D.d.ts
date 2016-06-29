import { BitmapImage2D } from "@awayjs/core/lib/image/BitmapImage2D";
import { Rectangle } from "@awayjs/core/lib/geom/Rectangle";
import { CubeTextureFlash } from "../base/CubeTextureFlash";
import { IContextGL } from "../base/IContextGL";
import { IndexBufferFlash } from "../base/IndexBufferFlash";
import { ProgramFlash } from "../base/ProgramFlash";
import { TextureFlash } from "../base/TextureFlash";
import { ResourceBaseFlash } from "../base/ResourceBaseFlash";
import { VertexBufferFlash } from "../base/VertexBufferFlash";
export declare class ContextStage3D implements IContextGL {
    static contexts: Object;
    _iDriverInfo: any;
    private _container;
    private _width;
    private _height;
    private _cmdStream;
    private _errorCheckingEnabled;
    private _resources;
    private _oldCanvas;
    private _oldParent;
    static debug: boolean;
    static logStream: boolean;
    _iCallback: (context: IContextGL) => void;
    readonly container: HTMLElement;
    readonly driverInfo: void;
    errorCheckingEnabled: boolean;
    constructor(container: HTMLCanvasElement, callback: (context: IContextGL) => void);
    _iAddResource(resource: ResourceBaseFlash): void;
    _iRemoveResource(resource: ResourceBaseFlash): void;
    createTexture(width: number, height: number, format: string, optimizeForRenderToTexture: boolean, streamingLevels?: number): TextureFlash;
    createCubeTexture(size: number, format: string, optimizeForRenderToTexture: boolean, streamingLevels?: number): CubeTextureFlash;
    setTextureAt(sampler: number, texture: ResourceBaseFlash): void;
    setSamplerStateAt(sampler: number, wrap: string, filter: string, mipfilter: string): void;
    setStencilActions(triangleFace?: string, compareMode?: string, actionOnBothPass?: string, actionOnDepthFail?: string, actionOnDepthPassStencilFail?: string, coordinateSystem?: string): void;
    setStencilReferenceValue(referenceValue: number, readMask?: number, writeMask?: number): void;
    setCulling(triangleFaceToCull: string, coordinateSystem?: string): void;
    drawIndices(mode: string, indexBuffer: IndexBufferFlash, firstIndex?: number, numIndices?: number): void;
    drawVertices(mode: string, firstVertex?: number, numVertices?: number): void;
    setProgramConstantsFromArray(programType: number, data: Float32Array): void;
    setProgram(program: ProgramFlash): void;
    present(): void;
    clear(red?: number, green?: number, blue?: number, alpha?: number, depth?: number, stencil?: number, mask?: number): void;
    createProgram(): ProgramFlash;
    createVertexBuffer(numVertices: number, data32PerVertex: number): VertexBufferFlash;
    createIndexBuffer(numIndices: number): IndexBufferFlash;
    configureBackBuffer(width: number, height: number, antiAlias: number, enableDepthAndStencil?: boolean): void;
    drawToBitmapImage2D(destination: BitmapImage2D): void;
    setVertexBufferAt(index: number, buffer: VertexBufferFlash, bufferOffset?: number, format?: number): void;
    setColorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void;
    setBlendFactors(sourceFactor: string, destinationFactor: string): void;
    setRenderToTexture(target: ResourceBaseFlash, enableDepthAndStencil?: boolean, antiAlias?: number, surfaceSelector?: number): void;
    setRenderToBackBuffer(): void;
    setScissorRectangle(rectangle: Rectangle): void;
    setDepthTest(depthMask: boolean, passCompareMode: string): void;
    dispose(): void;
    addStream(stream: string): void;
    execute(): number;
}
