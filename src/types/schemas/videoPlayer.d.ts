/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface VideoPlayer {
	playlist: {
		sum?: string;
		commercial: number;
	}[];
	current: string | null;
	playing: boolean;
	plays: {
		[k: string]: number;
	};
}
