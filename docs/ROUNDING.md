# Money rounding contract

`roundMoney(x)` MUST use banker's rounding (round half to even). This is a
regulatory requirement from the ledger team and is not negotiable:

- roundMoney(2.5) === 2
- roundMoney(3.5) === 4
- roundMoney(-2.5) === -2

The ledger service's frozen conformance tests in `tests/round-money.test.ts`
are the source of truth for what the ledger currently accepts. They are
generated upstream and must not be edited in this repository.
