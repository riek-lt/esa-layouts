import type ModuleInstance from './index';
import { getSceneChoiceData } from './feedbacks';

/**
 * Called by module instance class when actions should be set up.
 * @param instance Copy of current module instance class
 */
function initActions(instance: ModuleInstance, videos?: { name: string, sum: string }[]) {
  instance.setActionDefinitions({
    // Blank action that can be attached if connection status is needed but nothing else.
    // There may be another way of doing this, just not found it yet?
    blank: {
      name: 'Blank',
      description: 'Intentionally blank; can be used to show connection status.',
      options: [],
      callback: () => {
      },
    },
    // Timer Toggle
    // TODO: Add team support.
    timer_toggle: {
      name: 'Timer Toggle (nodecg-speedcontrol)',
      description: 'Can start/resume/stop/reset the nodecg-speedcontrol timer, '
        + 'depending on it\'s current state.',
      options: [
        // TODO: This does not show the value, and I don't know why.
        {
          type: 'static-text',
          id: 'warning',
          label: 'Warning',
          value: 'Currently this does not work fully with runs with multiple teams, '
            + 'and will only stop the first team (all other functionality works).',
        },
      ],
      callback: () => {
        instance.wsSend({ name: 'timer_toggle' });
      },
    },
    player_hud_trigger_toggle: {
      name: 'Player HUD Trigger Toggle',
      description: 'Toggles on/off the specified type, '
        + 'used for displaying things on the player HUD graphic.',
      options: [
        {
          id: 'type',
          type: 'dropdown',
          label: 'Type',
          choices: [
            { id: 'message', label: 'Message' },
          ],
          default: 'message',
        },
      ],
      callback: (action) => {
        instance.wsSend({ name: 'player_hud_trigger_toggle', value: action.options.type });
      },
    },
    twitch_commercials_disable: {
      name: 'Twitch Commercials Disable (esa-commercials)',
      description: 'Disables Twitch commercials for the remainder of a run, if applicable.',
      options: [],
      callback: () => {
        // We don't do any checks here in regards to if action is valid.
        instance.wsSend({ name: 'twitch_commercials_disable' });
      },
    },
    scene_cycle: {
      name: 'Scene Cycle',
      description: 'Cycles through scenes as needed and if applicable, usually to be used by hosts',
      options: [],
      callback: () => {
        instance.wsSend({ name: 'scene_cycle' });
      },
    },
    transition_to_scene: {
      name: 'Transition to Scene',
      description: 'Transition to a specified scene',
      options: [
        {
          id: 'scene',
          type: 'dropdown',
          label: 'Scene',
          choices: getSceneChoiceData(),
          default: '',
        },
      ],
      callback: (action) => {
        instance.wsSend({ name: 'transition_to_scene', value: action.options.scene });
      },
    },
    intermission_scene_change: {
      name: 'Intermission Scene Change',
      description: 'Changes to a supplied intermission scene',
      options: [
        {
          id: 'scene',
          type: 'dropdown',
          label: 'Scene',
          choices: [
            { id: 'intermission', label: 'Intermission' },
            { id: 'intermissionCrowd', label: 'Intermission (crowd camera)' },
          ],
          default: '',
        },
      ],
      callback: (action) => {
        if (action.options.scene) {
          instance.wsSend({ name: 'intermission_scene_change', value: action.options.scene });
        }
      },
    },
    video_play: {
      name: 'Video Play',
      description: 'Plays the chosen video',
      options: [
        {
          id: 'video',
          type: 'dropdown',
          label: 'Video',
          choices: videos?.map(({ name, sum }) => ({ id: sum, label: name })) || [],
          default: '',
        },
      ],
      callback: (action) => {
        if (action.options.video) {
          instance.wsSend({ name: 'video_play', value: action.options.video });
        }
      },
    },
    video_stop: {
      name: 'Video Stop',
      description: 'Stops any videos playing, to be used in emergencies',
      options: [],
      callback: () => {
        instance.wsSend({ name: 'video_stop' });
      },
    },
    fast_crop_toggle: {
      name: 'Toggle fast crop',
      description: 'Enables or disables fast crop mode',
      options: [],
      callback: () => {
        instance.wsSend({ name: 'fast_crop_toggle' });
      },
    },
    select_crop_item: {
      name: 'Toggle crop item',
      description: 'Selects an item to crop, or toggles it off',
      options: [
        {
          id: 'item_index',
          type: 'number',
          label: 'Item index (not sure how this works either)',
          min: 0,
          max: 7,
          default: -1,
        },
      ],
      callback: (action) => {
        instance.wsSend({ name: 'select_crop_item', value: action.options.item_index });
      },
    },
    reset_crop_selected: {
      name: 'Reset Crop Selected',
      description: 'Reset the crop for the selected game source.',
      options: [],
      callback: () => {
        instance.wsSend({ name: 'reset_crop_selected' });
      },
    },
    reset_crop_all: {
      name: 'Reset Crop All',
      description: 'Reset the crop for all game sources.',
      options: [],
      callback: () => {
        instance.wsSend({ name: 'reset_crop_all' });
      },
    },
    modify_crop: {
      name: 'Modify crop',
      description: 'Use the dials to change the crop!',
      options: [
        {
          id: 'side',
          type: 'dropdown',
          label: 'What side do we crop?',
          choices: [
            {
              id: 0,
              label: 'Top',
            },
            {
              id: 1,
              label: 'Right',
            },
            {
              id: 2,
              label: 'Bottom',
            },
            {
              id: 3,
              label: 'Left',
            },
          ],
          default: 0,
        },
        {
          id: 'inc_dec',
          type: 'dropdown',
          label: 'Increase/Decrease?',
          choices: [
            {
              id: -1,
              label: 'Decrease',
            },
            {
              id: 1,
              label: 'Increase',
            },
          ],
          default: -1,
        },
      ],
      callback: (action) => {
        instance.wsSend({
          name: 'modify_crop',
          value: {
            side: action.options.side,
            inc_dec: action.options.inc_dec,
          },
        });
      },
    },
  });
}

export default initActions;
