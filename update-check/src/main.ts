import { runPackage } from 'devpulse-addon-sdk-v2/runtime';

// A placeholder for testing the DevPulse Marketplace: one cell showing "2", its version's mark.
let presses = 0;

runPackage({
  widgets: ['cell'],
  render: () => ({
    label: `Placeholder Update Check 0.2.0, pressed ${String(presses)} times`,
    tooltip: { title: 'Placeholder Update Check 0.2.0', rows: [] },
    primary: { kind: 'action', action: { actionId: 'press' } },
    contextMenu: null,
    presentation: {
      kind: 'board',
      rows: 1,
      columns: 1,
      cells: [{ label: 'Placeholder Update Check 0.2.0', mark: { text: '2', tone: 'primary' }, action: { actionId: 'press' }, highlighted: false }],
      participants: [],
      finished: null,
    },
  }),
  action(_widgetId, action) {
    if (action.actionId === 'press') presses += 1;
  },
});
