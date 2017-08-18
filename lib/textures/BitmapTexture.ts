import {Single2DTexture} from "@awayjs/graphics";
import {BitmapData} from "@as3web/flash";

import {Texture2DBase} from "./Texture2DBase";

export class BitmapTexture extends Texture2DBase
{
	private _bitmapData:BitmapData;

	constructor(bitmapData:BitmapData, generateMipmaps:boolean = true)
	{
		super(new Single2DTexture(bitmapData.adaptee));

		this.bitmapData = this._bitmapData;
	}

	public get bitmapData():BitmapData
	{
		return this._bitmapData;
	}

	public set bitmapData(value:BitmapData)
	{
		if (this._bitmapData == value)
			return;

		this._bitmapData = value;
	}
}