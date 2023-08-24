import type { Property } from '../types/common';

const sortProperties = (properties: Property[]): void => {
  properties.sort((a, b) => {
    const fa = a.nickname;
    const fb = b.nickname;

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
};

export default sortProperties;
