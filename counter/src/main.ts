import { runPackage } from 'devpulse-addon-sdk-v2/runtime';

// A placeholder for testing the DevPulse Marketplace: one cell that counts clicks.
let count = 0;

runPackage({
  widgets: ['counter'],
  render: () => ({
    label: `Count ${String(count)}`,
    tooltip: 'Click to count',
    primary: { kind: 'action', action: { actionId: 'increment' } },
    contextMenu: null,
    presentation: {
      kind: 'board',
      rows: 1,
      columns: 1,
      cells: [{ label: `Count ${String(count)}`, mark: null, action: { actionId: 'increment' }, highlighted: false }],
      participants: [],
      finished: null,
    },
  }),
  action(_widgetId, action) {
    if (action.actionId === 'increment') count += 1;
  },
});
