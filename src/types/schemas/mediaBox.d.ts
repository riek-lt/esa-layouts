/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Rotation = {
	type: 'image' | 'prize' | 'prize_generic';
	id: string;
	mediaUUID: string;
	seconds: number;
}[];
export type MediaActive = {
	type: TypesAll;
	id: string;
	mediaUUID: string;
	index: number;
	timestamp: number;
	timeElapsed: number;
} | null;
export type TypesAll = 'image' | 'prize' | 'prize_generic' | 'donation' | 'subscription' | 'cheer' | 'merch';

export interface MediaBox {
	rotation: Rotation;
	rotationApplicable: Rotation;
	alertQueue: {
		type: 'donation' | 'subscription' | 'cheer' | 'merch';
		id: string;
		data:
			| {
					name: string;
					amount: number;
					comment?: string;
			  }
			| {
					systemMsg: string;
					message?: string;
			  }
			| {
					name: string;
					amount: number;
					message: string;
			  }
			| {
					user: string;
					productName: string;
					imgURL: string;
			  };
	}[];
	paused: MediaActive;
	current: MediaActive;
	lastIndex: number;
}
