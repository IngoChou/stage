import {IVertexBuffer} from "../base/IVertexBuffer";

import {ContextFlash} from "./ContextFlash";
import {OpCodes} from "./OpCodes";
import {ResourceBaseFlash} from "./ResourceBaseFlash";

export class VertexBufferFlash extends ResourceBaseFlash implements IVertexBuffer
{
	private _context:ContextFlash;
	private _numVertices:number;
	private _dataPerVertex:number;

	constructor(context:ContextFlash, numVertices:number, dataPerVertex:number)
	{
		super();

		this._context = context;
		this._numVertices = numVertices;
		this._dataPerVertex = dataPerVertex;
		this._context.addStream(String.fromCharCode(OpCodes.initVertexBuffer, dataPerVertex + OpCodes.intMask) + numVertices.toString() + ",");
		this._pId = this._context.execute();
		this._context._iAddResource(this);
	}

	public uploadFromArray(data:number[], startVertex:number, numVertices:number):void
	{
		this._context.addStream(String.fromCharCode(OpCodes.uploadArrayVertexBuffer, this._pId + OpCodes.intMask) + data.join() + "#" + [startVertex, numVertices].join() + ",");
		this._context.execute();
	}

	public uploadFromByteArray(data:ArrayBuffer, startVertex:number, numVertices:number):void
	{

	}

	public get numVertices():number
	{
		return this._numVertices;
	}

	public get dataPerVertex():number
	{
		return this._dataPerVertex;
	}

	public dispose():void
	{
		this._context.addStream(String.fromCharCode(OpCodes.disposeVertexBuffer, this._pId + OpCodes.intMask));
		this._context.execute();
		this._context._iRemoveResource(this);

		this._context = null;
	}
}