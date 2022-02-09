export function date(date, output) {
  if (!date) return 'Invalid date';

  const day = date.toString().substring(6, 8);
  const month = date.toString().substring(4, 6);
  const year = date.toString().substring(0, 4);

  if (output === 'time') return year + '-' + month + '-' + day;

  if (output === 'year')
    return new Date(year + '-' + month + '-' + day).toLocaleDateString('en-US', {
      year: 'numeric',
    });

  if (output === 'not-year')
    return new Date(year + '-' + month + '-' + day).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
    });

  if (output === 'short')
    return new Date(year + '-' + month + '-' + day).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });

  if (output === 'short-not-year')
    return new Date(year + '-' + month + '-' + day).toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
    });

  if (output === 'long' || !output)
    return new Date(year + '-' + month + '-' + day).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
}

export const validateLength = (fieldname = '', input, min = 6, max = 64) => {
  if (input.target.value.trim().length < min) {
    return {
      error: true,
      // message: fieldname + ' should be at least ' + min + ' characters.',
      message: 'At least ' + min + ' characters',
    };
  } else if (input.target.value.trim().length > max) {
    return {
      error: true,
      message: fieldname + " can't be more than " + max + ' characters',
    };
  } else {
    return { error: false };
  }
};
