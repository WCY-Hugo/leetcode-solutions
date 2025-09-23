function compareVersion(version1: string, version2: string): number {
  const verArr1: number[] = version1.split(".").map(Number);
  const verArr2: number[] = version2.split(".").map(Number);

  for (let i: number = 0; i < Math.max(verArr1.length, verArr2.length); i++) {
    const temp1 = verArr1[i] || 0;
    const temp2 = verArr2[i] || 0;
    if (temp1 < temp2) return -1;
    if (temp1 > temp2) return 1;
  }

  return 0;
}
