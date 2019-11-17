import { LoadingManager } from 'three';

/**
 * @author Kyle-Larson https://github.com/Kyle-Larson
 * @author Takahiro https://github.com/takahirox
 * @author Lewy Blue https://github.com/looeee
 * @author Leonard Grosoli https://github.com/TheRealSyler
 *
 * Loader loads FBX file and generates Group representing FBX scene.
 * Requires FBX file to be >= 7.0 and in ASCII or >= 6400 in Binary format
 * Versions lower than this may load but will probably have errors
 *
 * Needs Support:
 *  Morph normals / blend shape normals
 *
 * FBX format references:
 *  https://wiki.blender.org/index.php/User:Mont29/Foundation/FBX_File_Structure
 *  http://help.autodesk.com/view/FBX/2017/ENU/?guid=__cpp_ref_index_html (C++ SDK reference)
 *
 *  Binary format specification:
 *      https://code.blender.org/2013/08/fbx-binary-file-format-specification/
 */
export declare class FBXLoader {
  constructor(manager?: LoadingManager);
  load(
    url: string,
    onLoad?: (response: string | ArrayBuffer) => void,
    onProgress?: (request: ProgressEvent) => void,
    onError?: (event: ErrorEvent) => void
  ): any;
  parse(FBXBuffer: string | ArrayBuffer, path: string): any;
}
