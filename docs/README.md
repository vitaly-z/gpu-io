webgl-compute

# webgl-compute

## Table of contents

### Classes

- [GPUComposer](classes/GPUComposer.md)
- [GPULayer](classes/GPULayer.md)
- [GPUProgram](classes/GPUProgram.md)

### Variables

- [HALF\_FLOAT](README.md#half_float)
- [FLOAT](README.md#float)
- [UNSIGNED\_BYTE](README.md#unsigned_byte)
- [BYTE](README.md#byte)
- [UNSIGNED\_SHORT](README.md#unsigned_short)
- [SHORT](README.md#short)
- [UNSIGNED\_INT](README.md#unsigned_int)
- [INT](README.md#int)
- [BOOL](README.md#bool)
- [UINT](README.md#uint)
- [NEAREST](README.md#nearest)
- [LINEAR](README.md#linear)
- [CLAMP\_TO\_EDGE](README.md#clamp_to_edge)
- [REPEAT](README.md#repeat)
- [GLSL3](README.md#glsl3)
- [GLSL1](README.md#glsl1)
- [WEBGL2](README.md#webgl2)
- [WEBGL1](README.md#webgl1)
- [EXPERIMENTAL\_WEBGL](README.md#experimental_webgl)
- [PRECISION\_LOW\_P](README.md#precision_low_p)
- [PRECISION\_MEDIUM\_P](README.md#precision_medium_p)
- [PRECISION\_HIGH\_P](README.md#precision_high_p)

### Type Aliases

- [GPULayerArray](README.md#gpulayerarray)
- [GPULayerType](README.md#gpulayertype)
- [GPULayerNumComponents](README.md#gpulayernumcomponents)
- [GPULayerFilter](README.md#gpulayerfilter)
- [GPULayerWrap](README.md#gpulayerwrap)
- [GLSLVersion](README.md#glslversion)
- [GLSLPrecision](README.md#glslprecision)
- [UniformType](README.md#uniformtype)
- [UniformValue](README.md#uniformvalue)
- [UniformParams](README.md#uniformparams)
- [CompileTimeVars](README.md#compiletimevars)
- [ErrorCallback](README.md#errorcallback)

### Functions

- [isWebGL2](README.md#iswebgl2)
- [isWebGL2Supported](README.md#iswebgl2supported)
- [isHighpSupportedInVertexShader](README.md#ishighpsupportedinvertexshader)
- [isHighpSupportedInFragmentShader](README.md#ishighpsupportedinfragmentshader)
- [getVertexShaderMediumpPrecision](README.md#getvertexshadermediumpprecision)
- [getFragmentShaderMediumpPrecision](README.md#getfragmentshadermediumpprecision)

## Variables

### HALF\_FLOAT

• `Const` **HALF\_FLOAT**: ``"HALF_FLOAT"``

Half float data type.

___

### FLOAT

• `Const` **FLOAT**: ``"FLOAT"``

Float data type.

___

### UNSIGNED\_BYTE

• `Const` **UNSIGNED\_BYTE**: ``"UNSIGNED_BYTE"``

Unsigned byte data type.

___

### BYTE

• `Const` **BYTE**: ``"BYTE"``

Byte data type.

___

### UNSIGNED\_SHORT

• `Const` **UNSIGNED\_SHORT**: ``"UNSIGNED_SHORT"``

Unsigned short data type.

___

### SHORT

• `Const` **SHORT**: ``"SHORT"``

Short data type.

___

### UNSIGNED\_INT

• `Const` **UNSIGNED\_INT**: ``"UNSIGNED_INT"``

Unsigned int data type.

___

### INT

• `Const` **INT**: ``"INT"``

Int data type.

___

### BOOL

• `Const` **BOOL**: ``"BOOL"``

Boolean data type (GPUProgram uniforms only).

___

### UINT

• `Const` **UINT**: ``"UINT"``

Unsigned int data type (GPUProgram uniforms only).

___

### NEAREST

• `Const` **NEAREST**: ``"NEAREST"``

Nearest texture filtering.

___

### LINEAR

• `Const` **LINEAR**: ``"LINEAR"``

Linear texture filtering.

___

### CLAMP\_TO\_EDGE

• `Const` **CLAMP\_TO\_EDGE**: ``"CLAMP_TO_EDGE"``

Clamp to edge wrapping (no wrapping).

___

### REPEAT

• `Const` **REPEAT**: ``"REPEAT"``

Repeat/periodic wrapping.

___

### GLSL3

• `Const` **GLSL3**: ``"300 es"``

GLSL version 300 (WebGL2 only).

___

### GLSL1

• `Const` **GLSL1**: ``"100"``

GLSL version 100 (WebGL1 and WebGL2).

___

### WEBGL2

• `Const` **WEBGL2**: ``"webgl2"``

WebGL2 context ID.

___

### WEBGL1

• `Const` **WEBGL1**: ``"webgl"``

WebGL1 context ID.

___

### EXPERIMENTAL\_WEBGL

• `Const` **EXPERIMENTAL\_WEBGL**: ``"experimental-webgl"``

Experimental WebGL context ID.

___

### PRECISION\_LOW\_P

• `Const` **PRECISION\_LOW\_P**: ``"lowp"``

GLSL lowp precision declaration.

___

### PRECISION\_MEDIUM\_P

• `Const` **PRECISION\_MEDIUM\_P**: ``"mediump"``

GLSL mediump precision declaration.

___

### PRECISION\_HIGH\_P

• `Const` **PRECISION\_HIGH\_P**: ``"highp"``

GLSL highp precision declaration.

## Type Aliases

### GPULayerArray

Ƭ **GPULayerArray**: `Float32Array` \| `Uint8Array` \| `Int8Array` \| `Uint16Array` \| `Int16Array` \| `Uint32Array` \| `Int32Array`

GPULayer array types.

___

### GPULayerType

Ƭ **GPULayerType**: typeof [`HALF_FLOAT`](README.md#half_float) \| typeof [`FLOAT`](README.md#float) \| typeof [`UNSIGNED_BYTE`](README.md#unsigned_byte) \| typeof [`BYTE`](README.md#byte) \| typeof [`UNSIGNED_SHORT`](README.md#unsigned_short) \| typeof [`SHORT`](README.md#short) \| typeof [`UNSIGNED_INT`](README.md#unsigned_int) \| typeof [`INT`](README.md#int)

GPULayer data types.

___

### GPULayerNumComponents

Ƭ **GPULayerNumComponents**: ``1`` \| ``2`` \| ``3`` \| ``4``

GPULayer numComponents options.

___

### GPULayerFilter

Ƭ **GPULayerFilter**: typeof [`LINEAR`](README.md#linear) \| typeof [`NEAREST`](README.md#nearest)

GPULayer filter/interpolation types.

___

### GPULayerWrap

Ƭ **GPULayerWrap**: typeof [`REPEAT`](README.md#repeat) \| typeof [`CLAMP_TO_EDGE`](README.md#clamp_to_edge)

GPULayer wrap types.

___

### GLSLVersion

Ƭ **GLSLVersion**: typeof [`GLSL1`](README.md#glsl1) \| typeof [`GLSL3`](README.md#glsl3)

GLSL available versions.

___

### GLSLPrecision

Ƭ **GLSLPrecision**: typeof [`PRECISION_LOW_P`](README.md#precision_low_p) \| typeof [`PRECISION_MEDIUM_P`](README.md#precision_medium_p) \| typeof [`PRECISION_HIGH_P`](README.md#precision_high_p)

GLSL available precision declarations.

___

### UniformType

Ƭ **UniformType**: typeof [`FLOAT`](README.md#float) \| typeof [`INT`](README.md#int) \| typeof [`UINT`](README.md#uint) \| typeof [`BOOL`](README.md#bool)

GPUProgram uniform types.

___

### UniformValue

Ƭ **UniformValue**: `boolean` \| `number` \| `number`[]

GPUProgram uniform values.

___

### UniformParams

Ƭ **UniformParams**: `Object`

GPUProgram uniform parameters.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | [`UniformValue`](README.md#uniformvalue) |
| `type` | [`UniformType`](README.md#uniformtype) |

___

### CompileTimeVars

Ƭ **CompileTimeVars**: `Object`

Object containing compile-time #define variables for GPUProgram fragment shader.

#### Index signature

▪ [key: `string`]: `string`

___

### ErrorCallback

Ƭ **ErrorCallback**: (`message`: `string`) => `void`

#### Type declaration

▸ (`message`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

##### Returns

`void`

## Functions

### isWebGL2

▸ **isWebGL2**(`gl`): `boolean`

Returns whether a WebGL context is WebGL2.
This code is pulled from https://github.com/mrdoob/three.js/blob/master/src/renderers/webgl/WebGLCapabilities.js

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | `WebGLRenderingContext` \| `WebGL2RenderingContext` | WebGL context to test. |

#### Returns

`boolean`

- true if WebGL2 context, else false.

___

### isWebGL2Supported

▸ **isWebGL2Supported**(): `boolean`

Returns whether WebGL2 is supported by the current browser.

#### Returns

`boolean`

- true if WebGL2 is supported, else false.

___

### isHighpSupportedInVertexShader

▸ **isHighpSupportedInVertexShader**(): `boolean`

Detects whether highp precision is supported in vertex shaders in the current browser.

#### Returns

`boolean`

- true is highp is supported in vertex shaders, else false.

___

### isHighpSupportedInFragmentShader

▸ **isHighpSupportedInFragmentShader**(): `boolean`

Detects whether highp precision is supported in fragment shaders in the current browser.

#### Returns

`boolean`

- true is highp is supported in fragment shaders, else false.

___

### getVertexShaderMediumpPrecision

▸ **getVertexShaderMediumpPrecision**(): ``"mediump"`` \| ``"highp"``

Returns the actual precision of mediump inside vertex shader.
From https://webglfundamentals.org/webgl/lessons/webgl-precision-issues.html

#### Returns

``"mediump"`` \| ``"highp"``

- Vertex shader mediump precision.

___

### getFragmentShaderMediumpPrecision

▸ **getFragmentShaderMediumpPrecision**(): ``"mediump"`` \| ``"highp"``

Returns the actual precision of mediump inside fragment shader.
From https://webglfundamentals.org/webgl/lessons/webgl-precision-issues.html

#### Returns

``"mediump"`` \| ``"highp"``

- Fragment shader supported mediump precision.