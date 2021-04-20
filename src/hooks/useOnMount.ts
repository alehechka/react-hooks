import { EffectCallback, useEffect } from 'react';

export const useOnMount = (effect: EffectCallback) => useEffect(effect, []);

export default useOnMount;
