export function generateShares(secret: string[], threshold: number, numShares: number): string[][] {
    const shares: string[][] = Array.from({ length: numShares }, () => []);
    
    secret.forEach((word, index) => {
        const startExclusion = index % numShares;
        
        for (let shareIdx = 0; shareIdx < numShares; shareIdx++) {
            // Calculate circular distance from startExclusion
            const distance = (shareIdx - startExclusion + numShares) % numShares;
            
            // Include word in shares where distance >= threshold-1
            if (distance >= threshold - 1) {
                shares[shareIdx].push(word);
            }
        }
    });
    
    return shares;
}
