export function handleTruncateAuthors(string: string) {
  if (string) {
    const truncatedString =
      string.length > 35 ? string.substring(0, 35) + "..." : string;

    return truncatedString;
  }
}

export function handleTruncateBookTitle(string: string) {
  if (string) {
    const truncatedString =
      string.length > 25 ? string.substring(0, 25) + "..." : string;

    return truncatedString;
  }
}
