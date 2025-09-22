function maxFrequencyElements(nums: number[]): number {
  let maxFreq: { freq: number; count: number } = { freq: 0, count: 0 };
  const freqMap: Map<number, number> = new Map();
  nums.forEach((n) => {
    if (!freqMap.has(n)) freqMap.set(n, 1);
    else {
      freqMap.set(n, freqMap.get(n) + 1);
    }
    const freqTemp = freqMap.get(n);
    if (freqTemp > maxFreq.freq) {
      maxFreq.freq = freqTemp;
      maxFreq.count = freqTemp;
    } else if (freqTemp === maxFreq.freq) {
      maxFreq.count += freqTemp;
    }
  });
  return maxFreq.count;
}
