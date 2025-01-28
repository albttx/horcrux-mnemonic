# Hocrux mnemonic - A deterministic secret splitter 🔐

A TypeScript implementation of a threshold-based secret sharing scheme that splits mnemonic phrases/seed phrases into multiple shares with guaranteed recovery using any combination of threshold shares.

## Features ✨

- Deterministic Output - Same input always produces identical shares
- Threshold Security - Define minimum shares required for recovery (k-of-n)
- Zero Dependencies - Pure TypeScript implementation
- Efficient Algorithm - O(n·k) time complexity
- Order Preservation - Maintains original secret sequence in shares

## Installation 📦

```bash
yarn install

yarn run dev
```
