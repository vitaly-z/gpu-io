import {
	FLOAT_1D_UNIFORM,
	FLOAT_2D_UNIFORM,
	FLOAT_3D_UNIFORM,
	FLOAT_4D_UNIFORM,
	INT_1D_UNIFORM,
	INT_2D_UNIFORM,
	INT_3D_UNIFORM,
	INT_4D_UNIFORM,
	FLOAT_TYPE,
	INT_TYPE,
} from './constants';
import { DataLayer } from './DataLayer';

export type UniformDataType = typeof FLOAT_TYPE | typeof INT_TYPE;
export type UniformValueType = number | [number] | [number, number] | [number, number, number] | [number, number, number, number];
type UniformType = 
	typeof FLOAT_1D_UNIFORM |
	typeof FLOAT_2D_UNIFORM |
	typeof FLOAT_3D_UNIFORM |
	typeof FLOAT_4D_UNIFORM |
	typeof INT_1D_UNIFORM |
	typeof INT_2D_UNIFORM |
	typeof INT_3D_UNIFORM |
	typeof INT_4D_UNIFORM;
type Uniform = { 
	location: WebGLUniformLocation,
	type: UniformType,
};

export class GPUProgram {
	private readonly gl: WebGLRenderingContext | WebGL2RenderingContext;
	private readonly errorCallback: (message: string) => void;
	readonly program!: WebGLProgram;
	private readonly uniforms: { [ key: string]: Uniform } = {};

	constructor(
		gl: WebGLRenderingContext | WebGL2RenderingContext,
		errorCallback: (message: string) => void,
		vertexShader: WebGLShader,
		fragmentShader: WebGLShader,
		uniforms?: {
			name: string,
			value: UniformValueType,
			dataType: UniformDataType,
		}[],
	) {
		this.gl = gl;
		this.errorCallback = errorCallback;

		// Create a program.
		const program = gl.createProgram();
		if (!program) {
			errorCallback('Unable to init gl program.');
			return;
		}

		// Attach the shaders.
		gl.attachShader(program, vertexShader);
		gl.attachShader(program, fragmentShader);

		// Link the program.
		gl.linkProgram(program);
		// Check if it linked.
		const success = gl.getProgramParameter(program, gl.LINK_STATUS);
		if (!success) {
			// Something went wrong with the link.
			errorCallback(`Program failed to link: ${gl.getProgramInfoLog(program)}`);
			return;
		}

		this.program = program;
		uniforms?.forEach(uniform => {
			const { name, value, dataType } = uniform;
			this.setUniform(name, value, dataType);
		});
	}

	private uniformTypeForValue(
		value: number | number[],
		dataType: UniformDataType,
	) {
		if (dataType === FLOAT_TYPE) {
			if (!isNaN(value as number) || (value as number[]).length === 1) {
				return FLOAT_1D_UNIFORM;
			}
			if ((value as number[]).length === 2) {
				return FLOAT_2D_UNIFORM;
			}
			if ((value as number[]).length === 3) {
				return FLOAT_3D_UNIFORM;
			}
			if ((value as number[]).length === 4) {
				return FLOAT_4D_UNIFORM;
			}
			throw new Error(`Invalid uniform value: ${value}`);
		} else if (dataType === INT_TYPE) {
			if (!isNaN(value as number) || (value as number[]).length === 1) {
				return INT_1D_UNIFORM;
			}
			if ((value as number[]).length === 2) {
				return INT_2D_UNIFORM;
			}
			if ((value as number[]).length === 3) {
				return INT_3D_UNIFORM;
			}
			if ((value as number[]).length === 4) {
				return INT_4D_UNIFORM;
			}
			throw new Error(`Invalid uniform value: ${value}`);
		} else {
			throw new Error(`Invalid uniform data type: ${dataType}`);
		}
	}

	setUniform(
		uniformName: string,
		value: UniformValueType,
		dataType: UniformDataType,
	) {
		const { gl, errorCallback, program, uniforms } = this;

		// Set active program.
		gl.useProgram(program);
	
		const type = this.uniformTypeForValue(value, dataType);
		if (!uniforms[uniformName]) {
			// Init uniform if needed.
			const location = gl.getUniformLocation(program, uniformName);
			if (!location) {
				errorCallback(`Could not init uniform ${uniformName}.
Check that uniform is present in shader code, unused uniforms may be removed by compiler.
Also check that uniform type in shader code matches type ${type}.
Error code: ${gl.getError()}.`);
				return;
			}
			uniforms[uniformName] = {
				location,
				type: type,
			}
		}

		const uniform = uniforms[uniformName];
		// Check that types match previously set uniform.
		if (uniform.type != type) {
			throw new Error(`Uniform ${uniformName} cannot change from type ${uniform.type} to type ${type}.`);
		}
		const { location } = uniform;

		// Set uniform.
		// https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/uniform
		switch (type) {
			case FLOAT_1D_UNIFORM:
				gl.uniform1f(location, value as number);
				break;
			case FLOAT_2D_UNIFORM:
				gl.uniform2fv(location, value as number[]);
				break;
			case FLOAT_3D_UNIFORM:
				gl.uniform3fv(location, value as number[]);
				break;
			case FLOAT_4D_UNIFORM:
				gl.uniform4fv(location, value as number[]);
				break;
			case INT_1D_UNIFORM:
				gl.uniform1i(location, value as number);
				break;
			case INT_2D_UNIFORM:
				gl.uniform2iv(location, value as number[]);
				break;
			case INT_3D_UNIFORM:
				gl.uniform3iv(location, value as number[]);
				break;
			case INT_4D_UNIFORM:
				gl.uniform4iv(location, value as number[]);
				break;
			default:
				throw new Error(`Unknown uniform type: ${type}.`);
		}
	};

	destroy() {
	}
}