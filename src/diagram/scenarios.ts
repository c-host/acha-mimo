/** Short teaching scenarios: point of view vs vertical wording (Geographic Space). */

export interface Scenario {
  id: string
  title: string
  body: string
  /** Preverb ids to emphasize on the diagram */
  highlightIds: string[]
}

export const PV_SCENARIOS: Scenario[] = [
  {
    id: 'floors_friend_below',
    title: 'Point of view (PV): moving down from you',
    body: 'You are on the fourth floor; your friend goes to the third. You may describe the motion as “up” or “down” depending on how you align point of view with speaker vs teller. Geographic Space (GS) wording stays relative to that anchor.',
    highlightIds: ['a', 'cha'],
  },
  {
    id: 'floors_friend_above',
    title: 'Point of view (PV): moving up from you',
    body: 'You are on the fourth floor; your friend goes to the sixth. Again “up” vs “down” varies with point of view.',
    highlightIds: ['a', 'cha'],
  },
  {
    id: 'ego_inclusion',
    title: 'Ego Space (ES) folds into Alter Space (AS)',
    body: 'When the other’s space is included in “my” space, the reading ‘to us’ appears. Georgian often uses a simple preverb plus მო- (a “complex” preverb in this diagram’s tier system) in such configurations. Communicational Space (CS) opposes Ego Space (ES) vs Alter Space (AS).',
    highlightIds: ['shemo', 'chamo', 'gamo', 'amo', 'tsamo', 'gadmo', 'mimo'],
  },
]
