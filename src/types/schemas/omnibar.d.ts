/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Omnibar {
	rotation: {
		type: 'GenericMsg' | 'UpcomingRun' | 'Prize' | 'Bid' | 'Milestone' | 'MusicTrack';
		id: string;
		props?: Props;
	}[];
	alertQueue: {
		type: 'Tweet' | 'CrowdControl' | 'MiniCredits';
		id: string;
		data?: {
			[k: string]: unknown;
		};
	}[];
	current: {
		type:
			| ('GenericMsg' | 'UpcomingRun' | 'Prize' | 'Bid' | 'Milestone' | 'MusicTrack')
			| ('Tweet' | 'CrowdControl' | 'MiniCredits');
		id: string;
		props?: Props;
	} | null;
	lastId?: string;
	pin: {
		type: 'Bid' | 'Milestone';
		id: string | number;
	} | null;
	miniCredits: {
		runSubs: {
			[k: string]: unknown;
		}[];
		runCheers: {
			[k: string]: unknown;
		}[];
		runDonations: {
			[k: string]: unknown;
		}[];
	};
}
export interface Props {
	seconds?: number;
	dash?: DashProps;
	[k: string]: unknown;
}
export interface DashProps {
	text: string;
	fontSize: number;
	top: number;
	left?: number;
}
