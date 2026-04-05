/**
 * Pedagogical mapping of the unit cube edges to the model’s spatial dimensions.
 * Matches layout.json: Y = vertical (ა-/ჩა-), X = მი-/მო-, Z = შე-/გა-.
 * Point of view is not drawn as an axis; it is explained via scenarios + sidebar.
 */
export interface CubeAxisEndpoint {
  position: [number, number, number]
  primary: string
  secondary: string
}

export const CUBE_AXIS_ENDPOINTS: CubeAxisEndpoint[] = [
  {
    position: [0, 1.58, 0],
    primary: 'Geographic Space (GS) ↑',
    secondary: 'Down → Up',
  },
  {
    position: [0, -1.58, 0],
    primary: 'Geographic Space (GS) ↓',
    secondary: 'Up → Down',
  },
  {
    position: [1.58, 0, 0],
    primary: 'Communicational Space (CS) →',
    secondary: 'Ego Space (ES) → Alter Space (AS)',
  },
  {
    position: [-1.58, 0, 0],
    primary: 'Communicational Space (CS) ←',
    secondary: 'Alter Space (AS) → Ego Space (ES)',
  },
  {
    position: [0, 0, 1.58],
    primary: 'Geographic Space (GS)',
    secondary: 'Inside → Outside',
  },
  {
    position: [0, 0, -1.58],
    primary: 'Geographic Space (GS)',
    secondary: 'Outside → Inside',
  },
]

/** Line segments slightly longer than the [-1,1] cube for visual axes */
export const CUBE_AXIS_SEGMENTS: {
  from: [number, number, number]
  to: [number, number, number]
  key: 'x' | 'y' | 'z'
}[] = [
  { from: [-1.48, 0, 0], to: [1.48, 0, 0], key: 'x' },
  { from: [0, -1.48, 0], to: [0, 1.48, 0], key: 'y' },
  { from: [0, 0, -1.48], to: [0, 0, 1.48], key: 'z' },
]

export const AXIS_COLORS: Record<'x' | 'y' | 'z', number> = {
  x: 0x457b9d,
  y: 0x2d6a4f,
  z: 0x6f42c1,
}
