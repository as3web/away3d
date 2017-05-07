import { NamedAssetBase } from "../../library/assets/NamedAssetBase";
import { Vector3D, Matrix3D, MathConsts } from "@awayjs/core";
import { IDisplayObjectAdapter, DisplayObject } from "@awayjs/scene"


/**
 * Dispatched when the position of the 3d object changes.
 *
 * @eventType away3d.events.Object3DEvent

[Event(name="positionChanged", type="away3d.events.Object3DEvent")]


 * Dispatched when the scale of the 3d object changes.
 *
 * @eventType away3d.events.Object3DEvent

[Event(name="scaleChanged", type="away3d.events.Object3DEvent")]


 * Dispatched when the rotation of the 3d object changes.
 *
 * @eventType away3d.events.Object3DEvent

[Event(name="rotationChanged", type="away3d.events.Object3DEvent")]

 * Object3D provides a base class for any 3D object that has a (local) transformation.<br/><br/>
 *
 * Standard Transform:
 * <ul>
 *     <li> The standard order for transformation is [parent transform] * (Translate+Pivot) * (Rotate) * (-Pivot) * (Scale) * [child transform] </li>
 *     <li> This is the order of matrix multiplications, left-to-right. </li>
 *     <li> The order of transformation is right-to-left, however!
 *          (Scale) happens before (-Pivot) happens before (Rotate) happens before (Translate+Pivot)
 *          with no pivot, the above transform works out to [parent transform] * Translate * Rotate * Scale * [child transform]
 *          (Scale) happens before (Rotate) happens before (Translate) </li>
 *     <li> This is based on code in updateTransform and ObjectContainer3D.updateSceneTransform(). </li>
 *     <li> Matrix3D prepend = operator on rhs - e.g. transform' = transform * rhs; </li>
 *     <li> Matrix3D append =  operator on lhr - e.g. transform' = lhs * transform; </li>
 * </ul>
 *
 * To affect Scale:
 * <ul>
 *     <li> set scaleX/Y/Z directly, or call scale(delta) </li>
 * </ul>
 *
 * To affect Pivot:
 * <ul>
 *     <li> set pivotPoint directly, or call movePivot() </li>
 * </ul>
 *
 * To affect Rotate:
 * <ul>
 *    <li> set rotationX/Y/Z individually (using degrees), set eulers [all 3 angles] (using radians), or call rotateTo()</li>
 *    <li> call pitch()/yaw()/roll()/rotate() to add an additional rotation *before* the current transform.
 *         rotationX/Y/Z will be reset based on these operations. </li>
 * </ul>
 *
 * To affect Translate (post-rotate translate):
 *
 * <ul>
 *    <li> set x/y/z/position or call moveTo(). </li>
 *    <li> call translate(), which modifies x/y/z based on a delta vector. </li>
 *    <li> call moveForward()/moveBackward()/moveLeft()/moveRight()/moveUp()/moveDown()/translateLocal() to add an
 *         additional translate *before* the current transform. x/y/z will be reset based on these operations. </li>
 * </ul>
 */

export class Object3D extends NamedAssetBase implements IDisplayObjectAdapter
{

	public isBlockedByScript():boolean{
		return false;
	}

	public isVisibilityByScript():boolean{
		return false;
	}

	public freeFromScript():void{

	}

	public get adaptee():DisplayObject{
		return (<DisplayObject>this._adaptee);
	}
	public set adaptee(value:DisplayObject){
		this._adaptee=value;
	}

	/**
	 * An object that can contain any extra data.
	 */
	public extra:any;

	/**
	 * Defines the x coordinate of the 3d object relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get x():number
	{
		return this.adaptee.x;
	}

	public set x(val:number)
	{
		this.adaptee.x=val;
	}

	/**
	 * Defines the y coordinate of the 3d object relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get y():number
	{
		return this.adaptee.y;
	}

	public set y(val:number)
	{
		this.adaptee.y=val;
	}

	/**
	 * Defines the z coordinate of the 3d object relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get z():number
	{
		return this.adaptee.z;
	}

	public set z(val:number)
	{
		this.adaptee.z=val;
	}

	/**
	 * Defines the euler angle of rotation of the 3d object around the x-axis, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get rotationX():number
	{
		return this.adaptee.rotationX;
	}

	public set rotationX(val:number)
	{
		this.adaptee.rotationX=val;
	}

	/**
	 * Defines the euler angle of rotation of the 3d object around the y-axis, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get rotationY():number
	{
		return this.adaptee.rotationY;
	}

	public set rotationY(val:number)
	{
		this.adaptee.rotationY=val;
	}

	/**
	 * Defines the euler angle of rotation of the 3d object around the z-axis, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get rotationZ():number
	{
		return this.adaptee.rotationZ;
	}

	public set rotationZ(val:number)
	{
		this.adaptee.rotationZ=val;
	}

	/**
	 * Defines the scale of the 3d object along the x-axis, relative to local coordinates.
	 */
	public get scaleX():number
	{
		return this.adaptee.scaleX;
	}

	public set scaleX(val:number)
	{
		this.adaptee.scaleX=val;
	}

	/**
	 * Defines the scale of the 3d object along the y-axis, relative to local coordinates.
	 */
	public get scaleY():number
	{
		return this.adaptee.scaleY;
	}

	public set scaleY(val:number)
	{
		this.adaptee.scaleY=val;
	}

	/**
	 * Defines the scale of the 3d object along the z-axis, relative to local coordinates.
	 */
	public get scaleZ():number
	{
		return this.adaptee.scaleZ;
	}

	public set scaleZ(val:number)
	{
		this.adaptee.scaleZ=val;
	}

	/**
	 * Defines the rotation of the 3d object as a <code>Vector3D</code> object containing euler angles for rotation around x, y and z axis.
	 */
	public get eulers():Vector3D
	{
		return this.adaptee.eulers;
	}

	public set eulers(value:Vector3D)
	{
		this.adaptee.eulers=value;
	}

	/**
	 * The transformation of the 3d object, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get transform():Matrix3D
	{
		return this.adaptee.transform.matrix3D;
	}

	public set transform(val:Matrix3D)
	{

		this.adaptee.transform.matrix3D=val;
	}

	/**
	 * Defines the local point around which the object rotates.
	 */
	public get pivotPoint():Vector3D
	{
		//todo
		return null;
	}

	public set pivotPoint(pivot:Vector3D)
	{
		//todo
	}

	/**
	 * Defines the position of the 3d object, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get position():Vector3D
	{
		return this.adaptee.transform.position;
	}

	public set position(value:Vector3D)
	{
		//todo
		//this.adaptee.transform.position=value;
	}

	/**
	 * Defines the position of the 3d object, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 * @param v the destination Vector3D
	 * @return
	 */
	public getPosition(v:Vector3D = null):Vector3D {
		//todo
		return null;
	}

	/**
	 *
	 */
	public get forwardVector():Vector3D
	{
		//todo
		return null;//Matrix3DUtils.getForward(this.transform);
	}

	/**
	 *
	 */
	public get rightVector():Vector3D
	{
		//todo
		return null;//Matrix3DUtils.getRight(this.transform);
	}

	/**
	 *
	 */
	public get upVector():Vector3D
	{
		//todo
		return null;//Matrix3DUtils.getUp(this.transform);
	}

	/**
	 *
	 */
	public get backVector():Vector3D
	{
		//todo
		return null;
	}

	/**
	 *
	 */
	public get leftVector():Vector3D
	{
		//todo
		return null;
	}

	/**
	 *
	 */
	public get downVector():Vector3D
	{
		//todo
		return null;
	}

	/**
	 * Creates an Object3D object.
	 */
	constructor(){
		super();
	}

	/**
	 * Appends a uniform scale to the current transformation.
	 * @param value The amount by which to scale.
	 */
	public scale(value:number):void
	{
		//todo
		// this.adaptee.scale;
	}

	/**
	 * Moves the 3d object forwards along it's local z axis
	 *
	 * @param    distance    The length of the movement
	 */
	public moveForward(distance:number):void
	{
		//todo
		//this.translateLocal(Vector3D.Z_AXIS, distance);
	}

	/**
	 * Moves the 3d object backwards along it's local z axis
	 *
	 * @param    distance    The length of the movement
	 */
	public moveBackward(distance:number):void
	{
		//todo
		//this.translateLocal(Vector3D.Z_AXIS, -distance);
	}

	/**
	 * Moves the 3d object backwards along it's local x axis
	 *
	 * @param    distance    The length of the movement
	 */
	public moveLeft(distance:number):void
	{
		//todo
		//this.translateLocal(Vector3D.X_AXIS, -distance);
	}

	/**
	 * Moves the 3d object forwards along it's local x axis
	 *
	 * @param    distance    The length of the movement
	 */
	public moveRight(distance:number):void
	{
		//todo
		//this.translateLocal(Vector3D.X_AXIS, distance);
	}

	/**
	 * Moves the 3d object forwards along it's local y axis
	 *
	 * @param    distance    The length of the movement
	 */
	public moveUp(distance:number):void
	{
		//todo
		//this.translateLocal(Vector3D.Y_AXIS, distance);
	}

	/**
	 * Moves the 3d object backwards along it's local y axis
	 *
	 * @param    distance    The length of the movement
	 */
	public moveDown(distance:number):void
	{
		//todo
		//this.translateLocal(Vector3D.Y_AXIS, -distance);
	}

	/**
	 * Moves the 3d object directly to a point in space
	 *
	 * @param    dx        The amount of movement along the local x axis.
	 * @param    dy        The amount of movement along the local y axis.
	 * @param    dz        The amount of movement along the local z axis.
	 */
	public moveTo(dx:number, dy:number, dz:number):void
	{
		//todo
	}

	/**
	 * Moves the local point around which the object rotates.
	 *
	 * @param    dx        The amount of movement along the local x axis.
	 * @param    dy        The amount of movement along the local y axis.
	 * @param    dz        The amount of movement along the local z axis.
	 */
	public movePivot(dx:number, dy:number, dz:number):void
	{
		this.adaptee.movePivot(dx, dy, dz);
	}

	/**
	 * Moves the 3d object along a vector by a defined length
	 *
	 * @param    axis        The vector defining the axis of movement
	 * @param    distance    The length of the movement
	 */
	public translate(axis:Vector3D, distance:number):void
	{
		//todo
	}

	/**
	 * Moves the 3d object along a vector by a defined length
	 *
	 * @param    axis        The vector defining the axis of movement
	 * @param    distance    The length of the movement
	 */
	public translateLocal(axis:Vector3D, distance:number):void
	{
		//todo
	}

	/**
	 * Rotates the 3d object around it's local x-axis
	 *
	 * @param    angle        The amount of rotation in degrees
	 */
	public pitch(angle:number):void
	{
		//todo
	}

	/**
	 * Rotates the 3d object around it's local y-axis
	 *
	 * @param    angle        The amount of rotation in degrees
	 */
	public yaw(angle:number):void
	{
		//todo
	}

	/**
	 * Rotates the 3d object around it's local z-axis
	 *
	 * @param    angle        The amount of rotation in degrees
	 */
	public roll(angle:number):void
	{
		//todo
	}

	public clone(newAdaptee:DisplayObject=null):Object3D
	{
		//todo
		return null;
	}

	/**
	 * Rotates the 3d object directly to a euler angle
	 *
	 * @param    ax        The angle in degrees of the rotation around the x axis.
	 * @param    ay        The angle in degrees of the rotation around the y axis.
	 * @param    az        The angle in degrees of the rotation around the z axis.
	 */
	public rotateTo(ax:number, ay:number, az:number):void
	{
		//todo
	}

	/**
	 * Rotates the 3d object around an axis by a defined angle
	 *
	 * @param    axis        The vector defining the axis of rotation
	 * @param    angle        The amount of rotation in degrees
	 */
	public rotate(axis:Vector3D, angle:number):void
	{
		//todo
	}

	/**
	 * Rotates the 3d object around to face a point defined relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 *
	 * @param    target        The vector defining the point to be looked at
	 * @param    upAxis        An optional vector used to define the desired up orientation of the 3d object after rotation has occurred
	 */
	public lookAt(target:Vector3D, upAxis:Vector3D = null):void
	{
		//todo
	}

	/**
	 * Cleans up any resources used by the current object.
	 */
	public dispose():void
	{
		//todo
	}

	/**
	 * @inheritDoc
	 */
	public disposeAsset():void
	{
		//todo
	}

	public get zOffset():number
	{
		return this.adaptee.zOffset;
	}

	public set zOffset(value:number)
	{
		this.adaptee.zOffset=value;
	}
}

