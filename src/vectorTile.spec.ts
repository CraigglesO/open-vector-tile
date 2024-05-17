/**
 * A BBOX is defined in lon-lat space and helps with zooming motion to see the entire line or polygon
 */
export type BBox = [left: number, bottom: number, right: number, top: number];
/**
 * A BBOX is defined in lon-lat space and helps with zooming motion to see the entire 3D line or polygon
 */
export type BBox3D = [
  left: number,
  bottom: number,
  right: number,
  top: number,
  near: number,
  far: number,
];

/**
 * Value is the old type used by Mapbox vector tiles. Properties can not be nested, so we only
 * support string, number, boolean, and null
 */
export type Value = string | number | boolean | null;

/**
 * A Mapbox Properties is a storage structure for the vector feature. keys are strings, values are
 * any basic type of Value
 */
export type Properties = Record<string, Value>;

/**
 * The new OpenVectorTile type can create complex nested objects.
 */
export type Shape = Record<string, OValue>;
/**
 * The new OpenVectorTile type can create complex nested objects.
 * May either be a string, number, boolean, null, an array of those types, or an object of those types
 * Object keys are always strings, values can be any basic type, an array, or a nested object.
 */
export type OValue = string | number | boolean | null | OValue[] | { [key: string]: OValue };

/**
 * Some components inside the OpenVectorTile spec require the starting with an object of key-value pairs.
 * `MValues`and `feature properties` are such a case.
 */
export type OProperties = Record<string, OValue>;

/**
 * Mapbox Vector Feature types.
 */
export type OldVectorFeatureType =
  | 1 // point[]
  | 2 // line[]
  | 3 // polygon
  | 4; // polygon[]

/**
 * Open Vector Tile Feature types.
 */
export type VectorFeatureType =
  | 1 // POINT[]
  | 2 // LINE[]
  | 3 // POLYGON[]
  | 4 // 3D_POINT[]
  | 5 // 3D_LINE[]
  | 6; // 3D_POLYGON[]

/**
 * Open Vector Spec can be an x,y but also may contain an MValue if the geometry is a line or polygon
 */
export interface Point {
  x: number;
  y: number;
  m?: OValue;
}
/**
 * Open Vector Spec can be an x,y,z but also may contain an MValue if the geometry is a line or polygon
 */
export interface Point3D {
  x: number;
  y: number;
  z: number;
  m?: OValue;
}

/**
 * A set of points
 */
export type VectorPoints = Point[];
/**
 * A set of 3D points
 */
export type VectorPoints3D = Point3D[];
/**
 * A set of points
 */
export type VectorLine = Point[];
/**
 * A set of 3D points
 */
export type VectorLine3D = Point3D[];
/**
 * A set of lines
 */
export type VectorLines = VectorLine[];
/**
 * A set of 3D lines
 */
export type VectorLines3D = VectorLine3D[];
/**
 * A set of polygons
 */
export type VectorPoly = Point[][];
/**
 * A set of 3D polygons
 */
export type VectorPoly3D = Point3D[][];
/**
 * A set of multiple polygons
 */
export type VectorMultiPoly = Point[][][];
/**
 * A set of multiple 3D polygons
 */
export type VectorMultiPoly3D = Point3D[][][];
/**
 * An enumeration of all the geometry types
 */
export type VectorGeometry =
  | VectorPoints
  | VectorLines
  | VectorPoly
  | VectorMultiPoly
  | VectorPoints3D
  | VectorLines3D
  | VectorPoly3D
  | VectorMultiPoly3D;
