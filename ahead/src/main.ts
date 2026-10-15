import { runPackage } from 'devpulse-addon-sdk-v2/runtime';

// A placeholder for testing the DevPulse Marketplace: one cell showing "1", its version's mark.
let presses = 0;

runPackage({
  widgets: ['cell'],
  render: () => ({
    label: `Placeholder Ahead 0.1.0, pressed ${String(presses)} times`,
    tooltip: { title: 'Placeholder Ahead 0.1.0', rows: [] },
    primary: { kind: 'action', action: { actionId: 'press' } },
    contextMenu: null,
    presentation: {
      kind: 'board',
      rows: 1,
      columns: 1,
      cells: [{ label: 'Placeholder Ahead 0.1.0', mark: { text: '1', tone: 'primary' }, action: { actionId: 'press' }, highlighted: false }],
      participants: [],
      finished: null,
    },
  }),
  action(_widgetId, action) {
    if (action.actionId === 'press') presses += 1;
  },
});
