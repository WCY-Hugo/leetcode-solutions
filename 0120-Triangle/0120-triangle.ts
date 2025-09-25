function minimumTotal(triangle: number[][]): number {
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      switch (j) {
        case 0:
          triangle[i][j] += triangle[i - 1][j];
          break;

        case i:
          triangle[i][j] += triangle[i - 1][j - 1];
          break;

        default:
          triangle[i][j] = Math.min(
            triangle[i][j] + triangle[i - 1][j - 1],
            triangle[i][j] + triangle[i - 1][j]
          );
          break;
      }
    }
  }

  return Math.min(...triangle[triangle.length - 1]);
}
