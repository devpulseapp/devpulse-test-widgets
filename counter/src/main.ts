import { runPackage } from 'devpulse-addon-sdk-v2/runtime';

// A placeholder for testing the DevPulse Marketplace: one cell that counts clicks.
let count = 0;

runPackage({
  widgets: ['counter'],
  render: () => ({
    label: `Clicks: ${String(count)}`,
    tooltip: { title: 'Click to count', rows: [] },
    primary: { kind: 'action', action: { actionId: 'increment' } },
    contextMenu: null,
    presentation: {
      kind: 'board',
      rows: 1,
      columns: 1,
      // A mark is at most two characters, so the cell shows 0–99 and stays at 99 after that.
      cells: [{ label: `Clicks: ${String(count)}`, mark: { text: String(Math.min(count, 99)), tone: 'primary' }, action: { actionId: 'increment' }, highlighted: false }],
      participants: [],
      finished: null,
    },
  }),
  action(_widgetId, action) {
    if (action.actionId === 'increment') count += 1;
  },
});
