/* eslint-disable sort-keys-fix/sort-keys-fix */
const EventKind = {
  BOOTH: 0, // ブース
  STAGE: 1, // ステージ
  GROUP_PROJECT: 2, // 団体企画
} as const;

type EventKindType = (typeof EventKind)[keyof typeof EventKind];

function toEventName(event: EventKindType): string {
  switch (event) {
    case EventKind.BOOTH:
      return 'ブース';
    case EventKind.STAGE:
      return 'ステージ';
    case EventKind.GROUP_PROJECT:
      return '団体企画';
  }
}

export { toEventName, EventKind };
export type { EventKindType };
